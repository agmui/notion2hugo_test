---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

<details>
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

</details>



ROS has a package for SLAM called `slam toolbox`.

If you have a Lidar and Odometry it is able to scan and map the room out.

---

## Install

```bash
sudo apt install ros-$ROS_DISTRO-slam-toolbox
```

{{% alert icon=”👾” context="success" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=6d0a9f44a505f3e44c76a14c27a33119fd4c19982e9bba7ae835e4e873edc103&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
    return LaunchDescription([
        DeclareLaunchArgument(name='use_sim_time', default_value='False', description='Flag to enable use_sim_time'),
        # joint_state_publisher_gui_node, # debugs urdf joints
        # my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz

        # stuff to start gazebo
        ExecuteProcess(cmd=['gz', 'sim', '-g'], output='screen'),
        gz_server,
        ros_gz_bridge,
        spawn_entity,
        
        # lidar_node # lidar for physical setup 
    ])
```

in 3 different terminals run:

```bash
ros2 launch mbot_pkg display.launch.py use_sim_time:=true
```

```bash
ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

To know if `slam_toolbox` ran correctly, in logs wait for “Registering sensor”

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=7ff3b7016d0693a2b0dd52c9982b8a799e72bb7d845f34fb049dbc6eeb85c35b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=f6bfaa2e0ff2c1eb7797bbc60daf44cc55f999849c699bc6135336624aa13d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=24cdbd407c679fd1e644e7257664b9d5af5d4b21caffe9c380d9f0b6f738c11e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=ba8687237f6e3b8b970b22625dc71bb3f822a1061b99d1c2d107190c04286866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=161b3279e4978d89d0e7d3cf9a6b8f94d7145113bb4548957fd7fe7493406d95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=bb1921f0e237f5117325a283a74e5c4cd515c47c36839fb467f66a332e75c65c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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
    ])
```

in 3 different terminals run:

```xml
ros2 launch mbot_pkg display.launch.py
```

```xml
ros2 launch slam_toolbox online_async_launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=64af508a2a5188a33d54580838a4cd38b8448962721a184c1242ce545705cf7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=44f3e5524001f385bdf9d943153036e4f7cb33e978e1e014af1da25daf4d29cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
def generate_launch_description():
    pkg_share = get_package_share_directory('mbot_pkg') # gets the location of mbot_pkg
    default_model_path = os.path.join(pkg_share, 'description', 'mbot_description.urdf') # gets the location of the urdf
    default_rviz_config_path = os.path.join(pkg_share, 'rviz', 'config.rviz') # gets the location of the rviz config
    bridge_config_path = os.path.join(pkg_share, 'config', 'bridge_config.yaml') # gets location of gazebo config
    world_path = os.path.join(pkg_share, 'world', 'my_world.sdf') # gets the gazebo world file
    slam_yaml_path = os.path.join(pkg_share, 'config', 'slam.yaml') # gets the slam config file
    
    ...
    
    slam_toolbox_node = IncludeLaunchDescription(
        PythonLaunchDescriptionSource([
            FindPackageShare("slam_toolbox"), '/launch', '/online_async_launch.py']),
        launch_arguments={
            'slam_params_file': slam_yaml_path,
            'use_sim_time': LaunchConfiguration('use_sim_time'),
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
        
        slam_toolbox_node #  providing the map => odom transform.
    ])
```

# Saving map

`slam_toolbox` also has the feature where you can pre scan a map and save it to load it again.

Press on Panels → Add New Panel

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=70dd6a7fbd1308208e1da7cc02723dffc776e1457e7043eb204668c434d63bf8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=f045af91b4dbe6dd0af7d87cf0e96a790770885d92ad4f138f1edf571e40ff40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=058445541a7b710f5e27f6eeba09baf48f9a226ab9df1be56e1d272c4ccec4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=aff53eb70b530b9cb5787cf8c7b450c58a517b563e5bc5ea697b9cff2bf77dd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
slam_toolbox:
  ros__parameters:

    # Plugin params
    solver_plugin: solver_plugins::CeresSolver
    ceres_linear_solver: SPARSE_NORMAL_CHOLESKY
    ceres_preconditioner: SCHUR_JACOBI
    ceres_trust_strategy: LEVENBERG_MARQUARDT
    ceres_dogleg_type: TRADITIONAL_DOGLEG
    ceres_loss_function: None

    # ROS Parameters
    odom_frame: odom
    map_frame: map
    base_frame: base_footprint
    scan_topic: /scan
    use_map_saver: true
    # mode: mapping 
    mode: localization 

    # if you'd like to immediately start continuing a map at a given pose
    # or at the dock, but they are mutually exclusive, if pose is given
    # will use pose
    map_file_name: /path/to/map/test # NOTE: no file extension
    # map_start_pose: [0.0, 0.0, 0.0]
    # map_start_at_dock: true

    debug_logging: false
```

Running the launch file again you will see your map preload into rviz

```yaml
ros2 launch mbot_pkg display.launch.py use_sim_time:=True
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Y5RHHAR%2F20260118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260118T015534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHD7AFeCq8Cx01OLmn7pHUk%2BtLaQww%2BfNBicY7Px1W8aAiBod1mfY2GeGV%2F1maoH7H4ZveGq%2BsCXQ1faalmf%2BpufKCr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMmM%2FfcKxg35nQk%2Bz8KtwDUVZGfrurOuY0UkQ%2F72oHNAqJvrq7%2BHvtdXnmBGUHfCVS33wcB59PJBvx0OtqXCFg97UqD6mMezsvSI6cGedAixmDu7Qm8BpDVFtL%2F%2FjA9VSK3pv1zoGN0lSDFSfZp36vQh%2BXgEd8LrWMRX4VJ0l4eHhrf9DE%2FkJbBTSdAqBmg5y8W%2B9mIbKpUq6BFTjDBYPFG5OFheXbvuWgQN4wdIr4yfvGkr5Sq4D2i8JkYrFpCpeK5FLTRe7MR4i4xUquLNdgNBnCBEWxz7RURItT2U0dHSu6PncNoXZMzMQ5jEvYfkw3IQf3kmYEzRKrS6g7FpBp78lzoFqIQMRJO7ECqtDDQ956bnnjGonnVm%2BU%2Bi%2FMdqTze8jLJJYlDk0oHbtN2itcRH1SpDn07ixgxXO0WXC3cxI72wYFnmPwMwxTSXiEUWg8rWPl28ApkgUJEw1D%2Fs0a9fJDiaHf%2BRi%2BEmhBD2mTbIQ0NAK6VH%2B8%2BB3cEMmJhTVqJoAQOQ5tCWnjSOdI85hXBfIfge%2B912nvKf09LZEIXhQBtfNdWDuxedbvNQM5Yur9D8%2FiD4R0EtfU4VINMC%2FpQmSzJj2FiS21gWr0gS90lPRrb9edoDmQXe26mEvuUKaz5eJR94QsCRIqRo0w%2FpywywY6pgFKtfupMceeizCj32%2B9NZoRKK0%2BEG5ro7C0Q6l3Wdx%2F7SZ81gsNYCHOmMRzRnfXMeA7TLbOr1nIhfEEPLb9WsUp3MIlqx1xpmbZWM7DuuU2qW9jsvpPmZ8LGgTY9FauGaF8YptwOdMqmpI96MWYBaQQYOrANSrdi62rZBLzgttTVagUWewH1v%2B5GnP1A8TYO7x%2BEXE1Y5T9pL3J6t2b98YZHe4RZn7j&X-Amz-Signature=cb4f8fa7804c46e1b58a6d49a68d1c9ed68282ef903b813c79445794b503228f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
