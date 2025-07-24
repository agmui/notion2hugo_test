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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=a7198e23226f4b5ec66dda437a76a04ec27de90354b1c3f6f71660437e39ef2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=eff029a9349ae7c83c9b1628977706ab4f1d667e7b03456c86f1cc0017136697&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=eb545d358b38b8599e31af3a3795668441ba379496676fe9972b5ddfcad3e7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=6b45e59ab9f42dd6cbe1189a0ec398ce23f8dad0de1ad9d469ba0b2c7db63138&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=fe2b4734e503247e241b0d1ecf116c3c60c9498a2371547b23f0df961d90905f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=789ad72f96740ac38dff85a25758f13bbc3cd2d10ca62c22287cc8f229bac08c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=3a0b682aed0803df8718e27cc5eb5f69e188135027be9bf952fb61d2cfd8e85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=b4fbd7d439ad2b519d3640d60e0bc8998ebfff62df78bb13b0abb0b3a496e8b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=0352771f75c95bb163f022244c5edcf6bcf0442cef9e40361aa6dec9ee28a26a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3OGRYTH%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCax196Zl3lNxx43%2Fr9sE4t3dVmZk6kwXr1G2AAXYZAgQIgFUcQ3mYwhwN7jnL25ZyoifWOO8Z0Y%2FvIZwh4dwqjYUIq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDBukSITnCFRPF%2F07GCrcA89o6LG%2FmEnHur0c9JVjF9U%2F99byw4siUJbo77mIGUEFHh4t1bbz%2BTE7U%2FI1nA5erVZ4eidSaWuZ%2FyD1OiSOKBCYQ0FOWyoKJYW6VpnS079j9tk9br4BZiQF2R9RFhbsYtEJzueOJH0wf1SEMV5To5KMm05vbE3Xv47QG49sOLB2jmnBe0TyM89hQG3RlIWR6mgu%2FNF6MUI2qG4l5L8yogzazcKgjdN9tBRcIKO%2FTRdWCTokWF%2FhQVXN3aOP9QqibedChggTvvbK1xeOEqKpXyZ4A0pyVJYduX4yi3az79LSkvjBIE6owk4FG8gKMVqYI8cjSejLH5%2BvjlyuFJuLBm2e49mioukxZQFqmEbhGvjWjmFvIkGNmC9HPzLzTmE5xxof50%2B5zJX88o3pKqLY3Xhwicla1aIzrl5ahXMmT3wZwOcYFYNsuTfbWjTgprgZ%2F2LAvsth2Jwg1at2QORg3sXJILIUmQNjbqR0PO%2F2nVDph11zNK5RFAFt7ZEUa4tgomZapb1fM350OAfeN%2FH%2B0QBW0zlYd%2F7DIdVS7nyUubU84ksok0nZm9ZiMFBn%2F32pdgueO6Ipv%2BLHVwNhEc7ibsZxkQkdRt9ZKDHStPDvsAVLbh%2BmL0hiylW%2B2BG7MLSxicQGOqUBNgdgwL9S0M0HMALzRorMI%2Fs0rAHLHwjuOEhn9CuZEytQw7BK9arOVFsNBpiWVKFVUJeqX%2FjTV6yMk3PidLyRESbZII0yU8fL9zXXlOCrdezJO51qojk5LB2nYPS1WIDVPAAMnc0%2Bf2xjpc1b2ol8PYzPjPBIiWs1WxRkg2RWIFQW2i2p7VKxTxSXbVldWRsjpcqA9ZhfupwWaqZUc6GHtbxmJRn3&X-Amz-Signature=d7429d7417472609c44b3df984e335b26077cb89ea355b146827ac786c2df847&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=dbeaf72f69aee5da57465dad2b7714acdb69e60418ef66eeae880b0ba9ed51ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PRE6EQV%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCICLTOShH6uEz5zxppOuf9jo6scKF9q%2FrZCYG%2B9ti0vhdAiEAsQGvXGkIM48Sq2HAP6srHIRmcztVb789JwdxjtM2RHAq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNonBqwL9wBRTEv12SrcAyczmxvf0lqx%2BF2SyNUMCYmlYrblxsYX0eIH24sq0jtgaGkqmoVV%2B7EUaakcfygNJrc0I7MbxS42fnnnevwyO6ErDBagn1THznewpeTBhyP1z%2B%2FHHr1zcaOpwHJQuxQ6OB0GLtijwmShDftJAbesgsuzD9Ep39QkQtIaZar8hCkoo8EsvVJObZG0ZGcdKOo0BTjfQgurURWg3emDwU0dv5L3YubLB1WznNWpdnzv%2BHu7XDGwlQOvfUB2d09HnrI%2FaJ47gzIzZjdhfGmqcAeheSXcKSn7wxbc3hYpJWJCcvmOtjfMdDkVb5IH245HJ9tlvk8n1MEh8y%2ByCBZcpPcciB%2BHpDn0Ox5boPHkjPZ4v4JzZWy8cW%2FfZQ5dP9oF3u3DdZUY6fjbGnyhMQXKitBcTSJMA4Vc7AsFIyFCDuNx8fJTF7rw4gj%2Fiiu9%2BqdAassowuFVD3K%2BfdU8KMREZHGIFdde9%2FEoj%2FO1svsbujx8UY8n%2B4TpKqpPKcHFK6HEPL%2B%2Bd9FB4Gb58fAfAgd53PschaE63kdgEy0RgmbjtJsn7a4mU9IkqwDmAFcpVL9SvO%2BgsdGhbVOeEp%2FtZ3I7fs6OVcF9oWhC5W1JrsvvGPHluA6ZtL6gyEctgrgNgNTGMLmxicQGOqUBm%2FKRn1EwOtg3iO1Fvn%2BLrcZeUckLKYYgozxFF304sXCM4hXxrWiHZYIzeTRAiYq9Q2HljU9vKOPTbQxdwF44ODkb8Nqnp9AgxE1gC617ZCPO%2BU7hzPF2aHXj1z2RZdvqVuxBolaB72DgEoVelfb7f6XKw0uc%2BR7b3sERVnwSC04GKC3cf4NMdl5k73bmDUEUUJTeB%2FyiEvzqRNOqcqQcrEnd8%2BuL&X-Amz-Signature=293f03a5fed9c38cbfff11a0691be23ccad7975503a92dab17ff4cb206c6bb53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTR3G7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCUUE7H7ODSyATYt2fBzeuz%2BLGjssg1aMYKHT4jSdT%2B9AIhAKNS97iDOc27f%2BIcPWHAmGgO3FSCQtB89fIBbLCzrJupKv8DCDEQABoMNjM3NDIzMTgzODA1IgyMVcxEDnpn2qv3uIoq3ANFw1JHczS6L3CIBu5BePcZIgi1TBFzCZlLEaIsGSSfMqZD5R6nkCCkzxC14tZvpmHzwC8eVa6DizeFIh1VJVG3AO8RdTDfO6M4noCALWaHcbXL5Zh3ml9FQZYjbZ1%2BJaRdIsglMt3dIv16Qb2TZJNA2vRKPjd4fO7%2FDJxaUl%2B%2BX5SU%2FqkK3%2B8vSGtVsNQFSo%2B25v8f%2Ff2cKd0OGfAN3e%2BqlfSiMjAx7slLvS0Wv4iRuGx33MCHKuQYZhuzem%2Fdgw47xrqMgCVLoIMY%2Bq90n4VjgJbOgsrXPajviZSS3P2hQ8ndIIJz2QZqqrJVpSVk8gdYbk1ftcT5kjuTOPYjEiLFQ1jYRqg2XPK3gf6buvjhRbR7%2FowCfGOaQSd7FZ04RcVrdXIg1gHUmwLCfSdGf1GgqOdQYItTrqdP5KHkNx6x9NBR0wRJIj7j9vVObikvv5JtDpy4gIMugSBeAZj%2BFghow4fbGth%2FtyiabsKqYbuZ19lDy8jNV%2BhnLtmPsAf%2F8nx%2Bxyzsgb5qfxuQudj%2BwAawT2hHipW0mPgefgO26J5AVIRaWeSJBYgybnPoEVmbB%2BSYDf2B6yW6M9ShCKbIELXExrjEl%2Fy7TLJGM2QNkwKV9wYxq5bxo9VgylwbhTCqsYnEBjqkAThe%2Fpd2OARhthw3%2Fxo57nYpNud9dLty%2BjfIIsfJnPU%2BXOfd83yW2E7PpGYdJ6eUr1d5D1bWEDByNW6WhSyT9MUaGGduodZ3kM3xSVsL%2F0sbWIi0y9Ri9DTawZMci%2BFcV39Z9Qylxvkbh99eERvWkja42ymaFynEvu6PvyFzTM2FHydsNPRcSWak2lPBNDQ24umIJiZBXz0yETGV%2F6AJTaIRNLiO&X-Amz-Signature=a2f15f67fb7ec9fe98edda638f0e42d07f3b3fa1d30faefe76f53e550ace0c5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTR3G7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCUUE7H7ODSyATYt2fBzeuz%2BLGjssg1aMYKHT4jSdT%2B9AIhAKNS97iDOc27f%2BIcPWHAmGgO3FSCQtB89fIBbLCzrJupKv8DCDEQABoMNjM3NDIzMTgzODA1IgyMVcxEDnpn2qv3uIoq3ANFw1JHczS6L3CIBu5BePcZIgi1TBFzCZlLEaIsGSSfMqZD5R6nkCCkzxC14tZvpmHzwC8eVa6DizeFIh1VJVG3AO8RdTDfO6M4noCALWaHcbXL5Zh3ml9FQZYjbZ1%2BJaRdIsglMt3dIv16Qb2TZJNA2vRKPjd4fO7%2FDJxaUl%2B%2BX5SU%2FqkK3%2B8vSGtVsNQFSo%2B25v8f%2Ff2cKd0OGfAN3e%2BqlfSiMjAx7slLvS0Wv4iRuGx33MCHKuQYZhuzem%2Fdgw47xrqMgCVLoIMY%2Bq90n4VjgJbOgsrXPajviZSS3P2hQ8ndIIJz2QZqqrJVpSVk8gdYbk1ftcT5kjuTOPYjEiLFQ1jYRqg2XPK3gf6buvjhRbR7%2FowCfGOaQSd7FZ04RcVrdXIg1gHUmwLCfSdGf1GgqOdQYItTrqdP5KHkNx6x9NBR0wRJIj7j9vVObikvv5JtDpy4gIMugSBeAZj%2BFghow4fbGth%2FtyiabsKqYbuZ19lDy8jNV%2BhnLtmPsAf%2F8nx%2Bxyzsgb5qfxuQudj%2BwAawT2hHipW0mPgefgO26J5AVIRaWeSJBYgybnPoEVmbB%2BSYDf2B6yW6M9ShCKbIELXExrjEl%2Fy7TLJGM2QNkwKV9wYxq5bxo9VgylwbhTCqsYnEBjqkAThe%2Fpd2OARhthw3%2Fxo57nYpNud9dLty%2BjfIIsfJnPU%2BXOfd83yW2E7PpGYdJ6eUr1d5D1bWEDByNW6WhSyT9MUaGGduodZ3kM3xSVsL%2F0sbWIi0y9Ri9DTawZMci%2BFcV39Z9Qylxvkbh99eERvWkja42ymaFynEvu6PvyFzTM2FHydsNPRcSWak2lPBNDQ24umIJiZBXz0yETGV%2F6AJTaIRNLiO&X-Amz-Signature=3a8479dbd397cb5f4e5bc402dc416600a86558cc9a0c3f16482c42d8b73be088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTR3G7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCUUE7H7ODSyATYt2fBzeuz%2BLGjssg1aMYKHT4jSdT%2B9AIhAKNS97iDOc27f%2BIcPWHAmGgO3FSCQtB89fIBbLCzrJupKv8DCDEQABoMNjM3NDIzMTgzODA1IgyMVcxEDnpn2qv3uIoq3ANFw1JHczS6L3CIBu5BePcZIgi1TBFzCZlLEaIsGSSfMqZD5R6nkCCkzxC14tZvpmHzwC8eVa6DizeFIh1VJVG3AO8RdTDfO6M4noCALWaHcbXL5Zh3ml9FQZYjbZ1%2BJaRdIsglMt3dIv16Qb2TZJNA2vRKPjd4fO7%2FDJxaUl%2B%2BX5SU%2FqkK3%2B8vSGtVsNQFSo%2B25v8f%2Ff2cKd0OGfAN3e%2BqlfSiMjAx7slLvS0Wv4iRuGx33MCHKuQYZhuzem%2Fdgw47xrqMgCVLoIMY%2Bq90n4VjgJbOgsrXPajviZSS3P2hQ8ndIIJz2QZqqrJVpSVk8gdYbk1ftcT5kjuTOPYjEiLFQ1jYRqg2XPK3gf6buvjhRbR7%2FowCfGOaQSd7FZ04RcVrdXIg1gHUmwLCfSdGf1GgqOdQYItTrqdP5KHkNx6x9NBR0wRJIj7j9vVObikvv5JtDpy4gIMugSBeAZj%2BFghow4fbGth%2FtyiabsKqYbuZ19lDy8jNV%2BhnLtmPsAf%2F8nx%2Bxyzsgb5qfxuQudj%2BwAawT2hHipW0mPgefgO26J5AVIRaWeSJBYgybnPoEVmbB%2BSYDf2B6yW6M9ShCKbIELXExrjEl%2Fy7TLJGM2QNkwKV9wYxq5bxo9VgylwbhTCqsYnEBjqkAThe%2Fpd2OARhthw3%2Fxo57nYpNud9dLty%2BjfIIsfJnPU%2BXOfd83yW2E7PpGYdJ6eUr1d5D1bWEDByNW6WhSyT9MUaGGduodZ3kM3xSVsL%2F0sbWIi0y9Ri9DTawZMci%2BFcV39Z9Qylxvkbh99eERvWkja42ymaFynEvu6PvyFzTM2FHydsNPRcSWak2lPBNDQ24umIJiZBXz0yETGV%2F6AJTaIRNLiO&X-Amz-Signature=62ed6e0ce3c3d9e9849ac417277f8476946a25afee3c66f0dbbd5f5d04fafc42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTR3G7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCUUE7H7ODSyATYt2fBzeuz%2BLGjssg1aMYKHT4jSdT%2B9AIhAKNS97iDOc27f%2BIcPWHAmGgO3FSCQtB89fIBbLCzrJupKv8DCDEQABoMNjM3NDIzMTgzODA1IgyMVcxEDnpn2qv3uIoq3ANFw1JHczS6L3CIBu5BePcZIgi1TBFzCZlLEaIsGSSfMqZD5R6nkCCkzxC14tZvpmHzwC8eVa6DizeFIh1VJVG3AO8RdTDfO6M4noCALWaHcbXL5Zh3ml9FQZYjbZ1%2BJaRdIsglMt3dIv16Qb2TZJNA2vRKPjd4fO7%2FDJxaUl%2B%2BX5SU%2FqkK3%2B8vSGtVsNQFSo%2B25v8f%2Ff2cKd0OGfAN3e%2BqlfSiMjAx7slLvS0Wv4iRuGx33MCHKuQYZhuzem%2Fdgw47xrqMgCVLoIMY%2Bq90n4VjgJbOgsrXPajviZSS3P2hQ8ndIIJz2QZqqrJVpSVk8gdYbk1ftcT5kjuTOPYjEiLFQ1jYRqg2XPK3gf6buvjhRbR7%2FowCfGOaQSd7FZ04RcVrdXIg1gHUmwLCfSdGf1GgqOdQYItTrqdP5KHkNx6x9NBR0wRJIj7j9vVObikvv5JtDpy4gIMugSBeAZj%2BFghow4fbGth%2FtyiabsKqYbuZ19lDy8jNV%2BhnLtmPsAf%2F8nx%2Bxyzsgb5qfxuQudj%2BwAawT2hHipW0mPgefgO26J5AVIRaWeSJBYgybnPoEVmbB%2BSYDf2B6yW6M9ShCKbIELXExrjEl%2Fy7TLJGM2QNkwKV9wYxq5bxo9VgylwbhTCqsYnEBjqkAThe%2Fpd2OARhthw3%2Fxo57nYpNud9dLty%2BjfIIsfJnPU%2BXOfd83yW2E7PpGYdJ6eUr1d5D1bWEDByNW6WhSyT9MUaGGduodZ3kM3xSVsL%2F0sbWIi0y9Ri9DTawZMci%2BFcV39Z9Qylxvkbh99eERvWkja42ymaFynEvu6PvyFzTM2FHydsNPRcSWak2lPBNDQ24umIJiZBXz0yETGV%2F6AJTaIRNLiO&X-Amz-Signature=55eabf461f224a574038648e6e19f7952782adcc6f138f9fb83e4c6b9665b029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTR3G7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCUUE7H7ODSyATYt2fBzeuz%2BLGjssg1aMYKHT4jSdT%2B9AIhAKNS97iDOc27f%2BIcPWHAmGgO3FSCQtB89fIBbLCzrJupKv8DCDEQABoMNjM3NDIzMTgzODA1IgyMVcxEDnpn2qv3uIoq3ANFw1JHczS6L3CIBu5BePcZIgi1TBFzCZlLEaIsGSSfMqZD5R6nkCCkzxC14tZvpmHzwC8eVa6DizeFIh1VJVG3AO8RdTDfO6M4noCALWaHcbXL5Zh3ml9FQZYjbZ1%2BJaRdIsglMt3dIv16Qb2TZJNA2vRKPjd4fO7%2FDJxaUl%2B%2BX5SU%2FqkK3%2B8vSGtVsNQFSo%2B25v8f%2Ff2cKd0OGfAN3e%2BqlfSiMjAx7slLvS0Wv4iRuGx33MCHKuQYZhuzem%2Fdgw47xrqMgCVLoIMY%2Bq90n4VjgJbOgsrXPajviZSS3P2hQ8ndIIJz2QZqqrJVpSVk8gdYbk1ftcT5kjuTOPYjEiLFQ1jYRqg2XPK3gf6buvjhRbR7%2FowCfGOaQSd7FZ04RcVrdXIg1gHUmwLCfSdGf1GgqOdQYItTrqdP5KHkNx6x9NBR0wRJIj7j9vVObikvv5JtDpy4gIMugSBeAZj%2BFghow4fbGth%2FtyiabsKqYbuZ19lDy8jNV%2BhnLtmPsAf%2F8nx%2Bxyzsgb5qfxuQudj%2BwAawT2hHipW0mPgefgO26J5AVIRaWeSJBYgybnPoEVmbB%2BSYDf2B6yW6M9ShCKbIELXExrjEl%2Fy7TLJGM2QNkwKV9wYxq5bxo9VgylwbhTCqsYnEBjqkAThe%2Fpd2OARhthw3%2Fxo57nYpNud9dLty%2BjfIIsfJnPU%2BXOfd83yW2E7PpGYdJ6eUr1d5D1bWEDByNW6WhSyT9MUaGGduodZ3kM3xSVsL%2F0sbWIi0y9Ri9DTawZMci%2BFcV39Z9Qylxvkbh99eERvWkja42ymaFynEvu6PvyFzTM2FHydsNPRcSWak2lPBNDQ24umIJiZBXz0yETGV%2F6AJTaIRNLiO&X-Amz-Signature=f79e4346d356b357afa5f8ecc73a815b0e2d7ae97f0ba7e69597759bca981d63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OYTR3G7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCUUE7H7ODSyATYt2fBzeuz%2BLGjssg1aMYKHT4jSdT%2B9AIhAKNS97iDOc27f%2BIcPWHAmGgO3FSCQtB89fIBbLCzrJupKv8DCDEQABoMNjM3NDIzMTgzODA1IgyMVcxEDnpn2qv3uIoq3ANFw1JHczS6L3CIBu5BePcZIgi1TBFzCZlLEaIsGSSfMqZD5R6nkCCkzxC14tZvpmHzwC8eVa6DizeFIh1VJVG3AO8RdTDfO6M4noCALWaHcbXL5Zh3ml9FQZYjbZ1%2BJaRdIsglMt3dIv16Qb2TZJNA2vRKPjd4fO7%2FDJxaUl%2B%2BX5SU%2FqkK3%2B8vSGtVsNQFSo%2B25v8f%2Ff2cKd0OGfAN3e%2BqlfSiMjAx7slLvS0Wv4iRuGx33MCHKuQYZhuzem%2Fdgw47xrqMgCVLoIMY%2Bq90n4VjgJbOgsrXPajviZSS3P2hQ8ndIIJz2QZqqrJVpSVk8gdYbk1ftcT5kjuTOPYjEiLFQ1jYRqg2XPK3gf6buvjhRbR7%2FowCfGOaQSd7FZ04RcVrdXIg1gHUmwLCfSdGf1GgqOdQYItTrqdP5KHkNx6x9NBR0wRJIj7j9vVObikvv5JtDpy4gIMugSBeAZj%2BFghow4fbGth%2FtyiabsKqYbuZ19lDy8jNV%2BhnLtmPsAf%2F8nx%2Bxyzsgb5qfxuQudj%2BwAawT2hHipW0mPgefgO26J5AVIRaWeSJBYgybnPoEVmbB%2BSYDf2B6yW6M9ShCKbIELXExrjEl%2Fy7TLJGM2QNkwKV9wYxq5bxo9VgylwbhTCqsYnEBjqkAThe%2Fpd2OARhthw3%2Fxo57nYpNud9dLty%2BjfIIsfJnPU%2BXOfd83yW2E7PpGYdJ6eUr1d5D1bWEDByNW6WhSyT9MUaGGduodZ3kM3xSVsL%2F0sbWIi0y9Ri9DTawZMci%2BFcV39Z9Qylxvkbh99eERvWkja42ymaFynEvu6PvyFzTM2FHydsNPRcSWak2lPBNDQ24umIJiZBXz0yETGV%2F6AJTaIRNLiO&X-Amz-Signature=acfa9971a169df4585d105c646ec39e8a89ce7b21ad0e6863672f52b1ce7429d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
