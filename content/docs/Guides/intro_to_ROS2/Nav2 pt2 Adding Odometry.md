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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=0e1684e50fee1ce3d25e2fbb333474566182864e007b16c650bef920adb3c77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=d964619f0f50937905263869ca1b3d0a334f5424d0d9817c83d32afffc568042&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=85f7750e5ccdb060ba0bacb3a6c8546ae7953f662f74e6720038a252ec420a4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=b441e822849656e6ed047290b8210aa1fcfcbbf5bb6bf0e20a3e11a84c446e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=abf6361a153a87355e17bb78b0a8a2eb768e0e4a4a4a1223ea7a05a1b5a51f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=fd100d0a8ef2f83aa4e55f8810e6259c155485d0bae2bd588b3a24ca5ca5a287&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=6057c31f40a70c7887c0897d1be7ff52f0a72d2373cafccdc8752e74426ab841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=011a8045538dd09451952abb3e0f667268c791b131d53a53351a0f119c58503b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=243b760247fa69c0e306c50e1b7234dbbb3f11d9afaea9eef4980662048bdf5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GLL7AOO%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQC8dNOQjMckabf%2Bt4WWSi78hP%2FAH0X1qjvBxelDZL83lAIgN6ApgttwbjO44cYmxCG8Lc6EGClw%2BfdlwoHtYWmmAUsq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDFoQfjCkeFnYhhODZSrcA1iHGQmmot2iVGW3MvqlPkJKr0itN%2F7l6E7kqX5udjn8HO6Y84P194Xv%2FGzICWN5MTc%2Bn8HygK7Lz8sxaCJr%2BClAMscgXQk%2BBXXMT5alVvUsA5Bc%2B1DHjZEK1y%2FAEgFePa%2FuIWRmTg8yzZ3KeRcynBqQQVZBjukZTZudiUfDGyRxr6l53QQbxZ4NpyNRtFD1drvOuEc6a3yzKRURS%2FfOwfeTSRuNMpScZJae9ulchEpCjMNiMwgMmCtyqZsJ2KymM0FbBHbQZqoA2SvDpy%2FUylIfWRhn8u7nn6Vcj%2F5k2KoTO0H5MFImbp%2FLHBSlvoJheK2FfN8m2Pl2ECtdOzCD6HAtXsjgWkf%2Bjjd1K62wF62nt3kLhxIlbfJgmyEZo6OAmhf7PsygUeb1ljdW4ivCxq4RWr4chvE3eFdi506PrngkwA6O5xuKje3PPljsVbCHJkQii1io9M0viTOlyobTOO5hyroCVOJYrGYHUipOT0eAj9ys8gHAVV5mz6ZOQo%2FbMaPJAEWFLYshE7hPQLK8unT47sLDCO%2BPVs5LX9cny0X4xegwOJnkqyTWqapO%2BKCEu2WWPqBnGcvbAUISrJ%2F11cmW%2BctH8Lj%2BudZSPgadyPqZ0UPTNGJ5gf%2Fjv1L3MLaMjcQGOqUBnyEYSX6r78qf9gpVQnJiAwAeJWA8Asl9G7zDyoCt0jlDMVja7MMmaQUrbyEeE5jlqgTPa8KaULfgTm0QWdQJbUG6TRYbh3Wn7a08iCHmaLw24vbGXPH0AvRYs64HYYpZm99nCN0QmdIYH%2FUhnOeePV2YzLwu5jRyY38mHTQKlUtYFFmy4NS2osgl7hkWOCkKUAK8Y0k7u1Hcf3XXedKEVGQHeN%2BP&X-Amz-Signature=511818a0d46d761ef6c1c3737fc80419237ef34d2d8123f49e6d0d34ae992d58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDUTCBLY%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJIMEYCIQD4c7CYi5Z64%2Bgm%2BPydFMiacqmCDGJ8VD4a%2FCkBbujzyQIhALjzzZ5ZcT6SXTk2AXdzaWvHDJkOBtfzeoEtdrKfrSOFKv8DCEIQABoMNjM3NDIzMTgzODA1Igz353lUjKYFNZ9qM%2FQq3ANiAHfaEtk%2FU3vqt%2BqQBi%2BE6jHJd8VMlzRibICLJV4ebChoBlqWuqikmm4djnbQWMA4uPuh7nHsKAxLitLtsPC2%2FV2NcJOyyeRwEYim%2FVnTgvT03DKTTuaRhzJJV4KcSRN7CkHixvkxS1EVS2XCJBmPv2Kyk1m9mXqGaMmANBhnjvFaD7dt3OFAGpyRpQbKbHNvWhISmmJMpJT1Smqnfe0D45T2qtHI8eqyYj%2BA38lk3vXQ5zIv%2FI3xwLv%2BY2Qzq3520TsN29VfFRG7w0vrAOaDrNX7FdIUAwTiq3R%2FzmgHROx%2BvNSpZ6OQGd%2BbqbpuAovHNq48BnOVdeS4%2B9xgivi%2BUJB7Qyffr1CKuok9njObM4Joe0VsW1GjKojEb2FwsCOdZ16rWhMeqoKFV8BX3AqbzG4Y90lCYvUlHOlnrh%2BS1LqPezfclHJBvmhjhW1hjWdWfEsEnTY%2FHClsHbXFYEFvYhgDkJMt4OthH5sekYUGk1rt%2FNzs6bcuMTV28bUBY4uCpiB0y016GSdivTNR3l84xEESDH8zOtMgnHn1golKaS6K2AwnqpLSIpsRajqLcEyTtQ54WpP2Tc%2FFjhUuX8tjpWcrXkmXmGTmEpDgVT8NbnsaCX9p3xsiE4p%2BTDDfjY3EBjqkAdrgxGFuR7N%2FQEDAVbds6F7BvbmSpIHsvL4Jixc8GVgC5%2B7xj4ydArh0%2BIEigCsnQOKPI6v0DkmmRVZCjgIzgjOzEd5R54y8If%2B7rUizwCKnhTwr1QtSYmUUhgySY9UXDY5vHlgl5WnHmt9STO9OIAWk7jgNHwq6Lo6l7htRZoV7VfDu5d4qC8ZseV%2FsTorBT5xm53BgzMrItlnFSIo%2FX92y3Maq&X-Amz-Signature=87fbfe3d142d5b4b5ea62f70151383801ffe4ad31effc93db580138041ee0334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=45ac3cefa98fa1c3d95abcdd6b3c879607acf89a0a25dd60479ecf50c939b76f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=231c0647f7532b2ade89090ae3d2929a726584303794537211da3889af5fe996&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=e4eb5a15167e039d8d6fbef4b89fe0c9ee3a0607b3fd856773605af03347439b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=cbf41ffc0ebc759b46f4fc6de25ca380f77ae3562ad64228e6a4a8af87a8d1a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=8563181c9219e5f0843c27cb743e4c37f58a052ddd2268e8d24c8fa51ba53e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=46ec6c78ab095df54216d3ca1cb88d75e88282fb93a1906e91b339283f1278cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMF7JT43%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T101021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQD5zyCXL5WFjRcVGzk5q6hY7LKNWgvSf60749Zvknpn%2FwIgc%2FBXUYW3RLeqRh8F0uTuGa8U5WqN%2B55W%2BtbGDTsFPNQq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDAYLr5m0D86bFFXwyircA7%2BoZ2mlq8CWKh43QWwVv0YngVUjX4cKMdTYULiTaGTUQ%2BGfA3w0J77fxpfH7dzjLq6nNdDEMmFwd2bDQZOmdGuVmPj0cjIQ3Oi0CCf2V%2FTIUhG6%2F25paWBoU9ykoC16PiPNmkWOigJ2pwhh6CrZwkOzmGevSSdW4gnHj%2BIWNtZtF0SovKVJMMsvtZ6PcXON2hkvJ800U72MwMXsbnZYCgnLH1RhtbTnzNMyMYjGq%2F1q9SLLEECnJNIV%2FP7AjnGsmfWKObKdIxwKQ6lqUr0QEaP4DXVW0siabTXNmcxNs5Eu65bxgwI5W4OFs0o5BzHYVT%2Bo2nnVZ0DA7WuwSgo%2BDWp5LYaN0AlfVVbkg5j6I%2Fo0lI8wG0R0yfFuUP%2FWiKg7cF7ZQhXsbAadsww3%2F%2Bpp6dR2kpIpKvK4fjl8Jif9H0UcikAeUIXJckxijTG7XGccUWloCbxZBmu29xnCu0xUFHGPlrNAkchOWRz5e93yC3SZRNht6Mm%2BHecPKacyogmh5vv88G%2Bsdwu54GrCaoQAWKtdxmrACnOD6UZ1Ym6HJYHBcy59HUGCNal2eYO8NxBa3pTLIEiiH0rmepMlBcRyoX2OZqUdVkEFnQJyvmlk0jdLr3QNsMhnNn5PIvTJMJ2MjcQGOqUBOSx4tzMKGdPxcE5T8fPSJBnjEpWCKg4XZcGKbM%2BZAKX7GpmO3%2FgEUtmiIntqC2hXmUOKvFTn4JIV%2B6fbXLByZzTK6EAkD%2BKRLe4RIaW5QSfTV3hfcZraIuk989k51MEjw2TUC7EyKXp4p6i6bUfWbqKGF4iPX1QFei1iH5WxaduQyYvTm1PuEqcd7%2BOSDNgg%2F5fk2lK8uzir%2BH6o67PqBiSpXr6n&X-Amz-Signature=65cacaa9a16c62909b00de6b98c313c3d6ad4eb94450fa09d7058b88b12fa82c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
