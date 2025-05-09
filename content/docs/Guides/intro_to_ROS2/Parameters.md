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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOHBYTGV%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T090929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDEmOyze2G9z%2Fujvf3cW6MRCCd6xmlh3Nktl4yl2cGTgAiBYvn84FTpBM7Jgy7CvDr93CGmV9TROFyjr0zD2vjwzSSqIBAiK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbXSKV6DC0ZL6uyEMKtwDhhqaoul%2Bu%2FChkBGKMv%2FZLofSmVVt%2Fv1QftJQV8enTuMNp%2FxeR02Fiu6r%2FjKSES6BKtzFrz%2FefxRxAa3z04TR18njwkiAKxzpwVB9MMetKyaxQ7Pf6Kx34ovP9ZG72lgmTv0%2FWMxGkQxj5o%2B2DoQvMvKO4QGZLWSGOMWknZMqNn60BskYzdSeS3vP3fuP%2Fkyl7qRuRDABIWK0kr1qPVlgQh2LWuEDJKB7cXE1sCi6yaYuAR0L8OPgPGFEPyJ8b%2Ba3bB4wheCHpXlaVFt5R4x4pLzO7lFl1srqeNWQjjFu077W358FH2W524UTWxHkTbRupJyd38KumDq%2BXfhYX8X6LOleDS0mQhHJhDh%2BGKhjmvNhj1p57cj8V6VuR6AJTNfPX47CkoQOxQihYI9nPatpMZtARJq6elh1Fs6auhGOSJb4xNcDCOxseJGIQIyi7oIte3f6NuI0WjESWx4IAEbaP5cAbCXVbOrkHLq0%2Fsn8Epvo1J6Tm%2FZ5cifMujt8q0ehbLxyRRsrr6Wu87Sew%2B5dC1BBxqmaglCg2Os1A7CT353lpqbMdLGuWzEBXYWIGXnhBXmb2NCHVLrDPrl1xSCTGLq3NN2e0v48NyX7GZ2AtVu1fVU3jYPBISGZgyQw5fj2wAY6pgFtTzPjuYZ9wq6L4ZM9y5ysjXRy3IK1G2w%2FR9O%2FBKG3tnZhVYjMKPHx9mgJJgCJaf42aQOxnRhe62SekaRxH6nvZJT3p0i7YsJAFFxbGMUQTVYG7JC14XBbiTKOIfuYA6zo6txp0lyAKSSWe0nmarQ3rBGgbyxnxgUoml0IMAkL6l%2FPqnKMSeD22mrCNb2nvTWOex0k67nUR4QCIXcsa0%2BtCQju96Ay&X-Amz-Signature=bcc84f65d16cd63e50cf6448c11063ac1036d5dbc7f71f4f3dd66319286a6aca&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
