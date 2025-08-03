---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=13ca03ec27ce2db64b84a7ebe6fcd39a706eec0a18c13c377e8ccf6ebf0cbb88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=1026b70d6ae591cefa7ab1da9445dfc7b9152751a8a59415de44686cff36b66a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=dde88ff16836b1b452069a8395b1f52459d722ecec039898074482a6be1bae55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=7d01d61eeccee9b27c02da6b8b0a06389e591780f908fe540a27939520aaf882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=c070064a9d4f1d84501df9ee43b85b02a93c78cdb7586f7cc23002692b631b13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=7136a8a6e95c325911ef34119904643e84516395a909d3be733b6da863b3f5af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=ab9fdc8dd7e5e7c7ad12a5388df4770113cc1bffcdb448fd11e118e6f398b59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=ac9b5fea45879932bb892634c3b52d6bef0d96233b3e8af27994ccf3ef787f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=78c2e5846ae34fb4fe391e25bbdbcd9f35f13a35b25815c31c1e011af32ed242&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=98cc796e0644bf1591c0daf9abb21b1182d667f5f34bebc3e11e7cf84dd9d334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UVNW5LL2%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFKfqLhmFzVAMcZ3bF%2B8X%2BUXc3QI0wiwFQ1wE7oUMmdiAiEAweQu7Gvtv9ZwZ24r3Kw8qmtQocVsHluKerDiCF2xtPoq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDA4WIpQmlBVumg%2FffCrcAwnTCdA9a%2BlJ5Oj4IGW2CWw6kfjJmrjTTht9FtmT8uAVGwQUrXX1DylrLs2QrzmRFZ%2Ba32rdRGmk0UIR5t1r8hokbS3xCsdNYdy0qPtWo6sXPva%2Fjzi%2BvLVso5tFQfLGhY%2FsH29m6XuDHFUmPS0neM8277W7vWJqryskDEpev8ijGhu93LTcXdkSfbROl07YBhwZVNSTopZwebfad5cm6ojIm8yd4IuaAcEUR3HhkbRzGonoqsDH%2Fy%2BaJkHLED3ITdyC06KMF47eahq7wga0hJhZrp%2FbANalVQvo9KCgoM9ZcxAN5bAKm5YEuFyvoxUV3HehnfqGLcMlNR1nn2M0%2Fbr0SIGb2qKOhU0WX%2BdUiGpLbLJMov16aPhADagtOSzJXEsKMAp2Wq6gZVxgf%2FvL9QqwnI77EgKxysbOx25jDqwZbqFKiswg9Iy%2Bnck0cgr7866qE6TYerudjFLxq3yr7nDm87WpFj70AY2amgsdY5A6stNOnuWUstSTLIJ1%2Fag3h60OQQzLgPJaBtt%2F1THHb5zoo0O7rM5phqtDcoA0vFJ35xe1V6irwbnAdkrwcGL5v%2F2tUolA64mpleUrNdmsne63HyrRXaCkAkcOf8hBV583GUH%2FR6lS7X1a5cAiMOOru8QGOqUB66b7y%2Biq6yAvdVLyGqlq8fvOuKgBw9q4ubX9L0x1z7fS5R3CIC5Gz8iEG017hR2SotI9T9soDoCmI6ls0659OVqP3p6E1apUwknimCt5IYb%2Bhc7WTjDUkogiuy6yAyFznoXYJBksNhcaCyU3yJG3t%2F7LxJI58HWQFrt4ksSST06xfVlH3IgxmQ06L0Q%2FH66lhCirt%2BRTOTBRNuIOvWi3SFwAhQSC&X-Amz-Signature=bdc06055037feabae78bc97012bd060abb4eeeb60c77aacb83da226b4b1419be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CNIV3IQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHK5rpo5%2FVKi5x1z8F7q8zpoyW3bTeI4FpaegJDsPX%2B%2BAiBg8MaaEBtsIsvKUmEtmeEvBNwIAd3K0zW1xHgccoMzKCr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMhuDQwc%2FuJpojdAWhKtwDJeNt6Mpsd713r1dRBv0i3Nzrw4zkDC2DIBKkqZnsn5SFVzTA%2BCJqMsrCrMfSjn9VFHSnS7%2FiwUtJrzPoMGGfboGjGagNK%2Bx6rKEKYk0WBzmNGXFKvOgkuNP5XkiGEwdqejTnyNGIUa%2BxrrQzikSkqBG0mG80V7R4eVIbH0YCntC1GCRTAFSQYFF0%2FnrHlh5WULzbzXNKN%2Feb8DOIiDjKBubFz4FAxXcZrzH6yEmVENayJjo0AXO%2FdLQOLjO3ZKFHmn3H29Dfbv5qSHPHuYE2xN6qJWFS0OkJzbU1JFPahAAemRfhIVv3ivqPhzDgXarI%2Bi9hQlpm%2FYZig1pulyA%2BP01jcr2g8hHeSHTD4mbxeHSG7vXhRrAxIxOQ6ZYsmNAXSzsQgGyq8Dy1FkMaBooQKcq9gOPhCQ7BYzKC0mq32abhYmobrxaXMQ1RDulD82Om3QWOUGssg7WQn1rnmga1W6zu0SgtWNdKVaB%2FYrfsuO%2BacDbJiEPFYk3%2B5vA3EqHlJ91M7ApxCKQKNxTX6IHkHg3p5tKl6L0nmyQ1UOshRrwSz2Ixj2c7cDPa3WgCuEA5faMppKVuQb8z9Mzo%2BRNts0R8IqwR6%2FW7NEyTLJksg2zP%2F5DIZ5wLfVeTyTcwo6C7xAY6pgGArIfOtJ2UeUgjU3%2FkasK4CYc5Y%2F5UxQ1lK8CWyRUd85a6J5An%2FTCZdrCs8RqU80vrympWT7rIaoxIfTJGtMdJcFsR8xqP4N7fRrtAG4qvm%2Fj6%2B2sWn3a8mPjP3p3zcPU23BWr9v41CyhFnVdGKUDzQF8SFIA0FucZ2O9SZyczNEyRvVAr1acYX4uYQytqe6fVQlcLw81VjUd%2Fljx5I6O3vKI2TIA8&X-Amz-Signature=6bfd6a266a75c107c5b899fca214437ce60c38ed7a8883293a653e0990bccf49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=b30d2f5e0f384e577c9411acf35ed98035b128d0e263a70d51642717fff2e2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=069a7de7327131e8178b7ade14c2bc43fed9c02d866b44deb85cdb744f70b009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=990a4418f8ed44ab868cf10ceb1c76f795d9cfe688014074a2f5d5a4799fb448&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=364eaf7fb24751c3d7909dd22b4b9d949b476fcda2bc3594eda1ebc1461aa8f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=9ad607b0f35b53edcd773cd6373dc85ab7d2b53ef17f15ea779d12d4a2cb7ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=adeb4f0c86eca8355d9b1634f6864472f9d8f204286e53b44be38cf74158a482&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=7ec7151f2b2b191867b4898425b5de88594446b8e82cd3f27820c32286290792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667F74SKTA%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFRrNr54E7aS%2FDx6fXUhgA0VN02CYflk2E8535C9jfKzAiEA0b0aAowxMMvWHvXeb07MY7y6KBxRun1Kf3OOx8eIhcwq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDK2ADb56J3syNxZQ2SrcA1ZFp476LdY3p595uSk7k9ESVwMmjKBpwgcQXspwWQKWdVyloH6qM0SxaNPNARf6DdDQmgFVlKZqanWbU2%2BrQfIN1VQWSt5sJ1pnpoVlCyhbl35fGlcuk%2FJIlaJZ9mUw65RSqGXE2awh%2BYiLBoKqQYh3e8PbyQrJuFAbz4fne%2FeXK5Cz%2Bv9K1BJtwMGG5m4K50I8ggAXL7F6fSMe%2BRP8UdXCG2YlaCfiYaShtDmLD3Z0nY4yQj78QiuzMEcIYWeopgG00H%2BWv6nJhW5g0%2FrWe0Rfv5WVSzREV78KEuev7pem6Q80LUDUMapn3ZwfYLFJ5TBByh%2B%2FYo0%2F3TH6zXV5SKMRXwhS45CNMsGtIMyekKJ9GgchikKaZVNLZRUMQ%2BqBhoUrNiXXIZEywlDi7BjaoOcKirc6uC%2BeAAKNJ7iCuSwP6tJiPtvWm534kq%2FGQpaacdw6KpA4u58KlP7uPKQJie%2F0hOiz7wS3McI7kkPHTbN%2FLMkxVjqUTnDTy%2BrU6s4X7pV6VDY6320f3JcuW72YpXDFoyy9vMk2V4odiI3QGXnX3Xz%2F%2F6fvfSyyQrmUQIsbUel4KBwOMHKHzYhxjWLpF6GXAiO6tT6lg4JRekDA6pkldIHcO3wd1OPs36oPML2hu8QGOqUBha2emusOlZmRMujYUgJ%2B6YjOIDfpxB855N7op4GyjTA4eOokLTAyyaI0AX3VvWDGbhu7LnP0d5rXbEJ4Cj%2BQLtktTDHlUQXme4ciGvVkjOcEAlqbvau7vn22SNSLtWG9vEUgrAzONjcroM2GMqfz3TrzbX1zyVE%2BE8FwWebyQ%2FJI7J42lwTtscYnKKk54i7yol4PYgZfuns148o3MGOO18PmyNGF&X-Amz-Signature=2f362feb62937dc772cfcc59dd072578d613e772e97b5ebb40c515d82716c6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
