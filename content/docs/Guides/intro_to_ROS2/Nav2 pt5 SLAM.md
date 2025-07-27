---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T23:11:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T23:11:00.000Z"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=97443eedec4ebd5e79c91b3ce52ea909173ea627244b5c2294360fb61ce1d330&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=99944f85a4015f657ced9f068179858f4772c23aaba406a5b97db90f38a21ae5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=fd9ddcc0141ed26c29baa487a91b2122190182e32d34d3244cfbe0e669493fa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

## Updating launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=7d5428dc329d6c904fde180497f3bb1bb21e116f394616d516cacd53e618b4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=455946a890cce6de5ea32ddcd58201241772b056939923e7a6ce1754be6e7623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=c0deee4652927ccdcfb6232d217d570a84b54394e395ef522a7ca3856668bd5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=0a3c0997a4422b2febdd9a540639d564db0ae7561fb463d34ae6cfe8726abafa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=cc955f4fc825a24fb02241a33c27aa91bcf78587f24acad2b1859487ca9c87ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HFFDI72%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T090944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIFwYKSyZdzTcX%2BSwLOTZnRP0pKXsSORfFxPxzAGRWkYnAiAJM1j5QF0gUzO4sObmAu4vtveZ7p6z1Cs7vs%2Bv9wGXcCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMj%2Fbt%2BKcz%2Fmz1btc%2FKtwDEDfTlFP5msBsbJGkSMOHXDAkbXG3jFJbIZcybEknqt%2BX59RRMhLMUbi9EENwle8IB7MAkwJhWLdmXW6mJZcszs9Zi9IWozr5IwR%2FDcHEh4GL42t6Xl0Iq7XV8gtN%2BnhJh5eIk6LVW%2B%2FQot2V79TQySRmacQT6a3Shxk8V5VrdFSZ7DHyosvNVzLvEGCmmS80ZBNJ0uXZj%2FjJx5oB3JV4RCxVO90NsHXGuuok8QLhvAEdG%2FPaJ%2FbLKO5qCTWLmpDxUlax0Km8wshFOI%2BXRu4VFHLeO6LGQy6BXVYfX%2F0y8aY2%2FmT4kw2B3uXVtbP2VdY3pjK%2FTOKED%2FiUzdh%2BbBy0mo4XtvaXwnV0ZgI%2BJNPIiWuQfT0qYGLZMr%2FogmEUMOqYnbzpDfQteS6UfNUIq84YSEJgQSQh14RtkEu1KWF6VARzo6NDayTA6pWd7L5MyTuyQzazzw6qwRZzkk%2BUaWzlYz7VWepBtz79QY7VIyeFrPN2wMvzrSvUHceASJwKNVgWavgHcgXy0vNeUy%2BMMxChziHv4n4WTYQmeVyqQIv7cOhTtKdDGvhE5MAv9isGm2Ff0BbUQJj2sSr1dIDf6GgpryMRZ7d%2BWNJOVxxGpq%2FjBmB68l1RgKAuoEhdKgQw0LqWxAY6pgFK%2B0RrEG0MGUeq1gloXxMqLEr1ZqPegTzzTZ0OX0DV7iOSUY%2BuLvrJObfX7BcE3UOm4lNSGYyNI3s6FUr0j%2Bd5PCTI%2Bv%2BdCXYWJK%2B%2F85NPWHXV%2FVSCHh5So6qBmEx6p0JRSxTuOGvel8kLW7D%2FP1mTbCv7LCkkcvFh%2B%2BBohHiDWGvrhPzrPaPsN4HZ3f%2FnJn%2BUAF8E4eKslu4vGkuh6ixMqved8Tnd&X-Amz-Signature=4f015ff675eca684d813680d55d691e8e11a10e870646c7995776181c476c512&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
