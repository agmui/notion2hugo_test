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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=187f8eddfec7b3a518b87efb183233eda6bafc3c82e26932f51559eb809d7fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

This is often done by measuring how many times the wheels rotate on our robot

First we need to read in our wheel angles and put them into ROS.

Lets make a Node to do this

{{% alert context="info" %}}

<details>
  <summary>{{< markdownify >}}Why not ros2_control?{{< /markdownify >}}</summary>
  
This guide is designed to be work with hardware setups commonly found in Robomasters. Where there is a often a Raspberry Pi / Jetson, and a micro controller such as an Arduino / Robomasters type-c boards. Most of the controls code lives on the micro controller so it is more convent for the Robomasters teams to not use `ros2_control` and simply send commands over a serial interface.

If you are curious about `ros2_control` Articulate Robotics has a very good guide on it:

[ros2_control guide](https://articulatedrobotics.xyz/tutorials/mobile-robot/applications/ros2_control-concepts)

</details>



{{% /alert %}}

# Publishing wheel angles to `/joint_states`

## Creating custom node

{{% alert icon=”👾” context="success" %}}

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=6d3755096d27b188ae7607aa31a0f4f34555561341d75808f227a62815973f57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=6f8d399abdc2f2df150125707bc8b40e4c4b11030c166d3fb0f4c6b616af1d90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=e347d82e5235fbd0b8fa36f9dae3e9e7060fbc00339e498bc03c47d62c0284e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

We need to change the publisher topic type from `String` to `sensor_msg/JointState` and where it’s publishing too. Let us also import `JointState` type and some stuff we will use later.

```python "4-4","5-9","14-14","15-15"
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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=2541dc3684a6b9e933e98a58f9ffe1ca81cc56c17aa03b987e9dc80ad6bf35e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "1-17"

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
  <summary>{{< markdownify >}}**Final code:**{{< /markdownify >}}</summary>
  
```python "15-29"
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

> lf on WSL here is a guide for [Connecting USB devices](https://learn.microsoft.com/en-us/windows/wsl/connect-usb)

{{% alert context="info" %}}

If you are developing in a dev container you have to forward the USB port into the dev container.

in the file `.devcontainer/devcontainer.json` add this line into the  `runArgs:` array

`"--device=/dev/tty<your device>",` to find what your device is outside of your devcontainer, probably in your WSL shell, run `ls /dev/tty*` to find which tty device to use. If you are not sure unplug and re run the command to see the difference.

you may also need to run `sudo chmod 777 /dev/tty<your device>` to use the device depending on how your hardware is setup

{{% /alert %}}

<details>
  <summary>{{< markdownify >}}What if I don’t have a robot{{< /markdownify >}}</summary>
  
We can fake the wheel values by doing this

```python "6-7","11-11","12-12","19-20"
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(JointState, 'joint_states', 10)
        self.timer = self.create_timer(0.05, self.timer_callback)

        self.left_wheel_th = 0 # left wheel angle
        self.right_wheel_th = 0 # right wheel angle
    
    # gets called every 0.05 seconds    
    def timer_callback(self):
        new_left_wheel_th = self.left_wheel_th+0.01 # faking wheel position
        new_right_wheel_th = self.right_wheel_th+0.02 # faking wheel position

        current_time = self.get_clock().now().to_msg()
        
        ...
        
        # updating wheel position
        self.left_wheel_th = new_left_wheel_th
        self.right_wheel_th = new_right_wheel_th
```

This makes it so we just increment the wheel position every period

</details>



## Testing my_node

**run:**

```python
ros2 run mbot_pkg my_node
```

**output:**

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=25629aef9c3ddbc39a41d07a5c3950273e27c0c1c123a098384f4ba737989401&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=7478bec2fe0e9c47ed398ce7486a90cb0ba7ff385c295dd534e96480f6227f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

comment out `joint_state_publisher_gui_node` in the launch file

```python "2-2"
return LaunchDescription([
		# joint_state_publisher_gui_node, # debugs urdf joints
		robot_state_publisher_node,
		rviz_node,
])
```

in two different terminals run

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=61d095fb764a9ce5c461ee31306a03f0c5e1ffe68366b7431a7a8696681af7fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Updating launch file

Lets add `my_node` to the launch file

```python "1-2","2-3","4-7","10-11"
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=46f02bec9f11af93af8e72fbb53ffa9cd83b664d69193da24ecccc464393a920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTM3FAPP%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEa1GfvnS6iuQR49qKYLe4brXrWJtC3Gu5DupNTbnwMtAiEAhOn%2F%2B3NTJoFwGEIQsCA2yKZl1rTNT3sipaXdciL98iAq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDNBPLIwUFxA8Byz3nCrcA%2B%2F5XbrOpjDQX7WfB6QVQsUU94bw88hK5x62s%2BR5H2iga4Tw%2BB%2FgvBOr3ku38g3fGv6Ch1eFiMXISG9Il6ydWX6F07T9FdxDokT7ivmvyla%2Fgrt2fruU87t9XrPGkbyviasNYJ1c7kUFlwaI3Iv1zeOQjiF7rledmYR5oUdsypqze6b1CNATzfSBQCRlFq240Yp4jgCZvq23fXuLFlt8WfiyKv7g9nx2jg23FI5HJ4y6pr8x4ySKdFi%2BHWuQ0dhKF9QJAnccbr401MWsw3Bj3jrN1ugElNIxj7GuOehQjBqsrkCsqPE0r6SWC5g2XGswxi1aOjgfc9%2BMCnnRpGKfKa%2BX3pu1NwqOzouFjbw%2BxEfWyw2uR7%2BGisT68FK5gGJCnn1kzLO4agP3v4eokspkZ10Q3U144HOVRgL1keRyPFLo5PgTBEu0938So%2F9dujcBhDWy0fgleD%2FinvsuFW6d1yCucAIU2I7Kcy2sp2t7aT5cX8xuVZFU8ljyHXLgqJU0orWIhdojPMr87dml7FS4hk6iRvd0YCKhX5Wi4RzUkqap4a12uluPxjwkChXvQccu4FmBtTCr8gTIrmlst1LtJhpvM85e6ABzOEKMUrixWWbQyzW5IlCSfyWILkv7MLyH7M4GOqUB6JYXGeC2T3TTKMpU%2BYM9%2FjpxAuK0B%2FXULkgjbn%2BqavhekDUSiXtBtsUhv%2B5tic%2B9h6RNwUexKqoN7MmWrHFiuMycW2drBBKm6bkOZ7ZMgLIQmbNgoiJd5v59u0DSCX%2BSAZ7zfYg4UdnJzubInYnBsFO%2BW4nlGm9tPzsXl2005pvt1yTyNaUbSjxCG5yYgM3%2BvC%2FJ8RqpRsRUF2aVy2onsJFZaYk5&X-Amz-Signature=774f54da4f5dd14e86ce00a7fa49b10e2a1b4afd9ff149f7b344b0f7dd94126b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA22U2IA%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBTQ%2B2scsOvbq9uE%2BBzw7f8J47qFQpwdQkQEdyXCUzCgIgA%2FhZMiJBezmCZmtIfJx5T9H64Wa9Aah3mMHQ0v0VGvwq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDKSfI3ofDgh4gfNIqircA7lw9LHDEBB4XORNaACzt1p7h30Yv%2BPn2r3%2F0uPWkn0gGAzQ8u8%2BAHzCay6ClEeSDD1%2FhpkkXbIYEpFwRDuV4HHCsjJT%2F7FFU7JoSrEFtS5%2BuQJz8dAl3gEWCsMa2TQfTy23FCEtLS5zd21BvBXE8gr%2FOfJPl1JvLO1Ms7Jl3R33JIzP3bEEt4OmYWZcOVDSHl9w%2FLyYCIZIgcfqS6g4hmp0e2pjYJuBFsC7%2Bg8OReYE0mlYb502IeiwzXp9u9XktKARFer4ST0j%2B8GK9dIZBwScsNqHSilAHDWpiA%2BOLPdpf8AKeWdZbnvj5ZAg%2FNsxOb7vqoauMjFb6TA8AWIs4qRxE735bq24d0bMyY8xqbHCGqbd2mvGuKf3%2B9mRKiZi1HhL20LB7tz8CxKNeVhkf5LeAjsd0wPZDmfFraEAWdf%2FmsvGCLfAvD3pvSME3F9%2F1aIijlOFM%2BIYfk7usUq6eBfwA8neDx1CfDho6RNNIjrLPxctr06aRBr0MnTVbLPh%2Bgg61lQMstGy56jnq%2F0m2i8P8MNh3Tsfs%2B8KUi%2FnAvRWqi6dq9UjNzKuZwFdkAPjPyg13gIODd7QhLzz7jagciHBItrq%2BA1bf%2FYbVsjgnQjd0txBttYgdvkTqIaYMIKH7M4GOqUBnxGofhDQlNIu3fI%2BQkIo4nrSSfhYFfwFNn8v8tcw4vpUARSoWhE8mkWK8XCQBa2hYQg4be7ZQqYFRec6RJ6%2FSCt5uRq4VsgnNhN6f6swJGbuaeC3fmUP8NE9Sn%2BNcNe1e7w6GTPVOH1ruRorzZpQFYT8vL3xthSb8gajrsVBJ9N7z2EJU8ALCvGeXo9AzsZJ0lg1JNa33hlBfWP%2B79%2BC8WRti0j5&X-Amz-Signature=a5aad0f8c1566e669ad1821031123829f04ab57e0b93e9a21c225b7d346dced4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

TODO:

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

```python "10-11","12-17"
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

```python "9-20","20-23"
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

```python "14-14"
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

```python "6-18","18-19","19-20","20-33"
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=18430916095f0b4e70aa349c8e0edef5228014904f9837052589efb98e7a1435&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=336e519342534afcf2a9e5a5ba80748cffd1c5581b9c4e42a968bac8b244ea33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=2d53876d8ca1b510106020357eacd37ff8ca7f590047eabe4ad96426e370b799&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

```python "18-18","24-25"

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=93697837ff45cccb1b8f4d3e44cf401a2ef06ea14c129e5ff01f3b9df00e739d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

#### Outputs:

| **Name**   | **Type**           |
| ---------- | ------------------ |
| `/cmd_vel` | geometry_msg/Twist |

#### Params:

| **Name**  | **Type** |
| --------- | -------- |
| `stamped` | bool     |

#### description:

Lets you drive your robot with your keyboard

publishes geometry_msg/Twist on the `/cmd_vel` topic

{{% /alert %}}

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=d6945f140ba5ba697f97d674b8d016a896c100b5f79e85efe7dce41d001793a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=78233952cea094a61af43a4425d5655f59846e1b71a5f256cd3dd4c4a44171e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=02e4e16dbc031d11047bff8fd23a0f9df5b2f335de549be2b9ea86f0937cd934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=49d714093de41b7bf731d1d8c0cc1db6ccf0b236834ac9ee520fe117087a7aac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XI4IQ4NI%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCyLpK6g4Eq2fL8sisPoOxsWnjUoDb4z6w0e%2FBJysh9lQIgajqalH936y7pYl2dMMdbr%2F32wsOpYh%2Blom%2FyMwXuLFkq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDHFGQd3enfor1Oro4CrcAxvIgjltiQ3NP%2BJVZDfr4tH9fxEClE%2FcQupjQ6eVXlsZB7oud5fQjgbl4wB0d9IvvNHG23KoMWjk7eUjk4sIaMJyfIFsBmANNVJCVz5UIivdGo59SugF%2F3s4%2BZLlU8oDLAeD%2Fim1%2BU%2BHIQprHeormsE97SOoAiqd7Ofv1C3B0SQCTBd4Vq4%2BJt4iniPG1B8ERrapqjPM7Qx2nKg5wAnLf7VpANldNEbCZ0KKwsFdt1fo0m9o7ojyoOpaBrkG5J3R5fVHH3Lodd3OlkcXoP3QoD5z5lAd96ULC%2BEZ1%2F88I1mF41RO9jaFC4fc5DIqzCjFFmNXDljtUdewY0CD4hQksD5f5HWXPUTD%2FsmtHHRAJzLegvYgZIaC88rvLYv8nwvwvh8x1Q0KY39ogXmgFqHMrpDG0zRaU4uftWdVljYrIQNFZaliB1fbPtQvnNzbACuzrj3HIjj3Z40ujPAtmNv%2B6NbRXm4%2B%2BacR0Y%2FcVlnNYSjoR0vV23KnSEqUgkyNrNCsuXz%2BzasOB0LQ%2BjtCVyhxQqHXRGcFhWiPDFyayfNmO3nnTN6LqUu1K5OwYjcjghWWNgk46RwU%2BkMSM6xqlzOZIj%2B%2BNFfitjKj4Dii4u9GHTtAagEVbYhYrU18OSHbMLiJ7M4GOqUBlMOIce5BaKzFPUUwE4q%2BnQ9TDATK%2FygDA5T3GT96Phi7JVCpNYLtXJ6dTP7ydf4XTWDshWOxDSnhQ7wEPmPBiSXy5QmnpfQCg%2FfjxPQYJzDqoYUio%2FO5G7lIO6aHX%2B3BnvLGQOaDaX5eM%2FG8RDu0PoIA6IOU8ZX01QPt74jVVX7IKfipD5IQOdkiMdFnPIg25uzcr8%2BbSQyd0Zruf53vzaUqHWfU&X-Amz-Signature=fbf21d332a7694456a7ac81e8c74aaf94e3116a177b25ad029b9ccca6c2418a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

```python "10-10","16-27"
       
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
  <summary>{{< markdownify >}}**Final code**{{< /markdownify >}}</summary>
  
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



For those who are curious ROS does provide a Localization node which does most of the work we did above:

- [integrating localization_node](https://docs.nav2.org/setup_guides/odom/setup_robot_localization.html)
- [official localization node guide](https://docs.ros.org/en/melodic/api/robot_localization/html/index.html)

The `localization_node` is useful for doing sensor fusion when you also have an IMU or GPS to add to the localization.
