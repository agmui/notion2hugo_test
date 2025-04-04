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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646THJJQ7%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T190221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFUs2XNOKh%2BdJunJe%2Fia66344sMAqNNZCULNAp1EPW5WAiA0ZVQBWsUAFmj0NoWy0Qxmq%2FJL3lmap%2FsPbQUp24p%2BpCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIMiN2vtCIrBwdbdtnzKtwD868nS01F%2B3PQkrHpChTdYJ%2F39cxNl0csRn85AfSSj2OKtNw7bpgF%2BA%2F5XQzCPCw1HGYytiULKZgYC7zPG7DEedhfiYllmWKJoqOyr6rJPM95LFdUUDmO%2BCKmtNyC8GJvOy6KVt%2B28UkzBw6ahVEJ06RuuvIamHLFOkb7SN0q6gK3tG3uPWa2TM%2B66%2BJJEUxqpeq0%2FGToSfwSXM6S3Z3YYKzC6kYnvceCYiL5nxuj44IgelxVnSkIbATJ8ay%2BQB0Fj3INS26vNyHX41slbWKeRymAGlVZ4adtCCc%2BIigpmxetk%2B7zIFTvro%2B9WPE6%2FxwSW5lqfGZ6LAZPLpTgjfy0dYhGvCWx4h8iRJlup9AZnJItZ9HJk7%2FePuXQmOYPqXHWx3v%2F9JyBblVbOH19X1Wfuc%2F7Y%2B2r7Vki0lYk76pbR0GATTxvA%2BQ4qspWlMCExbbBFfpl1SUejjGXwtfY9hI%2BJ1A2grtpgfcdpc%2FQ6tcmMtQQU3Yr1AEJCjONxCrbGFU4zfq7vS6xFeMazkbYQTzbjFzVAK4Js2DlPgo41AJctN8H%2BtjgmM5of8edoeyF2KuO3tOZgj3jmM2xR%2FajL9sPh%2FYsExa%2FvUozcELmQ4Ga4TF7iXisFYxGkoP1YWAw7tLAvwY6pgFASDjdQBhCZDEo09vqqHjJVlfbdDHeC99DTxJ7Yv9hTy5skwLc6DoxOZHCOAmM21WpbkLC15aPCNP3Og7XC3r3CFobiI4YnZL1GakTQyWWHCaIPb5EN8dOCuaorU0RpuBtEciJSwa6Ctq%2Fpj6t8J7pTW0xpb40CwkdoushNBb6sUt7mAvDYizYaYbZRRLmMT7gY%2F6Im6TC9hNtdDU5gWMcPejSXxMr&X-Amz-Signature=2efb81a2f4a37822bee6a893d41da96c14d8ad68c15b5f02fc05e4fa9d6650fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
