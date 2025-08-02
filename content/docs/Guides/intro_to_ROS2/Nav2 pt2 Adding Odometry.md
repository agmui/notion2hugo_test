---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=be4aecba6f511321fa19e4cc20fcd10228c4790159549d1ebfd2514f908460ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=d0019b448c6a4a1d855faa3b251c62ef47dbcb5d188885872289e7cf03fa2a7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=20fe6b60e2cfdcdf3b9428dea744569acca76af2f53c0be7d338fbe7cdb8ea76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=43ecaea8dda631b26613eea29d897e5df6de32ba98605e774e04df4f48cb56c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=0e8d41fe703e751bc6f32ef9a06e3ea1e830f0bef9282824d416cf954be4320a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=74d4bf37b896ad5e71a793bc25ad42c440fc3c7d2f5557e7728cc711bf658400&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=8ce4fa0a9f50607e3a8ca8e192c80afc1ad4c38d9bdf280767388e3efcd77f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=b5e8f71738a1c6fdd1c3be7bac866959df5d7cf6a259775e834578d5abab24c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=bfca13c83649c2b310da0376a9fa2f1f8c5170c40bf35d04120f4335a4e1ca37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E6NAND6%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T071009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEV7nEWywXleteYIt0Xna76667%2Ba6vwt3o2iDOS3691FAiEA7b99L0ES7%2BY86P%2ByxOdE%2FkbhZfkWtGtbSZgUUEl9iksq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDFsS6URSwzXtK512aircAz4YCoPz0O4V7vmoW%2FpZ2ay3iuctbDuroVmuWj%2FHEPD%2BkE8K6kWUldTAcZc13yPn50na%2BDg4mE241ERJCcwLySZO%2FNoh1AijK0U2%2BVTIB2ZHDWWS9wL0VJMRfqdVcoRGYAKxjBBNsLCbcn4HIDLH0gUGKODjGCODV4HCc90XreFoIiXjntKDVH%2BIOqWcJe75k%2B0r5Cxq%2F7erpFSAlnjo6y9Wkx6ZkgzVqJb0Yz%2FSwPvGeahww1Ii1sar59F3Bbtjlgd%2Buk6CaZxglHSj0WMvrd94Hw8vBi6eW4k5M7nKExPBTfy2Zu2WrJPHX2vQBIevFBEzUhsENyI6HDLqURvCPiO6s1ntURLC3J0wok7ISLnjYVl1f3AvtLqF5GJOOKurtiytpccR8HypSFJjxYmV9ihbN%2BWJ9v33EFoOr7DoJHqgTsNrMxmfqsQUbySThSOT53SR7hvdHL7G0KQ1bEz0Bz88IWg%2BUBA0OltbM93G5yidbW7s8%2BinQYMilTTR8%2BdWjs8CAtuwJoQwGj3zipuHH50KimJ0vop01G9V1k1alBE1%2BE9Yjr6RRrpj7z6b8o%2F4LAG65zrEaq3SIc0kloDW0G92ZNH2nep4lsPhuWujmWoSXLzuKgSasxMXe6fVMM%2FvtsQGOqUBR5syUd3%2FPs31qi0lMLv%2FHZNA7P40e9ZeYzXiajLhV8xv90Jld6kSEiEB1O5ALkkA8GvyCpfpg%2BYXpluWzE8itFFF%2B9YOd2PiglYF1OLXLbqoyIg2xOjPo0c7ZELMUQyomSINbUd7tLm%2FmX9fcs3W52pCUfN3cBkKaNOnd9GgUiCqkni39imDjkmbUP5u4jbvpR5rKwpW5Zr%2BNyUW7BIwlCJkw98s&X-Amz-Signature=38c21e24013515a458acaa518628d0f59c9d59035c0468b112f488faade56707&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBM6M3N%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDkHUy9wnxP6mUNnxs6MWdXFAHB%2FE3%2F7a29oRcmyQkg6gIgGa2o0MFFBX0hpC6%2Fk8vJdAbw6kEC%2BdF%2BRlur3tvBmeoq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDAO8nDASvScfI0%2BSKircA5qnLGDlnHxuYdX%2B7%2BodV9cRvFwHFufcO1Y7skoR4e8ANlpklE6SW7w%2Fs0h%2FOXKkPCBAFJbLC1hrW0smuOv6JWrK%2By%2Bgi%2BMET5aw1xI%2FZM3X%2Blh4knDzkNS5ph5EjT3G0X9NG93DLZEhmFTPJm9y9EcVyV1EYPAXb%2B3Z%2FJOA5GTIiyDcLGpECEKjeApHcM6lfc3dalyu9t7EmkJMGhpyeneScUS9S0CQp0yymPhz7OZDsndcXyZQ0CUjaq774pfvJsDe9rxjgohvxYlOGbeWzUSdgqAATMoJIALI0McqFGxP2AsQCakMEdeB0Uw0nnhlA4QA49J3LpU4l0H6TxZ%2FoRni8PYwcf%2FA8woaDCFAoM2Esi16nCiPa0PqL1CthaNv4zg%2BeARLmrP4KlpKnWUjwG3%2FsxqGiKT7fV9%2FyBzr3Q3sSqxgSqgfnhHqcZ6tC1izxbyZywBg8PZt2I9fpm23gjXsz2Qhhx2kPXIW5DhEnnqNZVhj4WpjsvJCQbT%2FvCoNLnxA1jpVAkrRsEQiNCRUv2ZBHU3NaHBpLR2qORSwLXbUmmB2Gx%2FCM58kOAggU0JlBhny%2BOYMwGNePBsPKNUgtG0oboMub15q0cGT8AjJ0MyzS3xyxXbpVfOWfpX4MNfvtsQGOqUBE3Ig3vAPxmuiAMjbird6skk%2F41I%2FUFSA25l3xHBpcqTPb%2FqMloD6lLmq8%2F%2BKcVVLOas7PdIEujnbIy8wG0DxWyKpoNCQkkEXYAeHRA2SzmBJ3xmAznntxGmYmDMlhywhzN%2F3n9XK1lVnx2Ox67VkFm7%2FcYTPzHzqxKGpwbngGr0km%2BFW%2BSTNCOEhngV0k5k8oRvO6WBWpYKaCDUm9rb%2FPTIailc2&X-Amz-Signature=0b105014b0b0f34ea50365a9b7836aca87e09dde0cc199fd2a68a6b2312098d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=ef773a5389fc8e89387bcb27922706986f4ec0f01b9bd19e5537aeae28445614&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=4c9e34700ed9380d24e99c1441b046024665a2815b70d87e0fdf1804d8f743cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=e5412f861904e7ddb3fb5ded2ac1480e43ad2b24692f45867b29b2b273c3aded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=7ded1f9b78686663582f8eb5fd73d6b55fa8d91dc7fe14f4cc4d798d86eedf08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=be68f23009d272068e163c97582b76747f4f7cca36c77b16f7b8491ceadff0a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=a2841d7da054cdf15497c33a31a140c3200cc101f6b877123d41c6bfefcd73b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=b2baa086246c2a0f06ad12bc763fd7f9cd3990cc59a7ca5cff855cf335121aca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKWONDSN%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T070947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC59eakqpZV1nDVjtQeJ1KRiDs%2FYBK51IOg80dZ7ts%2FeQIhANm5eXFA43W3c%2B552ZZtTTO%2BRFVvRIuJpyuou18hV9HtKv8DCBAQABoMNjM3NDIzMTgzODA1IgwnIlAifNzexqUnedYq3AO6CsBI%2FSoOqiMgFUAn0rLk%2B%2BQ8y0cUYDuc5Uc9llmpNssRumuhsuWQETm6BNfxfgjpedo2IOCHoNezj%2Bsuu4BSqSIdLgCNsF7VOfsTfSdzInmRiJlrvpr2BHMwchccvKd1IGoeZ8LE2irisGdtyQpAdWCZpXl6Ww0Vx1tzmgJECO%2BU%2Bkkv4MVaixX1OIPXVZIiZj6K706I7py0xaNoEbOoJXkk7Nvd4f8JXa3p7TtmFZrdNogS8n1bX4e8R2JlQfgpn%2FxFc91c%2BFwVHe%2FJy9ae56K1MokySjS73dlMQ2GuznuTKo5ZKStYJqWwUXVbb1A4t9pHhedJAepuJlUhjlNcV2lmnLXaDEHArOaIRzIsHkxOqjFhuGHOz5HibThJ5l9nVrZvuHZXSfg6l4RptpQfx1%2F5Xf1cJOuUARJNl%2FelcjhjYHbhbkHwtd%2Bi0QVn2mhWBd4JnIkwSmHQC4vYzldcA120WEuvk1SNDYNcUNcrYNvskmhFoEuXDwxwO6PW17NY1%2Fcuf%2F2np%2FeKPnxOIb58FZ8NWNMRiMI7fVxxRL5dl7pfBYJnTLEAWCXPuRRyPJz0VlGrCWSqO20Rg79qT2L5qTFTZClaLJuowJuQBDoL586FHjGRrU1nNTgz1zCV8LbEBjqkAUsV9774zrjPnKPOfg41ZSmftxKge9DaC7TKWyKVL4u4v19gRk0179P%2FC1xpZaHe6A4eA9bpQdaZqr%2B3adgzeCQlSQa2ZJdcgoVagPasvhZKdMhLwWmW%2FDTpHQJgESuW3zCFBxydgaUbm5LxvZ5i6CmLKAkZ%2BoV8IAJoFuliDJmiVcKRkLRznyGNpDFjemTrISDOhB5Av2qRPLaTywQje5dw7v4q&X-Amz-Signature=34f7d51216aa52e476a05d92f12cd57d41f28fd41ea7dee5b89244eb398df72b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
