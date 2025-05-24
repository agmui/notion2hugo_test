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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTCH3LWX%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDXzqq7ntrVxgUJvYn1SeZsNS00j6JMTivgNqrO5RGNCAIhAKyCapRow9ipopezF9Tf1kyEgJfoDpe5%2FZ5hqCMKsTeHKv8DCBkQABoMNjM3NDIzMTgzODA1IgzmExH%2BPXX7bUgpFMgq3AP5GRI9X%2BIQSFTJFhiVbj6%2B7Ig84fB%2BYy%2BW9qlKA4oMhQL9JBHqR5AC3jk%2FT1%2B6XkIxwKCxFPjakYGKFSoQg8BLDnf8Kb2KruXZosr%2FYimseRva4gLFOaZ8f%2FvnqudU83PLssVXRJ9Ui0OhSbXwS1nyiYQ5GSpkQxPXBHS9fppEQCJf0rV3YUAOuodjODBOH25VsCShdNQJIRZz6w2EMKq2slYfTwCKWVWRNEJYjcuBecsFuV%2BdZSq%2FGPYKgL2n9wSJ%2F64K%2FWbwZex%2Bj%2BQLQ1nd2RlBkjz4LaIp8eWIL52vzEP46iJEjpJ45eg8fyRz3TI9zkqeW6RPipMfBq2KjnyzttO7%2BeLpVPIC076ECiJU04I%2B6FYT43xL2ttUWVpR2G%2B2jfWzOjqhqrCbsbvyRbhYCqurwWGObf%2BRxLSjv1rqA1ny0Y54hJfkVuqqgzQgzpawWUYhRKsqZ9fuYoO%2Bg0fHoLcCxivDGL7KlP79eTD89Sl12bBdr4rjACgmG9a4fOL2uDL38lY1a8M%2BaF1vBNDYzQ5YZUdkDbwTH%2F6ZkWj35ftAsP0z14h0Eu21ZaTF%2FjKwYK02C7Q6dHFa%2BuwQ5btmHY19BZFhqVdnNBlRHROIdBJlJ5Vus4T4whx9YzDlzMfBBjqkATdZnmMfUbuZ4dDKmTUJkCPS2vyn6ZSm01u1E5a7KHIoPyiAP1sBuwfyAUav9Zekhq88wVqUaHknzoNrlX3WaRtGdJf6sSf%2FGUXSmsyJgXOjqsrFRNDkzB9AN8vSt0%2BXAOhE2tTD6e5tNHBanGTw2CjgtE3XSUUtCyrwujOsnkQuVk6d5hH4u5okPbnG%2B6Ewk1VrqEMwdNVgf3W73dXQ%2B94c9DEO&X-Amz-Signature=c31f68eca02d0ccbff1311cefbcb0444aeb0c4a6bdf4c46942b7ef74887a07f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
