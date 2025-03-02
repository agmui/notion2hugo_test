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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NTXY32K%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T230709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICLQgefAQXGlJi7ezpkgn0LiV4uMIMhxmu6GM6eEAYQQAiBhJEToC%2FUU4xF3WQQunxaTyRdJyFAHfwAEjTtCPQ1%2FoiqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMp%2B5JJEZU7xwZuwV5KtwD7oyIwWZqbxh%2FqTzlw3OrHUWh9lRYPTYYDewSqNhfgsJrXtlFRhSdzv6wmy%2Bg2b9yRl%2BTPCx%2Bp%2Fx4lSVMkgZDx%2FD5yP0W5KYlZaejYrvTyg8AXAPZSuysLZXEeoBneQZDhGp95zz2yVij%2BmywfXBxua%2BJrRUQY%2Fqc3zDcCI0C1YgSg%2Fcx%2FwFIptIXWlieu4Je5lO2rpe8PhwkC6hWAcwvTXsWvz%2FEAxptPGT8mqFFE9vow5w2mRXu%2BAQ8uphaNWoToN9cYFa0BodUUgzdNYC6IFTBslY1MWyRAEASsRT5x7SkehSyPdRmj1uawRb5GqOZ7k2fDyRQDqwSAy7xC79xjoz7zJff4ZNnkO%2FxTtHxkz3sAF02gEdZ1MMx9E0eyStNNseE9CbYAkcKv5E1lC%2BKwhGfw9GjYtJVjFaRdehADloT%2FL%2Bnrdyleo2Sh7B%2BAJXhnMeU6remX485fgO0Qp0Wmsn9s9jriiYThmo3dyjDGPHZjrutHkwSc8t9NnwKi8DQ0zi5ytty3vPin1E6pTrqP4CCBiN%2BJAUxtzqV9oTk11r3s6h0O8OmOzKD5Pcp3khBk2nL50E%2F3W2zKZWcYhaAq2HY9RlTpjmx%2BzJ%2BaBRqhcarnhzY33XNvhYZEMgww6WTvgY6pgHw9tU2q9sdgbtEm6GExYeumItZmHU%2BuHBl8P5Qljv4xZ%2Bo3dzoEObBvBZK7xvw4Dtc27T9xu%2FPoo5pWec5vZ%2B2c6JjYgtB2QUPBN5mLrMxfS%2F2W2mtau%2F3jEda1V%2FSQYFDgQiUGAcKjIWlEH6KJhEyDxX2iDkiBZkAap%2B3AQpHxlyz6%2FWwOPqrkOatiIBOirwuhN06NUNuhhdxJcfMHXPxrfVVqtHe&X-Amz-Signature=d92f8090dfd0f2b0af0f797f103b45f19c76c13259b67c19d4069a2cbc8fd0b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
