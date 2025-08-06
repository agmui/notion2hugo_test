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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=aebee3af2a5c2458ef83af5c04f45c9688f1a74baab92a147d22307f2cc027ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=ac675c20abe91c32c67bdd13fb8b99f18fb5a0c1174339b1d01847db9b754bcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=7a9f20bf8b220ff82e50551d11f402647e381f4d8ca77118e48c99a9477d0027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=57881762943880a9b793839d82a00b32d88a4824a94e8498386df7fb90139286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=d4362fcc4d7e5307b3c6df5c458671ba1ec88537e96efcfe55f1c7a4cbee7d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=54642f031861fe388f66b41dca0d522f9569bda93da20258145a59a355860693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=da584bcc15cda21d8c597368917fd9cf8f5eafbcdf6f41b179d36ebd159cd168&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=ecaea940ac02c73d4ff5f5c7dec5c337b73931556d27c1b29347a11bfbe54991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=572d79e12eda50cbb82da0f5ba3e6b90d6b141ad15fb8be5c347f080a827957a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=681b5825ad408f1ca4148226d8349f722d060983d73c55b78487d43c7ecbec1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=467a82913c34d4b124ea57d00abcac221977fe22dd2ceb86c8a10491931cc8d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=0191d70ef47ee5e8a07916a4d3cf0a62a4ffd83aa4705e4cafcfa40488e7774d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=4466b3ee573fe8c4d3db8bb3d5a1da500249088f3b95c2819789adb1c4e89713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWZZPPE%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIBk1NLAocRYC6VcrUlbws%2FPE3qtRjC%2BwJSiq55k6ERVqAiB6221KH78q7bIG%2BTazLBf8EVgc0flKoRP7I6C6b%2BH1RCr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIMI3YQ4FAXTm%2FChzh9KtwDUu2s7f%2BvtdDaU9%2BO1os1b%2FEIPe3F%2F1Ln%2F6iePcHwaqaVa2MLSlVNx5tXBuwxOm0vgS1zcZ2p%2Fsq1S40k5splCkNCFVKbJAD6DtOSVQU1%2Bz1d8wx8evpDfNE4AZc3IGuFghVjccB1BEeaKNKRFaTay6Uob5cTWKwVcVcVT5fsVQqaxWJY2aWGXImNkjFCahbS7zHWPv47zawhjFnnn8BemUy7fD%2BeS66j697WGDSIcFnwkRKOR3bh7OYN0sEpenSuZdm3Wki%2B4xv0mUc0yTMvmd4F2KToFzcDDY5SAwuOg9qTUqLKn9EcmInO7XSF7I0V%2Bz2s1Q2xuTmnWUPbQR33EbyTdD4MqMY%2FO6bsaJHM0N55XhQc6n3byF8Vka7tvKA%2F5jGGwlNGtdJBMEMuaBg2b5GwAtzqTEg5UJnIxTn%2FGNyK5oY9HI07SqmJbQRWoXdEAlNNzvWGam6U9jLF%2BJ%2Bx%2BSPOzsVw5YSiJ02oyUhSsS0%2BUzc9QfZQpRJUO1legZ9DYjjkUUnp8uZQaHSAFW6upHgYvQ4MhcahTiQfvS5RiJqjUdG8VxggdUU4SiMxdl6582qrRt1UYh5fN0INx7nBfMPVBb3fvZqCkZCsnQ9U0hGMc%2BXRqI0tjjzhJAsw4erOxAY6pgGifbNVasVBokNPU%2FzbAvpeTlx6kvHcoYc6C2GCrdixRZeuSXl%2Bpkz4wQmKdH8OpDPUwiphujPmJuInJ5p7BYJoogdyTniZRllYyUOauFXvtAU1tyVhCE2B%2B9hJfg5Jat9Dty9K5UHyWnhHSqyEh9CfOhof0hgV7WEBDo5maOPC0OSlHePnclA8YkdUeG3sMt%2Bpo3N8WzAIhqdTPToCjhsu8nLTmKWo&X-Amz-Signature=31cdf4ce7e0d5a482dfe491cd4b174fe310e90362daef9bf778c2282ba23475d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
