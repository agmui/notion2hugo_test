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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=80c67528cebe81a982cc1bc1c8b1186b08700ed033cf2a959389d5fa48773368&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=2e2ee1341ce03177947635488053040877223ad5d913bf4de1ad20821c48ac41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=6083f3bf0316845473f6e65fc4efd0d09b2d94ce980613e5c7c42f76af86566a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=52c9eb7bbe1a0b644b67702da1f178c93919c339e8b4c84618c33d287e506e2d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=30adbfa4c39bc90412e10d08e77ad56edd178f6df81e54d1104da5b1f2e0bb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=85dee0c621b1869dbdf206b746101f750b3544f2adf39aec2fac4bf6321a9d3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=1ac76fa6e03db4eeb7c8591e364414f67690653d5450a9d37f8891f7699c3ef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=07da46b6cbe10458386982903a5642c4c4b1bd71c7d35c87db8ca26c9454a672&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=391b932fea9ceb7e701ad64e959cbf29b1985695babfee5f911423fe382a8d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YABOL5NY%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIDZ3JbkinxBUltzU83jsAXN2Hu04kxH1Tiyt7gXGedq%2BAiEAoCJR4dR3%2FnxJYBq%2FJWS7sWc5dHj8mGGgQozoTZpVaXwq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGqI%2Fka7VIYSBoLKpSrcA06kEWay2FO1O9PLA6pDRNmKARt5gd%2FNaUCv7MP1Qkmpvjz2KXsNdkQbk8m4%2BkZZ9uCrIZf9f%2BJtOXWOMvT6bO%2FIxPYWI7BJA4H%2Bp0zpFrZQZFpzqjDxVZymnk%2FPZqvq8KNxt5zGnybHgTt8ojDB3%2FKkLKdxKMGa9ZfcA7lYVWkqGgtMT2TZx4d%2Blsqw42gpvf4M69VTviEhCzZDuDr7vFKb1Ynb%2B6cOa1j5ru7CbtCHE6ITQGtC5%2FVr%2Fx7jZX560EQKS7ky2ujpBfXHwX8LFWWHI0fhd45qo%2BKcaSx0OIWyj%2BdwWlwqYmwWB4sFGFmWw9Et2h0adzB4rgCQrsBAvX2nvC9jH3mdHwCGXkw%2BflW77iF5lvFeDSib5B%2B5blhVzsDmK1uijsq9C8OfpGJWa3tyhpgJOvw5Jj8M9t%2FQN%2B85%2FFLDSB%2FSopqU0pOvNeWcYF1BMQfLh7zfcUtmC%2F80dpJ3LQZ6x8AvzVueUGCdsHibLc37SIilh7oKzXvvsExfAtc8CiGgggFQbDZEyFUKyDlWAKBfNcHaiSKoVsKVYLzN9WS7K8GCweTdsQNtn00b0R%2BDhwlpLw0mOKM9z%2BOgV4IfiudZ3h5FNN4Ukx55cTn35aPQjivQmpMFLfveMP3ikcQGOqUBIbtAuB7kb0izhwH5YhLkUNHIRvxEPW%2B8We4mb1ZQ%2BQiLwA6U3hO06ayMYx%2FdBb9Y96M4oxeyfbw3aBH%2FklIEtazmDKmxyYHmqAGbS13X6b0MFiPmrj0r9FQK2ZJHoqCRzRJpSkY%2FbxhjNhVtf9mdGO7MdhjlujGNe3S%2Fr3dUiL4ihIJr1o1fJ5RJmmwWOZdjndLGw01PDrXW5Ox8FiCFXuarrFbt&X-Amz-Signature=c2f70f3592f3104f60eac7f7e80d5d176855924fe63172d88b9059e0f200b003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZNJQTDH5%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCdykJ%2FOMcrB3T9Q1VaK8l7SDk0H0McoPEpYNnojIkFfgIgJBpAvfofSLjc%2FSJUBlKM8x6RDbfdpjEXWLeMAVoYC3gq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDP3tZ3viv%2F0UchyK%2FCrcA8223L6or3m%2BUo8Zt1tIuTmPOKVXjcwFIV3Z%2BZG%2BlLJ0oEtkpggIXAn5eDcVj5eM9MSAcqnntppSGepXktA%2FKryixc1gt1WhDzzBaRsweguc1%2BLnmpGWWJFVjMgbfitPaSbtphHnt81yRU4xhJ9aUhBnM2HV6ja0xRyEJYfFEB7jhoWkscfUt%2BbyDl74hgOKmjfs1Mq3AGLz3IIRBkp%2FDiHuNffecnwsA9XMKEzEPhDp%2BcajP5mgjGXbEAs4yt%2BM6u2%2FSdK6fhXKngwplXd1rkpRK2oUPWde%2F7ZZ2PPxkXcVUsVFrfYLvZUv3d2is%2B%2FeNookX6j9wP%2FQZsgwVEhAcsLvWdu0rDCbTBSuxOKEfkLi3kGXcbLOdhfC28cOKeautHN%2BdjRtSvWhltmu7Icso4vJDXp7igodZGyb5A9ftqdhvm7XU1XAvqeMTlJBJFAsCz27qVZNC2hgzzIcFYK3PEPg%2BZeWOj7%2F41lq7OtNdQaRJQzuDeB2ItoSaKOmQBuU%2BUn9LYHD8XOIJASGetfqGE%2FIR%2F8q9KsE7QGu9w28Rz9RtR55%2F26CeCri3nBfT44xAiV2u29T30Ig0XUWWE9qOS1UzBcNL7cR9mxCyLDiBj8bQe3QPY%2BcnPqkafhaMNPikcQGOqUBu22rmVAct5vlQ%2FI5clDqjuxCW%2BwQNGghWJyZJ3eMhnEBA2pJCbEQU43ZJK1z%2FsuoHvFtGsez65ZIIitbULFj8UTJ9FccD0t6c3h7VaQZ3dC5VEXPce9ZuYMkE2Y61VaiGSkDyA08CJhtxrQ3lOX8wzpW%2BqRqtoRqrTUD86tAPxScT7Pow6iuzvKupOF0enMwIf4qxjNX1IHOgsKLaCo3KHUe4p4j&X-Amz-Signature=b5e3e61da124bba4fd7595f6d59801ec20eb0913dae660fca6782be7471cef86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=a049b3b5aec932b8daadb7d8a944c92f62337c338d33706b748f3c7c5651f9ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=bf995d47e63ec2af0470e705219197f20991b1ff2d7d7b3f1e56a2c08b38a203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=9da9df28a5639e65e596ab603b70af0b7c17aa0782f019f01c5af78e2d419342&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=cae1a20ead4f0169535bdd3f8e07df4e40a824c244d3f82563dc00b024af3c0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=548b3b2d3f5d36ed61a9c983674c0bf2f46b4d0388e579d2cca7edfa0680cf87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=faebe9f2bb768a4941b939aef91d4f4611e6cd5891c493e8e9f31d893af62c4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JTCV4YF%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T071033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIQCc1QROG9SUD9LNE6TzdKZ%2F2slMi7rJkAS8H0ZuLxp4bAIgViaxxPdIhsPL2MngQE6DPyH7xiO7NlYvSvWISrNj8%2BQq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDIZzcALQnP49Eg0kzSrcA7zZ47zaxI6pXaQjd5Di%2B%2Bm8co4f2OWQ%2FKQiXeie3K9OAkRm2fMIqzXjr%2F5mO4lpyNo3t7Zoz7%2FpSRcr80EGEHHXh3VcBCxHiS%2FJU36GdkPZi6dbGOR2oQ697XQfJEgMhTv8r%2BylAxY%2FfkIoBMC6zv1iUIxTJBhxYBgKr2ZGA%2F4%2Bdy3%2FPspq1E0WkFR60hdvRejgAmGHuUZxM5GP1HJOR5X4J45KDSMemSZCKRD8W6lX9XRrC0Bymr%2B5%2FqCdCjZnoQThjr7BHllErjIJM2w74kZA557UlRytSQGgLi61IWsyu%2BTTeoqz4YgeG69QsvfeFJtHG4L5PphxgVrL1os048BJOu9%2BPDZqq6Wm0ZC3UAlR%2Bp%2Byy0Byqr1Bjj6UOndNmz%2FGnuFE0vGhcm0RjJxSB2iLJx90us%2FdHcHbIAl9jM3P6RArOVVBOrTItVtuqh3zoyzDFj4UHozGX8yjxSkmMTaQU5AS0AEYufzmfsH%2F2lT4D%2BBQ42N5u%2FQUJ95wd%2Feybw%2B4%2FJ7dDweWhim6shpFi0kVfm1CbgjYm%2F%2FohTJwk8up%2FoXFEcdNVxr9OrsQMIrxw6ZxhYJHHOQlMlvXejW5MuQKoVETCDRTzjK3uxfg0Mxc31xCU74zO%2BSv0WPeMP7ikcQGOqUB6by257ndH8VcHY3COdblBQ%2FXvs0egXOcmXooEtI4Mpljrb92%2FghazxKkrnhds%2BapMhxknnBBdMsWdh1zd18fSKrgKh4%2FqQ%2Fmvcuqg1uldA0A%2BHiJA6g6rFCsm1VVZtEFVJav83sqUtC%2BnKE964OygyXp5VjnxqwO8wgKJ6bpsSbAZrryhzLrEuLp9gy40jvUIWbRd6nZ8thdXDYaBxTJRh%2FahY%2B3&X-Amz-Signature=861d8b682252770f77f1bf46281360bebe95adbbf1506f292dbb944b00f61d29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
