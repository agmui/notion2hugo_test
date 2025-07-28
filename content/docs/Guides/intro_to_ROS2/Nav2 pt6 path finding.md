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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/fe31b41f-2d45-47d5-b916-dc99c4a7348d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666553TZRU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFxxIqu3tTOlsnk79i4D418bHWs%2BDzIkJnjeVOhtyHk%2FAiBSyRplGsj8EhnDm%2FqW7magjhgr9mCdLzriOJYPnhNLUyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc9dVNXxx917kMBjKtwD66tE2kuTYbDnY27F%2F3oHRoqXok7BYf%2BncTPqZRQT%2FeG1v%2BH6%2B8SoRDjXg37XXopcgCLhWZVuhV3eq0ixCbu37EvCh7XxH19WGZLiKf%2BHA%2FX2XkpkIbpd5CjRvEKzXdC5qTjlEH3GSjT852za4%2B68HoXp%2FuJ5xlwZ5d%2BkzoZEIh2yjpGbAQz10JnVVsbhZCdwxjfsn9E%2FQZMZ3uqUtrVSnEhrBCyGqBY98h31HhQ%2BYHKD9uhX6LttkMA2KjVT4JPBEiljcuYLYBYDQnyRhUyFsf%2BsC5WzP%2Fo2RBwrHTMnMcubkDatMcRK86ZIHNBQbbpo21%2FwdgxAlLWf4IoFRDy56SeHiavnYV%2FzDK3EdddtYHZALE6ViOnLwjsi2WnRkg4lH2TUOqlMR7yAnIc5iGbwJPAfrRvMmMZjG%2F94hoT%2Fy%2BMOTY1XLRW2LERBi9YPli%2B0H3B0x2BrAlAw2EjM1BPZtU27rQytB%2BNNPjcLcVGbZRewydYBL%2FW9nl%2FYVyfmEVcsWYiQcFFMb9Z0gg3TFUsYI6KPNxCYWQW4F4npsGKbLAx6LXZN6ReskLlaa4AlQJV9R5TvFSUs7UbNpityZ78AG8SVUYQUiKVEyV1Yuf4P6Zqf1kRRPhruHYn7Pv8ws4qfxAY6pgHUZKT0Z4St1LaC%2Br33Cl6PbX2gI%2FjiRGhimHxrdQdN3IpXRKgRd4GGVRau43A8gJfc4uITgAFSVAhKyj3%2F2GtdS4ixTjwtUyJ46IjCecesn5q2Yb0l2Odtf9dQIjeM%2BIt0JvidVhUF8lrf%2BUJ9KZyXps%2FYmDrFwuP6%2B%2Fwt%2FVOcaPfgy2IQa6jXbp7mChnQTqposZ54xShfvFfZ%2Fdi3IYPX1p6%2BezsQ&X-Amz-Signature=8c940be85dd3b4e57a47f17ffdbf5560c0e08d4455baf8cb0cf9409155c14eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/792a082a-9e00-489b-82c8-afcb04db1f2c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666553TZRU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFxxIqu3tTOlsnk79i4D418bHWs%2BDzIkJnjeVOhtyHk%2FAiBSyRplGsj8EhnDm%2FqW7magjhgr9mCdLzriOJYPnhNLUyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc9dVNXxx917kMBjKtwD66tE2kuTYbDnY27F%2F3oHRoqXok7BYf%2BncTPqZRQT%2FeG1v%2BH6%2B8SoRDjXg37XXopcgCLhWZVuhV3eq0ixCbu37EvCh7XxH19WGZLiKf%2BHA%2FX2XkpkIbpd5CjRvEKzXdC5qTjlEH3GSjT852za4%2B68HoXp%2FuJ5xlwZ5d%2BkzoZEIh2yjpGbAQz10JnVVsbhZCdwxjfsn9E%2FQZMZ3uqUtrVSnEhrBCyGqBY98h31HhQ%2BYHKD9uhX6LttkMA2KjVT4JPBEiljcuYLYBYDQnyRhUyFsf%2BsC5WzP%2Fo2RBwrHTMnMcubkDatMcRK86ZIHNBQbbpo21%2FwdgxAlLWf4IoFRDy56SeHiavnYV%2FzDK3EdddtYHZALE6ViOnLwjsi2WnRkg4lH2TUOqlMR7yAnIc5iGbwJPAfrRvMmMZjG%2F94hoT%2Fy%2BMOTY1XLRW2LERBi9YPli%2B0H3B0x2BrAlAw2EjM1BPZtU27rQytB%2BNNPjcLcVGbZRewydYBL%2FW9nl%2FYVyfmEVcsWYiQcFFMb9Z0gg3TFUsYI6KPNxCYWQW4F4npsGKbLAx6LXZN6ReskLlaa4AlQJV9R5TvFSUs7UbNpityZ78AG8SVUYQUiKVEyV1Yuf4P6Zqf1kRRPhruHYn7Pv8ws4qfxAY6pgHUZKT0Z4St1LaC%2Br33Cl6PbX2gI%2FjiRGhimHxrdQdN3IpXRKgRd4GGVRau43A8gJfc4uITgAFSVAhKyj3%2F2GtdS4ixTjwtUyJ46IjCecesn5q2Yb0l2Odtf9dQIjeM%2BIt0JvidVhUF8lrf%2BUJ9KZyXps%2FYmDrFwuP6%2B%2Fwt%2FVOcaPfgy2IQa6jXbp7mChnQTqposZ54xShfvFfZ%2Fdi3IYPX1p6%2BezsQ&X-Amz-Signature=52dac21453865f0182f6b6fe193f4d7dcc83dff12b20e4d177bf643325be4060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Download the `nav2_params.yaml` in the `config` folder. Later we will fine tune it for our robot.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4107af26-de3f-41ea-93ba-8217853e792b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666553TZRU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFxxIqu3tTOlsnk79i4D418bHWs%2BDzIkJnjeVOhtyHk%2FAiBSyRplGsj8EhnDm%2FqW7magjhgr9mCdLzriOJYPnhNLUyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc9dVNXxx917kMBjKtwD66tE2kuTYbDnY27F%2F3oHRoqXok7BYf%2BncTPqZRQT%2FeG1v%2BH6%2B8SoRDjXg37XXopcgCLhWZVuhV3eq0ixCbu37EvCh7XxH19WGZLiKf%2BHA%2FX2XkpkIbpd5CjRvEKzXdC5qTjlEH3GSjT852za4%2B68HoXp%2FuJ5xlwZ5d%2BkzoZEIh2yjpGbAQz10JnVVsbhZCdwxjfsn9E%2FQZMZ3uqUtrVSnEhrBCyGqBY98h31HhQ%2BYHKD9uhX6LttkMA2KjVT4JPBEiljcuYLYBYDQnyRhUyFsf%2BsC5WzP%2Fo2RBwrHTMnMcubkDatMcRK86ZIHNBQbbpo21%2FwdgxAlLWf4IoFRDy56SeHiavnYV%2FzDK3EdddtYHZALE6ViOnLwjsi2WnRkg4lH2TUOqlMR7yAnIc5iGbwJPAfrRvMmMZjG%2F94hoT%2Fy%2BMOTY1XLRW2LERBi9YPli%2B0H3B0x2BrAlAw2EjM1BPZtU27rQytB%2BNNPjcLcVGbZRewydYBL%2FW9nl%2FYVyfmEVcsWYiQcFFMb9Z0gg3TFUsYI6KPNxCYWQW4F4npsGKbLAx6LXZN6ReskLlaa4AlQJV9R5TvFSUs7UbNpityZ78AG8SVUYQUiKVEyV1Yuf4P6Zqf1kRRPhruHYn7Pv8ws4qfxAY6pgHUZKT0Z4St1LaC%2Br33Cl6PbX2gI%2FjiRGhimHxrdQdN3IpXRKgRd4GGVRau43A8gJfc4uITgAFSVAhKyj3%2F2GtdS4ixTjwtUyJ46IjCecesn5q2Yb0l2Odtf9dQIjeM%2BIt0JvidVhUF8lrf%2BUJ9KZyXps%2FYmDrFwuP6%2B%2Fwt%2FVOcaPfgy2IQa6jXbp7mChnQTqposZ54xShfvFfZ%2Fdi3IYPX1p6%2BezsQ&X-Amz-Signature=46c072d431895237cc66ad69166c6b4c190a4a30adf1ee48fb17a6355f40c064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[nav2_params.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/b317f6d3-3412-4778-ba5e-0ade18bdd69e/nav2_params.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666553TZRU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFxxIqu3tTOlsnk79i4D418bHWs%2BDzIkJnjeVOhtyHk%2FAiBSyRplGsj8EhnDm%2FqW7magjhgr9mCdLzriOJYPnhNLUyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc9dVNXxx917kMBjKtwD66tE2kuTYbDnY27F%2F3oHRoqXok7BYf%2BncTPqZRQT%2FeG1v%2BH6%2B8SoRDjXg37XXopcgCLhWZVuhV3eq0ixCbu37EvCh7XxH19WGZLiKf%2BHA%2FX2XkpkIbpd5CjRvEKzXdC5qTjlEH3GSjT852za4%2B68HoXp%2FuJ5xlwZ5d%2BkzoZEIh2yjpGbAQz10JnVVsbhZCdwxjfsn9E%2FQZMZ3uqUtrVSnEhrBCyGqBY98h31HhQ%2BYHKD9uhX6LttkMA2KjVT4JPBEiljcuYLYBYDQnyRhUyFsf%2BsC5WzP%2Fo2RBwrHTMnMcubkDatMcRK86ZIHNBQbbpo21%2FwdgxAlLWf4IoFRDy56SeHiavnYV%2FzDK3EdddtYHZALE6ViOnLwjsi2WnRkg4lH2TUOqlMR7yAnIc5iGbwJPAfrRvMmMZjG%2F94hoT%2Fy%2BMOTY1XLRW2LERBi9YPli%2B0H3B0x2BrAlAw2EjM1BPZtU27rQytB%2BNNPjcLcVGbZRewydYBL%2FW9nl%2FYVyfmEVcsWYiQcFFMb9Z0gg3TFUsYI6KPNxCYWQW4F4npsGKbLAx6LXZN6ReskLlaa4AlQJV9R5TvFSUs7UbNpityZ78AG8SVUYQUiKVEyV1Yuf4P6Zqf1kRRPhruHYn7Pv8ws4qfxAY6pgHUZKT0Z4St1LaC%2Br33Cl6PbX2gI%2FjiRGhimHxrdQdN3IpXRKgRd4GGVRau43A8gJfc4uITgAFSVAhKyj3%2F2GtdS4ixTjwtUyJ46IjCecesn5q2Yb0l2Odtf9dQIjeM%2BIt0JvidVhUF8lrf%2BUJ9KZyXps%2FYmDrFwuP6%2B%2Fwt%2FVOcaPfgy2IQa6jXbp7mChnQTqposZ54xShfvFfZ%2Fdi3IYPX1p6%2BezsQ&X-Amz-Signature=f4eb095e1acf085e963be42cece40f63b20af7d19b034a1a0c5aefb18a001092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3c6e36d5-28f2-404b-9f24-f2b58ea1f02b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666553TZRU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFxxIqu3tTOlsnk79i4D418bHWs%2BDzIkJnjeVOhtyHk%2FAiBSyRplGsj8EhnDm%2FqW7magjhgr9mCdLzriOJYPnhNLUyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc9dVNXxx917kMBjKtwD66tE2kuTYbDnY27F%2F3oHRoqXok7BYf%2BncTPqZRQT%2FeG1v%2BH6%2B8SoRDjXg37XXopcgCLhWZVuhV3eq0ixCbu37EvCh7XxH19WGZLiKf%2BHA%2FX2XkpkIbpd5CjRvEKzXdC5qTjlEH3GSjT852za4%2B68HoXp%2FuJ5xlwZ5d%2BkzoZEIh2yjpGbAQz10JnVVsbhZCdwxjfsn9E%2FQZMZ3uqUtrVSnEhrBCyGqBY98h31HhQ%2BYHKD9uhX6LttkMA2KjVT4JPBEiljcuYLYBYDQnyRhUyFsf%2BsC5WzP%2Fo2RBwrHTMnMcubkDatMcRK86ZIHNBQbbpo21%2FwdgxAlLWf4IoFRDy56SeHiavnYV%2FzDK3EdddtYHZALE6ViOnLwjsi2WnRkg4lH2TUOqlMR7yAnIc5iGbwJPAfrRvMmMZjG%2F94hoT%2Fy%2BMOTY1XLRW2LERBi9YPli%2B0H3B0x2BrAlAw2EjM1BPZtU27rQytB%2BNNPjcLcVGbZRewydYBL%2FW9nl%2FYVyfmEVcsWYiQcFFMb9Z0gg3TFUsYI6KPNxCYWQW4F4npsGKbLAx6LXZN6ReskLlaa4AlQJV9R5TvFSUs7UbNpityZ78AG8SVUYQUiKVEyV1Yuf4P6Zqf1kRRPhruHYn7Pv8ws4qfxAY6pgHUZKT0Z4St1LaC%2Br33Cl6PbX2gI%2FjiRGhimHxrdQdN3IpXRKgRd4GGVRau43A8gJfc4uITgAFSVAhKyj3%2F2GtdS4ixTjwtUyJ46IjCecesn5q2Yb0l2Odtf9dQIjeM%2BIt0JvidVhUF8lrf%2BUJ9KZyXps%2FYmDrFwuP6%2B%2Fwt%2FVOcaPfgy2IQa6jXbp7mChnQTqposZ54xShfvFfZ%2Fdi3IYPX1p6%2BezsQ&X-Amz-Signature=be43036fd70dac0271572c892b9a019d146f26a958156b16fe7dc725f23f1852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/cf60b627-fc44-4f1c-96b1-8611a5b18364/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666553TZRU%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIFxxIqu3tTOlsnk79i4D418bHWs%2BDzIkJnjeVOhtyHk%2FAiBSyRplGsj8EhnDm%2FqW7magjhgr9mCdLzriOJYPnhNLUyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpc9dVNXxx917kMBjKtwD66tE2kuTYbDnY27F%2F3oHRoqXok7BYf%2BncTPqZRQT%2FeG1v%2BH6%2B8SoRDjXg37XXopcgCLhWZVuhV3eq0ixCbu37EvCh7XxH19WGZLiKf%2BHA%2FX2XkpkIbpd5CjRvEKzXdC5qTjlEH3GSjT852za4%2B68HoXp%2FuJ5xlwZ5d%2BkzoZEIh2yjpGbAQz10JnVVsbhZCdwxjfsn9E%2FQZMZ3uqUtrVSnEhrBCyGqBY98h31HhQ%2BYHKD9uhX6LttkMA2KjVT4JPBEiljcuYLYBYDQnyRhUyFsf%2BsC5WzP%2Fo2RBwrHTMnMcubkDatMcRK86ZIHNBQbbpo21%2FwdgxAlLWf4IoFRDy56SeHiavnYV%2FzDK3EdddtYHZALE6ViOnLwjsi2WnRkg4lH2TUOqlMR7yAnIc5iGbwJPAfrRvMmMZjG%2F94hoT%2Fy%2BMOTY1XLRW2LERBi9YPli%2B0H3B0x2BrAlAw2EjM1BPZtU27rQytB%2BNNPjcLcVGbZRewydYBL%2FW9nl%2FYVyfmEVcsWYiQcFFMb9Z0gg3TFUsYI6KPNxCYWQW4F4npsGKbLAx6LXZN6ReskLlaa4AlQJV9R5TvFSUs7UbNpityZ78AG8SVUYQUiKVEyV1Yuf4P6Zqf1kRRPhruHYn7Pv8ws4qfxAY6pgHUZKT0Z4St1LaC%2Br33Cl6PbX2gI%2FjiRGhimHxrdQdN3IpXRKgRd4GGVRau43A8gJfc4uITgAFSVAhKyj3%2F2GtdS4ixTjwtUyJ46IjCecesn5q2Yb0l2Odtf9dQIjeM%2BIt0JvidVhUF8lrf%2BUJ9KZyXps%2FYmDrFwuP6%2B%2Fwt%2FVOcaPfgy2IQa6jXbp7mChnQTqposZ54xShfvFfZ%2Fdi3IYPX1p6%2BezsQ&X-Amz-Signature=e931a863ad7870d2bccf4fc591be264a81ed1141adf63aec1112c08d35a61339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
