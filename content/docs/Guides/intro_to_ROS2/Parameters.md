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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UMTQDPGO%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T200833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJIMEYCIQDpwofcOKCNxqW2mqubm0SHGl%2BeUVfsR0kQgbYsEU44GwIhAInEEf33v%2Fwdmaro6%2FrEPgWl2OhKCBzUe3%2FnMNDVrEhlKv8DCDUQABoMNjM3NDIzMTgzODA1IgxFe0N0EX1u3kIpvHkq3AOPkwmFtTEjt1w8CRWdALog9%2BHFW3wl7VC1D3jEeF2QZCBXGLYuyzFO8Z4gRzXoXz108KIaYfWrwrfkBrvzv6E%2FZZDpnNJkKcVa5uWpobTGX8btTNR3HdsitOcoM%2BT9FhA383xpKCEI1ZOQUf0rWpaiYJ2Nq1%2B43CeYKXq3Ni%2FIr16sCbP4NvLHFeFTY%2FdlbLzXBNxgjHbKMFkkQdgILd2BpoNVSkpiemRiEo3fFwafQoyreoIVYLG28k1jPpducucJ%2FwqHB1LivPFH5W5i3bGzXDxgBbDvx7zWvufx90lXqbmZWkT8hJJbeqF4a6cEghBy9EYq6FZ7ghYVEEf122V8lMeUbAu8YMzi8UiXuB%2Bn1dxLLjcWWN4V%2BFqVoLpCShQXbcjbVAML5vbwL9ZMzpQ6n0H%2BIcSRKZYtp95ZSw1EiBxxMmhHfK%2FLAdOfaN4WpJM0g7BL%2BBR1D5n%2BiCE5OUUvhZb5HwZPdzQTUYeR2htiLSBzqncAFQk1ZYdp54i%2Fe%2F4P2twWtVyve1xKEjMHr0Tl7sLpxwEI3%2BkAhwioXRzlpOtiOYT8Vo2NNrnfpvNLu0VIqrj6xDjglJQOE8PdkXk0PDLi0HwGOcQEg2GbsxGnGborl42Afu53uICnoDCytr69BjqkAU0EYTuLmpV28tnVzPuTqmARrkmG9RHy10DV24O5%2FowXZB%2Bs1p%2BK6v1nORQyKAitXXMk1miO0aO3aW11aYzLqhufc4XdfDHHPv4lAbBcx9I%2F89n4SBh%2BhOJNc%2FDoY%2FKt3kTADxvZwUx87OlcfbYgfthr31ZNBDY01kOz%2FiUayppyAAphngdJ7c42JDspOBNkxCu8Bxv9kxtXJO4fTUBTIXBMDFkV&X-Amz-Signature=b4c5ffc4345d5325cd7a3f59e0272bbf955cb039bb9ddc953d6d512e0a7f0d5f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
