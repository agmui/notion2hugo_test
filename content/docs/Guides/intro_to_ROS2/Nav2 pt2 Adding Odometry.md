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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=618cbe16008a1cc3a81ef3a54cdd1c15e05b029a6f4b6e91b6eb1853cdcb9200&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=3a07aeaf5c02ddec9620bbaa8e1ee66fcac7d197cb9e15412ce098f399dd64b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=6ad87587a7eb1b27685d2b97cc2868559296db843ac11e51a9dfc596c79469bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=9440e99e5087df75bcec09d3d55bee851924ffd43d223010655ec18250c59e0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=d8645a1f933f0b1187b16c366d39a5230d5d1c72f80ba90b72469eb6bcaadd36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=5ac2a1a5c15a9866bec1797315c22f04015751854f7f69b81bee57392b6cc9b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=e65b81dc2009725f56d49ee80cafa8c799e3a7338d863391cd48f4f5f4634b32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=9abe5fc6ee9bbe86f84230930f990c2032b75dbe077fcd0d4b453b6b27cbb1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=c0b3c394e808a3862887dcb70b537062248e03d73cb12839674581d5622e3a5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCUOOBIV%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIDuNLyHUXQuCwZK3C3u7VUHm22eJ6jGEGzWYVeTNbA0rAiAxCYw77hDfxTv2XuCFvce%2B5TDMfCx%2BcVAqgoi8F0R2Zyr%2FAwhnEAAaDDYzNzQyMzE4MzgwNSIMR%2B1ILs4QzEI9%2BGJDKtwDlGvIvkEUGYYhA3mZlq%2FQunkFsM61PLCP8fxsRWT0oHUD3IG2Mis3vXnWzbtGi7Tn5DveIqX%2BMMKvTRcwPqkYGQqp7NAgPFYLZEFzT%2BWko9jzbs1E7fDOfn1CRfswn2BRJtLRUrBR9Wxre3pR3pU7QjfqNIenryChJNqlOD2tz%2FTrhbXbS2io%2FUtufJ2ySI65yopDbxydiVJ0JXNLZqWP0gxfb46TvzJf9cL%2FYi1x3A5zMsdJ%2Fei%2FmWi%2FR9arKedV5%2F0vuFHZust%2BVvl1hy%2BaIaNP%2BeVSQHwrNftVDRjy3ERhBbjpqDf9ulhqaNVtYUc%2BMmj2so%2FwtvmdYRzQmD1EgVBHeC%2FiidxHT%2FIaWHNHoS%2FBWOQkMMhskZBn7OQTwatmdB8zy%2Buj1iXD%2BvrGbIPbEaSnc4xoMjx%2BdCq0xufUkVt%2FFpxKF8qt%2BYa1rLiOqckfI36OYZKVvZxyQLqhruPA14c1GF1yj6SWqWYaoVJc9LY%2BPY6Yr%2FDH4cN8NcLgpz2Mc6fO4LdVqcAe1ymE%2Bu%2BbKynlcAI9FfIVFAYjAtWc0sX175Wdll4PsY1WtIcufDZL0J3LgRsivNIHJ1TBNE5G36HokaqlJgXKKye7cOX3gWgCaU3AS%2F6sJKOu%2BtMwnNj%2BxAY6pgHBbRH8kXNfbdPBsq0chI0uRGFIN%2FvBVZczAsqzOH9qH6XePF%2FLsl1Tniru27%2BnkcpcqHoloZ0LZYA1x8j8%2ByTlgam%2BakhiCtjeqJxh9ckTo8XfCpNuUS5Jhff%2B5TnV6BPTTz0WMh7gW0Svau9Ijay2CEMh6xxC3zlJT%2FAuZLvSYMDHljDo7ldN8e4Ekx6b4dfTbObOYM0RsZ7Mom5coNl%2B8zxp5zhv&X-Amz-Signature=a2347e1722fe169659adafc7664c0ceec53addb2d53224d9a7ed68847f69aaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOYWK7B%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQDFN0nFCNyA8JtIeshDdfSu%2BF%2BJj0hzeMH1MhhGEwMljQIgZDAOhuTgCBmuwtTxQCd1yKaFpOYbi%2FBqnvuAOuD3GOIq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDLToqa9sOMmqPdkSnSrcAxRJ60YyU2h3cIi6RPm8hflPHC5YAz2mm8rUo98Tzuu8OZSys4OhmynG3tRZmzgUS9khCxT7EHXvTzDSKVoq5QFL%2BRKoDMeOGEMfdKqHhKM1eTc%2BNRW9e31iz9VK5gKS46kgFLaCuvdP1p0hqLdNRPr6X2pOxZrdE8at1OjyHKllOagcjhl4ifKQq%2BfwEc%2FtSQMZfl1se9XEQ6o%2B6aVXfh9uhh9tDGaAyU0fy3eJCJCjLB%2BdE5c9lJOxKLxH9e%2FXJLJLAU3SqMFRaHDpfwx1totqj0gchwb6gdk3Ucq5sKw5KfDz1IkzMkCYP5BJh8axvrwtO7kR3HGZykK3XLpz%2FkLrpvtscTZXs4fmWI%2BLDIxrygJpG7HoW8g84%2BViohzcx5dfGUrbVrSw4XLXzFVFe0xZ1HH%2B8rFA7xX49NT668iRjv7scrjB4akVkkcZuY435wAWMd8cktCW0lu%2FaWGjbz%2FdBSP6RfYzTAM7QFp%2FwVjlf7GkEBBhYH1H49gys%2BOK4667j%2BtsV6emJqhq9%2Ft2H2U3b1GcJk0%2FNsbtjYUx9yPN1%2B8zD5lMN12eISCLwTkrnlblZZLLtK27CJltlq3VOY6IFlk6optvQdzXIpo8yDN4nqDVMtlL8WsGGdRQMOPX%2FsQGOqUB0K%2B6aTGFAi25r7kKzQdmfDnVnb199ct0WcnrU9RPUag5Tdhg2ARH9aayKSlbD4B88%2B4B7OLQuneBOyL7uD3Kk7HLzVw%2FP%2B7fsQ7QQOVn9o5XUvOebF2m9smVPkEQDwjD6n3ZXKg6VOZB0gJAjz3ktbkTdK%2FkKdE9laxl0e%2BJ9R2w4BinZEBaN741rS6kOBkIgs2Qb%2FothPq1WndSfaqK1um5F9vn&X-Amz-Signature=cf7365366bbffa5445eef300f0bcf0742d17294a6e2b258b66e997b75a1e8610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=b61278e5b5178318ebeb45edb5029015916e6ae5843b9d67df5da934ca2cd04b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=4f212a6094ed69808f26b8ce7e50b6f45077bd5416ee3c9da51c2ef3ef760ed3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=5b0ba04ffcf1072c7184c4f03b46cc66c750f03da734403831e59655745fcbbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=45e323bccf5b5b8f6cebd9ff93b8ce0d4a34ae069adc4546a0fd6da91dced167&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=94ef4afcab805d1779be5af8c1cb60e6b8bee3c8773b172211c600a8e639de14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=936beb723990deba7db8387f2e5565396a5b99915a011ab75e8a069be156cead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=48619365aef5af48281a5d0bcdc7c031dc0701b694210c0e9f1a92bfab3750ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=2bd6a88482e64c7a24a157b9adba9cc54d00bf67d734d9eb5567eadb97853c22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TQVH2WS%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJIMEYCIQChMpOyZUheO7irqAsqfL8n48MH%2BK3wYmx9vA8A5VqkuAIhAKnCqEbVdEMFASgoGCcHxK9bfMbPAD%2FjnkU0HqPwp5sfKv8DCGcQABoMNjM3NDIzMTgzODA1IgxrGN44D5BXuyY6mtYq3AOdQdkvORNeX3LSXrZwmE9ONUodO0KST%2Figub6rzFXuqplvXaizpkJX%2BhS4tWKPhtoR%2FU%2FMoq7G3XDcUY%2BQCgom%2Fey6N42hyTiZiTMLDLriby2hNIR%2FilckGvoh0Ss%2Blu8FvIURB6WsBWaNKKkp7T%2Bwf%2BL9PkI8PXn7FmaqRy0Fd3wYkXFSBA7mYzhdTd1tY22kD7kIDfTVddmY9ZTDLym35QEnl1E7UDrokl4tAwINTA3UCmDQyGrssWiNECCHD3UF%2BRuLqRmdrYHUNwEh%2Btw2mfQIpOQFRaUSbpulp4GtuRjDavkoZ8Y2FjV4%2BybUnX7k8B7VlmB1g8ahZ7Pg21O2Js7ezukTlVEFtvryQ6DBvLj3mH6Pg97%2Ffke3v3j4%2Bsgk7aFwERdmzCdFDkkPXjr5Quz%2FUKw0x4VaJiz0miZfJaUvR%2BqZSDCV17f8WoYIIqlUm1jOLMuW2dwxGHCX7wqNinjgpKNaDBHaBjXUreP1wbvmChLCviPPsSAYuT1uM6AuDWhnlaxArdPyOjJchoQzNuyFMMK5iynKFGbwx2o3V3iN0KcxbW%2BOZewoRhPisiksy0QZjsF%2FEtG9gBdwrK8j3MWvK5vXbv%2BZer0uRGRgU6Y4rYqfnP%2BB4pr06zCF2P7EBjqkAZ3vgtKtJEBMTW0abqsMsy4VrBgpDIZV5DrSsVek%2FOnLXU%2BgUC9e06iMZxQU%2BG0pZ9xdvzkN9TwzF%2BvZmvF3JVfjkghpOy4R2kgseTV4HpqI5UXtYB%2FpL%2BJ5T1CeHM5qRHaKzGRhzfYxA4ctGhEGEUti4ugJpfYvIn%2BbM1Bcod3maZnh7qd2%2B2E1oWt7JjHvpDk7X6HAyRIClGFmDnW2NbaMlObB&X-Amz-Signature=11e09eb4db61f98bdfce6779647b6e5fff724574e95e7045a2a02c6968ce648b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
