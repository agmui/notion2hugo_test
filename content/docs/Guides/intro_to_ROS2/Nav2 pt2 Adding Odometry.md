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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=3df1084a295dd9e3a69e46c6d6ddb0f32fd2b9f3a2a69a4a3f6ed3ecbfdbac5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=43f330a289c2d3f6ec9452797e5f37f064e9ae119d6cc6df8d42b1b20053367e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=67b66d0563fb3c3ae5148b53161644c0778432e3c108223e8ed1c6902b070dbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=cdceb71ddf5f062d86d48f6a4bc41be7f4d1821ab1f461169db08e7d83739461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=966a6d9bd52a09dbd1fcb24494e274306728dc7cdcfbaef495568d4c0c68db92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=186eb7f2ce3d4d626daecf8b76cd68dfea95e12bf06241c5e8d69ca9f3340dc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=d33acc04b1d50b1c520fc0bdf5f388d4e24bea85c358d69b6b46fba36b7597e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=4ac6ec77d7658970e3dda4b50cc4fb55e33624ffc1b05fecde609bcf52892204&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=e8afaad27e7b20e60c301d015116f12ec00077fed1641f80a20847f8e49adffc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZPHM4GD%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpXx%2FaRYjBUuIJ%2BJD%2BnE0BcTX%2F1FH9BZ2cNT69QwfBvgIhANp5KC3YH%2FCPIITI9OE7rj7S1rgQx%2BzuBC%2BPaioyZcE0Kv8DCHsQABoMNjM3NDIzMTgzODA1IgzTT4r5xAK4sv6aju4q3AN4hOTNje2F4p9PipXScK0SAXZpiimRvsRAlJUMiYv3lICD%2BxXcZDr8fTxcs8w6K1WQ%2FatJMkiFe8ao2s4iAikkKTzK1TkVnoDj%2FIN7gVWParmg%2FBSyVwVnUa%2Buo0tQ9XXJfB8jG86ptPOFl96XPl6J0PH7RkmE4RjxQfP4vbHuvia0zPW%2Bl4azx33%2B3AFjfQHnm9gPLvXZqwKkcIpSFY0vAqSbrLFWZM7pjEzpCfS0Sai7fKY5x9U3UwpCu8%2F1YgLVOqeRIiGK2d%2FcTKgeUdmCi2mZx78uRAF9jpConYu3Tj8xzk1ZU%2Bi1ZmAOoJWJaoQkwlFt1tezJNMfmu5DRIjI50nN2RGiTFcrBhDkD0UIWrLGfjciqYw2cfZ9Z1uBYIaPR58x%2BGOBu5ha8XQVGUEOHlAB4M9k3RfxmZnQw0VJE%2Bkxmqxp%2FBmtiOzWCjj2ATzhvBTx30opRgJrpHk5rVp7m%2BGkvnZX7bw8AJZ0yUuYLvTm8U8NFL4NvKhgs2Y3ljJdTPGB%2BMO7s91bphuxkpCDIc4Lr8umS95JKVGwbKW0Lc5jKS3UVWEM33Bt0UbeUDpA2e72aHQ0%2FzCSGuiPiskTTn9tfU%2BKV4JkTbvdnkEGh1pBXkQNKwJS8ZNFCTClsJnJBjqkAcKornx0%2B2vdDnTZdwe7L8JG0q4y1%2FDdkvyTPTdM0LAFvkOYLWlbX%2BPz4wDGxXBrlPRFMZJLJ7zM%2BomlK9K6igYehJrq6O4Ba9xbOUPZMZZkj7fwueObcMAFtP2JedzEOcjqU4TFSV%2B7l93LNrQ8WnQeUogtgRD6KAgWZ8%2F7J29LBqXF4lfN3HXrQfZuwEJIq46Z%2FT%2BL2JNyJuzwUQHOPORbWE6Q&X-Amz-Signature=f6d093020f99e4c162aa81ad72d34dcf2c4c8382c5b8779bc62df56eef7e873d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WN6E4TGK%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPgFso%2BOTB66miLFe3SItnZNJPCI59bHc8cEujb24GMwIgZDvDJ6CziWCLU%2BLNyvorVDLIjB4diEiIhIXCbxBW5q0q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDICzey3lOK2QvTybFyrcA8Z3%2FdZ8h05cj8H67YDAQ5q3Ix6B6a4fbHu24Xg%2FW8xuGtDq4iGwVtyUoPy83wDzZvnECinVAUrP8tOuQ9249ZXtNGlNYHd5rAaT9ZF9vhODCMTU4dU7i65RX1BxuvRMQS4YzssYBTk3u8x0RTu5aaYPc9nHOVIJLC7GRpO9rNzp397dxdLbxF7j0vAEGzk6Vgs5ob0sraExMs99FiUx4mdRb4m0wzJIbIF6tpjVymz7x2d9TztqXEWbV1uhwpOy1zjahmqXXe6mvodAMnTJcJDB91CuUyAbeZzwJtE8%2FaIt5uFRWtV%2B0b1hWejvWmcjFQjUX6OG9br%2B0xnMZ9M0YQbrenZYdrA4Fs%2FGCf0LldzSIXQdaMiQJqFDfQvYVplrejdRwH1Mvwo05baUpyuMzsbkIEI8t9auZwufP%2FSTBssy17vztVBxCVPIPoloNPj%2BaMRoSxWdya%2Fi6ZIB6hCdUIKl1DLCc7v%2BpF81ldv2mH7zZ4hSXJgK1J1%2BhM2tDtxjhegLC3ru8Fu21FyoXox6z5waFnZPyrO7COIR0TqICImPqu5RS%2BK3qu2urQPKI6sHNoxj767M%2BTJDgOPCkvnpxt1B70FGfvHajpPFVjp2O%2BgkSDXdIG0FTkhl6P0UMJKwmckGOqUBp1YnyXotoImF6cviOgoTQfsQguNbmj6G9wKtvcUeeT2XpEdXwoP0aHM7mBpdDJ%2FcJEcRBbKDbf11%2F%2BszglNKgwAau9reUqGqVsLpE82jrckmrHuYErCuH%2FkLO1NpTO0ObOPokre7rgpPN67DabX1%2Fq4d92EmycxeFhmhdOtB8CxTMBSK7FXMM96D837V40KvoDFzyun3Jc4Ivs6k0PVk6OVMjvcV&X-Amz-Signature=f0e158a4ae9d323e28bddbd8d2a85d4b3ba819e90dd83b4b55d0fd877de8f364&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=7d7527d6889db04287121a96a8a4e0e14df8d3aa4cef7284fb16d5b95ed0d023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=47e9ea676a12f16167957de3722041f6f0bccfeddc84277804db19000db1053e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=7f5bdbc940fee2136650f8de04a2a7f27ca313f92f9c67766ca02ef62799721b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=a75d9b1be5f53e603dbb540744cf3b7078e585d3f647f16c6572bb4342ff7519&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=27b132784bb8866f018e0ef9cca3a454f21dce8e60452420c8069dc1ae805cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=037a380408d95e246ec7f30d72227bd63a4437dee3d63bbe66a7479bd3f48827&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=79f43e171945b2548f69e2cf99236f51f144e709f398f4e98964a35f531b6829&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=640f32980edbceab05b8a9f480d23e5762c9f0f5731bd4ab2210bf96a89c76a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVY2N7GU%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBguFU%2F%2BHQoePccnYWFKu%2FzCTMLvSqV7FZzF2XbXvldOAiBua25AT%2Fmns7hI2kccK%2BgHnUOj09nzbfTkIVczz58oSCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMK1iby3gGKnNhIGPWKtwDoktbQm9ZA0QDwNQ0IrpJxnHHixBhcuWDlsau7z7H4VjPHaGhvBTYIOmcS9JqOvuXWzbEWkr%2Fd959lVHBdUEHH8idnuvKlr%2FQFuykBJJ1d6pWGNJ5WzbyTeh0UOQML2aubKdC%2BMNFjL45U6Y9krxMGgsXsatK3mhqAP%2Bemyktsb%2Bolb8JiFxds4k%2Fb3zVDynVuGiH7JMK1glUmPtxKIElHsba03j3kQra6py%2Bld2mvk4CWvJNCnpbePcMtQtBEP6jzMYv4N3n53uAwLDNPeeAmekyLprXohcn1arZBLG9VGXTqIhRBTXZvwl6l3ZIcFI%2BR0W9v2CiHzwiAm9pxQHeuM19zEQyEokUWCCK0AD4LbxeShvtaTv0jt%2BQLZ6uP4CNM0lsmoUHC%2BVfgK3PZlaBWan5apMS0sJeYhgTEJZObJ7PdVN0bluTO%2FFY2OawL3ywqiuirttinnZ1Oq70OwM2rM8WUnSr16wkDZd9YAhbxLHJ2ADnQd3GE3%2BcEnShxgU376LGXxBPdz0CfEP9YgNosDp10IrZgGxw8JsQE9XETsV09JJlMVicN3Tphjvud9WuHkZAK%2BzSoSzv27xnwAKtbunEI5mArz7vk2V%2BUeSi02Vq62M7%2BdDDGzaUUFMwqLGZyQY6pgEBEzg013%2F%2Fom2YJjUsdp%2B6ehvCw3C1U9rwQWwqd1pYaCULKmg5a6vr8hOdHsxgr57iZ%2FmMd57l7XJNkQ6bgbdptDfLwyrfTwC7B4kuA4WRUdPak%2FlNjid6Fma3VBLiSRG0oiKvmZvObgVjWawSvxi74wpftw593K1GeYEX4Q1KJP%2F1RsXhyDavnjMWGPK34N%2BPgXPX7S3wCuZW7j%2B5iB1obuqWxAlb&X-Amz-Signature=693a7c1a4462dd04707fdfa05337e88528a4238979f9e59d6f7cd71685710a87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
