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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGIAKRTB%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T021434Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDj4gT0u7x3JeYuJhwoaz9nnSl%2FRuH2x3MkMT23zaNVuQIhAM1gP3uM7Dn%2BQNe8yRPbYkHqwTZ8o4I7SLMgeoRjtYEGKogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxABbdCvEn32Onx0ukq3ANgWQapGPZNArSleTAy37t3zHf2LAZyQOpfhbOrufgwkZ5wlzbcfUmPj8qnl%2Fpa4iNZCEavYcwEzGa0oCPzwYdQkXwRvV%2BYr%2Fvd3TOGoM%2FXkoEmThyWwJPJ0pD%2Bc%2FVwwvc2t5QUMtl553zYNDJE4WlSE3OwGaH6HrbDwotLSOakKKJIhm3UagHJgrrGub47RgFXuN5nJ2K0bnSZQiGNoIIpvAgyYKLoOeihokZKwJPPpeJFn6DEysQ4qd8Mr7PbedhIPAhYLw9FAUiFeiE1T7QbLQopZweWcuPyDxm0q0mfqzM%2BCDrvv%2BLTNDisuI1r9rF6ToVQ2GAG1Q1hFHjo2G7Sz4UgTtRbtREC%2BhO6JOSZ%2Fh%2Fz29SlPd%2Fo1Yi8iTW1vVmX5VWghdtPaezpbTIbhLfmcpOY1AbAWYvzofxpAlgWG%2F6G9%2FXbfJUPp%2BNq5xmeYkh7Ixfq10TxU5EqfPcnYPeFLY9jKVKU8Wx17LRJyBjcmh8Y%2BFB4d23eCiZOv4ruYI9vkXWjbLCcIhvWdThFjP1RM%2F8jzxHlMJvXfcIuNOq82IXXh4CAx8ptKzdpDTSh4EzRN%2F8CtgJ6FCINWbAumnj6o72UZFKjdHG44mKlaLYGSZxz%2B92rWzWSSgXeXjDw2sO%2BBjqkAeU5uv6%2F0kggCAcIR3rPyYXOv%2Fx%2FcLhSnfNxWeXAnLk0Z4xPvtK%2BK1prXSAizYijcP0K%2F7m4cza0BgWeFECK311SsyO5tAUI3EmnOZt2CTHyqANHTe2UNcHX33F9R6Lv0mW2hXgVnJb%2BojLEG9ZQtAOdWh2MWVF3S7Zk4UmJ%2BcJmaw7jLJXOsLnOB8XWfbUwLSE0eDNsTeI6bVYbRggefRh21Wne&X-Amz-Signature=8d8f6698d69109067749bf5a996c05ae5f30f496a103b2635a52dab2cfb816e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
