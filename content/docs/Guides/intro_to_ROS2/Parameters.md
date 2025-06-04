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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWT3JJKP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T121611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJGMEQCIEJy2cWdtSTKgXBylwBEHtgFmTTydfA0gD%2BkGPxKwtM4AiBCJxt%2BvuUQz0BZxeoJO4ELWSqUAlrvGRVerApKk%2FHdISr%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIM9OAkeZ%2F4dxYwik4GKtwD8cl2GjR6Cxl5lmYjkQb8Me01gbvYQESZ%2B3iP4UsJoXy7NG61Ox0rUWbWb%2FSGamzLQnote%2FC%2FtvsoJQd2JTkOeVXGtX0yqzq4helUxfP8OWHKNVyz%2BMwyz695jERyH6QzlOpJrA07NydW7efliFk4Tgcg%2FaJUTgB%2FVWr4QGC9PMWHUNw%2FRHNcFjDQOO7bdqpvQtN9Z9ZaZQWeXTTKzDlj3f5%2BgztB3vkWl%2Fm4SQqJu4yUOA342OtYnCM8sUXlZK3J8zQiwlykigBK1mfqP8mJns0HzHbiIfXNXb9jafN0T20Cr2zIolOxbNbX%2Fuo3C%2FxzQaNS3Mw3nsxKCNStiIg4XK9wVHsfsKmJrNqxd%2FwVIuus4ILYE5SrQ%2FC4mE3pU3jRrgySNBba9MUw6BvqbfqwKWpNkUbD70z6TIc7r42T4Ty7n8X4prgAdj1pblnlp5e17YdN0KVDxcmezCoL1VHN1rkl2LYY5%2BqgTpn1lZybCwpBJysmx4a0N8vs0bq2HFAb2xRDArc%2BRbuyl7hamTTbu1ayRLIK5H4mKrVfljOz3r0kzFmqGFuKWOPZsu6aCCUgawJbtERBRqC%2FTnlXr5M3gp%2FUmACOIzx67Fwd0YmQTIft93jGd8ugXxQPmlIw88%2BAwgY6pgHYWmP%2B%2FLkX2S%2BKIBMaHEFUEdmGACrrwwujmQA22uuCEhDjjMdYtgvtuK6gaOa2Li%2FpDsbC5sdjC3iK1vBuCKMdKvgjcaVJnSDu0z%2BjUkONNvQ%2BJccSuYpTmQbG5AXgGa4s8iZy8Q3%2BfGoZnGE7Oeq3CnaVL%2FST%2F1skuXpfhe83JLKvJ1G6eSUoZveGRbHi6coHh%2FH5PZb2zJr15b1EvGEVSVoE6KJ8&X-Amz-Signature=2ede3bd8006fec49bd44b8ecae00ca69199d327c8d1fd44284fa36b92e9bef6a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
