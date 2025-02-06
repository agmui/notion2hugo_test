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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZARITRXN%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T131530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIETwukRCrHhj9Vi2Ufh3fm%2BAzfNAG2%2BAM9iShKYejP3IAiEAvr8Xiem0t1Zgs1HD74SCer%2FvrLr2B3Ojxd8OKBCjJWQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDE6TzI44grG0SfJqHCrcAyiR0WMQ9qHbxG7T7eEwVIzh8Vr45d9i9bJps3vLEdQ%2BlzBI45FcAkanyUhmfTyWq90IpRT2bSrlMLVUABLXw%2Fs1RNJ5563%2BDQTGWXbp3PNDgVZmb1WVdB7CfyU8C1ZAGzcOTuaW%2FVe4VNy0PZd7wKI7YgKPu6mLPjg%2FNeapztiqk6SVfLJNABcadQaH1MB4NKtGLl3KldVckI43NBIIR7aguqC1R%2FGzvvoXTWq6%2Bfcgm4TEdKyDXd%2FSUdK96z8wtSomoErPh6AOPT6tbvXbf9FgbBOjUR3sF37igHnY2z5fJhcm99kDCXoxRlhw79w75c12oJ6PI09kYwz45EDGkX3k80QzLLam7lb2lfcyFwG%2FmnHMT0uLQM8LuqqAH31vFxJbr1Fz2B8%2F6C1%2FaXLqdGsG8Ul7vfyxGfcwDQy0n7lf6EAwjBjvhE5tXNDuD2qHAouY9roOMCyLh96sD74NRmyxFANhaEYnt5tW4loCP1EbOJ5rg9G%2F9ZboSVNx9dXW7DI5ur8rPW%2Br35QvfWt1%2Bl3JuoJU%2FGu7K6bkRsJ10xM9jSyOKRsUyKJZn%2Fs6FtvIvKFB4rhBUZ9rFvH6%2BL%2BRhOxXRkuLkmqNUXKUHseTH0xyZWGNdJ0nZh92sGgxMI3Fkr0GOqUBpIk34Z4eP4dSyQIHd%2FvkwoVaUqDqxw47UBJ62GMRDUQ%2BWkgGhjXrJQd5JQlMuxSl9tQqSDQHlYSk7B79EtMPbWWq4j8iw9Fb%2Fo%2BLXpeXsmS7YDq%2FWeIpdLACzcNzWmHHIEijxmb7099jgn1yLjSuajJHIwfQjGiRteuwDEO2lvkeGO5qRw4o6YJeHmIw%2F%2BR2AUkccyOgTqQn4zl9pmEihWeA5OzG&X-Amz-Signature=2ae58147bfd44c2100a555c8ae1c92cdfe0665743b5a670511c5717907e1a6ea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
