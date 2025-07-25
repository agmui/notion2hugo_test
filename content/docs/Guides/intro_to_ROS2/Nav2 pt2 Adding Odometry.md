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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=f6af044a4575c64e7e9b822b480b2a86b8077329291ce5989aa0ea44f3e205bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=52c66100d8281eff28ea2d14b918db8fc59ed0c09fb9a696376a276c927097d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=da9329e63349d4f759c6c2cc7324d48777c98d09aaf5c6f454c82e60fa27957b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=fc826607f72b90138ede2df7f073fb3f4f899615644bf4d7edbe4a5c0d365cda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071414Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=3d94d9f0e1c8aa7d70d28e99f7ef8cab5adc4d27815e8b0130a30c34888acd68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=6eb69e53a1351edd5cca067d85d2e17321bd5824b8d5e45d5447e7c77985e13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=78727611079b2f126e49089b379cf5a057716366710b5f868674416e155bbc1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=4904904a87d4a8b287553e9b932c7fd0f72f3ed987b79b318bc4b3fd166b644d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=f987c4b2fc7699cf9366f4f99c032652801c2c10364f5e3f8e271b41e1c8af2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E2E36MD%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDm7jI44YizXLpt27Cjg0Sbxpu6V%2Bm0135zE%2F1aqHd6VgIhAIuc6j5eDanHa8AK78pdJRrwPhBtaYy0%2B4zV2jLPkk8DKv8DCD8QABoMNjM3NDIzMTgzODA1Igyjvd0dgdWMjgYsqssq3APwq2vb6SODPX9OjswtllQiBBsA0CCjaG9%2FY1X1imjTT%2B3Fj09rhUpylEyN9GJSkidQ5x4TTSrShwgWgPOPsu26pW7QnumjM64rfA2tVMsaObYx3puBWWU32cq3TylRLiWaeZ0w%2FvqQ1UZJ9ebi%2FzfqXzpDs0xmuluQnK7EG4Z3AsOmgJKGAoCg%2FIMDTLlvdL2UkDm%2FiDdVxv%2FGKHhlhw0uZkDsqaSNXpxE6bO8Jhy8XQys7NW%2FA9PBkVNLkaIZktf8cELSkvLGYwrs%2BNac%2BWP8%2Fzsr205FlQtDcZIBZ908KpghqrqHYptUgYHzHwL310qzDhpM48P99gpINyNRd1suF7I7XH32lZfc6yl%2FZQ09eOcEe7WO3UEkz%2BnPv8uDU45W824RNFsrwCZZclbB8U1DMsuXK9EyD%2F1VKHOnDxlKMwNm1HF074J3na%2FK%2Bw1iczM1jTRtXIeUteQtBpL4osrODij9UrJ%2F0x%2F5u5GbCveDklbo9h54gwgk7V521xsYvnPr6nF35aTQ9NjvQ0%2BPgSOwWhtcpDZtLyqfxcUiLZFH%2Bkoz1IGlM6Wl3nKhin%2FcAhHvLtJBTfgfXukZQoFmvXDUX3NDDSspNTcThnsV6hl8hgr%2BVG9PikF%2Ft70t%2FDDSwYzEBjqkAXLgD1IKf%2F0UZQfMVL0UbeuLCVaWndk1Y4CDtFswnSMSmusdn6KFUZHAjfS4J2j3oijVp08QfFLTuhE8Y5WydJ6gDc8cn%2Bm0WJ7m13aNx8MVtZK3tCvtGHgLklnwfeY8wuG6aMZjSQORZBqkmV%2BlAUgIIQ6kfu5rs6qnhTXkS4QcloYFw2Q0DKXoCna%2FAy3Jkb8SV2A65XmDVjHbia6KKU4NY48Y&X-Amz-Signature=656dc96fcc3f4951ec4b0bac6ca33ee0195e0f720de12e375c0a50e8dd656b18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Q72PO3V%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJGMEQCIDhNnoST4fBQ8DccS3L5cHPSekd%2BVpuEBeko%2BsgoNc10AiA%2FxZ%2BAMUmZynQtZpjH1vNSs2AAu4zAZ%2BuWed3f5WKJeCr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMbto2LQgtgPCVD9IVKtwDjvYPdLnmOCj2hTeAvXsBarx338zWOYnxvmOBMSAX81KLjhvapYmIWHJ8my2tVhVEjORIs1Cqla%2FjfKVsISs84kfXblVuMIDSNiiwwcMW3iU7j8kk33CNqoZaHlCd%2FA%2BTwwHSufBGNyz2w94D0fGhcvtdGftqklg6gN3mg0AWHyTYJ0EogTpr7%2BS66e97ADG6crMBPaKh8jD5IG3lCoosFdzcEdkltSt%2BjC%2F3aAhKGIVDq8cWRt45msWvUj%2F%2FbvWIJ5u%2FMwbILAkO6trqiewAlu%2FXcx1Dz96JX4eYPmZCgJmcDwmeiksvcFEH%2FPNEVVLG3T4sf64GkWxgSBjCzCGUABcjzYCcpHDJcZVOVQQYKUoBQaWiO%2FcaD7P07Bj%2FubfHHUmioiP0uV9jGP%2Bfe1yyRqm1MhZZTsojPqh4SeMGpd7F3ai%2BbWgLdHl1TggBxCmmV1iCZlgGb1XyXpWB%2BnFVLmfI%2BFF91cxqS0JqGe8fn9N8J2Y1LhyRETlbbCBloEYiVMtZ7uopCsBC1dq44HKONUqsvZRgVhrxzdFnnFsfqyN35dHiFoRwNCuMCG6nF7%2FzBklpTtnCn6zMszwxOKN9izlhRJo%2B53DayCSmBc6x8l5W5n63mZUOBeKf16Mw1sCMxAY6pgEY1R9wRoWknjl7oHdHVpqOw2ppVDmHJkKJkx7QezCjQ48zC9WUt5T4JMDXsaDJyh%2Bfr5LF73zd8WdOVQfo52IDWb%2FIlk0MnHJX%2B5l7u6LRGlQc1BR3XxUwebFhyO4ufcjtwvvrRDjs4Ca190S9bE7krs4uayvVaEizqL2SEldKEYx%2BPsfnwAPugACo5JD3rYzhKq35c%2BZcnWBmJk3ULle3CmqjBSYW&X-Amz-Signature=2119257e8705f07a6e74b2fd863cb83cac70773b645e7a9205808c962155d955&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=6155450ddb3d2b815be25b12af02b870c4561131dc157218bfc422f01ab94029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=199b275e017426d38c431c84fdb9276cf1f35e630f3f879254b82b8f3f9e3e14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=d652230cacd7b47af27e4885abfddfac7bc17e770b7030bffb8164292d6e5119&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=10f8df1210271b2bd02e8eaef757f8d91b7c345df611e9c055f1d3f9f34e3702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=63ee1350512cf0f8801cb2b18d04364afbc859e2760ecc37faf8b0f01961c887&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=ad72ecf34cbe556f439463862bf46482df3bac44da8fc71f8cfdc42d898ef7eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAJWL274%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T071417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJIMEYCIQDkHT1pRPu9Z9jgsVoe6Lxpq0EIKtIdEVEklJUpn2n3mwIhAJJXYobfErQAbb4Vg9FPkbWfhQFUu23vcaEObQCuI8vUKv8DCD8QABoMNjM3NDIzMTgzODA1Igz%2FdFDPPqn0EgG%2FIr8q3AOQnWBVsUi%2F3kpYUBNJjiZXQujIFsEN3mqjQh62gUd3Qld2d4K81iehniUxmpeq2GEV%2BgcyUNPK6o0ZsHktiYaK%2BZViND0Q6CV2x03QFnRebvOVSMXiTnwcufUxmEUGy6h%2FOIcTHGC2ujWhQIjrcgE04ysBn0BxU%2BsBQjnjn3qEWG61%2F0ohTIC2Dwi2naVxW%2BH9LntfxFtHLxEMTlqEzzjnSQvsmg9%2B2whXY4jIuZ900ePjxXelCeeCIn2Zj2KMCoAK45WE8CwscOJ06BjlAIJ02%2BUXK1T0%2Bxv0LO1gMl309Y3Be8ENF7FD1FRiM4SBMEBy%2B1Y1gY3tRi7eivijNbWwmokaSvwqQHBqV8sYV7LyAO%2Be3N0QxnryFCs%2Bd3TD67PTbfrKD5sgrT8rHz72f5E9OvNRTSoKmHvajME2%2FeqGvwE%2FwUDi3Iq9Pz%2FMusqExsOJ5fWHzmmzkuD4AAf4XAMcgb%2FfLDdR6OVydQav8z%2BSe0s77WCdKVmty6rVIj%2BBGonJ5BJF0ATG7VkekcTPpZc%2Fh39DcX73amY%2BER96S6ygMQ5NfeQvzZVc8VFg4kt6XXaso%2FMoX%2F0jWVf%2FTlPFESSEMsm135FH9u1ebQGNDv9a2JOuzGHranD5Smpu%2BTDgwIzEBjqkATk0u3Vl4c6BGt3%2FBHzVUGX2vxpOlOvRJG8uYyP0FhQfBcKG77pT%2B9geWNvELL%2F7tL5bcJIJTCZOaoQsbpHyLUsVpxEe6bTgryEA74liafAWP7Q6kkWTZClYiOHuTlBx9QeIW2qRMLavklN%2B2SNSrSMKKIau91KkJkfY0yFhlt0zG3Q7tiOTJjjO170LAvP3Uy2EY5df2gNzzjF6AcM6%2F5ALkwhA&X-Amz-Signature=b7aaf2268ae5fcf6e0149f32cca8299a9cb0391b53396e5b303f54a02c6b8485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
