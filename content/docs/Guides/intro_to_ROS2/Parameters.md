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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XLBNC47D%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpsMePUt2tYeWI49f6pTG9A8CK8jf1HhqcvXpfztbuZQIhANROA6IlSNJos606SfHDdIX%2BvmJFUcToSxY7kJ%2B0A1%2FGKogECM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BoQrOzBZ2Y8dEbhkq3AOka7UpEIjsB4ipGF3UsOD%2BxBdpn9MohjKxLk5%2FXEy4XWRc%2FjejUZ5uZGyw5QueXdBJij4%2BaBtx2ePzPwZ2JFgU2pwpHMTLOGrOOVrkORSxFpVzsPxsY2thkkH6JzqJDunN9amxoGp8le2UF4ZwAzCOE6O%2BkHKGFKm1K4Y604U%2B5NNoDJIm1glCkJ5zHAyFpOwbmOEPNX0BJFqygDLPWn6nEVidi2GuT%2BdTap5VjQbv%2BOySM9j%2BaCyBoPN%2Fu8iRBaDzU6P05R20OithYm1xHv1QkM3jSEfd1ELLdMWbVprxck%2BbZABRGec0OyKrWfaO99i8hdgDUXjMiZhexvYvbonMJmCjBFBz4gs6VZDGXWGAvCN4TeX3UStDJN3m9%2BpxaU7eaaSpMilSVw1ndkAJy4qLiHOZ1QgBY9343Q6KunVdgSBw%2Bt1I6LYtJhxzADfYlKv82G41oxstCVCJLwbd9CF4iXdEnT%2BIXcPPclZpKj6J0Jw2Q9CRPL8IiNkx0zEqbUm9TQtf4pJCz07iimgdGA4uDBkz1KuyB5pw2rjuEI5JpNWy7jX5cQnQfHDYkXB6J9HXFy%2B9%2FGKY4EDx9cmqexo1K1Ep2JAuXaG8EmNhipNBXK4e8smo9mAPCRwutTD7heC9BjqkAaVC74cdrSmzBEibka%2FhtztwTJk845RNH8o83%2FmW2MqKaohE4LwldG9TcGsnJLEVELjap%2F3RcHBI8SrIlQ9A8OuYU6bbjqTzwkfAT595LMMhSl74drSo9xx4DPLFKHbdM7fky91oci%2FUWN05%2BUSbgQLt3F8o68x%2BnscjMQ%2FyilW6kaCqJo5IhubuTw0u25ZNtgqrKU8MU1qqtg%2BTsAc%2BSzJXrupw&X-Amz-Signature=990abca288c6bac97196f1112ff35346b5a624096cdb40ee5ac92f4d258802d7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
