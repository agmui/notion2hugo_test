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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=f7f57c1645a3beb4deff19db6e23b99d012e8fc7e673353a700e93687dfedb51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=2a7b32de4fd46d5058a8602ffc071846ebe5d07f1a5dc3a19f228aa2b09a67be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=da3066b36464a912c62b1116fae92db51aef16822c57e2c6256d0823dab40786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=d9a0e6fcf41b849cf249407eab2df57da91062cb2a0c24c9a8fddfb6c0c3bd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=86bbfd8390a09aae28316b8c8fd8d23d190c115eb1eee9762a596b3bc2afb293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=a3e43639f128c28d9b7ea6b8ad9ea2e0f34d5fd7bea977830a9a83d646d1d4f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=37b8c4d67be3f7dc1b6eeeb5f0d6e21902df4fc9d9c8f6534f037df20402e05f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=b3304d369be3a5cb428face414edb866a334b4dcf8dfc4d019d0061c4db5123a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVUTW53K%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIDRpjdpMLYq6lsbC6DeLr7fbKzNZC2vkP3aaE5HKRya9AiBeCcDdYQOBTeWZc1lzb3VYXYB%2BluRmWs%2FLH%2FJ%2Byt3zeSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIMDJBXOggDFb%2FHkWs8KtwDaF05rbg1uwlIP1KGj1Cw43gjEo9EVddOpF5Rik7yQEGwE7%2BlN5r1rzR9G0OuHvNvprnhDqpj39n%2FmVDB%2BmWIJQViqKN%2BI%2B2t1NxaqPNnmH7hY%2Fya8hvxCW0S%2BodVAZleyCoWBgow6Dkatx67YoHs4ITUub0a00QQggR3ecxm%2FIsl8piqjs7qdpCz3MmwFjAfOYnMo%2BcwlBIRz%2F0EH8G%2BNj25AdVljo5E2mmWGzondD2hqJTDHFpqOOk7oxq71pzwpFK2xPsB1XDv3mx0KbcIf%2BGqKRI8mGnPuqqsPALOIUB4IlxPl0CrYjWs%2BbfrenuzhUXyVQcMxCkWYgHAZ1cLBPk1qxJUEYfNsE8QgYNdlz0luE0WulDV5549reWXrdNYKu3GcQtrtWwLEY826OLfkzP2ZzLhlFKvyl6%2BoUSCsb389c%2FL%2FLqlMb2YB6l%2F7TUHdF1b5mdhoyU3CXdTYNGcKPV2NiQC0hlS%2FK1LfUQLpeQdyYe7vGrZi7pnbtcoJEReXcKjG1ihk83%2B%2Bu872Dj%2FLLiDPCJSc0eezlMfQJzjWGvVNwCZxJqUxGwRrmlsxh%2Bu20%2BlB7XxIEyPEywxgFU09rddivy38xPWOQ0HCtM%2BVjZg6GaAcfdQpiyJU9Aw86qPxAY6pgFp7gF3qv0%2BqRQOitQ2eCOgsPjVJvqUJf8zPx%2FTJ1TS2vaTRDLsq5dfcd22lcgC8AebW5UVg9QXYTqIfzJH%2F8kZs1blVmxlz9wtWIvX69SlT%2BJODgPtdh4tDU67PM4yAic84TvCHxRf5QkYwVgk2QdoNb4t9olVGmYPQe8%2F6whcSX1cxlbUpPC9jE%2F55pj%2B%2BHqMPhCT65G769B2h2YrpngkWUhO58Jc&X-Amz-Signature=84703c082cd91213aef1a6659d6566966ccf6b36022ea6cd3a09dc0aa04df015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
