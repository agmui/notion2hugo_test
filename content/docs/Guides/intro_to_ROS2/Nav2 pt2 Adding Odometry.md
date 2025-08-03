---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-08-02T23:19:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-08-02T23:19:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=6e60a3d608beff1e0697e4c3247ceea73d95ecf7bd4c3c5a78884f63baaf249d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=f477e7151e0a332474927bc1e1b4b82a0c20b28303f5e80ce3bfb7be035b9936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=75a5b01ad25126bae463030469bd134455604b75d75d4b9da523b6c735975fe0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=7196a45bb126af90e3fa967510595b98b024c6ef80c4d5a5bff286cf918c54eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=60bbbe0ee9fe202fd3d3f8adfd65c93bb62719161f6d0bcc53ae61840d24663a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=6656a14d4b21ff2a6173bcdd53e801a2c8916dd5d612a82bbfc13f5788853a25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=b14991c27bddb4d6c2ddc55dcb82f32c2935275cc3a6674f919727efdbd4022d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=2555b75cc28c6288ab7cb23cbd109d7d6555ebe4674a73a0b947a9cdb549bdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=ecbf01c4842b6a9ea824a5728a93faebeba0517302bfcedf64ec949811ef45cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=fac7ed980f3e7afa8d1b09bb52c14fcfae10afe3f0499f5b944fc621bf8a3cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6HJIDXU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWA4nQMgpye%2F6ygtZ%2Fnk4v6n1CSQbfO3VRYy04dUKKUAIgJ6GQN7j4M9Xa9qeb0c%2BmdVSAkE%2BiC8yRNYTqnGeYWWAq%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDLp3XLtRPD%2F8WItkgCrcA9Tx2unnR4xQsm9jrEpOP8MeKC6PzTmt0TCFfk%2BryT1PMgtgvhi1u%2BXBOYK6JFB%2FAt3agaYkZ46w61fdB7n0LXEtRaVDFSniNvunGylf5lvRZVTxRs4Ngm5x71rbBFamQm4YDWm5RIaVuCw55tjZYPhCjep71UyYtv9ZU9eWBbDlDznp1sX0TC5tHIym22z9EudSp31DEHLQodDvsk45xA0JfAOH4MlLwCb1dj2eYe%2BAvt7Sgv5Vwm5YH1%2FWA987tK%2Fe0yjtEiRPEIsihnh5qNkYRUltAmb0CibJu3osRWqEIzwMqTpwMQA6jc9hga2HVqoDbUgwu8lSdCL%2F3bkjxz06cwuB21ZP9vyprDH57CMaf31qOJ8jc0Fns06XK2H%2B3W9zBNYbPa2t1xfxRKGorV9BswcpELMxtJ9TGzDhGeJLapxQbRnJ5seqCJKl2TWlnufKDOA3t6EuugUhjV3S%2BK2wZ4bNmXXbpLaOemZ8FjjsABFfoE6HYBPlDBYoF11Er8ZobF55n7KrrBIxBtozNVlFytmViTNRM0U26W797vfMkqcH%2FuYOOifrgS%2FPCzV%2Fl%2BT1EI5HOCLoTM8ghyzPilsg5YEkB%2F%2B1bei%2FS6ScQUo1969HYmV1Gj7FAmGZMOCAusQGOqUB34htj26t032IjLZQMDsLfv9S7iGkZc4%2BXaqAUfNZ%2Fz2Jd8TZxoIGgdnNfQ42N7MnBQN4WW0VGCOy%2FBvp9pzlvsC4JtLcUxiIyENsQaVgpfpF4Kv7L4RUAcF5JKqOVIyrzAiPevG4fHtFvISMJOjfUJMLfAkcgBk0DuFnhNcvoJuPT4eA6jnKcRjzuFXIype92xGb7GZO61OZGS50Z%2BlT%2FIxBCp5P&X-Amz-Signature=b19eee61eda723f25b3f8489122fbc4c7bd1713d4b1b595248c891997e1471e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622BEFZGK%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpqgtSej5ZZd5W7ofyzV6wAgkRXJDpTuL5nN14dlmXbwIhAK0AqugdMu8Xh9baAxOo43SX20Y%2BgqN%2BHbSbAnTeKhPfKv8DCB4QABoMNjM3NDIzMTgzODA1IgxhgwpM6Kte4p6KV%2Fwq3ANbB%2FKfUR0p5Sser%2B4OMsiAo8vfaS6G%2Fz6%2FrSj69lqq4o%2FqNGbjCsvmxm15lS8vspKhYACHhaWvZfe8QoHlJp8b1AObPHOtXlR8bjry%2BODFWc1kTL4H31zBEXyjOcZJJVtned%2F8Ft36mD%2BsBYUPalsR3JFfckLLrbL0OwUmRfQVRiP4EV%2Bsp8%2Fbyv6kW5M%2FudYd3lDkNQuKporqb5AIEQBw2eN2wV0HaPHzrrFOUVruGPVjTMML2oVQSbDXpaHenq8mBEGzI1bzY2GqFarUtomGV%2Bu0rmQPU7RO2NjZnRZvSgkazOyjIobb9TBIuTvAp7w00%2FCEhJ2eFmbuJUriaZnlO1yAIF3%2FcjwSi%2BLDG6z%2B%2BggWeFw51OrylIkE4AEdgbz1%2BqaPo1vBnobCFP%2B7xpIDN52NIshvxqFBmRqZc1BHAl6gGVWAtvjpfNYltequ886iUFIdR%2B1R3Y11s0ghFQ97cTPTIJ43C2Eonkj8V%2BW0FJQMg52%2BpAhJ0hsoCfAQsjqbKpInBZdhyDsU3TesG1k53PgJr742V5V7OCmuoOpjj6AwyF5qDLEvAkPhYoQXj87%2B%2FhKHuoijZ5TKEyjWtU4GTkgB0zdOnmh0v5yQCqquLCW%2FHgC7qoODXs2TYDDzgLrEBjqkAeRlPlpvDbfh13EZYVESpDF7rErK5jz1TAJL5gwSYU3W4qQ0Hankz4a1MwFY7UwgtOnpxuAPwLimgFbE8fWm4RnWOcASKvb8vSAhhCPlC62kOxzsDY6ZIIzIQDFmVujm9KZc0r1xiHcz27ZWcwP2RPqoTx%2BdBvo350MH8%2BuCPXL%2FP%2BBW6%2BxRITsDU%2FIxmShewWmp07ml5tspg3cNne1%2BOY9JZA93&X-Amz-Signature=eec7fac34d03633b71d222aa763e40e8fffe8f37551f43930e4ae313cea66ab0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=5a9f46f5b7c6c22e590703574e57d2fd65888d21108ec128669be45ffd42f2ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=46ab672e8019aa039fcee0757d00b8105cd62bda2f5baef3257909151aa2bbd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=26f9d92403f263951055ae9c57fb3acac28f9f1b31572a884da7666080907088&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=ba49b220d9b0befa59bb929263c6569cb83b8a7c0d450bd3b25f41d4f1ba489c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=af33d4564eca910bf36b04bba32d78b2f8f87e12e80954b4b48ff9fcfdf67170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=208e4eb2298c8a39faee1c331180503c4d80cae9fcf65630d7a20dc96413bc0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=0a421403cac0c1864f959b4721bb7f51260e50c2a7b1c3424aeaff6610ec28bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3MQZUOU%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T005309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZEGiRR%2FGV28Dj0gf8mOUGO8GNo4J353Uafcd0uxsdhwIhAOy8x%2Fr0RO4XrlUIfrK%2BfyxfUPfjMwofIuj%2Bn3zkhGWYKv8DCB4QABoMNjM3NDIzMTgzODA1IgxmEZvoAoydZiT4XZcq3AOUDGzwBgdvOFt%2FyEcVkaJ%2FI4Q5vANha3s6XBWe%2BE2QLAhGkh6P7Y%2BuvHDYIc9QluTNfNLcv1DSY2g9xw91mD8gmb2AAJGOnU7A2u2XIq0jhipl4HHDo1waAcaorR3O2SWCMsWHApX3AWlJC%2FdfJZoL3xbVOtfihBDD4h8DEKUg7UYh%2BxVfH8aKaV1%2FXoqQYmQgui2FzixMajhRxQWVr8sSEcQBBKtwrNtBJtb2OaoSgMlH76wYmtf6ZavIHthHGS99334Qbbslc6HzTJnOyNjoIkapj57QX9wsCQHoK4peRRQJBX6Y4J%2BskOy2P8y%2BImx%2FU2FZeUEPfvxQAZnWXbyp2%2B%2FlBppqNHgoTIG9Rka8UfdxODLnqeWX1Yak7hnOOpMKxCRSFnXTHNdv4LHlw5T4tWyG1%2F2ZOcOYwXItvVMineSImI5gNnQ9ZWzpneEjywd3k3139FR95YGEVfMS6ot2HO0IEcFOyJq0FqNmQDdOJeiGDnBbOteE%2BMagkedcR5o0jFTrcmWl6LC6t11y6nq7bxW2EZ4yqG0WS3HaYJTSZQCrqjkzIyE1c6no0W7KBOaCO2zJNbDvPN4kVFRH7URVqVmNKsIL%2F%2FKeh8LlNlxDwgph8W1yIjBg4LMUzDCtgLrEBjqkAfqBGOxGu6Vr36%2FvPMxCqZoBDs1FzUZbCYOQy51YyAdCebiXlMnp7GGf8UrlHyELWn6x6Yb7FYZUWSlFAgbQAld1pef6odgCaeQdUyblHRQWe9W1SCDdn1vhqX3BntI%2B9nu%2BhkLpROdJVSIdvqCSVVr5iNTpPwlrUJsDDFpvgNU7myi459YLsEclkEG6y2a0iSzCDJ%2B8dkcCO1bLaQvq06vY%2Fhno&X-Amz-Signature=832cb1f49a8b609c60e53dfdd30e37b1e65e756e601f3414460ac5fa74367000&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
