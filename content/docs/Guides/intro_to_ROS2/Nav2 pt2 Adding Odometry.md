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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=37307fccff2ecd0ccb61731dd9c8df7a8fb6fde675e4f751f5aeb19e5794b5d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=983ebc13e3995ff09132e409dcab667c853d7c6e49d1348e9ad59ae6fa8e1b96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=0fb6ad21c50ac204e17e10e7eb6863ee4306ba6aec4209fadd1949d564e80b74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=f455598fad2817b20a191820f816470d4448c4482e1bf92b5b7ebf51c9be2fc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=bdec18280676ee49abe29edcdd9b83b12a893616531dcaa9973aac2ae8e13e8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=8d16c581a621adf7c31594772016635fad6a16ad05ac5cdcb5d8778c6dfe418a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=e8d3e1138b44fa1ab3ed5270bd50e1d2fe0c810607c39be0f691d4850d24bfc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=84e852f9f927e1adee360adb263c52390593f45fbe12d52d1060c0ed9c6fa24e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=d867eec900fa245ddcca6132d57cc8d13b49c4c0327c9be758f026ed24962eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SR7GPOZX%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yNvnRqCyK5uhq5q1LHz19jyuHuMIUoS74TqsCP2uGgIhANm%2FpVGVbaFcjZM1IBgjTAmxxudrumALhDCntIseyLelKv8DCDQQABoMNjM3NDIzMTgzODA1Igz0fJDhPjkQHS9zhT4q3APjoFvYqKbjAQM5D2IV7d1WWvYjHM2WagSH%2FpQZqrpru%2Fu%2BKEEPjmcUBUyfimok3ytsrPMqUU62%2FHj5lie8PfXD5vhPGu7%2F6GDcrtRVI3VcDNXXitlpuHV64JSXZU23WJYVJ%2BHAiR43Hi7RZd9yc%2BUaS6Kra9qZ0D0R6iAZwOMQRR7lw2CXZpyEL2ACt5i7TqpvkQkUfq1QPg2V4EUuOiEAJd3D3TV74y05WqsrnjACtMlXY9PHoN6Z5I1RbnXV8EIU1A7hrKjvVJ1BJ%2F2arBd0b8gFCcurxInbPujNgfc2a%2FsaQkHipuyczLwiGnwcZFytPq5aOON4H7cw5jguCUmxVvdqRjZ0fvVtsU63QcKzBmlCmwRyttYy8MJW%2BnIkdL8cTCNuI7R%2B4ISVbfFUPkxAqryfTlNq9OLOievOrHiWcoMAu2m0DVntJ1sNx8q3joy2ysEoWGyLXf8FBtjbxC5N4wKpJS3cwMeJx2iBb2ydZUZvMCBNei%2BpTLAQSZWq%2BmyYxfsqar7s0ZRz8R%2Fm3FSFkwtkEVJhWld%2FfSgZqW1wZ7vmODQ1lEn4GxjCpRQkfFrMvrmkzGP8HN4uvxVfm%2BbfOeNtIg6HmhxvZn0BXMoShhi0EK2BBJ%2B3rUzHUDDN2b7EBjqkAU%2BYXSyUtkuZ9WKtAQYekPpNaJTzinWMDHOuRlP8CbX4Bct8V%2FXmG6ESaWizfYzXr8KmOCholdPvLYoY2yWPXT5hJv6F4qkhuIp6bJSerEx88ZvgzadILSYRqhK2zXekgOBynU3CCAd84FQxgSFnU3%2FhJx5jx7abg6DTl1vXkue6ytrUhHEDYWYwu%2FRneUd3DDbEZHLAUip3AFLz7c1%2BhmDWl2ln&X-Amz-Signature=ddc1adb52e7c9719be2a1cbb4f4eae8bf0a82019f084f334d0f189a08a79bc4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2NZFD3F%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfAY%2F44GqSvpZd3nCELYpSu44KWf1rRBqyV9EhuBr%2BpQIhAJtkNw7GoFbS%2BqE%2FfRzTT2C2%2BATOyoeFmAv4WQF%2FiIZ0Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzgNXsr64tGIys8j0Iq3APiVJgGgxLoMT48bL%2Bm69r342c6ghE7OwFfMtVK%2ByNP9XQtpsAKhxbdKmzNUC70NGx04ICFFhIQ%2FYpN4MJlDD0rtELiKCvaFzLjy%2FxMuKKGD%2BlqmL2XhxY2Nw0clc5MXOi60JdG8dh6wBNE0sdiuRc2a2tLIzOF4xsLhSOVKDkpEDrf13eYpvNCISZQNdTvWowTBf3CUU0SNAkz9mTe73JV6MYu6Szs%2FqP61A3Fv7VIRT7KYcxHAr79SEWuhUfuShckPzCbJLRd4PZLC1rSM2fZfBqTF%2F%2F0wOWehfxpvyiZC%2BaF2cwNXguiSbAn5zHvGHjhNF6geS1aJrGYks9axl5dv8B2pLZvZDO5cK4lVRc%2FMFZhTWPf65lrkQR6hML8gtxpjYxDeAI5eZ720fYunCax4jxHF3LUhJQ5nfEyVofWI7rsOekxWr92SJwwHqozerMZ1Q%2FqErt6gj7ou2ZKMJQtkq5EufqbUB6U1j3ys4ywFnp0huxTDJ%2F38gw44tEksIjq5bsT%2Bs9QLIxWFXNDqmy1NpWyugN%2FibvdWIZA8JVOWCd9K%2FmLZV5wMNtc6NtumbysuqgVXHZ4IcO4%2FtMH7WjV7AOyKpBxe1k%2F4clPdDUe7lBgLdN%2BWsNCakwRWDDM2b7EBjqkAaWwkcDcpntx8Bs30cUuI3XpGJpj3fsUIdmTZzK1YbBb4Ny60a59XK4l%2BTKeY3Td9IFhNg%2BPlVL4xev%2BbLJGFitIhh1SJDUeQ9uVh6TFvfVI5UUzw8vXPtNDrUB5zeurcZyy3KWMdmfx2XhKkwPUb8ChWRp95HbtebyWBbG1TLfj9RvHEH55JoiVtstjZoLPKStYbXM0CSOB%2F6jTIMYIiV9JLbp6&X-Amz-Signature=513b9c637a1a936e07c747fd16017ab7e336fce4c933c12d84bd646755aecd1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=8373d1e71d9f4d73d51f792ba2d0f90afa9b4d22cb4ff447d23b47a6365e1a38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=d9f980a6b10376666715139c1a59445489ea04f8270633d35c620c8bf9323c7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=366a96984b6d6ca1554e014ffdca5d4a443646207868960a1125b3081c1a372d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=88ad06e5eabac2cd0ea212192eb265792b86256396c8886c13842c9cad941282&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=1931fa81dc1a45ee183fecfbf00e77316014a4dcc3663919548058dfe79066b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=6284c7923b4e0c03e2b8414b8ab7583d360c01c0191211d59138b3c7224d4f66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=e647d3591c70318a40c42d01eb3aaf8ec3a8d27c5badc7cb49b540773d3deb30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=f2b1bfc78edf3b4fc2e731642da112e107daee7a6e000f404f69456e2801543e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY4RY7WQ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T220924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDfpBaoyRjpXXo8N6O2NI25Z1iaZPtT2W%2BRMp%2FW208mEAIgMyYz3u25VO49tMKCkBDay%2BG6i%2F7XSnE1ZthBMMQv6Ewq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKPute04l9pSKhZfmyrcA%2Fdvh8vfJh7HaI2OGFHfbvymfY3yiqoKIOdrfUQHFbPpdkbdhrGiL%2BxMFpP6fC3b4%2FkEFHy55XWuC%2BVRovsGNiWMVD2kDsSq1IHnBWhfOVm8kl2doo96d4nwdeGtRfmdA%2FgqmdGvi77grK4QoY7YllEF7dAPFD%2FQHpKiSyQ0aQVMZndx%2BnwEEfVT7gqRqxJLOSCJPNWbMZ6tJvyGKiXLB5ORZ7ZqwSs%2BHxbmFjVv309pdcm7qUISbafHG9UxJOK1UQ%2FYeNnkS%2Bw51mpU0CF2HfViNwNenPxEoOvSBOTKmEDBY8DkSghP5WCRh9OTyR%2FG3qG1sL7w7CvJWtl5WH4X6pdy2f3SOuiFUqUQOF94ghC0KjS1lII39poonb5VWRddql107wVJZEJWfStpZob7EJdQGRESHGcuwCHkZyPdPHeYVc%2Fc%2Fi8ju5rhCbsk%2BqS%2BkLUk3JUiB5%2B9b0XgsGJ5WT8bP0ROW57vayOJ78lIztSL32oeK1ZE9SifL%2FPJrZ%2BKOprZST6S3Qh4RWXTVf1NU1mZ05eCPj3SQubtFQw5kSUYOyHe%2BShYAftYXbXd2PkzoRulbo7IdmwUvD9LW5mJG3hk%2B%2FYi2n7n1IKiacF%2FWOVsQ0AUbHrkGGA%2Fi6vGMIjZvsQGOqUBq%2FmrDLgdnYw%2F9tPUhGqmUZhOj7NW96%2F%2FUIRAw%2Fy9WL%2BcqrUZFgH%2BVVTfHs%2BeDuiwXmDnqoI281S1XsnHBvND9ejGR7fYxcQLCoujkPQRaEvlHJseu3rpB%2FYUdy2otJt19u4Ck%2FOVKP7gVIxTGlGQIjL7%2FMVmCn3sjSu46DPJglYVgwo%2FZ7gZSQHlPnDyINPbdawAi8Kcrv0DdjRDNnnsfcSDBlgj&X-Amz-Signature=c1a13ed31b545e0e5228ee26b00a16902c3e06820c64ad36003b278ad581532f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
