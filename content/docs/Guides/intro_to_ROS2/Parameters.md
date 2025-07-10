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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDF66TU%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T091248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFu3T%2F96MUw8p0MUPGEVlDG4uisM2MBQvWm0UX18IN3BAiEAuz%2FfogtrhI4YDPaUARU%2FEAFfsLUqdEo84Bk6aEhFcMcqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDdB6cHTQw8SwEtQeircAzjWEVuHIyd1mKS8NOf%2F%2FUaFX%2F7g7NKIyWafu88DTF2U7WPYphuQFHD%2Fon%2BZujZiTadOy%2FVQMLfBSuOETPePstfZXVx8CXOIVqc2l5Ee6uwoSwJa4mWddmNZg%2Fy3NrKvhPbVZYiRj%2BvgVCsx1RWsXEjinsF%2Be5zyq19fQnqZxDOc1KWjSIjHPGbdVB2Jyec8dxvSs%2Bd4FeHF84d1Piu6DkiD89Y54vgKqlSDTmgSWZ1UiKSp%2FFIdi9xzgv17fH4XEfgOdOqmLzPwz7IMvRft4thbeJTBUL7tzSsjgUVcPKI99FFifv%2Ff%2BO5kdRBrDrTtdVdlGRLZiG%2B06KIzVn2zSBR4xrUXNvML%2BXEdZ2Fd6U4DP7pxU65wGn%2Bf9bPgHy4undrjdMkVa8hypI0N4UWj0WnUgVAdAhqPbmlaEs7TtZ%2Bl8NsIs5AMZ2ScDNKlb8O13hc7HjmBHeE5gP6SGMxCQIpAZRYPOCv22KdJwPUUN%2BvDQzBwaG%2Bz7I6nVjwSjuFQHsGq2d597Y6i0QtpNSDG5EUhUO%2FnT%2F9hQAv8oFpAZA%2FRlwRFcZrvtrG3ah2Q06P1yVG0qae7TacJPP5Bmk5ITOMV9N7FVX9MvBEai5AKv38sJfk0FaU7C9BwnIjdMLiBvsMGOqUBhjpv%2F4bJdRmA1uWR6gpzz8R9ZI9aYd3q6E52kaQ0rl%2ByeJsq2fbpehsc8QF5hIvmZGXyL5NCBrpOZnhJLq6GxQWmfIt0F%2Fay08PnR804HuP%2B%2FddP0DUlwmrlf32THaDdBsJV5v8YNV4RGIFxAhQN%2FkBHmR4JfQ3mkNeQ6%2Bef3Yv79Ft0R0tkpul8F8bo2OZIAEiCCtg7Fq3ghLGrOuJDHvSs5Woz&X-Amz-Signature=3144fae6fbc9781e0729a1c5b3477fa54082063cb27aed87b78169a637b8bde1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
