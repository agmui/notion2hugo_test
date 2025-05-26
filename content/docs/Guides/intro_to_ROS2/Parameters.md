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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJEXRN5Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T051014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIDJUtELTNrFOeA5YjptJzCVyqEnqtnhvV6mfqz1NZx3%2BAiA0NqNZDA918ceyQa5dhXPCfWvXcSO9Wa6FxY8MXgMl8yr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIME%2Ba3DveDrlxxhGT3KtwDJVRsodXLYLFauklrpFf98JKxWxjlAc7QhTyInOS4tEaXSyhmy3AtNFyIR2DEWa6KVSF1Z4U0pirm8%2F5pQoqrqHGIWP5ZaqfEg7rfpFl6hgTrwvmslq4gFajqi38gsbH41nKXSYy1RhY0KRVffwvxsWkRXdKPRvNVyPvhD3ixlosfOCZqgPqkvx3mlSRuZ3A1VisfinsEdnA6sfWIeTGDkWrrJqLMUXOu7HweVApe8nP4N9QKrWzNlTlbegtavB8OkuQuXAdGdv5bCrjXtRHZjsqgsuAzFPALvG2loapJMcCQxVPX7UYLIhJ1jm7AhHVrqCt0%2B2vDTtbrhyP74g7VtLGqh1f%2B8211djaXC9Q%2F48wDyJ3MzvC5JTB3JeL1yS7V%2BNtjMQNp%2FKnXk0MzEI56KHwWUr8vRqqx5zpI%2FkNiudvf0uiFJeUkBWYj25pkguWQrM7HnNj2ZD2Gg0eRj%2BMaanqLC%2Fs%2B1fEQe%2B6IBYwNOGXUbq0tc4B1ZC1FJkUXqsySRwQUIHhD0xaU%2Bj6rT0l59IcUhV40%2FF%2BshUCbvuPW9SlwMCQ6j3ZtkR7YtRtT1eaqJCd4ZWsfSZgDoijeJDP52lSf4f1O3D7qmuo8h0VbhLghmlw%2BhEtHDnvf664w2Z7PwQY6pgGvcJUrlaYrKLPSONQHsy5Z%2FmmUfHoB5ktxa4cMu3eZFiTQ2RVhj0JBGOy5z%2Fk2gcAsy85ZnOIQjS2QZbLJVzTfzX681531pF7namEXAsGGX7SqVKJEwi%2BnM4%2BWmZWC8OSNmU7OHoqKqvLiYBy1IQryL1XU452MoZBdCZxrskLRaT%2Fi9GBacg1H9o7d4VteRmhDRuDgnsEQ%2B8FUdx3nMqxgyycJ1AJs&X-Amz-Signature=4845a5770edfd477607cdce475578e9e6a6b84f069e4dfc6b7e87745d3253f49&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
