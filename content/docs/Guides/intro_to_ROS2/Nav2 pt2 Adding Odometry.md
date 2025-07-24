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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=e2ad222656230d78931884577bafbde662e37e3437ed3855eca451d07638558d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=a602c21848292fdafa524d8421999ba7b7f6a788a9a2db6d6d6381c1b5ff97dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=79d7403d02b138e4f2a90322eb0df17cac71fb5da1596f466f5d12f8aafe8aa1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=e3ebd4cd7bdbd1eabea5377ebea6925d0bc4b47d86dba0be7e7dc206cdfd9a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=3b93f8e22cecf47fe1174c19d8d75d8a4e7f08953a0c90bfb7092f556fbaae5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=0e9df44661dbaec2ea10d38f65e26cf8d67cf957b30c95f8cf78ff795c202a84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=4e667f3628fef9d05d963dca4529af2587937fe8602a589740360a18f148efd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=f1f95d468107342c7019efe66ee0d0109b8e11af3f085f4e0ed838422fa8b47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=54eddc347e2afddcc59a526514681845e095b1df388a59c3b9cce12827fe3474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXCORYON%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJIMEYCIQDaTfqNI3Eha%2FPsCbBOyp2kpV1Vxg1TpEZvcuiRoEoBnAIhAIBUFKdEald7c%2FcDj0wWz6AiSBJxg8yn0DNy1CU1dyxBKv8DCC4QABoMNjM3NDIzMTgzODA1IgwFdqWvcBhCtcDd5dIq3AMkKbQzfx49L1ZVkSGRZY6wvOL4iUtbt3%2FEwfwj7X7VqI6qFyiaT%2FxJ1%2FF74mNksutNyBTjvLXYwsxw316oQqgpFQ1dlhem2v7gMGgm5pB7CfggW24Dc3I1ZSrSsTccoRoVWlryJZiQAEBujQdseQKjK2RHLg4YHXeo8E%2FCRktRffZ1%2BmXmCDL0BzielD%2FOsic4kyOquZsHPjdz62Sw9tJJ9CM0sQwoih2lYDa5ue%2FFN%2F8trwjg0XlBhwXOYG5P4eUxqSV1%2FebudolyXksntcUPNMpQXvPq42Z2EmdlTpyabikdd3a6kHXltaruFu35JTdOLx%2FwKVtiSijEsVNQggJYl7C1BW3J%2BnsnO9UDcYmf3tUNl0cfMuLOqTZa9HAnBEqhnNIWKEExXYlrPb7svPGPggiMH4DZHKNv7eSDWXVlXg0dKIgl13a%2FZJ6b4s0cetRezrdS2WqseO59Ulh%2FgMPU6ArN4cwgSe4KIDYH9olt5w2cyFW74LQSj%2FYAxZ8ZrX%2BpX4cfpkFhq3tgHaFesVHHIN1JOS0AEsQ3gLPI0omnGiJgBEi%2BOzHMPyXghmpniDYSf%2Fr0D%2BbsWA%2BUqKFIzBZBmegbEUkP1B%2Fh4XHwuxkbK7Fxmi1vOwsrPFR66jCt2YjEBjqkAcQnk%2BVLwnWZpiEcnWl0lN4bQ0kMf%2FiLugohGkZRUjJNVXofW4LA8lk6xJYGKk5GEjr2OZizGEiEJj8Qq8UGqLxRiBQxW15fTgF3KdNxv%2BmQ47gso1fZkF8yiwSM6F4ipicyLz3PA75CrcF3Bi3b6cQLAbnqxCjSo6Y6E6N7yG6Sp7JBsSSNTrVlztcOk6d4LOJczgn%2BW3E4LAbNN6covfTdg6b%2F&X-Amz-Signature=358e37801accea7d5800152416376ec7b1a1d4d469dd557aec27ec1b1e413482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=e1e47226ebe56399e8077d80224cb57ff09e087dbb0945875dbf04225e775825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZF3BIOD%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIBTlg7NSc7Fbyrm1iztHfhREmN7ov4Cu%2BRhB6ZWzWbIQAiEArk4cjIHQv4OzitLsUe6zBgk0OthYBVCego7jDdBzxrgq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDG9nOv%2FgXmW3LsD%2BTyrcA8iVaCY1vvSgoTF9d1c4V%2BctN6zuxmsyqwAXY4GwpgBLXW7tZ%2Bx4RQJFPXB4XY4jrK4QAe8W325ATfyBUtdFT71iuUedw2N97yfhMAOcw2AZXO9%2B1QoQHpr7985yRhvtOW61GoqnWXZQr7fqXARUEM6Iy5s2vRjfj%2BTVHmOW6Knp1McXwlLE%2F6KHtnWcf2zUgL0%2Brcdqnk3xNA553hQzWkh07W4QpLWa6iOMK7RPQi266hv71eI8mxSk3vkzQNPLSt64DdnHqTH8Az7BiUxllfR1aSYLRWoNujT04DHwE9FJ7tK5NNd1ZiA4o1ADUaN8yXuji6zzXbGsiJPznafXBd5WcTrfjOUaAjSqQMioSR1NxfEaCermScs90aQL%2BCgEwdyVG9sA1MpQ9j0PEXsKwSvdzUi108E0MmezMw1Gz7an0WmpIeYRA9%2F86l%2BzRQbq95x%2B4UA1p8k0Z9LS%2BM4stvEpZai%2F0Hb03mBpc2RSrMRTk2aGD%2FJZrSZc6%2BjnjmCYVswzY5TSaglDQvczSwT%2FFNyyjWaEojSvHiH6lZ90SOOge1oDVLAVHOKE6sj2nd90CiqRFahzCBm7A%2BlG%2Fpbv7Tr%2B%2FB1GeYiLeiDF2gspFyIOacqoi7OSETHOw5%2BBMJvZiMQGOqUBFZ6%2FULxmMycyd%2BxeusE0AL1iPB1PNdU62ZnwBRL58ViyMRjqtk%2Flw7qcqNXnIy0JvP0qYesjufBSInL9aMiynBgYjRbmLwhqzXvaWGIfoasn%2F9w6wrSPpvnyuJfnypeqBwr3BZgith1G%2FxP3QPb1F12g2jtgXvd44eh7yEpA4LPU%2BHgrI%2Bzj2As%2BhW1mV2bIB9JPNmeHaBGX7Xt77%2BssZDv5yhpT&X-Amz-Signature=904b9fb02e5d7aed817d560e787b550dc58fcf7757183abe18ce9bdaa5118198&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKKHGSI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdiJLFN4tMQVrjgsSAsfvQAiGHMFg1CHACoe1W48ofbQIgREXllMqa9W2JjHEjuXdS4JhPb1VQOmYQedexyDEjs2oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI4N7fMywymfyOculCrcA51KVGiUs2FECkYUMY%2BVMiOexU3AbCZLD6UZetL6K3pypNXoqGUUPGAvSvcRVRIrrSuleX3rAYp6ErT3lms872C0o9CfhWTUayd82Ps7UO1IHZlpvnFt7kB5c%2F46kEQYIf79YlGysnTY2RuN42koRiA79qh1Q2SMFbn1LMpi%2Bc36ZPrIaftg%2BeAAWMQGnBsBegmQ9AQGGqFkIr8E1HMbBbmJAzxt%2Fn3S13hEcFUDi9XwO2x16AMlnrZ7s3Df8dVoskxr8I3SoFN6WZUgBRUmguav5L412lbULCTu687GY%2Bz%2Fnws2X73V5eoK0VXT7M5l0gp%2BnMoHrrsJC2Q1I76xSk0QUO25B2hNCGXnACx6lZOe2wlWP%2FsJTlso%2F8fsfhMlrZzUCTWng9YNE7Ieo1LCMSl34NV0W7yUvVFOF0Mo3BKiL7kzX8UM3uPpTs2YHp79ue2HzTjLHKSz%2FROaJq5hFEkAtrQ8DkjnLbRIpJKkAk%2ByBABECUvlcp4eFHELLdvN%2BrG34g8o9AjENhN42%2F9IOUEVX45yjHlSevhBs0dAVQZtg9LdaJA%2Bt2lYAbmCe%2Bpz7v3DTOVBx9LuZOKBBm7ijYv19b4Lp5fzrUKZWfTSdrlk7GyqaMhHuLtVCOUhMLjZiMQGOqUBpKdF4lwrucYvuF8LATaBU88elY3hNs0qOgW%2BXLV0fil8RY%2BydrVYkR29hbvJZNu1sFaXPBTYIN6GNvDHeFdQhf1rQuQLL3ugkIwnNNcZxH3bR7LsteLxVLtfs%2BJ3%2F2k%2FQjDapov40yIQ00wrFXELlyE9ivXejgkiFaoVeIV7WAowy2EIDtksHHSVaEcJK1Nut%2B49g6AXSJPLCmkFlNryZ7GSXo7T&X-Amz-Signature=a0f467aa3ecf610b0b28d821768a43709f392307e4470bf9b99f9d1ae98523b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKKHGSI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdiJLFN4tMQVrjgsSAsfvQAiGHMFg1CHACoe1W48ofbQIgREXllMqa9W2JjHEjuXdS4JhPb1VQOmYQedexyDEjs2oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI4N7fMywymfyOculCrcA51KVGiUs2FECkYUMY%2BVMiOexU3AbCZLD6UZetL6K3pypNXoqGUUPGAvSvcRVRIrrSuleX3rAYp6ErT3lms872C0o9CfhWTUayd82Ps7UO1IHZlpvnFt7kB5c%2F46kEQYIf79YlGysnTY2RuN42koRiA79qh1Q2SMFbn1LMpi%2Bc36ZPrIaftg%2BeAAWMQGnBsBegmQ9AQGGqFkIr8E1HMbBbmJAzxt%2Fn3S13hEcFUDi9XwO2x16AMlnrZ7s3Df8dVoskxr8I3SoFN6WZUgBRUmguav5L412lbULCTu687GY%2Bz%2Fnws2X73V5eoK0VXT7M5l0gp%2BnMoHrrsJC2Q1I76xSk0QUO25B2hNCGXnACx6lZOe2wlWP%2FsJTlso%2F8fsfhMlrZzUCTWng9YNE7Ieo1LCMSl34NV0W7yUvVFOF0Mo3BKiL7kzX8UM3uPpTs2YHp79ue2HzTjLHKSz%2FROaJq5hFEkAtrQ8DkjnLbRIpJKkAk%2ByBABECUvlcp4eFHELLdvN%2BrG34g8o9AjENhN42%2F9IOUEVX45yjHlSevhBs0dAVQZtg9LdaJA%2Bt2lYAbmCe%2Bpz7v3DTOVBx9LuZOKBBm7ijYv19b4Lp5fzrUKZWfTSdrlk7GyqaMhHuLtVCOUhMLjZiMQGOqUBpKdF4lwrucYvuF8LATaBU88elY3hNs0qOgW%2BXLV0fil8RY%2BydrVYkR29hbvJZNu1sFaXPBTYIN6GNvDHeFdQhf1rQuQLL3ugkIwnNNcZxH3bR7LsteLxVLtfs%2BJ3%2F2k%2FQjDapov40yIQ00wrFXELlyE9ivXejgkiFaoVeIV7WAowy2EIDtksHHSVaEcJK1Nut%2B49g6AXSJPLCmkFlNryZ7GSXo7T&X-Amz-Signature=0c04c8f391b7fc5523f6fd6826481c702ce75eeb7ed8dfca13922d0e84a76742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKKHGSI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdiJLFN4tMQVrjgsSAsfvQAiGHMFg1CHACoe1W48ofbQIgREXllMqa9W2JjHEjuXdS4JhPb1VQOmYQedexyDEjs2oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI4N7fMywymfyOculCrcA51KVGiUs2FECkYUMY%2BVMiOexU3AbCZLD6UZetL6K3pypNXoqGUUPGAvSvcRVRIrrSuleX3rAYp6ErT3lms872C0o9CfhWTUayd82Ps7UO1IHZlpvnFt7kB5c%2F46kEQYIf79YlGysnTY2RuN42koRiA79qh1Q2SMFbn1LMpi%2Bc36ZPrIaftg%2BeAAWMQGnBsBegmQ9AQGGqFkIr8E1HMbBbmJAzxt%2Fn3S13hEcFUDi9XwO2x16AMlnrZ7s3Df8dVoskxr8I3SoFN6WZUgBRUmguav5L412lbULCTu687GY%2Bz%2Fnws2X73V5eoK0VXT7M5l0gp%2BnMoHrrsJC2Q1I76xSk0QUO25B2hNCGXnACx6lZOe2wlWP%2FsJTlso%2F8fsfhMlrZzUCTWng9YNE7Ieo1LCMSl34NV0W7yUvVFOF0Mo3BKiL7kzX8UM3uPpTs2YHp79ue2HzTjLHKSz%2FROaJq5hFEkAtrQ8DkjnLbRIpJKkAk%2ByBABECUvlcp4eFHELLdvN%2BrG34g8o9AjENhN42%2F9IOUEVX45yjHlSevhBs0dAVQZtg9LdaJA%2Bt2lYAbmCe%2Bpz7v3DTOVBx9LuZOKBBm7ijYv19b4Lp5fzrUKZWfTSdrlk7GyqaMhHuLtVCOUhMLjZiMQGOqUBpKdF4lwrucYvuF8LATaBU88elY3hNs0qOgW%2BXLV0fil8RY%2BydrVYkR29hbvJZNu1sFaXPBTYIN6GNvDHeFdQhf1rQuQLL3ugkIwnNNcZxH3bR7LsteLxVLtfs%2BJ3%2F2k%2FQjDapov40yIQ00wrFXELlyE9ivXejgkiFaoVeIV7WAowy2EIDtksHHSVaEcJK1Nut%2B49g6AXSJPLCmkFlNryZ7GSXo7T&X-Amz-Signature=777f6b002d13744fe659b9e34938620fc7e389294dc7865082c628afe3b011bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKKHGSI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdiJLFN4tMQVrjgsSAsfvQAiGHMFg1CHACoe1W48ofbQIgREXllMqa9W2JjHEjuXdS4JhPb1VQOmYQedexyDEjs2oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI4N7fMywymfyOculCrcA51KVGiUs2FECkYUMY%2BVMiOexU3AbCZLD6UZetL6K3pypNXoqGUUPGAvSvcRVRIrrSuleX3rAYp6ErT3lms872C0o9CfhWTUayd82Ps7UO1IHZlpvnFt7kB5c%2F46kEQYIf79YlGysnTY2RuN42koRiA79qh1Q2SMFbn1LMpi%2Bc36ZPrIaftg%2BeAAWMQGnBsBegmQ9AQGGqFkIr8E1HMbBbmJAzxt%2Fn3S13hEcFUDi9XwO2x16AMlnrZ7s3Df8dVoskxr8I3SoFN6WZUgBRUmguav5L412lbULCTu687GY%2Bz%2Fnws2X73V5eoK0VXT7M5l0gp%2BnMoHrrsJC2Q1I76xSk0QUO25B2hNCGXnACx6lZOe2wlWP%2FsJTlso%2F8fsfhMlrZzUCTWng9YNE7Ieo1LCMSl34NV0W7yUvVFOF0Mo3BKiL7kzX8UM3uPpTs2YHp79ue2HzTjLHKSz%2FROaJq5hFEkAtrQ8DkjnLbRIpJKkAk%2ByBABECUvlcp4eFHELLdvN%2BrG34g8o9AjENhN42%2F9IOUEVX45yjHlSevhBs0dAVQZtg9LdaJA%2Bt2lYAbmCe%2Bpz7v3DTOVBx9LuZOKBBm7ijYv19b4Lp5fzrUKZWfTSdrlk7GyqaMhHuLtVCOUhMLjZiMQGOqUBpKdF4lwrucYvuF8LATaBU88elY3hNs0qOgW%2BXLV0fil8RY%2BydrVYkR29hbvJZNu1sFaXPBTYIN6GNvDHeFdQhf1rQuQLL3ugkIwnNNcZxH3bR7LsteLxVLtfs%2BJ3%2F2k%2FQjDapov40yIQ00wrFXELlyE9ivXejgkiFaoVeIV7WAowy2EIDtksHHSVaEcJK1Nut%2B49g6AXSJPLCmkFlNryZ7GSXo7T&X-Amz-Signature=6c9eca64790d87480855b7deeaefa2ffd1e4e383dfdeb27901dffffaadc3375c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKKHGSI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdiJLFN4tMQVrjgsSAsfvQAiGHMFg1CHACoe1W48ofbQIgREXllMqa9W2JjHEjuXdS4JhPb1VQOmYQedexyDEjs2oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI4N7fMywymfyOculCrcA51KVGiUs2FECkYUMY%2BVMiOexU3AbCZLD6UZetL6K3pypNXoqGUUPGAvSvcRVRIrrSuleX3rAYp6ErT3lms872C0o9CfhWTUayd82Ps7UO1IHZlpvnFt7kB5c%2F46kEQYIf79YlGysnTY2RuN42koRiA79qh1Q2SMFbn1LMpi%2Bc36ZPrIaftg%2BeAAWMQGnBsBegmQ9AQGGqFkIr8E1HMbBbmJAzxt%2Fn3S13hEcFUDi9XwO2x16AMlnrZ7s3Df8dVoskxr8I3SoFN6WZUgBRUmguav5L412lbULCTu687GY%2Bz%2Fnws2X73V5eoK0VXT7M5l0gp%2BnMoHrrsJC2Q1I76xSk0QUO25B2hNCGXnACx6lZOe2wlWP%2FsJTlso%2F8fsfhMlrZzUCTWng9YNE7Ieo1LCMSl34NV0W7yUvVFOF0Mo3BKiL7kzX8UM3uPpTs2YHp79ue2HzTjLHKSz%2FROaJq5hFEkAtrQ8DkjnLbRIpJKkAk%2ByBABECUvlcp4eFHELLdvN%2BrG34g8o9AjENhN42%2F9IOUEVX45yjHlSevhBs0dAVQZtg9LdaJA%2Bt2lYAbmCe%2Bpz7v3DTOVBx9LuZOKBBm7ijYv19b4Lp5fzrUKZWfTSdrlk7GyqaMhHuLtVCOUhMLjZiMQGOqUBpKdF4lwrucYvuF8LATaBU88elY3hNs0qOgW%2BXLV0fil8RY%2BydrVYkR29hbvJZNu1sFaXPBTYIN6GNvDHeFdQhf1rQuQLL3ugkIwnNNcZxH3bR7LsteLxVLtfs%2BJ3%2F2k%2FQjDapov40yIQ00wrFXELlyE9ivXejgkiFaoVeIV7WAowy2EIDtksHHSVaEcJK1Nut%2B49g6AXSJPLCmkFlNryZ7GSXo7T&X-Amz-Signature=980bfe18a2c0ba425d96ddd9a4d564948561c5bfb1e7feba5fbe74aec714f676&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZKKHGSI%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T133103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQCdiJLFN4tMQVrjgsSAsfvQAiGHMFg1CHACoe1W48ofbQIgREXllMqa9W2JjHEjuXdS4JhPb1VQOmYQedexyDEjs2oq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDI4N7fMywymfyOculCrcA51KVGiUs2FECkYUMY%2BVMiOexU3AbCZLD6UZetL6K3pypNXoqGUUPGAvSvcRVRIrrSuleX3rAYp6ErT3lms872C0o9CfhWTUayd82Ps7UO1IHZlpvnFt7kB5c%2F46kEQYIf79YlGysnTY2RuN42koRiA79qh1Q2SMFbn1LMpi%2Bc36ZPrIaftg%2BeAAWMQGnBsBegmQ9AQGGqFkIr8E1HMbBbmJAzxt%2Fn3S13hEcFUDi9XwO2x16AMlnrZ7s3Df8dVoskxr8I3SoFN6WZUgBRUmguav5L412lbULCTu687GY%2Bz%2Fnws2X73V5eoK0VXT7M5l0gp%2BnMoHrrsJC2Q1I76xSk0QUO25B2hNCGXnACx6lZOe2wlWP%2FsJTlso%2F8fsfhMlrZzUCTWng9YNE7Ieo1LCMSl34NV0W7yUvVFOF0Mo3BKiL7kzX8UM3uPpTs2YHp79ue2HzTjLHKSz%2FROaJq5hFEkAtrQ8DkjnLbRIpJKkAk%2ByBABECUvlcp4eFHELLdvN%2BrG34g8o9AjENhN42%2F9IOUEVX45yjHlSevhBs0dAVQZtg9LdaJA%2Bt2lYAbmCe%2Bpz7v3DTOVBx9LuZOKBBm7ijYv19b4Lp5fzrUKZWfTSdrlk7GyqaMhHuLtVCOUhMLjZiMQGOqUBpKdF4lwrucYvuF8LATaBU88elY3hNs0qOgW%2BXLV0fil8RY%2BydrVYkR29hbvJZNu1sFaXPBTYIN6GNvDHeFdQhf1rQuQLL3ugkIwnNNcZxH3bR7LsteLxVLtfs%2BJ3%2F2k%2FQjDapov40yIQ00wrFXELlyE9ivXejgkiFaoVeIV7WAowy2EIDtksHHSVaEcJK1Nut%2B49g6AXSJPLCmkFlNryZ7GSXo7T&X-Amz-Signature=8e053a2a7d914d67176b1b5b6ec08db054237722f9936a1697c65e3314eebe0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
