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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7BVVED5%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T181104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQDNRDUt8p7st1Tu1rEr7ke4JfiinqxUkQaNH9diXv1FfAIhAMKKNUnLgCPnXDgpeU4cLDn5JXASPR9efE8SlhQ00NtEKv8DCEsQABoMNjM3NDIzMTgzODA1IgztixHOVpSx1mR8wG0q3ANOjXSLMagiUh0I0I%2Fek7HfW8YfMccbUiKnSiANXCOyI5K12R%2FxwSzM6aiBJj6cKSP35Cp9vSsVIGgNti%2BLjpCQj0HAjIm9Uiu0mJVfj%2BnmIYMBOHyKvzomXce9WzSv850cF0gVMM%2BCdsj2CqbzcbIj5%2BzBMbAzw9JBjEVq2Y97wHU1PGwy2qR06EY9RR2ooh6sYjF8igHgzb0paMdbIJh%2FrfkNf6B6VDz7qjdd%2Fzg1kIVJMHCsqxcNlHKx%2FgP04OORrMzAKGAub1Xn43uXzJjkxfOxSAdfTWsN2cyVSPPTS9c4KJ1DUsC4R5lXZj3kSOjhYURD6GhlkPUSjxCeS0OKjlQG9%2FW%2BLtVIbCzJZe50Z%2FISnu0jrnnJ5eD2bBcsfzETc%2F5O6JL%2Fpq4s%2Fe52nEYFCX7vPZCY%2BqGl9yoBu85%2FYYA4JJO8b86BNI8JnIcMSXn79nSLppk505Izpj4dy2J4wvU4PYpi7ZxdZDOmXv3eGWb%2Bb85VmGdwlIj%2BB2ExEx03BZyDPw1h3CXDbi06V9vnx5ZIb4ER1rUbMMAB7%2FIT3IekDlTXlgW34jirttxpPtMKYwDR3ZoUP9BQQCjE%2BP4P4dxvOIxHBLY41Hc3KJdowUnNDiuvL%2BJBRDBsVDCchbzCBjqkAZtLGgK9qCs98wDK9LhRuQjNLkoz3qAMIKZ6tRn1Xhf3%2BNzd1JOf5jdNbpWLhqpGoNakQ8wGgUyfKpb54cQ9yvkE1YAmGH92vOVi9fYfc9KXb7vsZrs%2F5SLzvZtLrf%2FQWjym9Soux19qI28YY03XzJNVC9gNVGglYkuHU8Uudo2in5Yj4iI1SMG4aVIex2CfRT1cg%2BaZPaWyLuVv8bn0YqxBxPZ4&X-Amz-Signature=91b8396e486a358efccf40e64d90b7c686fd1470b0d2d0b9172e4656c8ad894a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
