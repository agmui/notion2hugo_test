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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMC7A6NM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4hXtp0nS0tderYSmHFpfHOu7S4T4uybLpbhyexKL6WAiAyTX%2BDmgIq1jdWu7RKFQVYu2YR2QAc5XMFkTnIz2gLEiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSN2DK1xAV8EPbBtrKtwD1Ara%2BhJcjlpOVZLTmcS9Ls7h6s12m6yIZOck74ypeFGBL4oKDLTUkgjWM9ukkPq%2FQd2nX8Bd0toQhbHb4uUmQmafKRfK9MwpxS%2BeLLUSzZPAsujoejOwmLZB6hjRS%2BgiHXy8h8WXmSUdSfl8DQYPY1wIVroZiIlON3AfhrDA%2FpvydmS5b9I4DWZy5Qj1fXqkW0rE55bf%2B6Ha6U4qMuNg4H4JZ4L1evvuGUM08WZ6YgXkyVNiBe7FlOoW3EAW7BeHFMyzoC40r6bQe5%2F4iBNZkfXVoh0GryI6DK%2BW9MzDCyOmoinRUA6gKl4hAEIvsnfNjIlk5dAEhd4EzYP5mup43CHSh4vhtexzeA6qb%2B%2FfXkWLq8ZLzbfvPZN%2BW7agXE%2Bz4Y3XGVma7oZy8Vg%2FcVZ9K8XolgZXIo93wJsvmSimksKKJ8OajPyJblfD2B8XWkm0KmWZvkjoyLoMu42%2BUn87A0VqK1bRUmBmKEexSeyLF1JhFIm%2Bx6lQ7isPL%2Bi6lDQkQZfxduuIzZBxNO7%2FM%2Fyg4gaM%2F%2F5pC6Mjqnq4JdOVXJucy42R3rvaLft83an%2BHvCEHJxFRHF0VMOXOqm1HYBcg1F%2B7QdSxpPlPzinmn59AX23hIofqqfVNYgdpZcw0%2BWvvQY6pgG3rV%2FtIpcB2uzljp7YE7EcMQg5Xh3D%2F9kxx82YByOv40o%2BQwCe8Rbg215ebiPOBwEUFsIYRPmWHtjgF5OulufSh5CqDEGjghEeHhvGpXWYzIitHn20oIxi8bocazUt%2Fniu5Bb6zhAYLkSfsor2%2FBFxSfWejHuxbmRlehrpEjj%2FxJdqERusNzmok7gHA5dmJsFWpC8DiLnIQa6mg6F%2FcGBgwEVT2Zyy&X-Amz-Signature=2fc090ba6793b0ee0f93f6f4717d9afb8f6c68950611d703081e36253271e35a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
