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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIU46DB%2F20251027%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251027T014314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpsLpOblgEaQtfFZjPaH%2BMrYpHGhlH2j1B9HEzkLj0CQIgJfWIkfkRa1VcXQS7yWBD07Ax8RU6ak8iojQZQ23yATUqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAr7PbB%2FoZPnkmbeBCrcA9C7AsF4VXKN97jYeXQSFVsFGVXGTfuYkwbW1ymK4YW4bF8s%2B9qSCvshWFqbKTBm50jx%2BLcDfBgkSJY7ggiEo8xAax%2FaBdxa%2FKb7913VknwpxDm7l%2FpAbU60BcsO%2FNB1OFcWSEeiSqGUlb4rx2O5zPr8oXOF292MVYM5mPJpYoFDMqSigN0mJ0b8K5DE3TcDGHw9zP3sM7TCL5vzcgS0THFWsQpTzjR1YdGWqd344SbKS4td4aFx4Z6m7LkRIrvBO2XToZAJTezl7czbjFMytMIxPW0H2hgjKNSwmHAxJdB%2FAoZ0hUQ9W%2FBfWfKZEj2QeEtvx9rnYnJuXIgJTq7Hoj5rNTS983TgM%2FMuFZgBRDrCDR4Dhik635E098KASs40tpD1BoGfsiJvOyziLDxsi56BldANhsiy7cmUf%2Fjw%2BWT197ACaPJ2G57avf%2FiUpDOx4EmqA8orOFcyTQAgOTY6%2FQ0Xk78YngkPbVSxXavVt9x3BsN6hQ3KjjOgPfhYjrbwi04fHSNG2Iydqwoa2%2B6eqxbQQv0fvUlznI1gP6AY2B5zZT8IigYPkRVD%2FluqBqDe0FJbncDdZwgDtRNKFZUxLkoomKbTy5UttkOMc%2Bw3UaIM9Gst5q86rhHjW%2FmMI%2BP%2B8cGOqUBgFttVFLjNtYy5DuQa%2F3q70YDTbXRYrTZBbZGN1ZOEXrQdk%2FHRjWh5i%2BDkm856c0QfXmRIEea1%2Fh5uql%2F0GRSSolFtH0GHXnc96FiwU5v5%2BKfRWKZCWcshNjemuSp0Gisn1Sfplj3ctKnLUvgFeNhxP2ryzBlreClxO2Q1Uec90XOFZy9tQc5wB%2BXRBT1zvuabwQw0bsOoPQ%2FfYZ10in0ontdg1Ru&X-Amz-Signature=70eaab589e5db446438cf55f62863efa7c2aac8aae3e5fc25fb0e5a99643a45f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
