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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGTWWAQV%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T031640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIAEl0LkHghQPcGv6r7I40xkJ6ZK4IQMcJswzeOGjGyDaAiBkGFZDfIBNykgx275fok9IXqHvXIcKlFP%2F4I7kz%2FR3Zyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMVJWTtGyjxdWz7uXDKtwD%2FQ0v7NyXm2rVAHqVA7c0DL5RkyORswifKmBnFyn9UIMUX8bY5GWQI3ICZj46dSmJD37tCUuwg8ILC0zqKlUoTJOCgv1A9YLe4Hn5n3zh3zwkip%2BK5rkkLg0sj%2FcCKqi%2BWSF5zJc5ZKS05LmisjeLAsUQvakwxUVeluYXyclXORB%2Fohdv3NLg0AiICPh1cBdzCEBR5W7zHeR2FcrUX9SqjkDgW%2FQdHUA55pMm9SewTL0h4swfTnKIOB39PwOUr1NrgzSZ%2Bd1LM2EaxoGKs%2Fm7jOI5QxCWbOwu7QKOuzkt2k6vj4eSAQDFXFti6Easc7KrmzaFaAoriizLGKJXNNfeFQiugevFF9On3Ptj6FWLN%2B6qNPEWivOYbVoiWAgCkaHIVYg1dNdSuEPaqsG%2FhkMNmzkFXj09JUX%2Bq0Az44tWM%2FEsDtoD4hUlec62TuhgS1ifPz4wx5ZQighv%2BV6h6c5ajnfDIjXBSmR2HX1n3RMjvjwiGI%2BGysIPXVD5l1OOLrThA1jtHXp76A1GUBFL6C%2B3ycC6Y3I2uwxxiPPHGVSLfdvaYtzTtVmSKN%2F9twACzT83GTlwCUvwOshQ%2BbxTOamjLVtz24p3BZiodeHk%2B1HPWQOoE0ml8%2FxysjZIMB0w34L0vQY6pgF0qxV4Zh7xhsSirB7jDBaW1urckI3D3%2FeIeey2th7CNhKTjzWAtYTQvWQWkRx11cG5hQaSDw5wW%2B7gGfx7KaZKOP6LKcqYLT%2FyvVcR8cLVLwJzD2j4gsc3AvQPSk9b8KmVjBBWBaP8%2BA2OWSKrsFjschuVhv18v0p6xA8n0ev0AXIR67oOsN%2BJB1m1tSs0A381qSurkN8WSZIxXSw%2Bh%2FA5l85bAH9e&X-Amz-Signature=f904dc3739764ddce9a022330167f7c63ac3a133b8a6434c8296d21c20c88398&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
