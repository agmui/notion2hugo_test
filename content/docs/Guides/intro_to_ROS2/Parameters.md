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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQZABCPC%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T061437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDNSW4dmN8JYuAq8o42P3uve8UWFEUg8p2pWt7Rp3ovRwIhALDmyzIFXlK%2BDbGQZQA0%2BXi2abl6Zt5g42PGWtT1fakWKv8DCD8QABoMNjM3NDIzMTgzODA1IgzZHT5Osj%2FocFP8CNQq3AMbPoWHev5ak2D89vmqAD5WOcariF0JhiNl%2FLGwNus1%2FhI1XHH5oR1jlMZUOc7UlwHiTmObQJHeH28ACf0fgknHKRBMTAgg3E72LzmC5SpXygh13SUlcpna6M4VZhwWYlUU1e8%2BzvD18MKLV5%2F9LXfiagqVsFA6C5ClvslHT1YOOf0SduESiGkg0MxfOEubf2P7CY8gV43wtO%2Fg2lKGxOffyyPFnJesbIjhro2QmgzIgDVqCP7jiPm7nbknKL%2Fn7AFp1X2h1PjAcRUYtlm0nMfVhrooRd%2Fke53EVBEqPfvTeo24GK1yMnJDTQcC0Y8rhwK%2B43bX5BN3NY5mgI1hrJmSZcK10UAsGLTg2Zui9yONmzv2uVuFiKVehpip2RDtP4tZa8w60cju%2FPBgCw9xMX62mlIOHaQpe4lMigUB7GWpbcAvZVgSiNJChMN1%2By1jDloWgzydSiEI10NRWHBBSefeuhxNIayQL7KIYp4uc2RVCYte3ufi%2BPnl37yWst7YFRLS3UNMsAen%2FW5FQJukko7PFJ3o%2F4Fzlg04%2FAzhJye4l%2FilxwTGQuTj8VHV%2BWqooQlwSuB2R3L6bUAUg1ne%2BFwEoSo0DBbBoMSSnaLzTYAlfm8cM6f9tcSmpOVkoTCJ1dfDBjqkAVEOhapdqD9wMFUTP6iwvi8eY4s53jt7MN9waqmnZfd9GIm6gDqjlD7TZohrCVhtL93DZfliptyDaeRlW52sPKd2h%2BAEiNwjwqz99ouTh9Hk3m7YvxCNaAx24%2FzlOUUgCNWfRMzQcsLl%2Bcqhcw7mSQkYROiHZm4ZDmm%2Bfnjnx%2F4pDslIJsYzZwSRACh1ASvc5wp0DMzRWVtq%2BDOXXNE4owwMmiFF&X-Amz-Signature=6df21b2ca68d70e9401aabf51967f77013396b0ab7a1f21db5538362d562f28a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
