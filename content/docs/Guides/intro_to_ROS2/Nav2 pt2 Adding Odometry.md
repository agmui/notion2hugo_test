---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:30:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:30:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=967a93232af3b63e577383e0acb0ed9e7474c3ef0bef0536f8fde45845007058&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=b73271a5c9e63a1859ad3b60cec50358efdb779d206b16a73f2f3381e190c7ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=a67a2e942f7013ed6a4d0b6ef2e58dcdb013a6919544718e721c683d3ba07eab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=e342bd28a1b8891e87dca21c00821fc0753937909f4b55fb7298fbbd12f6d57f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=3a0738099425f6df52d63022e290e81b52de87921f56d2ed817407e4884182d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=f0a13c9d70214ea0066bfe7fc5b89bc90a311348299cad806038ab862a9ccfd5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=cf08e9e7acf08ca10969fc9d686c999c75d88784371fd63b50718735da387cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=f90ec274c52e0d03f6acde8c606ee4e4aff15379937b4934992b75a7107337c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=44f548a0ed86784e1d6a9f9c4ea7decdfc3c19426a65512d42add69e867ede8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQTNGT4H%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIClyKi%2BzLGlHjOquYqnYzj8AsZpA9%2FAX1I4rbkKIClMYAiBXFFPOMRp3V87mfdrO82DoSe6yWqnPfaYKJH8Njvyu4ir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIM1FxQJcpZD8ZDJLn4KtwDNUi422VT3ObiwnuGv985Wf7NAVKdx883BWDwNADo%2Fo%2FRNR90RAUzcquFTx%2BLyOMBHN2n65GQ2OUBtMhUHvv9WAB8I4FH7h0Db4mpz3ENvKG66FChWFypwkC%2BPpOjM8Sun%2BHuK1%2Fbe3beI7xvVCQ8VECcWHczCrGel3EQw9wkScsl2Yjv%2BCon3F4kD2HghJJsCL1W27U4BfTxQ1fo042QJKhOZ2uZr3YzOa9hiF%2BPbbB%2BMZPTGX2%2FbqiPAjdnS6FYTDwxsivtZTJ1x%2FoFMC6kAIgZneKMHzzT2jQ1ivrvdMjwhjmjmnaswCnpKS5BQ5uDuYjd7LpJsTXpe6lFB%2BFDrXDDOAeU6O2Kc962NX%2BmQF0McYVsGxhTbX%2BS%2Fwg30UQUvnXKO%2FF7fE%2ByT5Uffyw6CaEkdUf6O0s9LeFOh4MRUAzTIp%2FxRTO%2Biu2eEDWb1EiU%2FHoVC%2FL029fje63Q3PBhh853A3jC8i9%2BVrMrgzxm5Pbl2Tw0qCtekCNlqEFcKnUUJQiRxmamBLgxYdXVet8%2BUnCaGbajcz1vXcXU9b2yB0Ro%2FQMDqjSk1L9FopVe8BCydvzZhayDGPmrNsSTWMtk0Qgqb8GrDItoMTuidp9I2oSYdx2xU4Y9fxJGO5Ew1o%2BIxAY6pgGTMiWkkch3HsUc8mifNDAGZSs9C2bG5ozEW3cl%2FxmEJBc3A9QrjpbFzDyuO2EKh45mhKk%2BB8GxzpYrepDDLdzTHGiJJng6Z3AiOFiWUDvr9NkxjvLlTKNLaAbLzjQH5nkIg%2Ff2nb%2B8fzXZIz%2FL9kM5cu7P5EIll805YcUmMn8FX%2FvXxb2Cqs7xfmC7hUbtj2U3Jbf%2Bi5jtOKKCAbOazPJHzRZWkh%2BH&X-Amz-Signature=72693827a092b6247ee68027336ff72b123bea8403cc2eba3e8c8c6f22c15f4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=629928ba55625883842e147036b9e8f8f5814d7027f44a9acb3bce4801502c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PRSCT3C%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQCJ2T%2BESAFNFhhjjMZxcSfx6R9mXAP%2Fs7JyxQ4bxnJh%2BQIhAKzG3y7yNlHYwJyxjxbBs6ywn89MWub%2FRlpzazvFsP9nKv8DCCsQABoMNjM3NDIzMTgzODA1IgzjyWz3J%2FOgnS2pUl0q3APWdqDd5i%2FYgnoQDT74blPIMW%2Be1mUoMXvoA8EhTiw7Cwyqv54bZ6Twm4lRjTrQxLQ%2Bw9kkAjIEq1ZCYRR3PfknJJ4qH0tFfq04fU2KFjceVpNuRL205rpk0bsRI1yka9Sjd6rHNCvvkeT4r9%2F1EmSklPfNBgZsGVVCIDYwLobY1q9aadp%2BBeuZSVQDj3Gs6DBape27O88dR6NhWNT9Rqwnva1ZDFB%2FpSFUKEB5tPKxDZAUwk%2Fx2IsC%2BSGK%2FncIHun%2Fcj72%2FVKW%2BhCH1ae0P8zS2f3GWoi1b9Is6Foe12jJbU97k0mEMkSuDtNWMCssJHW1blgX7txbWnxsYda7lYpDGg8b6esS7LVjzu1p22r2b5Koj2syzobQGL%2BAZyz8%2FGGF2Hs1VRUnJxtgzBczPPz4z5EeAETPsyzCnb22Y11bCoIffKc4vf20TL6gtWzT9kxMMVXlEyKjOMP0Me3n%2FdFCPvtEwfCk%2BwD6HNZFvRDmLVHD74pklE743DNdLYOJpPOXgRHD%2BUtxtOHhzz4S4z9PWYMKlf%2FVmAFUzGl8XJePBLby08NAMNdOulZBrX%2BR2EG4FKz1OYlL7ZlSP%2BUKHRFiR8UraQRNJugc3kD3AdET1GMwfteBJOK1T%2Be0vTCXj4jEBjqkAbhClNUDDLFUKwpULAIVrc%2BMtEh6u2K0dbH%2F%2B4ReOLYLH97ptFdVZSE99CXDjh%2FIHI4KRG3X%2FeVZbDHqRNgrFBaJt%2FDcj5TRejuad0O%2FS7IE%2FwLOIfXJ1FCySGmzU1fSE8wpgHPmDI3j9we4jMzvEMPLFsN0RNWDFRTT0jFq4G9NipPO6H175XeI9XUeRPrzMXL9tyuMzOw3nHas8%2Bob%2FvtB8qGP&X-Amz-Signature=8524e605f5c6a5ffebb829fa0abcb4b52a88a7f5c55958d9494085823a24b106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O7SR3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSuO6089lr5rlMSsW8mE24upVzcRQhRRCv0%2BzdBuVgZAiB%2FfpTkD9t1xMGdS0Sw41am5o7PDiFoXbt09wrRRkGKLCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuS9WMRGNTsCSn8EuKtwDNPpnIdylK3prMlWYFUQPSYydEuPybnY2oC4D7hX9bxiJSok5isx3DKpyFRYKW23CW1r4LC6NID94fKS2CuQLqly836TU5sPKirfWcA3m%2Bx2XNqVpf9jZWcREM2dUxUDPtSPleAW0kNUHzQAKD9lHH1vVixafWK1BYg5byo6gvvaCcRR0yMpugF69YERbvtebmldlVAtCZYE%2FHrOD850Si5IbFLyF%2Fhz8bmMbYLrxetDV3557Jn3wqdIpgZvp%2BLwJGKyb5bShWRxWLoXhoNSLJPZGpcO%2BACqtNDJ3lHYt5mT39nzSHeyz2A1B02ZaE92g4YZ7EFADPu%2FJ%2BWr3TTv%2B8dJv2ZZ7J7aP60ulfpcrz5xXb7h5dKDz6XYI2bnRTaBN89GBDLqkzHgokNiCmsPTUWzKfPW8B5cb7IYhCJo1mmpQWFhFPQF0zicsUl0HPbN%2B24Jl7TcAMXKKn94ObHZAwyu8VNCgLCXBCtyFoQrTWlEiMiLhyl%2B7jw31iF6a8qcuVEuBew3TWU72c0DASInapyJEZtDHe%2FOusH74R%2Fobaj6JkoX8lG0gvCz%2FYYEMvO5%2BUYHHV9DL3CKZQCCeHn%2BzQGESfKiW%2FLyJU8wmEWbmbzsboTLOei1BK5cN5vIw74%2BIxAY6pgHrb7hryRyoLX4bLNkSeElEEWoqlWqFkaWg%2FmCCgpfcHOqP6DhBkiGgtHogJUsYwp7w82wzwQDs1E4UuwTa9Dl0%2BjsGxv8VInuGxDs%2Bjq7UK4v2pdmbdodBtSwa4L9fUQ1%2BPCqDlPRNesAvOL%2B4nj%2BFu2ULGFEthQfaGucrvJbJWpRyLg%2B9ka%2Bts49Wk50CrdaySN6mUagO6facw%2FoPXKdRuUMruEc8&X-Amz-Signature=c5e551bb8b29a8eb3325626aa0bc2d063a989c70363d5a8c3dc1034e4e6b8318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O7SR3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSuO6089lr5rlMSsW8mE24upVzcRQhRRCv0%2BzdBuVgZAiB%2FfpTkD9t1xMGdS0Sw41am5o7PDiFoXbt09wrRRkGKLCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuS9WMRGNTsCSn8EuKtwDNPpnIdylK3prMlWYFUQPSYydEuPybnY2oC4D7hX9bxiJSok5isx3DKpyFRYKW23CW1r4LC6NID94fKS2CuQLqly836TU5sPKirfWcA3m%2Bx2XNqVpf9jZWcREM2dUxUDPtSPleAW0kNUHzQAKD9lHH1vVixafWK1BYg5byo6gvvaCcRR0yMpugF69YERbvtebmldlVAtCZYE%2FHrOD850Si5IbFLyF%2Fhz8bmMbYLrxetDV3557Jn3wqdIpgZvp%2BLwJGKyb5bShWRxWLoXhoNSLJPZGpcO%2BACqtNDJ3lHYt5mT39nzSHeyz2A1B02ZaE92g4YZ7EFADPu%2FJ%2BWr3TTv%2B8dJv2ZZ7J7aP60ulfpcrz5xXb7h5dKDz6XYI2bnRTaBN89GBDLqkzHgokNiCmsPTUWzKfPW8B5cb7IYhCJo1mmpQWFhFPQF0zicsUl0HPbN%2B24Jl7TcAMXKKn94ObHZAwyu8VNCgLCXBCtyFoQrTWlEiMiLhyl%2B7jw31iF6a8qcuVEuBew3TWU72c0DASInapyJEZtDHe%2FOusH74R%2Fobaj6JkoX8lG0gvCz%2FYYEMvO5%2BUYHHV9DL3CKZQCCeHn%2BzQGESfKiW%2FLyJU8wmEWbmbzsboTLOei1BK5cN5vIw74%2BIxAY6pgHrb7hryRyoLX4bLNkSeElEEWoqlWqFkaWg%2FmCCgpfcHOqP6DhBkiGgtHogJUsYwp7w82wzwQDs1E4UuwTa9Dl0%2BjsGxv8VInuGxDs%2Bjq7UK4v2pdmbdodBtSwa4L9fUQ1%2BPCqDlPRNesAvOL%2B4nj%2BFu2ULGFEthQfaGucrvJbJWpRyLg%2B9ka%2Bts49Wk50CrdaySN6mUagO6facw%2FoPXKdRuUMruEc8&X-Amz-Signature=db14f61ccc4411d344b411aa6ed1c532ad1ba4f2c1800153738cbb99c2220dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O7SR3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSuO6089lr5rlMSsW8mE24upVzcRQhRRCv0%2BzdBuVgZAiB%2FfpTkD9t1xMGdS0Sw41am5o7PDiFoXbt09wrRRkGKLCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuS9WMRGNTsCSn8EuKtwDNPpnIdylK3prMlWYFUQPSYydEuPybnY2oC4D7hX9bxiJSok5isx3DKpyFRYKW23CW1r4LC6NID94fKS2CuQLqly836TU5sPKirfWcA3m%2Bx2XNqVpf9jZWcREM2dUxUDPtSPleAW0kNUHzQAKD9lHH1vVixafWK1BYg5byo6gvvaCcRR0yMpugF69YERbvtebmldlVAtCZYE%2FHrOD850Si5IbFLyF%2Fhz8bmMbYLrxetDV3557Jn3wqdIpgZvp%2BLwJGKyb5bShWRxWLoXhoNSLJPZGpcO%2BACqtNDJ3lHYt5mT39nzSHeyz2A1B02ZaE92g4YZ7EFADPu%2FJ%2BWr3TTv%2B8dJv2ZZ7J7aP60ulfpcrz5xXb7h5dKDz6XYI2bnRTaBN89GBDLqkzHgokNiCmsPTUWzKfPW8B5cb7IYhCJo1mmpQWFhFPQF0zicsUl0HPbN%2B24Jl7TcAMXKKn94ObHZAwyu8VNCgLCXBCtyFoQrTWlEiMiLhyl%2B7jw31iF6a8qcuVEuBew3TWU72c0DASInapyJEZtDHe%2FOusH74R%2Fobaj6JkoX8lG0gvCz%2FYYEMvO5%2BUYHHV9DL3CKZQCCeHn%2BzQGESfKiW%2FLyJU8wmEWbmbzsboTLOei1BK5cN5vIw74%2BIxAY6pgHrb7hryRyoLX4bLNkSeElEEWoqlWqFkaWg%2FmCCgpfcHOqP6DhBkiGgtHogJUsYwp7w82wzwQDs1E4UuwTa9Dl0%2BjsGxv8VInuGxDs%2Bjq7UK4v2pdmbdodBtSwa4L9fUQ1%2BPCqDlPRNesAvOL%2B4nj%2BFu2ULGFEthQfaGucrvJbJWpRyLg%2B9ka%2Bts49Wk50CrdaySN6mUagO6facw%2FoPXKdRuUMruEc8&X-Amz-Signature=9a7a5c14eb7e634f504cad233055b0d03cb6226c76a5bdae7a7dc978a86995f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O7SR3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSuO6089lr5rlMSsW8mE24upVzcRQhRRCv0%2BzdBuVgZAiB%2FfpTkD9t1xMGdS0Sw41am5o7PDiFoXbt09wrRRkGKLCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuS9WMRGNTsCSn8EuKtwDNPpnIdylK3prMlWYFUQPSYydEuPybnY2oC4D7hX9bxiJSok5isx3DKpyFRYKW23CW1r4LC6NID94fKS2CuQLqly836TU5sPKirfWcA3m%2Bx2XNqVpf9jZWcREM2dUxUDPtSPleAW0kNUHzQAKD9lHH1vVixafWK1BYg5byo6gvvaCcRR0yMpugF69YERbvtebmldlVAtCZYE%2FHrOD850Si5IbFLyF%2Fhz8bmMbYLrxetDV3557Jn3wqdIpgZvp%2BLwJGKyb5bShWRxWLoXhoNSLJPZGpcO%2BACqtNDJ3lHYt5mT39nzSHeyz2A1B02ZaE92g4YZ7EFADPu%2FJ%2BWr3TTv%2B8dJv2ZZ7J7aP60ulfpcrz5xXb7h5dKDz6XYI2bnRTaBN89GBDLqkzHgokNiCmsPTUWzKfPW8B5cb7IYhCJo1mmpQWFhFPQF0zicsUl0HPbN%2B24Jl7TcAMXKKn94ObHZAwyu8VNCgLCXBCtyFoQrTWlEiMiLhyl%2B7jw31iF6a8qcuVEuBew3TWU72c0DASInapyJEZtDHe%2FOusH74R%2Fobaj6JkoX8lG0gvCz%2FYYEMvO5%2BUYHHV9DL3CKZQCCeHn%2BzQGESfKiW%2FLyJU8wmEWbmbzsboTLOei1BK5cN5vIw74%2BIxAY6pgHrb7hryRyoLX4bLNkSeElEEWoqlWqFkaWg%2FmCCgpfcHOqP6DhBkiGgtHogJUsYwp7w82wzwQDs1E4UuwTa9Dl0%2BjsGxv8VInuGxDs%2Bjq7UK4v2pdmbdodBtSwa4L9fUQ1%2BPCqDlPRNesAvOL%2B4nj%2BFu2ULGFEthQfaGucrvJbJWpRyLg%2B9ka%2Bts49Wk50CrdaySN6mUagO6facw%2FoPXKdRuUMruEc8&X-Amz-Signature=8131f91337216e6ae786f851945343f7b52b4221a65e47a93574902de7141233&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O7SR3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSuO6089lr5rlMSsW8mE24upVzcRQhRRCv0%2BzdBuVgZAiB%2FfpTkD9t1xMGdS0Sw41am5o7PDiFoXbt09wrRRkGKLCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuS9WMRGNTsCSn8EuKtwDNPpnIdylK3prMlWYFUQPSYydEuPybnY2oC4D7hX9bxiJSok5isx3DKpyFRYKW23CW1r4LC6NID94fKS2CuQLqly836TU5sPKirfWcA3m%2Bx2XNqVpf9jZWcREM2dUxUDPtSPleAW0kNUHzQAKD9lHH1vVixafWK1BYg5byo6gvvaCcRR0yMpugF69YERbvtebmldlVAtCZYE%2FHrOD850Si5IbFLyF%2Fhz8bmMbYLrxetDV3557Jn3wqdIpgZvp%2BLwJGKyb5bShWRxWLoXhoNSLJPZGpcO%2BACqtNDJ3lHYt5mT39nzSHeyz2A1B02ZaE92g4YZ7EFADPu%2FJ%2BWr3TTv%2B8dJv2ZZ7J7aP60ulfpcrz5xXb7h5dKDz6XYI2bnRTaBN89GBDLqkzHgokNiCmsPTUWzKfPW8B5cb7IYhCJo1mmpQWFhFPQF0zicsUl0HPbN%2B24Jl7TcAMXKKn94ObHZAwyu8VNCgLCXBCtyFoQrTWlEiMiLhyl%2B7jw31iF6a8qcuVEuBew3TWU72c0DASInapyJEZtDHe%2FOusH74R%2Fobaj6JkoX8lG0gvCz%2FYYEMvO5%2BUYHHV9DL3CKZQCCeHn%2BzQGESfKiW%2FLyJU8wmEWbmbzsboTLOei1BK5cN5vIw74%2BIxAY6pgHrb7hryRyoLX4bLNkSeElEEWoqlWqFkaWg%2FmCCgpfcHOqP6DhBkiGgtHogJUsYwp7w82wzwQDs1E4UuwTa9Dl0%2BjsGxv8VInuGxDs%2Bjq7UK4v2pdmbdodBtSwa4L9fUQ1%2BPCqDlPRNesAvOL%2B4nj%2BFu2ULGFEthQfaGucrvJbJWpRyLg%2B9ka%2Bts49Wk50CrdaySN6mUagO6facw%2FoPXKdRuUMruEc8&X-Amz-Signature=aeb70d4a271e7576a40b576a42b65731c6f4164275bb46b9b7b0eb6769d261f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5O7SR3F%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T103135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJGMEQCIDSuO6089lr5rlMSsW8mE24upVzcRQhRRCv0%2BzdBuVgZAiB%2FfpTkD9t1xMGdS0Sw41am5o7PDiFoXbt09wrRRkGKLCr%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMuS9WMRGNTsCSn8EuKtwDNPpnIdylK3prMlWYFUQPSYydEuPybnY2oC4D7hX9bxiJSok5isx3DKpyFRYKW23CW1r4LC6NID94fKS2CuQLqly836TU5sPKirfWcA3m%2Bx2XNqVpf9jZWcREM2dUxUDPtSPleAW0kNUHzQAKD9lHH1vVixafWK1BYg5byo6gvvaCcRR0yMpugF69YERbvtebmldlVAtCZYE%2FHrOD850Si5IbFLyF%2Fhz8bmMbYLrxetDV3557Jn3wqdIpgZvp%2BLwJGKyb5bShWRxWLoXhoNSLJPZGpcO%2BACqtNDJ3lHYt5mT39nzSHeyz2A1B02ZaE92g4YZ7EFADPu%2FJ%2BWr3TTv%2B8dJv2ZZ7J7aP60ulfpcrz5xXb7h5dKDz6XYI2bnRTaBN89GBDLqkzHgokNiCmsPTUWzKfPW8B5cb7IYhCJo1mmpQWFhFPQF0zicsUl0HPbN%2B24Jl7TcAMXKKn94ObHZAwyu8VNCgLCXBCtyFoQrTWlEiMiLhyl%2B7jw31iF6a8qcuVEuBew3TWU72c0DASInapyJEZtDHe%2FOusH74R%2Fobaj6JkoX8lG0gvCz%2FYYEMvO5%2BUYHHV9DL3CKZQCCeHn%2BzQGESfKiW%2FLyJU8wmEWbmbzsboTLOei1BK5cN5vIw74%2BIxAY6pgHrb7hryRyoLX4bLNkSeElEEWoqlWqFkaWg%2FmCCgpfcHOqP6DhBkiGgtHogJUsYwp7w82wzwQDs1E4UuwTa9Dl0%2BjsGxv8VInuGxDs%2Bjq7UK4v2pdmbdodBtSwa4L9fUQ1%2BPCqDlPRNesAvOL%2B4nj%2BFu2ULGFEthQfaGucrvJbJWpRyLg%2B9ka%2Bts49Wk50CrdaySN6mUagO6facw%2FoPXKdRuUMruEc8&X-Amz-Signature=beaf35afeac57397cb0544a7b86cd17af3eb3c596acd68080e088a854577e574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
