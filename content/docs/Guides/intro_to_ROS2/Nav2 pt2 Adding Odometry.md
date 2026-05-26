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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=a8e658fb488fc584af83c4342c6db68c171670c9218b6213f29ca480765500b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=14785c08ed94e2c804e4141e6f2dc4d0c3f4e9a6e6e0c2976e6e0e585e894e82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=0dc3fd5269c55843f76c88f3fe411e56ea54fc66f10dbedccf60cf4684b5918f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=0e79be286dd9f9538132cbfe6c1c35188b87842a92113784fc7177d32f0195a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=bc7cd00be0ec0d8c2ac8d322ff478fcd3cdd81f435de686c055cb701d4f8d2c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=124d16c1c1f5771a7d216ace3c3ab2553ccf65d81faed28187f610f46210e8ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=c159629351e2963c0754169753b2230fd4c528b5ad5e1691826c4b7e8e71c75e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=06ba79c968fa660f6881b72e52892a00ae0503c967fda6debb159e8445f1e8f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=a707cb2a790c470bb290dc182c584654176fab8cf5ddb07c182fb251348f437c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXJ32ZAG%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYalBYVhp%2FX7sY2KHP8DwN9xoJhxZ8XPvap1tVLEktZAIhAJhxc91vR4AYkULz895%2Bxkw1RizKHLecTB7hY4P%2BrLLEKv8DCHMQABoMNjM3NDIzMTgzODA1Igya8ve3re9%2FmBDoe64q3AMxa4%2Bw3GzADR0CW%2BkCJU6TOaghTPnv0Pb%2F4n5wMh%2B8R%2FC22J48aOj8hi7WGP0ZBtJbpjJ39Bra%2F03kmBrRNJ5nuE28ksBju%2B0d0EKm%2BrTXmOuthQFHyN4wbtdMsxLnZ9LK8uENG2Llj0syc0lTowK6RePxNh6KJJZA9K65s8HY05aPfoRYcE18534zkTzJSfAuTc3UmK%2BOJdviEpfeaavRC4EXA6H3t13e2bUawirv8B5Kdrm0PAuzL3%2BBYHPPoH8QL%2FpLwV8kLtrGO3TvXGTkM%2BEXy3yIDxgIquyJcVRZSXldoRYeKPA32bv77uE5JXTqh%2B1oasNneCSueXKlSd8Pgjj%2Bu5MJFxpOuQhCcwcYMmRWkDF6LA8rrjNCmj1vaWn9NJlEsOPiFDBailK%2BYzlnq661QbIHtpSsGAzc%2BLQrqFsx76Ha8ui%2BMmraFPtdwtdyMiItT8kIzCBn1D5K4sGMEhAh%2Bl%2BUL5%2BQfme1ZgX4CNHFWZuFh0R%2FsFrU0vScqOYebaeBdcaXsv1mxfXygUTgnSmFOZ7CybE%2FrpaDqJOJImT%2F%2FZVWFlBhfKqoyrhZIR4UWLMQQHTiGHYfWNf3UM%2Bdg%2Bz807DCP8WZK1AkkGjdzJEtai6PciryP56GwzDh%2BdPQBjqkAWGBU5ZU1xyNyYTQFDEdMITlalx5Q1bvA0LmVh5lFtqg6PWeFATxXMjlbVIuctDZ%2FgOiu0vxaf6nBUQYcvBRkpxdL84SAqbnJ4YDVM4zaiaNGmAyjxf0qAiywmgu0%2FrS9U3JHdQq9ubgpnDH1M%2BfA6hSV4o1ytf33z5T03uh%2BMmOlYKeze3IQfXi9TYkHkJU10Ylh%2BZR93EcV%2FhheiNqg8%2Ff2WBu&X-Amz-Signature=4e000df07036713b746ca78f20117d7414ec76c4d021ba9fe3ebad155a9ec3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CLJ37IJ%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7OiJYtPYKbNtN0UrTQdg0b%2BJRx%2F2BAw07mLwqA4gZhAiAlcdVZkuYGnfXKfCKfyzwtC9T4%2F1s0hyxghCHitXPIzyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMJaN1AVBuQDHeoK7hKtwD5ih2l6sYYRIo%2F6xg%2FvlnFhJRbNg%2F0fLV0GkZLpgKeKakSc6iHm7%2Fyy0ibjABizmC4b%2B4Lwgspop1J3HNI84u2YDDr%2FwOx3D08vttwODtq02BUQ7jF7%2BKAHnDwGo1mDm0LUTCcNTVoX4nw%2F%2BFC9RflGsLbyCVnhBN4scNH%2Bjt%2Bk0O2Mji6x13tpLOE40BRYkQ2iQxcb1AFttmwq7aqQuWxCcY91lUyp2nVBmyTBmnV1L2hQLv9Xs9bNrvM43dZXl4f11MBNjsnkPadEA22muantGBg6JR82slaQc4wLdyjTyvMNKMiTQydsJSJ9CMm0uJf5DwB58hsVduNoHWiDmtAKTPYTaNIe7rikSRjrK1MTxW%2F%2Bu%2F8pQq8IPErqNNdeiU%2BeM5t8L0epqQUk35JxekOElqeanJrtp1%2B1JIyNxo8RTULYQH0%2B77uRi%2Bfas29b9bcO2oJ705Qn7QxQziZAhDS46G7UWSVFEMOkcsbuWWDGywni9diVZ6mg3KBJCnjLVqizPYx14DwjSkvVtsVYnwJeMcXS%2FqPk7%2BUuwU3jUePM7CHVWHS3VBqyBiAv1nPzE%2F%2B5KWhhCqvcqtMcvnerID1HVQPnWAnYYzyX3j2WDcogAteq38JWXwW2cyVYYwrvfT0AY6pgE%2FpjaY6PVtJc4BB%2ByHpsnF%2FFj9CUb44gDNzVBd%2BT1p3GHJXkOpuOKciVuwlZfgPj8WLGqtnE5Ac1DMkh782lB3GFBJn11AdzMMaaOJIR5w%2FMTQ%2FLEMpvI6uz7Ij%2FmSp4uLfnYkmP%2BwSBA0tI97%2Fs6d9xZWvadL9rEA7mYJYQTxdSMeD1%2BtYRJLsoKO%2Bjo5Z5mhyUUQWJmosNg9zpQVrVzwQ9%2FQuohq&X-Amz-Signature=6357440c9c5313fa38fc715fc788cc4a085223678ac8d1ec3ee6f80603e74fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=9eae4bcd2df8e80057ff67113ec4fe4f85496033adfb54ccbcf593e49c2090f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=6e4df806c623588ee773e20609603a07049431062b5b53193255fa8425e5bbd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=39089d9453228814a36f97e4b6c9c2991690741b4088e742070ce136d093cab6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=2fcc6cbb77e85ec8f9742be460690c9dd2c3cc14c8c3052c139160a4a391ffd7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=678422d5763d47528adcc19ebd31dd640c47e54d08b859559696a4146ad73d7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=9c41a46d8ab4513d89852e82eb959b5f7d4124026a251bbf6519717f41c6bd0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=0b4862e0b4fba036ef208cea11808a73ca7737c90ee3cb18127c85c3be108761&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=12d1e16bd1312470f46759cab4f2921ad317bbc0cc48b9b86783660a96f8a85f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T53SOLML%2F20260526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260526T033549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIAXuZlFhQSWX%2FdwmPs2g40MbqSzXy4j5uzsXW2lRMyAiAViHqvmnd5%2FeqkRR99w8Ls7GMO6M7LsCoE822haHGoDCr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMIDk69v%2BRXNxLG68tKtwDgy3uZ8Tl%2BzAjG8MJGw%2BHEB1%2BTaAoyWo%2FRUIszTEr%2F1XXtReScyQBQh6D5Tm3teGu2aG%2F3r%2FqPxePmSjcVabMacF8TGMX7frhZ%2Bd7AemwI3MrULeneryiwqXvdkYIvTA83wjGKbN7OQ78WIjmtZusaHIiqx1Ti4665uIkg%2FPhpQ7domVzu3WGilF3DtrjPbDtIM3S5nMT0aJasa3Ys8%2F7JEo99jJMA%2BK8ixyJB9h3Lnu1zc6xZho%2FUgh%2FIeqQSEFfbScbeQt9EqMhi8jFV20vhTDY91flJQEQ5tPUxxMD2NDEpAR8jwfX6%2BkIFZXBdMY0GESQSdJZhUS1WDR7PKflOt7qmUGMt%2B4Zr%2BRJJrGu2c7wDoObKx5LkK0Ld1qKlIxWlzhtPdACZ%2FMQmtOKKf%2B9mG9NnTsQbGVyriteT5qMVmHycWvkBJ3jqCI56sl6TrfZKFEnCG0jFRwiJD31RGZvz8VKX3307Izsq8vOkCS6YlmdhWU0R%2BcmG%2B4COa73x7evjFryjh6W4eqf6xVGaeXEb8FQxbI3PK9tYucrPcTsG3gJQuQfwyfJBrpK1oWFxFAIfexQ4GIz4kkxM%2Fd4MYImWl57DKI14nU6cOI%2B1swbSK97tQSGwyuY6xRaSN8wpvfT0AY6pgHwLxWozYzy5OrusIThG7E5MSRXqEY21OyOxQxn60ZmpW3gLOdfXqdbOhjAkwrMfYo3%2BI5TZp4CgQMHO1uAgeDd1B5rCRpsxe0xAnKCTNPbxRRaP2XmKPtx%2FyizQ2Pra273e5cFNYZEe1wsC5PVZURrZPLOGF%2FwK31JvaT6UNL2kXu2Lo7ICDvPQazWgNpie0DYWXWGckEsI%2FTJU3bS6cK5SStUAZ9v&X-Amz-Signature=c801a61ed7558786963cf18b3fab8ce4ee232d2bb763231c4d82b00a1774e920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
