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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI2K6ORN%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T005154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIERwoX5l0N0Dqc4UN56qTrVG%2BmSU8BTcylywPEiRXss2AiEAjeqA%2BZfgaQzpTaaVvDCQ7h1em81pCmijG2ZnMTm%2BVn4qiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFe%2FFeny7xC6NPPo4ircA%2FwhWSBxFuk4fMXNhqWCwnYSWKnw%2BBxi5CKWjJyb1z2P9XfEfQCc4xMxIhrdzC6RaP1orHPCIO5bqSARXswfNgBzE62Ca0JkzY7AE1hVP1UwIdxjuPXaXj7sfc9E7IDsMNxN0BKkfm7bzoKA5AUNLCuRUOZjCthQjZOxrJg4LRQlQJkqZ%2BRb1IZMwc8pT0pGRwDudf3fkEC9mB%2BsvBR1QyqJPm%2FPYp7KQQ9E5JrpRR6LULBKwBIdUzRW7xDomt5t5IR0sW8JE91yZqIw5GM7wFLEV92%2BK8Hd9FaVocj457ig5lHZFUbT1duIq%2FD0pdKxmbgyYtERqR7ol7wksxyXBC3T5E5x7QFGjLujImtVr30pu9uq%2FC85YZQgsgX%2Ffw0rcjvroVFSM%2B7r79Jl6Cb0%2FcPlikNJu71rJq0frByMkToAGSb%2FoCdMhFql7eQm9VkIqnQXu0xTQPDnMlu7%2FT8yKn9T6ylcdsoRl6OML8UM0pGYMHkRl8lirrlwbL0N6fYkTih1vB9vzK6LaEL16eSop3BM16UQLRokrj%2F1OD91yUX12MD2wpLtVRILO7kFiplZa%2F296rkhT8uGyZx9jpoN7uXM%2FbV%2FKQ%2F0TNN3yecMXfgPNcMpRI3eiT7kkJyfMJX278MGOqUBsM8PZSQuH7jqDAZxxW%2FV0lXuYMm4Xw3Pd8%2F1gma0bDE3TiX2%2BHH5mFOAxZZZ8gAbjggC5g%2B9oOuwcRbOjJ1z%2BnmTMfPmELD2EJ0lYF70D7IrAxpTebpjE6zUMv1Yx7VsFupwt1bZ6Gtug2Wiy6s13oIL3nh7bywybKoMl7oXENH6i8JlRAjaPfDpol6wKUxqqAuHDKc8%2BX3SlnGwwNDGl17v655B&X-Amz-Signature=38ace31bcee751894d418c32dea4ca4495cd67116702bc192d256eb2de650acd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
