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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=8573b2c9e9bab771e3b0a171a0f1fd9438ad7a18da7bbeff864cc672e5a66d75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=5e206968372a0d87f41fac707ad9647b04e42315d22d7cea9b45de1ab9b7f6e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=cd9f1b4e774996c5b48f5252beab2fa469879fcfd2890c0a351e0d5da194f029&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=c57ebe66e5b56a261cf548a7e20f0c4e9a12805b01abd148814663878e2568c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=12b97458fe63ad45ecfeff93f9293ae04972fb4bc18bf260f529370a3f1b1592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

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
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=ebdf566f2edf1efab814c216d9a21a79a3426c2e04c7364973c68c6af8342fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=1b2517600d6b3fc900f11465ee43f4d0590df9f2658fc7de8382acdfc4b6663a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=f13e08eb8080cdae784890ddf4733a0617d4710f09a28455ad90c56835b98924&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=9ef45555618cf53d77f3452a2b34c605d26555b56dd64971d5dd8dd874d3a4df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7KKHFZT%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJGMEQCICn%2BmrMv53L2vgjhYoJ0QWSB81F7Fa4xuo4Jd9p1wzT8AiBzlwsN2bmlW6j0HUrRatVEA7K2qtwqgzKZ2F%2B2L%2FeSQiqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoSQLbRKqamHBLIXIKtwD0BrwlTmu7%2FI016sD9Rion2NZtusRKj5eJQkxzi4YKCI1M7zakirAxF3nDrECM7lLzk96sSuFl2KrFsMKTGPGs3KApxMwT6VtkTEyoWXkVj2DtGzrMMAZEhJCukzngfo42AhdsDB%2F6%2FMDvuMkcHc2A%2Fb5Gr%2B%2FP%2Fx7aPgmJ%2FNcXNEVRl5UX94XU7kXyMznmhXXpGEYnOIBddjeR3N6IfhrfEdmAdHS2H%2Bnq91ewuy2wcS54WLfpwU8EJdLnT5xdbdfAGPENeRakYVxmQ%2Fom%2Fbb9fIrOV4PyYOQWeLRkfugeh2o%2BWkvTiBDIUhtfu6WBhfSA4gowJwIMtCB9FeLlhgrH6hzavVTMvmOM7IDdV8Cxgv%2BDHFHm%2BxG51cCLCBfLOW5XdokZ%2FSz2K44Mpb3N6KS6lbY5t%2FLK2sIvocJR1f%2BYCUrOiDrgAbNvt84VNnAqdYmvp6FspgLsuz0iLdbXDGL276vPOa5AJJRyxRZ0LM4t4JqfO0Sxj2PlcvbUI6I%2FdIxQUtTO5lWBUClXrOD4ytfB6KKkKAsu6pX0z9QS800JlZhXVYb7geA08dq%2BbuCZDOs%2F3LajkoP7oH02OOKFgEDzC%2Bk610Wj%2BGsVOe6QzC5sOS2gHtbqQKEatZFU90wyaWo0QY6pgH8aQ14oFuvVqiJP45eK5Xr3SxCh%2FIFxKrmT1tTb4G8V0MtrA8FhIYFCmuk8mNH25H7YEYUR21jLDfZiDxCalMTs62sNoTD%2B%2BzDWOvkBBClD2jCvOA16X%2F6IhWjUiCXZfmWxVHxmIe48snoyDp%2BoykgwqluaOy319Wjer3aMWzduixagqrGtC%2BW6PSSHzgSITZAXM3k%2Ba6RUh0c8riMmOSSv3tTOcan&X-Amz-Signature=d99f91e884063dd5c83e3eb0edf3528f950942f93ee83f370abc1cab6f9ddf52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLA3CWJD%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIBuSFmTe4gq9GYWi9fkkFReMwbWgpATBGDWOKpf4cRYwAiEAp1%2FdxdyDASRGn7gmqVk7bsNbZ4xcQ0jHH7L7aQIngfIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOPh1HojwkLRwHNOqCrcA5XUH1bi07QEKFhFupbBN1lGTHnvbeg3bFCqBVOrXsvedmksGBwEQB55jwkMS9rgDcCqd38Cdcb5Ix9tjzx6XqvKMJOrh%2Bve%2F9P0VR2TO6UEbDf2OleVALwbT2UwpWvvnZzfjuO2p7nq18tCU4tqprQp2m%2BmqsJoPDkMMdKlpIvz2bNeW71J7Jo%2BzCnEYT9iDNReswKK6UVraF5fp7wMrZNGpCOe3UgE7lsi5%2B9v4t6vx5%2Bl%2BGBOQ4Da6YOt6oGkMrx597OxTrladzvk6oQkeE0mPlYufRd%2FqQYMT469RbB0S1mRN8MjHu%2BYg3mt%2B%2F0RkojvJcNBIiejm3Dd2hUN6k1G5yDrIAs0I6nSS4BY7aq%2BbKs8embxfmkfaSsXXjzZRq7Gtb6iGsdRUK%2BG%2BvJXgLh2TottmhT6TzuWaI7QKsSYvFu4otXBZdRTuSVSRtAFkNCKr08zsgu4navvwSEHMaP0VUp9lkbJE8XMWUoiowkFBNEbVVAQU2hct2FI8J%2FYAdptw7vI6Yy6c3CzTcxrefHZEUMdoPxpivY8i6qki0lc3iMgmB4kjaETXPcnH5sGsV9vzltDiYF5GAVB3r8W1lV9LmY3MKkIxoKxGq2%2FJb1FQ8NYUfyIzDeGiRFGMOemqNEGOqUBO3EduX93S3xXhYU0OL%2BTNcDob%2FbNOhxM8nEh%2Bq0%2BGmQGt7coxLml%2FgkQz%2BNstG23BIMuGS9SNKSwRAA6S2OIaUOen3rWQQeQSnLAqc562vEcE8vn3rl5aQyZOiGXpgAOmvpKg%2Bp474cyWLtDXOifsWZEvtMtdmLYwBS6mj%2F9WzAJrWz4aieTBLiqNnuPJMe%2BgSJE6NvE5xvW%2BVydxu9rAW0%2BE%2BqQ&X-Amz-Signature=93389b8997bd06c8c5a7597115bb65058656f2afdb62c6cbf8f5cc74324b9879&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=169f9dee3936c7a5c15d989bc0163d3c4b8b37e6feac5184ef5fcde670d754e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=63cf287e71f77db921861f50841bb2f10cf9121e6573237b96aa163fac042098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=cac257c7dc943abf951aaa45a4b50f3366dfb50afb7611709fc8fee921e4d1b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=0a60e6238bf8bc7d44ca65c2ac16c1333d51cbe03e0faa8493cef50bc3ac5bf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=8731a12c3e4a38600e17b048b1b80845a1c112a645522eac81e54c8e1944845a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=b8b8d8a828455d16501ac1583524472d26463dcd553a2e530d01ce677b552d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=ba7c62599f679bb36da986f4970a893fa2d0f1b2c5d24d7cbbd48228c6253bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=cdd6f11eab6e2e10bc7e8ec7ddf0de71e330881cdbd8c4393bdf7e27387aa26b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRMPQV6F%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCO6QcWgQohG9WsXELrWema0%2FdOTe%2B15TB0r%2FQlIQJCcAIhANGuN%2FNvp7jh62lTnbzQP9TpsU8IK0jQcrmBgWcv%2B%2FkrKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqA%2FH3PkcnsWf3qpQq3AP6ai%2FtzTjKKojeRZ1Y5k4Jt1kQxkzQaOqXUQs8JVF911S9jWlEGVWDtMq2b9W9581HrqG2KaHU1slOq8YxD8hilVZY8KQKc%2FIsXvr7iWsejugwKunPgiYwSx5QzXSLHds%2F0csqjfb7N9NK9BZ5Rm3F30TrXFyn1prvUb2bVbcRNbvw8gyEuAPArWZU4uxqpRrxUYwoYRPxqaz7VYQKLYndUN7YRii3m2pYUafj8cQGulle6RfMmGq9G9g6qrFlaLG1dYWSZhjSFXvmIYzhkEQ0UhaRIepG3KQcSAxCmWYmYGz%2BpESuiZcE3RE5aaQk8WUl0nxeDnRSPySExSilenhOdedTAzCw3d3sOvKyvog2m7Y0NDZPx5xdPN6QEZFWt8vjsElKITVyinEhnCeClrD9PLP3%2FKLCrBg05zMyB4Z1iywCPQxKcVUxVIwm8KiVQt9JT62jNv6FvtYCp6KxcDChRy9i9EcH335iglGFpEfak%2BILnUeWTcf%2Bn7%2F2Mtt4ycZliT180s9e1r864ec3xB7j6pP3dFcxydIof1aIweR6lbE%2F5eHOjlrVUu2g%2Fm8Dgk01%2FWDojDgot8klxOzX1Vlcv3ET4Szk7UKHSu%2BpKiWcmcm6P4ItjQS%2BZBmxeTD6pajRBjqkASCyRZTbezlMblGbSk2KuAqEqicwOw6nnJqY2wamzRTX0g7Lsk3UA18SyDtI4EXuF27NFRKn1U0PxICBeY0u9UXLisewv7exXl5%2FXhq2BrjXTyb%2BbX0OMSJf68lWH0x4kwiemPxu70ywWx%2BY6%2BUxaymehS9PQ6Q2ComM1fScAN4qMQQ558zGRKszIbYhbfPC%2Bx3KmVIH0FohP64uUDZgRJLu6aav&X-Amz-Signature=d9b4e8c9ff0b96150f4b2f231122b427c51c4384fdb0d4a0550f309413c568d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```

</details>



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
