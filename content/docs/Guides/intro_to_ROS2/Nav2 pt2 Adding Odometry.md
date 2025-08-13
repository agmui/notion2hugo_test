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

![rectanglecar.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1690c3a5-9461-461f-8698-52ffd5c91c76/rectanglecar.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=297ce29d965970955c662bfc419c163491c19ca9e49dca8a4f4813f45e465b2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/45033173-8743-4cca-8e71-7dc186efb12b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=5b694dc8f0e5c622556e5e5720863b7dd26b9d23b4d24db74d1dc0e6acdf53d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e8398c10-b86c-43a5-996a-6f43c08c516b/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=aea7cf8930b311c9a46f668fbb1b8058c177c215a106b875b6147797ee085524&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9d5b61d2-d2fc-47e8-8942-31a5e2e94f59/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=0db045afb9f58a17bf387e84303bd8b52d567a65156279c9a93775bca43b2ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/e1e25606-85a0-4bac-acdb-5ed154eb9249/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181342Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=2206169b96412783291ac6720b1d837b59cddd9945403c1f4e51325cbd0c5aed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0583ee48-50bd-4bb9-b2d7-5e73bb9eea5d/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=d8e29f5115bf02fdc0512c4d9d7338e8472f07716203baad8b6e7626f9418548&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

If the printout matches the position you move the wheels then the wheel position has successfully been moved into ROS. 🎉

 

Lets update our launch file add this into our current system

## New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/ae9d6be3-1842-47dd-b0ae-38996310c108/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=9de9a0aaf2c6b86c240cee3784270e864c622a1e434ad25657a0007fd435599f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/553bc841-b6a0-4537-96b5-8cbe64552f99/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=1c59c8321e25b7716358c8dfb6a3df6ed90e14347f3080ea47852f7588cdd395&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/dfc11eba-872d-4b8c-8753-9b9e4685f133/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=fbabf3623eb363bd0d12c2eff51abe32f9f012de0af9c9f8ae9cea17987f48f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

image courtesy of Articulate Robotics

<details>
      <summary>why </summary>
      This transform is [required as in input to Nav2](https://docs.nav2.org/setup_guides/transformation/setup_transforms.html#transforms-in-navigation2)
  </details>

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/17aefdc1-ea8a-4615-ae39-9c05a5b435df/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHF6ZPRB%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBBjFtABsBLLgInNYPzzRu0NwTKvywHQjENw7MDGR622AiB3wWfTuZ4pDmiS7jqEVNOCLX%2FK0HZIVBFDCw%2FTchO8vyr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMrrU9Ti4ktdO7do8rKtwDl75kVIq1ssihqro3dDhpLWJzFM%2FWI9HuGlt92rf%2FDwTNgKpPE9Vdt08XuA4sI6BvDzpPfMt9G5kJGshC9d7hq1sYjF1q5pFyV3RNUQwKc5z%2BMUsA4IdLWzH4KJ6Pj%2Bdi7BHiYKgkqhIfGMgdT4JxK0crdGHgMJXW7R7Of%2BYf%2BpQGAQjg%2F4mJThgbF3%2BSGpugsyyHH9XTbAAmiyxnRjmG10%2BZMcMK6K5jbfkbwARRJ7eMJdN8EWwIaVvdQoKvx4KZjEDoX07S%2Fw5zU7ZJK93TmINtXaAv%2FdLD0PdV%2BguTY86v4ZIrdT27DEHMgTGUQaj8rO9OcATtL8Cgj%2Bp%2FDlki0N%2B6WvXKHIgH8ZkUYs52EYAHMpD4D1M6SNzR0O%2FFSfSG5XooHKk2Oxbhf8xWSGErn4T9Yy0hNG0Y9dke0O3GCp5FDow9r%2BVyOvUdYP2aNfuf1gGKyicA4sdqPXtRMCOJOfocBnWrdGD5jQyhezxw0vvxuTfoIt8QWEmto%2BDgR04SgsZVoXWlOQC2s%2BL9wdeb0yYV4iVy4aebIK1JPeRsz2zIYUiZz2ccViTkXr0n%2F1czgoBUQtpCY%2BjB2Nw%2F%2FtkEmxMcv01KlQ3pXgLGK%2Fd5V4aM4Y0bf54z0b9n8Xwwj6DzxAY6pgFOHq7BIvzWgRP14mP%2BForDOjg6hfHyfEJvMILnAfB0cfc0Col1eBuAXk%2B30uXxoXfDh3DFb3p14ycyDMACPE24kvsSj4SElJWSFB0Vg4luJ0u6GZcs367%2BvxDllMG73%2FVwBtgO6%2B%2BIgazuGQG1R%2BUgOf7MYJZWEJsZfr7qky8gTwtIZOpak3Lp%2B8m0tRhVGeM9Y7v8gEUae4DF7csGch7VLlg3Wr0G&X-Amz-Signature=8f94526bfa77a8ecef5fe90b6b54061e8e0546669bf9169067fb021cc37a7685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

<details>
      <summary>Here is the Theory Converting wheel angles to x,y  </summary>
      [icckinematics.pdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/817cdf79-59b8-406c-a03e-9877c7270e21/icckinematics.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X43CDUO4%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181411Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG%2Fl4D9pDIANg3kVT1gjlE0x536TmCEH%2FAozCd6qmQcGAiEAq1KpFPNBrCTkvcbyXT0GDyJZH%2BBc4i%2BpnlE0%2F92W9Zgq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDFn3baI%2FLQUSALO2OSrcAzdHHXQ6y%2FV%2BqsTKi6auRxo9KWWo3nzylFfnATC3Wa3JQDkgJX9%2FIs%2FTT1AWRO1OrxKPLfpZDdDPx9TRoC%2BcSFqFVSCC%2BR0EayqQM0On6o6uO3N5uTojzTUE%2Fq5cpZ4FLOoQqpaaW7FZKKNo9PTQWUWGXppmfCffI8kFHjlIDKcLo39cWVwzV%2FZOL9U4X6sL%2BBFmXYTtq748PudaoEtbMtYP9SaRvxFNovPy1Cgg4hAVxh3wNI70hCSdW43qj7Q0r5a4t9QwSoc0GQJDAkS7RWumUFEdQ7LAYzFnb6%2FI%2FyF9GKC9z8%2FsAXbwLEWDYXCnkXgx9v7QZOiK6HtsOywfQIDy4FBuezkTqUuaw8edxqPWqFdChv48HopQTl2Q5CDlYLvt46LS9ifEWwibMnIFgMmhSLmfbb9BQZXGjiSgJAhzymWxMmGkatdw1mev%2FBt1wShRXYW0svAWOobB5ldtDjR%2Fgk8tnDD3Ad51JtHRgnX4p%2B7y0ffkob7tDAQbh1UqVRyFZqv%2BD650YSGIiscFD29KsmfxK6gIqYbG5KMnACYh5X5lqRF1I%2Fzcc396o3dYBZHCkmwGxzCW34RbdnpDfzBWf9s%2BSnRYNbc1H760baM%2FdZMAGHqpmcNaMFDRMKOg88QGOqUBB5ZyxwgbQhf8JavkwcYw5wYrTpQpTq5Alg2rhTXhF1kgFskj8%2BklWc81i8YYhXInVBWp6ZFrEo19BS6YY%2FHtZ7VsIr7TLEW4afZAGzqpM5YA2N4ld2wEoGBvZHN9uhbNRtfbvNavfolIxBKTP%2FNl4nh0iVxaeaPJfPP0B01QuNKJdeVdLAhatJM2QBLx19TjvY%2FPm%2BPe0cNh%2BUfgZSh67o7E7EMM&X-Amz-Signature=790b28e28ff4fc98748c404ad65aafe185aa37712b1ea46716ebe01f827fb706&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
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

![2025-07-28_13-52-23.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/42d1e5f1-0562-488a-9ead-82c48914ff05/2025-07-28_13-52-23.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=3462dcd3fb4525559071268ba54c8ef7b5ce70956417ff67163c1295e3a7b8f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Piloting the robot

We are able to track the robot in ROS so lets try having ROS **move** the robot

we do this by subscribing to the `/cmd_vel` topic

### New Node diagram

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/4cff07b8-6334-40d2-b251-d47558cb1aa2/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=18c07b657f821f9db4d305efc784b802989f165acbfee2eea990a741066176df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### updating code

[Subscriber guide can be found here](https://agmui.github.io/notion2hugo_test/docs/guides/intro_to_ros2/ros-nodes-publisher-and-subscribers-/#subscribers)

To make a subscriber we make a subscriber object:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/242066b2-9f73-43d1-a1e7-ab660cc338d6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=2e0d04775264c4d902a7f243d63677b67dee1c3f6ef23bae100e25db10caa787&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/511a41d7-4ee6-44cf-adbb-6c5062737990/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=410776738357c195921e28c42cef6adb7ba13f888e8c73b9f5ef88a19e3f9414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/bb7014b3-d8ee-4b21-91c8-287b03f41d46/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=483e249005c78a2f0194e4615806b0e90f8031bad619c3bd7ca8fe7c3aa81efd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

**Running code:**

```python
ros2 launch mbot_pkg display.launch.py
```

```bash
ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true
```

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/52eb3f44-8f9e-40b6-b3a0-d3de7514ac5e/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=622ecb6817db3b28153a047d0eb2fbe059b7feb6c6dbc3a0df052bce530fa5cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

pressing `i` will send a move forward command:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3e81fe5a-469f-42b6-a6ea-b483854b27fc/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=c5f12b5a3d7c3deade5afa443c2fd8f906aeccbd2ee952647f2411f7d50a3f63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/46147678-2fd5-4c11-bdec-923e81e63d7f/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=6e4da01188e7b5358791ffd0ec838935895a1e48386f2317129c6f93b0bce326&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/833babd1-7f7b-4dc9-8def-983adc005178/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJV5QJUD%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T181345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHWD6700KaI0%2BA1OLWOtm2aizT8nUNd7bUlqk6qJpv9wAiB22TLjJgG1MqeQK%2FIcqXu7GPZu15AlVZiE5jsuE9ufTir%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIM0m2VSFjSNc0l1HJmKtwDQGaLZULRdazA8A4xPsJHrOonas26Zbsbu9L0vdrtjkw%2FjHIpRPmMWQpF%2FeUWRSF87kb%2FVbjXVmAlrN8PBn%2Fj7BIkkjGnrgEkTSEMHqkLTKJayMrdwmmFWDQmm9Cy4v%2BedPnEGI4V9XjD5PY4eb4MyLzWkVcaa%2BAS931lzhI3X%2FuOIb4Xb02zUwo46D%2F0d%2Bclga03wIvmBu5RfJOmMLgx02V%2BWy%2BHktcEgHq8iH9%2BeujFNA1dIyPsE8kSJcbi50SkllsH62W1Ir27iRY%2FpgHq3f3VjgcoSDxZVM5h%2FpU8HNYkRm%2FHMxy%2BmCk6zfSlzB5eigegnh%2Fkk05JqYrTpxyI%2FzGTNYpdUj09TrEQL1lGPimn1QFKZ9%2F1okMd%2FPNYgv2vobwKqmQ2ACn8MBgzn4JVLY3I3Bh3wp7nA85fk6DAuDP1aaOBQp4HLIl8aHxqQmTzXP9Ej74o5clPYxAw7kxqCmEzxdndTgb%2B8%2ButZI212B0MuPWNZbfNXfaL9gYL5uF2UxKGwD%2BCmGP6aWqqU2NyrrfuGPNJrAXTIRNVe2N0NX7vsPeoVvU2levlQtuMiYkkdteVd7jwpD4xBNChiIGyd%2BfwNYIKrGaJTSdfVOFrAKvAy%2B6CqxcdxPayIEUw9p%2FzxAY6pgFqZfcjpEbDaKKTcU0wxh%2BaXyp74RgUswckNFQ33f0hzuwujIyGYpfjUztW7XtB%2FHDWChpc7Q3n9BE9FtCfjMKlLA2vEUBSYPgqKIfaJf8biTQdIQ87S8bv%2BvmX6rpTocUe%2BAgcFEpxXJZW9B8YajcOcFoFwW6ipTSuxUgWEhp5A9AAtbnyKRUxlNcphl5IW6DAmrhO%2BtEIMfrsRJThib14waqYpFj9&X-Amz-Signature=24eed9c7524531c7116f1f21e8e0d264ad47b8218d2f46bb49d96ffd6c6265a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
