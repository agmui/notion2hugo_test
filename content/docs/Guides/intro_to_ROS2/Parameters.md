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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX7Y5CPJ%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T150740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQD%2BwqIaOsRt8fvEJ058m335AoP9XHWoQ4%2F2Kk1OTp18nQIhAJcPaGCgKn1QXVgLWr4LtCuPcMJwZjaQoLTSyLwJiCkBKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8es6ZITj%2BnYI4z7cq3AP9xysgKVCSOBQJ0TvSP1zA%2BXbFu5RZELxO3llNjxjuc4o3rrnwhtAPwfhyWOCoGZNSzSAJkyTZUBXjI4umlUvQBaDAJ2q%2FZmeNQU%2FVeJ7zkipWUkwydL0Z2NKh5BavSEjvzWGVZijJIyu3j%2BnQvPMH%2FOWOJEErz6ZuCgyOy5HnnmmRiBG%2FYkFrpr8xp%2BMxlmpZAZ1pIVS2BDCg49fvLcXuALENiM%2FFK3TNV%2FLFe7YGgm234y%2Fy3vS%2F1IElAR9IyjIPgLroUx4kejw4upjJj%2FKXQJwAl7XrFz0FniIHd3oMXj68OuYPDezYWuhxy9ezI7e2js5v6ufRowSStrRCXDbl5gFMlw5RcMEAH0QwwfP9EtgFDqSuJU26NEZL3xaJrlf5wHFDYMmrrQ3Rk9i598pMg4faLven0hSc9kugT2xz38ywr6V7YFEwHe5OHK8n9bUkfSBTzG%2BwgGDwzCCot3WZWDUKae6h6EHS9RDlkKv%2FbfDX5vDFrWdG0yia%2F35ZcinIT3xOw%2FdzrgzP44KTkdpHcyDqbKF%2FVsokId%2BQB%2FDTvqKQSH7%2FxZWZSzaucehTQkKqKNLudPU8hRaI20g0L52GuvxXOSf%2Fz%2FlnvwMwGNqvTbXcohYDo2aFinnFgDCIsPHBBjqkAfZX9JquPCtTOPpZi9EProdv7rvpuQOrTlGSRn9BleULVJh%2F6GUZg%2FLE8elCVaaWcKQb35iURcwYbvBvLHCXEUJsUT8TzVNd0KEk0NUIPwJeVgluhDzKw6QEdCOmqzkuizdQPhN22PHEKFT9yPeyVmyH08bm4v438APqzFE6XiH%2F1mvwGlu48TjJTy%2FGBjypw3K0zw6S1OH4jJLaQPzoOSgX0vMt&X-Amz-Signature=5ee3dd1f36dcaa77ef31af31c0a81b338b03a282de07b7b471eae3ac6dadb536&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
