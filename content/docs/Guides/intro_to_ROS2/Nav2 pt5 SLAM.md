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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=5ade5d623b67f78361c65537970bbb90bcbefcfe252ced39effbe324947bab6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=0645f5454191731d39748ddc612dd60a36beb4a2b0c4b1da8e081ae2228518c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=104dbe77a78967031499e4e716b9a80b0f857f93bc64e6d58d2d471f9f29d0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=dd0cba748c35513318882d7c828c9680374ec2ab7cd9ff61524770ce3153353d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=e82e543f9c1d8da543458a1cd1be9ba78021c14ec69ab3295d7469f113d771ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=d90ed0e3890f285986874079343a672e11ed388bb97aaa9619cf16866f2e73e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=39c6bbc97003ab1a6f03d84944c89e3c16f6283d584035ebc51688468431917e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=e6b11ecacddb1d607e270f578e74779476698e765bd56c1190d26cd361ff6f1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZHMN5UX%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIEMfoCSYza5ZGKptITKa9FjfiRkvRssosH7J9XyJIvbOAiEAjPjErJWgLIoJqjCieiQZZV9H7D2NKanvW33Y7UKhc2Eq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIx3jdcYInMbC20YWyrcA9%2F7bl2PWxCwAhSV%2ForslFyDnukbRPnFOcLraKkQkgN%2FvBoqHjWU4SDdphXsXDS%2Blig8DSEBowKrcuGNycvYDvqKb0MxF%2BqMO0oIXfcNc9S0vgsBDG7jYWBLRUxiNWw8MMxJ4WHgEDL8Xm4NxAdlnGo2wKJp%2B62q2NlUonSu%2Fz9%2FxPL8ZXOiIVO%2BrsDnx7cWpwROglyE1ddYIjfV10Mw%2Bd38cI5hIT9q%2FbUvrpqO1B46wyyf3pOvJSGC8GopzZy6K%2B7UgTRN3sIxuPcgQjw75ydKJrP4Gp%2BtBCgTMiTd%2FZZIvaxy188G9EaPuzXwxm4YhLwdk%2FlvivQ7hlar9Mk0gO2%2BAz0oYnZTuDWLHjOIFGPCxvswXrdJjCmaNnvPr81PXHQWi1c%2BexzpCajhA9Ds31%2FHRWKl80jVPpfRprB6pvOH2q3NIbIWlm%2FYk37ET6AFRFYPceMTllusJiAr1ywIDbE32Bufp%2BBuwbiv8tjkFNAODZe2EfxyqCrIBQOFSiD6w72BabxNPafIngVmngEpYjePxqwGaEZBj9zr9xI%2BpOOdwoLM6Rc7khzHuTHpsxNWcWN8Uni6HP%2BY3zbRouGvBqwNbUL07bXCUkVm5MiqXBRHUolgnDLiyOu%2Bhz%2BoMIm9jsQGOqUBLxu4nJJfLODE%2Fn2dHFmFXI3rFdkgafWANvLF0DlRdtVG1SmokaDAKOGHhfUanqDa5VLVBdUpVlXhIDfmE3hhvwlxqnpVg0LAc2gsOdsTpKRIwCMo735vwXAS8yPpCTYE3xEO%2B4kqUepwZxxRWBUULWEKUaOWL3ONDzq3JsekH%2FpdGNU9Bp%2FM14tDvlHiVUI2U4c0uvke7MtY2t3vdPtRPxJg0d53&X-Amz-Signature=2f377f219bf8dd21a12c85a0233608d64773b9da9470f178f62fde4fe241990b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
