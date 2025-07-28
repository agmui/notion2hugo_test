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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=ff54d28051ec4704c8b4f13014752417a603ad663a12f92d758a29ab21b5c1d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=5a96d3341827b9db55d291f7d7e61b1e4a37196e6961df7132b466ba78fb0ece&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=b96bb6cec0161736714237b60c2e8e686b66e0ee35d937dc07cdf2b56eab3848&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=e95259920d47b81d767805f0b25d71abab83bb91ce737d3ba83265d1ead094c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=7236efea2e50b805c2a2fc65184f240556acd599735d48af6afd4a3ecc896061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=1cee7897fc91ccc650a609cd615a5b9808a803fc6a003e100040585a33dd4be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=65200e4abee5bad94a571b468a49d95dc7391e5d5c400e923bcbcc0999e1f046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=899162f092c4e11f9698cb38337b826f6e960f0171289939a83d6def676a3347&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVOKXCK%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIEHn1BzJkigSyKIUM5h8Hv9udbMbnFy2bAgP6s9w%2FiF4AiEAlbcgcRupkSNP2%2B%2BmR77TNbE27tFBHqnNxS%2FoH33FYscqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIlb0t%2FxK2dLlcOnqSrcA%2BJQd2fJwXl4S4oakMWpIiXTVOjy3s7uL3sfIFFDI9Zfq1rggNu9LjKAp1J%2F5IDBn8IpwxGH1BR7T93inUNlunnmniuumEHJPODT%2Fj%2BJkX3lXA%2Fu9OKD7vXeaYnUURHvs%2FYboJ8XjXPGR1nvxQEouZl7LkLAgW8BFkNkLLKLYUUw%2BHKgzWIYa033B83Xazc9UOJXvHBLsXfhzuDcmfSHh0uTvOIJqZSoV7KCsCSvXL5aY%2F0jChSQkFrJ9v1swIHdU5nw2w0y5eULuh7YN0GV5IOGkyB1CugGgudS3%2BLaEROr19V9Y67ZKVWZ7D93QNmIvljVWYkrBXct3B%2FTJogwdrGgvrrGtFBew5AstYa8mKDjbghz7BnUSDcdut%2F59oQAfPdYwAM0VCY7CV6aHKTWtUPkWaM%2FdpYmab74dxlMHZVbCUDuzLKAUlwOjWdertg%2FqK3hzeXJVPyJeiLG8jOlzZncdbGYHkRZUbNvOsePUiqFgaOa3EPkJGrRIAp0UM6YmQ8bOzMf8ywb%2FvMxV92I1ADWRdG%2BqI5IihxGFDc6Mahdz16RF7naWkdafW5O7kZ74zA%2BQ%2Bhb%2FazTz6sNBnpbmQiEKgyie6or0JaTi2l0XqBQH7J1ulN%2FW6EEmu%2BAMKCKn8QGOqUBtvAoFi5MiDBIR%2FxXht7Xq0A0fDoMZ1RNAzIYHX%2Bmv2R6EnA%2Fu%2FomcKftwyvG7zZqqufh63GtXD2IHI5iQAeq0mgVZ0iHhABrVUU0%2BH1XJKUKgZo%2FM2jJRbohHA4qpH76uLrukGX2Dekb4PPJofMfzjpeci1V8HhUmGca4F5gy%2F63VQdgnMLoX01HM8fNn%2B8ftiUkF0tc%2BitPMuTozpy91ESFWetk&X-Amz-Signature=6bd5ec4ab67fbd5d820a8ca9c09a2efa812abe73bc0ef10733f36f80b5e47be7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
