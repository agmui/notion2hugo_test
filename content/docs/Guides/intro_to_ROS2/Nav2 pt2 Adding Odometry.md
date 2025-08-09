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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=6dbd75a106604fdb49fe024b6c895cb870e86fec1125dfb5e4f379dd7363654d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=e09a733aa7db451f9d4019720e70019afe25b0d375a78ef3d946bc209e183f1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=64eae1feef1ae9cb443af2f5d6bd146ae87824e2b2545c2b591e4ef84dd16d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=d542f1df369eb078ead4ad06b3bc854dee717221953c62327367cc60be1ea19c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=1ea9700e0ceb3a0c8f897258985b54c91df275d6041a8acd95364e25a8c74246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=18dfea4134c02a1b56a06edd7c73e5fe2b60cc051539d60e357ff2011e5313b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=1537378a2fe409248d0e0c2ad8486eae99221ff4ff2294c9ddaa4b8d0d91edbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=3211ec7637c28f59400c258757e49ca3ac48efeb2b2618f972b0e0eb5c6693e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=700b85eaac28b00f88ce866d096356efe40853ba84d0f9a93e4e35472056bcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666ZRW2KR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIEEZYtDzP0c1M8o45MJSgyVggxu4ZiqajJsaoxo82n9%2BAiBLHfEJyAm%2BK0sBLtW%2FF6KXFWzcXIaDB2XmaOPvB97GpyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMntwfXhFtRIc4ZQeCKtwDngFBHAJFm7GP6VvTjCo4EuiXRQVMyZktUiAZwTE0tVJCjRFPKrNNqqZd%2Bkw26JpI73BUpcly0E7fFgR5txdzt6TabbFdHEj8hMBTniyunZ%2F%2BYc5i%2Bd3Gw0PT62F4CBnnMGUkm42Gyj93WpUVYf4Mpepx57OJJsPhfa0s5%2FARkfAsdfVwBWEERFEaNhTgdJjDEnklPfSEW36SdVTBA6Ebh1GAqr%2F0HLTIEEkIvr7bxsVEoQto3QKct7nsup52guzWEmP3R6LOqxVO9RNGRp6i%2B33PWubkBJGm%2BEt5HU6RsOIyg32IesDgYjpUl%2F4Uexm6Wo4tydjVKA45vMRl%2FBqr80qZsKVFqrM84fYgASC%2BC3eJzqfhGQH3LFINrvhw8fb%2Bo7NVie47aEu6zIMoVT0xJVkpg9k66ZRFIkACon2NDQoII4wipCkyoA%2Bq8GcVPbZjusmiV2p5bzKndoyrTKIQRJJdyaDreXrArV%2F7DGXJM6UhggcadvVgW7l4BBkFb6H0n8U1SWmQM1uBVRgDD59WDPJszbMjqopRlAw9FAON4KKdm8SNU0kuExLjJg3iIb4UgqwBqIqg%2FS1hyJ%2B7oTMN0DX3j7PEsb3mp0EsLY9rVAuWgpu7id2uEHJWAVMw2fbaxAY6pgEqIxPfQmIjmASn8FIRIKcTZ%2BJcjRxrT36k2BZhz0txsZw3qANjCbVfGyLVVNBhmLvRdZEjkCkzGhNi0rC84kHjESwl6J2V00d2%2Bf%2BPnpSuyuk3zLclcI9DRL%2BEGPcCGGMBcpO5YDUabxmGy0VHsbZGxiOaH56qDx8qNk2hMlfcYBwv1IH4xN2EKgIKiCUce4DdX0T%2FQzkm5LrawZtCMwgaUrGsBx67&X-Amz-Signature=3ae9ed2947213d92d2a07053ff306cf2f1a1510f18fa160c33f8965f6103922b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNXSO3KS%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDICh5O3REl3W49vTZh9l%2FCblfxH5Xm4tcunxZYwHbN6gIgOhvhXCIfW5hlQ9VgMSEo4V%2BhcZXnQ%2FtziRd%2Bz72niWQqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOWNPFgO2PQ2SS1%2FyCrcA9x%2BCz9KShNuMCjE0%2FkS2VKOdqNn%2BLXNCgjjbFbECFZ7ux0y7m6Ur%2FLMq02X7tjmunAo7gPXzxPQnKxF12tIOXxtOM8ef8YOGakZsR0fsxTeerrfSRP0vBS4jvIeTZYmxP3MDyalLMUAdMo3AnfW%2FLMvAsqWaxwNAf5cG5TYH%2BOVaVDRJl0M%2B%2BLFc%2F4umcwmdJLuY%2B9uxB3VTwm5%2FjImaFAqoIYcfQfvVYy08vmvmlxZ87GdCJXpfXKoT0RCVVfUQU2h7Ak6o%2F1aoOmlojdxg8VAK90632JUIMQGT7JJqAWOF8HjiQ%2F3Mgmfi7d5qieFxCFUjnC3B2ob3jYjuzeMLlyjCs9mYiZXrwegK%2BqXE9hddD3DAzJemrBzeGZA8by%2BMhQ0UwH8dw9kDxbGxCyoobaoAHHNdXkMogZe%2FxqdxnMQ5LUXqzufti5uynugoaB75vcTfG15GVjm61Im1KcP766J6faOYqRwQRHtU1%2F1oMCoimSCBj4EcyOZ4%2BcqENLKQey23hqgPAhVNCHXPkFmYpzQdxIj4uvaL%2BKdD0lSF6CRbdw7blci8G7x0XH2O0GMHGNE8ISXUqV3Hf4U0cUPRTn6t2FBjabKK%2B32YpxRMoomwamtmdL7atng%2F1fwMPb12sQGOqUBmP9eySvnBsBpSow6odQyvYRAyR0C5fnEsKTNR9hq715sXe9Rf0kcDgZSn39U2s%2F%2BQqLzHZqJm1O5knpsjBiFph7rV7qBJzZEY9VNoB%2BptsQ%2BQU7eGTvFYa2KegWZDfXD02RyqRAGK9rYxtxBj9HaXRq0B7O5vklqCWz6SAgYXW8I2%2BlOIDjkMIdWYANE1br2BVisA2jka%2BkUhQ5NS7UsOXoKo7OF&X-Amz-Signature=57f27714b6cacc4456932abfd14d2360fae641ee2d5a77dc263ef0506c0a71bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=10975f12806038e2c8f818f448e370f9b66c6b9e8ab2806394d3d053f9c4a518&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=a0856b06fdefaadaed77889fe93232a28b390bc97a0bdd8497e7199497833c50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=74662d6c2a3c2727d70611ddeaea492fad42522d8c42ebf2bf70075149fd0c61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=304ebb2c4f81f2a92d7fc487c0c452b459fb71eabffbd5e4ce480c28df7b98c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=a2be7cac38920894a174dde7841e4b5664f3ae77232ef9e6a43f12bac22489f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=b2a9caf75e3463a2469ce48acbe0d08024dea6459fa68666540b2698b951f321&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=c1db646ce4b7f2265e2f6d610fa96c9b5959466a876ea7e61ccd8e47df79a082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=035bd08f530a2b31a53e1eed076fc9a86ef0409019011542a5f4cd32faa70895&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UV7FFHIX%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T034359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIArWjbE0Y%2F7WM57ZQplyGeRmgZu6xD1S2e%2FL4irtFQ7CAiBKBojm7CZay1We6RqVefPnRSU3meylR8bwwYDASsngkyqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcvuFDZsStMHwsh8sKtwDIL3gquYfZYq8J1NIW7YZfz0SiUcQWS%2FEM%2FgqQ8KiPbniHVZN5OgwjoWoey8rpkzZDZmUL7WyM5bmT3op3sxtf%2FHaK0hL6eGQfXrJd5VLKh8I42FNVY0OhlBuaN95ZnhtHDF1q%2Bf2AAwlhc3krUkOTjo5KZs6ZjAfjUsTyeGqmTQfbVCUGOGBYZCqW%2BYgw3CPKph4LhwosfCOMRDZy2CHLZx3vEAF83yPe7cJLojcEkZBb2g6nan5ymQO2wOV5zosSB1lp9lxwltYgH53YNjMFB%2F1vtOowrZ0RTr8CwardrrXizA%2F9fvYghl37yIHnb3udlZK3LpXq1%2FfapVg1zaTKYwh5ETKenWVSXTpOhnsM83xV6wxiul9YhbG4sCZ1xxYHWg2XNkyYQrMDXBiyjwBkVHW21R6qp7aU4d6Q6yI5PV2xF13lKeFgb9crE5h85VlbZrHAfZ8PSMwvS24v9M1r7VosF6tnSCzZk08Bx6My19ryvJ01p0UPQX1YssO43wx8KdG%2F%2BOykxh7sK6ib55yxchk7gDA9CI0HVrBYaMmkmCMu7oAf9uy8IFWAMFdkAmF7moszDgjr5ogwx6N5JAWDbBjLGg8qfdRj2gqaJWwY17EyQzsJxQ5Kv2GTI0wgfbaxAY6pgEYlmpDwzj51FPzED0P7XJyWncd41Ev%2FScPnwtwpDfgFVdE2rRlOE5RhNFzz%2FBmuVu1RXdf%2BnVuzUb%2Bb9FMTRNBNL%2FbpI0U1LQiaijLUBWg11zgMIQq07f6UkHHb8lxlV2oPrAb3lHjafzbOReAkkPd6HokMThSVPSvf0HxXko2zFVP9nRUsm6EDls%2FahUCsVyjdwXIVypncpFDgTxV2igoEy8O6XHf&X-Amz-Signature=7a6f02445cdb87a54b95d0c9e4383a245b3ed89728491950236aebab42d508df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
