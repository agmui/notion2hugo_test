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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWRC77WE%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T150731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIH9OSn0Kgw8kUPlORhA9JFU9p6PwBfQ6T%2BKXvKGyqp2FAiEA59mUSSwCGt0IMRaE9H3yon7FbfWvoYrT%2FN0WNYfUwO4qiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCvm0ebwsTQjLD0ZyircAzrsN0fDAtxHnJfCssFwcZ5OqT3vR%2BUx%2FjdnllrAfSOTjLG4kPcZqMy8jwn2jdrwzeObapTJ5Ls4SAz8PCidKM4FZpzzTtbGMH1Drd62NhLEfjvYIalt5%2BeL0ocYyTjv78NwTM%2BjQfO1j7l2RTnCy2Hh97akmue3AQPe7y8EwbPb0UILQBdVRb6VP9Vc8HTHZWPJuehYnksa8YBcxkYvTsk7Rpt3B2X%2BwecUURfqOnl%2BdNuiC8Kl6Ucbjp5wSNDMh6D8N4BEdMKFLQCvH0NjsUmJAxPYCRzoe4Ry0QIAVFW5F%2BVharxSHS1i3txJnA3tqi865nnxk0bM50q0ntN%2F2BF3PeiQJistxwVf7BSOkD3f9PMpRMzRgKWfvNaUU7i8%2BC6glBtG9r5WZkPHDbOSWwCKZyAKHYdOzcJrTjGAy8r3nROOJxvu7a4u9ep9UvZFVUDoGbZ5Wp%2BV0dulP65qdGoPZsLVqw8PGxqO4dyzDPl0F4Mp5XQdAk6FU8ReiSWJ8O2qcOd%2FVFYZ%2FSyD%2BWc4nNAgARTC73OMizsf38Z3hyaDboDx%2FGhIvRrZzP702Qjf3J1qO%2FFlpIE03NYu3ay1%2ByoimHGx8Zt8KmwcxyT4xxlXGyQxU8%2FxlqUi%2FTo8MI3FgsEGOqUBIYfGhPXXR4YWEMTNfYKdPA%2BuCeZUlnh16ziX33H2k47XdJnAHKxNoKug6zadrd9zKvTOAPd%2BEx3raVGk9ciJbrJW2zieg8rrnond7GA%2Bv6H9yCxn1OwiuQzgptV%2FZ2s4cYBnwGhMhS5DAnXAlIywk01rENd51z7q%2FdklCr8y3SJA2ZIYVFYD7j30e5mwScnXLlECm%2F%2B0AYD83Yz9lQgc0eFBuZ9A&X-Amz-Signature=92dfdd09e10e00a1cec1ce16a07a7504d6b9381dbc135b41bc4ec8f743c5407a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
