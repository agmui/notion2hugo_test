---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-03T21:37:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-03T21:37:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=7a032267c4a83a3cbbdcaa3136eb0060a238831214b99f63fa945177058865b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=c587a2d114267516d1a63a061bb38c7c337d7d9f6f4fb1b2a4483da77068ff99&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=091265e8b4cb2ba99d3d9e38ab13d5d0c64e6dd7a743759a73d058f2c7e80959&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=34f55f06e7001c063da5a01a573513773b1b9dc6424d6b4e7d4e155455183f9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=325c11b5d593b5e6440609f298cefd5587c0b520e8ce2fabe1479b0e7ba229f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      <summary>Final code:</summary>
      
  </details>

At this point plug in your robot to you laptop/computer

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=d0aa92767eeeed1abbd2209df4d93bdb57bc7a026cc2824cd668ee36a0c2a175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=f3911aeb72317148f72ab8933db04abcbd86e3913893adaeb76a36fb5f2904ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=4bcf8751f6e74f7b0fc2e4aec264cb603058e02c5e01287a824cdaf0a42cb42e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=e8fd5135ca8c9e62e9b742e9592b70bf19f15cd9d8d3e08b4af0dae0cd6c7d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C6TSCQN%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD7hYkhoNe5FsJVxnE74aOYW%2Flb7hJd3GTQME2etw21ZgIhAPiaij68mlB%2FxTYhux6aH%2B3nH4dLXrXh2YKS0YUV3k%2FdKogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOT0cYRXEn6vjFJwwq3AM7nhwlL9%2B16TDEiXAdrX7iOhP%2FuUDK%2B%2FrN7treI96U%2Bn3OANgJ3v7lbS5XgCHLVSKYcRiP9thKANsGW%2FODFXugUhePf8lYgHCOXCVOTFP3w7PAEQbwbFVMoIomVv7CypyueC9RVsQPS%2F1FKOWCuwcx2GhlnBjsDhkB8kZbpc%2B%2BgdNqsUnszjrtllRENF9DDhk34YzACwmr0XpPc5SWmyDXY3b%2BBv32vyI3OixQdAK3yyEIaBXtQCElIy0BmWgBlhmfW5TXkmBZ0dAIIOecQSfM7ok7Quhs6Irw4dgNEq8i8X3EZZumJGJxnevzbaCEqnU65avMprcLCOscAhlQKrl4lQCrxOh8VPrcVvL%2BuEBWZfIEJ8Ks7gcN5bqiQBrXbpUaOO12omBpTn4lFs1nKlRGjnEdtjyCLjE5kqBY8XrI5Iwe3cdmqEcy7mFHwNkpeUKca6%2Fd%2B1c206TJMM0byqiFpdRiTJpHJhXOOR%2FUeb5YUh0q2O7yr80Vo3qdStIs8RiiqnzVJ8YroKFwmsIZDgBEYuciRanl30FR51CMP4f3vUMtKFpZz1giTcOgGjoLhLtM4%2FYf%2F9jlwlvpmi9W9IEZVE6G7UffNVDx11OOcJmm2IpqMLJmD43A%2BKZn4zCO0ubEBjqkAY5eY8faRrUR3Kjb8bsrDHm1e7HRcCUloORSMrFcZC%2BmL5I9yjx2MjX0MbE2gALqCwNKV1nPd1lZ%2Bs7s2Hv7PAN6555ACU98wAIsHubVcXAcK%2FUb3OC3S0Wyu8U8eCrqwIUFjU7LWsT6Y8%2Fw7qk0Ytqb4VZUsJWfzkrhWnpYzxTGq2B9I9%2BVCDDI2SBw0vL0Gw4UKLFKARHyfVPKoeretyucllOg&X-Amz-Signature=b518f9ad8cd7af85f00888f9cef962f148b8da48d95a9e47f23a0964d86fb3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQYTZNZX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDONnfR1YAihW3jmcRx6VBAL7XTyaZtiGB2tSPUsJhQAAiBra69tuwIdDarJwwRKljHi5319Cqqq2SpWYbYHR6rf6yqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKDfoqTV2crIKvJtsKtwDOFqW3U%2FnjoejlnKUKm13CMRe1zD9Dh1lHwz89HmuMxq%2FnL1wg7dnEMsr7mU3Vq1hmuXr14xSjLb7TbASQfhvaaSn%2FMwEODUIkL0UjdSTU4fGEEQi2HZswRlk%2B8R3492jYGQgekaBZT%2FkK8X2%2FuNO30NrQmahgv20KTyRt7AYl7XB%2FNtOJ51xO7MyZu%2B1ubdlgCm11rKv71vTtXvCA31%2BMLWU8pvBEZ9lL6cxlyKRHYSfONmN57fT%2FTZ6ai8ZSAPDHQOa6Gy0MTXIk2VDZt%2FR0QsewzsaBRVeN8MWa6mp28%2FzxbPjNH%2BlGL3g66OEdrVxf04O2orE44Kl89T%2FyYYKDq20rqMMSqnOHYA%2B4IOlrnFMWXyBdNZwIgjcp6VbVdYfYeTCHdF%2B6u2Xg6vTphdJasRQslIv4wIDHCxTPfoJBlql6psmWp%2F5dkbXgXRAkAQg%2Bd2Opx08Z08JS%2BgprVOqqiLu9oyRObTkMskdT72QBzJk8bbc%2FOGsLbJjoD9liMrASw4tJLSnTE0lJXbH73OKTxluuzej%2BFvwW6CQ8p9KgBx43kF9hpHeid8%2BrPTm0rzI2ePqgnv62i4o%2B1v57r%2FYLmhgxdUSOmyvk%2B%2BJ%2FQgdq8ildo%2F8OjIGtbaJ1yYw8NLmxAY6pgGZEA3m38oLbASrySnrzK8%2FUK9xmAmqoZBvYcy81bclR0pNzUUObX%2BrfxtAV%2FTvLJh662WOBdzAvVpEDyJ01OiOuXflpchPe4pe69CCY5SBfa0RKddflnXPwK%2FzmRES4xcU9n5bAei46k%2BAusLp7%2BSYZ4wH7oZaSGvNLpBjUraLAtl%2FJoNiyB3EtW%2FX53l9NhRD9tdMXvKjj6%2BYWJMguEBIyi3xBRT%2F&X-Amz-Signature=0bfa67e20842d61642dfc661b78ab9bb590cf9e0f36cabf43be18a5ae1b776ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=ffbb7adf32086d8bdf04134b964d21812dcf5a91937356586abff62f3021af48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=d98c1170fe555ea243ad5fa9ba0f127003509fe044cdbda5e414563dee100de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=be0bd1af5fb57f38c1702ab4a01dba549a3459530c49883d0201fca53a159345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=64281b70c0fa2fe576d918dc3d683f447226cda3cec735b100ce4762ba7b0a54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=a1857ad4565434863fb536b089d2f59e166546250ef85ea70e4e208d27555b49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=c4bfddfe30cecb6bb6ef10255647d93c21c465f2cb2977dc8d461d9378da26e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=b36fd1089b698016bebf69b97b180a39a321ea1a2fae69fe0fccb4cfd4bdda60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=de14441339feff020f5958713e7ed2b02eb46f5c328789770798553e9cd2b2e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDW3IN7D%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T091537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdkMJqHsN4s9fwN7id79JUiC98csCBsQ5MNnISCN0OnAiByxs4aS20QXxqg2prpGX%2BuWK%2BOA8RiryKH%2FanRp2IgrSqIBAjq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2dZrYL%2B5ywqNqpfLKtwD9tA94%2Bj8sX2mm9daqgalsBvZjhbdpsEIbX0s4ewufonUQ0vJIrAzCdenA3tTM998yNR63c6MZB9WqmJFaA0d2qxg25Aq2pStaKbV%2BqCoJANjCiBdWImWDZznyvIFYeCc0zkKy7kVw41PlENfb145etvX271y1QOdALvvGTSINibgI8kEWix6%2Fsdh1mAIRrMUAsEEFF5iZMtT%2FdXx6g8o3b4Eh7u7PT922UjXrJcOMVKYh2K6JDHNhT6Z22htmpiKkQkotLkm4iZeH6oBAGuWUMEiagBsQqd7oScPhjESkoQq393OQBq3bPO5Yb8TGcxeCkYrlJgGLtFEk%2BfQHXGyvlzf%2FR5C%2FAH6Y3yjXq6DOSmzNFHFiycwk8r%2BNJewxyKakijLzQg9RvE%2FcEWK2hVsELjV1DGrYSwhpO2krFegfYNZiCJbYQIPu9GlhwVnse9KSTC3YZT7gA264piuHH3BRRJAiBH9yAYoZUeZrb48Q2xxz7nJqfIqXqGV7vzE4geMhqwl%2BYSQWpWpOs4RtU5B7urF9nAthqLhMcI43PeDJGjnd%2BIoZKuwis3TKRG7xA3jyA5kVsMKH%2F3sHYBK3h7739nlosapJ9HXO0nihZLYeIGD6iI7rqs%2FhKPlWrIw9dHmxAY6pgFrly3NBncapLN7JQh99YCJ0H7u1omz%2FpAWHM%2FL6aGX%2BMdjyQRajpuYjwlNpCnbXkt%2BD0VFpFWz%2FWYtF8fxwJybq2tWippY0tbofXDs2G%2F7zJIzx5AXmxDAHgF%2FpSD3GzwYaSgQ8vaFwnTHx%2FGf7PsBH06o5dNDdHVnr67E41uexeyg56bl4Rvr1E1OJWX3iLDOxwvF9g%2F7koo%2BPzT2wjhebf3dW4f%2B&X-Amz-Signature=ab84ff5682c0d2509bbbefe1f645d0011e05db6a59c1297c10531aa31054549c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
