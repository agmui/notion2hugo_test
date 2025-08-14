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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=7241570566ab6ee13f8675f0342bd0d3205e5b2a633c3b7202e4da7bb34b18ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=a03b159ea8165380c84fa0bedd1e43e200adbf2676ccbe06b076a555ddc1e742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=a5d5135d756827b56cda9fa09456abb940261d84d08ac57e20e927baab0d4bdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=ba43558ac719ccd7343235a84f7c9655ee35d7899958affab3d6f8f77c6bc6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=be86492b59e808a340577051d01046d70f4cb049a9872fb7031f56e40f0e4d24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=075ecb49615cff7b18ecfb6063c7baab8c5cead5af06bb405bcee23f718f4913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=b329a54c641db096365ebb55165b768d70a7f80ffce032a293fe873d5461d164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=42f913a80aae413de3b36101982e6b1fdb9b898f5ecb863296cec8e3b346a9f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=ccfaa55bd6d6d5b14a8439518e0e198ac2a0bfc2cd5de0cc9990007812b42eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGGR3XDX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9o0yO1hrRtFVL9iFID1g6wVzRXSWrPKrC%2BLOAILe4kAiEA6l%2BdM7jhuUTdIN6MefupU94iYr96jrA5Rks%2FKNfrY64q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDKqqUV8EP9%2BRI374YCrcA20A170%2BZ0u6WC0qDwkJWpOvTMOM8SsvM4tEACZSXECTqQ2a1AcaDoTMm3KC%2B56mkDUc%2BAk0U%2B62GOF2%2Bl3jXWLWkg3%2B4uWz7sa7kR0Ulr5YjHl6cbk0ICRjacc9GC9uxbwYG4yIBxgZUm4dOB04DSlC1bjk3nrnmeUta53BrNXdeC8Clo1A8J2nDIYtXkztcek%2FnYj4fRAW43bu%2B99d2hO03zx0AcA39H4CgLUe8oSdef0pdHUiLn89dd6dF94bj4fJRtA45FYIESXkNwXqWl7UWThvtUGHQJXld9oZOifPU6YQpIIZL841dIqVlmBrJuf7yXOZ9OWYFP2n4M8YSjaKguOTz4Zcu1LGCrmaJBk%2BKkSxC4NlPHyHVeu%2Fh%2BPuDo8sI71GHWfLRx7aSz0Ifm5cesW7Q5O5EBHTDSNXTtqG8Fvz8lCbVVnhMI2%2F9E4KeTNNIp%2FpGnpAmpCZ5BRWb0hE852f2t8emEZoqo8HWAwKN%2FwlmNM504PIOYKbmzv1E%2FlQSE%2BqRAwEF7i7TlWjdquKLHym84CbC0QN5HDtyW%2BkzRkv2SiESdJ7mHrOuakHAMOzVnSj0V9Fd1Ucf45RRKKypjEVFmw7WHAPHbWw4gnr3GNQ5Zp7BTv4lsaiMPDg9sQGOqUB9bIx4bcXKHOcJGRCA0eA%2FZvAQQhYGHh6ewxcS1qK9qioJurLsfIKHmU0JOarYLgNJb1iHCz5jVEWRLW7FW2Gtfjo45BwGO2zb3GYuTmfgo9Vk1TUR4O5cUlmPwKMJQCaChlRKwR%2BxuxpBNKQLFewtPimRH%2FKxyVsZx%2Fv2MMUFOgREMsCcN93mB4G7gB0IQKnqlcO9SrBHD2D9a0fRtEh94ft4wNf&X-Amz-Signature=eb25852c95fcba74713563967a130248741dafc8d9e4768d02e8dff6cd16bfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHWD3XOM%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG0QPM99whpSK0%2F6LB%2F2MCV%2Fpf4fw5WEF3lzwjVRKZ7lAiA6OCs5c81rB6bmI0H7FAIkMGc7%2Bu5ad3nZPD3oKbgF2Sr%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMXeOfYZD0KhoeazeyKtwDYuIU3cB%2Br%2F0D6hsfQ3lGK6bhB4cXQqtbP%2BB1XemTY7vO1nnilhvVqehJ%2FrGv7Rg538PGOWejRy5TnAwiEZqzRRnFgkYCVHI6DVnGY9cfKNOYjM%2FeW4Iw2IXiaw6vETOx4nlzjUULXYiTx7dGDpdm19ECRZcyiQlQkndmBYYpnaI82h43V5nFZu8%2F5%2BDvOw5dRJkgFyLEJLKy3uX6Yuqx1u8Vx2H6L4n4Vu4NlDEe9EgN6SZ5YWUhTt02TXbzGMNe%2FvKkK16S4pnnxOZJTNyr2V8dOeQf5jTOchei3ti2JqPPGY%2FGoKuDPT4S0p5GQUpPidDhSoEEAB1q8%2Fgj%2Brcc3vV%2BxNiqKSLb2QYy6cYGGcnLRWH4JSXGwYWGlQanYg9093D1ZKZb85NXP6h3jKph8gbixS%2FCrsqysQr3k3q%2FdkjsUi8WpFgRj37vqhULZGcZMPwqguu0talNCdqkn67aNU7zd4lpAA9hynTkaM3ETRe%2FTHIhZm4TP%2FhotlC%2B1o1YcNaTOCX9hRRM8%2FOLYq2KZG6oIZ6CQ2nx46BEA4YPmN%2FzMvK4%2F%2BobRRRKjSAFkJwjkVisT41YqOBHs4qdca94yMbKIHQJI9o5Z3z8aXyQr9VSKo2LcZtLpi2YU1ow9eD2xAY6pgG4KkFBocLV%2FWESMDGpaW6EZSUaMfEBdtHD%2BkBu9tKrdHkO3FXtQ31jTVnIho5uDc0E6OykWCQ4DuMgpXEKB6LPps5mK3MeWrrhpuLZYgrYpvApCTd4OPHqxpFQEDlH2RoKXeUSgpwO3pOmflwdqEyy9NLo3ThNKnIMPJIKuAQbcoYtGPvu0fyur5CvQ4TFYqdAbRX8SeiSnvHmSevN%2FIVp8b4WGFXz&X-Amz-Signature=240e914ad5306b05bf2743835a79820d5c9f42237b50b852a5d20359005be6a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=bd2111bc4e8827e566d2034893599e7de056f1ec9a7aaf5d9f36c2ecd8414cf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=d8f7f40c05fc8e37961d8e5b5430c09121963a4e3cabb4cc0ffb847f0dd2c58f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=fdac70c556447db955fc6940561073206322de055a006bf3db84e063980fa3d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=f7cfd89db1c2e86b25feccc38db03a3cc4cb1075a258e4e92d72f2f6d324b8c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=d0a173fbc910033e592cd7095bbd578b16fe3513f49438ec7325060eb2b58cc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=8a5fc17cc0f7e70562a8faba74c0f49fddc922c1ca43da615fb774904e4e6fca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=22453f8416cda641c0ab4a2c7c262ee08b55636308edf096b91468910e348294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=399ff7681035ed42eddb47ef15e2d1c75f7c5dd5fead18b2f60ffc01310596c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466533E7WEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T101032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYrHAyZp%2Fa97xzxOJLNPlR%2F%2FnHlhOdvxohqrF%2B9hIGnAIgaI%2FawccbmetbMcrOVQA5HW2CauVo8rILXguCyblgLGMq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDGKAa93RDJ2Tb9gt8yrcA%2BWzI8nQfTNjzuPGuevGa%2FEWs1FqCQHuYMhnBDpKBJDsi3uhQAQiEh7IR27MNjXZ8B%2FmBTYDPLLoyfePGGlhITUxHN5T4Sl%2BPqS7935HpVc2ICQog%2Fngnu%2B9%2B4GF4OyTP7jMnoDiA30BLcX1BT%2B7jvwxhQgke2WRnbkuY%2FE2wmcDIgtIyw8LkDoqL%2BOyXbVRvkJ%2FNcFqtTHGA9kpDai68z0I4dUyxFxF8xySvjvgFtWZpXRAaFrEtl9x4qopn8IkWdw%2FwZizubNOT9VXKgTaAlvylASWHs%2BhxvjWbQuGHXbTblj9SuTg%2Fc54rEgs00wFCLP02Mc%2BBA7OYiFI4FC60OgkOnMkdxqhIOAalG3NgglOCy7Fa8pPoST%2Bmgyb2PMskmovDPJnHfvkGZHUOpnGTPIBAB0T3RxR%2F9%2F9hRZW9fE9x8X8kj281kCeFfhPrA%2B0oDvJTGdb%2BLp%2B6Nl%2FYxvWRFq6cvUa9uaLhe69VvvzKFJIvT5q6t3YYmT56bEpbC9h9BlXeFK10yLGbvLtEJa2naeVPqf1HeSkI37qzVseftgmM7YkwflBgHmt2bEHxIp%2FJBReyX6gFaw6V9KOziVO439IMsZOoRP5CxzHo0dghJ2V%2B6QeynVcMivL3sWSMODf9sQGOqUBmSt7fkfxrh8Vgpv4sVfTvc5e0XpXYdbOSzuJMNCa5K4qiOVBt2XsL%2BksapZW2hbMximKgKbrCq7kWsCBs57OyDajn2iR%2F%2FqFhYui36nbO36KSrnxa%2BuOfkMiW%2BkSA4tCqF%2FEtvSM6Xu%2FFdRsL%2F%2BMiJeva7l1nn97QHhAlZLCJALUHFpxEuZyKwIUfAIn8IRPl8pj4vu2menbqzJBBjHKmYUw8RNu&X-Amz-Signature=b7a6f2dc13d04da070be909c192b1df9e99820e41e4b76ba3ef59ceda6b534f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
