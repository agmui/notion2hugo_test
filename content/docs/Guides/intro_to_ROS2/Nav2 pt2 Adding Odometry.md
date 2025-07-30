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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=c5afd3f87007216b4a20f2101d0ca4457157efe0f1bb83e7bf2aec3a08172786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=8100f0e9f881f3648d5f583370ac2a2e9cf9289c5f28ab5aa70a7efacc92fe21&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=4809638b6cdae020dfb9a859eecdb0f9c2ea89b38de6ba1f20622cb0cc0e6a9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=f5f0897f9c7e6ad9c5a49bf866d4dc864814a28345aa100e168a7a0127e55b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=f94983606059030b3ab41b4f4dc3adb924d4ed1532fd22a0eecbc3212031378c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=2eb81a24579ac41c19590ce6c758266a054d587c18c29e3036a8802d380dcace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=a62aaeaffb6dba94909831f6e42f081f5f48d5db6c9b9b6b29559d4a295f200f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=85bbf078349e89fec2461562662edb6ab769dc2f1ad243b5b80b8d6f06080cdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=e8ba3a72a49f07c6437f6ca86ac0faec10be18c027fcbc0a3a010920ac907954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVQLERY%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8Hunu8eY8Ru%2BOTvCIYw47sYvLq6y4iSdzeEyWzgnpkAiEAwiJvZH4SIfmtG1SqiKBDa8wnkOJjOuPFIGYmhQ4bpmgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCFf7b9yJbuRHG9nyrcA8%2FQNXwAqoHvG32t8NqyANVWvbsbnNcr%2BWevskeQFcYUifHa7Ldl%2BWGbphsNWa8Sf%2FNdGydURfyvP%2Fqiw3osTBIYkuQWr193jjrUyapgozYVpj6ctBUz0v3cR1FWBNlgCT3bWm55Oguh6c2TkQ6OpGVHrcGqh2cUz7N7PiM1rEsaBYCasHm9%2BNGsx3MB%2FA2zMLBB2G5qWMh89MSb4BLRwM7W44zY0po%2BXS0MhFYKudd0yGnsokGGIspKTwWVb1Ou775KQ2v9P9uwARvbjYDmxSwYyBX17Y16D0ejkrRO9qhqPvUpzXrzlOnodpakVRst58UKX3QGC%2FQ4LaKOOUy%2F99FHclCcdzfT%2FykCqn5Q2GTfCoN%2FGxmo6nDh6uGeNdujRKJJqHJldf0Iy49U0ta3KNJ%2F%2FQbo%2Bj1Fvyc9Au2cJtKolW8TA%2Bh7H6VljbsKmk0%2B6%2FUbp32DxHfNeJV9s5mU5izBqNePNZ9Rh%2F%2Fu%2Fm6lUJYfKdhFLGJNhgY4IChsp1Kz%2FPYb3x0lLHWqcHqFRB2iR%2FtIlOyRFxqFq%2BmbLdOqbNhAO0NEkls3sCrY%2FS%2F17xrbUqaIy8g066Qd87ThHfP0Bufcc1o4lOhYxagGBe0VqP21yBcFBYcYYspajrZkMICbpsQGOqUB%2BNAU3CbYlr8JO7Vgn5RCjSj7pQh1JEUWcBo3uORS4i6nzd%2Bb%2FLS1RjS9v9Myp57SaH8Ms76lC7RMqwGIalPIXKF%2FC%2BXCr23cRsCDJsMNGLJgMaHOECA0AIxxBqGV17ILu9jGpHjpvGKSSS2aDojS05PQQbPwcoKrDIDt0yN1NN1ycwSzUyvrzj7tdvnawusjYuc7j%2BM2tW9I2tmEe0vV%2B%2FziQM5f&X-Amz-Signature=78554af8dcb5ba39daa2a87cfa6544c7de65ce8063f58fbef4c79608a0ed30b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ROQ2Z44%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJF9zhYs0OHWkPAJt1bLeZRPVday5hGtZfAzUE2zZ%2BeAiASXIO72eNNSxioZOAwZsH6YuK04ZV7ikYyz%2FsvBY3xGSqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAHr574TEpbOxXLBvKtwDD1gqJOd0I1EQyzB06eC43w%2F%2FH2XRu%2FLyMdfmdCqJU2w3ajNPc7kVdGf0mBydl9L%2BtgKEVVM1FJXOaZC%2F8HI0nqzJ4VTNTeCCvZP4zlWZ%2FHGf983xbemvX9Pl0ah%2BhpFEb8toJKg7KJchw1ldiuB5pzQKqxWfwSIJZNpQWIZIxit%2BEyHv4QHXMjkqs8at9Yb6ejxjHCeM8l%2FG2a9XRARaoLFPc7XHDeXyFAxN8ijIUjuYmLaDQlyOgTgCCs9wOazs6pAMfyqS36cvva5MTPKlPun3EddsFgZbJCkD5bLzEIx%2Fiml%2F8too9mIj12YnGB6fiLEnxN2jaI8in9WhWKcPlPi7NPgLkFIJDYirkqxYCR%2F5Qbmed7CniLN0qRoy6x9wLxCafufBRiUupTvFxfcZ66BLGKLftjwdySMYFii63Rg3tTfczsdfuw6MaU31yN2X0XIjygQMNL83q29tuiX2IlvFeI6B4OC0Sz%2B9qa7Eo1fwO9cwIOpOcSTz6drQMCRvWsrOzzIB4LEiXykJNUB%2BdChv3m6q30yZYsldJHtxag7dal%2BPYIFevagXqfZp1zpkVDr%2B2WV4LOVsZkLR0oXUoZ9DtVphwzwt%2B%2BFXEBVsERB94ibNZ7maGPJS8iwwu%2FKlxAY6pgF2tr5%2FmMVsb4a75oI2exsV0OhIrZfdiG60%2Bkb8ZfWQOoKBK%2FbGI3bH7bX%2B5znSZXkOK9%2FvG4z1jLu3hTdqlBEsRoSalhGo0aQnr9k2fhZmKjDAURTBk91SnsSybD7xIaM38%2Fpc6UcayrY1j47DjGUbqWUTktxkSawjwk4UD7iwnkNZXrTUunu8HSlyYVO5XCp1wnV13r1Rx1wBKXLdEFCozBKIhzdQ&X-Amz-Signature=b0f3876bd1fb213c16c368d389d60e2b15fa52f24f583d8b2dfd36f463014274&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=a28dae6d6f64565b5d942459b74e4083d816c5f22b75c675b8c4b4d7a0e6449e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=31346ce6f81c16dac5eee5f43cccc50911d4ecb6c007908c2c6b0e3d433a17c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=bfd71e41b8b42f15b4a17c17a1bd1dc4d91bf8e0140931d7b3b7272c52851e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=30d65b5a50012b8fe1a9a89679bcd2daf54449646ebca185fceb1f007c44b88c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=57ccdbc45e6f0952b215ed6453ad36b6f3c5974b4f23c7432d6cc0a3fe4eb215&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=5d0bc57424ea43518ba88df89a7f9badeb97e8c8104d9d4b48eab8f69c56be9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=3270268824ef0f931b2e1f2cd0ea5fdbab3a116171b90b64eaf66e7b9122bca8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYJISPQ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T035903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE0W85dr1VL9FYtkkxFO1n9EumVw4HIvLewg4KRhYvYfAiAedOR48D%2FxGIB34lB%2FjOlOYJ1lmhTMCd%2FKTblB0jnGHCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQHSJ7T8ELqD9koTgKtwDtiOaaoqmpm7npO%2BYAeioaiL75t%2B5pc2%2Bdie59mjwFtfpinpUV6JFxFbBokEloCBJ4CIQ5RaSfn5QiVJQ%2BHXk%2Bc1%2FYtrjfnY4E6A9EMSsrxRa96Z%2BRHrexDVw8HXxytTYdlISlch26gJ7Dk8iNcL2gc9N65iORmj%2BHr2gXxSXB5pzaOSnN2RpeIJi0RLWJb8X0w1wqOLMR1zOwxfxVT%2Bv%2FI%2BfF0A0AMex0ORjJdl3b5oWSdTHb7Q%2Fhen2xfNO9p8qn636AhgBUOJglzCaXRO3yfvekNwsQSNwdFrw0xIuRQkI7ma4Hrg%2F%2FLdC927AJJandLpT885uKZKNfmSyOkp%2BRdbj38za3odRSg%2F4hjlaJ%2F683ATBm%2FzzbVeybghV2UJqO2mNi7JNj0vYwAShHs%2BzPRqNhucmXGJ0J%2Fc57jQUV1NW1he10G6EpEUkPZAqnijMfrwDqVYr6qr5qbaK%2FlP91iNF8dB6vd4wAmYva8glPuq0V7BJSR5z8mWpXVe8icAAuyvNMDn6evHzj7ynk8qCV2XuyZnE%2FKeq9tl0bY5sykfmy%2F20OhRBV3QTPfUf7o3W8WGIAbYQ6X0cLOKafuzGlbjaMZsR%2BwgCzEk%2BsBrxqjBxosTTJb8zDhPS9KwwtvKlxAY6pgHJ3Bg%2BsT%2FBC5A00XE6%2Fb355KFGggpQjuGEGiEh%2Ba2YE5G8aWxRGuVAWAZF8RoJNdh9d3K7r8y8rwIkGvzv1U5W20jTIf7yfMMoDFtScvxNxMfkg8o5BCvRMA2W7MkHYNMJt3sSxxZg4J%2F9sbwcrl80IOoe6rCP0YDZpcB5wGR%2BvNTj6TBw6SdZ%2BwCwhxKbvfFgHy7Q5cnRgBPpYF8Js6kOViVwKx6a&X-Amz-Signature=6d4f4f7443728e1600e7274d5444943ef7e2dff2b65afb282bf7bc6ea0b21519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
