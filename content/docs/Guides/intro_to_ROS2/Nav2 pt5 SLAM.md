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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=4f75abf9fcaa9af1e4c109d95a04878e6673432ca0154de1681627de933f1187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=96a541c877b0ceb39661b31ac79485e27fbfb199a1fac191e5a51464b843bb1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=4696c1b62c2deb455a16c148f40383b812e3d485163b26e975faae7e702f139e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=de9e0796e40569f09c9146513714ac269758cf3175114786d0fd886512a9da6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=90a31775c4582105dfb638287bbb78a2a73f2056a994d3a20a640981bea1bbed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=7b10325e1500f65bb7f7cf6741d1e694aa9258c43c177949077f640a28b1b4ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=a54c56c7e88bc53913f408ccb377ca13fcbcc9d82b4565010dbebacacb492b1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=23a37a7bf1d616e8ac1e6107c861e760617eaae474bf7943e2af1a4c8e85f4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=186300a5aaaa9a20214f688e163a49b44b1f47dc34ced25fd4d4eb2aeead4f6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=c77a0c2e9ec6a898027950d0439ef8dbf9b2623f96d245a3a55e1c9f963f3599&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=d76167a3a22adb37cd03b362f9a9d1bd5eb7948076401d0438204d95244c2ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=219f3da3487d27aed347530fe954cc82cda85616a580b4ffce212126171bf038&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=174f9fcaa8a64259e57875aa7c9f94c5ad7304756c5898ec3c35c4c9ef09c783&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KWHYRO3%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQDK5QM5YtczcNEGDEJSILDj4PyaoBbSxcGG6M%2Bv3AGSqgIhAN0wC4fcWEtYo9tV3oC4sO4Bs0hXcvm3uPQodqTq620pKv8DCFAQABoMNjM3NDIzMTgzODA1Igz3pIxyuSLUzStOpWgq3AMxQ4Q27%2B2QKRsTCHV1%2B4Rs68H8aKjyDCpqmqsljzLqi3xH4WKpGOMG3RotfNmPq%2BR5JGEJlSlrsxiw5tps0LfUPEUgMulO8diORP6LArLyAbSTiCdwqWsF4mpGJc%2BaAT88NtovObkeS3Ck4BIq52KIkV8Dtv2n9VyNcVzVCl8flKMiYf88k5%2BPa%2BUr%2FlTBRoW7a3mgzb%2FXh76Ynh677znF%2Bn0EzbykgoQU1M9PrvCKJCCTzanxAwDvfnnPUsh%2FBo6kIz1T4ZeUTFFdWKCzfVWZdn0Ol3QB9%2BEc3pFPyRlzF2zo8CNXrKIYVqoWt2x%2FxYvB1RmXCx22VB6i8AwLzv1FaunLTUDCTC6CylSLPUlPkZlZkAmdumSnwrR7xZTPuSP1WvCPB3jVTjRbOa5THoSdbckNR4q4uyCch4MJn7ayvttgMximfTXaVF%2FhtZT9MSbofItruaiBTC4dFk%2FoCuA3JswaAXvFBlmQZwFc4is9EXbI4%2BQtBJ7l%2F%2F9thP0bCiIoo7nDo7dMwO4P7v4I4aclITD7U3A86dNz2a%2Bp%2FM4xKQ4PzUO6IikVBQV55IXvly0L%2BngO05dtkF1QP7AWpC78GUGKwuML%2FVXAKCtAIoDv%2BxexN66F61tpgX8cHTCi9MTEBjqkAYSlnnm2ovoi%2F5n3ONteew07Lfeyigg%2BKgsYhTiGyjLmqlO1s6WdP7hDdEAUh7Y%2Fw7iiF%2Bx08O8m29mO%2BTZedH8i29l03Fh37PFGFYx%2F%2FAqAfqilWsVHEECYsw5VRgwMOKlJtyt%2FXWoU3V1xFp%2F1A%2FljeIyUdYgEjr05Mqsgxg3Np9AXRscLlsjJ%2F1U7IKmltjP9O5O5WfVY9C%2FmHnRNxuGE2fWA&X-Amz-Signature=aedad43e65c114d77262cbc9a2d341c501e3c7e535cfd8c529a4819487d84ad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to the [slam_toolbox config guide](https://github.com/SteveMacenski/slam_toolbox#configuration)
