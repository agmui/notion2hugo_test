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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=3e50eccbd54090bbb217d239e07e8f14814a8691680e49b23deb7e240a15794a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=0cbcf14e0e743b2fa78f8680a63b71c1c68dc13f961b0b7eaaa36b722848172b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=768b409a5b8e40442b7773bdffb9fab2ba337c2f52b35dff3a11916941ae7c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=0a7d7b8b6309ec2af401c497244f62e11976522ed6de4b28d2e6e6eec7498734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=f03c6cbe7296fdd80e631d1a60cfcf25f73f41609230feb97923932b504298ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=71ec20dc9f4140234a0164dc8c2907933f38c77ad391aa7b5753abe4860c210e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=642c14c8b329ae997c847f5e88cca0c42319fcdea1ff00748a21ee35143e45f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=673f4d66ac5eed74133ef013a934ff3aea8b875384cc2daba15a8deafab1c92d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=ace0662c5f4b823bad1cfd3461089ab78b6aa0da85092148a7ecec93f0950b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QOTGIIH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIA3MFnclni3KHRrQgDh%2FmHrggwAaUHc5qTG%2BfdJ%2FcvFkAiEA7YEyEM%2F20vLq7fEQYu4je6KaMshZkZXO6nT3w4Bf60gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDpAz%2B%2B7lPfle0c3BircA2rGsl0oXjtGebsdFVwtmh6R17rVBjPUqPB49XciO2q1S3ovANygeK20qHpXSezbzD2jIKgE8et485bMsMMsdwojAfZ89fKGqDrBUy%2F77Df0%2BDMzBFfx43kwjmC8X7Lx%2FUHLQsIFaczNyczYq0L1II249dd8U7jfFsyrx%2BZR6my7E0y73hI5D7BMDUaRmjIdgcAuE03hv%2F9bohcChWhNSV6YO1stjGqEzRrGH3oFiKcFl8Y%2BwTGzGDUtAYLnxwSxbP2WLtIgzcaPVWc73H8QPxb0B0GH6yjf4Fes12QB4aAt22uHWGoqLtNXTEXycxnwlKgooMuIWjnhd2%2BPmiV0GuDHRw2sKyeggWCMWzCsVnTteoAvbFAwZILCk5Au%2FZWJZq9Co97qK90tJy9fMr2spidCooPerwi0ueJ6vVdSF48SjN235GxDLNYnS8y4dAzQHGMZGjOjaH7PTxz9fYPwY1mDrxWToZYoowI%2FSxemMGpZsFIb8uCriToCK5UQT65xFWtnKljQqYzMQfAGz2T9At6y%2Fo5LPFhkgWLw6r4ZSS5NZa8BUIR%2FfEaivKw92N%2BsUlQf9UryuuIrTpAlB4L0jcgXKH1T%2BLBzubZHtTV8UXfmhMjsYGUkkHjB3HloMP%2FE28QGOqUBMC9uQiupgcMPHMEElmn%2F0rfIDQ%2BrNf%2B8PtZaImrryolHJJuw2Kq%2FFrSE2LcTqJwSh6bQWv0UtKSu%2FW60PeSaKPr%2FqO5NqfI%2BhHK7iQ6Rxq8208PikcB98IHIPUXsg%2B3wjmEZ3dotHFh2A1arcLrY5vbK0JgMNcF2a3irYFRTP3F0grBVVBBHa2ar4DHSDTgcVsWcbyh3Vd7cK1fgrrh85hZuggbY&X-Amz-Signature=204c3ba5bd49f93564cc3fe357014991c01f9370416dd552af2b7f1794b9290f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZVYQFKZ%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIE6gDcQ93pZLUdp3v7%2FF7kZY1N465aic1LSQYlQKK%2BD7AiEAzlWu9A%2BiqyZ0wese1ZskPRhKlYC9E6AOhA91yuEkPmgqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvGylHYrZmQ1l6PSircAwAlKZKd6CAcOJ3uWd%2FuW79VRA0RibWv0EDrrDEVBN61u5lmKGAwusfazxJnEFpa%2BfkGHF%2FBAiS8tv5Til2RBhTzWLJh8D8GqcPx0HS8PtPJ3klbcvCbgNiMFpyepP06lIfI0lHjdzjPBDIwlLGfr6AANwDZbuRrD2D4QJexqKkbHsvR%2BCZLMEJ6TfwSnC1tkwOFUdEotBYGgriXA7hnnVXjYuB9Tba9vZfuGKZzs6ea%2FUJHNTOK%2FGCVLqCE1dN5Hh%2B8qBG1rxxX8CHBFvVQXSslYmrl2BrnAWAnwMNKX9B5ItD2j3aksZeEWXDRllBwEshSy09keP%2FdGmiuBLZqZptKlTJYhhQnbn5BeFg2k%2F8o8rhvf60LDcS74PMOFNYCqbZzVHDRubuY73HFBRMdkDFobbTFhv9CYmPUuQo3sT3%2FFkA42n6q%2F2Pr1BZ3TXKakca4R8jGHSwkOZN5mhN7yboyyaOOIWODOQ1fNH4HLX2fDjzXafyE3%2Fte69wClmE1MslTi0%2BSsGC73iik8idDEuvSYJs9s0fhFOgSVwk4aE7fQqheZtpmqeoBZubA8Pv8ALqZyjQxO5Q2N8wQP%2BO1mAkTRomY3P5g60Mo6u0RjswWBjnJb8Ld5Byz3BkHMOXE28QGOqUBEINvZoHqYMrEUO8TM1fwAfd3zpOCr63AuMSSqdpVmrbgJAIE8FBKY6Zea0Am38J3miv9kJuNzCEyiW9ucp%2Bgn7GyTWbDQCqNrBNXvS3NlDXDJRCXK9g4L7RftFtu7iDibHc3l8TjUiJ1%2Fc0Y6DYeGZsyUwv9y%2BRtxziIR7aSOW5Y8dyHtaRB%2FBTiKQ%2B2%2B%2BxtN634TAI4BmuOOe4FKFx7eJclveoh&X-Amz-Signature=b1db43fd40aa47b7d593ca448b456831406bf4732522c90207e0f0ed8d3e434a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=51aa5d7800fa59c359e0a0c07e8cd6fc5ca783f8fd852752305d83b57fc2b095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=3798401bec1b32114c9b8865d4d27de3c98c83f265a2c169aedc003aff31e0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=a4567ca1f433fcb391989a0dab04ed865e50cadac5cd13af626d47b9fd273302&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=b3df1a099c95461d8f880961f0f2ad52c3caaec3ab8777074250af71bfdc1a63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=f026b6417742f3144787ecbb204deeab7b7702cd863c76256c271be193c4b666&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=fc245a3c6005670fd72f476f457bc18b8ec3895f5a800081caae5bf457227e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=283b02bdb4fcbe891436b7efad6705e3ca98b680c0ca66f09feb72b017fed3ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=89d4ee3ef14b6f5943fb1bf89719489b73709a5ccc8cb269611f5b6a3e4f45fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBNWZV3B%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQC4%2FrgXZPX1u7ybSpn%2B7LISEhPpK6kN2E2KSITF3fvligIhAJaPI2KKoAPtU63Ry%2BCOBv8EDudbAUVcl%2BcaQadKG%2Bu0KogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySHtbZH28IT%2FJhgKUq3AOqWhOsyDcJ1LydpW%2FXdplfoQCHN1EHoq2YaFr8isQHwXuFIz8jwfdE90n2DfoHtRMXqQtKNk%2BjoTTsi%2F%2BCfzVsRcY1e0ys6o0No5DaJDyQPar3jnkbB2ULu3jubl1NHQxC%2FVlbxtHmqkEM1QRfzOBrWCOqH6Mho6XxkzD1jQoxnm%2B6TVuFRUYi2Rx1C8c6WOb%2FFT2nx7JqgGG5RcaSvwvuhhZAH40PZvDuLSBvazkG85nX%2BJalbbs9vQojpJ1pTeL5%2FhK6bjUvev7E%2FRasNZg%2FkORnfAI6ae%2BehEGJxvYF9oxel1qQ4vp%2BHCrC6eIsGCISktIVBfClsgyFBMTXOf4nYN4BO56kiVsqf%2FT9nWSU3SnOsAwR%2BOX5H4%2BS6Omf97wSK6JOcg5FO3mgaa4iqUE6qEzVP8%2FM50DPIqSSJeH2ZMpm7ez1%2BjvMHqy2Wajn92RDI%2BFkkgoHUsn8FbQypYGumLWEVRkRKzH0sqO2rNYaD1ag1nsfgf5N648PPwTnMQXybfj0y7L77rKzio00xhxJSgvWt1NVXpe1kGKCe22fU7BfUiaA3mtUGukDc6NT8QXKk47fkTC%2B62eqythYSJLi9bzj9KBMN0SofdYPs0w2U6G8NnU0drc3PPdlOjCUxdvEBjqkAVFnTa1itD%2BGODylJe85DYlyph8BuELKsETJgVgHEXAVAZbwnL6xeueAZzcjXGAqmc3mXybmfuz7iF%2Bfnrbjsw4aA8IDWKzDSKW23Iq7pjma5nQzJRIY1aMT1x531Q4ZN%2BZVKCvdHp3KYgIinq3r0H8tUoNoXNdqe9H3Xo%2BoiKxA6Fe261Ahcnwz%2F%2BWNN8ojSlTgaIR9w2lMDP%2FcvzQfb9kyv5F9&X-Amz-Signature=76be50bd6eff5a0a0ce44995b79a0ded30a6ce20fc9c02850618435d8f74bc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
