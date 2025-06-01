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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MK72OWM%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T005339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICdGnGFn2rtpej5uZaW4CR0algfIxX1ISb7YUtQjuqFtAiB9oOn8zS3rXHNTziSHr%2FapnoByuVfj4lrjqC%2F7cSpU8SqIBAjF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpKHDRsr3aQMpyaB0KtwDkU1TpSunM%2BJc31WDYpK%2FxzelpGPG9TFHbP63cy2i3D9TLXuE%2Bx1fw5x%2BOvzSUkHjEFU3Aytz%2F9Xd3xX%2BIE5h%2FmsC9gagutUQYO9HRcEH4BspSxNNbyT9tIYHa9I4NdkUb3tOgMGIzsSENe0ApVLgrA1rMr8B7fy%2BTGAElwlqioup4WQUeXQNtgGUC4ktdyQ5P6Ac9fhoKUzT2erwOTZsY1ZO1tK4psVIgQglyYKBDQzZdra22SGfyCFuAH9jJMzdTO7vJduwykGK7Cfz0OxInsyLOmJfEjJJFSp2lVxt88janJhNfVyz58RdLUV3wnuwAczOOYEAJSLiai8Dmi2AD57MI9xrDqENprRcu1QRcjJ2wWhaBt%2F%2FOk9YrGDNxf7QBsc3BseJ8rASfvM6WWmp37U7eW8%2BYqmDZMV5BgR4kYfNyykV%2BVXbX1fk2APDW3QyFVfQH4sYfNmvtRgDPXvjm5GOyqEvE9yXcC8NRlRCmVBvMUYK3jc3YGPhxR1kzSqIzs2K9EbZbflL0reY1Q17G5tejl8E5fZ5E1REi2QVwYZDM8p7LAReGg9CrHbJ05zObCQnk9n8%2BFkuZiy60uxDAisoARh641MCndzPu0mPvoRvc3F%2FPWgo1R4U3LYw4cPtwQY6pgGGRIxtZURwxT9koIwYwSGcMAak1HBK7rzoDvaFsJ930d2wXSbrOgk%2F1rrv69kq1nqtJqdtLsCCcQFXTdoHqzm1Ldj3AaENf8eNZsxz8s5gJCuAEI%2FzmYk8MgaI7En0qv85eFMeJkypyoH6yyldWCCVsWfPfKha62vjPp3qwsnnK0EeXddUPSX%2BxcqFD0ESGtSjRI5z0459qPXIN4BsbXIjczK4ocN0&X-Amz-Signature=785f1537b585ed54c4c3bb541a1879ee8e9941cc3387f219528806543a21bacf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
