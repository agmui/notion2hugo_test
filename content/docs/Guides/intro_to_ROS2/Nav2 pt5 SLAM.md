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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=142c119e48c0edc3fb296425e191d07395d439dd0aa61131669e343ce5664092&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=a0898f83a8b07f1d612cfcb3a703613a0cfb07e254adc6133feffce78c955507&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=34a17688af37e046e63c21783df5d6e2cdb995ec603b21d4f9b58f73626e1594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=02666a57c683986aeaee08a885102a316be415f9cb42e9704134c6e85d7fca4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=133ca960a10eff97cfbaa3f79f901cd751c85bb95aaa3e5d6ee220b0dbb992cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=e8c7a874ee3b7fab20261c3efc262fed3d0b56d3fb1f2f5d53a3e575cb59f448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=35bff93dc24c6fad7e064d7cfafe9775c8dabd5cb9e15858a5d711d582769d26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=42b3426dafd71425d8b6ff5ef925cafc2ea6c9c76c2985c2fb714a38a6d1310a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=3ee406a0787afac46694021224ad5f8fdf7382bb031d48d1312552ff38b96f68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
