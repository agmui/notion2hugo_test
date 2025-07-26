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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=b57ecce2a77ce4f152c6ea115128d5ac085049b9f4562c2112d4f947304cb515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=fee8e15b5e99054abb85652950b5b0e7629c1aac739774595c844424262b2943&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=6c077cba3cae7d4bd67d94ed0ca0ee86abb16c115a1a1f67bddab8aaf7a583bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=778a08d8681bb9d71b227d2f6147053dbe77cfd9fa7c45563b66cd0436a1cfad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=7eb8f7d3aa8dcc70a95c51df6ae2929ec600f680a07f16f4f89663bdc7960547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=eac60ff225397cac47e161551245134bcfab1f34e7cee6a61b2edeab50df6ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=8f0247abb6121408d481412454dc9950e2bc06db08121a9d55777989b47d137f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=3aa91da739361504d40d300408295c08bdbb0a0f4c73f45058123c61b5a42d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TW6D2FM%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T004429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCHQW4Im2BfMbar%2FM1v5oWGLpwcQOfKKsBNLdsFuTyMQAIgMTBtrAs0KXVjvinAy%2Bq0EldZ7hv%2B2TmnnyDRjvt8xzcq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKthSP1Fx7k8fEuMISrcA8FratZWZMi4om%2Fzyt4pB22oKfD7Q5sUs0F91jSILcV9E2DvdWxeZ%2FWd12QrhPt7ECeCvde%2BGi1P%2BXlo4FBXdxkMBLuyCn7ETrblNoYpOF5uVen32GEeZEDBYC8SnhhdCD1rHB4tOP5LLqiMlKeFD3vaf1a%2FT95b44XAiMmxLTWlX%2F9MpP1%2F09wDXE3gu3OdpgzUgs4LSNLCx1BrPj3K3VvcqFdwwl4s4%2B%2FTfIMZoSPicrkZI%2BQLjOAimXo850llX4aB8Buk7NqOVVVJRuZ25q3YPNe5XFNrg1yrd7pKUhW4pYADHHtRJO43pH7q6tjzbh6pXO1Nr0Fbt9GCGucJ3DGqDB0BDBQK1zZ%2B9FP%2Ffi03FcLBqIlRrW5sXpWOZUXBR6rZWUdWzK6WEsJ8W3qsH43WHLrJEUggXMQFCbyLZ%2Babb9YAv70EQ4LtAhs8hmizWOOUCXeAZRoLrpqUoe0fN8ktldm9BcLrS5ExbG3r9iXP6%2BitQQirgbUyWLGRlxh%2B5OpChxqAYBmB9WnGBZuDF0gmfHcWgkjiKSJJi5LAn5I8dxaocf7KMvPcUBIZc2nYElzD4R4X2rQitlgHuOOVpi4jOtouidZe2CvSqx5%2FLtSS8SX5lSNxAKZo%2FxLcMPbQj8QGOqUBo%2FRbT005EjdE2nFpGn9zeCRz0U2iNfaKFcqRnldTRCA0S0LTNCSlaGRFocGDtf%2BvzmT7QC%2F%2Fsn6WQpWl46yjQIvttuW8oW3Sc7Xz7N8h1VPau%2Bo7436slG35yIph0%2FmI5uESIfOCHgflhFEutIN5Ui4O7kolzz5gVX2Km3BHDsyrf51gpWI8MQ%2B9moywtUbSBd0X1n2WPSJb8RJg%2Bjh1dGDg0eBY&X-Amz-Signature=9a76952e986b9a73537885e181051e77a5390092518f71841d1b6b9fb2de5549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
