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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=9481915b7157cf4271c1221081674b91a4b4cd2ecac51301f70a5c2b1ebe4ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=0282f51a2f76d4dac54496847aeeb741c04ce3131075b45739d359bfdbe93b62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=e51611770c5c91813a3007a76dc3e1b6b108b7a0f2bb2490935c69b5a59bd051&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=da9bf4416d4b13fc63c1aede5f4239db59a994411caaf7c6bff76e0c43917d55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=91d5aa7c81ccc3321ec7657cdbc4432d584733e33b1a153ee8420c4a37e2dd0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=c6bb086fa3bcbb6367bd8e0a019e05175ca662329b021e53bd167840cbab7b3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=b91a4af03cbc3c6dcf27885df4eaf41762782ffde6e1d684972a00e29ae3473b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=c82e5b2cd895fb72cba94079ef6d8d00ea83afda81659c00d2c16df5308e5560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=56f8980fe4c843b9f181221a6017e65499f9dd24b01a5bbc077a718a2b01180f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7RAEDJC%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQDb0crSuTz9Gd67Ig%2BVByHW8xbBFF10ZPr%2Bf3RZvl3URgIhAOfMaJjC2vQ0Bp8l5gTVCLzIpLdu43XxoBEZJSJ8cDRcKv8DCEgQABoMNjM3NDIzMTgzODA1Igw67GqKFh%2FaeYsA2Zkq3AOz7b34BjLLZByokNAHZkXJESoiqlsNE80AQLQbBJYYpCDYdibLL2ZgR7Ti9tObht8N1j7dwSn5Z3BDvtatuG7S5PlboG6QNsF2UZHhj%2BD20gI5amB%2BUVONv3CN%2FGayr774vEJC1NlNsAll%2B9Kfb6am9z5et%2BhAA9PX3E8M5R7kAeXOCTRytJLucDsz1SeUrf2h%2Fiz8Cbz2XJR1pTjkYF%2B06r%2Fg2ngijTCXD8c2%2B8Lcb4S%2BnLlrGYGZ%2BELY5cZFCy8%2FySdD8%2BuFlKrkhVIJpY77fx8Y8gWH749Y0UQHrNk4aPaMNwuOrrNcZQ1InoAZRe7hxFsIvPGqlJqi9Q%2FMydU7EUclDVwuGW0huNrMI%2FdsnWilJNqKC%2F1hGL40gMCRjlPyRcgZNAOJ7Qb%2FQT8yAiZqkSDO%2FCn7C9R7O1PbY9Xxvq%2FU9Ff1N3eriQlRyAxq7%2FH7oMrG7ADfnX4oTs7o9t4X54%2FpimU4OVcknOYDSFZeiffdFi0%2BC%2BEw2aapFGtWDa86S6mR4DqGVcYXA0YCnq6MG6K%2BYvUfLkgurfKejJ3g751cXKgj%2FLYUJ7xuoAbg2I6to9tIesmIgvJ1j4laMTa2c6LHeCLuBCP1%2Flezex5tK9%2FumjqWIJOvc2gqPzCpvY7EBjqkAebYLP4JaM87az4YyIMgcImMCMUtVkDMV1EwBDdmj6YQxEPG6XOCYsJ6xxoBcpw8RSWHzFpeQ0tXkgCCQPjmNDoSEN9Uyf4EiGb8TX7p94XeNRzl%2FGPNJxptQCBBk%2BlCLKmSO4O4NKhJIddUnmc0dK5U41NvHgYHg7a9vXECerwMt6miZ2ccPwTc2tkmx0%2FQgaeMlFnRowmLbi5buI03gI6IBOVB&X-Amz-Signature=8245c5c461dd43845fbbe5b12401316e74286e9b8ab19d062ad35ac95c3ec499&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y57WUHF6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQD8k9ok%2FNL%2FeoL9ExkzoQqsSBxKL%2FGllk3mN%2BWEdSlC%2BAIhAJRzoCeuIHxWudr8QSYpwzrS38yL1Hfr0mkYgf0N0WszKv8DCEgQABoMNjM3NDIzMTgzODA1IgxgjvMr8IF%2FwcgPGgEq3ANfp236tUpR5sJNXLNCiQx67XGzvyszuZ%2B8NVMdd%2F6mHQTp8loNdygYWkL9sDQCzB3BZgFoiumNB2wmC0vrjNy%2BTwxvgY7R2PFZgo8R7MdoTfC2faH8Ab0zoYTyMjmd2dmg76nRdG%2BM5PtxU20srvtM8NIQ%2F5hXT9wdzMVn3L1nw%2BQXWCF%2BDXtrneC8hCRFomFsWbv%2FACzLCwynhcRvWD1bjkPR9gnbbxK%2FIh%2FDLwXHyceopjwmtR7ZkgWJdf6P1Er43v3rxkxOK%2BlL7L4eH3kVju2j23xjTO%2FKT915R0dGFAAeDdTqMGha%2Fzs5N%2FufZ2Ihs2Xs0hAx%2BPhQs7iHEA6XA5O01MZoPXq7fFCi1JYCB3BclxZrmmSPR6Yk5CKPzFlatiJo29M02bHWwoKFEcDvcX1h1o4qRZPWp3mbrNbZYyQkwX5xsg84wXs5BLZTF2NlRyblZ%2BzEztGA20CTQBAXDS0Z447uoCndx2mZ3Q8d5piDNGoTc2poR4D3IiJP00HOatv1igs2kVlnK3vja%2BYzF1PiPuR03EpXgbpx6g3QP9SZRV8sB1O8oLkRn30dkO7t1IJ6zVr%2FeD0O%2F%2F1PThYu11sS%2FHmfyeeUUOK97jkW6gL4cj37wNEGx%2FMuWDCIvI7EBjqkAR%2Fx3iFuaRz4yafcrApU08nwFASnFwLGUnHfwMthHW11%2FZoTFqsCOMcG8vLdDlen41VclzO%2FXtoYobtusy0D6Vqxp1RQLnoCTV9U9YFj39phOo3Q46aZOzz%2Fw%2BU%2Bmf9PGj3TplV6o7vYLyRXRxH0XNFOso02B9Io0jDLU%2FgmYQpkAHpZLs6NrKCt67eRFYPMcIuNVYrzv121QKsA119sEhxCsGns&X-Amz-Signature=33b8b32b4114e9a4d4b1840d22036843d1739ff8926bcd2c636a548a708d2bb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=89f2e889fe266cb59da420874cff8bf0f2d506f364bc242af16d2243b8df0588&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=adff37a66988d9afa4d28415940f7783fe92033c1db0835980441a9aa13b4928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=03af562d706838a4cd02720b97a513c737661d4a3a05e4cd08dc51d999b4e2bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=8e319e0f01c73e6186fbe83eb9724718833977dd4ed4100272bd9154f0f23ad9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=c48022c54a6d82b53621afbf4db32043b73e02a21f9a19bf2c696dbec5862173&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=10726df8baebb4ffe2797e2163baaeba8fb0378e17f26b11d424062fd9573537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SGDK7PY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEZwFQZPdtTo2pIcchUuDRhqD04H6dfwydPS%2FH03KMSvAiAZXpZHy6RpR2BT%2FJjF5fI3BwNKtdB%2FWxrUYKumqKc%2F6Sr%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMsvcjYoyJGZ90fNygKtwDfadMsgWbaCfkdeqW0J2bJi3m3cC7cmMFaYtYUVhk4w090pV5zuhlxebOe%2BGCU2SZQzKpdZY0S8mfP6FsioyKA16aHt%2FrzT1%2FFVU5fgSqvS2UjRMGgFCemYh0FtTJZnMiF6iRZEN8hFv1mROyYj9mVn%2BcXcwOAVS1RoduQUo5SsGTWHmXj7fvyVAaGrIoalSRpKu8s51kzOgVMVhOax4nD7REb1EP30M4hxX0xSWnORPby7OD86FOKvt4MACIdgxxtNoAEmdC%2FZ0%2B75PflgvPSJdp5we4Ra7Lo%2FECxUScESk08U%2FxJ20EuB0Gm3XVR6g8gKeE6DfM%2BUEYTkY4szn3aGozV%2BVeLwlqTunMlwVMDu2ZJjiRFCeqHeXsmCoXCsictTwLwrdwTjBX1dkadu5rqyfm%2FgyruAzc5VXVogsefvO2moJVwgsgpdUZc6ncao%2BjBfWmUik3rf%2FacXF%2FoJq7Evg1%2BfGWFTGsdyH5zjAPzPl6ejWh0Gg7wg7VoqbMjOaKxjJoWvMrhz8sC8qfa8EgkUUI934ZA1CrnGkuFYfdHtbKd99mLssU3jRJambjBrg9XxVn0SvdyVfqUssuHN%2Fqy003%2B54tsEqN0TvYVxQFnPRv%2B3EQdzd%2B2pwquS0wtryOxAY6pgGq32ahMW9t8jpz5TgnW0uDSyVHu2Gr2FUBPVz6zD9gJJYw0IUq0Qy3QZDVHa6%2Bnhqn2B3koy0oUJU5iA7vVglqOF1Lhk9LtpbGOsGmqcy%2BalvnTVT4NMUZY%2BkMB5P0EJU9OmGGtSoIXrVyAqh%2BSdYU2Ar%2F2TXNls%2FNstB%2FmZgZ%2FmtTMDxXRlvUNKxYSrWEurG%2B7qNR8QuBja8AvxlIVrZv2JxUdQNI&X-Amz-Signature=56827208fd6cd9d880ef33f7aeca82e805ae1d30c6f29d175491c2051c686c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
