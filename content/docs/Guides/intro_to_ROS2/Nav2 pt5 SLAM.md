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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=90c00bf3fd5f378c57f4070a5f79cdde1a31345b094fd007a46fed52ad63a6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=6391b503776e8a772a8274f1519d9ce43da3b8dd713dfd72004cc39d7733554b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=cc55d54b55332641f98033056e41408b4cbdee520c0074ff1e903d0319a24d86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=6daf9d115eb21f13a074a7bd6932cbe437bd28dd4d854a4d3b06e5d839ab1860&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=3e599326d35790d5ecf2ba902523ac6f03a1042b15b1b345ee4c333c2d8a8a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=a727286d52688856736e215234a42c51705e51f9d0673455da3eb6cf05be2b9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=7d0fc92a83ecc0836629102cf42d4e9a2499690328b9ff33fc53b5c4ef4a17d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=3b59cf0565e7aa4bda6962e83e76244ee61d21d7392927ed685f083b8a37bb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBU4BCH4%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQD8jrlMXEu0afCPu91HHmSVLzORW8fOhwjZ2YabIplRwQIgGOk5f%2FpXg%2FP4EovESf4DU38rmtvm%2BqLz37ne3ZehdZ4q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDM2bREB6uvLIdKQaQircA%2BesmZHMdN97ljBlbbn%2FkT5%2FmfKq5qoqhum0uM33V4wyQFWCM%2BfabTlzd4cZW6kfnqg2nOejyAFc07B8iB958DeX1KtlG47VyStJAgFST%2FztF3%2B7%2FobJQdM1wnRbkaPp1Y9IN%2BCyuYbq5vkUj8JV8cy9XiXx%2Fp2cloRrcTzTrYjlt8JNEaew%2FNMR2zL0Z1rMahL7k04UH6KQrr0gtJyx4vnTGAwlLlDpnCmjEPlynXEIz7ZaeKg%2BcSUY8nMAT4rP6D49FrUBeti0UXXJp2coMfwFQjsawJLT3Kh43ZPmE69jK7URwcwISD1s0CgQKDcTP%2B4ha%2FQTK17moMx%2Bln0Tj7pGYBGnh6yTUniNp7dbXL5EqQ%2B98wfvm3ZdITVkfyVa5vOWny24DQ8Xl%2BgAcJgKZiazbm1YIWVEU6rRPmY7vUZC8b05yj7IrdPoklGViYyvwHiaBw1oRmAaSdts9tF%2BbEwgEsHTgAyhLCiI77lSAgnLuB9QDLak3Pyq2ZbB1RxJJoh2rBTQhs2IJaE1P4MYQbIGN3VwOsuRYtM7OJp8iMSB9x5b94Q%2BtHVc7MrG%2BcZI80zXrtNUksGkpHCT%2FGoAtr49sMcxVPAyHsz6k5TzRDZXTJ8pZ%2FcnCb1zLkYdMIrDlcQGOqUBYkhL53KspukwTVkvi4jhVFzXpQ4V%2Ff3FaaIbYunGBl1jm%2BkZvS0UROsz0gNZThUzw5RjZSxqcahw8gjP2OEyiDwlvviwYWbK6PILKQTRcEg4GtvfXcQQ6%2FQiAK8Kw76fBF4kyVuUuWfNsu6LflmsadYtvt%2FZvfecE3guS3Yk8774N0%2F7LjjiWbHfEkaS1T3ywyoghZ5XCFoBpo3Y0gimxxzR3Q8J&X-Amz-Signature=3063271671cad12ce59422acc4846937bec43a796646438cb20a24bdaee89284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
