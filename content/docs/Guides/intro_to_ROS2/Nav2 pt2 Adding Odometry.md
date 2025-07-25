---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T23:53:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T23:53:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=07a29854dadedf3b177fe53b8e99c9307f5eeb8b1787c7ae5a34c17dd07d69c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=a58c964f68fd7cd1109fef9412af44dd60272e0b3d9b128ac0ee3b6359b7c420&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=3b4a62d68b09fdc90cc9291be94442cb3dfa33993566b8052e525aca11d4ca2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

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

Here is how the basic publisher object works

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=4705b7a46a463bf2c62e238f6c4d4a5da3c5931f5a5c08f841a908a3ebb1cf3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
		
		# gets called every 0.5 seconds
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=7e8de5b2fc7ff93426662461aba4f99a162f64c101ec5a2dc795c50077d69dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=97eddcde8f497d968b34dcb9fd584cb756f45011967ce5da16de3cf63955006b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=75200ec45baf943d4c7ee8244ecfc5a3939021542ea8f22c2cb974d6895a8b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=b59d434790dbabf06e02f44f3f1d7411dbae6c2a95924772a2c5c6bd0209947a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=7bb1861a4663736e726c1eb866612a087581c928a7a723c7eb0e6ae97623e222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIL3Q22W%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQCuJi2bldVGph3ycVpPneDZW%2FYllB2wSv7QRvfmtXGK6wIhAMIHuhQsAq0pvq6BRk5PQgZIfzLqocg1GKoQrBDzXWihKv8DCEYQABoMNjM3NDIzMTgzODA1Igz4Sy7uC5Pq6K2%2Bjuwq3ANfcVST44DAZBbsaZRR2Wlk4hiwOt6qbVq28c1OqiZIqqfCoMtb%2FXwAlEQ%2B9srstQl3nb100evuFITy2HCYj8jXQisgBDvtHrImDSAf4WBk5GbA99DAV11jEvZvGwkYMQ0qqMk93CL0XlqxXnpqSG4pgJgxQCiKks2Cjr3jAx7kILDsYoSppb8sQq0ivSoQpQgRq9sz3IvPM6Aw1R%2BYY%2BlOXvNaNPdbxKcOSNaSayrsFi7IrH3SYGG3zxXyVoigMq5bu6uEXBvcM%2BlzIze0Fe0XsYqi2RCROFYPGUCiOaRpzJP6hqGsX7p3vrsAvOWtgnoP3tam4hNNQsE5q2TDtulXA09Thz15i%2FSlMv8rz0uhAtS5l4IaHj5B6gTT3un0FDBTCHnprDOSFVQSbig%2BGD5MJJQstgcMVaewrzkQvXGRLn4ieFigtskI8B2%2BxZkAQxF5PEToYTfipsAHqaTnSzIVmGz7IBqMAMiVAzHGOVErcgf6CqWthOmiFPAyvBVQseMtNVeYhIW5GXTuLbE0wIbLTw7dhtdTMVBCdKSRTpbfbdA2P%2B6zyBIEvUZaFT2XmDgf7vH1Cw%2F8pN7fbM2gHLhz%2B5Yl1IaJuHg%2BD1g3WVi%2BVq3r3Ca9UJBtlffltDDAho7EBjqkAZ97ML8vaYNs%2FhMOw1NozmUA7XrfpxZzad2dYcPZo1pEQnKRDTidOD8xTiUF3ixk53su85f8AaFaY%2Bltvlwb0aEBIy4TwwouLhNB9bbvTK5zBvONRJDKKWTwzoXIMh1sBvdFsbWjnugzlBB0F26IWfa3Ndfj7ddZ5613DxFKryRO%2Fyi9S8a3vSzdMu3EGzZcDaJNDctzIaBhNnObrqRPcAXx24kJ&X-Amz-Signature=94a1123cdc95a5df89d8fb565b8d159828948475f8fb6ba1cd39bd8c0e649629&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675CROG53%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDnBQgco9SLBSQ5ZuBvtE0M1y5%2BfocTf%2BnvU%2BDI5kNQFgIgUmUvBtZ5jVThOrckYBePHScsvXyUlZbvEyQHcXzR%2BAUq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGPL8h6ZYAf4Wt4%2BvSrcA3OQUgo9HOM0Y2O0%2FpE%2Fyq2usS4IVR1jZYa3GoFkNYzhVqdHAS%2B5SPOI14Ngc5JSu%2FhrNkJ5isrVnCrvnSq0nWAVi22u3OH%2FrZ0yc3iMR2cm2eDuvbukT7MoF8X0xVYET%2FUh83XAxfTQwGprNLxLCoSibWevoZ2RVxVt6mdvaYwys1UFH1EvsMjgGZ%2FEBVxbrY%2B9xoC94jvqefT03%2F7a2ozL26NHXGjGu9n%2BrIN%2BNd6civXSWN0AWmt%2Fo8yvGz%2B6qtvrn4hvJ0F7knglVNVzVH0eOSogYlF%2BrGbud6626VSe1d%2FuxDkv6a2rx5nqarEz1%2FQC3xVktu857APvutO%2BQjWJHMsJi0NuX3Zfmlc1JWePL2u6hzMbnIkI8kdhN%2BExK6rrRWDN0Zn74LehkbXYs7FJ3rjlrFegZ3sK5j51gupZPB2HEUn38EUD%2FoujLkWYtytI1ipwwGGlEt4LI7QIohpP9YE3kUiEsJEEUka%2F3RupOT%2FxfX%2F%2B1PbzQmv5raiwrPzgDTqNhRut3wBSZpFwJ0jZXhywyd0RvqT5E6VGEbJV23dqM%2BQgBjJVamtd15gZECNQnLP423%2FqZQch6pXERqjpwU1Nng2sIXadJMvGSgQEaYGlbhjsP4CmU65qMPWFjsQGOqUBH2wRwFtAOmGGkzHa7DBW79AHTb2YukkqoSnmMmPEazDaN%2Bk70t9pxPtKsuxQdbiSlN0zuSWdVGZWhxpR3YdXuu09aIRyF%2BAEKz6gVSqnKo%2FHpBgvErpQJUB7iRFxx%2BGZg8t5ywLtVGjnX327%2FMvfdrwE6%2BtoVnUGsFrRoDSRPrAr8LIw4dstDehPMg908y%2BS7bRoiXPqnyWaiFbFJLPEVwWIxtR7&X-Amz-Signature=37bd811ba0bebde55729ef4ee5b1ed08f05dddc08f5c6bea32bf53d7cf516ad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=53d45037e58989d7a5b43a386b2375f3b8b3010ee510445e660fd749b814a8d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="success" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=e43c2a7043b2a9e642da094fdd752b5d6644a0e0d9213943a4db6bd426557712&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=1989fc1087dbe4df60673aa235cd8f7a46e7cd9de59e05cf40918d24b139ee61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=af6fb89de242e2155bbf881d993eaba69d38e9038153f738922f9f3b5a82be34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=c85f30d932f9f547eafe56d7612adfeb40f8f4ce78dbbded03952c48c7e8d417&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=dcab4ad6ce5e95d58651acce23dc836c2ad396f9e388440754e50b7ae26b6c74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMHSXJ3D%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T141054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQDIbeOcwdKG8VrJgW06we43WRgH5whlc5or4b5Ghzw74wIgBoxuvT9jgdKbpjvHMQBVpyHo9Lw1ge8Poxsgnf6vdVYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFnd4REeICe0PytQHircA91IrzAG%2B6tKuYlBJHPixFPxc5vze6B1UpqDrDp%2FJ%2FvEsnynTlu19WdicNnRCxe2n9n%2BtrDaCODXEJVNv7WfMfcTvq7EpTAyxB1LUleJ87rOHA0H6gU7i16cz57J86NxN9IRaDfgpxfd6r8lQt5SKZNNIDbOmHE0bv7StXGNSWGl0NZ2PtkN4wOiGX7YsblTS%2F2aj2fNpTy411fPt0x30i50oMy6BzES6K2HKxnS%2BL4BXvlhfhMQVQ6kDD9KRSAuJEuJK5gVMrJoEf56305oZvt5CEWT9OhMz0i3Lf4Vpq%2F6gdF4wT6poiSbme4CJw44baevIf0HBR2mK50NhphtmVEO%2FCjUTMw7ag0X%2FGgpRdPLl4QljnEFT%2FkTSP5ywsifboJQBGooFbbIm959ZMsCW%2F93SCoZvv%2BAaaNH1qX0oQoi9BVX7ivzS9RUkJB9uRA7hZDKoCM19zGrvMDnaa5onZPF7YtRtSM399MIOZVusYClrotXRH8MTIp5rJQSA0%2BqFkyc%2BeHdAF7YY1Llmtqk3op5GAMjhz9USssiRvqSI%2BNlxwTxebSIsqlwEv4w20JC6TwcA9e2fkcQPL3Q4XCgv7BuAmdoqvxksbREnX%2F80WwNpV5hskrIXm7Vish4MKKGjsQGOqUBsdcqqLGk6tU6QNmST%2FPIX5FowULBh3OJTd9pPP0iqDye728twNAOIo68H6PANc15GT%2BWVA38uJTRzXWH1utPkvLVoeWjRJyfk51xZsNpX860mfopJik1sjXsuStBtZ93waG%2BieqNAmdvS1%2B2v1wdRE6JshQc%2BwViRMT9G9NCUo89U1hLAlFpJIrglQvY74mwmoqtVn1s38CXsglqkOfvEZ9e6dus&X-Amz-Signature=e8e0e4110baa4812ce74b7d8b232ed0939015d12b150fa999b13a5b275508534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
