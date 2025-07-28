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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=d32cb3d0696a4fbfab40d4bbfa1bcd97168da26771acdf9e494310f203a46684&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=acd1c9c0d26e9f7ddd0fbd17b52def4acae1ff74fb1716d8e62c77b8635ed760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=6749ed5714afea65e0943881a9985a2e46284fd7131dca87f2c964c5b7ec40b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=c0c61bebe019c02b5ba8aea3d030d12d66338b0910c8215bd2af1b4b614460ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=4e62ce6f3ed07d8cfe1e3d2bc5c55b0edd2b4b764d260c6f35989b153bc715f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=6c4d0e1f4889928ad4b23801aea6ccaf37a14e3e4161a4bf878a23be941ade02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=3179192e686477e4f261ae8f8bc2dacfbe8d704ac314e9173d9e11f9a8a60642&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=9ae46b4dac3a8776f84f52b9e1ae14ad822260a8f27f0bd292209fe891b0a680&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=6427c47b5b263b4c32cdabccc5e5b56b088e843efd161ed729fc6012d10b01f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAYUJ3F4%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIFpnf0RoJayMs561g1B4Mpdr2QFMLhqn2njfGW5QHnRaAiEA25adCixZHv1dvUk2vBh2vPBtOjXkGZvBLzQcEc7lSDgqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKXrDo2zqE9sraXwHSrcA63yHGu%2F2F2vnwYFq6dUj99nETlt71QTDJxuCrwI2UVUSbCfR2TZDgwXTbsdPFE0B8W92pfCt7dT1J%2ByuVyLWK55FXSW7iPv6cta1ufPwEpb2C7u9Qqdmby7pnsGO0VdVqyPxzxYQD7glgJNZd9bt64AUVCdqMQeBjKFc0X2fLRc124m7ObSRpSDlYetCdzl7cNJDygjw%2F5iofS%2FLAlSeDDmG8%2BCwHt%2F8SEKocR9H8pW%2BmI84oVhWEdxyAmoBO5iD6sE%2Ft5r1dCQEl84n2YvHzXcCf61jcWpBeAr1daHB7WvdbMOSdPTSl3uVa2rrIaxe%2Bfa8RkhvUbqO%2FT1BkwtllpgD6hLfdduPRhFpNfSSE69z3y%2B1MAy%2BbwtO3mtCqBYD48lU%2B2bbtuQU4%2BkE2qHlkqIoa%2B4CuXwVaI1%2BHG7i1hAr4BkuMkch6L6DWyyy1zHFGYPhYOeCJuSffI3MuULsCj6z3I4%2BUN3AOYbH1nQI9Khzve%2Bee8WwCltuK08aSNTx8nRx76yyWswIDgU9zlaW961VHY13lVpCWlqdVqIBLRuI48ol3EzFbtGroitbMDwSWeeO6yuRm96K2IDcjsDaQHxozrEPwe0i49p4QtYh5a1nAqwMAIrOxcV4ol%2FMKiKn8QGOqUBiTEHnVjwIv%2B6RuXzVqSW3Zugc6vuKhPvwjhzheg8Wk1FlMv9YUsSVO3YfI3F4RF%2F1QXP0bRuGDfKsfgupFUOOLZp5LLlN78g5xW7OkMpdTXlu28AlBOYd31pJMPZfY8BfvW3XNVCgK4flgkn0c49f9aP6Igv8mgnwESZgCh3rR%2F5RndcnchA2FVsmxPs4LMNbFzQu0p5vmp5%2BXpUBgzTKuQjjSBV&X-Amz-Signature=6c850b4de6b59e30710a64bc6a2c8da69a39999e93807016c061484fb6d2aa05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNQKQZQ6%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC8MINwJQeyypxJGjEMTo6unLUKXpSDMGrPxlL%2FYFG9mQIgAZc5CQZY1yPab046DqB1jDbIXbCo5t%2BLXaENJ6SE4VYqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFfzzoofu7qKya3vfyrcA16t3S%2B3a5LhskicVJzPyxjuNYepJ%2F4XqCp9IZrM8vei3K2u53PqllpiqHbaNV5lfkYFqSEqmoBxv2YZOYpGCpIjLvu2maDnCCF6Xd8zZqaJYSQN%2BMiKTYfbfQKGLVJ8bfype8gI7295SxLyCEwjnsWTtXwIimM9RZD72C9nbKxI7KAxu2ZkgbKSZej57unE7cBMJs%2FLY5Sn%2FrXVRVL1PmdFTRHSDVBdnDU7XdxnVRhcdm9caIq8t3Bg2uilIyjjJWwYv6KXNvev220UTSifT7tG%2FEb0ytKas5%2BLTlBqgfnqo9BzpvS2cx7EnZCRWrSAkTJpMdujo49N09ib5b6B5KB6fMdOtpFSecNwrA1Xn186NJGfTpCB1r%2BQmultHsm5mS7%2Fd9%2FIcR%2Fw53yC535dG4f3aHm%2BvI9iCvCL4lVIANnzaOyppwF0nkzeXcxqGtNPPOHNtS6gWMy5BP9Z0ECiUXvZ0yZ8enVvqXX3jo2wUtDdFjL2yTjgv%2BuLSGuU64QRJzo1kIbMkC2TPCN8kWIIK3TJLn7YEmDnjVoQpupENxllv6bTKGu6l0NBU3g%2B3OEKIl5u0OVt8567XeGoqVCgHcHKBytJ3RcxLGqDamSChM2tjnENW5LWhke7zq9SMM2Kn8QGOqUBU%2FYIuhkKtbMEsMY%2Bh5xDllqAXkH5jV4kY2hi6%2B%2FyRSILA%2FJeKCfOs9k4g4hSC7%2BBbgPjxVsTqVrQLjTcYmImPJ7Jpv4TcuVwijGDfX6%2Fy%2B%2B4qPXEuMQfOxRFXp9neaShkd2xUusK%2BUwDT7Cs%2BLtPkl5CJfhLUb6LJuwX5RrnNavYKM1Q9tARpOFbIaenjBcG7OUmDwYFV%2BSEFMDjAQlSsM3%2BKvsW&X-Amz-Signature=7596aeabcd900bd199b9ef33a39759301baef86e162a9b40267904cdf3c31ced&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=86b34b03914b1257356cf9b6a3a91869331cc2a4551956b5642ce87e677e569e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=5de6203dd843a871e15481082f4f9e35505266c2a939cf60c6692d950973cb10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=b241f46dfe6d4b2bc918fda131158e061ba4486221de45af3f21d5c2ec30907a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=2f76b1a5824dfbe406e499988bfe541ec7d2dbf57d07fca5565e74a0f8d15a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=283914b5e939906a0b0095feb3dcdb1c9c68c65f8eedc45594cd5e5652ecc9c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=9adf15321b9c1be7258e29c7bed14d24be739deb668aacd1bda47e7450b38991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653SGU74R%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T191149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJGMEQCIAzslTaqDjHMCEAhUvDRziAv6Zlm35HyF6FQ6Mfd9wxUAiBqc%2FOS1HxGZhsnfeZ98BETuBuoRpP%2BpVgycwo5PguatiqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOrXV5M2LaZBDh%2BmIKtwDn991U1%2FpAvzUQOVuV1ebZIw0uddzp5EuISql%2FaBV6HJscnY7%2FK9TAG7KaPPsVgJjSwFKzG4ZS2qyYNsn201ZU0rkrKUYsYcWDUTVvHbaQJ%2BTD3N5%2BIzlKWGVHzcyAxKMeMMrgeCQSaTGp7fYvkXZd8hMBKzOFiPRT%2B%2BvD7zNImOY6%2FMy7ZrLS0JO9A5RMf7qmy0Q9Sphkv997CupVTbepORd%2FrNylo4j0RKq57h36c5nnXZVHOyVQiS7mqvPuaUBpuyFBDlVnNx0fvu9E%2FBxU7RkMm8raN1jh2z%2BuMu9m1fl9xJG9hMGn5ropauZnDd3uG4XfKnIx%2F94LGB1hFoKoIrqe5jv7giLXzYfI5BwsA2fHYgartj62reFYWu8hld7xICX6uA1%2FgqURhVjSxHFz0VbKCQHIUsjgHq1hBJRwIRlK5NUJ%2FgI7LK53TrY2JgJxFT8wwFxEp2iZess97M2z3icth7FwyUgzpRDyHez18JnQME9cF8yf6RHaE%2BYieFbz37cukodVRlCDJBTAFLvwZJ99iMqLl9CfgMRkXpiWmvjbAfbAI2wgkAfCKnis0ojq7L400e3Vp9OyBr%2FO%2Bt0X4DWiHlk8zf7Ognvcnf1EUbxXA1%2BkfrCIZGfKB8ws4ufxAY6pgHxpgqEkl05hzh5xkKb56m6ji0zvSuU76q0evk1DGjofvZ9qNUoSFIJ6PQT3cTavc5c%2BwL4nnlTuHtKdzYEadx0FtXaeYJQCpG0vNszb5L9WsU9vM2k8Non5q6wHfW5ucJrLrRNL1IY5NXMqgxfG8wWQIqeL6A%2Bx%2B9pX%2BoZkAlrIBDfDQ6Ob8qvRm6IXw1SSmF8nxHriA%2FIN07extjvuS3TngDWo5rf&X-Amz-Signature=60cc228e344cb50763943703c1fe7e39662f04ba05faa8cfddcb139e5ec11d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
