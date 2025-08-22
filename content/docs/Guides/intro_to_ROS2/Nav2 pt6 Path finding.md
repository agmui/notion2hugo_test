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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=aa794959d514efd7c6cedbcc7ccde9e5b17e8f8855daab30328184ec1441d112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

| **Name**   | **Type**            |
| ---------- | ------------------- |
| `/plan`    | nav_msgs/msgPath    |
| `/cmd_vel` | geometry_msgs/Twist |

#### Params:

| **Name**       | **Type** |
| -------------- | -------- |
| `params_file`  | file     |
| `use_sim_time` | bool     |

#### description:

`/odom`, `/map`, and `map => odom => base_link` tells Nav2 where the robot is

`/goal_pose` is where the robot wants to go

`/plan` is the path generated to get to that point

`/cmd_vel` actual moves the robot’s wheels 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=4cd7f6a0014182c10e08155eb01ce8bfc42f3fb679a9577c706d0992164256fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=1734da708486e7dd5c29f68182cffa431f165c0fdcce01bb4eda0133790d0628&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=5d8a235f91572eec12ce81d738b39e3ac8efc63abbf95c96883756b00acb8e9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```shell "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=<path/to/nav2_params.yaml>
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert context="danger" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=05b0db6a55e99122a96a8da2001c9d398fff2711213c561f644d88097327fb8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=ddc681f60d6afc2436fc6d64fda07e2a4ff79a614cf53aa49ff4834bf7056bc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=2e024c513a6dd6a7c8718f9ed02bbe93a34527ffdd1999ae21f8c342f18a4c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=aaf3b6eab6c60bdc3b21642fc189518f97fe88eea4aa6738fe3a2ff155d048d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=97d7dfbbb160fe9ed73956237022898cde2640fb4eb59eb7b245f0b53aa028cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=8f53b800b0c5a1cf844feb38510c6f0b2743d85df025f2d7e51f1262f98d7866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=a3b9f7c9ef47b412d8b24def70fea5aa074f2a7c3b0b05e265c14c8fc2b61feb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=2fa112ef1b5f5eb5cc73a2c9bddd44bab3af7f57680379646a9c8b8b625cd803&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZN6DC2TB%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCesuCYNcCjxW0ZF7OMdWOUF2Fg0JA%2FFXvd%2F%2BAPvYgurQIgfikLVdmzrM5D18mJO2uqbuAQ%2BGp%2F5%2BJJ1GAamhDlvRkqiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFi9CueIzjgT58Yv4ircAxvwHUVT3%2Fqid4aTD4%2BVxFhnL7fSYGCm0HtljEzHtBcGdyPgkeQ5AcmYuXaUUqdpnzyL%2B%2B0%2Br0GSwan%2BjywL6B1GZQQg5T5zke4OgrtYgbb%2FN%2B458%2B3t7jgEyoNjY0ZFKGr4%2B84CeqJIt2%2FSHM0EAL6GoATp5G96tpY2a5W9mlLQnGFdV2w3sXuUbgG3%2F4JEhodRJGEPMqz5Cto1Vb%2Butq8%2FkfOJHC0B8oPVhHDJWwmjTuzIHPOq%2B52se9UwVXrTXFCmaVwBzW15SM9GqS%2F6wHXuRZLG0c5hBhTPvDjtrnDpD5GMkaVuVX1NXMb6iXUJVUR0%2FYNnNIV3ZNrH6kwn8odtl8WkisaJ%2BAeJybL0a3WvD6SI%2FyBgwiygCUfMNklwj4T%2FF0GNrI1o%2FWAaY8DaJo93iFCfXPs4rN7C5hU%2BT16%2BS%2B%2Fm8NY%2Byfs%2F%2BJAZq3Jas9MlBk43PrzJPyfnZtBoNoGzCkvNavlK5iUDr6k0oLgqH6%2BNHu4hL%2F%2BgSPxbkBpVJCwFkZ74xMLKc6UaOH25hKXqmw%2FDfKrWiK3EE9o8VU3TC8JCGkG062ShtIWXM%2Bx6cwK8Ct7jALkdwYTUjk0brhXePepc315QeYFU0LLMs9Pr%2FBDNbgoEZOUXkolaMIrznsUGOqUBZriMFj0zbQi9sZAFfBOVTYRCKGg9sX4eO99y0qz5indxSL8V1hpmvKsxxZa6h1CdeH%2B%2BoXw9Fqnfk27n4MVdTF6uFw3%2BQ0ZSlZmSjG5Jb6nZsMXReYjdEkBw6u7M2mWTqGqRTggA%2FB4XwLhT3mmRnewgi1lfiXj3pJ2G4CG6ii%2BuIxNAZ4UBgMNuIeTyguGY6tMem8cLdXEC0s53mhiIXLlUZUGG&X-Amz-Signature=d81692dc5a4ae5aea6c5766716ece396ec2b91e67c0fb255f8890f4a3c8041bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 2 different terminals run:

```shell
ros2 launch mbot_pkg display.launch.py
```

```bash "1-1"
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

You should be able to publish a goal pose in rviz like in the section above

If you need your robot to autonomously put goal poses down, such as a match start in Robomasters, you just need to publish `geometry_msgs/PoseStamped` on `/goal_pose` inside of `my_node`

## Adding `nav2_bringup` to launch file

```python "1-9","9-9","9-12","12-21","40-40"
  
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
