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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=62806ebfd4efefac36c9732842f27f5e289206a84d2b793ffa7f76814e30db4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=0bcf4ca69c888f513b5904bfaa40c7ef2074ef623670204012474f6bb28df31a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=32221007a818653d4eca369b039a6c59e472b2801a0ec0932f433c28065e98d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=eb35e093986f6bf3103e29e71fe1ecd5e39a01cd5f8bfa8f652b28c28a911bbb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=7e5b09c6a109937d1b28895f7dc932706366e737b4f1819c66d79b833d68c801&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=8f62cec6a4c83649333d0a8231e2196ea95962f29d67573f83508d3ea8850960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=ed04f2b35b4e159cb5e943e7d6e052648e872e5b05dd778e1cbbf347935f4b4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=70d8fdcffdb3f247c05cb9e9f3c12ee9fff9ba3836fa8b3bcbf5b0225aba3284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=d75f814ab15698d9d0b0c4eba16b8b1032af4675c11d250522a0a7fe8f9c1180&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BWJWIBF%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAnijUVRBvOD0iv7DYLHe8mbA3F0w2hiKMQ6IPZ%2B%2FVnZAiAMcwaGJcuh%2BXG4ELm3je%2BqveH7ZHCjFaQrmiTAv6BqESqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjOupMnCNMmPz%2B1pBKtwDaAFu2HjHAEPsf%2BZm3Xrcnova160fd5gyaL%2FUnstKFt1CICmWoObaZ0NFLokJTkL4vK4pmyUbWXERWGp8IDJ58AmVGlPhU9tqeExa%2FbVc083%2FYxG2rFeMbwGSZ%2FVT3qpeDMf8fDsxr3C6SOIjpluQLCJPDQJW7G4MB42V9IxyM9T0yPEd6Cg1Vj6fhMZS140sf1Dac3TMhw2k%2Flh7HUhP5dAwcr8M5vrKBBnZTeLFWUZcPpF%2FuXKZxHG2dHKVUmgp%2BBcXWPHwBQUeVvDaKG%2BvUhzW64jvglJN3DJviqbbkyKMkgt%2FIxNsmA4DelUk%2BMGvbw94D%2B9Jp0WG0VlWe%2FQl%2F2xZrYV50ugsdJk67FPY60QtUF2n%2FQ656r8QmgdfkM8coKZTUkoemCTbQdB28JMEuNU0Q0LrldHJHxDZfSp5NFfubS2FV%2B2BApz7TQ9FjT9KWq1s0khD%2F13V98m5KXTgfdGSC%2BKX%2BRFFtepfozy29q55fqzR7TjS8VjGb1ZuqQvfCycuNnfcWGf9RTMrbtDhMvJ2V4gtrn81W40z6Txhmsli%2Fj1NkNVsts7oDkwEHPyMTPWD8FJL7MltqFl5Q7FYn2Ski6tJHnPu50%2BRsI9T0VH0ZZB1DnG7ZAD3jt8w54Se0QY6pgGpCXrEMOrsIJeyTpvvMKEnhIR0DRmc8tthZL0wnSynxMVYjlzq2jySqo21ZxVZnhHb7xtaomgYQuMbYMTsmrppxu3OSFiCTdPLLO70ZNm7cfJ9jaSSxWFslMt3AFgmSODD8Ornl20Y8rnIFsJyNwk9axCUHDkZMEA6zGH6zHizacUiSHomZZxJvncdNJP9%2BXku58qZqkgwEKzJXS6kVXAni%2FEvqiQ0&X-Amz-Signature=1836ded46c2de9db505f63c46961e5d9fb0ed3562377f74f39138c664cdb1985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RUZ322S%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDt7QMdYaTU89scE6SPPxbd%2FBi3muBIKQ%2B%2FMZTKMuw09wIhAOpFG8Yc5PlXj0%2FUaj6juwbKRUWEYlU2%2FUjOvP0Z%2FMyNKogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9LDhIQDf6maT875kq3ANOkQG%2FS51Aya9AtJW%2FeTqf6tEjZEOj4A%2FpJC4lSeIk3vjo7V8K84c%2BhzugRnNXxk6Nlp69Cx9PUTLSSRU%2BgyznXcDfSz8H%2Fj2ElX8IEJIrbb7A4YnjJrSV8DKiLkY%2FSea7I%2BV0Py3Gm%2FSkeaO1AC3kIc9tnUk9ZTqtp0H3S7LpDTFHoVBGTw3z%2Fd7NLYVyIFjTYqF3%2BCtzSt81sQiOjcWeK25aF%2FFl%2F1xXMQczDbPTZQCXbnl7lVB99QLmJoDSg%2BWqATrydJXLYawt%2BPK%2B0vzWR5AKGPbwuetQzOQXv74n6yeOwHHqBnbIRXqSsj1bi6Al89yXB6HgadV7ju5MQAtQbVzSPcNo5%2FVj4UN0H%2Fys1a0WjFldK919qXflSLWSgAII0yOSaNCV5XgrVKnu7LOgOmVQKOFT6CrwMqFCSvvDY%2BNddycOGqSFHNoKmEsr3UWpsEgxucN9v6JQ1OQ90KN1BIClbzM%2FrtAm9YA9MW29%2BbzhuVq8nOpsyZS8Pg7aZW7DfzYIPrrcv0EBI%2BXRWVh5ubNM4rsme31j%2FBnWdjqBqisccKGbnQ1rcj35eftAOoeD7Yk08m7mHcK27cTRsC9G11Ygs86agJr1obi4rkXmTurP1qEIrPozcVhVADCIhp7RBjqkAe93LJ7tIcH7XcT6LOW6Hob3aCGI7KilhA8PZ0UV6xf5ygXvtWQZb35y0FZ6mzOhJWymtzJYxmWz4burOCrTpwKA22oyH8qEEeSNiXdsgEpCWBBjkEBvH0ENyahs4m%2BXt4hk3zLeEZxt6vn6NT8RbjMndPt%2BsiGS4Sh2g1J%2BB8MnU7HWhcJHXTVf8JfnKpbAJqh8YPO%2Fm69jQRc4Z73QlUCtzLH8&X-Amz-Signature=bbf9faab256737276943bd49462c24fe187f532a2024f8b06886c4077e722046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=3ce4c5026c0a1c8d688363fd251c6083ed35bbfcbdeb5fafbdd2ff0269196298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=4eddf29c7caeb40cfb049edb5d24d7a2a74dba0be842a0a59f03a594608a2302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=43898d50dc1b2dc8061660a059c1521294a36d68948788160d84b1707d8ebfaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=4b0378ff0f22fb462dc5fb8358f6399e3ef7cc070b87bf0a11c4c8c0e61a78ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=73a7008329bfd6ea2984b8aa37717aff110522773d99693bfa45cb476a5122b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=7c7a5ad165740dc01051d2938990be640351f0c67086e6ad49b7e28eae2f0788&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=730953443b65e4b4607a6c978f5ca48448090ebc1ceab76749892a3b2c5796ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=3fdc9a6c36f34a471dc9ea02b8690c60231b8e4146e57da452b4c127604d0578&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626YW4R6M%2F20260609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260609T033329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWnyu6fsIk1k39E%2Fne6K%2Bz%2B69KesUXbXffCvupQYbzsAIhAOy1CafvBPTVxhJKmZQTY2zCxoxcCHJ4AAIrbXK3HHb1KogECMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHjYKbmxcjhZHfdyMq3AMSHfa83d3CIvtKfO5WmsfzPcmImQrS4X4v1Zt1IiADMFimmsavcaWjkZgi%2BOKenGwVhHQ3%2FwFsWvCOyFmZ4g85ajfazhXdw8Of7cdF9mlUe3tahVRxBHS5A%2F7b95AWpBmYwzLbJsveKZPwIDmQ8o4jBrKnRMVK87TNR4%2F3cTXA5G7Aki2fjF84ak3le13qN0%2FSwx%2BFZ1s0fgNwZii8TLj3jL%2Fl3R54KeXIU8aEA%2Brsm1gOrYGmk155rJ0qqADYOBf5HuNqO2BdZ7MVKYU1ev57Jk8DLfzE7rPW4UzSO4t6qtA4mjRJlyYAMYLKwfwSAt%2FuvvowxvTBKNxQxWUqOjE8rt2QlHgWvmhCRuxe6SQfjlnIEIjkpg0VfmDQqRp74%2F9Wftb0KMdTnIeC5nI1lzYPPOxxmbKVIohYC97P3BK5NE1AvmDf6LRQ8S1CuIE70KeuT5Ttxjr8CY0zD3FKB26k%2Fj3losArd520yqLhDhhkyXz%2F4RqHLyZpQSUwvAHqNDkEEN0qfvheb%2FRe0MgY9iDSSbcnASlgnrH71Nynpa5H%2Fp%2FEaOlZXK956r3RyE9ipaWPpofF1ctFBqhX9%2FyQPkVJn7ZU0%2Fy%2FrGEmPrLluQVvFjxkTLISuBmjDqkeFjCZhZ7RBjqkAe6FTirLGxSgSVVEOsyCquH47zqEqDx2Y3cSlBDkEBkJXmv6%2FLEe8FVvACGfY9coAkwVyiEsSOhGt5AFO3vZJWmATlhNYQDZl1bT1gOKvoXa8XbQHeG%2FIElJchkkjWFMFZUuoCEjXKU5Z7ji1dld%2B8mmPqaAYKE617pdppZ7lRwn9%2BkVmHcdWmziUIlwOOsMIMcWi7Tiynrn9diiCxxLWdlzZwza&X-Amz-Signature=844ff72f841bb4c3f409a860edd65e145086321853fa0c678809133c2ad9b68b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
