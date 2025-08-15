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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=71295568745a980c2e8c451eec6ed13d791fd82c0310d73b8906630d1fab15e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=2ee62e71aa85ac038edbaaa200c372d3123067bd3f97137bc1d5961217123dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=05f68a775183a8394af3395e02532ddafbcef0d7bc26452b9e39387dbb8abca6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=be2aa7bae37438fc3ee37140b90a9bd46cb26a60038af6f15eced781655e7e5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=a04d640cd9fd96337f8853655b363f7b5e91b75e0224ebbc8b9318129b935f34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=7a43101e8d1c8824ffc1f45f61e41eeb83aff72663670bff64ce80429a7994ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=9932b965f34de77074857d8b79f41044f89c45cc8794bc0f4e43e73944fcb8eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=c39c703485e9b795bde856f282e6344afa6df127274dc97b573e654fd1eb4c85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=02dff472a28b49e93500402fc4c12331db96d79a66c80e50f2a4a5109711df3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHYTRHSY%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIGrMbM%2FPfSeYLHxVDXtfmTrcQwOwMHmz9gYVkhkdzDnzAiEAw1h7Y7ZOfscqb%2BGZkHM2fa4bV%2FAn7i2Y7lENPhH05xEq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDCzJJdDLlXfMHIcxVircA2MuFoed64Za6VP2EBCnlKv9bZ0V%2FA%2FpbUn11rvyXtmji692%2FVbvBl3E3ID4v9AgmX5ZjVCXIVivPjSJ8iurzVQXBW9i46TdJ4kmGMJ6n55UMPYGFQuDL6K1SddEMQOLolvbZ4YkcwYun%2BPDpST%2BZ1%2Bl%2FTybQpnriyEadJ0YVxAG%2F%2B0ct3Mg6%2FceShHA1bnulk6Rq98%2B1WJGjE%2FcRTQ6HyXwz8YGNHojZ4%2ByZwFWb5ykCgV4oidloo1d1HdAJ9etE0bqvFOZ4uQjtVOEl5WJWpyQWYmB3PsqpVJiaXo34UoSPq4yfiAEr75k9m44qDxYJDj1yd%2F0BOCIzMyAah%2Fj%2BV4CbZLrm3JZTvqZj9CkrUgUqvATvEX%2BJhhmrruv4rs0O7G88MWl%2FkjUcd7D9cOlcder45z9aE6u2ySZrXKhVVca9Bhhi8L4n8vr4Mq60B4i6Ug2voo9UFd4SwvQMTIoCGfXmtcA%2BlbDTVWmEKm1XJotdGAY4iV7%2Bm08m%2F9zl2JoYiJA6Qt4QDV3hZhdPUAuSNLieGTh6qA2%2FmzYAbY6RLtmwSAEhTCBisQ%2FRC8CS4EVhtwXmXekg7n2yksjYvKxcxWOFDuzmZxN0RKSBHyT8u5M6H0pUme8cgveZ7K5MNu3%2FMQGOqUBnQk8ZszMfIWhhxJx3CieRqNxfUErZ1yne47UzIhZssl0oX8X8PB2No13lGDjl%2FO6ID8m1WmIaXleQzwbvuJCcrvOvzuKFKQh8WcDHtTFIMaoWTNh4tJ2OC0080x2ilplD41l8cGuw%2B0gvN7OOYt8GQ%2FB6WMjMpelC8Ws%2F0xmV1nzmuyfCcSXidrYMMfogrb3jybRnnsjj16r8aFIZxDk1yJHBtrO&X-Amz-Signature=770ae11a9095152047227222f963275fb1e72c13827538443327a0d94bc73132&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKWYL2AA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T141003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJGMEQCIC4WF4FN72AFuv3Slm%2BDqwg1kwB0y0SB9moLb4oa83%2BFAiB1xYT4HMI8rJCZy1Iv1eb3QX%2BrNDkFH8BNB47PDqKLuyr%2FAwhdEAAaDDYzNzQyMzE4MzgwNSIMxAqiSl9UtRxx%2FvxeKtwDrmyy3Ncvukinw%2F1eXhTgMsYzTvECZtIjwPml2%2BaMl2uQWTzcXHLQvIXEKZ7X4NQS6EiyELvvMGNtp%2BFrBOd9ekRP7TXX7z8NcF%2FvhspJ8TpatJUxDOz28n4PE9YBtF4FROIwHyWYe5QCImhbGi405e1KR6IB2Elf7e%2B0xHU1gFdpkdY2eYZ2AoT6lV1NgvSwDQHYpSBEZOJh2iRAGxkgoP6E2uJ4gUtbYW0PT1lsRX%2Fj%2BiRIl3W5G%2FZLFq1DjwT4TWuoCFQU9blVFrTxAZT8hARD6H%2BYr84gh0JQbvCNB9h7fTNpjQJDucxFi2kqE3LwG1XQo7JaUPmnQZJmv4biOTgaLqVhUgNQ9JLxCgu%2BTJXyFe12zQ6M4WmMcIDmfw0x6hxwBFJWyQQgknuJMqTLiJwcnMDyLxclibq2gpAxe3VbceTBeWnxc3NmIyF4SJHfHL1iIMn465WVwgO2Wm2WTFCm2WhjROQCvHiw0%2FzrVHNAYAXI5%2FjceFWSb0ksTzMxCvckwnOtLdxKsyAzbT1Mt6sQju0bkDdYbWOBGLUpEXZ5QLCb9dzjWAH1wKr5ndGGLJlTUn%2Fsuz96GW5eX2IKzyTcjSnhwrkmT3bbx3merqthKGBvUAKAAQ8toIcw5Lf8xAY6pgGc5jN5A582PuKASEG6egKQfarqpCEtwK4G1rKe2xeBg4zGknSXkRGGWZxUVl6uPi1%2F6KQvt0l%2BVWVEubswjV6oAa0JZGH%2BBnFIuTXBr67igbh7lf%2FOAuufgCRkdFVLpKjanzw6ip4BvGnOK0SE07es7gB4s5fI2Fo9I9vx%2B%2BgyiZqMKEzfvGkBNxMrtCJ8o3vL%2B4H38LStUNkRlkwOAJWBbtyv%2B3Tm&X-Amz-Signature=24e70c26a74c2f2a07cc0c891fb74da821ae8c085924ad201eb10fc33681db7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=d0d187e5de325697215c03607cbc273152c07cf4251e1e05fc598022cde792e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=98ed57239a9b6f5700d0ba178e36b06f4db0bccd58f9cab0c6a375f563f6dd07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=ec15c66f74b0e1027dcbe566068c7dc35f0fd2cdf36d2ecf0e924de2efb08f07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=295c30dae78957d72cb3b06982928e234623bbf56773df2df442ba531f7b2ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=21d8cdfb9929c66e2fa4cbf2e050b9a53f96551a832a3d4627e842de73e74e69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=421a14adb5495bfac1b6ca3b5e33dbe4cbd389be4e9a50ea40074f02c46539b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=fbbc8c314c76a577bbad1298ffef04cbbd3a7664a5a177a4fc96fb9e0b749485&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=59fdd75f78423af46a961d6a9b98e74db10063f6aac11f3a6648253765cec7e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA35H6FA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T140935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJIMEYCIQDIHvjtBMukFhEmB5AZurOSrYgZZS1Cj10t%2Ffo5BOSBowIhAIiVKkRCG4MXOCXR%2BXcH3bdD0S5N5Ri8FlDZ01KyDCNnKv8DCF0QABoMNjM3NDIzMTgzODA1Igy0PiFgLavW8JoKYPcq3ANCVA9Kluay82yzjBUrO7SkLR9wjee%2FxjxvlEZOtNbfj1jMn9QM%2FUZGiho8Y5cCaF0Q2WH8Mc49Lgu4%2BiYj%2BpeMvukWxkLyCsGkTY22lL8X56ml8StgE3UpELPE8kqxXduYLadmEx7lOzqcijRkD3Ht3GsTTCwUmXLoD89%2BQXtOspMAbrhLoQzf%2FbnPCy9GJMKgYNjp1%2F4CS3CrxPRbl0XMeVgY9CDdqpN5xfRHDipqXSKZtqfRBta6TTwZrJiSttUcZOkNeyvVjaazK2H9z4m7hPgXBlAEmh8sYX8kPmgifb1E2%2Bn9H8PLwDSAE51f2HDyfOqmwnlUeEE7LffOwz1jEINUGeCOfVU6Sr6J7b9pwiXPbdtgMeLpi3qtxbz%2BDg%2FJI7K91Hoo%2Fazb2HQ9qT%2Blm4LvrbKqPXTzWofCWwtG2PIonEWP%2FJAuPZ9NN2htClL4MpqwvqIrr1wykKF6uf614SFIS2EFhyRieElDgCJEihnKDu6u8%2FX3%2FvHrI3%2FUn8l4d7jj6wbh8oKyVWHaRFMngbo3Gv1h6S1LTiaaNBZPi3tWyiBo%2FgZqrRCxwdTsMkQrVYVTZG93n7MbfA5kf6d0NRiDggTkoKfcE%2B912WbQjFdtU06ztTL4E%2F0gJTD9tvzEBjqkAfZ6bf1xHdN0SmsDl%2BzRO9Sjgj%2BYpUyuyPnibYwExKWEA2aJW9X%2FxEiaHiaZpvB%2BRvp7pwb6nfaMOeqyAOEP35JiNALQmwK1CdY3s8QSZrsaOzkeRPTS6Ys80EAo1QRXCENYDi4aMH07PK3WdwLTlUA%2BRtQADN0q%2FtfgYU%2F%2F%2Fa%2BcV0P1mFDjYfsCYQl7aVIT5nPAzXRvniaWgkQg4YFLrBS5h%2B3N&X-Amz-Signature=d591fdbe0b49b9ad1fe652c83e905065073e76ab45eedac8335291e78c2b7b80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
