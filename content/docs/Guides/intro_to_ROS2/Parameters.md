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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPV5LNRT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T003812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDhB9q3nJ3jSwAIMyzURaKTdFq%2FgKcnwJuOBDedpdQsgQIgFnU9smqsbx4msd1zNGZNaUATYle2ssnhs9XVblYXKP0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDI0Xy3QAc8JfLtglFyrcA5GCL2utbmvWOdTYc18EBXVOJJX6AV8c0zkfr%2FYxQnnFQF5kEnWjY2pysrly2e1UR0Xj6Y37POoy9RznmaZt29TF9paDzNNdYus71eqbxnLVPnnFzfYOlrEYtxEJvqShZjpdnebogh1w0IGSM3m4Om80CZg16g7eLmMP9ew7vP%2FeOhQrf3Lfz4ob7J7n28vF1OQwnX%2FfOmMZz2%2Bt6P7YlT%2FWeG%2FJcp4uahRBkJs5NwKc46o3hx9gu5qed6a38QTzRsJY6m6if4CafgJ2q6iaIWNLWMifrNMBkgLrLcC86Kkhxs5ifa4rJo0ax1V1afV86dGXCQzahTYfU%2FMO7sXbnIcv2y46DS28nc8N%2BGarLSd4meH2VQd%2FHnb2pk%2BYzxKn%2FljWNw4fcbQg%2FGkOBA3Rzmw2gyR0v5NpF%2BTcfJLrvgJAvlyC4sgObxpazzDQTbM%2Bk0d7%2FvgGRye3VRWgTVHmTa0cTKvq6sR0WJOZtU1XYsAb7Ud7Pm8WhPplz7ivb2d2NpHHeBxTTa0fC8Y3f8ULyE8kL82rTIhfR94UIU9iWLOa3D1idUukSorwWubFWqfzu6tOI3H13%2BaS0U%2BHTNPjOQhyVAeivgA1kJb5HET2eApbWviYQsDV0KX5nc%2FOMLDvwb8GOqUBRgv8Ck6HcmdYKv8AZZNI8uSRkMgGw8VmOvJS24uR14DTpBZcG9CqsFSAC6xuoo4CJCOcUWA3kYBJuQoNidb0bfmoCLdY7zz3vfQJq6EJ14qod7KHfjcCQ30sd0gIlpNkVO%2BrWa3P5wF35n%2FYXdjhQ4%2FomYRlq9ENfwvOkAphdRqD8mClZ2kGQEVDGWAsqnMlcLk2kT115uoirbiBWhGyWaDmuRfp&X-Amz-Signature=660934fa8b56ed7f374339894e6a822c174f53973d5f20b9d2f71f2e37a4c5b0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
