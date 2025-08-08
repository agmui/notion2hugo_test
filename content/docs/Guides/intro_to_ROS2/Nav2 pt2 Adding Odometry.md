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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=217739d9147a4559b6d95a7b04c0264542296d34c304821fd5cc55d0b3d2645b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=ad2b8640712854750d7c4ab46fd8e3f4d14d4d8c42e4caac06a1b28b2ddf545f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=aeee7c00ea5319ba81f0bd5b6de6c02412518f143988d36448facafa4a797b10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=401926411d59bba0a65da6dd594583f204178b384b3145098307f023890a5ad7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=5de8de71f2067e98373de9ae5150a585fa463e40356b940969db1cef729d064f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=500a985fee89d10b3ca0c0568685a1de265984c99ec55d4c89ee0065f371b87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=45a7ad0c678c1a4799dcb52cb1e67d5a967bbc5cd3b414779d57a6c2b240e1b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=8e95824e9c62db688dc42420f5bf4688cf7107ccff4cb1987881bcc77f85d107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=d44ea55d93e35ed44b5e63ebc919a1cf82ad0bc88995c464b654e80197f509a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643RRV2QK%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071631Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCU3%2FT3KpmvMhbvjanmzxv6gIwjrPUXv8W0awnVrr79YQIgekxE7eFjN0Isp2DJhteRTYExo4H0YvS0cunIIxFrtGIqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO6J1LWVQtf%2FzADVOCrcA2KXghII9ZDWseC8o0gz%2FCUDcmX1tS87UeAAN3XpTKBM1%2BpfGVqOv0ZLaCEbK4VBnX%2BeE5679bwEx920XGewCP6On3iIiFz%2FGcW06xCAl0e82eAbIfpr0kxAmLbZerwTjHSKSIEztEFDbOMlAOYJend7nuBv8EiDrWVlbqEcH88eYHLZRe5ugxq%2BYRyniJe3NBEhBHHj2ZpA83WpBEL5qLylq%2BXY9Jvarku46p1m5aOoc0Wkz2%2FI8%2BHUFqTxMEceTAuzh6lIDYpIi20ugc9K6VSQ6Zdz3digVxhUQh46IxfAvU34NWLiOVV6Y4vHBhFG%2FhPiauiJ0wiVzvzNil16M1OWxJV6IesiKFW1vwX%2FBbxYbdxcd1QbYLwxwgaWbYl8YA3M8RYcGpPI%2Fu9kStjQk1uPxNutxy1qVJDyGsqrdQUV13cSjuRAKi9NRtPOBDIbdHchZKuoGzR%2FNxWZgbZ9n%2FEsLPyrba6wHUSdLL8Zz1djuf3x8iPh%2FQHA1VAYn3zwrnvFD4QfiqJvODmxN96w5X9Xc46dd3wgt1%2BnOS9htwJ3VStPN%2Fmwlm4dYFMcJfgd%2FB7ujLH9lUFlkcD7fLqcDnhSIo1NvG%2FoCuhVvHV0Qx8LkwfgBultJSwy%2F1sxMKrH1sQGOqUBrZ8cdfGJYHY47ADe0MkvZAvXW4%2BspfbOEquuuXjf5DCdG%2Bu57iwhZQagu1lmH8OtSGpKYWm6uJ0%2Ba16Lr%2FzoUl8ir3dp4pl1G2TDnWCy3x5My%2F%2BCUAoBaHO17FgdurS8OakJ14HA4LhrlvK9sxdI4xlWYtRFKZMFZv8xW7aTYkTkBfukH6YP9hBHHDl1qoIbxISTj%2BPqNKvPxDSJQX5xiYgQWWdL&X-Amz-Signature=744da5d94fa795cf3ce7409e17ee6783673a0bf32c6af935bee3350287630906&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MJRJ6M7%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCAebK1CRztRNbyn%2Fjls5HTyDc0C8dHyrv4n25HuUv%2BmAIgRq7OQvE996TAnRDj8pyPbe7C0vJJslBoN6YEbz5MF6MqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIw8omGJhyFKq3sd7ircA6gOrfqxcvpCDffz3maVKTzs9anQECixr6Bag0LTthYYxqZMWsDLMBeHT%2F8iGy3yTeePZ94Cmv2MmFJ8C6MpdRCyxgoDQx7YHuo5MRN%2BTp9p3VXboA3HcYFaJmw%2FYoBPoxJco%2BUyBgRometRABA2rY3MEBu3iRdZeS2DGx5iC3OcBtlOsfQJm3OBmpPydfrCPeBOuZod4mknvAMNfpXYk8HS72V54jijU19bR%2BpDX5qHitlq0vg%2Fp4aoBxH0yWtwzHrV%2F%2Bk1Z3kNz2FeaO1aYj2jvUtJsl9dA17dJ%2BhlfDxusBqNj221v%2FXEdyazPs2EUgPxNfl9R9Xmz%2Bf7WozcYtf%2FXmTTKmZlBPxEaRV551lkvUs2o7UWWO71Sm3q6FNpj0EIei5%2FRfrLE0Lq%2FeY8tLbf4STUsxISHnr%2F8l2EVWsvkZcROuAKWF4SH8r9qQOUGBOpe2U1kNrwnp6bJWzUl8F2Nfnv%2BI59w9FjP2zPWsfp%2BkvHD8kE23JptaKb%2FYeHJJcJr6xk65284LZgmqbYutdoj7OFxRI%2FfwRKaV3xQUnYGgXDKJU%2BPMuPzHn4ItbESWM9K9EozKFdeGujSF8x548RHbpeURq8OKYWZBHREsAL0txoD35wKL7nFQ%2B0MLnH1sQGOqUBzWZOYsNMoi1kpS9ztjIo%2BfsUcOM9UtzHnFh7OVk2Cj86Hr%2BdXoKz2fAKWqIgXaSzfYfBVerfOEOoTjj9qDyftXgT6Q8lv5EHYucU8Ca%2FX309NQ4F0EiHLGHoc9daKWEGZ6g1zSe64xofqVvGE5fapVW0ghyLa0JH4uTAY0cnryHS3sQMShzt3f5MaAkCCODjMA4JfM3JReEtIUSObDl%2Bl%2BybxNXI&X-Amz-Signature=764656ec44bd4fcbec8314da39a9ac92d84d0d6642a26198e9ea9a545a1d7a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=965768f64334d33aa04cb8fabe1cd6308cab44e95ddad59c3a6e4052290407f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=0aec2ba0bfef8aef0c037788b3d48819cb39e5a2a91592d2d939b9623c6bcc8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=e16866a61a851d30b37988ca994c8a3137dbff2a46090f4784607b579fbd07ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=c9aa3644a5736d4d556ce41b56a697766b13701b682542f27b47680a5fb648fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=a38ace571a6ef766f1c0875f647a5a172961e76c96840f1d46ed70d76b62fdd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=74aae53c7404cf82c6add4f657ed7d3e6465a5baa3273ea52d4face92bfb082f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=24e4ab97dcd9ef025fd217a9b27f4ae9c58881e7c1962eefe1fd6fd4b62e60d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=ee6206801b86b256bd7ab9e15aa5e59b3e352440c7c28b05072857a80eef77a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HLKUJSR%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIEC1e0pgxe9PZyFLWf4tuJ3DDiciZv4IpEThlj4xwLu0AiBwA2ExDgmXbgnxdDZVTR1EJdmKqCh8j4J1kawTRx4DWCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmQvj%2Fmm7QYoq3uAZKtwD2qXmrZMLyKObOnsYyhKlDjZWa4kjSQtzNM5w46MbAxYZdmxn6N019qu10emF3yX%2B0u7a7pf6EMyUsf3DWY5hnU05G2ip2yMcWAbwsmzwy3%2B%2FuyKdaNZ4WJY9ZWgU6nzwHg%2Bll12Gk%2F%2FmP2DGwGqN4P%2BS%2BWCCHIhSzPA4zQHl3iIn4LQk6wlvdO7ol9OKG5s4U1K6x9TwwGlLYSkDA1TvHEkFBFgMG2j6NW6KiqActyR%2F8YqX%2By7UZITx25nySg2HF%2BCYtfH4rjA3Ti7b%2BG9RK4AUAxC86fIwI8cGoF875Cq1kP753R9p1zcmuy8JDK67RHYMB5F1Y7qC4o6X%2Byv1hKz0xuJtfO6ehkQI3igGbK0079yZ8abOdLw1VknqnwzQgJvtMvwIuC3TGVyIgXqsPwJlxR3jGcGfGH49X2fy9R5uipD%2BH0h%2B6hmjt31f8J3uSzdJ3bpuR6LHGVXcZJ6gnOQ3WpxnBjyvNi8sglwqQ0vBZL5CFrFE4NN%2BPI8XNjgmhAGeDaMJUB7XZPeu2kOFC6wvsb1rVHpoRs1J8q2%2FnMZGFH882MIpvNZ8sXi0Um%2BjpnFDvGk1JnYDen%2B%2Fu%2FMpod4BVTuq%2BiYoix07rPflKq5Hp6%2FP8YhLl5rP2Tww2MfWxAY6pgFQjz9prCM17MEqjko0PID%2FfV70Jcr36PSGxGLGeUJE3gRaZalGpY5IZYZ7JD5%2FnLYWZrjuK00zTlFJCzG%2FqVogHRoTtyxd9E7vGo5VO%2FT4sDgShF4CdxEhoYuJcqfMtjTXGYA1cOPi8Osp3srALTvf%2BtN9cgOJdGTPn%2FH0ZP%2Bax4IHDiq8NWHxMAC1nuI6wCJlcOGSwHfGRYsSHq%2B7vuAm9sbcOOZS&X-Amz-Signature=be069b40d48016b32ed6af5e387d451c4e021239983bf7692fb710c72501483d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
