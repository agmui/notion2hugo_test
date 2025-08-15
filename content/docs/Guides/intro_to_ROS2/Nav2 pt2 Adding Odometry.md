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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=c4833728118358f90cc629f828420dbc5e48df7b2a6ef3ca60c6688cd7aac3ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=54bdd43cc28bc1c052d11070abe3d9f7190c49a1e30d8d2252909600fcd712ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=43746eb9072aba8e048c76f46dd0ce6a8cbf2bd851cc251004b929a1c32b3d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=c745f2dbe6fa7f45bbbc6dfebe8995599f6f554496f8a061177548e0ac682844&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=21053db95b521ebe79c510e8a8e583669e733cd172840fdee0298a6e840aa4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=ba44e9c9f2e2258060eb8933857a2f63d43014b14797c73a5456cd98382e8aee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=00aac4345c01d1b15ce508a59f16b9e619dfad92760df7b6e54c3e34a349522b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=eba231b1f511548de627c5e47d31dbe415a905ceabf8322d5c8a1de79b0fbe15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=4f306da1ed7792993d7d27ddca2967eafb057b5bc7331bc4cf724f6d28c2e9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RIP6JQMG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCeTaFx8trKMvHclPB7Nadjd38UaG98UHXvAv4OA6IWxwIgEW1hfKp6Wj6DKnOGECRGrEDKyTDfOvBzIH8%2BQvFG5W0q%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCtw7rwU8Xi5Y7WHeSrcA79xaM3envZAYCQqr8yQqGMGQpc7NekECPz1Unyp%2Fy8A8QxU0RqJ8QH11LInnOuMDaxC644jXxTeyNOKhhD2bQVX%2BVg%2FJoJ7xhZg8cYuaz8psIFpquo3k2AiO7tjeBoNNy5cPLM0%2BjcTxc66UnSSwiWy0RppNV4HVzu7bt5nejFMFvjzq5bwUUuZlH30BP8xRB2Z68JYxlSAgivcG8fJEx3FCUSn8V6rQ9O0z25RXYXPaOi6B6RcS4yarEyUAn8a9OYIxBWy8R%2FoW7LOfeFVFuI1aWazdS435UahPz1SV5akLBT%2F1rSpCBhjQyryYrdFUfbrjpRGoPK38oeqsBkeq4IrnU7UxwLZ%2BaD1AccD2Z6mGYl6IgPxuB3R3sjR986ZQoO5tKVNcW6csl4xF%2BiivYCXdEUzvezAVM2qi2OaVVLEPT5BASVKd2ExzT827TY3aeVRMeEoYoHi0NPSmoMa7XBpaoIC5hp2u7kN6UrIA3ASE%2FIDOE4lqWqBVmPlSu5INdankXWmKsLCySMZ3FW4ekdOiC0yvrqWTyZr99FtqB%2FQ8BH89Iyl7Fx1VJfvilk89WsvOZv%2BFhBDCKSj%2BV8GKTi6QyGjS%2BAKGpLAbHzpAkwQlnZY8%2FSufEgj2TkSMNa3%2FMQGOqUBu4XWO5TY0kUaPyp%2BrG1QiIVHy2mVQ6JzvgXqfsV%2F9FFIrZHaaBznFNenQdhPT8UX8FMv0c2cdjvXkgw0IPSKUG%2BWkBiHt3gXL83JI8hoPkZMw0JDcWXBwWrVHNQQF3McJ28IJSTs0pp9OXH94xqzG5CdMA2RIHOGdp2ZUhSsXmu0J7JEST7uJ2TiMfR%2FYMManatyerSXTyyOtfW2ndxk7eZFpfOW&X-Amz-Signature=7915101b2e9cf8847292841029e07d51b2cdea531c3e1ff0f63ab19f13667f08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ7TBGPE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCH2Fq6PgJKdsn8frbOTC8AGwL0GnOWFle6j%2BcK3tktDYCIQCxeb5LDwSZFFQ5JwbYM5pls%2BJT9OOMrQKO0WU9fxOnRSr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMFOrVRgzqW8fJQi7XKtwDVse3NGvfPys8xw3che1OhgSuHUwoQnPtEpojDa%2B3VoW1hsQiVRQttmCewFFCAtg89KQ4LhooBLkkAhQ48%2BrAfRB1lZBgz2vKkYOBu6RmBDkoEIVFACIp5m%2BJXSk77cmg5S3Ugfp807%2BdcGclvYBnuiHo9recz1iRtPfeD%2BP8qnLjYJVxVVZ0znCz0sMNhB%2BjBndgpvKSnTbOLOOxjFgoUtsWyK7kVSMWFSIO%2FIa6KvBnv4JPGmLLGRObuFkmaUHJWgVhliz47qoVHuUsrYA%2FpwMArT1yKrz%2BON%2FbCfF6jpz352n4O0AnXimscFEqiTn9WzVjL1vb%2FdFAolkCmnnbi4mwxWwXE6THqwNykiQH6DyR2KFB6Nufm9isG5fTRrtdU%2FqvGq8Fp8qU4VqSW0wDi1aCi8ak5n9JjQ%2Bp%2BE3Bb2lc2ibQTy8VMka%2BC9%2Fn9QVbczEKE7rfhEUZ%2BpQSgjktTeyTVuTYWie1UWTSWc6bkfxA6uEgOZ1iu4iqsGlJdIMpx3MoUK5uqebYSnzM4ZPTrXERZan%2BGZv7RYZEhh9zviJdTNIMGL3UofbNk9WXEnwtL0TRXVxkjHIQTJDSyRKqYliU0rVfnah2o0aDU7qbHTtsws6yIDEJAGkNPaowwrf8xAY6pgFssaVfsQvDoIqUpW3d2TrKPW928HcNruG%2FbI7HIS6eZ3tsZaMvc%2BEbMWpx7TmdhbgQg8Sa1f3N421F%2FN%2B7vXB24feY5Kdr3Euz6Uwpdxhy7pgSvlObj5AEKy5oyUtYnbR263d8AJHqAwPhKbjPGeM2XhpAvN9l9D9sBkrxIK8oaNMjnFPAJIkuLrKHxkuSTJpnCv2U9TN6UReDrzy9KvpL95w%2Fgb9U&X-Amz-Signature=59e3a85f82eb60af18fba62cb0d3b9219c32c2c72bc1e5d711aa17c3b5f20b9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=19a87a291ca2aefb1210104e2be8f1da8cae3642d7a2792928611836d066ffd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=69035c9f630d8634b7e1bbf9782fe4921fba79df989345b4d338f158adde0114&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=c15490f63126f30b26664c6549424606e3a1e0cdf0c2d964e10135fd77f80cbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=98e6a72e5bfb5a731023e007c910288522d2bd8acf1f6bc90551adf0ab964ade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=9b7a3d3b56b810eee7a2085a4d7a94fe6b25fa07f46a0bea6fe2bd9bbf9052aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=a50bf374d665bab3d909fe396e8a5a9b2637d3f9c1f2e0f8c19f6a24ea205610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=049199a2521eaf0fb17e05490ed9de2200e76796ba1c09be906660377be2d749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=954f0b5c37754c46660f01557ebdad006c17d93cb2316d1e531ecd7451fa9c54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNP44Z73%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIFPv6lICw309xEtyZcBGgPpoNCvK5U%2BS%2BVglGX6UFHqHAiEAkmZ3syA%2BnLcM1qSRVQh4SQGjLuAbID8pvfxV7uAb0vwq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDFYdPoZc9gwCO5DhmircAwjq%2BmIOGnD0%2BC0eTR9cJxzlx0WY64T6ZIyDFfcICFRGQJYXw1YsKFDJJgBZHizTEkgnRHGQd1iqzsM7FqJu6gNcQMBB55TXWH8Gb9D3T86JT5a003RuQLXYBhR%2BKDjYwdUAggQ%2FjOrqLSsKZctQaGMsPwvowDCQJiPbWEAJhxTAMgHcOQwauglgpssAjjg5%2FTXQ95JgkWccWfFziSLvaZnm3YmEomC99nl6st5smckH7gbtC4NWfXsEYIoEgfNtW2nYdTmkM7fSylV5wrAmcvbVl8660u4bVkbbZfZMZ%2BsQhOMMZrKv6HgSGrjXlFTw2Y0ZWAIppT9OCCGus1X6JuoU647lFwLPdy6kqkxhoQqZ8fDcVWp2JDfGvyRYbsLhBXsDcGtC7WjxZsog0Wmik04BJd7kQ6zCDp73LsiX35m%2BcWAhNLo4ZFhMU0hPmqcNUrcNkIT5tyLGIZgkuwO2tMLlv%2FhUnPpwgkX3bvl%2Benw2DFBMhEcw7%2FU9dre3%2FtgiXEDSf1iJykJ9kJjrRsuv6p3PCPqUq3nDl5ibVoxt9xcNIQvCcsRjHRHcjfQc0Z9EJTNJW%2FEt%2BcngL%2FEe3bwambHw5EQC8UK%2BiPvt46hFSJmyfQfMpB8A4PFRjhKjMPS3%2FMQGOqUBjgxcnHKN%2BbEow0tYU8dsOjc4NEg%2FX3pZK0qpY1DpL7wrMiTcdUS88OclELO2kBa6NCcGFzRYTJPLsN8NlofxK6HeiZKeZuQSqNAdoFFHbw7aQ7mss25EWvyCe8UlbvCVlpErt%2F23y7TC2TLqDaY9lU4%2FXROB5kkfO29ynVa9V6phA8JsM5KIKnaeocMELDaNIsoapjTer3C%2FHvD08Ffab1KZcIdN&X-Amz-Signature=2134adba4862a4549f625934a586dfb26223477228e204e5af69099237137b54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
