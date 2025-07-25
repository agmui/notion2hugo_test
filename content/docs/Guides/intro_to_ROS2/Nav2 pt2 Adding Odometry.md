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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=ab7fbfc4063436a934cd7f37a38cdd46f087fe6416480165d5ad43e9c3ad1249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=9bf80b8b72b1c58c1b696e9a04dd6ce3199404ca1399cce3186c470288e7a4f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=f7bc863262cd9f7d690aacf82952c0661d421793378cf55e272f2b4687181d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=2d962d5f5af302642b2610d99086f415348d8713cfb6af1ca061e35b66403063&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=07bf449761e7ba7c15b64f570bb28eceb7b4903d2137f2557dd75be8f00c67bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=a8098fc72b8670e71507bcd3de90bc1dd86f6d3f28b484eadd470eafd04726c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=e17f60d328bd7eaa068d6b7d6c6d42c3abcca29b18cb6eacb953e43d92dbf554&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=7756036012c7967a83e98d9de206967d25b14824fa0c6b2157c44905c5a953ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=93828fc361ce070041910aca118da3d53fd867f9d9a068411b14ef862df976dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSC7RZHT%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIBLeECe7z%2BdZlGt5EM1oLPrekboDbe%2FaymtEoAZptirJAiEA26DWJRvh97gC6A6Ym0VwyVQ9QUxORv8%2BRsQtHwFc%2Bocq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPlDXk6qFIDfV9Y1YSrcAzuekFgVm0lqLavVqp4FBWDbeULqHU75ynuEJCfZoKkCA22MKC7FbDCBJJfW2tf4gGrgsv1OcqkabiUGZThCZ6Tp%2B8OUOFtG0VCvnabHDNuFW%2FMfUZ6yZuVsEKrKL4dNkOf47jUHRDQPUIhoHzjeWEf16Y76HGPvSMrN%2FCJL5Dh%2BTnUmsjr4wFFHhwwiG5dw5pQUE31px61kBKXH84%2BsHozDiF705cuYpAXqDA05kP5Zq0%2FVKh5jokEx0nIGr1q4Dir4%2BsOSc6yKeWyfH8RiUuAmwciNkQcIyNHohgZkGy8Dk9nJHx6N05HvN9tJSzXYP0REUH6NhXnYxQ8M0YjDphyVgbY1H%2BH6pmwiBnbAy2qMvCZbojZ8RIwuvYMMjF0GJKBOOgHlRmdPa2dWCKN%2FeCHs%2Frh%2BayDnkzBXsNAnfIsaJI0N1fou9pzhhyVSDHKnHCcIjX%2FhEHIlNJcfwyeJY%2Fa16wjtUr7cwEYads5IQ7PUaJv7T7KOK316yVz2ZJlkmYayoIvD2FlluHdUCNZmOj6731PeZ9RLkmOGnxMiir%2BAHi78UdvnYaowQVRtL69m4CZAsqCC04uMya95%2B%2F2ivv6eYegTlIXnMN77hokiGinflbkDJ%2FonLwyNvVqSMIjUi8QGOqUB8Z058Vr0B6zUpppSzwVPftHn%2BI7%2FlLy4o0ib%2FPGkZuV%2BfB7IicE5RdgQjlbV2oMtQoTJH%2F%2FaiKWjsBgGawnGsJTfFMKJpX%2B1lsNcTx8cPjRjT%2FAqJN4Pq6C1zsKH5ogmGoknyIoKta0Xc8WUf8ATgPPOehLZhXTutcg4DUp6ZGpjElL84zEH%2FsWdcUFelFYJfNjUTd5nysU%2Bx4Gv%2Bv1KM%2B7mZ58e&X-Amz-Signature=4af0699edb33dd9f45e7e8687efd807e81bca1c98dfab18e418e5a0f5a39cc37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QDCOVMK%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQD2SGc3D2oqd1jpW%2B45t8f3IPU3R4GHV7poojAQGZEcvgIhAPsDe9QY0CVhbchJTu0RO0nXRw5LHrGmP1hQq7M3Nan5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgwCb7xabl%2BgXCvya0Iq3AOXiWQC20Ngg6n4gZ%2Br9wKW%2FqUYJ%2FMswAsBvPQBZ%2FMUsdyr3GYkVqfIq0w1uFVfFoot17A2ijJyrfe3l4PKTYTthw2x9d0klALMPdUuPICtIE3jun%2BJKdqN65B%2BiZkjoo2kXDd59EOrbyIX4sHF%2BE9Sbsg1OdrciBkVpq5zVo8bFQLwREcZW1Da6pu%2Fd7Ho8BOjOdqdDupk5hsNZzkvY5WY0kYzZ3D8L9fboaN0wfYqZmuSClxwCVhVICAOSYD3EyRMQPvhcnUETY1Yz8LYLE7tSxe1pa1yEhPZdidzeD8xad8cZB0X3WzfBbHPYgvajjoutNoZXDOtz5doXJHh2O1fqq9PfDn%2F%2BIuJ9mEtJY2xMOMn5vTf0BRbjVk%2BakZePJjP7Wq8FFGAyY2l7axVJFP9QXK5ljlxz2ZZlbV5MLsbBKiV1UDmYnIGk6An9O3QF8u8XwgV9ZC4qTb%2BkO3OFtCa%2F4le9hIkCVIV2kmPWHF5KZmIC5IdhS1bjFQQyFz%2FxT74DUf6YufdFcFbxKgrGE8A%2FOxE0qas6CmVoz62wZ6TAullJaHk11DbXtT7%2B%2FhPNHz7dobqGq1wJeF%2B7K4ta5%2Fieb8Ota65eT59BFIcjQx13nqhnukvBo9GsLGhejD804vEBjqkAbDiSJA5FHWeuwa3f44zJ%2FeYa%2By8GVkC5uI54ineiWv3e4%2F0%2B6I%2BS7gMNh0Wx0p%2F9EbNBpUT6Z9F%2B%2BXtF0YgDi9gZshYfl2g6HWgPbIsSVtAOls%2F1CbjEB1%2BY7ea6IAvQ01uDFo0DDWHFTwU6lzEkKiS0n4n2vqCQfrjAcF8f8j1Nalp4AnJ0MKCSiZPRnpFafJmFaZOXDZGqiI6dFim5dWn295N&X-Amz-Signature=5ffa0c6c90a0a8a936041e857fbca8e6ac834e2063a8f6955a44a94e9080634f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=2da21a3cc9de3ef24773cf7e1e9c30458ca9bc9a275eecf8e822dc2414d25ecc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=9ef70e8d4bce68e5014bca323053c78e6cef62c0b1b5ff26d794e25fed954e92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=c2a4970c0a6314b69a7a6ca6c2950695dd74213cf01848d23715ecb7aea05729&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=eab43f557677aff40a39a6034177fb61eab58f134d18b21cf4070f334b2eeb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=3c5984cb728f43d2a1d374f4f67c355c4d0e545add8840533961179234349dd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=056a8595a9ee278d28a9334d8697fdecea241e626c0721cb0ebdfe212127a2cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U277MHJS%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T025040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQCloaDAiLtbyb8dxWeO9KLSZmmFtzXbNZJw8gs7MmHknwIhAIEImt6LGDi1p5eyMQOoJ%2B4oBTXFtTW9AOXnVAi51C6pKv8DCDsQABoMNjM3NDIzMTgzODA1IgyXtHenSRBC5Gov7ywq3AMDlSFLVoD5ELre%2F7EereTogt0NzslN%2BxRQ0E8VNoAdPCMVZ3CPgBOSgZamElgnsWquzf2eHUaBlrPccafbsUMg5Euo%2BQ8jjM3nP1V56xYQcbW9IrWFUoRc7a9xd%2BUM%2F92RPnS4seViS6OmIlQEyQElJDa0LgSjbeRgGZVOvJSYo3ff6dgvCCK3YfdlWJ5xK%2FEGwcqRFah02LVR%2FombuQwUQlnM5%2FoUSBM2hNab7M9nzWhb2jqT1ALLI9w0CwvxEj%2FvtKcg5jotFTLjRBtAW%2BYgVcncl%2FXF5SimF6CF1wsSAfjArAuRgXovX5xOimHhSwYBafMqPx%2B3Au1ly746NTc4DOu9PB1kLMxTuoiM%2BgCp35sHlaNm7%2F4kU94qYZzaMc7Fi5MvuAcUc3YvaR6srQFtO5qFOKoVi%2Fa%2B2AiQzfMKG8jx5mEVSHb%2B%2BfJkLFP4umMxthjwzXdLguNoQJWGEmZ2kP70gnTHhgC4g30bo8HdkgJ4xYjwoNvGTt1YodJEWSREK9JAioJVPn4K39P059ISkYu7gJXdu1lACe4Pyf4Ghda59vn1%2FsNU9UUzW2LWBU8znRZY%2FCC8Wh0mA5SAJ9EsJc0yFYYThqBmzwelTZXJQn3QE19253Bh7ildwDD104vEBjqkAWqDheruvpk8HmprHOipX8FF9X0ox4aSIlXfq6ICf2rJXPeexf2X%2FoTkcFCiH8pMv%2FrieySDHXVsuIj%2BXT1VjoiF2D8m%2Ftxvw29iQ7kRjrRH243pP17Z%2FqFU4gssrc1At%2BwuwJVMdWptlgTtTchVkw57c4Ai2zrDLkyGGnWFqAa2uUVw%2BVNE4pnt6YcvrG1kym9Tsu2CpghDLYTbr6uWmBHBD8AT&X-Amz-Signature=0bac1c21c9da0b23a2ed4b136babf59b79c4e13fb93f58dafedbcf3f01cc4151&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
