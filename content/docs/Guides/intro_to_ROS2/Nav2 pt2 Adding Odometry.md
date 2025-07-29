---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=08a6b9019e692d30c9d7606f30bbfb65ef4b452ef5ffea64cffc3075ede01d27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=5a182d5c2b7902ef248f709f0be3d6128835a7972f201d8ab0920b51048e8ec4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=4c6958d667d7b67055db189d8dc885f62c509f46740cbd5f8580b89ebc39bbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=6a02d773dcd4ff47045471a37174bf64b10c20be67ab7a1a7e4d446bd875c323&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=42355dddf3c652a98c3be81f7484648c565b4487891067afa90f6d879c01b731&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=806e80c20f1534b041cc8728e0236cca54e85bf50633555a03091dc854270738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=8d0d881f33291c0229cdec879a7cd69c3537acf886cce670aa668e6d4c8e0133&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=27b935e2190e84ac83ac2af4ae6a0ad64b086841f52011bdeb31fd002d3892b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=75fd19e22f1af7ec486505b10d057d4306b62eb77ce1729fdcc04fb4c8d9d411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJCOQJPW%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCICKPF57%2BrvM1HemPp%2F1rZsPmsM59QVpjNW3irlOezQNPAiEAgaWtIy2VzDXG6Jj25QTJN85ZdEdXr4q1QW99nHanHIsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDX1jmAp9UYT9al0ByrcA%2BPmxVvFzl2IiG%2BWCxED2FyGi5fmMPfn1%2B9LSM%2B3Iz0ZpRBo0%2FqoXiqIbjSugFVcQ6%2FmtedSoZPHipc79nmuXR8yivBLsJdVmh44Oxs2gg03lpVrUfoaNN2xZqkNk85uJ%2FJVd%2BW%2BqJ740GEPgmgmpEKb01sT0N16Sgi%2FUDrwj2xHZme4LmwxB%2F09y1fOPTSYzJe0ECuDx%2BooYV9529rhrBzG%2B7P43Qqt1twQH3z6FbJJTeaKJnPgKzhvnmm3QS5b%2FzDP9KlG4MiYR229N9CFkrbakpSFSsVJ9eb3dFjMgYsI0dFHikAtB0KdN5Cay2%2BMWXyQb4Ra6tN0OrJT2zMUv%2B%2BqrfnJtQM%2FvraPoQrqx3SgugMXa0vjNELfz2pzuY6qVvUri7N6aoPRwmwW2tmNlo1kewFHZOk8u6Z9t4Wu5GJ2I1XaHWH2emyuFXUbGd1URgF%2F96TTJqmy9Ba2dLA7EjaqAKshJX9z%2Bpjkb%2F5fKVGWT3G%2BaVk7SSGeOVfEEMjHXnNlYqAat8vRXWxCfP2Ug91SFnblsHxXvMgoJA5Fdt97vz1lrozUG57uc2y98Htdykf3j41DUNTZ0Bip%2Brp8CZIVn0Hk4G6Ppy6X%2F1Lh2XTO0iUr0Rg68sAkAu5VMKafoMQGOqUBt3ZlCrXrgk%2Bs1QxrONSYISUx1hCVkojmir0p2Bn95O33ClTG401z5kPthKZagafx1RdClDHe98yimmngZoFX1Xxdd%2FALzdhc0GPZJA%2BcHbd4ZKyf7D5xPDh92vq%2B%2BDDrjKQbNyHzXgWmUorR8gNaqYPi7Fvc7DqedipnAXr8AKVIG4pAjN5bkK83KVob7q%2B1I8lC5jgwy9TV38xwXohHE25eJ4Ds&X-Amz-Signature=faeb04d1866ff65d0d157e623840afc2107ebbacd9d0bdf1e9a12ef2edda9741&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UOIK5FTA%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCct8K5QC%2FhG7%2FH1vGQxRoes%2BKUDTyvgD1minrrl0%2BUqQIgfIA1Ue9y0FGsAhaIMttjnBn4ixgCuZ8py2OPkFfcMKQqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHArpYx7sIB4XzLnGSrcAw4aRpDJhlf9VgQU74DAvluuDzF36BS65wsKT%2F39oFZqP0MGv%2Fn2B4OHcR0QnRs6ZaYZLopwMJUQtww0paOIuUUMT1iznbGQ2VX7tMStUGwWvnbdZ60UgZEMvms2tIW%2BQiXPoT1QwqVSXXhWjJ0i2Kf%2FWxhKffNmMVYVxEzUhn3ZVJp6z8R21mbWj3SC%2BeT7tJeWInzeqBKACYkNWUgkirwMgCp6GLlcz4d1RGnw2Darb3Fm1tftdbdea2BLXzHpxsEAQvb0g8yyTTZw5ArLWZFB8EFmATi03uIeq3RbVg6rCRmiaANxFRFv3e%2FuioIcsGsSRKi6j14RoYiEvfw3Vha75dSEajO4ZXiBCRH0xGY7qi%2BG3YVaP3WZltIHAPf8ASuQKtfqkj2kaBAKU4%2F4mXxao%2FBVmX0e%2F%2B700Fxqy%2BX%2F1bMHbythclXEyP1PwWw9WX3%2FKQsVqr1NDNAfjTZp55vPA8OeZOwaDK%2FNVqt8CWox0s%2B9MsG6mJVBdlMW7P6iAJbbRcUD%2BRFaowWRAcbOa2NkADe44vGvMLs%2BTyXQbrYVNRKSbZzITB7bZdqiycNqjhJ3V%2FeHTwoXsAP5PGh8AXAzHdNI%2FQTdkKVWagnvH0u6x2WymFeRRa5Uo%2BgLMPqfoMQGOqUBEYdCRAIzFE26v0hbFsm0KYt2SPWa475nNx1yq%2FA7f02O%2FbGXV0TzUb6Md%2F6czmF4VKJ2Nr5JIvoCBskt8E6xEOQc90VMrQw%2B2w2ziSe%2Bsl7FXA%2BbJEqPjFjgvvhT%2BbEqCBGz7QThS4mUUMhzqkWRU3Adroa5ZNKnWtuk8vMmQ82lqM%2FqTnBlC0aiNpp00M0p03LBL3BnvSJL1GPFSf%2FP9FGn5nfr&X-Amz-Signature=dd64982c41cd97fc7ee1df3d87ebcd280a8c3f9f2a39aa8626ef898c7a17daef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=adc8b689f131aadf321c119b4ec5393e68455c8d41047e2c8c2e050229f74926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=9b86ea595d36e369589f9cda3d6cbc181e75a6c905e8dd348b606d61610c0606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=aa685db3a2f4679143112a4ab0b66913a76f4bbfed30162496e0f7f0d537299c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=68c9515fc7a024d87c296e956ae13a7e9e9192a0f37afce71472a764eafb712a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=6eb05efd7a8a7cf5d0886a232f76ef48b30984083f71f154df60589dcd5e18e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=58c3a48789b10a221b96cb4d078ae58a9b1f5dedbf0762e5919a5da85aed03e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=9ad190de3532709e76a96e0279f9f7c9b6de77ebf22f5ef9f5d0bf24a0d0a61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEBYUZDJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T005231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIA5HdyB7XHZSMLXia%2FwaOpz1bPz09tBGjWHQF9csmoHTAiAO%2F6BsIsbKyX1SW6RMhe%2FWEe1%2F9%2BCW93NR%2Be9qRokwkSqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3hMIxum%2FpgtRJ4a6KtwDoOptCHl2bcuA03CNGnUE6cwRkfuX%2BUw9%2B9770bvkCI1mmZCZdmKTxoLf2W9MhyZuBOwfUWk59bMLq00Yd4n0K6Sq6mUvpE%2FBzcZn8Rs%2FhEb58iCND%2FeAJaaSL%2FC1nhW3em59hCMFhrb9fHrvmKZjRHh5sl3MOP%2BJNwQqh2NsmROO7F29k3GQT%2FhKxRtm25w9y0UYVYYsiDer14Im7X%2BKAFJXYKBJmW9jaVhaCxCePH1T7d%2BGmawhBZAjtLrJ5%2F0SMuBlLPCVziVfkbC0TPc%2FyPXVHkIGv5bOFGmwTdoJq81Qad0m6Ta4kP86zK3l5dx9PXP6CXR%2BxBnzrH0dy%2B07IEGQ3OmwTp8EWbMdov%2BEdyPVmjgdXjDCfRAJfr58wKyxs%2FHkhtXIu%2F%2FkWCbNigwuk2%2FO8697ekbZ5ZfdHXV1dBn27cn7bdRFLWE%2FYrc9WLDND4Au79Qhz2UkTlgKfTbCfZmo18YsdoiJh%2FoVpCmaNf18qZmI%2Biy54WZK6n230lZ0QKCei8lijp5YQ9cpeOFqzwCxOG2rlpc0hJlToQ6y66Qjzr5CCZFChQbHOtRP5jNdiPwFXJxOsgzwGYOrtkjVHpe51zZOXUc%2F7o4rFx45tHI9aP0RCGsK3Vg%2FOcMwp5%2BgxAY6pgEPYuQCeoZJf9If3%2BgatHdAWej0wGH2iEqPuGhzR48cN%2B45h3ZLqYeWL2btfPAa8T%2BMAttNb4qGI%2FfPRv1uuNEiXwpfcgio%2FyCa%2FRkIkm6CxQoJSF4J%2BPd1YCH0HHRdr8d%2FDlTLL9c%2Ba78GVS%2B2NyabUr5R5BQf3%2Fqfw77Yvt33b56uUf2aMWIav6RcLGvBfc7W94aZWi%2BLu1UlcjE655pec78GwVIE&X-Amz-Signature=67d8153ced4b483e39d3d9aaca34e5b5cef74d936cba5bf84cffaf77adadd80e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
