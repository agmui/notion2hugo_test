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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XPHXHWT%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T090801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv1MJmeM2TzJYrAOOLhVEAM2ft4qw8icWwxBeAL7af8QIgYgnmGU7OOD7CbxRt4YvWYw8uDDav6Nn8PR3REBbwTb8q%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGeCRdtF9hHPe1WujyrcA2avRbNd%2BjgRUmw4eZS79NX5LhmS%2FoYvUiNQ8yvHOGI3n1SI7FvTENghSrHpCOBdOCp%2F4ZKkZdm6yQVSwNR2jvIfxBYy0xPhAFddkhK661theybAgFEXTiKgbtPd22pNr21l%2FS3H1b%2F72meoMdN5SCyhn1FWsnvMXBO%2FZ%2FtJ7DNy9N3IP0f8al2XsgO%2FtxQKaniLNyHTrDpBhDaClOZDBSWlXbCTsPAI9B4h%2BJgDEYtJ4xnXsbBCyk9S8o2so6S%2FxBbtWdiHwH3yHPSHtP2YLvbRPwgDUyXpEvN5FuKYKYhAgAe8gxwjbXdGujpZzT1jgCSNfl8sMowJBuIGTNaK8ZMwdq1pEYfGIJSkUBA5FDGBdPkH7F%2Fnd35aoRA8Jmv7eqVjR1BgVRkBoc%2Bvjsniyu1Z8laZLhyi03aDrZC2YGhkh9mcrAKyF0%2Fli%2FO5A0AUxxOHD11Y7rDpLnTlWkJKLn1BjwPtg1mfMMzvXmon%2B70VRC80mPrKeyojDQswlUts4Srt0bLVIRpnBIjcxbbVYa%2FAqH4kbDiwnHusFls%2F7evQ0RUSF6%2BgsQmk6lvo4LZyudI9kg1KoyvRI3nMOaTtgGFq6EOZEX0YtoEBorhsafjwMf8dhwCl0SxF6rlpMKX9pcEGOqUB190G67hken18BSp1Iag4lZy7gI%2FOkz%2FULC6gEGf7KSGUZOC%2F4RPKNRxhQQxd7l3W9hrpjq8r7Ai0PwXxH6HQX8g9sSyJPJDdIGWrPVmaFANdLe6pZ0VsjL1l%2FibxMdQ5Y%2BfL3bXIr7vT%2BQwkwhOJjvlqg1BYrTzvEdVomZUbsDWsXmQLHugT%2FvVq%2Bb5rj6GmDLKYUB78KhvJfwg9ROwoUpWXWGhV&X-Amz-Signature=3257c81f46c2ffec49f2c944ed78ddc3819f4f9e8408da7861b69960ae43cd6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
