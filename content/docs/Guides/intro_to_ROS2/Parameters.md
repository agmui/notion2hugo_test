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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEH6GJOB%2F20260825%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260825T011432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIH8H1WiZt7z03etzjY6AzpaUZ3yB5x0xzuh9mdUOvIJ1AiEA%2FY8%2BoVAJ%2BkqfXsaYl7jsbtoHKewRNu5jOZFE8c95sFEqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxl%2FI1CarrqXwgf6CrcA4NaoYQoSUUjIw1ESmtlv1NnOTX6QWuJpf0NoaIWsM9lA6sj1jVSF9PaeW%2BeDCuEjbFiX64k7K573bsmQ1b3%2FI44CgK40V7PWleQPQbXvSQHnDFDElgF7seVqErdbFoa3FOncW9VEvurzRd7L%2B%2Fwzp%2FfnTEsq2BhsXcEgBkpKXvcdFmR0L1sWt48cpfPNkYlrIZDSYhbW85sIktvasp848xvCMdT044ZRfUKwJWp3b8FqUzLBVp%2F9e3XBDV9bPAoijU%2BVSLtvESxovqHj3tRJ7Biq6KmgNy5NjhHI5qxt1aWvdscaUQ%2FyHKXPxfZBO2FyDK5FP6WmyBRAkH05PDQgVatGeSk3BmaiHVpGyUbFL0qJVXT7fXNWqrK351kp%2BPbC7siK04i7BI%2BxSZ3Ww3zIoNUzijDtu5VwwiuXGI5WGbx%2F2IfKjnTvVzFVue3ZnzMb0Vt4EuZ0iqG2YFhcDN0a%2BXOmfKAIicPCDbStALOd%2FOCY6CpXn0j0F04DNmE%2FGdEJt6HK1y%2Fmnm6OxNLJV%2FbUAae5EBAnboj%2FGi5V6nK15ChgCdRIJ0B2ZW%2BnavCo8d7DT1haPiX78%2BEApxNJcb3XPyfIzFIUnF8uR4Qu6aKmT15kQ3papgfONf98DFuMJ3Vs9QGOqUBFfqsRd3XtE%2BI%2F1LVSXcVEM2z%2BgSavSa7thXDkq68RIOl797o38M1uIExz442Xt2cw4Sg6oh5Lin7LvyZEIQnd2kjUdllbVr98OV9DTTwHvjAQaddPEkY0IOVFs5Qoml4gW%2FrfW813CdxCutssG4Mr%2FMdH6UIuIaJQtG0JimBGAvut1q7yCNNlc1sEqSso2M4vzvgiTKXyr8Kx1A6TmKb23%2BI3%2B%2Bx&X-Amz-Signature=904c6430433e70f8a1309f6affd996c7c1e0743b37fdc761a307d23b7cf87916&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
