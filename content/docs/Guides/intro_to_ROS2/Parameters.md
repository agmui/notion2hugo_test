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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5YMFKAJ%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcIC97wfH5umZPunP2IG%2FQ23m9xHgGc7bf59m9hZCMeAiBiYKfoe3DfEM8irArXhQ%2FAx%2BQXFoJfyc8NaHddKxerFCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMKsrXHMJwVZPIP0fdKtwD6GZqF21LRoGc2hcPusA9Z8nBy4BQVvAI5VMlRmVEcYA%2FS5giIV7Kr9eP9kJf6uAIbv1HrswXbOmnH7qOdJAULWfhAbBEl5eFJAxUxujokKXxKiNE1cSTzszbuomddR5wu8tcuPt%2BzYxlKPMnLXGUjB9OeCogM%2FGyg%2FdhTp1vdDzHPNvfFoNmPL0nC3Ryw5NSY2RBEHZMm2uWtnFdv2JclC2WGOh2g%2FUZtRiW2olmk19qAgPeAyDQ3XhZpZEoKAilp5A3ihtqfK9ln2llHTB0rdJjxe60IKkXLNZKYrCUHM1G%2FJ0Z9szNSfbxuWB2BMlrWAjVC0EiwCYR9HTNyfLiUyBPN6E3bLPRvrb4J8uG3VnEgFpqm3Wrl%2Bt2aRLwz5aH%2FyI%2FpET6qpYxDO2nYf66weXILw4peBjw79C732qHFOjDE0NicIvzkKMf2qTEGSyrjSvcJaWmF677Rpq1%2BwkxbtW3lR4rXTijELrPx3evO2Ayy6ganVYHYKvLc77T3jcVZDAbsOHmIAhFqyu9GQmLwcP0XVddAlHjPvsbzQ1ZSc%2Fzp%2FCJMHRlmxQ%2B70uHkSH5%2FIG2vfabmOlYI%2FWiKfYOrsa0gBPXkjxr1OmS%2BqvfJNTLkaVrMDZqcri8w3Iw1fvjwAY6pgFrVDaF38z0RmnjxVCEHw%2B3GDEufKMgxCXb7UosNk%2B23kjwYbvhWdKLGAvot2SCcRJhIGUivA6fr4ahOyNvlwHsTPJd%2FmCIO5gaw1T6syC7yC%2B0Yg8M%2F6jaRygzHHWPWS7YrwHMlp%2BHCBjhXzoTVAa9ITSuLkhvO7WxXsrqQU29dD%2BGpR3ZMRyj8lRZ%2FFlI16uOrWHvY9hO8r7k0csikxdHplXfnajV&X-Amz-Signature=13d22044e0bf259c14c75780a97c64bdeec21ba558d040d5453f9b61f3bbaaa6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
