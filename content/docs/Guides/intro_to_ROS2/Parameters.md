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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TIZK7A%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T110747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJIMEYCIQCGt97KEGVSyW3C7gIll7dX66G12wv0e4NVon2DgwPGAwIhAIRzM9WaBy7smDI6f1PQ3d%2FaOqFvXBq23m%2BtPeSOooz%2BKv8DCHIQABoMNjM3NDIzMTgzODA1Igxz6%2FE%2FVXXNc3ALdC4q3ANy6jNpox%2F%2B1aFtPr8ZkQNM4PVDpDJ91hrMupW89fmkVlGEZbJiuJy4Pya5MVoxdW3ZeT599lLwpZUSgNc71sDDL86ELtmtleOuTeF0LHeMXemawIDCovkjfO6uxuyrUHuFGBX9tpE3OoZ4rauPSkrU4ekPLJqPhjJHz7CryWaworV%2Bd8JG%2B8YRpRFjerKcsBSvn%2B7prnqqqpGybFfQAucnVqZ6FpZeMgia6se2XhnNubPqxjIcEBHcVt7rD0kyJPbujZq0hsJLBcTunN8QXfpPvv4OaA4IZqfu5BP8zcfhIMgWpdGpDyYEPHhIiGRayy%2Bi9Ss63UUGAYaKPcbikW3NZLrYUTD9nOgnOW2Z0xYQSuEkDrBb8rIss8EyBP7YYkBiOe1tT5pPIkpMYhgaqb803IKHGxNG2SKmlhl6SyRnCFGuXgiEhX1vRr8mXtTKurPkYlCfuyj9gwIpwpZsnPLsaH5F1RlObfyKlql1%2FKB09IwqG9gUJFQyUFGwBNoFDQ5Kb5RepW0btNI6rWM3qvyb94dUN4FnxOk0c9WIGNhpD%2ByCqgXc8UytEoVJMWZAcm7udxyJTFNV94afEbKZr5%2FkGMNQPAxE0jTJxzUov9J50MBpmFdxYHwWhdRTaTDM3pfEBjqkAcKJl3bg3hAD5I3iCZ7Mr%2F44vG01x3L6uVBiedXMWJo7qkUlP43SbYLNvlNLoo1H2OX1%2B3gjblMypmwKcZZH0dm71FIWGhb98NqAhTXgKOj%2FA6KHmbkBWlOZLTxxLBQr%2Bobxz8lH2LfWQPrmUFpR4nr2rZvlYodeRpls08YyLVZf0yrvGjJ%2BrYY8hsmLi198j2zF499BfLHw1XL7bLTK%2BeDZUrBk&X-Amz-Signature=a2d91a6c735826253fb9adc057d2be2a1ecdcf9a41746b57c1ea4001cecdb97d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
