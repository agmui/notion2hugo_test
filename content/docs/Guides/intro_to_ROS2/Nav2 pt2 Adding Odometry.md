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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=0485c47173703c8af3beb26e71db45f3f06978446a274abe73955691b8df6b00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=2c45589a4fcea9140c5a15682e174045ee2deb1b924b5ffc7696bac7a9aa8f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=45b17b3fb65598c7de99a630d28bfaa6a23d5167539cb2a054b7fa959def4354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=3d7bd63889edb0ee740dd62918594f5ab3d9cb9567ab8ed1c5d8627f2a5f6378&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=67deccce31b72d2becfbb022e6b5390dcf60c26d68ad28647573b080441aa4b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=1662042a8d5bcc5a5d28a506fceced7fc2f63bf42fb0214176e1b01513289d16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=7fcb41363c8e6a62e75af14ce95449b41189357e8e4cf87bec48451e5ce10d50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=6c6795cfa0ed0bdef787fb7090f5b2583d53cfdcd962e3763c53fe51b69c8c97&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=a1eb40fda0c7bc3c7c4b7d32f2870fae27cd844562ad163b9442d045ca3d011a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2UJWD6P%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDXTAUjOphGUrWzcYzAlPrMarOKspWOId3dFAUwwLwDfAIgRNs6s2r1TupfATmpGbzW4Q1Z2sk7ay8166MXEdkbhMAqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAWrYH5yTSltFACRLircA96YzLMN4yxjFO9p%2FqfUCA%2FVy0KLfdLaEUMRlK9U2HUhvPuzWL%2FYXk4dcQK%2BFiOOVUZ3gb8w13G6r3LQf6AxaN5z48x%2BJ56VyR4dHMCJFZP69vh843gV69tpNOCsqZHltIPOH9nJgmIszQFnrr6OW17sTQUJVvIDzpn6W%2B7xykRkbAgu4P5ZXhRkMJVZAu4W%2BNrXFAP4wPE6SRU9f7bSFV3R3kLiCkvkQWe9RLlL747PnMkoY8p63g6TGwt9Ug4pWQDPMxnbsNkxJ76VBXWTteESwPIVa2PRnqaImPuBHb3Ts2tRrCzXjIEL3EOyf3qMJu4v%2Bp7PlcQBe2CexrQkoU54fmAw5yAOr77d7tcdf4hzuYjDxyLef5M1ZCDZ7wYY6R2JH8%2FY5CV%2FdiWoO7lyaXL312POZmDNRmbH3sT3ov0tFJa8pEVYxT0qNIvTB5pJNpRUQ2U0GlT0hp1hvbnxIdFlf837QrGu%2FE22vPyytQttL4lhToOf%2F76K1tcD2CgJOtoVfO1dRALXFT7Gt7lj%2BiQAEoQVS8cnsHNpDnYRKmvfihDZZXjcOrBRvNO5df6a4U9iuDNlXJCjd06G6IIxWkqV6cmrr8srzoDch3PVGuJrJKzz14AsW0XBnjxIMIO4rsQGOqUBSiw9vNzYpeDZBAVsvk4Omc2F2xsonkoWYoVt0ds%2BA4BgeEviaws1F%2Bruh2%2FKc2jaOK1N0beB5P6Ixkj1FVdlHWG4Tr%2Bp9n1rfObYg3hvETGXyOxr0Xl9lh19msNCi0gIzHV6XONSOHnFDedEAm33cG%2FtO9zbGilFODHnF9p8Nd79lPk9jM%2FCx98hzGBvNKgiQH2ac457rpmqEEYdAvvNrZytwbr1&X-Amz-Signature=735a22e42ae028fb0f935d9fce29a2d4cddf82dd572f834d30ec76c724d7788c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3YPIM3I%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmgJoR0T6QHrblzH8rY35f%2FGxHJ7PoNvqb3kKq2trn1AiEAyTr0pZhzjVs8l6m5x1LOyxWMvXFUjkRIqOZ%2B3VchbzkqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL57ff9AWRuJYaPfIyrcAzG7zTgvfaclaCmeRe27JQMFjHgm5mITeOGur8ZiFkbw7UbgPbTu%2B9rxIwnsHBKzoufi8dfT2McUbgIDVvBBygKGdlydP1UtAfpw%2FNeWUBRVbUkoRCBwPZmscJ6NltqS%2BPKtx5Q48WGwP64vwLrIZY3t0TnS3q4jyu%2F%2FdQlzCc5xyL7sF9h4bfOqQbRQpF6WcFRCG4cE0hkVLIGl0t5vV9TjuiW8u5blgDCZ6a5zLRZ9ErI8lD88Gn17TVCRzhWeaw6LZMhLCoT4gnYynPvqb1VZzMEiq74qrTPKK7voVBQ8Vt4Up7cxpfB4SOGCXmbIlofXLalgnv7GV1RYWfdc%2BOPuXRQRyJh14SxCHjRSDdobBoNJZioLnwThX8pd2PFJJg4r26%2FrsyoWygv4Yc%2FOeZnEhUDl6TzjQKXNV5uKfYTYCm9rJJ6OcbIuijp0smvCp8kRTD7n38C7WXgKh6mcHlF6MCmQ2Y%2F03EigqiUartdaIPWYweOpV%2FLGYCQd6aPi7Nmy8MbJ%2BxeoSZotTzZtvGLFjNMXhMcr3gBk6tba8Dgq0OH1XXpmHxHl4JKA%2BM3Ti8ap6tCPV6318CNp55AdrKIlhm7kIaqdtwR6YGd7pSphqpg%2FSGj9h0Ju77%2FbMJG4rsQGOqUBsgvS2lQumujwEU2mr75liz%2F0Zt%2Bozv5L3PRPWd4x5Ru1M1PcY0gBkKqEJ55T8CFScn1bZ4bdBqhqNYdXiKvP7e1Gr2%2BliaJrro%2Fs87Ge%2Bs5G8YU%2F0r9BZxID5zRoXDz0lYVenyL8yeFz4sVIi360sxcs4eiiN%2BmlJb4SkuCBzAWz3rOQKXXZJloM1iQhsNSoszaDf5N3Q4%2Fllwxcna63qtXroenP&X-Amz-Signature=0573c8acb70bc1e7eb4d7579297dfe3e161fd4cb655c73f98105da1efc371c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=a5a82e72d9f3eddd2f76ed905e6116cfd42a181f81436b29606fde40624e106b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=d4d2bbdb9c064598cea52b386a10824c56f0b8f652d4632199265953cc669fc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=29cd84b00b06d675e7fe5a9bee3f8425556573431a8d2166ae3fa6c6d8d9f636&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=5e8ae8edbd41cab319df84773233818cb50f167f20c60a36297684a46c578319&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=727a518dc55f3bb64efc4f7c09b2bb75e1a37a86141299b11a59f96fc2598baf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=b09216d71dc1e78c8d3dedb4db42846cd52ba7c8344ebab020879aa701c12234&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=8be3d21eef1111697d25e49ff207fec401249d0b0c18c886419cf9772531e06a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMMX7N2%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAknFo1aA4oPE8Ky70IhdO2Tmg4j9RMUFVmp%2FyM0OfWpAiBVHpMnQ8p6%2B2nIUWJzmQhViGgYaY8PXJ%2BLwEsXg%2FR3OSqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMrszeR2pB1Ve1cRlHKtwDUOH6QlQTqbKkWVnO8LSV5vtXGSHsUo5E7kxgRLEXqkd02LozY9teCfHdqGADDA7zHpobzMkKjMjYhmMmzeCb8UTYw0rVljzuQfRH5w5q%2FdQRwGXo00JnLm1ulIVhp3xJW0KwQ%2B0qx83W0bGgF%2Bj2o0XcxKnmptme1vaZWkAzwLL%2B7QAQwZxh4Agd1Wu4PDdXFx83gOinte6QwB008S1HuobMR%2FKHwhpLJ5vlaVlFDiLLqwT3q0ssInAnQb2ltD16Wcuo446LIhaGLJrLRQgkiVKWg5TMChWXkaHGdKf3xHYMEggmoxj3sxAnuJNj8jSSf0INv6hfxY3xGV1tmQdE%2Foo4ylvEPETlgQEguDE5B36MY%2FDeRPV7BwXiJbajzXEXUhIha9vk1LMnpT43Z0bKijG9DiA5O%2F6NIZVj%2FJn6DxgKBAqufIKi1bpaTwyr%2BYbk6F6DzhAQzU%2FoAqTHqB5Rwf%2B62FAfqJbaPwCjTNMlyeW7ZMNGM8behtxIu3NYwOgKIgOQcQvzAj5jnrzKTuUJMg1bzFrmECL8AVZPrV6rJJADNZZwQJSoZhrPsElodYhgep5tjjsrtnmXiFThsYsh3Pv4NAjZrq77WkTAjGBXJFaL%2BSeE%2F0jUWqIq7TQw%2BreuxAY6pgHOwCYKCijjbTOgz1eGI9qqaWvGAeuegJ6Qvp8RM1BEUkguc6Ye7G0zWiI83XIhslraIiG0Hk14J2g3qB6EtJFCf9Kp%2Fc0rCK6TXchR1VbcWS3a0qPAwP3uBXlWz%2FLySyIQNi4%2BmBvtuERinCd%2F%2BZdaBDi0rlbno0Sk3n%2FzWXbl0eIrYeZ6plHrnxqOY6aKQAE66aLQx4VuOwEFXd%2Bd%2BlSUHdzwROAI&X-Amz-Signature=4d96f2c467dd486e1a66fae945f03432b90afd2e7f9292cc3e01d73d90456e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
