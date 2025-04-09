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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZBTSILN%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T101050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIDHuK0PzQ0UpuVCAlrZj0FYv%2BxFvqv6P941YEqhqMYCXAiEA81bSf8tRRbmCR4l5XoH3AVvIlJc90%2BRy9wcnRmItp8YqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD2%2B5JphGZZxHq0h6yrcAwqVrAawlYPP2cVdEjqKS5vKLOL%2BeQEToDrrJDJnAOtsGJIrEzjIuOjPOBQqfvrXV8mHNwg5tC7isGFGzQ1%2FYizg0sUj09ZzRMVBwAzsMIl%2Bddukd52BEApc57krCHxY2efhcLMP5YsseOs0Ul4APDWDpHRFx1Gle0keGYZULOGtehcAjWXzh96tCtXsU8snwlosDSfIulx5iPYSouRogcOqWeYHNuUiDAf5WTcvOnUbPYqWDVU2mKqY9fj%2BbmXhgRV2S%2FShy%2BYcQIUdItkbwuT0O9orqOEya0nwQH5H%2Bf5t%2BA4nWa0IglkcgyJzn74VU2xTDkFtMlZN22CMjhwigYo80WxhZNjuP08ma%2F21YpX%2F2laWykr6oMh%2BzUCJwV70c0TikfjtTX1nLF4DdmgqaagsZyBx9q9PyFdy5t3lyx7LYqhKd8xWXXnl5WCfGT7L6AA%2FW8UXkTJUaSp5wHLZb5Vmh162XSB%2BfZPJ%2BUdwC9WEvFpgonDTWYtTqt0m%2BhR1WbKTD%2FF7cmz83dpdD2ilOP7%2FqwgbyzwJx9NlaV6lAAPRUXwarefkuTgRdeZPRTfMfLiMkS1DnAdaeO56nSdvs1emkpplks0ThIsn0cLFGfLSkFFTtZAmcYCL4vFHMIj82L8GOqUBfKE%2BaOooCE%2F2s4KweR%2BsrJd%2F79r5P0uYIbaOmkbbwjUgslcdcCumMwThOG83Mx2s9kOyHHsS%2FgaEGYL4g%2B96Kh%2FfZtYyoOY6YXVcYAscdC0p95esMOkINksP6pxrhToGTPA%2ByQdxBlzfFMnLoRbRkyYBn%2Fo6ubiniINJWXkFhm2hCTNv8%2BLcr0Li6aEJmBhLQ6IKkB8Emnn2uZGiuKHmmsdJQtXZ&X-Amz-Signature=901aa5bc4e93581419925e24c9d52323a04e01c94a63037da752dac492801b73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
