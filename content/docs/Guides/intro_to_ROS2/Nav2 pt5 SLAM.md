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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=4f06403b388b81fe02b79e70a19058376b65e45e11930720df99404fe701c2e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=e6c63988d63ecda96196fcd3a427853c9aa11caba83d80c4421372ea342b6e00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=feda7d3f2ec90be3408ef7cb225fb077e89a79659a2c7f0d25d4a3e862422e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=bbb84f593de5db54f46098ad45235110bf8741b4268a79c4939e359f174f0288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=ef8c624bd9e38b62e1cd679c36ca249b344c69f5268bfb26b510b3deb2777f06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=9bb3de5e507fa1143a28ab443878bd5ec3a6cfe02506a4bad725696a69be42fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=51b9948918dff9772b68deca45b0eab9c59cf5fe312c6b51b6e37c4db81d5a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=969dc42ddb09e7e3139e1fbc55a70b3a990162d2a77c587900791437e2a96853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GIXSDZO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIHYJGkvo9E3pH%2F7MbC3kriwxDJF8WC2RFn%2BnOdCL9FYFAiAtUaOiSvQA6LyBCXwRA3hV%2FzgRz01%2BW9pUbPnruIlouir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMc3biVSIC%2FZ15BWcuKtwDKa6PGJqx1zfdSSapTYKnwJrHZeWytqxpNn5CKyURHsvpMEsx4I7bR0z%2BkAoeceyUVgSxahC40gy72SrQS%2BtQxsk5lXXJxdzEdlhgKkVjscYUjcFi6raEdyhvwlpJBLlhHVve%2FIsEnViKzN8a9FmcAVOjnD2tueJhfaiOOuWQyz5ldRH9NoBc89b0ReVdfzW42b1ooG3YJBlHWoJrJCZx5kz6DqyASWrQApuqxz71RluUrV8jEgHuC8SrW%2FXI5dq8TvVztqbAEfzxDEeCa0yDP6%2FiT3SFB95oFqW0NH1onrId%2BPFjymwaePblATUo5ZZ5jYonYOT5C%2F7rTEf3gwFHufZ9RoEciHVYz%2By3lLHJ%2BLkHpUvxDdAixpXQAg7xosGH5V0eJOkHByuAdUK9IxEhlAnREdD7nffXCosf8NoMPTB70FKmyi%2FTLpoEza3HQL9IlQ9BgXrPkXPhhNuYBHLRO%2F10hUdVJPqCi1ysDsFxm1m1itVNUJERJ4%2BiBccQjysAL1C9MD6hITPfGROcq8uTxa2JF%2B4H2U6hFMyuqXZYx3yHLuc3JALcBp%2BPhihciowLiIYwryEutAGTl2LHOWh6v9zJz4LrGeKjIcX4pAWy8XicUY6TsFZtfYbmsEkw3tOLxAY6pgFKqrmPmd3977Wvt61nSsWPHiNznKPpEiUlO8p3gwPztKLz6qOH0WEOzHAbk4K1QEync1er%2FUUPqbM2qUwSaddI4SjilzOjY67UAdeWjFXwWwMnTtS84bZYzTh5RKdvChq6V0gNcD3ne6GppG0lqRptGUmdVO6ABxMCNYouBKrR%2BWC34tlw2vNmjwtSSEr3ieblZaalzUq8UHonjQaWUIAH0bqWZeBt&X-Amz-Signature=33a16c3a8b54f3a69f424470c6672a841a0153e11ad984daad6b2b39a6a5ccba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
