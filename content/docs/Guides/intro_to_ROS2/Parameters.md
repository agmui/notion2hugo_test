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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCNLODLW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGz4eUljzcaUn8jZUcnv3%2FYsCcXsYe92fKHsecG2H19aAiEA6UV36eaE6mGKVreofeAQk22wjX4hUhHoqLsTYjFEbC0q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCU9R6EVRUVLNyQoMCrcA%2FNmkUvygsfeuIup98B%2FFu8kd4LiHNt%2BTuYM47by%2BaeTFLi%2FQLR28vUl46y20VO43cXDuWxD6dAIX8fO0xq%2Bqv2n9b0yFcqgAQ1GLsZAR%2F%2Bpy1Bu5eoemTUWdgrVr1hcg6%2FI6Phu9aYxGUz0XSayu8r5VqI%2BpKPT5RUn3cUAm9BpoRMK7mLZaP6ouOq7tyTQVbBXrERywgHi7rLVT7hoSEwd%2BHlM8wg%2BfBAaaH8LlO2IOYCGLoP29LD9ZhxHt%2Fo4biEM%2Fk%2FB8Yc0ilOKAYPHSDREpxiWtkHIOc04J%2FpnA4tiAIYAhiW6%2FKLb%2FRqV0F6X84xlOO%2B9MzXPG%2BwifWm%2F3hGAdQO4fyOkarU2dCphj48%2BSlmiZeb7ZfYmxK%2Fdv8dvQyuDu1SC8fsY1CcQE9UYwsvq%2FUjFXmfoOCWz%2BMQogj9YXgVP0TvYYl9HkDUv1iV%2FXG%2BQX%2B17F8KXQOtjAR%2FgYYNEIcDE5RBWSVpGnHcKThnzUHF%2B7X%2BLHYQg5IEfZ%2FxDoO9BIBa%2FzLCjGjR4bsBGo9M0nhW9PkH5cla18KtWkrTJ5bPNczpXNRftvi0z4uDtjdCPJxYWiet%2BI5jWLwa2m5o0EHWB7yEsoEZercVKLD6z7CdUd8MRoDONKywVMOOq4L4GOqUBMxTyGHuHIRpfdmfHjspP8vzOchWcz2PgLipbrFHioKjBdCybvt43bgx1YRUs9p1fL6heuH81Eo2RpbR3%2B4Sqir62id910xUySoZpJB1gTtdO5UpSzBQCvNe1DlLfLFg6jg2yoO9sOwnzbQcU5yc6a%2F4AsURZKnhxyspxmUOvay7DsfJmbCrwLNVXG6SX8GPuJOKzBUNOTmeQzwj5P5epVj3UTjPN&X-Amz-Signature=c4dc3941ba47d622fabe011de7d2f66192ee73bcd1cf9596b690c29111b15a63&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
