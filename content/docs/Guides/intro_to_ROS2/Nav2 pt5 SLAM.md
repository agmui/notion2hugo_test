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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=6781700978eaa7c87a8332bbbde048f1ba2393a0821a7915aefa60faf7cddfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=05971647717297571fabd226155fe1a1c2d8d7a9e0a06960c6b2d1f2f0175b39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=53da4c4b4aa667aa7d7ec871daecba2b9c8c4b457859eb42e70f71b03bc5b2bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=0752fbb46aed8c6d9756808f410a67e9f8b65df6800304bf0fc06b64a9ede609&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=f694acbc6af93a6f16b1e12f9db69e9329596008f25e34bad1e99cdd89be0d6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=e50c807a6c540521afc6215eed2cf6fdc7d1262dccbe26a479360a003e7689ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=7ed6d1343137a4b3a1615fcba42c594a65e282c16c0e7e7a5720826dfc909775&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=9e7712ad0ee798741caacfae0ba2a3a83f18c1090d40bbe9f0fd9b000fa75164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=3f4a06f5445d98d559a7c0b2cce7bb0f8d9f0bdec0622642f8847fca78f178e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=649176ef840f5814dc7e7b6c7de4e85ee1f267d9f57262cc0b784dd9691b25a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=19ba4a03e5dfb43cb7f43a46b0a807262f3c83f6ef95403960fad76f749bc4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=38b63896af357074471cd4ef3ad24ad0345a61b0a732449b77b2072980f8a730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=d0b7b392e01503bbc75da820a409b8a21260c7e303343453aa4c7454efa0cbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FPUFV3A%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIDn%2F8mJYfsDwzBcbZxdWV8TWro%2FP8OePx4%2BD5AYB6dNXAiEAyuE6PHa0E24B2xxm9Zg5fwyUKp4gnD0uBlF0drHNL20q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIoWTUYxB5IvMHEZryrcA6sk8bnDyc4kP2wEohipISDs5q0nPHfn9yTIzTmDSFBPXfGatHz6nQgFt0Qm8yYMhIV221U1EF9JD8X4OXPkO0eYjqYen9Pwy0SdBfcROgoowLZmdF0k82OLXf1%2Fz9ud3ePCw1Sxc5qVkqJTd2tvxyFho7LnhKegUOATVuT%2FQiutvTGM48doUwtWBt273yaZjTVL6%2F6eCK0QkP1QNVpLocwMyWWReTrBCP8XSEAc87i8h0W9xz28p7V9d6hYykN92TlvzagXWRjgyykco67DErKVT6GJn2G8EMF1XCYpB1Bjh%2BpzzIGnHRgnbHNbqlXix9t%2FeGD0XAtvGv3FnLwrKodSf3uv1JiWPwyvct4vAE6qfc7dP1TR3Ev%2B2GLibd0iPgTjAg54kn%2BUj9N8IV2KWcuFDQFzObL6kLfESoWDCNkCgCDs1dvMwpPABZsTMYDvk3WPnCx1F8iPPE%2B53oCaVBYdJ9YxEDlT1%2F4S3yr9jwSj%2FmlVmNGA6DbwId4z0Fni764%2BP5I9jzxmqafk1RNPIo9zl1Re0mMhvyzZkuHxEFMFxJObXrR5QU%2BCZhFILN%2FToTqxLgrmxqOqAfhzY85tybVC%2Bb%2BYG03uW%2FEjcpCtgsab%2BUCjVKTEBoL1lMEXMM33gMUGOqUBezWmoo5I67b7rLy0SuYXVrMukqvJz4oSS0g%2FQixu0nMTUvZ26DlEzW6Cdzxua3VlNrcnIltfOWhKHo9PRXcqyeGfh3n3hKfjcEJwpDwaySZHV96pNGEL6oeCxtLDTCXrm9JnGFu2lf0IdXtLWQLA2BBsJfM4igB7bilGAIT5KQ%2BPcwlhp6oselLY7YfKsUVmOKEJzmXyZlalsdap53vGaD6RHCIq&X-Amz-Signature=684bfc1b1fd734b979cd0fb5cd497ac0e2805ab57b6f16469f2929554c0503ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
