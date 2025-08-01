---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 152
toc: false
icon: ""
---

### What is odometry?

Odometry (odom) is the (x,y) position of where the robot thinks it is on a map

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=d147730b5b3cbcabbe5e5b885475ed13dfbe0c602d85f6b0b41725caa0b1664e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not ros2_control?</summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=679c1b67685ff2f45c1292743ad878325cbf585394289deef66a2dcc9ec43bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**        | **Type**              |
| --------------- | --------------------- |
| `/joint_states` | sensor_msg/JointState |

{{< /table >}}

#### description:

reads in the physical robot’s wheel angles and publishes them to `/joint_state` 

{{% /alert %}}

There should be a file `mbot_pkg/mbot_pkg/my_node.py`

This is where we are going to create our custom node to read in wheel angles

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=1cc7ea81be3169e26e59503ec4539d7ee466095dc5f8b3644ffa9c9db43136f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.05 seconds
    def timer_callback(self):
        msg = String()                                      # create msg object
        msg.data = 'Hello World'                            # fill it with data
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info('Publishing: ' + msg.data)   # print msg


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=76e884b34ce2f1a3e101795d45f4bd892213eb00fc098c3c1a2e401ebc5b3490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin
from nav_msgs.msg import Odometry, Path

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)
		
		# gets called every 0.05 seconds
    def timer_callback(self):
			...
```

To find out how the `JointState` message is formatted we can run these two commands in two different terminals

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 topic echo /joint_states
```

</div>
</div>

**Output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=665fcbfc8fd7e4cef667d6024c3b07ab8852e765e31d22a83b80511018fcfd7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

#### `sensor_msg/JointState` format:

```python
header:
  stamp:
    sec: 1751953191
    nanosec: 173816334
  frame_id: ''
name:
- drivewhl_l_joint
- drivewhl_r_joint
position:
- -0.7640353333530374
- -0.25446900494077296
velocity: []
effort: []
```

we can fill in the fields roughly the same

```python

    # gets called every 0.05 seconds
    def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
        msg = JointState()                                  # create msg object
        msg.header.stamp = current_time                     # fill it with data
        msg.header.frame_id = ''
        msg.name = ["drivewhl_l_joint","drivewhl_r_joint"]
        msg.position = [new_left_wheel_th, new_right_wheel_th]
        msg.velocity = []
        msg.effort = []
        self.publisher_.publish(msg)                        # publish the message
        self.get_logger().info(f'Publishing position {new_left_wheel_th}, {new_right_wheel_th}')       # print msg
```

{{% alert context="warning" %}}

## REMEMBER TO GET WHEEL POSITION!!

At this point you would most likely read from your Arduino or from the Raspberry Pi’s GPIO.

if you are in Robomasters this will most likely come from the `RM_Uart` class

{{% /alert %}}

<details>
      <summary>How do I get wheel position from a Raspberry Pi or Arduino?</summary>
      TODO:
  </details>

<details>
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=480b3b9fd20f93bfe3122b8f7fd956d2595c829c04917e21d80b221e97c10ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=842427864223ae83bff8ca8478e5423f4cd4126bbc320d5654c14736519637db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```bash
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run mbot_pkg my_node
```

</div>
</div>

### **rviz result:**

moving the robot should also update the rviz model

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=bb507d52b043f244d91031841d796043a4df469b107fa7462c509251d69ced49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python
		...
		
		# ros2 run mbot_pkg my_node
    my_node = Node( # launches our custom node
        package='mbot_pkg',
        executable='my_node'
    )

    return LaunchDescription([
        # joint_state_publisher_gui_node, # debugs urdf joints
        my_node, # swaps joint_state_publisher_gui_node for physical robot
        robot_state_publisher_node, # publishes urdf to ROS
        rviz_node, # starts rviz
    ])
```

Now you only need `ros2 launch mbot_pkg display.launch.py` to run the whole setup

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=2dff08c110bd8ebce09eaf90104ca9d5a47d184223e1c4e1ba36924943b7b364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGWXK424%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD1zO1WXLOttuF2nN5kGt6zaKm3z5hq56POy6iQzOS4EQIhAPEp%2F8LGX72Wzrkw07tsxDDsmEW4G4APkE7aOO7kAqiUKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLogGFu5IsseyMxjIq3AMu%2BAh0WzWIgkdPV5GFOAy%2F%2F2m6vOP4NFEsUmbzJ1lsVAgrrS%2BIKosNCHzxiaQUp9o7GpS1RVGx8kBS%2Be%2FMRbe6Hz5s0H%2FWKXo6znnAS1Xwdifw5XL97L3K7CAlHIYgWikiv2m6S3h7qMjdHO43hJIjxfbkktuUYWakLb5vvIITqQuR4cAolv2H5D5uj%2Fv6r%2F2fMSXtwwhro7iAraZZbM5Wb2QCecRfGyyTMBizasKr6PXPbzbqiaB57MhOxe4BM3%2F0PLsaVoeBgClM9IKALw9LY3w0oiLcHnzMUtFY%2FM55Y55YCEugFzDxyT0Iljh0n7B7WKZNRwBFfj3Qh4ykG3kH5mxlJSmaYfsbL7pVjJk4QkQGOmUCRxwiPPH6TaicTsYWodkIPJowqC8fvXZ%2FJ7ryGGMtA2L3jbGA7WpuHQ61KM6G%2FBvieJwYCkwSnhM%2FN208o%2B1QCiIqlQqhhyERPkb1E7tsKpw5lf5gopgiLu%2BBCTOTmG%2BTEV1%2FB6cj9QVMOR5Uk3Q%2FquIy9FOHQUT4hBrPHq3PwhYLDk8z5A8KxAGvEKYAdnT12KzxOb3sDPNCeoBSi7a%2FfsClDVP%2F8rlUMNR8v8O1TO5wfDtu2bns4HoBc6%2FgYtlu80udBm2JwjDxtbLEBjqkAdlLBFPTwrD2MnWDhHjcd%2FScuadF3KPOAYsXHtCKSSduy9pg%2FW17DusKMZFRGRE%2Bo%2BWgqWwtWq%2FB74IGhUPfiv1Lr6xDku0mS4yrzrCMgdu8m1Jx8cMHUwTKCGMDjwQUzyNgkJfdU7rJnrVG5HWoyO3mx2QNNSqnzpgkGM4zwTA2GV%2BJWxJO46dqI1KxFGeGdBKW6DlWmV%2BsvGE42rDV57xqBNK3&X-Amz-Signature=778edf32426521a16644c46678ee7a4dcfe090958be24a15aae8dec2ee02c2ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function that converts wheel angles to x,y

`calculate_position()` just takes in:

- current left & right wheel angles
- most recent measured left & right wheel angles
- robot’s rotation (theta)

and returns the (x,y)

add this above the `MinimalPublisher` class

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
    """retruns the robots x,y offset given wheel angles

    Args:
        new_right_wheel_th (float): new mesured right wheel angle
        right_angle (float): previous right wheel angle
        new_float_wheel_th (float): new mesured left wheel angle
        left_angle (float): previous left wheel angle
        th (float): robot chassis rotation

    Returns:
        (float, float): x,y offset
    """

    WHEEL_RADIUS = 0.10
    WHEEL_SEPARATION = 0.31+2*0.025 # body + wheel gap (there are 2 wheels)

    # convert rotation to linear distance
    dr = (new_right_wheel_th - right_angle)*WHEEL_RADIUS
    dl = (new_left_wheel_th - left_angle)*WHEEL_RADIUS

    # calcuate movement
    offset = (dr + dl) / 2
    delta_th = (dr - dl) / WHEEL_SEPARATION

    # extract componates
    relative_dx = offset*cos(delta_th)
    relative_dy = offset*sin(delta_th)

    #rotation matrix
    delta_x = relative_dx*cos(th) - relative_dy*sin(th)
    delta_y = relative_dx*sin(th) + relative_dy*cos(th)
    return (delta_x,delta_y,delta_th)

```

Next lets make some variables to store the wheel angle, x, y, and theta (robot rotation)

```python
def calculate_position(new_right_wheel_th, right_angle, new_left_wheel_th, left_angle, th):
   ...

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta


```

```python
 def timer_callback(self):
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here
        current_time = self.get_clock().now().to_msg()
        
        # ============ updating URDF wheel joints ====================
				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th, new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

first create a tf broadcaster object

```python
 class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # obj to broadcasts the odom tf frame
```

Then create a message and put `self.x` and `self.y` inside

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calculate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th
        
        self.get_logger().info(f'x: {self.x} y: {self.y}')
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

```

## Running code

```bash
ros2 launch mbot_pkg display.launch.py
```

**Result:**

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDDPRPYC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFPv3rwQPiT6mTkcFdKXRz%2BTXnz7ZxmS6PNAXkn4nqJJAiBJjufTXMTgvVJfaLDvpLryjOrIF2UdY05Bs6%2Bdw6RTSyqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMchgchF%2F1582FlpDgKtwDs%2FNvTLVDPhobe9irTJYaKC7wX573SG4W7DyFmxX04D59LY2xt0pYvsbYMXSJSlKYHcbnMBnymvP8hnNZZlZ8cCkTbtMSdfA17FJFm56zmLkXQA57X%2B3z07AnQQyx%2BxUPLnfICBbC6wqnUrw18VuQncTBwqpILQ%2FpwkaNn8c1y9f21ghfm0bGti0Uro%2BV43pAiA5Gu8IL2n9%2Bt6L5%2FtnrofS%2FE11LJx8JxtJN%2F4cTBB%2FfTIJl%2FNLKew7DskqE5uIB8MaMxe0qjLzOPLFvUkpWGc1xI4fdB72IaVfFAhQ9qDm%2Bvg15DpywqIFWslzbEmsNqvnKhIaVT8BPcW%2B5nJ38foaLzopfknP359DNsZkhiYmG5V8I%2BIG8sOVBA%2BMS7H%2B1VrZyvm1Fy3lXui4T6ztOOhPjXuZP4byf88VXKMe8r4LDGMglFjVJoyP8PgRcxwZ5bON3KRpwxe8KwRLE8km6R9%2F0RAY80eB5MpbIPCoi9vuYXgNyMKZZK1A%2F4y3SLTPuFzoEB1lchgF5FOWMmRUElqtmA3s9bPzQM6VXitIMm0uLAbZFfPUARkS8FO%2B06tPt1pG8m6i4JbpPenDXhXGea9QLqNvOz9EjjbjpmySlnTzkrG91E6xSpYHFfdYw77WyxAY6pgE4dhNBTLHpW%2BCufQ38Wm5qw8QJFzsGuspcGV8oNT%2BIhcTSGxzI4iU7SSUKL6074VRVaOVKLAWOhJ4%2FMyyLYfdVdNvjdUbH%2FJ3i3TwGWLMmvJzrCPTcZFxGXeiPHPlwmicIRSy20d4ENcAGbzlyQoUCkyWmxyFiM1B4ANFRsTYmtybBeYa6y6AHo5gVuhhNun36hTr12etT%2FzZAEKCUfo%2FaAgd%2FemnC&X-Amz-Signature=85871621ab8bb31fca6776faabe6ec04a48b454eb29dce0307e9e778a060e0f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=3e13eaeaba238f0cc71c13f831a0b75180b537a5a2b192969f6ae4c584ad461f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=a03d8aff13ed1a7efa04f24d853df4ba93ea3dd2b9344ff71e46a47188845931&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self)

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...

    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=fdb39a199393bb6b0ce45631ac847857cbac0d36ba9663f7abff1b633d8cefe4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

{{< /table >}}

#### Params:

{{< table "table-striped table-hover table-responsive" >}}

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

{{< /table >}}

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=fab52a38fdd6d4ac03d8a51dec361e090f1716e32e62aa4d92f5e56ebf36ca17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=d566bedc2ce3025e23e084c3ac8477a8abe03429097fb280cc6a22dd859b0fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=79436807522c697656c197853dfb2ca8d4d87d14bc70f131d40d660b0cb04f46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

formatting the print better we can see `TwistStamped` is made of 3 parts

```bash
geometry_msgs.msg.TwistStamped(
	header=std_msgs.msg.Header(stamp=builtin_interfaces.msg.Time(sec=1752445192, nanosec=279741976), frame_id=''),
	twist=geometry_msgs.msg.Twist(
		linear=geometry_msgs.msg.Vector3(x=0.5, y=0.0, z=0.0),
		angular=geometry_msgs.msg.Vector3(x=0.0, y=0.0, z=0.0)
	)
)
```

**TwistStamped:**

- header
- **Twist:**
	- linear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=3ead0751a28de24acc922e8b05f6fef8d7e41df7e62e2aed22e95d292912b4e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# Adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCYF7NVC%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiCFzgBL7zb1MVS9ljp8Inw1%2FsJN5%2FsD4%2FKG%2FG0cqF0wIhAI%2FKP2zvnZb2XLzeD8lDUXQT0a%2BBxMxvepwNrW%2B1BU8ZKogECOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkhlG29gQRLOI3jvkq3APLgK5mrdwmw2wmmYRgVJB8x3Bq8g1XLb%2Bss%2Ba5idsQbfXIlR5TsJ5qNc3gZuX0fuIqdxNJbAfEgAhg2SSW4X7DlXNwKrSGojhUa%2FBeinuu%2FCI8gGnG0rtSU%2BpJQY9WUPXgdGkx1EIQbVVChXLIwFZ2TcK%2BfnAjUlwJl9ZU27AiF7Z38%2BUwoWWOXwtbthKwJoMcjT5Zwta%2FajXI6GqNGE7zqqlAe%2FE%2F2k0C1QGEbhpCADovq328GecHQkFx7jwbP5SBY2UlG7X2ttJ9B%2BFT4FAsWOz01Y5HFd6Gnh%2FK3wns2p1KJdxFKdkZvd%2Bt3%2BqSrIRkkiBaNKgLtLwH2IX7jXQ9NHd6yZEkSnCeYJKI3noGso1VZVT5YSzhTX9x4KeMAo8HaFwAe2TcFGsHLXyp32557oqXKlt9x%2FbEVCS2Ii7S0BW6xEfSw0UPUdvRGrXOccWVcrFB1VB9TfadfuQE%2FUHR4E8px8g1tAeiLjqoH5Zmp2aV7eLTQ7N2XidC1urdN4vZvxWydM7kssvyg51aLwniR4Ax8uGCffeWK5s%2F0auAd4azl8BKWdE2DvZiUUrXVjIkgFTlDD5LgEEx%2Bk4%2BiYEopmdj6xC%2BNRMqIVBkmjkyAVRZNYX%2BfVzYvzBqcTD9tbLEBjqkAbxUpZVH8DhHuSIdYt6A1XD%2Bzik8XrjpbWGT%2FgRxGa%2B0pqdzM%2BDCJD9%2BM5SzO4XKo0ZBNIVCOt2lC4MEIHpsy8kWYj75Yjhuhsc7MVSi5GajI%2FktxlBO%2FGXXk62M%2FxjMhQP0OhKXrx%2FhIAn4S3Ol51r970s%2FiIFuMIfgzduuqPrjVcNc1T54pl6Lich%2BIOuXIdrYSez7%2B3AYxLh7NW7x1aXgSRBd&X-Amz-Signature=29e47c5d1b13c56126a72d06755cc361cb46e3068ec5bfba1d0cffc3d72c38a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Again we just need to make a publisher and fill in the `nav_msgs/Odometry` message format:

```yaml
header:
  stamp:
    sec: 1753330401
    nanosec: 859879019
  frame_id: odom
child_frame_id: base_link
pose:
  pose:
    position:
      x: 0.42549007816038587
      y: 0.20845842868953549
      z: 0.0
    orientation:
      x: 0.0
      y: 0.0
      z: 0.43871361044460205
      w: 0.8986269348348412
  covariance:
  - 0.0
    ...
twist:
  twist:
    linear:
      x: 0.0
      y: 0.0
      z: 0.0
    angular:
      x: 0.0
      y: 0.0
      z: 0.0
  covariance:
  - 0.0
    ...
```

```python
       
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        
        ...

        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 

        self.odom_publisher = self.create_publisher(Odometry, '/odom', 10)


    def timer_callback(self):
        ...
        
        odom_msg = Odometry()
        odom_msg.header.stamp = current_time
        odom_msg.header.frame_id = 'odom'
        odom_msg.child_frame_id = 'base_link'
        odom_msg.pose.pose.position.x = float(self.x)
        odom_msg.pose.pose.position.y = float(self.y)
        odom_msg.pose.pose.position.z = 0.0
        odom_msg.twist.twist.linear.x = 0.0#float(vx)
        odom_msg.twist.twist.linear.y = 0.0#float(vy)
        odom_msg.twist.twist.angular.z = 0.0
        odom_msg.pose.pose.orientation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_publisher.publish(odom_msg)
```

<details>
      <summary>Final code</summary>
      
  </details>

TODO: idk mention + link Robot Localization node
