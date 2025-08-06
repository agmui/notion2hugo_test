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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=9303d5cead80f00906d844a78949d62e1f2757dda5775900af993d2c2a9bbaf6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=bb858c0eabb2051dfb09fab0cf937d0490afefb1d9707dc52172b1d9048c0f6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=b5313bca3118d0f0d0675c5ce3a240ede0b59848776aed1cbe92a0759c76b5f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=cb9a37ba959bc95801d4b88800fcc2fd75bbec577b4390cf9d5dde02916b7ab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=682ff2993039c938e7a782a0aacece5bc445690526af61547e992e154b0248a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=a9f0035306bda42b317114ee4b4d8c35af5c215be6fc65b688538aefe0d18999&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=579e2ff9c0e187a7a014dd2e1174f8cae35e7a949aa97c2b46862a1974e76ea1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=ea606bd9b2c0bfc9529d218d52ef9ec9cb1db6654d042bf2f9a64f4ff4d49692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=19a28ee2c94c1090cca9c6bcb4a92489dba108f01d3f49e2573b1e5f7039e225&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYRRAOY3%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQDc6prZ4EHtXH06HnKI8grA437n%2BKrUSUG93VgzyRf5oQIhANi%2B%2FJ7JdPJ0%2Fm5h%2BHOAaZsi3X5KzMBsYN9GyOhRh%2FVoKv8DCH0QABoMNjM3NDIzMTgzODA1Igyi1HmoTKZb0Yd9Z5Mq3ANQX0bSNbQPpEUsLBtQ4JOgg0b%2BviXdOM%2B8KGnSfTP97Fa5W8TYmKq9IZoI6v3q4DkiBE5dyy5UmW2nfEM7Txh09l3lJpX4apUe92qy9i64Bpe6lzCmvIckWefiH0VBfYr6mfAKF2So2nA%2Fb%2BIDKevnLFiORHlzbwz7Q48k99tXzz%2FQLnGrkTOwvjt7MJ8Y6QOARe5pYO8EJcez6OMfg3CsdiLY8e8ovmWvus7H7ZUYky2fNSb1AFy7INlO7xwdhdmrZq%2BOcmu5XcU7FFr2NdDllcryfwHEQ9nQubYLdMOsFHM4mfQyNHffpxfCeMoU%2BXIFgLRrFeclg3k0TBM7whxERlzYr8H0k74Gym4j799n%2F0sH3OUqX0HU1YKCu2HGiz74cO20MiFJzbuA8AYorEmMLNXiVtiXlyz32W3uPSmkoFLKyJkHsAcN53ebaye%2BDP1A9FJiKHQJHsrsIEnmAEd8Jgt%2F9vTeLVsjcRdzFqS01Zxg3%2FMcHnC%2FeiGBZFoNR1o06qp29FORG5Hkmw97Eh5Yyz45I8OUbj%2FZl6HTKGPYqWQDgBhiyikGza9DWD5cA0UaQezWP4gsfDFR1wAig%2BePrh84jumY7vB%2FFsnPeJKQK4kmLIIbN1ZLX298DTCb687EBjqkAb9c1JhF9TlOg%2BlnVH6F45djQPkdkquilTCnr95UdWNHevaFm0cDh6cNynSWbevGInznQZYH%2FndwBm6b0B1NUbWGmb%2Fs3I6NT72AGMH1%2BoNVZs6trVEoyW%2FTZc1aDyJxWNXAxdX7yW34KcjvsSce%2FBs3bMmGQ9qel05xM1cRotpoSTpOfdEGflT0y8WKLQS%2FrOtHiUSchpTxXnmqSjHf7Pezpxik&X-Amz-Signature=764a7ef507dfb41f069f3f1b6e213523bb4b9a7b8019308beabeddf89f5c0d1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2AVYBBO%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQD75xKwX2dL1K6PrZdJ8wzvNxawhraRARsW7Xh1kw38MgIhAK9ra3RXg%2BiziPkLk12k1Kg5btc5yU9yQ7YgcHzRtm8kKv8DCH0QABoMNjM3NDIzMTgzODA1IgyTyN936YJR2XEAWSAq3AOiNp7kfhVfNYXHy%2FkWYslF%2B4njXqzpqzmbEoPlX7bLBK4Vu9kerj1xKDPqqHm6l%2FZnagaNYktvoxRHa9Kn1Tkx0p6ihikSdBgMUM5EcFsPIiEikZILXqFYvhOancKF63RLx1M8kaYezzsn23tR26PSNun9M5lRFKtTaqnY9J4mjyeNDyOqTbaN4BPvPdxPG7U%2BJnGsUwDMmLUV7a66bEGjEQfkx70EDEiWcDTkW%2FO2haHxQLSvANrBRm4iGkC%2BvCNyW3ASF6wPLREXfqz4r8fTsx5nTTY2tJy1X1qztI4W4AxhhfMjFN4GE%2BGy0iz0ooQYNarU4OnKMvde0YkqKLQRnPI1oYp5czsPvF6ypvmt671TjUPsPPghFnmJTyzE7s1EgQRpU8MtR5KSFfxBt0g%2FAJHyNSyDsvCBZ8o6juYWVNhwjOfhHnBBLat%2FeXtlaqKFi%2B5vOQEAhuPSTEkMuse2PrzdMfoMq%2BZ4pIXjYWoA2AiHfTRv6jZPsP0DNajT9lRX07CVQsUe4LQVHeomnb5SSkrTzPommi8inSKoE3Ynt9GRn8H24vpcDGnxWzZfujPsG9%2FSnCtADNLFlJWapjLJdKbORTL83I1lwF6cDsRkvPYavwAwEz2ZK%2Bh3WDC46s7EBjqkAUIysfG%2BHvItZkn6CBsOstlQSwt88cB9nbk974%2Bb8Kip0S6%2Bk9O8oF%2BFIVGbmtt5rK%2BJ14Ow1VO%2BRlE4Ug5EG1lBynhcSQTrd2xmwgjqorvxdzCHx2q2XLrTU%2BY2n%2B5WG0tO%2B9PKcdI1oO99G%2BlSnzTOeyjO0oG871Ojp1p4q0s8ACVVOUTOaQsI8Ij%2BFMGtWIB0gWxeqW%2Bgr0OPfEx4dyf1%2FNl2&X-Amz-Signature=00365250422dd0d0f8c6374abc97e73575a9b23ce041676ffca755ffddaa20cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=92e6c82d047afb5a956e761d711b3c650c9955b16e829d9d3d47c74bdeaa79bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=dbe5a4fab565647ae5d513d0cc667fb4cf645507aedb343d9f8f3649fb53fd4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=0194df194792a227c14efbcfb89133697edd42570a3eb956f0e6967bc88aced1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=fa513ddb6dbd897e6f7e39923072b1ceb94562111d8d018ea156ae25fe9a0623&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=2428e905a9371ff69237ec8d91d00a7e15a8585efb00beb4a7987fe2ac23b99a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=73f24ddf6a832b420bb9022571936dc36f2208374b01106aa06c85bbcc380f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=91c86ffeb2742fe364162bee8d7109629bcd9939c5e636966b2c9c68b3310415&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=1968046ea7e691b9531a09ed6ff94ded5f9cf4fc48f4dc72eb143ecdc7bb625b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QEYJUWW%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T201101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIQCJ9qqWXBTpri9DKYT2bZYHZkYR6xTkKqW5OcItzr%2FrigIgXY76d2x2%2FnfRjemU4iFWwHiSzoozBJFIq9llElnUgrYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDP4j45l%2BwcPqFXhUuyrcA3V7F14k9%2Fu3ifLq%2FpmQdWk89CJKDb3Z0tbRlAIxI%2Fu2Nbf7DWf%2B2wJ87%2FUwO4kFqfJSQ88Tw%2FCdy6iGGMf9P8V2jtMfPbvNXwnQeAayfT1aA0NtvdPmxjEV0%2FwA8OE0q%2Fosn%2Bt9R0HZf64ne3OxaQSdW25vRdKpxRnaU%2F3rynbNk68saXiONtQEWyRrN402F%2FhNlMw03hyqGiSes0KPloOwV96TDBeWN44NdEysEn3N4HCwaGpaF5KkWEbWwvZRMqHkTuMbnHdtA3GVepUXZMUGJF59CEKolTtLDJdWCran%2FtD1QBOlY2LI%2BYIzLZqtcUwwqcT39iMgYoS9cyFt6rabifeEuzjKaq0D84XCI7D1zOyhrTjsvFnhLx5fePgxejlB7bfgcM%2F4lyTLCynQjDzzAptdawN7fkTeFYnZ0a7OhTnI5CVFeuSTxqU5SdLLDY1XOi1itfypIAvRNzI77XrySUnbnX3LszXxTMyEVTF%2BvYX1T4p468hIc7YXczOo%2BRye4XrFI%2B8n1ittMqebMjFDkJJT%2F29ygsNGXirFKvFSH3XcUAsyarymIC53MWd2ZWRdjOBcnK3QMfs6oNRmSCuReqoJzlvE%2F9zFNzsXOENypQGocllvD%2Bw4xuEnMOnqzsQGOqUBuxu0OcLFqsTlCXf6CvNuwygNbEkHn2W40FMFnPI64aDXUQOVYNlCxPxAAgdoggipXFMQenSGjt4dphMSTcUgypemF1yozUlnv0F8BzaPHWzrMNQIe6L5z4K%2BKwlP4amcFUx2Q0tyCZ69Po3wwwTA51Wq8nvL1HFhTtRAA%2BSrFvi2vvbzMDGj6fai1WtFanCchbRGyl4oWYMGjvHHi45tOg20dUaN&X-Amz-Signature=b8e70bfd3865a3a8a333ce1489194069a9f34c1b0c109d2e37462ee7f87e4269&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
