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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=4872926295ea8feb95792554a3abb8cc7eac90fd05d51a7385e48c58ebc5d17f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=591626005c30a643324ccf27139f04220883b458c40d8bf5da23dd80b1d14250&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=2b032e1dc7d1b0abcf1e094ac1dd896d8cf60635bbe9192482b146121fa28c79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=b997b58a985af7efeec984ed3725362b52af848eff6dabe284e7917d3e0c9f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=abc05c7c5cfaacbdbe4faac127b8cce2997fa12de310feaba0a1a619380e77eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=c184b74e1498ccdb9652d9ea38ac7e56000d6deb3f684db10136ee000e0420a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=354d722dd02c25adb87c426f4089a095c1428155d1b49319af93617c97f7d682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=6c3a4503a12aed0f678c1e795d7b237ae271d4e96b78f982639e120afb08148c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZG54QMO%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T161220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCGW03UWOck3Mg%2BKYPG9Ku0I2TJ6PG3MqA%2Bq7SwQbq1YQIhANClceYOW96hOSLxpSB8GQk5KvocDAgfaMoO4IIc8GLKKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi7ksp%2FPE1SaZObgMq3ANS1sEKx6HpzvEmyqI8nFiMtvB2Qi310gfvPwZI7cxePY9qvQ%2Fb0AHu1CKm0z5TGQy6H5IeTPIMYMfX73u5XNAnJwFj5Qy5qwHbnxRO2AvpW8S%2BHSs44XM4cObsEZYDPvAt88hrGLFuzA4lou57UagNt2NOUr2SZbQspijfGTUMFIMcU7Psp8ANgh3fQ4yiyVSECs0w%2FRI%2BbrNRYqNtG0zb%2FFqLo5wvGq1rTxU2C2mpXuatIn5HJx9X2VZtq7joZTSjcNxCWoc0KgjiOxuHHoMeNWTT2gHqdLg%2BWmBET5MSXk%2Fff3gwJue6eDqN727jiItXjPEUWcHgT8Xni9%2Bp11xx0zj6Ob5Hjqcm1l%2Bl7lhIfUsMJXspgya94rgqqrOHyVVxURd6fVqgbXlC%2FwdYADIHcora87YqiyrJ2eefrwynQUkNX6H24m7S8tkfKKWMp9TccwLzKDtRP6lK%2F%2FsfHycusV6phgpFBVdwle6HcP0PG4TjzO%2BU8eVFxLn0YyOnBDVhQSPMlqvPtTl4lw5GWkercy0ynmzP1sTWliIwVvEcG8VkVs95VC2IyWQEvSD%2FZI1u%2FChMvJ4ochrM0nXbS92ZY1cLkc6h14ai%2FFhydBY%2FZY7tPg6d1xLNTwA9zzDbpp7EBjqkATMkpTKY3PWAsDn3KmdUCDIbrJXs8pJsmEEbfsOJmExW26mNbnNBktPXIafTvQJ%2B67gG2QKAmcDR95ZAnAtSX1jD58mMbQYi0l3OyEz085JKz6JEmgobLBd%2FaYONCUHJLsxBwy8gMuAPTB2gUdKi7uBLOibhrhY2HdAPeHK6Xaa%2Fv9iOkDjpZEG2FPZ3lQxLHghStrLm88EEvrphmWI1eB9An37P&X-Amz-Signature=dc4c1074fbab0203a4aaf902ebdc57e0b2bcb5bcc06a32fc928dbd299e2ea1cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
