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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYXNPSNW%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCNMlZjrmR39gTmNcb6HutR9sDGgc5%2FNDpSnyg3nH6b%2FAIgZnipwau9JKqPEtJQuiSCnWl8O3Q2WJO18xnyeS0MQMYqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLNbqS6YHvdotuRd6SrcAxjRb8q3qtHW9IHtvKr4h9PZ7EuqEMpBLFrok4ng5NGTsCSrfL5Zo0dYqRO3utang79Evra3074dEMxCpPphbn3JeC0jvRWfe%2BgFWXIi5x%2Bk1T5NSQiAn%2BJRAmE98rgkMoSikWs8sI8WJhhE1hCmr4fawzQ9oVZDwDxcF6%2BvlTQZV53uN%2B2cQF5U0sybsuIwm5%2B9dQYzG8kN6Qm5NM1sqXtmV%2BgIOTc7jOmrWjs6rBZK5wbqgls57p27zd2vmJa76UNXQdYx530LfT7slEWz9GYExHt2QHcIsEWFgt7ko8531D%2F8jQeEti3YMh07ZA8ixQ0ki9NEUGBxobBXPdZNT1zQq8wisUb7Y2OuyP6cYa1qh9ddBtnFCgfQ%2BTwYoBVMWh3J0DtXyIyi%2F8s36eRwlj1bmh2hdOZhfTkj12%2FDJF7LQ2Vcqi0qtbOpw1XXzY23u0ulvOTZ9FnBfxwfIhhFSBACPkXcpLE%2BR9bwyZKhQIR1TzZXHAScLZNmTi7JrBhw8movF5aeOouu9LMtRgYSKg3lIs9LZOrApGh%2BVITKqPanCf0pZzs4kh3nV3MtkOzDFecdGE%2BlYT%2BH0F8bMwX5VesEjYjcm5DZHlGjIFed52n8LWkIr6VLFmluNz6FMOz%2B0L0GOqUBdC15UtQHrWc0lxLp5716KXAh5MR2wsb1fibIw62O2V1mC5VLncYJ10kXYRwZDUkGy1dDqZZxIOdpBcEr4jYryYaVAwYDK%2FiM8ndeAx%2BD5peZ0VpEvjxMHKQw1sVbr5mjcWTlVamxSKFHxCzCuC3Ubno%2FgZCJSHh5xBO1egHZmhpyIo0hAlJIUtqLy0wcfwQSTUvjpC%2FTMHcagaYKiQHUDbxI8zu0&X-Amz-Signature=c22375f4306ecd4bbcc81e765b20ab3210af99c835c60447509250b6a7814c62&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
