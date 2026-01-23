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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5693982a-77ac-4a8b-8da7-8846b6e6c967/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=589de4e71f81453f273a227bf9afdace59787efdca43fc459aa4bed1b632fd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6ce4f9d4-b068-4b5a-a04e-8e93356b1729/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=31170b91f6b9d4a7e4267e5c7f30bb0f0577f4e4d15af996196cb7f38834a702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=a2e14edf4bdfc3dd1091a4935d197955c0fc2407272a572e8a990f4b5719c832&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=1ff6a6a198a9988ce0ddb07595490c2fae1d0825f40f4cdf671d4a18de7f765e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=5730e7e833464da3a684199534d2af536962d74dead4abce6a9150d7d74710f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

you will probs get an error looking like this:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5d7f8801-815d-4ab2-bb04-df35ca22158a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=5365eb467687196b7128443492971785a2a69fd642e315ea0e3ee835d66df1c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr](https://robotics.stackexchange.com/questions/112885/using-slam-toolbox-and-nav2-i-get-the-following-error-lookup-would-require-extr)

{{% /alert %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4a6d044e-0299-4d1b-8179-5a6dfb9c4fae/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=7409dcc691050227175d6e17169849fed27856ee5af02cd49669d39507097ed6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Definitely recommend adding other visualizations such as:

- /cmd_vel_nav
- /goal_pose

Result:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/19b89574-e127-4bbd-96e1-6896fc5a62c4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=e490a8103a37c490150ed58cb7c68c1dd390f92d1a832aefda9c8a343244e729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Publishing Goal pose

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/5872f4df-aa63-47f9-b815-7092c3a1192c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=495337da4b5c72b247c4d33835fd1ab45e034367bbbef3c8dcf84d4170fb5f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b0241f58-8fd3-4f4a-872d-45ad5467d592/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=c0a998ac833b262b4e999b2dca828167888f41ccfdd5e95a28e9fd24dce9d40b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ab7651-8873-4dea-9187-e319e4eab425/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=367dad6ba02d8d3343e0c0157720b1b554dd924509be110fb16ce76bb0551981&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

click and drag anywhere on the map to put the goal of where the robot should go to

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0efa268d-c605-4979-9032-8240a6166fcc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=5fc831c4e0044d9f5181e8a5c4734d39cc3c1328a711bbfb1baa32ed544500a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This publishes a message to `/goal_pose`

The robot should then start to automatically move to that spot

`ctrl+s` to save everything

# Physical

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/31ef7e31-ab4d-4ae6-8487-75151509bb2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSPG5NAL%2F20260123%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260123T014833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJGMEQCIHHT0Vn4LjYmzqHgWatlNEAuS7UXvhT40McV%2FeNnosbKAiBX2%2BRyVFfa8ywTBR%2FzKkBcoJCe0iE%2FrvQOR2k%2B3s2jESqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9mtNZ%2B7gUVW6Mhi5KtwDA%2BylBCgqjSu8Ri9aRGCGKWql4NBO558mGi4EYkHWEnE7FwaJf9JGAYPrISkQ8IACwSZtz9jnsid9eS%2F3GTHKp%2F39RX4DW44rEosCxm%2BOouhG4e7QhNXblz0FX1E%2Fwmx3d5%2F9xtkzBjY00%2FZLzciYC%2F1vHEp7TGv64sk1oojDK%2BfaYVEL59qC1WAnVIwnMoIbalqdW%2BuSbFZICT6iJ%2BcpHVi79Juw59bpLIoybVjCq3t%2FGk9ZMHSTixRHTI2E93pMTqHIDZ8HAQLND%2BlelE7EORIIHkWRK8Xrsj%2Baf8zJfyGPn9TCbborFkGqIBbO%2Bf5lhcRiJXY%2BsDwbNpJ1hAoOXIJACDAXK9h0qD42yy%2Bw7SGJN%2F2PB67FG9xFBzh25LtsWOvnWFW5sFOGj5uJF3beQSr5FrJFd7aKt1wGZQ6nsNrHmJ%2F0MPggUBbbTRjrYsrzMWYarKLOxmpCo7VV2r4el7mDSl3GPGeLFjZ%2FRoioIyQ%2BqeY4qwE2WOI9c4dEhuPmQbnOxrOhbWmF20LH6XGf2wvsw%2BNxLZsLuD6lqesRXOQST7RylSJZxNFwEtPDDiroL5Sa47aEJfFKhX44mlitZ5%2F8sKP%2B7tx1pw4C2ocHkIRVMqxmb%2B5DUom%2FhRAwgovLywY6pgFzS%2FHqCgf1lYAtMdMRsdm4YdUd9wZwoPEj5Pof0%2Bz0w47Z00nrtvtDeNwnzB9nIA605Z4winlE4HfhoPgxJtXd92BCjgFPPb1ku4Lb2siL6NJe7BDeLp%2FzdPHLozGX7fp%2BSgGdMarIWhw%2F5mvQlfS3d4AD3GAdLA8RrBkvFfpySplitjrvcG8DwDCe0uqTbgQhbS5PfRY%2BUxv0%2Bx8a7NSF4f3XAkOs&X-Amz-Signature=6de864fd7d0fef3b20c85f7320a5e38df11ebd71a4c654c3e93b7762684a50cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
