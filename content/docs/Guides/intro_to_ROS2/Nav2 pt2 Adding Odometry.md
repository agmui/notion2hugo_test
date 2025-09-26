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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=d40ed00a1c5c62afc5119ae85f9628eb2152fee393d46251e8999284d941527e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=4afe49e1d5a2bedd70dbf03cfb1e68ea94b13af9a51b41419701c93c16a6ffd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=56ce5ca621de8b4c6cf9c349a6f66c9e52c4c57bf353eea62cb21c2f10b3f458&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=eaa76bd59fde90fb4b32d8204b76846aa53eef786ad245756f40d945787510e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=d28be52da549d96ee5439f6a5ec4f9ed4160744a3abfa8f45fd4d0b1fb1884a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=ebad4bd49c2dc74c126aab2d2b24f85451db6eb4e62af173e7b3a3eeb9499ee8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=00c5650b033e97887e8089faa93cf3b37624b3f4a3b29948ae6eb25cb3a26e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=c1a72611d40e8ead76a7fae80be8b25c52450d8d32c80dcb555d1961a7a44b33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=7debb4315fbc06dd7cdf93b510e1649176741ed009df6ff7684acbbbfe968890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEWVIGDW%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGc03x5K0x%2BVUnL7OnZS2yvCQwpsdGi%2FAjMqpu64C2FgAiEAkK1NTsxz3F%2FIoWVUTQo59%2BdoeWwcgNi4Se4AVLwqkHEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOJOj5Z4vtgxyRc8kircAzYeWBeu3TNBu0duJ2PN83D%2FqGDrUDx7WtRgICNGtfNvq8Gbl90Zv%2BHGGYyikrfBDU22SbW93EoN0VXUSBoCRezgzxBYZ74Vzf4keNNZWroFTXibnfxiSb7Fth%2FxXAZeTLhVWIYk5gF4TlQaI2lHXe4clWwk0hrRveC%2BJVnuuZx%2BGZ1Wa8gA34831gKnwFUf%2FDiZdaY0f%2BFBG7PUnorcPXXz81HiT%2FlG8cO7WkUfTHEyxFQdFObFCftM5YXJPdV5jq5reU7aXsB5dCQGm4rbo2DZMoWBCMTAPJHnlev%2BKVVnFL4R71E4eiUzpmn3T2AABhhGBYvd5srtYJtGW413BlaKvo035slgf%2FDx6ClkDB4c2SunYlbtqK%2F356i0l%2BsYgoi7v9kCqfatxfDjFdcnHsDAIk39Wl9w5AshgW5xoZM7lGgRadQ%2FXx4oWFG3bEU82nBmj9P43FDMxA59KBNMzPNWhMSJEO451%2FGDsdFuK%2BY9ZtedWv2kc1pHSqdPXxoau0fE40ZBo8C8EIdQ2jJdDEBcHDCx6hQmsP%2BI3Ul2hG3%2Br466a0wyPqJHidxl9lqmohdr7LDLghtvCTrdnsKI44SOMQbbTHadXoPGXgdAe87XupyAKUTIksI1vD0SMJCo18YGOqUBx0uNHcu%2BN5EUiRb5dHKxnsAvcyTluGrUrandXVYTZZb4MW%2FmEe62cKXYS81fAesR4L1VCpemgBIPr3WIP5tUh45baKEUFXcpJ63cYyy%2FGur8q2QcUrLJQPxLWOGm5sreyTiIGaDzdvUolBv7oYAHxvYzo8L%2BnGHyezrRne0bvt7IJgkaUOb8upN8mjTWcT3YVIAc7jYqSLS3fuqcoWly94rP92J%2F&X-Amz-Signature=6e54b66c44d0e42f2528b62482c3464829a3173f6564fb29a7369bacc8b6e784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EEYI24B%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYCP%2FP3phFvGufQ7qYAJcrplVl5RM0AGisz%2Fpk1aC7ewIhAM0Gcpm6KZbCnaFtMJZHNtLxt%2FyXpjZfWPrW5OWWjJ17KogECIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt6lJ6tTb4p8ZA6%2BYq3AO2ero7yhINhsFYKHbrUFjogi1aPwe4Ey4F5g4ip8Stfs26%2F0IJ3olsaqC5B2a%2BLjGYSnq3Qr4JTkbIs5s7U6RHBqox4xpI803o7sgBy%2BkfBdnGvA6%2FdfxA62cWvwHO6FMjNhvf%2FiCfOajALydy7eWbFhF6%2FX%2Ff3R52T%2B0rUlrErZ0suFeHdcFeZ6FiuWN2FRblI%2B8jwpk66fwj9kBD%2F51lfdaL52rSLcNC2usjvr94B3Li971N4UIdcAmEZa8b52hYWl81ECgpWTahTWGjijTF0nQPo0yNZ0VYftTWIByOJhkD%2BDX8P%2FUZtqOrhE6u0hYLMOpD7esPInUQzojty%2BRoHFguk%2BFyhvL%2FTP6iljjF0z%2FW6POAVsaVa7hyUZzKdRF0UnJHWBwhVBjYd%2BEJE6JNhMJtIeb8%2Fpel%2BB3jn%2B1ZHzj2AKWQ3H3qpoHTEz2HSfGRfRiAYLQdWVz01XbLTRalVMZx5DKKhFe0HCzMBLrW3yW8WndSKm9WnYTT%2BMA7rJED7gGfUf77YSxiujE0iLxNZHX%2Bua%2Bx1cZqTfcXLqDZj6ou2DSTw9zVYAt%2FDVHWnJBRJJMoEvQqqFcAmR7EmIcxi9cPPK%2BlCYjYe0OQG%2Bcg5VOC%2Ba8OifH%2FwPatxjCP1dfGBjqkAT5LlMpJQPQIkoZ54d5jxbut9rk19JUiCnnlIITZ93xGnqdSH7s%2BVbQXy98H1B%2BbVG7ZbuxoI5ty9zBndN%2BD23oWL9O0pKKlyOOspXoHWHEB7qHbxFzYZcSF4b%2B7bfbq6tQ%2FvsqS1GBK4lWSAmE99KDcfXHDm2KnL6bqNxFoUW8vvYMRv%2Bvka8e8t0LDxfZSq6%2BNDImz52xuiCZPFDdlrFmGem13&X-Amz-Signature=6a8e1c45c669416a2073691ba369ce1a23dde7554b44ae562b22e5fd329343f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=ea3ab479d02ae394743bb80e2baca9ef7df6f1b6de18960d105c5d34ff5351de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=4d3350ae1734aa1850bef50dd5c1cbb7f20eba4a467d519b48b28af539dfebb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=644b2a8ceff6a1718041acbdd32e9ed451aa7178aa24cb9f570b40bcb781a051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=53626b1fb4c3c8e8e6134c74ef973900aaa3474df87532f7e15ef881ce92ae90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=14901ecc7900f6ceee60adc0887674c119051d6493a19b1f908d012cd615be3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=43cbede3cd4ae2e53e7cf1afb4ac0a3c2e6d1d18b2a5305b5d9dcd67caa69487&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=9b60232eb5f3e0a8f9f2a5889d2867c565d7b5f9e9c8f94c4d0f22d627653706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=955111f9e36dd798576691aab3655512a38c94be486f54a004a025a20d2a8d9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L3I2UWT%2F20250926%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250926T012355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXaSUiDdOd3ogLoi6VOPTSJ8Gye9Z%2BuIZGIhR%2FK4RxFgIhAN5SberbGPFYwl0KHURXU3cXwWyQRzeT9lUg6OkWg%2FSCKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwROR9pWeNzrosyUiYq3AP8MBXWHEElC0G07ww3MEAPa0rGOIcYAvOnKc42RhHjmWjcFNiknNvSgx7zLLPmEZmmZrUj4f6OIVHEV6NRhr9AEppGIsYY9WA3PB4g%2Foehi7YUoaWBIa8Z9n0k7e2XFWgAOQgecEKnTnaSH%2FkHuaNopIcNSczboTAXBlcf5TWf1TcBDbgKhHJ1XcoI0Bs9B7CfL7xEjb9p%2FrgNzjZ749aLWwIel4UoE37AID3VQN4Zsy0kHdI0BgfFhqlVyQr1PuM%2FkwAfz46s16wuYWr8FR9DxzBFmySDkopmA0K5sNNIpkLKeyxQb1zlZa2BQfUD5G7KqWEgznjzVw3bngWEIOaCxUIMVVJmaBSSiqOZOpeFTTIDxdoLW4ehR6TKjCz6HCmh5v2kKive1wCVAm4ENOAVeGClIIaPMpFb5iT0ciKibq1%2FQWJX%2FXADbtx4ugOOXVcEODp6CTnESrPq4BLxQBkW6c4w3Z2n4fEJO4W49QmJnDJckNLq2D%2FhEjbFGNNJKVAdV4wsG1yeUXV2kCTom%2FRdc8CvP%2Fz0griXgIuPykmrn61OknJr9EXoIvFMjxY1hI2YK4aaUghkSpEB9Wq5t%2B%2FynfXuBup6Nxfsb1MChmpnEJaNdMH0MZUCEbZMEDCcqNfGBjqkAZwNrgPZAK7%2Fi4MHA2V47UYwDQM6FUPTbMxmBYLSJGO4EfP0aERdXfMlNftonZZAO%2FmmyZVsevLejCyaR494FRXcvQ0h6unWH%2Fq%2Fu4IqvVhazj8cadCOuGhOpjXaNcZ%2FlhY1ZX1XZSwZ4LrhtWlBLYqKieT0FmM7%2F2VqsOCqfIIWQ%2BzubijYT%2BCCly%2FJqWOOQCkH3Ifgd8LRQ5JWq5elZh15kFXj&X-Amz-Signature=ab92462712e18b6be93248b8136d6b220edec734623d2278af0470a12237150b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
