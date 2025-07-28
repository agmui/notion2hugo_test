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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=eca8d2d2b1f54d634fae3e7edce2a69b0bcb2f0bc446c3b7c945bbba54ff7769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=25b5ff788d0fe48555d9932cdd1af75a04634b3d0d6cccf27b1d9b86ec202ea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=e9591d2b32704de2d0cff3875a83349cd0b00369a50e3ea1cd673f62c194b420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=359a55b9fde3de5ab3663eb95bc2d107f308dffefe5545ecf9a0d9557ec8a1fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7d9334-5be8-42fb-a8ec-e2035255ddd5/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=8e86b97c8c02195dc3204e1fbb30bce22b90f8071c59c7a1ba0717617923a35a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=8c79ae2c1fd0e01e3a57344d0051f49520f03351b5537703bb7cb9f66c9eeafe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=494850f48c41448692ac29ce52513b9cb39b26ad2ab53886d96ea3874c51e60a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=75dd99ae948685d632c55745d113a72f0ba3782fd5ca93b3a1bc4f63e0b2fd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664HEYKOAP%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIGqkU1pDb4T7H39L1LnyoML30eg8PiZUcWZyDYz5TGsOAiEAiOdITo3oKUMkcRsMMBA1oGq2VLEjrO%2BbKFJFMsx1jMoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHHODF%2F17gdhjf8G%2FyrcA%2FYwGyUpOderUcy2Cw8qtsga%2FD%2BSruJfIlYalvGzxp2Xqbe6q7vi5U78QZaC3ThUZC4vWsJfnKBeOBmqVbyyqlGnQd8i1jEh%2FxpNtmZgsoTsvph85sJuQuoiMxkdZuKN8HhVA98z5viRFnEpjAWkIAoP5FJxUY0QoWaGblbd4bmBeR4LQi9Em6rn%2FOb1ESvLVqYKiQsdwUURg7xh30sCz9GTQAiN%2Fe8NBSmn8hXS4%2FKiOt8mDPc%2Bc2VKBB%2FkabYc6BXRWcTJoa8TwBdNLkKTtVRhK3wMN3VN8Y3JnU1sAF3djcbu4TL84PaJWp0D70Iq05R0zXccUq0K7n2KknmgM6ntRRhU1xX4LUbtIbIFybSTmU3PtkSXHmXSK50GOd2qq414m4BSphL85%2Bpk6HEla8cQmIt7yP5kqwfVE4UNA7T2ilo12XL%2BhiUdZqWB%2BNhouDFEZyha4%2BTSZh2KqsM3w%2BXqi%2Ff4Eo02AcQ0DRQs7YtC5p9j%2BSVccgw9wQ3282utpcR2TXYKy1IPEmkYFSwp8IW1anB%2B3vAIl3UVNUFsljPl%2BTQwkM8niGVdyV6sSoAm1qBhNgARnW9MVh3S2gxON63Say0j0dJGiGqYrtLgonVmyZLTwfYMFzwnKKv6MMyOnMQGOqUBSKzl8d1j1Vd%2BlnRDDHv0dCVoI7RYRSCLdBjMJkgX4rWUB%2F%2FJNNDHKeK2mYMPUau0uXaJgmm7HcG5YOHMNB7GFNiAuamp47MjlmrgqCYGN%2BAN%2FbCMwggk8N4BexK1QHZbTzTwSs9NZOZyM123m1tLifxs8Q8vcQnlEwaQd%2BZuzaL9H8ZErFK%2BIOCI6bGrLzTP5XGZf3mi%2Ft9FuKMAJ2vw%2BnRCqSsN&X-Amz-Signature=1a6f105048494d2034bf020e5f039211b48e57350e94173dea0041e35dbc01ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
