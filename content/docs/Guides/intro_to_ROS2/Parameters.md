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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466377XSL2G%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBxYcFJTIT%2B23u8uZWU3IcwuwLHh0ym%2FkOnCwgG0Gp1%2FAiA%2FmJxiDY3eD1ovIaZ%2B0CaDG3hM9LFVDWjcljbbU3LyDSr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMGENq3pYLLtu0QlIVKtwDHlapqnGFCmLQScRfNiCUtw%2Bb7wrxtjI7fjN2hixWEBcl0bfr4WoMrlBe30r8z%2BtYvcccPx3lo9cfwSwKEfcE4nckTVwwzq9kZvDcut5V6FU044tEhBSXDBDqOw9sriRq7bWzUigeB7AB8WhzrX%2BChfDXSAaSDP%2BH4GzgkCDC%2BNY%2Bfi1qYeTBVUO6DCk%2FKnK6QfZBMgdiDBx9eeGaRtVyxPsoa3Tkxb4%2FBKtn%2BjJOwQTVl2DzNjDoJL0iIMxgN0ufn64k84dAEa%2FqGpilrfyhYTAxzQlWSvFl6kFzOoOKAv1uFgY8zyC992s7BsVOhPQOD0tYKPb4bp6hNThV6a2JxzHHnWkyKwpFZ8O0oxV%2BArmpmnddmkY%2Bgx9OTqmLmEIBWBeL17U4r7TE%2FQOkI1aKxA2UpOJXEW%2F3Ii5p6TlQ6Kg8CYla5DWPElgKtCQh1HZ79HlpnzUH%2FP40xmudkA0uCSHQzWuGRAOFOM26UiVr5qNVArjEq8MkEhOn6G59HMhjnxp5Bl%2BUadk3c3Fjc5qqu%2FV0JBYvUiiJcdLh2Ym5mC0dsg3PPOh18zLbbxYYWp82Z1%2F1orZ%2FzCQ6ptUIl7cmqbJifzeatRZTqefbYTkgTPIFI42uQjVeebTJKMMwx%2BPyvwY6pgFqxGRcUrcQvpUYI8kTaC9z%2BdsYZIIQ%2FEBAoSlgOTD6dXLO5oRHpliokWhPApzOormuI7Z5KggLEkldWfTLluQvBQtFlvqOnX0RH%2FId3nijsogZsO9pfP6YLtPEyTYFaJ2hJ%2Fcn0VQilu8QP1xxj2dwwWMvWg0SKHmV9BjrOTfOEq9JQbcjhob63dom%2FMLMxNnCNQedd79HFOaXK6xycAdyFkZ4ZErR&X-Amz-Signature=13245fd3831913b31ad5b0d6ca4adf662b4482b2cd171e8bdb82250234b655fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
