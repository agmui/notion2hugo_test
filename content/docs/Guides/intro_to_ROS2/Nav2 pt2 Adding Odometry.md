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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=93e99b3035fb633b55c0773ed51c522d43befc89efde298466aa4d5d873c93d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=8f30133fce15dc3c88476d36d1e5db4459981a144f8ba8217e9e3b4f7446a109&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=cc4d2c14a1136e027b183ec783606c36871a33350fc44d20c12cd5ae8551efaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=b207b5e42d446b94680d3d7032ce2fe801ce75a1c9434cba964a202b83e1ff31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=13d110fe1d42d0394ba6f09166348e68267e57a6cc79df4be8081ec2d9ecc25e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=668f9b170cf2d53fffe00ffa08b5a776215c1379398b0ade34fa186aa6013e07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=28e11c4a53b2d578e424d7f45bfd8b315883dc0c58cefc9659f92ed4e445f94a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=e2065e83a32f3150bf51034e8431934bd437f8702f9445f879f6361c8a766144&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=208ec944862e2c41cd097b00e090c4333089369aed556a2d819d624d4fdda5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7ZHIUAS%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDk2QgYqQgDCfbCOSxEu0IOCC70OcYhEnmV457AIK6BnQIgQS%2FQv5Awycj2sefUfM7kalLmtDxanVIJlAWlxxmxxrkqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2FtkRHGPqa9S5zsHyrcA737zlHsgKFRxA9NnqoHsTDCl%2FRbNxwj1iniHUD4KRyrFvPA4ABuUk8s3KAiqGqKJhvGOnZzKTxSjPlqUWpLqWaVh77qDGLZob%2BNzbkdHzAAkEmjqzui603OcE8vpupd3IpYAGwmBqGV4bdBygFF14vPsFTkVxblz1qK9Jbd0IjXihABIyLzZOakS9%2BKvCPbbqYSWPfp9ZIfbXk1fCFn4gC1FNbp79UJP5ez%2ByngswFQ4W3i7YWdvuBGFcVBsIfQ09SiKKRRBG1zL2%2FELhaVbeV3t58xZDv3Ft2WS0fAJffBtrNzXbGB5M03gPa7%2F2%2BjidBEGlvmlSj6FHhzNZ4ZuzhByaoqC9qRjCNLEWT2ttUdcaQsGaoT7aekFlPDmP6Hb4%2BFGUilNCEnFmL%2BaWtTBjwONLc5rvLEdhqXAiX52pmsWGJ2sQNXn14kvX4rqbG%2FobdBKWlG7V33Ran%2BIjcCUReQCPWSj2JufdJM29FgP%2Fr8EqzliDWgwtC527V7LmEz%2FFwtCvsqOj0ra7GLs82crG1vwTDpAcog52aaD7QxMHGEdqWxAfcbIK%2BElKSyq%2F4kcYA2l223aQE%2ByD1kuqvp%2BF4JRGXjo2qJVLnPldGeGXyU9uAx8mHF6q%2FbFVsFMNaH0sQGOqUBQv%2BJqoNsiuuI09810lCUz7UsEJ4cyU1ADRvmpmsBmuliaxnYM0nCiQ1Iea26Qv80fVJq9W3f0mf5BadmTcX%2BXcwxg%2BmD4eIUrz0%2BdlkHsHxwsuJdm2Lap7cItqbrVNBX3GzFAO5UmH9ZRnkAtvTECdLVqjOBlLGYDGfzMGPNBgLqkbzbRoPGhI1vsUZJIce%2BLVWDp%2BA7pKPrcDHNQtMGv9shBPg9&X-Amz-Signature=e58fc6f86757ff4f5201809c8bcaa14de29ab5c70da5f12801f03be2c39e9de4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SLXG6WZ%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIDoLoFsOGSRTc7BGPvX4KqaFMi%2FouQ2QeoP%2Br%2FjPWpI0AiByd1dDRE3ZP83yq6b8MOxsf22j85NHgPtIlVCMPQIhciqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmXHnDjIQWWm%2FvKM6KtwD4dMZHuQolcErH7NJzJWT5Yfvs%2BM5YwpowyqANd4lNexXKB5oe2bFpL8FWI28z25KstdulefnMMj2KxOWQduJlYefrRSQ0sHni1PHo%2FnS2j9sfj16kQ%2BN%2B96YZ5LY3e4D8EsEYuypwxHspouxhQboJBQVE3W4D7CvxtNXlYKwJiOAoTqazhuOmPZ03GLODfT0Hvxrdi651eethk2nhZOvF7wbRaYFQX8i3R8LGNjU%2BqgwEscgMAJ%2BH1I0DsDJundHUIDKdoea1ZeTqNz2yRoGLiXd5x2dhHuE3JphoQFN2OCdkJ4lCYp9Kft017BOAAyqrR%2BPiJk7FO4amuh3yuZeJ%2Bp79Bm%2F2Ecedxwm3Cw%2BdXDZNqMZ%2FmrdX%2BJO7%2F2SmCeIRhqmGQoZkr4j1dfPtMEnjXyuQ%2BHqn9sKOGPdMmQDVr6lBc79ieSOjRAgiuT7LL0ojUrDIsQtnNPwYekk0qTnaRv0ZzQPttco03QQfC5jaJeO8wsbdMuK6xnehjX8hYeipSDY4P27QxTcwLCmk5eDFqE9pi0QWFDpx3e%2Fw7tVVWFWwcigrKe5lL5JnkFG3dzoOVhhN7fDOizjF2WixtSgHWFVwXEHkauF3a8N08LEDLsOI9Ypi087Mp5EfMMwp4jSxAY6pgH9Gxgrpw0kUW%2FFxckxam1uY6hdAm7%2FQErm5c3GG1vzg3AK3uwInydGJ%2B%2Fhz0V3jTN5dZ%2BhNocKPcZlfGwbmEzx8TIYVDmLog9NgLIb6ruUjSasgthZFG6ZhrbKiAA%2FZ9Vg%2BZJkTxr9c9SI%2BIzVvkSSJMdLa0rIR5nhBEBfhr1NsQq5EHJzNfbwKT5s7165cRR1c0SPCxlJ0fwEp6mYqCKUSBWDQiDv&X-Amz-Signature=960db7af469145f6bfc3fc56f91c2a3bacf06c990eb69774d00f1d8b9b509650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=8cef963d1f04c9b702fc62b57375579d9ab7a91e4471a75177be5895da9703ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=2ae47d6915f869151dbd8041b0a76e36bedb61576f994050056970f140180e2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=58df11ef2e0e84dc42cf8f4f64f39f542deed6e02c5f651c95348c705999b010&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=cd369cf44c59dd02ebca8086e578b62b9831cb71b8456a04f98f60ecdaf9377a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=37c35cd2e6250c951469612c46aecf0bc4e76fc1554ab4fb3d8f79b69ed43a45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=74753fa7dca363ae82aadd888c53afc3bc7bd6be1af2c869ca282d3b4f2b56c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=d53ceeb8cc48d39a5163dc8c5bd79460eb698617ea4e074050620352b970d257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=d2e5e43d859d923df360933dc9c1b7fdee26bf172b0f083eab899124a631b548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AEBLL3V%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T110934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHNRg6HPc0vMRCrbawq9D7UJXqT2156vbFbigmP0zea5AiEAmOM9h4kgt%2BWIq8NahuUIm6bXnXhhHW98uWi9Eveei4sqiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaZkB5n2XP8AhMGDircA22uqd%2BXqVkXXV5qMWgJZlxY3qywfCdM%2BACfuwwuSJ37jCki0ItZX75l8ctlZL%2Fx8xPz1gl7QM74jxpdnyi4ViEHTpYA7G0MyLK6BYyz%2FFuTnxSolJeo%2FzAn3nsW5Zm3OojE9QnCCZ2Mv3RFy69eSHKek1Lk%2FygJKzztv%2FrRIozKqiX5NQdUxVywrZArHf5eIMC%2Bp%2FlWrElIGetbRVdwYCb9xfzJ7DaqBd5qcX9IkHsZhwADhAa4Pah5qdu%2F9Ka%2FD%2FGvHRklKCKjyU9snXMM11rbK84eX7%2FtCWiRRA%2Fosgl5PLu1qw42HMpz9rlbqd82GiTDPP1u1GHXZDWenMoiIryOM0isQxLziTyMDudFjPWy95iMn%2FFGeOMq5jS6zylVzD29SDa8bz3oduws7x5MUnMHfvRPZM1uwPIfq7QJ%2Be6OlqJlW8h%2Fdyp51MOWQBssEDwUA66EHNXfAn4PeJcFsPhqn06vat88PQfEEpgmSZOVKYT8GkFK2g4vn7j1tU0%2FvtUXLa%2Bv%2BeSpX7yvfGAn6cm7fD%2FHWoZUwH09cdyqePJEsGp%2F7lxEHN34ViwdOCjovv7rUojoA4tMZYxp71UHDP2%2Ft6Nws%2FAd%2FySlxjZ2b8GOaWCqvKH%2BvqRFdVloMOiH0sQGOqUBN5XIcKtQ4CGiYNVthg9rblD4LX9nMZWFcnjFmJpyKveHXeknYXEhd18fW6h%2FK46xci4LnT%2BiqG24wMROBwkmRuHKnvE0YPS7DfsQLy59iWCYgfqNhQSC8912RNFUxZ3d03722gMHvGXExyH7ElVn7eGzM6%2F3S%2BSzD%2B2jwRRA1LEEjiYfC913AocSTcyHrt4lLPnKS%2BwwMqtOgfF4QheId6H4508%2B&X-Amz-Signature=f7bd1ec114e37e2cb258a8e44c6c3b0464dd64f1e91d0b226575779681122808&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
