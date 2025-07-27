---
sys:
  pageId: "231da3bc-6297-8005-a7e9-c7e339e6e388"
  createdTime: "2025-07-15T23:34:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt6 path finding.md"
title: "Nav2 pt6 path finding"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4CIJYV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICJr%2FuSvfH0lyVmCkiax85nBiOA1pePvtgqZaOTR%2BtgbAiEAzMj0tR0q90YSfQ8Fj%2BdO1TBye139YcRg1Bk4v5QFzpUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIToQn3vygsTAThT%2FSrcAwquabpVEtu%2FFiGEKSAjgY3bXYykaWMLperaql0C3YbDhoPHhGWQNNlsHQ7jb8QGClhvk1kv1Crxfc%2FOl93RfTjNGS4%2B31z01yT1ORi39GGX8vMB4ATEkIiDr0KTmzPzm%2F7pjoSlKMnUppfIzuKcH2CgqGEU5STLnjyM5Ba7u%2BORjy295X5pYDcJUqpuECbbuJXgYiKES9Wm0zsf0FHcLBSWT07TBtc%2B4Lkbu4JjXY0AP1uZW%2FGjiCceArmxDBLEIJVkFVRC0gWoKjfnswBLnVsgBEcpywZfd%2BRdkv0B30FsBCEWHzIeROKLIfvFYEWrqZ9t6%2FxLL8%2FhW8K6n4%2BKIJdqRzL8tykSZmghO28L%2BDiRU07L5DW5BSeBrpV7n9N1MDmNkoJ2wEfEnsIr1Whr29ryadc8A%2Bdkx8leipvF8K%2F2KbnsGrUuve95A7DYZ2DPmdP36qy0W13CR%2FzR%2FJFBw7tQZWmYoRhivzdhJvFj%2BzkQvQyyv1bvWoqdcbKjlsh1QcjXMWG%2F4Rvu1aZfwF6Ya%2BwFnF4p6lXwwjZQsxndYY1RTjzKCblrmJ7jmJuAA8IvXIrxIjXtd3YxxEBEW1%2FOmVE%2BKMQi7WPJCbbVm5lNDFXT3NCPOIVgLutGcfnSMNK6lsQGOqUBSUzYyM5AYZi%2F5InsZwZeZ7ppyFTvizj5u%2F73rSRiRZm3DG4n2h4zCJi8M8YXh8NP9cMfqTYX%2FC6B9NnTT5VtXNh0pYJXoHhBPuy4Jx5pCQleJ36KXToPQ%2Bj1u9M3SNfAsnYeBPLFFjXnXXliCV0UvGw9nxgv58sEqQqYORPvTWCATVFjcaPm1lVvHH%2FtoCtHBGyAq3RJOrbWH881ylQOAkaeepbs&X-Amz-Signature=71f19ff55b90a9acad4f806a654b2d1c618aed676043398d6cfe5579d14eef50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**                |
| -------- | ----------------------- |
| `/tf`    | map ⇒ odom ⇒ base_link  |
| `/odom`  | nav_msgs/Odometry       |
| `/map`   | nav_mesgs/OccupancyGrid |

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

Given `/odom`, `/map`, and `map => odom => base_link` outputs a path to the destination given in rviz on `/plan` and collision avoidance on `/cmd_vel` 

{{% /alert %}}

# Gazebo

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4CIJYV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICJr%2FuSvfH0lyVmCkiax85nBiOA1pePvtgqZaOTR%2BtgbAiEAzMj0tR0q90YSfQ8Fj%2BdO1TBye139YcRg1Bk4v5QFzpUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIToQn3vygsTAThT%2FSrcAwquabpVEtu%2FFiGEKSAjgY3bXYykaWMLperaql0C3YbDhoPHhGWQNNlsHQ7jb8QGClhvk1kv1Crxfc%2FOl93RfTjNGS4%2B31z01yT1ORi39GGX8vMB4ATEkIiDr0KTmzPzm%2F7pjoSlKMnUppfIzuKcH2CgqGEU5STLnjyM5Ba7u%2BORjy295X5pYDcJUqpuECbbuJXgYiKES9Wm0zsf0FHcLBSWT07TBtc%2B4Lkbu4JjXY0AP1uZW%2FGjiCceArmxDBLEIJVkFVRC0gWoKjfnswBLnVsgBEcpywZfd%2BRdkv0B30FsBCEWHzIeROKLIfvFYEWrqZ9t6%2FxLL8%2FhW8K6n4%2BKIJdqRzL8tykSZmghO28L%2BDiRU07L5DW5BSeBrpV7n9N1MDmNkoJ2wEfEnsIr1Whr29ryadc8A%2Bdkx8leipvF8K%2F2KbnsGrUuve95A7DYZ2DPmdP36qy0W13CR%2FzR%2FJFBw7tQZWmYoRhivzdhJvFj%2BzkQvQyyv1bvWoqdcbKjlsh1QcjXMWG%2F4Rvu1aZfwF6Ya%2BwFnF4p6lXwwjZQsxndYY1RTjzKCblrmJ7jmJuAA8IvXIrxIjXtd3YxxEBEW1%2FOmVE%2BKMQi7WPJCbbVm5lNDFXT3NCPOIVgLutGcfnSMNK6lsQGOqUBSUzYyM5AYZi%2F5InsZwZeZ7ppyFTvizj5u%2F73rSRiRZm3DG4n2h4zCJi8M8YXh8NP9cMfqTYX%2FC6B9NnTT5VtXNh0pYJXoHhBPuy4Jx5pCQleJ36KXToPQ%2Bj1u9M3SNfAsnYeBPLFFjXnXXliCV0UvGw9nxgv58sEqQqYORPvTWCATVFjcaPm1lVvHH%2FtoCtHBGyAq3RJOrbWH881ylQOAkaeepbs&X-Amz-Signature=14f0a1ba57206bc5be14ef082102546110e2f17345a4da140e476d4550fbd4fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4CIJYV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICJr%2FuSvfH0lyVmCkiax85nBiOA1pePvtgqZaOTR%2BtgbAiEAzMj0tR0q90YSfQ8Fj%2BdO1TBye139YcRg1Bk4v5QFzpUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIToQn3vygsTAThT%2FSrcAwquabpVEtu%2FFiGEKSAjgY3bXYykaWMLperaql0C3YbDhoPHhGWQNNlsHQ7jb8QGClhvk1kv1Crxfc%2FOl93RfTjNGS4%2B31z01yT1ORi39GGX8vMB4ATEkIiDr0KTmzPzm%2F7pjoSlKMnUppfIzuKcH2CgqGEU5STLnjyM5Ba7u%2BORjy295X5pYDcJUqpuECbbuJXgYiKES9Wm0zsf0FHcLBSWT07TBtc%2B4Lkbu4JjXY0AP1uZW%2FGjiCceArmxDBLEIJVkFVRC0gWoKjfnswBLnVsgBEcpywZfd%2BRdkv0B30FsBCEWHzIeROKLIfvFYEWrqZ9t6%2FxLL8%2FhW8K6n4%2BKIJdqRzL8tykSZmghO28L%2BDiRU07L5DW5BSeBrpV7n9N1MDmNkoJ2wEfEnsIr1Whr29ryadc8A%2Bdkx8leipvF8K%2F2KbnsGrUuve95A7DYZ2DPmdP36qy0W13CR%2FzR%2FJFBw7tQZWmYoRhivzdhJvFj%2BzkQvQyyv1bvWoqdcbKjlsh1QcjXMWG%2F4Rvu1aZfwF6Ya%2BwFnF4p6lXwwjZQsxndYY1RTjzKCblrmJ7jmJuAA8IvXIrxIjXtd3YxxEBEW1%2FOmVE%2BKMQi7WPJCbbVm5lNDFXT3NCPOIVgLutGcfnSMNK6lsQGOqUBSUzYyM5AYZi%2F5InsZwZeZ7ppyFTvizj5u%2F73rSRiRZm3DG4n2h4zCJi8M8YXh8NP9cMfqTYX%2FC6B9NnTT5VtXNh0pYJXoHhBPuy4Jx5pCQleJ36KXToPQ%2Bj1u9M3SNfAsnYeBPLFFjXnXXliCV0UvGw9nxgv58sEqQqYORPvTWCATVFjcaPm1lVvHH%2FtoCtHBGyAq3RJOrbWH881ylQOAkaeepbs&X-Amz-Signature=76b87d795a8002d3ca7405d512f991c5b0fadca878c1b9f2ef5574dd9692309e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4CIJYV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICJr%2FuSvfH0lyVmCkiax85nBiOA1pePvtgqZaOTR%2BtgbAiEAzMj0tR0q90YSfQ8Fj%2BdO1TBye139YcRg1Bk4v5QFzpUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIToQn3vygsTAThT%2FSrcAwquabpVEtu%2FFiGEKSAjgY3bXYykaWMLperaql0C3YbDhoPHhGWQNNlsHQ7jb8QGClhvk1kv1Crxfc%2FOl93RfTjNGS4%2B31z01yT1ORi39GGX8vMB4ATEkIiDr0KTmzPzm%2F7pjoSlKMnUppfIzuKcH2CgqGEU5STLnjyM5Ba7u%2BORjy295X5pYDcJUqpuECbbuJXgYiKES9Wm0zsf0FHcLBSWT07TBtc%2B4Lkbu4JjXY0AP1uZW%2FGjiCceArmxDBLEIJVkFVRC0gWoKjfnswBLnVsgBEcpywZfd%2BRdkv0B30FsBCEWHzIeROKLIfvFYEWrqZ9t6%2FxLL8%2FhW8K6n4%2BKIJdqRzL8tykSZmghO28L%2BDiRU07L5DW5BSeBrpV7n9N1MDmNkoJ2wEfEnsIr1Whr29ryadc8A%2Bdkx8leipvF8K%2F2KbnsGrUuve95A7DYZ2DPmdP36qy0W13CR%2FzR%2FJFBw7tQZWmYoRhivzdhJvFj%2BzkQvQyyv1bvWoqdcbKjlsh1QcjXMWG%2F4Rvu1aZfwF6Ya%2BwFnF4p6lXwwjZQsxndYY1RTjzKCblrmJ7jmJuAA8IvXIrxIjXtd3YxxEBEW1%2FOmVE%2BKMQi7WPJCbbVm5lNDFXT3NCPOIVgLutGcfnSMNK6lsQGOqUBSUzYyM5AYZi%2F5InsZwZeZ7ppyFTvizj5u%2F73rSRiRZm3DG4n2h4zCJi8M8YXh8NP9cMfqTYX%2FC6B9NnTT5VtXNh0pYJXoHhBPuy4Jx5pCQleJ36KXToPQ%2Bj1u9M3SNfAsnYeBPLFFjXnXXliCV0UvGw9nxgv58sEqQqYORPvTWCATVFjcaPm1lVvHH%2FtoCtHBGyAq3RJOrbWH881ylQOAkaeepbs&X-Amz-Signature=b5a42dd1516f44d2ce736927d0f9950a55797d5472fca6ab64b9573925dcad81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

{{% alert context="warning" %}}

Remember to **enable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `nav2_bringup` ran correctly, in logs wait for “Creating bond timer”

## rviz

{{% alert icon=”👾” context="info" %}}

# YOU MUST HAVE MAP SELECTED AS FIXED FRAME OR ELSE NOTHING WILL WORK!!!

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4CIJYV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICJr%2FuSvfH0lyVmCkiax85nBiOA1pePvtgqZaOTR%2BtgbAiEAzMj0tR0q90YSfQ8Fj%2BdO1TBye139YcRg1Bk4v5QFzpUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIToQn3vygsTAThT%2FSrcAwquabpVEtu%2FFiGEKSAjgY3bXYykaWMLperaql0C3YbDhoPHhGWQNNlsHQ7jb8QGClhvk1kv1Crxfc%2FOl93RfTjNGS4%2B31z01yT1ORi39GGX8vMB4ATEkIiDr0KTmzPzm%2F7pjoSlKMnUppfIzuKcH2CgqGEU5STLnjyM5Ba7u%2BORjy295X5pYDcJUqpuECbbuJXgYiKES9Wm0zsf0FHcLBSWT07TBtc%2B4Lkbu4JjXY0AP1uZW%2FGjiCceArmxDBLEIJVkFVRC0gWoKjfnswBLnVsgBEcpywZfd%2BRdkv0B30FsBCEWHzIeROKLIfvFYEWrqZ9t6%2FxLL8%2FhW8K6n4%2BKIJdqRzL8tykSZmghO28L%2BDiRU07L5DW5BSeBrpV7n9N1MDmNkoJ2wEfEnsIr1Whr29ryadc8A%2Bdkx8leipvF8K%2F2KbnsGrUuve95A7DYZ2DPmdP36qy0W13CR%2FzR%2FJFBw7tQZWmYoRhivzdhJvFj%2BzkQvQyyv1bvWoqdcbKjlsh1QcjXMWG%2F4Rvu1aZfwF6Ya%2BwFnF4p6lXwwjZQsxndYY1RTjzKCblrmJ7jmJuAA8IvXIrxIjXtd3YxxEBEW1%2FOmVE%2BKMQi7WPJCbbVm5lNDFXT3NCPOIVgLutGcfnSMNK6lsQGOqUBSUzYyM5AYZi%2F5InsZwZeZ7ppyFTvizj5u%2F73rSRiRZm3DG4n2h4zCJi8M8YXh8NP9cMfqTYX%2FC6B9NnTT5VtXNh0pYJXoHhBPuy4Jx5pCQleJ36KXToPQ%2Bj1u9M3SNfAsnYeBPLFFjXnXXliCV0UvGw9nxgv58sEqQqYORPvTWCATVFjcaPm1lVvHH%2FtoCtHBGyAq3RJOrbWH881ylQOAkaeepbs&X-Amz-Signature=6a2c366726fd81a23b6faeff25eae6086c42ff7486f861b3d18577c902ab8001&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:
TODO get img

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

TODO: add rviz guide showing 

- view robot footprint
- how to view local and global cost map layers
- publish point to go to
- view path of going to that point in rviz
- publishing point when receive ref serial msg

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C4CIJYV%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICJr%2FuSvfH0lyVmCkiax85nBiOA1pePvtgqZaOTR%2BtgbAiEAzMj0tR0q90YSfQ8Fj%2BdO1TBye139YcRg1Bk4v5QFzpUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIToQn3vygsTAThT%2FSrcAwquabpVEtu%2FFiGEKSAjgY3bXYykaWMLperaql0C3YbDhoPHhGWQNNlsHQ7jb8QGClhvk1kv1Crxfc%2FOl93RfTjNGS4%2B31z01yT1ORi39GGX8vMB4ATEkIiDr0KTmzPzm%2F7pjoSlKMnUppfIzuKcH2CgqGEU5STLnjyM5Ba7u%2BORjy295X5pYDcJUqpuECbbuJXgYiKES9Wm0zsf0FHcLBSWT07TBtc%2B4Lkbu4JjXY0AP1uZW%2FGjiCceArmxDBLEIJVkFVRC0gWoKjfnswBLnVsgBEcpywZfd%2BRdkv0B30FsBCEWHzIeROKLIfvFYEWrqZ9t6%2FxLL8%2FhW8K6n4%2BKIJdqRzL8tykSZmghO28L%2BDiRU07L5DW5BSeBrpV7n9N1MDmNkoJ2wEfEnsIr1Whr29ryadc8A%2Bdkx8leipvF8K%2F2KbnsGrUuve95A7DYZ2DPmdP36qy0W13CR%2FzR%2FJFBw7tQZWmYoRhivzdhJvFj%2BzkQvQyyv1bvWoqdcbKjlsh1QcjXMWG%2F4Rvu1aZfwF6Ya%2BwFnF4p6lXwwjZQsxndYY1RTjzKCblrmJ7jmJuAA8IvXIrxIjXtd3YxxEBEW1%2FOmVE%2BKMQi7WPJCbbVm5lNDFXT3NCPOIVgLutGcfnSMNK6lsQGOqUBSUzYyM5AYZi%2F5InsZwZeZ7ppyFTvizj5u%2F73rSRiRZm3DG4n2h4zCJi8M8YXh8NP9cMfqTYX%2FC6B9NnTT5VtXNh0pYJXoHhBPuy4Jx5pCQleJ36KXToPQ%2Bj1u9M3SNfAsnYeBPLFFjXnXXliCV0UvGw9nxgv58sEqQqYORPvTWCATVFjcaPm1lVvHH%2FtoCtHBGyAq3RJOrbWH881ylQOAkaeepbs&X-Amz-Signature=644eef548ec7a73fffac210623fa0a2804c55213a9967810f176a0f8e7f07829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

{{% alert context="warning" %}}

Remember to **disable** Gazebo again in the launch file

{{% /alert %}}

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch nav2_bringup navigation_launch.py use_sim_time:=true params_file:=**path/to/nav2_params.yaml**
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

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
            'use_sim_time': LaunchConfiguration('use_sim_time')
            'params_file': nav2_yaml,
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

# Nav2 settings

TODO: change footprint?
