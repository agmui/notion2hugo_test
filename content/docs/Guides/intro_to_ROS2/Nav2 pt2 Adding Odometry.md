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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=cf28cb9bdb7e9ccf2373913a7c1a5f8d05b056719b6180a319729bd8a7901805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=ad94dd340bdf88b55eaf4831a35db47370bdca8919ec1d003e19497abbd0081e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=a19e6d9c70a3368bc97de11aef4d16acf0f1f1cf8b6a4679a8fc7ee5d016fddf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=3952cb347cf1421e63a85aed0f99fe2d89bbfd09fa3962bb684a47c81aeea8a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=89353d470fcd1c766d0883d57ee27073443b48e6292db73f1077f00b70511b9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=622a4c70604a7331e800d99e2cba641690b32db95eb2c12f4c177214d30942a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=ffc52331a36883ec6821f716d0f51ecdf8aac25b0a801d10edb8aef9701f29fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=2b823c124b4f43326dc05bfc603324447e2bfea2bbd23460478e98efdd042987&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=c9f63d1fef298b63adcca2eaf51df2163b0bc3b831ce8c0857f1155367dfb66e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CG5TJYL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBJBkzg9CZcz2tLIep1J2g04b1Ouj7p2WINpFQGUDAnaAiEA0wTJzukXWLNy38yojHA0Ta8H6DJCJK2X4EVbkD9PHRYqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK79fIB7GX6%2Fc7RfByrcAwEqdYuk%2BWz9r1y7TplsE2CY8%2BshsMkOLrNIwG4cowN%2FpVmed6lzs3jNE6hcn%2B6GSzswVlMmV0Ikwy4lY0Z1q%2FRy1gSKMZX%2B6SRD9fP2jGtyPKETHTez2ZkUW48HconQBHfuVPqL2RxCtmbFRTW%2FgjPHhUsKjzAIEZvUOuUvS7GMKBPcQhFUHKRyyJBFho3BlMvDmMWrt1iyIaOc7VOIbvOWaZaBvrqFvi%2BQVX9iysN2FY5hXWsBEGST2QGz%2F0cAPvpcMJQs7JzDrxLgMQILYr%2BZlTu045tBpc3QDM2Mz75Jfppm%2FQFI6X0JqhRTCnm%2FnHZHD%2Fd%2FJnNk9ZelGJPXUIz8eUSdebAUwU%2FAPiny06pvZcz2XLvfu5zqfXqTLElJBlwsTVp1FXbfbA0KcRA4%2BD8GLvM0jpBfRCPZHQK4jbroIaTeMQ38YBgO7qKXQLiMlw2PXlMB55uQoQ7c1Uc5xO1%2BRd4eEBYat1B8RLAn9SET3O1zQUrR8q8%2BB9Jh%2FzcXF5y0X6kZ8omLFD5yBpHDVSsj36KvgSUZukdrjhY34xg75wRsmAWQcNVDUX41iYeQTI%2B68K6yhEQS28oKtw02C7TrdSlE5uiqjtlPL7Seh%2B8qsQuBhT7Dptsy5hI3MOmKs8QGOqUBuViqcW4t9fiaNL6NP8XN1wst4YcGAtDIhTfl2DlbUJUdRxmb5JAsvGVqeg2w2sDynn7XltbFocmXVO8UFVTGBgBVy8XtFn4Vrr7WxJ1E72GXN1clTxQ0KlChxbwi5sjFI9zNHzqSE0W0Vg6ct%2FvIvjkJtXHkDE7xeOW93Ry7ZM7HnNzTaIzAKoJY9bWoMUn8qQq6yCxU6CVVETzHDFcHLUlt1%2FsN&X-Amz-Signature=d316766ec86e1ef573e7e3148a1c7b51811374af99f63c8bee73f95733384757&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665NKFUME%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAcBLWjnhJ6oHkOp3mIqdi%2F5ITexLhXoc0AYze2CHvf2AiB9rzhOAApWguEGQC9LAZt0MCT%2FPFUMSOhVqxTjkQteFCqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo9AAnGGNERz6DPdDKtwDTHRD7%2F8U79Hhwwwy4fWtrBfmtEIXymp1%2Fy00ttFBPZpCgPNwyi0CIX8QcKsGG7zXKfrnqBHeMIikXgput8me9P%2Bha7y5g2RTtIvu21Xvjw2mYq4uW%2FF%2FBt%2FRLGeUX61xlBlN4Q4WeYsNcg6HW57InBJKQlyBGKVLHC3Qx8np55%2FYglnNOdD%2BSJkAAArnM4sF0w0%2F%2Fx2j1xzociudTiJUcCWDGVF3iJLEZcOvpn%2FpupwW0lLVGWTiLhciwYhWekAAhpO184nlteZQsOajkpy7qtTmnbTSEMqVjy%2FDGoyfNQMND3%2B31zBCo03%2B7Y6nHbPytaLSt%2F%2FUarlt%2B3KZr%2FnK5D3VwHNVHZDoZ2051j%2FkJUclnkefq7aC%2BYPTiqFcO25sAwzN8IjogW8Cw3aPQ02OTm8yRMWbhpuZElvMAY4Z%2BYbrbIe%2B9WkEpC34QuiZlVartB5a4XQI5VVnaxsOIrAESMTFFP3Qx1Z%2Bkk8pniSrg0b2%2FUixJoEPDtMEWc86mYy3wwD16ZI5xMFcrpqmHOBz46O3xCKZyfWCUesB4KUTxKTJlQDVdVR%2ByoB4XPrpM1nc2oPTbal3lp0fJAdWL73JHhsDbM%2B8KLgTTm89zk3fo8XIjTXZO2sUyQDhBnQwwImzxAY6pgHTN0qAxMkBzuqtkkiIDLcGlzSjYlXh569XRcuGFpjxJTuq2sV%2FtcV7MQYJ%2BBzBqHDKkaq0sT6cdTYdFbdE6Wbdw1mfHiz9Dl5U4EEKHuzIlbsWIkKW2GAuVybCO31037jxPBtL%2FKYbm2N3LSblqfn6DrCB080UPz5EHCry8gy5x155hv0QyZqxIphazaDNuQYO0iOIeFX29VPPkxXt%2B0dSJYcN%2FUrd&X-Amz-Signature=9c9149da550179fabcafe79b03bce16936e69cde00d715a01832f17cbbd6384c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=ef88d37fc7c1e14fe351dac8c060bcff77e6211ebb329c85c230579367d84fa5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=fd28725b60708f67fa5a0b9cc373d2920114a56b8b12455fd3b9b57c04644e40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=9b98514d78f98fa76a09700eaf0946274e7e2074e694b3333bb3677bf5159741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=15ab42b6f6aaf73e105c28264703e77fd559243b9961393772330cf88dee19b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=0da1c4840db3daae76a9dc109e48e3113901853ca6481128525154c73cbfeadc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=bf2b36704e322fb4b5459e27d1ef03788e82da77aece1ab8af4d3f8dad2fa945&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=4dd56af39f3093f93d2b61ac4a1d077041f5c8c17ab0665b5fb6a16785967756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DY35CVV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T141242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB5Vb%2FonPuFfgHQ2OQzJn9qu2KeOR5%2FApojNyO2sfTS0AiBdEgSEe90agI0YkcCYYrk%2FHEXzrs5u9rBgX4SvdBqDEiqIBAjv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtP4bjoR75OnEgfArKtwDx2zkk95I2A9F4pHBLNPw%2FAGBaatnbXmrDB2qMOGDRjXLLjdJmmeqUiZ%2BO1jJdwp07mM7QNDoRs7qgMaquy4cIXthsOjdAty9WslsKEiAWJKLTeXsfy06enC5%2Bn8O4%2FV1hb3XBTr7aU09igHj4Ewi18bLRcOI%2FMMI0HuUj6LYaoyPKIG34TXUXkwhFuiOF6%2FKO4%2B3OZYIT%2FmkRRZ6CwOMRkkQ%2Bt1UzDdRZc9%2FfpINlSGg3XnDRuTMtc3tHOd7sb1rOooSHlLZoMeOwqvFNso2zDXfTnoWiB6RSOXYUyW49AzvfLXKb55deAhG9ARUzYwsejRY8%2BsnZ2pRE2dA1LgrZlQ1juJxdcK%2Bd6XLLBCj6MD72skh8UtwdHWZveUtgY%2F1WluF%2BLc6JjVpG%2FCjOpul29aTFhh1LnqQTnFZYmemTZ9DgJIAdOHBZD2aW%2F4S5Z8YZL66Vn%2FYpkcifVN6xeaCdxTjtUulEV6sbL3bBagpqfjlD23x04bmGeujMBMdqvTqcdFWJWUymlkoNizPGleDrdCsjcqw3Fm1Xq8%2FaKIbrE9gFceWXy8wX4z7XNjqWw%2FvpmjWGciD6qPChdBpjpoeRoUMlBWuijyL8D95SHMgFQGPEvWhDVnIZB2TF8MwvomzxAY6pgHOo3UP9G4jfKDj%2BILf3Gs11HI7LziK5rDKSq1wmbO3ZaXdaUTsfoY7vnvtGan1DLaHgDLDrdduIzut4rbnES3hLUfwVymmSdh%2BayI252ATbYVXPoI4kQ5p8QOFHvO747nfEBMSFHHgug9%2BlLF7duRApI6IPq8eV6ezrLamKDF83n8cAd9f1Gtf1XAsdjhaCtKQHBefPkxdZiv%2FCCqVxlD2r1nMGU2i&X-Amz-Signature=9a56deb402a2b0a9801a6d251682606b3514ae29aeda13f7f66cc62667bac7a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
