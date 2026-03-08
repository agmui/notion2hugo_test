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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=4f6748a95707c35c50781c03c68695a2155db214a7af05633fc0fa4d67e649c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=4e0e6d69b599a730ca789edc54bfb2e96509a9577b1aef6820c94b6f726f896e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=87f0bc17683d43d5f5ec7c948efa852fa7cfb621a2085650c7d1bde168d2f5c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=1b689a652bb29ab93c2bd18ffe0c66f8fe078f4ea62d45f747c27a4910e38ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=af1293278764cf905f904fa3dddaf208f692cf3c043d4d52c7fbf2ad070383f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=47f6bad71ccad0e4a4f9b1b14bf874640be0cacf62bb19280ef0cc3372f67e8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=38e82c85b375bffe38f7123ea9991f1d23e4a4c8a324f270f87688d5f8ea3951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=85375545cd297c5c6f99e9db2abd9d76d5d7cceeed7c47956757b489d9dcfe65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=a470ce1646cf5ca81b07408618c577946fedf4ac25236871894e0c3203935983&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=d9cf3ee4e6dde5de28edf027179e2efc3adaa4b0f0b78e993b538d8d38919544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=4a3edb4a68dd7752f77914272b674acc2bfa030c2c57aaa0cf09ed0595f0cff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=287929e76c4feefd399519b3f229e0367eb6cf596f74cf9d88b6d6e7466db198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMINDVR6%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQD2PPEk3XzXA8NibVJclqTyRkaZqxoQw6fDWtXJ8cHVsAIhAODHcPYGtRSiJAPNvCpu9MYVkZzH2I8i29D3yUId8rrfKv8DCAoQABoMNjM3NDIzMTgzODA1IgxVXb7aDjx%2F6Ylb%2B70q3AO5UzPJRk3F7uTWcpbx%2FUuEvhVJH7EULutec85PVgJhJk1nF2palANLeScRgCq7FSOSk0UOsTKQci00cpf4VL2l8jjnawMDSUkvCbhYtJqgn6GBO6QVidUDZoh2Va7AzJofXAKc%2F8UNoNuDUSkTG9pyQEpesfGbiDcQu0DzwFRYNZ5PEXTR7gFxOjW3Z6LXL8yw8qJ8OSPKJnFC%2BlaNxQd85VXf73ZAr9MUKwuwJ%2ByiIhYuvBJAAGUJ3h%2BLdSvfIo%2F%2BhWGiDGGmdKYc2YKfGhwvSpuO72U%2BJsTNkKmT5FXJwpqcyrUVv9e4mPerTOdxHWecM0EZrYuGBjBlBtE0y3P0Q7KpdrOP0IyThjMvcv5okwZ3QsWU8u5wbPxMFD5clwNd5JXcJPGdcny9aiYd5249%2B3fk64gMt239%2F8RwAilswx9xvil4bxINuMdZrnqQx1dWL9uoiCcGBEffRLEwsLQDbPb3EJnJzlXEbUBNu7El1m87%2FkS8K8qhkUC41%2BE%2Bb0xGx3rZRCGeDNRJF1hMO%2F%2BX%2B8voDj0mDgmHew%2BdfYrN5Ht4L26o2%2Fs2MVCO%2Bq58o1pp7LN%2FBz8JZ7hfrX0YmuHjp3sB9LLpeDXVm6neN%2FPEPuyXSbNz3BliqQbg0TD2nLPNBjqkAUXgNWxL13PLtTy6w20%2Bl2pU%2F8DVbMsh2LcBYZQBYGjMCHR2mjFhlclNiWhi7GwqQRHcAti1V%2FJT001R1Ztrl2qkbEiy1PtahaUq7ciN1rFnM444Dq96G7LJn87%2Fy0fyKZ8p0UlNIglgJFJizIXfwIix9%2BFKcHQpfrUQVFXWthlMhN1%2Bn3kzbChKTofODNVS%2FT16k4u6VoWqgbWHe10NmMIm4iR6&X-Amz-Signature=509118a033e3ba8ce41b7a9ca002b55ea01580ca2e5cf6fe0fb11715e8ab08b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
