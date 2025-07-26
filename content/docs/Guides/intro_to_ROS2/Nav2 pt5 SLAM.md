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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=f846b6bc0b6c1838332cbef53db4b3cb38f5792dee53c3ba9301552affe0e8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=1ea6d899cbe05ebe16d973c6a06b1cb7f6f88bf07b7558b3af6eb1fc87d1862b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=f2cbec4839b1cf9027e1b855ee57c7aad685dee77815b7cd918c8a21652fdea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=edfd9646f02eed8c62da7e9af73932f182d57e5e670ceabc2a22c9f87ea16a3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=ad8d5e14cc885e96b67aa1c0debb364152d2ecd87ab0bd8d81c1c2a9f98bb3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=874b7c4cb79568b8d9c82eef0301aae8b65ecbf5b0d245a3a54293b9cb71f709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=92a28f1bad7531b868be0eba31045ffca9414e24c8cd3c4eb73ed7e896de8a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=8cc994597a3e19170ecd5bd17908594c127fa6cc4424764ddc77aeab6c50a416&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IR3CTAO%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T051436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCICAgyKx2YFWjh3yMkDWAIykmrfI5cISc9KdFBErpjiDYAiEAs7YnCNcMWSt5CoNdnwB0aR8N3c9gWjW1jhCllXhViQcq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDJL9JEUD2GHy0xBjFSrcA5G8LY1FnxNJ3q4yNrYklF%2B5e40xufIaXONTDyLM3iHCV9RqyHFu1SZ%2BLg0nj64DeSzVt65vkvLFIHlRYo7vjYA9jwHsKP6lH44XBUufCF0JVnvzG259Gim4u687uj6MiYpfDZDVt%2F5Lo%2BKLpWdaCBtsVQ9k3Lp%2FgYvpNXfibce0XU5rRTbREm0MO8QSQT6rnQUk5PZtMVl95BaoAd8ZX7arL3OM3Fg%2FSFeJF%2FejI4M%2F17%2BJHPmN0OJh3%2BDNVc1xKZ1sMBlW%2FLKBotWrOYNdWvioN%2F0I7KHSNLRSP2yUDyU1h878BAvrRvzTFF4KLvR6CHUfIMjiQLVFsJ7pA1XBfbZziEJZQhwrPWLMA%2B%2FJG6aWmHgxC9g%2F6GddbmBdjtI8hZYLiVkQWD0Mdp1DhBQ9xijnox%2BDj6uCiTO22OgPL9w4gxQ8Y50wJEHpGfZtvAVLrGOwr4eFffLMBPf5aP1P2yuWqm0vwZemEVYFeHkxKuxQFPKhng7wlutMaAhIopo0e7I2YlIiibtSxQHpoid1K%2Bw3wZ1Hs%2FR6Nci4I%2Bqi1Js1ADj6IWddlzE23NiMLDNQnHNqOg0MOWBXjcMsquCX6O%2BevqAb7RmGaabt3DpuRHa0N5m4OTFfYhoLiPYuMMe8kcQGOqUByD5oelIcYizwAbrp6k25%2Bm0cPCRFWOGe7ZwNW%2FLFZI%2FoPst46V606OcV4vwybYPvKvEFUttQf8dWc2dKjSfy%2F9k4TUaZVRZU56glIzg4hfILQTiz7XFAwCyNWRdmqHvShY%2BQ76FlAPpdwcgyHwBc5EuDd%2BgWNGVliNZnN1hZspJ2Z00qWlpPAZOeAjK5%2FpNK1%2Fb7h3KzIkUYwvvKm2iJMh%2BsAecW&X-Amz-Signature=6b0fb6240bcb3b5c793820bad69fac16a6a05aedf9886050354548d7cc323753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
