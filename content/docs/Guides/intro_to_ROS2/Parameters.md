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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4AVAL2N%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T210804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQCdDLkWHSNkT6Q6dWRCSvVpvuqPfZwaQOHZq1ZO5%2FsN%2BAIgU16h1xFa8gcXFOlZc%2BFLoDfmEfjBZvOg2G8WJc%2Bx6rkqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvY6KBMJ%2BMY9gsyySrcA8INWrH90%2FM5HzF6dYYkNfK0Zf4n%2BjEy76MC%2BYUO6MOL5emkGUi96JTK4vRihUKKah%2BMhWdwrASWzcZ0quAUmcg11Eb7JRAetv98EaOhTRmyzp5d1ysVPHU9SnDKH6cdUhDnpU%2B0tk%2B31ddE5mO8X9GJBTK%2FWteYmIcTlWCwA2ulGK3286sEL2KU7C4b3fAY3Ye7ekp%2FwF7O7kQllFY5c4bF6LGjQtm0esq3f1PDmFjWN6QajHIKziQB2XrGNOxTe0ERAdhNonU9pgIym7hwBzRCrlEa2WvhX56XPdkbLm0aMMEbqeQkXPROueMdY9Nu3nIUcKOgabNhZS9QsXAm4oXggRVBrcNc479taMGaa6ivGvljw3dW55ImnawyhHeQFJdGhvbmxGlCQ%2FHJM1tJIyNg9yZ1BPHuvWM2QWXBeYPlMqwTb82yrkPKcq%2Fm99M3zEvsia5zOZJLFl%2FIQkm9qE4z5HNYo4oqO%2BQHPlpy2%2BtEBG88yxs7AvLQy6bV7kgygjTlTRXBmztE57sYtA3qsQgj7KmGqNq8bB3foCGp%2FlXkqQqhwI7elBVoUkeGI%2FxvLawckrx5v%2FuEDhW57vkxjUkX2kQ%2B92XO%2Boc%2FPBbOQ%2FNNQKi5ErBE7F%2B9kjGnMNarz8AGOqUB0iH%2B7vfaKqXnw9SPEqYxBJsEe3yYyYUtfjySC0EOSbfGFIFPtznDgTccKFauwt%2FXCY0%2F0JsxnIwB2r97f1HK2926VlwN0TNSEg%2BhflNerwmUUrn6pDuaHyzqn7%2BKZEYeCKlgZ7XZ%2FHPV1L3RZFngLVn%2FGIrF4SqyNQDgCYS21rYK1ct1PaX9HXi6EyxbvmbgyUVhfqIFVhhaEnc9CXdxK5NQSgRN&X-Amz-Signature=f6ee3bf7b2b477e9e30a3cec69fbac666c5d09485c26546ce1742bc484f1a254&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
