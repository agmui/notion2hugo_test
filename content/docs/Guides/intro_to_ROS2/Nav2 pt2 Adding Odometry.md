---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:34:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=f0e56865bb40a458b8d85d9d117e70696563b51dcd3520c925f447fb3b8bfd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=eb44540e11c7e14407346a630da6930869690dc1d367f0aafef21bf4679dcb5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=108787fe5b9100337a80db206f0e37757b63ef57c6249f876e6bc273bd4e4707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=90ed3091c1db3573f7ee8b8ecb7b060d9adbbcde8dbc7a29859b0e130672fa5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=fb79fbb0c398fc9c2286461bb1734cbf93165aa2ad8fcd7d25306bed27c55234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=122d7de66b694e9a921023459ed574de668acd4291ca6ca4ba66d3560d30dab2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=12b2369779f87fdef8a088b2abe75e8b5c5e68ab1fb938d523aab5f7accbe185&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=5f2547a012bc15cc489503ff7fc7b92f66634dea8287dfb70a958159aff4e815&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=4756eb1c8c582c0ea8887acecef51beba3887bbf6111176b9a753f5940f9a227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMM6M2P%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDWS69FdbRPDgBPkmxRCzj594zElEbbZnad8c4%2Bfi5BPgIgKdjMyCt5NXLIiHN2nlnQxt5FAet9WaVqCDN2eiQ9ht8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKQDIy%2BwWPM1xSgvcircA%2BH%2FJORSBtlMdmzDihHZQ5GglF0jo1u1XG3T0aySHObehDLmkweJHta4dPlxWQq1yLgyYD8bhmqD%2BAnER2jmaHlBwD08CkFUoS3sTD2DXf86V9%2BmU9diklsL8eKCUSpFETnyv3n11s1uChYPivF3pto1EKwsznRn%2Fo7t4cqLkRV9AXaudybpFxbW4POudydzh4o%2FqZ%2BuqfmEpPTd6Pgt4Bs7AEd3K5E%2F%2BfkSAh72KGzPQ9roj%2BNEKgSddCrf1TPp6%2B%2BdLfLdZSrGnL2W%2BF7Bxlt4E2R%2B0D87E3kp3jAJEeALuRxgfHROpqdywkpj7w5891%2BNT65U39zxpjZkdaozvP9msNU8cFKZsL9qTA7%2FU0LyVLGp6rsqdihOR5xD3olm5GJ1F4pt42BmrPZjzfrmwGYDZdJJOr774R8lHhiiSUguzQLheplXVn%2BryYLVoAD0xhNdzAtuWhtjpolLwZJIRuPn2CN5AGohATn8KmQb%2FMNIkmMgUY2QO%2B%2BO75StpM1wMl5CTM0JYBEHfxTs7izJKRlTZr5NkHCw0VbDvBT7Drj2VDZFWm65saU0LGVbXnKV2At27Rs%2BwDD6EbzZjqcYva5HYdkWx8NEEDvU6DgtJnD3BcYztTEqYbazJW3tMPa1iMQGOqUBWlRe%2FRkwZ8Ikdz6PFxC6YBEIhiLcN16PFb7DEYSSsdAaKhn1IyB1OWdffbouHVJ1ARCEMo50K3pttck%2BPaKxL9wxkTeB%2BmOt4omiVO6kt8v7t2rjkFbEIqV2608UmevlUoobCu8HmVjXKFun6LjVH51R977cIF8c0ECtQ9%2BWkbrtg02Y1SdIXstzOzqtZlp4xZi3EBFloy7N8mTcmnOlKx4RMaIk&X-Amz-Signature=1bc1b4923f791cde41c41803bbed109c1e314c82ba3efb9db2b78e4589ffaedd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=ae17d746ca9e27585350343afb08478d27f013eab913d95dae2f1ae5f4a70495&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LDOIC7T%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQDy9xXPiTxY4yic4ptGYO6UEoyV%2BtU71xk27IbsbNOIiAIgNtxDl9tEN92tAnaXwS7aYegsTOnY8hKHqkM5tOfzcjcq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPQyDnFb1Rz0k%2BMO4yrcA21%2BWC4pPrkVMod4R4XjTw4YdTsW6Tx90bCa1kuExDM8hT536uRz%2BQuL1GYFvglKF8bG3Cit3XHUeiGK3VFs%2BTXE%2BVFTk541eUMyS6bogHuC%2B%2BgGuERyEm8BDyuh1WgAnBhpGoKoGzpTz632k3SNCaC0NJPeXzmH4edXe3XNz0RrhAwqmLmfP2rU%2BsRHpt9Peny5xP5EqikeZD5vtOZgYfbi%2BPLnRSFYIa1EiWY0ZIzLPNHQX13jnDQqGbqvf92r4J6n8IEezRKO%2BlbVTk%2FoK%2FGUlV0jMHsIIiqmz%2BSF8K2KKAlpSMx9KXGchw0%2BZQ72590%2ByoTD3R1v9O5EIfElK7ou0CUMgo6njyjLfdZ02bm%2B8HFxkLt%2FFirIIQN22tJAdMNbwpzInFrX51NCl86%2Bjm3VhL3Y%2F4Th38cBlpjwtbSLmagDwMRYnAh9ZwCo9zc%2ByVjm0xa%2FtorqIEOEEetQKso2RFMDrRmxmwrWxIhBYEDJfHS7idy9ScwR417nO40jSrjYtB%2FROtV6%2BwM3rQzRIayRE5ArdvY2%2B8Vjl6EfhvuUDEONrOs%2BDm7%2FKYqZEfTxf2jf1M%2B8%2FjYHmtNcktHuT1xSOTl3rfOTjZKJznrvfOFlrPTihb82qQbouk0dMIi2iMQGOqUBQmIEJPKQ9T2s%2BhhTf7pMd6Ak22VLnI9Z%2F34ik3F6EBxGg8LPi7obeJg44nWzhfA7lppha8UcCSGZja0cgIGKQxJaICU6HJVJoOOpGzZ1jKML%2F4WODhL4uzGYjtUIWyr74%2B8mRc3cRrR7jMKQzuy8tQIjQcxl7GhWCe3IKfVdplVuXQB81WibjsCk4fYUcloKlxoiE66RuIbYjUopi3pP%2F3uC6xfx&X-Amz-Signature=510412f3f07d2dfa396c33e3c9501cc0da504018f4d4ac4c9b73887ebca62681&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RBL5M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbkDkK7zDz8%2BJXg0RQz6K9G7q7ZWBfEx0ZYSTM7bsgjQIhAOHjAzI6Q%2F96974tFcIQULJfAfXamSs8Ad3yABuZk0%2FTKv8DCC0QABoMNjM3NDIzMTgzODA1Igwzijyaa6RndTczUc8q3APWC8O4dnMeOqvKUHQ2W8S1GiNviiJcfORxCuNcucyCe8hIQ1Y90%2FcoYlsUJEoREmLBjcVDzDdCDaEZR4WSPcaSpzecXbHsaAD3ErkZ46aT3aeOPa2%2FS07TpTpZxlU47e9b2azHCDk8cY6HidAurK8zMYAC8H1UVWelg9rx1zQy47Gmd7%2BQZ8B12FIaMeznhwKbUdNN8A9ZrfuyRTjAEm4cVBjWQfHbUHN95vy%2F1BZH2SST35V53kLqBgyUafhy81Bmjt%2Fumn%2Fm%2BLgbhKNq3I4nSWw0vON0kKMbmJD%2BPQhB8KEYzpNh3PimueFK6kraYRUnji%2B%2FDZL42HS%2BVQ%2F8mw0f3lYyCW%2FBGb4IuI0l%2FgCm27vwW%2F9%2FcuKqGnJDKO6C4oHwo7WcRF19jUAgcYD%2BHpr4bIboMos687WX44hr7AU5rbn%2BkzRr4DvZZcz1Yx2SoDaSU8VaVe8Lup3RGS9x5Y6V5ciCKx%2FSVFH4xaSZJO%2BXkgRwXeIUI9ku6WYZkxmaQE7MRpCFhE4C1UalxpogyAWzho0eRryhJ1ITxl%2FoAD8Omfkv%2BlQHM%2B8Gnh%2FKatghpIm9y7wg%2F6VgWwdZlP3gzJYCeHz0JvIHUHm8S2l0Ue8o73YIjP%2FNOzs1OGL0kTDptojEBjqkAZuWMd5H3UHF%2BS2acVsXrsfpoOe3Qqx9fVDWVJFNuXIYG%2FSRS0jol0xNR3%2BMO4O9WHzqb0DJsGITjF7eBFfheAL2KPDjy7o2ZpWZ3Yxr2E4IyNEUzitlF5eCVRJI4oOhUovFWnicBB%2BTo%2ByX%2Bo2PO95hA9K%2Bu%2BMZmbJAoIly%2Fe1j9k0r9QtMNC%2BVnm0xNhoFGSt4Jpy%2FcvHdlnwv5%2B9kwZ9JIryT&X-Amz-Signature=0f61f2a90e7363fe236f0c38c8abd01dd5ff65f484a2ef131010e94b95b38982&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RBL5M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbkDkK7zDz8%2BJXg0RQz6K9G7q7ZWBfEx0ZYSTM7bsgjQIhAOHjAzI6Q%2F96974tFcIQULJfAfXamSs8Ad3yABuZk0%2FTKv8DCC0QABoMNjM3NDIzMTgzODA1Igwzijyaa6RndTczUc8q3APWC8O4dnMeOqvKUHQ2W8S1GiNviiJcfORxCuNcucyCe8hIQ1Y90%2FcoYlsUJEoREmLBjcVDzDdCDaEZR4WSPcaSpzecXbHsaAD3ErkZ46aT3aeOPa2%2FS07TpTpZxlU47e9b2azHCDk8cY6HidAurK8zMYAC8H1UVWelg9rx1zQy47Gmd7%2BQZ8B12FIaMeznhwKbUdNN8A9ZrfuyRTjAEm4cVBjWQfHbUHN95vy%2F1BZH2SST35V53kLqBgyUafhy81Bmjt%2Fumn%2Fm%2BLgbhKNq3I4nSWw0vON0kKMbmJD%2BPQhB8KEYzpNh3PimueFK6kraYRUnji%2B%2FDZL42HS%2BVQ%2F8mw0f3lYyCW%2FBGb4IuI0l%2FgCm27vwW%2F9%2FcuKqGnJDKO6C4oHwo7WcRF19jUAgcYD%2BHpr4bIboMos687WX44hr7AU5rbn%2BkzRr4DvZZcz1Yx2SoDaSU8VaVe8Lup3RGS9x5Y6V5ciCKx%2FSVFH4xaSZJO%2BXkgRwXeIUI9ku6WYZkxmaQE7MRpCFhE4C1UalxpogyAWzho0eRryhJ1ITxl%2FoAD8Omfkv%2BlQHM%2B8Gnh%2FKatghpIm9y7wg%2F6VgWwdZlP3gzJYCeHz0JvIHUHm8S2l0Ue8o73YIjP%2FNOzs1OGL0kTDptojEBjqkAZuWMd5H3UHF%2BS2acVsXrsfpoOe3Qqx9fVDWVJFNuXIYG%2FSRS0jol0xNR3%2BMO4O9WHzqb0DJsGITjF7eBFfheAL2KPDjy7o2ZpWZ3Yxr2E4IyNEUzitlF5eCVRJI4oOhUovFWnicBB%2BTo%2ByX%2Bo2PO95hA9K%2Bu%2BMZmbJAoIly%2Fe1j9k0r9QtMNC%2BVnm0xNhoFGSt4Jpy%2FcvHdlnwv5%2B9kwZ9JIryT&X-Amz-Signature=5a36db04d6cb8dcf7aeacfbf4bad1a7ec7fcefcb3a80f2f9f1e814df8fd52a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RBL5M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbkDkK7zDz8%2BJXg0RQz6K9G7q7ZWBfEx0ZYSTM7bsgjQIhAOHjAzI6Q%2F96974tFcIQULJfAfXamSs8Ad3yABuZk0%2FTKv8DCC0QABoMNjM3NDIzMTgzODA1Igwzijyaa6RndTczUc8q3APWC8O4dnMeOqvKUHQ2W8S1GiNviiJcfORxCuNcucyCe8hIQ1Y90%2FcoYlsUJEoREmLBjcVDzDdCDaEZR4WSPcaSpzecXbHsaAD3ErkZ46aT3aeOPa2%2FS07TpTpZxlU47e9b2azHCDk8cY6HidAurK8zMYAC8H1UVWelg9rx1zQy47Gmd7%2BQZ8B12FIaMeznhwKbUdNN8A9ZrfuyRTjAEm4cVBjWQfHbUHN95vy%2F1BZH2SST35V53kLqBgyUafhy81Bmjt%2Fumn%2Fm%2BLgbhKNq3I4nSWw0vON0kKMbmJD%2BPQhB8KEYzpNh3PimueFK6kraYRUnji%2B%2FDZL42HS%2BVQ%2F8mw0f3lYyCW%2FBGb4IuI0l%2FgCm27vwW%2F9%2FcuKqGnJDKO6C4oHwo7WcRF19jUAgcYD%2BHpr4bIboMos687WX44hr7AU5rbn%2BkzRr4DvZZcz1Yx2SoDaSU8VaVe8Lup3RGS9x5Y6V5ciCKx%2FSVFH4xaSZJO%2BXkgRwXeIUI9ku6WYZkxmaQE7MRpCFhE4C1UalxpogyAWzho0eRryhJ1ITxl%2FoAD8Omfkv%2BlQHM%2B8Gnh%2FKatghpIm9y7wg%2F6VgWwdZlP3gzJYCeHz0JvIHUHm8S2l0Ue8o73YIjP%2FNOzs1OGL0kTDptojEBjqkAZuWMd5H3UHF%2BS2acVsXrsfpoOe3Qqx9fVDWVJFNuXIYG%2FSRS0jol0xNR3%2BMO4O9WHzqb0DJsGITjF7eBFfheAL2KPDjy7o2ZpWZ3Yxr2E4IyNEUzitlF5eCVRJI4oOhUovFWnicBB%2BTo%2ByX%2Bo2PO95hA9K%2Bu%2BMZmbJAoIly%2Fe1j9k0r9QtMNC%2BVnm0xNhoFGSt4Jpy%2FcvHdlnwv5%2B9kwZ9JIryT&X-Amz-Signature=ea9c8b960705e2e5d03a8cc15bd4db9c365d60d95e4e762693a9252d0b42032e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RBL5M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbkDkK7zDz8%2BJXg0RQz6K9G7q7ZWBfEx0ZYSTM7bsgjQIhAOHjAzI6Q%2F96974tFcIQULJfAfXamSs8Ad3yABuZk0%2FTKv8DCC0QABoMNjM3NDIzMTgzODA1Igwzijyaa6RndTczUc8q3APWC8O4dnMeOqvKUHQ2W8S1GiNviiJcfORxCuNcucyCe8hIQ1Y90%2FcoYlsUJEoREmLBjcVDzDdCDaEZR4WSPcaSpzecXbHsaAD3ErkZ46aT3aeOPa2%2FS07TpTpZxlU47e9b2azHCDk8cY6HidAurK8zMYAC8H1UVWelg9rx1zQy47Gmd7%2BQZ8B12FIaMeznhwKbUdNN8A9ZrfuyRTjAEm4cVBjWQfHbUHN95vy%2F1BZH2SST35V53kLqBgyUafhy81Bmjt%2Fumn%2Fm%2BLgbhKNq3I4nSWw0vON0kKMbmJD%2BPQhB8KEYzpNh3PimueFK6kraYRUnji%2B%2FDZL42HS%2BVQ%2F8mw0f3lYyCW%2FBGb4IuI0l%2FgCm27vwW%2F9%2FcuKqGnJDKO6C4oHwo7WcRF19jUAgcYD%2BHpr4bIboMos687WX44hr7AU5rbn%2BkzRr4DvZZcz1Yx2SoDaSU8VaVe8Lup3RGS9x5Y6V5ciCKx%2FSVFH4xaSZJO%2BXkgRwXeIUI9ku6WYZkxmaQE7MRpCFhE4C1UalxpogyAWzho0eRryhJ1ITxl%2FoAD8Omfkv%2BlQHM%2B8Gnh%2FKatghpIm9y7wg%2F6VgWwdZlP3gzJYCeHz0JvIHUHm8S2l0Ue8o73YIjP%2FNOzs1OGL0kTDptojEBjqkAZuWMd5H3UHF%2BS2acVsXrsfpoOe3Qqx9fVDWVJFNuXIYG%2FSRS0jol0xNR3%2BMO4O9WHzqb0DJsGITjF7eBFfheAL2KPDjy7o2ZpWZ3Yxr2E4IyNEUzitlF5eCVRJI4oOhUovFWnicBB%2BTo%2ByX%2Bo2PO95hA9K%2Bu%2BMZmbJAoIly%2Fe1j9k0r9QtMNC%2BVnm0xNhoFGSt4Jpy%2FcvHdlnwv5%2B9kwZ9JIryT&X-Amz-Signature=6caf75493491208a268b4a78ff6a2cae79e3a184a123a2fec02684d6ab70b76e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RBL5M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbkDkK7zDz8%2BJXg0RQz6K9G7q7ZWBfEx0ZYSTM7bsgjQIhAOHjAzI6Q%2F96974tFcIQULJfAfXamSs8Ad3yABuZk0%2FTKv8DCC0QABoMNjM3NDIzMTgzODA1Igwzijyaa6RndTczUc8q3APWC8O4dnMeOqvKUHQ2W8S1GiNviiJcfORxCuNcucyCe8hIQ1Y90%2FcoYlsUJEoREmLBjcVDzDdCDaEZR4WSPcaSpzecXbHsaAD3ErkZ46aT3aeOPa2%2FS07TpTpZxlU47e9b2azHCDk8cY6HidAurK8zMYAC8H1UVWelg9rx1zQy47Gmd7%2BQZ8B12FIaMeznhwKbUdNN8A9ZrfuyRTjAEm4cVBjWQfHbUHN95vy%2F1BZH2SST35V53kLqBgyUafhy81Bmjt%2Fumn%2Fm%2BLgbhKNq3I4nSWw0vON0kKMbmJD%2BPQhB8KEYzpNh3PimueFK6kraYRUnji%2B%2FDZL42HS%2BVQ%2F8mw0f3lYyCW%2FBGb4IuI0l%2FgCm27vwW%2F9%2FcuKqGnJDKO6C4oHwo7WcRF19jUAgcYD%2BHpr4bIboMos687WX44hr7AU5rbn%2BkzRr4DvZZcz1Yx2SoDaSU8VaVe8Lup3RGS9x5Y6V5ciCKx%2FSVFH4xaSZJO%2BXkgRwXeIUI9ku6WYZkxmaQE7MRpCFhE4C1UalxpogyAWzho0eRryhJ1ITxl%2FoAD8Omfkv%2BlQHM%2B8Gnh%2FKatghpIm9y7wg%2F6VgWwdZlP3gzJYCeHz0JvIHUHm8S2l0Ue8o73YIjP%2FNOzs1OGL0kTDptojEBjqkAZuWMd5H3UHF%2BS2acVsXrsfpoOe3Qqx9fVDWVJFNuXIYG%2FSRS0jol0xNR3%2BMO4O9WHzqb0DJsGITjF7eBFfheAL2KPDjy7o2ZpWZ3Yxr2E4IyNEUzitlF5eCVRJI4oOhUovFWnicBB%2BTo%2ByX%2Bo2PO95hA9K%2Bu%2BMZmbJAoIly%2Fe1j9k0r9QtMNC%2BVnm0xNhoFGSt4Jpy%2FcvHdlnwv5%2B9kwZ9JIryT&X-Amz-Signature=f442e0d0a4f2cca6b40c6593f1cfb53e544a3573225bf9feebd8945ecf4d6703&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU6RBL5M%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDbkDkK7zDz8%2BJXg0RQz6K9G7q7ZWBfEx0ZYSTM7bsgjQIhAOHjAzI6Q%2F96974tFcIQULJfAfXamSs8Ad3yABuZk0%2FTKv8DCC0QABoMNjM3NDIzMTgzODA1Igwzijyaa6RndTczUc8q3APWC8O4dnMeOqvKUHQ2W8S1GiNviiJcfORxCuNcucyCe8hIQ1Y90%2FcoYlsUJEoREmLBjcVDzDdCDaEZR4WSPcaSpzecXbHsaAD3ErkZ46aT3aeOPa2%2FS07TpTpZxlU47e9b2azHCDk8cY6HidAurK8zMYAC8H1UVWelg9rx1zQy47Gmd7%2BQZ8B12FIaMeznhwKbUdNN8A9ZrfuyRTjAEm4cVBjWQfHbUHN95vy%2F1BZH2SST35V53kLqBgyUafhy81Bmjt%2Fumn%2Fm%2BLgbhKNq3I4nSWw0vON0kKMbmJD%2BPQhB8KEYzpNh3PimueFK6kraYRUnji%2B%2FDZL42HS%2BVQ%2F8mw0f3lYyCW%2FBGb4IuI0l%2FgCm27vwW%2F9%2FcuKqGnJDKO6C4oHwo7WcRF19jUAgcYD%2BHpr4bIboMos687WX44hr7AU5rbn%2BkzRr4DvZZcz1Yx2SoDaSU8VaVe8Lup3RGS9x5Y6V5ciCKx%2FSVFH4xaSZJO%2BXkgRwXeIUI9ku6WYZkxmaQE7MRpCFhE4C1UalxpogyAWzho0eRryhJ1ITxl%2FoAD8Omfkv%2BlQHM%2B8Gnh%2FKatghpIm9y7wg%2F6VgWwdZlP3gzJYCeHz0JvIHUHm8S2l0Ue8o73YIjP%2FNOzs1OGL0kTDptojEBjqkAZuWMd5H3UHF%2BS2acVsXrsfpoOe3Qqx9fVDWVJFNuXIYG%2FSRS0jol0xNR3%2BMO4O9WHzqb0DJsGITjF7eBFfheAL2KPDjy7o2ZpWZ3Yxr2E4IyNEUzitlF5eCVRJI4oOhUovFWnicBB%2BTo%2ByX%2Bo2PO95hA9K%2Bu%2BMZmbJAoIly%2Fe1j9k0r9QtMNC%2BVnm0xNhoFGSt4Jpy%2FcvHdlnwv5%2B9kwZ9JIryT&X-Amz-Signature=ccac550234e7964e857bda11b015dc55db8b632e0c59e2e9038b4adfbd69ee9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
