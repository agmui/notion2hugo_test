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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=1dc1387ccaffa92b85cc75dae5fefcf7005c8b03cfedcf86bb0bb0294b451e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=6ee6bfacecb9307b355e4fa991add6d26d9257e2224901d33d652fa65a6ea598&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=883cec51d2130fa268da7973b8541024988745ad5e37afdbd9b4f7fea0bdca25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=ddf0d5c2c65fab2243ae81eb0874c17d8eb9a1399c708c518e78a67411cba490&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=4f46d4436c675116e91e862da08b696ecdc21451628fb104791646d8c583370c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=51d32d67babf2e8a8bfbc7b051c6fda207f19c2d6665f052328f7b5ec97e74b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=6add4666fe281a6fd8dbfad5cf720f35d1388c5f0b0a6f323b0307758e24b336&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=30509122f1bb13b9594c25032756d8cc6dd073fc71d1fe2a1e6d1a95b47a0fd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=37a90f6b33d38f46da4fdbde5a8a86dfc80813c160fb8eba8b62aa517e409e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPJRSGLZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIE5DMGm5Oq8XyjHA3rmaWiptuuvNz9%2BeQa%2F7W4pnA0PdAiBjwDJHcV9hwdsGe0ya4mnHRSna1i2%2F9IgSerHtUO%2BjBCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIM0JgiVtQDCw7798POKtwDSco4evCxBi%2BYNKJ7Toxn2H1UIBwqBeGsW2t9ZfOSUKKHkrEJarDncr2XXKV39YDk0qDG%2FAnIqYI9GD4uIATfPrcfdfFaCqA3cLItJfYmNUz51%2BGRz%2Br2prGdyr2R2dasq%2FRMth8HLTP7HV0WK3xbko6tx3lE%2FnxGL335qpsO8Ctea595QqkKSVq%2B1tB2dOI5ux0NAD%2BoAdpRktI4fOj5bHOkTv1Lz7PJaTbDnWZh%2B4bPPst9ntoPfp2NjTMWn4L%2B7GS%2BoV8ISLKgnBGJvYO7UaKAePY4xs%2FGHSv5qICVX%2B6gBohSYANPoOpKEhG6HIphX6JDnYGoenEvJJhnCaygfBQGf6noe09pLWUcO8hZj2MKuQU24JKNVMPjlqJlK2TYrY4Pg7iT%2B9pBTmJj7gKpBJyQ5nmZYkGoJdg2dMZ8prOXhkptvu9pjdhkgosTqY7AMK1%2FDQxMjPlrMR%2B7RWQT%2BWTjaZKkQao2XWIRl4NY9vF5k41eYewzI1LDxfpv1ad4SWgZ3XFe1He2I7SNS3YE1sM2ERam9eL60pYvmozqdsaEvQaQIdMcY6GihNmGTUE5jTLXjELhKG0NFyMMT1%2FnGFKNceUGvzVn3HnXD%2BM9zydWbbEl3NF8zHRU3Okwr6bCxAY6pgGmDg12kphfzkMSXm0ophlZ8kNsoOg7F8kGmnZK7xcb66ajdDGz8aquacSE5NUbgLgX2hxBtPuz31CSqG6pJ%2BzFUYjRhmjYzqhVbUtJrpGcRhmqOOzZpDGCH2OKg7aKVhVqUzUiSBO9YA6sS%2FBlWywX%2BWVu4VS%2BYtwMgUSGHmwwzlr8NYHu2PHbaabpiOCiA7ZBhC7zKmJCIZmi%2FNofYIn1j2qMCbmm&X-Amz-Signature=077233162f44cc46a05b27ed927d36bd0d8318821b965475c69e77e0784c251b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MCZHUJ7%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQCSdNhWOIRjS%2BmxouKWz4juegicV8AkqIcuwDMyaDKW2AIgWJh9xwiqKth9tCANuYweVkCgviB95Oik3Tb9%2BJGtak0q%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDCQbOc8wmMq36%2B%2BC0SrcA1rXA4966%2FyNtKbdscZMRqNTUPVyES%2BelF6PW4hAvremIVIFz8mSP8kNisT8CNw1LlrqcpvKypjyuOhlwhNIZ%2Fo9jbM65em3QoesK30P8a%2FsMeXVUrIG%2BptGzFzKxdpE0AOZZO1K7znyKvA4w%2FyJdcW509QldCsceGCn7%2FGd8xRku0eLBz%2FbzKGo0bEUgTQCNM0mEZpra8U23ThENV0wFvDyEVukXXcXCcZ47h8Uq2YsEtuxDNB%2BNCK4WvycR%2BZfSFB85XWmnR%2B1E1K%2Fkl49xNMn7dxrAV8Gk8uAqcL5islo31nHqX76uSa%2B10wdm3%2Fns6kMA%2FGH6m%2B5a%2FsZ9nmTg0jZ41fcC7sQM7FDjUxsYow7hAdXfisitPc534O4bljEwYc29zXaW2KX3nekm4%2BxtJg8X21XhN9JipWwsyqinbDwGzzoet5NfUK%2FpLGnCE2%2B7K%2B8jm8bOSwEfNbd00Y2kmjJrZGanPDPDQyDGRD0aDjllzBTL8b8IiBp1w3GoaTHHnOI3jbuMqoFP9BNNokxpasYxDydgBAfj4Bf5cpKfpn5g5fT41NCGvA%2Bp7PJqxNIZtJFSo0Jrn4VxW3yFWTTpLCR0V30QKjOFZ2jNCH7jleBOIbFPQsZCef918uPMLimwsQGOqUBGdteQxYp44IhoN%2BUKozTSuBcaygy%2Fny4BCxeg%2BHGGyZ%2FB1nWDc69raF6S6O904hapivkZiieVB1Wrm2kwGi17Sk6CAiP%2BXMD6%2FYV8TIh8CV7uCdpMc4X3bIUmY8YA3xLkTrJzDB6ren7wddO3gagbZiqknrEf%2FVmidOumtf6k6AajZdJ%2F6Vh9JBVGzO6QUJmuiVC7n08bPvTsfgu5Q%2BYdLYPhFjS&X-Amz-Signature=043055e9449b85068df6a3b9692d538682a21369ca56f321ab37e3828026806a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=c3024f0db06e478d462457123935d30e0ddb356270c515b1e9401bd0dec04834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=38d8d2d8dbb8753f544d5b48c15c8deab1af0881b09487d16ae80cb544d26889&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=a016539b15453a0841ccbc063d3c3919e38f77386fdae3837dee47068e70a72a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=4d93b4c79b4efbc65789b183e0d32653b2a83d11328f335baec0eb1d85d22ba3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=4ae6c861823d3af7d7dd56386943630b6f6fdc4ceef59f70ba628f0cda62382f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=63b7a6ab35b3c1b146aae99d4be869118267c2a8a328f749f03afbff103d38c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=b24e7d573b3056fdb7cb755d123ee9016d737e210c538a7efb66b0b5ef8410c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=058ad6712adafc9cd732c29dadac06b108f6a6556e327f82b120ec6854422f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URC4S5OC%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T111027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJGMEQCIAK%2Bku6TpOAml5GNyi53szoOHHr%2Fx6LAgrx3gRSz1KKpAiAzsmnFg5w2rY69NrPpEDxvJTKjU6AY4FwFTK1XS%2F17SCr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMnWSUEqCTLzkR3Lp%2FKtwDxJWB3q6XZll%2FbfRfHW9TOh%2FvMYBlezVjoifJv8yfxE9nXTHEiwZOnnaLhwdvRpKjVOkpl%2F3tTiZHHxO%2BUYoXsN1g6xNtEXYGXeF4iiTv62sjBxKOWxZGy20UA4qmJVRRNvoxeNFym8HUD6br1H9x5T7WD02pW5yzNjmA3AL%2F05Cdnf%2Fc24CwMWUZgq8s0%2FTuQf5TWvhNe1uBd7H7RydhjqcH6zvRGRk8Pb4tjzboNso67OW%2BA%2FemQKerHYZB3bNRfl5sjatNigRS6PkEv8QB9Y%2FQz5LKiDFrbWjP1iECHzGsl9YSj7mREwrhGGI5kAtEaWGi3PShm2uC%2B06io9oVw1FJm9EklE6E6yWkOCL8xXjtRzKAPQP657rRIZV%2BLKCoiGJWu3ULDTfRRWMJ7s%2B3G6g3RXgl%2B5qOq6T3wDnMyB5oyJ9LlnHj3gpqEiwe9XWqSIJ%2FqulJm5os%2BgIkmxa9O26Q0PpCJLHJ1G%2Fp12GuSCwQFYGlDJVijeFM9ElDI8knd%2B6wvVOGI0iSAaxjRzQtlvhfOeI0MwXUcx8yXD1ziuzn2tiDLEjVW%2FeDfBPQdyIYNLEzA%2BNI9Av9LEhMdQ3M0MFw8NOmogZvdyIZUYAtRt3weOu6KceaX6uqDcEwr6bCxAY6pgHWHsv8oKLWkcEGChksNBujA01UdMbDwz84gXaf6ZyFDlvoTY40QXb0tEjI0%2Fr9yYlykAm4RkmfbxTdbRe5FZJTNik%2BVJyMZ%2BF6jaqJ%2FBzG6WGfTFZkx1WdJhL%2BZAFfDvTvh%2FiurPRkwa4q2fq8uvKqrH1WkI8Q%2Fhhgiw4szpmOy4IF47ZjKpp90z%2BGqTeesHEkKpn74yljbtqYxyAAWf9V0Y8TJwid&X-Amz-Signature=f7c37a34da9d1d664a69eaed95478d16ae0d51f7cc2ffa0f6dd100deb9df64e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
