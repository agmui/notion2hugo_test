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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=5228a4cc78876e989e446cc6ae412a854a10ed799f8bc66e7d8a762eee748679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=6bfb4407d3de267fd6d0b0fab71dc71ed2a8687b45ab2636ed22abb0e6d49b7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=ce5d3ef6110887a2acc80b276a3be7e997fb39a5a7520fbfcfbffd05016511c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=828f635f635be4e43a6cc49cf71312d263e6dd86f5dd1b504da3d7ef61fb4eef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=7e50f92bec4d29d5f5c7ef47186d06930d86758a0e225e949b49cf0c393e5eee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=b2baf53e5fcd18472a05e0c808038843958fa449d2e75c2822bbbd3455848186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=bebeb400c641ebba32e569839cb5aff9668355c0e87f82db27127b8475d58dda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=2dafe2fccf6c3ae72fac7f8b2615ece74fe0c5e0bae53f35434ea5642b67e47c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=c0ab51c4edbf256b163df11dc907d0fb6b4f81794a68876730acd54da8fe2294&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WKVVBOE%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6xptqoxRL0smK3asCJ6%2FtAcZJn9pm7l0eSkYwpJGopQIhAO76WUhYecWkQI80zgjJBqpGAMKr1pitXJJXZvznsbtSKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2YwIVMOXF2qBv7twq3AOrZ%2BFiQWgXJmBeEPnXMs0%2BuLQ7jCUPPckAm9MJ2iZ0PZLHXkg5PY9W6RkeIlzInqw%2B811PrkcdfhhvIdcD1RrPgzDUX8M3ICyaYolkqe95x5XOihcZcyyJK6HgrreI3XQMFvwsRDMWv71%2Bi3ndtYW0vVU27bsruaXYGcN28om3kmrmZYveNyIUHhvbIbVTNMx%2B%2FBgbbD%2B4jgX9ODmPfx8BEeJeFHwOBwM2Ijbm56Dsidtgd5wHzUySDdwUTEvykltg8f4ZPzgJjmCTtklxDeIwFST2keH30imve4zLgy1Vj2K3J6dR1tUO%2B%2Fhsh20HPPreIpcTY6BvWtInI2aVEuhSP9fnhocK5IFryo5qVN3tz3%2BtV5j6NuLiBUt2%2FBnaLUPMddfQST5hcxM%2FfLTDt8X0XUPp%2BYc3iT1D1wtzmrcZ4UQThPSy102cUkaV33QXSUpaoPfXl6R6GgaLbJmaN1OfT7ghGIWZGuhkPzzIYAVd1WwJV4SZugJfRebbXlu6Ti%2BEIQMzj5%2FywrM2LE51tDz33OXbCyztDaQ0A2uKxUgQscEfsDMf5Lqx0t5%2BB7BIE2s%2B97c1F8G%2FH13UYAuU6zk7Wp9MhKMVtwgMkXsLFDVOdOvEeNaRpfV7DX188jD3lePEBjqkAXFxXYK%2Bpq9LfAC9uBZp05SnRhP%2F5Zdkr8%2FXqe3bu49stcjLMtiuXuTXxGKGdYbAYZ3Id02NgD3R4%2F92iPdPegkvBc0IT%2BEVYSJkVO3Mx1k5WfZcbHedAnCTaJTD0%2F7BwZ6YN40dgmUKt8dkRiLhLFMeaRkX%2Bk80SfegXSUo5t1FEyDNRAvPD7MtZMqFQ7%2B6Dvz%2FT%2FvvSQkWiEgUv3caXS0B4WBe&X-Amz-Signature=08def2beb722737a9b8e61e61d71392e3aecf00ee9029e7fb0a5a255bf363e6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLANU3IS%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFfr%2BVLi9AFb%2BfatpYOg6DerTV6A0OW7WYTmgOgpjzCtAiACyiUGtxWW50NJangLYiZQv%2FDp0RxBZ2MvVNzM9SJz4SqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0NuXYBd9twAHkm38KtwDWgPEPhQJ2%2B0zJdLIZxIF136jTqaL3lEr7Fkpn3SeelFZrwbxy%2Fex5UwSCxyQB51n0JlZIxspDUOmY5GL0tTzw3y9YR1YYJNJrMg43PZ6eTrPAmIOgacDHcpPjD3b0bbFH9trKRuhyMWIm00VdopJ0sfEeFTLm6eTzvTzF88WWhns3C%2Bf9C9ZIa3bOfb6RMoYmCv4gOoaJYJiUWDyfc2SBZk78XBmSv63dkFBxQdwiHCkG5WJoUPTaOIq2L5dkwxIbIJvBzXyj97kmJetDdaSPsd0R0QbEzgiVRwVh60J82i4%2BE1H75VLq52MmnSGnX0s8kC2SLFaLcCGBEdi2k5TEyUNGxoTC3nM%2Bz4eNPCjZoMuvSxIJ%2BCV2R54DIjy8TQYC9e1DLtJRTrBvLMp6W%2BUzVD4r3z%2Fn0kjp41zvJzhbSvLFr9KLmIYOp181OEnA3G3oBbzvPkubpzYRI04J2xfsOm3a8j7Ws0QsRjZg867AKCpLbAJHz7UMa8P5%2BrDNhMUilImaPKOsBEsvZlqRayxPM9PpEWoX1TI26wkuHWZcuVsgO%2BRhH%2FtDRtMxKocekFN9ciJNhmsRGA%2FwpprHrTJ36XjQDS9Nvi8AAa976g%2BlyL8Fm5SfhNP%2BaO%2FXD8w7JXjxAY6pgE%2BLeJJ2O6LrSPfB%2FPy%2Bke1%2FhJYlb4hSkOqNcG5mgVNMLAZbJszB143s2tPPCSMnQCSGOzZkQ39gSHzn1O1UvZuIJKLbHihsOhHtUkinNZlgkDonTdz6xn8SE7N69yi4jirrk1z9vXGv82H5%2BdWNJw5QJwOKwSib3TFySnWIQC0bw88I9pXLHft0ZLaWl3Fw1KRV1gJC85u253agAvvxuPw5jKxoksJ&X-Amz-Signature=cc9e69aa4cfb4e32f6e49951a88c1d7cc7496f9ef1feb9c0a51ef0265eeb9934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=06bfef039424e0f92f6a4c5d11be259bfa4d4ed3185633fc4443efbebac9477e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=fe8c2281086c3718ef36a20ce7ae478905bd469f45db0ac4e7ee3669da7dc275&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=5d4fb60052a03731ff2b2c7f74c6589df9df4db60b1025a2875f17a151228626&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=38283c6c31e97a3b2b61793924250323a5fa9d8f3636a41c3c9de5399a056f30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=46bf033e3b946950e4714a7eadf9c7a1e46c54e520d10f7d48a5079a2e176543&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=4d3a52d6b3f1f9aff47b5e13fdee8c918903433b6cda4f41cfe82435b72aeaf1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=1479882092a079de2bd07d55784ff9cef309277f70d6304cdd472b7893c359c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=2ad6b2f40f601dd92346718cd42ee722d0fc2bebe59b02b21b6aadc965f8fc71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIO64YL3%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T170752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDqdZf8NHS8xsJT6TdCexEaK9wt0icUrzUadZy6d%2BDwIAIhAIAwdl9ptajRajEQvxzoRn9dd4SZKJsBjvUDb7WuiwO%2FKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAgWsRkJJ222PGIMUq3AOchnCgmPdTSU%2B07pzdAYfG7pJg1YBXpHM3sqOc2a48ihqxodkNk5ETzkXIB2Yjv%2FjF4w63v%2Fe%2B6jBpewKEVOtNEJhiV2wXHwWz6vflJ6PA9rm7%2FHYpquJtoliwytda7M4wp48tyiJRWg3V9SUoKI00TZtmq8NPFX49Afmq%2Fr54wmIwShoViknCPM7DkzG%2Fgu%2Fhj%2B2lpCROGKm7%2Ftl7JOCFvFMSX9IJAZqZSt3Czse5hkYN%2FO8QCdSfRVTz1pmY9%2BGGOqX9f8J7phrTUMAOnShqGKKf%2Ffby2OmnFY0rK0ArZKd%2FfOOud4Ax8UL43ku%2Fta3AJ9QG3yyzBB5kDR5cgSNj4fGjU%2BiLqVKXMCz8014BfTIuBhbdk4Qt3IkDvxdt8xbW99N0Ft5qi7ByajEcfnEdkWTVKgIAGuvqguyvYq8sTvPJklg9GBoNgbow7ynBm2v9P%2B%2BaJpBIQmly7S%2FMsNrYs8sdQqkYvvnLmp3vojFtqkei%2FPuFyr2u27h0AWnkk9kGczPe7UFnZZSX%2Fi8UroB1XL5%2Ba0NyG8lbcrt3Qmlz5zmRJB2mt91IpSlMS30G5MUyhSwPkQc%2BFSnFdYidRnmswBGBX38J2XXZkIMdZqp%2BTdZcZGOpnf3uVBpIxjDplePEBjqkAbjLXtfsBhlnjxlZJAbscHjH6yg%2B8Aw73p8h0HIC8z43WxUnpGASB1MO082F8ML2ywB4uzQ3r2TMkcsEKKktsp8eVbgIqAckGUc8d8J2Bv6GW%2B3xz1uD8oB7eHe%2BzVw%2FBqA%2B0eA%2FJl0CksV8oYLxc61fBFJ%2BHrglCYfaGHlqna1DDDy9CClA0OPH5pXk4SVevKCjWbt1qEviNZbp%2FZugutGu7vDO&X-Amz-Signature=e430e4b0fb968fece298c39772f75fe7a0d47d0523a1d3a987289ce8150d721e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
