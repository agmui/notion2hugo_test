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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=b4f169ca8d51c559b867eb4aab08f0cc5196bfcb38efecdb5d953d0b8f9b74d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=e490a558f43908bb8ab62b6905f109022d1cf57dfeca0fa19a031fcd916cd3b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=3a5c423b7ab7bd9dec516bcd61acbf5eca9dcb8ee2f65f3b805a3e44820345b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=30deb36c6fc8b61a42ba0556855ceb1d8154c77e8f4ba7d39eace8688aa29e63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=736028fd27272da66d8710300031936439b22ab8f7b5680e6194d3cb30c2a037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=56e1e701701e6021053f27832f7f58fe20133ac1d5c1eb407ad8fe447ba86438&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=34236c6f97e7a2cc55bc22b25a673d4faf3bf65b367d635ef6597408d0ac7fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=6a46f6960ebdfab3b774aff64955f7c022a0f1c42c994466879a30a0f8d3a2d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=7da912ef968d161c02f24a28f9b8b2052887f997456fe5de2090869e0fc9dac2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J4SSLSV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCIQYlvGJLXmL7ZTbE4gv1gF%2BZcm6VTb5L9%2FEW8U5GgCQIgJYHtc520bZfJN3LzvvSF3s1G01BmZduIN%2FIvzBH51QQq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDP3ZHiR3gp6LJfnVbyrcAxiP3JwigfH0t4YHL8RLdjHRTQDBTaoeE0RjG9V%2B9drimUNVIEKXzliuiExBn2NS8omUbV%2BkJEsCXozeE5SNBTsjGvW7t%2FXbk5S3rNN0F1VrwqTFDGhU92PyfA9ZrWfwFETXGMt1lFDXRa2aJvky4ErQlNQQlkJW4%2BB65keQH0uD7PhwjMBh7Bu4XiSEVGHTLox4YPmXUCCcGtN7QrlMMHzcy3oCRZiPsIdR5K4tiQoCgBgLUkVbVCsV26NR659sAdovAReL7mgvhhZPlykcEVdJ3JULYbkJmSgBy%2B3KtJzfvTg%2BG3PgcuOiNdidAYI9gd3Z5kbojfEFvbZtqaBr9PtwrFmsf2ZTH%2B%2Bj44H3QgErkoBz22mrhSlQlBHKascOXLhO5VdGtqZN5rUOml2xHiAI%2BhkUPTeYzt0Dqf5W2nNaMIFtXcrt%2BlrjxZW99A7AvkZUdc1PFgnP52aqOqe8sKC%2BCMY8iMTP5jXSHPtssxfnTp4gNXLCNU6yLxQyPWqoErrQWcMnM6OvdUfh2pm4WMpyJ%2Bd0UTUugk22SON4B8Qw5s6CqKXXw11TeqtR5lbjCQnOBDZ6rOxsjTLU7yioLMMfRcrhPtJuUubXR%2F6NqLKJijrXsh3QPWtQyr6dMKK8jcQGOqUBuLJj9l2xmM%2FG81jTGlV%2BefCEI2%2FsTE5u7RHcvGOayqblbACwG5UeNsHqWfjpes957jkWoRjjh8uDGNZa3Jirr6b%2FyOYYCvSN7Yz53NnZiZ0y0Y2AeENXnKwayL%2FoPNln5qzBn9A2wE%2FK19vuVV57sCvVTWmy8oNg8E%2FJeddk6quvdKSaSZyE980N629tUONk%2BH8OvTp85JnFPTfyE67RjzmcyP3v&X-Amz-Signature=f6ad89b92587c35c59c9b7269cffb5315a7f190bfe402b6c263472c65f587104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HNMGGGF%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIF%2B0c77oZJfCnE6frJpgL7ZqBptBSonrl0ELhL3xP%2BncAiEAi30CT4jGRAiNDKgC9cMHk1T13B40VKB8P5PMA5J1FAYq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDLSor5LDIc4EbxjeYyrcA79rfSkNfjyLtgIutMm%2F0Jt0fx%2Fennl34YQqwJKmnNHIoEb2PtWZ7g%2FA8vWIk41bDKIzVvmKjzFIRsGlwjmDaIPGM%2FzOxA0XTSvBY7%2BDmSyH5H0qbB47oGk%2BnO6lVLuS%2F2oEvVWGAinw%2FB3YJbYZC4JIB8Ooqvi4%2Bs6krvCORn%2FcTxEtIjWNLeVlPT7k1DLSnENESHI%2Bh%2FbBBr2szHKsYBN3Vey9GLYU4Bxm7ql0IxI8DU7Z%2BSQBLhzLJu9rkY7tUEDmLMcs1NB6nMcD4bmNv5tsMyhOSvRgkX6OqJFez0Kr%2BJi%2BNnTEQol%2BZi1tHaCT%2F%2FDNaidSeX7kdcIjUUvBaN4bfKepiznPXrZdon%2BfeLr401q943q6Dtg4FdIijTy5J1YsNExxP846v3MY50E27Yr4okXgTipkZwapoKzFoWBeAHp1kpKeKeabZsmcEdnYwyX%2FqjNHF2cgzAC%2BsMk2KF252yUKh9ZBIWbxnBdQm7CwvZyl6fZd5kGJZ2DIePe2UocmpsBTOdizgB9yDXa2O8fQAp3SnvqLYaGduq2CsZMZcRgePC0Iqx40IlVLdECKxHi3qUu75%2F7eGXpcVePDXk0XIotF%2FuP%2BJzzpEb4Iq%2FpeVJo6zIhHRvihteLtMNy8jcQGOqUBpt%2FjltMXrcnNTioibcgD9ZeWXedUY6ypp7Y0Jeukmd2HuToD7K135XmP9zccNnYFXlXbAJY2vr8fTEQa2Za3lkwqUdcAAJ3X9N7CIZysi2LiVC6IHTOmbboEJTH9mwOIiNPdAAk753rBRGMe5dake%2FDpFGB8mhv8dVbL0HJlbsGXWjIwZXB26BHj572BgvVJyO6i2TLXdQmOGsKfbpgv4qpdRLoE&X-Amz-Signature=0d794735f75c7f9b7feedb20907a7bfb90049eb3588fe05e4e593477793643f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=49003d8df01251bc0945269b664208b1b879bfc0bbefe6a1c688c8f426778e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=098bbe6ab63567320f3df5e6d0dd03fb39f93e153cb35d12e039edbdbff10dcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=be3716ea7b3d1308cf83b87486a1197a5fcbc1a8db6567cf71eeb7a44ea24f29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=0fc33662c36ff39bceeb9b472ae941a4fbdf595607eefb61495238903f5ed699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=35a0b9789cd4a4b8b02ec9d8973f195e916aa33774cb332933a0adb08fcdd598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=93dab6907590f8c1c74e67634d3f2aa95776091de80c61668f22725219ed3908&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STJEOSU6%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T110850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCfHzr0vCSjzED%2FM5IuM%2B4IIB9G3gtbf2omy7hZQegcpQIhAPdNAcnPfTmqCYj4jxqVZVhUeSXlpRIH3kYLOUhAqrvMKv8DCEQQABoMNjM3NDIzMTgzODA1IgyOx4kCvSUGbLLhzt0q3AM8BMmpqQfnGQw8B0BV3euDSm2oyZLJwnrHjT7uvebxN8iNbV4Yy77ijM2h41CAFV0z6%2BixEgUqw%2F89hEsmpa8L%2F%2BcT%2FPCIU57ki0kAfGkTLdIaaYVEQ7oEzRa9ra5F8jWrnJt%2F2d9aE2OhDh1EGoHKyztOmMOA8orWiJPajqajQuFBEl0GrIOLrX%2FA5JZSi4UfvZonn7PkDtJzzaAAqFXUAw32BRQf0EBiiELkbqPc%2F%2FP2SPMaVhzdFWVLvpqYD4PxBM1%2BQ1%2Fn963b2dPZIFEZuUusDWUWWDpn%2FxhXgENDf2INQJviJgobPHK0D%2BcOGSNZALvUv0HHuwSA2d1tMtoWG4EAPl0irlaXB1BhG8d4TAOZ996juxRQLbIWqYlQ6qPfBIv6UhiB2pZvB6u%2FN8FfvjeGzMuNQUuLZIf4oX%2FMLt2ttsTIBmT0v3bGKlTRGZ0OB42Rf3bTSuy0qyHO4EuZfCKm%2B1%2FI2bL3hBocIfZcWyPl3V3JM44Y22pQaCY8HiMasOiScPsAFPcyO9BF9%2BWvCtKXU%2BqWbYlSMOO%2FcrgQVSnDgo2nOtCjS58pbAOFp%2Fbdaq5ixwTG4IUMAK7HTOj%2FVg1ZYaUNsSU%2FCce7t6WDiD3OUe9Ieo%2FVw5fTCjD4vI3EBjqkAbw6szx7EXFj30DHgzB9NLYXrQbIN%2FFPJKG2d6APNIV4ZDmyAIUZDU0lndz1SbN5Mjf%2BPBpSIB2zDdpYGB%2FlwRcfVI%2FLS4mUgrIsmQyw5JoVOPvZIxcS7cYN%2FcmYBAIGG%2FfxC5c0y%2F5jul2gcSST705oyMgmGt8W%2BLlwgc0CS4ORURSuMGEp8aiZNcdESr9lQzwD6AyfrkVz1FarUIIfCNoORS0X&X-Amz-Signature=b14cb2299e54bc26e5b448f451fa7557da0b81c5c38f7ddee134985f6233501f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
