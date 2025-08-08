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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=7412c901982a10c81aa84bc1acd94f82c159f8bbf2aaa818cf9d660858bfdae7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=a8468eee13ab720f26a464085da1ac34eb5462013768ccd8840aa5c8fdd54f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=65b3b7c85ddc5ddb0c70336ba5c9e5ba03eaaaf7810b470e7db6ff246727d90b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=a0b45c8f2fa61bf9bc060b76caa1b3eabb3cf5c68e859041e3165463b1ec2a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=a5cc219c41aeb075146e059cce49ce1e143fe3be823b47aeba1c313a48ab1e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=c5be24186c72e73a1fef0f6b88316df185519392b005a00fc49bd77679c46c9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=ffcdb6be8cddfcc1d20c58f93bde23b5ac277bf17f3f902441a1ef200026372d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=0ea2deb5fe395b9965fdf8206913f874c7a52dad24329e4fbfddff9978968d9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=2d498a420d84ba603458c85d58fcd5f38227567f19796ccadcfe3558a10779f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUYOXLKC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDtn%2FAgMEN%2FAdsnbTszIxwH7UmqUI40ZGWHscfoZyy4mAIhAIK0JS9IHTlf%2BQ%2FFBSKe7NtPsSP1%2Fo2pZpV7uml8%2BhupKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLFZGw8f1RnQbkb6wq3APuY%2BgsrraP1HCFxyjxACSbXfyli06nCauOAkRTAX6fDnYnU6v1dmdI%2FOsk823qaGfQOdf6R0HSocSPd6Z6320IfaKS6OyeEdKvDMl2S0%2Bnla8BheAWCV7Be%2BFmnF53v6gRPzDW%2F0QyukYMxW9assw9k1QvUlamW6yempms9KfE9V0mHZD4jFESVe4368mKfRfUUkbwmtmdqKfz7Gb%2B0gkyTwYK1qJbC%2FkrRJrJzpC5Qc%2FQe8ezzZA89WGr5TYq7K54clzxZFUfN7suqhuYO%2FaV9WepEAixb6T78bnIy2wFbSYHMJxuEnd6isBqAxrzuMqwQATvKVLdIqFU0cw9YX4AlwBquQ1mlBBeiUWtk1QwprEH601dUYdNBsZgql%2Bxyhilp4VnQ0ALJ84tqeA6z1HXqNWMBWsF5pCKHfUDoXXzMMSd9D2ovp50ic%2BaDE1tO%2FLBv%2F0tz81cUi%2F4HFyKG05TiikmY00z65R3NxIZluZhDiXCVafz83OgSTbppn4rScfxs5qN6dP%2FpeP24oW3WZ17Lqnby8UmSjlUrcc5LFG3cUiEYBZ5PEaU6bB8TyzVb9xGfbl%2F3gk0eWTCHigf6pwU0wqQIsSkQq0HuKzzcUdDJpKlGKL8GfZO%2BEPCiTDKk9fEBjqkAZpXjZju8N4sp4xztltKdDoWcEjvsAgJKoH40iF%2BlVHMBsv1jmZkKXpmDRBC9768Hx%2F2vzO4mXxRQSotMb7uIE9WV8YByn3oqCp3eAsnmeJCaEPlIYQgtcRYPBmaIoKj2eaVvnLYteV20iiSuIDlHl2RafCSdsHExmuudPtSkArEgpcXnx%2BNJwKjnwxqLUVOhgsO%2FtJ5AG4B%2FLB2Xs1n0LwY06Ip&X-Amz-Signature=6221453ef2be95461cee2e2aa58926c1f150aa76bd515be07ab964e77bd64161&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z542E7IE%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIDONVti6a96CrW1IPNSIxkgkukrmaRxRyif9W%2BqyPuB%2FAiEAsPt2cez4vSesRByBm%2Bs6OZsTxy5BPDvRSLOKbWmVdPUqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMAvUg7qrEaM6yR02CrcA4Kee0SoviKhVsUSdcEXYPhj1w0UTG63alQWTumfa3%2Fuppwups3nkOya5oPpXxqLFLNYO2qy744Pm5zgIoWEnOxUI4wL1JbSJ9iv59gWKUSI8dQ3pwm%2FAbyCJ%2BL%2FEdVc5w1CmisuxR5Lg822PgYY3Yo%2F0y90Wi1nSrB%2BsHwTAW4Qn2jLEc45OvPcvLK2CyLx%2FFWktSmoYCm1GZAUqREkRC9NAlq4xZ0F236BDjGKXT8866knJuTE9A0Mv5ooQNsd0LuRIXhgZmzFW%2Ff144oxruRV4Afc6rjtymhDKCu7PqA4Qy0lyzcSeBzMmDhJfKwA6PCDd3vHMZ1opdKpOuXaY7iPFOlage%2FzFTMloXI5Ei9zaal88oudKYfFc3EkH%2Bt3P63K1WNF7zngRtlKv1Ah9HVDFU24sNh13CDtlEwrX03PSgGKE5q1kJPkQ9caASo4wqAF%2BWL60N86QRcGNuQ4NqtiUFYtArVMCcYFoVyWAeD18%2Bj89su7xY2KNlrZeMkMD9746byFojv5RoIkx%2F20f9hiAkq9taCdtXDrnHHMbyUtPX5NST3Xe4IGpfrgo6k91pL4kLBHzLBTDE9h8sSHM4OzJNfv7Mzcn9RFV0NfOVEaQiSkX%2Bj5NOs9oym6MKmT18QGOqUB6X8iaRED6D0UMUlv3igFh5sICRLsIlXfo0U5ARwC7zBw%2FIKOTWrtCK94mU5q5sD%2FPCRuBlloUlU02qPJxblg%2BQWfa2cxOcjOWVLYolqrClA5hwReIvFo%2BTPEShCHZdro2VIPzcB4yk2ikNZiUmfYmHbKd27UJvKmrtM7KyQ32SZ0gkkcgUxD7B%2F5tuOKFgiVSwsFLNzYN97T1hbefAwLri%2Bwe98q&X-Amz-Signature=8a053fd2a2f6f6151f0b1bf2f623dc0477aacefae51e386ec2b16a143d017a28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=93e5db4c09d09aa9c6ec8008a65976a3e4f589c70f3f461de6b401283bd6e175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=7eb9fd36264a490343c93fe7871c69214cb6556dc4b8abde9e803984b80da124&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=6bda5b80ca4832e2685245a4fe8a558622ee82158a754f190ac3663442060ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=cd8b48fa1415055167899ce6d988a4daf71616e61d34edab7ca36f819adf76d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=8cabf2258a638fa441bf2aaafd6a47050de619d58256e602bcdeef23ac567faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=956eaa674bdaf3936f4dbdd62ac4d95cb4550693a843655a38116e3ce3ce921a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=d77d40430993570ab5ec433c2ce43981a76c7376edb7e802a11861a2a0dc4bc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=59872f52e3f8dd877bf33a4432218f636b3ea6cf4203c73c31c2b6a8add50e45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO7FQQRN%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T101039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIH0osss9A0gJY2d9%2BWrl32UHe6olNWF948khbFFT3bFFAiEA8oNSrHKO2p8pp4ntxhMngvMggutUekMaLYcsI8OpYqIqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKr4373Jq%2FXWZd%2BRdyrcAzdJmGRfeX3X2UabdgvqrsvrUkgmab6G%2BYEXi33TZAOtjo8KCu1fLlN8jDlbZNOGIwQBvIb%2FedLqGkJJT6JsXUWJdVTFIYRoAFK1ejLu6BibC%2BK2DbAuqE2mfcf3WF3CXDH%2FS%2FC3RoTWJfcwE7mBbbFLC5o7H8RXroyjvsusGZoTLdXssOg21lh7ayovnR8GBzvISeMcQY15px4Xz0g9kjPLlO0RzX1QMdtQizZzYY50OOBq6Tss77twkolDBI%2FlNb%2FP8%2BwxL2SuFTRtrPNlQGEKgrs%2Fm0%2FiNClz3bWs%2FuhSsCWluJaWbjREFSOZCj%2FU981VRNV8UbeYO778F4qG%2BocdDKVgNsc1rLGTR2%2BBPnk15UCoU9vuFupuZ6rtBQHu%2B3XuVTL1cF5FywFdANb4gEJPVyGVnu%2FdDp%2FNywTIApzBtEqZGLum09WHvKOWc08q%2FWFJH2xdLiQBMSqcL%2B2%2F4g2IU1LByroUxFjysVsnhrgFxIDTMCryWWHtu%2BwAmFds8pb1h%2FHwRa%2FnV5xqfc%2FZF%2Fgc%2FhMfS2ySomX%2FeQgyTnVcN%2BYorO9SE%2BOsU18%2BnXLf%2BRtSpofPQmZGDLBPZ%2FD3FVijE%2BHlWn94MPR8s1viGQMmS7W7Z%2BM0reW6ztAEMNyS18QGOqUBQ%2BwX5wkI3nfG7sJutr04qrs2CBWdFrfwNe5K5z%2FslX3s7XxeTWiIco4oC6cXavCcOh2TX70KX9Zg5w30LrIvz6i8nzJYJwB1UJ%2BUBBZiY2Q3ff%2FwtniMw2KKyTqDXMJZ9ahV0J3EAvk61%2FoKC3nXGXvx8Z9PoDtW35J8SX9n79TcLQtC7M3c5yIDaiFNbujc2df7p46QqNUS%2Fh3CmSc36Ao5s%2F1o&X-Amz-Signature=ac5b0c177cfd7722135cc2fa3f00decf9c11ed8a26958b6733e205aeb46f516b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
