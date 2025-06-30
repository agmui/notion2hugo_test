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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZ4SZJXD%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsSeySYG1IFTKcvPSUITAZDRVhzFrAyazgHxii%2F%2FRyBAiBikjPtjNPmv6ZqvpVMhI8jJ8goCreU1XTg%2F26pSkDfYSqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKcaQ4CQreV5e2THcKtwDZ5sSeNpfDRuBVYuIqpJ1UtuJKbxMOnCncna3MNqZLpKyHIM1GMDF3GQiykqlbWZnqAPGwpCNU3uUYrHRvCnHHmVryI%2FgIwzuW6bjfyBceyoUEuOEuCy4%2Bx5zT%2FWH8%2FQ9VUlMcQ57BvfwRXesS%2Bn2VmtWCQYIqICh%2FqVcqCz1KOhgyevJ9QyRnQp8N6nHjtdQbvnGbE6oIReuIxgTHpzp79gPylvC6DI9wqKij53j8E5LmNqGO5YW8bQOExVqkXAid6XmsUrdV34tImJgO4g6ijgewn%2BaQWyJM5JhCUvFGgpk2tWpV5AjGx8r06MqKPzVWqyNCk2dInFicNkd6gNLdtNnpI%2BV0uUstyC46cwlLcMJlkd66YfOx9TxCo7slJkNfLZc6Mm3hN9MVpoY1JnaMfkSNojj8qZE3wYCetnjKSHugpTNBCaeBpwRi024Zsw2sFg7mSzj7MFLn20rtLQIYtogRP17K6PytP%2B5o7cVis5S7X9ACec9Uj5vMlIn0Oixh5Aqb7oQjB5W%2BPANjfV1W8reQh%2BcXx6r07BMWU59mCQCCBhTXMcJ5EvBXIHLuSJgrgOG3KoaVisHWQCEfLooDJc9KrU7sUHKylNMo52%2FLU6WK19RlSNwPDLBFNgwroSKwwY6pgEKsZE7qR1C76Zd%2FJsSfP1kkB4Dgz5uOtp03KeJwpFVeKdXM1dh%2BR7AVcIjaKr1RvcZghTWzsDdonDPC8Xyg76FRA5jwfCEDEMZRs%2F74BYyqPWlse2A6LSy8I99eLzd8QbguozwtoHRMGGhRc%2FHM1%2FixrpdQ85gMsmSSISUnxQq0WuQwbsTBqIJt%2BEFzlaXAYOGi8ndGcP5MOZOzVN9OEjxiuPDX4eD&X-Amz-Signature=1002a062077ff6a853d4634dc6c90ed939bbae331014597a817159952df4b414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
