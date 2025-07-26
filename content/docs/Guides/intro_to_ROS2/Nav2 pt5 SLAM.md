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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=1d76ec7711cd00016a55d7dc3bfdbecf9998a99e9ff5382d4c99ab77927a802c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=3acab0c7b7e88d2d4c4d0e44f89c32d1bc0f471596e4c5a8f786614e2b3c9756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=79fe55459370568f245ee9200d2235e67b7ce75d61ac227fa87c1e481d36bbf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=b589b848e18df099c37918adb0fc49ce143911a1fda4e0f345f0fb8b6c49e925&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=38139f39232fac51637daa0abd9bf8a071909eed0aba2bf7b25d69e31ed3d501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=1ba28042f66cf7450a2e4761a6f6f64e3e1084e3abdfd1e8bea79d0cbfd193c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=b33edb64dcd4f8619523e00df6bf0afc2cac24a02afee1435af16ef84f1fd384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=c01819f9d7603844f40d36294ab78ed80e9ffa53069fb9fb0aa4c2661be32077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662224MJLU%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIGNg9PCi7GXgOZlHEU%2F7wuvhEFypbEvz7h2g3vecRZl9AiBwipVv%2BSfUnkouBeNFKPJyDJOKwXPlEvgaWBFDhNO9zCr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMFiNIQRsDQMWTWxiLKtwD94MOKsT2z31TZreJsEVKNu1CSjvL0VKYBqI21SNlo5uQvdkz480NsMh98n4muXNSKJMznVA7ivlI5cv4bVx7au2mQEeyD9bCHTbnSpNFD07XuAcRtTYHCY5X7AovVLPXoHdHX43kCEStR5nsj0l47lka3qPQyxXN8FJlY2gMBOvcA%2FgT2sLTonI3KFm48FBNcExrLKylHRU7%2BY7SJnRjOQomMTnOcNPV7FDOIJyqGzkroi7zbgPMoRsmnY%2BZJBwEncQPCX%2BdTh%2BVUDT4g7ypQbEgoRxVIS8GBr3LM714a3gmTlfqEFEkDjhC4gT2qrp%2BMK%2Fzo%2BeGoda6D8yul78ekopl2e6z8k7mrBNsLxnD%2BEfo8A%2FS5gVtFHpTMG2pNIlUic5ArfdxuQYMBH5znLshM9mbw2evimOXTHARNB88crbKsdBT4Yyaicu5InwFxddIw%2Fwjpv176ucBOxTTQ1rBS3h%2FDRrzsoXvRHFS8gz12aPqG%2F1QsO08chlM9YHVbfTvpEDf8%2Fh2I1O2drffNac%2BqaluMN4Ki7FzVcoxP2yINygzYBro%2B0WqfMJlMBbfRwCm8Dz3Ea3iahssD195BqdPfI%2Fhcci1yoGHAzYrV%2BQfWyDWH0PltBpeWbhYwN8w3KuSxAY6pgFUUyB5bjNke2v6DzpPUS8Dzbj%2BQJAX7epC4ChQoVjrjkshYa6AJGP5k5E7%2BSW4z8mbNradN0Lr66Kh8NfrryHz1xZq5IvzWb%2BgrT5XJfsOPjZ5EWPTuHCoyNBps9p4TuHYiN8Ayf%2BH4rPvxkI0ImPFMyyWB3BelMNDE3Bkk97kQ9PlFd3Z%2Fz%2B6lu5dxkEck0b%2FN%2FzxDvdIP5HnEUVwef5c6v6C9531&X-Amz-Signature=343152cbf0e31532696e1e0ffd8d22a78efd4dda64b188e62df527c0ab9f3b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
