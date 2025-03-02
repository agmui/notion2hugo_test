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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FY5CIIO%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T080936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCKIRB1YuLq8fUx2XUuEmI%2BUo1935eYcX4swaHlnrnlAwIgA225z8C3lcgQqqBHDbb4C3CR0kh6JjP%2FsTlRgD3NjiEqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIC2ApGk8tBEr52DLyrcA2E%2Ff1Js5a7f8V5PuT%2Fp%2BkguRsN1cnVl3HE3q9GtSyojURt8AXIzlcH19G64Sq9DhrmAWdLkPAsZrJTDaaJUwuCWwOq2zw4NxAA2iZ%2FcOXp9kBUSHmOhiwSs0kDzhSdeBBHdln%2FMy0suLSqqCB2rdQhckIScCg1Q8P6ui3rGY7ZB5JjwnkzYpZ0d%2BY9HEQT8WPNasXMzixgiYz2SskQP7WAytW0dvkEqzDnkKxuClalJHS0YYOUnInjKGFyOzH2kGWz6mOaitEjf%2FBXLcoJUPzw5ZdYFx7PNeWBbYx43SFYxJA1w%2BG6pz855L%2Fx958ZucprdOiGSRl4LtCwzznVrONeT29lvEEMenEDjWxSZr9h9NimIhCECstllHVF3TTp44ky7OIoVhjahaNND4xSghUqvszXlTv7OPklB7JxYa3lDCEoxn4rU3oBArTjduFRWEdimFlynvQAwgpZ9o1%2BDRPolz2NNf0r3YpPHeKrhqFjS30rwop%2Fy5ogC9oZZNnxIEUwvHO5X6GtMRDsToUNuA0aWLxzh8%2F77yhx37Zet8W32hgAS70hvYFXrg6JNK26aPscyr80EZYGSJKOdPIeuVgQfZCEp8UWAneB6KShqFNsJa8gjtAlQ66z0hx0DMPnXj74GOqUBpcGxFy7In8N9BUR0l0ldSaktdnW%2FTlm1fNuFX74Bg6glFrrQTfYtaIllvvVplNC0OLDbxqKaj%2BqSvRHlvXxEL571J8hasgc8Xo6Pgt9ipWOJS9eienrS9nvwDF01Z1%2FYe%2FJYyoZw59Hj8xwJ0owA0nmA2KGW6rjjVj5b4V1eKHFvLMlr5SvB7eJdSc3Z93kZM4hwiRAQNedRSs7LqkCzSGBwDcUV&X-Amz-Signature=395b76eadfd453806cca6c0fff76de0e3bf3b59c5cd985ab6cf35033c3513302&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
