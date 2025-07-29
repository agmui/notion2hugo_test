---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-29T01:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-29T01:30:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

<details>
      <summary>What is slam?</summary>
      TODO:
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=85bd6ceed3a3f7f722dbd471dc74d76d11fd406be807b16b510d7e90550e34eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

{{< /table >}}

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python
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

TODO: add rviz guide of viewing scanned map

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=e50827dd2de2a9468bb69fedc15827a0b8ffcd13c072d0a54fa6520aa206c159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=e6315208a029a37c33e04ae9184ccf15c723a72a06a09121363f91b64b68cd35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python
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

### SLAM Rviz display

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=139ac33b724175bb22a108153a339f9f52ebe4508a82ed01dd6981750ac0c45c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=e4b206cc6f5c982c0f104deb385694fbf29b687041d567a55f5113eb81cf7279&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=a1078ff3208dacda94932cd0101450a4c8e1650cbfe49d9027850b9bb9fa1a2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=1ca1c6701a7d4af254d27cc7d7cf7aef42cb8b6d92389afec882f980b6612ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

drive around with `teleop_twist_keyboard` to scan more of the map

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=e86edac66e7e602b060468ff403e9ad9e6c39a343dc7f3287487032be6bde646&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=4bc6082d3a8f40896c7074a78f03bc374313e449d769a3d0e9af5df668615036&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=0f0675b3f3b8683eecc394487a47193830b1bc4e3eb84d9213cc122dceca003d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=73bbbf6ef6a4068e5a28e9f545f34a39de7a40520c352b97d2257c881e7ff2d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=47950fad7a61f28911980afe3e1db8b984a1ca3b70b4e73b61006933b3ec13f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMOS5QFU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQDYiit%2BwRa4Yb%2FjXKb%2B7WMoJ6Yzp8HpZB%2BFiLuMoenmEgIhAI%2Fj%2BYeSXRY9bEq8UwWfW6VvueabzUnnT4uBxyu%2F%2F07oKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw50BDEyxQ9EbA9FYMq3APWWRfm17fCkfu9PriyvmwLZ5CLxHviDDxPEcvSGnTjpi4ZKm7A%2FXNB35JQxEZucNDD7tEvM%2Fy5eSj5aU4YqboCymrWte72ZZznjr%2FUxB5GCyvWfU0HHTIdtZiHsdK6gGxuxo5vmkOIiU77OlN4rIhAAAJVEAQh88q0qabZ%2BoLMaWbV6yYYKfASok%2BNNT7txNjUH5Iy40jXhpZbRAjnR%2BMvGmmNSLJ8TiYRJneg8qyFgJKJG8LA9Sx0gEYmJ%2FYOmxWjv19sv%2B6LiekLK%2BgsvNKN5P%2BQnUzaMbdT6kZdrX3aIegu7u7%2Bhx0WoLRk6jb5wVhBt74XPzYNy5WErmXfPTI1JTPxPhGUDTD2N1tD48KNOb2f9lZDUxMh8oD6wMPkPyBuQ2VAgAUHVwp%2B2H7yFUo2Tizp1O9tA03S6AocQHO81KJXPiE%2BpnmtyzuEgoqG9zjgrxl0Tc9sDCNXKOPh66W8fksNGWXstdXfS79O6kSYriEAXMEt%2FqKUIyzAgyooxtP5hh8s0xR1nn6JIJ1XYOqv66kIzueqriSknnbkPC6GROXt%2FRYfj%2BJjYqSkxR2HFtE9pCwPUFGfpT6Pu6bHb443%2FL%2Bgv%2Fewb3b8HlR%2BbYg4Q62aHQUGQzcei1WjeTDfg6LEBjqkAd8sO%2BpguvvWE5GGfQEEz23rn3HS1q1IuF8EHPbQoUl%2BW0mmOMhwTfUtNpDebSwunxiGNsJS92S856Av050VvRbIZuHsU5XN76TmkGrjG6VY3j3VjbF4i5QWAEzWlmat8PArDhu7z5CHnLehYsaxEhw%2BBZQEASpzZM5UvRTwph5CGUbNVWSxVP%2BACka0afKaIW165MXxfZkBYF2PLKV5axjPDeUi&X-Amz-Signature=3f79ec1ff5f308991d39775e029fe70f11fb0e5d2f02c0988315038bb41f827d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored map

```yaml
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

TODO: add pic

For further configuration go to: TODO: link to slam docs config guide 
