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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=2f18ceba3749063a7b7bde9b3599de3cabb70e289bb260134094ea2f27384561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=72ed6a8c7083ac0dfc1fed98b1f9b5d58ca69a1e7cc1c1706cd0c1201e0bf5f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=25a2d5f1653f492727167e9c9c4a067515675a7fa9c6af090969b5dcf0035065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=25140de98920ff39b14aeaefa7afa21ce9f14a14f895ef7d9a15ae2267e8de5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=a51bb7bf242e03b0e324ef7c49063da7d4c8c353eb86c6884f0c0b9d2db22c03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=cfe20c038003924623b5bb5d48dbc7058c590fbef8b8ae1b5a102571eedc2bec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=329be0762cb50a633fa81e625cc82338395f1cc4a94ff3d14c126136a1a91532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=c99540bae4b49690456a4ba86047b253d18c4ee948f17a6d0381e5dcd3e6ad0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=3455a8cf57532ba093ef5fe59c4d183826f2c5d87805bcbcf7ff520b48615fce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3PXLMIV%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBhX2NTXsc0R%2BahT2igdClz7ZVtS9YBT5gtMrMpl4QPgAiAbHU628%2B5VEIfcmI5y2VRhl6y1wuTIZ8EM%2FQwtDC%2Fopyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIMQW%2F0z94LZDcMWJx1KtwD%2F1h%2Fj9m2EVq9LLmqOumIVcn324rsXMpPoyP0Dpp6ZazA1ngu59prUw5rNK1tYZ4eEu%2FoaoPfL92htOThe6wP88AosR91ohU34%2FZysZi98H1j9TxaP0QgdQdLyde17JMQwVIS0Dt%2F5W2Ur%2Brc4zoUT%2FW5EBSs2oduUA4Fg9gVV%2BCdNDLv6Xj2UqcNtl4Gr8dNa62Q4WYCQCdI4eff7pgFTjaacbYm58mzFU1Y3DTgmHdqH9cnVTYwpXcXivTcfmfA%2FYrBbSaCS%2Bvt0QB4yGe7YQpVvBCckhZGV%2BQi7Zv%2FnsXwuLai3YZLrKHEeBUiOOwa6vG%2BaRmGFXkzpqX3V6oO292ZHnWGLLgPObzsnt%2F6JR0e5RgcOR1ONn35uJMQdZURWmQjApeg1PGbbMcoBYDp5s3mkAETUkPJoJydqKxmZ4wv%2Bor%2Fm5SmJLMJknK9z87NQopDIeEWrZCcVIderzOQExFjW7EMndK4dGXIvWTZsj2SRpYHHi7VqWDpt7svdMtykgL9OPtqxzzq7GKvdWq0Dx5DBccB%2BFKYVY61LS5lFHOyqF2UvHWDKB2VyAJhn7OBCUkLETr1eyCO6Y0eoG36TPuZzN3uggEVJmG5Teswvh2GC8RDQfWd5IRMji4wzYbwxAY6pgFKcn6%2B7hQlLvASVp9vco7e1E7E3jblUMKGar%2FYDJjlJRd4GojxehZdf2iqhHWWc%2FKsKK5%2B5LHorVB79fs%2FO%2B%2FspepU6n7MLsGlW7%2Fd5N2P43vPlRBXcS7Cqh8S5%2Fa8hGcxd6tyCRqeCS%2F9q2B21NuVdsYlLSxJOpEoic6O%2FpjGrgWFuHT09VZlE%2BMJfyeG4n8oKUKrhA16SI3LZHjyrQUNlq20LDia&X-Amz-Signature=bb22d1143bb7d42ef3c2e17d664428c4e23629652502bec35897501bee3ebf46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7KUPJQE%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxyOSKBe9rDm9RnH0M7owFFenQf0bf7pPd1CJguG%2B2NAIgAP0yweDwmJKkPopIxaWfg3IKoNdchROWCJtFB%2BWDwL4q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDIdpEOhllwunbc1j5yrcAwbMthp%2FiEOuMx8YXDZeZMRZXWAQIvk5EX91M5pCOJFjNsscLfic8RThIfmS%2FX5CNVqoyu74VN8P%2F4vLGrATeq2iRrautodA9CZxylvFHq%2FoLkFtmDcaJuyxKA1UNNigwZgt6SlUTp6PO3EH7iAYp5w4MqgHxYTiyO2xUrZKtDZm95Updl%2BTUU%2BzYWWOwXWV4VkolBpBzwLyIfJUiNTTIe3%2FlHcnbNj%2BmbFZ2yS9n3e1oQWK43ZwaBYDg3ZE62fUxivLweHa6vHO8yRezvDEz4ItkY8AlyTZoV96MEUXtzyAGYF1d4E%2F5E2VN3oxiljUCtDSg0qmLwb1M0G86Q6HIf0Cq8abu6UDzXLWokze%2BWhiz9IAJwRD6mnAo3bDnpPTLSDAmLbv4rpubeX8BqmebV%2BOdKF5xOfW%2FkdT99ukbflQemIRRwdIE%2F%2BoCIpk5COZHyibN0sbmNttxj0aaC2QgSGVd4LzzWbB7hB%2BZPb8JQtz4khMmTtqv%2BBtW5h1Fpdozut0VoV%2Bns4oewcQGIRZKOh0aADO0OSdT0Co0vcJeYUpMuqDsg81AArQNbUn4BtJLHZhRpq19kRYUlhuvaJ8BiTiX8h6XqwVBzWPo7WTfW4141SW4ttjeIZj6Iy%2FMImH8MQGOqUB0mLJJRAQcNdzs318KVldYZHBAJ%2FU%2BFpnAVMwGEiCyuu3I2%2F2C25uXResDn6aW9kdXzvbDQP7R9%2F8ZXl92wXf964Vpc0tdKtnwr0QKbnF%2Fs4H3OXnqM47b1TnKP9DDLA%2BPyXe3PzxYsxmK5fT3kDR6T3RIKDv4hUa2vMcEVW0nvThzZIovPefueWnMDAkEfm7ptkKVDxaoqZUrZofF1ulko1AK01m&X-Amz-Signature=ab5c7b88f4dbfe24232258554619be5f436d0553fd06ecad66498f2225c21ead&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=32a06239a35f737f7902b6f658902b157c799e5620bedb941c889b45b97cae36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=5add8b658bfdfb1d9f51f5fc3cb875551a677c98dd9ad423f414fc3937abb47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=677aafc574bc8c7f957c72d5d9db1b69505a17bc172f9b9eb4a0b0b1a44e48ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=edbfd9f169252af24c85aff1fd2183a1ed2a21b1dcb557490341f1a62876a97b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=68811f9ef3e43995463ef5cfe2e4ff95b731f1222a052324b5f53e2a354b56fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=74243fd52530e2107818426fb983d5394289fa2ab5732ff10894f2fccd1be307&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=c31c4a726dfc59770f0b5dcdf302a0f986795bc35d2c721b826ff41da7f06963&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=d1192c6e5a72cce3b656d0532322c822b559a40f756c99ba4a6012636a90c6c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UF3Q3ZSX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T042029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFczNkdPkm5Ex4RXL%2FQhH%2BZFK2TgHPpz8Fo4cqN0Tl0%2FAiEAjN5NcCBHACZzdBAUnAacS7brCL8IbXjlHA%2FbFDUqs1Qq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDKde5m89RjUm9fQH%2BCrcAxiA614NZ4S3S5%2F99Av0x%2FnhPzViPHt7xmrqrpX2ssMhFobOpTYixCch7dMfJCZusgA8sXRsprXQ45kZX%2BEri%2Bpz0hyneDmWuk41lL38x%2F%2B4jDXfTPR%2B%2F3SQgvTUtBH8urZk1MqE0AIg6PFX%2FqZ3vBy1%2FjUI18HwIQTQBefUK%2B3MyQvQMnET%2BLOKf8bXBKLiHNOMnkWBv%2F%2BjvvRmH1Ih%2FybZKE4mK2qfK%2FvXDcJxtNVlrkEVwXusjNnc8tfS%2B%2FEbrIDBnQHj12xEtZ9%2FbN4dhbSDRsDYs9EnZEjEjVw8iUuL5and56EcKak%2BH3qglTfbPgbl5ZOaQLu8lO4neNOlStE%2Fn6oKFSb9YMD7I%2FNRFSgYgziJO4M4TxJ4n04lHcYafOvj6ZT7BpBCJJF6NtV309SLgZFfgn4TBPHOjPq0Hy0k6E9S3WZrZ%2BiSQo8hYBOcNTChZ7u4CA%2F619VuKJUnSjDpICBwy0H8unAFOPR3NTqsk0hRGhzAz5FWfXA1RVavuMQhYqrR9mIV%2FCgMfMrzHjqHXC0s0ZKkq6kehw83MR9udCIlPiXmH4P8VasbL5nuIMJsLl0s3LaGxvxgEx0jqmsfmYom%2Fa7fIzJvTiy61X0Z7%2FBTNIQKoVrDi4kXMKqG8MQGOqUBod2KQYiyIaF54nsyfhzH5dSwEQvtB7j4jGDJfrPmlgicYg3knGc6yH2tzX1icfHUMaRci8O4WmW7%2Bb8Lfbcc2dqajzjKYWkSLdKRKsUGRPyd66cVJDoi0cts92lRnsRxJn4jnMk5bq%2BqLdjnhy8ikRFujMupBPqHyIMLLwQQICwNT26NMepGahCCOn9WvcWJNdCH4p4QCoS%2Bp6XPZdj5mWmanEfo&X-Amz-Signature=1993417583ac18bda05394bd591f869ac7cd5166f6274d6bbe696d551f8c2e94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
