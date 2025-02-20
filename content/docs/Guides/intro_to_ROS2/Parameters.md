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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5OAQG7V%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T110204Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPMct%2FHhQcyJbL64Vr4SEaa8L0OPzqXnOvjUfeBfAjJQIgPlpiuO2M0g6JpdX0Jljt51%2B8u%2FWxWk9FCrZ0Ltv0CdUqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIByDd92jjvc3iNdQSrcA0cQrKLCHSA3GHfkeXZSYMBCIz9jBxgZo903W46Q7Ex4JOwainBy3AjlKO7cBYFNHSOyKQuu9YtFl3JH%2F2EewNulU9zYalLBHlq8A%2F1IOIkkm4jgfQASf4NBGZaNYD7zJwwvAl22ketUPLIZkjCGlRe%2FA0uv05LeOkwnFcGxGQ%2BRSYsph2VxMghyPYEx0O7AJXEvEq41r4V2w6FkEp4ktvTZjzNS8%2BYXTL9bpYUdzDvZvnz%2B87WGJE%2BkX%2BwsNz%2BkNpMB9dKdiD025z8xrK8fJEmgksdQGBs%2FHV1exvfncNjFV0sZK3%2BZX77DTwab3AJDoKy2RutIPkqJ4GSkEyshuqzT2qz4IqbGiO%2BArAIC9GxxNNiQdzpKp9CWSPxIS7a6qElYCWHHYK2h6bACyj1K3USvIE9QGzz26NdTpoLTjl15rJYH0fHTyTa3SwLJz46y0%2F2qrn%2BldmWP2CyQMrO4UBEsHAIHKHXY5dXxxrlWpzc676hOiJOROFWG82YoEM1KxLw%2BxEMcvA76pQAI1qna7ClPubqWHX5yM8bn1TzrJVYOd7wv0J9sT3cKmhzSmNcR%2FWvis%2F51UrKna7RP2qOudSlqjPb4hYrAYGNMMAa8o9brmjIpboCmsb52K8DoMKeQ3L0GOqUBqsE0FeGh24PwmkT6d0QNUWfvZwszLWTqkKvPDnqUNiOO69RfN74Pjhe1xfWdKGRrofAtQkUZR2gUpGpcPnnSpZFTlrXxwnXZNV9kkRJzoWyWUUsFqGk%2BDYUazA619iPo6aea5q1iPJFu4cCN%2BQiBv9KrjtUgRgMqbp%2FOfjB1t3p3jfYyIYIzT1UIcJ6G%2BjdGvciOJThYKmrNGvRmBeycdLfgK01N&X-Amz-Signature=8213bbee4dbbc4a7ec498da733cce58dbcd4fa27e2cb38a4f0d2f8b1269510a6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
