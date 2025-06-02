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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKMW7XQD%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T151000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQC3lwXajmGwzD9t%2FqtMkAiS6xKxFmP%2FNZX5sIPJL1SKRgIgHe79kFGWkf7h7461Uv%2F0s0LQwXTizCZ4rPthQ3WeKSQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOl8Sp5XZbVebZDgKyrcA73zaRLjW2w1QoyvNYBxJ5fxzTSYu6WPXgIN763i%2BbhhDiOYH0LEIhaQMREQPXG6rFFbAoBwyZQZDCmA0WiRuUVj%2BvOlf%2BuPWQb3TlPZEL4iP71yQ8IG0AWgoCFRc6omr%2FpzNZG8jAMUV2GDTRBgP1G4KpK%2BiEZJgGILg7SzsWYHCgltvwPTUhOe9nhqmpfcWjH82ATYlH%2BQywKwu4KW48HdV84yTXL8k7osPerw19xFkV6WFaGQ4gF9KvZnXjlDqY788slg%2BZ3CjH%2Be9RwBa19Jl%2BpdBZLuxOWdgvEzCu8t6eXxdQHPEP6ZIQBWc8TvjOy%2BgATxvCxYZru%2B%2FxjeE6dPDeVhlbnQv3cHUQk2nUeylJ%2FboUAMzQGmhyA5cmfW2hnU3Pr3M5%2FZSVU03NmkEh2htdjEqHt6%2Bg7R%2BTGoQL60BCxrD00pTX0ZLyi0V34t6HV533HIEHFJ%2FFFdEDdCAYZoHt%2Fb3gnsCQQ35tD7RCxT1XeTibci%2BipFWKfXkeW%2BOOv4Ve7MI2141WiUnGsNu43wA2itl7yTYJR8unkxiW1%2Ba5qBXo%2FSNWbF63rYY6svLMMgC%2B3DCvD6MWQF6Y7%2By3gywQ4TYCKjwMchy22RFvd1J3EXM4Y8YV2%2B9%2BiYMI219sEGOqUB05ej1XLLwYwA3XBRMil6RT%2BC0JOp9gDRdwTN9c%2BqAa2I39WuLAA5wXBlPjVxjFLm8XBkkGXP4R%2FGqzbFz%2BiYvTKorXM7gocGzfLpjTi7T5Hxd72teIG%2F%2Fy9Kd48FqUMtUkpMZwQXhP5dXpLL2y8jnm1woXgfoK%2Fw5SZKatL1adnoKwXZZd2dllmvwe1gBUI0CoRlCtS%2Fjw9C1nyhHD4OxeaDztja&X-Amz-Signature=cc4505679a6918102ca8ed8579572e3ce397d4b81d6d570e243dd5843881dc83&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
