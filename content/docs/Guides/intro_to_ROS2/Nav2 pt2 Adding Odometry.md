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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=d2a3851d7a10c6ea16204fa8f4903976cc1d62908ca9d6ccbfef640e9d7d9b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=e5932f17a47e05c4f9ae2b32576796fb39912c368723dd71a8a394770ec22f0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=1343b4886e29930127143f2810429bb88134d7dbe99b0abdea4d80a8a4102d3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=22237bb0758c55cd8ba79c4d03d4f2ce56a1dba0acd986db40159d530a6f2549&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=60a355f1e653ca619098223d4a7a0e63f367494b7251c9dc108ac318ae5033d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=ef2922f91f3ca01baac4cebf0962d77e8c7b74159871bd87f433ad7e4d1e9693&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=20438d13af79adc032732881e705a09ca7bb2c36d4ccf62e8e4056701cf67354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=6764a883ce8d6ff1aa94814e1b62c1ca059097dad0f32f0f0bb725885a1e53f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=4e00dbb98e29fbaacf5034a9ad771d18b516e0eb24dfc2f48622badd51e8cd8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675BAIUSE%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIE%2BZ4y92lharbgV50tEGtVik7TEPJY9Q2MEc8lGmtbX9AiBcqswZpQlFZYdzBkeD8ng2qi3GeH4nVFsnjWi%2BNfSHVyr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIM6i8IaMiOx3RUcbj%2BKtwD2ltBnF7fFUVMAVyitVD6NycnG8x5d%2Fn%2BB182kU6ha5D6MXa1LTW12ywus1lhtSww3nUkuGUF%2BM4DmuWCOIm0puI8JH2BEpoxcRm0EumMjW9a8Pezcwa3B2FN%2FrDrfuehkHxx3ilTXT9LpOJSy5m91bWDBceeann6SUVtGYAsRX6pAcaoCwP%2FNIWT5CcldzKESm1Ka2OzhNotbgw2iK5OwPWcS8aAjH3MyxaRjocq9cSwGPkFy5L%2FcbV6c16M0s0CUFkQS1I9zwM8BVvjmQZ%2BRSae0NQuEo2l1eRX104WBcnveO7mmX3YY0ZUZJg0gfDlGTvUYJ08K5hR7jIEtOs8TPGa6oSZ2IuKxrYf85EwczHeI%2BqS9HbQs4F5FiixlZU4Mv9ZaeSQVbTeeS71MWxhtLJy4sIU5Md4mD2ceAwNsJEDZqlPA31vcngsbdEbne9g39iQzhIs4EE4tg1V6fksN5fJD74RCsTrxhjCcJ7eKUcLuy40vevsJK1StGTPKg13VDxTNuJu25mYoLTqvFXEDiSSeVPOagX4ddB2WZwuW4c08F0BZffS9415yBNqr2W6v0tFCihTmc9bEJ2uMPi7WtnUv0rOnAXHXwI5AGZlIOAZdOGL0qaHdalX0Lkw7tr8yQY6pgGCOkCNqGo3K%2FZ04ozWBWrt1gpu%2BrV5rJiePVU0smudufLNG6g4lUdK3ATE0EloVYZvF33CIYRnGB%2FMXf6u9LfZ7u03wLlQ%2BotQsjhpm6I%2BI76PcCvCIKbE46cJ6PlLXcAV9EPKTWK0bVkpL8pVC3JVWi3pUyJvK0CILH2hqcZ5Ys4Voeq1%2FIOn1VucEwOc4u%2BSc0ZLO2s8n6WKkrL6vJPVUVbQ5DUj&X-Amz-Signature=5c2d3fe3a956ace54ae90f0927df9662f27f52ddeb386e80e84aefd2de4f3625&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVXFWNH5%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCICTMAglcI4b2CwvyWLvhULGHOFA1cZ%2Fth0sR7H%2BqYoUTAiEApiQ8n3u93Bx7yuNLDdc8FHhVRo7ZkBvLBqbNQvH08DMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDC2GTsGXZqBRmvBoYCrcAwm6nRoPq3KpTJhlugBvWGSlm2bLde4hh3cd36DbgXaHzN10Y%2BNJm31tuC3%2FcIw8Vh8HfPePQK4OFAm%2BqLMqCvW5LCjOpk7OluYKsx0hxQIdCq%2B53CwoMV2EGPsKCoeTp6SEQJzmzRNflH%2FFcayzOWIgT7aIgXmYa%2Fs7BI%2BeDLY7r41%2FgXxzL2CvF2%2FJik4q2G77l9oumdDyB69ZD88tulOZn6I4HWIilSYdyUeG4ahl7fTRpdT2rwfGnoFSyYs8oFkS%2FqccSi9LQF053%2FJudAIOQuqC6RonKLloQdpM3vD8U20Ccs1zyimrtTy5Vjchg7bHtbq%2BnZ9g5mw%2BCvmdsiBKt2%2BDoJEv%2BVfTDrS1CwByXcdLaRsL%2B0IPfUcbEkBf6ntRXWtpEn0eP%2B5YYq4FNtBtJSmsPaZBg52IGqRUFAYxOs%2BFFVinpDRK9gSB98yS6tJoBm%2Bnscqq%2FopPBs1iIUfa4LBZ26cqy3Dirs9ikT5Zw40KvPdNcHqrbaYTaEXkuC2h5hkBgyO26K1gYVBGY%2Bjt6dFbPDFMFvv9mt7p%2FZID%2Bjc6BIWoAhQAt8Mo6tkC6RiwAXy1T34bO3zg%2BQKfQNVdvhZJc6noQTw4eFo3CUXxVWqpms1xwfv%2FECFLMNra%2FMkGOqUB%2B08ZNAYjgneyyKzzgiX9CXk%2BHjcxe0QlZ6hu6UjgPtMadtUlpL52d1FXvqpJY1rBt8pPWrIujfEkkZSd6nb%2FCrLm7U0WJSmdyrbse50xE5Kts2%2FVjCzpAwgkxMc8K0sTLNByH25%2FANCl87fdRF6IFW90gfdi5KCjD5ybuWWq3%2FbciRamM1ym6bFiK%2B0kfHdoG3EphNHylWPYOi1Pjn%2BPH4LoWvsO&X-Amz-Signature=31aae38a51b0d55a10304fa8ab0e86944ed93a52c72c752212483f0a279a2f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=a9779f490cdc20ec4ecc89518124cb66c9ce78b2c102e5ad0f38289f4a37a47b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=7609a061e229123aee4f5fe48e95344e197a552a22daaf72085b5c86a458a160&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=a98b36eaf2f1aaaef79b0b6b5fea72533fa33e75358ffebec97f598a042dd58b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=6d1dce1f7b44960c6f49f079267c3642e6fa0a8ce293e55f265dd267e1a1fa12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=be23f1df13f5ab9bb5786f4e35769071bf871ad25c1e444248f1897420b10170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=48d29280e89a0ed64da3cc38dc974fe81e52133ab0b18a4d878f605925394aba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=b80bb3993d122ed4eb7252a26f94801aa047a4a4ead34f99606b351265fd4af2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=10357958601558bbe4ddee20951336eaac5b4a165a6aa9e0fea9e4cb34727309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RVOVUEJ%2F20251215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251215T014821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCoR8PK9x%2BymI8QEKXjB%2FaEwZIT%2FyBvxs0iWnGxt0tJBAIgXmLDITWIF9XEuJQuVhGg5dBldnUvIkia2skM%2FWrIBgUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDJLe0Jx5Hz0Ll%2BMfpircAxehgTV4B6pALu48dgu4AP0hs8blHSSA3nKQ8ywtYb61tbIjqLIQmRi7IbVMPuPmEyC88kgp5bPUVZLVsGaDYf4uJAL%2Fub8Opax1%2BRe3vuAV1MlIid6qByd6gssdmTP1UeEWMA1FLyev%2FpNQA4ez0FN6NHWsnDRZgffE4mCywe7Av35JVq7OYl%2BzMzkIOeyUToJCim187OsHGsenJTrYkzehFr7JSnENzv41npaxZ4ZIlPK8eh3aMTaNLRsAAaMn7m271W1x5g3onFnukJJLGDMM9JLmPnjZ8WMDm2%2F3eenYPlVkcgH6ZU0X5NIbR9VyrHWAg%2F6YSp5Myxi1OA4562FBGhGa5lOxYLJYCjQKsEWS5ZvXw4zrYHIiQrqQklq1bXSe4bHuUCx%2BZn4EHigwmYWwtaj0CLyjKBbHTLmcwRxHQ9gmUs1DViQPpG6WOClKyp3o%2BxkaF2vIXVu%2FG1cZkze85%2B4V%2FjVFcSfNFU%2BkN%2FFoPX5nyF8%2BiNnzFEII4ykOMfvmmN2tHbUtqYZkqvN%2Ft1fEIP%2Ft0a56fIaTNMcQoqcs0IjnMiDy%2BdKIsX%2FtveIrBCHhJxNVbyTRpwQMzIBwQCtxe4%2FJX5EsrYTbWyMRj7Ba8pA0tavS2f4nUPfHMKXa%2FMkGOqUBNIGVzm9fC7URzTXvYx%2F7ZzXVfPKUIhDYOI%2FvcKDDjUfV8nh9aStkkakj1DlQ13i2gAeOS3o9TKntcMrDuxxsBXueT8CAXLWgw%2Fbi%2BafBcKtjmdoTVABm3yki8AKxvj6FO9ZfGuZDHdVRLEEp9yWtv%2FZ8hOHMBrkt9U4o%2FuCUJP3EWSEPg4qN9fgdyUHqeCJfhdc3E2miFqcJZXZx%2By5P1Y4WgI1S&X-Amz-Signature=017e669fee8dd8f591fdc3013a4f2ba30f452be73c118182bd8bb9038101b575&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
