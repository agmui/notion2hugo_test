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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=09c08c1d5387e98ace81e6b90bcb76a9e4d9288523ac0a2811acb1e0ff5f8e72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=4a07274a917e7ab6bbadab80688e695a9ce46d677c0a3f02f308af723c2c9233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=ffdfc3a3c9c0cf934afab19f49901c7d6d7604d0eb9df7c19a0f09b265ef0daa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=5005b913d643553366a91dd2fa8f6c72700c9e2feb224f6ab896705bc89596df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=8444e3dab1ff49ea7ea2d252def50f49b5333d9d91b79b59a4541cc8131877ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=75c02221cf93c80de0fea6a3910a50d8bdfafcceee936252ce830f58c41884b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=180b7abb087b498729c29edc76f4c3e08daa24adff030068bc38f07346c02a7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=c83fbebe65e78c45cb470259a09bd74ecf698c8b883a1fbc3c5507e7b014b21c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SETO7E2L%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQCh2Z1r6zwKDIaTOcJgKWTOSttXBywrJCepIrf8WRhxEQIhAPzh4UmFydnio%2FQKRHHWUxDpnjzokyZn%2B1mA1GAAIfuWKv8DCFoQABoMNjM3NDIzMTgzODA1Igyt6kqyFWsu6r669RMq3AN1MFNBfMQHHcEqRHv2MQqLqUfZmLCBonYFwpPJ4v0Bq%2FIz4QaNcW24UEM2ciPxKCaKJQB%2BragRTFx7Eyo8%2BTcDq%2BWFxjC%2B64zhL%2FLKLutCudQRWSWyNA%2Bd%2FoGZJp%2BiiDBA7WVW34w5WFeyedHkjnuLzzZL%2F4V6kd%2FH5vet02gVNCP3favfqKAp5gUIvQMOyVI9UfM3iNOiwf4MNasCvkQRTqHgltGiZcoWjZT9ArjYK7a95HwlAiXh6NoRBhmyGboRd%2BumwaWXTtCcMVwI1TS83faeVwAwKG5cpNBWNSS%2BgG8PVsZ%2BmZhB%2FchMFJHdZ%2F4JWS3pcNORp4hFHVnGeFs5L6u3B2NJUQtNorfoYJ7Jg%2BKq%2FLK9ItPObrp7B4UQ3w%2B5D3kERXamhLFMFIAKyjEDXWh9KkVrx%2FD8kkJ1VV9FHdDe3AW83ohhUsnfiiYN3TudFK9nSLyJDn1kt2Hu36%2BkSoQGqRQEuBFVEDqf94q2KQhpmqrj3295gorfXKqbkgXItW2a2h43sLGhVtV1guGOWK1Cqiq4hMHAVu51wX4vCgyMQvmvWuwq7HiVZeziBOH9LKm8GP4214ZlJByg3S9OdP3G0w1V6n1pBOsG5DWQF%2Bolhbm2dYyKCVVVHzDxq5LEBjqkATqVvWGb6lKuU44oklmu%2FVSATRaiezGVwgP20I61VBCHcpafKB7DHJf17a%2F2kbjGvzUtBJ%2BHyurS7kb1tbexcdF%2FHJgSaiqrh%2FtyR%2B4c8xAxz0e0bo7fVhKNjCMyHX1VwiPrq08eepBeyL9PJ2lycEgir4U1N8PCc4C5Csk6iXNoGbr0eVAAysZXForqYyUNuG2MfgC2%2FYBZmImD0VmBjmGK6DvV&X-Amz-Signature=33e19804c999898eda550f4293adf93d3d7d5c706a42029bacd0c26cdf8fa63b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
