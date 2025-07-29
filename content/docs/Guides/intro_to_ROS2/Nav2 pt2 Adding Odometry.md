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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=8e059cf1e6f343b9bc50cd031ab54bc6fa614310fe9ad8109f3ca454aab46399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=c33e4c44b7c10d835fca7938a39f88a92576195a0a8fe4e91aad088837b0c7ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=5d31c6f36125cb2819c5649853fcd29aef16bc302a835cacf3b0770109c0e85b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=8dabd00c4675367eb2534efc1a2c222351512290fa71f919ba50ec1d9389ba5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=783db266e8227753981a3277ed290c09691dbf716357f4b17a3ac9655a88f584&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=31fb0ef443c33beed8aacd48cf179fdd419b33e9cb210be2cf2eb0e8b6240411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=e333876a02858dc62ff3335db6821c50bceb92886b8fef007088bcdd1ff1dc03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=40448c322a191aac79d491a029ead838aa3a685efbda6532277fcf8caabc73d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=b62f930c85eb12b3544a817c971829314bd88fd3218986598823498cf5079c96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667TVWUDLS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCcs2Dd3XDSOyXyxgO6tLQf%2BXcwPfFIzkKNn7bOOEF0qwIgBt06UBJvnR2KmAbh7CYmTzDBYuKXmq28%2BQv2Jz9M%2F%2FwqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKbULkhfHJWJBz7afCrcA1hDOTInoTipvBBiDZH0FxUueS1ax6HfkMBJ%2B5JD7u%2BQRSZiyz9WHcMP6lsOLd9mgeuV0ICbMCB%2B8YM4n9rDwN627jlzD33gop4nVQMoA7ls0hZ9FFqtk9EFtkiI60C7OqnRC2hwzTp74XXerRnCkYOguYWE9uakDJfOdRmUKMHcs7A31yo7Wqfp%2FDW4mQSjFZteOQFlUSOY7JwJY91VOqX8Yx1uVz%2FQqJRbePegbZkj4nR730RztEyLdO9g7g%2Fge31YU5c2Qf5rHDuasOee10YWw%2BYGeLjMX3d6MhrnxH8A4wI7SrZYZE%2F3Jm5JUkXoyY%2BsZyW1uKpoXTqdRx5P7gA8kB5xjPE1LH59VMWlm%2FLNqBRvaSmm2THWgpMUw8fXEN%2B6GYI7D8x7StCpqF9PhUFz8qdCSoNEYo7QXoc7gCNcd1TaJqYVmrBxcNAcLxpk0cmFLQfUNdcxEitSna2hVxanyKKqwWW6rVLFhgG8HzxAeXcw0pzwgUiWlmi%2BCY7HV1ZBVWhlYWYdpPB2Mkdj02Xej6%2BcfQfdUJ%2B4B7Ww2Mp7ZZlLOUsVDwIe9bFL57Wkb5CYvDuyF2SgSzSdMHLH4PWEUevcT6XHHG%2B8hVTEsvA8AeQ0zLtFGL9Pa6ycMKSZo8QGOqUBPt2DXrAy31A4cCwtZym5pUTYQyAe6r015q999lw8CJhcqY1v5bbs91H7mYmf6bFLzRRD9EgrHnjurt4OyaWbSrRZyNsYpWgKgMU5Yj7ifK2VonwIeFhCUSYlgypKI%2FrNSMv5gws7Qh8I3BtYKlP1STcurC%2FMVkbgZnZK6zptbzw%2FMAU%2FyXA%2B%2FoszDL0SojGmH5GMLEAPjAj%2FINNV7hSnKOEgzDU3&X-Amz-Signature=26edadd098db1676040fca6e972a94b11de526537743111b959eaa37d77469bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIN7SUCQ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDEmxkEMt6epGZo4OdBGGTjstJ76Aam4FsvSTuz6tXV3QIgKCTh0pwJkPWzxMHtQcEjTii5cV7HfoRcCmHeoQhqA8cqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZcKJJN4hyiPJ%2FLZyrcAzKhjoCFy4qJ4A7b0Bg9UNMYzFbIO85WgF2E%2BHS17ISnHOLCuM7Tidv%2Fu1XdKc3UFWuWv0oJeEeHgUuOBu7ezJBmq7M%2BKXiscw0fwFNPsv1KNX%2FJlr1xnnda8QTSaNPO2WxJ5248gQZ3d%2FpEiud8tOLHQ7pQV0rW6ReQ4OslfO%2BVHhbvlra57Eney%2FiYdVHQ6WjjUGwQkAn2zqyEtBhFqUgqNTxtYuTMJx4vdsohATegAExr4BMSEn3TqSniIz%2FO1hKHFxWgKcAKl0DznuqM1GPwsmrbxhKQ2K0KPWcaUtb4XaN1dAZLO5%2FqPVjAa6X2ao3VJHRBMbweZjXgTlZDZlh8NxpWC0ddXYhM1vWjA9HioGhkiNbWIeMNRyuV7zwUql18P5gzR6CVkwmSOd26Xoh5zfT%2FRQqcx0reU78LshNsN4IaQEnK7iNOA69eURbBHrr4T%2BxDq8ewrpkWNh8YN%2FpG7NPp0NQ4xUSEV6cQQRQiy03pX3too2dMzOPggQ85GBMpumu1NYDEmX52b%2F8JfKH2zbMU6Su39BKhcohJHsz3em7qaKm34IwGc742H0BmgrU%2BMaweL8VZUS15OmYgw%2BDi9uFEiC2iEO3IIudykCqcIlzeymC3XaJbUDtTMN%2BXo8QGOqUBK2pUnKGsj6HzrRrDQGN1gx1kXqXLPd64Mr8qT%2FUlrFn2bVe3fQgmz6LrYSJQLU1E68B25z3dVV3NKONfpWjKPlBtBbhbeTTQ%2BlUT5zIfNQADIJI9uwCfCGDaec9MzeGtpEz8Q8EJ4BuK5uict2TSir0Qp%2FLtXwpDENOk6QlxXyXTNKRHmGKw8TPMJVUnX5c2KagqnjOg%2F5xRA%2F2ByfO%2BSRkVGLRO&X-Amz-Signature=79a28a78c89674ccf786cf22b50d5bd93aaf78e0a979d1fbc1258a32a85eabe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=91fe63cae44470c29a5a818758dafcb6ac2e32ae23836b7f8b89e312df3c3357&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=ae6bb4c562264887b2820a16e707c28ab647b66c1b98c445d6593b78c4a90cee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=6ba7440cb55461d95ead81a772abd9b5b7668365a062bf99c019b6b42d6f5e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=2d960356babb22b4c90941375d386e2bc4769f960c4634798b1a0f6c99077caa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=be656d940b999aedf28d741d9fcdb0c80e707fb40b00e4b8d9a93af60bcddadb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=31a2676a84e23191304b28df6768cdd1a6d93ed29efb18e02fe9877f4101aaf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=3a3ea752d867d3a66a9457ef48aed296b0c220ebc3cf3c9a2cda34a413076955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXH2M47P%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDP2A%2FfI9Sf0G13f4LGhV12%2F34GjGtkTFAwGYjavmyNPQIgG6pLKOGFT8P2ERm8l%2FDAkujJYf0NMvQfS6SY48HubycqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDp%2BuG0psUCWFov8sCrcA5W%2F1hUgKPqxbBtuHCzl1jkSWhQYGd3doEDlqYa%2FgDlTWrpLoLNvlSCayAyzWz7y2TTaPbbP2aFVDXlm6TVXZQ8HfvX7mivA9qoI9oNHncti%2BUxnvbauF4kEBVr9vUjoTROfyWKUQWId7W3lTrqIJ4L8de8LQ%2B7u8Ze323OZczjhAm5tP4LGwV%2BPeQAO4MiW66OYjYdBv45mKNPZzOY5FY7dHb6u9CVS6I%2BAO1zVap8AaI2hInSfJflLlL6J6G8B9nFfQ%2FvtwvJFmvgb77kzhJZ8J4qR4XqadvH6SrS9IagVhd%2FsE%2FJSwZHRyLDzRveUf6TEkpddb33hM16OkXUPaAG13oW2Nbc3j6TP%2Fa62hJt%2B7H3R0X0GIP8NPQZkxK3fZTWKex%2BTRSB41r2pPP%2B%2BLB8Pi15lXezJouVvFbBI7eZHPnLU9TG8%2FMgpFrpRKB6vz5pMI6tPMygekyJvrSmqEAnO2guoB0POPwC5B8g%2FHjg3zVuowhzidDHX27khwwIglV383KYrhvYQdrGxAFmNNkQ2ejYX7PfktkSWVrqH0QFE9%2BF5tFZmyqzeHtX0ZLf5XbLzkNvdr0ioIZficIZNmRw0LA1OlyiEnEZxAqMX8pp%2FrMtLuBRr22yG5HSqMK2Zo8QGOqUB85YJRyrIc4dAtQfg2ixixQWADXq8YRmIJNcIJla2YY4krTbZdPefkHUPXzLW%2BzwIc370u7YlIEJORLKLcojFgn0W%2Fwtx92W0pMLKS0NQI%2Fy9yZVsTcddgTB6jdp9%2F%2B2ABHLE0QwJR%2BAyklkC6v8IRLVn%2Bvz0uEmUzGuvPOzdsCLeedTLuO9nz5FhhcPWzkfI1648bm%2FNLtDl76xdYHMgJIM6giih&X-Amz-Signature=d5b38b689676885192de178866e3823b47429a5ea181264348de3388430b0c71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
