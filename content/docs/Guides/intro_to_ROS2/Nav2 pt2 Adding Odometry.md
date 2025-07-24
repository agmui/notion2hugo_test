---
sys:
  pageId: "1d0da3bc-6297-8055-9385-db7bc24ebc4a"
  createdTime: "2025-04-09T14:32:00.000Z"
  lastEditedTime: "2025-07-24T10:34:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 pt2 Adding Odometry.md"
title: "Nav2 pt2 Adding Odometry"
date: "2025-07-24T10:34:00.000Z"
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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=999fefca5f3cefa7e585aef97fbab78f03355283949b549f2fa571dc7fbf71b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=6a55d74df9547f66d235122e635c58605563e77ab885eb8fae86824ebfec1f39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=a13f5f3bb9f3cee4a2a10f59894201c1bbbe76b2bf4059bb4c3ca4cf8e2170cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

First we need to **publish** to topic `/joint_states` so I will copy the example publisher code from the[ Publisher and Subscriber guide](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/):

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=fa35e86c40b52ccadab789ee2499a1ae9d07e6d2bfd3041d2a5ffcd0f138e49c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=86441e143a03f14421a2973fa7d2c6d87bc6ebd681a7dfdbbe977560d44ff1cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=4e2dbe8ac32d3f13bfb4269955ad1a467bf4bd9cfc9333374658a2c29d487912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=d2dbaafaf8e0e7a1206a407cbbc9f43a742f456a2e9d99d270e9e66c495d5123&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=4549433a21112a48adff566e4846e9e3b8c458abba4d477de7fdd3b7b42d364d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=6b1885ceb623be44059f4a370d232cfd33107e9225dd14ee3d713ceff2037975&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSGZ2WBE%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T221003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCICAk9y%2Fr4QyPCeEHuko1ma0uRAIXHx1SHymeW14RiLiJAiEA287ZlVi8WX5bgL2OhqfcifH9yheJ5z4gHiIZN9d4XOcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDDS1RkFp7yY4bS5bjyrcAzoGwqLegX8C0xLDg3omc1C%2BjRH1VPPvrO%2BB63qJ%2B7riDXYJ5rR89sw%2FMBppeQ8hY8h63qkCcbuzJD2O4wsdDUobxC6q%2BKvf2Igr%2FJuH6Wur7CPFLDZex9ms331uStS6Tncs6NlKd%2FssRXgRW7fP5tUwZW%2F2tcphgaY%2BbqEYQ47fzCBTT9x%2FU302bQrIbgBCndS0AOCIGIiE6oVe7sxZcAbXzaOrjYWR2Deh2eHAiFSaqhQD26NrCtWYG%2BGrEFF17FWZdsMYOcON83kWSAZjCzL0VPwzONEXpK1Zqdx2A4IOIooyLaNXGJHGPGb1iEMVvQ1Waqj32TYq5NP8dtOqyBZsFQUfoB79F0fysTcbhcIUxfTrvykQ%2B%2FgMLPnW8UeL4hHjGK56cGEdQ9qxPgbVQG%2BsHXPF83A6G78CxpRodOR9t%2B20B2McFAbMTKq%2BH%2FxGL1%2BoWQUyZ7C9Ug6fKwZCl8yqL%2FBQhd10FtLkcSZMTWWG7%2B%2F04WmGwfHy9om7bFGfAxVgG8xgntkovNTHqCxjrcJoKH0OA40UmbVL%2F68OaVksErxag2S%2BUyr8wpMkIM29HtiPpZxOAO8uVgC3slMHNuSmtX80LynhJpIJL5FgFXnvweQP%2B%2F0ZhX4W0LiHMIbYisQGOqUBIH4tKPwBXrE3rvwmRdE16TbQVn1d6u7knI3Li%2BIXJ8ESWalYjlUYFXAe22wkFlzlhtwW%2FOjM0BepEw8Ju5DiCjyC0j5ri5vc4MpXparWCdj8MU0ZextaihfapNJxa1uwOGm3dq3IWTowl%2FtS0lFN%2B1RHiZUSrCJe5Sc8Z5k7KqrTb1oMqPq%2FX5khu9IJ67ktmkrNJ1QFKI08b63jRlkrUypK3%2BT4&X-Amz-Signature=b8523744234df0d98b72367560bd1e93f9a0fe6ef13aa2cce74cc3220ede8b2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=339816b4672df5dcbee35503ed46333c0fe91ed85da831bfe51021ed7861a2f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIFNBIZQ%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCLmrLWjgmb79P9CZoboUaBYxyl2am7M9kQLUfGO2EKxQIgKBodbDWGgQStRRBuUJdfxYwkXH%2B4u9deg3jRCQshOwMq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIQSaJA7l0JLtotWHCrcA5612HL1uIxewtCy24fF%2FGUiwdr634vdRq6Y1%2B%2BjflZ9kfrFRJ7O%2BJameOmqoyd3yu9L2%2B9HOJ%2Fn5Htt5WxwtkWy21YRonvAztlSsuot3ZCW29VOYpUj5Sfj4yzbBs9SEQO%2Bq1e%2BD544L1fIWR9o6h4uRPC%2Fu9tkmFlZgIk%2FXqxnayvgiLM6PMaLuS570GI%2FxWZRvQwxOq%2FXwU%2BK9uWxapS6IPpkfvxebVJJ7TT%2Fsqyxw2ACBzuDpV8pGgG25%2FRnGvFG1MODB0LYjBrWBZ3yOzEtHph9UsphpczXBdzIbJfwN7QQx0ZoTNaiGau8kjIhkxCuHF%2FDVOO52AhdW7zHMS2huFoo5Y7ntqey29jvXgagvSF%2BvhQkPGcEHg7vND1%2F%2BKY9aNiI6uM9acPqN6R13Isja9paKc0sPaWxGc%2BAaJRkwYs2dk2TwfVLiZYFggu6ginBmFXVFPxjGqlaCIrJpjV1%2BXB0QtW2Is10uPByyb9GB5vbcAWYIDVvgGw0bYRiBAPj5xPUxe%2FeJRwzfideOMOIQkVOHluj%2FvOKADU%2Bprg5OCRCiFQDkvRmiJkN8i9pXM693t9uf%2FQWvP7OmCfdWhBKuAFNysS35EPc4FkT5BOeIv8OwWFQgulN1Qr5MJXYisQGOqUBjyOhe%2BmtR3Kg4PILTUoRpGEYI6jJFH%2FJNAo%2FUFcw26mrU3cD7p2uMVThuCWAwpKnjWZpIMA4%2BvvkZPXgHznKJ3U2u%2FtOk3RLZUU%2F8PP14xLtJa6d3VW32vpzkPsUuM%2FTtw3tQqBQUB0GTml3wXyVXTGh%2FQxFj3zXoR%2BE11BmOF%2Fkq3kSpPUqKFOXNhPNcKazKFPWAfduXia8%2BH2st%2BbRI7quXGp1&X-Amz-Signature=59fe118e5409a96136e6ecc9dc24051bb4f0db76f93d3062b358cd0519f4b77c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXP4MB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCRcJlQaFrwZcT5ZDEjykG%2F5OxAJMuTJ63AlFCdxFrBUwIgH2gKsWyu0Hto1mYzOfXki1O63oWVScY1uiGd6R1CwZQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxC3Hkr0JQDfyZEqSrcAwyg4p4BAF9K1xVuQNaRvMwAWSCk9F5tG2zLzdodFry%2BBQqP0qsgUY9BX%2FeqlyVULayaiOqnuUWKBU3nyHHLRplDpmXSU5Ebtocjp9ei%2B%2Bzp%2BLPhBjbWyYOAQz9aZhqzsBEk53koJ%2F8I9D8rfceEgPwF%2FMaHeWuq%2BSVFJtD7tonixwAQW77pvv7HQTehYIxfPasLxgWQGpNFO6Y65Pra7BLeaMl9so6yxW%2Bn%2FiNdXoNV5rJ13P9H6PlLCenl4oCJhpm5jR%2BILZwZsqrPBjsaNnjtypiCA3mKW8MTRn9l7JAMz5yn38pbJ2FpudrwvNSsUG2x6WJ4wU9ma9KxfekV%2B8yIyPmZ2gBuJsEGhkjrwcHNhGokJDZuMex%2F%2FiZxxkdvGuXeCImDY48VToe75P92p%2FjIN3i68TptlvwUz20z9hMj%2BSgEpImkPsZqohL5Rsl6fYLmUw4Qsu8RFAH1jHPNG%2BY9QqOJ%2Fp1HpnwOIxu59lILeqRH1TRK3Hq9TJbvxoxrPHPJYpVWJSXjucnN6oktaYfyPN77SycP%2B%2BaKU8Qmk2KIv9KCndsXvPSWjVJCRqA5X%2FOpxH2agbRfm%2FrnYB92IKTjzBLWEURVcz1YimHEkIlecGfv3Mt0uDWlMbgrMJbYisQGOqUBM8ljxpB5jCQkS0kbjylsqCtQGoXvLEkV9ihIMTjTDD1%2FBqzOrXrcSK%2FycmvjLtLUYK%2BLm9oh2C81NaxzIw6iz0FLXNz7dvp9k4%2FghJnpt4WgCwHDu5QQ600C1TvieBgRhCw7Jqs6BGWv8jbTd%2B7hkADaGPzf0dn9wNB0GNWcnW44LS%2BgfPG4L7qqpU5pHauBhtXZI0UoU8uliCdg2XuK0jA%2BMusZ&X-Amz-Signature=f407022f1993b7785e5dcfb1b98bbbf2a787cac2c6ab36caf560f9c572cf1a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXP4MB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCRcJlQaFrwZcT5ZDEjykG%2F5OxAJMuTJ63AlFCdxFrBUwIgH2gKsWyu0Hto1mYzOfXki1O63oWVScY1uiGd6R1CwZQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxC3Hkr0JQDfyZEqSrcAwyg4p4BAF9K1xVuQNaRvMwAWSCk9F5tG2zLzdodFry%2BBQqP0qsgUY9BX%2FeqlyVULayaiOqnuUWKBU3nyHHLRplDpmXSU5Ebtocjp9ei%2B%2Bzp%2BLPhBjbWyYOAQz9aZhqzsBEk53koJ%2F8I9D8rfceEgPwF%2FMaHeWuq%2BSVFJtD7tonixwAQW77pvv7HQTehYIxfPasLxgWQGpNFO6Y65Pra7BLeaMl9so6yxW%2Bn%2FiNdXoNV5rJ13P9H6PlLCenl4oCJhpm5jR%2BILZwZsqrPBjsaNnjtypiCA3mKW8MTRn9l7JAMz5yn38pbJ2FpudrwvNSsUG2x6WJ4wU9ma9KxfekV%2B8yIyPmZ2gBuJsEGhkjrwcHNhGokJDZuMex%2F%2FiZxxkdvGuXeCImDY48VToe75P92p%2FjIN3i68TptlvwUz20z9hMj%2BSgEpImkPsZqohL5Rsl6fYLmUw4Qsu8RFAH1jHPNG%2BY9QqOJ%2Fp1HpnwOIxu59lILeqRH1TRK3Hq9TJbvxoxrPHPJYpVWJSXjucnN6oktaYfyPN77SycP%2B%2BaKU8Qmk2KIv9KCndsXvPSWjVJCRqA5X%2FOpxH2agbRfm%2FrnYB92IKTjzBLWEURVcz1YimHEkIlecGfv3Mt0uDWlMbgrMJbYisQGOqUBM8ljxpB5jCQkS0kbjylsqCtQGoXvLEkV9ihIMTjTDD1%2FBqzOrXrcSK%2FycmvjLtLUYK%2BLm9oh2C81NaxzIw6iz0FLXNz7dvp9k4%2FghJnpt4WgCwHDu5QQ600C1TvieBgRhCw7Jqs6BGWv8jbTd%2B7hkADaGPzf0dn9wNB0GNWcnW44LS%2BgfPG4L7qqpU5pHauBhtXZI0UoU8uliCdg2XuK0jA%2BMusZ&X-Amz-Signature=121fbf30cf3838de52ce555c01211223ee0f111aad56202b554260cc2b86f9d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXP4MB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCRcJlQaFrwZcT5ZDEjykG%2F5OxAJMuTJ63AlFCdxFrBUwIgH2gKsWyu0Hto1mYzOfXki1O63oWVScY1uiGd6R1CwZQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxC3Hkr0JQDfyZEqSrcAwyg4p4BAF9K1xVuQNaRvMwAWSCk9F5tG2zLzdodFry%2BBQqP0qsgUY9BX%2FeqlyVULayaiOqnuUWKBU3nyHHLRplDpmXSU5Ebtocjp9ei%2B%2Bzp%2BLPhBjbWyYOAQz9aZhqzsBEk53koJ%2F8I9D8rfceEgPwF%2FMaHeWuq%2BSVFJtD7tonixwAQW77pvv7HQTehYIxfPasLxgWQGpNFO6Y65Pra7BLeaMl9so6yxW%2Bn%2FiNdXoNV5rJ13P9H6PlLCenl4oCJhpm5jR%2BILZwZsqrPBjsaNnjtypiCA3mKW8MTRn9l7JAMz5yn38pbJ2FpudrwvNSsUG2x6WJ4wU9ma9KxfekV%2B8yIyPmZ2gBuJsEGhkjrwcHNhGokJDZuMex%2F%2FiZxxkdvGuXeCImDY48VToe75P92p%2FjIN3i68TptlvwUz20z9hMj%2BSgEpImkPsZqohL5Rsl6fYLmUw4Qsu8RFAH1jHPNG%2BY9QqOJ%2Fp1HpnwOIxu59lILeqRH1TRK3Hq9TJbvxoxrPHPJYpVWJSXjucnN6oktaYfyPN77SycP%2B%2BaKU8Qmk2KIv9KCndsXvPSWjVJCRqA5X%2FOpxH2agbRfm%2FrnYB92IKTjzBLWEURVcz1YimHEkIlecGfv3Mt0uDWlMbgrMJbYisQGOqUBM8ljxpB5jCQkS0kbjylsqCtQGoXvLEkV9ihIMTjTDD1%2FBqzOrXrcSK%2FycmvjLtLUYK%2BLm9oh2C81NaxzIw6iz0FLXNz7dvp9k4%2FghJnpt4WgCwHDu5QQ600C1TvieBgRhCw7Jqs6BGWv8jbTd%2B7hkADaGPzf0dn9wNB0GNWcnW44LS%2BgfPG4L7qqpU5pHauBhtXZI0UoU8uliCdg2XuK0jA%2BMusZ&X-Amz-Signature=29b1dd2dcad2161bbdd60395ef5b6d1cf145e005e71747ab14ea36ac8ea4ea31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4416885c-e5f1-401a-bcf3-7af14d76685c/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXP4MB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCRcJlQaFrwZcT5ZDEjykG%2F5OxAJMuTJ63AlFCdxFrBUwIgH2gKsWyu0Hto1mYzOfXki1O63oWVScY1uiGd6R1CwZQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxC3Hkr0JQDfyZEqSrcAwyg4p4BAF9K1xVuQNaRvMwAWSCk9F5tG2zLzdodFry%2BBQqP0qsgUY9BX%2FeqlyVULayaiOqnuUWKBU3nyHHLRplDpmXSU5Ebtocjp9ei%2B%2Bzp%2BLPhBjbWyYOAQz9aZhqzsBEk53koJ%2F8I9D8rfceEgPwF%2FMaHeWuq%2BSVFJtD7tonixwAQW77pvv7HQTehYIxfPasLxgWQGpNFO6Y65Pra7BLeaMl9so6yxW%2Bn%2FiNdXoNV5rJ13P9H6PlLCenl4oCJhpm5jR%2BILZwZsqrPBjsaNnjtypiCA3mKW8MTRn9l7JAMz5yn38pbJ2FpudrwvNSsUG2x6WJ4wU9ma9KxfekV%2B8yIyPmZ2gBuJsEGhkjrwcHNhGokJDZuMex%2F%2FiZxxkdvGuXeCImDY48VToe75P92p%2FjIN3i68TptlvwUz20z9hMj%2BSgEpImkPsZqohL5Rsl6fYLmUw4Qsu8RFAH1jHPNG%2BY9QqOJ%2Fp1HpnwOIxu59lILeqRH1TRK3Hq9TJbvxoxrPHPJYpVWJSXjucnN6oktaYfyPN77SycP%2B%2BaKU8Qmk2KIv9KCndsXvPSWjVJCRqA5X%2FOpxH2agbRfm%2FrnYB92IKTjzBLWEURVcz1YimHEkIlecGfv3Mt0uDWlMbgrMJbYisQGOqUBM8ljxpB5jCQkS0kbjylsqCtQGoXvLEkV9ihIMTjTDD1%2FBqzOrXrcSK%2FycmvjLtLUYK%2BLm9oh2C81NaxzIw6iz0FLXNz7dvp9k4%2FghJnpt4WgCwHDu5QQ600C1TvieBgRhCw7Jqs6BGWv8jbTd%2B7hkADaGPzf0dn9wNB0GNWcnW44LS%2BgfPG4L7qqpU5pHauBhtXZI0UoU8uliCdg2XuK0jA%2BMusZ&X-Amz-Signature=babc3d48c6466a211235646522757f03bc97d857da7821182aaf56c78d5d7c6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXP4MB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCRcJlQaFrwZcT5ZDEjykG%2F5OxAJMuTJ63AlFCdxFrBUwIgH2gKsWyu0Hto1mYzOfXki1O63oWVScY1uiGd6R1CwZQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxC3Hkr0JQDfyZEqSrcAwyg4p4BAF9K1xVuQNaRvMwAWSCk9F5tG2zLzdodFry%2BBQqP0qsgUY9BX%2FeqlyVULayaiOqnuUWKBU3nyHHLRplDpmXSU5Ebtocjp9ei%2B%2Bzp%2BLPhBjbWyYOAQz9aZhqzsBEk53koJ%2F8I9D8rfceEgPwF%2FMaHeWuq%2BSVFJtD7tonixwAQW77pvv7HQTehYIxfPasLxgWQGpNFO6Y65Pra7BLeaMl9so6yxW%2Bn%2FiNdXoNV5rJ13P9H6PlLCenl4oCJhpm5jR%2BILZwZsqrPBjsaNnjtypiCA3mKW8MTRn9l7JAMz5yn38pbJ2FpudrwvNSsUG2x6WJ4wU9ma9KxfekV%2B8yIyPmZ2gBuJsEGhkjrwcHNhGokJDZuMex%2F%2FiZxxkdvGuXeCImDY48VToe75P92p%2FjIN3i68TptlvwUz20z9hMj%2BSgEpImkPsZqohL5Rsl6fYLmUw4Qsu8RFAH1jHPNG%2BY9QqOJ%2Fp1HpnwOIxu59lILeqRH1TRK3Hq9TJbvxoxrPHPJYpVWJSXjucnN6oktaYfyPN77SycP%2B%2BaKU8Qmk2KIv9KCndsXvPSWjVJCRqA5X%2FOpxH2agbRfm%2FrnYB92IKTjzBLWEURVcz1YimHEkIlecGfv3Mt0uDWlMbgrMJbYisQGOqUBM8ljxpB5jCQkS0kbjylsqCtQGoXvLEkV9ihIMTjTDD1%2FBqzOrXrcSK%2FycmvjLtLUYK%2BLm9oh2C81NaxzIw6iz0FLXNz7dvp9k4%2FghJnpt4WgCwHDu5QQ600C1TvieBgRhCw7Jqs6BGWv8jbTd%2B7hkADaGPzf0dn9wNB0GNWcnW44LS%2BgfPG4L7qqpU5pHauBhtXZI0UoU8uliCdg2XuK0jA%2BMusZ&X-Amz-Signature=fb075d68189a6a5d0f895ad9d08a5acd4e58d229d49752772fd27f1c29e1e967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BXP4MB2%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T220948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJHMEUCIQCRcJlQaFrwZcT5ZDEjykG%2F5OxAJMuTJ63AlFCdxFrBUwIgH2gKsWyu0Hto1mYzOfXki1O63oWVScY1uiGd6R1CwZQq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOxC3Hkr0JQDfyZEqSrcAwyg4p4BAF9K1xVuQNaRvMwAWSCk9F5tG2zLzdodFry%2BBQqP0qsgUY9BX%2FeqlyVULayaiOqnuUWKBU3nyHHLRplDpmXSU5Ebtocjp9ei%2B%2Bzp%2BLPhBjbWyYOAQz9aZhqzsBEk53koJ%2F8I9D8rfceEgPwF%2FMaHeWuq%2BSVFJtD7tonixwAQW77pvv7HQTehYIxfPasLxgWQGpNFO6Y65Pra7BLeaMl9so6yxW%2Bn%2FiNdXoNV5rJ13P9H6PlLCenl4oCJhpm5jR%2BILZwZsqrPBjsaNnjtypiCA3mKW8MTRn9l7JAMz5yn38pbJ2FpudrwvNSsUG2x6WJ4wU9ma9KxfekV%2B8yIyPmZ2gBuJsEGhkjrwcHNhGokJDZuMex%2F%2FiZxxkdvGuXeCImDY48VToe75P92p%2FjIN3i68TptlvwUz20z9hMj%2BSgEpImkPsZqohL5Rsl6fYLmUw4Qsu8RFAH1jHPNG%2BY9QqOJ%2Fp1HpnwOIxu59lILeqRH1TRK3Hq9TJbvxoxrPHPJYpVWJSXjucnN6oktaYfyPN77SycP%2B%2BaKU8Qmk2KIv9KCndsXvPSWjVJCRqA5X%2FOpxH2agbRfm%2FrnYB92IKTjzBLWEURVcz1YimHEkIlecGfv3Mt0uDWlMbgrMJbYisQGOqUBM8ljxpB5jCQkS0kbjylsqCtQGoXvLEkV9ihIMTjTDD1%2FBqzOrXrcSK%2FycmvjLtLUYK%2BLm9oh2C81NaxzIw6iz0FLXNz7dvp9k4%2FghJnpt4WgCwHDu5QQ600C1TvieBgRhCw7Jqs6BGWv8jbTd%2B7hkADaGPzf0dn9wNB0GNWcnW44LS%2BgfPG4L7qqpU5pHauBhtXZI0UoU8uliCdg2XuK0jA%2BMusZ&X-Amz-Signature=6be1838054152ce4279d1340cf237636834ca223df78ee8e097dfcd27b198b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
