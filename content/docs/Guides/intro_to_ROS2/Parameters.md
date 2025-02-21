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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466677FP3HY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T061127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9Hr5Vb9qFr6pgdcagF5ccmkySHjoXEFQGqYsJE9%2B6WQIhAL775lVruv7aakLXiia9gqkz8rUf59svqLD3Isb4%2F6WYKogECM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQ8f5YrJUxfnHGygMq3AOzAQPxEPTKsKvFO0liAsInYsoMh7i7qSETpr8dzyW8K3Po04uyOf7eTt0VyLqO221eloPwK%2Bo8aBhCfvMFrb8uSlwTbZG5fkeJb7mII0DRMCyIrJOT5JWq%2FSqsoQ5jzBpi2yG6GKfzQjXi%2FV%2FE%2F2Vu5O%2FdqQtGDLCtVr8MXEmNb4XOOVlSxIQt6E%2BHeEWNDFjA%2F5cSfweqJ9vPnVy5KJoGGCCzO2%2FuUCm4SsK1bLBHMwQeVE1JgTUTap3b7d%2FcdNJGlct1hCnn9%2FP6zs29djsDio8%2FcZ9AJUXVqGDp6x4Pfgz7hOOgnjprEuI8Hw1cSmryJQ1sI3SsN%2F9ab%2FUOxlNtGaRgbKayBQs7zHGF2z6rc6ARyQxTLRnhpr%2FiTrMmGKnHSzjlZfJsXzV%2BCjN8DLvAXEFVeD4J4YvdYN8TogaqgH5oZHn1BgWi3aigYzRDcMrdE2KIAhb2%2Fe0julFD%2B%2F3Ca%2BZ3PaBpe48iQIrKBF3w9QHM6PLF6B5toJ7MUJpcqGX43JRR1Bpr2Za5b5kUFekE5sgljeDBfwmJWzfs%2FLbWwoO2yJh%2Bvu7AXt%2F8Xe7hTToCsyGyUuASZySr1%2F1ez3iDXvn34p9nJzgIRynEGXeAru0LpXMpe6EbpS28mjCao%2BC9BjqkAU7Pg%2BqXzmBqZFoLknIAc8y9NClk%2BSBDiNcncoqbEWhj%2BJ%2F9pgzMJhkNX5ImCkr08SwriVLnRcCNn7KKAkhTEP5oQ18yHKhKBEhSb4aQPTOQzRHyAgCSOotdG0kLgRbjW1gzJl6efsp4ZE2N7d0DKaGOQoVUP1gGeUaQdu8IxYdK0JjcbDYSP%2FiQt96AAVLw3homuwwaxZOI046Gv4kC4PKgGaUi&X-Amz-Signature=2be81453c04e5f7a86515043fe6f5941cd7d1319a58641c9d692685c8ea020bd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
