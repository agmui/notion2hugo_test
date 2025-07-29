---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=a6b93c8460acacfbb32b981430ab1820850f77b11a0b7bb56799ed807bdf3641&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=56c7b2b9c35c35fb0d025d0e29014c89d838403b66180c94d072569fbaa4e8e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=c2dd6a086840197c517e260218882c2ab22b571a73bc5d49a6268eab46ca7f8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=7cbd4adaac4f29cb8819197b6e2bc6223122345667285f343c265dcd51c4369d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=f969f8a1804bdaced4ca470c208c33f903f5a4baefa69ca4d292bddb285b8c7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=5b41869d9e84f09e73888be75b2ae06aa0bd4a8d8cfb4827429600fe0e32d482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=5b19560ce45039a8374ca98bfdf2d9a8f7d0249d6e3475bf29e002eb97915af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=987a4808da72cc2170f9a087b89fa77fee511ddf08f9f2ce7d4353c40015e135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=c8aa07177ef3b5aa606d75fa33cc83ab7c4eb1e3854c495d96419b3e40a67061&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7A2WQD6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIETv3xkZGyUbvx66M8eMDjCCVgAk%2Ftwm7WyYGSTPB6%2FrAiA4pGRKxaRnJFfjhjYsGjOoMf3VlRt2NQs0bDrI3qfyyyqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMYRSQ%2FwipNr0WwkAfKtwDRq1rp7veSrExOVK0ns4fTLNWCSvlt5hnbkMuhLVYKEQcg8d4DYA%2FwxzrC7OpydHR%2BIj7PoITN7d1mGqxcbHv%2F18%2BuS1jf2YTg7Vhdb1Vl6kGHRnknb3Dgzx8mIiY66VNktLBZgxaRO5%2FA2yLQf2ZIWLdILeXomXZPQcAHBvIk0NVVuE%2FD4Yu2rGAyORRVZNaE2hCvz9BPyG1hF7CiP5%2BDAZUpUwpWYaq4NLn%2Fi%2F8aOP7aBb0SxfQlwy%2FwQdRGKOtmQU4HU3cC%2BrafgCCgFZUrJfd0uoLyhn4XYxCTUG%2BOteDrtO051xyqi%2BpJIgZKfiuU%2FilSKR0450uEs%2BS6ndQQJ817eufwvc%2BEIaHgVwCB7d5BvF5NeFwh9FqQu5dT%2FlgvUZy%2FU5%2BO2eGgv9VwtU4cQJnThcYYyoBm%2Bdr64udHivl5chX6pcpTu0t9rVKD%2FE%2BjGqQ6M%2FApzOInbfdCxeZVYr8fmO6sqWaNRy065gMk%2FUVpJnsOe708kGoo%2F2fZkCfk4tqazbeuP9Vbka1HlRO9AwVFHYxLEIYLFaFA2M0LZQsjIWt2pF%2FviwsnhYTfFmLrrENJ%2Bc5icRgJJBPXwDWgcDN6aiXvaWH5QS4MuwGg9neYnfpryH5SZZOX0EwuP6jxAY6pgHiUD99VAUKgf7uetvIWsRRWtxk8aCB%2F5nx4cqenozDZmNf5JGDSCrPIFQVimJN38xOYnezebqRiXbT%2FPltTfhPjODaZeI8EhsWogPduoj9M8R0Y8apZR9pR4DgwvRKe6b2%2B7Npp8HSwNmerMGKriiXh51tsrhfLJRxcWEEPYjr%2BQLNvefe3cb69QKHaxsd%2B1zuwbE2pnOL25Rwmig4SzW8qYiEgJ2e&X-Amz-Signature=d2e1b6a53f20cb2627f1946321000b87427ba1c4c68068e01aceb6b2239978a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GRPRXKO%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1CS3qIqZfCoSfKPnlaspPyXHFccuvuZWTBL%2FQKR99KwIhALk6wE2qun%2FVFZNOJkolpFPZ%2FaTIlyUuQKxGlCkalbNfKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxMIoBF1gTZItUJWEIq3AOLTOWBAoG0pQnqUKBeVi%2FerbdhB%2Fc7UEeDutZFupzxEsOMBl7RAnPp0mR5nKvgdLpfRwDWVsOTR5TdVt13P3%2FwBxaSmWbQ5JyuK7%2F4Gs5qOcQi5b%2BCf2BlXJPyYD7FoDVafsqh%2Bfa6%2BoDGRceYji9Qkz9%2BIbpdwSBGOcU%2B4dzIOBcat79MHDFUPNvHHVfzIGlF8gIFg2UDGQduoGtBQ9EsDN4ObQsPWJMyi8lCoGnP5oNa%2BVENPOonAK%2BeUqQeLLTHSEdR2iuaRB1%2F3xkGgh9RA%2Bsv8yZGWelykgzTEjfe1fON5gugMolKQ8VIfRMYubdkzCz9ZK9%2BV0l91yNkkom1NsZ8GwZj3GqX%2Bwt%2B0AxKpxkE7od6Kcdl9x6o%2BmiVigOaWeHPcpbmb6X1AGlfB551MmNLLXtMTBo6l0enx66rXMOQlCNGAcY8VW9AveXr1nUuz0cmtRh3PsahhDBBKrmFiJ0Ab69ILGIlVmMkdsHKSaY96E0HKkcdCiN1Mh1c7e%2BQ%2Bq0DrncJn45PzOHIQhROBMTYTx34kXl7QH3CglIPTEk7O2lvfWpomBoF31Z%2BizVxetfU3B0l%2Fk5d%2F9lmAzW7LBl8qLPP2srslEPA%2Fxl14iP7z05BmONHVypMAzCp%2FqPEBjqkAZSEnhKPTDoj%2Fg48ZIwVT0pHmaidSIGY8sC7HIh9h7ZqCLmb4bWaAtVM67dVMqxD4nC7FpKlU5BHNHHNie4IkhX5441EayJIJ%2FtgH7E4pJG4oaXLI3LN%2F5U5Xbi%2FsQzIofkAgSzDl%2F0%2BcSKtAgxG8ahuKvxFd3Qw2y%2BiMZYPuLUq670Mv8gns7lt%2FMkajJhW5K5ODgaWCjdMrdNy%2FGHxHnxyU03U&X-Amz-Signature=b1b66bb4d915257604e318410e5d87d402a7c0363f6766a6b1cb2b13b8a0d0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=536b87e6a45ec58b919fe1fb2d46d54bd7457f3b0992508e1973abd30f2e5b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=32152cacbc3414e7a6d9add2ecd9705e9512391963a428e1ade1f0fd3e81ca50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=e083b927357a9566c3acac9e80e163f7dd42ca6480aa1f339f6913c73815209e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=bbd863e6bd157f762b2bb3330e00d690b225daae6740d6e8aa01a5008a9fc9ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=0d6a185c0cedf9499a20ead7c7943677f3bfea49483e4b8dba0d4f9b7fe1bdbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=8eb988b7b087fc3a157c628c3282c6d3722cbcfbdc0befd4d86c0cb8bd5756cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=dadea08a9cd1d65304be08f4fe3505e48d916763e4fa63734cdb84bc50b64289&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7D4PTPU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T181414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH1qLmMwuOP31PRSeJeZN5pRwOG%2Boh5%2FmiCFPdqPAtBwAiEAwqMqShJObmihpbDurFhUD1Nknk6p2szRz%2FJ8XB07sdYqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE6NUgcbAuzx8kyjVCrcA7mhNxhV1PX6KT8ElULw8Y4tyWIRe2FubQlx1XWviNgHizV5qfQOO4R5wwsNqo85brz3%2FXcECn3V%2F3rtZ7vBbuNqIY%2F9wp1AoQrV%2Fo26hXtyjJJNpnSy45a7NG9CyF%2F9kgMgQqydPnXlPYIV2oZDqdaT4VuWnHJPoyY9vI3Lpbyfx%2Bz%2Fy2jb8akUUFj%2BI9ICkrMRm58S5LtaF%2FAjeDZHXthk2rX0DhF%2FOMGZj9UU57%2F0IcJgdkBpxRGuOamyVJt%2BysR8OBDkv8FZVKfXwkHfRPvwV%2FsJs2%2FNwJnaKnpTKHmx9itujOED3Qbgv406sQAPJK9GhqrDmWlXZN6B%2Bg4EQW6txiCWrUucFw7NXiHI6zay21KD0j4W%2FSVmyLvv3i3VavQ%2BglDK8oCX21PQdHZLKB4663xV33xy2RooT1U6JlpMfLqxcvYNaZV9f%2BaXt7YP%2Bg1%2F6IL2I0B0NHxiXqCcpuknj24ziHX943c3ALwayxPZtqxkeTL6daoashc44hxpALY8M2R0321t%2B5sq3ZExC2hpoi%2FK2jIRddsh85Iw%2BHT0aN1%2BojudhlaZ40dAsZxiEGMA%2B%2Fp6DqLrPqsLTbtbOMJ6gcsFcyB9P7PUAA5%2FK7%2FLDRWNaBF3yfld2l2xMOf%2Bo8QGOqUBXZF558buXuuBlKve9cqqcDlOgd63ls6Vg%2BFmGeJLo5r5NABK6mqSw2CQbN0XDvWHFRJQ8c10YgxIzcFt1Oi7Bk2OkwglmO4vRHSyPGQUjvThOYBnfA3IZTMUIV0uqgwrlu763112pFIisDWMapuZ8LKueJOm4vlCTA%2BliTqFh83w1nXaDhGHbgG2n3j9wi4WaD14h3VYCnvEB9ztKTlRn1tQi7CQ&X-Amz-Signature=adfb2ef0b0cf84adc3d5b9157a4688dc688bf872d7505a086f80ee0c289d7c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
