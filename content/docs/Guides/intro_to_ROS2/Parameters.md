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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665D7KES4T%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T022454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEanDrra1IJQQOXeL32Kf0ZY1ism8JZ1ktJxrkDOAHEzAiAYIX4TgAxMNCcPbkNTLD4LZnjtLXacz796SPGs0nDG0yqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvIOF6KNmzw9zHs%2FIKtwDKDzyJeAWVNUqMnC%2BzRRAm4sCePIRCJ8M4YpFY7Yu7IMihtrbQzMx6oAre6rWhNdfj0LXvoOrQnjrIPtffwSeGj%2BgUPLgjWARhFsnMptpMUIcYCau5A0dsdK8DGhihkyYpNniHtQHM5QNM8o0bx%2FYuqUoeHjcd%2FsahxYD%2Fo9HD3B77atNq3CfUpWk%2BYzfaJn1oymIwRJITsfp2IXmQ6cnTTynPSIb9UAZStEZ1nell6SCQtTuUiloApshkFZ29Vyde3ALP0QmmHTDiBU3e157bBdXyJHabl20%2FokIxebWhnbYNQl%2FJhw2ZQ94nYQrvLlrXMzlMlrEYTdowJJEWXZmtDWFYe%2BX4E%2FWii0YGB69f6SkiPfOQ%2FVu0G8WR8B5%2BcrPwwL5watYhTG9LBJc%2BIrjSa7KByagWUVdxQYtawPc6PbaHy6Fz0FDaWSRZERrTmHYopATw%2FVUgUnKDwvEk5UJN4VPOZMWBG3Tdke7mKEeF2AhBNaEqvIztv6xxuViyx%2B6IldA4rgqzIR80P60%2FvTNr3yaZIZb%2F4nd6D6xfdVZLqu3N0RZS4JaMH4M8s0IRX6aZBwMYuaUETCOBV8dPnzuslb4piamKQ%2BUMSKXXBCUWFIWCcExdK15MqHPyxwwsL3pwQY6pgFjr5Ej%2FO3rayd%2FPED01aeDLEjRaKHXraEud%2F4IB8UopqiDkFuzzUp362JeRgrYtJCEuVHe96UxJDj0aNgMSoAWcJIc9FJsWRmV%2BNt9TgPxf8B9M98PiAXUaPmJaQpbuGdHbj%2FUbZK2qNlX7l%2BAfcm9kdAsfcTfV7tAI05R7UykZqnRaY2DMPoUoEvIHNVxzeNonwZJr67z1JwF4dWib9kfBATyL5cE&X-Amz-Signature=73279f8675d4a5f65e3e31a1b672fbeb13b694fabbc874cef9074d043fa18214&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
