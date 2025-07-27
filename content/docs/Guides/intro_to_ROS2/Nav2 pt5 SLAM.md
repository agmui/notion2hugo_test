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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=3980e733791d97376e2f58b8259c33581558f7be4ff08f4a3971f83a27d2919b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=a60a82cf56fde045c0a715776836e9ee24c4c7f23953c19476c965ddee5034f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=bcfaaecb9142fb963bd656780d34e23172fb0142d322644e3a48dab7c882b328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=024b762b86b93e73cf821b5a6a6ec55964f6b8af27723ee2d20f947c1d099c2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=3c4883127beaa0022afa31b6f2bf6a1e69541dd30533254226c662f8ca39bd0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=2cdd3eecb69ca302aed71a89612c4d2593d4e2bdbc32a9a22740e31b682e2535&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=1bf764ff49cb0932a2f7980a32fb4bce664764b376cfac2050d44a17fb260b02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=27299a955c56b29b5607a90825b28b9595d8eb539b1ac166ca4aedd0cc009f20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOUJW3ZR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIGao7NuDsE%2F%2FfF86bM%2BTCYHzl9QS2aPWz203jfii%2BlOaAiBYYo44cZmj7qM0CVY6IIwOii9PTZ8A4sk9GaM6OL7cUCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMbCgSB3yn2uLuWxGJKtwDd0nuM%2F%2FmJh2odpL%2FpIUC1Ggkso7SCZA9D82EF7tbSsKotbpdkRAzVkj%2BPfrOz2xsgy5nDb2wDMwfDfbPRGKW36%2BHk%2F6uKiss4GcLBwPdrvnCjZMMfaUrP2Tu1n2ptDn%2BYWxVdQSCjIGIPoHX5Q%2FNCl0t2U9QHNz8uLNFx0upt6f43dqk%2FVy5EyrfXCoAL6RVjkdhKLO0NG65ZFzhDWDqA31ddqWQMhDiSIbh8s5hsqlky0D4CgUXTA%2Bdp86UZx2PFjr72okcs6h0qSoBAyox1nNkiJ8BJymsyOTjhfG8PJi1d6SD%2BQfWY2BpUHGfnA%2FPhTZDA8950W1ZPloJkAHaohUBhkq1HnS4M8bxKB61Fly3BYIYR2bk4JKNEMb3ZJ5c8EnqB85foiXuCuSzG4ml5j4MjgRH6XBouSpO1pf9WNvz8F2rKJAvD%2FkI%2BFiOtPlcBgYHGOFakF%2B9qikA4eYy1fNuyAkSlmKcwHZCueBFffXZ%2BoSQ3tCvkWOBnmca6wPEy4lr56ej8WjNc0MSIpgQFi1VFvLAz%2BEoQXleLX68QB0W%2B%2FOzgK0T5uvzQU7SIa%2FIpiidSJCmld2hYhRc06emevM7Zy3PzUpFbbWXA6QCAPpIZKTedsp3pEjimXYw5f%2BYxAY6pgGaHxKQcc9syX0X9TLK%2FUo%2Bb89Y6IFEDDkrrXOIScmjeIaulw5rxp9uFJZzaVBlgWQ9ugdNE8ZFrbZh1y%2BS1NIijkyghldwY99Ilz07WbyNCLVe6hBDLhzewANo7Hd%2BTUddSGkzTnPjZ8%2BrdDAUbgKPqGmvsRKr5G%2B4nqoonLer9%2BlmEp%2BJ9sjt2lg%2FW0OPVCLww2DOCmRy%2F6Vi0bDC6aWMBlvqZiju&X-Amz-Signature=f65b49d5e628f3f00573458193accf4f1057b54ff9b9b2d2ad9669ffdb60960b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
