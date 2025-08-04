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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=df3b9ab3d75c199bfc3f9a68687c3a989f8196787932eccf7aaaef5527c25a35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=3b41c23352206c4f7d5c4d9cd26d901e05ec65bbef38efa12b23428ea1ef538e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=0ee1b9e16404c86f8f9ab88a79f2b7f3df4c74cbe877a023ee33821d6a2b3d72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=71fe4137407dddb7f64ddeca5cf6157e63c2b1d4fe455e4caaf627d68f9cdce4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=4fa62213ff31d988ebf3b0e5480a11f78361f14628be779bcd53875eb1084056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=0038513c505fd765646d174cb39afe6141b5b0905391969114771479c498dd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=888d815e46baa5d28f916b12a23546b6fbeb2738dbeba91e44ac7ad78805571b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=f501dc075d180bc4a14e18d0f66a983a1fe382c1ed5e88a1a6298620ba126963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=8f781660a953e8b0b0a7114409325d23dfdf2c89e77bf129094e151e3fa18b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCD6NRRA%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJGMEQCIDiNUJb%2BcLIJb79G%2FGCnh%2B3H%2FoOJUu4obpIoaJM6YWOJAiAPGw%2Fyi9ANu4qz%2Bmh8K4%2F%2BotR6YMSWra0dLeIg54eynCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMhIwQHif1n8%2BR3Gl3KtwDJoyT7r0O9Oljuo7CbQy5W1GJ8GtMmX9rbpLr4O%2BDY8SrT8ndsmTVAUsBGP2TTfR8Gi2WitgqX0Jfr1Mg0sgnpfZqU%2BXYmmW7oxp%2FWYoQ3R%2BZ9nj9Akc9%2BCQ9hQC%2FU5yuUptWPTO0pSHYWPP3EVjE4Iz02nCzUUrZTCVxwHg0bH%2BHfAQKCngMWksqKgjx5NVkY9oxDPRY753%2FC3qCG8swqEKNWLh3s7T553UHT9IF%2FRGrmPvFrnWCr%2BTuQFWwx%2FIL%2FrSCHRksJad%2F1Mwx1jv4fwE%2BCd7TOs3odFMKwxHqrQcgMUaLsrPzZrqoWgrSZ6Ln1s1an528erLjBlfIHmzKtbJilAm3ZRwa69sAdWo34%2FZuhtm%2BCseQM2eEoM1E6d5ECBBAEnV7GhqJgZttDIVJVfxwLAV574mYcYJm1589HQNg8xY0Cw6Qjez%2BPDv1ek5BKfQYAOOJkYP3TAATPkJ%2FhP0uq%2FSV30nT4lLEkbBz2tDhYYidVp0cBhiKuknX4QBiZ1hpufK5kHTguAKg0qrPwd7V3IApUmp5WS8UU%2FNTIptoyinQhqq1K%2FEn2EQponDNfZZVDkREAuAiQVpXO9bHYf3BUcn4SDvJEULExXmN8GbcEiccTKsPN4GNIuQwsc7DxAY6pgF%2Fre13zkLXc4NsF1GlVwxOL1pkX7pDeCU2oRm0jaLyTwvuAU9LyRn%2FfjBMCIKv2m%2Bj1ddo8Ml8TsiPeaz3ArCpnJrSfGnvULVtCqQqGZjpYgtTsTJFULQl161e2A05lZWkQiEFfnZWnnj99OP4AHh71yH6%2BJZOn0QHhn7Q58QcbK0to6q0S7VeO1hLIn0Ydl1a11MX3NDwIjm0HYOaUFz5HCk6R6X6&X-Amz-Signature=a1b76e7581c39e2dafda203cf04e94c35a488ed47717db09a5ecf7efb31dd47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657C7R4MO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQCNiQbyi6ruUEudGtSvhCS5EpzZlZB5D6Y2DVMiyQ1FuQIhAKIE%2F4H0hQQAPP5%2F1Qnh%2FYNWi6lMAupDQiHBplW7B5b8Kv8DCEoQABoMNjM3NDIzMTgzODA1IgwrNpOIr6i6EzTsmMIq3APuW0c2Y6ZmUesNKFvHp6NDsfSEToXw0fz35iGiKs3Yka9jO%2BcG4k8sQIR6taZA0d9HsNrWI2krsHy0dNF1jywvpaekH4sM0RyWfG6aIMvsWKhAfACooFi%2Fj1CxFaWdT7mKNyHOMPGeb6nS21i8CkzbIzPHhTgiQeKElkfXN3pz%2BHXlbH1AsSlzJh%2FtTxj9xQ0uu8Gi5fMXKE%2FbYe9T3%2FVTwTwrIBT5ddlut9vc%2Fm2VZMLd45K9drQ9LlJKzqKUR3t8stGRniEobNheYDTzpPA4%2BxVVYVdIpJdWtpI6%2FPPyrnt%2B8z5urIRh9SGWmKMdyF2VdrZc6KlgcvbKVoCyUXGQ3%2BqoVx73vG50keIs0GlAvI%2B6iiD7tDgT3UuW5fnWeh6QKvEJJffvb68kDS5dKO3MWAxoM25fLRiIfW0mVm1ZXuGbO6z%2BojzUvZo3kOF3GmBMdnkjLkBESbzLnKrDBFGpo4qSDcW3b1V7OEgkjY2WosACM28NCfmhobPRMFq%2FuBJv%2F%2FyZHJytaCPoyt8N0GY0N0SFw684TK%2Bix8lTm0%2FKJAMlmM9SAUT%2Bd%2B%2BxpOSbGU9sXZkp33B7MQt08IbxWTcWSqWH9oMk4oDKfo84MxM5aIxaOizAn2rlPPNC8jClzsPEBjqkAaP8uH5%2Fu9zj9tuPcPCU0UcHkcEdocv0wjWzfMO905fj%2B2O8ybPBKQZGQz45CwoqjyqNJtRkjZwAes4VcWpMeJI0thactfUsCmy14C7LBGkzufi3oJsM2eWrzVbaP7rFGcNtZp1uX1Cnx0rT0udO5njSy4kDl%2F9BtkbhYepjPyPAjPENEbpYiDiI1myKJb7bmotd5pepUaLSc93l5D3aW6lLeHK9&X-Amz-Signature=2ba0366096a516abde6f157c91bebb5ab5edeb0ba69f882b8cb34af8ee0d9833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=8d74258be5dc7b1b1fafbc681bef165c4dbcba601dadd2e89938b09b48e7d1a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=6cc5812381cd20ef4768f509f44fb61ad3174496e9a12b52d6529d1500ff0cbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=df2d8651cd0295f1e04602682408a24f352c9fc062852ab0df088b62f9b83dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=959cea27ac0f43af07a7c6932786176e5fe86f61b990d50f572b034ddaafe8e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=685b45098ca763060ad7801cbe6435c995de4a4e42b7644d7b8930e94ee51af4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=8e846e2a2604f548770ab33640ec4aeeb5a7c836610716aafbfc73530ba05c48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=3b9824b8f58c70369b4a060399bd11474ca8edc725f141cbaf9f693882f4dd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=3d3977457166901af02da690235ce888b09563356404be5d64454cdfdfbd8a27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJNUHQZO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDz7MDpZ5VADyPgN7Ilw%2FJINrjlIyeiDbRWX%2B%2F%2BGfhV7gIhAIQ5az%2BbrATXGY4U1fURSqODQNu2YqRsAyqD4UmPlWHTKv8DCEoQABoMNjM3NDIzMTgzODA1IgyWcpOIISVQbMg0W7Uq3AONyyrZrHlquJVujA2u50u%2BxvLj5f47w6vq1LmLW8BBQFmFZF%2BQVxuYReBWU77JgTbzWaQwH2Pv4hIIxFwfsaQ2S7ZttkxX4FJScj4T62jI1oKNQu54NbXzri5OY4JiTYacMjGljGjF3f8TPIM6c3jIXBF6r%2Ffm0wfML2Xyj%2FX3xXrkdQ0U2epZ3DLhkbTFgSByMpymGqz8N5qoVf4pasFmPte4moyyAtW6nDWER3iVTQULRDzcyxmAfUazVXgsRu%2FjftY5jG%2FTrfoQWsHjMOICIY7wCUUhQGSVqLg2F4%2FZMffNSPBSK7bkdSCHljxuTUnSwDFLfG87b9HZCcVq22Cq8ta6ACLcwZ2Eod5HpVeU4Xdrn1i4Oolh9MButlADiUJOU2zududvVKYUk%2FNhxBxCN%2Blmwtb63oJaNRQhYOea353jUMnW7HHIa6%2BBzpD3xPPkgY77G7hvqXyZRdr8Fsaec423ygu8uYLoHtFkgWhHx%2BEpenQ10gfbvDjKxyoIYAsSHASnQ9%2FF5cmHc18LN5ZDthHZ7A8%2FqoAlYco5Ng333ChR4evptcqYIK%2FnQcUiojrZtVJMN8%2BWXnm7LM0xVsB7G3UykW09OwgyOzywWBjV8jdX%2BR4xf45vTCdh2TDYzsPEBjqkAUp%2FnoODRbezeePVs2KXhPgAy4CX3KpcAFCAeDULil2orVYlLYNPqgGJ6iDm%2Bs27Rv5KEP1e47y84FlrM5ZPjE0euLmO2GBU1JRxxpnuIjWIiBcQzpnejfyHLdPP3LpamC6LWHMsa2x02uyctwf8hBpXHX9YZZut7V3Yl4i7wMD4E00aBLJyKl22VcjSxZht9PXLrNreU7jmh3RVlBNRu6NW7Mlz&X-Amz-Signature=7c753ca3767dce63e95670ba3dbc01ec3207cdef213446f5f02145d2830922bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
