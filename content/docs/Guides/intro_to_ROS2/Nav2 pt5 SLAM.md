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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=7cb5585d18e99eeff290c08225033812d42be6e0123823bc64e3450dd1b2c214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=4d7019555e7181637bdff816f1735223cd69940a5d69fe4a2e1b5dd9a1c50266&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=07fe75ddd4af0de816cced5faeefd305eca6bbe555d9f692ac5356c5b21b1d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=d591787db45481bb960194e316c77807686cb4ba34b9535f9fe5def7374c5dd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=a9da063dffc893af20811bf3fea75ebbcc20b9ad8a8de845f62263de80d3c5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=1376cdbdc92e41a4f63bb8d49894c027dd8842af0ab1673cea4886e28cdd2911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=aa23115dfa28d4977c39f52d24c61f74ca224cbd016094c749351fa5a5198306&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=bf48705e50606c322b26953a6c69f11af1f0cda0d6242dc91134984ce3d5e118&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPUES3ZA%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T201021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIB3CgdzgN%2Bcez31c5QYI5XaiRORJwtRIbxu59FCrKK7aAiEA6wGJVCEpUkICXTyeUBWzMpnayIjkLy9%2Bb1RXWzK3x8Iq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDBenaf8Cassur%2FjdXircAwYO%2B4GXqicLIOA1YJ3tIR27toJlABUxIwDK2%2FOCvW5TkAfL%2B15uRgUxIUcTojRojiGccGaYSJdF%2FXIM7yK2sLTsiUQZcffwK3ELdMW19Nd20kzBOKnDbmhjIgurW0W9I%2BorHZl3bVWOoD%2BMDV2MU9vqobg9EJpG25dfEX7ftO4HV3Fo4uY9ou%2F8TcFZDPkBJR8br7eshJGgbSaKikSwv3gbyH1r7TeY5oVim2rsSb7DkP%2BQWGjiTOEKBMgwqkckPjA%2FvhZ3XwSb3vZMshXn%2FimUMl06mr%2FNCk3RTHCLwWOYHUAa0MTEYmSy1IjYeTIPb06ThA7sObcKnXVS8DNCQpbNmFIy1CjIJZU1d4TSiqnHaM94jQcxWXNDnjxM%2BA1lrAu7uRyD85Mw17gHbUYII%2BHhhH4dkvrHRJfN7NXjV1reJ2%2FQ39NNwISORYNNcJKrlyeTZBUkqVA6XsnTZyqgeSUc3RfDVpMW5DHGrAuAMcnXQCPzGYLGNbvPp05Kwy2UURc5VxEBeM3a34bl%2BfNrUm73pMyq37YQ8b4paXiugkaKyb3pGt%2FuAkAQPFn%2BhKPri1PTlPVQJGdNWpYHK4drK6QK5bZanveGsu43u8Qk6i1g%2BImLcogBzkBw8wQqMI%2Bqj8QGOqUBgPoXenOhYSNBitxf3baomFzBSR%2BcQrp5iyuHUESz%2FJOlv44LNcdmTZ9BpDLn8eAFuNgwbnjmCu8roumEOx2KkEc3QMqKILkgbK%2FU6Go660Oy4qH4Z5H6JFV%2BkRNxWWnQzw46m2b%2FQMoy%2B%2FOcWjCGitNaaG8HfuEk1TNdylsYW0XVxpqnDRcqnXfbLHC9FXA%2Bi%2Fv128kdKPVe%2B%2BM8yYPXnzDdr5xr&X-Amz-Signature=eda3225290b855229e96d1882e274f2719965738ca41f543b883353f7bbdb84d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
