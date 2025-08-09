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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=1ba5c515b1ddff20a7edc0798d6f5d13f40ce9be4e257c1bf207394650183e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=96638626032f82f500781ef29f116b9df9c0429f168a6ec400ced1198227d55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=cbe2ed711fa2b87f8b9c85101c32f16f0f48b99dcf3069e09830cb9061a33938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=9ad8af4237b963eb98e79afaacdff676f8683a691cc5f40adc762712b84cafea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=122ce76424dbedafcb31bd9d507d47fa5e54ec679c811717fb5545194f9b852a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=f852efb5ebcf04f40f9562f7881bb5e95d21f599e822901baaeaeb215152c8b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=579dfe169f5462838df1047456fec9edc72436fa30741f787741c8012baf73d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=e2252ec6d4f4ed807a88c01c16cf136056d288bdcdcaeabb8af7512eac0c01fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=d2f8f58a17037cbed4c1e5e6fc0799443af5dc5e2b37b1f6c8535306f824862c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=a4cd120222ab27148ed7fe3187ac2ec58934858ea995e479ee456e369f8c35d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=9652551de69f8d03e54d7d9b87fc2feacf45fda9067b48759af596a4ac169bc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=719172dc1bfbffb8e10bb4ca7dd65d801cd4b5d9a7a374953f8c7feb7eb88a03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YQTOWND%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWZUmtEZWzzqYgmgRItbzw856UE0SURqbt%2BNHVJG7COwIhAPSZDTvhHWu2nBoo0%2FKh%2Bc8u2Yk0%2FxiY%2B8euAzQwpYLvKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxD8oJu6DPb2Qy5jKgq3APwTFzfpUx9jN0g%2BEmgJVyFshrD1fk5NVJYcZDXGReO79ev8eGU5G8R48VLos5Jusu5Efs1fwy1WavrmRC8TXVEojzmJomxiyuaI0gFODyHN0nDzx%2FFc9Obdzk12O2aowd%2FEqsZRL%2BAYo7RNPp6Pxcm0zFCj1n8QLp9AMri%2FnMRIcO82JeqyNIHnMkcZ%2FIM8DHhdl7iWm4QGy2iVaz4qh74M73Os1gXE89Wm92zNYDTMqfumRekzKUxHgNo6DdNWANImhdaZgVYwyxHXpUb1ITfM4A4eiufGNdCsYVI%2FR22wRc8Dm67vM%2FQ%2BGGBzsNyWE2N3TzGZ6Sc34xpi0ajE%2FXch%2F%2BqDntKLsyAhUxobi2EpdJDTTqJMeMc0%2FMCBnUShSnbsx7wmUs%2BaojH0mW%2Br5%2BIsPUOHPpspm1f694G7%2BzO8HLxM07G%2BGlZTHY1bNJqELlIuK19NcwOy70UOMATPUy43buOMEQR4%2BSRKAf6kVOAUca59HJ46OawvONkWQVud2czl5iM%2BiB28pnf6w5%2BETNCY6u1HlfdsXQheywg56%2Fq2KnaiNKvZsjZsha3T4%2F3XLyQ0CFAI5dWn4XtxfydZf8pZVqnPvMzfsTpt2beHMGneg%2BsqW96BGy3Z0EEXjCowt7EBjqkAdIBk00sxbrFi3YqbjsHfctMCanYD8A%2Bx%2Ff1e6A9Cgnctulj2bTYZmHGPyeF%2FwuSA%2BpdMwTXDaTaSbs21RZR%2Fc%2FkCGgb14LfGNOEuXIOQhTcC4NjR4%2BrpZhZpBucNcg0zV9yfxxLExW9jQsgd617aA%2BsgCnvDD1mPyQbNLcI7VtFqKsvw6Z4Z3Rt65wvnI35K7QXy7e8G0yppyXFYAqMPK%2FBCOBy&X-Amz-Signature=7e8006dd5fc5fc2645565a5e134c11481d5dde593cbcd0d45cc4b365b1707977&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
