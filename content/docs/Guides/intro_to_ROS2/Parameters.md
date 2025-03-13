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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4XW2RPV%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T021621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFcp9iKdx7XfqTJE6cwydBbaXYpYhVnLgj7XCVwxlwRNAiEAw%2BexSS6%2FZ%2BokxuerSgaAKI93sWXcfJrEVc%2FcuvhaJZYqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEmHjs5ATeT0kNsxBCrcA2q8jQ%2BMeaMAPm4x18rRmyYwscfYVGdZ%2FpjGMcoaa1rYs%2Byc1D6hGmY7J2cJVaVmYEjPg4FZYNlUPWEjO2kUudDB4qGPkHdThd2Z8kd1ULanzC6kXwyMh4mjdOt3veBp7KKpsnEGHym8IXS1IayqT%2Bz9B4iO7fM2dDB45F4%2FcLqbKrMYWQy5aCWhUl4iDS9ehWMq3pw8kxh%2BOcq%2B8g91rEhcZZO0KQGFhkdYCzgwRKwmgjB97CTGdn5OIM15iTwFU8e6VahawncUWcmHY%2F6dEznMGkCFXz%2F6bU6A%2Fd5F6zBcfWijpZb2c3H4fhksDIOyhmG7d7Du8cIbCySdMHTmMDJ5CvAjSX7EfxO9Y2%2FdRlHrhrYeP%2Fk6z2TBgn43yReKcP0SqpGkskrPNj%2BXmulZkwu7ZLZzjS2T9mxbjxHvtiEABA0KyaNv4J7hALAm%2Bjd9atpoO0OdeCP0b4werP80NMd%2BHQ9xd6gOxu0xdb%2BqCjNrLNEdheRTaOp%2Bt5lkaXY0XlJXP5SkOHNi5gbUhbIKZOfI3vld%2B%2BJbq5WwWh85zDDxd0mt%2BfyVasIIZ4Tg5cDOD8CoIhGS0%2FQJdjPkCFcC2SDT0I6LJ2fAnQy7%2BYbG0UZjIXnlOucoqJX5lrzMMNfgyL4GOqUBZQOiq9OTei0jgSeKe9jJGPy1OIofxEZP5PN93fMpRfn49B5ff9Rp3oJgFVpyA%2F2GFGyhhRlIsf%2FX%2FY5b66ASmn6VgM7CequqGWkEFrsjYkY8hPQfX9XFfw81%2Bo7QSrLiJtTMZkDD4i3puCFQbeyjYSn%2Bhcr%2F9mrGweljt%2Fs%2BLD0BKaMlrtbDIUhrjGoZ03P8514L6TMHwJpeAaPXFbyZa53ctNFn&X-Amz-Signature=4908bc39bde5306848fac86bf3daf1c84a62fefec28a1e04fb143ad3eafbac35&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
