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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=34e66d2280d72e9d1b571813332f74d1f083df3de4d19f38842ec3c524b730e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=16d0bc74722d5f2d425d37422d5fe9b4388b15cf576df8f24d30423e73380ab3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=a29ac8abdcdcd632b96df7213ffac3ef8cf5a85c9b35a6f6fbb745312e6d1c5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=65fbb16d6cb8d9f1510851437aa6c5e9627159b43b2abe3640fb03e244d9950f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=e298f626fc784e69b116f3a91f260fbc14ec4806962cddfe241d8e93ac2aa86b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=398d3d45d03e036c0248d0d6ef613405338cb95d58a72aaa48a5ef6672f65abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=90519e1dee8d09bd00968376068295187c224eafd529196ba95b4c5da1420742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=7a5b27e9faa6cfae37f68c6abc2573320ff5797159ca0ed17082bd9a1e016f48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=00d1375ba35c156bc91ffa514e4da9d654b2e08bb4b8d19504c8a95914cfdd6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CGLD53Y%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH3SWRNX60NDK9zUGb5AiW1UUJUtKgl5WJHlNfvdzEBwIhAMcplbXa8HBynq6lgjdr6wXQFaGG1igwPrP0bnV%2F5wTGKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1kJtZ7H6QiUWPwXQq3AOCLaKHchSHzdhL31BaTD%2FKXvzIG5YXa%2B4VVmU5f1nX%2BycbS4fJhVLOHBLC%2FpDlR6XCNOOLQaIbEq7o1BLfzNXTAud8BLrntl1ORHLlV5%2FDiLTr2HENXdNcTS%2F3bmhZ8IIrpPuZDvepJ958hahZsGiMrEges3oDgbyNZKGnULi0ZYATlN8%2BgIPeLXwmAbT49d28IR2slSGnjfAQEhqUkmL8JbsocBNNgzKDto0KnigZEjHTwx1NPEtueq1NstpVFMrshMB9Cql96Fqt8bB7KNzDYUXP73cAb2LhwiccOhatYXmyIiGcMirX2k0WkcsMdZokkQj4P0oxbmyjk0qLV7%2BqBCd5lJ5O2Ofo4EAvpelrCU%2Fb8kdp%2BjXIzmNDEZGG%2BahpoLPgz4giVl05IEutqkJ9nwGtSLE6MYIsTpHent5PEK2ddFTSF21%2FmCaRdxWGji85iOrVp8iuDXJkqPwHYYT6cFD4V%2F0UZIR%2Fa%2BxwctJMz%2BgCXir8COq%2BzCkYoqVcAjivI5K0rn0rBrDxCQ2enwzjtEFRQlbBHn521CZIW824NDZoqXU36b6feF3jaEN4wUMJyWfBac5%2BC2SF%2FTCn%2BRge4PwHWMDE37gOpeP4e6Vmmr0TzQ3PGlasavCM5TDKyrDEBjqkAXnazhVRBD%2BXwD9hho5scMp%2BauVmG%2BX6lZNM5OJIH0FCaqdZd3HBrBhA55X%2BxHRTjqA1d6HOBvicZULBgU%2F5I7r0WKJvzopQGT2jZRIVW%2FjQHKl2rHqsd8yVQU7LUSP7j9bygrKXPe4yutiuo66Vm993yIs3KgOUjn2%2F%2BL1622AGE3fYgSgxJWv7o42OysqiAwkJkDXEbWqy24TfcEnPYmyfrMG4&X-Amz-Signature=09f5436d39da68cc7ae2f6db5451f05e6197b2e2f0d66174e2f69dbe9abbdc72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAZ5NA6%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHVdg%2B%2FGRkK5pZ0YAXXmFw83DiOBLKwzkB0OLVFhhnCAIhANkZi4SwvTXTy52ZiQrzvhD%2Fl%2BY6vqdXghmVqAfgj9DPKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWqV%2FO%2FesT6ztF3UIq3AP8nJreR8gFhU%2BFluTwnoVdSfGW%2BuPHzjTrehs2FmXgnaPC5R7On7NqboW%2Ff7ZamUyx7baLbRfY0npAc1c%2FzZme9vrXmMWMvfwnYn5PW25umr7R5ZOiT6Wk2TWaq24UZpkoh75a0%2B26tcdqIZG%2Fo%2FFAb%2FaZS2n8r8Kf%2BhS9SRiJOUNgxRXfirKsF95%2BLT%2FqVD7yDGzLEmh1DyxewtBRD1CV7OCf4qViL6kgbFC6c8K5LQYG5oz3c0WIK9IgzoeU3qGMsksBn4Qd7w1Don89MAjLwqgd25S7nycdgku1qb81NoxZE1wmdAhY8fctcde%2F4oupn7doKPxG%2B4x6t5Ip1qx5mEFsOASpvKsOnXUKfoe7frrSHYJT3qSylHJxTfCUlS0rKJeCxNDYdzJ8PwA32puIcim9gD6rdEquKqyI8gDUD7ELw3Re48yh4sXDPg0%2B3kLl8arByU%2Bbn57h9HQo3XtvfmlQr9xvxhC2jMrftlz25EkOch4IwWspeEHl0gLTDzww%2BAI8BMKyr52gDKyoeNtCu25KlXzE0%2Fb02p%2BIrhqk4TXvJUmZQ4SphzEWjWz2AKuL1niZxa4x291fMQs%2Fv11MUEyDlI111m1g1sqombz8NafxjPXr8Fe7kt8Y7DDjyrDEBjqkARhI%2BktTrzyEejemdbLcw%2BOV77MWRPefhc8wCucf%2FNh2D14obBcmEHAOIpy0auyWT5Eyfic1j8V4fvOqICKhGKn97qGM91xg9hLz1qRV%2BIAyNw00SmvqCvKskkSzQ4LKbwyY95xIuNx8lCU30bNy5pDiCbqFkrr2GI%2B%2FES4upZHzWIj5mo3KZjB7evELvLwK%2F7cxnAQYRWJ7d%2BgWxkj2KCEfkSME&X-Amz-Signature=57b85fd929101d1723b866d42c75b1902d907884ce99e3cf993311750bd230b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=5d761d4329f8bef13dff218f8c430c8f602e0ec0c441b93adabbb211bcc03962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=fda3d726cb082dc250f1d7472a75da80e2382bc279de1207e5cfadbab19f36c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=6957531f5a79c759a39ae3e886e6d8b8f9995ebb69a7cf7cbb5af70ee6b427ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=111f20b42fa6b72c544dfd902f51b0503e8c5bf3c2fe6d285406cf1039c4b3fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=73e73a08287618f0c91ddea4f91477388da0b742347b2f06005eeeb0ca570078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=f8377d0f230a4fca3a1445f7bcb296564b0351dcfcdba07702feea76077c6d8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=0c3294dd2f5a50239c06b4a7c89d6986ac3d8197228818622ec7d3f2efa9b415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QISMAWVU%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtapbn0WYRvhow4U%2FSJ4GqIqzsLkPLeJ5Bedve9asZ5AiAwRWUdu4Eh8KQnmBjokYWRn9sXx8PDiqMHWG19vPpHRiqIBAjj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Mf0bMrvAC18WabsKtwDqhP8YbIobFNZOzoC9jdYP0A%2FlrVuBpzkvGyRWFqLUbUVJSR9j5ovMoqrCuiZPZDPUnpzsE1YTtjEY9l7tEjOlw%2Bvf3pITB6UPmWZ82sUdcbQlXrJ50qY1VrCINp%2BXJT%2BpGVzdyA92g9pB7LCfe7jkIjuk7CgKygfcA%2FkT%2BmYtdQa9HNnu11xMzInTb5e1MkMZ6OGGm2bfxwLI2z19hFxDvj0LYZa21Zn45%2Fht%2Bq5FG3GSlM%2BCOm3ETnWTcCAAz7Xu149a68%2B3bOYV68QDdkjyc15TNf%2F98cD7RAHR6H3bZmjJ6Ok4PcZ%2FzchQ1g8YZBJKy81q2jYpht70gEOkEJvm6iwFt2pG1gGEaSHpzG9CLIAp2JkbbjDk8FJsVZlQxPou3mmblmDYXQ7tHTg00oYpJs1G5NMqjVKz9jJ4JJ0icpOXljVAlyjL0A3wXos5rmDygsmmVVNGEnI8LxpX0qEYiPc37NAuwQZ4iF6qT4doZDAw3MnCRepaN46zolN6oR%2B98HhyA6IC94IIbxOt16BiyWBtQLIl1ywit0dwcvLMFEuNs0Y08MEC0nm2KXDfT%2Fz58VNmekekqK6AJmitr5ChMKaEZCDyhL2FI726viPLf3B%2BqTCCQmzGNWlbU0wysqwxAY6pgE%2FRfWrDNBH%2FdEX%2F12qoXrEvGVtlAiqWagtM3Y5ouGQsnTjnL7wmzYCAbVAGoFgHNKi0Rn0yZTJCmDDul8UGM14mRIk9QwNDDSQLEAkl8WUAYwM7a6uGGBsEefc4JuJSbqv19yylu8wJuCQcmGvtW5OZVp%2Bfr%2F%2BD99ly5UVxIjDYHZ6vmdVkT21q7ED9ztJ%2FcF7udaZPLbZW50dbKMqimO0ryQV1Vnp&X-Amz-Signature=2aebd04bbce38d357aa828d52e58184b4f19163c9a4681fb0367f570e4c276ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
