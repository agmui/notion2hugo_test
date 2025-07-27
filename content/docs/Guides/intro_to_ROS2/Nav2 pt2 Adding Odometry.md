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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=5695c83234276d8e2a97efe639917187aa0350f44539d46ada2bd9b4a6b36411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=ab9a20e9f68e53ae4bb3cedd3154a1e43509ae4ba28abb492fe80d00b9f82d4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=d1586a906d268cbfac88faa087c49086d4c5a7c8aa4c851a030fa6872451a8cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=c568411e2b92d60e7fb720b10f1e24826b587a4c2c1bc6621acda00ef020cf43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=f02646a3b58c95fe7a8b6eb70bfa6017e91ecb60a67359292fd7c838aa21e75c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=3c38b03e60092ac6717873144088929cb0ff98c20ba891815fca1ae3829d49e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=1849c81ae3ec208ab46dac7ee119268b59228b44c707a1d144755a2ee20143f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=08d68e86ccf362f34a6f71f1697219dfb94f28f7025217780db2451ee675ad44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=7688009987f790d5b8ce0fc984430172a13f398f43af4d6eceb9865a716e1881&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6O3AHXM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIGdfeMyWD1RqHshlyd8q2hizHnKniEhvQk2Tc24HCz5rAiEAp%2FvDz04zYucXedEXEKZg3jJ%2FXs%2Bxlh0hHC2yTGHfTrIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDDNMpDf%2BGiIpZfyUsCrcAz3iLVtKuL1dLMARjSNgkY5FA59HsnF7jeiqlovOGxuz16Y795OFVCsgvWS1tUVRuo3nkF%2FTbKnrLTYPTIBJOVXV3yZL9fkhFnvpTUK6NOPpASBsrBf09aIYkZwEYUPG1Yh6FOqxKQoSSxY%2BbB8%2B%2FTUULq4epohuj3UcWHY%2B35DpkG38jLklWPoQpwPmiW6m385KHPIkSSFEtdkJOaAJ4VDUSSqQB1JvvwkaynDPHr0HIIQWAu3KLFL%2BglJo1gHhblk5B0GPnNhlo5LZQEcx2fpYQk3CmLmFecAuVzwmdZUNBwZzTVhTskjOT71lN7BntRw6jBr3o8ZJ4kcKmWD%2FBY4SnHpNFjCb4MNFOn8fkdKKGDfvYxKj%2B5Hx9kGU4dBE023QnOazq0TZIwvrFzeEq3rifYi5P96lXO7dt23pcqFQ9L%2FSgAz5jUAiS%2B3XOxNXx7utT%2BtL52WnMseqiAeQYgYwl%2F751GUooO0H0%2B32Fww5XELVuxAbwEOmeIvaXRqjVWE%2F9yh8fuq3fS2VkCkhMZkZbGaq7aEvWenyNAh3%2BGPDTfFLs3Mc3Gi2ryp80FBVKgJY7g6N6L5CZxhPEpC0s0%2F4s5L%2BwRx9YqYYpG4q835HjidIr0dEMve7GxQmMLGBmcQGOqUB%2Fhu%2BvKKHY5vB%2BekerzCIsp0Hiv007f%2Bw7a8zqOdHnFtmAsv3t5vzfChAUb4cAFXFdTPhgffU9VPjDg%2FfzLE0IwZkISLwjlW44QZTTCqi8QBhfULwazejHkwxbuAaKkniNQWD4zCgWbx9JgsFpe2MgYfWn7EFk%2FpRnVBUUxUL%2B8NkNG2dbSPqzHB3ymZ5DZXTmXToSdeDE%2BELcE%2F5EegxzOCxeXWz&X-Amz-Signature=8ddc09bf8df8a5f02e838ca0d1cd39d273de679ea372044c46cb90f1ccb2486e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SE4JH4R%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDyDEQAnIt8M7i1EzVVAmF7xGuvyFOvMkr3w6im%2Fm8tZAIgH6DCCkgFFhZHb7WHGdnYJvTrWcbT6DGa44mirZPSQE4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDHXzKldJ8KHHAQsguSrcAwyDTszJvColyidF%2FoNnxddCaG%2FST%2Bnh3uXXUCuY12vE%2By6OtYiDBXa5AbJ72TR63dg0F5SEvo78t0rWFPElZUVsIlg0CgDVNTBflT5LtoZZXzDpOTOLGASCkeR1Jb6luFmGcF4TK4bddcV5SA8c%2Bp3V37cbj%2F6enlPOQwLESCeebF0L8RHAmMn%2FmLaXFkYbZQEYB7LSMnBxzmfLuG8VraWL3dTncayPzGi8IbVcxEjPdnDGW8SlKMFfsul0SJMC3ntM4rTxDEyGjis%2BFrlCIh37goNQn6MuSK%2Bklz%2FPuzJ0yf6LQIi5zI4m1bW%2FhxsZbX7jhWbbFa%2BG5HMK9y6VGAEcqKbWkrzUG1EoLtqlsadMBK80CCHUf5BXPFsyTgOaHSkAJJZ9TloN7cRtfFOiaywGi04YdJYx49k2%2BmB1z4Cn4%2FuIoV7HrHVK8uYSZtRDIYGgUhSq3RLByr389qkCqI9ntitOeEo49ssxGxeTyAXyhAnivIyRb4EGGDgIftfftbFcGqcwDt4h%2FxSn1LFRH8L8%2Bi4ZL6MBqDDAok37WylSzAJBkkjNPaR%2Fildw5W%2FUMW9Ct%2Bb3IEJUMcStAv1ZvV%2FMPib48P6HrC822msBH9tk1U3PkBLJZc4LMMq2MNuBmcQGOqUBMWOW36iNrGbKe847o1Pzx0DNnKZLXZMNaox3Ih86FxxI4HO1vx1lQrZdbEkl88h7BWA1dESZuQ8VeJtWhco8hXfXLqcUgEMS3m7BZIHQd%2FPGARoL6NVUIg8OBi03IZjpDRnutk%2BNpvwpwMjTFfeEloz9PGkkKGtPLzWGpXABhiJlPi3FEk9I%2FBwMvWd99u%2FOaxe4T%2BxBPBfQx87QG8tvdmChFkAT&X-Amz-Signature=616d950f94f13361971b1845e45324a5ed2496fbbc7288b1813b1fb3f2e84221&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=212d9dc003ef6c653ca6ccf22d4d3b74564df0b452b7ed17616ae93b2870eac6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=40964b39d68e063234d8d2b9d85578650a3e6a305da9e8b52e58521a3962e349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=37b3e978b36b79b02c963d8df15e9c57653badace79eb5642deb0ae2c4ec7608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=d075ad10576d509ed9b64861217978be7d31255956f8b3c891dd6c1523a5c1f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=c6253497e94d57f77f6e7d893725e8d62b6821d4166e1d91eaf61cf8b502dce6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=dfe5ef41b37eb740fab7de0c1ce0766a80ec58b39a200f2f6d7e915c461ba03b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6HNI2VJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T161017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIH8Tg7kqBR1ngidnSN2XpRgRpHdbnJauUmMqsgNDhwqNAiEAjtRqNPgnumP1rkLsY9v9VwDwoQztj%2BVLMVgbjRRFke4q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCMcorehqC1qlMLHyircA2dA9pxpEeBNDzSq9g1dTC9W0QPxsbB2UlTqKlzMz2%2FPXwEyuGCmmJzljClz4PC%2FdUQF9ccNjqZBWtCKCl%2FRyjO%2BWwLOKq8GSqaw%2B14fYnhwUnr3oe02b9kXnrTHJRBJOtlq4iELMmIwixrVNaeygpup9EBaNDdkytVj6dmVRxgBA%2Bsgy3JN8iaTkbNr2qxPIWEXKM3%2B8usul0zzEati7DUTC%2FeEXorChZu9%2FLe13PM0KD1yS97iVDJEQ4sdfFHlV9VeC0pwbiDmEZfMTUh7%2F8yGYo53IY42ySUDBQVyydVf7Qqs3UCTH5kmWwu4J6u6%2FDLLf5marhOHLawp8GIsMUb1YzSWa74Uace8Zt2Uz66cZntRxp9CaBRFtT5RX6zA%2BaZw%2B1PlKIEHZra3slfpjKkEG%2B5EBxvVT%2FrC180KwgoSQ1Jnl8RI3wuh95SpDq7ssKywZVEYKejTBx6ISZiCkc0VjFJob97CVU9%2FjN0bExocCTeoM5t9HZq5SE8dojJnlAvsYuAJpuF955Rqr9q0fSojjKyToe%2F%2B%2FCiJ0pCaSXej3bp15GTbfUmbAAYKcmmPFR6zu22aGmTg2oWJ9k75M1K%2FgDR8Hw8L1f8SEyyUzY6lueCaHMnPsHtDK%2BHjMM3%2FmMQGOqUBg38RnpxKkEnSwWEPPqET9c9BD71hGMsFq7E8nrsCHpVdu8TwjOZKfm8yltGe7Za4V8cIjTVr03ok2rHvEwgnMxWt0rhm%2Be1PAmp%2Fuhzwcsd8L%2F4L3EC9Ejuiy7GqngFBeOkhNU%2FsnW0SMkS2f4QF2%2FHbjU11C6mFJINt3GZ7GRxejI95GKOLCdfht6JUU3UQjSqArmNJwHI0Baq%2BWIDbqjpU9AqS&X-Amz-Signature=30caac9d3140c7b77da649b400a5c088e69876edbaa958a461ebf0d384874965&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
