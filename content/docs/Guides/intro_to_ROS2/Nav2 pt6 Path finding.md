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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=ce10a24aaa1653374d22833868c7ff9608401710aa6179384677c79c2a2f1762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=95f87a563729c28aee0d1569deef8335dde2b2d5402e8cb8a4b7f06a2274e73d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=f39d12af68e330e502ef7b5f9de237aa0fcae9728bcb07b8d300e32857a9b60b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=1bc57bb2729ed80ac64cd52373785d2a6bd1908bbc372517ac845d18a508fd99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=65cbe7412dc578ca0eba042734c9c1a39eec455f945739c00e0f081940a73cb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=43bf530f51d76b35d703c21b4ac1005cbd46e463d9a78d8ea8aa9312832e3251&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=93e43d2b4aa937a3f75080b95d559d028e0e923003d1b8c6266ca915db73ddbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=88972c602c024fe47b8a9f275aabfcae3fdf29c6a782dd8b4c0f59d77a455c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=e934b7f885174db8c9f9bc198671c0f4a21f23041ae97f3413499080435323ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=6c2b4091cb34fc1b07b0ab8f44d1748a352c2a621da289f89a4254ea01d4cac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=d73a9954e37f47edc43130f672878ed74cbd10c149d8dd2d3925ccf19d9e7c69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=ce83f12ab36e588f833633f8db9d5e5b7c944c8fc4cf0bc71a39a83d1a27d39d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UCTLQVW%2F20260321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260321T020257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFrgFmdiaidZ7nyXnQZLlJHjy73um%2B%2FG0dq8WVsAZhwhAiEAyHsy28fXoUiA4kpo7V5nKY%2B1dFstlchSrTpho%2F6GzkUq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDn7CjJHM5qGylIw1CrcA1P5ZRBOGS3fFf%2F6qvlH9nLKVHZ7kxzWdHeG9JOzz%2Bl02ufAYMsNMgRDVLshgllzjqcoSKfJ7Vy5nqNFS6QrhzIcb4Rm%2Fe05SIKph33Cv%2BHKc9UjkMhTqgTy5B60t0lngKFNfYcD39UJe6pbu30259rhxDoPjEq7r5G5d0zzo3KzIlw09Db%2B27aqfTAwzrbkXIr36vQcCdP6oi06XRfVCY%2FcQgY1O%2FQMGQuMK%2FC1Sxy4BoFN%2FJJOl%2FNnQtmyyicbwFjqPUjySuaS2FM5iVviBbagO5uMLpLIh64h5nelKeEFB97rMsIoGf0kyo8htNm4Wvss%2Bkv1wA1JtNSTkLUQP%2FAXph29GwOY7L4TsyZPO1AlWeVOuGv%2Fsv%2F4zsdxz6%2BRmLnfdzV4L6J0MH3BrW5Vr4jdeE8Q6gwQV4viRO8zDFkps4dNkhNTDTLx7Qz%2BIzGfcdpGIzz%2FJdRA0Hmz3TuVR2p%2F%2FmfFvOVKJuPCWXmDHNh6NKtoZ7ilMLRLmHYoYEcjvbZ7Tu0ENS4Lh5LmoY6CZUimZnkL1oDyb6wcICm9wPXCEeX6HHij%2B53ugcEKus1QPUnV5tF0D3jh8MsJZKYZ5j8KD6rqwsUFOyTt0zxAWB8euOXJw0XTMbIIjy78MO7c9s0GOqUBRD7DmZPiAugn9QsAXBVugOAvsyDfsh76M8k4xiSxneKSiCsKVYnUP2pQOwEkll5pgMb6%2FnzScbBzMADS5ap3njhzU6E4hJ9dQE1gorwow3SMetCbrm19G2n1N4chegMa3NIFHsK3ylP%2FP4hy3Sp41TOe46NHrZGAbmX4pUXQ0i8Rv9BYS0rgrd1TCYFqKCr6xhfbwNKT%2FFvW3a%2BucR4JEOOQ0wC4&X-Amz-Signature=6905a8701175b736e52aee197034861209d309d758ee982d2c4463b90d217216&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
