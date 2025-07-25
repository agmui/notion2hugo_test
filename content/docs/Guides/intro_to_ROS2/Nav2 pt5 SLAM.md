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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=746412a0b424600a34b0b7f1838bede456d2ea99e3140eba8efd81d28611f16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=32314854a40baf2744fe12b0406ccc81772986ffdaf06ea2af8c75882a000725&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=ac77edbfea2636828daccbad314d980177d0c11cb274000a1c955938abd827c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=d61d9313ffadf67a7cd679e69636c5f5d69f04c18f5fc8e097266c88c5c35ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=1a57bf579dc2c54745739a429731355cd4d637fa13a88d0433b23d78341a2c67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=9d8e61071838f5ccedbb1592670ab710867bdee23b141a6e2b3d929b0e76dd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=7e3e4b059ed5720e5df3f2349eb1c7391a424ac68cd2f846f557c0c53d5d2e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=e00ef989fc0b41c5dbddcd53560bf3bd70f1dd451387c3e39244ed379d7bb188&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRJRYRDJ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T035424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIDJQfEOMogupF1JIoKnyn8MCASSZnrSgQFnHEJCjqFZiAiBX1cyhPXR3qmV%2FCj4Q4PZwKmabzoP2TWYcJMtHKkar4Sr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMD38Hp5f%2F7Jyalm0IKtwDKs6LdJZFaGkT01VSxTezFRq%2BBYKSgFSmy6g%2FpfDnBKPAM0BITvEJ983qWwLgrp60kQ0LfSoDAx9qlyqtlXyauZ4vwZIKaXPiuZ4wVoaooXdZO5JYoQHKttELtpenNIhtr4skYXJ8hRrFalyViq%2F%2FSgRn1%2FidXCqOMkzCBBZ1v3473PI9v5OJ4MEFLtLK6RC4wsjdwzuWbaGBVJ80je2DB%2BCF921fJqynzUUMnE3V1D0l8lwFycT3ZspdqyE6IYKeKjkmzOtpnlroPmwCVuySSJPycqr3r7zd3U2insc44SGuw1zNCqoLhe%2FUm%2Fro0REo5eJBCT1BMERfQIM%2BHt%2FcGu%2Fq63MU5dpXBEJLRsWZFI%2FCY2cESpCdR5j%2B3SQbJu7ZMJPUzopuxR84tVgU4JPKuyUhmP4J7V%2FphE9Mhfw67KXFsOP4vwC%2BBVM0G1vfEjIDUB1YF38I%2FHVH2UcStIwXhUALTyl6AdtiR2C1YS3WKKELlCsWk4kg0SwSovOzm%2F1MrK3NdbTcU%2FdEiGUY4Qjq4sWeRtMSHBagxbOeSiiiZnl%2BShv0bgZBu8PTYKpmL7PdzqwNfD4xCImRob4c3u1pEJEeHVuBGYUwf3n692tSlmjMukP2NauENnGYKtEw1veLxAY6pgEWqRqnfskYi1zTeS40oJ6rJKA0Re3xgQFIjjkWIZx266IzFgCwtcW4zL%2B7q7jUNVwZdBA2cOVMz2c9cLAixL34GdBkwHv0tMvhrZ4UDWHvuSo1%2BiKpsUO8UgeAyI2wgg55G25Hk%2BJvxsbJn%2FddKMIdM1MhJMZG5lgif4eY7MNu9XRBgrBZEvLwC1mxI%2F9kbLDLhJkBTTt9QSw6FOWJJqXXgqEGcEkM&X-Amz-Signature=39eb5d13edc8920a71263c457599b9aca169c4be8dce4f909631c7bf37dd744e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
