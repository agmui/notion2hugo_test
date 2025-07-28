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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=d586f6cf1dc7a9431d8aa8a5ffecb4c4d3c661d755fa29ce268c477316ef485b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=14295f977517fe9ee67f29aa37daed30572be3671433631385297fee94311144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=7220580db17231c163f14f301bf2c687b3739c149ad8c50b6e70e13559ac6f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=22ab9ca2ae2598d9761049c2e693c2f0d29bb85034759c3d956201931688388a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=ca947cb7d1c9a8e84621f2c3efbd321baf78bf6c189c34167c90d9606fc709bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=3b7b83dac8b2e7537176818f8cc3930854671ef3c6771bf1124280c047cae1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=f1879da002b3ed43fbb57cc8e7c546b6ef80f25283d66080925ae4fb9949b97e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=17a1ee8e615847443dad9d795c8df161322b58401a6cf8c070e7089c7b825db6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRIWDMVR%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T081550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCiZcG2th1z7YO4iaF29UM3bVm%2BS21ztOaMnbUWADWZWAIhAKSR3UP12ZNTEbPwq4ykmax2orpRKaKhg6Dqfj%2Bn9SB8KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx3%2F7WiX5gQ2K3vZUcq3AOOTQf8ZUGU8d33wlb9MNWkXtqtu8gRCMD6X9nvsnB%2BXNEn6%2BnPPlGZuwBkg81OekOV8Sc57nssPH77kmKEikLvAbeguZRRKz4RnC4IYE%2BToLEKXeWq%2ByjepCK79xVUptBDUGjnxHjNPEQ50idxbbfLVvVPWHD9m%2FigRNMeBNxw61zYVeQ3YKr3IvJxmvi3MQ%2FXXNja93x45fvyJyzDoiuLISGW0nuw%2B4KjJ4DTyRiROehTgpV3MHTMhcycmc%2Bq%2FquTqou2UKYJvCRM5ELWb81%2BoV8h8SB7NG5bEiMUxbovMR5fySP2uKlz6gu15Qb9Ejj%2Fxea6Egtm5vXPfRELYvZmSsYX5LDY%2B7MlwpMtV8Z%2FD3JFHB5vj2DNcVHcV6o0gDiBVJY00PoOg%2BANnAxnE6lesz6in23jeAVSUUDQJMW5vueMDjPIwNuwPgRjXADgY8YW6%2FMI0Pn5%2FKYhhCRskzpFMlPEXb97PQdm1xfqaLOPnrymzAr8%2Fpc9SL6Xs8bROeVMgoH1nZXkoaxil15vDf%2FCq5DCNDNYcMlUJCwNi0cKZUHj6JrSQbRuN47T0ayQDdtc0hKcwVq2IZtc6wp41fkC29PWcfizKg3%2Fmv0Kz3EchTGoMcSEcNArQe2PDDC5xpzEBjqkAdDhydPPSr%2Fr7zEDHjQ4kZMmk4tM3G%2B8%2BwkkzM4XLrN9iEpIdZ7GmVIFU1idFXmf3uZFNLjCHruSPlItSxsysGCrJcT6ntO%2FhsUASuJRgL%2B2C4nnr5D6GF4O16GPLNsdJHURQnmYG3I21S3v4pFlF2LDcnzEjoMMw9ZTLtLElmR8ZRJm4du8u7kfXNYLSLKiJGk9p%2BHPIP6G2KZTiqNdVRFXGDNO&X-Amz-Signature=fda2f202823d10dacab30d04509e0ce55c9e6328ef2ed4cf28bb44f5f55e3fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
