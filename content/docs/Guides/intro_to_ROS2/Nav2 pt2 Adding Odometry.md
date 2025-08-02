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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=9e685348c8031864df326ece7135ce697b666294b02d7a725f02b50e7bf3fe42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=607c1ed93e6cca0f296a1066d22414897f2c96f06ee07ddcd013d77a3e9d9c88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=9cbb14b6d775d8f7231b185aec358deb11b218746d0e38ddd1789ada3df76337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=6a926172ea90a647f5b28aa856204955e7252a8b0688f2fdddd7319476bac3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=4e64e29a6f2ba24bdfc2a67df101736a85a4223f8eb2cf5f8558553ea0cbfcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=5d569b54ffb4fb7d70ffd5f766997935b27ce3e0fab7741fa33f1ea2e2c4a4af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=10dbb43996d30e6a899f2187afeb61397ed49e4204bb118e95f4fdbc676d425d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=6ae6360d6d029377b52615b0a1fef5579b4de5a4310fbaaec722c2a06c52b811&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=e2aeaa45655c5e990fb1b876223b2b0f23a8facce57bbcfd1e1fe38a9bb31e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLIQ6DJF%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7BLt8k0vkUTPtfj%2FkzGBc56m4C2LVc6ElUOugtfoxYQIgMdpCQG85xpcl3JqUmHGKUui5B98YUetQiwVsdAJ1ocUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDKpuRtaZpv%2B0M20LEyrcA8u%2FwXdpr9WwLZPuzQSwd9EgyvH8SJJwNK3J6O5QlhxSboSaZ%2BYbV9%2FeQNjnAX7RLvs6zkDx8U%2BiEyppAPywRnKT9nnEIWwCJrsGTgVK3hxSf2JK65riBCYGEnFg8yBJjFXYSpwW67jAxiZgFdLy8HU65Yd9we4PSWWag6%2BO3CFfOgcdfSf%2BC4Sn3DmPencUTxc3Amw6WZ7Jkklj8cudmU77aidpmHxmVMuY6%2Fp72wLjwE%2BwWI45XvfiUqO3b5tvz1XFX%2BN74MbwD9i2vN4dA7yILLOkIVbhVt2Tlp7r1vgg5RZgGy7usMbPPENajIOTxxouGzpRarquxT%2FVWGIqD76TYcPf2MGnUnWXq656ahwWTzVhmtc4PzLvYfVjbGJ9NvADIbfH9Y%2B9Jw6sV%2FrRu9AS%2Frojm9fkuPg0g0yM2sUdiNhK0giO8YHEk2iJjUTrjU7NAgcM0TKARxINBoqysmLSSJ7xMz5yYdkdJWCNHhKPTSvQQ8saVJ4mC74%2BMVyiNKvsgrJNWH39h7%2B3ECXWXnaMGbj412ndswf5L1wPgvle2pCSTrZyyZyHJ%2BCRG5dwG44PJbF0feqhR4%2F8w6qAHbtcRVXJC02cp%2BPecefyLyh%2FJNSjkg%2B%2FYSaOM3eGMKfwtsQGOqUBbjvNjN3pNY3jRLHbLCHhtkpw%2BIb5UEOiprAKLxq9QVrc7G4MimCeX8Bagk7rt7uvNrzAIXJ7%2BNNdv7E0%2F5VeXaqhFkc8bNVG%2Bv6z0lk96hAdS%2Fhq%2BL9AwCzsSqXCtedaO7qUUqPpFJEQiAexlyYSwnfYqqQKbUOBNDwbVo7qJawH0i7hlm%2FWHaNjGMps9F4DR6b%2FSf7BTutu2Bx9T72jiFb2EAmw&X-Amz-Signature=d7113734967f138b5455dd80ac216ebc9d839b13c5f0598ea75b6635f2c79547&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O5F27VY%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5CnRbT56mkcTS4YmkF1Wtxqxuv1w9IGsDDN8IRes6AwIhALPdyXJWJ1jYMtlwy6293NOnTnUXNIfZvrLQb9ASpqltKv8DCBAQABoMNjM3NDIzMTgzODA1IgxyY0p1%2Bl0K6IskqPkq3AM23wmGTwUdOUUNu1ayaNa0PAxah1wUxtw3vG111uthJISF5kzbG3RlZdDWWFbu506Ccgd%2FSuW%2FMtkp%2F2u9aWNpGoEUOFc%2BqzG7sro14i7kNB7D4z0zSSlUkBr7BPVbTt7MdvsoYfvlML4i6Z%2BO%2Bv1qCwNc6czfEsD7BcU7J4%2FITdclhm2YXBCqwl6b0QWLQANJt9tzHUURUFHiW1tq3OAcPBomUbh0o0d7F2BZ8aNxZS3PCz8KdMdzmlPVAXEF4VkX1y4v4GsVpriEfja0MIlBd5%2FMvMznxZ%2BQD6j3EkPHiUXGL3RHFtmzf6o4kiAPHt1jvshS%2Fp0%2BGymZm%2Fed28vxc4Pr4Pe7uzK97y2KYS2i53Ab5%2Fpdgys1IneuMXAPhwibNWRcpYs6CyxWz7CTf4fq29dNfSG4KK0gnzczHrtQoL%2B1iy3QSOi%2Fy7RzvPYklwGGX77zEIfGKb9mOVpQ%2B0A8bLN4hYBihsr1VEdrE4HWvwmtli%2FudSCBKIWYwZGONHA0Z%2BYZc6FCO2YD7AnMl7owhYih8fjuANEulE9InGTnmWc6BqXHP5JLQQEQwLGPPyK8jrmt6gVbZH8PjP3LnT%2BLJKhKQ9aNmu9%2Bnbgh30iqOhS4nLTmXZ1M7xiYLzCn8LbEBjqkATNn94SZrojwSQtsUXOsX8MbyPmw9Ka3HR0yiQ%2FoHGcgt2q9uGSqOLnjXKYG9FIsl0BByRdyxR12LHXKDL6iV6rEYHRxqwABpLhWg1JRKnKqE1Ew8YU9He%2F0fG5z3pCQNE4qMHB6YSvb80HqzYMmEsa0HUliu%2B1DWwdKxXuSCq3abAnn6b1NNWgG%2F98k9XUQZdyJVQ%2B%2Bb8NLIl9T799jQcK%2BOr1M&X-Amz-Signature=41458101a6764b722f518e3d44e621e5daedb25a151fbedb216def7d9a7f1e97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=a7d94e8d229bf99058c3d5a5d35574bd53520050be828e22102039d81371614d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=cff3682f7dda22a47cc126fd428aa5ad3d5a56509c6c602e07fa14766b5e1ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=07b05e2f2aea6a54e212a105b2af35cf6191f9055ef4284c76665e03ac3f33dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=6780dc2ea4119458b23473370f25fff97fd9a585e0a5c0c57962dfa27428119c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=3d3d58aa05b2ddeaf4044df208092273d12e191e3d311c920c9952d2ceea201e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=187a9fc9f8757e5f647db4c34c73e4b69501c53772feb8c85f9ce30a2ecd574a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=b8bc9bd21cee8fdcc09d5bafbe83412f86823b08d653abce57d233cdbf3d1c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QK3XVHN6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T081150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDdyMM7odMJCjnV8fIeWzm5bREz8a5KWZvxoXvPsuejgIgN0ZrGI9S0KbocDtI3ZnJO28xh2wtFFKn%2BLekAaF6g5Mq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDD29ODToXyDDNXtCVSrcA0bAk8K1QT886RsEUIbPw7cdI8UbUAsiSKcRM%2FKdbgTfFGK8KKXoGkrT2vYoSBCNM56DZnk1pxgJXL5AcUaahbKKQ0hNJd%2BT9Ypn55GT2Pi4TUapwa0n353SdW4BiTKDM65e23oCx3%2BJvV0oYX0%2FvNOfjOtO%2BkFGMVQinIKgaHjOFDiY%2Fd6dnZyaXiTfg8bPdYyBEMGBWPMnd79UtLnRcCdG1tc%2FSVkmPF6rpIM7PFLiaSkYRI8bQebYUUazNv%2Fd4n0T%2FuLXKjbXciEGuIGbOcmlJ4GyvmYi%2BkFZjtInd5wlw%2BCI4nJXDw88kKbjlUvXut5mD9nZotVMZgsX5UxglPKzldQrwjznquRB%2F9zCQmFhiphdBmEJwjUr6gEDmcECxnALBs%2BQTHqhKtO9MWuksr%2BuBmqhQbF0Unp3UrZ4lafiS9fehHKOM%2FJeC0AoJGcKUQtFKskOVs6whct%2FUL5P%2Buo0mTKizi03sYgOzXj4lUPQ9cYmuyUzTWox2fYPn71AKBGBytGNx%2Bgyu3ZGppwbC5Nq8YLTv70jVy5B4RX1sxDrPzDnOGL6lZ%2BeamyT%2FiK9bwPfjH3Dm6FEFsumCZxpswxavaEy%2F0Z1mdwLJxzy1jEbGf%2B%2Fsutwiu3WhY0DMPvvtsQGOqUB9RTaxGAPtyrltCPSRchYS9AJSvd3xmjtK8o848838FYBBIRjFV2ePm6pFN6Xow2lOEglhxpkEK0RIPXL99c2N%2BEO3fCHhf1ehiSsmOeGh0MrT7joFaIZPwXBKizn9IMvwqU3UnieGZA9nGiDw%2FO%2B%2FZW1UE8IH%2BZxHsF6jprYTxePXbgJTMNHuicKeKaS2huuodeZylb9crvuy8AtIzqZUIvVjh1f&X-Amz-Signature=25278f943b29dcc6b51582cd9c57da5963d12953da2bf16b33e7d4066338ff2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
