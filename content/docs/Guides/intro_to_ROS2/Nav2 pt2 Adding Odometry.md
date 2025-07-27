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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=034ed36c83485f2860fe337e75640f3b36f9bd9a7eaf8dfe3dcca02598aedb5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=08481a20dae3aef8014f484ec7e60aec8459072547de628f206da6051a8184b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=52c9833dbe8cc0b6d03e7fc59e023f40185739300a135ea6f82ab730795b115a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=a7bfd0e7896861751e9ebc3d78c2ea469d959008072d96c555c4a02f657d813f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=9c2e9c01f1d035416e7f05ca559d7a4c8900a39c31637575b1f391f49bd582dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=38e10727eb5c45427b8627c759a549f538729b497f6dda95e55fee64c7adb339&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=d389b4ec1be73082dad3d843071f59e164811e24441dc4153212b2786695897c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=6a43e28894e40499ab91de4b1207a5d9ac3901b4994da571744bebe4f92b71cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=7e923b0eed89c64a2e19ee62de061d22c84ca3b27709eb0852ca12b2605c8272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VVD7726%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCICx4QHeHtyURsU7k1QzTT17twMMowjkMUmJhJ8%2BUu5lSAiBa4CyguaVz0JChkAiAsck%2B59v%2FSoKyngv9Ly1fJbumzSr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMVkUZRJfZ6tr6dLoSKtwDcp6zr8dsA1sPrdx%2Bwqr7nQ%2BDk9imIg4Hqs26WVsBC6mqOSmGDxzQwpnDSIDOmbpqdGUTlZma0uWN0hm7ZWAw2UvfqoO3kdOOxqCkWwQJYs1hN2zRA9eto3cinCIeE8N4LyfHSoNWufpVzkWa0Pnti3rDmhiRDi1w3e5lKU7ZAeiQ3Uaf21r291UwazYuHnmInIu4ns0LTRnBIuIua583KekWCJXUj1BwpEkCROxw0feGzgtwf9mZQesKrSYvXpW1BxFoymAgYjYVJlkC9Q1wUdgRaUXURyf5kRnSfBVNson2Ee%2B54SyutZiXp15jwQy8wU1bAy9%2F8MfRV7M5NYvMxRi3DFNy29KvLQ6HGJaMvaLyKgMHS0yh3Kx4IaNdpE8w1AnaPmDHRnd39QW9FgSrwRoWaWaR8aqrAM6efQnP3UoEP%2FgB254Di3fgidcXamEmuC2b1mEfBo%2BFDRS2KZh1oagjOsoqzYv%2F9Wv7AvGskz4tQ%2FiTzvygJ55TeKUySjoiVK7AXCNVIhUTHGdMoKU30O4H8nvg72nTNzvuz5h%2Bo9qggZIuGtkIJ0jRv%2BwZ1F8Drjtnr5YbkkbEZLQxsL0LPCppgEmOi9VZR674%2BwGxioAPph%2BhaOukEX1KyA4w%2FaOaxAY6pgHYk85M0Pj2uGlaehoq2UrtABq1rvCkzoDKvujv2geLvUaIpx28jsdpsiKPPBXALRgekFSpJI4buDVYWU8hGnXmTb4rhHIiS9NfJJmtHYku%2B9Li6h%2Fg682QCii6xZsnwGkFCA9IZjPI982ZlINl4ISpZj2B%2BgOz5OSOCCGo6TISv%2B8AJnOip0PTez%2BhM8axyzeWLclVM9cbMlNGcfeDcKs%2BhTTa2Ld%2F&X-Amz-Signature=df133ba91f6d6006beb4b2217a52f2172272cc54aeb2e6bb755002dbbe49cd4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZS5OBHJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJGMEQCIB3oykY%2FDvkHhQQjPJfdZzHXdZnXppMZbnUfdA8WAvGpAiAwc2t8d3t2f2ZKJVqBmWf4boG3vx2FO9uuMOCK%2BJHaWCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMg9sHdvoiuTEBRJNJKtwD3iYDbEacfVmWXuVNGdYbsMAongM2JZePycgcCL2hPFCZRXxWVmP1QQgnNIqwoG8TbQrsVFD8OzenRFiO167am6vrSJpM%2FfJZ%2FfRe58TbKa0lmm3n6gdoo53%2FFO6rw3zFLHbgUIK868wdLSyRSEYsnMXCTzdmkynGppdbndrkzyCQySPK5rcql39XiN22cl2tcQ26UDMVzzWfHQaTc5qL3ZBX6z%2FBReuYupeTjfS9NIOJDWwfRY6gAOqPLlq8fJPSgAmrUmFJrubwPOiNqeNXPrNYng1Ryz7i8nGLJ1qe2iKm2cMl8c17x8t2SPSiOTnJuZ%2FHmRfaMaeZceHeJAJg21CD37%2BCTIRtzIGrTGDn%2FBK6lEavSuV543CmtgaoRh7I5j0rBsVfJZ%2F8gLTmw9xuKK%2BqzfBVQ291H8Hf9zF%2BOQwWud3fgFf8w1s9z1iN1cxizJT8DFWH0I6wSnrBMrlE%2B51uP3anoSPT3qd1wvD0swRPWJ5jvhs2G0CVco5MwqDFe6yEW40mJO7lWqvoHVsKSQsifo%2BHLEIqu0XTOCuQV2zm5UPeINVzxIr60ZXDk%2BNTC7soLfQyYo0pBw%2Fh4fGg7EC5d50ikBt%2FrCHmpZE06O4jS4pKvST0mA95feIwq6SaxAY6pgFzgvxfV646yF59%2BV3elH%2FfMl2bpL4btSNXxFER7MojO3ldaffx8u3XbTHQXIX2WTVpYmUWJ5J1MJOVZXa0rjjleBOO6P%2BzZFYc5FQ3gn5RSrpGCCB%2F3AITyEgzlp%2Bva6dVvHtV7xK7yXLZjBQxjzd8WDCCu5YQV03fQE1UgBmwzwcGpyKNWWEx02kl8ip6ZgojEesUDe30Od3WcQWT0j%2BYcYalciiG&X-Amz-Signature=64e3d8ec4eadb626cbb5de885d16548f7cbdfa2e3051378f29a65452745a711c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=161191955a2fadba3fbed543fd71b95103c09882b9a048573107db9daecc0152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=dd362b207a5e055d05756eb2fa923d6c8b7dbab923bce79fbe86991e849e3b86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=41ae2b309ea3db21d172c611c8ebecbc824e4fd03a0190b525da72a8c5eb5734&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=44d5ae22c6b7ac8f092139a658d7815fd0c6bb89793d3aafeb42fa7455e2a7b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=a506f4b2ee2447032c0c373c51ca6b7d33edae1c7c0094a05782e2232ff678c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=e3b8f77a2d225848b3dd94a91c8f84c629a79aab6073b498a27cd363aa23adee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXWK6ZMJ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T220842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQCSUJuAZeJJCDF7v4KvwsyYoHwheqAcKgahPhFAT63LnwIhAPcZVufHZVsr0b8IyuQ%2BVYruzt7JSXgsSHEyccsr2Ci0Kv8DCH4QABoMNjM3NDIzMTgzODA1Igyr1R%2FVkKjpX9TIh0Iq3AM48sTqttztGKqBzS5329pEJRfP5CoU5N1ebyBrIXrKS32BFnNp%2FEh%2BaRxF1L20E0Ovh3662dm8JGVOzytZ%2FXtQ0Vc5LKNdALdzwDKrLpGXbQvyzjWEaOaXiQiEDNIquE65oErpVntnoglTxorMaHoQk7wMGkCxvGZMvNX5n5haD93y6bfbH1hCgjVHIThr5k6C3a5MGytpy37KRxdAWClj8N29LVWuJGY2zRbXYbtM%2FTCVgshd6AhIvglYXbQMu1sn3TptSMIbeS4S%2B5E2U0N1vf35puo4DmGauFROuN2hE6vX4xQFASfPD4nsgRO%2FLjqXVu3A%2BRn4n6%2BtluapguvvZPDCc7qQlsAUHLVfR4ZR6KeKysYsLFXzs6w%2ByJP0la4Ea5rYb1GdeQVD1loYLehLhg41lLVNFXQWsyohMdnTXu9dyfutJsXaiuM5S7HsO8p8iwNrEHIHQ9SSuHGGs3bD8OQgOw%2BOVFC7EsfDU%2BfameRU%2FdE2OSAoCj5R5OElshvVZqd5BM6DyBCJduf4%2FmNWQHlvnc5T8%2BdRlW15ywEWVHUOcgNzNxHsOUTCytcnKEef4Ez4RoNpsYmCaUOumVFwEDNLOhVP6%2F7kcK%2BxL9G39lASNeMQUORQ%2BRCwtzDbpZrEBjqkAQvEQLOLIn4fAu8Wr4lZDt5tyGzFl9x8YE9VLfka%2FpCvRmvja4Wues6nWPiu2ncurkyfICQItv2RXlvQ0AsepRMf7THeUR1Zon8OWxWWXlLCREeEfzBo6tU6XbmbJOPGsrBpSdClMCuqP6UWxyrtxYxMsiW2rmdMic4PcHshdhxICDvJ8U7zibXBFMU%2BNiVznvYqxCLU%2FaCC2rKvJqZE80J6OPuz&X-Amz-Signature=bac1c2cc9773ddaf0de4807c535240b037dbd33eedb3d6d97eb6db912876da91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
