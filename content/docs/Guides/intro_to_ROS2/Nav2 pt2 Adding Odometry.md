---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:10:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:10:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=bea524f2b6063ac96e7757df12602e2611fdd619340dd32894f607384e15add7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
      <summary>Why not </summary>
      This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards.
  </details>

{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## creating custom node

{{% alert icon=”👾” context="info" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=e69307dac3a77119aa9e773e754a172c3cb814620f8c8639f81c82ea05978936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=fca4ce0246ed6633308483db2974d845e07585342a1e4723f2af39f49fc7cb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=021643af7d60c4251b25dc9157ddd914024f3e14e8491b72f9c7a5b6804f4082&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=4d7031bf542ac4813b31e4e69c49b5559f1a5b82404e2dcbb3d95a19a546555f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

the `ros2 topic echo /joint_states` command showed what the `joint_state_publisher_gui_node` is publishing. 

> [**official** ](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[**`sensor_msg/JointState`**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)[ **docs**](https://docs.ros.org/en/noetic/api/sensor_msgs/html/msg/JointState.html)

**####** **`sensor_msg/JointState`** **format:**

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
        self.get_logger().info('Publishing position')       # print msg
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
      ```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState


class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.5, self.timer_callback) # calls timer_callback() every 0.5 sec

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th =  # TODO: reading wheel position goes here
        new_right_wheel_th = # TODO: reading wheel position goes here

        
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


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```
  </details>

At this point plug in your robot to you laptop/computer

TODO: if on WSL reference previous WSL guide

<details>
      <summary>What if I don’t have a robot</summary>
      We can fake the wheel values by doing this
  </details>

## Testing our code

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=ace0e072c03e8574e39aba8191c1d07dabb8231945c8510acaab0b3a457f1299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram TODO: check if sim_time = true

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/c1b96428-6f47-475e-a888-40781007f8ea/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=1a11e9d27965c9745b7fc4c7b1f5e56f852de219323382a22c78dd9d9630b6d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=a32d10651bf715b0668e76b1041901dbb34ff19b657a6e11a0741b9fefded17c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## updating launch file

Lets add our new node to the launch file

```python
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

# Converting wheel angles to x,y (adding odom frame)

Now that we have the wheel angles lets get the (x, y) of the robot like in the GIF at the top of this guide

we do this though the `odom => base_link` transform

TODO: idk get gif from atriculate robotics of `odom => base_link` transform

<details>
      <summary>why </summary>
      This transform is required as in input to Nav2
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e06e1892-e4a4-457b-a512-0fcb1ce3e8a4/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=d5e03b25af834dc5821d89beb36dfa6e7b7e7d2cb4467c803d94a21f1b6490db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USRUQ3N7%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDnVxjcbeVOJ4VnNXN%2F0T0oPJ8ZgY4M%2Bj1dn94RViCXtAIhANoJKRqdm9i1E9YUqxV6NCb1AvzFuX6mY77nPePd5ffIKv8DCCoQABoMNjM3NDIzMTgzODA1IgxyR%2FSW%2BjRFebvIVdcq3AN052f22HeHDbcjLmdUXNFpOXH2G5IBWFul3HNmwcckil3%2FpkVPNz0Vga1zgPLhmipnCEqaCTcZ8Fxl%2Br4S3SYy2mq2JePplJmWu%2BDVM4XWmsfLwSY5vIdbh6OJicLwQ2fXWY4ubIr8WMwGiyVOljja8n2DsITsPJiXgW74qhFFrlJXvvt3ivprgwdwdR0PpuBQXjdzz4aLRAKnY3zQeAZ8OSfIuF1DAfj32EyajyB5%2FOfCvf8bUjZRmZqHaiBapXyqRZ087DFt5OkxBmMcQAkHrvOUjbo%2BCLjaunWhlktpGUzWlQ7hwE6qROFxQ7j1xCCp%2Fp43IaMy%2Bng%2BRdAml6OyKhnYTNmFmxy1zItASjPpkE5YUcWyZ38tskn31HgdxhFnMliRReebNBUhCzHiqMszNoEx45zOK41DoRAPz5EuMxrGnyQHCfNyDDaGMdM8YHFUWwyxQEtre6hybqXjg1TJHriccug2yv4FQ5ipPXizwnEb6xuyosZvvfvjXWxHVnfsYI9qxsc10qsnhFog9vEYZiF2RbwjPeMZMaR6xdmni3cvCgOh5nHhplpZnwj1zqtEzGDTRoQRK8vuS9gB0%2BCcQQWbHfBELjRqiTNa74QtUx49EFPO6TDBOlT%2FfDDE64fEBjqkAavtNU62sl7u8I48VjQgSEhnYnvQp4eX6pCJg4mCOF8XfYQAJ9VED6kqt4b3I1AJkp5aV%2BOVTvEaDkjK4HdwWJI89SNDxBM7xQ0zcPc3znkw5LP%2Fac4O681QEkzwVUASMvqP%2FFC2PkBajT8uOcVEy0ral4U5IxIYUu5roONvS9xbFZ4dJN0Ag8qYUPpDfcgFpbeqR6vfCy6hUHk5n3UhvrXiu1yS&X-Amz-Signature=2201b0f60ae1a7484f3f8e0d873f27b89c9e2191a51224cff75a6bcf56cf3abc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/7eab33d1-3142-4990-99a4-c64cff3ef45f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=13675cfd844080e74b39141da6839ce5a7ccffa87df66ef11377e9419a82eebd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQ5SDO3U%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQC764MzyHFUhpmfKTsM1aLDDy0elQL9xFqsCcD8KABEOwIhAPjWItK3DTpmotquIMxUyu3j%2BIonb8H0nhsQZpMUuqDKKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJB%2BrvzgzExwcOSsQq3ANogSwPvg%2BxmCC6P6xy2cTwRUwgM%2F3w6SZuFaafjkJfGlBx38ugzQY%2FQQ%2BiREcj1Of0L3rYBoNwiQykzqNtJQCbz7HEWFQrZCwv0994h6zoO0uYH%2FxO2t6TtfZrcKFH2Q1VDZ4iSZ8OwyRnSVX9SNIr0X7bViNbRc8T%2FTqse5PErkjWhPY6Di%2FodwhvKdwb%2BV6lVy0VO1sWm9twAL%2F6YggbaYtoOXC6UzeRk9egZfWnE8QLl2g%2BQRMlgNDiQsX7Mv912hgDSt9ZK4sYyqoLWwJhC0GdspguD3YKzaXAiqAChQQH8Bppd%2FrMwBNgprQ%2BCW3avulLtxX87yduj4Du%2BlkKHVZfsL%2FIAdCzuqREvlktVFtETNQVESSPJ%2BGroAtQCRjFKQf7DFeK4kH%2BSBKBR2G0N%2FyuAsTucAXOHMjIBAC7DvhHLEWDcjiiIL4oJsIeF%2BeDZIlE7i7b0qi2Md%2B%2BfmD1qX8fPswNjuOJwfAvjixhnr5%2BT88idAS4FAp5zx6uWCvBWzQzbz7wVnnXieUQExx6V8rxSIcYGRwc5vZxHfMX4iLX3lZYmFNNJllFqM5ea4bhrXKX9ACP%2FT6sZ9I3%2FoXHqwK1EDfNIny5%2BAwvOyfRnh1Ml0bv5iC2wAFBNzDp6ofEBjqkAdVE1rbH4JlkiyfA5JluvxJA6C72KkntFbFodkwRogMyaeT46kWRBw2eWXdgl7oBVFo0domFA%2Fa4xwUxy6OZajVW1Bz%2B97rQt%2Bo%2FxOJlfpc7e6AbvcYwnypdKsYQ7YMKda7L9iazybEdAdTeNHH3Z1xaJS2HDe4Fnlr3TzzyZ2anVCh%2FvdST6n2wg29d4YU1SLjfN4Tpi83%2B%2BZrn2FOZpTvajjU1&X-Amz-Signature=38cb23dbd6586a368c939019516d4fb4d366bf1dd99026d16e73f0c83d43a786&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

{{% alert icon=”👾” context="info" %}}

### **New Node** **`telop_twist_keyboard`**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVK7DEM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnIAcheC87Pn%2BxXXPZy7u1tq8PLEo9kUISfgbOcsvDCAIhAP%2BOOkR1AIDAOH4NokfjBkI5GU3%2BLZtoLBpYHvQFOeWwKv8DCCoQABoMNjM3NDIzMTgzODA1Igye8seAXYW9OrviE2Yq3APXdpOkLZVz8OaoJr5Q2Kl8bNVgDIPdJAKamk3Sr5f0dSl0awq9qfQbr68wQH8XFhKVcb6YLwQ18Zn6eAKwvIvRuqysZ7vsUUQ3f49wb10Frn42SfeUo1zcdbF9BxlHK9zOOPB3D99Q1TT4bQCTZLajXvD7wWpKVOcCXR%2F7oTXtuSVQVUojlmqjbapy9sdpTBKGBKYa59aZCViMiK89BqjHb8KES%2BhJvLTGYLBzmC%2B4VfHTRmG44Te%2B3TE%2B9JnA5nD9O6WvSzK9Xouu2jvahIk49M1cnhLx3cJlTktNfIRWTsBmI9Xw4n3AZsoP%2FfA9Khv3ycfwGSsNyL66sHCnoF2EYOzX%2Fob%2BmQspUMSWWT8EMo0e8hhF0lM7hMeyK0uaJn5CmYPmcpE6plyTs7aSfNtRzwlLe2PLqABipdYb8%2F2rHwXEhsneNQauFAZzIjcjUUU4OiN%2B3bDq5MXpeIAbVT7SqWwZyhGn3rRFJIWXvC%2BcEcP3mtQxVwv3ISQps1N5qNh3ucNEKjcPA9LbbkwS2MkCqvHKqCKk6vmRdarGeZhv%2Bq4wMBOOaC3%2FiZvRv8po8FCKhB9kI9qIAYu3SXRIm77WQJVTsgpX%2BDueaDlxbHi6uTD4wpR0EpwRZnf0jjCU64fEBjqkAV2ci%2FpUF9X%2Fay4ghdlbi4PxciSHJ2SfaMYyajg0WTlLrFihB49a9AEzcwH%2Fd1y8XzlwCZmyfMEujEFdoPuL5D%2FRnRjVUVH76%2FiaFTS0HhLdjqBOkivgktPTMq%2F65cnHJRxI32pkRCzHocSj%2B1STC7Kmwv9eUotVTmHLY53JBVlGipbIK0AmzQbW%2Bdfxri8znfQIn6CcihkVd0c4PE9rLd1%2FlzSR&X-Amz-Signature=4c647d660d592851b2e208f95d430e76ede6dfa0ffeeefb034db6de241cab589&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVK7DEM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnIAcheC87Pn%2BxXXPZy7u1tq8PLEo9kUISfgbOcsvDCAIhAP%2BOOkR1AIDAOH4NokfjBkI5GU3%2BLZtoLBpYHvQFOeWwKv8DCCoQABoMNjM3NDIzMTgzODA1Igye8seAXYW9OrviE2Yq3APXdpOkLZVz8OaoJr5Q2Kl8bNVgDIPdJAKamk3Sr5f0dSl0awq9qfQbr68wQH8XFhKVcb6YLwQ18Zn6eAKwvIvRuqysZ7vsUUQ3f49wb10Frn42SfeUo1zcdbF9BxlHK9zOOPB3D99Q1TT4bQCTZLajXvD7wWpKVOcCXR%2F7oTXtuSVQVUojlmqjbapy9sdpTBKGBKYa59aZCViMiK89BqjHb8KES%2BhJvLTGYLBzmC%2B4VfHTRmG44Te%2B3TE%2B9JnA5nD9O6WvSzK9Xouu2jvahIk49M1cnhLx3cJlTktNfIRWTsBmI9Xw4n3AZsoP%2FfA9Khv3ycfwGSsNyL66sHCnoF2EYOzX%2Fob%2BmQspUMSWWT8EMo0e8hhF0lM7hMeyK0uaJn5CmYPmcpE6plyTs7aSfNtRzwlLe2PLqABipdYb8%2F2rHwXEhsneNQauFAZzIjcjUUU4OiN%2B3bDq5MXpeIAbVT7SqWwZyhGn3rRFJIWXvC%2BcEcP3mtQxVwv3ISQps1N5qNh3ucNEKjcPA9LbbkwS2MkCqvHKqCKk6vmRdarGeZhv%2Bq4wMBOOaC3%2FiZvRv8po8FCKhB9kI9qIAYu3SXRIm77WQJVTsgpX%2BDueaDlxbHi6uTD4wpR0EpwRZnf0jjCU64fEBjqkAV2ci%2FpUF9X%2Fay4ghdlbi4PxciSHJ2SfaMYyajg0WTlLrFihB49a9AEzcwH%2Fd1y8XzlwCZmyfMEujEFdoPuL5D%2FRnRjVUVH76%2FiaFTS0HhLdjqBOkivgktPTMq%2F65cnHJRxI32pkRCzHocSj%2B1STC7Kmwv9eUotVTmHLY53JBVlGipbIK0AmzQbW%2Bdfxri8znfQIn6CcihkVd0c4PE9rLd1%2FlzSR&X-Amz-Signature=a1efc72171fd1b28e950a663e44fe9c7bcc52ae15c104b486369b82388c488cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVK7DEM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnIAcheC87Pn%2BxXXPZy7u1tq8PLEo9kUISfgbOcsvDCAIhAP%2BOOkR1AIDAOH4NokfjBkI5GU3%2BLZtoLBpYHvQFOeWwKv8DCCoQABoMNjM3NDIzMTgzODA1Igye8seAXYW9OrviE2Yq3APXdpOkLZVz8OaoJr5Q2Kl8bNVgDIPdJAKamk3Sr5f0dSl0awq9qfQbr68wQH8XFhKVcb6YLwQ18Zn6eAKwvIvRuqysZ7vsUUQ3f49wb10Frn42SfeUo1zcdbF9BxlHK9zOOPB3D99Q1TT4bQCTZLajXvD7wWpKVOcCXR%2F7oTXtuSVQVUojlmqjbapy9sdpTBKGBKYa59aZCViMiK89BqjHb8KES%2BhJvLTGYLBzmC%2B4VfHTRmG44Te%2B3TE%2B9JnA5nD9O6WvSzK9Xouu2jvahIk49M1cnhLx3cJlTktNfIRWTsBmI9Xw4n3AZsoP%2FfA9Khv3ycfwGSsNyL66sHCnoF2EYOzX%2Fob%2BmQspUMSWWT8EMo0e8hhF0lM7hMeyK0uaJn5CmYPmcpE6plyTs7aSfNtRzwlLe2PLqABipdYb8%2F2rHwXEhsneNQauFAZzIjcjUUU4OiN%2B3bDq5MXpeIAbVT7SqWwZyhGn3rRFJIWXvC%2BcEcP3mtQxVwv3ISQps1N5qNh3ucNEKjcPA9LbbkwS2MkCqvHKqCKk6vmRdarGeZhv%2Bq4wMBOOaC3%2FiZvRv8po8FCKhB9kI9qIAYu3SXRIm77WQJVTsgpX%2BDueaDlxbHi6uTD4wpR0EpwRZnf0jjCU64fEBjqkAV2ci%2FpUF9X%2Fay4ghdlbi4PxciSHJ2SfaMYyajg0WTlLrFihB49a9AEzcwH%2Fd1y8XzlwCZmyfMEujEFdoPuL5D%2FRnRjVUVH76%2FiaFTS0HhLdjqBOkivgktPTMq%2F65cnHJRxI32pkRCzHocSj%2B1STC7Kmwv9eUotVTmHLY53JBVlGipbIK0AmzQbW%2Bdfxri8znfQIn6CcihkVd0c4PE9rLd1%2FlzSR&X-Amz-Signature=fc71824325a93179c3e749a44b84ccda869e67a0218d991895be6b18138bcd57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVK7DEM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnIAcheC87Pn%2BxXXPZy7u1tq8PLEo9kUISfgbOcsvDCAIhAP%2BOOkR1AIDAOH4NokfjBkI5GU3%2BLZtoLBpYHvQFOeWwKv8DCCoQABoMNjM3NDIzMTgzODA1Igye8seAXYW9OrviE2Yq3APXdpOkLZVz8OaoJr5Q2Kl8bNVgDIPdJAKamk3Sr5f0dSl0awq9qfQbr68wQH8XFhKVcb6YLwQ18Zn6eAKwvIvRuqysZ7vsUUQ3f49wb10Frn42SfeUo1zcdbF9BxlHK9zOOPB3D99Q1TT4bQCTZLajXvD7wWpKVOcCXR%2F7oTXtuSVQVUojlmqjbapy9sdpTBKGBKYa59aZCViMiK89BqjHb8KES%2BhJvLTGYLBzmC%2B4VfHTRmG44Te%2B3TE%2B9JnA5nD9O6WvSzK9Xouu2jvahIk49M1cnhLx3cJlTktNfIRWTsBmI9Xw4n3AZsoP%2FfA9Khv3ycfwGSsNyL66sHCnoF2EYOzX%2Fob%2BmQspUMSWWT8EMo0e8hhF0lM7hMeyK0uaJn5CmYPmcpE6plyTs7aSfNtRzwlLe2PLqABipdYb8%2F2rHwXEhsneNQauFAZzIjcjUUU4OiN%2B3bDq5MXpeIAbVT7SqWwZyhGn3rRFJIWXvC%2BcEcP3mtQxVwv3ISQps1N5qNh3ucNEKjcPA9LbbkwS2MkCqvHKqCKk6vmRdarGeZhv%2Bq4wMBOOaC3%2FiZvRv8po8FCKhB9kI9qIAYu3SXRIm77WQJVTsgpX%2BDueaDlxbHi6uTD4wpR0EpwRZnf0jjCU64fEBjqkAV2ci%2FpUF9X%2Fay4ghdlbi4PxciSHJ2SfaMYyajg0WTlLrFihB49a9AEzcwH%2Fd1y8XzlwCZmyfMEujEFdoPuL5D%2FRnRjVUVH76%2FiaFTS0HhLdjqBOkivgktPTMq%2F65cnHJRxI32pkRCzHocSj%2B1STC7Kmwv9eUotVTmHLY53JBVlGipbIK0AmzQbW%2Bdfxri8znfQIn6CcihkVd0c4PE9rLd1%2FlzSR&X-Amz-Signature=e34b8204344b2ce209b90fbd0ef4a6de56c949408ae103d3dc1786fcc1f5a222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
	- lindear
	- angular

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVK7DEM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnIAcheC87Pn%2BxXXPZy7u1tq8PLEo9kUISfgbOcsvDCAIhAP%2BOOkR1AIDAOH4NokfjBkI5GU3%2BLZtoLBpYHvQFOeWwKv8DCCoQABoMNjM3NDIzMTgzODA1Igye8seAXYW9OrviE2Yq3APXdpOkLZVz8OaoJr5Q2Kl8bNVgDIPdJAKamk3Sr5f0dSl0awq9qfQbr68wQH8XFhKVcb6YLwQ18Zn6eAKwvIvRuqysZ7vsUUQ3f49wb10Frn42SfeUo1zcdbF9BxlHK9zOOPB3D99Q1TT4bQCTZLajXvD7wWpKVOcCXR%2F7oTXtuSVQVUojlmqjbapy9sdpTBKGBKYa59aZCViMiK89BqjHb8KES%2BhJvLTGYLBzmC%2B4VfHTRmG44Te%2B3TE%2B9JnA5nD9O6WvSzK9Xouu2jvahIk49M1cnhLx3cJlTktNfIRWTsBmI9Xw4n3AZsoP%2FfA9Khv3ycfwGSsNyL66sHCnoF2EYOzX%2Fob%2BmQspUMSWWT8EMo0e8hhF0lM7hMeyK0uaJn5CmYPmcpE6plyTs7aSfNtRzwlLe2PLqABipdYb8%2F2rHwXEhsneNQauFAZzIjcjUUU4OiN%2B3bDq5MXpeIAbVT7SqWwZyhGn3rRFJIWXvC%2BcEcP3mtQxVwv3ISQps1N5qNh3ucNEKjcPA9LbbkwS2MkCqvHKqCKk6vmRdarGeZhv%2Bq4wMBOOaC3%2FiZvRv8po8FCKhB9kI9qIAYu3SXRIm77WQJVTsgpX%2BDueaDlxbHi6uTD4wpR0EpwRZnf0jjCU64fEBjqkAV2ci%2FpUF9X%2Fay4ghdlbi4PxciSHJ2SfaMYyajg0WTlLrFihB49a9AEzcwH%2Fd1y8XzlwCZmyfMEujEFdoPuL5D%2FRnRjVUVH76%2FiaFTS0HhLdjqBOkivgktPTMq%2F65cnHJRxI32pkRCzHocSj%2B1STC7Kmwv9eUotVTmHLY53JBVlGipbIK0AmzQbW%2Bdfxri8znfQIn6CcihkVd0c4PE9rLd1%2FlzSR&X-Amz-Signature=dd9eee82e6cbb1d3aeb2368d4e3a302faa19534f32ddefd4d8489ec1eccc0958&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHVK7DEM%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T101306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQCnIAcheC87Pn%2BxXXPZy7u1tq8PLEo9kUISfgbOcsvDCAIhAP%2BOOkR1AIDAOH4NokfjBkI5GU3%2BLZtoLBpYHvQFOeWwKv8DCCoQABoMNjM3NDIzMTgzODA1Igye8seAXYW9OrviE2Yq3APXdpOkLZVz8OaoJr5Q2Kl8bNVgDIPdJAKamk3Sr5f0dSl0awq9qfQbr68wQH8XFhKVcb6YLwQ18Zn6eAKwvIvRuqysZ7vsUUQ3f49wb10Frn42SfeUo1zcdbF9BxlHK9zOOPB3D99Q1TT4bQCTZLajXvD7wWpKVOcCXR%2F7oTXtuSVQVUojlmqjbapy9sdpTBKGBKYa59aZCViMiK89BqjHb8KES%2BhJvLTGYLBzmC%2B4VfHTRmG44Te%2B3TE%2B9JnA5nD9O6WvSzK9Xouu2jvahIk49M1cnhLx3cJlTktNfIRWTsBmI9Xw4n3AZsoP%2FfA9Khv3ycfwGSsNyL66sHCnoF2EYOzX%2Fob%2BmQspUMSWWT8EMo0e8hhF0lM7hMeyK0uaJn5CmYPmcpE6plyTs7aSfNtRzwlLe2PLqABipdYb8%2F2rHwXEhsneNQauFAZzIjcjUUU4OiN%2B3bDq5MXpeIAbVT7SqWwZyhGn3rRFJIWXvC%2BcEcP3mtQxVwv3ISQps1N5qNh3ucNEKjcPA9LbbkwS2MkCqvHKqCKk6vmRdarGeZhv%2Bq4wMBOOaC3%2FiZvRv8po8FCKhB9kI9qIAYu3SXRIm77WQJVTsgpX%2BDueaDlxbHi6uTD4wpR0EpwRZnf0jjCU64fEBjqkAV2ci%2FpUF9X%2Fay4ghdlbi4PxciSHJ2SfaMYyajg0WTlLrFihB49a9AEzcwH%2Fd1y8XzlwCZmyfMEujEFdoPuL5D%2FRnRjVUVH76%2FiaFTS0HhLdjqBOkivgktPTMq%2F65cnHJRxI32pkRCzHocSj%2B1STC7Kmwv9eUotVTmHLY53JBVlGipbIK0AmzQbW%2Bdfxri8znfQIn6CcihkVd0c4PE9rLd1%2FlzSR&X-Amz-Signature=2633668f9e69588fbb7061419b7ff326afe3ef49fca49367e838dc8466036473&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
      ```python
import rclpy
from rclpy.node import Node

from sensor_msgs.msg import JointState
from geometry_msgs.msg import *
from tf2_ros.transform_broadcaster import TransformBroadcaster
from tf_transformations import quaternion_from_euler
from math import cos, sin


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

class MinimalPublisher(Node):

    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback) # calls timer_callback() every 0.05 seconds

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle

        self.x = 0.0
        self.y = 0.0
        self.th = 0.0 # theta

        self.odom_brodcaster = TransformBroadcaster(self) # broadcasts the odom tf frame

        # call listener_callback() when /cmd_vel topic recives a msg
        self.subscription = self.create_subscription(TwistStamped, 'cmd_vel', self.listener_callback, 10) 
    

    def timer_callback(self):
        current_time = self.get_clock().now().to_msg()
        new_left_wheel_th = self.left_wheel_th+0.01 # reading motor position goes here
        new_right_wheel_th = self.right_wheel_th+0.02 # reading motor position goes here
        
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

        # ============ publishing odom transform ====================

        # calcuate how much the robot moved and rotated
        delta_x, delta_y, delta_th = calcuate_position(new_right_wheel_th, self.right_wheel_th ,new_left_wheel_th, self.left_wheel_th, self.th)

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
        q = quaternion_from_euler(0, 0, self.th) # converts theta to quaternions
        odom_trans.transform.rotation = Quaternion(x=q[0], y=q[1], z=q[2], w=q[3])
        self.odom_brodcaster.sendTransform(odom_trans) # publish transform

        # update left and right wheel positions
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th


    # gets called when /cmd_vel topic recives a msg
    def listener_callback(self, msg: TwistStamped):
        self.get_logger().info(f'from /cmd_vel angular: {msg.twist.angular} linear: {msg.twist.linear}')
        # self.get_logger().info(f'{msg}')


def main():
    rclpy.init()                            # initializes the rclpy library

    minimal_publisher = MinimalPublisher()  # creates our MinimalPublisher object

    rclpy.spin(minimal_publisher)           # causes it to loop forever

    minimal_publisher.destroy_node()        # Destroy the node explicitly
    rclpy.shutdown()


if __name__ == '__main__':
    main()
```
  </details>

TODO: idk mention + link Robot Localization node
