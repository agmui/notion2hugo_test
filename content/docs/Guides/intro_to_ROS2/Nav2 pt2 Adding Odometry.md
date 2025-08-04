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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=0240477618ef9c90f847dada03b99af5997501fc49ec04cbaf6bad5c0555a6c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=821810ab6fb9fb24b0f49def4a3680e144205c966595014ea6d5c14c0d03716e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=36a441cad2a1b7f7e75960cb4b139bab2b3140ece654585691532b260d9cc1e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=95f61deb8b2435e5e12d5aab523c9b3abd162afffb12706405086a4cfd35b314&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=77f23df673f41b45fa8e7949582e23c857adcf24b28ee7241554c94a306b7784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=6ff5abbc83c0515def21c2f06ab33ea4813abc69de16c2a49612c36418d864cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=33d82ee6402c22ed0a517f03b5653a81766ea1217fb834243169ffdeb28220a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=d992e6c0c77fb65462d40e6be45776ab1ebfd53b39b548e6ac269bf7ac8c0c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=0bfadaee8fe0ea99979bf7e6458ecd7b2c017cdfc37a36dc7e9d07530bba5749&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV52IN66%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDtNa%2BsVrWSg494e2KxN2Gr76rR%2BnGDeb6PN2x2pNj0VAiEA1FP8Y3Z%2FWuWKBvdH9E9vojyrFLru%2FvhyIdqLi3qeAR0q%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDPY17ioTYBXxdYryZCrcA6Az7%2F35wHR86z%2F1gTMCzxhuxNXw1LqTgSH32XBVTZBrcyv9CXxGTFRUlmHYJoem2YHB4EPdbCGo1W99tVuPrSqr0QGtdSPkVmyzRMTq66ddrcfTqGIsie9JjCsgYWfhTLLiPvn330AKLpzaJ67ONipJ50kxhg7%2Frcg3%2FFo%2FvwNDFcNaEDPAGH6mk3qkZ%2FVGGd54xkEDx5d1%2F%2FZt7t7Er9G2hg1y5M63h8p1O%2BdQaDGgxmrhYeHfG1ioDznADjU9U%2BuOMPAFu74NYs2MH4ShAvu3uGaQetvyepxUnff7g9ek1qHpmydC8qlWZN3NnAWsdbzVcKYZaWYfVpqT8PSMvr7lOwG%2BdjV8wlrXdEK1HxhGZrByd%2FS640BeaM58EkcQjchObGqB67HuibLoCfuTHphZWdhAQu%2BZm59vAWWgMcsTKeXOzKZGzcCuYecsd5hmTZAN3v0koE0DMc0R4ohBQuFEk%2FqCvkUhxy5160gYJsxvcj%2BxDYC8YQbzFlEVPw1Ky8l3gkhRiS%2Brox7Ew%2B0%2Bx2cyJNFXzkvtDq7lL59%2Be9M58gAev4IjK5O%2FJzRWA3Z4Jm6ULNypikymD6SsszAD%2Fmjfkd27vRuxGE4XPOBar2R%2BRJSzAZQmisN4QG39MP34w8QGOqUBLcY53tyrQPtF4rY%2FnQ4LpYzfpkOlGe83KnMu45AGVsGF8Mi8N7Ce8E73Z3z4j343B1unsn%2Bx2RCE0zuPK5cD1xjbmzd%2BBNQxVhYWRlsBU9yiTym6wKde1DyymXunyUVd8%2BjZ0F9CcCPBgpEGgF2H2FshqwK5olONRfm0Y2SQqI8ndC%2FPC%2FTysBO6sS1l5FfdnWVkcKMKvGcOlFIQWTzaU6pKG3oW&X-Amz-Signature=cbf10428e9b957c4d5544e4aaedb61c509423e3e268724a4c52b59e5254db24f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655PT3LWQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIQCRTbdGISGOtiXSGdRuOXz2dlTuBvJ73yJ0YmCQN2VbMQIgDebIAd1cykqGM1gwucD7ifE8DekQyPX%2F9trgHjA3UeUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFbh5Mjy%2Bytg4jjCwCrcA6hV5WwmF7NUAQD%2BGSpJOz2w6vk3%2FRYFQamyC4PHJ0EtXNL22QIAF2MKGDiAS9OMFvq13udFaBBvbjHPsIXqx3GpyyC55h3z4k9ItvcL4flv1AZOfYODsqeCEqqcDfDg30xbXMZOV6ly1ZUGcJJNkcLN5eb4yoWXuAawKSv3x%2BZPtWwaETz8cKljmEBhV75E1PMFXvrgTfsOdfEU1Mv6YoL7wFzVbDbmp2Z%2B6OWimhXMvcn%2FUFgB%2FpNZwrSyunH6k%2FzteS0Bghqn4JF7ZR209YRG0M40s42Cx3uQzOKKN0qYuYgeCqHnpIS2y08z3islv4J4uL31z42jJksv%2FWco%2BGr%2Bw%2BY7%2Fv%2FveM1AgGeFHkhsh6dkeRwtZ0k%2FQXdxumVVHMeBdTbW30QByBjHXwoP25MPr3%2FDPo8frSKOLREBMJClRuHBGai0A%2FwqDW6PNPm2Le6x4FuXEO7KxGojOF%2BufXunbrxhj8sINDp7FcaTtw6jK%2FYvEIoNjT1A9lwsGStKeIMtH%2BpTg%2Bll3M4V7b%2B0Bca%2BfSd%2FvbFITR6GEXGP%2BW2WQEmSeLtKxXqfW4IcTze%2FwAPbZz7Wu2kjSO%2BySsr%2FqZEvwFK7HBRcE2h1ePRcqlJqWwsLGwIt%2BM7X83pQMNT4w8QGOqUBOybBcUWIPq0av8p9L%2FCSSIYT5tffBNfa14cZbu7wqLiAdU310FCzUTNfw8o5qavZM8kcr0Y3%2F7hg%2By2YsXo8lAj9%2FgXrWvHxwBdtU0Ncp%2FYbFtULaor5DLzINR6JW81F8xtY41XE6%2FYa0AmzILnCOmZ4aMTLcQVXoE76TzpWJYOCW45lHWVsTuiLq0%2FedTkJ7Rl2KL6FA%2Bf3fgmJNXeNNEmYO3Nh&X-Amz-Signature=68336b69ec516056587101ebbb7ef24e6b01ca55383ff2a971d3e6693ddb7800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=2461f7297c419b7a4cf7c1d9e00199cd303fd740471f7fcb769f7ab889085f0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=9f4d20623afe471468848045c6354746086fc3c9983b62d54da4d9239364b050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=69e907cb573725c7a11bfc6598455650a73815c5dcbda7008dcffb00a1b1b958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=fb6ca0625955c08609966dd3ff4677ed318c0f14f5d9176ce76cd8e2679b450f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=ab05d1dc3610ea1aac2652d2888cecaae49dcb453c4638b99dffa6b3d9adbe3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=916325bbe252a9db06198b1251ce25268bb52269ef73c760109c90ac1f725101&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=2c8cbda7fe3251e0261a2c75d1fbe4ed2853a19ea90481a4c0a0426c453c513e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=8db9c808f23164dc3064f4bdc012dca12e831300a80b6ee4b4f3e9eb3acb9c1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637ZZIZXT%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T191218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIAHIujb8Dy19qXpmOQRbhiimClj5eX74bBtLzR4fvCv3AiEAqm98ErxKvwucUWRxWKJ5fDrD3IlS4Hxp12HLf9ewU%2FUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDARHrsPF1mOpIcRemircA58KToH7Nr%2FBRWdMYcd1Ha7oL4hqP4BmMIrCB4q6jH7kIKqLTL6EoRUXZ7QMPyycQmo%2Bj%2BPsLGfm9C4sV3y4TruA5X4UtHAfqnrJLZ5dpPrLbIfl1XUdwWaxnc2Ri2LgSjSFxNXD33NIXjaM8TNo16aak8bBOAMB9hRfJ%2BZgbRp8dVq0EqE6IR6nOgJO6uJBnMhLkW28v%2FEfmHQFpbgYnJsf%2BNKkS0aLVRluCc3pReOlJbqsSZeFZDhzxdPQZ%2FqpCirxSJrahWJ%2FGi78sJfLfF5rK%2BjBGC5WBopy7JW2BvFL5MnZ4t82C2O0xsGO8cERlKtNv%2BBDf%2FrR3t3tU3rmKyR91p0MZM7w4mqqbhV2gaf%2BNSye68sGRw6SlDZxgHSHyiLlbaC1pGGG6mJpzeuWR%2FEF%2FTEJ9yY6fcTgw8yF5%2FJNzzx2%2BN3O2pdGpjQmjllS0CcsW8ks1DElslNMSPEx8bCPik8atScv%2FxvXVx%2BXYigrRqz7jP%2Bd4W8CyTDs9zDeOLVuTn7e5s6Z0IEKuTpXYR%2BKO20Pl8rik7m2un5qb2QZ2wbAHuzQM3DLDKTV2y48tBkwiNtRFoYq3Ywow%2BcYUYAlOZuu1xxnQRVnb%2F6wjrnbNaolQF3Z7gbz2qboMJ35w8QGOqUB4wLVtb3yWoQfMiBDzSGVD2uF6KlqZ3OEZmB17%2Fq3ENLEChZQ4l3keFaKGsR4OAnSk%2FGPPwpgWrZusPEXsylZXNq%2FAOncMi9vQFxX8MF5305PQkGvZxKDYYPqL0CWSOpZayO0JJloXwdBHpZJppNSuimxW%2BqBG%2BBrwvJe%2FdEIAEItSTfLJJT6W8%2BhOgjWh5pyUhMsQ%2Bi0kg85rCrKC%2BETb3tkA84j&X-Amz-Signature=8b968aea8cc887f0869060a24be9aff96fc11a1730fb707724fcb49240c1b320&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
