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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466545BEL6X%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCbc5AgppG5SOjRauqkvX1PvYmCv5hOmWlcujWktkSMfwIhAMwi0%2BCijELmogdu2uaegQGQ4tvAf8ZvlBMAdoyHnTQUKv8DCCkQABoMNjM3NDIzMTgzODA1IgxUwKcTvjApecqfwPEq3ANvBvNfhOqpH39eAIAKnY1O4xxDPhMrcF6pV3jV7dzEvuADDesidA82ssXdrYw4LIBh8uhXRYPRb0nDJAjdtUfUtzhc2zM%2BUwgchR2V%2BgZxiLM51lZxsewO6VXseNy6MrobPYlE2W82Lvuuw2dBcZ9n5dcEBGPNFNm%2FuVVe%2BrQmgkdTy4Nygx0jxvvsFxY5BSn4MOz2B1P309FpmtijBjnZRJobCCfQWq0p%2BMAoDsFNURBNqRt2letmAF2wfvTQjjKtDLXXCnNILcp4uqvQ7VaFsTt%2FUlEH29ih3d16%2FpZaAnr9ApaqqvStxB%2Fa32zYbp%2F4RT%2BP9bHhsz7%2FBXKRnhodIHJPTiu1fh%2F3NyUEraFQmVZbciytk72sCbknAMJbU%2BvSiIEb4c9IkbP8Y%2BfWcfjXaTH3klQb9QKtMzWbCyHlPxzlwiCM73njjtkWubQNrZGOpZqFY%2FeZD0tjP%2Bh2q1c%2BO9e9kSKG1rQNRxR8fEO6sz6WoA%2FR7m%2BDnXHuUTBjDxYdVt2gD6fcIV6nh55D%2FC1%2B03CEf31sh%2BTEWHNFdXcmsiGsSMB8T0Ns9oY7x7NWiLlTQDNF2kYGhZonR39OyhnCCfZkMKi9HG236SFuha3r3kRxh1ipfLMmX%2FUP6jDmk4e9BjqkAc%2BgdLKPBs5GDeKHNeP4EcL0z2%2Fkg4tDsdFUgV9EIKEgYV7ieE2q3ZqL3if13qPk9NOQY00ZhP9sDo0jn%2Bkg9%2FXiVWq6Fq82P%2FJYXOdkXyicZTPR%2BQKpOblAj%2FvFkLpLNtMKu5qTXlH%2FfHR2IK7ZtGyW1n3FncFPO32exI0Fl7DE13R6nJ%2FT7G7gKLu7WFcJ7mVKMVDLajK%2FfOQpZfy4oIO9uA8v&X-Amz-Signature=73f038c5d9dea12ddbd17909972de0ce7eb7189eb1893acf7bb3d76a2777f327&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
