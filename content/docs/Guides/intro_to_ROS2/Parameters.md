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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ANXYFF6%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T031924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgh6nS04tGDiUnS5DExJX6UUleSO7I8lmnynOogG0%2F9gIhAJe%2B0PnuBFGGSV%2Fbp0hniZhMpVyR9XsjSWHTDzUBh9ZwKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkcTIEFseXl%2FfIwT4q3ANLcP7tWuDuS8J2zSBXubFGCMvZuSDyn3Z%2FJ%2FR7W3%2B5npq3WO1NOPIL%2BxWxbqjMkdcYTKynhCuD78%2FOWIrLkqf1W9xUm3WF0%2F8H0Pk1BBJ5QVwxEhYh1CHuj5fCu4Nj3RiHP3lbSXg%2BLluaMVdfmcRLlOFAKx5xmW86mJRCtvgoMFWWJzL0KoPUZVky%2FDKvv5eIfG7xWD%2FrEtUDyCtT5PcuIyElH0MhppKZEl2ehpYiQGSke1GS1bVsC1R6lc2Pd0qGJwyDDwP1YAM4z8I%2BsNvznwcCTJEaAZpOT%2BwDgcIjaGvhp9ERrZSUPZd2XA6ZeobdFDvNJWHjpQWEwV4l%2FdxdzpZvXDKdsAthh56MCx11g1p3rnadh6o2K4uCNgTOOOlH5iaA3z%2BoDgs%2Fl86UVKFEKEsrgEm%2B6xyctyMwk%2FkGSgU%2BUi68rl1jzIYlnOKnVOW6eAJE1m7t8LVR3qDqZtu%2BPBjhV9%2FqgLNy1p5UXrbdUv%2FoT0abPCIuxoTb%2BWjPaiOu3feAglptnTrPpqLRE2RaCq2tKWppeRm6Q7TB%2FRPaGY9Tmw%2FKwrdNqi3UZUuZIMG8powWGCvVa1%2Byivz9Mj%2F2LyIdKLF%2FZWj039Iy4RmFVMVwJrs5kNRCzOet4jDin5S%2BBjqkAXfLsJxkNrU9xxD4ZIbfNql8E7b8L3L6udHDLVFgN%2FixUJrAZ0g0%2Fot5u1WnT3WsOmuKGDTw1iiiUMXz0sQaENB%2FQfaMV0R%2FS6Wn22azwiD6krXE6azCsShxo2yM%2FIYRrWSApLGo0QugN09MqmalLD59brYVbkOyMHXtTiiAuooSryE6FogzDlKZxw07Rq9o0UkSduvraIWH6vIfwVItwmdag1%2FX&X-Amz-Signature=e78d4b513f69313e17929c37fdc61cdf88c6b80a016d0162f25b12208d1fe1e3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
