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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=b50f0531f2dc4181f1b0badd5422c876a6c1bb702a97ef47e90f768ffbc1c75f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=eac045fe079da53e305234b288f034681fc5f5f0d7105dc1a891188365868544&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=d6af3e6d2562765e53fe1e9e3d323e3563172a5bb8a9439aeee3b934639ce4b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=f2002daf2428a2704dd9c6e422a4551df08fb01e1e3237bd73c8eae24fe82021&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=b088bbdb9a2e13e41a8e52c9ca36d1b313ae6e89487c7f5e9245e34a0ba2295f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=e6deceda481a9e98225000b0bfa732dba7e63adfe828f27af21c31509c748c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=516cd9b69006904ea80b0debaac27e9d3ed6acfd48e034950dd73795f13ab8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=77e8974866fe1929a4a694a28de22f34265bfd3f465e2ac67d3ed872b4409844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4YUF4KQ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIDqtF8WdPiuFMryYsdaKkmmICytBfipinlzRwS0M8o09AiEAhii6MpK9DKEB%2FNbPotPnXv90FyeU8hDmlC06CskpnXMq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDN8x9nJFAWv%2BC2DZwCrcAxplausi68IjCRfu3LAijWqpXfEm0lwCU60dKIBZwgqSHZIiJBwDNIzds31z6TCFOUWLR4WGjyxrBTjXSppqdQkP4N4zc3M4c%2FOluspkK1D%2Bv%2FKJOl%2FXhyWWa19%2FLmtZcvhvuWOnDFEEWBnuyp9qQ2UR8vFFunfIKmKUUyLfSdBuFXhRUhDYyh3LfvQvRn4tNBHZmlUJrbwXzuvm7DggVGUWNtmSOkyeFnUQZ5HMFWVdKq%2BWQ31S98g2Y4tgBVfk3Qkzhn1OWENlApcm41hwiDYcMB1gzAfDN4NarfCgalFt43lnAln0RAYihvg6z33wEgxLHb4j4oV4smU0dF%2B1bCG8FmAOzhka1lyI1QIob6O90esDW%2Bn8gJ5Wp5spbT%2BXi0I1Mq%2Fiqxvste1OkjPm4utPqe50fSm5jZ6IxDXxNQ1Vgqnyg4n%2ByW9v%2BWdX%2F%2Fwp0eORf77Kn4kXCbmcvJM2I58YuDeQYf9MEl9JCtj98yTZSIyiD%2FMJipjO4ebL%2B0P8JFScV1w%2B1hQxZw9Xqf3mTTAarsrb3gVuG03U1NlG1zI6PfdkEXmannvlPJrFhlIJIXfpEp%2Bdo84tx1gc1rXfijV4QJXNlHCMDHqiEthMKotRpohiL5YnKQP8wXzSMJn1mMQGOqUBHvSgY89iI6W6bGhDn81aAwEDb8Tog3mqTUzgwIZNw8HxlcHEUUrqeItV71Ho%2FCoO3QVwj8zPKw%2B7RAe3KKXETuJDhBQIygTcuyFOvdmtDvbhtHATZC%2BxYl3ZSOSIBA6D%2BpzK0cJnsj5SuERQhKeOGlEeAq1RY4Hf1E3K3Typ5%2BZm1A%2BqIFyuy7GI5pP23cgd8jW%2FRCEa2P58Cpc9PmUj9pX97Wmq&X-Amz-Signature=9b44741f73e47a1dabbc5242afbdf0b7aa2ad9d9a6aebce4927c1e5873f8f298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
