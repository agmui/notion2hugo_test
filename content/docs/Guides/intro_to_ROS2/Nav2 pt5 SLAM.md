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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=3d3877e44bbb2b14509d52a0e052bc4f5a49240e642758bb30ecd7065e6d29b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=cc1ac455e7e63a8c8f356312b4b41e4b0e087c1443a3d43fd98da2fe4f69df4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=d8a27834654ca223cbbc3e48e970f61b8fc2ab19eb8807532b5aa0da7696300b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=04b0bd08ce03f67f2ddc9e8e62c8e695a5c5da6258a773395716f2a2465862dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=f9bcd56c2cccf0c7c85fe57262931b3a842c57989f3baf459a0492fa077a9741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=df924f6d697de1d505a3b26934c62771fd5b4cad2cb4396706eb429bff3e33cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=6b2266f7c10d4ab61931cb7c879426b2cb62a9e93954193b5c738ad9236af896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=bfe2e7d62cb654db1260f39e022b03da45824d8e84ae6765ae257915c927811d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEOESOJN%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T132400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQC9tms9FCHO69EP3DAUrfZpqy9dkCqcAxT%2BR5akWi%2FSNwIgMcH0pUjkP8CFudoQYPi8yITdAGOxaZzEqhD84toVJIIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDEYb7%2BOa8tKt0tdcOircA%2FSHC75ebBR1KO%2F6LCKFtphM22UdqHwBXviYt7FvL33oqdcTa3Gdqn6wIrcTNvdfcl6zKrxZgeUteJf1bJa4AziVZ9j%2FT7cZeKgotHqbGVQKFvDhGpxLAbntQ0Q69YCzNQZ9EMtmbfAminx%2BWCiYNvrNrF9i%2FQi5WWNPFCFkad%2B1GznS%2FI%2BBDzT8LTgBSGKAcxzTN2WVOX0UDCTzxFYn0xfV4AICQBsTFNQPlCYbzVI64%2BiRUW2r2VD6%2Bka7LNeWDdFuDUszvg15pBsaw%2ByzpUAAQYrNpHVxTjdYtPTFYf%2BTBU%2BFDn14yLtfgsRQDQtcDcijccvvvLN4gigwFe5CJPkAy0H0QVj%2BtWwRhsmt1L3BB3Pw2Jygu%2BopQRI6hrzGbncCRY12vxvK4etg3wyJCcQrKacXA%2FJmifjx0DqhdlrbC6V95rOE77p4SLA58PGNHxxRkseeaiDP0qGFL64QWGpZ3yw0Icqpj8QQ8maQWmBa5mUSbvy178oBhMh0AwMvz47e8dWNivwVog3sgIYmq6cVzyULc2MEwZA8PFlvAbW%2F9a1jiysGR0Ct9h4Rp17DxnEQlorIf2HIp5aUIvZl4pT1E3h0%2F4OWFzoW79A0ST0qTyF8t3t%2B0vEsWW1BMJ%2Fcl8QGOqUB1wQdSZUjX9qFngf8RK2nC0zG%2Bs0p%2FRK5VgiZ8fRGAse%2BZd1%2BqC7MRVWFE9IWJ%2FHJ9By2hRD7tQD%2F6SnXDLziMquv5MVcxkTWQjcm9i2uxbYGW62aQ5Kw0kEH%2F4Vixjrv74ZX2xQqzlwTOcXW6sBOEfEybbSzqgxETdjwcaRBiBvIb3gIPCaUUajcuDkYw702wKzD8H8b%2FIVR403A55hkvMNe5daJ&X-Amz-Signature=2b28cfe4633778aa107a86d7b179aa57ab1e17919de3ad25bd454485cfff0292&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
