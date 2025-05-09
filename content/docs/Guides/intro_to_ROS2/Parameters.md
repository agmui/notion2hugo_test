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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMDZ45VC%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T210734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJ48nW766l45rHIIBIbrr2Uo1E0sd5PxnyRGOshL4PfAIhAMGcjDsBzKoE4mbWrjEBsOxKWebYXQlQde%2BWjcdQlwxlKogECJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9E%2BrSsGEUQQJiRZMq3ANIxfQmwu16ema09h3TfqsKt9OBI%2BVqb2Z98Ca1geU%2FDSHBNZHfiHrf91o%2Bv%2FDeXMuxGjGMNH2lw6xUZhSPsToXA3FHdKPpYbcwf5YwlpGsJIHJsQeYXA3a9WKJ2kJ80aSeWYhn50i4uRZ2b1kExL3O6Bb1T4%2Bs9jqE0uwmvUJ%2BoZuQAcNSgcfL1%2Ficoibwokbgsit3It76e6Io4KHQnxS8pSmoCTaYx9hKUNuC0nUzW3WYQ96MQg98G7q%2BSxPse5rmdDDDw5jBfr6daiJLSxd2bP8Q%2FqAYKIUMeJA52jYKgttlzgDeZqzw5Pj16JB6tdgaqckjhvwB1OPpIVL9Cm0rajrQ5Z2PacWC1yNp56ab8mwRryBYUEM%2FgA11%2Bp12tkLWEBjo7CmrRbtL7%2BxptO0hsssP%2FZ41wEoRgfycur9plD1ZRL7W73CgsmB%2FhzY1tSbRkX9bmZdBypnvdh%2FcPFPfwjp9a92BOHiisgmP9s6YIQzM8qweHEF0ZI3kMKngWD%2BGjBKwg7NzX1cAJ8GZbBlNorT%2FQ7EHBB0iJHufHtisYdkclX8A0KAXKCWygEIkmKqKt4cmRHdvjoROgdQvwZdXnHZXjHgyttuyc0U3d1yzq50PcL1WZj8Z40V74TDcxPnABjqkAaio7hgQas3gx46VrYTSM4nzgRczHBT%2B76mR906adDeceYQGAN%2FD6oJ1QDAR%2FNrYdL4Q6svWbbs5em2GlcGLaWe8AE7z11Id8QmoXtASqiykXre1ew37ztht57IcVa5ZIHzGb0T1cB9xXLBhNsoVaapfgHHoPRqnJibezmMvjS9ULgp8gRfjcRxOMJ%2F1a9d%2F9fE9Jp%2Fpt0P7TSQ6cve8Z6%2BTDXFs&X-Amz-Signature=d2486985abdf6c902a52ef761ee0d3750fb90b81dffb46da35a0bbc94220f097&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
