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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPGZJCHU%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T210733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGNEZf5dCme7x92gnCLIT5ixgJb1ve6QjbFr%2FMLKyCJOAiBHoNaDtsQGx9CiV71duqRLML7nFN1vgA617YstW5nMGir%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM48Nz5%2BbO85e1FpXQKtwD3l8TxB%2FKIcYpNndLxtwWmR3LELLTWz%2F3QfgdW3lHBzkdBCF49SIIJTlewfDdrZMwc%2B8%2FFyyXaLIsktnptd3plsVc4oXs4GNhQbh%2FVxx44kWnLF%2FGtDmDCe8mJ2mkYXI6euQsvshbp0JQhQ1aAY%2FHBICisSqwcDi9qal0%2BxaiZjm%2BF%2FDMGDsm8deW2V4YKcVZKH95%2BIbqjgQAMYYnw%2BaHrrTYamL0RUg1KPZ8JaMtQ0h6CAkgcO9M2x681sEvcdophZiY2SIknzl3B2ixnBg4Q%2B3ss4%2FYFdUv6N4pvlNZyjpmU%2FANNJUrsV4x5MCkXfoPfUVVBpbsCcXmcVncMinwrQionZNbfeJjwgasVDEyEsBsRS8rj0GMBOl906PFNXxKYKVBKcl3eNqT0alPwgdJ65ZLxIb%2BuzME7p1ANuKCGARbJXx7HeZwk%2BNPLGrJ6bxDesCvTA%2Bn7xolPttzzO2BQ%2B6rswTSiMeV9eg%2Fl%2F%2Bx2h18Voq8NxkEVc6V8aeo4n7TnduIm0GA6ei2pqM6y3Y8JqIGc6t6e3ZPtR0ZN08JaGNx67c%2BhQcIVb2RT%2FZesXiP8WPfZ%2FqrMjfSyf1HIF16VZqCavySIgZqgfuEkentTVXwEigfcT4MhyytIL8w4dORvwY6pgH7IAl9gBltFITzlHEH41h3JBoqSN8gXyZcsO3ropociH1%2BRNZYacNiZ9k%2FCl5dR8rJlsZ0CSJIOyZi4JlxDpvuSf4docFcG2YGAmQTBI%2Fyt4A5SkipLXRiw2YPrW%2F2Ase4R7LP%2B0fvxJNjK4m6FVawSfgiMISIsCa%2BptEXgbmfsrS%2FvPC8ATBsuKAP8Akbul8AI1ugWjfjPiDzsfQeGXlNM9LT7z01&X-Amz-Signature=e9e3779b6a94bad1a174c4dc88e6c1186eb7ad71349b61b7faf036d8f6973c20&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
