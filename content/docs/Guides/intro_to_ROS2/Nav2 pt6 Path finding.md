---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-08-02T09:55:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 Path finding.md"
title: "Nav2 pt6 Path finding"
date: "2025-08-02T09:55:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=610e348b8c204a281658fbf1066b2ea24ad5e5d173a5b3a802943787c646dfd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=185862121ad12f75d5d2331b8cd55ca1f8c84a8b9f40d4fbb9f53e310139960b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=14e440b9950b29c95b8bcdc7c13f7a23746f47aefe93b55a49fc9ee733076cd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=4f80f32685173934d20b5958c03c828b46dea61ae521cb5af6c39764e39bf92b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=89c6bf9b60125fc69d07c1f8a8f9f9b547d859d0aa7165247b917fe4b23175ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=82dd9091638c28750f756b82beddf5cb263b9d65f47893bbe3f720c72155a116&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=0bae161caeb6b4cd09b48f4d0c544c107ac6bcb7c125db61c2bf7ad725a50f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=b5dd65446a4ace9ad58986948eabc8d7983c60aa181056936e263658cf6ebbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=4e0518cdec42a8cb46f1716cffd72f3d58662bbdd1446a85dc64215ce41c1d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=c86b6bc6032ed1cbdaffc7660c180bce04247623f66feb11d4c37ec27cec844d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=814d1eded58c5078dc8ff499d349eee6aa2d0a4a4efcfb553c803e68b5cc75c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=d0baefb3d72a7a32277e3dad8163e4b81c4839a4f978d42a5c3105b920f41412&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDQX5CY3%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T190839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDba6N7o5hLDr%2FeD5lN1ZDj%2FLA475TFsY6ViHkbz8RAKgIgD2v2TaILVq80SqeZYzC9MvuhvW4zrqMWotBtHuW2ZfYq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDOksg4mhdo6Lsp1fdyrcA370mtNb%2Bt8%2FmGN0Y%2Bz3lxoaIm%2Fgymu4AM6eaOw98kXMFbGLore%2FoTEDaXwnzQlghou7tiyjXiZc2uQHA68YBTPf6Cbr%2BlMZrpzZiJRWyMXxhsBpXj2hk%2FsB6SGxfUNAoA0yCjrSI1XEeMjjXrkr9uTidhIWCan02c6%2BoTZxGUsxPDlYg%2FhmXU3UporfPAAc4x3Irrw7ukn7b8x4e1j7ClLluGoPoewdH82583rAsXUzQTmROv766%2BH2t2uMjxkZjCFywk2049zqLEwFM9UGy2L4bElT5b6qYGPkH0ctYpimdE1yDvzitCUzP1UAbQbEuNbac0v8tZQ%2FADImpal9EuS0Aju8BaswHlQy5UN0JO36CFEb5r27gZK6bHlxjyeNN%2F8RYYNCYcseZDdHPik7%2FECmPvNe0FR96os7OMDDML7Vk5XSP87NNj8OJX%2FmpHh6ElGaNiydai2P7i0%2FQUgYD6kEEy3zC9d9OXp840yFNLtFjo%2BcXafNKIenbUZk8OOJ0zY3U9rwcEEnqRTVeMpLUk7e9npY94PYbp0KLKAWJryPLz0cfNYDLq6Ff7UOJ%2B2U7S8px6cUd%2B2xOZ8JaPEP6xBuyCLP1itZUVjVRchPhfmH3R7hduhqBtl%2Bx%2FTpMMzZvsQGOqUBTSXNIzDHUNetZ3eUeEVY8AIEmo4BRTah6VQ7V%2FYJl7vbORwIKffxXnT2wkpMxqsGbBTTuFXNF%2BARg15vDohyUqpmJ5kAEe6YB35TvSYm8bwEGRQYjcuvUOKYn0eGOcZ3PWHpUVou1Buu68r2tV83%2B0W2HMBREBZjXFt%2BEr1e0kf1tlsD67yJxmo6F9MTmH1UakCm%2F80VsIeFz9IqWLtm3Lc0Xn4l&X-Amz-Signature=b6d7eeefdebaa46fd7c06595a9cd01e6c64d15880622bd15bef9eaf445a524bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
