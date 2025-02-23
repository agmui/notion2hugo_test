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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7XJAP5A%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T160802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFjLbJXhA7JaxsWeBDAKogH9BH9BKeYKzFNqcXI59S0AIgUzl%2FIf7d3i3DNmwCLFyH%2F2OQUfb%2BNZrgkKps3AE83bMq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDCV%2BWRUkhQYVAIhGJCrcA5fyR969vY8DmD4rNV%2BfOo1L1YvLsvDvZokoLwtv7cH5WGGo8Qa9GuteA1NV5rB77DcmM%2BpoP4D%2FiK6gP2FgXGJbMY06pzThuw8dlR5rWCjVt%2BPlXCRN58rO46eWSFZ5g1UCx1cBKz79tV%2B2vZAS8e1rwnXq%2F1mrOWEXFKmjWqiD%2B0KIG8mYLBtH%2F63Qqo85ClLZZgUpa3tM6qwOdAIqeIfuV82Zxf8QX4rp9%2FB580GlV6Mya8zRMo9sOvOGsjYIdDh45tZSP1L2mG1znrwiXX5mGZ%2BMlCEOhSWiujGA8ExF6Oevh8vGSG5gJkyha7wlXC5RO2PvOJOXcL6LY9PETRRFg3y6i3MFPGS%2BRGLnWL%2BzNd1EETCAYNJEkhtkjGlc1kDOWZP7tNQJl6Cpu8HR047qV3tjQcOJqcPSa70lXadl%2FQ5ckmLut0PPo14Bfvc0KlX5OQuaOMYEHHS6%2FMrHjZtzxsLC27IKG6naKQrW6gyY4SMUkNu9%2Ba%2FX6rQL%2F5xzDQvKLSNUt8zzjjT8ZzOW5lgs5X95EYQunaDG%2B2o28XObr8OvVnRsfWniihR1LisJfEXG5iC%2FSYdk2XpuyoDe0IbdN4IAUq34FkOECCi0IUYRzqIN%2Bdj7kwEWVlq%2FMNzb7L0GOqUB6XlW%2FUIsuHPz6eULSQXioLsa9EXZo%2BOwtA%2F9szSEfZwMhBuBju8vYBbPY%2FOQ3Gz5h7ARt0pFFJhRgx1cTlVP7yRe1GFFgYGlOGQy6VZtaYX2i7ziIKdb9%2B%2F0Opg%2Bh9XZdMOjZXqqZOzSVzCY8kJsD%2Bf5y8dUidzsIHhhD2ZkMSP0Xn%2BLS6XQeoE9h1dAXZ%2FjtxfHFkIFpZOz%2Fhu7fxzktTS5wMlw&X-Amz-Signature=d2fa6a2c73fdf40860f1e19b26d9e9aba333315027152d4497aa091ae701884f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
