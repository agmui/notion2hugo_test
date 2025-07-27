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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=3dd723b74a6871a099d5a99e5408240f31553b706cf90196deeec11768f807a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=472971fc944ad9e3ab680795251a0b53cec3e09b9e7655ea60ddf1fa2511f3fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=d723605116b7a4978742f003613b4fffd48c841038a8b2b1bbfa754c967c0c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=9310c5b1323bb968aa82fb53fab3a1a5b5b1a1440706d3dad42d76a229a9fcc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=9e4724be88e6b2694461b65b3f73dab535427156fbb0faee5f295d9f0b6c0b50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=fea4fa6b31d340de0666f510443b91afedebb3b9458906a6b626c8620866c247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=bc6055104954c96a9a3e123302c3000aa55b3139f8283606602d411f8c2ec51e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=cf17ec97dc81c5bb805cc48bb20cc21884e3f017934c19ef09b797c01790bc20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYICFFNX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJGMEQCIHobPFYzFba%2BonY9Q%2B%2FahCX%2FMc7mJU3qTNmGo1u5cbc5AiBd1zFb6M%2FVr0apgwd8QKFodNJ41EGoySqTKffd5FyrNCr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM2BR4Krmn3oRFtPzLKtwDxb10HVRMDSNxuTo8PzWtPKzDmoMC5e5qxOd%2BTlgjz1yOFcKX3TSgg9ZMr6Z6gsfVxN1z1WRSNvE1TJ%2Bc5%2BlqJrz65YrBzfpLKoKV%2BN1pCaaxXKXZk1AFIej5lXZ2RJNpelNOdA7GkpLHUHXjtdLdpyY3xxc7uIcZ4Mgqj2WxAIMZudElhxBZ3VsnI2dRcgFW%2BV5fnnJary6yuQPwrvoXObWqNvDqd1BPsyNEb6ZCg648UnikFIT5MjJ7g8dF1gHAnHOTKCAbTLdXpPTLdrGA8XxgvWJd5eoTfWlPs7V%2FvKFOGw6xUKvdlEMeoPSxBTKcGJMa8H42GtQ9X%2Fo0zjypaVrvdqUjkaII%2FXZ6T72TljC8r%2BGr2M3pTNa7bYBhghRcfumixjr5e7EgdD9V1O%2FRx2%2BrOVxnyobDfLIRxSHWSS485totWrt1Ykj2YQlZiSO8akW2iie9g4D2IkW0whlp33GVhp5FOo5wmI7ynL7vjvOZjZop7F0kNGC1KB%2FhI%2BkxTSmr35SZNx7vOIcPybo3UQElYu2QpTsil1CT2KdsbcjQGjPEsWjX0mkFc2hGFlHAUGCEDNTUbz7mxR9Dge3lrq0uxc6EoI4X0Oud9XLDPP0nLJvy30chkj47laQwmvyYxAY6pgF7WEL3dOV%2BGkwA6FVMGAWW5t%2FC1reYp4KEArrogbFB%2BAyhz7LcEKmKXE2fXsd6S2Eau66G%2BM8Po3bO1GHgI%2BDyy2EuzF2z8amlY16Er3QIz4lM7KUtJUNlfEpAF3%2FW5F3vdmgxzn9X9WCVI65fUJc6Kn68FQB51xd%2FiRv%2BBdKYQcA%2BX%2B%2B24wDLGMrEmqRdmiBt9%2BLnMQRuNF2dIOnhT7fTAFxRPL6M&X-Amz-Signature=408f061ef790b0a1d7d39b5c67f373d176b8434aedc6f11a3a616a9ad9d7638c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
