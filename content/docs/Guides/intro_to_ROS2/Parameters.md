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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQHN734%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8FfgeiOjV3IM1YcrJuDh5ILgLiJ9XffJd4VhIH7Q0bQIhAMMKI7sGKpbpwYeIe%2Fm2bSupyzzaLwZQT0lQ5hR0ZEMvKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzdRrVuQs5B9895LJEq3AOWewmMbgBXfWjeF4P2o5G9%2FUGxNT%2F%2FhK88mYiXcwonolGikAibB%2FFX8IIrx5PdLwUHdB0W3%2BUKESjuLjQK7VR1kLvJiIqRWdM8LxyafId8PrKmEj0MH7hCzGzAEidKUuoYMShozeowGSv2h2a2EmZd1TMIv%2F%2Fyyg2WQcC6yXtVyXqxI121okohrUjXXdYef%2FiYKNvOtTGqt3lCApGbO0aPZY8hh0zFO4JNS150l8mB86IsSI9VdbU%2Ba%2Bx3igMuW1uADX1pQNBHjuPyGCNxuPmweEFkXMPuTwHV03EFKNnpUqqVJY3vibne9pGmGpaUqjARDRY7gXvNPNKMszoxLz6ImFDcaGEFoB37fxXVTiH9wxV1XSiSOPJuV3XBVdlhI9BjkCD2DWR6P%2FQO6XPG3Mr3VA9nCEXKO%2FqlLKD4SziHgWRGL5wmqxwTYHeyEPEDM%2BrozQdKuo1eHaqFueSlSGkmDxWHVNZjByJBXZYtpHArNBCHPzQu2x%2FqMSvRbZfsyM5XMO7gIZD8NSP5rHx0f7iMMPghKpMnLjDvsQDpDXdM9fN0BN%2BCdphOmZ8VK5I%2FF%2BlNsbu3b2S%2B5mYybQ4KCCDuZTMM85%2FjabbpzvB1ejT5qs2NhvJaLH%2FLGjVGXDCGyqTCBjqkAQUkhpX2A6BS1v93%2FJaSFITEdJowBDD%2BLj0zXN6dtlHDBG03Ap3RZao3CA1RBnD1ddGs99xiUv5iCqmJizLmh%2F%2FXrLAxUOwkC1wCyKhPnZXKlJSFZudqeW%2B6EYrqvf6slGSmQcsAYPxXx0e%2FJ%2BW7UZdxI600jx4n86PGcO227ssC2RDq7VYy31X9aOjq5Rm8KYBCX5ggI6vqb3D8sk9vhqEsroUu&X-Amz-Signature=7fbe56215af43af65c9fa408ff182f9000643b539433246e94391ef6a218ed57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
