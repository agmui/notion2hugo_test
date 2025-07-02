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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NZXHPAN%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDF0WbJHusSdSiOoiiEPQ00EC%2BmWgQWYaLGc51a412vkgIhAN8xGvD77cD32MJ591wR1vawocKd8bKafUnDvBXsageaKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG4fUukNw4dsPL37Qq3ANlKnp7nlCqWfxpJ9ezah%2B6viynWoVyWsO5lJqUIhQhXbst3T0m4B3%2FO%2B7LGEO85k12U3CRq09WKkJbKkBfZ%2BuQnxIGpEayJwSVCYkpXFrOF3vmQU6CYmZBEpceacZinJ1LU8W223uOoroTTTrU1P1RrfUZRzLtxDYUFyP3iOO7DaWlilZLOVCWSB2QBpkWTFMg%2FA0GB%2BtwNCs5dEivNS8uQ0IRK9zJv0%2B%2FCn9m3kH22AWpyXLoc5SYfavfAn80Bk0wQ1JcyP0Fbqq5q7iGQWkYcNFnpdVK4Ll03DEzpa%2FGVilxnqoHJG94Ybu0vJEhf49K%2Fkbob%2BCHRM55WUArVFKZsVYE7eYkts6GyTLRejVu2SHS4yclNqBlsFMfqYnWLdCJODOww%2FHyJBCE1h1yEihO0Gai84ePXgL%2BxQ9Qkl2aat9tBThes6XFrPXee6cELtQzQfMmjG9fHjCu7015khPw9PrrVf6vVVTe4tplQd3OMMK2C9R1JwOTpHQn0I%2FgorOnmqw93EML9ADc%2F3ZqXd3UvljhsZQHfv0LAkF0%2Bu3vIko7P2yR3roE1PiFG%2F1dMBssrHEXxCWpmcgPe32FOVzMLLM3uaNlijcIYRw5NaAOW1kw3IxZolYcHGylUDDP6pXDBjqkATItP9qQdvTfYA3bgNvV9HPgtokflHJ%2Be1jQj0q7lB%2FwZHpkkzsVBJIbi5ItpZwwWdacJqCHDPS2WbXoOmVdKnX7RGtXfd1xEXubKqPWwUyUki6PfzwH9A2cM0tUj%2FXiT0R02h41%2B8MawzFgAfumOpazb4bM9Hey6RXlxyZGrnVhQdrWggETk3g5pQtA6P82fpdkU8BYmd2Q4USxrw%2FEGjzJITaz&X-Amz-Signature=54f05af92b4940e3ae3d7d1087cd3f5f7b12213a19f74ea0e8993fb18fb31e08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
