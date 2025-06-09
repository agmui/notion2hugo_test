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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WCFXUU7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T181225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfTdJsqoca1MDAxKDd6uTAZ3PiVg0atc5dP0OXO7bCRAiA7tU9RMlC2LX95md4QJTOcdCV4QI2FL1fOx%2FE7Wd6rRCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBtZPPvn2Wh9PX0RVKtwDJ5THB%2Fr85rNG0p4J%2B%2Frk2y6PgzBIFEZIHEhZCaebduW%2FN87UA9daOLbCcrAwQphypVL5fPSb0HHniQFcEEyKpCEhPY6Mpyy%2B6DsIDH0c4unz2M7dPZBCgAAShHjS9xoRzo2wm%2Byw2EHFDeHPnZJ5%2FxK1W8lm88ylh1FEH%2FWNYtTdmSjC0AH0m8tKeXkZtWQl8%2FCdzQCZ0RG2b7DjR7lbGFBGRWy30yGV%2BhwWrh7EHHku5BR6Zr7y1jaiToeTaeM4hsO%2FzH8fHdTMKRie0Vz03zw0pCiVNAJYFKi5cYzsXLH%2BEWMfQ97juhpLtCA%2BAu4viCG2EeII28JbxrnLkjFj%2BsKNRZwWz5uYc6CLK1OnwVS1vkOP1VW7woJxZe2aV9Qs%2BtqaJNHxhDYBu4vUZG3l8iNXSF6uv2uXXkTlEs2QaEC6Gkqb1frzuqrd9%2Fa8s9sjos5KRK9jH0yBenC3tQyl912qMkd5f3Z%2FGLMGTjpbiSJaQmwzdH4MwvWlw4SwPQgxyRcuapt9fEcc8clbmI7MS1YE9kENE3vagDGbsBIqX3lMYc4SwN2%2F%2BJ5NZIm1iHkW9LcmVW0O%2FeQOgPya%2BYQPWd8lViZ0dCll6cxJ6WpCYRJFV3qa0I031WwwPy8wh5acwgY6pgE8UsVqtpgn%2FD%2FbkYFIhsOHTaf3%2FRTbzakQgPKX3YkZaSCNfg%2Fvs9Tlc3kgctWKGt73C%2FEw1kwVc7wHlr38y4c3VPlcgl3gg4ipYp5GiIRWwirKNf3NNmzBrWOyDH5kIcWmTfI1YTFsSvpDIjYggpPSIhxmwE12JRuckb3f8miH29dn4ph50MyETi7IS3R8aXLWZMCLX1eMiCLjdtgfJYTVeWaNN%2F74&X-Amz-Signature=9b657a50c87362b02b017be02245ae89acab11a896e2034b21894cd411598df2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
