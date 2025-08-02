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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=3ec840aa62192b02a44cb46dbfbec31babcfc3326c6e2aae9252ef7b713bb3ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=0d8ace833640e0adfc1291bb4383de5e456f7932189d18a920de171089458a0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=ed800ce076789a6d2945a4aef24c63dafe06701fcf1d05636fb341f404ddaea8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=ec6086366d2abfbcdb2191129fb7c8b8352b4562bfd59cefbd9a133e302027cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=09abfca6fc652b4a2f577b85b349a45863917c9b1950ca1b3512b2cf89ba3682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=5df55369579a65f6ca191a0193d336fcb651a967dda6316eb3f376b5e2482a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=c51801df8bd1ee9a67c316dd40283a13b302ff1c72439b8ebfbea69209aadef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=9c0b90a814db48085b3d97d8a8f43752fc51c74a7c800c04615fac7b92d12ccd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=5bf1b9861b7ded4d36ab2c561e2753a5456525bfef05d8225957efef19fa0e65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=746b52240988ce8dfe470d2feaabac47639325b4dc9a659ad0f45111d5a25d64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=1edbcb9e64a1f24744c3aed0178babeabd9add1c70ac573351a4ccfcdcc8e455&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=c45d82e0337963bafb041fca6758f8b01620fe0b0f2392b60e73c761a3c3e852&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=b56b3c97cdd2738039f9f412afad8718bb2450046d9952fe9e22af0a8f5fbbe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEKKZTOF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCyDMdZMhvDB3hI4tUjVsNF5sQWzDRlEgLpx27%2BAlFIAiEAt3wTm3nB0zewSYEzmAv61tlboABvsBPTAcffmlKP%2BnIq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKURz5Cdw%2B%2B71c3pIyrcAxchDaCloQbhm3K2QvFNxozayqg5oJAKJq0%2B4Z6xkv26JAlFJJ76jhfrB70215XVQbgGpX9Uvc402gu4wDywq8ZXsynm69reGUWgzV8EFxtdHaxmOAQ5ZDtXDd5oewN186xzZ0Cqs5pjA1%2F2K2438tLENb6tmXAbDDg7VAkMYVlX6QvDlTneFFF5g8drz%2Bv4z87Yz15u2hz1nnWgLt1tgOBBNVN1ggF7b0L2JKuwcMxxtb9FJ0qhg%2FR8AFje%2FUJEwVj3Ff1nodOCukEyu7LXYY8iMCpz046RmnVYqfw3hAQqNDiUiXo044x8lkJRxFE5GN42yA12ouemLRs9oCeldo8s1WZ2ZXfS8Q5SQHc6IoHAC%2F4%2BQxO2f%2FrLBXVqnJ7ceck2rVmYjmz5Nc7lMOJboRnLX8wDjgsItxsphv6XrMvzd%2FYBQGbukRXEpVrjN7Et0ECXmQ68QJlcA7mBtFD83H8838P0zRV3SHmClvUyAiO7wPSBpDOXGknZ7pBCnTeoPisIAPdQ7Jp241Hn9d2lCbJ2wgzBM9pDYn43ZPcGhfqe0cpEDdBdt1gPtmmKMI2ZOYGkEyBxUg9%2B6BLkMHxH4Oi%2BtWwWGlVyNemc9Yh5ZRcqWyq83DDqsAGGQeL3MPnvtsQGOqUBV65aliA7YR7umHU5qCzMZQd%2B0VsTdwYO%2BjLGPEg%2BtVh90%2B3kt39RLSq7x5J8Em8eOriaSoTZTRdyzkMbv5CQpM%2FU4Bv5TcZWWVmWWS6SVmlH2QDiEtYLFavU5hCNBFvs1ip5C%2FpSjz5Uxqc4D6w1kVzCztPc%2B%2FsWd97%2F4F1HHIASv2TZQCitKn04rQnsKTGlLYg5bBFiCge16eQUlup4y7a0wNtI&X-Amz-Signature=bd8f416dc9182b59cc018228c9c1972ecc23e06b62a4e78b7456fbbea3d173eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
