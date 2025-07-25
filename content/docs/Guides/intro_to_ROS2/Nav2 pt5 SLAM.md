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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=d3398c96ec7b98c7cf41bafb45c0ff7b5fce09cd93eea018215c80215871b180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=62e9fbf23f4e2f8ec380e9109d0f21d4b18e21d09a58d887fb10460c93ff7886&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=7667b7f0788a61e793f1c319d62c096250bab4f9c6b50b1dc7a2baf77fe7f9c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=6a25751ab60fcae788a1427961664d4c883b8b793eeeeaec0086fb5b4d46b10d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=39d90c42cc5658abe6c33d521bf850636d43c31363b6d8384d367b82bcb63d73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=9057952b807080ead204a07e3c56f92d51e8592fd855773b3da1490c79610c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=a8cd970ea7bc1401a2121511a00614bae47eb558cdc786591a3ff94d1c3f364b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=d039e80ee1b1e393969d6dccf336d6caa3cb2cc1b8f56e93c275f1802b28625d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX2K6U34%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDNTQHEQ79SQPozN2GaPhBytHs6cWujMQsMcmDSgqihoQIhAJRu%2FJ9rNKyvmRe15EWfqz4TiR9mKLSpYBtSQXMsIqfpKv8DCEIQABoMNjM3NDIzMTgzODA1Igxl2yN7OF8OspXpRKUq3ANSj6Cg9DXMMaJontPVPWfagOGnaQ7MDD7IciMGede0dzP6HsgKp%2F%2FxFOu9ABh6DVQHSU6M%2Fzonbs1Nce2uPqXgSbVjdOo3ljXohDzcTscRg1oe6L3YdwE%2FacixJvSAGQbpildqb0c6xp%2BkrmzdW2GKafE%2F%2Br8rvLEQzEBjVjCMmJ8OKNmok1iYu8dV7ChTFnyIFDdjQHrIC1N7NY43i5fDFfwukS7Xamvxpo5MAVuUR36bHw4JRHF%2B%2FVQ9S95ubBfaxhZFtR82qWvzUFVux0%2FQYkzfRc%2F%2FQ8jiPVkdoXaR%2FvO5fBEFo780Qmntb947OipFM%2FeKlmaG8nTg0JW1I4fNBrWj9AC%2FGzgbaPyQKWNMPIynJgameLtGvVoS%2FxhrQ4RFhDVRR0id02KvjLrwUDUeyMs4tJjqZZySTDl8OaESCOOzC0jPyTxnXGnFsgKu5p8soxp4tHPqJG2ga8U2cPf4TELyRGlCGBan9d7Njw7jZmeMj0fmV3jsrlhGBWpvdvLfJpbSpiUXqGLjwHS%2BAeMTK6NKq9K6jH5xhMB2VfaTMpay%2F99hyRnyErLMmBhWsqgy%2BeAjFjOQbCunWWAaxcqvmIbigQIfgdyY6Q45O4GCeeowdx5mlEY7SewLmjCVjY3EBjqkAZ%2Bv1tE7hBDalIjG4YyL6izqi7P0Poi5mMtbfm4hGXlSR%2BPNvdfWhTh%2FDfNaF59VY5RoS1Rupq8kbROY4R%2BzVo8M%2FKGt%2F2kxNSBUYcEqFTP4obCz4QC%2F8u6dtfhbrSMyypl0xFkFz%2BGmv9cCXYdJD%2BvM%2BhUKwtDUnojZUeeI8TIQvOZU2ReTraqjMwVPXmG%2BHu1xO55vYKLS5ViDU1488YAPZVGo&X-Amz-Signature=9913104d0bf3c7f030c0614bba64aaa3cc898c4342edb15f0223bec37e8c4d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
