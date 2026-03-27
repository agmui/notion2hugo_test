---
sys:
  pageId: "231da3bc-6297-80e7-9c0c-dc2db5610ba9"
  createdTime: "2025-07-15T23:11:00.000Z"
  lastEditedTime: "2025-08-02T09:48:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt5 SLAM.md"
title: "Nav2 pt5 SLAM"
date: "2025-08-02T09:48:00.000Z"
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
  <summary>{{< markdownify >}}What is slam?{{< /markdownify >}}</summary>
  
TODO:

ROS has a package called `slam_toolbox` where …

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=071c69e75eec762eb9dda5d9158c447e233188dd6b9accee75d255027a94beae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Inputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name** | **Type**             |
| -------- | -------------------- |
| `/scan`  | sensor_msg/LaserScan |

{{< /table >}}


#### Outputs:

| **Name** | **Type**               |
| -------- | ---------------------- |
| `/tf`    | map ⇒ odom             |
| `/map`   | nav_msgs/OccupancyGrid |

#### Params:

| **Name**           | **Type** |
| ------------------ | -------- |
| `slam_params_file` | file     |
| `use_sim_time`     | bool     |

#### description:

Given a `/scan` from a Lidar it outputs a map

{{% /alert %}}

# Simulating SLAM in Gazebo

To run slam just run the node: `ros2 launch slam_toolbox online_async_launch.py use_sim_time:=true`

Remember to turn on Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=519eb1cee0fb3f873002dbf960987858cbe88d67245bc1f1681b35abd9a3f9fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=758ca551528b7631f8a250998a4dec445de86f340d840d279196cc4916dfff06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=10075550f9e3caea397961cd2a1f56bd706113a18398d8bde4dd77c003312adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=07e3a1c6cad1ee9e749c22232fef1fc2119afab9d1a5bbd6a113aa3e04560f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=89a92cc5ea49b98deaba2cd545f058697f7828c08bb84d05d34f50612fdadcc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=da03488a24a4a6376f67edf6cbc8e8b3a1d233c953568a023c3f37d4b238d152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Remember to turn off Gazebo again:

```python "4-4","9-12","14-14"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=92a2893ae54c6410a8e25e524a8a7daa2c27233e3e482b053aac1ce6e553c6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=b382ab4265e14553e51ff2bd582232a7c3856ab3ec04481c8e83120a738e92e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```bash
colcon build --symlink-install
```

```python "9-9","13-20","38-38"

   
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=cd692fea9c952d50d8b726fdb5a192f09c45a83eae461e6e33f9990ec739e31e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=03d86cad6d4dbac6d46427683a783b98e0f0f7996e7a49613c07e13ab2aba757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=86ebc40e9529189e930b34616492a908e18f4fa17ad4ad6d5613a9ac63102ba5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=58c4bf30489d7915871273de78f0f5b20c8208b4cbad710d9bddcc85d4f92e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Reloading map

Once you saved a map you can reload it.

To do so open `config/slam.yaml` 

Change `mode` to `localization` and

`map_file_name` to the the path where you stored the 4 generated files

```yaml "18-19","24-24"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7B5UHZE%2F20260327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260327T022828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJIMEYCIQCZeJpoGV8VfQKQFReDX3d6fwsenXcunYydHfZpn7JyvgIhAKYkg68mda5PXzVsrejwu2wcAkcU3DdefSlDNt1ByvUsKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBUbS62rrh5kLiSM0q3ANQYRhMSn8U8B8ipHF8eb38bBxXpafMafL6QIVhKHXJMShK0vX1Elw0Rm9R1494tx29TJo5qztkbgWFdQcvFZ8OmY%2BoRbkZvFR5oe48ovHHl3A6WjIq63%2Bo%2FdW19I%2FJSIyyr2SOSo%2BqHf3cx1kV%2F3X8ewzu8uUp%2FbC3e3s6xxRqQTBkDvOXHAXQqkDP0293ikRxndyTOQwOWHxQ5ksoNQMTGgHdna0IuuxYq8sHLmbEPusgoYtA90aH%2BmMmqoH1TJmk9ayFzmMPj005sosO8BpUBL7R0a0v2Ls1OiGn54hD06jdYSExf1kVa%2B%2Be8pxv9gdk3gSQ5dc3ciX%2Fi9TWMWPRr0VL3zZ0CWTIsKMWVyb74A7p1PdheZ1paJXccMc13Hru72U0q0sdVZLTveZ6yLm18IRdnL4AEFt0ZJ98MeWLVFX3DK99d0CM8XrMncMSGynhTcDKT3hID4Nsf6htCP9nXjyGokIvTNWcLS7Ns9c0BQwSHeq68bejtfKQxvQCzKpOgLGvDfql5T9JIYCRkxK7MsFX3vgZ37%2FgkzARgakCtqwzgWkL%2Bi0xROzGVjuA%2FaD68AHEgTtvFn4vv66RlbMjP8hGi4jlSv0MBO0hlrHqcHEiGxDS7yVBHMyCTjC69JbOBjqkATGhDCDLHm43NqEykJ9LXFEMqEvmfwW7a1xYitNAUEntkk4L0RFCG15wwsAcCzEk5zACAIxuwlGR7tOj2tz3FuJLmuKORZ2NHl2pKIptgnXngae8d9T%2FPe%2BK4ckkK9jjzH7c9eYEZ0Bv%2BZlS9IfbgpTzM5nlZP2gSQIujQrAsYbNjt7nQJ4lFZ0Dp53aW6XqZthQJZWC1gwu1R8GIOTthhLEPE33&X-Amz-Signature=7457411e6987f27c0a7df27a3b9873781baa2d51126cd1b049443bf6f043ad2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
