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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=6a305f56cd145bb548b1a6a10223471e00ba3b444897ac79ab96f27730927d4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=7068f41cdec32a8b32d742e43319df35b5d0f2003c3a732afbcfac05610712af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=62278e394f6fa4e959b96bc2a4e22666a902d3ca10990e021d3fea17063a23fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=c803fe32d6c8888d11aff8d8bcc31194b7d011f0184aada74db99cb92904b1a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=84d9ef96379a6d6b6afdf0bf79c0fa0574c695921cc75e4b980b6aefab49634c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=9533c37d242e2167529df1753de98030ba040d0106672785ede397f8e7a6fad3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=fee45352a6cec26f695ad9378688f08a9c4db47a6b3213a7937c976749d29534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=6e04354bb661dcd30af7ce375b91112953b26f050b917af96d27c8094c619611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=17683f63070eb4252119c6b6d011fcb0dae44bc9d0c389ec079f7bcd59acc580&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WM6RPDR%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD8JFGOIM%2FDPJ0SoSL5M0bVXj93Xw9kTYmHqJoO6pmJggIhAKoctuM4yjiKR31MxxAdUCeC46%2B6Cr5tE496hvOFEchtKogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxClr6LU8ba1kTtxWcq3AMMsfwL4zLX9bI%2F%2BNCBiSxgJ9%2BEI1I2pJoShYfV9Rgm%2Fez6lUV7TK3My64LEXuK0Yc8XWlIwy3ngzP%2FYcqjSQQL7Qa4p1CrLuvqY5%2BEh0HxEZWgMze%2B%2FK%2Bepx%2B64XGqAhJvFM81NBapESggoRBL39sIu9oFePctJcC8QnnyPSvexs0TtyHeghtaa2%2B0bg%2FOtMdoiC%2FB10wNYPgv4oSSxLM9UJOEN3BJ0Q2G7H%2FVRD4D4Wrvm2JtQRnMYM1qngpnK3Fmr38aR%2BX0JOQnpO5iTyDLmFn4CKN7NLoGXAIRylHXbp6ovyZPi1azIp8Ro28ifJ0kXXZDn5Hn14zKMRgZowjXqTjiq5aIpa3JEgmDNKW0sSml9ncwikZUA%2B%2F2ISghIcCiiR8eyw2f8mH6%2FWJ4syg1PQrkPhc7zBMDziCO06363PYbCDAaaimP%2BTVL0m6F72RePlKp6Eod8jxgz%2BlRSztnQDysmlssOwI%2BzuSPh7nyajnTNGnvCEEqZlB198INF68VXlTDxiZsIqmoKMhXpxWqZWQMG%2FWrsn2YAmQqjOvn%2BUA6PMhskkwi61g6RmaOYLiAEKdeodC9hKZa6U7Pbn%2BonxHNAOzZQK1UrP9R8EKcv%2Bt0DrvgH3einGXkkDCk55bHBjqkAd0UH2FvjJitiCBiks7xAHU2uXiFZzzDit3j0FKCr1xfxQ5SrCNW3FxEFE%2FzHkWAFYtEc%2FmsLKmYGG6M3KoNB2NurRovP1Lhbx8j8ZHxc5YdnQK7L%2Bd42axD3bD3c6BhYO0sW3RUXJG3GSfJ2L2oGMAdegShTvwE19EZxpBIZmt0%2F5rZn%2B1VubZDeN4P57e%2BqcrjK%2BnBjivZtzEd%2Bpd7KQ2y%2FqMh&X-Amz-Signature=5f5146686beb48e3f3b6634dfa2ba66d0732054d103b1291953451bfd59772d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYFPOM4Y%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQDD%2FfRKJ2cej7TY4De6u1u%2FuhcsfFMVzYF75anMu7%2FiHAIhAIPVFH8kTYWeNX4e9kPvnMVe6gVCDbj5TO1b8YYmcZA3KogECLL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXTW52CLsDB25kHYoq3AOcLkxsJg7IYYCHHB64amlh9N2M3AN68UtJLYFKuQjEJl2gXUPq6FAXvJSEq4tjQrndogBASlnFelbZu8aBAnFj%2Bfgt5QqgD1NMWroekU%2FY%2BM1rVTp%2BghzfpcTkzInn0N3cgKAb1EGbUZiCiFABMVQhURsg8S75g6M2694hwXj5PB5HBx14u71lQ50YX0%2Bm55fJtEBmB1MYP6%2ByIA5KFWa7TtfgmeWNk8cjMyIIKB4ZU2vI27pYxxssC0aUdlLmVfO4bPIjVQuRPNRt1EWyeGCANW33Sgpntv8mmvEMRnWEV4R28Zu1E9jhLYeeDV5ioI1neXlLfXOvswaD%2BBaC7%2BvAy9FQEo6jlt1OlBpPymr9GqYMi0rc4efILC7gEgSfMTAT8mYA%2FXxQtREfhkIsAYKcOcivEp7qiWJ3llUDOWnW92QoxZRBvmm1SZCCqpAKNT9CEePJRa8XaKknb%2FhIX4ey5ufzyflauStduRHJ8u7KRa3%2B1NCjesd0YWCRAmrbBC1zlIPHgEnN5hSa7qns9LV5NSNIGLAxjH7OsSLMoSmUZ7Fm5rqmknrVNIQ%2F8leUueuxDPHvwItnqtTofW%2F6aGMOTovKy1qm0cXhTSsma0tX8D0%2BwYNotfIFNriLCTDJ5pbHBjqkAYSDyHQyIeZgiX1OkO3rNsLxXGxtfbv%2FVWkm7MpvSlKNR0OmEOV9eAkxAbyO2ax4wVFW6%2BbZJBl6%2BGVPWNBRzqdTacE9LEX5%2FAzbn%2BNEvmud%2FRaJ2WMezLoOI1I%2BdBeFhtodubQB8eF74O90fHmfBzmATeO%2B04xPNrtkwkCroKvVfamFxqkIEqt832CMX1p1TI6vZJK34KodfVBVFmnZgCxFpX%2FY&X-Amz-Signature=b16b7d0a151ce6539e03ecae6d21495d8028f41059a02e4be22782fc9ac6abc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=d41a348d615f8560d9da3e72f2969656ca74d1d3ea5096ae7e81db00041b892a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=1252465a012e8800e1fd648fcc9a97efe4c170fffa3d6f9dfb5a4edcba032952&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=6c60ec53889089e6d8a93ebd59062ad080cadb9a724a61175f29883096a1e0cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=c5670e1710eed232366af8280a3330ab88ca7d3c01fa619c5ade18967c5ecf9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=350672208832c2081da667c5c6e7cf970556cbe01c0a5dd87140b4cbf8736769&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=b4e6347bf8933a98d410c4256551d0e8247539dcbfbd49ac836b04d07f7e4b45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=b9ddcd07a1cf5eb8aee9803554d1d77e68e2c54a3f6c24ae9469d32d1af6ecfb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=5de3b8dd9478c9a259b6dfcbb5b57df21d0eef84b4c31f3c6a1a7423aee8b4a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QBTIVY2%2F20251008%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251008T012331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCIC10i%2Bn3o5rqotDba%2F%2BhIj1ddwuXt9ZL5EnWKdOFypdMAiByZymZpCAFdMzBjn48gb30r%2FCUTZTYKGbFZSQSUTL%2FiyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMuDei7PnWBmeZD4IyKtwDYjBItjIDRf3PyG4FKsgGoQpMvZxw2CnBx0BQspcJquj0%2BK8HiuYcyw74RvUGXr5SkxTaeCe2BeuE3F92TGlbLVbH%2FBVAFSfYJla3DYmYn0NgIJrAh8ekgCFltwJUoEeWXtHmRdXGQriuzImXbkT2MRYh5zFjeoUmy6f5kQWla94NtdFZmKdIMAy7CAN0hAQT5CWOdmzXX2%2BzReh5ojjDPkm2mNiBRxn4DDdS3zTag%2FCdtpfVNGwu%2BqtAOKHo1j9uPDiCj3uafS%2FDL7XdQ92%2BsfheAGrXp5SAJcsbzkZ%2F0ocqY5sYrTKq6IXh70srPP%2Bcv%2Bt3D2jaKJPrGP41R2lb7Wm%2FVOZvZrx5%2Bjzf07X%2Brdyy5QRiZVe01r6c2johnRybA251Vxlduywt3RF20oT3sLauCDHz2wfS1UksA9d41BEXeku13drttgBNcbr6IiDEBGEk%2FKykA%2BvRlP1Zwo8aVrb3fB0S1XnZm2x5seFuBnI1bt%2BjNkNBv7fL1ZAaWal3ouiERnxbz%2BCO%2BUboEKuDpepoFYzl1eaFA1HVBcCXNpUVqYP6w3UQDKWTTdB6ByDvpqP57gQORqQMu5ptNGQQyaJb6pywC4%2BAJZZBDj50ZcB7rxurWJyrBbBpHJ4wpeaWxwY6pgHcnjpjBkH%2BV5ljOLAHx%2BViGEYMAGSS9paLMnJFv%2FDLhDQxCQ%2BFyQEbRe3R1CnTHy1M8d5sZVpnF%2FlDsV0i5gEh8cRvzs1C3u8FzHBFFWfjrl18mi7dFLnAlOVRAYy5Ss8z3xSM6LJriGDubdmiwDFL4XpBu9CdHU1WoSgN9kXu7WsjC%2By3vUZeKuzQfbZoxMIr2ATNHv63YOB7zH9wBcoiCzDdEIsO&X-Amz-Signature=729af22357fa997f2a1b0a2cf81488b73c986ce4d2bfad819047b50a82976fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
