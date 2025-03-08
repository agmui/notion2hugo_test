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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QTFXZZM%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T160306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQD4HQu85pmqdxkaqNBQ2mDqD6lFAHS01wbfmcpWifENfgIgJVGN6pkY6tf5n8ok4eNHFnAyh%2FJ9Fu7HmhQIAKu5HSQq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDE1M3jtSUlWq7Lv5xyrcAwmdnEi35UJCHi5FtFdZ2kcEGWfqF4t8WaRbW4%2BoBp7tsk4Pj06fK2ZvcoHq93pHypwgYHAFhLdgsqsviNmk0z0aeIbgmFfb61lvu397fCcQI6oz2KMiXCVPtrWOecC36wj9OtZDpR0O21PFI%2Fk8nrxuXYhqYnz5kFl1JHXxoNkNt%2FB1Yy1YzWw5QqF8QN4NKE6YPXmxsvlukNmafoOgOnv1dM9Ozmq%2B2SCcL72IF4%2F5jxHeOpJqKqvA8LNHLkbVPlQRuW7LtzzishgD92TqQvA9EJkdu2PZnWXENO2tsS83rHwqLGuA1pt85QyEva5n5zKs2DsiclJIYS9WCBEL9NKgfVYzVstLbaOBAY8pW%2Bwhh3%2F3cUD0cnGSUS%2Ft1t%2FYsVz%2BCGkQtlH8pxYdGrsffjLQ%2FrK7SlhhpSSQAOiJYomHkMA%2BC8vbm2UboKTQTmtnoOMz8bmMiMdHZPv5WlSaNIVkFGEOwYpsjRPj3MHj%2FieRzitCLlhfWdn8jzMnKdGnLTmf92qRrqiK%2BE%2FPgniN3K0YkuEUvhScO1Al6M2sDCtM0nkWdtpYk8eDKqP%2BKAw2blY%2FzJzvDhPf1pmrTkPdoB0Bnp06QugKFVYW2oC9o4Gp%2BO%2Fc9X308y8OqfooMPWzsb4GOqUBuaKWcA%2BTo5vOU8T3NQhdYSC9zUjW%2FmKBpwC1Z2aqoOgcttI0YSVoy8v6A0BTnBWKg83KAhT8YW82Z14%2FM4lXPCKxW%2BsvJnVIFFprn%2BBUzIwFlLMbodaeoS4qwetnIcgJDVoSEqVOjL4ZHPztrIJslX%2FS0CKd3cN4IR2ixuA0Xi1UJhCzUrK750jUiaq61ObNY2rwvvAieKVRsyi6q%2F2wDGa7dbRO&X-Amz-Signature=1b12b7dfdf836c7601485fdddbde43ae1d25c5c9d0b3da7f343b46b3411e9638&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
