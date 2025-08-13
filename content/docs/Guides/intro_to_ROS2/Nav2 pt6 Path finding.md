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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=fbbaa10cc529f098faaaea4b68bb8fbebb35232e95807310baf8148b94f031ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=b098b7a4ae4f600746d34772840e8d26a73adf460dde0208c4df8c35c38bed0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=f2940e5d2c6ad901556d4e107a88589841210b4fb815d6115a0bc304d77e0742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=5e3960493013b35ab6b3d0966a19bf15accbb08162228eb4d27b09d2d7f7831c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=499efcb5eb338f58ffbbd655e8870399833ff6eeb1f7041a7a1ba578155047fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=6bc2b4cd17ac91c4183afb53a52eb0b78f153a22eacf69052d017c3bd1182137&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=8295cd95e96e2c1573a9bb2bfa719c3e62eb768373e12dc9e6ffbede70c9768d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=7f6bc7e83e6d5e3bc9d0889039014ae0e8955b0d625d52255c61f2531b9229f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=04f64eff2735de927229839cc8155d44c0612162ab5611a3c8fbb0db9d70371f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=978997676b42aad64d34be128a45580e6a540ce29199d9744d28a01c268e9cae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=879a12d59020843cd50a7ac097b2ecf19167ca9d6c78845a50cd624e869be368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=0f1e43fb589a9e681b9912b69a044736e924554e2069b53c53217bb81d6a25fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NI3MIOG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T150847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTXmffWFbZ7ni49ft7hCEOprWulJo0XsAMLNTvRKf%2F8AIhAM5VvfFnn537NUeRkx4Wp4ByP3I3F1sEMsutFP4mvv6QKv8DCC8QABoMNjM3NDIzMTgzODA1Igx5QzQgGUTJYt2rCbkq3ANPIFUBcNx0ONld%2FE1fexY1hzhJMjcM36adA3zzIZwNsuO2Th56jgY0sBXovCZ%2FGsBOB79jGAY2Mj825njwMVMNMYJamiBZzeZZGqyzMvFtqAkzeBv3CMDSBVnJlQX%2F4LLllM%2BhNGE8ClYlOrvIxYI6WL3cNK2eN6hiVhqW%2FLIuWSX1pCw%2FVGCAhweuXIq4DuI4wqWnwqt9cV3MtDsu5ldfDU%2FEQ%2BvdVAvx7s0oGZRwGeZusOMsx5ouA2doIWnE9LYcjyeFqkN3w6cV5WtNP3u5xPltTDhxAVYJpA%2Bt0j0W386DX07h7FvtO5ifyffP8YzXGTYHoNNMrUYpRbB%2BwwNaTTrS%2BA%2BT0mVWoajWSQ5zAZa%2F99uzUfXRLZnlXhctHusUsY2G06oWjMsjcNgBHv20F2c3rLZXVRKQpkYt7j6bevH4u0ZkEyB9eZtUvcFNVIr7bSzcfaQ%2BoQML8Ja6mVxEknnpKukhiEvHoBXOrr9R0SLDgmItNvAwdK6grFqc2zwc8JCiwD7mWYvPJV%2F6dPKrVVh6k7ZUTYMM6NrPmibet6mTST9ZIRheCf%2FpSsI1ZeTBXiXVxvetjBmlf7vQ3Bqvs3q9qHGhd4vD4xKhBeJo3GSeNXPovylGnmIUtDDusfLEBjqkASrPv9uFLHj5EGyj1Tt02qJjdGt294LLbCjtZsj5b%2BngL5YnJGcTLyxN73pId9NK2fzF7icl6RB1MTehuSlimWffednCnL5Sec%2FoZX9FA1jXZnjEJcRWAe3rBDNUm3w4xpaPW6l6WNrdl4ZesnnuI7kAaikhxsm8BdkUJT0nCmfPuMmug1oOWRi667d52mZP6sfmhzjHa%2FejpSEZUDG%2BeEigR3bH&X-Amz-Signature=3580bb12d473d6cd88bb230f63fbdc5faa67d12bb773e3b0c12fed2e3cb72082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
