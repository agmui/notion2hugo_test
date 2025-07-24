---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-24T10:35:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-24T10:35:00.000Z"
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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`online_async_launch`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=a6e3b25606bf198c694a3591d91f0ee9a84bcbaa9a12803586d73ce685c24e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=20de2f378a5c3fcc17b2647f9cb769d392e6cde105b628d44f4ae8fb8d5da099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=6b8f1fd898f25c12bce89796ecc2c0820de71f5d2cdf4cd2bc789e584acca9eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=e1afccc41c006a42ee963f2a026c8e462d6f57d51ed04e36f807611b4fcd3a93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=6dcca69f5e7336b6852804ffd89a2d7d02381094fee3705c9810a0395f764576&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=ce0906a7613842a11a159e525a2a177e5a39b02150d709ae9ff792d5e03998d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=723117f8c75e3b9d3b6a5c1ba5e0cd61826d642aa96342a04743ca7e071a301a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=73b2c3db14ef559d3c2d231156c481923a249ac3cd8f814a84047f76c2a1ce17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SMEOXK72%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQCd4WR5eC1eGFXEHI9vVFg6vOxWcTWXy4Hpn1tdvVuLgwIhAKkVPw8eg03jlai14%2BqttDcBTH14TccVQpYUA9gtqoQmKv8DCDcQABoMNjM3NDIzMTgzODA1Igys%2BzYLqJ67W%2BnefEYq3AP4qVwdrmtCnFHwO%2BDBbZPZFalEwRlcXbAT6v90%2B4msiqdQ8Fp1lyQ4x0RwPSbOPlgeYTsHNZfDN0MN%2BzXgu7ccbafBrEwLU0qS%2F0Wbg8wmbuPjM4rvAbqvKQL7dPr8NXW8%2BH9MXy3RkgPtytBdy5x50X7ryLuwplRlsvTwHiTr5QkMv66HA4KQc1RnpkaFn0QXIJKZ5RAs%2BHJhWeHy2pZArlY%2B8pL%2B7ZyqknNjMxqPcY7gdubwRpt26FWoh9yTcmCitcb9FvRJNnuDCPPbOFweZBTxJLvSrZ4tGz75UPgjT%2BjxOWl%2BxEWnxf3d4VE2OC0kTig7nQXW0yDhPohcNcLkPD3biAo4iO7iQBqzXXkYjfHZaZB1qGrQkohC7wvPPhUaCdc4gnkgtmavWxhR6ZwoWuLNFFdeBJ1UchVT%2BLi7gnTuKNboPTBeKj7ZGb1sQ%2FDKKHFXkrMl0oUH8WcBnd2yNcFpDDtoTB3GTsRdhuhlg4GgHoEh2Cs%2B%2BpdnDcERwt7AO8M13b0o8xU1y4c1d5l8cYqHkAMa6AN%2FDC2J0QeapElwlmgQFdHOctxqD716LmJ0wPhhYfWAAePfDxE%2FIsOEW14S7U9MXfYfe3wfwSaNYNDuPRpMTapfOjEb2DDj2IrEBjqkAdRHOlU2AWSl%2BQliBsnTviYtHaZACSUebak%2FKF3SjotQOkVoCeM4bBWtAAQNB6I6MvWY%2FoJEhVUc0Fu5b86zKxnDP8AiEE3Booy9Xt0BqgnpTHV6RqJe3FtP3JjivporPxXFAZifSj5KdnwadYnqO7kQDwvJtdXCxlC45rSIjsn17RW1cpgnrlwsqu6bIQO0M1XqrxB9s7gpVghoHPbQbt6Hj%2Fu2&X-Amz-Signature=078f84d9403bf7bdae6c2ca82ebe9ce33f1ab6307f71ce5178b3c0ae783755f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
