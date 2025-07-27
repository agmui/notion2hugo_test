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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=d530226076dc83b4ef277dba90e72b7c45d3ace41e5f01bd4b6849af090f41c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=3c7ba5ba0355dc9f61547f5c5c36086e60c99bbe18fb29fc63d3c2b8cd4f47da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=6c2d0ed4b7cd72b4095b59cec55447406ed361d45bc81822709e0f5dcb3c7ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=77fdfd94f7e898c09f820ab3b2c9b97bbd88e4e929d986074dfa10728c718c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=72a06d43ea5f69795e789b33e2bb40a9d52cb2159cc4c8c7f0ea3f99ed5fd238&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=3e8010ca646cdb1777843638dbd4b62dbe3e3ad70983e49303c28d1ec75206b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=86e0891d7afb3976566aaa660d4d38a0875ccc9b0036e74c9adde155fff65452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=c402e4b2a44c032370d8259ebb2ca9569236ced9d5501773d5cc8fb6669802a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=c2a0d1d53189cf3c9e5ddcdf84d9103405f86569519363780b3f5ede90fc6cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5AEVXP%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIG3RH8t5%2Fdc%2FfGaZr3LgBu3cf7apkzaadKeoboi4p5ekAiBf48EXx0PXRth96%2FMCdUqqyK1ejK%2BOLv06XncNPBlsNir%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIME%2BArKG2wzHPqKfpVKtwD0igzfKZhFSJlG3EWGDTee0tPyrKI1lX5Pkr39fA%2F5wqhZZ5iroW4Wf%2BTur%2Fa0CvhQj25d3VUwW79WWDOhKHHTLzqWpIzgezhGmyywjtG2MMjbqb03lvEiLVOZO9m7p%2BAE5VnoD526er2Lwxy5L9X8%2FXM267p79OZtX2sLBPRaB9FR17W3DDJqb%2FWobIif2kyReGZynD22jiYr1KAR%2BIibZyfDMoEGdslxBUgnFyv%2BeLs8GjKr0DO5MPoNZw2GjlYNluURvUmGZCe332CklwCVXkzBIHPI4bjjcEKYkpuYjOxcLMNLkHr3ceCbH%2FiG3sk0lxwyo9aCNafn4pInKRnpeCid8hEATozg876hBBq6IpPFMFjhgZFGGENDFYy3u03oluN8RIdpjRuqe1ILrrMF6pVpw7mPhqaMAEbVxigFE0fGKr17XSSxDJ%2F5YQbRY1h703i9qHVfDhQ4pMxP4HMClZ1V0dMJxAuo%2F2Z7JoMgx6ljQtRf5JX0RWDrTlm1WY5e%2F%2BlwlGrllTy7SNxrexboYV4amL%2BDM%2Bjnx0iWxk4hvDpmxjg2icSnvV08BjiThnNYwGQFpXnslcrg4OV5sn7JxFJPUoY%2BZmqvCnXI3MTmR3k8Rbir9g2dGUo3aAwpqSaxAY6pgGu6VznQ%2F%2By%2F2UtZTvfkHq4TbbZKATP103G0QiGLOQbhZkzyrCrkkfOMWNLyQBJ6hc5Ohl1KV968Xy0kaMv7xGpbsD19%2FISRDEEJflQE2N%2FX6Mr%2F79ce7fxcyJeo%2BbnsvQMiXQxWqkgXwE5iRs3%2FgagaUBe%2FBjQ8nV%2FiIzjaUDIkgeg6cMXXzX1h%2B%2FVXKe%2B6Nuh1PHCQN2d5x4KKP%2B4zPyD2tldhuSO&X-Amz-Signature=1dd16ab9a4eaf4395ae0e935e45209b0e1b9b95211897ae66bd8d8fe932288bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TXH3BUH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQDjPY2DlJ%2FYp%2Bd9qcMBOLzwBk7FFunEfweOpbaqDL8FsQIhALYFFPGa%2BW2598CdVn2lcMcD%2BFe1t2J2fI6Sgn9VxzVHKv8DCH4QABoMNjM3NDIzMTgzODA1IgxZEMGMT7iG5o8RWhgq3ANJjMKss3wLJUxnRSekjNGvN10ciCNwimuV%2BOAPb5LHwPeJf%2Fw7Mjh20aveZ8hzvCDYsiFeu1i3AjAdpEmHc4uhstfvJsuVU006MJw%2F4nBXg6vJkvMI6DlcayfaOsr6NihnktA4%2BGbBhNsQP1ZTalqrqEm3c3jDRJ8JQfFUwDyQAn1WECEesvqvpGlR76BcHYa5dh%2BWgx3W8HYOUiDn1YCaX6nfux5Xd8pjwhdqvJnisBA7bLqe%2BsNaQs%2B0Mb0o4CiWmPSyPcNguZjin2maX9AG39zbJzuJXlMjjt6M4gBabytORto3kIUcwRJBLg3DtzTGjXN9m91lcnu7D6uV8He1WMsl927E9EC5uhtebE9ALWvNysTjqCUNbsHit0LkQ8eWHgYUAbkpsL%2FM5Vk%2F1RBFx27cvxqmtRApN1%2BYCVqZPZEh%2BVs6s3JW1RTwwyoKrHRl6tLvpJTIxs%2BMomisY4nWNpcEsrCXaeTBj03vj3wMOaU1w9xZ%2FZOziXtSmpQ6TIzD6AHWAeJBPVbPT3L3giBNo9iZ6O7uH30RXLDlYvoMR%2BUx0X5%2FXN5KPyAOr0nDrTmFHl5l1Wf3ZCcAKHpj9uizvckaejtKMAerV90c%2Bmd16nd2ENRitOlp0m4FhzD3o5rEBjqkAeuxTDXwCmg7KMyQmEbz9g%2FGn0rULfxrbjv4X7IRUgbNYJbQ%2Ff2sHtjSYrMrbSLT1IIXXUpHDeI4m%2B31suKXSpx4FzfIrdlzz%2BK6gbzRgmLlv1AWCD98Ttn8hkUz7qwgqBLyjLZwr1u7YGr9JDSwYyR2SnN85WZMgm4wG28bMDadKXXt0wkwNRbDdWOb0JTqQjYOscTQbYcpS8ZXJyCsnfeosjk4&X-Amz-Signature=37363c44b57d24263a9e48b8f919e721f60bff22fdf5d43f42aeb35c64f976b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=44f0f87c223c1ce1ab1bc479378616239ec995ec3c89859c9904eed77fe6098e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=01f70509136b7ba7ebc8580ca131ba2e0363960f1f462c3a4b05d87062285c26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=83ce02dc0a843d11508fa84def92d3f0b89245183b7fb11398181d28cff1e90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=a5a5fb715f494cc82c5f72c39afcab5af72561c127faa7d2902a662fa6d0eb6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=429b7db2eb512cf01c112af3c7943ea8e198494cff1fd1ba2cf469fe600f43a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=7ac6e45c9f76291227e38eba5dd4aaff6b7a1cdc53a6923b448d42d1a05c00f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNG7SQU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T210815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIEJ7fOvr31%2B78DILuyIrVx7q%2B3fzcEnu9RLRey11hwh0AiEAhQ8yqIzM0ntxnUQIA1z3ya8V6j1YSEK5eEt1jTh5bNUq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDOMTyoXM9pcKqMfo5CrcA0sWBUvQwwxVfk2igc9MieTC4wT%2FX5g3yp%2BEP%2BCK0gr40LkqncuDh4YC%2BY0z3xWD0cS%2BrXx3o8ZJpyLxL3m3%2FjQocQTo2oVI1FXOALXvVRNEK8AklFlQw8kIXZjG%2BPAFEnGbJL7cMMAq1mUuWLqqIBec2UAxIf6FmbpzfFO%2BUW911sdvw0lMVskKEImHEI8awolEgff18A5w%2FFzizr8vfrnD3L0Tu1xq06HGnRDUqnzEv53Pac8gc7PKAaZuh0haPCrPIuEUz2r41NlHOgnMVygX%2BTJkMdpIKuiqQ8hqNmo0MOR2%2FyGSj2RrqD0eZP2RiIJ0yiRJTjaIhZhmNkf6JFDHMVeTjWwLriWwWqCd7ffWfzi%2Fefa7Y%2FJzm0WlY6%2BR49pSbpif6LXo3HAwHdKBa3NlxwoD%2B50JOzKH61Czp2NeDRtzGf9GbboVF36EroIVm%2FX9rlhq1J5HqsyvBXu%2FRh9Ij%2Fvl9rD9x6RhG%2FtJkkKzArLPDrB1JvzID%2BMy1gh8IJ8M330PgtXBXBCOUsRBIT0%2F0fU9SX%2Bt8v9%2B0OTrIJbl1FsCDDn7mH3%2BpcT%2FvifTCU%2BUg6j7XFQnb3IEiUm7yIDEvjCuw28272NalRxn6HyNlpnCA4czxH2mWTfYMJ6kmsQGOqUBgQQhZt3Zcy93yBeKJD0rycMBLwcdCI8Me47W5niph0GxLndytR8JBHQpXdzzaFTrA2EVRBX64N1UhdAWk28PHDyE6k92wpRP84tbZ25J6JPtk5N%2FuuwRxjDY1YaHpQM5Tl8VO4K8w%2BDapUEzD8emUTrVNUO7AxXIRE%2FR5aGBmz%2BYvLCZX2hdzJVkoBjxyqlJ5XA1ybVgn1PgU%2BHhyQ2SzBWuk78s&X-Amz-Signature=8cb6141f208573784d387574815f2a3d59d8ec1fcdc6e5b3369df218ef53980f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
