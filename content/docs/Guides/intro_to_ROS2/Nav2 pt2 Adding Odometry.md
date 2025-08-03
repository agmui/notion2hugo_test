---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=2f4e616c77d36fee5fa2dbbeb2b895cd1d1140c024c3538f8787de62d05dfa62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=13404e49288e14a3396df49900424f137091214f4a45dac1c47357d4d0a0b723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=06cf06b103511430bf426ca1b83457522731bba57f0e4739cf351dc96a69f891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=3c9de05516ed1634a62106c99293a3778884d9839a9ab6a43aab00e632239a50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=a927d5f2c3cde2243b7cc249cb1674d8df1f9c247888c45b014196ceeccece74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=720bd3d2cb8842bb0e4343cdbeedd938eba4976ccdcd1f1ef360c150626d34a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=338c53ec01b2645a2c8dac7b59e0881ecc74092b19c613c3b13bde4390a9eabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=acc646e443b6b1cbf82e392d1a9cbc0fc2d206998c1968db9a306fa3afa11d23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=e959369fd4b415cd6ca6f4c4b4b67b3099f5fc173612a6657e0ee119d3a0b0fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=e467c72ce969e9bea0818be98401bbc120782ea2b029bab288520b91a7adbfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5ORLHOB%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCnx7XvKcFvhA%2B9Z1HM2PSwXwfCw83igknK%2BXKrI5ezggIgbK7ZU2bN0zMlw3xFsydIDhmR%2Bv779DIUohpvz5PbHFMq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDMkW87Vc7tK5Z0wwVyrcA9WPLurRgiWA7qEQvz5cx6WuomO5c3FwppziLKsP%2Ba50mExYSTM3zLdChXHEdJ%2Fr28%2BAiDtKUK%2BK%2B%2Buo1zSRop%2B7CF3sNjVyjTbwBdxGkZKFaGfdvDeEMCijGYiaOEG6paJjdVu9bUOH3l3CYoj074xTIhiYDMwazBzoTHlcTQSndqqTZYhKHJSMgu8ShEKgP2vXelTFzB9nPBmxRVJ3e5D%2F9gHsHcPasuwn11UXiuMYRBWdXwCcYbET4nn8zTvfII6U7S%2BQv4hn57BPmPINbKropXUb2hrC%2B8Qbrh2vbuPzKBgyBAx1tXDI3enkTlXk3%2FtT8CILYOuv8IMuSOyVIsL18iUC2Ftga2o3INl28vdeUB1LmxXcrmIxPffSrzQ377G0JAvZAj%2BgwuGv4W98TkB%2BhQJBBWX8Db8uyblQ0XtT93y85qcKqPl2CG56HIJX96TWxWxFGabWdt1zjWfAJC72nSG%2BaPPvMhufu74%2B%2FRCMu8XgaZJs2TOCSiIk321H4CUhpdqrEeM2aL8tHPccsb62T8FpAJkz59GtOuW%2F9NvJGfUcGaEMlGLpFYOgjKYjTcRedZz6Z4lZ4cka2JQh3Ulsnwl7PfGCIGSoYam9Aa1Hi%2Bk2orA6gChjPDmnML2hu8QGOqUBKSWgPFnQFgHLmiLSzsrciUWAVJvowcvM8czqEeLZYHr%2BNWZOhJe93ST%2B0ml18MmekC7ESAx2eZYcHq01G%2BK9Dm%2ByHg53x3pXiGcAkzpKkIntgSJUrjsRA2sMEVGsfj4zzzPZGfYBxp5BhhXbmHozhcgB%2F1UnpIqRhM9hJ3y4zBE1uoiZD8nGjc3n%2BOLeV%2BiJXsi6fxiIIY2h%2BxeD9ttOPgkppGVf&X-Amz-Signature=8148b9a1e12bbeed23c6e49b83d920be80332fbb8044d4f182ffadee05984a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYHQE5KD%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsIT5e08OJsI8kVnoju%2F6AnOPK65nH8kpTqJmasLvZhAIgcwW7oLCOUk11hfiY5niU0Wl6JWVWR2Qsq3qPtU1yQs4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDI2ONZy2kydjdIt8OyrcA9ehWpU1hCjmGhuajvy33I63HZaHLNa0SWAEytkbrE9nazJA2DyLH18oejisoVg5Nm8gnG%2BFljOwulX1LM6y73%2BCEH90qUTX%2BgS7Xk2NhIZh%2FwjapLgCPZ4ALKnXwyscNVoZ2iw6XAJRKak474qDrCgG3cgxua%2FTNkc3eCUOKFLkWo%2FI9ZDfYi4OvhMXrr33CGnCa30ufjzrYRtF6D4nMR%2BwtF5oc6rOA4k06eY5JAtfHjxnWlwec44QXJO%2BdIkyoupNh4UffcKofBs8LuH9c9hR78bNIdhkjh%2FP%2Bcvb3QrsRVLhbnCrPqZJzw8IMfmx%2FwcxnuRMVetoPOAxZXAcbA%2BXHTCNbAC%2B7nlsmzyZZSXVQX73VG9kIQzsdBQtocAUsWrE2%2Fk2OLwdJs%2FLRP1f4zBMx7%2BemHfLRo1TotFvHtslVHBvToK3DeBUiNUZbH02K%2FipQ5mchyw0ch3w3lXpmVubUgnWFGOUWZDE9yb60dh4FCkY3eguF%2Br3s7eSKjyt1Ih3JT6Waa1IlppLcAzB0q5IOTIAXvBcUvgj0eW71RD2kLFg2LlYZDQ5SbCR3Ci5%2F%2BbaFtDEsTlmqTYBqCLvkZehklB5kAabOm%2F8ApOluJyyKBZrlI9vdi1n0a%2FZMJKgu8QGOqUBk%2B%2FMBdzQeSFWCnKX%2FesSx2dCvhDBJ532DB27%2BDrh6rYxNDyrQaH64GPI8JtrCgCZJcE58Fj91t5%2FjEwGJkxAtxoiLNHbJvpaDpDskvPyXJjXo3Yyf0VomJYpp1UZ10FAUbvJZBL8MWRNseGcjuyYqUad3%2BkkoPfYNCp%2B3BrJWgsBeHJ5Dpeq9l0%2BddzuMXQjK0TaQ8bgZ7K%2BG3MucIfDXO%2FPWhBh&X-Amz-Signature=dd812ebaf3e66fdfb79f35cc7e44aae4dcccfef1fdb338854fc5b2e15e2a4fd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=138a205345a46adc723045ab6d01c8053b345894d65ef00a0e93cc17c7bcc0b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=6f54edc6ef33444ae9e177fff3c9fc8b425ba8c7067d6636e2a30679c5355a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=b0abc28a3bde1471e6e2746f6b521cd9ef986bc5f5751cfd90e2ed27ec16dfe9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=765e7d6219caad6046ad943f83f0a4bb425c0135031bddc85dddc0023ac7334f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=6dd58a98bed76ab90b80c7fb83ceb0646f997defa8684b9513f15fe6bf93621c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=bc329e56f51daf3825419785a8b0f3aedecaaba8abfb116e41aaa82085faa57e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=67959c8d63e6a91e75f763368280f29952d251d5b6a10002a9b325e4bbab53bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SK4T7O5O%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T051906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAfhP1JmaJGTnSXs8qHvKeYsrTjoyJncK6037g9%2BJ30%2FAiEA%2F72RAh%2FClDsrES%2Brq2Ql03HMr6aDyVhcOvxOOIwqrfQq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDL6T8DW%2FeQdEYxQZIircAwBgwKrNKCWCyr7rwZ583HXWpcQsstl06ZAM2acKVyrkdGZ9uLMQQK4V6yxXNYB619zUtWEpqeBidoattP0X5eJ1qZBUQKWC5CL7ZU0UCCrTdKb7qKDg0CvG4kPq1EUo6znACrOShdKeiZw1EDGeLCTd8rnHMntWXX8j%2BiciQLpUVgrwyjxveuEkpAxAx9iq9J78587k5ApZRD8R1Sx1D5d0SfiBnT9EZOdjwn54yAYHj9nEoixZlh5E%2BvpH4xZUUk9CUGH4QarJSziZa5AG3qbpVrubYx6fYMqUPd4sHG%2B9rEOyS4nJODSqd8mc9WU%2BZ2kDWQRd%2B5yR4fXDeJAM7SsKWsRFoMKfKIFc4xXbTJhzT5OszESmPCcsG8hbep27aVxrYv5Q%2FPUp6Nz%2BulJUirx76c5p80r0EBLdEvQM8c%2Behe4XfKciQk5sKU9a2vYKsuwAP01kBbpIQUV%2FNCZRpsEbJkpa3cPCHElYpZ5k4%2BPl1%2FC7ewHhoFVG315xgZWJf1S6Ali6jW3N5lLy06FLXzndEKi8%2BLox92%2BtAbWcPo0l0WcPvzXRH2XVPVNS7OHMG4%2B38ID3OoY4hxZqws%2F953g0%2FJP2x3srgNWiH1FywtpapQb9QPQWlfbzWpKgMIyku8QGOqUBNZ%2FnK4ECNIhapy5wM8ZOD%2B5D%2F8cGYmkO94DmRYlNHbjc6hdd%2F5vifMsDUyZN8V8o1XuEl%2BhRUeiI8eoKrLbnPZvZqCYEdjVYOSsxrAPfx9jBeCZuXCgPmYuMd8MKO%2B%2FEvj5AvsZtzNYRgUn3ysBqtVzLFUESCIw%2BuIQmsTQBGCouMxs3ReRQmwSxGajXty3LTuqZtxSExZQlkMk1eyLq1gnlhcEq&X-Amz-Signature=569ac53cf4e0ff89434d635a7fbb66b0ee7d61a728599af64cc7af3f59f487d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
