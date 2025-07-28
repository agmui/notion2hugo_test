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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=510964133ce3a52e187a3e0820547ea0173d2720fc57101d22e8c32840661a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=4c08c0dd459ae5798a4de012d825f1926ab30df9839e642450e7fcb8d5b4488f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=1aae5d8fb3e854fee691db2862669fbeda4236c8dd582e22d80f3c6d147f6792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=af78c2585e3d62840711cea80d906876c5d8f734afbfd070ec63781f8aae7a15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=8d2eec9ab8b678dda3620f756d4eee2166de28479fd4a2d8849ebfca95a967bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=b71f53e22e47c64b72c7e6bf24fbed9f374cd4951191894c4447c9be1052db93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=1ae659fe99a6af5da31a00d595afcd3545bab0c8e8ff0ed108fecc0f8e72adc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=7b8f250ce23b57ccbfc1fded1055b017e30e9bec874c2a5eba47a6fdc1407e01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOMKMDQH%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T171349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDWIJHh9JGapbku54PD%2FHA2xm2OC2%2F2HGN6IAvIjLBhwwIgPdF5lfnqVHFM5%2FX2Mz83ld42W1L7gVyM7qJuZLFWHE0qiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2BppuXImW6GXUAUTSrcA75QJE4Mv8pfUbRgZmtI8FJYmZyyMm4Ix8gjkJKhoq58%2FUsNh9cxfDl%2FjICwA%2FqdhjOWGrFbEm1WyrbhmAX%2FUI6ABS9lIRKZD%2FTPw5XqlTl2EgEgwtDMP9X02Sy6YHBeM4lW7wNc6cQFI%2BV%2FmE7wDgB3ybKMkeyt%2BSaSNzQGbA2o7zFyJxWqaGgvB3jmQGx8ULm3%2FkJeEqIMNQCnVBI%2BF5iUkdiDZD%2FguKTNe1B0lvCl%2FyeJqW0TyD%2BExnFCQunh1xvF5HWqeTJApArg1SJ9skPG%2FXBh7MDMFuUO0VMeC6d%2FQ%2Fy%2BPBrP3mXonCWGIGeCLgrZKRVmeyhsczuCb66ZftHCxQZpIaqk0U3EmRrUuRq%2BPlag8O3Y2tM4w7XBw5COZrruA3A04zsZyUcGYTKdMJaGEcdPUsoiv8x4c1bUb9f1vmVWOyIOCPQ5Wu9%2F67th67dGc1JFiWdBkZt3tgiSagUUpsx%2FOCMa7NtXFY0P6E2zR6lfLeGkpOxfiU6FLmNj1XY1wuMW8urDyzCgk618h96WIqcnsnqPaLWRqQoAS6h60oPPm4UMZN%2BPM8V3hAfSDvjT9Zgxn9wgV79KPyCf29%2FLt%2Fy8%2BqNSwhHp2S5HmFylY7kmmnXylzydSa0EMODRnsQGOqUBwWU%2FFDaND2t50JViyYcSRHa7k9%2BcicJxS%2FZLTbqQuLVUHfpXpRUPJfGVmGa7GTlPF52uC0WSPtxAbTiEysNoTGn6gt976b92aqqV4TscGm7TI2COl%2BbYWmPwL6IFyCw7IdpiQAv37iQIve97g%2BHj88KpMHY1TXez7Ub32RQmkWOJjxGV1Io35X8tvf32Rz516pVJdaHE9jeCSUkqsI9aa7BWOv6z&X-Amz-Signature=cb0f934f0909decf2b5aa13e7d730a4757f0e7e60c44fe9ee8bbf2f84e628d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
