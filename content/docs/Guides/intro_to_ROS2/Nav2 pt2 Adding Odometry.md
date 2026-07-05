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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=6178f0d05d9a9db9bc2ee9e08111540a00013f9361b4a0dac26a8bae75f7d65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=a7c0f5f592f34b434b7cdec82d358139c592b842476827d8105f8567e211576b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=32482367461989ddaac9f0c48fe747f855f02bd6a695c04afa54cdaffc3a82e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=ce4372166a287cbe50d39b2d9a9050f2f9facdfecfb49194bbdd345c8180bd2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=b245d3549221d58d6e8e43c878517410e645e3f00a45be6e274200c1427f3494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=f47bebccfa4f0363bb0ba860b37a2d15d46896bf081185f9807643eff67cbf32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=53f3fea5a3bdcdf49a4ba183d0adb6b2ac33cb64c3a725b66dfa552fd3c8da12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=120e07e9b4ec3eba3e527c4a834a6ddd6924043108b959852ff567d79e4bee2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=a289059b5d82c76a02b86819375caab3b7e6d5dec4d5377a0bef450901d7ab79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CL5W2IG%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIBXbs0LmQzUcxPFalRWHyqFQ0oldQBR2Or0mgmGaW%2BNgAiEAkdN5XCnkm7m1IiwIJavB4ElOJKUK5WonFjW81Fi4FkIq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDIdYZMtH3RxqAxFqrCrcAyXVJ3VzdQAEgOUrX%2FN4HzIkWNexfUw4MJ2Yf9blKTlZ56bw5Zputl%2BXJ%2BFe5uxcrUe0j33tZMoLEbfykZz4pw99lrVZciWK7HT0SghkwjzKyyEPi4XUhQJnsf80L2HSfeqCBL7xqp9rWaU7fR2KeBu0puMkQ5fAGMKEmgNL1cTO3pvsZR46bOG66LsaTSRgQw9s6xqC62fRX%2FVwCI%2BG0ZWvb%2Bx8be4uT6ZQq8H%2BxbNB5ImCF3djabxhNt9ZYZl%2BBwK3DhSH8RHTbYFtYVxMCRMhbf4wklt8Qc296rL5JwdLOdho%2Bbnkltl%2FPp%2FMTva5QV6qozM%2FMZNLF92C0s198BB3sw9JxuFwcPDC8rJ61O%2FNmAua6NzfrzqNSyj51piyQTrvZl%2BchujiY5qkCLPFLAFTfM6sI8ZuWWOJUlXmF1O%2FDksoHEZ%2FmpAI1CLYLBB5ySCgOGoFkLYcnWyJFHUyVVNPwH8BDoM7X2aHi%2Fws%2Fgsq29zd%2BEiUU5IGK6EH6P3hUHzoAgzS25MvdblsvBcO6zWknwsNjMP8dh%2BLpNDwyINr8Ur5DVGTVj6Q5Q%2BUAm8BNPWmK0pG1sFn%2F56tTnwGhyb3%2BVVvJB8yDHUbvlPnBrWCrcN4%2BP1TTEshHT8QML3cptIGOqUBLu%2FRuS69gqN1xOVty7fI4GC06TMCNUj%2Blmg%2FRpgiZEDLHqlV%2FfSOhB3QcmEcCtyjCvCJdlAJhbID17Rgn6bBXfjsZciQn90AkG2QgpbdyaM2v981ZNR82f4Gjc1Lb8EZV9RZx9w%2BbNTXJseNkcefEB9UZ3FihLy8bJTSHEabpXwdWR6%2FZPiy3Mk2Vok95bi7l8Bde2e9tb%2FySBnHcWneTwZnu35q&X-Amz-Signature=c0a9f6da356bf219c2fb8fd2e4c0c400de0e2fead1ed5b6863d0f4590788afff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UICGCBNW%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCID6hBJqGg1hxsdfi%2BI2QZo7zcLxsp0BuIDIN9H1zsJABAiEAiOPQ6RU0zvf96vBcMV2AUzAHynzV%2FJSWC60lJFTmKWUq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDPPXTrKMtEv740vfUircAyhD46scWzjXnvIiKv5VyLZalL%2B3htpFc%2BNCxXCbjqDacyxhRF0CH0K%2BWxAJtBn41OXuDg9BRyBgv%2BMuQNcUeXhC3UMbJrPP0EepoGNYGnx9xJ0T4JXPiXc46AYVl839oe7x0koheJN8nZB1w2FN1wWrmGv3cvbiQ%2Fn23Gpsi4bh%2B4tQsbvPgYk6%2B6uHMZ%2BX9S2A8tmFuPoDoyNRxZRC6E493BVK2T9L8MC3ReXL7pkzZN1ZsNsBRb1pDE415%2B9Kl8KgRf%2B2hYK%2BmR6Ap9OZfQx2Ie3o03AMo2E0b9K7Pdi2Dfiq3yQ49ma09MzBX53yQVY3ngvvJ4lsS2O%2F7Z7BLUz6TQeE06T3zwTKbUvyoCUsLd2YRp5eCj%2FJvKm7LyBVQAQI5pVu3YcCuoL7BKZwY%2F00OYZpn6cpr%2Bjl9A8mOOsBYZtJGB5cRKIrMMxnOzleDHDimcKUu1VEXed6FsWuw%2FMFEX%2FmOcuA8Sw0gwNUvLqR9l4AyF4c%2BzK1dNwFSEpZXbu4ONRiWxFnND8Ao44Yb2UGLH71awB%2FGNeS5GI0jAKMzXyQai7zCF9bDhGDhsiS0MXKfnuJeDRNKT%2F2YO6u5gUXFZsGX1UgQsohnT7PufxJ4Qv3MW0P1QPUtuesMJnZptIGOqUBDAJ0dPtAre7XgBOzg5uwm9tOWKpG%2BIG9k6X01v%2BMrBJ1nd%2BVhTaZN5sQdVH8oMb18epqqYygaYiRq61NAqe3wyi4OsRKUO2W%2BoWqYiLBTFKMBeN%2BX2YuqdMuK3wO2aU8cr2fLNGNiVi0CBVcdMKkhaK7%2BIneaWFtcgpSXagUdBpL3XWg%2Ft%2B2g46xx%2B6b%2FKJjzX83FpDSKKBkoqyWqArNPh1omkCt&X-Amz-Signature=5dafc9d2d0dbcd28dc8917221e936ab857e226701cb9b869a528f97f1b76049e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=7edfc8f20c4eb7a8935eb0165599be10918f1d3cb59dfaf0696db570508b8491&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=fa8fac7ad86ad0642c006ab286494f48c6acc977de9eafc0697de83ae0bd56d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=dfd89aa402fe95e2d78d24cee2faf455512ccef9bf8222b3becfbd3db8bfe4e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=345e6675bee92e8a0ee1d975f0d132d7c11edd352d19ff9d89655976ba2c9fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=e0699db7df8607d0058382f086269cd6980f00170a7e63c65c3511e35d21992e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=48ed15b6c56c0cf4276a0dcf957b4f15b7c817db611033273c639f7eda6496a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=ec82f05ff860fc9af51f4388d51228fe781855acd00565b6d7a00d97ba9f8c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=b629433a7254dec0db0d09782e7b5828ba4fcca5f17d569834598645b5456c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646MX3JCY%2F20260705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260705T032625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIER2%2Bi24FtGMKAXWFozCMS70hDlJkzZFq%2FOcpPyKSAFQAiEA7nOGJbf5TK8Tu8C1P45DJ%2BNEsBhJQYyyCWWOcblDr2Yq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKUNA%2FIFv7Clg27nhCrcAzwlDqNiI9k2ubkMRh1XXJDlKlO2nYhE8iIV7Vpm8O%2B7nMqTAi3Cqw2lnZLpJrJsqWf61L8OkGEd2D%2Fkz6kA5wUl%2BiOwKtsmkuprDz7WDI9vKcQLOe2WjyqO%2BIUgvzI0BM1nPvCWWn7AjmnzA%2Fr19kdlp3bS%2BkHFkEoyuum4%2BIu1%2BrV7HqxeZX0agOyJa8F7IPaHidV53WwuTEshr7szmTLKbInt6%2BiUkUBdZ%2FQbtpfEnN9o6UiEM5Vj4JDSA0RcVEfuIDmpUtyvWvYyxgDbpSjRbuGqqdx%2FJQddKscifDTfTC2%2F2%2Fq923uFsml%2FG5Mti7akq6KxrcwquoEGC%2BEABao9HcGix3nwGBiaZoWcTBdFnkCOZInnH%2F78ifiTft%2BpNosQXrRfwLACHmEr9fWUhr8Xvi8BM7cgBgnWKvW8s3haOnqxtgn43Vni981iFohMYsNb42%2F7SCM%2BUmeB1j8nfQR2VMTVH5Y5SCJRT8faXksIZ3YfllCr9ODDsyrsj4eQPNyzulm64eid6iHAhpE5F9l1ySwYLdsS7EY2BvVyM4TFKU8lD7icPav3T0tX8JL0GiOtCiCHj84ZgcueHEOsC%2BTc0YUNq%2BrCv4yZT8ZhubYcWbN2ynv2ezryNWMKMLDZptIGOqUBXXRiPWHdNgybCbFhQh97ce8t3vM72DHDS1JTRjXZCLqYV56LIPBCSuolByz%2B7XHPx23g11DuXlG%2FW3cCIr%2BdHZvB1zo1MKeJlutzaj%2Fvd7K8txtYQSZDENRIGIzcNaZaxiLe4KrV9RXjOg0INggvf7PISzSAS0D0i081tcusxJvgBAdijUs28q%2FTmlWlXAdxaYHsFgAu%2BPiDnlOb0qXvXeBv%2FW3e&X-Amz-Signature=321fd4033b2eaa779d68d8c654c55ef1b3c59fcd6f19cde0445672961b35245f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
