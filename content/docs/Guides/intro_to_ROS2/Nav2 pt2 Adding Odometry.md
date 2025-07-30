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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=c450909471b6b80dfab8bab162d603f91a9f066084d6249a51ba53ecf47d0853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=1f167f370a82a2b88f9108ec3742fd4ac9f78e664f302ff46364814563c826aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=37986f2a0c3a4e06f773f7bb45f13878777a726cdb30cc063ca23a9c9ff65192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=7808b4389f8310f64ff4069504b01d0348e651ba282a4974ffa67ac1f02eb1e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=5702922807a8611f63b21b6b1d8edc15d7ab3af550a1e23df72656fbbc71a6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=70362448d3539803d48b154b6445a3f7b7d0582eee9dcc91269749a3b02ba06d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=0931ce8872938d62cc0f9899956d0298c95a1cc9005919a597a39f01e8e8cfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=a015fb5780c8cc6a049159c3a45edaeb2a15491bcef749e935182da9547bc12e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=7067005fb5eb76cf82cdbf031013b0a476e8762bf66e12548f4a6d5ca1eca95c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VNPL4SW%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkpr%2BWcK%2FiafRaEQsVgRtSGFqSFJtn4xOqa60nHiDnmAiAKvdBvScLVp9t7g88CWeZEtiAOi4OkpQ2PnrKSRK1C5CqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0t5TxAFOQw91QEAuKtwDrkYIbBkQYoFvz2rzf5KwONqcvR%2BMQp0WBBom%2Boaf%2FSjZ9OWS11%2BUTonkVMnXu996DL%2BUdN0VZYnA%2BLyybPRbBSxS3qzK2jxE%2FiQbClR4ApaFlrIR%2FrLXc%2BjI6%2BHq3%2FdQUmSBWZZMeuS61dt3z6FnrLsxb81UG6tHWOn3u5iC4wqR8WObJikXaR4JxApXbHbHpkcdJwMleAKKLJ5laQ5AjNuvgQh%2FgIzx4kECg0jbw9vha%2BZG%2BXC0KyagXAqeQU%2FwT9tlcUPLe1%2Bj1L8DkjV%2FCVVQmBNF6Bkcqjm6p7gJKjyfbOdcwOaXa5VdkgyUM6Ez40wXTFvvM%2BsoZo5N%2FkGEHyqdbj9RFytZhsJ7YjNkqpuk80VG0iEV7o0Eo7A4RzV7oI5ROokjbT1le5X2ccauUtsUYgs2zH2Bu9r50BGd%2BDH4Wdh20Ur9x0Bm4ck1vWw1%2BKAC%2FaFnx5EHVeybQOyjZUSawJWc5gULohjNbtN7DT6PA48r7qYxWWfGZoXuRCcK19huKFbfGbRYhzVYSqFW%2F9QeqHlf4wJMTza2w3IjeEK5qK1hbVvifq593taSVfBniygRAMoLVsNkDfHqMGaeVidIMjMGsEPnin6%2Bm2k%2BDEknEEwO30ECJyIYwcwwssCnxAY6pgHljFQ7TsjGvQ%2FLHqGHgQDXgRo%2FiSwS8GjBkjJuW8dv5bfj4msgd%2BciDvmNhvd2fhlugfu9%2FCqcRl75cnDcE6rXVFYdjC2L8zzPYdgqtKk3bTdGm%2B6QNdP1m6gEjzQ%2FIYJyCrx8oqTrmxpamBw%2BNtOjKRY%2BT%2FQfMu6nRKHM6yKjJ8yI%2Fdt98HQj%2FA7VVJ%2BoN3519XYWON4vJeeFGDB4DzxpWBiHxYul&X-Amz-Signature=018fa793f5162cd85747760409e8bb64fd981588342eaa08c288ef40d7221466&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKY4YYT3%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FXOQ4C%2Bq4fbwiRoWUr%2Bp6c7uMseJlKkuQ0%2FTXsjPcHAiEA8zTiD0BmskpkGVXvtjxg8ZbLzcmu24nPUHJQvRauVWAqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMN5qAmt30A9LDmKnCrcAwYO7z5u4ymTRpCbsOsf0%2FbRIR1lpiGKAEu7Mb3vbhI8QpZHIrlx2bDL3t5WqL6JZYtchTLu2jPwYEfqL8fGx1PZw0LUpE7OJLHY7JjS4YEJ562Grff9kLRreRzuCjxr%2BbADlG5h0DJ0Iusj36ohSKqT3M6elUuV%2BAwwZYZ1K%2FfRspgqp79fyplcaIiEycQ%2FaJgt2%2FFH%2FFj6VVaRTAiRP7JWJ5MpwYZdJosAh9jtfKSBoAr4ApeXnJfurXYsCWkGS3uPJZk7A1HhP%2BsJAUmJ7FbJGGtt4xdtxcvWdKSN6Dx06eMu163OaEGlP%2FDXaJXBGsj6fnT%2Fnn5HiQYsqfDfuLW5BVnSsnqU3%2B3gkIhY86uKWtBqZ0lm3L6yH4GuNjZ3z2FmJMbo2QaLDjHU4lA9IZYiNYWVDGNp%2FGk6CmQUcbLXyIY%2BzOc2bn0coTxFi5KPqh0CaQYBsZxkSVnzfw1e9iBZzzHNtofjbba%2Fs%2BuxcBdLCLZCk05vjfqZC%2FyWjO0xj6tR7H5VGi5wsuNQ0bhtO680e3QfqefCkgFKA7nC1lREy8kG5%2B1DDhXRyu6qrM5TRRvwTMwGzwF5xdDa9F45eybkvqsSHdi5HOQBIAiTl6raNfZc2r5dNtpPV9LZMOTAp8QGOqUBpzo%2B5dqFzN75PAQdMRBkJHsdGkjmTsfQazfGjo%2FaGv5t1ICMbYGe5uwYqssKJ%2F85rOU149e6K4ympmTA44%2FMgcZNp5yW1w14f8yqzFznXSNw35t%2Bs0xzldz5PGuy5k2E6SKKzjYrOK7KgTA9%2BHrFOAyEcIpwQJKgTMHrcf%2F6asCr9wUVXyPF3Jh6Qk2kOFqJnY3TrMzRcYML715eM371%2FFalHcjx&X-Amz-Signature=e2cff25779a218ad6956e36757b88eef0e2aa0e806adb4554d553e8cce911d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=73007947bd6f790911f89759f9df903d9477073635042aae5605dc2692444e34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=50e3631a8f60ea7751827fb00845d5e38fc206bdf01541fcd1d16711147160cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=c370b94dc2eed8f5a89dca394d682078906dfddbd16d893a43990190b62109e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=741b465a188d9d4950cc075f6c5898243a9e77ab23bb812d32c03b852fcef124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=4f431eadb497b5b0c168f5f2b2b05eb2217b043e913fd11f2f0453a7fdf5e1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=b6288a2ab7c9e1ecf6c2a63b07eccfb5693e222ef33386cf515552b249f9dfc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=d6e77af7ac8895853882691120d3ace022c9ab265795d7b693a809677b6340f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6NCHDQZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T101147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuwX0%2FiEYwuhr62Lsf%2Ft5BDIQ%2Bcytwt5r6DibKL2qoAIgILfLNFWseuoDipBrDusJPLNNqVNL2TYB80O2kw%2BdP8wqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAYtWJzEBJhpsUGFCrcA5iXrR6mtCKQoA%2BXN2xJ8OfmuvsXyAhpFhMgrJorHwoD1CacNuGckQukkR0EoTtEJ16kDHq4dD7GapweaWw7WUk9lrUYmm6YTpCQM2NIpYenBJ9gs9JKw1PAy2TwZrbehHkaOmbuulvjDfLLuSxLfCpAg6IQPunYzBW6M271cMt6vbbOBiRbKFVnzEiKvwg5s4NM1%2FpyNRBtsBhY5TmpaIIzXXhcl3I3fPqyRCnuqJn96FWvSYfXuKjdToWFuZ2cFrlS1wtej6wvdLAnqd6n7vrhEpqkIKUO13KXwEI5def9jNT2pFK%2F9lr5fntwoAZ9RqH%2FDlXHpxGDASkRHbZRvVkwaObM6NOer1%2FEU6IEUU%2BtYckYGVFUXqi1H31lZpqoCL7GjIUW7S8zFYu3fVHaoDXTDGBJ%2F4GveKO7IP9GwuxNp7ENVRF3j8bjp1EkSQWD6%2Fo9DPTBkgtprCziPtgFbzyYUYk1VVAjXSqSnZOKpX%2BbsEdU2RulTk96j%2B5Nz25SvarPD%2FfzFYpvhxO5Ad1epvnOzRVNvJuAlP%2BGMDK1VwR%2B0QPFa4ZNnCkLyrND5elNlfs7WWbgIO2NXKsRhrpQZXZJguvnI8i%2BFqOgsPIG224lehVfidMcv8RZqXb3MJbBp8QGOqUB50IPIrZUuUyFX%2BDLP1yKr6rInTSo%2FifFtpL4%2BYIhFtQ2wxKHAwHDQwF5PxZJ97Xpiv5wzd0zdqObti%2Bcq8dUb2z1fPWOnFPJWOhk6V56bwbN37EOTytvkiZzxM4IVQEECVtTgcwLzHwJdbAie0ziv%2B6QLFM2XsPGJmBU%2FCvUenLcM9RIwIQuKaWfPAcg3WoHepkjBenjUcZnP7IIU1GD5uOchO%2FC&X-Amz-Signature=235c09766111978a162cb17cbb7c32c448fbf60b57bc2814039b01c4408860a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
