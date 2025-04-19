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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAPD5YTU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T003756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICeZGE7xZlhfGLbdb%2FMVB2oKI9Qs2%2BmZm%2FhVwhrqytEwAiAxGYgkNYa5saxOE%2FO8%2B1Pf7yiUDF5BLJhWfQKosH9njSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJRyalg8o3rBHn%2F89KtwDdj2Na66f23KSYSsaR2QMWUmBJk%2B5aq5e2hxTi5dhb6yj4hJKT8KUdXIN9g2a%2FU0yF3K03sTT4W72CWKRBlSIVWPpUe9B609kE6SMZfTiFVLOdyxO60V5j8VkvysdDUSHys%2BY3X2DQjYnXep%2FJLPolT2rw3f2D9jSAP4X9Rkuq0WWJgX678WJDJx8XuQtPfH%2B2mw8CWbpV0W4BG0ZLwcz%2BlQ4m5NUQEB1iM8yVF4Nt%2F2nNFhgAte4eM15GbSS8yOKihV33gfPB4GaovjSv2vn0nNDEKTqiVka4DTkQT2zuig36jbjfordxlK%2Fy%2FVMiyvENdczyMmp98GFd%2FdavelIjnrEv9aYhLvA7%2FrtvC7mCWpuaNJnB%2BFHCZniGFNxCT6rQiCaQCr2wT0fJnvHph7Mx4SxR5REeyqPcUzB2g7eFUYnAHM9eeDCvAO7GeV%2FgZZSOI8aFLTUHDF68FX%2FjYN40PM5BvkaPj7jmYiAXwG%2BjtuWhAfxdxZtkvpcxaMeza8AoVEmx0CY9j4e7ztmFuyDIaK3XJNcC6P8B0R70BicPRd%2F7n4suvQs0z2fgLhAGY1A68jfYnTHHjkwjTmdmydMsHG8fOqLsIMuhX8bYE3tF%2BVPVUtDJIOcYG1VWKgw4s2LwAY6pgEokqMdSodOaz9Q3S6r4p38Q2TnzrZ9LxMSD52OTr4ZrMnUyYUCS7%2Fkrr2SNYcr2fpCstIGAqL53Z3YmTTapoFCMB7snJAilBXNGI3gQD43gOE3MWYYTPvGhYCOtB53OKgHYSzEEk2G1VtYEIGcvqy0K0ytJh%2BEOIb8zaCD3m3tuhDO8Do9YJ2Osbo3jVyQdLKbJf392wL27L0gNd0rxD9PHjKtAk4z&X-Amz-Signature=3a4a3a4bae4c7ba14b829ec52d90d6e308a678084bb7698b2920cc278488e4be&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
