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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSNIXC5E%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T004304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQDIfdWCS1hI9FUVeZiAiCs%2BdRrYU5spVuw8c5Af%2BIcdcQIgVSbq5bPx8jd4rAJGBmCmtnWIWm7fA%2FPmNVYHFPYQhGkq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDH3h5LCK1Q2mxRJfZSrcA3g0yMLgUKWlmHpO2GiwpEWKdgEImvX9P9BUTjC9PsCrKCtasAvgkf0iHSJGHtu9AOCTciHmWpBabcbGPAKsqp%2FQG7C2eKb0zq9IiKbS8qOxSw5F6NIwMRhTjqgq8Bup6yY1D5aAyaKIpzj6gMjMG0uviLxsuxE99V9R%2BzoiY06%2FeG%2ByNDaYwmb1qupxILbEhERCxbTUx6NyCybst7t84dGAEV8NBiPXck7%2B3iOf7QqdpdiA5VE67rsonL9qGZGXVXPjtC3XUVhUbviW9c5q8nvYnOVxwwI4BgAUe8J4BQNWfi0qpR0Ztb6l9OwCogiHQ3XwGw5r%2FFJvGo8lF%2FdOS%2BWjyDTZHlNJV7Ww7hbHUmrNiV5cnUx0tmS7C55obhhTSLpbwkFV53vibmVwyEKAqP8QYQ8SlSoC0XVuqom8CSOwGsroGAuHew%2Blu5lPgJ%2FQj%2FooyeCqitJgdsEn6rG6kuYZfYNzYqXDa9WHKLTxOz9xmZ0k9OjwGRj2foGkejLHwb6bxPdyZJSSs0UL2lP%2BFpM3uILL86mUS3o%2FHo5Qq74pXwk3soZY%2FDS9TddtkIAQKc9qIVjjpS41JyGI%2Fm8jUMMjmhro82J7pJOHOmW6ldsjez3nrw%2FiAGenlVNvMMmR%2FsEGOqUBBvFzW%2FSpfgxKwY9OYCDL4ZyqlA54P6YKOLwhezsQhTvMrG5hhFaTnB%2Bt4t6zLUN8OrGJeIzutHo1tM%2B7iznE%2BJvvhPzFOhXvaFTNN46uhU0j1oujct%2BCn7qfFQRL%2F3m0C7OCvC1z87LlQOcAQtS4DYjYN4IwcqkHQWmbQKFiFGr%2BFsvvz0wU1rmUH7e1L0NuB5cB6hKtrkbpEwNZNsW6PS%2FkJ4y5&X-Amz-Signature=4d2fbacbd126ce88fc2019e6282e02c961c72d687bfa98f2bca6ad748d4f6369&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
