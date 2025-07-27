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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=8aa94814cd85cfe19eb763f0471cad4538d046a9a94230fe37a38f49f02d21ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=15145882afa506e3453391f259fc65714dcc4f90e41dd930f08310ebf29a47d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=8edfa91264d8d46b16ea5b82da48f159f27ee49996fcc62b47ebc4488ca556e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=92771eb99ac3cd445b14c9c9e54591657cefb08af579f91c58a3de1ccfd65b08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=b00569767b16a0bf9c065a592fefa387e69aff5ecd9b291bf5e4033274ba2730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=db525a675d574e7b8162951084fc2e10068579bcab6cfbb00676966659f819ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=1ec06d9c3bffcac6ad42fb30616e0364262234363ff710d963dc46c109df3880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=5522f161273c11816022fbe6efc7b8a44e1b8c36e5722e1a0e585a468a31fcf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=c73fa0f58f65967cd348fec5bf26976d8370ef914440e1c2bc723622f9c4b0e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLGZ4Y6Y%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIQCZnaybb7XnbiQfsHRKD9ynjYtbGY%2Fc87ks8PUpnmhzoAIgNKvnJXvojeXb%2Fuj2HRwgnbxiBavw5J7qslHPJuXnOSgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDMbNJg2QAhkvdvgmNSrcA0eC8ZEdAEilx0GgXqAwpZe1DQsvRUrLfBnlq59oLvgOmQnBHZLNv%2F6Fb%2B%2FXJaJroWlLcqwMETVUddJoA7EGRZ6hYkH7mVgQMx%2F1IPt%2BusaIfohBHMiJAEEJB1T6ZOKMn5Z1GbXNyVSDP%2B6LR%2Bd9xpGCbX0vyqWEZDGh3UqZOjlLKsmGfG6N3qYYTklwpGJ%2FjW8j1VtCbBhUYz300YHNxksdeErl51TV5ott69D4QpArENX4kbzcIMhkcfnuvH1%2BVLSoWDuunc3BUrj80dr5LaXONUui7%2FVE%2FJFKVwqsCcKz23%2F6te32OuN8oTRB5HBgGFJexvEr1gu2ltW0G6IDs8IWz%2FKX%2F6l2EPNzJRT0k5EOnxT2GzLyPHemZe5sMfN0ktnn%2BWkJMyXdWYRY474%2Bf1nJtbRNd689ob9Gwzp6rmB7i9VwcshMIsuqnFFmsbS6%2FJQvdFvnhVOZIBbFYKhBuYTTvMSOze65l3SFotvwWJEDB93m3GUCVqoAjkvxk6uPPiI6jyGsbmZu7UxZBLFa4gkk9H2ygLcg3kFnxL%2BZZ7qEvZd9Pp%2FS9q2Cg1DQ9DLtJO%2FYqi18jk%2B9LYt1kHgAEOvd41cGaX%2Fd%2FW6ED8nU8PVo%2FbSPTy%2FHtzNdSCwSMJjKmsQGOqUBtVTdr0KdpC70drV%2FXqd7V8zJYkgS6pH3RDSPhnG%2BiT6iEFZ3%2Fliw%2BRg19Gl1EyrV1u%2FiCNsKrYeksz%2BhTMCWXTtfY248WNYdaYi6lj5Vnzjm0YZzTMWZYAYozwYU2jDMNirWd5rIEUBLIp4vELi0zrsHEIDcoJWIMlgzZjx3uhmrRe518QlfAKvWPmU7nOECU%2B3xok2lpW2Z9Fv80wrKIyFDTmdw&X-Amz-Signature=2c4168fc79cdfe5e7e5ea7745bf1f88c2b5b9edbd56fcfaa2379e10263139820&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKOMXWFL%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDwLMPAH8l5qIBKCN8iVxn9qOWMpbPm0bGbaZrZ4MtV%2FgIhAOabiF%2Bmxhptc9Vx3tdh4X2R4L6beQxxSPCcUgjgfU8GKv8DCH8QABoMNjM3NDIzMTgzODA1Igxqiqo3B6hnqLsfGuAq3AMDPSf0qQrrAYjatpxKGGbA7kQDRcUf6VHLF%2FhEIQII1Rg06Fux5QQGRh2lNZTPxHcbyLZtsgla9HoBs2%2FZ%2FKm6EwK5BwtjjnJKbYQMMTqeLEmiyoC98uLd%2BW%2BPIUlJNXVoAocChnGSh2WWPsAicWkGhuc5tzz%2BBiz29wkmml9FQWnLyaPAfSxl2YPf%2BJLEOJUr09Ucf20HSNviWsQzyG3nKjWXQ6TpFKaS9gDgs4DtwgJXobSEISuCqh8DKpGt4v%2FQubJNz7KU1hbU8ZiEMEsmDxB3uUkZUYj533RfhzTx5A5FMQCfjPaD9aSz0f8FSDtW5TKXoxEdaqisxAe5udh6bw7xCqpJxZHpbmZGMHLJ6%2B%2BCrQ6udYuoLbGgiAg7b4fT8MwTyDb%2BgsebqDxJEM4scXYozdtAlSLNsGVRAMBGbhJZ5pflVJ2aByIy7qzvy21FJon20xzfKpfdidUx2UsmCrk7T8%2B2jSCeKMMW%2F6uD%2FjncU%2BTb%2FrIu0BNCsN1ykgb5jOeRU2%2BvqUbX4NrS6Evnlghlqg6EIChTYAMzcOrbbCd%2FQp0%2FUdjuQmA9GYQ9o%2FgikESgeL%2BBH4HWkfTHeTJ8B4L8zAPREhv9gJIZqVVYBQYIq6A0P6L13PTU5TDMyZrEBjqkAXgFHauROpCDneZ5BpOG0tzebOUTwMI%2FpQLHj8R%2BypBpvm5CcRon65bOxeGqrCz5PGwsLStGrEuf3%2FVhh4B2TKBthfjQdgVsOSFtX2ABKdNt1lhsyScyBfM9EBuGCSqzfC2fSaE0ZDhr0tRv8%2B54IwiMrjt%2BBGy7pqNXzlzsB5GkFb1jIh4hy7KYnxDnD0soJBCjXElt8pQxFuJhyxVfJ3lPhKJu&X-Amz-Signature=2c946e3e2dfde54de088468b95da6998b39c880ac31cb4dc3fa578aa03962979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=27f621abe973db0bf5f91c047e58c6d9588f711fee57e624d5c61405aa3f78fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=6d9c28ccf36b25b3fe2fa2aa466b7dbf774ba55d851d58376d94780b844f3353&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=be92b390b03c34b21e0b4901dfc4397bfe14a5641eb8f14f853dd2ea06c6a1c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=d3068f1aa86d62c03af2b5c5d83c98a5c7cbcb8c29dd5a49e9c0d6f524fb5307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=f6be8eff97b1fef13114a3e30fb542e149c600fad9757701699cb0bb60af3ff7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=5867e3f7d3a3327d776de8366d947ddfe8e55f9c60c2d646b5d60b9feb5e5bd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBOENJEC%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCID7vyYIfY50%2FSMF7IRvFAUX3gifN7jcU768YqDoMti4vAiEAxxxDCZrlCexidii6KUr%2BHiezExk74L8GlGC9KwfGYYkq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDEagut4WH7RIfg8pmCrcA1TuAwQwXawYglk7mpDud%2FrSdzYfrvaWOszwthXJfp3FPsPU6bix5WTTprdm9noid%2Bzb5ifEc0yMiM2ircthbBbzIqHE2U%2FaRBihl2i1v6BNeuqaXs8NtgpU2iK4Jy6yZZiC1L94b17iOwbJWi1FTNtFOnNOG5Rd8lIKzXvLK7TdCv3vYoNWv%2B%2FgqlMpgA5zEaQMNg4UJsiBdV6%2F6%2B7aZMU6jqQxsPBcR3uN5UlR3wihIby%2BwWTtxs4IkJpBPGHCCePecL8kbQ2W%2FtYnu0jhkOOpuwUAX5CB2MVQ0dm3MUq%2BkfYdeCNhTa4Uowcg9hOuL7fZjkp4p4GWhMX9RCh2op4vJEbs9B559tJ24Y8SRCTcSQ%2FK0sTi7o5s0TKP9jcocvy1lM5sJ5LG4l1aTO6NlQDTP2XPzntLXoJWIf7XWTe%2Bb4B6FVlikK%2BQ3jm4xPC8YiJcNI92qn%2B4X%2BX7oH7Shj2vknQPzlW9CXEjZz9gbObOvoWqeqQd%2BiBj27GTgDQq3ms7hOvAl%2Fq8l%2BFt9jzdLhYYaqhZaWPFozQlEBB2jfaxvMG9WC66uku5%2B30lVRLfSk95brYW4YRxUwWLQInbPQR%2BOFXHR%2F6melXfX%2FmxGP8rO1SVI9jypGDmP0mFMJ7JmsQGOqUBZruqXKjIyogOMBtX8dz8aNtf3MbsxoYa2s%2BUMGvKHE9r%2B5876xQ6J1oM8d00v1Cd%2FtkWWe%2FdXPsQBPzcOXPkWgAbM2Ud4PQvRQz6Omjzn2GE2Zzna9%2FJmSuYd5nhWEC8syylM%2FJ5IczZDA9bqV%2F4aLZcI5VRscrHzoLVNva2b6TODdskE8tA0hKbGD2za%2BsD5xYuo%2FBc%2Bcs%2FqQZA2YbYu6%2FlBVRU&X-Amz-Signature=4b37483e15cd1d9f4889ee38c1fd0d0b8dbf226ba9493f2150e6c1cc8112fe60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
