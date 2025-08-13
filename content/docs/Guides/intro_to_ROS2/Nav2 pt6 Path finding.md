---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-11T14:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-11T14:55:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 156
toc: false
icon: ""
---

This part of the guide shows how to finally add Nav2 to our setup.

## Install

```bash
sudo apt install ros-$ROS_DISTRO-navigation2
sudo apt install ros-$ROS_DISTRO-nav2-bringup
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`nav2_bringup`**

nav2_bring up actual spawns a lot of nodes and topics but I have just shown a few of the important ones.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=9f3e810018d038c338db246164b33e84add9446010c673237ef7a3dccc832fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**     | **Type**                  |
| ------------ | ------------------------- |
| `/tf`        | map ⇒ odom ⇒ base_link    |
| `/odom`      | nav_msgs/Odometry         |
| `/map`       | nav_mesgs/OccupancyGrid   |
| `/goal_pose` | geometry_msgs/PoseStamped |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

{{< /table >}}

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=8ed5ce8e88192d7cd83937aa7d37d006c54f264fdbe57d679c709203579cb0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=019c76025df1c9fac6edfe13e28d2328335ff797e6454209922f112ee614edcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=f6dcf4f461a71a1494642befb2b8af13bf8b30480d8e31d68ddae85874207a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```shell
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=b1d6fe53c6ff94b1f147261095e88be1b8dc3d5718188906b18cfca677d379d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=d10d0da2fce99290d166d66a04514cbeca68382c058b7b4ee2f8ee7c4d33294f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=fdd97da2c131c50732484ed7abf7fb8470532af5b018c0fb8cacdfe5f7a61957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=7afedab83748568d38c91a364022ef0609e56856040d78461caec42fe9000ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=22b70af177d545cbbb13ce1abfc225a0e3108707dc1053d1a19c716249d2a8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=b1fb2394b5eb38a56c35a350344a3f91353e242fec1d2a91733064df2a6c32c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=c55b4e3afc3c76960dd25cc7346fe5b524830bbd524934d97d9054221ac91f27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=4da26a42fc34a20b23e001f5ea3130376bc4ffa665bba6a6a98fcf690f167d11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOPMTB2K%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T190818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCA9qveFi97XjdOlSGvAfDeecTx%2B%2B%2FX9s5YjiZ94X0LmQIhAK94JZ3lpWkfduQGBNtCCDuen3lFsYznfG4sylzD3WBcKv8DCDMQABoMNjM3NDIzMTgzODA1IgzLx9khih3N1rY9SG4q3AM%2FdOlykIDKVflqcpez8uRN2NN5BkX%2BiH%2F0BRssz51yRKIEGAFKWUkJi0O0xzD6lLgBvPx41J50F2dvZr0CmRO7avBroWOvi5j2GFstXoAkyMn7xVC1H6PHCuMgY5du5Nh8sUdPY3Nbog1QfVZqqEX5m%2B0rWEFJPECnUCEFUYYQtyEtinP2sHsgg%2Bxdrmu2BevDszzCgjVGUwMIklxnlPOfAyqVkXK5osguB%2B53%2FFEmaq9RZrWDPLgMPkDs7PYM4qLv3IPLkQGkukSHLE3TP%2BfBk782ZDYqN284FJMgmKI1VQUyT%2FnL6EPhHiMVUBrnZSGvYguLAwQoyAx6LRcZ7rhz9McVlhiMMSeHEp7%2B9Epzl%2BBHaIyXBYftvp5VQ9RoVWw1hjiyVvOm1Ilij5DOZcArEn9JFxyJNN6Zfy4YX6R4NZM2PqTqnhQd91M0WLwxpHHmc6g%2F94uUiqTLUj0sFYcmL1tStN4Coj%2BIBnZqbaY4bgyIRpsjQWy5r5fQsgn%2BaeC054i8khtTKoAhVlV2cvTqQAoaZUgSCqQ9cvbwkK2VrgRxkzgWhZlNxg23Q8QtvLCkzP82gdGVIdn%2F37pcr3RAxUVfbw9F833aI23XkdI7sAsOdyNLDgTR6mrDUTDyn%2FPEBjqkAV7OdShfnyCEqwDKo6SYKFblyEMRcDZuZeSIul3uremzpARSaOta61iZ6X8C3eahvBNS0JnKwLqLjS1oYtIZ48%2ByFP85D9knH7eRSgUpPlOJFZpgEkSBaPIblc9MjeVtQ60zQBgYKwNxwDbFOSxWJKHJDWA9hqdN3GyUiHINQYxsctmHfsuqkMlqRY%2BpajRyj737EKnVIRSSFc2uxWwL9djWgUsL&X-Amz-Signature=2110f01433d43cefcde23d730ff4486fde21bcd1bf636e0e0c03cb02be9eab40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python
  
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file 
    nav2_yaml = os.path.join(pkg_share, 'config', 'nav2_params.yaml') # gets the nav2 config file
     
     ...
     
    nav2_bringup_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("nav2_bringup"), '/launch', '/navigation_launch.py']),
        launch_arguments={
            'params_file': nav2_yaml,
            'use_sim_time': LaunchConfiguration('use_sim_time')

        }.items()
    )
    
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        # ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        # gz_server,
        # ros_gz_bridge,
        # spawn_entity,
        
        lidar_node # lidar for physical setup 
        
        slam_toolbox_node, # providing the map => odom transform.

        nav2_bringup_node, # starts nav2

    ])
```

If you have gotten to this part of the guide:

## 🎉CONGRATS YOU GOT NAV2 WORKING 🎉

However, now there is a lot more tuning that needs to be done

# Tuning Nav2 settings

Depending on what your final robot looks like you should change the `footprint` and `robot_radius` parameter. These were the green outline in rviz around the robot and are used to calculate the path finding on the 2D map.

[Guide for footprint tuning](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html)

All the other settings in the `nav2_params.yaml` also need to be tuned because the `nav2_bringup_node` launches multiple nodes each with many parameters. Here is a general [guide from the official nav2 docs](https://docs.nav2.org/setup_guides/algorithm/select_algorithm.html) that goes over what each node does and how to tune them. However, the next guide will go a little more indepth on how to better turn the `nav2_param.yaml` file.
