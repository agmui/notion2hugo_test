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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=1a0e5ae0cd6baa1bc60d9a7b76cc0fcb6b7d27389579e17d9c53305d70396973&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=84b929b0bc1da1d1f23641ed29027ef8daeab46f689da7000257b101d6ae1e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=5fff91463533176e0ab61caf24171b1a9222d624e2c85f6ae75645709e0f882a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=954522a8422342d33291ff323266f614df975dfe8c1a1d698f697361d561cb35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=16a81a07d36ad78b2885099df6ec0692370e7d03b9b7348d8bc73b1d3e5f401b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=aca2d5ad1cc35f4b0f9c2c6a027a39f9d5b91179129f8c56cf9483dfd0ef0ca4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=68c0f78d2e5de9ec4a3af000dd38c7d7501d86923e38c0cabac3185a93b6b953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=8c3e516293602ee63f7aece9b5a41cce104302b1c125633f8566fb659075100f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=4088a337fe9ba14fc9d745b78a34827d8391026efba64840384a1ff4780d9e6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNHPFYFT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnysyEqJxJ7bRvjNE99QZSsMZAMxL387TkuLXBjSf0pwIgaJf8pKNO6tsZD10MB4ZGI2akJUg0RfHb7aRlbu%2FqL%2BsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRfO4unlOQpkBNVOyrcAzymE%2FLSwENdNRu0HYDjbEr46KoCE0VMxbNoXjfq0iIwXk9UzfaddwR3Qo66KOlp%2FMpRCAKrDZ0pI%2F1Fu7wclSql2FK0idNLIwMhCuS%2BQHds%2Bn5Z1YzAE9MK6rfDIupHsEcllp0OshMzdu0gpN2yWcPqJbmmxCNe0ktoWXD96vmZrJUtu1oa%2BoxioyHqzfWmevUgaWKjJr5IYA4duCLCBmNiEgSX%2FvouhuMPtRLhK%2Bg569YuD6IJk0Cln6ZYFtI0FIKeQix6TrkBdiLA0cJnuDLFbOIo0YOjmJEKoCul9ywuZ8K6S%2B48sPeAxzrJbRmf%2BTRBH4jmg0rdtCMpLTMKfIOOhc1p4B2Er0aHBV9L%2F6bMwMoK95sX2A3zP4tdX8h24AslYjBJKeKjB2QpWz8lcLCKf1GX4AMjNEmWXfFGEeZCk4rbbiKPp9PIx8BQoWX%2F2QMHib7lKwAz%2FuiDH%2BRSffKaKEbze92WcCF3y3DQnujv0caNEO21jXeo%2BXCe4RRnyLd7qU45B2fE1IUbeaHr3cyZHLvDtxqUZHAXU%2F5LnqlA57XaTTTYAvEWZdB0S4a1p0R6cmHRYZ%2FcmszQPf9g3SwuXoJV0ogoecllYSbXPSh%2Bl%2FqRtmMN0KMgp3YsMN3R2MkGOqUBdSJ9atPyHdFF05i%2B0Mebejy5zWUGiQPjLs1%2B5T%2BesjAwEM398ld5bT8yuZFDDAZ9SzdmkEyltUMN4mCzrLQxLqGwZLeCso1tk7LP1NtsQ4ulUtlCTM5IzqM4OElPwJbpwWC3fuDBTMlI3pFO1dgStgwUdbQ077rV8N%2B2%2Ffz9xwPf8C1gvNXy%2FvDZ0SkqGfep3E9BpadaJqzKyGWsrxIW036dPMVN&X-Amz-Signature=0c64af3299add1fdeac9f975875fcafd587b8e54b949b3dc5cbe845ba2fac67e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z64BIEC3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDngsN3FNUSxanqJ3U4KeFXjTourjh%2BK4xBEAc%2F%2FaJ5JgIgIig1S87aebl4sIke5zVe4RMwf%2BVqE2BeAdbv87io4KsqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWDX9Kh2TtJtDxrCyrcA6UVLfEENVosEOdcubnLdXzxl%2F2k95clQTDVaXWKAU5XXh3IIUzoAlmawfa9yYZguTeV%2FseBdI0cWtdlc%2B%2BPwQG7n8PpAf%2B2%2Bl1t8tt5wQ5Gg0t0HKGFGO14qr9izXRKzS8To0Oo%2FZQZbYwe41qhwGA9ADrgLDx%2FmQ3P8plH68Al0A1ySOnnhyO5FvKUUw8lfhOw3cV76owbe8qFyghQPPyfS9U%2B%2BMoPqOXatKv%2FiDuOD2HxPIA2Rfgjw0NeRXXSdahR96UXAyL3Ww6IwjG2PeyGwBht3IgZw9L3kOpjFssospOK6Q9dfigHPCPjvKUjuGq38E%2B7uOgvGT0t0qS0o7YzhaJl%2FgW1QqaQ1bQ77VmygpDXWyRuyT%2BbQs1QjbWlrt6dqX32lTE9BzsK7NPYEaC8URvu4aqgXP4dQ94BoQ2%2BTbl9%2FrE%2BcObS0tvDxBz%2BwXbQOpTr9k6MILtnuSt1VRR3MPVOKgGuKkPxWZ6GAT%2BQMgueEQ8zVAOzqfSHyiWPVbjIyPF%2FguLs%2FkIZ%2BeC3oaQFx47A3GE1qz9cO%2B3ClY40ps5Vl6TJ7wgIfhmg0%2BLU9hhjyGw%2Fs3Jbj6zKyDiZNxSm4s87o7OP%2BwQQ4oQqp44GPKZL2URTVe71JobnMODT2MkGOqUBhK2EovB1w9KfXv8CH8C7rA3zpFzu1bihDTUxT65Y3qt5dHro334hQh%2FT4AyjjabAPJAatsqhWvABy3poTnKRybO7REysYquz7aOkjmRALDNx3Xcm2NbKhC4ZPHl39xLMfwgtcYvqmVLMpSZUN%2FbvlTlbXHtrFU7lsu4jfwCB3NI%2FTiN2KLdOOVBuKnBxQEkjef8VujOuD3Ee%2FlfLEMpLSnv%2BhHnn&X-Amz-Signature=0db5196a2142a07564a6dd7cda0250a17621b3f9bd71e40e1b3c8bc6274ed6c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=ee7267dace5ca450513efebfee1106a437c7e622e7715bf8a3a91a6e292a9070&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=5d6f8fe1fc03b9c2aac9b8815cd54c53beabae741e738f080b747811fef02ca7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=6463b330f2f05afa57c9a4e79e6bd4e9e78695dee68d7415cf2e44ec91e3e898&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=5f220d671f755588999903f695ad5cc627f06d14f082d81552e937cd66472fa7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=0ffa016bb5a3ebc2ec93bd9c98823ebfd37432279fc10ee8078f50e230dae5a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=24f05f74f08f91300a641f7701b9aef617b9306aeb304e684c13f113b7a98762&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=8720a4f0647fc5b4c475848d87cf5933d16f53c7551e07a0d1569350aa6e0776&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=fae2cbcc9e66b336d0bc71e10e86a158cd72e6fc03ed68b6c0c7e98310f2181e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644N4T3DC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T014249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE6UEyjOkMtjSb3wJoDt3fz4LPzxl6ova2HWoN2uyixBAiBK%2FurE7UWT6f%2FcbXsmqVKHLe0yasIwlNxrdILbc0T88SqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO%2FiARCq4fpC%2F1vhjKtwDU9YX4EYsnTKfDE7zZgc8r9136jt5dj4GXLq5LG4tePVTKEB57qD97kvf%2B3sInY0Ds3w51PTwgJ37KlPmsj%2B9nK7msnAA0102TxwuetZm3b14z%2BIKZL%2FZxvgWpmm5DRlbANcxJYQHYVw9TPWZOFF3YNsAoIZ8RpRYKPwQEiYjbm%2BUyPvMiuArp%2FEJnIa42rX%2FoWVsaX5VGwrsvCadmlJ5qJg%2FaTGDt6MXxoUlGRisOFzvvUhU%2Fq8M%2FduWUGiK8pY4RSuZS13j%2FgSmYIljD06T8yMFUPqBwUrWHvPdV9RH68NLV5bcPExKZGMkyINC4%2F5G4B38ndGDhlqu6URhR09M5zBHvaJ8fDqzDUZiTYGLUIjGQV6KIGyePoLDfREcyFuRjrlNvOOmPvT47sR5qfsAQ96go0fsNZsZwzvWrCahQOfxPj8G4D7eQx2EA6WGcljtByofjHD6zvNEeGiHPgK6Q3ZEeWZ6Ehp7G2P9gypZ6DE4ed9qm8jaJLeitUkn27YL%2F8nbyGievtXa1cuqncYRor92MOxzxOMJ8S3wCSlvC9i2e1DDFUx3BzcE4wYFZfesaR%2B4sUUdQEeXnQ%2B%2Fm3TXhxjw9bI69ToJz4xUT%2B6SwwnatJV4T5ZzCEv0Dbsw3dHYyQY6pgF8Q4qruaRSgomj%2Brqoa%2FRI%2FzK%2BK%2F3Q2UnZIIWDiu1EVNzd%2BHrwV3CMx6yRbzMxkv9YM2zIfBHnn4q6ehPr9KobJAcX9%2FkL7WFH233n65z8k0PuFZ8c3RG3fJlE8pBRl4zZjLwbTaSmNOh7rTvrNqsybdrVzmIvBb0yN6Qp%2BO1SYkyuZTTX9Tg7Z1NnfedjzJZBC6fUSgxUs6WIUzBYylH6pL%2FAOuhi&X-Amz-Signature=80ab5945c039c325d63c6f0f61ef0a08ae1faeca9f9935cb3646b7263b59de94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

        # update position
        self.x += delta_x
        self.y += delta_y
        self.th += delta_th

        # create and publish transform message
        odom_trans = TransformStamped()
        odom_trans.header.stamp = current_time
        odom_trans.header.frame_id = "odom"
        odom_trans.child_frame_id = "base_link"
        odom_trans.transform.translation.x = self.x
        odom_trans.transform.translation.y = self.y
        odom_trans.transform.translation.z = 0.0
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
