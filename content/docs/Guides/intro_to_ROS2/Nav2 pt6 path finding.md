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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCEQUZH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHz4%2BxH7tK8QqW%2FmAggzRhTLhLqfRoN6%2FdNkN%2BDN0absAiB0wFmBjuLjgIhpPVyheLxkfpu2awMY27o3U7LzcrlHiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMs6yVQP%2FPRpCc1ERrKtwDSh%2FkpsPkqBQO3x6vAwUk6kcDEvijVqrZJumvBVka8sh6HQ4XgoJhcavhr%2FSM9nE99QCBXKtUJvzJbjaT6qkzWO4cA4d4Tfo4u1dZXmRxofUHRZBux%2BfC1xFXXYlKwTkUunARHTTW4vrQTEMbZ8dGZQ7w8Tpw1YjjB0E3Inv85WL7lwyi%2BPzk%2FxDXcf6PVYZKfAPw6AWOZhUSNgoKnPNoP4VUorA0QgBZkdhUbJPvgNXTMC1s7Wpd0jwyp2toJ8s0p%2BgAWnXKv8F980pPAUr8zPnsAUbh2vkBcdFZpbfOp6qcu00rEriGLxIhfJ9qQLJKRnWkvjg6oIyBhHJmUXBsNg%2BNd8r5f%2Fc3JlBHsjZjkMqecxKElOG%2Bbs7mPuDJIAF0w5xZecdDGz0B1p5DoisoVNB4IvuQNKN18pU%2BgweY47%2FltANjbDPS8hCS6y4W2EkfYu2Nc7ROUZMQhPnasZitdlWiDarQAxSBE%2Bike%2BaRHnJ8g2uvA4N8avoJUx%2BV4n0p86r9%2BKp9O85tuBXcQrCGgYk6vB7uI5YpfGlMnopQ7PqLKqA97omf0pVZAl%2BdkzTbKFgM9qlHTONI6jryofPoyJYXMC8WOUKjG1S5tnESSeGuf4saPdPprXNX%2B3IwxrqWxAY6pgFz7OT%2B9f54FCViGzWncKUvrt1MkqkfTp9EzyfZ4BOcU4Es72U31r5j4aJwoWSx%2Ft3fgRsOFKBncuvpjZpdJHv%2F5WJcFYaZPD9k%2FXI9zJeFYeBEUUm89KA4fSEK3cL0i8BU6xsd3sQuE6LgJB5Q8IDvhbpEfbMV4DPHjlRk8HlXtOdzp%2BWcty2Njf%2B%2FY0zut%2BBabl8Y1eul%2Fdrb8yDNt4KK1wAZMEhP&X-Amz-Signature=23cb04864d8b93c2f20680f8b2cfbf27ff9825af2a6bbf1a920cae34fe496dc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCEQUZH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHz4%2BxH7tK8QqW%2FmAggzRhTLhLqfRoN6%2FdNkN%2BDN0absAiB0wFmBjuLjgIhpPVyheLxkfpu2awMY27o3U7LzcrlHiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMs6yVQP%2FPRpCc1ERrKtwDSh%2FkpsPkqBQO3x6vAwUk6kcDEvijVqrZJumvBVka8sh6HQ4XgoJhcavhr%2FSM9nE99QCBXKtUJvzJbjaT6qkzWO4cA4d4Tfo4u1dZXmRxofUHRZBux%2BfC1xFXXYlKwTkUunARHTTW4vrQTEMbZ8dGZQ7w8Tpw1YjjB0E3Inv85WL7lwyi%2BPzk%2FxDXcf6PVYZKfAPw6AWOZhUSNgoKnPNoP4VUorA0QgBZkdhUbJPvgNXTMC1s7Wpd0jwyp2toJ8s0p%2BgAWnXKv8F980pPAUr8zPnsAUbh2vkBcdFZpbfOp6qcu00rEriGLxIhfJ9qQLJKRnWkvjg6oIyBhHJmUXBsNg%2BNd8r5f%2Fc3JlBHsjZjkMqecxKElOG%2Bbs7mPuDJIAF0w5xZecdDGz0B1p5DoisoVNB4IvuQNKN18pU%2BgweY47%2FltANjbDPS8hCS6y4W2EkfYu2Nc7ROUZMQhPnasZitdlWiDarQAxSBE%2Bike%2BaRHnJ8g2uvA4N8avoJUx%2BV4n0p86r9%2BKp9O85tuBXcQrCGgYk6vB7uI5YpfGlMnopQ7PqLKqA97omf0pVZAl%2BdkzTbKFgM9qlHTONI6jryofPoyJYXMC8WOUKjG1S5tnESSeGuf4saPdPprXNX%2B3IwxrqWxAY6pgFz7OT%2B9f54FCViGzWncKUvrt1MkqkfTp9EzyfZ4BOcU4Es72U31r5j4aJwoWSx%2Ft3fgRsOFKBncuvpjZpdJHv%2F5WJcFYaZPD9k%2FXI9zJeFYeBEUUm89KA4fSEK3cL0i8BU6xsd3sQuE6LgJB5Q8IDvhbpEfbMV4DPHjlRk8HlXtOdzp%2BWcty2Njf%2B%2FY0zut%2BBabl8Y1eul%2Fdrb8yDNt4KK1wAZMEhP&X-Amz-Signature=c8f3701f50887ee9c443bf9a281649d35d7fe6b97e76bbfef22e23a4125db7e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCEQUZH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHz4%2BxH7tK8QqW%2FmAggzRhTLhLqfRoN6%2FdNkN%2BDN0absAiB0wFmBjuLjgIhpPVyheLxkfpu2awMY27o3U7LzcrlHiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMs6yVQP%2FPRpCc1ERrKtwDSh%2FkpsPkqBQO3x6vAwUk6kcDEvijVqrZJumvBVka8sh6HQ4XgoJhcavhr%2FSM9nE99QCBXKtUJvzJbjaT6qkzWO4cA4d4Tfo4u1dZXmRxofUHRZBux%2BfC1xFXXYlKwTkUunARHTTW4vrQTEMbZ8dGZQ7w8Tpw1YjjB0E3Inv85WL7lwyi%2BPzk%2FxDXcf6PVYZKfAPw6AWOZhUSNgoKnPNoP4VUorA0QgBZkdhUbJPvgNXTMC1s7Wpd0jwyp2toJ8s0p%2BgAWnXKv8F980pPAUr8zPnsAUbh2vkBcdFZpbfOp6qcu00rEriGLxIhfJ9qQLJKRnWkvjg6oIyBhHJmUXBsNg%2BNd8r5f%2Fc3JlBHsjZjkMqecxKElOG%2Bbs7mPuDJIAF0w5xZecdDGz0B1p5DoisoVNB4IvuQNKN18pU%2BgweY47%2FltANjbDPS8hCS6y4W2EkfYu2Nc7ROUZMQhPnasZitdlWiDarQAxSBE%2Bike%2BaRHnJ8g2uvA4N8avoJUx%2BV4n0p86r9%2BKp9O85tuBXcQrCGgYk6vB7uI5YpfGlMnopQ7PqLKqA97omf0pVZAl%2BdkzTbKFgM9qlHTONI6jryofPoyJYXMC8WOUKjG1S5tnESSeGuf4saPdPprXNX%2B3IwxrqWxAY6pgFz7OT%2B9f54FCViGzWncKUvrt1MkqkfTp9EzyfZ4BOcU4Es72U31r5j4aJwoWSx%2Ft3fgRsOFKBncuvpjZpdJHv%2F5WJcFYaZPD9k%2FXI9zJeFYeBEUUm89KA4fSEK3cL0i8BU6xsd3sQuE6LgJB5Q8IDvhbpEfbMV4DPHjlRk8HlXtOdzp%2BWcty2Njf%2B%2FY0zut%2BBabl8Y1eul%2Fdrb8yDNt4KK1wAZMEhP&X-Amz-Signature=f19b928e0d5e5df2374ffb8fee354ad5a8cd6bc457ca28abed2842bfd07bead5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCEQUZH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHz4%2BxH7tK8QqW%2FmAggzRhTLhLqfRoN6%2FdNkN%2BDN0absAiB0wFmBjuLjgIhpPVyheLxkfpu2awMY27o3U7LzcrlHiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMs6yVQP%2FPRpCc1ERrKtwDSh%2FkpsPkqBQO3x6vAwUk6kcDEvijVqrZJumvBVka8sh6HQ4XgoJhcavhr%2FSM9nE99QCBXKtUJvzJbjaT6qkzWO4cA4d4Tfo4u1dZXmRxofUHRZBux%2BfC1xFXXYlKwTkUunARHTTW4vrQTEMbZ8dGZQ7w8Tpw1YjjB0E3Inv85WL7lwyi%2BPzk%2FxDXcf6PVYZKfAPw6AWOZhUSNgoKnPNoP4VUorA0QgBZkdhUbJPvgNXTMC1s7Wpd0jwyp2toJ8s0p%2BgAWnXKv8F980pPAUr8zPnsAUbh2vkBcdFZpbfOp6qcu00rEriGLxIhfJ9qQLJKRnWkvjg6oIyBhHJmUXBsNg%2BNd8r5f%2Fc3JlBHsjZjkMqecxKElOG%2Bbs7mPuDJIAF0w5xZecdDGz0B1p5DoisoVNB4IvuQNKN18pU%2BgweY47%2FltANjbDPS8hCS6y4W2EkfYu2Nc7ROUZMQhPnasZitdlWiDarQAxSBE%2Bike%2BaRHnJ8g2uvA4N8avoJUx%2BV4n0p86r9%2BKp9O85tuBXcQrCGgYk6vB7uI5YpfGlMnopQ7PqLKqA97omf0pVZAl%2BdkzTbKFgM9qlHTONI6jryofPoyJYXMC8WOUKjG1S5tnESSeGuf4saPdPprXNX%2B3IwxrqWxAY6pgFz7OT%2B9f54FCViGzWncKUvrt1MkqkfTp9EzyfZ4BOcU4Es72U31r5j4aJwoWSx%2Ft3fgRsOFKBncuvpjZpdJHv%2F5WJcFYaZPD9k%2FXI9zJeFYeBEUUm89KA4fSEK3cL0i8BU6xsd3sQuE6LgJB5Q8IDvhbpEfbMV4DPHjlRk8HlXtOdzp%2BWcty2Njf%2B%2FY0zut%2BBabl8Y1eul%2Fdrb8yDNt4KK1wAZMEhP&X-Amz-Signature=eca2c9f58707a5bae7fe0d7b30b89ff764cf3093086f491ff24a8cf59f3ec226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCEQUZH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHz4%2BxH7tK8QqW%2FmAggzRhTLhLqfRoN6%2FdNkN%2BDN0absAiB0wFmBjuLjgIhpPVyheLxkfpu2awMY27o3U7LzcrlHiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMs6yVQP%2FPRpCc1ERrKtwDSh%2FkpsPkqBQO3x6vAwUk6kcDEvijVqrZJumvBVka8sh6HQ4XgoJhcavhr%2FSM9nE99QCBXKtUJvzJbjaT6qkzWO4cA4d4Tfo4u1dZXmRxofUHRZBux%2BfC1xFXXYlKwTkUunARHTTW4vrQTEMbZ8dGZQ7w8Tpw1YjjB0E3Inv85WL7lwyi%2BPzk%2FxDXcf6PVYZKfAPw6AWOZhUSNgoKnPNoP4VUorA0QgBZkdhUbJPvgNXTMC1s7Wpd0jwyp2toJ8s0p%2BgAWnXKv8F980pPAUr8zPnsAUbh2vkBcdFZpbfOp6qcu00rEriGLxIhfJ9qQLJKRnWkvjg6oIyBhHJmUXBsNg%2BNd8r5f%2Fc3JlBHsjZjkMqecxKElOG%2Bbs7mPuDJIAF0w5xZecdDGz0B1p5DoisoVNB4IvuQNKN18pU%2BgweY47%2FltANjbDPS8hCS6y4W2EkfYu2Nc7ROUZMQhPnasZitdlWiDarQAxSBE%2Bike%2BaRHnJ8g2uvA4N8avoJUx%2BV4n0p86r9%2BKp9O85tuBXcQrCGgYk6vB7uI5YpfGlMnopQ7PqLKqA97omf0pVZAl%2BdkzTbKFgM9qlHTONI6jryofPoyJYXMC8WOUKjG1S5tnESSeGuf4saPdPprXNX%2B3IwxrqWxAY6pgFz7OT%2B9f54FCViGzWncKUvrt1MkqkfTp9EzyfZ4BOcU4Es72U31r5j4aJwoWSx%2Ft3fgRsOFKBncuvpjZpdJHv%2F5WJcFYaZPD9k%2FXI9zJeFYeBEUUm89KA4fSEK3cL0i8BU6xsd3sQuE6LgJB5Q8IDvhbpEfbMV4DPHjlRk8HlXtOdzp%2BWcty2Njf%2B%2FY0zut%2BBabl8Y1eul%2Fdrb8yDNt4KK1wAZMEhP&X-Amz-Signature=114ea5bfdb1f0fe2836b87c31af760cdda89b0bf138cc9448f91598b0d82fbca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDCEQUZH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIHz4%2BxH7tK8QqW%2FmAggzRhTLhLqfRoN6%2FdNkN%2BDN0absAiB0wFmBjuLjgIhpPVyheLxkfpu2awMY27o3U7LzcrlHiir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMs6yVQP%2FPRpCc1ERrKtwDSh%2FkpsPkqBQO3x6vAwUk6kcDEvijVqrZJumvBVka8sh6HQ4XgoJhcavhr%2FSM9nE99QCBXKtUJvzJbjaT6qkzWO4cA4d4Tfo4u1dZXmRxofUHRZBux%2BfC1xFXXYlKwTkUunARHTTW4vrQTEMbZ8dGZQ7w8Tpw1YjjB0E3Inv85WL7lwyi%2BPzk%2FxDXcf6PVYZKfAPw6AWOZhUSNgoKnPNoP4VUorA0QgBZkdhUbJPvgNXTMC1s7Wpd0jwyp2toJ8s0p%2BgAWnXKv8F980pPAUr8zPnsAUbh2vkBcdFZpbfOp6qcu00rEriGLxIhfJ9qQLJKRnWkvjg6oIyBhHJmUXBsNg%2BNd8r5f%2Fc3JlBHsjZjkMqecxKElOG%2Bbs7mPuDJIAF0w5xZecdDGz0B1p5DoisoVNB4IvuQNKN18pU%2BgweY47%2FltANjbDPS8hCS6y4W2EkfYu2Nc7ROUZMQhPnasZitdlWiDarQAxSBE%2Bike%2BaRHnJ8g2uvA4N8avoJUx%2BV4n0p86r9%2BKp9O85tuBXcQrCGgYk6vB7uI5YpfGlMnopQ7PqLKqA97omf0pVZAl%2BdkzTbKFgM9qlHTONI6jryofPoyJYXMC8WOUKjG1S5tnESSeGuf4saPdPprXNX%2B3IwxrqWxAY6pgFz7OT%2B9f54FCViGzWncKUvrt1MkqkfTp9EzyfZ4BOcU4Es72U31r5j4aJwoWSx%2Ft3fgRsOFKBncuvpjZpdJHv%2F5WJcFYaZPD9k%2FXI9zJeFYeBEUUm89KA4fSEK3cL0i8BU6xsd3sQuE6LgJB5Q8IDvhbpEfbMV4DPHjlRk8HlXtOdzp%2BWcty2Njf%2B%2FY0zut%2BBabl8Y1eul%2Fdrb8yDNt4KK1wAZMEhP&X-Amz-Signature=fa7e545cf9aac027f7a6e3ed073eb8f8272ae5ba8294b110553b24446e095f0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
