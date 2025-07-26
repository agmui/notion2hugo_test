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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=43d2d5023e09df3dd63817d486b8c389dd0e95c4c54677daacf94c4ccd536f80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=fb0f29d0007448f1aca470417a6ef3f8e7bfd88e935af4a4eb4a1c6b3f337a94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=981ace0f53b87faafe7fbd920661b11fce9d3178ff0087a2f5be5652088d7ffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=33c3205db8f8e8a46c44645ed231276ee0419ffe2a74ca71cdff99fbe1c7be6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=05a86bf2781c984524ef65770c542b251faeb6f82fb7e4119d6ccf93bc3d91ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=0a52fca5cdb6e840caec0f9aa057f9fec9d71c3943bea26b50f23356646df41f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=bbbb8dd5dcb83e95b4c666957e7f014f060bd4f1b363df753b9c884e318cb865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=a705668b2beca40b05f4ff52db021a63bc31a272527e39aa2a1b47d42c6a14fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SPMDAD6C%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T024533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICuOgCWcPKsN6yDN5doglUaj%2BIG1YTBsXcO4XJfcfWldAiAWx1zvcJ1YlKwyLhuWQffxCcbIfVyTQH3%2FvRY1g9FPySr%2FAwhTEAAaDDYzNzQyMzE4MzgwNSIMk1ZXZeV1OH1hf1NqKtwDD7H80UCMXR9jl0qkGGNZ6ddRaXOhmW7Xl%2BOh%2Fhw7bsJydjQNb2TzW6ERIWcCHVfZ4CS6cjIw7vcwuQdM0RHdlz7eZs2pcPKHtwdYHzFVo15Y8L4nlz6RHlm%2B%2BRSZJw6%2FbT69XhW0VglZMmvfBgGb1%2FHPJ6P%2FYvtTyQ0bzTKae6XkwuZmA%2B5UNfplw2RicHFVXIoafG7GD6CZrUQlR6g2u%2BZ3oG8TpKUjKLBHZqxrYoCLisRnJElJ1DDbCoNyGrhU%2FIT%2FQzbMSE%2FiYh6dHxg0k4HQKKBRCnU0kVgT5pwpVs7DB%2BchNvYa02JvlWFoSeCmFe%2Fk%2Fv0kU%2BamNHtuTKPaJggEqPq8eyUOboJ5WZ7df3u4FSR2XuPUEwmwkoRGQvSQ2jg0uJo8ZSsFTKtcPv0UxuSI3owRsRD320FzVZPUg4yMkSqjxmyck%2FG9epcuIYihIce73cTAIkkJaZjYPaMn%2BPQV4HVrCxn02rJn75t5KzK%2BGs9FmjfQneRK3IzQ8jxMdPdV48jaOdRnpUVQD%2FIpRKyjgIPztgoSaH%2F2JEdyqJ6nHy1m%2FnsghfPEm10qkHnNf%2BjT0DeFujWEim5L3RWJJhUVrj%2BRroLUCaiIdGoFOD%2FPmBhlp0ROWQrbYiIwuPGQxAY6pgHYUcHRP7%2BV2dWHieVPk1w8wPP55tfP5TAfog1phQ%2B3lEUKixEuU%2FEETAZE8b1vWuN%2BB3JyO%2FDl5s%2BST2l076rjxLpFHS0dbgEA0%2BufMtew%2FOcwQi1CLRVHyZEyBgKpzxv8S3PmQjosj0nlmmjKFf9Dr%2Ff906VA9RE8irtY8wPHucC7bXX5vTCrY1ytEfJImQCmwjhQOIbwAsJaD0MRbHdWRgONlYt8&X-Amz-Signature=60c7427f4403187a5a11161df8e959ca1a6eb3c6b120168208c736b4e31316c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
