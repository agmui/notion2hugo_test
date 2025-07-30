---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-29T17:14:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-29T17:14:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=cbfef97a1b676d2443cdc59291ea120abf667853aec5a4994e18c5ab69e79e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=255f08ad5286de31a63a8437231c56daa98ec198398a7d1c8a8c87248db92bd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=e988072b97bd0a1e90fb3775a5fd66c8b54dbe55e51fe85c54fe38eecb1115a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=9660bb30970a452642227f901688c962c381599bec230f8eecda993a163d0804&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=1d0139f191afa95343393c46515b00b77177b2d8d4e634cf26e8d35154aa9f4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=623ce42ebef1578ab7a35afc8f6301a8e3364de858e9e207e473caaf457e5ce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=7a31bc6d83c15700c324cc5977597b4d3d7323ebe978e767a3d1c53ab251cf0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=eee1fbdde2986a54867031055a730dd99fb783ece12de20d5c63c851833c1ab4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=b673e35aa2f29bb5379889976ae7e06c23ea75439658c7b5aa541449b93dc8f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=80b1304428c1ec3ffcac1fc0633e7d6a820facffc6b6afc97566abe6ac0edb47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=53432629b61bb6b383e15117a998a7b4fb037760821c26fba6e49d6b3e471f55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=6c7e284735a2ded45dc397b1946a2abf086efef8d6e005e67b4833eb91e7204f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJQNGXL%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T052043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6PQ87PU6Bx6ugR5GJr6IwhH3D85C0qUxTrh%2FOp2WGkQIhAPmDmpiVidS%2BLHlHtbW%2BUDdPx6eZD63fQHulWPn5iJTzKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwJZ10NzyxRIJzeLY8q3APLKDxLVOtyTsgFnDCqAduO37af9btTywuuGHz3eqX6FDA9LNUCaHyFYNOQhiyS9DYW5uEmQNp9bs9RVK5X1qi4dm6TyNTO6Qt3JB1GnwwseLsnRXM9uYzRuG9MgGoO1sSBDlg0hwy49UFr9omLMErHbLQ%2BAVsh%2F0hsduFMWyX%2FnvXSpTNwHq7%2FtSTuJZ91%2FquLvSpHIQB42fUwgaqLlgfQz5M%2Ftuifl1mhf8fTS0uq0kDQRX%2FJjTaiAQq%2FdmJRHpBGkBRkYrg7aSvhkFFcEpFvLYZBgghivXyImM%2BbKk6EaPncpEeO57t%2FXbqJUwFX3DLmA9vjToAgyjqSB6byG8W%2BQcmaCMhMwIJsq34SU2iaIfVygtbk7wdF7PF4TE5nkgwWJral0h6JEXCObEq8RCbDL0k9kXv8YRgZrZUDsGFBSMM0aBf1sgSxqHEzlRPrrIwLi5YAUy3ECF5eQDMuuEekI4p1%2BLotnic6yHQ9eWpH4xj4MKlBdK6ChXiyHwfmb1VWCTzds%2BJ39Vif9BveeGOSKhYMmcI8QXwAIi1TijTM04j4lQJ4b4ZRKySAtryFJHvWgLz%2FCJDeeLznm09kZDJhf6p26c%2BN9JyLKPQ%2F8KPDEWEF2s8nnaolnhZVtDD%2F8aXEBjqkAa0GOErJW%2Bfiu%2BkuzLpNAyusedVWGdNY%2BcEbnKi4xO5JvFflLEmV292tgEpGTzlfkVmeD3rkwGJSwN8xAPlBI3Es7HxCApZ6kZtliuc2uZaXID9Zl5DSNJDMNfr6AxND%2FJeglfpB6jLLZcXuxy2VDHwwsJHO4bndPPNl1JAwL4u51p%2BXa%2FroHq%2FbPTTxy8SPMW3uwSKZA0jkbhV4MeIww20yEJrB&X-Amz-Signature=1ec0372c51a580b5dd402b606552a21b3472dff6dcad6e94f85e7fae786925ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## updating launch file

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

# Nav2 settings

TODO: change footprint?
