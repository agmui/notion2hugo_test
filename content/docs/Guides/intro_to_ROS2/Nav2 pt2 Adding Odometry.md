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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=39b19cd277bede360694e073a3db97ddbbc0419a895cf0da5fc7391186072a9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=884f5c803cab7866bfb759b818c1da8d650b811b702521c0c5d964c2740f1e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=1f192084f087e55db1ec25cce95086f152fc53f4224dcecfca9480e4aacb9235&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=8e05fe79683a7341301fc15f2438d538d6ee4d4508c76556034d74fcd9e4b59c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=d79a7bfcee0d854c68489be12c3752e01ef5fc1e2691cbb2473a65e35b80a6b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=792fb94dbf57076fbd2c41d000e7a742ca7c2a3357c0b8927d8bd63dba6d7cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=05b12ad6526f951e17d78b6ce553a364ddd3336a5301095badf024ad470eae9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=1647f04e112e226616c17e4e5dfaeab48a1b4d7b7b3037aea5821463fea1221f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=79aa0bde5ccfb270771962e523469acc51f8b8ca54b7d19a8e602970467828aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QK4SM4R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBBZBR8s5SJCmS9GAx7SH0VjFDwAudlWbwigL7GWK6ntAiEAwe6fBf6xIhLPQ%2Fl4TcRkhuR8h5T20FgQkmjVcwjonV4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCzPgmUrhlTC1YDwdyrcAzkNZ3DGWOcmBaMKYHRMdAB8bmp43ySkUTMM3el72l9Ybo1Zn1BDT%2FnCfBBov9RexwgGwe7HyFiK2%2FbBcgpErh23xLog8weic2Sqyu9bWjAb%2BDOcQlI2hwEmi6ZOXnXuMAFsFt97P%2BYniifQaoLWCljl27xAwfa8Gs46s15bg6JTIq7R3ksx01dSXXJ5v4qnkCws7IrBE8tOxmnv4iVV4TwyQfumw4dScdvFkdg99Rn7bIkebCQdqekhIE2qGWN3AH2z9TNs%2F7VcbfLzWi6DzHtcUxiHgiqzy2boewMJzOC%2B%2Bi3b2EpKNWNa1vs59wMuXp9q7RdjEjSviTtJXUPNgUzjFtTfJWgl3YUxMPql3DCRkvm%2B8CsUP3gX0DR1%2BYaLsxxr16NADD1Xj9nSabYUUqY91ybAWw2k2EQrkkiXKEDB9lgiORhhE66bjS7mFZdnzOIZIpNZkFauWstYEK1Jl8tyzHT2mY%2FHZEsPKaUu2z6hcXnnzDuegqgzOYd7S8UwbHGgYHT5Y0lQAI2NITrJ0zZPQQ5EF%2FduCnsP7KmYGm4PnoNYa6VDYEUZCxUpGnlp6ofBomXbrLJpFuedtERVtgY51hniIddNCx7V01DOJLUE0Tl2EeAJ4LyJDUsYMNKNncQGOqUBdNHrsnqKPZAKm2dAhVtFq%2BG%2Bvq%2FIN38qaJh2kCfCySLtbn0zX%2FFDJsOqKAFGUVm7SRS8p32VTssZbd7RDxBj9cIWsaIp25J4fXkWQT80lMFwsrFnXN%2BKWFB6Fqdxvsd5O7oJ0vbYtTtrz247bKiOQZTNwwvaRgrPQZPlnsI8FDw5%2BaBvB2yZkLAxQLzFUBlLR4UoRU5L2dOVzfxXjZ4wkuO%2F8FPH&X-Amz-Signature=237dfa4089c3e99d7a9cee66953a26f5bd140014e58a1275e84c6c968bd740c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ7IPW35%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIDvfHDKXH8ptKFeSV2XYYjui2XzgnRv9jy7IiaxaUbyXAiAxnva50uikARiVtTXjCuhocHs%2BV3WraHTGBgFpfX2jyyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM37jD5XG6Xnlhm9UHKtwDshoV5VMz44Jw2g2lbP%2BXorPAPGIHJyclNSN72Z6lyCoXhgn2PytJLWJKG8WzkaVOECR38go7GwiHmRJ9pY%2BnfA0t%2BWhgONxdBoA1jJm2AbcgQ4hnm0PvaEq87rK8Bp1uXakDqfACGZD7dAOgquzqHyy0tYejtj1rffuA1oFJNQebVGJMPg6u1gY9wmOXYoULLe9Lz9Mn3bWU%2FF7%2FVf509wof43c%2FJbF7VsRkQuYcY%2BtAiBpt8au0yCTrNiG4Xde1ptMvnZb3m5jnWTS0d5xsFUXlTeV%2FbnFKVl6Kxwkna%2B3CWIC0duoW8PmHQ6zfJ7fn4AAUtdvjzJNHK7NgHRUC4pF%2FHWIx2rwrN4Fy3s3Z%2B4y5Z6kJ665RMz%2BWUwmIDssFEktT5TjTwRWdDujv0CKbqICYtr4cpkbPIs%2F6XisjMPO3JAWu6e0Es5lmUR50W%2BYguPeaychW6zTmmZB%2FZRak0ueVT8k9iPNt1ykgv8u0r9DaCbaUZ4zjdyhe%2FerOjSz3qRvObue8wQFAiD0iXhyZ73mFpYVYfF1N04iptDxq59HykRtDJ2oeSFOmU3%2FVelcZOJYg8ahwu6vZbYlTsZP7q%2BzqvYfTSC1bwJdokmWzlyYpaSaRpJvqUFA635Ewj46dxAY6pgHFNx1xtYECEPxcHyFzp22aLx6mz%2FNkEr9sv1rMkRc3M0rt%2FmoNdKbGlXEDKWEwPflNsjWcRCNBYKcLcuNEqesGOzKQOufSoXQHw7%2FzD%2BCdAdvEeTZ37xCJ%2FRuv2dNpiMdtdhPEZT8FIFAWT7glY6WeJ72nDIo2jjAhAASSyAB2naPg4bB8WKAZrpLEBYKPOmxGsX4TZCtpQSYo8w3kA4Ult3VQiWBs&X-Amz-Signature=90961c83a5d449209f9159640a8894d686d568d35570d2507d20c73eb212768e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=0e8e9aa81316a01bfe5fc7e179adf14c94fc40374451b3d7fc1270eb2bab0be0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=418f3af3fdf583703a1e8a12e4966b90dc0901c25ba3a920b95bc7f4173baf34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=08d5410a0977870daa8680710cce13b9785e86801b52d601b4f67ceb7a36ac07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=74943f6cb9835757f637289f7761638b44903ea09a57b2825457eac491666328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=60a1fd18e350ecf1a55ccb79eae31107de2e987dd7f8f5f3ff0e5c03c74ecda9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=682797d02bf45505742045e807127af7f63b8856527e8fe9f29f63fdea8beafd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S6UQ6CJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T101120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDRrBYPm%2FM5DjYrh6MJMRiG6oaAHwhaX2heBDkQrvfJ%2BAiEA1nxg%2F2GnI1vGwWzix9q0wmX9j8MJC71NR64qmaq%2B9oIqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIPcfcjeq4ls4E40lyrcAwEBvo%2BY%2F97Cp6t262rVph0Oktux7nEr%2Br6oAcWQj5Bq4ecsKUz%2BfREu4SJBWVmJdjGbgmBVlojDPUjHhhpfKbOzthMQf0bDf2CMFwakQkPCtGKyAjyyRlSD85e2DBKu9Iq0IYu7dZSa0RSiAtt47l7%2B6oRpprLsS9UMflHmlrG97O0q68pnC149JFJcRYCulYLDowT97awBRMr8Sx%2BQIz%2FFxD%2B0OWz9Zu08HwBCKQaIZgZ4U7plsQBVlmguRBFBFYZT%2FD6fTRZ0EOqzAMWuWJJXXK27AhexIF8%2FbdpojsiU6wzzYmhNduAzr9OPvOQlPcAjooCplSsOY9lEZu4%2FwwaajI5nPv3QTRO%2F5bJ5J5%2BCxL2hNPvGR2rwpJm3cLd8Kmlkj40k1SG3D9KTtT1gkcXFr52vwGgBCJIV0t7Amqp91uacVM1bugQaGfbCx3O3SyQyEPtJHo5SW8CEL2kp2ZPBry5Y0I48Ep9q17SfzymTTf9NFcra%2Bzl2JA2JWBpelfZSIbuiRkKzNJ8iDkn3NNyZHQO2LrpzccJ4%2FkyUf4HY5k8Q8JEiVDCnKQBPMKvP59ZlUJfAC74RN8dmsHPvRlU9skQHKCRybHoS9Kq2dYzwGFFgOJzfGZuJs7VgMPSNncQGOqUBtS6Qtt5kEN3qOHmhGXcidD7Do6BzKeoVG0%2FXrNAfUMOYWVTMSy23eZt5rCDOeM4EV6ILNjQuXRbmjqTDTsNyWCeEip%2F%2BaFPKPbBt0r5IK9fYctDvqZQyo7CfAUvCvVYVky1BUCFCDaJRBDKH8Ic6DAHbOP3BYWvOIXGKR29HdpgmIRb%2F3zZd8HFsDCt0%2BgIkN7WBbmundL2q7A6n2D3RkWur6tE%2B&X-Amz-Signature=852b9ace62bf3c4bdc0e5a97dd60196fa4c156c85cc2b6a7922f9206f5067efe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
