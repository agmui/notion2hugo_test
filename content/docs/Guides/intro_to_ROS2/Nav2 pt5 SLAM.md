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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=2c4b69e07b891d8fc100100d380d1972b78c5f8db3a4daa6523f3f2080b342b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=a5706c0e4793f9d1e735d6a151ff6db250e807a1568d3f243fe97f0c5f338e9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=2db5aa5bc57136ce677de72bca287f25f58628d13b80d895c022dd223e54977b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=e40cbd645516edccf7bd65aa55368fc0dc53f4f284f4d52a16fa5fc8b16c84f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=f8a4a2d8e1e83785dcf20b781cd6051f414074509dc4114f39054966e77dd93a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=725c8588b65fd182a75dbbff879bd6a3f133718584038a3464236ab6306b7e1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=42c1a41a01c99c4bc4dc4a51e0fc992425f48c514e80e7f6dc7eb9214b81c06e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=169560de9972d8dab46941d10bd5fe2b9100ec45dc3ae91d17e9cc3436deb404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NC6OOB5%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIGZzxg6XyWHxHaad5rwUu%2BSQ9CFwfTVEKopSfZfEt54bAiBNKz2HNF5YNdqIID74cMi7FVLgis01hYdCQupqm%2B1pUCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMg%2BuF6fxcpRq%2Fn9SqKtwDRgnLQMIUYE%2F1Uap8nma9Pfhd6Dh83c%2BdWmgUcBo6WnAKHnoocOx3rOSxm%2FMcpLKZjAxsBPtlQrDVciRRahhu%2Bt7YqPngXvRODQmertmuyTrStDDL00cIp0NUJqxYaR0r0o4YodD6p%2BHSqCz5aHcsQr8mG662y6L3r3J6vbu5kZQxBhguOE8WioLVZdR8SvgUWgplLVoIc19YsSzpVLDRE27UPNCPPoAs2U4hGmyYDBw%2FVKFKIt8ZK2181D3d%2BO%2Bxk6hsrPWAcNCMOFTkf5eeNXUziprKGkm2YU78ObHGlpu8qoEhChI7%2Ff7dHb35Z8EdwZi%2FQjMwefXa1taSgdpaBPmug9TGonRtlonAMl%2Bz7atWsWnsT1Bbwe8iUnFi2XaGwEHCaw11zTjqu51G017Rso5mDNCLwAJhKTQOwyTEoPbdFaKbLoj%2BQOLSjc9zybnkv2u54uEL9EEqBdlPUML%2BwcGca%2BCFcIKX38Pq2PZ%2F4JFdblvaKMRMfJsfomOQlct3mply9xQIpbU0lFlq3mFxD0%2Fve27xh8O0kz3u7Waj%2B%2BW7lPQcLepk%2FjkCTkkxqFcMGYgwLteaiy1314Zfk2RLpehlCtVRrSaBKy6Po%2Bhu2JLNcmB%2BVEhJfKJsA%2FQwhMKMxAY6pgG5AkwyihvgqFhW6iHKa0JtcdBoXCss%2BPmw6pRgcbmVgXt8Ie4jE2vD3ZImlciD4ktDWdBnJSVl8HNS1rV0OHCAX6JJuWtQuwuvjSXh5S2C8VJWqoNiBCK%2BcnkYH46KZmZ6kT%2FLR5nA9uCKm4hdb5PSjC%2BsXEBB5PAS0zZOnhc6qpqwqw3DzrZpN0gxPdMsvN9IREd1g4yg2mHYI142GqxT7HwQSjXU&X-Amz-Signature=5ee20faca2f8e00b685bcea3a3fe3ebcbdf1332d4482eea9653e4cbdc650394c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
