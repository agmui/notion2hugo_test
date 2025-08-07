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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=d19e2bcf52baae060298467aed14b28a44e23e9a6df95a089a8d300619c7d4d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=b108f73708c948d2544206613d5236ff9ec0a9a973cb42b2910d77661907acb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=304fb5b4f251634fd926d7dc3d0cded296a340888bc69c854f18f77cbfe63f7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=be8d2aeac651542e8ed3c95d0ed9fb965c1777911a3532c4c24c9c6a2befd719&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=19f78d6701b9521b403e0685f1a5ffbec8bbb0bde3f327f28103483589f7ac65&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=8e2b70be86b2344218cd24764e6224af9de32b2fe5491f98f6a56545547b4766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=dcfad682cbb5c7cc84f548df451baa081d36c3f1b718c05cb6b1b0eeb937adaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=fe817ccc0103ed12cc47bd85fda488b70894d950156acd1b1d830848cc93d932&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=8271596354702eefd4696b5b9e5a3a686f71ed31fb3ac551fd34b6885da1ea86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGR7XPBN%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFqAykQdmsx9QAewjrY9FedurPk7lsPM8vZo9CW766CnAiEAiwCUyk2LyMb61Goj0%2Fb2OB6hU0qoIufI1MW0BwoNvlMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInUJ0fDeb9bbM%2FhcircA4KwOauK9D%2FgoCdCWz3xusppuw6K%2B9sACCp3ERTBlDJjp%2FyMv%2BrFH4nxEwzMp%2BETKLo3gPQjd8%2FzsDWfNx%2Bj2ZwmpsVqfRlIqApItdguXs0yFR0HMeqo27DOPmxRdPU8WNhXDWPsPoodM4v8iG3HwdKTJL7r%2BYbF7oSJ8SJf19sDS2Ph%2BrcPPOUizC5%2FjG8TT8Le4B2GvFGlinjTMGKU3dtoLTYN3q81dbETePysxqaOqijV%2F6R3gSJcRo9VSkWeA42XSpDJztdUTxHMWxdzEIPCjYZ8M%2FzP8Efv2kbX15EYaV%2FpZTWkm9kNEa7QJxNvcjxcVK4DuqHpazns9BRKRiiWGayzD2w9vdgKXH2YwHFaGfPcWu%2FzPJDrE6ZXweaaAiEaZKu8MZ%2BK3e0XavNVCMyEQvrCixATXoPuAtwflsOhdE73xZz3ePqulH6pSCR7JCMGgZoWTD5VK271dBvD7KloCX55xio%2FdtStPT4HOsuavaDyubHR6LCi5yRerFAW2cnFotZ%2BQQQwgpuVnbvEhvsshBwWiabjoHvP%2Ffnv0HJTixYM%2BvUyB3Mwt35SfClCgc%2F4clQWf3PX3QCX6BVqiBAFMyXvGdMz35pask%2BBwdaLRR3%2FD8pSKII1iFS2MJmi08QGOqUByh6kQ2gOjL4GH1posVKgU9OhZgTpeA7DdoeA9aRwjs1SkUdQKjpFxWRRpIPKSlvb8Picx4vxxt%2BVtFWbv35kVfPd90oe5n%2F2QyIDjRDzOnPMqE%2BQDOUEJDeHZphEzb1C%2FkwJb9SZI4VYsS2Me3%2B%2FiC0rhzuA1QwrzlTUlAN6%2FAAAkJekHeRMHMWkf5PEK7%2FyAbY5M%2B3UlljMDL3fVg34k1g%2BNhV4&X-Amz-Signature=33caeaf457f72ee7ef3fb223d9b5732979723dbad727c4c6635725bf4416d534&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2B4PGWD%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCICcFXjzr%2BLKJdJky1b%2FaH%2FT%2BUL6kTY1Xs2QIG2%2Fo1x4dAiEA4jA0LCXUPcyNjGZ8gmpj9b%2FtUTobphAjObu3lhsbngMqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOlm6gey08z9JkONAyrcA7m%2FkkVN4dV0C8iq7J%2BuzxcQ%2F6l6y9JHWtbZ9xzWMyjeYq3I2rHNPJ83FwJ4SfeYrUJzfILvZbdFY3enaApIEcBrZg9bllKkRjPaln0z52zwIZOZs28g%2FWV6uG757RmDlp5oSuVVPj4GF9fYKK5ADaDpS7sntmC5x8z4tbDM3D9LI%2FUMZ8McoYmHxJQWD%2BDErGtHx5wMbpcoNnY%2FY9NMxnljNM39FiIfrMlm2vkTeDh6nUSEn2Fih7tqNvjxIJCltvx0L2xo1tMVMI9hzkJzy2jNSZnwkFiWhcnQQOddlZ1ar24U00HddH8XRdq%2BFgbO4L44Va11BdaW7jCrbQ3PnQnIxRE29DPMcsGR3z8VlfayIKiCfOtvQxv5yKyTlvph4nP2no4v21%2BKmXuZTnBux2uVLlC1QYo6FWJIZsy6NSKVS70JlwV0lKGVfClXXqqEX%2FQPb0zzL%2B21w1DDZSKcfsDSJhKXnl75hgA%2F1e%2BJ5ou%2B%2Bs0nzh5%2FiqwuRzfa2KZTzbXfOJPiTbNcWnYIXH9Fn%2F66uEw6OYzxaEFzLTLiuIZevQRUgvA0d9%2BfIswI%2BRy0ADUFSC3Khl9As1ryp19J2YZZP7OzFHPhFCokOIW6zgQvS%2FFCp1c5EpuMUM5oML6i08QGOqUBV9AUJH0Xitp389cIWKfEvjjPWckAA0QFcVKou6RFJm6RNhe%2BD953o%2FXhsN3lA6aQItSm964gHoZo%2Blugncu5zxwBhETLOQOCiFNJz26JqcnsWvrtEdrr083MiX%2BQGOzh7ET0tcJema0cCWPLZsVZRBPLoplz5woR9pjPWMe9YIdbJ7bpqPKVuUlG2S5S5%2BtzeqSWpM4%2FpIeZLWD4%2F2yQbdSv4iUv&X-Amz-Signature=7a82e0c6fc03abe0260a950ba559622f27ce866997789409c02c7b3d6edfcefa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=331703c49e40691c95d50dfa4e3b52a09c14ffb91f162dba2a7c25cefe5535b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=cf4ed7854ce3f0570276ebf44cd8de8df1fec4b1015edbef7e44ee50fc607e98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=74fa5258a8f7ca97f5212d259a8e5127b3149840b0ef8c98b0ef9a440ffbc574&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=4e298281390950af6057a46877072c78bed85ade833c6c357de6a2dd01bc5617&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=defbcc50ecb015c5058b76fe41e0f10637590cfafcb05592e1bc2dac7bf825e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=13669b6166cc9d4f762437d4a4a8afe06c3c1a44f71ecc801819f295d3242d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=3531468b7c9c72cd55960d40fa1edec3332e34f6ce68c9fea415e6d19e75cea4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=6d50105515c97a85b831c1d9a2bc6613adce3164342036e3ae3c87c650bb0833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I7YIXGI%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T171320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJIMEYCIQDnxcCnv6Wdg9gR0bb8LabEDt8prQF0aBYLeGezr5RyegIhAIidn%2FN%2BhmE2GD0mPR5oLycEyVTAmkpygj5v%2FsBmiH63KogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9XWidXuYUqFSjQUgq3APtPDG%2B1eWnEWx7dX30fmX0G7Uivr7hVi92%2FEKMhORmHDKh46r229%2Bw%2Fo7X5by9dZgLUBff8dkUdjz4CpbKZ3XxH%2FCjJvGc9WxwoiERnrP%2FLv3o3J5iYATOalS2p%2B%2FU9LqSasF5WTge8qrNDvuhZOkSsvFyrWFgEm6q0oz4HZadUXLabPWfLlymUwrbLAb2jeBmIwO94lBJysWSNGphaMa6aWqAfwrhFif7xOmwVX%2B5wo2m9gIjHzIyoYM6Z2iY9ytH%2Be8LEhrVgAG5%2BL7Rk6mSAq37IsKFVj0ZMI2Gyob6KIDqR%2Br01bh6ud7aqSd7fG6hUdzuFNavqpU3j5eEsr32ZWr0j2q7%2FLonwIvhi%2BQKYUpB1bPDQc22uxXWx8jg56GjD%2FZFHWxGN2pl%2Blp8HOb6nYp%2BeP7Rdwu3v5YOs%2Fd9jzzwoOT8TYKjc8bp0Cq253Mg2BYSFPNTbILnaa7%2BMa3j1Ab0QV2ThcIz6IdF7NS0j1qDGJ0lOzSWKVx%2FoP3FObHsnw6ytVQeK6U4Np%2Fs26ZQbKnv2oT9Jc2rcNHsa%2FHYzDupCxNLs91KbYeB53RQMjlfs96Sul4w1o54eIOJfO6TZSsxIUNrs%2FQ%2BFHaiwZbXqUsmnpDe3Y5xN%2FAWdzCEotPEBjqkAeh7KGIOCZOs6sP9XLA6FyFdbk%2BGOqQ9L77oJa%2Fneox0OxgMvz44vO%2FWsQrq6z2tLJVtztfsLBPB01q4FB1Ygg5JG8su6OwVbbOpK%2FdLd6BKVwGpD3CBFUWNMxpwAhM%2BaqV1%2FE76WpgcqUtfSl035k18ESWfaUfxTRGrA6akahw2PlaoIxF%2ByS1Q%2F9j69kTtPYWG3C4x%2BIaFo%2BiM1WiCCFrh7SUC&X-Amz-Signature=2bfb3c1a625fc21d5e0fa207dcd841eb71ca5d9963696b3797af48d9a54a8649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
