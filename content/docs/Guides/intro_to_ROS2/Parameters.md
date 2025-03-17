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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL4EFMJ7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T140852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB6RCy7%2FFgHs%2Bi6GuvPsJ5QEguAjvvr4sI13s3O9r32TAiA8f1hirAtY5MSZU6x1tfqoaVY7nDsOekpwMYUFVS9BsSr%2FAwhHEAAaDDYzNzQyMzE4MzgwNSIM43Nr%2B648L9o%2FoKzXKtwDRhUQsgd1x%2Bpwf87SPqUgeHG%2FyrdGkwQsYwL%2BoA2fJO0ueQoaoRzgXqRj3dISZR5lqQLYdd6bBoHBfkpSSJLsq5AHyRk7K6ntBMGbBwoF88p0u4VicsrHmKAjREDp%2FT2EGMWOSA6s8qwP%2FrII0s5iBc356BC7sE2XBVaTdPh8PKG%2B4PytALbPO9Sx3uF33T%2FbENHYIhN6RQKy%2F1mnNemc%2BJSvzqkexMTjRVaHMPpdWTo1A2DyXukXxBCmhpTEajhcK0a37diNg5Wa8XPMhq%2FKO%2BT5z6vwnXGFy1t7kMjK75HySf8cpPt%2FHQTZWN%2Fmko8Zrfga2Y1qee1YRg4fzj%2FNVLgxV5p%2FtcN%2B8C%2F4h6OhF%2Bw8INOPVg5N%2BXFbB3X1FU%2Bjtu2rnoYGpEZ3%2BJJLPf6VA9UDmdhO0hugcA16ja5ce7Hjdg5BSucOW2yyVizQDzETEy4HvMHYmTr3AfjjeaT9NQUGrxOxp8xqO40mVhZB88WQ2r%2FPiua6hg2Sjc4twXgsFESpb5ZUBEZEm%2BlRw%2FHZlsD3EQu3ly98KkYqpdTJZXhIyGFv%2BY7AhY1TdnNexEthfpPQYZhRtAq8Hj2A5mHEoAY04mV23tKWlIdVkWL4gca5KiPsGmCPX0g6%2F%2FMwzcngvgY6pgFVQIFKGA%2F9rbeT9FsdLyzkTD759D5vdvA06Gh8qdiWlGCOxSdVy8ZOdIi6CY1Q9jWZknJ6MTHsZzZyy2VcdLJ2xJnMgJ8kA0c3lJwM4vkKX9xoyRWefDLrxm7CXa%2BSeyleOVaZrhFtFhs0HmVVnFHY3wTazKa%2FfH7ENre6yRrTEtlWMDJn13pv67jljqKjxBkhSvCydqRlWnbYOr16EfpWWq58Pncc&X-Amz-Signature=b14795fe4d175399759536a17d7b47a65058afb51db9c433a62d553918e89f64&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
