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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RA2LBYNI%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T181028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOVyiRy4%2FzPF%2Bb%2BbWWr%2BkoUt0itXfmhynwKt0FvUYCBAiBemXt%2F7Xgb0E2GM5%2BYIu2uRQEa7rmYRvp5b3BqN%2B3XhCqIBAjB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9KKHao3nSH8nWxDAKtwDubIjWpiyaozSmzL4LwDybnude1zGh%2FUJc9Xhh1ww3ZWBY5DnxyKptOa4Dzx7SVufiTyo%2FPeZayZSlnl5M4%2Byxvjgz0M%2FqYO0E6T8eEmsnP%2FiiXSnblQexhHrzVCAcoVyqJwCJFjZM%2B0Gj6FWwtw37yM1P1E%2BjLXkEyr0kDfRGz5LhKkLoVbtLO0Dqid0hZi8U0b9lRzZKOApUkf3J40qZymekG7HJV8g3AutYHksu8lYaRy7Zu%2FjB9EBeuCZIyNga8R5YNLK1810A%2B4r2h%2BdSXgs4NrPgD3ANMdcidNFPZwZ9f1ZiJSRfkPmNjsgLe3wf7KAwo8DLqjGANDF41Y0AVJoVHvmbcV64tiZah%2BsffPvmUKePfcV2bJPrbZ04L%2B0PbW2NWsRMqJmuUEbxYEEBXIeDQcYhsk4fWgQJAM2%2Fe8o4VisjVj07TPDIDNUaUqWMkqX9zPjJ19ngh6kQ6Vkitv%2BzVsXCnmA8zUiKbFGmMNy6Ik%2BlNgyQvAUnppT%2BBbqaPOYmu6AMVcbYWHQHMv89kwzuQVxuQuFmj%2FqXsDovAkFSctEFhgDomc0i%2FMHlJy%2BNxmQKAhBvZiPNHCXGw8JrdgNpno1kQNcvbXFK%2FwFgef577C0kXbyTbspej0wmryovQY6pgGNKl0XAzdSR8nDIBwKMiX%2FaW9lX6Pl8Uap8oHXq6%2F9K4itY0WBTIpMrCl%2Bh4%2FXv0KNdj9x6C4v6vWbON02FHX1LCFiMnckZTbJaxsHV%2BYNv73U7bAuKHHaUWIp10Df9tOlGPVEJ2DV69rLVoCbBO3tEfYcrrH0ppwFppNZlmPmlhvCC2mgG59wLCXHQa%2BxOg1bQ70xZj14Y6ofvoyynoCB98fg9QlU&X-Amz-Signature=3d598761484134870c4186318c54efc1a0bbdb0dc1988e349b607d4d7c74485d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
