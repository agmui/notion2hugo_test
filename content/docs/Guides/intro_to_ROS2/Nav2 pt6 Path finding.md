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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=9944f599a9206f0611db1d11e2a91c5f190e0dfc0e777c17a772e29da8d0c3e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=2d12a24f9af30a0aec04a90c5a79e370707a6472ac35a83420673eec60226d0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=cce2e4f67fbd9039746fa4db1647dc46946dba2a703d05f68e94ea1e1970ec63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=dcf277727b9ecd19c89e0f6f82b982564dff96e8bed33bfe800604ab2d7d88ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=9681f251ce880f07f53a5b449c7613407c5807cabcc38d035c4f2a6415281b64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=03511feea81f4a5d2729b0647aa0ba6666efcd11789dd9e8fabe90775c8676f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=4f47c5141e6dc5746c21dc86f408580cbee2063def82be7f1e685bb51f43004f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=ecf17a621a7b0c26c533f777cc5d8b1d310cb06f678c195d53a2c7358887e463&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=ca1a31f03577b31968b44fdeddecb3ea69253a5155e13d1d9eb6ce15d2bfef54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=deccff29f71fcaef823f8397ff9090eecf35efa5188ba671c2b67fec8f0b1e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=44c77b26ed39d897ab7f939ece66f0327f8313a67dbdc3914092d249cbcd7a41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=26c5a26fdda0f49119685eea4ff339a075d3f40cfe48959752fc031598a3e8c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655UMDRBE%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T072014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIBXyBExweJHX3ACLzZnb5cVAjB72jY%2Fqhsrtg9s76mNsAiEA4FqtlEjFSOfwY1ZKRSfd0BgzNoQQV2lENpOWcaFrNxUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDFvertT7YiAWD4tf8yrcA4TE%2BFdjyyR%2B6Xck37C8sTATN%2F7Wqc5FwbZKPp49MYTYF1ZQGx%2Fhc%2F7PXZC8f5O%2B%2FsvwXSRhw8tF9txkfMnz6tdEBlXwg0hzXUusrJTALVDCDIa82DFxtWAyUlModfqw5mDlIyWXxhyfdgotXbM5TdQVQgwJl8prFu37xECeGhEeUVD%2FBWHgEF0paE9VjDYfk70Y1ik%2FN%2Fm3jIelQxvYzvW6m%2BNp6tFktzDNG3Sd2jYDOFBO0rvo6VgyqxTZ16Y2GC1MP4grqIDDLEWrFFisw7Rq98KmhjA17IXb7xCb7RTi8bGiTWj%2FBr2dU0LaQBx3rsyubVUZA3ZVmNJVDcRyz%2FzbDov5hB5C4N%2FuQoasMnHIhZxpIvbuvn4tibWRXtPAGkXa9pT32rJQbtp7LbjwJUMcZstyr53ojSe%2BP8QFBzNx4y0iQkg0hfvq5V5KC1MHRX9h7j4kgBQDLZoYAfCHgDKCDKbBFMmFV%2FoEBDH0W7RFiH14NvkVdzONUUQdGZCgMjOWeYQblhp7dPjFdR1dUhEoZDYcrrmzW12yloekqY69w%2Boj83UNXBTN3N7eT5tg8kKhDFjIKi5jp0uGREGLip8Ak%2Brfdd3ySPfEsir2vjwYMiXYC58JuxoR%2FvgAMJu3wcQGOqUBAm7mMlJqT%2Fb0qaxILRyb2FVqGbwqKk%2Bx1loFGGICHjw7Ir4oFITl5njtJKmJBgG2SsMIE35pg%2FCd8LRcS0H0zNjZYG%2F%2Fshj6ShE4w0d4L7VowA%2BRqNyzpwd%2FXTFLFDboeaWo7BGm8zNYN5CqkMLUiUfnfdv4WD8nUAf6T6Tt%2F19lnZve%2BHVih9LS7R4u1%2BaMxDvk3ZQnhdcHx75ytsXtPJ0YRal%2B&X-Amz-Signature=b22c3e83908d1de0c3df3905164bc9a4bb25198748090aa66572e741afa1abc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
