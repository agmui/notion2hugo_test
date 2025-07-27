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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=bb6c179efa91be01f955b10845e7245a508c3d04b3e34ccdb7bbf2876a8c571b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=051e78a2d1300c95fddcabc0fc1b4f01673fccbf83d98ffb83bd59b7dca58ee6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=bd0088ca3cab7d5162b2cdd168208e7f298bd07929131312c37d458ac4ba4c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=9dd88776606dea454a23b4076f000fcb0fdb683cc71d10db4ee5b6e85882ad57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=d22fd8b54d3f77a698cf74bbcea8640aabf4193d703660997eb7066a7ec683c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=c365e57c58f06f4b2ae78cf7302a2efe427a9a7b35705441a77401bd655bf352&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=6e98920d630a11e2c95155208e67f472d004d509bbfb0409dd6fb3b4b6264148&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=00df5c30250c7af9d826da83aa0399cb17509e579621be5dcc86933b7358fd7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOYPCOIM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T040609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIGwDfZHZrRAQssZVZlFsuJ%2FF4wPDw7RnrKzC%2BLeQ6yz5AiEA6GFVyjff%2F0NbhkOzZpEeGszaujjakUTyY6IpqYPzk0Qq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNG3MKs%2FDEN3tgpowyrcA0Qqhsjagxo4zAlv43jduHQMR8eOaOL7iSC%2Fl6NkjRku3mYhRNZOyaGxp2Gf7%2FWRG%2B6MdVr85xzoNVngEAtJfoxp2O3%2BITCQHxZo0UJbVkPhckK%2BlbK6T2E0oG4h6UgXZOQhbtF8MSqMpRmCG4Pis700qsyuvWsoSSnVPAGY7AEvAM3CGfR7sRvC%2Fbxa86wlMU9Fwz%2FmCoHzwHCHMDHiWwpFaXJU5jfFZu%2B0eSpcRXnkQxrS1SpXnmzBaCVVedi1CF%2B%2FtXLuRAoGthsRkMjjTZKNRipgXYJOu86WrPqKgzcUdAdsWuGxyC6pnxV0yNr05qLsxLJBgV6aA4ikxDcxNfRZ2jEHnR2bNgxDjp5tJToDi2FCgGXvqv55LWC64tLhiTcIzAN%2B4feIriIVnB5J6FQtatkcDUiB9M2cnBO685o2QMK%2BOsXulzfJfArM7ZYwSTa8Tin0S%2FCCsNjaNawMHZaX2tXX%2FtDeHvWUEBNiPBfjSPor6PgZ3GZ5hfZjCO81UXiAFc%2F5ophLnqwT%2F7hPOiwVRpPFH931MnAwpTLAc7STWBcbKY6wi9Dxd6Hz2ziakSOTYQuR2s8TuMoaW26y9S54BO6eYUfORN3M9eE64qSHr6kgom0b7kZ0tfYSMN%2B6lsQGOqUBr3CkNjLZDo3%2F9X9KjOFTAcV4ZRu3K8yycfyom157iOqA8qh6ZhKFAz7qetSCb82FnkJt1uvtrXJwotnxL84j4rVgq6Wor1fn62xjbxiGwXOi9N9m%2FacwhU36ciKHYmmHCpgJyS%2FC2oIcHZtXivOTfmkVybNPlGNYDBzHhtd3p%2F6PzRBfzrU67R8EKzXBt5w%2FV2%2BMTx8mniQRYqFMx4R3jZuqc7Ky&X-Amz-Signature=d1e03c5bf9f2a7cf4a8d00db859686f94e154b064ffad39e16293e1741647b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
