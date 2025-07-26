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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=e363b8c1d442ed95efb68752b05b6af2fa0a83dc052291264fe9e4609729f0b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=da74e4bac5604e3cde5bb3a3a6cf221e91acef90f7b11bb7311e6a7169df3d1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=f711a3820a43439ba57222a74ce4f1e3ffad6b04981d1ae0136c8eeb86bff8c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=2688af2599579b3e4fa2ed8c094faf57785824ed236853757605699cc49c867e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=b92bb163e8ca9fb3d8c43a593a300b8d58f71d9f78e44ca2923c8b919e4810a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=c892ce0877d6ade1a9485b792e477e045a3f1c6c980658d9fbdf2311512290e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=329999832bf988dabc1b89f6476689f3e4f24783b925d69041ba94edb8457bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=e097e7bc93fc6eae15bce519fdc77a9cdc37366acc92201b3002c83ddc573fa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOWP52MX%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIBefmyxBiEirU48Eq7NFO74dN9A9s43YF22O7BYXtTVjAiEA%2B6q2k%2BQ4%2B%2FSF6q6Mf8QMef0DSb0zkBIII3PE%2FG6l2swq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDOMdseyLBRyavBYk9CrcA4gtK8pe8ZcyoDhW%2Bwx%2BKBsVPJsASrtRa6MiOvk7WYa%2Bqdhh%2F4ZRR4MuY08opz5pzWW120nvgG0oWK2ITN14vomsGlrJdW9amXtYRuDzR%2BGGYX6Jivvw1MgCoumvPlqmrNlpaftSm5JadeWJlqNO8CL8kN1Kjg%2F9WFLhLe20nSJuOe9VgtmeaY6C9mGs9BjDKfWtf%2FTfjQdeTN6R22%2FM5P9exE1kpfGSkVWaQS3wB90JnwOnitmNt4PN9P0oTAjUWuu5XtsU0FJImmd2n%2BUOGWuyV1dWBBMdqhSvqBMdQ3hMFjZPtOzpGC0f0IZXNYkMR3J1xdpDd%2B5EHJGinvODwP%2FxCnIRcyDkZ3s8135H0WqCchGQ9QSxRhZYNWfriLwCxGQTeYX7DZayWSWfZ03nn6%2BH1KwTONimy2l1msbbJDr0zV1wRIFsCsdRRbQuHdRQ1ZGdIzfnvMep0os9I%2Bjm4IlAA2UI%2FHU5HM%2FTZjB2sN004WYcctECluUueEpW4fpQ7U8neTM3Pve29bbNjyO%2BvOB38NS%2B2it2mG4xa63V1yzu%2BPvDvtMeLBzXNOkuC3DEB4uoF7zkWNcjMrsUj%2BNRv%2B7Fm4zqaXh6CEYVJWtL1zRFC%2F5oT8bfFVJum7fdMLurksQGOqUBbmzYcwhsJXg7wDLUg7qPEsfQecwiujHnfVYftdg4MABmoiDTLCX2povKZYZPz91ZE%2B6Pjsr2reQD1sINVg7eHAnMgtHRr8oIPRDA2I6hyFl98ULiPMgIKhE87NrPBrFZGGkTnKfxSzXSsLIBDS3ciWthvJgiVHW1KFeQ2vNy%2FMhrIYzMt44JT8Lpj6EfjuF0Iim%2BmdKnIaWvg3fJ3GeFZetX4Hk1&X-Amz-Signature=e4fae9645c3c2404c8b10eccd22e6e8d31ecdf7bd3d1f53cdd72911806894e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
