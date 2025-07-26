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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=fb860b294cae61717374793bd84a92f40ebbe4df58fb628a8118669031f3bb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=6629af98d0bf88f7f479bcff2c58f0aee0580cdf23bb4b0ccdff30e9ce90c064&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=1f9d44232ecc4682035bb1ffc8cd8e48468b30054ac97b16c4671c756af95dd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=2f1e4c414feb2fb218b4b8c6b3e17e9545c1b24cdbb2d8377d8e597b37140677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=76fb9f30d21c0cdea17bcf74f642d5be783e6abd355744bfd56ae68cfd98f893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=dd6d77927403af9b1e4c56cc4bd00ef46155b89a1d5129406bd94f2e22008cd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=49ed00c803eef7714fce868e7c72b4084743ae6d592326b4249441989fed1b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=917646a1437114ab3ae1e860de7ffcaff5de8d5f72c7d587bbea794290225050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662NC56RH%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIES6m%2FBccM67fsH0qORasw3XuUKI4%2BIOc4kUQ7dWFI%2BUAiEAtn9%2Frlv42F%2F%2BXgFvUJQrdXRpGi5m3Hg7e3v7pb9EbAgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDO53%2BlSejD1To3gbJSrcA%2FV7CAfFlRqiZywyU9eVXLPXPItDcvLLPuBxMqlE12MW5HTGXeiR55R9P%2FgWZ33ln9iUWz3m8LeQvL0wD0VPUOhH5PQXwOl5sdak2lArFRUBi6GbUN7Uij6JoBa3zYtXXGFgmg05IEQEuj53ef4jpoogQKh2Z9btJ%2FI3bzWVeItlVXrpN7KopUYsUo9qRysFIQ1E1GGKJpsg%2FKvBYgR3zDbZt6WQFDo7tQEC7ScNDaYPQHGnWyc3p%2BUiFDzF4GgqOxjd8QuKcESpq%2FO3j1cZuUB9%2BDBUWAfVXhF2sSoK9M2JyXt2wmAUMjYF1cWN7FCswiuNclhKD4%2FVd%2Bn4Ay1jERtNW8yIBb3%2BDi209bONcO7hg5dehiNTIJczXX2Al0GcTUH%2BTfR%2Fwp6s%2BoblwxfbleyiUW390m%2FEjUGAMynQP4Pc7aTeHjkUr3ak2GZWGAMw%2FclQrrJkvlIpQUvpv%2FN73Ps5sdmlWn2SrpGUOBN9co02I74aQ%2BBf3nDUJgpTa1NpAaECPc6wFK4qYFHmwA2YbtmLP3lCVcAfOKSQElBFL1RsPBJlayj6%2FZVXyZ6Nhzid%2ByJi6Cvzf21OA%2Fhr1n0fQ8rbxBhfj7a0MDLFpNSp2cGL%2F71WH1cBIiVZ%2BH3RMMPYlMQGOqUB2lCMRczLDqqFijKisKGDS0m0XpR4VuFxYwoiCB4fS5oAWkG%2BcX5QBKrmgQ8lHje2SP%2FQfConPpV39lW%2FRYmYd1CaPqarS93TgaghhHxfqO4Twh%2FmAR9wkOTOPux%2FLfekLc4oq8kDFiu1uei46u%2BX8F14R%2Bp7zn0BN%2BKF3TNNqnZxLBP%2BwOW89bloACONzCCK%2FJwRMRmNFcDDZlhTJLwdLiY2AU5v&X-Amz-Signature=b75edd45eeb9365b99abedef511841e5395cc067f7481d586bd86039e86c856c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
