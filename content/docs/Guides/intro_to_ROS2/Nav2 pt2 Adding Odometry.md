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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=6c8e1171e6939f139d47f85ff2f78d1ef887dad26cdac31064d414cebda5cb9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=76b622f910833e5e553353af505dc38c44be4bd147fa73e058ebe8712b4eb82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=eee415d474573e7a6216cb8809b9d7ef4c74b2a6d7dec47e4199d7a18a643723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=bf7a3ec15b5ae1396346cfd7fafa312f8359481e0df53f847f39844a9d451c70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=3415f3a568cd8e556bff044a7811bb4ff803395006148d6ff0ce58b21f4c57c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=66f7536326edae03ffe005eb99b3214057d706e075a92f17750d4cc4d3a2bbf0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=a99272f74a16dc3234e51c13e3d3055aa87c368816bf7784ca1612c49b30cba4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=19c95b37b361215206be2ccc4972f4eb1a89b505ff56fa1cce79cdab284e0f5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=df36dfd56485f3c6113ff35309e322149bc15bb5db11178f329fb049e38ac260&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A74AC7Y%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBjJHuTsNSM8Y9lb6hbEA2%2F045M%2FfzmuKa6ZS%2F1d7iYQAiBbPYAaJPLdokTkeM6D37svJeoUvH8tYOqYbmiVQW64QiqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfY2hr4TlVBD3%2ForAKtwDSpwpJW27PzHzy%2BAWLVBbjmz%2B1nPddMU0zDh28HXvCZjIamuIDkO5IumefQERGRRig8UIDu9%2BsTpjEn6LbE2OCEnFoPMhC6GvOrJ%2FA143KZNqQiyL7vQO%2FBrULc4Hh0ABGx4sKj5WSuCNWPAs0R26Z8buRRINKTLPJAAwapkI%2BP9i8ouqUOxVV%2FZnwAGvF4%2FaqQJVhmLWe39WBWytx3xWR4RvxWRxVpJkLsaf2%2Bm8hTC7YNDN32yKcDXHY7q2RSNu6kFqCmywH1xri1Rs%2BFQ%2FTSdAb52q3N%2BsXF65qzCtADrVsu25XRkPwC88PdSYIMXWq42g4xRcZKNugaDm5V%2BijrTdd2MDR7y1MNaZv3iqTdSjw9S2Ftyf52fhDEY%2B7ejLxmKgNnNwKYzGkg37mNA9tc9%2FYaigtLx0m9OoLYV2AkYtAg4ofzAmRgFtYSOEveIyK1Lfci8ydbqG3tg24At7m9zXjUYtVu8YLF7LpMK1Lt%2FPSRVY0ITq6DPdUzy10ueHkJJqiIWkC2Oq5%2F5KH9loDqk0LxdXs1QAFDEEKHpywRvJMWiMSXj0BsQtx1WfGPFyUrsOcw6PgeywOD7fYi6Db5sQTV0VNp3uFvpGxdfliDFiEoc3Wt%2FDRnhjx34wx8mrxAY6pgHnMg370GL7MNMTcN4vxDPp52D%2FZj3g1l2Up3ajD%2BS%2BXpE8MhKmPu%2FBLKSwkSs5pBs%2Fk5pmNfElkOkMANzwvS1Ww%2F16YogUHXqfmYY4GtFewfekMKj59KiUa2ihq51k7aa1StxHu%2BecZgiIZx3XWPz7y8UZvumM6Y6jM5ZZppcTUtwuf3kXNtQ9ucEujXVtYTF6CBOZy2knygBWdBarqhzf0evGxo23&X-Amz-Signature=491ab21563f097a8a710c453fca7699bf230c926a28106ff789c75b51e2381d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BNFDDVW%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF7sQxO2Z0K402MOKGaft9uDzeSlstsu1IrGZaD8CUTZAiBmG2f0QWfJuAzxhGXEuvkHz5asBbkvLx61MNrbLZ54gCqIBAjN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC8eLN4FLP4O7NAq2KtwDhoe1TGuRaeYP1QIcm%2BY5o7Lv4XrA5HL%2Fw4Sn3UZWgmefYR78m7ksoZDmt%2Fbde1C8W14ezWtF3aDfr6KzTyABnj0fNqPJHodqe259NDg2NYwlLfPCA7IbobZ046XCpPOFyWsglUSZj6ocavFATvmMgtXbj6DgXoZGP8XMuXaIMR8cTHo8NNFT3aYvoPUXZEd1NTUtNudwuFN5VtMxGrvEamK3Ek4waXVRxOzJRPvb7juNgH3O9ca5Ul%2B%2FfqKRWXN9rMg3WPJDmAcSHfdZnhbKCdx%2B0WVCQD%2FWuxN3bb3K2iEpCaU0uw7FlssWffQO0Bu0bolzPI58cIPkbVVYWYrsZ2%2BrFidUMMQ28sT0ndsunERPnuWD9717eIuM3TT4IbBPwEVd2rQo1ht8A%2Bh7O2WPXCddW%2FXICU3Fu94vcCQnflws2r%2ByfREixk6j9s8hEKIoaWiKQEUfwXV%2BYgmjejIXwvqHPiFxo6kGZGLqwACUB5JEjwlpXKP974OvFjnCKgssIRIbf%2BaoOM3lnubHsbFgZ0Sc79UQgA45KmILvaz2C5g9ZL0ltKCgqRUipV0QwN%2F1lB8QYlMcC76Opl3xWWNnw8TPo53NO5qHDAVBQ4Y1rXeIeNCZ%2BMtt5Fh0VL8w5MqrxAY6pgEfUwx4ZtHxmoFyVtroSPfKauOrkLYRYUQEQVf9Cs6cqe%2B%2B2nWev3nwHMCxjJ71YRxRFrc%2BnAypo076qjmCa9qIQB9gwPjow63SvcsHz4etGtLGvaA4sYQyEXYpOkPSMmuOsmODSb46imJCbaAEK4k%2BDzj22G1tIAxsRiGilU80qfvF0ZDDsFhvGPvIqcNHRIwRAYJ4xSXlZZSGQQ9wSuUJy7xs645k&X-Amz-Signature=beb842f78a965c4b54e451dac0ca2ca65bcd3de9fdce805323c585fe157a7dbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=a351e36b721611d4631a4a907fbe9c6dee4b1bb8af6d071de177a6f0ca5237ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=722149fd611e763bfe4bfbc5abeb2d5e0f72b4f25c3c65b4750f7d8efd31f2ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=0ffd269e97b6b143b6bd2e94b36651382f5bf55c07b2464e05077a403dca87cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=558bc40f7b3e83db827a29a4ddceff3381fcef699381047ba23b62fc76574929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=62031a18fe27d217fef0019bb77a2b459acd6229a24668d94c771356bb58fc14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=f60950b62d1e1fd0d91a3dfacfaac7826fb07e6cde8d82c9a021cd2f3b26f2ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=290eda24dbc1e1471095ca2c8da6e4b331a86796ef0ebfa0352b7f9541b8f3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665XMV5BJI%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T035801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrUlq1cDRsa36TqoIGNqxtDg3FJzmMaBZInLlUEoQdKwIhAN0kf1YO41A6%2FNTyUfbrKpPbLGtFg%2BQRYISwBbA43enCKogECM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxa%2BVaiUE0dEeNl3Hsq3AOJt53B4MxCxRongeIuMaTKqqgQVz3L%2B3MooPAciRAJzEOy9w1qOU1FBQ%2BPQrYhu3yzbF7NCTXOcWsFHcvQxUNG46ngyAHEXiiveXMjN%2BimWykblA%2F0tpNW8xamGFfrf8JtJYKOWyDwvowun7lq6dBJKICkGnwhCc48y9BkwBIl7%2B8w%2BanhWlmFl0utaLYoVRMFLF9yX4Gw1sqfhFQ4wPE7QmqYX4GtVFVeVmMB%2BgkSS8p6C32FXib9%2FBAMa2kkIfccVBt0AX1dXNObkLXRTjjR8LgiXKi6yAz19G8lkiwu73uw%2BEG8JP%2BKLWU4yFQDH5FFvmC2iGVEFzXRouLEzkf285ir6sKoFbV2cBUO88Onlx6YBegG%2BlLZWwIsbVI5lkItZvz0BhupkNBQuW7Idz40pZzZ8%2FGaNp%2FpZvutEdsZlCrl4fEmGU7gtWe%2BANORlJZR1C8zPls3JVW7TB6%2FYvY2tL0F%2BeW5BAfKTAc80cESPUqpN5nA14DwIY6hzRuTj0y%2BAkd7mD2meHvio8KdA2gfFRyjRmHltYBK25x72xcq1fhoj29qCBBwYikjzSLBVNni%2BWvirRJ3P6oz9P%2BVujHrVhsm25LhxL34BzvO0Kn0cuxTL3O4lESwBtrqFTDAyqvEBjqkATmDKJw76nohDsqf2yhitQYBPIKoGl6LQJjgjN13kyQV%2Bxa%2BsFDI7b6%2BBD63IHvpan23LOXYieat1q8qQBDC8e2H8rGpxcoscJhrcyxyOTOvcjqGux3CGpl5tOOEte2Gp%2FjS3DDvPXawMP3l6p5VBRxV3RT3lAyced0cNaPRztkB6IyPr%2BwTtg%2FAX1jRyv%2Bcv50ZQZ%2FH7bF9BIcYfNj3hKLfv0OA&X-Amz-Signature=754aa65cebac3e269a061c57c91b0efe037f4251e228325468a424c9d898a3de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
