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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=b850846b3f473bab07c70797fc1619a6255598d1d135d38f3be175396f8cf1c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=b3e070b3de32007788cae4b5c40551602b1e43a7833f015319890318a9d3599e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=8ea352956991906e69dfd979ef9494849c7a86207313211b4388a89772789048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=31c1eb9457d76bba7180a423a75882f68a032c79913960cdf14a21bd03ed612b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=6633ce751ee0251066ee81a3d4adf9545b51e602f908f7acb01e7d00d6a5dcda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=49ac43e39456ac1d0c9c88a775d8e2041aea93d2a6e23b1d801dfb056e6585d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=75c8b6431295c80109df7d24a30a3b6ed1003f025522719275e5f10c90ab46d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=0c2055647d845875ac83bb9763c545486ac8c9c7ccf8828ed52b0db2fdb5c267&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=43817792feb3ca2913c552db286832cbc3f2dfb8fa1ab9edaf57332ae0b3159c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVLS47XM%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDpPor2szoBytd%2Bw09iRxylht%2BEVDascEuRH%2BZxb9h9FwIgWmtnqqTT2w%2Fa6kflSLkBQpAZ4gAaJjHUrA6qpQdTnfQqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBd96LhVG%2F4ekigBqyrcAzLW6owYqxvd9oYXBnsIW6PfwdNq0uptIfnc6rUOTAcKKN4meCxDv9utiuGSUkORBFAUSRq3eUuWi%2BH2G24X9Y0tK%2FVr2ZdhB9Razci0%2F6AeHjWvMa7gWrIF%2BWNDxHe7N2cvILKbK6JpRXDRZs1I67FOuOmGkIeF7ir%2By3Bzpj0CzsejONbXlFulxmuHTlVdeULklvKUj0Im%2BKQiXNpITiuqCAd4%2BqT%2FFYKgc71rWDxyFykUoQT0lkUjXjLRjE7nOHTqf25oVubLQLZt97yq25PSuJ%2Bd7LvN%2BcVlOCqspFB%2FO2kV0Ek0QWRkWcqJKlHy661gFxKeWk0G1t2JV9y3z%2B5gyyQr%2BbC1wG%2FEx7xrwQ3%2BXhmxd4%2BPBiKKb66VsBz%2F5knlrr78NE%2BR7q9eBO7v%2B7j3BYUBItCzagubqWYCWlX0bjljvgKAyuLK0aTYTBDUPcFOchPANzkgan6EjDtKyUZtpfctRyisa%2FtGcpaSo%2FtI8svCqccwd6o1nhLNtlt%2FX5r6Wg56pevvn6%2FHVu4xemCBIv42%2BpMdtaeNN%2BWPTbqAomqtJSp3gL9QP0QuILlrE3t55NyoIvehUYI9Y%2B%2BUKWuD4frEgjDxpzr1hSzabImkzK%2Fn5UM19%2FGygDCwMIa6n8QGOqUBfNIhRMCm6QXM2xx18U%2Fxww513Hw46GULAvxq0IHmH4sMbIl%2BrSVOm0w4UlwTmgkzbXNOZtPa%2FkfJRhEKgh%2FktQ3EGPt6I6AWvpDw%2FhtDxiRkyD3sxQ8f6NTs7rGOuGMZdQlAyYxIUvAsUlBOlxCPU0WRlRZLlSVYeSlb2VSeCHuMvH9f21ImBU0Zy5a6NZr9QuD%2FdSYJ%2FXzE2wFiVTqTV9LMeOW2&X-Amz-Signature=d457d95296afb603e332e28f15a59c04442fc52c12482d2b803d6d9e742a9f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF5UBOB%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIGndwanIyAc6Fz3ov1iHQHiASe8LYQ44ZXft%2BJ%2Bsww48AiEAu%2FeHurnJ5dh198fT1BLLvY%2FO7ITMtscJBNtL84D68%2BcqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsJpQ5nGeiPfIJIUCrcA0RZtirZVCItWeLXwdslzgBscNTIu7vKQw8O5tflsN1AysWeRLib%2FHF9MMRHPxpLQ5dgxpr0VAuld8K4Ljr9V2k9gkkgHw5XO5kDVaQr2jSPurkfWc%2BJvEAmLW9qutYXJU5gy83whNzT%2ByvruS2UPjE1M1z%2Bj6mpGu563R72E0oiZ2ElOerfd7ZkC4p5nZ1FnOhHWa7oIGCRcBZmYvyrNCw6hH8efSqjCZ%2BwyNipBOZAVVI7DhYv2DdyjuhL8SZ0x1ge%2B1xaCDcdnFGkPoFLnrl5YEV1z1G%2Fw9TFpOTmv%2FhJ%2BtuVN1%2FEyWT8fMCsmrfBi%2BBlrmLrCcTslawUdSa0NoMSFyYW2l9xAmoEmreM%2F8DXX7s1mT6ANCJP74iRioc2ERBqFKNiZIdE5hP%2Bc0XHXcRq0KpLANMG23nrK%2BOfAXkqfH4Zr%2F12xIXqJK%2BYCiEFlIrzsSRpzlJ%2F19Bl%2Bt8PS%2FauvCi%2F1xUV6ylN1Ao6M4IlVVsmbeJqNsJjdKpc4%2Bqq4JCXO8umfpfcGuwYLx905LpGdJbaIPg8S4ARnwA25NS5c6a26KVpG0tNS8%2Ft6zkdhMTwXzu3hne0oAkLG6KuxlyCSv8TWJ%2B1ga0tWd2o10OyiGji6ZtvkvcSOYC8MMK5n8QGOqUBzap71hXoUxJ61lHwaV99qsjJsYyV6LYZ59fpNbEoWNElbYi%2FO9XS2e%2Bxe1yu5%2BGXS3GUvFB5p1V7ph%2Ft35m9EjbF8qGy0O6AjC18bwm17PRP42CuQsGHL8aTse1C29rkvGZeXUvAp%2FbLtYRXPJER83TAkkPCXNTRaEYhe5lq%2BWsLlHeBhJbqMvV1UQHjQDRY05iho7kTaGdh%2FPwphKrLFQmsoA0d&X-Amz-Signature=ddcfddcf1bace8f41e7a22da384c54ecc41893c7f248b6e827fac4d53f9ac613&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=ccfc21071bc5b0ff0cdfcb03b29a86953e2e5d36fc6ae986291429aa13cb15e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=b28779654cff229784e9a640974d522010b12d53a9b46bdea9de33a308f1c9ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=57d661d00f65d99408c3bed3c3b735bcf602ee9331f4f6dd9ea59bcbc76ead08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=9e4050fe9daa6931bb99411ebb80cfd575db683873ae449e5a433b8e19d69706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=8c701cbc57758168fa9094567b0c94b37d3eea647d4657dee01de455c8dee095&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=5e5f77b112da4e98b8c8604c4a5e065963f0fd36c7477af02114f4c01ccb1b5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=29b0f1b789b6d1022e3fedd1b939ace7b7ed2dafabfecb4d7189a68b8d0badba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643NMCS3V%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIHxE38CJjjCCGD%2BhOEAvKgfVU%2Bc%2B5JxLB%2Bf83bOnvAUwAiBBQ84G0ATma%2B%2F1%2BHamsK%2FOYEIIoHClzwo65QDxFl%2FUsSqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZH35%2BEhEDidCZm32KtwDI0o1NKmQLBjOsASObdY7LkbbDIh0YvpDv80H2t4XHkwvvzkNmtrI6PQi%2FL5%2FEPhnixjUnBC1hdcTqbEi%2B%2B4R9QEGCLqaeyAG7BofkOASM30t5yvF14I4CbxEksm7ChxJyzGg3sxbsvejcUKSSdULXYsLWsHzdld5b8XrcNWfrnWs%2BQTpXShfDXW3QXyA7jO7GmwQXk0DBSBqjrSHQZE5xkpgk4vdi%2BqA66VlrNEUl%2FUoqSC4a697JDW12Uw2i5ONjfoqXCIlvRlaCLI1x2I9OjejUcuTmtIhXnudinrG0V1Xo7YWLlQFFQfL3ga5Mp13kqZ52gqc%2Fz9pLP9RuLOwgZw0AZqWVVDvXwMZK%2FqwzhGdNUxoN5u%2BE01PHFRmkPYRpuSlrIocarl2rMNlGCdyVAV80cU5iR9%2FxAzRyy8oJX%2BqozPSpv6khFR%2BEHHaHe2gnvoiPHcFXC1Vt02wng4DoBMK0a7Jy3iwZOcXVdZPwH75pkHNj7RBjutDXgl%2BXFLmIiYHwb2tTcaRYC68gpTRCLAqe5sxcLqiXvgn8EjmblAlIFGZAMP0Yfx4hs1F7%2FGRfaU5jgoFccUFsz4lR1rlQnh%2FBJyn4iXkpm%2BwAccgMNVLlfSJpJTATP6XFEowl7mfxAY6pgHxrvpnxJGjCNp3zIfc6ieZ%2F2UMRCtauwYNWdtF6MOAeCI1lrnVvex9qr7%2Fqz%2BJJVODZe3ImMwLgcrsk8nd%2Br5ZSXV%2FfP6totXQONm0aAU1FFPGoXd1cVDg%2BUZGcft2xwGuEDrAJDKSOC3Fz37J%2BgZmTAQ6l9okEBfemn5eTvmJ0M3FVrE67ciYTTVI4Zse%2BClWT%2B1VWlOlYy%2FaplETsj9xIwYevLsv&X-Amz-Signature=61766ca92d496b64c63b25384ec2398f0e60bcc68fd290f116df306bdcc73e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
