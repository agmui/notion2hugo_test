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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=7ddfaff8c2627841fa07e48eb15d7b470804995e256db20fd219abaed98d4958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=cee443d796c61e22e2f257ae459f4d2fded5109e36543618b51351b76bdf6ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=c52ee641e3a522f0f856ac3d1a8c910dc36203f687df366511f3a5dbae9e6da0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=4a8f77fe7620066bee47d120e060b9de017313084bd9f2502f172b0056a611a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=125d0355f36fd78f278e013dda0e794d810f123aa1c7e6e012f43edd80b0f18b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=92e7c8542bf8b71553f0527ff46c94465466e109ebbae87d799970cd0d799dcf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=f4950173f760f15738e4c62ed51d27b16b41aafe6b88a5e16688053d14dd65a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=a4e4eeca781b662a6909305315f0941890674f4684b1b2165b1a62ad0a7b71b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=53435bf8c8ab9d729e0c0252d590bce2ed54f97c5a06e98b923740d94bd2dfd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCEHFPMM%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE2FMYlQi9OySEgPrnXdwjEhxJwj%2F4UwcwYuR1FKMk8XAiEA1ogmnL9dR83YtZNf%2FYmdpoEcTPstahjb%2BnQv1UrlWfgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBfC%2BbJucm331hCZ8yrcA6Z1hmshp6yfvG5IODMhuRjj97Xgr5Pmk85UFJ6XNYTdSH1FgU8wFtWvEW%2FmP38r%2FnPi%2BhcsR6D3YGiWIVKON077vGoUXvKNhX3qtm36dhz1ZMBJqjibsfp7hP863kMR32gkaeyoS450YhfO%2Balv2F%2FsmwsjDvapHZWO9UluLMJFKLZDhQLcMuro2xevCIPcLb1OpVWOZVx8%2FvLnJXOgIyL37UARfoApS8HLCkEegfG4JrHVwh725BTa5PUu3eYV40bKtkZeSIxxhWanuvWgceUXgUS1rQMv1Jp%2ByPd9f6Y7zexAF%2FD%2BOnrztVGzhazlVAAoqGVzXZMDeNbeUOCqQMQykOLfb6xg2493t8K3DejxNWFfFbc%2BiqK7exO0%2BffNsIEDUinkvYzThJU5HpKfLJZZcA1g%2F0CQ11pxTaC0hMgB5CziPhRbm5nh0r1Jyma7K%2FfrBm3Qj61%2BBstrB7KZfqRZbL7og5Rxt4wcraKX6EFoVx1VeJGlV9bYcFIxPq972jMfTTZb47%2B6c9qqiWmywxmyszcIUu77XFMCPmym8537l%2B%2FEspClLKM2%2F4q3o3vKp3vx3iFV6O3UD3LDIodaJ7B7vl9TRxar5DqxB936MT1bpx6URHBuR10ho8etMOvvp8QGOqUBfWrKasvuqGpFWc%2BUIYbJkrgRxKjGNRjXOhDveZCsF9pN%2BoZWAvy1Q8TT2LCn%2Fxa5%2B%2FVwFqA7qeKoyecJt0jgwaAUVaHrG%2B9MiveplaoQnlVkYSImnlVAuP2mJTdTJFVl6MyZVQA%2FdDuBv29Zv9koX09%2FV7Q4QgHjluKLd8JfCLLM7QVuZNaQ987dJJoz4MFtCQR2qz%2BCIu8ClrucrB3eoQGGpujQ&X-Amz-Signature=a8f1d39861cdff4bb51def6f385d6a8f254bb0ddf7baa24a9b0fafc7ef456f8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGUU3XDE%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3H1HrgsFQIHEOxTkNWZFCbV%2BKgw3xUrHJQsSv0WXidwIhAKDZa%2BzHkcYGuQQaOYSHwnawYYi81%2BgtCLZuIKYn3LT6KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzlWLH5R7aPgi1Ek7kq3AOd9IR%2FzrlvThiVEShahOn2i1ZrHBb5CD7IVQfyk%2BJ4SiviARyVFYV2P7AYsO6Zs1CAfwgCvqg6wACigU6CvauBLo%2FpVoJ8aTxb0bf6eOOWhnlGPlkp%2FeKzHVFZf%2FDKdThIKsl55Cy7hXHd9Belm9ip6ugEm5SkFKKBKBNuYuDU6l8FwAdfXkfzqTlOyb61dsRqhF%2FimNefwlunfXLrR7oKwqsuGdpGRtmyN0ntOE4wGoZ3t7m7aQOBrtyYfN%2B2COoNq5X4tSa0x7vWJ8aXFQcU538cOvAvOJpnJSGsfAQY1MbCJpsGujNbkam3DsdWTDgnl0EN74T7vMlf3JEXJb%2Bkqz5jVAQ03Y%2BXPCi3D9%2FYLd7ax7JDp6zRLR4YPcW9FNqGMJmXkr6iHJmsM1iVJ07jtoUUYyNmY%2Bx1hjGbWxZHRKt6gix0JzFVlgE4ADaUJrScgXERebjWhhz%2B4NjTy%2FXozqXNPrt1PnCGqpauc2IQ9K3uIrS4Ou31BZf49CkD7hFVRlGbKD7MLiFrhJRU9MeLRN42umpVz1uoPHD7eHJJ7fcEVabx9KM%2Frcq4W%2BbiisheTCyrBYD%2Fcy7HD44viD5Bj2XF2iOntY1HrUDLmiE6j4bc0N9H3J76bSoMAzDq76fEBjqkAexIvSiHj1hJCOo%2B%2FB60VOjQpn1n1cSwUaPDA2NKLrk2tfW39KJsXZLVWmTb9ckFddWUlyqdk0Gb5f62I5Gdsu9cBemfvk%2FVDOEi6tUPdtEMX%2BW%2BGnqaXOaLO2lvwPMZaJBRDk0Oi8pxd94hzyO4hUVR4HJTS9ozJJKDLxz2QSzOqCwOPMPyQRkELFxSD1%2BU%2FmWKVHDmaf9qsPWPOCjItP8ZfU5O&X-Amz-Signature=23fb7d9a694ac377ca8d422b85052544edbb0b9e80299d7fbc75495e530ac0a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=6618404e516b800125b7843c109b2d57df88a1f7fc8be34d60fee01e0fe4427c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=3aca075d475b4e39f87eb9c68e63c57ce3b94c72859504ed3ad3150915f4717f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=eeb9b77556c6a799c130021e9572c3851ab5b99d6a8915697b2afc1d93226ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=df1976a974f202bb16cca421dd97cc68c0cfd5896ce2c784c0356af546156b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=b41594f5f92a9dc91c71a131e8e7ff76a8086d2fe1524bcce127c16cd292f559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=9ac43eebc7e7bfa43c55a8554f28a7e6f6a5fd9dc5e442a0052091316957a6d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=4e39119fecc5a21ef7c4d069bd2859e84087e6d199a5517788281b45d415cd25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654II2EJB%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T110857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCkY%2BG0DwPku33sjIntSTF%2BBzHcr2AtfS%2F2NsBneo%2FhvwIgMHMqbpyqlhr0LHNACHPaC8%2BPmHTz4UGAvxhc3Y%2FJQuAqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK9aMQeuVL0sx72BZircA4O%2F6jzkC%2BXXUUs%2B4xaySieg%2B29hG7u7gV%2BBbf%2FYpyusee0ilCfRnYTn%2BAx2OAPraf2ZR182WTS10P20nbJpdwCPmDBcMUdn9r8rlbYxerrNDVGBC20q1E98Fg1%2F%2FAvRDtaMwIn%2B9q4jcaOotwij2hW2%2Fd1a2aehAZUWCD5QNCauDRnNPnWHlnJzbjkvBJ%2Bo%2FQ2WUBQGravjSMtOxqIoHFPThNwuadxT64kW%2By7komWexE4C3d3Bwf9VfbVqIbdGlCoTzinjl5w7qUHBFwy5oeQ1EUtOTq2TJI7PJ7CEJq5ZfPCKIy8E4N6tHeWwJN7GHPD540KFxOkUR3eBL3gcxzZmyIcUygh6DfqYbTqEo98HWeDXm0KF6PWdIswnf%2BJ5C5v%2BhCcF1FG%2FoiPC5jVcwRWMI5QmIZf23w933BZi3Qy0qNwygV9EZCeEx24otolyAI5%2FNa0STu1%2FkbLAGNxiSnKlbBUn4chDjvkxxyLLMPIryM5stNIGzU9DMinz4QuidOJtVHDTLA8jnKnLCnvmAUcuC61h10GZVe5ok%2B8HYL4KAZhXrbVXHICFVXlIPyxmDTdasdoGmrqFwwfQDOROlyc6d8PCK9ijnyGNp7hNW7zNVkr98p9mrDsjmPRiMJXwp8QGOqUBmaA2Va2BHxzwJz32RIsZOGpSsBN%2Ffph46bJON87AP6%2Byj4lzXF82PGlf8gDl6%2Bh0hJOXJQFPxnJ%2BW0c1SZtlvwE1cE0ZvjAQUiw%2FyUt57plURgRbeohBjpmAbiTmDU68nPPiWjGzml2sxMMeAIKnnIAqoB2q3zfLA%2BqpwfU7Lwp7yVTtZwA8M1%2BBtuEJdOiEVuWyqZCZzA7RAsr3bv%2BVdAVEnrsF&X-Amz-Signature=163adcf0fc0505693f7a347d25fb4437e15c926ee1725db87ccb7ac6e8e437f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
