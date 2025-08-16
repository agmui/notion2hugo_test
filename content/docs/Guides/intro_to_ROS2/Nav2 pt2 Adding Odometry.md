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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=e4431567072485e8c7b4d508ca0e7418d47c55259ebedb935cd17feeabb3b3c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=1761e3e9f4a10adfefbdffe0f29adfdf5ee7c0f870f19ed4b45149137b369d7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=191b537f11eb5cf473ae68ed9621882bd47f53b949adb73e9e8addfac1da22cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=6779a7102623508dd885179f6e9b46402ac73b6ff4a283720f9933db4a976979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=8724eb6ddaae59263ebaa300374a2a4699560a2d7be1566d74def03823be54d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=2ac9b6b8ea6da64361e16f001de8ef966c02aab70bf6bb986eb759deb0b4da9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=3ab0a01a75e317ed768ebc661636179d88d31a9ca31240359f95678f6ba1601c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=ee0bdc2bf92291b2246a506d78a8546917730913060ab81f8279cdceb52a019d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=ba202fbeeabefd1dc81b01e5b597cfe136d23acb7d6be12f878d5f5450ffcf2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662G3JTBFD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCICHkbcNcqbipAyA7PgpEi7HwqNtt9WzI6X1eVuKlAzZ1AiEAzKBM5Mbfnq%2FSHgrHQo97%2B7OEDVC7ENwiubyvXWWgKn4q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDJG4jxdt%2B4wHoL%2B7JSrcA%2ByWMbbn1iW0OIYIGRnjN8zbLM0%2BqFy1ZcjCbWu8qOQna%2BlJcUm4IrOtNjvy9wHNSMnSRHrGl4kWFdix2sQvGsVYReUBN15rAMayMQUuQ0dvqKqTAk3sGlUDExX%2Fx6dyIBhKsKdRgKqdUQOF%2FYXbZuzir2F93HyXnhuorA9oBCHPDTw3E3TAW85fpyf7Ug%2BqIDWKXz2%2F4J7oizyE3%2Bu2J8BGwxdth3wLpv7eW%2FHLkFHrppMZqxARE7ffAHjyLqrA48h%2F5Cg4u6KySBagBeDOVLWKJnDNb01ohKJpKKh3bkujRBdn710e03pZUfNabSnKZDl%2BnNouSqyEaiQoE85z8Q1K9ddKThHnggUQbFjsZkQkjp37%2FMbHPgIrRecoIuZVtsrN6nuAXidnYLPHGgmdz3QeQGCWlUxK2QH9XqtGREvLuDap5t6H8HNZclf%2F%2Bm%2BeMghhJPHPddxtLyO%2FqfAr3oOsCShbBVN4GKYNWb7gQs%2FVdSfRUR12F%2F19XJ0E6H9ZkDvTYV7K%2BtlLkMPR01LBTt8Yr6oyX%2BVrdqOvW4wBCyEn8yo8pxz5qB%2BldzBy6VPViC%2F8gu32yGi56u0cCNNfGj4731%2FeReNZpByE4rN5oM45UTVyNtdRjwOyAQPXMOj3gMUGOqUBfy1srZhDiuyjQhz%2FTuMPq1k6wzatm1gcWZtrbaavTrf2iZ%2F4fLikheIEzCxfjqeZ6veUu4SnfzlUzYM2BnUdBEPWzsYiD%2BFGQqiJwuIRWb%2B%2BLN5w5lxmsEEH3O4VhoagaEl5y1x1LE6VzMLE7tNbJrsFBKznkooNKCOe65xZU2I%2FrmrHP1eJxUadRNldD9iur4qKsAFcfhGTq6DcMMoQGtgpLBJN&X-Amz-Signature=99bc9064e3cea90e7e35d91f7f1281fcfa1d927791ef692ebe55b5d884c49a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKMLXITW%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDzD4BIZwQtl94rbRa6ze9Zl6Sq0XuzfVuBn7%2BSGt%2BW%2FwIgJS6cIcaZL5En%2BsLQoPa9EimJAigYGfWyYnDhfVAtoMkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDG8E%2Ba8%2BJkWLR2BsdSrcA62igiUAD0jc%2BuR8%2FeBaEDkuHa4D4FYahjm7%2FWvlFgrIIpWVepmLnCSSERhv2mx%2FjoO%2BbDzD2yli1MpaalL4DK1GX%2Bj64w30mEu0vMF5tbM%2F0W29qAI%2BVPxoHWq75SK%2FLZaOXjwHKuVPMzesgUEkHcEMlmIOecEC18Ddk%2FaTH4O7WE2ziyRQ5ikeaYRYqElnlpr%2FnS5gSp4Z3ZnYYQ7wP52Vn5KrznEmH6U8iNQaXTcpNSC40rcP%2FHb5o%2B3xdZCUtoqVlRJCSMMMlkCBtt3LaAPpmsWNtgTRyJqZSoxekH0r7GcDwERheENGLRl7sqgFf4%2BgDddJVYMu375viwA1ybXLaX%2FXRc%2BYcMZSD5nyFqWI66H9LSmtIHQvpHXBEQjmUsYdleXJr9LdM3ut2Z80SP1afKcOZsbKKLkLxw%2FtF0z%2B14YR1A4AmqOQ8iOrREIlW7hUwie0roiUgaj5FtIIN1wa510%2Bb1NBX5FvbuVm2X2T%2Bc9hRwzUXT6ybHDV7jtmZa87u2aemWGr5MLIy9RzICCx1k7dCqyakfwHngpsM%2BzKqdrl6afe0f9s6uaHI3bOiJt8M%2FeOu0uFXwXumKP%2BUlHt%2BBG6HrxEfy1CIz2R9QFywWcw18%2BSkG7tHrPsMJ34gMUGOqUBh51n%2BXcADjvadg2MyuraN4YBH2zrRvCzSZjtnDS1Ps8B8PkZiJ1Y4k7iRHBlB9kC9cuKhmb448kA1D5Zv16%2F%2FSIEW0KTzCk6pMLTmCuH3BbqHCBd0U4RCCBO1uvCFnJfnTVkdiX%2F19TziGKfiTeLMTcJFeFiwFsnXRCPYrw9fb8lP5VYWPCOOU6YeUoRqxQ3rT1H7RfX69aG3sWbVvMxmaUHkgOw&X-Amz-Signature=5fb14eb44839922231e8df4a52868e5ddd8272707b12fb8fe0582cd9c080edbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=358733c0771217af014e043c50138f64419adaf48fca38632628ca32745e3718&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=0351a4667bc7c3728616f7b82d94be0d547e418df7558d9d76336a907d40761e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=163a818687e7364571df9528d2845f6e8ff2a5d4c847f13db6872821a094ec90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=74a70ca377af2b1b7fef99956613abd345c38f556e6cf662b87abe1a71f243e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=58e11896906b7dd2b1fca1b1736fb5ee915d6d7df1cd61ad8fa55cfbbea7c4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=fe58ed80942dc191c847eb0c3c2791c6a57622146d99dc57c7cc1fb989c576e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=c55cd3ee0d02d040901484204164cb065c37176c75f0f20dcefd94b8159df1fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=87f54953c9ee2ac922fcee140cf84aacad1f767e9dafadcbaaaf2d95302789dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NYRGZBJ%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIA6qN6tiYlEsOmHBML%2Bjw79GHxweW%2FOp2XKoEG7LORGWAiEAiAZ0vSe7evvoQcmQtgR0BXYUDx7iFtl6z5ZjDcrhRY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDECvfcFtXQsxRh%2BwHircAxlAKkae7DOh0MVS6f%2BknjM41uLudHu8u%2B9Nt%2BJgFuU8OybRu9GkOtbhF4bjRajx%2BpaG%2FC5PfAXJbC2lNsxTUzmarLE0NDX4f6W9UOEdRMGi058D87DUTRlSPa%2BZ37zrbYqaEXeCWRT%2B3xU7Apmg5YpuyU%2Bfldv7GMNLUokN9TVp8qxaUWBOxyaJPkp2m4Z5TVPXdtZDOmpysoCsABdqopH4m85jaa6kOa29JU6Qf2B7CSjvZoA7G0gibXpeKisBERbnF2ME6DTUvovfS3AysVZhPf5OPhhlODamrqGIgE2%2Bg8lazk1sT6TFgQmM5y%2Ftvn8fBCEwWy%2F%2BWvMFCZpOeBNKe2LQRyR%2BuH4BLJbFWxGgwEqEYx5dySXGHAY52OFl9oJIH5a5YF%2BlX9anLumR6tDF033oMs2IVeVFDNYiVvgTxH6gmsRdvSg2ffgp8z7924clPnV6RNDGrfEB1aKQl75u8C7d5qPIAD2qnoyLcf08YUyVTyaJCIxVBJalP2p1x7IsO7P7dhM176TftAKzkpgcFBlMe0pmat%2FJyeouaXMQu6BcevymzLgG84n%2FunlB2%2BP%2FNHrnDQMwvYy8AQceVCsHMHOb5jkgDN%2Bf%2FBTKcs4OZYcAiCzl8kzkOnPXMOv3gMUGOqUB6gtWBKtRyiz2MXg%2FFnGb7nsz%2Fhv%2BaTWfDQFzKXFIQ2QSsrS8C6TWoft97nGP1fv%2BhjvfeyS2YpTig74dLWFbfSrnJO8oh7QHWklm%2FnEu7OZRklHb8yTrPBckwjC6%2BbVE0CAiC4nEmOZ1iIDt3Yl7iIuEvrdQczcTNyVqJK%2FIDo%2BqT%2Bhzsodh%2F21w784LlA5Gq3xJX0pZhhN0NA%2FK1n9sFb4euLjc&X-Amz-Signature=9fcaf269b23e5196748051b65c75af097cbc62c1fb26c545e40c4a7e035aa4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
