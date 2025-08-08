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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=ac096f66af9cd5be95b4c61dbcf1b39e8b0327907fd157fc0b326780de297444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=08a920093a1833c4b66dee874def5b638c95265c492b3f6c413084c211889b95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=4c7898a934d21f418b473aab7846e020aa5192b900befafa21ebe1e210c9ad9a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=a1011e2ac2e405b05927007fe0ee015bbb92c9d5ab8e301f3162411df97a3875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=3b6ff5e2b3217976d3ed3827b2179ef79ba32d811544ec54638939bb924e3a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=ddf5ed2a35d69f62f99fc865eb1d904e4bd87fac6a065c0db6141ca03298fb37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=ef52853f9cacb07d76d07637c8e37d6532a759e50e6ab397d3eaa353d1e6acd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=5c228505b29adb5edd87bb23d6759efdc79111a4bee1df0586db9acf52eff29c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=3abc5a9e024c1ac2938b39360b40fac1af560925df989e5343b9aa4daad93b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667USZGQUV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFt%2FCk8tUXAEh8YooHDsWDj65tm3zbBB4TKw7KVOWDw%2BAiAiepL2aW%2FttUAWQBEC473NluYLOVCXbjrGoL3SUvDbiyqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKiLUAOF%2F%2FqHSxwTJKtwDFmWzQqH40ry%2FQ2p2Ft6VZgnc7cZ8CqHAodAdP%2BT4zLL%2BTKzaUgHA42WGSPUb7H4%2BvxdikE0UQV1ln1CNXd5Z68JHDf59BcBQKweN9rB%2BeoN0NA1iZGqeTgbTvY9%2FWUXvatOOQ7w62HWFirNtAOVkrK6ZiGdYof0YRoSHAXo8hCPRVfbRCJ3epP60f5qLQ5xCQdlmLEJP0IE977t2eD51USfhDVhxX%2FobV2C3RqVLNzUOS6uzjXo6vBaXYCqBWTEwP7G1Igmc6iV6nSeOfbjuvcdXxbiodd2nT13lkp%2FDdZOB1yACKl5T1G29qiARKHCKr7YteH1r7bPQ52K2BLnEOpmAcaxsEzre9O3TFtMwzy32cQ1q9at8fevnLQXBDtCR7DuK8n3%2BUDqxdQYWhP9VRGDJ%2BXMKtaPbUJuEG3QMz5fhjePj6m6gmS18H2icJhq4teZQU%2BXWmQSeUjzJg9uwEOtSvU9CIEK8So2yzkA6TId%2BBnsB57R5faQ6U2mtxtgEBEjDy0D5gCgZvL1O%2BJhoEXApMXKgCZbcFftDZxzMnonPBeZEAX03NXmKvpoNHUd3wDQcsaENUhFosIp9GwfcRbu%2FFtJ28BB0grk1sGx3CJ3O5ag0HK7MKCSZh%2BYwp%2FrVxAY6pgFn2deWgSXYXCwFrO8%2FxUZkxQy5rXfKoXsqMe%2BKAqmYiYAJNFtDPKaEWswc1HrcUz4yX1uZ4KcfltPyKP2r6ltKqWPBrCMBCAlaIT5%2FXCQnsDKYoDLDczO%2BrN070O4h3YeJoG6W8jB3C9x45M2PmkbE4ef4FwCPw6GG1nv9vtJLr4KIFuqcBnCf6T6u9sNgnQQxPUQqf7iq8e7PWvJmDVNov0uvdaOW&X-Amz-Signature=7f44132c39c5cc6a63d2e47457d9fed75f627ffa8962964d4253af1b54a8c4a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YBQIKCG%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIFjhxWHzRaQYKjOh0mPEvUmK9okUFoD%2BQdwTGCUyCq1nAiBMBhIdWeE0nT93y4wWCi7RwyPpMoQCSeceUmhTF41LJyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqOhU52ucQrcN4VdKtwDFctdbl8UuVwynYjbolhGM1%2Fhf%2BFbvp%2BJkHMz40%2FuvH6%2F8XSFEzyjLS%2BwJVbvswsluKzBXvv9nuSjtVvJppJcK9azx%2Fcuy0lPcBwXiTBGIRGxnSLQX1w5buF8f3NeRTyIGa1skKCgNm5B59tQMQceEeg6uM%2BcWL%2F0keti9khocFkilHWOfGtLpSR%2FQ40qq3euBnRkzY2B%2F2IH9XGTkdDkZSCFhmrNwMMZTuWnLpetaq9x%2F2EG3wD2%2BF%2BLdqB%2BOBMUQzFoAx1I3pa5y91VnF%2Fd222f672lE7LHtvwXD1rpidiZcZ%2FH3FtlmWmQGMELshMe1cpy%2Bz%2FPnw7RBALLrBmqFm85E%2FEETA1sC1hxWh5%2Fh%2FyyGtg6AfIvmynMG34kgD8aFQU8IIYj4zbbRuZYHL2sq7glj2FFLC9F1zz%2FfiTS%2FrGRU7xweBOfC7jALPjYPlSeaEVIue10C0glZqPo6sbw%2FewoSBTv3Cn2nFn68z8ChEcRvsAagKJieFUrFOjDkCHSXuV%2FUjQvKUaht%2BqzQSOOks%2B9kRaTLIqbqML1OMYGf%2FLudwhh1l84lTZl40uIKXicnNBhvUfIzWtADZM78P0j4Y0T%2F2vDozi%2BjuYTV%2Bwype3JBHOgkqQGAUBS%2F1cwkfvVxAY6pgF9SyqN%2BPoNS3ehNczNePgx%2Fab3LU1Y9cjn2o%2FjRCQhugLtclQh7Gr80d5GZEUbL6VXdg8eeIt5%2FmJsRFrnc%2FV%2BYsEsu05Cq6NrDFtJMAHLPijPqyYOJJukWF5iQjo3BkELtUM6BhBDQCkuOnIKr9pgwDuRApUf9PxhYxTakl9v5gC3t5aS0B94UK%2BkP%2FAA4vxIl4UFsylyjI28zRi0XlHXmBt2Xqt4&X-Amz-Signature=b4014131134b51971203278420a5c5b4bdb3881f280405a167fe8b94189940a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=38643cc48e8e9ed98bd9b08dc12cffe7a93c78ca0efbf5fa7607ac55c3933e90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=c5b9ae63410ecc14cff5ee08495c7a450214063f51aad6533e068fa5637caaff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=98dd5489ad9b611ae4196d78a00fcd445c14ab873826734db89dc8ac1413c9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=c2d4c900b2f86c748cdc9a95ed8c099c2ba4726e6ceff84631bb47edeea54d88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=531614ec4b13ede1ca42822e2e4f4cf84f616241b8caa3d74492c6ee691a2575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=05784a1b834a691628057cd1961774d8da9f4cf42ca0a8785efd84ccfa232d7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=8f172aa7ff065079067495eee4dd125aa5d9e9cacb02149f125fb8b8e0d49885&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=f20977a06013ae083adc532dd3fb137ce41b2f2f341499d0b1bcbfe02ebbf2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7WWLVJU%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T044150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQCMZsb5kdhXaC%2BfVO9oLHySHfERM6GLMBirt0M8qt9CCwIhAMFZXhizEnm9MbtEUbQ7hgZPhtjnb9GLKSPsKcV0FiC4KogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXvRWLJ1GRCCKwANwq3AO%2FS2MfxK9kShvw2wVSUEGeEiO1Ur1mOzluCafMb0HevG40SEctAvvsKLWj2HFY1KSC7wnIvIb1nhwAgtQaFYl4gy%2BSH4y15CqEtCmdHM5T70o37O7twqJG0OjOzxa6Js58JbR26c3sZ1%2BG5BoVS80tUeEt8RKSTgpjhuLhDsg8Im5OVegpSGLMYKmYjM8nE0wE5TaD7AcMEfULI2xkSnFUpbK8ZDSzVCLx7vMTUo0tUY9N7l4SlF7CMkWCqk59%2FDmJad0PJOTopEzFLVXCfjoidjXJbCkEIlYhOq0Kfv%2Fw%2FvKRNcu%2BMiP8YgeexgMuB0V6opwbs4FnYEjkbj9z1DAQG4t9jkSit7xT9AM4IF08RonUkyDJPc3jul9aMjpm8BFyMHyYAOk2%2B%2FaXfKrZPQ2KgtgNnOJe36z2OUYQft7AUfeGfJpfLk2FykmVhocigdKTDL97FSDR4n8bVaSjVgfhNeVcoFhQQpD6eXl0evH3mpz2u0pzfpgfsWhWti%2F6w7cJTau7i6au3cWG86j%2Fl8smZgzMgs3D6kfb5JLvNSI%2Bjyt7IKUthtfemiIK4HsXVKmN1D4NH98fqqr44a1qYaNjO%2BlCy%2BnoPvqpzxooO0BSGXbQRAnCy9QMaR64tzCX%2B9XEBjqkAVRPwIF4OLaS72J%2BHKYgxNhyFt3TLDJdbw%2Blj7H9TwmU%2Bdf6GJvF4OyKJ6hqHXJoX58ylKkhbfWBrqvfzbgCXGevMeCg56cHx8yCrl59yaweNDx%2BN9d1ZNSJKkAnwPKmmEKOEy2ydwQoOjIbuP1E1jv5ndYkPNFtlLfR%2BcUFMK1WIlBw5hfrmD9Z5YYg2f84ZOMPj352QsZcClUiBjxWJPHRt2LJ&X-Amz-Signature=26e69b9f072644c588ddd7f3ed5da3c82c58e4908fbf57c31d2005a156081cb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
