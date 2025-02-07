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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXEWXVAA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T150749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJIMEYCIQDa2%2FZ7yI89xS7u5yelTHUSy4pMe82NoJM0EBNv6Cc64wIhAI3SWpN%2FMbzubPEGXZ72po34ZbF55dLQyyldHUw8ZdG4Kv8DCHYQABoMNjM3NDIzMTgzODA1IgwzqRdM6%2Fhk%2BLkg0Scq3AMXTlApvRKWGyrhzVn8DFEvr2%2FvrSyjvyrce9lYRDJ12N3yDc3ARmQNK2hrCuV8YgqpiseP0F6IJJP9aSl5uxLssbU6N8J7u4AySL3kk%2B%2FQGJPDs27lyj70RmmXwueF8nJxI7sje3VHasPV1j%2Fyh74AWL9dzQAY0Bn3No60M7tJA%2FZax1GqgJSEjqzcMZAxox04PSKqJAWTU5x4uZXaoPuCnfhG5mYEPJn6Btd7ZvQMnO%2FvkoPrhAsBwA84i9junukGLVwXguP8MmzkucyQ7rQ8cfNLEmz0Alyu2uZDJOCR7HwCPOn96PHgFWxuT04MnVJk15QbD6Noh1DKKhk3DQsHwvXyLP9vBlDtU30MP8JtKBVs%2BO1S53Ziy%2BVfGGu3n6dXGMEcwbXVzeobBFaHQG%2FKAlF6MoXkkNMtRJT4jMO1NRtlmWTA7IhmL%2BKJBdAyt8UVtbGnqjijASpn8%2FtbHsASQgS7YCcv19BI1B3BBVFtJmApAaZ%2BEwzDaunAxdnI%2FVFD7Zj0pWxzfssbASgXZpGMbrTDF%2Fgx5egE4eRUuDhLnRBhipXpzz89TeEFyWFZvY6dctiglTPNdOWKiHwiZGYHweRH%2F6pWSflyrk6rb3CfVeT%2FEoudgtcxlWYJWjCbjJi9BjqkAf4cuRnmbhwhePZQgeVm6DPDXpGCrvcgT4ozMLfqu4PPOKNk2N0%2FkKuvpXrUJbtaaLwh3iuKn5O3kedsS%2FFTms6ko00huGjc%2B%2B1%2FNep7%2BIIaArZn7rT%2Fsh6gqML1sXmjDJfONmT%2BGmCk8g8uj8Lwzm4rYwqTr3RlQWo3N5cpbpgJLSIMPhPsQYV4WvWDEJ2XpPXfUOasXMlLHHsXZNnn2MVKOVtE&X-Amz-Signature=99ca979c437ce6ab26f37b3e9054a622ab5b87dc01ac0b678b279c483fe1caaa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
