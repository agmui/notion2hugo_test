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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=0cb498f879e86ad313bc92dac7223c3374664f8a73bbc135deb74e0e7c1079fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=ff58e7fdd05a2b0610c8f1a0490e9980ddc5ab4bedaaf3c9456bb386e3e1b940&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=6c7bfcf129325aa8599c4f0dfc3b1470c1eb1979b306a5d1deebb42677ea7dfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=f62d93f405003bd3b63a258d9212e5d3b3813b58e2dfbad2bf73de5790187dae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=44584895583a1322105bd0d1ef9a39e834399635be9af518aa0e36b976052e4b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=abe2f820f5264ce5113bd27148e4b4c3fa5e2e00ad1b8ed4fd4cc3d83c72fe56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=bdb03fcf3fd42f61d72eb75d025ecabd0fcb8b722ef9bd6a255d7663670d09f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=1ea627d2567d40a442f4d2b28c20a8a918daff6647231bb92fe87de215d8f534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=652131b21665eec07dd9b1148fc4b89d4e1b2151171c6ac49e6cd570d7695a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VLAP56KX%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIQDNrgcnSuVdlK8fPrxchaKvFV2DENlybOFjDTBEsZqNvwIge98KPYcRbgNB1zXOqI%2FTBmQMEwImY11UPGNlW5UN5lAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDDAXaXDCEWSIt8z%2FAircA7FUEirefAJ1YFzMAwkMTO%2BzdNeeZWCNBZgB11rDQRNbtMGkB2L0mrcRnM3028ILwZKjPRBOTiqOei6p71rGeqGDR4WAasNh5OMrl4o7YmvHP4co9iPgILae6LHBqzuS6O%2B2PjzWJFOtBohnVjGaFXdxUFh%2FXsLygmJ7Kih6qKuk5a62iMXD8k19tRn6ms8wCVxfh1MP8HUtUhzKZj5wwzQFiDZMqO1uxAUdI7Wmb7hU7c3qbMMgpLxsYn3Z1Dxdz1ODNsd0g3w8nxBqd%2BoNXTDu2N%2F47C%2Fkocxc6ain9EOe0VVh%2B7AXrfDfIsLqgkBb7ezJyC8Iyr9pwQxNoLqarpBY5JqDGHP391T37ofSqMSHm77baN7Jsp1u7NvkdPgc4qBqh6qGkkrsGs6JHKRCjh%2F4giGWFRHxm1Exr7742ocbNgNln57Sb8B6doe%2F6CDvPwPIhZHj6LLW7PDxkAtDJl0wbMPgAVaSZLzDix4IqpHlqsq6K4dT6dg4aD0q6CYAPGPmagHgxX72KNYJ6EeODWBAgwV83CCkB7i%2BdK9z7rwXOR7S6PoP5aw5gwIAl8JB64EbJN4aFYlKVqPYhy15ynxOhqhT%2BnTCPpLIWSD7JySQtfmUyq1KZB5Th%2BofMKasx8QGOqUBXC25LZ%2BdmwSlXZAKDSJCqZWVdewb7XAaYacLGHLsxUSz18Hcvq3sV7tSvTnWLf8CKVIGqyzRSAm1vQEOsWJLPVVSa12gn9H2fSJH4KK7sBZWb6Rw71u%2FnolUOpLP4InepsUhPY5UfdIml7HK%2FjmKcx2i9ase1Ve7heJ1Gv6smu7yBysWQAvoa%2BUYaOkNWeD6KDA9trBWbctk%2B0SOCOd062u5Pw5K&X-Amz-Signature=f84f29aba2def3a0ae999c65dd437d9bffb221aad8fbfe0c0eec6fbc50de370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CTLHV4D%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIHD5znJS4PRuIrbwNMYMA3Ehjas%2Fi0xY6jKCLbLouFkbAiEAq%2FOD0mmaAquTHRoN9dFlIAiPczOLFSKVOMAo4gMLy28q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDI%2BbNmZgiPB4Z0VkWircAyxXOAEWtdx%2FoAZvQQnljnOhCxFI7yaXLWWbKY%2BEM205OtSLWD5Q20ZHE4UiU8olE2YlmXSEDpjU0pYP0hkaG0EFiioss9tScpaxzjqEe12VpmP%2BOcay36PO7XBj6nb9ChzDewYIYyg%2BLdhJ4c0ly9SfXP7J10m99RuMnwIcw20NEP1Mh7%2FnHLUdGJLEHq14d3d7ZATnivllIhiod70kF8sRycBmijCepmQ6F8LUHlcLtd%2FBHVzxAuWa7O2Bj2p%2BJ9eC6vVtF9k455JxQcHLZX1Zudq7M0QCt%2F1vyKOILmHWMMPBWHnxAHDMU9ve%2FJj3OhIITtfUCfpNN47wZbAwj8gKDsFTfFwsxzz3b3ReKFe7nNKIr3ovifrNzUWVm8zbrsyGMVgvZDlyHqUAVgKIxZ74aUzwdiW4LyEv3uM4WC5N2J5nx3PQnBt5tFK%2B9UHtiqjAkSFjZ975d45SKFfJMBNNVA7db99XBPmor5MxtX80utH52R8YxpD%2B3sMTHkgGBIEZJMvaBXr0Uf471snHZth2c8Jk6dn2aIhBNsgz4ir08SgMeDAfZdcfmgS73YP9JFPIEQUPW6%2BiYfXL%2BpXGRhvW1wPzjX7qf1yn2JyxTJLtYGiLcxrw1VBqrGprMPusx8QGOqUBez80tSUQfDM1YNXCUZZABDVmbKRP59U7XvMVdRqMcRxChSp4Wdftb9W3yJl3VpyUh9nmYrRC%2B4G4yXK1jY%2FVVzPuULgCIpaVScb1wimqIx5KKhRjtbOHf9gVV9hZl7Js%2BMluMs6FQjvPHzEUHjqap4duh31p3hT8Q6%2FX5tw%2F9rBwrO1UTMcF3DZQ6FGNIgwy%2F64uqyWSgdOg2PWwXqSZGKPwIh7E&X-Amz-Signature=d560967d32c4d5af4821d369a4a5cde9802b7d18eee5d6fe7448ceee774cca03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=5b5f2c08d8d074af7ff2c1a844bfb42abeead8131512d4be94fdcec133842685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=00e2e40c95bd3aac20a7898289a277b07c49424657560c87b9cc7012c36140a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=044993640147ea8db37d1a618d3d425f338122028f881748c85831a714aba52c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=6d720c53fea3e99e08e0c85d8d516f76ac7badfc5492047d1d3a42c4340b1a0b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=74692f08b1180b36851f20466161c313bc61a8c2f349f4e7badf669e135474e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=82cc5c9408d707454f6fad4e6c7237bab6d6057f3403439c4609cafc057059d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=b935c2da879a10bfbc07a99ee0777d1b60963aa20994850b554e384694d8e509&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=51073dc50b6b99ff3653d8d75b9441130c373d4e7e5b55c17f5f9af37db93349&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLP2GIOF%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T111005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQDfTCFT5nakIJVQwbTzLnvS8ZdVBJ9C0tRRjPiHRt0b1QIhAKr1KWd%2BYkk6EfctJN5eKcV4l01UDZAIgx%2Fsnrm0PFYxKv8DCFsQABoMNjM3NDIzMTgzODA1Igwi2zxco1%2B0lQTCFSUq3AMhaUlzEFK4ghXKnw4AqpWDHwy3JRo7BTH6ul5JFJalsdEf%2BsyW7FK0g0nReXLsBULabpB52japX5yC7a1if45B2BlCk9Y8qokqsLV%2BW4re2l2oOuhMIshSnCTpxVTayXH4D8xGc7iTp8AOQfQzQ0ZUn6IQSG0h0Dh8uK13SpZNubz3mi%2BK%2FDqRYULf8Nz4siHcI9zyEXTMVAP81nQ3zVDB6u4KureCZFHoWkBHwQ3XxmgQyykO1owknn1cLK47aEE96SKM6E5qFQi2IfHHVcGYHDD5amakTa7fkrCwwcI%2FA0YBI6beSSTxm02gMP232HxgAMYElyx1OFTkVtc8D%2Bo0S3uR4kqamyCIMrJuFDMZxXIZCKxauMnRF2TTmasT4Qa3ITdgjIUx7zW2Y4OEsO4QREV7fHv%2F2Ze8ZjxXGQa0lVIH%2FJkuocf2EUYVpGxFdoU8fWdK1lTXbX%2FJ4Js2aV%2FjTZYzzpwaekLSFROAu5pe5rfFgYpBMdnfcGoUVarUAyzfe2EDCgaTpm6ESaLB1DXgZO1BHqeNNRF9dRsltor5c3hvODlTOROQ6d4V71O8OU51QQTBxjNSt%2BZzsP8hkghzP5WPTnIibiI%2FF3nXkcYnU0Vir69bElsbF4gfpjDOrMfEBjqkARNlnKZ%2BCxUvAoQc5Buhm2MhUvFAv%2B2u2ED7fBYurpsDwRn2FJbcY2sZ2w1M8yfNNi38RgXOWSPAjH9Ps59mNWUKe3YxMZ7RTpUwmM%2BzgX0250WmrpDoMELd7FxXOt4uR1gUnYztAEjbz30cCmUoU73bFu%2BC2iSAGcricSFUsZLTbZHQnshlXRxMVTrG0mVjOH3fTQcGCVCOPEGlfjozJBBwHAav&X-Amz-Signature=e0daf625fd14654edf08f9814d4526857b25fd742fa455a0ade6d5e6506b44ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
