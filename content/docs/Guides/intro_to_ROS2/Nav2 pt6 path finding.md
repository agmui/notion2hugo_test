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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJORPLJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmOZtXq%2B5cOJviVMrShVLDriJ5imV1mr9AfjZzz9W5GgIgXXjuXAu8pVY25si2hgt1djD8BxDZImsa9f665bOhq4Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbmOAngxgo%2B%2FlZunyrcA0Ekmy3hIqxjlVca3kblt0%2FktpLxtHg7IudDWGXfnbSYp9yZeqs%2FqcEYiqnTz4vAIx3wm6dWOnFXCVByXe67r%2F7OVonz%2FTMbqkgGVjAof0KI9kyJ3K2xO0NHzb6Pyrr6zVu2SMtFC7utspH0wgFyMRD2CXNSTHUnSm3Is8YUNeK1CBZBmjiXX%2FEZjeRZyFbiVyzcXMv6PdszwAdlYLbH2aQwbljUSXrKA%2BU%2FZ62ceNJHSjO1pf8HgCpxeJtMo7Nq3nZh%2BB3uUKH9dFD8vhYlz37kZ7W8oH44Q9H7ByLEIpmY3h4NAiRwsx0Br365T%2FMfBn1pJGc6P4zhe6WQ1jjRcFC0d%2FxMYFMRQyHOtq51OV9RhH6X%2B2EbeI8nVx4t5F%2Bs6o9klW38%2BMdYEKBdn3T1lViqGnqvNdkExVh0al7Bnqbp1N4VIOJePNfpYj8GVvEVB83QiWcHVLw7xD3BRz3JvGTA009PmKjQS9nHPKGv9K4EEXvLKzqvs3xJKQmBn%2BDRCHKA5017F43S%2F5X%2FE6d%2FWEGHZmI%2FFG7%2BFD3qJNI33j2ttcFqlapxtQ49zur3vZWPm7DeP5ZEvr7sTX2KB%2BNjISGcrTRBim9nxrjfbf%2BpUbrZsHxjTcq1oH14%2FUlxMODhl8QGOqUB69ffzi9isusgIDU2yRbUCHVh9yu5mmWv8y%2FiXqE2PCoEKJIh0gRMLMfiyndN7SHAeJe5jLzYwzgo8wpFmYaI0AX%2F7o3%2BsjiN%2FYe9SXOptT1vNPlLE6jCG9G7ebw9LdaOU3e6xLgrhL%2BiYfLqiN3fU39Zt%2BMUNwJJWb%2BeJh3oAQZMLzDBgvznN6zlQpTzswoRzFT5%2FJDrvQ38FWZxA7R23GfvncxW&X-Amz-Signature=198f3af91a289ed8dcf8f210833d4eceafb8b431b54f5aa947aeabeeed0e981f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJORPLJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmOZtXq%2B5cOJviVMrShVLDriJ5imV1mr9AfjZzz9W5GgIgXXjuXAu8pVY25si2hgt1djD8BxDZImsa9f665bOhq4Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbmOAngxgo%2B%2FlZunyrcA0Ekmy3hIqxjlVca3kblt0%2FktpLxtHg7IudDWGXfnbSYp9yZeqs%2FqcEYiqnTz4vAIx3wm6dWOnFXCVByXe67r%2F7OVonz%2FTMbqkgGVjAof0KI9kyJ3K2xO0NHzb6Pyrr6zVu2SMtFC7utspH0wgFyMRD2CXNSTHUnSm3Is8YUNeK1CBZBmjiXX%2FEZjeRZyFbiVyzcXMv6PdszwAdlYLbH2aQwbljUSXrKA%2BU%2FZ62ceNJHSjO1pf8HgCpxeJtMo7Nq3nZh%2BB3uUKH9dFD8vhYlz37kZ7W8oH44Q9H7ByLEIpmY3h4NAiRwsx0Br365T%2FMfBn1pJGc6P4zhe6WQ1jjRcFC0d%2FxMYFMRQyHOtq51OV9RhH6X%2B2EbeI8nVx4t5F%2Bs6o9klW38%2BMdYEKBdn3T1lViqGnqvNdkExVh0al7Bnqbp1N4VIOJePNfpYj8GVvEVB83QiWcHVLw7xD3BRz3JvGTA009PmKjQS9nHPKGv9K4EEXvLKzqvs3xJKQmBn%2BDRCHKA5017F43S%2F5X%2FE6d%2FWEGHZmI%2FFG7%2BFD3qJNI33j2ttcFqlapxtQ49zur3vZWPm7DeP5ZEvr7sTX2KB%2BNjISGcrTRBim9nxrjfbf%2BpUbrZsHxjTcq1oH14%2FUlxMODhl8QGOqUB69ffzi9isusgIDU2yRbUCHVh9yu5mmWv8y%2FiXqE2PCoEKJIh0gRMLMfiyndN7SHAeJe5jLzYwzgo8wpFmYaI0AX%2F7o3%2BsjiN%2FYe9SXOptT1vNPlLE6jCG9G7ebw9LdaOU3e6xLgrhL%2BiYfLqiN3fU39Zt%2BMUNwJJWb%2BeJh3oAQZMLzDBgvznN6zlQpTzswoRzFT5%2FJDrvQ38FWZxA7R23GfvncxW&X-Amz-Signature=d83a15e467c55580866e20bde19b7b4c890bea10a9f9ab3478747a6d7522c3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJORPLJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmOZtXq%2B5cOJviVMrShVLDriJ5imV1mr9AfjZzz9W5GgIgXXjuXAu8pVY25si2hgt1djD8BxDZImsa9f665bOhq4Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbmOAngxgo%2B%2FlZunyrcA0Ekmy3hIqxjlVca3kblt0%2FktpLxtHg7IudDWGXfnbSYp9yZeqs%2FqcEYiqnTz4vAIx3wm6dWOnFXCVByXe67r%2F7OVonz%2FTMbqkgGVjAof0KI9kyJ3K2xO0NHzb6Pyrr6zVu2SMtFC7utspH0wgFyMRD2CXNSTHUnSm3Is8YUNeK1CBZBmjiXX%2FEZjeRZyFbiVyzcXMv6PdszwAdlYLbH2aQwbljUSXrKA%2BU%2FZ62ceNJHSjO1pf8HgCpxeJtMo7Nq3nZh%2BB3uUKH9dFD8vhYlz37kZ7W8oH44Q9H7ByLEIpmY3h4NAiRwsx0Br365T%2FMfBn1pJGc6P4zhe6WQ1jjRcFC0d%2FxMYFMRQyHOtq51OV9RhH6X%2B2EbeI8nVx4t5F%2Bs6o9klW38%2BMdYEKBdn3T1lViqGnqvNdkExVh0al7Bnqbp1N4VIOJePNfpYj8GVvEVB83QiWcHVLw7xD3BRz3JvGTA009PmKjQS9nHPKGv9K4EEXvLKzqvs3xJKQmBn%2BDRCHKA5017F43S%2F5X%2FE6d%2FWEGHZmI%2FFG7%2BFD3qJNI33j2ttcFqlapxtQ49zur3vZWPm7DeP5ZEvr7sTX2KB%2BNjISGcrTRBim9nxrjfbf%2BpUbrZsHxjTcq1oH14%2FUlxMODhl8QGOqUB69ffzi9isusgIDU2yRbUCHVh9yu5mmWv8y%2FiXqE2PCoEKJIh0gRMLMfiyndN7SHAeJe5jLzYwzgo8wpFmYaI0AX%2F7o3%2BsjiN%2FYe9SXOptT1vNPlLE6jCG9G7ebw9LdaOU3e6xLgrhL%2BiYfLqiN3fU39Zt%2BMUNwJJWb%2BeJh3oAQZMLzDBgvznN6zlQpTzswoRzFT5%2FJDrvQ38FWZxA7R23GfvncxW&X-Amz-Signature=1d8af2cb1a02678c408497bb9156e68b12ed950a51ec244766f3acc8b470f732&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJORPLJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmOZtXq%2B5cOJviVMrShVLDriJ5imV1mr9AfjZzz9W5GgIgXXjuXAu8pVY25si2hgt1djD8BxDZImsa9f665bOhq4Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbmOAngxgo%2B%2FlZunyrcA0Ekmy3hIqxjlVca3kblt0%2FktpLxtHg7IudDWGXfnbSYp9yZeqs%2FqcEYiqnTz4vAIx3wm6dWOnFXCVByXe67r%2F7OVonz%2FTMbqkgGVjAof0KI9kyJ3K2xO0NHzb6Pyrr6zVu2SMtFC7utspH0wgFyMRD2CXNSTHUnSm3Is8YUNeK1CBZBmjiXX%2FEZjeRZyFbiVyzcXMv6PdszwAdlYLbH2aQwbljUSXrKA%2BU%2FZ62ceNJHSjO1pf8HgCpxeJtMo7Nq3nZh%2BB3uUKH9dFD8vhYlz37kZ7W8oH44Q9H7ByLEIpmY3h4NAiRwsx0Br365T%2FMfBn1pJGc6P4zhe6WQ1jjRcFC0d%2FxMYFMRQyHOtq51OV9RhH6X%2B2EbeI8nVx4t5F%2Bs6o9klW38%2BMdYEKBdn3T1lViqGnqvNdkExVh0al7Bnqbp1N4VIOJePNfpYj8GVvEVB83QiWcHVLw7xD3BRz3JvGTA009PmKjQS9nHPKGv9K4EEXvLKzqvs3xJKQmBn%2BDRCHKA5017F43S%2F5X%2FE6d%2FWEGHZmI%2FFG7%2BFD3qJNI33j2ttcFqlapxtQ49zur3vZWPm7DeP5ZEvr7sTX2KB%2BNjISGcrTRBim9nxrjfbf%2BpUbrZsHxjTcq1oH14%2FUlxMODhl8QGOqUB69ffzi9isusgIDU2yRbUCHVh9yu5mmWv8y%2FiXqE2PCoEKJIh0gRMLMfiyndN7SHAeJe5jLzYwzgo8wpFmYaI0AX%2F7o3%2BsjiN%2FYe9SXOptT1vNPlLE6jCG9G7ebw9LdaOU3e6xLgrhL%2BiYfLqiN3fU39Zt%2BMUNwJJWb%2BeJh3oAQZMLzDBgvznN6zlQpTzswoRzFT5%2FJDrvQ38FWZxA7R23GfvncxW&X-Amz-Signature=87944fd466a6da71ba01c26534d3588fc4af02f0fdd4553dde4eac467ca30f91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJORPLJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmOZtXq%2B5cOJviVMrShVLDriJ5imV1mr9AfjZzz9W5GgIgXXjuXAu8pVY25si2hgt1djD8BxDZImsa9f665bOhq4Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbmOAngxgo%2B%2FlZunyrcA0Ekmy3hIqxjlVca3kblt0%2FktpLxtHg7IudDWGXfnbSYp9yZeqs%2FqcEYiqnTz4vAIx3wm6dWOnFXCVByXe67r%2F7OVonz%2FTMbqkgGVjAof0KI9kyJ3K2xO0NHzb6Pyrr6zVu2SMtFC7utspH0wgFyMRD2CXNSTHUnSm3Is8YUNeK1CBZBmjiXX%2FEZjeRZyFbiVyzcXMv6PdszwAdlYLbH2aQwbljUSXrKA%2BU%2FZ62ceNJHSjO1pf8HgCpxeJtMo7Nq3nZh%2BB3uUKH9dFD8vhYlz37kZ7W8oH44Q9H7ByLEIpmY3h4NAiRwsx0Br365T%2FMfBn1pJGc6P4zhe6WQ1jjRcFC0d%2FxMYFMRQyHOtq51OV9RhH6X%2B2EbeI8nVx4t5F%2Bs6o9klW38%2BMdYEKBdn3T1lViqGnqvNdkExVh0al7Bnqbp1N4VIOJePNfpYj8GVvEVB83QiWcHVLw7xD3BRz3JvGTA009PmKjQS9nHPKGv9K4EEXvLKzqvs3xJKQmBn%2BDRCHKA5017F43S%2F5X%2FE6d%2FWEGHZmI%2FFG7%2BFD3qJNI33j2ttcFqlapxtQ49zur3vZWPm7DeP5ZEvr7sTX2KB%2BNjISGcrTRBim9nxrjfbf%2BpUbrZsHxjTcq1oH14%2FUlxMODhl8QGOqUB69ffzi9isusgIDU2yRbUCHVh9yu5mmWv8y%2FiXqE2PCoEKJIh0gRMLMfiyndN7SHAeJe5jLzYwzgo8wpFmYaI0AX%2F7o3%2BsjiN%2FYe9SXOptT1vNPlLE6jCG9G7ebw9LdaOU3e6xLgrhL%2BiYfLqiN3fU39Zt%2BMUNwJJWb%2BeJh3oAQZMLzDBgvznN6zlQpTzswoRzFT5%2FJDrvQ38FWZxA7R23GfvncxW&X-Amz-Signature=8b6b5f52b780609a100fe816e08677e5e8a9dac794973be23ccce371fb0aec99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DJORPLJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJHMEUCIQCmOZtXq%2B5cOJviVMrShVLDriJ5imV1mr9AfjZzz9W5GgIgXXjuXAu8pVY25si2hgt1djD8BxDZImsa9f665bOhq4Eq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDBbmOAngxgo%2B%2FlZunyrcA0Ekmy3hIqxjlVca3kblt0%2FktpLxtHg7IudDWGXfnbSYp9yZeqs%2FqcEYiqnTz4vAIx3wm6dWOnFXCVByXe67r%2F7OVonz%2FTMbqkgGVjAof0KI9kyJ3K2xO0NHzb6Pyrr6zVu2SMtFC7utspH0wgFyMRD2CXNSTHUnSm3Is8YUNeK1CBZBmjiXX%2FEZjeRZyFbiVyzcXMv6PdszwAdlYLbH2aQwbljUSXrKA%2BU%2FZ62ceNJHSjO1pf8HgCpxeJtMo7Nq3nZh%2BB3uUKH9dFD8vhYlz37kZ7W8oH44Q9H7ByLEIpmY3h4NAiRwsx0Br365T%2FMfBn1pJGc6P4zhe6WQ1jjRcFC0d%2FxMYFMRQyHOtq51OV9RhH6X%2B2EbeI8nVx4t5F%2Bs6o9klW38%2BMdYEKBdn3T1lViqGnqvNdkExVh0al7Bnqbp1N4VIOJePNfpYj8GVvEVB83QiWcHVLw7xD3BRz3JvGTA009PmKjQS9nHPKGv9K4EEXvLKzqvs3xJKQmBn%2BDRCHKA5017F43S%2F5X%2FE6d%2FWEGHZmI%2FFG7%2BFD3qJNI33j2ttcFqlapxtQ49zur3vZWPm7DeP5ZEvr7sTX2KB%2BNjISGcrTRBim9nxrjfbf%2BpUbrZsHxjTcq1oH14%2FUlxMODhl8QGOqUB69ffzi9isusgIDU2yRbUCHVh9yu5mmWv8y%2FiXqE2PCoEKJIh0gRMLMfiyndN7SHAeJe5jLzYwzgo8wpFmYaI0AX%2F7o3%2BsjiN%2FYe9SXOptT1vNPlLE6jCG9G7ebw9LdaOU3e6xLgrhL%2BiYfLqiN3fU39Zt%2BMUNwJJWb%2BeJh3oAQZMLzDBgvznN6zlQpTzswoRzFT5%2FJDrvQ38FWZxA7R23GfvncxW&X-Amz-Signature=f6dcc14ed6121c66e73324771eb6fc92cacad3be265c3aeb6a2868252a18d374&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
