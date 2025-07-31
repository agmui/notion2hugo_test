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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466445N32FV%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdqHdvmjp%2BI2AgtgcQH4dWeQaRJIz7E9GeLtIwZ6kU9gIhAJPHQVi%2BRserj8RiQgdyWKeni6%2Fq4jVXLM6pQxbPm46bKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzW8ycNwbOYbK%2BVN7Iq3AObw6Dxcnadd4ndJnVXgTMjtjXJwdBgXB3u1ePPYmj9AY6%2BkP8Rw9bjoJddLsIQuoMORfFexzQ7YzV4sK%2BAntCwsULhgK6UxM0JoMYRVOvd8TnWQfyNu2x2D1%2FJiHxWAoSYkgWZHsVUOyrWkQEqAqHpoG2d0EcIOK4DTlG9j%2F51QJikZ%2FY16KwJ1r3O8mUX3pIi2w72Ns4v8o2u%2BvEI8JbP8PO%2FE73fue%2Fu9tmseEVh8DWCJ2g2DkSdfBmP8h3mWGA2TlYVlHq1agipAiDHMyC%2BbMwvVMllEEQwOGEW1tfSLG1flXMA22d45%2BmFWYC2CKmIr7zpYcV0FxsGoMRSQDoGoas2NH58sLYz4OXdkjSM1l3QwM7ZXxAhkWODDSKeLC5snOpjUE9UItkyWo1%2FgfkF5s5b0ixTdxIHVI%2BeaRN9Zg2uMjXoyO3sZsaY6MkB8fev5UoDnndMGr%2BqrDTdAkxgSY%2B14e2srTZqa7LDEBxq4OG4ud6TFziN%2BIH%2FUm0LRpwWBAwBWkGo3tjhKeh5bDeFT75j9MZ%2F%2FPidxeSGWD%2B1DtLsMKwEkA8O4jJbUjmi8JEBCK9cFgyMF5Jtyd0QNDTh7WxZflqW2YJtJuaAantm37myOXtl39kifDlK3zD1mqzEBjqkAfC7RZuk%2FhGLwbkGMUwz74BDIDP6tSAiLV9bL3CLPzybKAePT%2B6Hev2sKyJd73uNhBkBLjFSh6P6GY8q1HZEEdT4TyiDxquqXV3rSO0e1AT6OGEEV2%2FgzaCYN8pN%2FXL4vq16s6qgKulkjG3%2F87n%2FUKiG5KwLir3tA%2BnCt%2FNPUYPHNIR%2F%2FrhvonBMpO7vcXYZx%2FPHnjtHnx9gxV3GH%2BJ2fKM9tCRl&X-Amz-Signature=54d9b3423adcd09bc90a0ee0a2d85d82a108079825b32c1c175f7855d4220768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
