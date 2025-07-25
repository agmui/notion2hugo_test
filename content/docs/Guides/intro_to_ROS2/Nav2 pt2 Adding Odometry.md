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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=f0f362bed7face7dc2bf9dd525956f5e203c05304478f8eeb08757b9403056b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=8b5acbe1ea9cecc39729ea2288341612dd779b8849c629a1fcfda709c1c6e2b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=115c5c1da2edd4bc133d506b89ae7497508d4953c0cf1074b4f66b1eb70e7bc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=b6cc8961e9c449f7fa9000f0167ee5f47633d70d2961089e045d6a3ed626f85c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=5504bd3245ca1f12751eb73b3bbf3f4cb459662864862e5ac8a147579994559b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=bd7e8f4eb3a70b324465140146f7688098dd85f4718228f900d3ed75d32a0f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=eb9019e34a7d7e9140a48ca3832c3e3a018a73c94d238d79b5f46157c20df25b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=92282fc2e8a3a7f51904565740d52f295ba975e58a0b101ee198225537ffbd85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=3efa85d251144ef185da3b08739305e6a7ea6d5dc4c64d59b6a3dc31701ff29d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4KIREGQ%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T231001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIBlL9SjWMDYJnAVNXtOFrJMZ4%2FAv3%2Bj2%2FnZSGKYxZgsMAiEA%2BSQpVPPTJ6VAbhFurv0ae2CofSRtkHPKf6QREb2IozAq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDICptGLokxyfTJKp6yrcA8Xc69LmHj%2F0tSFTryYgQbTtZqCcEzJ%2Fh9wqBgYcJ7Td%2BnFyGSDzJxnEYD0gxLFsvqGg58Tzi7jTdNlATBNe0bSUHOP2ZZGll9nJTkmP0zu1Nu6ER%2FeEmMVaT%2B%2Fq%2FueASTdrVLZ%2FdBj%2FZ6WPyEHxlmzxJA6AHssZdSjOeHZZey82dEDCTxp19TJY2d91VA%2Ba0QLLVxNq647P0XZ4LMT%2BMRKj0nbvHSdjO6SUXudehdPJbMYqpdTGGX%2Bro0iECczY6Kt6%2FbF4wq6a0X8vhpo7l2fd1LV9FtVqoI0Rr%2BvcdbbdD7NMlfLstIFXZLn4GPHhpC6wOHeEmhsiOwR5dJ%2FX%2FaZnhXRfIVuuPULAs5eATZhu%2BQxVFLlr%2FpVhpgv94sXZtfaqvKpg8SzQYgAXvc1m8IatXw0o17xv8k0aEztNrhaW9vlKZiId1qZ2VSxgKkZBX0tOwaoU53o8eGWXN2l0zF08Q8u6CUup6Lm6FZziv6sibLLYy8HJygpYqsjVYuy9SR2Yl6QkGWWR2HeQ9y9mMgDy33fWz9Ftk1KV1tPfyqZOKBXsxL7Ni0NckbUIKzvkdfpBAa4ly9%2BBi67i1u1quessSw0bjdEtKdLMv74f71gxBqjEi3BwPuDwVW2TMObQj8QGOqUBALnzcb5erxrgE%2BuyOyjmXHYoulgfTvPH4S7o5PWsXmrcj59nQseIVlICykoBBcQ5M2GcInUymbGEJPoZ9Hw9SJHfAuaWO%2FPqFYo9jFeipprrrk66xIieo67sTsOK39BfJfepp28H80GewhK64xCWD%2BnMGH8Otl9ITsVDRKuB28bq4XFdvy7xScQrdgMe1BENssOHmW9n%2FXmedypiBdOhpxT%2FUg8m&X-Amz-Signature=eede635f921b0f96ae21ce4f0afb3eea882afa77955f62e4157a85be1cc5f2f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCEKJ6M3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQDkA1T67oMOaSkLJcuzylyH9QWMB3Wv2mtlZdKtY9PY8gIgI%2BycsPK4qKiyzqZHJDV2GEOUOtB0HOZ56lrp32oEszMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDPNZAUj6CX2fYhRjuCrcA7n2kHiAPOhI3hVf6VphIcipIcnr4Nq790mO1uODfILEtrfDJf%2FnOnjyu06mxogxo1B6xPTHCZIJM488%2Fb9OHoIbcPRtEzzG%2Fm14QXQGn6Z9%2B8Pj1q26yYqhrt0Fj2Os56kN%2BpbUqNNMaa58fT8iRD%2FB2Jr1n4xvAB52vM0y1mw1T%2Ff2R426JjkKB7%2FJMcdS6hLbJwDzru8vlCuXKMhvo8c7%2BVyEkncz%2BCvoo51R3MfOITHzOIbyyNIGC%2FeXilEIHPm8%2BBRxnnBBB7GAyEFAYEKg0nLrKruAd1Yt2Veun2CfPSOfw6vem4%2F%2FDsY4PNWJ6eJhA4taJoVNrN0OgMtV4VvGYznXX7%2BXoz1xmY6%2BM2E9ppgeBG%2FLKtx1oQlbu9O1t2lWR1UameDYZvOECVd3oPBlRtLvL8VceoNp2wPkhPYHgJIajhOUUdvShkkoxeRYmr6DeyR7zn9xCHxenRSX2cJ6xbOb6hviZ%2BB8ksgd6b9u8%2FRDjRTqfK5Eg2ggpc8r%2FLYz98T9Y%2BCVGs5y3dwNBv9snuIXb92BYqnnQ7Vj7auoKDviOwQt5RKwUIYUS4PgkOrY0YWYQIffy7%2Fbw%2FGZ85vWlM%2FN91hN09fe00dItOIi9F6jDRjycH8khV0KMLDRj8QGOqUB2vVDx0bY52ZywJsjERj5LgKymEZAmxLEsHIV77SacTfXJ7TNYTT1ZOtFUoERmnwyzFoteX%2FuqhJFev5Q5pMdgll88fu2thsWuMQeJKy4Anp3IEUqii4nGOrs21vwxRQ6zj%2BFbfh1QfeQwhvBwySkf4d6MuBwRcOUOrs9HtEhv5Uv%2BJA7rHEz9C472bBE9JBE2JGnDHGliqa6Vp1lr3EVvb4noFBm&X-Amz-Signature=7f411b22404b33370badcbc205417c6fe1bb39d9429cd0a40909c850a09314c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=90f1ed418040e4ad6ce2d07dc22ca62f872b2d9678f588323ead357951c88d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=cf2b9f8a4daa67f7964e279c9242aa4cfaa6ed9fab0d897278f3a74806256f8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=21e8ce2b1d933bc753a5c6accb748bcb431d63764b0f5098d1443b7e11b22bfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=b6a7a1db26cfce5270ad1950a9e62d374afac3193fe9fdfde1fe5e8521f722c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=52b9e53ecb6b14e0ffb1721c89563ea0eada2d9f8a647ad602db8eefbbc08ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=df2b725b8f923e542d26410f7d0d9b2ed143b112ab08a8a49373ea528faebab5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EQCJUI4%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T230929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIA75VqkJXjIsMWn1RsvsAG94nQJHJDGhlZEEnLuIeZPOAiAGg1aiS8EQIQ75KvxbWUH2T64dJGs8OmlpO01dWtlfaSr%2FAwhOEAAaDDYzNzQyMzE4MzgwNSIMwWYziE5dWfWuZYBjKtwDXycRZxal2bkh2rpGj6JoJMa%2BTFOBbu%2BMlS9WKFTsuVXrDgqtSHMPX0sxDPjyLf7qJj5cMH4f22pjEreVXUuVnhiKbqSFhAyEYwmd2%2BFhVEzXCf4X%2FRcgbKc%2B2vsSQT9d%2Fwb5fc%2FXzwRBYqWkItwQ5AS2OxVtoEq9NW7NkomMV9eOZSdGnwMB3uQASiqnRrMZlXYHbTZ9WQgAZm%2B2Xwed48ZmyFgb3g7YyCVkVWreFsvooLo6TedNctrgDp3dwYiOGE%2FzftdHOv9rIFdcgVDgWTsOCWpMNFHtJkYEuTcopmhYtNnEMhuDULOhv6j6Xc06%2F2O8vQBhPKXGJCF3c3QGYdoWL87piHF6jpKpsV3SCrY8PQW1RC0xcNIDWhhxp2mImdK12MmsfEN22z8IWh74d1nIsvRGk%2FgQ66%2BNhSCJMGzuIilK9f5aSXHYvo%2FozpO4zOvd4gDKXGCD96q6bTQCyRkS%2FzLnPoJG0Xj3syjCrTraT3Gi%2F98%2BF%2B9Uz7hd%2F6r1VsX6TPZybw9uBlQHeAgcM3cXQkFcUyZ7lNMy0%2FowiLaWgw1pbGnsjo8GqCUztMuc8UEp2Imcgy9cQqTrCf3UyV1wdaBdeugWf54Baaa6A04MUYQ3LDC3UFZSBlAw69CPxAY6pgGSgGrsqWtPk30rfFZDt2vu2FIdhdS%2FfmCA0U8d6KGNRGILaLABiY7u0gOIfZIVpFdQ%2FoBwJrZDPwWb8PIyFtvaBrziIL6zmRLliyqlbX%2FPhnsIl%2BglhrL3m9fiPOWT4dcR4wCoi%2FG%2FYTkzGqTWHN9OxeS1wX%2BoWD9JaY79k3wr%2F44Y%2F3l%2FNe%2Br9Gi9ucr00OyuWjSct8%2FOWtDBeZntfUd8xDPVrljH&X-Amz-Signature=7660527e407156e0bde9600900a47295da5697a0804af1248d84c36db583d607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
