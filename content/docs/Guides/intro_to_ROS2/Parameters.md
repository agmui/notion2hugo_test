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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666V5COKTF%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T101001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIuAM%2F9fv9y17KJZ0vGnksdawhSYo3TrEvgKH03FHctAIgVVsH60aWX3be3zVyfQUWfTrAqyHocD4bagMrw9HZhZQq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDEQbuVxLtdHXvDAvXyrcA6RHzieNaucm9XGWhwbYNG2lh9fhKSg1BE1oG%2BcdGxCH3WwXeHJBtwmSsKxG3cMYvWypsD1%2FKFWyqhwOoGmpsQeTASmpLX%2F4RRFJPBTEne%2BL8FIN6GU0KhOwbCNzxFmn0rlQtP6z%2FOCqS%2BfQN9sMioUfaRqTTdmfiNKa0jldMh8ID%2BeDIAIyqyTRyivXVyc0KBwtEjKAoR3DP26RAsjHH2n2MJyoYPQUNlyTO5ZGGmM5nRuHfVRlCiUowZ4Ewq2d1tV6CV3A0YoRIbLFmw5wTZTYJHwh1eKHRop9IunPNw52FYOrEw00rrHJFc5hgqeFuCEm1ihkLydoLETUGr5gKjMe8GGwwO0HkWy6mqxYjxrSd3axlcIIFxuST8uePYfxNm7GoG9N4vikroPnZnuTO1wng6vc1pDgvXKHoZ3O7iPCeMgZxGgCbZ60t0zY5HaYfrrcQgye8XY%2BfziJJN8DfOOYsQeuCdmDn6HzZ9J5WPX6hroiB4TvG52pK55sQ8qzUC6clyX7tfx0hReFS7EsGLpzEiz1K2URp5AANBu62H6UWn%2BCneDEonMrH4hX2882zASRTaIu4x4cNDk1z0rTPg5owOmVZCH%2BnMFqMqbgW5aN%2BE9MELJOFrUluNM0MM2W4sAGOqUBKTj1YaDI7MUEVb6tv%2FHZwn%2BC0ptin48LrXM74dtQ65VfE8JeISFNOzd20%2FjhxjyxygAG3v8MpqIGOvc5ANpe7zB6Q7mFmA3QY3AYcXqF4UVQaD%2Bffklx0i3oIH02f3TJ3y8Y3w3GH6bCz58wNT1VnptVcj%2BGi24z7ZLS%2FrRmZ%2FVlz7tBONhmiFOyGzJnf6ksDHOI9uk8A%2BDH6Q824TbHk%2BjvOl77&X-Amz-Signature=20d0c8d279a937374af49cba18856ce5f806148f4eb34b754cc9ca6109c2df9f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
