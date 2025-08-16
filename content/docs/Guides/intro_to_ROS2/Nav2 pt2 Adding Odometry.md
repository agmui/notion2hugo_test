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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=de2e63a2ab68d6f2d298796b091aa34b50a1b0895083a74d7e7a798ffa6108ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=8e7c2cf67fcd275166f1dfe49e6b4c9f70a4cee3deafc5c190166ce599f4e6ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=8f269186a411b9ecbc000349e34329df6598746a2de724ace233a9fde3173acb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=cd2131c5552c26f4bdf4e7bebc2a22989834d4404e57cae636dc33c444ca97dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=84fc1053cd2648650ca54256fac57250315508683744d9d60187b0d435fda58a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=d63097ca30264463cf57a5e164ec68d0fdbb04b30729133e839e63bff82a03fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=fcc92f26957749dbe3757324856518b970a6b453e8ce80065b9d50483164a534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=00030bd1e0e05d6b415e573accc3d33b35c17ca32359651ff60ea37fd4328de9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=ccddc5863c68b33582378afcaa3681590ab27a0ee12959550ec391ced3d39055&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674BPXEGD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIQDJFmYQjQaxcBx9nE0K%2FrKQqoysqJIKliCUU5l6jyjuKwIgDl5x7nkFsweC6quo3lJvDrZsNUrij6OvW%2FwbqmPdp84q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLby2PNS9ebkmbUVPSrcAy4Q%2BuhwxljIOEEHXZTbz7Z9CRscCBWiPd0XFKMgu0RBzhJzTJmMTdMn1cnVMejLrTr6DB34SCSKSvS7AI8arXOxIlPKbRccCB3gma5NLZCv0mT7uRkQYcDsur6PIjXkFjXv%2BdrRBufgOlZheXTt94ZhSk3%2BzkHVJOeYl4Y9RL48ONVua6NEaZN1vktWlBALTqa0B6jq1Au7McZkhooblljPFShgV4q0F2Z7Kvujd%2F%2FGq6kGSSunxUUH1AJcfHxf61fKL1pwkBjnCXtuORLwaaSs8BJBHZG0kourPQMwlMLQmO7xTTVzHHwFV4FDMYS1vQbWslrMPWe3KRg3N%2B8NRMFofeKKkwonDhWkE73mhR0OoqhPFz3yWlIaUPqLy2V%2BQrrANBOJ9WgSLPYbndiFbWE%2FmzMgx0bJ93XWJ7Ntt4bjDQT6WG4Bq6jmZYyDdaxeYqbvCbih2ztzotUdecZl0me5Vj1bZZNGAp8ieOrp%2Bi1B1mXZjKxIaLuiS11oogZ42xr%2FOMlmXz82yMK7MUm%2Fu36hgzwWMHT2lHJJZOQb7E4eT9HJpges0VKHeXkakUo3CPphh639Z%2BMG3lEmefEKYK3vOsOd3InELUBGUkeHbhsgGZhkC6%2F7xx82MGb4MP73gMUGOqUB8HphUWVlr69akzFCc%2BRLftLfv7zbOOCNCJDGeCAdUrc2%2Fat7TWWiuO0PWFNmDwyR4wVfGkwaw7w%2BNfxcvy8hucW2koicLllUhrY%2BUZEaqvVe64sJwKSSlGINPOE%2FZjAmP8HNjYuC4%2BvOUsdRgqVP7yi6SRx6rjm0Cm3rxNUHftqIZv0PGOHjecYzA%2FDh9Dr%2B6W98gLLLPQ2IhbTTEOhxWrrYroSg&X-Amz-Signature=0f0c310ef0e26db01f78429191a7cf0d763a0a8ce7394f618347f09539d8d95f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMSMITH3%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIEkcObf1hr%2FvYIv7rRU1pC3ErTPfu47Y89Y9Lp6jjpv5AiBBHgMRK%2FFYhOf6ewaoyPZPL8VTuDJ8z1iNzCdgMbc0aCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM89HAS%2FqGA9RDAeFtKtwD30DNo4TTWf%2F3fiiaNp5ToOcaHHhXsYvnuT5QZdAFbk%2FBieP8HtnPFEJvmDpJEGU5kanK01fANoKtxDIz2cWME5crI4xtDJkI4B2yjgnCZhln%2BRDCWiJfRLEj1EoIGmDA1YvpRCRIAp3pxzibF0wdDifr9D78LpATdIhTym4LHParDU9zqA9aCmZPYdOv6C%2FfhPEHNYUAJQJFhh9I5sjcdrURgq9WUO92di2rKE0B0LWGJtqohYdgpodtb%2FBfyBR3u33SUcB7mYh%2BqOq2bZByzLUbsnkDdAHhDhVKJKq%2BFBQ2DrPb54IEYGfvUZBho1ZfJ00liPLJ%2BqOj9Zt2EQPVtAvcPnmhqkYUKOMec7MV1Bp%2FvcCBa8Hb35tOsS%2BpbXbUC5ZPFRMyxmHpBrBC32f%2Fysrbp8o%2FPH5ksUjyFDFaQrzxNZChDkHMB3UvEnEDnZs%2BCZBfnC6CxQHhsJ4HeiS4P4tonR622ueTx5pI%2F06eM%2BejfwZP32sE06kA%2FQNw3FauFlgiW2CAj4RtPg2md%2FAko6qDlRvlIdXn34x85aRK6t7O6K7BmFqHC5XMYmv2o70tbU9iCbzWmQomJa8GHT9JABnQodRDnEGn43iOD2lmli0Mh061SqQf7IRzWhEwy%2FeAxQY6pgHlZocmE%2FeJyX3GgmorkDh8xUgEjwSqBs0jM7qMFD06QGyFCFgmsmN2qyrY6K7VY7%2BEXMXZwUIiyq5iMt5dgtLcc5expH9lC3p5c3XA4AMlAeiRZLMc0A60ibopUYXF%2BZXUss43das%2BEpgcd0Mbt81pgsrWY3K2w9tf9%2B80%2Fqr6usisLWCo6PHylRM%2By05rixdRrDB7ernKctM9O0CC6rbRm9tLtiz6&X-Amz-Signature=18332f69e908ff2511b2a976da1bfe0ddb63aea753f1e1ed9ef71b9ef6a00995&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=74f47ecc9f48f951ae2e70d71bb22e05c3704f28bf19719b156ebfab1284d711&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=2a9f853f203de866c429a0974fd3896f37902d6647b7609e2264e42727eee0e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=fb594699dc9d91f9736fed42366484f611458edc17bbab104957f9fa296234b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=2fde1096175873434a69f662986b39ea289f279b849096ea38fa3ad956047b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=6a0c98e4fc1dc6bfb71596093a06d4ef4be62e0b2251876fb3e5852ae627bd41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=97fd6669d8487c37b4276d0bcd0e239e665d9fb67f7c983450cec53a8004acf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=770c1bf687f95869a1fbec663b9f222505f970254f77f95662426139907b357c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=03f12fbc6ac1520f3510013c0a55dd0ebe34bfcd6ee6b7274d774a19e05ec858&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QN2ISYPD%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQDQ6gCKjUHVngapk%2Bw3wQyhHwC5x2sjQ82KXiiESn3ssAIhAIxov7NZPJ42Z%2BErsIcP%2Bbnz3nvTnNctzD6%2FkadnvPXRKv8DCHEQABoMNjM3NDIzMTgzODA1IgzbNsmEgcl271c3VF8q3AOGjxNfNEtUgWPdIGVICBtcg3GPzf8oreYz9VnZDdQRtJbaNIob4u51HgYTcFRh4xOG6uMJZPEiNbNqplpbOIceAzaEIfGgXMJVMD64g2ZwEAFeRwzBjf5hsaUMRVoo4n6qde5F6ZrEMhgDidbW7t%2BfNbIdTyRgZtlwviLjZpSL1kjYjry35daoUpJDE%2B1htXsWglMr%2FCS1q44TGK9DuBqUegIn8yucvdRPkb6RBlMO%2F1JztSnuaXmD%2FdAXvYV%2BFgbc9VftT0aYGl9tME%2BPf6NBV4Ezh4XtUWB7FoWA2E9NHDNesZ8cH1mi6YuJCAfgMFo7Sp0gNMalVLoqkEyaLl8efCeVFytWiw4l7IIJQSjluorSJrmvWvAQ8QScxl%2BsJOmlxfWDdcwDHqyy9pXipk9M39ONEvcs%2F00G5CactULOVkwFasxM9T49y6Pu2a4%2FL2wWeif7jmSmwRMJr0wxdd52a1yNuSN6Canv4t6PdD9fww6IVY%2FeAp0DpO2lNJkb%2Bk8Mij2WDgLhfCGAtX4iq5Ud7RcA4ZZxS0Xn5J76ekTOGMgTCOehBSlpsujkdOX7GnHlapDMNfU0mCM9kYD%2Fsn3Jeo0kuVHOohjn4USvD1eHuiq2D5oRER6KxohoMzCj%2BYDFBjqkAccO7tFMP%2FmhhU3cuf%2FpGaqEq2CMBNCMsYdFSaIUTrk8U2JMmVvqAzYBlQ%2BR%2B4IdLLF8ca6AX3dBXC2uie9MU9%2FP6FYMcquwqwy8jVDsOpMugX%2FAUNP6aCxin6FmEDIYBB6IBsJYkmV3PjH7OF%2B%2B2oPycrPScTY9hdJDhbJ%2Fj5G%2BOWBOvoO2VrHI2eQW0yLAD%2F9JmKGd11VOEZhHWdCitnrvt4gQ&X-Amz-Signature=85a0e527d2fef54008e5382f667584d9fe703e2592042aa6379b51ebdd309e2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
