---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-07-30T06:25:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-07-30T06:25:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 155
toc: false
icon: ""
---

[Good video explaining slam](https://www.youtube.com/watch?v=ZaiA3hWaRzE&t=979s)

[https://www.youtube.com/watch?v=saVZtgPyyJQ](https://www.youtube.com/watch?v=saVZtgPyyJQ)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=72d8e89167ca3552dac22011b14172a8fca06be7a44620e916892e7092f38b8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

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

### Viewing scanned SLAM map

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=e342a83870c8a9ca30eef3324ffb3c2fce65615036bdf74b76b1bd91afbfe65e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=eb18c88efdb5cf1c62b7b83016598dc8b282a5d0721d3b9d232afc83e2dd9ee3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=501d935a3ba0fbdaa1ce6ad6c511992476a29e2ef8c5055da8d6dc984e9cd019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=8ddadf7deae71c17870ba9fcc47d705f49215947cbc696b4fa60705ff4ef3cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=3d603cfb4c9bf8abc0791848bcb719c319efc36ca65ce277d23de75ba1a331f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=1120d6602cb20760c3c853a7a5f1f1c6db63e6035929b86f292e255c297dfd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

drive around with `teleop_twist_keyboard` to scan more of the map

## Adding `slam_toolbox` to launch file

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=e36cc14060cfade024e7f53944771a65ba1c6ef423e25a39abdf7f89417e3616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=ea0d14c8177244da17497379c5fadf451a061d29b9662d7a4484314c2d5433c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=1d6a0d6ebc99133d53a8543647eb30dbd9d21ccccaff1e2144f469e7599d59b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=51a6a80f8fc05046a47f7fc4b94e62b4b2d068acdcb586bcb4c4129f07169d00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=df224f1f7dacd63560797f672016d20fa01b62f5c237e49d38b030de0bf3c900&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=46a37766009e7a52efd482fc401b0dece4e37a5db50bc32da3a91fafe97b9ca1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OFK53ZQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGGzX%2Fkz%2FLx1FbfWAx6Mr2QgCQ%2BxbK6p%2Fj%2FRI8pmXS%2BfAiBqI0VIYQKt4FLqSgzepzJ98zAvdw%2B9OFCpAitG6iSFzyr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMKHEkzZd9fhH1gGppKtwDb5%2FwuZK6eOHQ6NUu%2BeBK80mZr98I6nXzuNg%2B9gr78B3V0DyO5zn%2F0nLWyHOK8%2Fb4RPPDARuBcDra9ifa9zqIcnAJgjk6d6Z5FIft0dka1h3DRx4djoiC4lKqkrHxcpU6Hcl1tTRKCBCIkteY19W6EJc4R%2FXv6ImZR7w71ZXS4E652sXkwatrs6iZISqNMoL1FIqhSsUTSZBQFPyD7P2zsgT6hB6SBJgETkbyEOFDADVORkv4fPTd7sKAI05pQadu3IbbuEDSd4ALHQwKCkZmYrGBLPsCY4hrtwZBQ48s%2BjitxRteIN2BJIjs%2FsgTsS5FdMSRg8kLB6gCjwyisxQDB1vJfHtL5FfczKFa34t4wj0yzg6mcAK4Fb9sw6QL4rRwvmjqlID2kU47TUlHednrDyto40WgMNc96QhRWYEPphsqDs1Iw3Weqh32ncAhFwNSlG77l3fkWg9PNkwpyLu1FK%2FhXwuBwgO3qltbWpPyApEx5ncHOZ%2BZDdJr1eIZAz7ZoPa0FgcqDgxDBhJoxG0JCbeOdzI8g%2FZZ2VLBo3YUDwOv0E3ptCYk1BEWIe269LxU64P%2BzgUYDqCNGS706q%2FlLYuwZe3PtkWfNlcxn6cccDWeDDsJ7OBTPBluKH0w5e%2B2xAY6pgGvzPX9JuYtbfl3NDhMNSool5yBiqibab%2F8NBS8c037UXBDEiKP2yvFVoRHNHEjxVL7wronabqXyFmFG1gi8yDMoxWapEzlbeveUR%2FSgGPCtczL5IGc5JUn%2BnMJTpB46txyAwe%2FdhzakhUlRwXSGX53mF5%2BHGun8Y%2FtVbT6f77aK%2BfX9vdDShl0LSl6x2guaoohq2gcSBEBSAd%2FO%2Bu9SjdhJNlaMC38&X-Amz-Signature=b97648567c2cd2b9a03fa2ebcbc31520d6665cc1683dac40c76777543087fa9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
