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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=e49d4496826ae0fafdcef84e3d2191733fd907a40589ec03f59d116cbf421c35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=bc0cdd72e5787cfe92490de2fb5d74828e08e855aa55760c8485d7592dcfab7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=0524d94f1835f9bbb1b7cfb53fb2268d8f240f9f9c85b5a317e7a51ac5ae2a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=45890bd44f06793e3984f846c298c5594177b6683419a02da5bdba4f872c09cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=0bd37b95e485a19e8d8d035f7e1561fbd1b3265f9d4123b90a314d1579247096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=b700eac091d4f0e18a27ba17990dd5c1a8008db91caed740514ba0011c957caf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=813c84e234a368a187a4f8ed5e3bb5f8b3af9c50d80e3620da738d7b320d6db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=2ffd07d96df17288f4c79a77c5bdfc482a89e8c356ed1d8a7f4f6b3e24609490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNINDPU6%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQDdj57dMH8pU271VvZ2t%2BYO6IJc%2BUUiXwjt%2BhNse0PPAwIgROAIoxrPvK8z2E%2Bw%2F2eODNqPPklV2x4f%2BRV4wkSdMkwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDLCG93GZ4XqKeEF9RircAw%2BxJ4ltSUGRDOa9b4RwucsIEoBneRhxPF1GalLs71vkBSLsuC1hleJhWTJk6vbhZ2Cup9vZg6cmL754JPnjuUNCU0AphNJSYDvaEeHT%2FzdUhi90k%2FdczRm7z0re3rk3hOiVDJCYPUKIOvQhOCBqMeRY6PPi0q8s007sDFtfMrL4ToFSTUwkcevohSkWhmCUbwN5Qol2l%2Bbz8ip%2FRSjVuIAkB24fYhfG5ktKLvQEyddnnXFktcpYwksYGWXRHKgwxEbXpvo3F0th%2BSt5wYgq2Pzc54qc2oEGwxZjDELO3sK4hJh6PROuhp38Mz6ITe%2Bh5DXaUYDYbrB1v%2BtoKi8ZR61DLMD%2F0Ie%2F5rBxydPgiw5D%2FyIRpY7gbAWhhtcEHr122%2BPpZnVTYF%2Bv%2FrX27fIiLWiU1x%2B2MYQk80rDABbKwxriKYF6yNZOxLbJOVEtE3eNJFyyCjwV0E8YPvh%2Bi%2FRi%2FAaQattzCEwWIP%2F06AJNTKy6mMls3exdbK7AN6cmtRF8OvNOEN3IzMCD1h6PJEhUZw3RiA77xNY56r37yma%2BFdc7hq0D2Sq56iEnyaBaeTvu0fVQAXKyuiAcvY637v7ZQBIGWB1dw2ptxG5QZcnO%2B7vnGLB0AulYs86rnhNMMOTikcQGOqUBZhUvhDwPsNY%2BjzRgSDbD809vts%2BGgTFxo%2B40vNSTp4%2BZxOrI4t5s35cXdiH1jx1KcN6mpjRIjt%2FQbVvSpcL%2BIjNU7sNULvPSirfWSQVPhjn151QGz2GZd586TR91g35uB9WM3XR7XBOZaMLWU3EnQnXwbSbG2N3bAHFaP%2B49wzSadxWrB7197xnUInJBfT1hS%2F8HBqeWNIpMiqvtARf2BahAdX5%2F&X-Amz-Signature=c2eb6b4a1dfe339138d075679522b7ff231b5c02747b013a52262bea3f6d1d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
