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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EOUBEUQ%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T220732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICs3rNuJf4sCtddUHPNpRytcJAorCqTzRiuP04uUfCMxAiA%2Bw7nEz3phBVSQdf%2FSycJiixW37WidkklKwsAkOS75HiqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlgFbj151AWCUEwN3KtwDwex2%2BjfKYDp0qhguP0z1ZcJiTPMzUoZws4oIiRbCsAAwDYbCLJldufuDqD%2Fd6%2B7zQYuNjQhYm3J%2F2TUhDTemTJFF%2FLlDhkH8D%2BlQSsuC6awJexFyN5SdU1igP0GE0p84y9aW%2FhLduPceV32MKirXi34gIwikJo2Ei3FBrNUeTVhTt%2FC0LFc%2B0GXjjtAFc3Vf9%2FXSB%2BelsMZ5hRD60yo7h%2FQxAx82nM9AAByOJiGg1OzKJlAzljWvbZzfluy1cKCXJIkEH3DinrQISaFbGIp8mIR2YcqRiy8kxsmtevFJmkIfGebMMwkCTicr4IYvPFEsrCRTxur7QyyNe11mMdPxy4DTlHqVAYjU4xb40U2TeAPDL7tMse3x3oZGgMfzVC0bVuSNTEJvDN2PoYsC4Io9BMZdt0J2VrJvh0fAEfkSnJECcrf0uWydzW2yKylmEWtqo7PhmE4251A2CwMf1ZlQu6ye54MWpwY4lQ0AMJFlWZVJ75k1lF4huH8utsSxdmgm87V3QsLdVIGZcDzkqIkA9ruM19PtkO8EZ5G06EF18lysVxOCXVbD5YKITAYggM%2Bg0NuIR%2B8%2F7CmYekOhKHTv3%2BjGkko9bCiTXCeDjqCxn%2FRBsKAy%2F6tfFMjpwjgwhpKHvwY6pgF7Bm5iwN8wfVQ9sx3YChxVLAQfcANMsiYB1%2BLx%2BXiLxi0mnqvAZ%2BqoGyk0bSMN1wbbjRY5XXuPaxGatUcMWyOlD7Og%2BA9d%2BRz7W%2F8J6izoxvOnXpA4cKytJzFDIUE1bWbqoLq84BDbrNqSdDVAs1V9WL%2FC4D61XmVKzlguBKILaaQVl9JsmilCjtjjRUPEmm6S4E%2B9HThSM9SV0ngilBYnLw4qoMvb&X-Amz-Signature=2c4da86b629d70f62da20f181b797c9b6504f9c64b53c01c49300d73d1058f4e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
