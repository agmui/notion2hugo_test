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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGWSJ3CD%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T131608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIDyp3PDxQm3qoKEg3ttV0SghA5y5psCTSGdl%2F%2F%2FGou7pAiEA4DNVASemK6mFBfNWJ9ZdfiEubK6BDAG119w0JPORl7wqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKNVaF8QD4qcMaucHCrcA6lNBH9WPhCJSWquR%2BPTq7sho%2BLYncdFdKdVLJ2v%2BPN0SSQyINMBvlDKR3CBGMdMqw277Yj2%2BfgDTsWisNPVJagkHxQYaGj1Es7FYJ3wqR7sAlVL9%2Blm078z0C1aWY7tLtW0LjZXgJYAoU4KBphk8qcOVliJ%2F2OczgQTaXGMzHU91tjDmix1oaQg7s%2Fjbo4wEs8yuX1v4rq3n%2FJuufW8Tk8btgGUjJ1hucpDIuyDtQmGXeA4JEkGLnl8%2FEiKBFLNkC%2Bn3ZOiBVZlUe%2B2HwAZ%2FpLNe%2BRjurgEqMD2LV6DCU7txiAKNyUP3sTdD1zBZUwWLkHCiQAbXOdRgG0uRz%2Bklv83sVZI5iZFl9fO8RKNY61xAhd45kymHvz%2FirzO5RUr09HruaQwkPp%2Fff0E226lV6BBkhHsgC0FeaeKHRYfzt7j56dB2OjiGmqutWPqcG7nsJudu8eNRjX7KDBLwj119xie16Ze4v8UDFSbLVHih%2FJ9e%2FjiKa0FEJDpKwAE8Q1CnKyQFHw8Bo681TCHPLaCpYkrLb94xEhSA3%2Bc6G6SkvMWGxlr7bIZS9D7YmCWqhFPAuTORWJiQpE2Oy0r9hz2vd9PPdX%2BuYpDjrbZzMzmxV0N%2FnnEG8zQNjxXOgFdMO7Qhr4GOqUB7MAYpe6lbo62JoKj%2B7i3dCeFVjyy4YODeWVMEDY04S5I5GN9ZZKg2GY8J7arG1faKwOcxRPML%2BqkUgzLJotgpZi5iXyalCyvvB5v4EvqmHlGHsbbRYN%2F4WbOTt%2FNhXA026fDmFRfJrviCKDMpbv2wjM5EdekA0S5vpxcZssbvC%2Bn4rrXwTGhe6IvJa2Gu97eV23%2B9%2Boenm10M%2B2wPvc5byyNaGSU&X-Amz-Signature=f39e30f3daf3c9f12630bf2a80102997939f1bf5fe44ea05d971121341915d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
