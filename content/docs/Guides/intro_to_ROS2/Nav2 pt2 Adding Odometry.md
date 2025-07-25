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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=7e4e2633b49adb4b75ac67ea9ff0f51aeb0d412671e173b24771c161478780e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=e932eab3d662c6b9f40a3fe41eabd478dad2d85cc87901aafc69f0037e50d3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=2984c101e5362484009a2a4a3c72143ba0f89b481bb65432c39cd4dad214859e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=995ff43ba71f7ea35221a095362cfdbfe8f9113aca14490a136d67dfac7ce102&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=3241e62dcc367a1cf0c00cb88b39f81222119e58f26dbde89bf828a7e4c568e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=5110c60478a917d6e0bfb7dc86337a85b9c801ef2e3530c859440f9d4dbfed4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=2172dcd7eee74f4a6a97b8259317f9e37bb41642b1dcdc18169faae9ff9c1bf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=1f17f323952f78387da4173143caecedae97f512423c7df67f17543ad85ca884&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=bf6c221a183013ddf0a6e66732e177e4bf1233af1943f6aaf1ac5c8884cf104c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOM472Z2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190959Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCID4MPjK6opuKqzJKvRngpjQryLL8po7QBmrhkj0RwcLzAiEA53uUhxVzGjehTmxSncC0FzdivV9L%2FZ7rCVv9EylM53sq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDJCE1rnY81Nmz6CnRyrcA5aF58Z8jXY4oQzhuadqHccgPOzNhjxg%2B4h5lr1w1DNh2o5TjckiqSa4UimZWijakR3HKdHsnJQmCKvYvR9ndCcv4A1bjuaqwJM4Q%2BSe0ZHBZ3NF3wCuz27xZ7t8FPiX4vmOM1IqRCor%2FBpS8Ua8%2B6UOfYp2el5DCGckKnzEp%2B7X%2FAROkyn5RszryoJsqflnoFF6pZRxmox1M6wHYZs%2FMsIyON8CvqBsX9nGvVEmKlMwBs7i9lLe8qyM0VWqbOzakICvUsZ6ZMIv0oLuGMPu%2BonfbCgMRHxTleZxAHyHA%2BavVUOG6c6nOHmqWG8w4i2Q9EbhdUKoWBCogQGQs%2BxLnncsm5Fzm2%2FpMlrUeU6UeaG%2FSUT3vS2eB6Rk1hBAaPXrpq3ttk8Wp589MSHoGDecHnwGo%2BL%2BvlW6WtmSt3lHkZ1Blh1puzBsf5hsc6RuEiN30DounctaXLlN5q25RxtVNOAmtEfKE6oYmJrLjnpsJv7kEMTiFnctnvi7Ei8jk4nJindw0ncRlYkgLhQL5BgxahErKLF7Um9T2IFynUjXHxi12lqVcov5PXupTkvAoeEakSgHO9MgOT4kCILTbnubsM5vr%2FLY0oR%2F9ZlFnL5gdtoQhx7lNslCSL2f%2BFcmMOSqj8QGOqUB%2FtXvLHak%2FIByXA7WjkV2KEctqMH4CLZVBYtki3u%2FA9FWLEDxbhLXUCoIrHS1oS%2FhHkgNrysA613fieaDiqJiLEUyA4zO9wlHSJLMn%2BEwK0le2ct%2Br57nmGmpKuvSmWUffKEez0cTDv5Gkv5fy2Qnfsh56r%2FFmaGQUPPt3sNrJ7oLCoQaOw024YNqscuSn5%2FePHAisBGoaHTdUcYCle%2B%2F%2FDju%2FOEH&X-Amz-Signature=841e4eb4bf07948aea3e348aad3c0858794a291176eb8d6f58d1b84995d32ef8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666L7PA447%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCICbym2iVpkbAzTBknxxu2CJVXPj4HuN6UJEwQ342l03%2BAiEAw0a7QXPGSfPcg1z575sEYHiF%2FJQvMMafXJxowIkLQqIq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDN3ksIWxUNhbXz8xGSrcAwT7pE3n865PZm77fQx5GPQzpIy7a4CwpIj5DNwkLJEzOksAKZe0S%2BXcsbVce1FJ7nak8oWjBnfO%2F70FlcIi4XhNI4x5T6ELE3yuecyWbfL41LxwZIWNmd7TC1U1RAgwpp8ZzMd3gi9sMmNmTSeXafyIsrM5YBY7ro9aQTlIXoGmTntwxDpQbckbbgjKyfpbKh9IiXlr6y2UOQ6CKrnQlZpodHG39onx3CgLCf8NfBmAYRl42YWzbeQc3MYq6jwip1GsU7czofbiD3CnA8tS2vZ4%2BHxN66%2FRMJ%2BmIr71RUhukHdFu1mFDkQs8Q09nMC6mzrApFf4wsk05QCfKtpcoEMvzXiTVo9YuvxBHOIi6FcuHdnvauS0OwWflrwrdJgtFZDlFEI%2FhWHpwirNhacHCpk7XtdTmcIUyhVPl8NtuZoqK%2BbM04WTDdOp0t9avDmWChow5tDVQY9kjbrayLi0GnRqWGU07z%2BAH0c8U4qZAr8eJG6YNh0l777yRjMpFm2lAqri0tvAx8Bx3kCiEBDkJHUSdfeKKjgkkVzK4R%2BaPM17JqORkCQ7jGDNkQ14jvbdhEqaPvGEbWqlXwYVxbhC2qv3EyV8ODt6vLR%2BjwVW%2B0v5jt57XtNbktPCpGd2MJyqj8QGOqUBGf1QqC3fleyD%2Brq2N8n7%2FsQk04EbdpwWjqKumsKFyDLZvW9LOtcAIgG1Eh%2FhOIpNqtGjMCW9GpiFRYjJ7MtV4qbNTNElltqDeFpy6ThToobfE8wgM6qo0WC%2B9ZjLQMiVzsfX%2BalO%2BTDYCEO21LzhmiovhUbb3X5lnBTYyhNVhG9TjD9iiNzBE%2F2kzMVlCA7ojCMHxNhpNz4n1V8pYV5bunoOUNPu&X-Amz-Signature=fb4e61e417309ef69acccac2cdd550d40233eeb3675c3f66f0e66acda5c2b307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=922510df64af3a5774dd81805add26c09aac71bb5d0550a69d55bb600d82f14b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=08945e60e4164463ba26cf2d0658f767018097bed55341d8f2f629bffcd1bb1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=25b399b3dd9c3edf4bba817e98b3597a103aaafff35fd986964bf7a92eb14822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=38002efcb61b1fc780e3fd838c2bf05b0bb6f99fdbb98382677f4d6208ab2f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=cc23831f53125a1135ac5118a42fb9c474b2a738b827a7be1146fb022938238a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=4a5b97e1cf04714e66d7d841292fa41ed5d9b681e730082eb3f0f292b207ee67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JXQDUFM%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T190940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQCRkWPyHHDYgMkPcjzk1L%2FEJFJKZc9xcEcQNMuNPmoPhAIgQaM%2BJdXfTUJxekk0SB7GE51tB%2BwD%2FqYB0%2BeKTUpVq8kq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPC6O2jlxogdl1XORircA6vaq1RU5WYZwaowPAmf5gIH9cC3SPEeM3L5InnEuERgYqGX5Trg9yMoKgJ1WtFNkfzNJA88E04Fc%2BHRj9w%2FNDsyOYMxOLmjb%2FXwu%2BBHDLWYvJ%2FIlDxGOY2qJPn2VQDNV8P3OnGRJHHfGHzGuL1R5f2HEc0sZKokFujj6HwKmIDFfZR5kqvCboCb0h9thiUQEoHeuD2Uhp4HBEznpTqq3UD%2F4ETXtB10GMcmie2%2F%2BLccncpEX2Q6juDvMVuoNoPGaYgZTNFK%2Fl1tAAe08Cj3uS5u8qvoafBE0KrRf8cEwtVkZB7UOE4O0WZaplZfESoyF6TdRkpATQFxKH3jm2IidNYVhy0uE%2FdkNu%2B44xMPGcBc4bTEH5AMrdKxNMlQs0C4yY9VTD5TVOx6oUtPsW5TF9niv6wxmjz1x5PU3xU%2Bf1xpXu%2FHHsdwEVhBm5HWMtxrA15KVy2B2Jmyirvey3wp270Z%2Bml4YUmp3cKNBElIavNeIEK01r6teNdPHP9Kyr6zIBLgfTwA80Ol76muIDfDUhJZeJ5OBgz3TNTVXr49BlbnAbFF6qtXXXc3djCkA9Ut9iCEM11HcSCdIURgP3Otm4E0Cjv6cqck7U9%2FB3GaP8Ljcbm6o07YxT1jVZi%2BMLiqj8QGOqUBCqiLhBWhKzr22GAg9W3gSiU6ZbHOFwYe%2F%2BnbUHirRQ%2B3vqQZai57ki11Zz9SxRTOKNiiZVXty8fLyyOSCFtGZdb99WvAcgsFRexXmx2v8wMrWoUbQxxk3opSk%2FA4zambRigV0f9HWprBmTx0gIUhLbemPQrLOum4V24g8zNzcampjiBM%2BBHdfq6wdasLPt%2BLjQSH6FfanNgegTLhvrkU5efNd15x&X-Amz-Signature=c125981b3238f8f4d5c51003cd6ce82573893920c4803202ec77e19785ab6ff9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
