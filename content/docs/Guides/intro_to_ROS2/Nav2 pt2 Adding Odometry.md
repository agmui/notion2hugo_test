---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-28T21:22:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-28T21:22:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=a8e29be0fe2ed0a04b89a94a448105affa6d42652440871525f148d1a2cb6608&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=3a45a30c36a9141ddbcbe01aa755da11f8f8bc3f1fa82d1d882a8b5b66b1dffb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=a156b780c8d42365a3606a7e9c279f86ed181a603e19fe2675d5f2a6b00514ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=85ba5ba9bb4409571407e2e3b9391fb0d9d725659cca5321c5f12e9ef42ebb17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=ad7b317d7b6e2ca24d72d0ba9adc99b57f88ac2b2289c655fd24f4acc3cbefc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=de103205dfe9249cb09e7f2bf4fbdb4e50841b72d3e0982b2eca70ada6b21d3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=aa40e3260877ebbca1724bb6b7a087bd787a52bff448b764f709ffffda007014&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=3fbdb008d0a7d5aa067d95e78d7fe3e8d5afd717aed8cb32786c2cd9e258babf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=99ef7626bbc0125af46b238af3badba44e11e821cc5d34109595b8a8ebdcbacd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QIFJAFI%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIEI1Em4EtuuKSHqQPdWGk%2BDa7IKzq6f683TkNPx6APsAAiAoWK3ffOsuspJGEmdpUCORm%2Ba8cqmKL3u6nDH94mJ3kSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMljU4rdvLXZUCFptYKtwD1%2FBm7XyfBDqrLGR8Y8Lb919eSmBRqeJhIOO86F87pdRrCQFov%2FMMoBG03wPrSjOkDR%2BxgGWfPPJRqIRfsIUdVUoeZVPruOLXhxB0Xjgooh6IqKYq7LIEfptkV%2BDYhuuu8ibt763ycO0lV9%2BNKbhUx4AY1n91Lssr2kOhyVNsYcHkoWrPjIY6zRjWi7PfBOYisP6ir5Nk%2FitzDP8xfq9V%2BL4Lm042bZMLrLCJs4w7Bu1CnxHIxyvMWi3fk5v9AwULIUYnY79EYEFH2eOV9Gtx%2BUPjVy92Q0dTwOiyZuwaljVjiqvJqvnmujEEDwf%2BghmpXSVl33myuczSUq%2FGDx25twmB%2B5135u9wK9Vu8kh5GHpBthJe%2FkqCqGIovsUrio1c%2FvpfozqSC17pbJFf76KUuhR8Wx5HW6%2BstyNf5hnY%2FgDApBmo2BfLaUp%2FOCUhNRqUdPl9G0rC8xpl0J2pNGaZ1mgWavgY3JJMouq90MAjf%2FXwoNWUGWu9hmE9bc04wMAiCp2vcvkmZ9rYoJyZecx%2BWc7N%2BJEWi7jnplp9Zll4DbOU7PqIw0W2UyfPP%2BOVEWYzNH7f5M%2FWgmUOVra3RQltzCljMGAb7WpNJQqBvKlJzpVJAKc7bqyYYv58joMwopijxAY6pgGRAmUjIAQSdMHAeKNmiakL50Cc7bVJ5h%2BkSHAuYU49wmMkGgCSt75V8zHbgj1KNZT%2F31%2B%2FqHso6VOYRz0tnZI77tNWEsl%2Fm%2Bzdj8wJ9BnFOwj9BIgrCMM2YArsa%2FPQE69tCzeUChWlt92QKWtZ2eo4%2B%2FgahdvYpHJFtZjgQBL8TTrJp0uxYZLQmIs4C28aLBN6n8pc31PxB7UL7%2BYL3InexBea8ZKi&X-Amz-Signature=75136c2548a7577ff8d28cb694cde02720e2d13b5de24438175c4cca9ea8f03d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KVMHI2H%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQDg6DgzYpG9wop7HWvuLWLO5GV4e%2BKvrjP6ig9OTY2rfgIgPAyR99yyn4lRnHgulo0zxECwAUWC7TIouV%2F%2F99yeoR8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDExudLx8hn2%2BEck8rSrcA4CLOyZ4KgeGRixaMMFQkefHgRB%2FSpYFrI0KB%2FgcXFg7tQGa1hei2j2Lsf3AUYyW%2FMFNwkMvT9aW1gVug%2BEhRIF5FxFTk502HqznoVvpbGeHJJbQ3mza8Po%2FWjMYS2EPi5KxX7UZg955TvLeO%2BwxxQDIF7EcFI8EAKvolja9dWlUa4vtzIK3vt0ASRAC2qh%2FiFHSDhJ79ZwqU4WHqa2vZ8a2%2BOc0CkpApyWvuvkKvm8qfdmhgzKS6arW7XkqVPwezE2%2FSSUbCR%2FOkP%2Bs99o1927m2Vll8Fp6KThlMv0NR5nJhnptlKhBSYskf8gzPxfrnrJp53fDp%2BzNvZYls2fa7Prlv69qoUfFRx8qGB33FZL5q0YnB937oYCMfGGzAAn0tBwtOtjrz4VeicG%2FYV9CgbEiSYbeAhix1oXcFo6txVa3mBpGWK1lD%2BjYsuwTOpKEVpMg%2B9ORe8nIENCP5Cj4JiZHWVYfSwL77ujYr4Iabs4kU81A%2B70EDs9PsxkGlkdMT2gjzMqN7bSXcbBit4F%2FBgqREfb5x6TRhmb8Fx1A3HrzpjSZEvfIJfnEl1iA19GoiczAyHcu2qCVBDFKTQ9y8w%2FiNBEs2E4EY1iVsfSAYrO4ZFFx9%2BcYj72vdfq7MNuYo8QGOqUBIWXpiV8e9BieP31BMayyU4aUWR4AZ%2FAIADC1%2Fm5Zhzg1HCJ8w25hBhH3OV58dtk%2F6qArIEKLs4tD%2B5u7jOTPKEhdyxDjSCDzxc9ezOMxILUXU06z84RwyGUqouilEispQM3F8zej5SFw5r7ybbtHD1zrjkIFVGh6GHFxEfxW8vCeJa8M%2F8iDCJhu05tt%2B%2FJWqDkAzz%2FTyu5MXUg9Dc8p8lhT03fs&X-Amz-Signature=d5b861f4a4e9c20b12628b87381e21a2a6a260979401be29eb892121966294fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=74ee55ddc9fe3b2de6d816363ccfd6d8290235ed5b828801fa62803c122786a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=ca1c27a3d357db17601ed35ebe3d79ff93dec7f8fb15b99b42d7a16d9ca4cc69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=435f6b15c96449530529bb191d6b03bc5561d7662afac84425b3abe4e4d3c7cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=b44f28bbb48bd62bfec7a73188edd9dbdb09f5157674cc4cee7bef9703e0b8cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=2a1d3023e332c17699651cf045c3716d4771752dcf388300f42e07fb5cdd1b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=d88a860f8b318367809bc8aa6c7e6b074f4a146ff89835f23aa539792b097f69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=683d5aa6326e5e584d6ba20b1e5d3a90aac96f1db27070be9d4740fd79fe7c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466644JEGBJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIHIhTYO1PFlvaDuFracblk4CWq1RBDuEfx%2BZdEiwjijmAiEArUg6exHDoxqGD7Ep7Wf%2BUTm7gQvxE9O00SwR2nDeSg8qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK%2FpCfIMIdpbTnJgGircA%2FzVMHsWIk%2BwTplycBmEaZlL7T72NkS%2FwHKfmOw4bWe9reVIHS8WdP7hGFJAwolU8yidHdRghDpPFVptNJ0MJM8PEHG384743OfnJsuPmRu64GIKVHi5Ntv8BtMvOTJWfDszoZUtTb5aB6gLwmBluJoJ%2B8QypoR24QLZi2A%2B8yQwOIEKSthrLSZItiM%2B9%2BX5l6q8PUbeEGwQ6Rk00QjoR4YcLpK6I4xHYAoH2uoaDMaeSAF%2FhM%2BrgqgLGEJu9bpAPxbcKnF0s7fZFLZDyDUT3CL4LwaChlu14UxvViKVkc9%2BEkEzEcKqfrOTtRnDD0%2BpCIXkwIoRAwwL3703l1Sn4i8PxreKaY9XvIeCZzOenMEZQ5evQob6tQH33qkv14Mh6tg5nf2hfGrhsN3VqGy1TLr7Qyjx5xL3aLztAYkx8s1tijMEKWlQK3qubPkfkqIc%2FaEAxGyUDtCHuKeM3sGQEt%2FsCXmwnrcJFkravItGZnshuwDVZjwpgo7X9jBgHB%2FiflryO9OifUyQIaPx4R0UwxCHE4%2BJlJa8pshafp95TiAJcR21%2Fi8Z2aYuXiX37a4X5smrfJaYLluNkjnFiOnoLFcGHeBCoai2c0KREit2eSz77xmqGfncBnkwP9ABMOOXo8QGOqUBl%2FQfmWY0DO85seM3i4J4F6PY2zB9o7Lh%2F9WKyxbjI4Z9tUoDl1J5snLvhTXwTRhojV4YFTjRzrmnaZ9XmMeeWfBvrGshbOkB5uc9A9mSJRLdhPwpWMdHgRmxi5YfPerITy1S1Kuk3EGvGjl7i2DMNa58%2FMCxMd2UpZ2vEKBeH5GejH2mfMu5DZBQeCCJ5d0LniLGNwjfUUpDv5PvsvfSuq20xfkI&X-Amz-Signature=b6dc34667c785686d1deb4c67db82e09ac0fed7225330dc957c61bf784ab1326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
