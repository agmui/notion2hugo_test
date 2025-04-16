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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHK4UYZG%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChwnEApcwi5yFko5xXT4QZ91kFyZZfYtc9XLKr3ySNRAIhAL86tnwB4uU1NmdBBJsMJqks08dgjX%2FVUnV3WvDqPwFqKv8DCEIQABoMNjM3NDIzMTgzODA1IgzfLUdiVMYq8n93sYIq3ANc6hLWrBClkawFD8RJjhlIOVnU0JkIKXThndPdl%2Bpa0Z2JcF%2FE7XNef1RI01OwRBRAvS5oZf6Rf2ceKjvKn1kt7%2FnoQHx8RtVwN8%2FAPbmQSfW5tMPYcNgMK9tdpQMTQnOjwC%2BvnFCZDMsV2fjFPcMVZaGQapbs%2B9E7V5%2Bd%2FmxtwCNO8P5q8urFijxAx4wK6eWmDs4ZcdK4pwPPHT1Q0mRpBjONsblLKFmpWVfzwmJtn8MG1UyUBXET%2FGUs8WOkxGwgWzuac7rQ2kCZnKNm8Tq06KdCEi4L%2BWwj7g1v03UUOURgLNhIFuvTu8UwZoVBqMLDGpweflDiRsu5LGBDRwfIEjlet%2FAyA74QTExT18k4U%2FmgXiDDpkjx0%2Bh%2FPIWOHC1RF1p7M4npHdMAkKIJ5UkiZt%2BJ2wn840Bade3GFtU6spGwhQX%2F4kLOGut30bHQZZy02Ewdud5mKOpYjBfChwzVKZ0yvf3kF5vDOU%2B3pG9%2BqH%2FpvuEN4TkN3ErI40WIsQ5Qz%2Fi1FlnDBiganG%2FpvMUDof58lV9kmAKvGx2ymTZ7vUexHg30PaZP6DoMBe%2BP7%2BeqEKer%2FcASNnxdVIcfItFyUFbPgFF1%2BHBWiDIt%2FOy1zhbHKYdTcULGyZWUojC%2F2f2%2FBjqkAWiDLnpo%2B%2Fqs%2BauIRQXxNmRER4L6lfWRqDYNBCfwldWa0kQcH4ZNEa0M4gszncbrp%2FrMOjhKd8U6mr%2FzZIQajRG3I8exiSbVGtrdAVPaXV7PPoHbAo13S5l6vbcx%2FiXW9iyNfHorsHu3V5U4%2FPI2z9lDdXy5%2FDzijU2HtJb50aAdGQ60HqX%2BttW7qB8Bf%2BSYaaBUNWnGfThVjJsQtUx4NELbKmwW&X-Amz-Signature=01d5fe5ac4683fc89fd0245dd55da9c84bb742f5ca321361eaac226a65b706a3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
