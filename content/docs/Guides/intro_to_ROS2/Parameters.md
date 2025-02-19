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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RFMREXB7%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T050810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDV3mq7AXFxbxMMBbnRot2qwZlXODqjEwQiw1gF4SxySQIhALdHxhGR8l6jXvxYbj51dAiDI7LnHoF3A3rAUHNGclJnKogECJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz2w7yY1Ubjn8DlL0wq3AMsXhKqDqijhPNx18qlt0sdTp4E2d3cL4c8PDiUx8xVFRUg2OUevwgUYaeZNVANhCMuzDYLmuCuk85WYXI21k7UrXbFs6JNOrVO9PQRMBNx%2F5d2eEwN4y%2BF49wb0wiOyprHJHLro8pkFuPRDMmU8pcij1%2Fyn6FOQQ35ByhH3%2FrrxKiY9gO3m7qfp2zX37EptUjOtE%2F%2BugnFGyQO16WdzZ0WB2O2uNzNCA4DVVjGNngYyXUi57kDTLVl5W4IrgVYVa%2FzsCotusdqo7B8b5ncQniS%2FP%2Fj4ZT165KV%2FaNmUsYGrxCXm3SQwxTcSPPtZElS4gOVDekRzMKUiBl%2BYIhForny3erIrYc33pvL4oKgCaoQXkBNuEvsqsgI8RSZs07MRFVL%2BOYvlQ0jEs347U9aeNngJ5k52P2rgzkMK9pZWUoA47bldmPBnEf75e%2BzlpwMTgnnCGRNHwHfjflXFzudHaPi09gYRc3BR5yOn6boEvWpV1dlPNUW7U7WjMaoLv6Z6ftZd9i%2BxLHabXAVAm%2FwqrnmTF5OB0pEC55pZivGPYqcwBA3yTk2rDyMIzP6rMhaG60luy%2BAexHcXUP1zHLOfO%2FYTh7QiM7payT%2BuKuuHMZ26BW5%2BsRl28x0MEogLTCdxdW9BjqkAb7BT9Zt6r2Od7vgsI4yraIO3QiXC7A7xxsjfgLrf6Dq1%2F8SuyuAmJjslLeXl%2F74dJq6CZP1P0ECVX16wVUjkKbhFw6W6hxWidDidYO%2BDEeegZnCCfaNelp%2FKejklLBb787XaFtRQLP26YpfoLKqt%2FEipQtNNu0UJZS5utos%2FBv%2BV8iz2VuzEkwcZFoJLqLfgYt%2FN8fhtxw7oZNyoqTykkL5WQO%2F&X-Amz-Signature=d8af2564d9ebd8703c1efaeb560923cf923af55e33df4c82f8d6d4d65f9c22c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
