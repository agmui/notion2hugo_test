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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYW5FSRT%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnfg5rbx3%2BMETh1Aw9bPgxF2bfN47qWOWhTxNIYEBuYgIhALyP1o3lPlZOgQqE3lK%2B93biiHFykjlWf9fudqaZaWOoKv8DCHwQABoMNjM3NDIzMTgzODA1IgxiVflNZBh3pJsHGpUq3APzQvwqmJyAfuWNjMGkDtJemWbkrgqTbtLaIQVeXOcjM81SJws8RQ6eh8oKRCPj%2BcOb4kpy%2B5vee6ll3SaPTmBGasKDwdMfUvuSszZtEwOSihI93374bwVen2%2FOkMn0SOuCKap6mwnmsPpQFp0XQNU0VyP4vmTm5CU5Q2%2F0eTTnjJRQyzfdYLgAbVIRhs%2Bm7D2wi0d8K4%2FxlHjeqculJNHc27KA5AMdJJ9lA5tEsF6gBa3PlB%2BKwV28y5WxNtPEjfbiADunXdByH7cBRAnwbDyDqWR%2Fuka%2BvLFfbR4vKgeJSAw9jLxAOyyT8gLzOIuHE5WX0PjhrHSQ04CfFVdbka4yXbXwULQlQMN%2BXZQKNmU1xtuIU%2Ffs%2BDvjWNnb6C7HfxgB1ApOU5ToF3sghtjxgzBX7e0Gntr%2BAF9l%2BAMNZHOZyS5e1BAC2Hj8ms8pdRd0SaSm3rQDJz55f6ETujyI%2Fs20H9zW6M1I2NkKCAoQX8SUEtpUF%2BfhFibyMUQh5508jTj3nEIUoG3JnOFvSZMsX4cpR0PUVPGiqLq8AMiRbYlaP6nXTGKmvuNjBkqFm5I%2FVO7WZm5YFRFqWNVW99YG44%2BpM6ubV4RE9SgEpZthq9VeRhK8xFNLFFqTl9wrGzDVlZLCBjqkAdY2z5mwEebevR0eRTPAeKvxCzNmLcNYPryx2kIOwrHkem0oTJG0G8zTXFYKmgfws7B%2BJSUOHnBqlJZI0vUYZfleJt%2FdPkywMkcV4Ltbz10WTkUTQcpvYym8%2Feo2IlJ4s6pmv%2BMNhakv2VeqjyJUfvG4BUzTZk%2B3yvKFsO5q0DDQjyxFsamKDZgM3iUzYwbFqX1cQKBd29FDi9QT3TyeQivNkeI4&X-Amz-Signature=6a50f2c3367dfb782310d1976e295a8b60873104268db953d05df6d06c676a97&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
