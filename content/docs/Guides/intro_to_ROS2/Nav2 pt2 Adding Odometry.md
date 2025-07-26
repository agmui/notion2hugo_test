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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=75956258d49efc84232b5fd0f9e2564a1df7af628c5e85e02184186e0daa7a3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=9de2f815c61f9d064efb00e9200faea7b534e9768d6b1325eb4b7692f18e4a5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=b476a2f1b4baf7ba39e3d7b7dbcbae90aced548a63bc56279468cd169a6fa8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=842d727b7bca4f48281e81c7ff44655212cad762d99fb5ea734e45d4ea6674f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=4781b7a5e4e7683a5207058c9ae24695f40565684f008a7e07b93748f8a60bf9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=7a58d6ae663cc8b0162249fea48ea5628b28356b3ac935a08b6474e949a6e677&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=51b538e31660b029e8b91e1c210e3bd3fb32f93cdde3823c5d8cef005494fc8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=d74f2650f45d32f625cd50fe6ecb9b46ebe0eb2bb9aed01c8a615d37e208a4cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=a0c058bbd7cf520c92d54fa4645ca879642462fbe46b36c540c85484cf4cae7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC54NEVJ%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQCTJM8yKfIgQXnYVrwenLTkMdgZ0D4R%2FfB%2F44F1lQPhUgIhANYj6365rFo0nNGlzQBf26FI4qSESVEVic55UtbOixjbKv8DCF8QABoMNjM3NDIzMTgzODA1IgwTGUI%2BnMLIgWFP4Egq3ANekfmuOW8mESjcWh1559xvU76KQ5%2BGXVITjMmI3NNhzNc%2BEf46a%2F5dCnj3pRuOndZDkrLE8%2BnNqYLVthKsKxqv2L%2Blq1ChropFijcYifez8VOxeMKg1mHlUFJNbvpASv6a8U3IKasp6GwUX1PPOz3z%2BS%2Bo%2B9l2PZJpWPgl%2B%2BUnEh4i7%2BnYDGRDWCATi7hKu1mVXuGnaLQeunzesgiHn6RIBr0uq8pBoDTEul4M98rq36UzAnNSG7rUt8OkQazXtp9ruVb4WP4T7TlEyIJ4RW%2B8yGJXJiNLhzkCZHuIL5rNSdhrp%2FUTRp5HB7EFG1XotD%2FSjQBOL0dBpF65XyKn1buGVT3XwSNllb%2F1ITdEA4pHeeOAcJhNQLHg4xdfeuqZGdbVUzBDAIWTAq6qH1hFgonPWmQyGg4Dkn1cVlyFqwtnUA7OqohDEbqsdgM%2BS%2Fvjm0rG7swIOB4Nm%2FxgQ9NhpOeCRVtGY1gLG%2Bap39zyDZ9WIZR2Be8VAl7VxXe4vIK3BA2y5uUiqCm%2FeAjDsiPJfvzhCT1Co9ZjGc%2BvalMKBkdyQBpP4HsDaXTPnrTArxKL8VhgU7jp7%2FwgZ0SIl0%2BaLrPZ3e73CrQxc6B00ivU3RAIw2dgGZo6lcjvBnumrTD2wZPEBjqkAUh1k9N80HrFhWDggKj12BU4LFlr6edTKEKdkuhWdDb3D%2Fo66yIjXecjjdfYjuiU2RjAutlbddbCCk87G7fS4mtVAM2OWFawaZ3tQTChAUqHGN81ByJm1rqt6OfrAMD3D5XQTuTzU2lDBnG8TtO06%2Bxl9NhfePesCIz%2BFO2kadvSePxZyXZwLpnpY5I612AdNFE5fskzv%2BW7c0VjxwshEKqNQWNl&X-Amz-Signature=e5a6ccc6a274718fc73d42dbbd0d2859e6dfba9257095c45a271727197e72909&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKMLRMO4%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJGMEQCIENUX9JbWd6TIOp0rpYn7lABHEwnK80qoW8vWBOki%2F%2B0AiAUXlMPAP%2FfQPvMiW80%2BoSGmqqYiIelGfzgE9U3rhnJ5Sr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMN%2F8KREzsCtto9fiFKtwD8nIhaSmcA6EsPp2Ojs1FImYLW3dkF4T1Mb5oVxftMf5%2BWCGnAbr0Y1Hsi3YYtCPe4d0%2B7KiJlU%2Fi6Zm1SBqsbtvmPFn1b7kmsHGQVSPL07ZOaI0XRFE9TCRxcBYO5FObafzWuXEJGe0Z8SJ0f%2BfeMmZqAKmPwK9H3gxgUsDcjaAABGb%2FvhM%2BMSCHWiBie1cqoSkQpKh7Jo1FvBshBQQdaRti594t75H0XPQLPIn6Pt4xl5eP3ATowZ3MiL96AD8wHqwmpAQjEpcob1larFTaq9%2FJL%2FZsIq%2BOdHYxa3kE86iPKhVK%2FbQxWVcZCNb8iOhVEoCT8FWy1QvTZZj2NmMIGoVZu7TVCTrJhJpzxSxDbKFC0yDr7tnDsy21FlMor0d1wQ90G6MQtGjEEAjmrJgXzlRPnxlXW8Sp4HuQrUMO8dxY0BHjz5V1JAG3gJgTbEFIe36kZt7dZxhlS3Ge4ESs6AjJMFJbx%2BB9bgWp2biS%2F4QEeff9E9U2NVgpQD2QrUxi37HuX6d1xbPF48LwXUWBRZFUepQxi%2BEyvpB67DnFmDmjlZXpoHWfah8yy7J3fM%2BXMnL40KVqEmRGruCNYQeJo0lZdGu35G3W4IJ%2Fxorw9PyWsuvW9YI%2B4cYlUvgw8cGTxAY6pgF92%2B3oVx9KA%2B8oyN8FN3OAoFgpD4tLPkgSwyPQ0wOYCxi%2F7bu31lju1MNqUe2YCaYAZyO1iKHji29TrXEXZ4SpIpZ7XkTZ1tLJ1zUOcqMzDnQq4tpOBLWR8mDUxsZjGcY9BEvVOyl7nTFLcO0C6e8W7ZrgVXdHbXYGdPEPWH4Y9pyEnSvfejWNDt5uWZEuAaBuYqiH80oxunm892z7pmKqUR4%2F6kH1&X-Amz-Signature=41234d3c718779c88b8d0cd5548fdb3ada1ff7943ed6d51ba7e3f8d5564aa015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=7e2177cc9d5cfc192f3c666e24c614eeda63a109f14f8fc59dd0fc7184dd6780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=517fcc2cc5e60e10cfa176446f193e439c9eb469a68293a5205724a9f3ebd07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=e891b3637d12e8b6990cf036b0eefc0186c03a010fbc40ee629de38142f8bb4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=df2ca5f0511272cd4f3a152ed76dd37558a138abee2da093fac8fa44655b3ca2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=4b0d9f6626a1739fbb935a87141ae43c2cccb95fbb17b6bc4d527aa2f7ee7e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=a6a0191eff1608df5edade291272d7aed0db15c6917b00c1d544496b5c61c8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UR3A4EJ2%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T170734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDWwZEgHxN19p0icNRMjxCio4sm2qCEHBVxSYpMljfmIAIhAOgn4qQWWchpCfjZtkvvWrWq9KB7Uh%2B66uStgnVfOtXJKv8DCF8QABoMNjM3NDIzMTgzODA1IgwABTQSym%2FRxw2lqVMq3AO6Tl8Tt%2B9kZiq1VnbN8msbgUvZRJdUsuz0QdsWAVM4NLmqNgC%2BoasxjjuJJ0fDAQhskSvKtl9RhGZ6qVLr1xt72O5VC0kbDH4ja4lx0%2FdxCW3itzgUOKQXndwvfWKjwZzMVMLzMoJcD%2Fqo5SGzlsTBd2n6Xm5pq1GWWtKXeXp5ZgeALbg0nSmPF9QjtU4wH9AGQEofG%2B%2F8Uy4n4v%2Foj5OROafFTOwsNDpw4F6Ukw2pRXozZ9HtQXCjDIGAto2WMwRdzj%2B%2BTJxWZD6ECkJSzPmjQS7xLyawMyR2rkbD7%2BaUanLg%2FRATm1K%2FUr6IghyUVI4itdzcjGTXzxZONyAR00s2xxSaURrcqOPYfBiAHnGnCcCwo%2FiSxHhRYr632xXgwbvESUjxDdPbgHvtr02ly%2Bpt476Aqo%2BBGDRjS9V6Bfnn26sSIxV26FaJEx3xDFHjidmPIgaJYuHNSYniDYjrpGV1fxRxYtTxAJAZHEy%2FAEoP%2FCcDADMXn37NMVcYMfAiGQnE%2F%2FxvD6wErQTtal6q5JDdtyXgCiRpRWgueeJlE9%2BCVu9pPmCY7m7bgpnRQBcnFOy42qC22%2B%2FyS%2F1vEeMVo03h%2FYBDAvgtLAwuwD5fSk7ebBuunmEX5abiUnYkxzCLwZPEBjqkAaCb42flpQYSloCpSaI66s3yf4Kv0qFwFQB4cOXxfAkWc2SvAwUMcgXgpkAJYmGtC3k5bd3kmvJSIkwDucPX%2FH5JQ3RMue%2FT3DpYcqUT4HXgMrbMNyTFM7XVA3xPit4w96rwoZhWhtydlgNxPLZoAZQgDTcR54beG8umIWCl8t3uIUqTPvgiZSIFB6Q0lgmpZuX9qRYEpJ%2BWNn9%2B%2BlL%2BtmisMG%2Fv&X-Amz-Signature=5574d10626172efd6039ff86cfee9bb25b7888b50975be9cf25393a92823089f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
