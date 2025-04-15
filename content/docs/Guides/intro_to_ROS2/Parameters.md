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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYGS32UV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T081233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA3qzEnZNFk4JLj4sGSLaHZwg%2FwpRw2hH3jZl%2ByeSEswIhAJZJovpcyRCDuGaxBL7bJobc6LxrDn2vOSI1qZXHt39ZKv8DCCkQABoMNjM3NDIzMTgzODA1IgzywcD%2BDCDydEbjkZYq3AN6orTkhCsgKdvAHI5msi0LfbUpJgtM3VvQv7mA3yOg8NvlHF4glDggtn%2Fw8RmUE44BwDwODpHnMpg7FkZwNB7%2Bmjjq5HzKBz7FzJMbP8QJtaY9abCPbmRip3jzqTDL%2BXcSzL0YqC0tHA4kSPPmRmBWWRKsfIjDHmQtsif4hlol5dO2bkflRG8MIZMdjxtGJySBJlsuNko8Y5uN9R12T9CIBuK8%2FIHD85xHlP6PSixd8eyM38MDjtHsGJowt6gPd87LXqn%2FaOR0HTLz3tg4mMxVdKZOAGJR%2BJr9YI%2F6NtzUwuFXRxXCWtHxIJQYdGQY61t4y3UgdYKeOom9x3xhhvIfvN0LHlWooY%2Bah0ZEJXH0M3mW52olRslVyvw6w1tZ9E8nezyghiyAqUw8Fr1T3PuN9K5hBQCEMocdvSIqguAnUwJfcMKRP4q8esL9pkspORGawId0MT50ltv6u8XxpDM9x5y00BgUm2oxWJYqJ6Eb9uSd6OECjizXeV3uYS5sZjnuJEM4MbbHnZUtcy3eFI7B8WFChJBn9vbqheUsuPNNLzvkNmLMd5VwKkZGHIj%2BbOGlXhLi1%2FN2ieMwSgtVsCmK4czVuMD4LobWZO8If%2Bp98LOlcwDuM5hP0IhYOTCmnPi%2FBjqkAeOkKPJysp6xnMvJJf7%2FZYIm%2B71VWPa9PGagwba292kd4fc7PFbu7lxASf0vJmNsts64hRk7VpNGKscCA4it8BPAJmVx9YW1dA%2BQAJ8PISSc5CKeGd5qIkfPl7wIFbL5KN%2By6sVYWPgOmMcFyj2qtSWL5qSSshZZUZJoDapPRbehsr7AuzG9CBpVI6xJd3c0HOyw73QtvWljbLJWs9akbJ885o4s&X-Amz-Signature=11c3b37b36a000dfbad3d67bc9f74232cb9226c0d68aafcab51282c7c99b599d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
