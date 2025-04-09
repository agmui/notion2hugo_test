---
sys:
  pageId: "43f56b25-3325-48d7-83c7-092220799f37"
  createdTime: "2024-08-21T00:39:00.000Z"
  lastEditedTime: "2024-09-02T12:58:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Parameters.md"
title: "Parameters"
date: "2024-09-02T12:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 144
toc: false
icon: ""
---

Creating ROS nodes is nice but sometimes we want to have configurable settings for our nodes.

This is where Parameters come in.

For example, say we have a camera on our robot and we want to set how zoomed in it is. We would create a ROS node and ideally, we could have that node take a parameter that asks for how zoomed in the camera should be.

Later when we go run the node we can just input it into the command line saving us from manually changing it in the code.

Let's create a simple ROS node that takes in a string as its input:

import the ROS libraries and create a class called `MinimalParam`

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
```

In the constructor, we call the parent classes constructor and create a timer object.

Then to declare a parameter we run `self.declare_parameter()` which takes in the parameter name and a default argument

```python
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)
```

```python
    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

```

```python
rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()
```

## Solution

```python
import rclpy
from rclpy.node import Node

class MinimalParam(Node):
    def __init__(self):
        super().__init__("minimal_param_node")

        self.declare_parameter("my_parameter", "world")

        self.timer = self.create_timer(1, self.timer_callback)

    def timer_callback(self):
        my_param = self.get_parameter("my_parameter").get_parameter_value().string_value

        self.get_logger().info("Hello " + my_param)

        my_new_param = rclpy.parameter.Parameter("my_parameter", rclpy.Parameter.Type.STRING, "world")
        all_new_parameters = [my_new_param]
        self.set_parameters(all_new_parameters)

rclpy.init()

node = MinimalParam()
rclpy.spin(node)

node.destroy_node()
rclpy.shutdown()

```

To run:

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OEFYIE3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T140943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIHqX%2BqjfFXBemeVWzN5JdyK8hu%2Ftya8KiGvasFHFCZ0IAiEAg3%2BsjdFqirGgqdfiGs%2B77JNUkVDgQvJau7Nydss2asEqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMIhyUGOPGER945U9yrcA62VtxFqEiam1LnCvzDiyIDciqp757EFTs2A5FiOy7HNLEztu0adjhrSOdP2rTeszv64bVZPhPnBV3Yl2Sz1S6BZ7nzN11d9jaTCvS2kcqQN0OGRNe6C8%2FNW5wQ33VLBA0N2Mc1FAhcLT1sDCgf8%2FDwHM3SAHv6jb4Gyv6a0EG5izEBQ3O6Su0RRhN4IEWor8p%2BWjKwpizLoGsFEDo9jM3W8EvIgdUY3W5cpil4gXV4D8ByuWJ9hS%2FurT66WJCz83tkjso70whfG%2Fon3XP5mr68l45f%2FpKCPAAUh4mD03T3Vy41ioKLaef1l2k2DXiX6ec7s9C9MrorvTn4S0TWVrPfXHxAQMTJG323WbaWPCTj6q3TXw4jhT0rRuBaeR%2FF5Opryh%2FD%2Ff%2FDpxVcqIebX4yLKYknIx4x1IHLyyT36kTPVigjl3inFnGxiiruQRAwoNwWcFk5dmR9yNc0H%2Fa%2BYnmEa3X7D46E%2Fbe1YZdNc2q3zS6j4Y%2FN7n%2Bvu%2F35bzrAx2Bg%2BLRSCcqGf0J9YIv1tg6Te5bkhgth7jBESxYBqDjio7tSsW9TJp7bl320XEoUqajp9JZ1dr0a0j4Jbd99FrzqBUgO2gaZYgAEFT4l8J4HV1xyyOR%2FjbVTVkKePMLH92b8GOqUBAe%2Bzw8auen1x5yu42Bfp60KNt%2FmRxGiEL3HdibVC55Hua0Wv1qHPcpGKYuLMmaSQwa5RbPo53AcJCM%2Bl0t6VEHRLq3Sd6gSCMDVXoVusS%2B5AAMomFWB%2FJ%2Fe3tvPf395XpGochT1wUpBBXIUwxc3tPNHqfiAH7eFkVsvUKLcDsc1ZxD5RqR4ndm54w6jNKBtIymqKdS%2BliFInyaCVhJQfy%2FmcwegW&X-Amz-Signature=810a37df75b4dd30955ba6597f4397ab51eed0c8cec35f5dfb7133870e58de3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
