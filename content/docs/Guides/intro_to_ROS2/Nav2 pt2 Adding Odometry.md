---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:34:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=a2d1e27d2493b80f643c66aded75b4950b660ef97785012f14eb7e59de9af014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not </summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## creating custom node

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=28df75a491dcbe7696106e95b68cb881d27617d221965147fad7160d509c7cac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=742707ed0e3a27fcc19caf870ecd93ccb5c7c2f845952f6b50ce842669dfd744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=a7d6fcde3a144533bede6aa19da6c078437d07418ce12b77b72a82d7b7e4f801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python
import rclpy
from rclpy.node import Node

from std_msgs.msg import String


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'my_topic', 10) # publisher obj
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec
		
		# gets called every 0.5 seconds
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

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too

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
        self.timer = self.create_timer(0.5, self.timer_callback)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=9875de49143feafa2e9e44d9ae36d796081c8cd5527ed64267d48e15be2e45b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
        self.get_logger().info('Publishing position')       # print msg
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

## Testing our code

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=4691bc50462351767e99d38031b04de0bbe08d5f35c81fdc796b054b4d2caeda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=76c3693b9f3a8b101d7f627f91c1ffcb9634fd44c2e960041b5a89e219cfce03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=8c1d909510c61a98ddf9d035fa9420c61b063babcc2168ca8e6a279366abdea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## updating launch file

Lets add our new node to the launch file

```python
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

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=3499b9531fa6f378ccbf169fad1cbaa951a1bb4084b316511f58224368eba035&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDDUATJ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIAiV4Xqkd5h%2FCteTFFhzuIrlwwjb7WHO6rDH6xFqQfEVAiAxy%2BpPrByN2JjX1eN9K6bGBPLD4KnARx8qCavoOIsoNir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMw70wndFZRI4vF6bSKtwDMLekKBntfgckBgX2R%2BNbhJu5RTs8wv8VCQYFK9uvyUUdg1MBkjR1EeBQ4%2Fth4MIt9hB6MRrlffY99GIy37Bjpm9%2FwbTobgpSXCPnCtbOcN%2Fs2nRac3eZqojQo4qFYmDFVAsVSxoaIBUHaYqW6K0RDUvTcNoFuzuFQDoj2O42KDnBoRhUrUW6Q54eWgMN86UQ4t9aRgDTmKsqyUi8yaUbfk7yySgCGTyyzYobCtI763BAaLN67Nnyr61JMuFjxrsKuRS7rg2Mm2BWqqfc3WzST2PHyGhoAIm59KGdmyKExoRBIovORuqCeW%2BJ1pI1rT4qVEY4qPW6vb3JH1%2FEjCRqyWnCtXB2nue8%2BUf4mkdAPI2LmeA%2FpXCShSLiNfCoWtIlKydX%2FdEW8omOwSIQE4fi%2BKeE9gZTBOFis77Ecb1VTojHFVob3g0IeZwizGZz9ytUrpDeHjwohZ34%2FdZhZLyqZmOqgmxwLB%2BY3ioSv3wz2ZgmLPmtpWr6vU2EC4DQC4Pi4%2BJ9cKowlyenai9oBOjVGjvg51OMQdGSe58rMogqv9hQghov%2B2mV4xA9iuzodrxlCR%2FKMv%2BBhXd2sIPpzAitEvQbBeADCKo537KZTYd7Av%2BVXA8zqJaDmRJL7Zwwp7KJxAY6pgGzDk9JoZwlZp%2BU%2FKN3PF9qSteaumwlJnaK5NEGBtvztQ5uzyrpxDAwIedFAOof7gC0fsHnSVgBhg%2BwebKKTw1opA9X2lWsZkhJtFEik1ObQU9E9o%2BQc1YIpWsZcxs3Zy1JXjJro7xvhQ0%2Fa798HJLr6tMi9TrqzHu38bGIx1BGwtFhB8jUCVpFcLib67R7pqJ5nF8xIUHJE%2BRTfcS1BUsmDarNaVrF&X-Amz-Signature=ed7958739054b3a4a471ac3aef05db3fcb9b5d7b67ab6251f8cbb44d99c12847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
  </details>

But for those who just want the equations/functions I wrote a `calculate_position()` function

This function just takes in:

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

now in `timer_callback()` lets broadcast the `odom => base_link` tf frame

```python
    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()

				...

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.right_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th)
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans)

        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

## Running code

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

TODO: get screen cap

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=3cd8f58919893477b62b0ee4b1e89cbedf7d58b7a8ffc604fbd7e0bac5c1aa93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664573SZXM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIEwM5buRzYJR75%2Fr%2F4zA6JYkXgf4B0qtEbQ8usA9%2BAfSAiEAgMir95maxAPt2iHQcOm2Dm4t8Wod1ztPjkmW9VuZQ1gq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHJuLePeXp3BZ751XircA4D5Z9u4M9TiCr9wbWd6zWXrZnorRuJrTw%2FtJGwLumK7ccFozjNdopBY1OdCHAn2y0mZKAfi0BrGqR3T1Ecea5YGNxPV4lFblqo9XwQxRaonaF1Nrhho21WLN8WUCmY3UrZ%2FMuHZMmQWZhyYISXx1Ha2kbpbhgUuZyzi6T3b7SwKRFC1W9pwdN3tVqqBzTvbiVgCbxnS49EjcWFFV%2Fi6eUyOrCvfUPt6Lm81arRKFDLgqc%2Fsv2alwV%2Fp27pwb0ZIZSVJqSFyzfAAxH3fZRVEtQgkezdJM64MxS%2BU0PrLUxDl8ua8aia%2FPSQjqJzX%2FY%2FLuo%2BczSLbZ55ymOhY1kOKMOcFl12iRqza9YT%2B3Ogfix0vFLibvBSUuLOb3qRywtasu7xqBrsbXo9JVjXJ3AkC1eMrVZLnaQ4WqSPJqot4n72bW%2FpNsiNoL68IQhdtkiN7CvvPbi8gqBZgyiiXutcRrChpayhkSy4Et9HolRFV01Tasf6eDjAQ%2Fmdr0RtAFl2M3%2FNGoFXRrDhodQcZR8XT0wmeyQ2V%2BcYDYiKfBBJjYe56Is78o09Rj2QtuzsffrxpdEw68jOCYNc%2BMSh1qYFYZ65wlxfQO3zrD%2BqUhSmztcDDI3dGf3FFvVMPic5hMLGxicQGOqUBjC3ofWkOqt%2FCmWy7AxDleIDLg04l7i1197ibo4KHh37PCXZ4vjL95N5BRbqsrSBCeZQk0LltCwCqa%2Fc8ORv2Yt0x8wwUZDm3skR0bK0d6FdoMr%2BEDl6Ig49TU5d0v5iFCN3wmdSHSjZ1aByyrs2fNnb9erPkbPkL2OxxnU%2B5lmqzuM4rvwhpZNRzw7t%2BmHquiv8ZQMZwxjnhrtMNxIglVINbWJKX&X-Amz-Signature=757560c8ced7b49110d9cff9fdb20dfeafe85ea0b629846b560166ee033ae4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

        self.subscription = self.create_subscription(Twist, 'cmd_vel', self.listener_callback, 10)
    

    def timer_callback(self):
				...


    def listener_callback(self, msg: Twist):
        self.get_logger().info(f'{msg}')
```

Now we just need some way to send drive commands to `/cmd_vel`

This is where we use **`telop_twist_keyboard`**

{{% alert icon=”👾” context="info" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQUIL34%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAnp%2FZR18EY0nqphTOwoqSfCzg%2BIvsuRNY3RsS8XwHQ4AiEA5Ry0UWNrLchewnCtZS4u8UOPWIOBYuYAXiNd1oRmO%2Fkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFhCbBgPR1nJvfNkySrcAwPuzr9a7S6mkWeq4QOBm0gyNzAvDxZX%2BlsdsQWqxGZdhOq24%2FwBS4vqDQPZv7RINPZIFYEPdGP76Z95hj8yZqAcIIkMQFmj0L06Q4AIr4zd5wN%2BPfMkWcXuNAa2HOkIgp5INmFHlIlaplZWo1XXgMM1BYMhzDYsaVtAwlt4LSxiO5Ro0R8F33RUVLgZcdpMWZcfKgsByi7J0y5juDaKbErbn%2FPNIIkPPl9ljzuOSZX2AvACB%2BvADt1iWb%2Fd%2BUGz6kEHv%2BX9adY6fMnIQJvrVKEkMW00NjFCOVQIAGDpJ9AMOwqQyhm38%2FM43i86smFwHzKFK6mOHG3hv4i7zHWSCM3AqKBgKu%2B0e3%2Bvt1byzsZ7%2BAahWjMqlpvaYLRav7socTvYFec6cK2hJytb6dY6oWVCQ9x4yYikZKx5SSyM0uB2gxYVo6d8hds0JFjIkSXNDQtsSLJ2LTgVYgEyK0OyWINdLRgLhL0sEC3b8bjdt6vkMd%2FhdZFC%2Ba2uo6S07741NwdLurOPEUToifmdP00McLJUUr8ThvOLjxZfMmuLgJzPnmn85OS9IQlGnkZUDgIQ6xXQbV7nmJsZdEz2W6s8LOPzRaO5aQpLULmtTtSdh58HwfBLf52oOtE2YAMrMJCxicQGOqUBKnsEjGm%2FQLKC5NXiqDegXZbcLINDRHmwPJoK7ssXa9%2BTsPIUd4XxRRKoNVIc0%2F7q3M%2B6E1rmOcQo2LJbM9koGPDm05XUVVraoEP2DdFvjZd41MkEY5gYKxanPF5r4tDIoluyfsy1z68WnycHF%2FwBC691x4vlhmm4DrazDbejhu0z4PdUQtnovEKuNPdCqxxX6gTFavSw5EJpU0ck7bdKyIk5hS7Y&X-Amz-Signature=4f2e209b63df2b36a3b12bbd52897a1e1b2e43c92129fa51f9f51dee34f8f9d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQUIL34%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAnp%2FZR18EY0nqphTOwoqSfCzg%2BIvsuRNY3RsS8XwHQ4AiEA5Ry0UWNrLchewnCtZS4u8UOPWIOBYuYAXiNd1oRmO%2Fkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFhCbBgPR1nJvfNkySrcAwPuzr9a7S6mkWeq4QOBm0gyNzAvDxZX%2BlsdsQWqxGZdhOq24%2FwBS4vqDQPZv7RINPZIFYEPdGP76Z95hj8yZqAcIIkMQFmj0L06Q4AIr4zd5wN%2BPfMkWcXuNAa2HOkIgp5INmFHlIlaplZWo1XXgMM1BYMhzDYsaVtAwlt4LSxiO5Ro0R8F33RUVLgZcdpMWZcfKgsByi7J0y5juDaKbErbn%2FPNIIkPPl9ljzuOSZX2AvACB%2BvADt1iWb%2Fd%2BUGz6kEHv%2BX9adY6fMnIQJvrVKEkMW00NjFCOVQIAGDpJ9AMOwqQyhm38%2FM43i86smFwHzKFK6mOHG3hv4i7zHWSCM3AqKBgKu%2B0e3%2Bvt1byzsZ7%2BAahWjMqlpvaYLRav7socTvYFec6cK2hJytb6dY6oWVCQ9x4yYikZKx5SSyM0uB2gxYVo6d8hds0JFjIkSXNDQtsSLJ2LTgVYgEyK0OyWINdLRgLhL0sEC3b8bjdt6vkMd%2FhdZFC%2Ba2uo6S07741NwdLurOPEUToifmdP00McLJUUr8ThvOLjxZfMmuLgJzPnmn85OS9IQlGnkZUDgIQ6xXQbV7nmJsZdEz2W6s8LOPzRaO5aQpLULmtTtSdh58HwfBLf52oOtE2YAMrMJCxicQGOqUBKnsEjGm%2FQLKC5NXiqDegXZbcLINDRHmwPJoK7ssXa9%2BTsPIUd4XxRRKoNVIc0%2F7q3M%2B6E1rmOcQo2LJbM9koGPDm05XUVVraoEP2DdFvjZd41MkEY5gYKxanPF5r4tDIoluyfsy1z68WnycHF%2FwBC691x4vlhmm4DrazDbejhu0z4PdUQtnovEKuNPdCqxxX6gTFavSw5EJpU0ck7bdKyIk5hS7Y&X-Amz-Signature=a405e6895273cd7709d40e3ea5ddad07b1e3a156994a655ab40b7983dcedf937&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

```python
ros2 launch mbot_pkg display.launch.py
```

</div>
<div>

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

</div>
</div>

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQUIL34%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAnp%2FZR18EY0nqphTOwoqSfCzg%2BIvsuRNY3RsS8XwHQ4AiEA5Ry0UWNrLchewnCtZS4u8UOPWIOBYuYAXiNd1oRmO%2Fkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFhCbBgPR1nJvfNkySrcAwPuzr9a7S6mkWeq4QOBm0gyNzAvDxZX%2BlsdsQWqxGZdhOq24%2FwBS4vqDQPZv7RINPZIFYEPdGP76Z95hj8yZqAcIIkMQFmj0L06Q4AIr4zd5wN%2BPfMkWcXuNAa2HOkIgp5INmFHlIlaplZWo1XXgMM1BYMhzDYsaVtAwlt4LSxiO5Ro0R8F33RUVLgZcdpMWZcfKgsByi7J0y5juDaKbErbn%2FPNIIkPPl9ljzuOSZX2AvACB%2BvADt1iWb%2Fd%2BUGz6kEHv%2BX9adY6fMnIQJvrVKEkMW00NjFCOVQIAGDpJ9AMOwqQyhm38%2FM43i86smFwHzKFK6mOHG3hv4i7zHWSCM3AqKBgKu%2B0e3%2Bvt1byzsZ7%2BAahWjMqlpvaYLRav7socTvYFec6cK2hJytb6dY6oWVCQ9x4yYikZKx5SSyM0uB2gxYVo6d8hds0JFjIkSXNDQtsSLJ2LTgVYgEyK0OyWINdLRgLhL0sEC3b8bjdt6vkMd%2FhdZFC%2Ba2uo6S07741NwdLurOPEUToifmdP00McLJUUr8ThvOLjxZfMmuLgJzPnmn85OS9IQlGnkZUDgIQ6xXQbV7nmJsZdEz2W6s8LOPzRaO5aQpLULmtTtSdh58HwfBLf52oOtE2YAMrMJCxicQGOqUBKnsEjGm%2FQLKC5NXiqDegXZbcLINDRHmwPJoK7ssXa9%2BTsPIUd4XxRRKoNVIc0%2F7q3M%2B6E1rmOcQo2LJbM9koGPDm05XUVVraoEP2DdFvjZd41MkEY5gYKxanPF5r4tDIoluyfsy1z68WnycHF%2FwBC691x4vlhmm4DrazDbejhu0z4PdUQtnovEKuNPdCqxxX6gTFavSw5EJpU0ck7bdKyIk5hS7Y&X-Amz-Signature=18b972cc30f11e47ffaa7f4690b2fe3a699eea2072876e5f782df4614df78127&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQUIL34%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAnp%2FZR18EY0nqphTOwoqSfCzg%2BIvsuRNY3RsS8XwHQ4AiEA5Ry0UWNrLchewnCtZS4u8UOPWIOBYuYAXiNd1oRmO%2Fkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFhCbBgPR1nJvfNkySrcAwPuzr9a7S6mkWeq4QOBm0gyNzAvDxZX%2BlsdsQWqxGZdhOq24%2FwBS4vqDQPZv7RINPZIFYEPdGP76Z95hj8yZqAcIIkMQFmj0L06Q4AIr4zd5wN%2BPfMkWcXuNAa2HOkIgp5INmFHlIlaplZWo1XXgMM1BYMhzDYsaVtAwlt4LSxiO5Ro0R8F33RUVLgZcdpMWZcfKgsByi7J0y5juDaKbErbn%2FPNIIkPPl9ljzuOSZX2AvACB%2BvADt1iWb%2Fd%2BUGz6kEHv%2BX9adY6fMnIQJvrVKEkMW00NjFCOVQIAGDpJ9AMOwqQyhm38%2FM43i86smFwHzKFK6mOHG3hv4i7zHWSCM3AqKBgKu%2B0e3%2Bvt1byzsZ7%2BAahWjMqlpvaYLRav7socTvYFec6cK2hJytb6dY6oWVCQ9x4yYikZKx5SSyM0uB2gxYVo6d8hds0JFjIkSXNDQtsSLJ2LTgVYgEyK0OyWINdLRgLhL0sEC3b8bjdt6vkMd%2FhdZFC%2Ba2uo6S07741NwdLurOPEUToifmdP00McLJUUr8ThvOLjxZfMmuLgJzPnmn85OS9IQlGnkZUDgIQ6xXQbV7nmJsZdEz2W6s8LOPzRaO5aQpLULmtTtSdh58HwfBLf52oOtE2YAMrMJCxicQGOqUBKnsEjGm%2FQLKC5NXiqDegXZbcLINDRHmwPJoK7ssXa9%2BTsPIUd4XxRRKoNVIc0%2F7q3M%2B6E1rmOcQo2LJbM9koGPDm05XUVVraoEP2DdFvjZd41MkEY5gYKxanPF5r4tDIoluyfsy1z68WnycHF%2FwBC691x4vlhmm4DrazDbejhu0z4PdUQtnovEKuNPdCqxxX6gTFavSw5EJpU0ck7bdKyIk5hS7Y&X-Amz-Signature=6cc692e03dc69283f60b5b09ef53ff3641fa11ea68707238c5059ff2361f8492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQUIL34%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAnp%2FZR18EY0nqphTOwoqSfCzg%2BIvsuRNY3RsS8XwHQ4AiEA5Ry0UWNrLchewnCtZS4u8UOPWIOBYuYAXiNd1oRmO%2Fkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFhCbBgPR1nJvfNkySrcAwPuzr9a7S6mkWeq4QOBm0gyNzAvDxZX%2BlsdsQWqxGZdhOq24%2FwBS4vqDQPZv7RINPZIFYEPdGP76Z95hj8yZqAcIIkMQFmj0L06Q4AIr4zd5wN%2BPfMkWcXuNAa2HOkIgp5INmFHlIlaplZWo1XXgMM1BYMhzDYsaVtAwlt4LSxiO5Ro0R8F33RUVLgZcdpMWZcfKgsByi7J0y5juDaKbErbn%2FPNIIkPPl9ljzuOSZX2AvACB%2BvADt1iWb%2Fd%2BUGz6kEHv%2BX9adY6fMnIQJvrVKEkMW00NjFCOVQIAGDpJ9AMOwqQyhm38%2FM43i86smFwHzKFK6mOHG3hv4i7zHWSCM3AqKBgKu%2B0e3%2Bvt1byzsZ7%2BAahWjMqlpvaYLRav7socTvYFec6cK2hJytb6dY6oWVCQ9x4yYikZKx5SSyM0uB2gxYVo6d8hds0JFjIkSXNDQtsSLJ2LTgVYgEyK0OyWINdLRgLhL0sEC3b8bjdt6vkMd%2FhdZFC%2Ba2uo6S07741NwdLurOPEUToifmdP00McLJUUr8ThvOLjxZfMmuLgJzPnmn85OS9IQlGnkZUDgIQ6xXQbV7nmJsZdEz2W6s8LOPzRaO5aQpLULmtTtSdh58HwfBLf52oOtE2YAMrMJCxicQGOqUBKnsEjGm%2FQLKC5NXiqDegXZbcLINDRHmwPJoK7ssXa9%2BTsPIUd4XxRRKoNVIc0%2F7q3M%2B6E1rmOcQo2LJbM9koGPDm05XUVVraoEP2DdFvjZd41MkEY5gYKxanPF5r4tDIoluyfsy1z68WnycHF%2FwBC691x4vlhmm4DrazDbejhu0z4PdUQtnovEKuNPdCqxxX6gTFavSw5EJpU0ck7bdKyIk5hS7Y&X-Amz-Signature=bac85deb612b48316e3ba42995cf0962b2d7aa16305f9f4deab3bf0780bc026a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

> [`TwistStamped`](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)[ official docs](https://docs.ros.org/en/noetic/api/geometry_msgs/html/msg/TwistStamped.html)

In our code we can just use `msg.twist.linear` or `msg.twist.angular` to extract what we need:

```python
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # send msg to robot ...
```

from there the message can be sent to the robot

> Note if you are in Robomasters you will most likely use `RM_Uart` to send to the type-c

# adding odom topic

The final topic our node needs to publish is the Odometry.

We did just publish that information into `/tf` with the transform broadcaster.

However, Nav2 still needs it on a separate topic called `/odom` with type `nav_msgs/Odometry`

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDQUIL34%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T161128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIAnp%2FZR18EY0nqphTOwoqSfCzg%2BIvsuRNY3RsS8XwHQ4AiEA5Ry0UWNrLchewnCtZS4u8UOPWIOBYuYAXiNd1oRmO%2Fkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDFhCbBgPR1nJvfNkySrcAwPuzr9a7S6mkWeq4QOBm0gyNzAvDxZX%2BlsdsQWqxGZdhOq24%2FwBS4vqDQPZv7RINPZIFYEPdGP76Z95hj8yZqAcIIkMQFmj0L06Q4AIr4zd5wN%2BPfMkWcXuNAa2HOkIgp5INmFHlIlaplZWo1XXgMM1BYMhzDYsaVtAwlt4LSxiO5Ro0R8F33RUVLgZcdpMWZcfKgsByi7J0y5juDaKbErbn%2FPNIIkPPl9ljzuOSZX2AvACB%2BvADt1iWb%2Fd%2BUGz6kEHv%2BX9adY6fMnIQJvrVKEkMW00NjFCOVQIAGDpJ9AMOwqQyhm38%2FM43i86smFwHzKFK6mOHG3hv4i7zHWSCM3AqKBgKu%2B0e3%2Bvt1byzsZ7%2BAahWjMqlpvaYLRav7socTvYFec6cK2hJytb6dY6oWVCQ9x4yYikZKx5SSyM0uB2gxYVo6d8hds0JFjIkSXNDQtsSLJ2LTgVYgEyK0OyWINdLRgLhL0sEC3b8bjdt6vkMd%2FhdZFC%2Ba2uo6S07741NwdLurOPEUToifmdP00McLJUUr8ThvOLjxZfMmuLgJzPnmn85OS9IQlGnkZUDgIQ6xXQbV7nmJsZdEz2W6s8LOPzRaO5aQpLULmtTtSdh58HwfBLf52oOtE2YAMrMJCxicQGOqUBKnsEjGm%2FQLKC5NXiqDegXZbcLINDRHmwPJoK7ssXa9%2BTsPIUd4XxRRKoNVIc0%2F7q3M%2B6E1rmOcQo2LJbM9koGPDm05XUVVraoEP2DdFvjZd41MkEY5gYKxanPF5r4tDIoluyfsy1z68WnycHF%2FwBC691x4vlhmm4DrazDbejhu0z4PdUQtnovEKuNPdCqxxX6gTFavSw5EJpU0ck7bdKyIk5hS7Y&X-Amz-Signature=bbb98c6de6eda385b27f0e4a7d6d6791ebe43f303325f536b892775bdcb582f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
