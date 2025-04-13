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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3VKRHJU%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T210153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJGMEQCIBIi%2BfBxxkGhIQCOu%2BdN9PMPKvRL8OWQUcT8jQLUf5VDAiBlc4zUaSzC0luAbqaDS0ZjYanKluZrIu4jwI1A1BrHwyqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy05MROxuuknKKYARKtwDGJBnI3mpRpAvLnPPz3AWhOzseh%2FoA4EOyUjBbjqZKkjnRUw6sVGM%2BBvh63UMT83sQ2onSKbQkjy4LZNSKUNCJWsVY5ArELAG1bgQZfQtZABApwm82dzxdZRHr6iaO%2F6fMyOtAfZBjzhyutn0EFPgG4PeSTkkkEejVca%2FebX5z2GZ7cAofTxevd%2BI4vYTGOWdgFOCNT5g25Rtiwp5qMiU%2B0E%2B7q5MCv5fxHzyEUvpQdFC0v94D8LEBntNCDtNfT3pYoaiTPONE2WrM%2FkCzATz3I4pQOGMnfkHpqVq2m8igpumIVX1qFEjWV9EcH4pkXpuKXnw7Szh3Se0IYd0AuHhAE0CDNRb5XreFbQJGj%2BLHkTHL7BI8vzvjIHNws7RxF6aseq1a%2Bkb48kSeRkE3r488rOtyLTtlvCvoTfUbEzzjpKgYctsbVzuqwF142B%2BDid57QT%2FQ6538ljS8Fcw9sjzwlgmWbfl9LHEKzCV7WQ0cecbwdmzXNvFW6wKINxyNBsDkYLCsC6NxG7wbGj1j36Bw%2F9bcxgkZrvi8oIh%2BysI3PD9gvzqOrDJ2YDSOAsMRD8GX886IlQpNNMX1mbVvRVGiU9CamAj3kXua7H%2Bba6pGEHpItUw1ywVFMXoNUgw%2Ba%2FwvwY6pgEuy%2B3%2FKHNZSfqEnc0Z%2F6X8mLwrCplO%2Bgl6xMD3SkUw8axLmBe7hoTRY0eNMWnTLIlOrWa4PpKjM%2BsEQaJXKTdkFQxpcglPlFR7sIlJ8yJ99Pmll3VsHpD1NX33jnKjMDO5Jgq48DNTK8R9wqnE0203FpKyq7SeODJAJ33RKORU1Qx%2B7XP58zC7i0L4gr1k8xQc6Uyyv8GRJboPSb1vz20AH4k3yfRs&X-Amz-Signature=c9289c8d5aedd40b7a91526d9c8d597113961cf6ba40b2a5e7a7bf906dcdbaf3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
