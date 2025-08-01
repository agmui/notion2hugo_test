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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/69a47814-f47b-42ea-a93a-389092098e5a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=8b78e0d92b03679af11401e7d4de5c340598cc0cbd4ea1803f428ce556f35607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/63440749-1db7-4a1d-bd82-8bb4f18fe649/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=ca0e12e63f3bbb3685938a1d384f8ffbe95add76a7c118472505338129ee9e32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c391bb80-6a59-4229-a89c-c8364eeabac1/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=4e1c52cf9b4af85d6d8b946b625b948ca900356b02ec81e9eb83a7b3f9f26bfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/65aa1c69-eff5-4b4c-a314-8fb7eeed80d8/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=631e3011f9e8921e220b0d7b5593dde974371aae03685dbca1c9aa5c3a969066&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ctrl+s` to save the config

**Result:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a0d1804a-611f-4c9a-ae6d-86cbc9a5a279/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=1743853c6b259595055a27c9cbebc4112603660bf6cd79a30356d61af67b3a2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## New node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2ac94d5d-e320-4826-9276-470f3083da48/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=b9a06a698097d69c6627913b8e4141368e008b66148e086e8a9117c0b9710d1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Physical SLAM setup

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/2a045534-cf86-4d67-8f4d-8780c730854a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=48afb6b485141c49982b48964b574bbfb75a5145c02f19f01a62591c9054ae92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/d33b4923-bb63-48b6-80d8-d193df009f5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=b588f64a1441a8a69d19432466cddc70d6c56122bea91bf8fe38be72b84af63d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

[slam.yaml](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f22ad8e8-62fc-43ec-9cc5-752244edebaf/slam.yaml?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=97ab764b370be5aed2b7f376dafd77e0364d25f2571022c698df38ae3bf94557&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a4394c63-689d-45d9-a885-92c1652356ef/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=51ee72cb03c6d9f1871201737a4c519c8f49576aad5e6b535e3e9824d1542d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Click on **SlamToolboxPlugin**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6cc947c0-a10c-4900-abd5-868a8be47416/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=3da499fa04c7efee62ad2e2cdefe34380897d69adb116296a25aad558d77415e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

There are two spots to input the name of file to save to, here I just put test.

Then click on both **Save Map** and **Serialize Map**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/877bec82-2076-474e-b3fe-038d33ed623a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=d98df9ac22f640171d27fc81bf10bb41f9e006041544ad9ad5cbdcbaac13732a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Finally this should generate 4 different files

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/57960965-a7f4-4508-82ad-07018766434b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=9320517a402e1687f29f3201a195c9e225851a9967ebdc5f3597c645d9bc6c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/832b801d-2fa3-48d8-a0f4-2ee1a8a44c6d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T110910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=1a7def4d451c73f805c9e69453491bbb08f41d048d16093b49eb8bf9e4cb2bce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

For further configuration go to: TODO: link to slam docs config guide 
