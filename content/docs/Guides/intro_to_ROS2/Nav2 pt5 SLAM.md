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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=b84a4f1f38baf9a93103d6fc418b19772ce2bdeb3a3350a64b01aba6a8486f9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=3913a8f3d19f251d6233ef9c6b31588c13a1c46b2b8aaba6cd807c65bf46b7c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=fb83bd9f37655ed53a9c279bd5c19648c541d865274bf87d7bb22f20475912fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=466ae8379cce1a1b10fcbb35c2f2ed3ff2a394aa72aaefbe790d326b28950f1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=d2748abace56be202da3d7f81564fe7f0599986f17005673971532dcce841acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=edc4faa73d6093055d8b735d068a7cd51853196ef8fd22620734de96547bcdd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=a33e0dade5078752a42206eb5f3fe4315b770424b460e1eabfc13afb32a6f8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=176aaff9587a3ff2ec839e0b9983f16d1a92cded7d7a9733298ccea6753c28f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWFIZ47U%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T220855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIC0XD5u5QCUgT5Jrsh1SAQw7squtKTr%2BcSpdeoYV1kLeAiEAxPwTCqgm8gRnfD7jjOL7YJkd1VL2sy61Ak9xZw2P%2FrYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN9m%2FhU%2B3rwCWRDeWCrcA1mkJ7%2BI5hQH86m%2BweDQc8Uxx0XxRbgj%2BwydVMDLMx0ZZNN4wFmo%2FDP9%2FwitbFa2I57poJjOm7W8BEtarc0ewsaajaYP9rsoZhuC2jx12DO7cw%2BBm7slCAYDJJ9f5UBStPV8Ca0%2BKeUL%2FNqEvW1ezWcb1%2B6yXDfIq12NrSyE8iGCdOr4XiRbOLDjDIrRVD5g%2Fu6tPIoDf0yt4NWk5pmgQolGOJz6BEOirHzMilvLFxmHkH%2BWQZ8cmo5xLHUDrI24cO1bfo0xgtXhN7C7XoM5ypF8Bbvb%2Bq63QxkC8%2BKx4OwS0qaEzD2t4kVq98UYXwK1X%2B1kjpytuoOHYznTQfzmDsTaDUKnpSIv%2F5pj0gbjKfG4lH2TdgsLy96eub2OfiHtYPiMnqtes1pXBmjDF6hb7XY70eMrGSWLqjxT0IBcRHSgc8ZE7EyzNU5mOtYE2wOaVATo%2FFGGSbagQEXBdJ5Ss%2BQNE52OOAwEMaD6q4aSMKXCcHgCJt3Dq9hqyKd%2F9tn7xFcj1JdBV8vMV81qyM0wbeBI%2Bmrtge3s32ic14nhCYyBOFBtUKxzJLBQzCaudhGciTDHqNNGAlsPnF%2BhsRNUJKK9xSqa6dkSakU8fciFa6N5Me0MBi%2BJ6EKMAhAHMIb%2FlMQGOqUBqvGpMDACUIKf3llLbW3L8B22%2B4dhGUyjUSoM3pYbFuWMLixjZ5NWWGgZXemFMPiPZHOwu8rIjAngaHMVTmhEbWWgIiNRcH%2BLOHBjPD7COzPxbKiCBKwfkE7K%2B3QY91pJQAtPXnPKlyDWINdQOcfxlkJZk1bYOdeZsVMfWFoYu%2FQax4s5o6qAmrYPOlcYkGH65tM%2F%2F%2FZDMfY0ShFggz0bxoOvAcLD&X-Amz-Signature=923613aaae973bcf90bad65f1571a3191f05fea0839ae9ae321df8c29a94b016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
