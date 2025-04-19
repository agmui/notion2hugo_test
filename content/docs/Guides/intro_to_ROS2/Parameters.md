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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZM5EEMCE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T050818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAp7QobKs7JQ7LO6G6wLwVPmYneiTZM%2FMOb1D0Vy19ruAiEAqJmW%2BwFsWnTNV2F5q9b7IlxVPNrrJt6Hdh22kAvNAcsqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD0ki4JncOHQ9E28dSrcA%2BvYZszw%2FomUdB1gd5xImoGjak%2F1ucdqzb565LobO%2BdZSLBkAY3x9V1oo9tXvp6%2FgkwDZhoD9TNBWEJKUA9Lp%2Fl0xWhalY9leQEVKYsWjy%2BOgfdzceskeTemCDxboBMqe3OyF3sZfdV%2Bx90oYAPmtyG15kJ5OJek1jEV7bDJnUbE9SZVmCLKrYOzpkEe1FUwN%2BuPgOuL8FvjvAhOgFzgfdEkWUYhg6uqc3%2Fb%2FmPCNXZEAHukcFxotLz5Jq7OJStWUXUUHT%2BCouphjDsLs1JFR8GuX%2B9sZq4mtaLKw7wRgTkf5gVRCqnchMCQ17a%2BDLlWxTRXOKRGHQWwfIFhQJ5uzH%2FvuvTkEPCRe5Z0fMWpog%2FztHUw%2FN3r%2FY1Vh4EIlURkjFyRKO1TkwJMjNlas7PRjtizh5jgQDUkL0sI8nTIjI7UxwA1OGgyEg%2BWEN9VsFFWMFnugqVVolbFmkHG4QA8CPnsIb7dVSnGDBTE6BVmWUK9CbVCsKxSl%2B6EHYC6q4R%2FVy63qBW%2BzYK4skmfY9kPgdZh5j%2B0i4LQKTYLEr5YGJEgh3QM9mu6Kdkfx23IWTgidNDujTxBUru%2BNqoXvKesom5UoSi8fZ8njJ0hH%2FPBVF63%2B3NMMdHUsaNdMEkeMNjYjMAGOqUBpNJXdea0ST5ZIB6P0ayxW2RMNNv%2B%2FzPPpzqZlisAdDnDvUzxHKMUzdcM7F5C%2F1ul9em0MvIN4823QCTFhsUhTr%2B3pg421QaU88n086XWxIezPN3KWJ9%2FT0J1759bE%2B43akWkc5tHQ%2FzN6kCoSRr08NfnNqXFg6lOmVE%2BBDhqIwJI9qj6izWa3lGu7fjBnj8pybm6p1z63uyysp9moppRmTSrXdrr&X-Amz-Signature=d0ba8d0af7244a83e3224e907ed01825522bb393206f77ffaded05667d73ef38&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
