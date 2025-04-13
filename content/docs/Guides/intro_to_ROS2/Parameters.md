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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAFU5IZ%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T041947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCxvyBVhINjyeht0z%2F6pEpGrKEUlglRrsOuXhCboXFkUAIhAJ0YyxiaZOx2ZVLoQcRJOW%2FCtaxsPxRUTbHOdAKmVNJjKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2BZilGNRnuYxQ6EBoq3AODHzc5nnz4CVNqKRH7YAb%2BesZIqDXnrsTYiGnL4JnNIgV8lYKuxVpKZKYnQMQIDFtB3NyshjZ2b4VaLN41A7VeVBqHQruKOTJ%2F9BYKPaTct8qaeuiszepFYYRhXDpHbYthWvnz8LyOPgNHDLk%2F3wMHHqJS9YFXQzdnnTr4YB1uPFndB%2BBCmJALhV06NvNjUSBupYq5kfGwj4DxI0CfVXrbvpNx7rQ%2FIMykvYznIiTXQvChD5NVuS0QcHGvAKarursjG6V1CtnvxQ9Xqe9hp2PTlmoN96QVUGVQDz7xUSZuM74oyKcy4qdaF02cOKMSE6t5mps8ZEC5bJqhKZIBUauC3bfgbO4DzS5BH%2BWvoKriHQZvXkJGl%2F2BZx1FKPixC5pp%2FrDwUWgoSJE6GK%2FyrII4qnJNEylOiiEz4F7BOoll9BuVp5YyOyoQAhTzMvtzso2Bi0wQnxo3fK1PryGV5ZiHa8qu4UQITR%2BxUd4IduJEU2KfNULNa8DzMTQ1RSMFmt9D0zCH%2FynuTXEWj7PdcFZ0gQpXr9X0KPk4oUTU4Aj0cGfRBrsykCK%2FDDxyx3UaQWTo%2FoSPdKaN%2BcQHNPk69RPLvOhFlwm0FdrHBkPrgOS6Jslba6JTd07z4%2Bj2TjCqz%2By%2FBjqkAYduBLEy%2FSXIW%2FvD8nPEQ7xiElzLJawDvr6D0QQDDGs5VKER2%2FjomZcSAYQ12nlNa%2FwRTYAzXDn64AN9aJItZBoFHUb4NzSUYEPINbvdRh1nrPYAhZna9N4Jt9gx3wdOOQfKNw%2F0d9tMRLWfYUbdlV9%2FzSFkKcKzzkjIyXLuklotUdH9WWgRsmChojTPYCCPkiEOPZwJNWZyNUz6zPACGwOlI7Jb&X-Amz-Signature=c76139dcc2908b21a8d65d3b3eb012da94d1ede07fee349305d59936f0bb7e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
