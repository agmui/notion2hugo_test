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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=44914121df2406913952bdc7f8237a6c8b7e10abb60ffc337724f60d729c7df6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=0f6d9c3103327b592dd2efdb0f81b995b958713f16b829bb65277db08e58922f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=435929e5488e0971a5e81440dd1a304ca4e3d243f4300733981786111b41113d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=3b854c4ec738f426bb36888a68a7dfa1b263b03fbdf53c63dbec7dd54845714c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=79c77b9fd933c7bfa927b97f47e6af066cc0042fd261080b1d6420ea64438660&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=6bb8ea1caea5d936fae03d348bfd6eb9e83d75543fd97072d88819c6c64ede96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=4e4ed7a50191fdbb49296e0f0ecdb68290d973ea489992087ddeffe1507aa1f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=a76522de4483221825ecfffc5c1f30232dbb4ecc6eef1e1291921b5e1b187fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=519ecb4fb361e94c7418cb6ea0c7584e438131f49b772cfbdf563d91d69e88f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOF4DY6S%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCH7%2FpsUQfHzOzPLBJ%2FZbk8gOkJ4HcJmpO%2B3mNIQwWo6wIhAO7SHpGdpFi%2BFi5qiChuImHJ1u0cNDu3%2Fayv4eEF5EkXKv8DCGgQABoMNjM3NDIzMTgzODA1Igxm2BOuDkYnXWS99Ksq3AONmhE4Enyfr1yI5rZQ2onFTcGsIvVJnEAShNZ9jYALwYpAv7quP96tgQ3ge9z9wM9WGS7K7SRPWwD7THy%2B%2FhgsCijat%2FnswSHUMM9HvzUgH%2BO%2FwoB1Q4ABMpqDtXRNdRKJzdpTvX1mcXsZ5Y6f1G%2FBfIgJFJW9hEi8E1H9kEtQbdmIV8OSgSJce0wgrLlDBUS53Rvx1mhETNtRU8Ca%2F2%2FPDv%2FqWXjgNgowYKfHFNCR9MYApw8sr%2F%2Ba19ndm%2B2zJWoPglpEOkUsUT8wmqjYdYgd1CUNV1YJMWDVbAEBLHrWI6bBeSnoKWNxUTIfkiSvV8u7KKCJroRgdm%2F7HDIuQIL4R3v3l3tyQYCL6Zhyvi1zjsgEYThq%2FMS1QmXOSFDIJ9VDoZRTVcazdmX8wga6ePSXwI9CDw4KkE1J3V3FGqpcmFFV9VzE4op8ArVhg40PBZxWmuk6T%2BbTyB5tn9o7wwC3MKePWxlMsMNF%2Fj6cfPYjkuGemPoiJ%2BkP2p%2F%2FiJ6OndPl8Wx3fB85LtAGnKW%2F%2FQflpJWm7p1hKHZhNTW6a7iga5ah6JCqxu%2Fcl1u8ZcaYBE6gAJ0iZJVfxRUUC%2FlLNkO47PQ8%2FDW5cmJx%2FTdxlkv%2FE4tokbfxRoxDIvuqaDClw5XEBjqkASrH3nWDdvyThg6acDMQIe%2FIW9WC45464GrtykkGN3u4sMXxNvD%2BIDsa5IWRoj0fVXEbPWZSxRJ0TtgNzFya5nUswLCdI1WvfwlCLtqbFDl0EZJoARg5ZIszx0tFnrQdLBtxIkfRuseSl8u6AMO49HbKGIXmlMUeIg9SExxRtsBwsOuKZMYH3o9Ofo0keF%2FUBBAxpfRri%2FP5vptiC6z0HQgogyGV&X-Amz-Signature=4a21feb0bae0c3d9a57ea455cf00411c45ad37e79d6855ff023f2e06e9fec44c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NTGR5OM%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIQDR3mfAr5CzYRbT6yDe0GOMeDhqSYTmHt%2FvValwXzxHugIgEcWjq55bFxRpTF1JoVMPWn9c05F8Uroq7sVqq%2B7RCjEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDI%2BiulyUOvawU0q0aircA0VSxuazG1Zn66Z5CPbEkRH8geYrRbE7m6aHcMfbqTR1Jas0CWUzcYjgDtjf2KkSAcfw3moILRNeghU3NMvdIZtFWKMr3i360Hhb4A5n9GDS4N7ZUguNu7QEszeBMq%2FnIpu5XiBwRK0GaMfrKerQyCxUkfmPWBOCn5ehioXpfmz1Mns8hwA5%2BSimBDA2a2NWnd%2FTZ4dl44Fv3VbRXBu9lC6xN8hRquJ8GskL%2Bx%2B3QanBXnshzgVT8Ht9s%2BWD8a9dsAqIFL6vRWQybaiixJmoGA7g7bJY4Q6RlyG3lRiWImxF0hwRaJEFkSyORQIoH8JsBxchMd7xgWPzGDW8zsMkX%2BiXQNUsQfqb93NoHNSBIeF3e5v%2BQcLIa2Eu%2Fa%2BnYEFzuYlEVQihQG%2BAiY4iA2r6kUFaxZwfcHM%2FnBIZIy%2BPPXIkTiQyoyW%2BQJk2Kwa1s9kCab77SN0JAnDu8vHqQyPiJmnUGNsNqRydAB%2BO26xWOuXR8%2F30YzJGXWy371753u0JaGtm0NeEUr%2FQDSlDYZJxPQUpVzHVk%2FUXqQ67vojoOe7WFJ4zuNfOM0Vt9psV%2Fkt66Er5TS%2BxEO8XGipeVzU5LPUhrhZZOXZ5yYwSJymwv1wLd5uFPomOZSmEaGhwMMbClcQGOqUBRcQz0eHpNUYNCxQpK0OV75D43anNvyTcGza3ifara7PlIaar%2FGif5ntcyO%2F1uQYCvGD8NEDRw4S%2BHroyq4fPT5CU%2FWoQNy6OF54QYgfAGS8xBxWhQUeHIk0LFe1fqbjZyZVW1u5VZygFzW%2FIfst05YruUfJSP49FnZsRKx7n7p630KaOhnvCwYd2QAKM1t2LieqSOHrRmZ80sYplzDUOn4BOf8ZD&X-Amz-Signature=c60133ae7cb599024bd5e5020030e50a740cb2313768bb7dcefc11acb9a28559&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=1663934979235862982a2b431e47d01f6e79cd0d2e340c7764108e9f90c8964f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=14f6ad14bbc1652472a7c751936a6481284423c892ab20c5353d2a7b2ab8c9e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=984b4928f2946fae9ad19ea9c1be188d3269ff7473169bc7924c39d97e08b7fe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=77046363ed7a33768146676d6e4bff5c43bc70812b5642a7a3971d9391c756f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=79618096c2afacdeb0a1817c8d6ff83508ac0c77f1c571fc4084f1648b3003a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=7d667aa80397698c2aadd86ad06661194ae469945f6d59c409ef51b5a0629099&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VL76OVCX%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T030053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGsBCMgpW8JoUMpT3A9GaOzNmYOmNcupzHjceZCay%2FlnAiEAs0WoUTmrB0dNZr2aLhdxvWCfSfsFUgEbk1CyD25vcNEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDNM4Zr7g%2FKzqQb543ircA1j3Q6lYxGNYZ15vxFZmY4YDFQQwH0bZVnc03NzaNtjdg9ot5hxAUYO1Xh2cVMe%2BVIZlozAgqfHsFU4%2Fl7b%2BbJ77IIzoVaa9H6bohLk%2Bq7VgL1q1bnDfxfXABOIXPbhEMc%2F%2BthbsiA3meOu9VW%2FlwOuHf65PeLHAezDb8O7JbCvjQJmC%2BDZwrBT2gWIMKXUr5rq9WopdZL2wzuhelE2REH3Ps3wgK4VBW8trAHAmaQi55glBbJu15ImBPfh15mUDLKt8hYyGcTC1AAvzxMXGCAmqONtmkkLXjn9KyTc65RNcN6lrj8y%2BgHOr0gp3NyDg8UjfoIj2yvGRfeaEv8kGzZRQvSt8W9uGDLew9S4Pm0yFW%2FHtb2uSA85qh29TTvvtCPk2CzDmJMQjdFFwpwelV8YxkLeHA8Klj9M1EmTSb5jE890wzOQdMXHt0ImCLDHAnpbK03dvrRYKJ%2Ff%2FgIo1Uk2%2Ft8sCasIqWJ8zV8vFDM83xvuubYmBbhT3MNwWzPkUh9g69KyxQAF2VnptIdyPXh3ZL5gBCxv%2B9U%2FQlieOgspOa3NG1UjZX5M5dLmc0uHTAkf5uNLW32abTaChdgZ%2BR6O3IWm80nSMG8MaEmMV0iTFHe3OCaTug8chN6VgMJrClcQGOqUB8KpST4pyqJKZs4eHPKRjwKIxFWsKel43IEwDhcOfPpfax%2FAEggd0rfKl%2BkI9GyUSLxXhezSeMniH0QV%2BqQL4pd99FuIrj5k8TPhRBQsEPW6NdlJxUT4QF%2BcJjGjAyYXENemsXosicJ%2BTeCipir%2FGpt3%2Fr4dH63Z%2F7b2IzRMUPopHX2KHxWTKbLvvxrREXX9HdD4ZU8eP76b1v0OTMY%2BpmctYOPbw&X-Amz-Signature=009d07cc8328daf36e5afa31f5a0faa5e09e893c51ac64b7f7dc13a61ed9c334&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
