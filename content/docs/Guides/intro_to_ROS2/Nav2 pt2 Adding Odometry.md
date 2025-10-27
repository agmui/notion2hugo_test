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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=fe9ca8dd6d09c704f9cffc71eb7a2b6ea0afc9fe06ba8c99744b78149c012428&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=d366c01eeb32f92ffa6518b7f832fe0c664a16253cf172293b5313fe18ee6aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=1f472cfd941c7598b97c830e8bb9b05281ce1efaea4a3fef35b72f1e749e5650&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=b1c9ac60c54c8d7d84342fdbc090ac127d56333aab41e669f3753b575024375c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=54841ccb66e743f91c769afd16dc585152f75c15e91a419b535e19cc5563583a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=a8917468775bac845d4db301db90a97d85a88108bec97ddbc21906caa361a447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=925c850d80eed6559f458b0e8a8b75c897db8639992c7e832d613d09f9c97ed0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=0860ca6055839a4d8c8a8f80b655b48dd9e4cff47dc7c432eef2b8679b1bca59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=ffb9512b5dda94a907f6381bd93e4dadbf6561deea11cd9faedd191a01485aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
  <summary>{{< markdownify >}}why `odom => base_link`???{{< /markdownify >}}</summary>
  
This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)

 Will see it be used later when Nav2 performs path finding

</details>



### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U6EUTH3%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAaVGvJnuO3N4Z2ya0xdfsgCXQ%2FC4VDiHrkr%2FtfmnO9QIgfU%2BX9%2FeshcdrKqvL1HEKWw%2BuPpxHqH1ncTymR6dQMcYqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBDcm2aHseIxQIvuoircA4SH4cJiFGDmgX4J2SQMEP0XZ%2BXlivQyaAO0lkR%2BWC6NCEqUi8whOJaNPSDjVJR5F1VLsqY4Jhgtuj4J5x2s4j9uZ3NY54xdb0uEebkdO%2F0CLZ9ycl8Lbd0P0DHIoux%2BE1zAd3VzGJA7WXf%2FtJjWhei43gwMB3YcLjevsuX1X2sgGOWzDo7rdzcUfaJ%2F0MxQVQDaUfa4uXb8uJTdhKmb0oaAzmabR%2BfyeEakLFy69fSQxDuzjvA51VTM57l3zJ6wVv8zGPj9YvlaMZbAim8O6jYyC7UdnsaIwLc95tk88vngjdf8vfCx%2BoGuJK6VmB1dTocFFiM1z2KsjpxwHqs0pvu0DMSt%2F0oj3Ym7rDM0xDQEtq0iRadTk9nq09vUN5rIUKrFL%2BETzlQ4FuW%2FzJ%2BcraMhVStW6eg%2FtPYhLiGrk5cZ7DD8rxg2FVVlDtdwBOMJ%2BIS86gdMqztQKS1iDLTaDTTQuKgNEQ6pHUMSpXQWozgig1V2PlRMLWJz1oUADGMyMSLod6L7miACIiPlgwND1H6xY5CK1hBMvqN8A%2BObOWUY9zSDvixs3X7%2B4PIscs5vrVoQGt1zLY9nz8s5KrnszQLSPhhppZrQU2XcCgVKNjFuGMncFSGASmHeo4Y%2BMLyP%2B8cGOqUBDkDDHFToCEwEAbjper%2B7%2Fk%2BUcDmFV%2B1WMCzrDf3jor1vANPljS%2FJF51Vt6HsMQ8UWLgS59VSfhDdUfowJa1DddxfOQv%2Bwh6hA79SUBvxAhX8HTO95EP2r1WXn29USu2FwphcUODXm4YSOfU6LMkNL9Kl3LCUuVTI7Uj0%2FinQAMuewlLPe%2B66SL99MrIqEmqh9J1Ftu4KHcGvC0IckaZHWnkgVQuy&X-Amz-Signature=8d3d0cd34036fc0a03bbdde6e24033a9978a30073e14d4d7190b0611349d60d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
  <summary>{{< markdownify >}}Here is the Theory Converting wheel angles to x,y  {{< /markdownify >}}</summary>
  
[icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNTRQUDP%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLRw3rGtHvjn9H5mNJiU%2FLCglu3q5grlRhnCn2Rep1dgIgNveL%2FT0N5FCn3WrJR68YKKtZZdvrl86ySlBozb5MjLMqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJNNeMEf5C8gsn5EFyrcA0BUkDU9FDIBs%2BWoC94uqNzkoCfl0Ndc8%2FkWwHWjJXl6ttTB4PHCpXgchDve1ujbOJ9lm9SeYMJhJrTxSKoIcz%2BWEEJ2r5g2DkUMfTqmghrSVnrXftvurLbVUnb5eqIUSrgKQ81eP14nr3bflGbaldjRhYcnaHvf5BMB04FVpghiah9JxARyLr7IJIFjSvNlArqTpOMDiEbhPUsou%2Bgw3UDt%2BOnT0Ev61CXRlrCWYyKWNK6ZR%2F5slZBxag%2FktK8GRZd2qu593Wve2goMUvBFmSiRIqGRjroOgnk9RRrZ5mp%2BrKFfomDQCkCTcXURMRb28bRiq1q1ROjEL1Y6W%2B2TsxsKXhw3UdmcbnD4vZ6GfAJ%2F3QHUmRLlim2lFPd0FRxavplEG4vxL6Z%2F%2FQGlIafEkDdUyexOGiln5jknS%2FqVfUzQ8okCI5EZ%2BFyjMpTbYAPfXJqYMqn8sVMjfxNXywTHbI%2BO9ZQ7pZYbwB3OxOeeKJ1%2F70b%2Bj3hkwtAJRVi6cXg6SbMNb%2BJ9NhSAYSR4M2ZJBGq72LhK5WBHs8ePf%2FuVQcugepIVD92e7AjqcHbMpUXTWDL7WHsbRPU7qnWhQiQPPXphPOCmADLg%2BR2kbQOhiBWA81lwq33kNMCeJ%2FvAMI6P%2B8cGOqUBojT4H7DC8Px7PGIv7FwxebDPLNSFKXi6sPEFP%2FtNSOt%2BeZBQbDYQJ3%2F3cbKaIWWSRFFtY3xd9aYVQCZeM4AOMEuvSZoNxcFZRHiipCiuf5sRtI2pUVvWNZVjZYh4sml4UjUcsOLXRfgltrxOtbYA87n0%2FbKvYMGGABz%2BCbrvfdnD6xd2QcOG9Pb%2BPBVc8b7qbsCIP7SEVLxOEq4UkKzO7HguAv0k&X-Amz-Signature=ad0a374d960627d2d1cf8950563d0dea1c665e7707b68c3bbc80ff3d772faea3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=698a97e60afae788b3057d0b4b196eb8849f030b8dddfaf0eb88ef4f8821c0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=29a13ee78121bd9d8d04a4dba660be5bed54876e5facf7428ff91b6ce85c29e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=1bbf54b750eeb33d83e691c590dc4279da6c202c6cb840801842349ec098532a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=dd70ce5810414f1492a79141d8c11487c962f1146b8efcb33ae3c9d08bc14df5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=03639f2e3066de53bd18cefe77a65900d09e4f2fbb4f7d1d94765938d3395532&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=7974afaaae778f9377a7524758082cc8dba205278a85614497f87c3e85425913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=11c40983dd2a85c88bd9927e475dff14da3ddc2eec0ded470efe6d0d15dc07cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=5856d14096e284f9465c3c188c2be6fa79e2a2de1a70018009a606f1614019a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XWIG2N2%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA82Fc8d03Q7XUunc77T3N%2Febowu0oR3DSwdoMVs0Pe%2FAiEA0fthhYhVdznbTUs38uXWFSujllO%2F1bnHSG1xxbmPItAqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHIIU5uHGi2OTMXhSrcA5c3kfNnGXvzL6uiAYJFfcXdgHqbnf4Ik6EG9LY%2F6H3EVrvAAnQdY8t192VNT76v5goyjMb89OXFfUL0fq8rFGRJUbMT9EKBG9rLacTiANP7uRb8LgxCow5lTTkT5%2FsaiGwTZPILg88QRI0IgKC522LbBvtLhdKcHXZ%2BW%2BAMTuyVs5GkNHg5riwsxamC9hkU9IfV%2BtMaRzxgLMI4Jxcy%2Ba%2Fhh5XARy1FxJSRWX0BgIUsvlM9jbG70bpMfIOrVKkP%2BRvdZP1b1B%2BM0VRiJMsWiLUTvFtE1T2MOcz1BP4s5Ev0SZq5NqXEiUCCEAKh5XD89PxNxhIQEGZk9BVCWlxI6i%2BQDheqHnDfZyQSuhJbtSQiBcHVx0RDekaKsFno08ZH3FPZZNn4T%2FBzWoHazGymHwwsKZQqrRAyMSTEWi%2FCQyowMfk7yjAzN%2FgJPIU0su1lJI5ppxPGl%2Fp4L7zEyBd3jcg3t6%2BmmWeGVS1K6%2FtjCWNKkVdU60hzmEcF6BnLdFLluhvrTMtNu3dUSl34bSJbSKClt0WM93Kre9NfdUKbZvYFmrfIw%2FSCvkaXgGXQ1ON6X40jjDo%2FGip4fl%2BpZm%2FDEUVT6c6IOOEuNYaKOWdWz0FJK4bPQMCXY7rK8OuWMJCP%2B8cGOqUBmo%2BhCxRRUwB%2FQwLWSgURAQhqQsI9qm7Kspi%2BO1exAlVf%2BcygBle8OIaEzOEoS4jncOIe50X3LBIP%2F6wZ8Xqri0Cu154Kp2vngd1bszOV%2F0irKf9jLGYuOtx%2FZABE%2B7zpv761tv0dW8XLGbbPxdsxOcyPlRH3yYSUx%2F%2FP26DmrKXIyBP%2BHWfJjiHxzYHxsaIChnTTmWqCz%2BFZqjK6vj1P4WjF9Ew9&X-Amz-Signature=558fcc8002fc6f52f0c14a3dbf32513092be803964b1244fc5ec7b0eb0f72229&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
