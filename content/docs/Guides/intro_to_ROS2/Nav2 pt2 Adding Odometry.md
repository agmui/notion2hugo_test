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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=a7b4f4c91eade2da0ddafad3b72680e2d7860e0d6c587685dc5d5996adffa121&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=9c7719c1e24a5d167369abef468325131f3cf0ab435891642dfb596e3110deab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=6f0114e724f083a4940cbbfb96cb00c2752c0c65e955a81b3b5487d46d10d025&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=7b413b935e5fb9b094488f513663f49374bf9f1df502b98df2dfdeb898501a55&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=c820004aa06066757258684f69a51a3248f5c07684c77204067c11a763fb1d54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=784a32e268859f5be484b36451b0908d9eb21b8e7953b58de84988ba2d1face2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=64d4e1f39aaf7821c5e78e3b7eec8e9eb3c3b33e25fa412d89af6f8bfbadb27c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=b6f41a76763f470aca95f8dce90c48cc8e81ac22f101e8532decef1fb876e345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=702e2f24da667e3b176bb0ea55461fdaf8eea63794bd6ae6971b4c0819f79d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZNGGMEA%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJGMEQCIFO%2FkedTUeXM%2BCkiDjD%2FU4tWWnm65CttwHIRDUm2gU7sAiAzKs2A5E7tbiVLW2xwvTJXxPliqoCJwFWWQZAcKffRFyr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM7%2FR3tmd6etZN51zfKtwDSElBaxitFageMlvhAF1ytGkA%2BqCXFasHtLCajx%2Bd4ro16O1gMrHRn1aBh3H2GHUdxzQS9WkTm9ZVKezNGfhS8tbaVHWF4hBR7QI39BqgL9J4eZs9Ri%2BBgofVof6MykthuJrbPZeOQgjWIn8BvSlFkn4g3EhCGtAdr7YHuVzWLLgTW94b3CV4paYQ1vmugPIrJ%2BY6F2B2JrglVr%2B2V8e1ehmQquqnlhYOou0Rj%2BbDoSJa%2F4xdCgxIYTEF%2Bwog8juLP%2BPalogTQgGIWJOBTSMT6mfQJtKKHW1hzfFzcevpBhvmnWO0WDZum3dv7YD7BgSXSLmq6S0rZcjfHfgEgTsVQyPZzWgaP%2Bcl1gYC0bHRK8kdZQFQAPErTLJmynZLVs8UHU%2FLdP86060r2qmBbnkT3SPGt9lYmY7BXyhCr8oTIYtUsHeRsZk%2BL8yBNaaFgWX1jySizBL019wcssn3zDPmCCHj1IPBYSYhKUg8bkEqPODDGQhB%2B1oSvMp3V6%2BXgtY%2BXKDwGDn4ZRtrA8h6Gj7JF37hRCwJFB%2BXywg0kpBL8t%2F1X0ujxzEiW%2FSsMbVDiXN6Tvv93vxUlpducpuSAiRKZbg0wZnWsXGxlLjz%2BimaATX4TDQpRCi9rx1qpgowh5%2F4xAY6pgG3pzGvM9gih1Ulnb8RQ8X12lKt6Ln1n0d5fBbPD%2B6ct8TKVzKcKDcjP%2B%2FX6S1oiKGSXcanCZxRYYnVMj5jLhckwaSrNbiGCCETh3WbVX10UdKSFaFJf1CJy%2BRR1dRMkVctezA8jbRxelF%2FfvhQ6qDDphIhjcPqEkc6BJouahvycxOxGQpoexNRvAZeztGMGFntv%2BUKwp4s5IjqZEhYx4YecEmnbgqI&X-Amz-Signature=f46648e6186bfdee503c3551ffa31a3049272821e7764be4fef03fe2df075699&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USMOSN5G%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T171005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIB0x5LRm%2BZMOcErQb0Z6Dj7XQ4b1LxErHCiy1VzQSqbfAiEAkF84oYVp6CC3rcNtqpPyv4SHo3%2BSDmL5hib72Q8SNwoq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDNAWoNBohsMB4M0ifyrcA7gTD63aU8lLEof2Ookh05yQzv%2BPh5AGZiP8lBBQ%2FkZyyqu4zVODu%2FZ8kqEXFA7528kgBE6aQSc22Do5Nd%2BytUmHlYnuF5dx2nQHijv89VDW3HeCOJ6KY2XNQwuHpEz6ouw8ZUj3LH2AQBppzR239rDmgXzwmtnLqfOe9us0BzZbdYxPwZX0wnE1iPcjiR4l34%2BwuEH6jJ6t0y19HOsJ9dvMEhtBY%2Bp1d0KPHX0Gj7mwBXi%2Fw6DhGms1CASJ0X%2FIJbZ1voupAWed6OfcDTTUI0k%2BFGzPQTtvGpHYz9DpeM0EaMIypClITD5pLpaUb%2Fu%2BfijU%2FRPgOccOTCm8GZcmmu4XvGTBUa9XrhITHEQwPvvVcNZW1tAl0VVOS1I6YjXLP7Opif01qx8zc4Xd1udnVSF2ySuSoesXZKP1O%2FwdnVx6%2BLyEp32PW0nlmP4Bi0RIE4aGJZejqnusFTMF8hQ2iwCijR2cNxI3Q4n%2B7t9zh9ws%2BMuBXdesK6ODvFfJ3jgIpa5BQXf%2Fx%2BaOMEVOzHT9o4MazVlsYFEo%2FNfZ19HXRQU8PHI65u8KHWXJVhovGfA9VLoeTSvY0gCVBuh13A9MzUqjDepMqnVjCje6pkhU%2BkbMlrXCnxOWdKFY818KMPSe%2BMQGOqUBLJn%2BqxL%2FM96sEcl%2BKe1nx1EtqF1XWwwTy5aSt5XsVrlHcRq9Skdc%2BvWFMtsfvLmv4Nm3OqvsBRLDn8rlN8ACxQtsgRAfty3LWJbiqo6gQGhaLUWsRsn%2FCtu17Y0e3XbW5Nqi5I9hWS2C7pMK3OkhXEtAivEFF1ilZSswHH6QOzVvAnSIrNy%2FgNOjlkAQh9NEkGXUUH%2F02jkjh0f%2FPjYwQAw6RTil&X-Amz-Signature=a99cf2df220c4c64875452b47c8e8b577f8fb222e8e21b874093bc309b5278ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=6db11870962f8471fe03cd2640cc7c9bfecd381093b1546a9b65e9b55228b045&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=a60c47ad0eb95c2e70468c213194232ed86c8611d443f5780ffc9e7caaef7eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=b71d68816931f1f573815900b3e1d79c78c4f27992066a33e6942197522ed938&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=af2e74a5ad6b20aaeaf7e51642c975b65bed913cd5e0d9d1e3368bbd27737285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=1bf6ad4a81c4b3d275eff6042519485e1af831d5576b483e6f996b20e5619d0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=fb5d916fe8ed25773414b43242ce94099db08a4a8a6b899069e29da4bb8c4fbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=1384abd481f082fa9622f996c8ab4e0e554a4ee265b80712ff40f9b3b8ea963a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=b6590843b3f7acf15fdac886746295e4ffc32379940ccdd25addc9affb1ec5e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEDC5H3X%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T170945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDhNZadeQsLzdVtikYc1jNo0gnLPA0v9wiSyDLpHrmUZgIhALkuhnNa%2BTx7XcskuH1Jj0t1%2FS3qfZA0zH20SkgzKqe2Kv8DCEoQABoMNjM3NDIzMTgzODA1IgyJL9RNkQBgyU0xhLYq3AMnRHz5Jg9xXcLz5Rx1XbE%2BJDyl%2FLXbNqUZn0wHCSwZiHp7qowBV1Yo31EKobHJyTkmyBo90axyIU9at4dZ6kcF4%2FEknsxbW44OwB0CiWhGAfTDPIy%2BV9ttw9YeirO8FZ2updpuhMY7QOoRl%2FIwyICHpKyAogwZTwIx4HveW%2FsclxjVd2rZnB1rY2cwAHzi7kXJJuXHSNoN7aiV0jLQCR3sHRCs3bYXlyB8YhvEJtj0QZSIuyz0JJLhrtQ52V6MOt8Har3EkkpXFMI2Yf5SN9rTv5Rd2B6VrBBAvCWJG5Bw8fAej1Ee80qvisM%2FsXyCIc7MDfEkR5TxY%2Fd9w6etyGTJ0AgWE%2BiDNxnUYKwxcrT%2Fq7vHBvywagWMDOVSG9Vssoufj7iUHSe3vp3CEDRiVbTSmr4%2BzFagJg3KknXiuWS9QDGi6z0aAJE8PYz%2Fci%2BSp9txiHBhGFkwz7sgKgyHMQq2cXsOva2ifFXopOAQBYOToOP3LMyJbkmNvTndnN3p%2B0AayGzvwThgagmrOIzUrm15GIFBcLPHaPHl7nle04Sz26OkhrRaOSI94Gz%2BAOffuIcmAtMQhxecqgieLYagEgrVGaPWT2bwMmCOgLzcgA8JmF0ILhoIdnhAnTivhzC%2Bn%2FjEBjqkAYiX1m%2FuUsV5oQO00lKOVVxApu6WDjAXP%2B0qAWCuhUG8CVO1WhHdMPWUMOEOidL8cxXlnHM7ysHntBOVQoW2qvWJYHENLCD7N4J21VJLKCPuIhIuHUQeNwAaXKpgLeZLKtatq41HO981lSKwyL6uogSQGtADr2WATh3UInB6YxRJRD9jUULGaSpGidtx8pKa7VADVAPd8bdGxmhRebk40zNhkB2B&X-Amz-Signature=652c82381ed332bbce7e36248f1090360b7ed80872801ff8a85da444b4eddfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
