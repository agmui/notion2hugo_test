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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=682ac6216ce8e2f1fde97d084c75e0d0af0f5b86cf67ecc645971abdc707d429&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=8b197db606d12d04bd878d507d2d541629a77ec413d25e9a6035a11e415ddeb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=2a079b0b94743b826fe9515d3f4fd8b0e9183c547faade0081875497a818f76d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=facb48f3882f7e75c7fd3fc886c8bd94c80693418efba9eae15e3ee91d7d8bf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=fa5b2d8cbb2edb81413acbd75187807164e2232b10599dd553721f26ed45f4a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=244b1b05e1bbd5737eb51cbdead2b85763fcbd3507e9be81707a6070a457ff8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=0c01f385138332ac6ec04eb8c037aff5b8f74f5fdd3412a695c9a381e204fefc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=6aebfbbffd753629fdb051163dbb5ed2cc6c2d1c2298c87855d99da0f11d6706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=59d30880e5ec1c74bda2533a3a9bb1006a636ce87949c7ac4494987b7ef828f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DN4UXK6%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGfmswd3Yj1HZLC0lc%2FqwPnYWPq%2FpMYzuECnBbH6BMeIAiAde%2BtQgucRYyKfEIbFZMpCzKqqfGEEZ%2BdF8aBlknmcVCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM1nUujTFszBitqoLYKtwDi0%2BkmHqne81VUOBPFFo1XzMhSpwExaQrV7BYhGDSnK1UhfayDvV709TwxHq1ladjUKc43aJhlCmrabYgBLoY%2FaP8zh1Bqxt5bWCUc3MiyZ5VCAAHGCCfysjA1ZkjFsAtgAUkMvd5gpWOGuooLfrtjYG8gfcRoTgVQcoRVFyNtpGeuJTO2ebju9tWuTihQx%2BLYgtQqqGK2vh763jOYdoU60SHr%2BaGtvPEikr%2BXvUgi9Ml3Gk5XfkXP3m2iCHfAHyxNpg5nfRgyXc0uDHIjARdlyr9Umi6rntycIY2kPoOQrsL04HWdZ8EIlqqZjVBXOXk2pptIOot1L09URmvrApVjZs3bvf6R4%2BSSaoh74puhYCEzYbS4ioPtNd%2FP2MwNTeeFZ6qTmSpEctNJOFbydYirgiNRfo6XYxF466LleQh1hu8eNi2eonhyxTl2qaMyGMch4mEfMPcRBNKO27JurYt7TaquaREBFzygXrXh8nVWN7t7O2GhvZqGkZ8j7zjT3F5FA5Ugh7Wko2S7FgZAXAtoDwQ9dAxj8HYd1Nwr%2BZJU%2FSiqRJChA09EZTQYqfthdrWRIOoh09YEN2iOeALvg6vEKd%2BBd0KorDQzHndldfpEO0udlWgmTef5QZuglgw69DwxAY6pgEB2dA2%2Fk9RQgCFk8HOgfQWP5AYkas6rS1x8TUje3%2BTyr%2Baz56gsRwpJY5adi8TU6d7VAg%2Fi%2FAZbn4WHuI93xu8BFPiJvNvXQUKg3e1R3VBO5CSvooH7Zd6R65TQUYX%2FyR0EiWtgrFdAb4mnue3fMOlL8sjcrh63fEBTPSajEZ23F8cy3u5ZKnxZVbera3qUoD%2Bd0jwJfJHm41G3rVFw5deg6Mln6mM&X-Amz-Signature=a36e036fe4096383702c75d789598aefe6617147ff1192967a1b65d69c178c87&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W45W2AB3%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBSxjhnT2d9Wer4RhVt0XepLsOMqGOy7cT2WSPvwu1e8AiEAqVg1uYMatv6AO2T%2FYga4zWlKBsl5y%2BSG7AmJYOg9oSUq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDMYif%2FVjFNBm4UZ07ircAyJo00Ki3nVptbJMh3rIxH5W8MxqTJyNbt6OZEYNZGz5KlBlQVmvZSUMFwUGgKK6INJo6MjYvz8D87xjZHtX3%2BuZl0nN8qAi1T5vrdPXsLtQJoFPhI%2BLbTQfib9yKDeppzqS0I%2BjxDN4iry%2BL46iZhtwR%2BSOfMOFX3NiVniyapDoChNYLt4ws0jOWcYk8w1RMVckq9WgqjfSlnLrXug66x7anyfjCpbJrjxVwpAb9Fr4JsgpA7dACROKyuz6ZKFcN7PEdw9eK0LC8hh3Uvo04EU73KFcD7mg6nldIiU1bRtNtlsCemDCQqvsgnu0bGVXu8gyddTUXcK0088NdbDQ9v2YE7C7LabaW%2FoOOij3Dxh87vhjh%2FTTQhEr6k3Xs62Iy9GDsxjgSxbSOy9be7K111e0ZU62ufJpNaexErbTQ5rqd36Dz9gUlGrQ6w17NvUKlh%2BxCRh68tDpe0ferawfeMOteLCkkU9Tw%2FBZPkUd9yWBF7c%2FcB1y%2BvfuRWZWV46vE%2BI7F8rTb95TA5FtjDICPbXSCvr7X02blpb%2FM%2BzHMn5nLDeHi4Xe6bmytxWpDK3%2Fu7CG82EYtScifh0%2B7WuBtLwqnbxTiR8ZyYE%2FG1agvkNSF%2B5sUJZodn1K553WMPfQ8MQGOqUBFf1rcc5tdL7twIvLIzUinbz0zC7gxbj%2BxKjo2aQf9HLHrHUWoi2Uz2buwuohYcEi75TQ%2FBBfwfqbYqPhCXiOdkD78jPyU7s0Yq4C2cxHidRnKAOGrBsbv%2FbBnwhVpav%2BLJHnwyitCHTE8yZpQm7VYxrtCSO2GKCrFEaXHyIgz4M%2BaPTMHI%2Fcsyy7cYHlmAJFLpLgtQKBmKs4s6PtEzjJS0zWo%2Bj%2F&X-Amz-Signature=2c43f9ba67c6d5051c5b438462187d3de7f8d3d5f952fd080e8cc7132a6e9fb1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=e6fccd9e4c1008b54597fba0e11c62f3654d5a3731e16fb577cbf1e5880bf5e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=e82d5059a5421a82099ea2fecbcbca8084b2a3fe5f66b31068c381fbefdcd36b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=cc76e7194d9aed2d3319ec146f83ca647651fcbc5ad9d731920a7ae6a0db3dea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=c943e20fb3a1d8db051e919b1d4295ffc5f92eabc7a01dd93b1142fa96c8fc1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=adaa22376afa35f3a99807e3fda045747c36935bd3264ad0d729fc40b12023e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=99e0d0073061e349740c1558db211df1ef71d2ba0dd9f7912289d901f9d395b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=2b0f61073856392b23b1adcddea9e72d386572b9c3840e35ee9ae63f44161dcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=e65278a201039184528e954383e8029351861ecadb33c364c078bf4ed0c200ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBNRBEN%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T071157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF7SCRqzgc7OCEeUo6c2VnhIPHVwClDmmNd7O0WN5WJSAiEA27SbjeubRDWnLCFx65zY9TdRbSskTKgmCy4w%2Fc1BVpoq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDBAJbr0WQII%2F%2FcZyvyrcA4n%2BuWCvQrji8qKAZUh8MIU7yFrDFA8iZPKl%2FPBQML13J%2B9TLk1IQ5HJHU%2FTh9n%2Fm2vrOn6xt6Suvc7qusCmc3gyyBcPuCiaycVfw2u8jww%2FuM%2BCdPDET7kLb12g7o2GtF4tkIZ3bKSdpmXvKM%2F4rrhOwWPaEtHJe3z0L4%2FyDH9MxNdYOz6yyySSz%2BfYWOo2K6%2FotET8u8MRmpTXeXVIIa5w7PDjuaY2xXOfMVd3eFEZlOtAr1HwHbLYzR%2FUuyxZlN%2BhYHoN9Xjadie61zLZ0YZyP%2BxJxYuPut0OuuNDArSIErRF9CMLFBiopt2pDkz64hDkWRJ7hIoqyb%2BDUbQN%2FhChVAausjFtck8N8fw5muK5nqxBfHQHUfkL0X0wrOipBa35vDmDa3zhnKiSmvj4rbtU83SFeftAxJ26CjulYOKtt6OJaSuOMpD6Pr%2BM1leGmoB70EZ7m34WZlZXyP%2FKBby5uWktJlLlhD1Y%2B3Ch3lku%2FgeRlrj0wKCDyToX0aV4IiH9flmm%2F8XW41Jx9FeQByMQWcM4anqq70%2BtgVCgOWEeybQVEZrHTcH5s2XyLXLn0%2FG8N3JTb97QZal%2BcblQLi0GqatJLacmHybcvTI7U2EAKSkvwfoOiXWSq1cuMP%2FQ8MQGOqUBotHvscWhpYVlUkjjpIJt1X8fawsKvPM3MVN%2FVzvHvIMhkgMF10cXC%2BlVtDznkFsbgWzAn9vscm%2BniSIZ8i52R4ugHnmQLRvjYQSvozfSltqNnmwyezXkpXEwPjidron5Hs7hEjrZlNRUatUAgWldHF9fxtNblHaXIxY83AYPcOhRInko%2Biy8KknL%2BdZBQkL2wG9KJaxr%2FOKehCRW%2FNkxIiRg0l9n&X-Amz-Signature=62e30cef5f0c3a8838384d60ff7472afcca8dc6ff478563d7d60195f8ff8c483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
