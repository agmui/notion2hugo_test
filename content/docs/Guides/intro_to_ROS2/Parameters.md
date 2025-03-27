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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV5EGXBE%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T190147Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm96I%2FL%2FBjplOyhEIlMdXq8ENx1vor2RbMLf5SNdduyAIgfbS6UMv6YZt34mYaaYFUfcU4nVsmwztAwacRcmZ3CtUq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDLDw8PVv9GVxAXHCzircA%2FHSyRHTT0WEwDupEVbRBwwxfnoqUgMlUX4xHv0Pe%2F7GokgKIejaInLP6fQR5ywwh%2Bn946U6SggJHQMq7WwxxhqrvuqGvz3d87ExJLinvSRQuzblgagh7Y46cPx%2BlHoZBxkHKKWpQFJDO6b5Zd%2FnH%2B4Lg8a38UPSkRj22bYAToHrLVOMBm5OrGu41QJJLxAqQ%2FtXryZ%2BxizyGSPgf67Gr64dIiyWfS4W6y4NLPBfdXG3OiX%2FAKpKVxfzIZB0ocb0cNlDx4GP2n4wXwrg%2BFPy0zUiNT8UH%2BTZIFrIQRzLHHaMBUxPfkoqD%2BpqdqO9htkOMHyIrxS63cD3xW8hbcGaWzxkveNmPfCm7NpBqS%2F8KomKNZ7PVyIt2CUhP3Gt%2BE9m0QgQF3YcNET7qMbMhciW8rs1fjdO7FtNLybD5S41W9J8e4HyENXaFYn3x3wE3e%2BF1QQyfeBTvaPI6ZFPnIcJPTBVsikwfeL21c0wUXDV%2FWefXsGCRgoAwBEgiuSvfaMsYNM3fmxGgkayNTqQ5BChLxkmA4gVddWY8wM7rH2oQexngXodnH%2BV0T%2Feu7HynniBDDOqWPmV%2BrIBy38tAiuXq3ANku05H2awI3p1FS%2FFUU47G8s2NZHiwJTIl%2FqKMIDAlr8GOqUBt6%2BdWicasVCIEA3jf7%2FfSzMHdJfBKoQci1fdAfWbt9DICzJ3A%2B4oRLXaDch4M6rENDi2TM9LIU0jVMG6d0RUtdlaE8Q0mJkxBaRyLVj7SgrmS5Un2KbnKG7WbCxm%2FrGFCFUa9NFvhqlVGEFRRuJvInx0R46tGcrDJbxwj%2B5BT1d5xzcG73S1Y%2Boaf6kgsTuXu5kw74Pw6zzHzqEKYCxMJVBd2Ry4&X-Amz-Signature=2185ad092678c1af0b0c1e5652103ed8106fcc76d474c2ebe17e16e5034e8181&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
