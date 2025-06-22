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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GOW2GOP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T190213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCXqXR0SIrFLhhBg6lQp7VZKsEltpizs42QlQhN9jl3bwIhAOAh%2F%2Bhj37aKUSMH7DvAYhpNnsj3UDxtZZ2SGDb0Xc1dKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1qCk%2F4AudqTdMiGYq3AMvxbguKX9msIj29PMxMZB1pHzH9MFe70OA517kduyZhVjH5TNzlmyrVS5hOzDd5ZPkEWlp%2BZnYVAC1Mm%2BQAQOHg7Oc%2BVmTnH5xDzwDVLNB6UwREKIeRS680oIcc5glOC8wqDFzPtv29GvJr7%2FXEDBhv%2B4hXxZcQNq7JLGrKvjkro6yvZu9Ibx70PIHTKl6ZW8YY2wjOA64nCOlce1kQREHdxF6clrLQAkMmZmhLoYgmOqpzKsO%2BPrX8LYQ7HaHya91LlUw45npQxP6NRYUWx7nRta88HDX8Wh1fgHadOyC0phRLuVThKLpCqWt3EMHcN68G2P05Oneb19hHbFshWONiPLm%2BIaCFIgF3wmT88i2TXGZiv8YIL%2FMlzUeFj35U1ckrx9IGFVeAvtuWvjVHGECQx%2B6UKRMUZrmRI7UyM9jHr9ZQ1YIpjU43sSSrlbmdRlkdQ%2BTDb8KfCWl3jDJ992GmgjhR2K6iyy3g%2BKF1GtSQBJX%2FCy%2Fj4zmGPvMTliMB%2B1d9yO78Y3g4fFsUcwf6rPsCgcRVv1AjTXBQ93Rek38Knmm%2B6BUwpBD0XDo8FLcgRbp8DZ8XmmuwntFneQg6HVO2Fd9woJ6fyb7qbfWhwwvbUUFsvs4Mx22UWbuuzDVkuHCBjqkATY0hN2uEfYQSqruIKZDHcNAJBsf4JzL6%2Fvc8dBR6Yf4%2BVtQiqeXxrENtNv%2FBaactu6av7D1h8V6crOpsLy4ZNUHyP%2F%2BGi4za%2F%2FAE%2Bge6UpMo454tyTKiyZhlUDAA4AwJm%2FWa5Qxhb8Ulmnd9gI4hp1JzRcRG7Q1eGhiKLUm5SNewl7TnFXBLHxm%2B9%2B6z7HqS9eaabUH%2FkHd3jjwn0Ro%2B86lOMa3&X-Amz-Signature=9f3540718e2413c3f632d47880c98b78d407dedbfbab6f4a855446ae8ce4417b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
