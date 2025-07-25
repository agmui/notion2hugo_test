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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=81c922a2a82478022b005a495253fba7aafde265c0fa498913e4246ae4bca4de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=f2dfad391b29554d051c9767aafcf0d15aa5759e692a9f224fac7625bafe4125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=401b7af0bcb863603a2f3b63ad5f53a6a11a7f50d22935eddb09fe8689bfc1a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=df93a08f5292d10995a2bc92f72dbd5a890bf4c9cab1443c71d03ec3f7459d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=efae0f765c2f4af9c960b4a9efb412ffa69c242d684e9129d0a61b344dd0a607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=857f1bf0ff80f0c7965c85e1d4937db4b93f04f15882ffa6b8753c2fe3e60027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=30c62c07d47b98f185eb029c96c2b1f1243a099118c88ef1f0609f7c200351ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=c00d0ddc17e46c2be98a2344edffae86d6fdf0b6fff5ba92f8f9520ec9f3d938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVEVJZ4Z%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T081351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIE0vSz%2Bu2UrbQU%2F5TiSyenPfvAM9WewWNffc3Tcbt%2BGJAiEAx0Ov4o6HkMakmPTaxEttCBXBrBZb4icT1bna5JZCpVsq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDN%2F6e6DRVtQDv3Ce0yrcA8v9MvaliGIIoLV6mCEZcPKtsvWvhruBbsuPSUD4vRC0bNyq7SBTGRvAEpdGdc%2BTPcTPlnQM5VzVwsbmJ1mx5Mg%2FLwEIAm%2FqVH3WfbFfzDFBlWGRVs4QD71%2FuXOyl3FQ%2FFj%2FellK6NFl1aMBLH%2BIxm%2BmvOu08fZWSg7qqYPNNWYO7I1iOBQLEUZrSwTiDTOxSY26oBn%2BQEhtgOkXqMe9Wu5LkPjHmRvqldbihfmfw6k7KERGvspIfiJZ3RBf31XxD%2BJ4KI%2FptNRldIQOl6hkPdf5s3q6Il0okLymbqiHRD6ZVwT1jT0ThBBKaxGDW3kGpJUeUSfd8RQPib6j%2B05JNkDK%2F2aYpyg3A5XrzAmGmEQuWRfvc1ZlJIT0WHlvKN4PoZiwndPb0TYbwOOYPvV%2Fr3R11tFYRwofJ1s2WI4VMbrCJTCEMlWn8wILH8P0r878On4Bukwz0L5ybNAOsgIUA1K8BWHaYMNW6gPlo6R4KMPN71hD8ZcqKUyo3V2p%2BdHzzGyO%2BHa%2Btl0WN4YgsWY9exbhN1IySOd8tsi6R7MkFhmtRKhrnXujAanBaDCSYE8uvumHWp3EWc6FsXe26sC7haQaAZJgv89PuGuzXrDEytlrddk%2FBKxzRLfDkQunMLrnjMQGOqUBV%2B9FPyr9ioRrH%2BUrwaOiQBCmc3NUYiaopMQFsvfzdgfBNUSZyKEGkF5snzlyCWhtJODFKt3mPhmpRtW%2FOH%2BgST%2B54NyiS%2FP2kUBEmTEKSeKRhcnURCL111tEalMynktJFNMF%2B%2BL8FQeBH0oZBcbHNNOL6gRwgpIBZbZbkF%2BWV9hi9GYSL%2F4mojQy6t%2Bhv1EM9tKVv7%2BU4TXKG%2BMIuIZJeGt0t%2FmA&X-Amz-Signature=6dca07516bb67b514633483a4300dc11ea5379f5b76495118bf9430926b66f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
