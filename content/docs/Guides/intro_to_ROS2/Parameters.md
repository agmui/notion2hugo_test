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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XJMGJCU%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T004055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQv63%2BPf12%2FI6Hov%2Bxm3ZZEeO8uJXWXmRBsBYPIrFZzwIhAPiLjHkew%2B5TglK020tr9qI8CvEaWADGKHiE9%2F%2BVjmiVKv8DCFEQABoMNjM3NDIzMTgzODA1Igx5%2BgdXiX7GafuarDYq3ANwPP9tUWO%2B1%2ByNYXJUSbU9RP7ScJN0g5WqKpoIkAIQmEpX%2FR3Z3ooezGpEVKWNzA%2F5e2imfrw%2FTFFyNEhzoKNFUOHpWADd9FLyLA0HaZz2FESGIJwH%2B4BkSBghePIZ97DGaexchfFZKYh7jwZxBvcTQqADOG%2BhtFX5Sb3WgTVBc4jIhp%2FnVSB4xYReMRymu0lcLhf6X4qIUr6wEfkopjqNescfnI4Rgh98TMY%2BVYJgLMDXIqFPTlltr800Dkx8xMhtgx1i%2F5ck0FoGurLGuTNTaJ7y0CzOSjAk85phGg8U6LBGaxMy3t4MQLupsqVvGql0dqH9%2Fpju621Wugj0mL7puxzFa5xgE1f4qQ2ngmPqRUgRoM0s8NtOD7hBZ0jWwysOg1Fl3HsaHBkGbBGGUxrlIBpGlec4pxfA1HGclT9DLlYhAq0%2FpD9974GJGqifOiy5ucQgayS6IVDvV%2BvkkrIK%2FVENk4umaWImLAJkQRIjgCNcUPAxA8RBVZKlWbwP7Ebm8cHlqMNnisw23%2FfoKR0CV4hs14y879tvigeGTMIvKK4ytL9k3C77%2B0%2BkMsy8BwHeMcQqwF3y2yWXz2Y8k1gba5lIvhUZM2ufBZZsm5PQhAFjMAM1EXmFpskl1zC8tcy%2FBjqkAXQ3kkqjzfFxrNJTv4Cp%2BedauWdaz1nDRRZ27e%2FK8IVETYd6h4zuxSxFuYnGolA1NIuArk%2BFZECEMkTBBssTi%2FOF3vRe7bbxD%2FVgUwWPdlxJntdDhV%2B8owjUFj4tiJAjJp0DEe9bhrk4SDknpmuAOUf3ysQu5Sxa1keKf7Reym7SEJj%2Bx6Phq3vv6yczJBLClCnbZ3p4ZKAjFZKUVN7T%2BjLfbqaZ&X-Amz-Signature=baeeb819792494fcdd8f434eef5aca41ffbb7f636476e488062f9ea89b8488f9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
