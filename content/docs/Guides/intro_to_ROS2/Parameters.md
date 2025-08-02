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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5HTVE52%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T181218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGhshUHWX8Fc4E9qRfkqu0TO2PJ4zqH9E2LnNGGHJzDEAiA%2FKKO16yurTyx%2FHZTOyv8O31UnntMaDuO0lgUXJuR0jCr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMHy1meqXzZbmJDz7OKtwDwSZCTfdwXm7lFgnrqRwdEg1zggbiTGwqUuA8TEUHgcz57a8VFqmTVG%2B4R%2B3WwNmDaNDvSYSLYCo0oobBRhOyQRWPLt6cvTLXZ%2FY%2FltYtgOi9g0e4fw6Vvb4Azz3vxJGtY7PqWMgAmRxT3uJ5yze3aS9IYdlzJIiLHidpADwp%2Bp%2BvY3SMqVvSTabhbSomkYGftLd32lNCCwSL6UI5EDLG2X5h%2BrqzEZ%2Fo8VDpCJ7%2FcDMRm7OuhFeYc7y21Wj6eJibWOJ0AJBDFr7xNVZofh2XMAGVRl1zuLQFVFY6HXSU1pVmRqRCu6%2Fr3WGOXiDx1yqOlNHsIenGcTstlHYiu4TAyJoa8cqvd7hQ2fYWYblPladFMhKCUl35RvXgnxyd3zuJXGUPdeQOrivNf25%2BKCcW%2BurmJs6dlGCifvvD7d1hQIE2ETLRPyNgbubXNa3n5OWVewDkzcURO2TdGy%2BHhXMXEmeQs1QbgAEBebkPIk5IcsXmg1%2BhUQ3IRV4VBmwI1vUdfH5XsQigKQrfaXLgRsE1%2FruSE%2BIcjlx7frfc4vrG24Tg%2FOycmXS0MgUqkV6A3PcyKqn3uSzJPdj5xzkai6Q6OremCZDuWw6gDGMYkfadTqYuIQoZTXGFPZ9Lugsw4525xAY6pgGXC%2BoVz06YMqhmzkV%2BCmCRvZ8ekswrKNb1T590Bmw2jLiiUEjAy3GPIKRP37s%2BsPBRf4HcaaZLjQRKfeL3%2F%2FjMKK5NoF5eT8leN5iSH%2BgtT1QJvcCqWpPx9voAlCH2CKM2%2Ft1tB0VnhPc0gpEsxmhSNhmPiPBDss3Gg7uJmGeeDKA%2Bobz2aHpQvEqjpPSZfSMmCx56ryLXNaSEZfYZ%2Fl4IhBKdGoBK&X-Amz-Signature=c73d507205a6dbe11106edcb2837467075e3571b72b62596aad484cc4730ee60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
