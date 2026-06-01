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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=953de8bf1c3b1953f07cd1c234e1a77e9d625ec87969abb328cd17a70c27b6ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=2156980b0e355aee57e2b2db23f8754e2865e4658b315caa67fa0c4d9568e843&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=b22e470ee8654b7c55c244430a7ceb7fab0f37eb608d5a3bdf9d9efc0ab186f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=4dfc2acd9b49342f3b8135e91fc667298a2e4759c51b25ee37b0159b17e3cade&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=75612ef205741cfef8470322588221891312fa993eff84f0aae6c362f1c99785&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=2e7db261b82633b3a5f4a2764d432a189095f46f268b23bcde27c46a4c013ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=42aa4b5169b3a254587d267e384987829ef745ff8867c9d3c6d74969a258c94d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=b0936c4856ae5cd86cb29c978e4916ff9179181b3b134be990ba26349c4361f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=7db8ba18b44d1574a1244b0d7beb9b45be6d5ff67595e12546265ea1e91f3011&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R3RLXQZ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIFQrviiyVpRZLr2UgZ1JULICBjcCromKmLEnA3xXAbvZAiEAy5%2BdCdKfK7coP4Ogt8HkV1wF00viEhjlS0TGHh4fKvcq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDEpcuJ4wg7El1uBCryrcA7tgQDp5aUY0J%2BYJCdS8bWDfpB2evol7r1rU6KgCkTSkPWffhAmW8W9%2FjBNXaLyQNIeL3BOCbl1%2BURsE4OpyjgmI29S5cw85OsqVwS%2BkmjdHwh5fxH1RFmQ0ihIbeFHrqHz7aYxOaSUPUAOrxkCdX8etdAhb32%2FcEW5Z5aHjO4lOGGlmMAmKTIx0YFezz8DmM8wbHMH%2B3Q%2FZIU5hIKHNgOprwj6nYcbKw0DQ11ZSr4MeoR3ao8WbdVH4IhExuYbAzJjdhVQWsp7qHlPlchZjf17S6BnPlbhvAYaJhoTZ1J%2Blb8gFROj7abVP49mzKOxtDsACVCIAQ0vFrJcwiGmSwww6mE5oagK2iZIG8Ev53fGk%2B%2BUPnIkIN8Drpqo9c65ZJzpizVUjfj94z9kA1MgOnB%2FX7ZYY2%2BLAGdA1aSDLKhyYLE3QeF89iZ%2F%2Btm1ZEl8Jn8Flu9sGPIWWXfX4dgsj%2F%2BItuVtci9ehD6lsGaQJVO3U6eT882DgQJ53A6ETVXO0DpEuqB6xFfYUJ4ERoVK%2FngKHi0cz7DIYYw9MQP8PKVe%2F1d4Ihs5Ga%2F6eqdwezjxkUdtVHrIar4o5uS1py%2BYA1Ih8cHtDTq%2FxGR4nD00ONI4CW3BETuwzSk0FiKbYMICn89AGOqUBm4fmy5E92a0J0p70Bak%2BIrv%2Fspky549q7O%2FvbEzf0GpM%2FoCPqWgTyfadXEx05ptnD7SH84VyXB8z%2BaxSTiJIOxsrjshDQhD86MHJfM6hXSedCFDfJydbo94mOiGAuWr%2FwbQp9ctw5Y8%2BYg%2BcWcJeI8%2Bo6GvJ1zQiVJhTRKteXlazDGxvATRVDqN2xzP8mr1oGnChh%2FbcK3o7Xij7%2BqaiiYd0%2FzrM&X-Amz-Signature=37b9081d0eedcee55067ed5aab290199c2d2635d82204cdd6fe1caec22117f52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AHI2D2W%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIH9%2Fj5JVkKx25sYcz24hOuHrQRVn%2FuKtXx0YpZDri%2Fj8AiEAlCBJX6OqZ%2Ffx48mClM%2BTB0njv1yqd15ZwJZ7%2FIpLpSgq%2FwMIAhAAGgw2Mzc0MjMxODM4MDUiDJcWl5MsOWZa67y%2F9ircA0DpVNuN2YGgMKuKpByNRAp%2BHqDOc58Xz4roCT16B1mGhwaadIh6kzrlPgeU9RLi3QjOVa43C%2FZ02k0JrYcFVm0p%2BbHy73Fmq2BEB3chf5pYl63KmJqyTyOsoyJChBfM2Oho1m2l%2B5hpSBgajjT5%2BhrLLXlUd16qTQkizls5sFWAuNg5CFuoJYT%2Bhv3qyqq177a95bNYG8gU94%2BmC3YYZ18018SuJYu9sE5GcgwH0N7wMRL0LTvUz6vHcqwUKO3atMlw%2FukLwW369d4hcpT3d6j%2B5oupgj5Y13Wzwh4uZ9z7iIivk82LvbCiafNXLzl9BK0D3py%2FcEsxnaZSuKWwAZBC5hzoAg7IcDuacIfgUXCWdpS%2FfPSpr8YzHW7fH7EZ%2BJ%2BgkEBD%2FxFeG0BoKLwTc8wJm72UcxPw4eoF6iCUQoAmwaCQ65tvwQKYE60YDi6xkp0QQUejIknnDCu3IH4tGtA8OV9LCK%2FEAEIiKQzLcugm6OJAzWlYn0oruLCMyRAXtZHca4P4VtGSkilJo4WouLK%2FWcamCnS98mudTj%2BsClo8nz%2FXl4qxpHyxd5Yy4LzQzCylNxJT03EnocwXf5D2jH1agt1SwQ3gHKHcst2WrfPqaaJibPoYOpNL7jdoMMSn89AGOqUByYtG7pOHTejAlkYrm3b23SpJGqHvNuPMiti9Az8s3mZRPnbjmCMMt%2BLTHojLXrmEMzOb689uoZ1ckph%2B5UACTt07lypaIGibwAynbEwTgfpRU4p2DXERcbwcgZNTDFKyCc476NJ3OIB%2Fs9lnmUQD99kYPrH3ozFdOaLC3WqxFqIvzDzIMnRwEpDsXlstxabK1pIV5Hg3LzUfWT0z4v0HyF%2BxM7Y6&X-Amz-Signature=ec4b079c12cf41bba40e6c6f0ffb6d7cab2a0963e989c64b28f9f10a72660f0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=80716502146a6d721cc2d4b133a97b155a90a3096f69e16ea8d29b14fb075110&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=2ba0fac19c8a903bb1d44f5db51b36a3c5d903d26dfd0ffa112fe1d1b313b71b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=8a686db0fd242a0ae318b57b923b117c4b294f815f4187e18f60a4d25d8966f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=96ae4c21b0cce2e86f53c38b7a0f27b2f25945a1e343a4050c754fc31c309fd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=f31912996036680b8a7b501efd3d9ed62b45a982287779ce14cec4a484548229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=e6ce66fcfa258e8cbe97e7e056e9483593cc37a1138faae6b09b4e0846756786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=af92bfa64f8b6297d278be6dc3181e0ecc46728a24b672b0da2107461722361b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=47daed606135be530775616bc77ef426786d82fdac2dbb10e16565c4e4303c18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMQQQTPJ%2F20260601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260601T040726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQCNVf1WLEngqaQej%2FKXl6g6%2F97A4oVdICzQGeSntlhj0AIhAPe2sSQPli00924LsknaE621jvYwefhM471xjQ8xSdD7Kv8DCAUQABoMNjM3NDIzMTgzODA1Igx6kYuf123VXjRFyDIq3APamxiRLzj%2Bh2gkS7DWsVQ0N%2F01CdWBLp%2BRGYTb53VvnP%2F4tHsm0%2FhgRSMlKbfprmnVm5qOePtNSBjNHsgYrpaliPCr6zm8DnV%2FA6hVK3iyHokyWG52CxcljFARgr9lLLIVE2oxozZAZgKFk%2BoInd%2FEAqSCHfWLapsZQIDAFRouE3Fu%2BflNZtOX41Z8XR5aDMTelFwA86RUOcoS%2FQQxO%2BKLpjHaPbBg604FyuNyDFFZ2wSfdej3iketvpNDKxtnpMfOJNkp1hobEcj8Yv4T1E7FUjlaM9w7qf6PaxvKOZgxCYkIgTbSLglcco%2BiH5wkcFVePpPct3lgyL%2FFYkSU6sLRxjzOfIJmbj70qcN%2Fm%2Fua6oZ7860g0GXH%2FRgM5jdDo4h%2BoHbk4wNbhTjUs2gvaHVilHBUV8PTdY5VP7ID4PrGlc1otoBB7wDbZssTJZ%2FLihWv2Jy2H0OcV7iV6sdq6Mzuz0C9VRstdEwFvgoSZaM%2Fo61005gIyv3VJboy8Od3PYQYuf2DKHCtS1Bcv%2F4rWYCChwbFgVPkgRw1VJS1K0v%2F3pVtZ2q4DqPDoK1N6AT8fJNKUJiCFnRx2BkdrVNC70XyK1yhY49owrjLEthjmVw2AGzeFUSvBbEMcuviKzCu9%2FPQBjqkAZ6ugE5NSYV%2BOid3hPCJ867chLJF7PjTFe7X0kSlNs4lTq1riHVlO%2Bg6rxWC56OGz0mrhsua3HHfh8n0mJ8jVkUQaHdMepV3vjoGgj4EGbsFX3L8NkYPCGsgQIOQJXgwVluQV1SM%2B8TXPF7JLgp3rSewvOUxapJXtfkT%2BK2i65xcc9eKwooyNKJW6HNm4s4Duv%2ByYNrUpekbYiIgR1Y828MiXDLL&X-Amz-Signature=2668bbee5792950ecd152b4de7d12f710e06837b40d5cab68d6a14fbd34aeea0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
