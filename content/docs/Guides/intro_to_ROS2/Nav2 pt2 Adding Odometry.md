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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=004475929dc2e54ce2159fe343ea54b4b906fc4774736ab74ebe0e7320124ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=21693767bdcc15050e0557174a2522aa1bb711f236746f2e85aa83c94c5e1db9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=0c13800676cf00f510783ff54e8727495744575f0fcde98beb7a67d8817b8b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=962768eace50275b80a8c24c62fc8ba1f0418b5a79c356e1cb022319af69de75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=04f064619aae0d7c5a467ff7eb54db72eb3dd6c216409bfd69ac47a8fdb1afc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=0f8ad942593e66e30016fb78be66a2834d9c1fccc1e89f42911469f8ecfcf791&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=920dd308154bfe3f32e9138406db6b415c1cdfd84c575e321b57a8bd09ac91c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=f503c82456c71c7493c7628d8de73007650242b4e8c1afc15c6c65599dca0ef7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=380ca3d3599508f0ed138593f651495613b996a083ae31bdf45e8b778330da77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZSWFUQV%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDmy9usQY0hNLl%2B4H3L1Be9YsxsBXu9x8wFTLB6k2pnYAIgRJbnpn9huwEpqTwenM7eAoQLns5MyQ86X%2BHriBm0WtIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOXhE10AYdcksAX%2FrSrcA9Jr2q2wcGX%2BGTHoNBn7PYWB36ZZMS1lwGeEiIG4ytd3pKV9R9%2Fj7LChMyOGuig%2FBtlE61j8fBr1kfBXswySK6k5k%2BT%2FyAmcEpxU4ZGQcrwulidYhsJNL7vnZv8nbXjo5mRXrLJPt8GIXVj94BF7zKUh3IXyq23Cfr3%2FzSEKy7WSVv%2FQnoUx%2BVZOoDFTEkd%2B6FmGPJ6ZX5vdOb6P8Xq0PP51Ax766sbw5iOb%2BAJVLRzSomzNCh%2F8ROuAEm34D2agQDjLYrLoJ5JHp%2FZ3g1Pdz016nLsElne1ndZH85%2FMplsedIgO%2F7Iil3sWn80JgId%2BA07cm0naqtE9sFR21Y%2F4BRbBSNZ%2FBNrwDzR3Hrl6sVKW4GjMmtEC%2FPMtnxt6hNQhxhA17PTqqlWcQGxDVSYKwmQ%2FATCANX7Ae%2F1ICEk7WT10SFMaUPN8olteYXlX1RpOlnTIHJbLLx3f9Oqe3%2Bp5huJe2VxFjKaiJyjEbjQsqpDpJD4hkysLZlxw0gohVO3XfB9TOLP2JpDjQaAy55lQX2pNp9T8upnx43CFc9MFp2%2BUw1dfGhgKN%2B8jtVW6M8YQ%2FkWxwL9jIS0lS0dQz2uMhLoNpxmCNPAGiwpYVwBjW5CK50M4J9icGTPRwpA5MLnH1sQGOqUBw6IsCWFqqjBCYjtMFDBxxeW6rW%2Bl%2BCAkbbaQqLlfQi8tcyGwHLW0OeKMAqTNQx%2BymGnf4WBFy%2BHt5v6%2F8NSmCLPWTI%2FX%2FehmRz85vM0Iw58KCxsNtnwlhgyU7wgR%2FJ1zleptOyRdaeUWsvDFOkQYUdKhvlORAvePeSrdadADj8D0FkaGZxDLb1Z6BjpVT1Acd2T%2FG6V8H2AV7u9EC2ygwDtF9MF9&X-Amz-Signature=91bea73b4d89eca13dd3e540a2328bbeebca4fee970f4195b0ce90a63dfb8df4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ENSGRNS%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCWjWHXWMgLdfTxKGkSoLicvKFDKN1dl6%2Ffp%2B%2FNRvzbMgIhAKaXfge8A0oCFhUyEoeFmXXrpUeOHZyG%2F1DejqzD7f3TKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwfys4loifV9XdfEJEq3ANj9iuNmleYcnmMw6LpTpTI7iUbBsseY18%2F%2F6Pk3w50Id3wU7xZtkg9VJwcPeKt8WvtpmijPHXdDuKrDgOc1UQbD2%2Fs0y%2FQI%2BmWGLqrpmzoIwPmDe4ZSiScOa7IjJRP8HGZiNKSN%2FV%2BOujynhuKT3PHPkvSC%2BXGEtjGEkgQCaCfHII8FIOq1TZv1YBk7w5fiUFEopQoXuf6PSjNsoUn5BBT5VEIWMZmau424SLyt5SCwkcPzhWpt7roDXfcRIWS2TbdOoJ8se1IYl3XfGo0%2B3h9jxBVfnD9xk%2BWT8DeRKaMYlm9EWMrujek9Su8J02YibOjjIE2NuO%2BPFAGHR6BXdxzx9mf%2BiXyrPw0ZcBda5NDvP7IL3rCeDvyE8NjsYNfIBLEAOoEZLQc%2FKP8hiukn34ftFTLp8oiZmWwvnHs0UtFg8IFmLyFKIiAKuKnHXUBSAmA6h7dT9xqoQi2gzPOdBzyXVGLy6%2FNqT%2B3hFaVUzwmtPoF46e02YUWpuYLZn2zqPFXtEZ%2B%2BbxLg%2FIxqs2zrhC7DIikB9XHV4TsaIdgbjKc2aZnbfOI7zAP9m4%2Bl%2FBEkdB%2FHP4xowjTUud2nwtFnPffLlaGOvLzGX7vPXKRaCCgS96V7%2FaQ9PJKAtvTrDDpxtbEBjqkAebX8InYkHY%2B4vjjFSAk2LK1uSLG1%2FrOpSeK9w9VJs2bcIxCdnoe2VI6FLSHxrBSEBDdM8ALXAoXzPIdJVCXcwPXXnhcHFY7966CwPvfzOXQM%2FOAAFi%2BIXxfoiXVEaFo2ZM53T%2BHXHQuJ7WPezNIxZXu9BU%2B7k0dVygQTzy1ncXLsgdMHMUHtuZuSvRYxlB8bY58PRdBJz5ikhNID8jfz51GEC%2FN&X-Amz-Signature=96ecf9f2d81a541ba94945c433495b538d9e7592675c40ad7c35f1f7e9a4affe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=de71860d5a0eeb87a3a956cc6d597afb5bb4fc3efeb8c3807f949a0980a4c3c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=201a08b42abfb6963ed6eabfdf4c4e7dc6eae34590eb2b627c0aae1539015767&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=00bfc4616ee64fcc009945e1d3a2ca66edc574cd29c6d6e2f30f82f64ec2dce3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=bd46a9a7678a38e71ca5b070ce0a39990c233b81971dc7429f4df3801c1a8cd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=53b6df8408f5d3d0c53a9ec05a6053e427782db6e59e6b26e4f902472f34a556&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=16c948a7cb44037cc6f419f156189883224dbc1d1d49506f230cee3ef00eb9c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=f2f9846e7718267e141092c81421eba2650821296e8dbb924025e7cbd7775183&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=11b564054def8023a1d048baca638d4706501d6d6c83cc9a4f8fc832aab59890&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S4BSXNC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDql0M5wKis4UD3IlSEDiKO0bYfuyt690%2F2gJfZpFwq%2BwIhANvSV8Wdfl9DyiZ291iQ2xQJ2dDXIzm3Uzb4RqBgov5rKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzncL3uVDibc9ICxncq3AMGMuahXO38YHWlUZEX%2FcJP89GMN%2B%2FL29vq1LotyqMVnRCjvrpWA4PZZI8o5UVkT5ucWa%2FVUn7anaICSwcbaDAAC34ZEyb6Uv1nf5yZ7SzJxibCWiOaKH55GOlHC6Vdjxenft3TSNmWGistwbRpOjh11h56abBpd0bn%2FuzXlil3DBETrP6NdeeBXghk34CaN3dBYS9stExsbONvVHk7O1W0wBPEOBIuQrNGVZIZWBbDCSEuXCVp%2FTIdu%2FwzzKeOu%2BBwiAjolJR7MRsC7XN0z3U2OCzHeafdDlTnuaOheAwgF5IaJh9Nx9SDVdiBPRHiLWMDa1xTYGqyEWLeAUo5uAnT97x6LNUXAIw%2FKurXf5ZGJelb5in1JueBA7Uf4HLWKlyeFSWMLvhCyHlS4B%2FbfB%2BUDZsNBAt%2BxmzoqOK4WnqWXf9AWXKs%2BfKSz7hUFKy6WV7Cg47Od49nUM%2Fegm7g6n6yh00gqx5IRf1QeOrODwXsbAAqs98Vlv9MZhlD55q2e4U8IdoIDKeYPYzZRV%2BjuXNap4ssqlrEdhaNiCMO5ZwObinOYU5d%2Ffvh%2BMYfSX2VZXlvBOLoWPWAfzNpFYrQqcIOaSXDXOGnCVRxecPdt332A41ukbKwxXdY6ZoIxDC8x9bEBjqkAZs7fsBAJ7IMNk4Zu%2FU90%2B5K9S5gm9A8O9XbsC9sG8NEH%2BrWWpUbeDuNBhnQZnTXSB6ozHsDnGiTvGciLbFqEGdIlUefdO7nBl5U78%2FGu3%2FSXW77uVZesYioUOBmhBX3Cxhet0D8p9cFLazc%2BpnLrh3nFmHfDiDXSI0PKx12uQvu937h3MT1cEceMN5SJ5Uq0Ba5uWNjQiLaoLzUJ6iRT%2B%2Fsbv8Y&X-Amz-Signature=6f3ebddad3d5545fe5b19dbe0a1caecbed3061ec8e0d9988b719f3cc1c9ada8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
