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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662F65YUFV%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6OxSu0bRAtngsGRJNbIRgxh0uDf7kOgqIlABUe7itQgIhANYCczP4gFJoUaUVcntzR8jbd2EYrk3WpQuffAHucid2KogECO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIXjyM7pBjS%2BWu3QUq3AMpV2Adqlpg0FpPcP9wfRWBQqlnaCHs2MUHAoxw%2F8L6zDImeNNxdKU7S4fS67RaVX42rRngCpbOaMG3duuI71wvfXa27eoKOuK%2BfiWGHmpx2dDxRtnUMYVUcZoe5FFVhD4zECW9w4LMeHXHM01yK90wey6OXqdCLfB0rEFmu%2BOcO32KYuEoTpOxvrxtpQsRaXDe2sLVVaX6Kx5skxV%2BLd2RXQOyVwM%2Bf8t7QakGRtWcOhUxogeiEBV%2BVj9FSaGPtHJYv4RUZQ7Qxc8kiTc2fWwEJrFjeP%2BsiSRPRC5uwWyrv4Z0vsoSmTstpZZ7ysatAWjA6HUwCqylMzXUn1YyNlkY28dG4KFr1LapdXlUjvlqgP3I%2BhLK%2FffQSy02NtI3Ge%2F2qJCYFi1LHnUbqtLdiF44iTVfdCwBV1zMCcHB9WRtUhILS97pwXjO%2BkAtkPMjLG%2F%2FxQagCEbkbjyFqyss3VCfI4Tx%2FtKgxFHC7BQiDmLjeOG6N7t0Q4PEJhhyVos4sRoLRYMmlFtNKpXYNIDMlp01PNuMR7JX%2BCEbsFNX%2F2pp07roAqeZLh%2FNYKNkMcQWn6RVr6oe3TKA7GW0mOubzbLRDWuslq6O%2F53ibYyUNmkVgix8m0stzQRI0Y6skzCa%2F7m%2FBjqkAeBwLyW%2BSwLa6LFMYlL1%2Fg25z6Ub80dQb0JCWQCzknEUkWE4J%2F%2BqvLbwUZzfm0eYhtFFux%2BOzHMDpV7umKh9L6yyIpw9cXuNwDKKd0x85X4qq11rky%2FGWnkf1C%2BigM8GUxy2101mnzlGDzG0LlIVyUGhktCv63ZtxwZ0t31L7kFs5wQEVIZGm8FVqqQ0%2FQfYQ65OXsiRhLujj%2BjA7sYOisPxA2Tj&X-Amz-Signature=9dd3a6fe1a4a99938f3fd9bc4096dc3cb7c5de7a24ab62e8125dfdc02b3cebdd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
