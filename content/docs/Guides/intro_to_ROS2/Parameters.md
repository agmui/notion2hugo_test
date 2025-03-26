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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SX4ZTJ2F%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T100912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FQdtH4RD6Z141lVIH5JovaTcZx0E%2BImIXvc8KakWSKAiASYhq1hvLs2paSKgCdu%2B%2FyR73XdpgJtN7ZuQ0AyYCOCyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMYOlBE1oGkazZSK0YKtwDf9rXxQDiLoyU2a2eBZXm629AGCKXi7tyHypRdp0ViJIhSoYri6KKQxOhQ8ThVkfGHHLa8iw4Q%2FOSeCM%2FNl0iHC3ZB7Dwuy%2BPudO0s%2FDrTXisYd1oBHlN%2FbdzGlUPMJETbG7CDqqiZRGqKk8sGMzI8A97nIln0xBHwE7HlBtGhE47DxdCfzXCysnff3rM%2B5uMz4S5rnYJkeTi%2BDI9yWMwJZW%2Bixc1EReYTdSvx%2Bz66PNSEmJxKYG5EnBPV7fhEj7ntL6a3i0a00qYzCwRXujVpRgoGgSqIstzUk%2FSg%2BS9comslUgayQ9JmI2r9SVTEfEbhUcKxuTzsrgqbeN1X3icOgqF9V%2FCKHGZ%2BreOZxk6GAaSq8pJxTwJIwc%2F8y0NrWB7XgHWdUx9xtI4yIJwj%2Fg%2Fe4edISLSyxAYAT8LlcN%2Fa6KMC1b7RSF1Sa35CKa9o9P%2FwsCMo1ARn2jwsV5rBKzDVCxceAyBoLGbDWOCuYAJd91LjRMTgPSmCNp6PdCHM36k7z%2BMpJgyhSu%2BKtx6%2FlWYaNKhTjr7pZs0wTjDn4hT7uwU0%2FJB2%2FRAsOwikNqNRUEze33PYEskXmqx2qXsIpzYPuDdnLx4Z%2B7dzy5fO2WTBFRJ%2FEropMB1CpcifkEwqoqPvwY6pgG55L3UCPAuAxH1FFMJ8%2BnrAgW%2BxaIn5W3OKMq0FzuQlxYm0ZUmf%2BEiTj4kE9T%2FVFvVAQp9bilNWSv2YX9IBkBV%2BILYfDqKeTx7a5k%2FmjjM9P0RQyjkjhwqG9JsthVchaC%2BMrWm%2BuQHcxL97PHcN2MidKk8wSArpGszLvX%2BSEfegjF01Z00izqc%2FvE4N4%2BfcGxkLLfQMjedmqnBEpA256oK2a7P8oSp&X-Amz-Signature=02c818a5a79f9e360ce6402ea065573d8b3cf96f122b7e44beb7ad8be29a3772&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
