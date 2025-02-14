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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SANQI7QD%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T181006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJIMEYCIQDj3QcS9i8hN0QXpm5LrKNyTUZLITK4NDKWe6Jc%2Fuh6wgIhAPqNxs7oEAbEhwgBFNATibPIYGa2%2BcgH05Ovd1c%2FRyFIKv8DCDMQABoMNjM3NDIzMTgzODA1IgyJwxwiJuQjSQO60GMq3AOrMMYlbkuwKpnISKsUZNpxWy90TKSBjjBRAMyev1yzckGGYtGCLQFSPfhvrHlvK%2BmrCiVIY0Cuee4CmfeqoDS56iwkN2h7H6Y9b4TC%2FTZXX7NBbK%2FC0%2FigcTtK%2Bkwj4z1Xqd3nTOFpL7yHUjX8oMZteyIgLCtxjRuzsETNFxTarzJqxgIBYyyGXzlPQeENwGOsVxNIbDkUh4KzTvbiCCDIgv7XR8pUuVV8KtAjwLXCywOyYzKgnvCS%2B46hI9YYZmK2FSPGuR8sg6jTiSeY3xIhgOpZWQD49pDEieKt%2BGenNKcge7AJ%2FJXPET%2FAEdn6ug8ClZ5CuH6lHNG8wfwPurlBp91qT%2B1VEjQv79Kh%2Fg%2B2XYi45buyZ%2BnipFxlakBF1JC9Jo2cUd5qxeIZTjS86ctF57qnHBAwGZeXr6qxP3N6xrrz1kR6IXaIUO4%2F92CzppvHVy6uQDmEn2GCzkb9zpXTU%2FuyZew5Tb84BUE1M9NmUnMk2oplp4fMfHUMYS0QCF19AKZN3fIohydBeeuaypr3nrKl8iwd1u3yfLPLtW6ouSmrgZ00P4xlAfhduWPJL85UqAm5vMH7x1H7xKMR1M%2FYEdw%2F9u0A1FmNKt1%2Ff37KMC5rCkMZ4W3SsAi7%2FzCIjL69BjqkATUf5c6ocNEXHDXu91xKR%2BWcAWgrgVH%2BXqKQy%2FP3GPp25AkKB4c6yC%2BcoPP8p%2FzmFw9LruNXoWhB%2BCSib9ig9IdlmweDYXMZvt4hKW3wtRfDCCaDRjIE0wDQ6vguEh3dGLwNfJtoeoACvCKz1hp9cPw5K2FuVE9W%2F6wtUXp6HKwfSk%2BcWxQGcBnjgrp3kftiCc8xMy%2BwtlshNCxqX3ZPPgVLq7%2BM&X-Amz-Signature=15ba8121bcece46f6e9319962b3bbf0ca319ec0f9ef2c34fbb4b25b397b876f5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
