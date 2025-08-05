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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=9c878d8df6e17cb9815ba6df269967ab2874f59221f8c51127deb15238199597&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=af02f605353de74e3f616e285ea53c8219bbfe372933dfbc023d4e3e7b77317c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=1a7507b6074a92d46c0114422961d0e5d951228dd4715384bb54368de7ba9421&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=5c0149705e32afb60446e7383089e2924e8483fd203e30f23936bd3ffe1d4c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=43a36460c32c44a32f50a5353f2f01bd196274c09559c4f7e7c823b640c1d934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=c2305dc29d0d03eb7692170584ae7275af96c0e941a739c22ca3ad67963799e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=aa22d2b4e9105cc14d6ba5f5caf5615bc4ac379e58f5aa71824568340e2c40b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=a80d2c9759b9e4e24caa3b90d82732cde493180a3b07f3501e0a497d75a63ed1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=e00b0d59531e6442e91a455b2c3b2472236b002b66ed5795bc55362703e9d1dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XENWVQVO%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIHxhl4KrepCo29z%2FefnyvNdegnGsstnv7L4WoONINZ4JAiEA4N0vqDNwDQq6tTicnPgnI7D19ZSFGsFY7514AK%2Bkg%2BAq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDD%2BuwIG6gD%2BM%2BYAdSyrcA93dWlTA2NzojToNqa8JPuTlL6ZJPTRlMdJXCw6g5lrYE05CykvBSyPW0tNxF0EkvB8EURSz1W6bRmrxKQWZZduaPBmkw5KwVk4%2F%2F5RBxRz1YJofJ7SpnwEPnNcjqjVn%2BjuvfI3Ng9os1EHe%2FHkbb3%2F%2FGuMqpa4XXm3HzK9kfPIzE6vII2yHKg37597su9yza16up0a%2FRoW%2FHIPdVUwI8LmdgLiqTTfyfpJyQu3juxP9h%2Bx88gR%2B5K31FCmLg7GBbuRl2o%2BZqX63B2p1aXyeulaiEzJ650HnIe1hNxQOWbk1mpH9CPIdHp2SLT1r28Z90kFv5GkyDdgsREcBmDBDuZcG8mLYyqIn8asrdySNZmrV9MeK8uh4CafhNKD4kppkdXeWShIHzbbnRAejd9ZQszDAXbXmFNsjMx0A4hoRX%2B5DEQvYhSZ5ek8OTAfim3KgYwx8q6zp%2FXvNUXguvy4I6SYf25y5nZqJUFcp207O0%2FnP2LhRL3aiKGHwrL4WNL41DdVDRRKUZGnR9XtobdOH9Eh2GLxsLkUnu1%2BC0a6ntpPzYUounpld0E8LZBJQqELcXzFvcvw8yYIxJNm18BCcw2XPfhXxADz6vHptpdSmIY8Rkrjpg%2FcQrv6u3%2BzPMPzLyMQGOqUBuPs7K8YT%2F6cg%2Fb5N1MWhtdbSw2N9kXsgSZP3fnXUPffnGNBjYXZjif59RYk519jDcqi%2FoQuBDn368%2Ba8RXK5VTt0W4lD2IQvEcnMdZo7Isr0yGljGf649qboni2L7ug8os5qBxByDaGw0iqPgxojrvo1W4SAzx3daMC%2BZKxolWbFSGbzcpzUx9tDMFlXSW%2BmbwIcCEihX%2FQE%2FJufxP0Zdss2ybS8&X-Amz-Signature=9625dd7d1e572bf46f17a720d4b581eb5f80bb9af42716bb9eb0f6ef2bf4489d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIDX3V6T%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIEzvv0Y8XyVRKO8vlBZKFgl8u%2Bvl4C09m%2BM%2BpBGpwK4MAiEAqjoPg7qdjoMPA6iE5oyfqkAiKzoWjJK0zViUjdPPcX4q%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDISCEFLiBwa5LewKKCrcA5yf6QgDAPQr5aUeF1%2F%2BZRP6IQ6LLYn%2BpA%2B0M242WP5DuvGBdQGjaLKpGjQIeeYUrZ2Fa0W1N8FaV11ZOvvS8an%2BtGaS%2F5jUaYmv%2BB0SDmvmqv%2FsCu3i5%2FOH51fw7lHNYH5amxvfrLddDApcBTn4nbmf12RE9qCeoZmkV7Sq79ErnfTA6gk775etlG5gRQSJMt5nyO9f6IbZ6ZiXXgQVWP61ogmP9w0M2lOt%2FU4mZuk7qT1Ty3MHeOZgjZCq6M%2F2qIWZcH%2BQ1IzbiTW7wbyHIdG%2FDN32wR8JfwcZKCeukrt2ifa2EgU%2F%2FKZbdbNSeB%2FzOL59jyewoeDFsDt6mw73WJq0d1KVaKaTOCny0nqWfPvQ98hYM%2Bs13RjpVPG5AIe4xRfvk3TfznZT55E6bLJqfTzphyeKRvl6Uwdn62l3%2BCJTCF377eVPmTAOUJNpbpl50laiHBGPe0GgFVka10AMZ%2BXXBTmoNN6%2BlIJ8IaCX4%2BzcTcIgYkLgGqrNEhxZPbrq0Mwk74%2FzGwduwyYEadqK77ay%2FumzvUeaoT6EKtVZAQEt08co1%2BObc9cuXF6iFAWdvtH6%2F%2BBrc3nnPQsCqHTl4qZXqhybO998ifr9DK%2F7IIKpquqC41eD6APJxIX%2BMKPMyMQGOqUB%2BL5cKWTPnqJ5nCvPly%2Fz2p%2BnezUdMF9ZCQpxAJka0zCUNK8NEb1ooikEqmtoSM4xW8qe%2FdTZaV%2BhLEB39%2FrAPQ%2Fg%2Bs6OgEuNQ24erUpe2P6mlAERRWZBQeH0zTzuIeH172mI77NyNvnAuWZlF0GFxVG%2BRKcpnPK2AYMw8zafyt%2FSVBYNtYYp0pIqf3plXKuiKhJVMecw9%2F5ebS%2F%2F5JMNWVCLGDkK&X-Amz-Signature=f6647530f01d15d2699d9df47bc74e71a7de37df0d30e01ec7fc5f9324d922fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=865f5e4cd09b2c81be674f4a6f76ddc9ad374c85828b6b6b5fce5cde05603b1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=50b87f1fc6d6d01fc65423f793342e00005fabe9c480f937640d03e6502445c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=f18f861a6cdbc6d0c74cb3982ab06da286e31344c8c266271c47a4a02a61ae39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=543ffbbe7cf6ccc48243a4ba2ab3dac6628346d3d2f6d66667c607bd4683dd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=9825e487c8fb2eacbc6f3a6ead9d14959be34b3276efaaad7d9a67916e679877&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=2f15664f7401e9006eb68e84a7c0826c67282961b5a69bac73d837fa6027391c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=12689ad37b56fa784f5d29cb2b887fe9c57a0bed079365634b2d61f543a782d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=ec599d82e5f376557e2d4220799bb6a4d9877858b90ffa59ac561a4de3b74709&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNTE3ZNE%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIGsvtp5gDVu%2Fh9EflA8%2F0pa2Q8QMTKW5wsIylgA7fehmAiEA2XQUUOsjC9eEYnuXyps1x6hH6JOwXoUA9ViHbRbl%2Brsq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJHSYm3%2FzWurRn4axSrcA1AZ6XMR677nLm7Kq0INHkTieRyRCoQYrHXkiT0m9m4P2Cfr%2BFqITD88ZKXHCOZPDYRY%2BV5h8pNXGNm5OwkIn%2Fb1K9VFLdtoHDy0GiW8QeSLSBZWymLe5XfCmtPHdqMeYw2E5sy%2BwnGeybpBDNYzqZ%2FgNl2kKNuO7eaqBAR4pdpdMLyfuFMQ5PFTq0lquiJhFW8Ll14LfTlb7uWG9o68l%2BlvUnkNStl4T0VQg79YHtT%2F%2FCtfB1%2FW3Lw%2BejOWixi80TIuqYECPc1ZiYiaPLfR7nrjcpDZI0f5ylX7PmR6O28RsYdnFOuwYb%2Bm1TKWRrtnq5IwHwSF%2Bzwnk%2BX%2BcmNN5jlqoSB1HoYOIhZYRtzkDS8TVUk93myZkT5n0OOYId2DcX4c%2BjDj8ZfTY0ymSvua50TyBZigkG61JoQbCToloB3B9v9gB5Wueh7nBotBGB89%2FcH7XieygU3qLuD6TCemKoHa0f%2BjFuVHX9LBrmMR7dikDtKGuXtpK%2FXWGY1NMn8u44Fm0eOJc%2B48EsqP7mKand3wPHfwLrRR%2F9hS2tuBh1ntKXoOlXNHSDjt5NVeye4hoB5JvlfAmfl00c4w2eJjC5Uzfm6quAzoNlYEwyWTUdsdGiP1UR8Pan%2BtLc81ML3MyMQGOqUBu%2F6BVO4H5x7rFjHDKBGO1Z7DektrlPNUdqDcdPPETuy5jhMSlYAkkUL9uFzbEMrbHrL7z4XaDCfGQ7yHrsVvG9U2i0Tu%2FBGLLPfAieUX2x%2Bzf3o1K%2FvO0458wV%2FEh11rxBjzwI6SUQSHj6iGk9yzQ0Qed2h5KpxQUq4zyrfbMuLKC5STHdj4XEJk2qJ1VJ9K5mpo0Yim8cTIi2F%2BAVkd1N7jvoUJ&X-Amz-Signature=97e41a59da5422ae9fb3e8100408b1e8a23de7fc7f13051f0c149b46ec88d586&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
