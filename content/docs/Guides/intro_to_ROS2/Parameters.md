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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SUVXGBR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvZYKqWC8BwbiQwoRnyHLOppabB5r%2BIfPsnjKPX2XAvAiEA31yOx1%2BgVMQgyAzP0gP70NnknZd%2BT6HZZXOvnRQa1Qoq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDGJ%2BA0uQksUwEKKxjSrcAyfr7%2FElJxAumx%2F2cwjwlitq75rugC%2BZ9TbwglB7%2FXkCorkimp9bPF3U8Fo%2FgGi4uM%2B0Ag72YYInIa2ea%2FJHukc%2FaQFHfEnBiSkMKLNI1h6TXyI6AApsNvyDjDr6MJLwiul69sqaPlQiRN%2B2t8cuGtIRLee2gIF49mBhZocsBXhnW6%2F0j8xI2FnmH3i%2FxooFWhCx5aydAPbrZNBfQT2a9WjPqXZdwDzygGvhmlIqt%2FUiuP2t%2FUbWYJEjaCJnX8fEkDB7u8ix%2B%2F6xFlJ%2Bdtb0ZqezI8FZZAE2b2WsowhdKFhr%2BZ7FaoQ73V50%2BYP1sZOobKlCzJXHNHjTBBJCrXj4cyrewTqUIXeg7rVPsiC7L3LSBwIr0xq3VtSDRHsEs2uli2QM%2BDi%2BRBIw8X7s16%2BJQycgYKNcAeZGPjkT%2FQa0a0OjpOxwlRvuSzxn5OHAkjen9GFUVSczXro3G9%2BflgI1DGvwymSbeJJeAhiVNfWvHmQxHhyN4qwmhU0Qj9U4o4p%2BLa9ccjdNmMl4br%2BTMDc3cQLEXcgcEOchMM1PfffxI23xCSL8iAJqL4MwX5Nd%2Bq41isZfj18HQ%2BCKaqdCpZuNr0DkuyoEE7zcXbl3q%2FpiiWo8JL4mdDI4zx9pA%2BRpMJe57sAGOqUBTVb8M2irEsniCyEQ39uNw3GMkUyCxVPLG1Bf2zhM7SCNjxofZBzaiehBay9bTdAAQTbgzIyv%2BOYxkhWi0MmrL6LD7Ld9q5ignd5Faz1R4JbDfTgTxIxjy8%2Fg9BwUrKBFd1C9NCQlHj939AsD7UNO137iNpbNYMfYFjuV0LWpdOm4nOoE26flKtD4RcjK6aM%2BFituI4OaDMoSjL4mGppjBhCtsnJR&X-Amz-Signature=c7345a2efdc0fe50f71dc1611c9d6c7cbb123b1b68ad5886961bd67ffa706633&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
