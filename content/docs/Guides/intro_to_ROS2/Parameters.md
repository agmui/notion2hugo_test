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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYTRWO2E%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDrNFrtStos10GMPwkCGZURKg5smZo2YI2c1sbArxKYOAiB3e8XqC67MCUzjqp4EhMEOisqbtnJAD4kn9eiNE86ftyr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMY5w3YdY9jJ33vIrnKtwDxYZuQ64xaS7uylsDcmEpVZX8F%2BF7Ppn0g5xUAG8E3n2uhz8yee2urjz9wwGHSwK%2FdF5768lamDEQPPcJ2kP1KJf3w8QVqyFFuAqNoFkRSJ48geRi68Ck9UIeG%2Fih7dUpzwOviSryRVD3mo8BTcEyzL3vQiOjf97ffJTxGSr5CDzfrpqiou4fRLTBhp0wBqdKsSWji2r4%2B4RsnrY%2FR0AgbU2PivkZCk83QyOwklbupG0PwTyA6Xyq9Svao5XZmF1RfLDq7HJmqi6veDSjx77MbpV5Hge3ipNJem8m%2BUoMRCidNM92OehzFYgzFspBL55pmUnuHia33R6Nzj7SZQ0yq8Id0mwtGhUTcZxEIEGSw0hf%2FVxYMXwRyGtSf9yLqjFM6H6ctuNOdVIOfL8nBeGqkG5dSRI6bAFFsnTm25TolOga1iPUJVkNlKo2juEknfVddcr%2FuC26pUjo%2FYG%2BNsrGenT%2FKOvnd82BHXbm%2FUZfOdJLStYmkAcMnncSvquKSgUNho4UJAybNFy4uWONuHRY5JrWc7ehOcLYBK0xVbNcAevxQN3sxs2NO6jcT6LK%2BPzFRSqi%2F5qCaBwXU7MW100qxwaq0NUN%2BKw3BONz6JSu7aogpPZMl%2BjYvruiUrYwzN6nwAY6pgF8DVys7cWqbK2tX91GweEYBfBdJoT%2BK4rj07wrXqF%2BC6CzwgGSRllUwQqivnBaXQW9HOVy91CMmXEIMN%2BNptgYPRBZAGtdHSKmLz3celRfBQTJRPiLbTwVAGk0ILEP5q9oEDl%2Fv6QuOvPaffoOIaIQe2Qe%2BOguZy%2F8X2ynb4NPM32lnOf3mt%2B9b4E4QeuGQ8mP7%2FmMN%2FYrO0u0tybRk3XnE9s8uyfA&X-Amz-Signature=7aedc5e28759038dfc805191ef133ad9e9c6608dda973c1c0f0b4df435e46a68&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
