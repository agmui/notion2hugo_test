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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=56c7910bc96cba630d9a7deace89c1c00db7d82e6f732d7e090f8cd7c5944adb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=2d332c5811ea7a65d92e1211bae49e36d25dc3bbb831a311966aae5af41e5ca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=ebb826a2c1b5689b2999cfd1dabe7909e6335f92b82df8417854a29c65c35699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=23f56a4a8259f81df6090776ddf3fbf685c2385187573417275040aa70760975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=947b97aed20453a682bc73f1a83b567a74a3d14d053a0169d825430e745991e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=23d9d02742723ca7e389c84e458c1acd05f356645047d726a467b41ded4ae071&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=d10476e4166a8001299d5aa2c2bf8a8c1d7d429193cd7c72a4cc72d4d330552a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=ebb41712cdc3fd856c410321a958b4b5078a200790c55fd8c629d1fb6ac27fbc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=f2d19991b91415722451272c493b859fedac2b986a1c65c7f63e7d81e20bb0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYOZTCLR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIFZarWhe1S8wpz3Pi%2FqD0dpHI%2B6UAgXD1vzdvs%2BmFAxYAiEAtweVtoo0NCBRJ9dPSty7IqD%2BhOEuyUycf0l%2B%2FpQtiWsq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDJeFjywoJ0ATgHZ5%2FSrcAzIHyPF%2Fhy2TbUcSMYvc4pzcsc0vc624Xnnn%2Fi%2F6pD%2B0j0ALkfYZN5OoD3o9XKQN8EPcMaAu%2BWvaDTzDDwidx6CzwE5p7%2BuebeuSB1GFrHnF%2F3bDjNIdcPo27ETd%2B%2BnGHcDUJ6iyU12IG3%2BGI14%2B67VvdUt6yYCy6%2FUzzIojHz5CEElIooKZWJQnQIMKU0iexFX%2BSfeiBP37oVuzkmV9rhTwWUlaVCLcumY3%2B%2FkUeneJIZFCB3CHT0Ttus%2Ft7eB%2BSmyqnvVkKTuycVFEwy%2BJg3oAu7FYovFNYKGjN6yhdJ1eS%2BPlOxtn%2BOVo4e8XLKqu6O1E0g%2B%2B7BATraou5SAMvQ%2BPi4w%2FcVdVUDx7LIu6igZyrjHYOc4RrlmDS6i4aUyfJrVSpuNd3PPu5yms8zaCQOa%2Ffhg%2BjiPJ%2Fik6vZWbCbXq6U6yKhgVudi9fNEWqgXjdEXg7USzcILG1RT%2BJ%2BCGP1gVxIgPxw7UuySKe0kqS6WkQ9Tci8XQ4ups%2F0EvyabkZW%2BIzcLtK8AsFvgs%2FdWKYPEmTQl3ixNZG4gE5xLYar6EBWdp50Gj3jqC8ZEiqtDmnzXdKgE5y%2BlN3DaQ359EzYdG7oFYyF7I92mfyGMaLScTfq0sJTJbTolsCR%2BOML60isQGOqUBa0FYvwwfafAOPsiIz%2FpLYP%2FM3pn%2FLvwvgW8kDT8AyfS8PBIXrL7S98IYmlPe5eu63U6B%2BMzQCeY7A282l03VZTkPNo6f0kunCOPfFCzY6iutJNjQzcTRrr9UwXjInqNh7dtSD4ZkGc9GzF8%2F8mHPS8e18hyx5NLinskHrEkcCeudErykqBdbFx5qp4h752DJ1%2FO9d0lypKHHUiN%2FdAiFK%2FwqDzFF&X-Amz-Signature=9554d9e37bb81f50cffe35d33933cd779318919ce98413de8ab1069bbd68275c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=2eb9f0a5573d84f973581f691cbe39ec42eff1539eec6309f5d6fde49ae32c93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWMI77J%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQCG5t%2Fh%2FT0LsU4EuyBwRcrvPfi9ojv5oAUxQnxajWC27gIhAKoUcn%2FJjH%2BdD%2BdhJ1uPd%2F6Zmsb8pcJAqX2kjSwCrQOmKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2BQ6knwekhlIgrHq0q3AP4SWundG6IjuLIQ%2FuTKmpyquZ45cYrT2D7MO3ORGQZn%2Bt0MH0bDJoRfNokKC9%2B2xekLGLaHshQ0Yt6ha%2Fu0HoVqhyjhu9wTC5ckSrKQ49mke5Z%2BK8ltQmdpbK6KL18bUiY5fI1JSMC0Zy7r4hPcgbw9nJA%2F3ulf6VxGsoEGbvg64ojqbzpG8QTskeb1RcgK47GkKmmO8PO72QFpGSVoHn2X%2BqMsIAG46w1poK8kowVqM%2B9dPowalOeWpwAF7P0%2Bc0QvMRQFxTfcEbsOYKUMgm4MSwX9ADgYX6i%2FJ1oFAkWtUItUpabg952oQ1TaCY0nTSVzMDyMbq6lOQdgBd6NGVgA%2FCKP6Tz%2BP3gDVv87TOOIDaEpPEPEiDiUT57gXz08Kq1xawx0f7pUQtLbe%2BCLZipYzTg69Pe3ab5CV79pGoUETSZbwFP7%2BnwX99bhRR6ZEy6FaBVXhre0QEsXUD5I%2BuK7t%2FYzk1zBg3lYjwsZVkOUugh1LOQy8O1QmZvDpUYqC4uE%2FfPcoLbZlIzRHzFFTQ68SbaKj%2BbjLvDVPreNuAV%2FxEZda3M19Av6CTiMvqz2zHZBWhqERv1yjvGLw6UXYrxH81eN3ucGPi9mGJKaTYhMmnQGt052P7e%2BKKtWzDdtIrEBjqkAQ8oOQ%2BFCGK%2F%2B%2BEBVHUXigTZEsaHIX3NLl4IpjEtYnmzWh3yyPOn33gxefYrd2G%2BF4mLnkASK8HuffVgpK1gdRsp13Ay%2FDqpAFHvBjFAoQXWZKIpMNwR%2B0HTK6nTeRKFtjX6DSEr%2BjROpLOe1tEqUEKtmqafP8dHBrg2jCeGuB4BkJLKORpwi3LIOZJPR7v%2BFTKn%2F7olDApSB%2BB2r9m3HN3j0qhj&X-Amz-Signature=97349ff191bbae091564484e07ab2b799f41299d9fb6ccd9e3a6dd69497e0113&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD64NSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD%2F%2FbrsL7d73IvZ9Z1Ab97FLmWL0GFhUxOMkUpYjYA2NAIhAKw%2FS%2BZOChV2hEOzTyarhKpldzGWd%2BxS93orqnJO6mYkKv8DCDYQABoMNjM3NDIzMTgzODA1IgyI2A%2BQOpVJCBEyXXsq3AOb%2FuuiKrxvg%2F%2B3wnqjCsaQ3GR4%2BZ9ICm6mBxhBmCKbUofvASkAzM5rkCJeLjHs%2B%2B7ylPrRjkBQezygknHO3AUTMrgNqTny%2Bs4iTtRDLiULTIrbwnhDvxgF3oDiqEKY0aDpmHdxe3%2BRDNKP79gbS4%2FSHjc%2Bs8BZvp1deXxhcJJWmFMx6x2xX2vU6XEUFlYsO8dbG20%2BqZBRKaQYZR63yjw9qBC9Ga28OhfkA5%2FFSeZdJ%2FE%2FN5otDREKy5Elu0bw1ExESQWxGrcjtjzCtKZuDL03BZlzX1vFSsL7ghygo6vsL8N3GUkSH%2BA%2ByRfHMCn5mRXSKePBwqrEdYDI9ekRmOO1SB4XSkO%2BxnI6E%2BmoaNES7e5ZEv8wKHXROEurrZMmMUFKSWcRNkYXSzYpFgBgFMFDmhgXFLvq1linWx4mqEtkUCzLOfI1fIkD%2BUkdZYmKqvYUFXW51ylSWcbre26FM7SxTaGrzAFj3gKAqACwWwx7oqJHGbIttzvbC1clyBChqRf3jEiMMhVR2DrjZUxeykqmprDNDFaeEh4rOAy%2Fb30E%2BinwOGTAzo%2BBqgb%2F8etXfN%2FDMMnmFxKF7x2NHFN%2FuEDdlnqclW4Hsk3nBjfWX2wIbN6NtjPeCu0p7bz1%2BjD4tIrEBjqkAbuwMxabRjRZZDbduc64HmF15JqkKBl6r2hRly3yqED8syrzaipYS3r5LrIIqoIgoLLDn1UM2PMMV7NIOZAW%2Bx5oZpD1bb5wpGmNgAs%2BSvnIFboxNTFU%2B6gC5GPbEO6XU24CnI1rUZ46nOSzoIvxueTAilwJT7KnufXnMEH5kI8Wt2XFcOHypGow35b1qVJR%2BKTGZyx9jLtFBPKOemKxI7K8BA%2FX&X-Amz-Signature=d7c40e20fb782bcdafd0ca8bd624207e7804ce9a4123936a1de690e514234d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD64NSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD%2F%2FbrsL7d73IvZ9Z1Ab97FLmWL0GFhUxOMkUpYjYA2NAIhAKw%2FS%2BZOChV2hEOzTyarhKpldzGWd%2BxS93orqnJO6mYkKv8DCDYQABoMNjM3NDIzMTgzODA1IgyI2A%2BQOpVJCBEyXXsq3AOb%2FuuiKrxvg%2F%2B3wnqjCsaQ3GR4%2BZ9ICm6mBxhBmCKbUofvASkAzM5rkCJeLjHs%2B%2B7ylPrRjkBQezygknHO3AUTMrgNqTny%2Bs4iTtRDLiULTIrbwnhDvxgF3oDiqEKY0aDpmHdxe3%2BRDNKP79gbS4%2FSHjc%2Bs8BZvp1deXxhcJJWmFMx6x2xX2vU6XEUFlYsO8dbG20%2BqZBRKaQYZR63yjw9qBC9Ga28OhfkA5%2FFSeZdJ%2FE%2FN5otDREKy5Elu0bw1ExESQWxGrcjtjzCtKZuDL03BZlzX1vFSsL7ghygo6vsL8N3GUkSH%2BA%2ByRfHMCn5mRXSKePBwqrEdYDI9ekRmOO1SB4XSkO%2BxnI6E%2BmoaNES7e5ZEv8wKHXROEurrZMmMUFKSWcRNkYXSzYpFgBgFMFDmhgXFLvq1linWx4mqEtkUCzLOfI1fIkD%2BUkdZYmKqvYUFXW51ylSWcbre26FM7SxTaGrzAFj3gKAqACwWwx7oqJHGbIttzvbC1clyBChqRf3jEiMMhVR2DrjZUxeykqmprDNDFaeEh4rOAy%2Fb30E%2BinwOGTAzo%2BBqgb%2F8etXfN%2FDMMnmFxKF7x2NHFN%2FuEDdlnqclW4Hsk3nBjfWX2wIbN6NtjPeCu0p7bz1%2BjD4tIrEBjqkAbuwMxabRjRZZDbduc64HmF15JqkKBl6r2hRly3yqED8syrzaipYS3r5LrIIqoIgoLLDn1UM2PMMV7NIOZAW%2Bx5oZpD1bb5wpGmNgAs%2BSvnIFboxNTFU%2B6gC5GPbEO6XU24CnI1rUZ46nOSzoIvxueTAilwJT7KnufXnMEH5kI8Wt2XFcOHypGow35b1qVJR%2BKTGZyx9jLtFBPKOemKxI7K8BA%2FX&X-Amz-Signature=f597a83e7c25816942b1e1a050734fa557da0ad308c98fb3eb3b796d6cae03a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD64NSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD%2F%2FbrsL7d73IvZ9Z1Ab97FLmWL0GFhUxOMkUpYjYA2NAIhAKw%2FS%2BZOChV2hEOzTyarhKpldzGWd%2BxS93orqnJO6mYkKv8DCDYQABoMNjM3NDIzMTgzODA1IgyI2A%2BQOpVJCBEyXXsq3AOb%2FuuiKrxvg%2F%2B3wnqjCsaQ3GR4%2BZ9ICm6mBxhBmCKbUofvASkAzM5rkCJeLjHs%2B%2B7ylPrRjkBQezygknHO3AUTMrgNqTny%2Bs4iTtRDLiULTIrbwnhDvxgF3oDiqEKY0aDpmHdxe3%2BRDNKP79gbS4%2FSHjc%2Bs8BZvp1deXxhcJJWmFMx6x2xX2vU6XEUFlYsO8dbG20%2BqZBRKaQYZR63yjw9qBC9Ga28OhfkA5%2FFSeZdJ%2FE%2FN5otDREKy5Elu0bw1ExESQWxGrcjtjzCtKZuDL03BZlzX1vFSsL7ghygo6vsL8N3GUkSH%2BA%2ByRfHMCn5mRXSKePBwqrEdYDI9ekRmOO1SB4XSkO%2BxnI6E%2BmoaNES7e5ZEv8wKHXROEurrZMmMUFKSWcRNkYXSzYpFgBgFMFDmhgXFLvq1linWx4mqEtkUCzLOfI1fIkD%2BUkdZYmKqvYUFXW51ylSWcbre26FM7SxTaGrzAFj3gKAqACwWwx7oqJHGbIttzvbC1clyBChqRf3jEiMMhVR2DrjZUxeykqmprDNDFaeEh4rOAy%2Fb30E%2BinwOGTAzo%2BBqgb%2F8etXfN%2FDMMnmFxKF7x2NHFN%2FuEDdlnqclW4Hsk3nBjfWX2wIbN6NtjPeCu0p7bz1%2BjD4tIrEBjqkAbuwMxabRjRZZDbduc64HmF15JqkKBl6r2hRly3yqED8syrzaipYS3r5LrIIqoIgoLLDn1UM2PMMV7NIOZAW%2Bx5oZpD1bb5wpGmNgAs%2BSvnIFboxNTFU%2B6gC5GPbEO6XU24CnI1rUZ46nOSzoIvxueTAilwJT7KnufXnMEH5kI8Wt2XFcOHypGow35b1qVJR%2BKTGZyx9jLtFBPKOemKxI7K8BA%2FX&X-Amz-Signature=09b1b7f2b867fbc23383f7ca942df67ae14c8700b128f8dff7409a376c054a2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD64NSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD%2F%2FbrsL7d73IvZ9Z1Ab97FLmWL0GFhUxOMkUpYjYA2NAIhAKw%2FS%2BZOChV2hEOzTyarhKpldzGWd%2BxS93orqnJO6mYkKv8DCDYQABoMNjM3NDIzMTgzODA1IgyI2A%2BQOpVJCBEyXXsq3AOb%2FuuiKrxvg%2F%2B3wnqjCsaQ3GR4%2BZ9ICm6mBxhBmCKbUofvASkAzM5rkCJeLjHs%2B%2B7ylPrRjkBQezygknHO3AUTMrgNqTny%2Bs4iTtRDLiULTIrbwnhDvxgF3oDiqEKY0aDpmHdxe3%2BRDNKP79gbS4%2FSHjc%2Bs8BZvp1deXxhcJJWmFMx6x2xX2vU6XEUFlYsO8dbG20%2BqZBRKaQYZR63yjw9qBC9Ga28OhfkA5%2FFSeZdJ%2FE%2FN5otDREKy5Elu0bw1ExESQWxGrcjtjzCtKZuDL03BZlzX1vFSsL7ghygo6vsL8N3GUkSH%2BA%2ByRfHMCn5mRXSKePBwqrEdYDI9ekRmOO1SB4XSkO%2BxnI6E%2BmoaNES7e5ZEv8wKHXROEurrZMmMUFKSWcRNkYXSzYpFgBgFMFDmhgXFLvq1linWx4mqEtkUCzLOfI1fIkD%2BUkdZYmKqvYUFXW51ylSWcbre26FM7SxTaGrzAFj3gKAqACwWwx7oqJHGbIttzvbC1clyBChqRf3jEiMMhVR2DrjZUxeykqmprDNDFaeEh4rOAy%2Fb30E%2BinwOGTAzo%2BBqgb%2F8etXfN%2FDMMnmFxKF7x2NHFN%2FuEDdlnqclW4Hsk3nBjfWX2wIbN6NtjPeCu0p7bz1%2BjD4tIrEBjqkAbuwMxabRjRZZDbduc64HmF15JqkKBl6r2hRly3yqED8syrzaipYS3r5LrIIqoIgoLLDn1UM2PMMV7NIOZAW%2Bx5oZpD1bb5wpGmNgAs%2BSvnIFboxNTFU%2B6gC5GPbEO6XU24CnI1rUZ46nOSzoIvxueTAilwJT7KnufXnMEH5kI8Wt2XFcOHypGow35b1qVJR%2BKTGZyx9jLtFBPKOemKxI7K8BA%2FX&X-Amz-Signature=10717391bf11dfa3d9ad8c4070c6e3278e6d2fc755c00a80ff9feb6a796f2e42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD64NSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD%2F%2FbrsL7d73IvZ9Z1Ab97FLmWL0GFhUxOMkUpYjYA2NAIhAKw%2FS%2BZOChV2hEOzTyarhKpldzGWd%2BxS93orqnJO6mYkKv8DCDYQABoMNjM3NDIzMTgzODA1IgyI2A%2BQOpVJCBEyXXsq3AOb%2FuuiKrxvg%2F%2B3wnqjCsaQ3GR4%2BZ9ICm6mBxhBmCKbUofvASkAzM5rkCJeLjHs%2B%2B7ylPrRjkBQezygknHO3AUTMrgNqTny%2Bs4iTtRDLiULTIrbwnhDvxgF3oDiqEKY0aDpmHdxe3%2BRDNKP79gbS4%2FSHjc%2Bs8BZvp1deXxhcJJWmFMx6x2xX2vU6XEUFlYsO8dbG20%2BqZBRKaQYZR63yjw9qBC9Ga28OhfkA5%2FFSeZdJ%2FE%2FN5otDREKy5Elu0bw1ExESQWxGrcjtjzCtKZuDL03BZlzX1vFSsL7ghygo6vsL8N3GUkSH%2BA%2ByRfHMCn5mRXSKePBwqrEdYDI9ekRmOO1SB4XSkO%2BxnI6E%2BmoaNES7e5ZEv8wKHXROEurrZMmMUFKSWcRNkYXSzYpFgBgFMFDmhgXFLvq1linWx4mqEtkUCzLOfI1fIkD%2BUkdZYmKqvYUFXW51ylSWcbre26FM7SxTaGrzAFj3gKAqACwWwx7oqJHGbIttzvbC1clyBChqRf3jEiMMhVR2DrjZUxeykqmprDNDFaeEh4rOAy%2Fb30E%2BinwOGTAzo%2BBqgb%2F8etXfN%2FDMMnmFxKF7x2NHFN%2FuEDdlnqclW4Hsk3nBjfWX2wIbN6NtjPeCu0p7bz1%2BjD4tIrEBjqkAbuwMxabRjRZZDbduc64HmF15JqkKBl6r2hRly3yqED8syrzaipYS3r5LrIIqoIgoLLDn1UM2PMMV7NIOZAW%2Bx5oZpD1bb5wpGmNgAs%2BSvnIFboxNTFU%2B6gC5GPbEO6XU24CnI1rUZ46nOSzoIvxueTAilwJT7KnufXnMEH5kI8Wt2XFcOHypGow35b1qVJR%2BKTGZyx9jLtFBPKOemKxI7K8BA%2FX&X-Amz-Signature=4ae28483833b84baa87437c454b074ade7d98a0ba273cd871ef78f6938cd70ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AD64NSL%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T210918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQD%2F%2FbrsL7d73IvZ9Z1Ab97FLmWL0GFhUxOMkUpYjYA2NAIhAKw%2FS%2BZOChV2hEOzTyarhKpldzGWd%2BxS93orqnJO6mYkKv8DCDYQABoMNjM3NDIzMTgzODA1IgyI2A%2BQOpVJCBEyXXsq3AOb%2FuuiKrxvg%2F%2B3wnqjCsaQ3GR4%2BZ9ICm6mBxhBmCKbUofvASkAzM5rkCJeLjHs%2B%2B7ylPrRjkBQezygknHO3AUTMrgNqTny%2Bs4iTtRDLiULTIrbwnhDvxgF3oDiqEKY0aDpmHdxe3%2BRDNKP79gbS4%2FSHjc%2Bs8BZvp1deXxhcJJWmFMx6x2xX2vU6XEUFlYsO8dbG20%2BqZBRKaQYZR63yjw9qBC9Ga28OhfkA5%2FFSeZdJ%2FE%2FN5otDREKy5Elu0bw1ExESQWxGrcjtjzCtKZuDL03BZlzX1vFSsL7ghygo6vsL8N3GUkSH%2BA%2ByRfHMCn5mRXSKePBwqrEdYDI9ekRmOO1SB4XSkO%2BxnI6E%2BmoaNES7e5ZEv8wKHXROEurrZMmMUFKSWcRNkYXSzYpFgBgFMFDmhgXFLvq1linWx4mqEtkUCzLOfI1fIkD%2BUkdZYmKqvYUFXW51ylSWcbre26FM7SxTaGrzAFj3gKAqACwWwx7oqJHGbIttzvbC1clyBChqRf3jEiMMhVR2DrjZUxeykqmprDNDFaeEh4rOAy%2Fb30E%2BinwOGTAzo%2BBqgb%2F8etXfN%2FDMMnmFxKF7x2NHFN%2FuEDdlnqclW4Hsk3nBjfWX2wIbN6NtjPeCu0p7bz1%2BjD4tIrEBjqkAbuwMxabRjRZZDbduc64HmF15JqkKBl6r2hRly3yqED8syrzaipYS3r5LrIIqoIgoLLDn1UM2PMMV7NIOZAW%2Bx5oZpD1bb5wpGmNgAs%2BSvnIFboxNTFU%2B6gC5GPbEO6XU24CnI1rUZ46nOSzoIvxueTAilwJT7KnufXnMEH5kI8Wt2XFcOHypGow35b1qVJR%2BKTGZyx9jLtFBPKOemKxI7K8BA%2FX&X-Amz-Signature=232b8ab7e288181ad94561bd0bebc822f45e8a4e4bc28f76c83729f9c3110836&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
