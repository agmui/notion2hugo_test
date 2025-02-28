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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4MXXVT%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T031716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAH5Z4xYjo2Ctz6B8rUKfAZnzcxnifTyFUAiu7Otn6P6AiEAlEJwChhIevhmaqBiP8Sw4cjhdzIC5dh4MmH%2FORc6fekqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA07vXb5HHn4aJ6AFircA%2FdCZDVdTjYb5OYErZzZMo1Fp1FWOY%2FbYQmck1h3MtiamSl0PTzwjT3S8AY1vqnIycMiRJvdPUVmxq5tj9poI6V%2B7jXrpFhBBNN8ArcyQC2mh6WV%2FPzVCiZb%2FbYP%2FJLeuNjSXU%2BiCbREViYqA67HCfFo63AB4kbdH1FwxLlcBXJmDbn4NJhj51M9t99rhr9L7T6qX8s%2FOZFxV%2FhxNTOdwFTHP3Vb4iTrfS1KLIpXAuFvLT5KPDoo3r43KZy2O2LpZnse21pzuZNGFLdlsekNzfgLYYO0Ucff6pbFg3qYVwjWqvEUI0ckabUFVf7IeImbcEv%2FQCwIXi6BjZrZds20YowDKpZ38PzSELYOhGekAEf4X0IzqPZumhu6wgbEUCxtJ7xm9V1BkJEXjHwJSK4busaNcaMv6%2BItZRSeE1lTLPCV4et%2BxO95hiTOTbeZsEho3fnVaMLK%2BEeZkyAhlDFvtz6uq41gCbN1tWtkCTbVfstgWa530ZBQBmTaaXzLc%2BmiTWFFIOAKhHlPYiZ%2BrPCTJkcXVoHa0b5m5RqBrWPCZKqrnuHJlTXnXU2BihpdvzTaLzDJq1bi5R4GFLUOk9YSo3zL3hHTDVZLd05Nyfncq6Y1LvaeLyPS64D%2FH8ngMNDShL4GOqUBcmJ9Noc%2Benhs5A2W47kWdA%2FMU9aor26a5BV8K7btQE%2BxvFoiaNupY9dxaOx53UC%2FI06FG1p5h4I13F44xnKWKEeODMS4xrA03%2FWQtq1L%2FeMUlNECCJ8ZgG7h24fs4tAeRW3oYf1LXJj3PPAjESSFu68wvOPyLyvNurq9bQf%2B%2Bzxy7RmhqCUTc9M1vjtAThDdKY%2BZFE5s%2F%2Bj3QozbaFmVVBAc9E6F&X-Amz-Signature=9ede32db2c1c9f1c824c56f8801574bd86d6f8c12a6fd73154a2b8b4601d8d51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
