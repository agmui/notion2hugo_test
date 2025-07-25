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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=768a9ffed0ff36ecd97d124327fcd736f6e9e5b42baff1b5aa7d4e444f3553c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=ea2bb298685282e167909f3cca05bb3136ce5faa3c607119e8cddb6efdd61f16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=adc45ef899f3397831a8ae41f72633ee9c28285013987324fe1f82be2ba66ba0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=082bb4529ee7cb53f62364600c15c701d045dd9a33c90f2172bca0eee5d9d003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=85fc21f53d224d925e85e84cf356c13b262cccc4fb88ca91a773604411a5a9fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=d24de7c97768105edd54c69b5abc5fcd0ccf0465ac10dec1759ef694d7fd70a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=910bc69b9c3f7aa1ab90e735f22be2baf60fbf0c8c1a100de2c6dd15784b8c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=bd5b7e520f54a210cea15aab6b614fafdfd0300129563ec9180641ac1d810725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V2YJA2B%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T061515Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIGdgLu3rD4BdUW16JnNpDsH%2BAMOcnW2DXMlDnx3%2F5bFiAiEAzszVbZYM%2BJ4FXFaXa8vyM7A8Duq8t2Ymtof%2FzX3z2Soq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDDcx%2FyKAGM8ZmrkR%2BircA6c%2F8ahO6i%2F4sz0d2dv9aAWVEYRHA%2Bn8hWVOHVMg821eH9vuzfb2Tnz%2B2fuuPPVjjbiWEBfeXuNZLFl%2FlWLjUSipx1u%2FiypujAjoQS%2FL6bHDfXvPpITPT%2FXe7x44av4ASWVgv%2FVdlH%2FC3nNkggCyAF8OetzpUTHQ93sRcni2A7ucfUFlwvC37GTHdLpqWEAcyQrE1vyW%2BMRo%2F6s7nvWdvU8tBZGT078GRqvEXoN%2Fi8PvhxcbQv8s3zhuJjELFkxnenrtSMPbAL5051eVm%2BfyL0yG576Vo29Fs%2F5KszCzFE%2FQ97urUKCVCzjtLroA6rkvUfJy%2Bjxel34TKEy9rjuWP%2BPu4w4unirh4t6f%2Ff6BiUxi%2BkEsIl0PTDgjYpL3tiLhdDPOoEmHcIdHeaY0gfs0%2B6UP6NpIQTVVqik0jeEmuKyhLr6oreJrJXkYM%2F%2FeUoz5QoGI4jQMQY2wd4SeCqrl1ts8OoVgLRPO8mKGWqUT3do39kUuQizMhQ3x0qAIEzIX2Ye%2BaaRIRVYqrIxDrbP99i1YBM3hZ%2BUJv2KiYvLT5fKma8PYGCPUn7XBp1MA3X9pQOY%2FLTRnhWT4cv6RdpK6kv8gMlTlj6qQgYngqRJnNWmJXPA1Sq9YZv3PIhR4MKScjMQGOqUBV4lwHNPWCM61370z79kklfr1A5vUlj41LQvvBR1LYWDkdhEKosCxb%2Bb1MaY7%2FaDR9vN2Uwje9f16BZjuzSCGuYmu3UQoHW%2BrF8KVRRnW9ztaPXGAynCA%2FIj1rD1gGIBvKM8hoyFGTBQLpnOFzr50j77ux8YYfzbvAlwhIgHtRVn8uYMIjkbSVudP%2B2ABBNj68erhkb6%2BXxQmv45F6cALKQotGXLu&X-Amz-Signature=e8f5496b1f2d083277c0a79dad848e002faf3b31399ebce50ecfb6b6fafaa465&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
