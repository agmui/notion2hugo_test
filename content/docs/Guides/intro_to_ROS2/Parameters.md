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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH5JBJGV%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T181249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzxAse7yNe1aoayPLNsOJ3kYfxR5JQd5zyfJI6Byw8ZgIhAMvqGXxxa%2F1ZYgLkFt%2BGNYB8yOCrVbP4BCeJ2nROBuiLKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzV8S5jvip%2Bb1VgoQ4q3AORKLPgIVMdVB6ktwegGcd2h%2FACIo%2B9RfnmOa8Xsgb8x%2BqokdOLgxakvkNLteS%2BFvPacBBirv%2FCRFYK5LlHTa3eOAWoopdEegO1LmYzrtDrtegTMWEjt7uelmnwMnWrwpDu3MizT5Zvza5kJpFDYOiYkTdnn5d1M%2BBu3UurifBPru5zuCQ6Rw8AZAuXkdK%2FiN9syOtjVkWAZH5A6fNnht%2BMav%2Fj3aFymgaBqe%2Fb0cbZQJKCT8NlkBC3Fzrw3SSE0JkEsyRH9bKdBcvKjFiQwiioMo38hNLufNmopSmKan5DDUoW7R3QDmJveZRCn0QTwqYCV16NrzQT%2FR9c0ukAkpTcGGqRFM1fP2vpFF6Lo8axNe7PEnYO7ixUK3n9%2BhSPEwp8xWCNX2asKYSG8hP9tojiRHdBWsSV9%2F8OdY4qNSlVp72zAny4qRh2jI%2FLG7S8d1aLEQIV4uuHRERUSykCj3QToNn2yGLWNTBj2nGdR%2BPIkjZtmdoB0dG33fZkabo0MrD6Z6EFfm6pbFRjI8LhJQK1lRQYIqdRceQC19hUgdEAOF%2Fw%2BeQW%2Fzg08K8fPZ7ZApz9NO52oRM0pwEFvEE90h3ZSpXY4hUIP%2BSfM9futWV6yjzWaS5ZVzRlK5VuuzC7rbXDBjqkARrgYQLPlvtkstkryWJHSe8sEM%2Fjmwk798c%2BHTR2qfzYNRSp5xjjSm0DXGADB10B2%2BynG7Dov%2BgrH%2F1WHv1LyxU%2Fr6Gq5a7O5GCS1fg4DqpF0OUz76DItrhhmJQC1VUF5Wex58hEfzwWTb3V%2BC5LFlEiA3csL%2Be6eN1fWYvXV7g9730bKlQOf6rg3C%2B1pnKROnzAO25txgG91%2Fb5yA4WN%2F06SJT4&X-Amz-Signature=9e088ecc71713f22fa6ed7bcd734c4237e7cb06ed79b0ca83e406c5442a18e9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
