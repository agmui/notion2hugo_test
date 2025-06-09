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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YA4CUPN%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T061431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICdsq90M70CEMsC74qNDo%2FP3%2BSEUcQF%2FXN8dHUmy4SFXAiEA1PRGcwzaaqgwsgX73oy86XUXHKaR90a9EGQxokz8pz4qiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2F1WxlzmgtXPMKxXCrcA9M97YBnaBTKa%2BlcEIPS67x1C6vY0zHT%2FXCYXfhNjfPaxbB3VDSlt1xCYUR2t%2BIVWi8VJm4ZsYezfGxPIuXgMpC8uxRdTG83hlJ98cz%2BXE4c8MbfXkF27sr9p%2BRqUsCfYu5q%2FJKyHSa0pvv%2BjLxZTyQbNZa0023dQmpZih3RM6fSgCaBf%2FHJNKKsPhZjHjGIUmx59fipiINtadQZcRFRkil9PRJp1CZYCdKe8VHbn4rbr1ysxNkw3cuUZ0jRnp9VHK3%2FbHArxVlriNj%2FNZ4NDRSVceyMbvNOK2gyC%2BQ1wIwG6ypdHitHxIfwTnyFvYaYqHWJ%2BO46ObIPSy6%2FcpTJ0KCQ5VeG8co6914tBP4D2viLXO2F4tUvdzm6OiQBre5lxUkorMtAHSXjwkOixfWtFUYBmbsRrdqM1ng7t6I3gnB24IoYwLI8CVKXoBZwPmGaFyC7rHjOl9md%2FAAcHanWMR8aRIjmwmllcqdb0Q1bU1KxrBGCbOVLa0%2BTaylICttykNzrucO7ep8wexg9PqaX0NrJCYP2pjc8KjyRn756fdEHUsB1N2hOeEcBeabWdXF1933aGFk%2BK1HLuIpGOoVQooBjocCk9FRq7ApwPLMxKJt1iCgWomUE%2B1Eif0ahMKDdmcIGOqUBpjSZQDSC3jGT8eaao5I89bOwhMaev5tw5vkzX2TesoYwiW0Tyr0xxnYJSBueouTJYOXkmB18U01MRYp97IgYVfnd2X81c%2BNQ%2Fcol88uNNl053n9wp6QeqMvQt%2FsIPp1CGQ%2BYX%2BOHEeoPTUu5SLQI0CFNGlgEoRklWM3378dIc%2B3n70faDP7H8YFhrJf2YqtV%2FaHq2Xnsfkn6LT8Waxkp6HU8Qsrt&X-Amz-Signature=9e1e212008b31b616c248a6ca082ddb1a0562a27befc1baaa607e11ccfcc6504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
