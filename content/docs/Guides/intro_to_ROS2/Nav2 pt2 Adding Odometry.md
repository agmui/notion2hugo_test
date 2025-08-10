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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=ebd33e2480bc9a57a3fc8ea836d493234368a7830b6142336675a3ca66c37560&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=3548805c68da5d8bef5f18f01b8e2e26e21127fdf0b8a84cfafe2a000dd338a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=d213588e5f1e2a7d259beaedf26ae8237e021878c53a74fdb76d83f9c3ce68f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=88e1d371721123172e22c4a7f9df0e185c94a606dac1d11d01e6af65d3cea01b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=b233678fab8ce750a1b032fc5d16127cd9ea804aa1a7e079b6e0fcf925c04eca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=442f44c89a4569518616d16314415053ab7582eb12e02155528ee040deaf928a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=135414f1fc9006fc49bfb8ff4061081ea7e45c52d1016d59fd8c27811ede1e19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=61be645bcba07b68dcc8fd379be131119c8009c36324b2a6f4a9a5518cb5d4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=b7a1416e2889c04aad2c92efd0e2e81ee3a8b84d0848195fef6dfcfa3c64956a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUJW3DPF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC44Fm5XHciKxvAtqdmsXObApWgvo51DbQnNXDhzOKljQIgA8HiBtfG1PkTToia7f%2B4qVpsQDiBCjkPneuIMHIuj4wqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHTV5zC8Zx%2B30hfNJCrcA8yLPWMNRj1mFM13Lc0D7kYhs5NhFsarCD%2B6raWunIEU6uF58VyHd79K7T%2BkW9eYHSNL5JPE2W4UWQQiHo18Hw4AkzA1%2FL6wtT%2FGupYnlfdM%2FcsOxBArMF2kUxGmB1AOXMqn%2B%2FuqMVbzCCB0kdPMPU9D6tipslJa0DQS4DAgLZ9XjM3aYjxFfEc%2BziGAVaWqF%2B3RmLxT81WSiEqox2dj4sKupIwAi3bLCjWbthBWSprlse1unID%2BCwPIghPzi6TohounjzsMqdWmMQdigPMJWR6V5%2FyWI%2FuBTOl8omBzMOOngIyvCMC04DcsvNWTz0YiODK4jB%2FVVaTbXPASCxuaVK5j0bagkBDGmnqI%2BLFJSSt8113nLOe7CKXvfXGtEDkfQ0ZUxl1%2FppgcQufNCs%2BdI069UUJ3J%2BHVaAJNyjNGN9g2Pjy%2Bv4I3SIjoEnlc0k5Zza4XNjhGCqeOTx0rrdwdzdvthHQqJK70%2BUfQPIPXGCjX%2BeWIScz5vMYWiVOPpV93CEU4DxMQQNILsP9RSULVbmqCi4nBmfZ8fikag9Kua0emsvuUF2l9me6c%2Fo%2FxPu%2Bd4cSltOYfj8%2BHS9CJ6gNFFrJLcT%2FPoNxp5gBQp12B5xSWgK8WPpn3yIRWcHE1MLu648QGOqUBE6iLWXV3yyPs8JZynRMQeWSI710zjmuqPYerEK1SWAM7k1PzIYkYxdGObyNKqFj8Fs95IDHW7OE6s8F9gKQDusrAnvRDtDvmZoXCBCVSbnVFaM0F4i8G5Yg6hRj1cGKWtTs6BwOM1Eh2B43qIUCVOdPdnv545JCHl0zdXEOu0oBAqxzzPoGXU50JbbK7Y56Mkym7%2F712fktiTdymo76wQKo2jT2V&X-Amz-Signature=4184d177077e9d961ce74103e90d40718aa1175da30583d38a8beabb521759d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQ45MTVC%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkyRHh5UldQfi0K3NT6PU1kt6jq2dzFuBY0QpBDW8sjwIhAMLB8cHletAFX9RokpsuBf9SrGdJ6AgFJnh2GUDPl6hVKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWBoUOJDdF%2FJYTUEgq3AMKcgWNEFi1yWZN9cQA0pFvoMHtvDTT8DaEjBwedIogpEYi0g6%2F6sNgneKzbAPsSGtyq658ndxDFERIPZBYayVBkqqEcL8Ls7ZQynYkN0Lam9D09VxQgAyx1DMNtg8yDKTPDQqpqSIB0ZLxF8kAv4FY8i8s37jUEuJihWqsISfVY%2BCMpLAdZj66fmKVJzjEpv7c7v4Mne6jSzO03qDJp6SH%2F3lavvY17KB7Q4mPMSH9CwMyuqHBddzHs1bC6%2BOhYebZCA%2FH1BZu8sQAxL0A3HcT6qYE4kd99LbOSxp5nIt4u1ja0hfhwekjYNdYtgt18ImSCJOVbcaVFiUt2yrhshSYqRikYwc7TacPHYRSrdslP4Boh84QwNR%2B0jPOyX%2BQBByisgHcb7VTJ0xIZgOMJMvIrtoaXjO1g%2FN6%2B%2BmGByU2hDoXtDF8ldBDCfRiplaF864C90BujmOFFrRCfkRPH64k2KG3nXEI5%2Bi9wPoLKNb45%2FlMUxpUDPoDnJnhXNUHPam6Ca%2BPCkdHNzUIFMj%2Bis7NTu7qhGkhVcEd3%2BQFn2AKTPHmZ61QMYMK8IOEnobW7TXE38gsZmphRpDGeVaXO7G6ufI%2B%2BcI9Z52b74n4HtHlYCty8UazViLD3pW8njCruuPEBjqkAeD2BPcWX%2FKJFeKnm27v0bIeKys0wK%2Bel%2FNB8uXfrmrqdHg9LqBNjEoH15v%2Bq1PB%2Fjj7duKcSJN3iTILWpVOyrqLfiTe2cQ2uM4X43%2F3UQXb%2BDVz2QGlXMNeQ9sioHaZz0Kh9AJDCMz3X%2Fqmj9LSCHdR%2FL17k9Pblhh6eN0oU3QH8ZjZEokOIh3jn%2FxhJQm5uW6FOyEyxYkgFWdT6QugEBB0vPw2&X-Amz-Signature=c704ea00638e37b16b7fc6fd8bb4c0cc9fa6bff71f321ea89ae512d146bc2143&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=52153ab9a5f996875cca65a374f88d4a68a602d872c1cfdc3a1fb9ddb3635f1c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=d0586b50f1551326b0485bceda4160df058d74609de148bcfaa422e319cc1dc6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=ddfb17d4c2b89a0b23216d3173cdda34d1015a024a50f3dd49a3f00821e18404&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=c9dc8a409fff97b36a74e85ea8d7cff5befc9b0bdfc050b945cdcc7862fb32f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=e6845b2b3bc8fc41c5c7072f6ba5ce053f062c4a5f762ae00fa5cc715d414968&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=f5f3d2d993d9c224ec1427e6290f6b7fce48c8b13703c551bdf1464f1775b7a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=4677502f988ef1aef042c6d49dc9e337948309ff7bfc775228fc96364223d756&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=26f7cc1c25f29451275687e9f23773ca0458ecd3af8024d7903056b3eb171863&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSWK5CMI%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDzdCC6R1i3eW5MW47qfdFPdVqF52ARZfv%2BCwvVIBMLxQIhAJOR51GGbG6M3BZ2cJv1IyG%2BVp3%2F%2BeLSjfUs%2FLYWdM5vKogECNv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzRGXrPvjVV%2BG%2ByNzgq3APFqkKgnHxTTn6JkK1mWPDqkgyJqSAUxbP9XAYT46U8GHZsqURa3v75G0bvLEzWKWi4yT%2BnMfbW2QEfS7iGhU2fvpqifTMGhchyv%2FfVbOdc9acV1mvu7QseBHuaV1fkQQg%2B9HUF221AGOJTM%2FaTW1LsFt%2BprvHOLRzZGpr8IZ2mtARIBWBy8ze2RurpaFao1QbLKPjwzmMzhbU1IVDJLXfe0nBPooFldLAGoGLgCf0yVSqStnbpyjlL8rVeazdJeI8ausMKDnB9QFCuvqvZnNSQ3xQ2KlsO2eOvPy4whW%2FGeA3nUTX%2FoKfoZiG%2FIVcdTJSBfCAXeXTlibJyoXB8su5dy2iuTvWVVO3Zb%2BaaX8tHVY6xHV1%2FIu1%2FxpfXr%2BKJS%2B9XWrSiKTLk5n55oLQ4ppl9IA0h8roFsrwUTiHSeU1e%2B968591yDCpTIYU%2Bqk9yvl09nnxXdGcTY9U%2FcrgyC1vOuhokBzOAoJB4Nh8SN2fq8HTfUWPMB1aeYOxTVc3O2wSrNXQcuPfj7En60kldjfO4h8sTkg%2FFC9ZWJ3%2BS9%2BSihm24g6PTEpc2j%2BR8mLXn5%2BerSWfenCLbbNsiqy9XbfvBIk9iKBIqLEbRs17aQx%2BKy%2FW5eMBDHKaJM0cowTD%2BuuPEBjqkAS84krTXdE9vAc5%2BpyRSC8IU6y4eYD4fkF5CrzklQzVXQpuUOvq1bd4cnmOZEjOtY5%2BpbI0HtgqNmuThg7%2FSMnJrwgkjvhFCEXtPZJhq68y9hK5hqBQtPKSE6wN8WsvG00H3NdNXqh%2F7GlaDcW%2FEH702rQ2waRZLssX9iFWnleUa2IskkiUJYUtFk%2FgHzlCeTAUuqUmf%2FFI3j7Hl9ZzhQmGLr4Ym&X-Amz-Signature=975397db96fe6b29bdd7959ba4979131c755e5070f40a597a0f3c398425bcd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
