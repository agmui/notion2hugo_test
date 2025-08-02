---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-30T06:16:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-30T06:16:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=913326f75b4d9da2f0f6ef1e874cc1cea0c61a2c9a8dacb7205e8453638abb0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=7d2c020d84cbc4574b07fb9896cfd757ad2e4e0dcfc3195c75bc7722653e57dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=093216a418a3ef493b8b194afeaac23b9509ce2445dd95c7492edba8734622cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=c045269c2da87839affa6489eb4dd4b8417ea42fc8caaaffba04bc104e3b85b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=b163ca2d63b6af2e3e794c97a9013315c0590ac13480fc0dba90ce14d3e1ad82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=088d8f2326aa4a3b8e08d47962fc1ddc41786bd7a196745a0dcb608e5a9e8635&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=0fd263e075b58823f027c9be507c5c5d65a498996f7aa38c6abc4abcab182622&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=7f1939629997694c7843b02e898c0c9d560eb36e831b1d1b8980b9152688dbcc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=8e2f264097a96669c527bbc06e58cc0b0c6ceddbe4a36e1c4169573677f5fea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G5MB4AL%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEw%2Bt46dapB3PbkKDSoTHR6yRCF4t%2BdCJJWcx%2B3PY4O4AiB5Ic%2BlVx69ABSsn%2B4MrQcz6IjTJBCQUyczsU9dvL6zaSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM9ehDrRhyP1lHl%2FovKtwDDxedCjoc6%2BG3mAVMCGuVyk21SsHxL4Gf4Aq6Bu1%2BLXId6nhKW5NoKuY5kblp6IceCNazD454m3ujv7Rwy29ytguW5G3J5DGk36vF2p2x4uR9hxj%2BBCuTlV8N81P%2Bl%2BmSEDzh3TCryuvPF34r%2BCVvI2lN%2Fbo6s83Q8xQDJBNoV5fUUUT23h7UDcib9FEks0BEhS8PwDCTH7fNfhlwX637%2FjBM63mDs01gYitvygq2s8l0b5eldTXiRYwkjmZ90QxM8V9WRCW87ULamELu2B6g3o12DojPwP1YoZW4Qogu18QzciJtpl5Mmx3UEWMC7A1wByFVhbSS2roNcX%2BGGSj6QjT%2FbiN%2BZ%2BZHzDRe3ISbmvADxSE%2BhN0%2Bem3PeRoIndxc2bWvwGUJ7l3NpUVzO%2BBnIrZbinuMdBbfNe0hs%2FVpaGXYw5taQAYvzYKT1PuuBD0s9gNYHcwTGFY3%2BLVJTZNVWXYDL5tWXyw%2Bdfb8ydvmFt0Q20AAPYXkRjB%2B41ySZmrViYFku0F3%2BggVUdAOU7qdi5f8iVmui%2BPGORCcHFmsYDNd2kRt2T7VBh8X7gB5zFcIyMBrROC3TGU3kxPfzEq5bKOXCGwYMCxRWMnk9xxtDMoTb66ZiG1rwIQfQNww8u%2B2xAY6pgHiwObLNvZvaTT2veeq0eGJfG6R0VW4i3TORcbRKmBUqAbN%2Bym2wV9Ise1EbIwhFQlZnDICik59CTJuxlZAkpMFDhVVbbQFz%2BulVhClSBQPG6GOSuhklfTc7tawoHh7zhYhQexWNpei6PlTY%2FmOuiQ%2BkR1GnQE9kum6spROBKOe6p5jmaiH4SCqaz07JsyyET3ysBUkXeVQzmoOEdQIaQkaGmw9HQEz&X-Amz-Signature=b376db1dd5b7cfa256b82f3219cbdf0f2bd9b2c34b7271e21b0d9f2dda110e05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WZGKUED%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGTkRZC2e4q%2BCegJ4gXVEg2IZCXdDamC96rHWZ8%2BM%2FQOAiEA4IqTRyOQJpmzxRHKevlUK7ybvc7CA%2FW7zXQZ0glwZdUq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDDsRGyEp7KLclf5L5CrcA7NdL1%2Bh%2FnsHrSqkRecXjJOwnX5L5zZ%2BSDqVtqvPMk8I2GINn6FB9jYPvQlDUt5nUwAY93e1P5UIpHjgKBGtT8Z24UWQms%2Bor%2F0prY5A8sq1F4FvVEUCPW9WzBvUuPEBch6kD6EFLdfmy0HOFKaz6rbxJlJXX6wretumytq4YImBiu6IOFuX3%2BwaXP1vQVT%2BkoxuT9LY5viOJbPT79sE08C0xfrW1WnPVYwvN4sV74nJVcOAUTlVcKJzhlt35IxLzASSfLN61A1%2F4GpN2kQB%2Bk%2BNQQb6S9CaLjZKI%2B74S9ISuoGJcIdTMM6jIfRgevxaYCPSSqMwsP0QKmJCAhg9178nZ7dCeOhgLCOWMUGM6fDtUj%2FugsLRyc%2Fda7MkcoEiIgfGcxTqsuMWYZPddNhz7a0bkntf7XYMAvYGAieKKpFehzIaWzaTp6b9KBJEZD4JO66OvDMp7AvYAF24xVNfCYwA2yZPOl2unjMRe4aqnfPQFs01D3E65uoGwuU4jezu8q5MdzJUCcGVdulT6dIGWxAH8B7swfUz0djsM%2BN0UyE7RqSLWPOoy8eTdv810pWbc4Wn695DjAUHF8E1o0zn5WtL50UPsVDPPSBbWaQzIc2zFajvo4Ttkt18SnDjMP%2FvtsQGOqUB21F0ic7E5FDmHS2e03MWF5ZTjPlsnWMuslo6fAku9FiIZmg%2Bc%2B3kIF9JPwMvmXcWdXvZhNBmq3pbt4fI36MEKw3eLejkclwz6mabVXVef5p0betS1e8toFurPony5O8o5FI3OzeiSp4VWXRU3hFVBaNkAm9RKsHkxn2oiKntbos8cyyBCa9IJA0VJPlnaj8QwupDJ20ptrJ3zLKOkwyvNzxjnmC%2B&X-Amz-Signature=ce98852bc8769be00a445787d9ce5b422e1c4be2cd2364516b612f7616cbe830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=b8c68db0b0df9eae95a2fca874f93c0fbfc33e80f4e07718574bd8df542cb322&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=7192baa185eb295971d2df9541910b1d21f72e4775a73320789ad990a5f81192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=a4b1c67a377dd173948eb77fe3173e28768ae447e0d4480616bc4ed233296049&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=1a0a2e15b46a70a8bc68e1c669390967fe73e217f33e983d4045223a434e3faa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=3713813901e9ec0bc046fea18486da74fa0e1f9d804d9f6454b857eeec7dddab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=1b15c6eade1cd3a00cd0d323824c554f067059e20122763e75d462fbf5ad3ac5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=ddd8c896d86962854c15b90a76d54fbe215d5038fe1c4ba44b67db200dd160d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RY47FX6X%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T091049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHbsmHZjdy%2Fqp2bzOQZxsiCHuiMDUCAAAFMNKQO%2FkD0AiAI6rqk20W%2B1mWPNtDM1NCY0CAOWM7R0nTuHPUagXAPYCr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM5EnTyzi3WriuClNEKtwDAdf0q96qG0jXAKTPifaJO2mlABkyMl%2FhQ3Wn8UWBkrbVkXruWssEMkaxpDU8DIFXqU7lb0k4jlLMD3EMXO5fhvKGyQudUbjPhqio%2FSd%2FlNvLLdqQdlpI1wKPdqLVnEE7Oum5VLx6FGKVjY2px%2FgnUdTcbizc78kqWsAP1okauA0J8vQcsYkXUChUaNPN9WWtY6PpT%2Fks3nyMLktT2%2BykkjJAYRAjpKuDhzMF2rq6Mr2Zi8HbqF1rFWLOqnOI7rozRVUPE4RnmiOluEEA2FlbnKEnoEArQXpYrRiRFqMMUw5G7dVhnHjUJUKciPBD5TXfrI3PWYdiJD3az1bZKXm03vHb4h%2FYkqcNXGeeJ3r5MagfnLGW7bUEsvHHVFfxZJJ1owALPlzEDvgfpKKqBdGl1AzCu9%2B36QuR3k6e%2F1%2F0AbtiuYZc7DUEtyhMYWqvjscxIBRciebjXGGQQ59931QgZ%2BTQ4mynR7LdtEQbxiCZpv5RZRrkMXd8jw4ytZXWc7gL837EMGOoWvrotLpa2Djt3gs5feOfKrVph2qmWA82D6NHVYv2fZ%2BURe3oJymcfnodG385s1v97FtMIe9K%2FDsIc5sYjrlzPiXwEJTdmTkbpLfdrqdC%2FfIFtkWiYFMw2O%2B2xAY6pgGAxTjm6mtN6%2BMUgHLAnCOZMJS7mYbA7ZBc2%2BcKTKdzRiHbjwAXchKbkGLt3wSig6vKdIYA2Z8GRUdt%2BhqCpFKStKUQs6kMs1qPKFsbHpbx7sKOdwP3puphnxuHyuuKCPHYnCc%2BUiqmHWjsQuwFRTzCKFtFSen5OEMKtgszjLgrEsXLNjwsLVuMw76qlVboIWnbRzEwe6Z9l3rIcF3z0Yt1DxqSaRrY&X-Amz-Signature=81ec913bc6207a37e560b6ae8d43d0b503d0645f403abc2cfd39fe7faa8375f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
