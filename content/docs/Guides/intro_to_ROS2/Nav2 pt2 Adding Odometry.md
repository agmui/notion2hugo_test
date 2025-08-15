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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=fa50fb6159c3a1edb61676f96a5cb5f56924ecc8bd7e83c2b3f0604969444ea5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=3c5da2e02b18bf96a0c5ec2b17086b074442e0de81bbf8e5589acec0e3f0468e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=3ebb69cd116867b9fa8231ee2ab742a08f432c8c38d406d08ec6e5f056898217&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=a741997ad0ec27cb0a8a531701158318c501e7bde4fb8e2a3bd5bb52ef676301&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=c0e1232bdb7b56b8a14324dbbbfb9ff30415ef94ffdeaf79fd7cabfc8575103c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=74bb36a5d0687a12462a0ed017ddb12f5018655f60cdc5567999d54ff3723c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=598056a2404631fea21a948f5f90deb6363fdaa968fe8b49ec5fd7cad34ff6ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=c3625aad3e775c764bf2b5f758227e4fa1418ccc6b2d7ac96617d46bfb1c7f4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=84dab5bdee8b79488734a0881a665e3063ec51a285a113d1f0f972a80c1ea647&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BIRGQ3E%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091043Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIG792wp%2BnEw5GnTqS%2FRPHi4FCZLxz%2FmTYsSubg09rPwAAiBHpOhNoq31X2t5p0GdwOV6j5AhJqcIuJ1mJRyA1Nfc%2Fyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMWd11bjIOyuoRjPD7KtwDBuLlw2mE5iyMc%2BqQDu8d%2BsvpGNWW9tNVxXYl2%2Fesx%2Bk34GzHGqKtUtwBlDlNXX1uyvVU9TpoAQW6pwUvy71%2BLTM7UvDh1FbeSK7lwoR7farEtquVJD9Sd7WQZRnAmEQwDCT2WFoqIGDksGCWcJZdwyM%2FfxdbVBqtzgGl5wPjMdAp8du2HvjarZfFscqEd5WqkhAjdxaNCG%2BwQOkU1CdHfkmZuiz5n%2FwV9NiJPXjodlRQNMMBloFjHm62OKVLHW5qQZwoMoshHwC93tywlW9%2F28kibUyzZDwyHf3myFEgkcxR5Qs3AOPBSZBOqvp7g925u8NFYyXvGOQLlgKPKdfG8LxVJiMBpBPoI8R1eTwVhnRtSabEMhr50DqcuwUXQ64nQ99YTJlgSGNpARvhIo7phKYccgMkE87oZZVg8q4MzMAhKG0NpuNqqOdUXyo4s7j2r167iWUUgOmcrhL4o6FrLhbj2ZH8kgMiqjMuJZXOgY0bADQ6awL59FW5dXA6pr7VmyGCc%2FOR%2FCaKWSNKb4ZUsGcpoXIPerliz8L4fHje%2FSsocQL1PtJIx1FD7eOEs6ad2TbV%2BRd1sYApMM2AI2rcWKqWt9buH99q1JoPkFFfFNyz77diGDlybPUL%2BRcw9O37xAY6pgHKRQ8If1ahMfWCYtimNYu9ZNgoxhs8fsnMHZN%2F0XG%2ByCra31XkHOXtMU3y6xtU4%2FEWTzIKxfF3ghySiZLGNhF%2Bguls2Lep%2F3D7nD3%2BGBQycU9YUERD2J9lfbffepr2andlPLbb9PnWQxqDglxN9caawKs6GI4Eiy7zZTRMmEUtGpWUwaAoMsgjdJOPoO2QhTn1rHRTUHnGPZlUPQiUX8V8eUqAN4fP&X-Amz-Signature=619df50e60a90f1c0072f0753edb9a65e9ff20d517a2977cf18930782d8cb393&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHEH4XE%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIBMm5vWRLSxwVk2DEDt22QC6SmnB%2FNPv4U1IXo3purMgAiBBCAeWcfMVe62gVNBnrbBb4ftMe52sZmbLlGahsUav3Cr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMZxXEs2%2F5aElAU9CnKtwDAASZv5obbTF1wcBuD37RJEE3uRO9vLrW3thK7pBYNW9%2FGJgU5ku0lUo2kTZsXUY6ZQmvaELVOEmAxOjxdRgKHkfaHvGfqjLPrdgC1XJFTXFP%2FiOm6UcoiOS7TsFqm3KJwjXsFnSydT6nuYtb1L7EHkdOqXAhtKkBoiI3Ij2T6RJAcuKit2XYSXcAEg3BGqDglf8tkTQIDjMnpkFer0KG7GYmpHj%2BO%2BcHs9H%2BNH0Pvsn9%2BHzcYND7NEVvbiLe0y1ov4PoqBtFIJsbZsaL1%2BCDL5wGUDy1QiXtskdm%2FtzF3tIjpeukSy%2FtjwJGrvn2G9qE5RR8VapuTJO1CC7UeexAQHjveDvSlsnpVNPtHUSK3j3niWTC9YMDD6FruiSVw2dqfsmqR3caDlaD3nEe71PUIFt2LXhmF4dFWJO0Xk%2FDue4dcsnGbTvR9wv0tGgo7vUAZAb%2FWB%2F%2FLvUcFIQPjHwn1YKu2NX4lkO5hkZK9I%2B5cvU2zyH%2FQm7o%2FQNd28s0Su47Mvx%2FPEMRg2ngRDZ5WXcHsi63ZUwvn%2Bahtn2BdDUki3N8OPnFNoXcySSPPpz3OcXnB3a3uOrAjidLTOixG9tpkcu1KJVMqEI9yMgQUt6q2orSBzkZ4QYoxf69vWowm%2B%2F7xAY6pgGoB4LyS3qFoXdChgnyhvDQwA9HHmEtTG11DFrv4u6UqrETzIjBs93NNe3ShkRU3aXFoNLA4ViOgTbw1v6g2EFRSUuYbyV7K83eqcHynEnT1lyIX3%2Bjs%2BP8FDNFNhoBzYNbKlVnutDLNRGRC89CyvEQOOn3J%2FHnBTbx3UTIcibx4IMZ5cbWGYzbTEaDqMxEsN48o4z%2B%2FQP73ExQEaW505iKnPHweuUU&X-Amz-Signature=b37ff110175f386bac547b9a3ce268f3b2a8a4d62b2a1399a25f8573b21c2600&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=1e772a8e82668b1a75417ca031afd6217ddf8ab195283c3cca73f076c83f95fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=d818630567740148df70e033ded16457196a7a50be40412916ee3c2efa68bb65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=81e77d9c5a4fa993b72328e627906938348f96b07a4345198698a65d9ceca461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=e39a1e7f024428d1f94e820016f547c4d40b8af81533f4b5bd17739d0e8ae9da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=f40bd2ef2b2652ec0c9c0701a8188f5828cccb232957800919cdeda89ca0c373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=416a4dd8e9851c874206d6b92a871667943a7ee610cacfe3ee94b8b2df3d8d42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=4e887bdf463d40e27b5b9a11ae52d3666b3859d1f7f803cc09dc8dd718c5d0a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=eb2585febc35af6d022e8a48a05fe57fd43a2f72d5b3e699462da3692e5a9bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQOACBKC%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T091044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIFvaekkbjo5jMpJp9xvCU5ZAZrtsrPCmwmV1otXLq6bqAiAiMBhhYOO%2FvXT3E82hIidQd1m83ZLqGSBaAlGMrXSZWSr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIM%2BuIA6JqEF%2B%2BMaP5dKtwDnx3mUEAtDmnKF5RHNqtkwIdE9OW68b4XIduPHBkYn7fiiIr08fQ5tfCbgVuVfyDlRyZL0z2t4mAS887QAWeXUARxAfqckre2aAhLouJhLiEQYkzEffPLinQpqdkvpSvAsI1PHfChcVwK469aWM79TMjSl%2BS4fTLJTnPN8QkwNLWB6%2F4mmvQXHLkyFYEWEARCG8TWbL7WHNnGCVi5wDo6IMR8U%2FUFH5YyInLEBrgP9XDHiUcBdYHSYScmELVGdaD0uvrtWeKOMgESbJVhQPkLWVxECzwmmPPf9icru11XanMNdhJYkjZo3w%2FlEnaNkFgLvgEJwykCUTUWZ6XRuGyvnD%2BPSuBDUptVWsBszd6EkjeJwdwbzZcZaJ8m3b0IVQfzWOljkjJf4VP1qs7TRKdxU05rDoB5FCQ0Ew%2BOgQytrrFHVYodkFdEqPjzUXMOvwbKhf%2Bkv1umKW24A%2BrkAo8014tTVQ%2BDrwQQSNR3XAC4gFyfeOrm8LAL312WbEA2Igm33CfyNAbrIzayd1e7i75OhWVvheBEesQawHXoypvqvUrf7dx4lWIVWYVNjKcsQ0qHxYkgNRXh6HLQUDRnSR0kIy2W%2FVNVN3CB7AXQjLe6GHyNWf72psCV5OzvUDowp%2B%2F7xAY6pgHn9fMkmA5GByWrRJyOpEneJbYXFrMF%2FNBkuJf8KM71XZ%2B23mQofMpOrgfSTf1UotvI0ULPsopaNoD6osy7i2ByYXN05ilczy5lt%2B%2B0EOx9a0vlZTp9ltWYIOKJQtQzzVJ8hi%2F0Hsim%2BMhtt5CZ%2FrfsZEFhQJMNteWz2%2FBYiPd40lTacASuV8cyTvpH9gDoM%2FY%2FZ8gnEhtZ3f66Q5oF6U0IVE4pMQLb&X-Amz-Signature=b4b1fd8a8d82153783524ac0f1366ea0623150d1ffbbe2450c8df8b285ba0fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
