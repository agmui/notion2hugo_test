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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T2BXL7N%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T230826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIEFZQ%2FZAi8%2FeGSd0DAWUsYsL2MeisTdaSosugsFZ0M9cAiEAh6YzosQQ1V5aOjveDdP06aycT01wP8Lu4emKDsElrI4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDAPgnq9WQn1M4mH0EyrcA6yxcvW0uq%2B14Q57bXxB6QVEAXncwQBCRC0M5UndICCkiB72JMbq7jjuZmZ1KEpDx%2BSGAw7NKzWEUFQuFfd5Co8qjN7Yjz4z80jfuwYYaSVzZ1QuQKfLgO79MBamkrj7C9AaygyCdNwT1qWly5C73SQn5p%2F%2FZW5FUWdOra9TCrUUHBf1W%2B7GpSO%2F5jeo7K02DEuVFYzlysmsQi2fOBiebhndtJzx%2FKK0R7uH%2Bynjxl2ENtNJTEbqikdVd3cI0ldKpCrBOwEeaKsv9BHs8HeCQGMv2s2sF7V2QNmP5fy3E%2FxMOKJ05n7wHtJ7r7MKIpS9XS2KfxNwZ4vMWGRcJm1Newebs%2BtJkHLNrz75MQVqDPg781xnrw5EesTRNATtTyIhq4azQa6ngoiqUVyI6Qi9qQApsg6%2BW6PJI1suZR24rN8m9ybSSsMDJEKmGWKdxuSPEsZdu2CN2uO65EYGTgUlrokez%2FaANVyTmJyaDbLp9BaIQY%2BTRFO4UfITZLwhFmR2eNnQpjLYgHSF%2BWE337yggLEkcw12fBJAOGxM4oi3%2B7A8xQeXBz4oSUrnrogyvxlp9nwPjq8KFuo4mtpoOXrdcHii%2F9HdrVis8L7k5%2B%2BUcNxs2cg0JLk15AOziF5vMJWl28MGOqUBg1ldjtBlYeQ8H4NwSuH%2FslUEWY071v%2F7ZO9ACM9okX3JuLeOEJUmOlEvh%2FO3JfbkYb8c28GlDV95hPvm%2FCaO16F17khoXjSOtsoZEcG0Ir010JmTPqvfvLeBD3cpvd5r0rUveDvtAN8g3qxD0ok4ZkF%2FylRs54vBuKLG7Oy9okrCZf1NQNGGBrdM2Z7Lw8EIJTUzpbo63qhow25wvVdWNV7vy8zE&X-Amz-Signature=973f52c0cd90debce28d19ad8402bce9d2d6e5160420eaa6bee5649d05fe03e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
