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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=41297dfd5a64bf01e688f6ef4daed5dcf4daf94d0e89ab66cd18177ca5c10747&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=3d45cf5ae4ff8e29c0258bc4cea735c0da30323faaf74e23b4a0548edbe172d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=40b6972ea3804f4b7d8d858b95d6d58a17fb3984dae4cf17a74aa1533af3056d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=46e546faf8d6cdbba86fc4dfe2ce5331ef19a72613a7e6fc03684d84b6ba35b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=c975af0067a6ab864d76866b89a09f51318eb39e66356ccdf327f57289f5ba2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=cbda4a815c72fb9d02b2f7428520338c135738810efc17caf56966e533e0ec41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=e56a48ffd53e49f47d334fdf1c4625dd0a0405846e17f59a9d59e71107f97a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=3ba51cb694c49e2043c6f79ad0f6f90663f837ab7aefa111d5666aa9568d0eb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=8c9033c79e017de70d9d5ec8ba8e8af3978e6713b88629e22976938439181afb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=e593daa3c0f1153b61b29422a85c70ea1ff6db18d847680215b2fc025b8e0a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=3ba2a7440b9ec9674b0f2011965b30b956ef6be1926959ac665c2f886697b622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=8ea8732be2af30a9ef74f6516edae142023a9a8f2361f4b321b6aa25d4880625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=09f29a75fcbd9b9c9f09182611f3df74d416b4e35963bb52cef24d744dbbadfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DAQJBNZ%2F20260318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260318T021348Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIB8wydzN8N1wLYBPZ1nDPY2TgZ7wSWnh8dN8%2B%2FrUaw8QAiBjZdPle5vnhwIfNFya60S7bAyI94v9tI3VAKrg5KkHKiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM7m%2Fg4n0fAOBiA52XKtwDLxqnnq2aqN3PTasbfmXGCK785HKYB0gMIgadvBdgjnlJ6VmhSa5aDW9e0rHgZMUST3ZBYJVt9%2FWPRqTcIh46nVmYCqywZj%2FZtVYA70zMWpTIGlXCU6ez5n0evyK0x7WTZPtxcSUhEcjSZLbgQ3CwpIr0tGC9W%2B7PKleV38XEg1yCRaHvqJGUxn4C2xt%2Fby8cbbDVlLmKpElKcNo4pg22wd6YkHs1pZXIn%2Bef2u0vbVwGSM3WwOOf7FN5GT2Qywv7rA2FuOBqHQxaZyuNv7XHr2i9Cj8fO8EhzBSltHo8iWfBVpCMR5v76h9BoJuvR3bDpfQNIq6FkoLhJpU7gVPj9GJoVbkTQO%2Fz6C5i9jAixa4Up5u7X94nM6ZfeIIqc%2B4VzNohd25f%2Bf1b3x6EQrFD8IOcd2mHJoXzi9o204v%2B%2BVZC7w549S1exgx%2By1rb3qGyxpasGX8hmP0GC6eqrLf7EYd5jRX2buJr45szBfLeElVXwWQQJ2rXihuf9Zxrjb7x7usIYoxhs6edE1xaYurRqrTM39Xih5zdKo3RMKOm%2FnTcqLqawr5xrHaI%2Br67C8wTUz4GNFarnCnJr0qU%2FjL6xfJoPPYgOM9wqgVoaMPc5x1xwEVJDltg5EQ5l%2FAw2ernzQY6pgFQLXXmD7qyHXrUYMVb6Gd%2Bfe4rVJx09gymj9yzuCRgDRZmMUCTUZoigaRl0BBr8%2FXWu7V9JxaHDcN0NNv7BcRajqgx27so8ZesYS6FFG2S6w5Xwgi%2FexKQ4Lk8c%2FCOa0BAVmVL1pdB3Lxh5yO1onQWyzJmzLqej5qOsRpizrTmIHeJ6Zriu6TnHKcC4GjjkZNLlGZEkhi7FiIIp%2FEw0vV0ErKvGYhG&X-Amz-Signature=db32f706669229ff90c4396f3cdb9ee98958b61d1c99536e611fb3cee834ab44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
