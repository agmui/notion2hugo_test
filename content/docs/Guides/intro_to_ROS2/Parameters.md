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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXUMSZUG%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T140758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDhhvqdvZf0CDfqBaWPOb3rHKSpuyOe553i6Gh5OKpolwIhALWhzY3qiakZVzkYUq%2B82QbfppOPtwDjjZjXUhQim6BeKv8DCF8QABoMNjM3NDIzMTgzODA1IgylyXzGVKg25A68faMq3AN20xA%2BFE%2FOQ7KZMGgK7aD%2FyEK2ve5KGl6g0mURfa%2B8FePYo9%2FGt5AK4DejqnbdW53gpSE7bunfD3B1G1oqrg1UZ8Ad8SkuITCE3gbjQbcacDUF4CpwZDKEKB2bBjvIYU0GRXu9qFHUeHiG1WKwEfv1oXmn8Elva2GpOPZNVKIjOsRINkn2o0CQJJKuegQu2Hx4ojL0enItwug%2BGEFosVmwjGYQMzPh3rhEUrK6iT%2BI7voGb3Y3G00mD8wlMWWH0YysXgertcvv380DMRC%2BPTuxFwuAlinetUc0xu6QSsowEUhCSX%2BUgsBM%2Fkc2w7echPXpJIUkgp1eJwT9BB93dB41W1WTYUdBZfonVNr3qCVAzPgPbCppCxSawT%2F2x7NQpC946HijiTyyPUNYHANVHYxDNO4jTo84krbYHtXXrM2Dg1Eqf9UM8PbB3HSJkXcdMSvkcp6O%2FSaApJaI8xSAm71iBdl9gkHNZpJQ06RdrpIjQXm2GHmX%2Bp8dbnUDkMAwelvzUOTUXClw1HwfAH29Pd%2BNdqZfkxVI2Kb0hRTzdyxpyrGWLeASyjB4shhQwnJ7770QGhOveePS5kFrM49doQ1oN74BNiz63dbDXjduptQPcxFGu5rkkbdRY7tjDDDUwZPEBjqkAUJEChLVntwfGYPiZU8r4j1nVdoH3xlju5wIJkKdVkNQE%2B0TZPw3UwA%2BPAT3jYfLCQbaAbsVkOxzHOERJxWL9ksQUkEbaJRe%2BZP9sREJEvgOF%2FcUk%2B8cTVy4%2FYA9UljTx4H4eLnPMLOoDzKCaNuuQ6UJaGOIJQDxXXG9BofloQbWTygvH3MEvU18jnXhaksh8RSdHIYHFp1R%2BEXgVWf20vT9wVBK&X-Amz-Signature=098de665dda471b317d2d0f31e8260ad0d446007eb95f12801a4d685fecdfef6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
