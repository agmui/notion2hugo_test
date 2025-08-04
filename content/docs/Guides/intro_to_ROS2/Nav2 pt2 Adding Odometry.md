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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=274b87b9334f1a84f301e0d0730143752c41fd05e4965c5a92e95e5b32e520ae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=01ded1385023901504d4ccba8a396d3eea72d966e441a2c8653bbd85372e9766&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=15e0e43b80e2ddb9028711751856c92fc4f2e320ae31690e4523a4a02d9118de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=b6fcf369e6d5cdd5c4c68fe20222b0c6bd63aa71e0f5c4552b1ff89d390c9935&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=b0554bfbc14df65d74955e3cfed8ff4ad21b4f46e668b47a4e2bd4340f3e2a83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=e9e5336bb2fa9463cde4ea5206befd47ddc5f544aa03a3a232f3fb64682b9eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=11faa2d4b98ea30bb5a301aee6f8de8ea3903dbb096a0b6a947329ae9ae2442c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=6b26ed28fa27e0748b3698b48e75471272ffcacb9858146b35457ce5c795d6e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=fe164150003b1d92afbfac8e7722b40cf9517c8ac493a3b2890c219eaef480aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRKXHHIP%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCICswQRqEwwtjjCZ9OYpMOhCJcARPR26fTtVbNLX0TPNSAiEA4Sw5r4ZbCB7Okau2FAKSDFkPDHKFuOpPWD1ytmDXq%2BAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDHQrpdo4UkoARQbAyCrcA0CLSDh2zJJQAdcw6AMoQic4fiI6TwaTt8CXUEYnEaIyC7DZ4wtGe7dH%2BH7YIV2wZfYtYcuF3bWD95f7KR2D%2BsqovSCYlaNn3R4HQZJUeu%2FDUCQx3G4sLCht%2BtQSw6lV5F%2FNfqk6PUylekczuWnWMfSXwb8C4Cb0ue6VGty79hpb1FIE%2FgM42lXH%2BRr5st3S2UCqX6oeZq98y2pm851aGqm6SZY7S8FBPm%2FC9QO5Mj6IzSVGRfYfnku3TnseSdt0gyvG5s9mtVM68G09OKQEvXPGlcHhEzDb89ostm8%2FDihTbiI%2FwZb%2BAWiOlrNikOu%2BVKLxFwuav5Yvb8D1hIpqGd1rqxQ4VAbhuICBr20PKUMBYcbQcMgkH8JTvCe%2F83XS7Wgm3bn%2BAr%2FWcAJ88Sew5GeCxFoT0x1L1AmOQztYOXx6Fjanmy%2BRFEe6y9u1L%2FNXxqng%2FT8ynOrMkAN036YHTMm5Fi4xqq9J7rKl0cM3oTf1YhpYMLMnzpn1Og2LeX3PYQ8NpCqaEmwfdbCz9H3Tob3TdbUFsecQfTwTzRtbWtvj2%2BglcwCq8INmJWjiNCWjLqZUXdLMITXk0I4knjUNUMaIPC5mT%2FBsNfQs0Vkzbh60sSPavdyUmSMiuokyMJrpwMQGOqUBgmYiQl29UfqCGzCmyFS13cR5StPlOqGVU0hQl6bNHn4WyJc5Ukz07Wl61jJaAqWj95%2BYDY8mLnLhPvYo0q0M0m1AJQrTV53%2FW2Geqf9C98xAXqlVCGBOepRakEwi%2FHz6A0xq6vwdR9o7zOUTYY1Is7nEzSGwpcXdWMrnghkT%2BGSVkv19t5Fpmup0iQyj%2Ffg5owEEwbd4MPrvd4gcmaO2bh%2F2x0Qv&X-Amz-Signature=ed576b6382b11db6a15840b15c08a1a43f005ee575037fd304759f176eeb81b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652O35CMO%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIFI%2FDPj5cFYVrH0Jz5OPg0eTaIicQDlHrry5WCF%2B1uYxAiEAsXXpAIfUHXd6ijdg0ydVIuc1G26DXaXX9cjdo3LsdlAq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEEVWslVTAtTC6FVoyrcA39YeMh4oaeymfzno3MrXSunGt8Tnuk%2F%2B11OaNeMtUkFMBG8MD9RXJc%2FMszwhqvuYl832oB%2BuNPtRb7KayhCh5iA8r%2Bch0SUJUJwtlyaCvhMbMog2i7MeIOrQCOnmYHc0fTvRbxRE1BVvUJKv8v72%2FFK4v56iZDgH6lsBjq0zgJVA20R49scTifTsxOPA2TpnBKffKbxc6AysuGJepB7ttaSsVZNEnTNbZiaer9Oh5j8Q7%2FcnSs0GYok44bJoDGqk4ehFNKZmeciRBPOo0DXzGSUJo1OimA%2FeEIC8t%2FJwozcSnRig%2FlVbepWCpqFMd%2FjJAOY7JQ2zwFrCfXn7%2BBsug%2Fspq2TpPy49LGp3A%2FXdEyRLWh%2FgApR3MRqo95DDBTrvbD0IFvsWbOSJp0ZFPXcOUKGBsXFmgYEETCWiznY1ehYVYMOCFO%2ByGLfJ6yy1kVCYLx7lmGyXp9HZGqjkH0P1x7oE5Vj2fFjhB5p5WqNImUQkC%2FvdxKVq%2FJIfm3KlxkIKqdSaGoHpahk4sX%2FX7%2FeekZMcTGz1LgVa%2BWcp0Tj5K77xRd%2FgZAGk%2FN4n5hbPSx49mhJRhvGZjIhAMpw7eaEY9j8iZ9GiYNXie0R1L6KdLuhwa6qfDIoZBnEHE0pMK3pwMQGOqUBOLy44jzXrpFxEiU7KVgUbA5o%2FTgbp6TvQhw4XZAy9Jo6xzyMrSy0OGqhTWB3oyljG5K8TTGt5K8vea3Hs8taNB%2BnO%2BsOtNelKoYPXmHoEqnfS7CYS4A59NOTLWKnIrd027CSpphZbSBl65Phk77Xq%2BZv%2FvPUheIjxPkr0dfba2KyE2Rh0F%2BhQewCjwnfRNW6whJ%2Fbj8YYBqVNsay3%2FmzNpnsPPM%2B&X-Amz-Signature=52197007fecb22ec44566e5ddd946f602fbf5f7e7c3d28a304070477b662db62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=557ca5bd13e694ec2f24d9c7beb9ad2a2f28f0db4180cc7a78882ef96581cefb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=682e7e2e33371c3b16f605ff81844614f24513ffb8cba00f163089a59ac38e1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=34b46abddd607e1c505338a52cc39637ffb7aa050d97ee42c129d62024bbec02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=18ad089d739a81724b014d92d88a3da6c39f57644e650d22ce544f4d77b9e53d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=d4c2dbf8960f300ae8f937f37acfb31e3d4863cf86f9f04763a8ac32cbcc3b8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=c5d6a62f0a885fd978e17fdb8eaba2e6d5ff0904edf1e49e64741e26e40b937f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=704a67db9c0137d8e6d2b33705231387a99ff6ad24fe6ae0abffb7262a1b70cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=0eb72265f99082173b257af74497fd0bdfc192ff6e6cae5037554ecd5d651678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIW4VCI%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T044727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIBvwLRPT2s26z2DAKXmenzlGwRKzLKKf9FgmHHgrjIvMAiAUYPoL9tbaOndfXoMKrgcUy4%2Bq8lsTcNp4hZ6XRnrOTSr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMPryV%2Ff3BIv%2Bl7KUrKtwDmNoIFjowWflv1rOk8XsBVdflveKz300u%2BvPUg0w09FoN64SAf9BPPeyHfVgpsyz988Lp2wtdXohx6qegxtj9Aec7PN4c9DDCxkaOxqfUNWcxfbxJGyC5DWuQnX%2B2uKINEsViswiyA9Io5avoEumuykUGGhfPf%2FkL0%2FdhxVUJcC7oSuFs8EiiNeubXJ5NhNn9E3Q4CtDKQy6J6RhVxt9azA0X2liEyLduaDW%2BahUrCYl%2F3%2F7IK5XB6bbs9GPqadKIhnoNG09Qkjvkx5XsnJWtrt%2F1DzjA8lqm29zbds4FcurcZrdFxEhxYO9r1%2B%2Fx5zHyuVBVyaHNJFy0SeSgNNpLx%2BKZFxM8TZCbNaQyGUGwKw43vQzAvF6TA53Z7gsJ01EJcdEsH%2BvqL%2BMa9Qs%2FSX5VZE6EHnr10DPFJ%2FjG9UF9OF%2BtP597hJ%2F%2FKFZMlXxat5JALVkSQpd%2BFl4eQ%2FYqGrufFf0h4ZpIlVpezcBCQP%2FGzxypkARBuqjxXIGUyz2vo%2BD6EoTgdW%2BVa15hvED0EQPcEy67MrhEb3jOb25YIRqehXABpXX4LPeHJOkun5H5bW8MukAAa7OxXUrZhCFq1tLevpTJTPZQFLcUsPSZU80MKDkEFdJaAdgSp2iucsowgurAxAY6pgEMlqQSzE2BUxo%2Fj6%2BR0TW1PBnQAs2QUJD2cUHHgkuzYVdkbhCYru1Un5Z0rMb1iHT7Uq2C8v%2B4GXCePmXeXfezs7Q9LbwG%2B2GveZRJ4PAuCa6FDgsL9m6MDGp853%2Fnb722%2FZne%2FtuNCjN9BdYlWOEmIO2yYl8Cz5uoL96wvBZ2wX3TeeOe0MLZZ41ovZDHTox7NxfW20Tmy1BsPYXjoajLa7SKYYmX&X-Amz-Signature=ecfe1dbb4e58806bc4435bab6933ccfaaf548f64945f0cf8663653a6690cc4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
