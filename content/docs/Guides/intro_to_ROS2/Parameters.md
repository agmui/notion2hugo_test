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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662I3GZONQ%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqazsgSS1PHY2OwSl0g0VlpNa4HSZynkKt4jYauWkjPwIhALRAN6ptAuRvHF0Ocas%2BYsQHVfKnJq6OURhXwNp%2FX%2Fc5KogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy8qhfW30EaEzZn7eoq3AO35axrAaW9lxCCiqeVsa4LY5dntkfxR8MjF3sA1%2BcgCj4imp1a5eYDfEYKyv6Zrgoq1koFJeiFeCeX87sZjAg4g6PmsN9rT0ZZeJlfqSjX7icHcFYLefoJsnL4ar%2FlCwjAgojVa0G8Jn1TSsU4HHIN4zhu8COm8%2BPqwoahb2HSgTYrdlRHbWAhtXZSGJg4C0XPbozUcnjptj2riX3aDdS3vP3uf0exNpNfMYpEINF2xHW9xAy9ohWigos5u%2BeWHwwEaGmKkSfB4tguyAlSsw1MQ4VlSv%2BYaOZmXMkJWA1dJ7JATyIZs9zdVieIAgJliuE0%2FG%2FDFBzcYeA9WjCvA2k9wtfJ0jm8lj4YGAlsbj4rAe60ZvAbKMrp3rveqm9edPK2sRnV5FfIyBgIsOxoNsIgBgJ8uI%2BMf6dd0xc%2BS3fRpPAExA5%2FI%2BOq90OwXbfOBsG8wSXkIePDQyXSHcMNPJBEfsLVreAJoAuT%2FwIr4rh2yujzJd2CpqOaQztSuFr6CB8fvUExfxs%2FvTAZKsqTt6b1LjLDjxMEgRuG24hg2NtDTc%2Bjk69jVzJfT4DzNxuYTZEd0WCKy%2Fv%2Fn%2BP4JBmRL4yYQ37h24o4kEIGKoW3dAh4MKW3DgJd%2F%2FKbD4zssDD%2FoejEBjqkAUClBiwby5UuCM93EPhiH%2BN9lO0DTWSIBzwox32%2Fps4Sf5MH%2BYBnig0tOUpFHoZUPeWZ8LCizg0galolJ%2FPJgGQ%2BpjBxuuJUYGNHgX%2FC2MCQYcCVnVcOBy%2FRaSqtb0%2BJTzVIUVAHYxQBJLgp1MfFRRHkQbI%2BFtvEBycyi60O7I0iiNhT8s9djaCkLSZSA4Qrlg9dBTpgnLyKRwGuQEe%2FpXkeDcqi&X-Amz-Signature=c73b820c5f9329c8955cfb79ed64e2ad67183dbd81656b85d06730f73edc73b8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
