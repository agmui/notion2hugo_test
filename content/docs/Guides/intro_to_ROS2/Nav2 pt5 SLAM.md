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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=d031b6127bcaf4d03cebde536d728a3270967fe55c2a7432d9afe01cd01b99c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=c5998888b77a7947d3fbede707a85a5490b4701c5d56c3adbba76ca1a2b55f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=790c1390a2ead567c7ac044d8253a182624b8ec02762fa6440971fab398cfb63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=1327ab3120207e2a8d6c0828c76046b8fbef7c31f046a3b5f316b75df9d696a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=f9ae37271c59b35171ba35503198d3561a4a6d4bacc8a3214eb68f4d2e90fbb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=d90691aa3795230bfe435cd7ba60459ff192ee568e36c104b4da71b53d2f5eaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=53897598bfd14fda82948d126fe70beb3237f3e4cd3153ac6a0afa8b9e83b2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=5bd63053d5c4ebd637259a11e90179729b1015bbfc0e06bd1b90fdb4eed2f897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7XPJFQB%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T081158Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCH1r7V4hDuoLWypvm9jZaTfco3FeXgXuJ2ksU8D9lmowCIQCse%2B9xVk3TpheHAz7QLz3rpuB%2B%2BBt0fNYebpbR%2B8jb6Cr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM%2Fi896VUg%2F0zVC8FsKtwDe3HQFH9e82PerAjylL7IqmrB0OjvFwecOFBZdgo9ILyp8NF5JSHGtEboYUtpZSWMTXC%2Bfu6CcheMtd2HZtkSNFASCnT53jktGGz%2BlNVGkRkjKyWBfSxO43T7dVSNkk4bdMJiUIIEolJFvl8WLHve23tiT9uKtor%2BKywXjVVx5aV7fUrqpmCS4Y%2FFSQqbWEvKvM0UBLlo0z0LHLMaW79QNWnp%2FmBEXyACRnxOM%2B1OVZplo6F1z2S8BGd4lPd76GwhvWaiEmIWfCUXpSvpoOKks%2FizwyQcH5MKWsoXuH9HJLsk2%2BUJ8eu1tz5J3XVyuPr6T4iewx3xs7f3F%2F6QyUEf64MP33ii75wz8cYsKDKuxNe47zKDuZ0IKvI3KQWCd22gLuXY5SsCypT25ONuYqR%2FePw%2FE%2ByaFcu%2F0Zv6N8X29GL9eknSKmKaraEAXDkuRZZs5c632z%2FtUjCMryVuFaAmaPvqqEz2%2F4d%2FgYAct9PQ5sZOgYB5MMffNYCctu%2BEXwMwimV2eifZUmpj5JtVVP%2B7uiD%2Fs2rDvKITA5w3mCBeiF0k6Qw0KvAXXHAWE9%2FX%2FbO%2F%2FfG2e4qc44k0yPGJotQpoUndATBRZ%2F26agbQtr7LlWiYHD6v9DthDV01f3Ew3YaSxAY6pgE8r9PP5yKeT7PU%2BmUgI6JEgWgz3fDB98Ib45yPXeqWX30wT%2FV6N8FyAofp%2FFWf%2FFesVp843RHiFxJ0YbRJ5DlGzSUz0ZRynKfrwatcwLShuqvD%2BhjeUMiGdLhxbt63NXtGCzCRhC1kx%2FDxkr7f76a%2Bb%2F121KKWMHk3Mc7ve1LmM8gCG%2F%2BoK74c1UC0q30kClGPm%2FAN9pM4rAuxbKOY8JAb2fA3Ie1h&X-Amz-Signature=90189f3fe3a6153832532b82e82d9b8fc5f8edffb010acf9a510748f8519ee83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
