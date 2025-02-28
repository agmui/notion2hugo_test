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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FZO7GUB%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T110701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJIMEYCIQCfFF%2BX4ZNqENy0AtisdDVAaxqICHxoLxomMFZ5mhPUOQIhALOdBouhxw5q4dB%2FzPeFWNovGygyC1KpihtE1iLRDZPbKogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx5ZpG82frr8YjUGdkq3AO04%2Fuwk7ZbvfKvEUzfhvyAx5tYKhj9pFosKgZd9mn8lV34jY3MgmZmR65AirjWtB1liQ2J6eIl4zEcnNHR39Kg2mhfJYwkgdcDu8Y7WlzJkzBcw3g%2BD0bjjSXMmpD3BEDRQ%2FtOJ4oftm2ZDEcU3RjLrTF7itVW68iUfH%2FvgbkQded%2FOTuYyqFq9VwOlw3BoTBe2WwZS1ciwCpPKRGAM22pty%2FeB44Y7W3q%2Bs6m8AviNTpxnyYtbjLmnjJM1Zi9ydmIWZ4BOP7lJBSX2STnCJiWLO6%2FaWtYIXzAFcSVOAjzo4oEfXEJ%2F4yntgZsxcaXvA3LmjlrBhshlxdqHPmYqICBsDDtvbFnwJGedDMMv7wqARQMz%2BuraOzJ7xc1iJfdEyHZLL1C06YRLxw6a1%2FWSCH6QuxE5pZ7YjFoFgjKiE4JJJ3K5F4e5aolAXGRluXtBf3JRpJUjzAXeph5nxsOsrMIUK9yLFeXDtGD4JFPODZ7pp9I33dqY9e%2BgdQUgdwDO5QKuGnQ3IGLzpTRPDm4n3tgCiCyN263ndkBq7KFLL8uQYm0U6AjosfKuglhj%2Bn673C88WcIcfjTZao7dYibE94Bd1fF9obXpMiheJEK3s8%2FItz0UZQWkzjGpzf7EjD9sIa%2BBjqkAUlMQto5xle3LSX6tAATIlrR47nABWCSxFm84IH5HSfROZ22GGFjSXfbpNbouSJr5hfPDSg7i5n50yOyCAlmJV67jbEy7Q9IZxG6UKP8GDhcaD1bw1YgnbBscCKdJN78Rhmx%2BgTAdTPGlpVtzX2jkTUOoDcBstBoBR1rBTBCu8H3QJwEXW6%2FYXjlk%2FowIX%2Fp18auuROdDcPRevGp4mhZtSkRa1dt&X-Amz-Signature=5963588eeb3cc8c85dc9a6512ec28c079a5864540cfa55df8cf53c367c1199fa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
