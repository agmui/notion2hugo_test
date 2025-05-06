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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOZ5YAZP%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T033239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BzTZYi4dhV%2FRnWXgx7Ic%2FtCdOVLRHYJJnvNnHG9xGJAIhAIK2dyCjUcxKPywjtay6iGQqfmd8eksfaLwtLNJf2SK1Kv8DCDwQABoMNjM3NDIzMTgzODA1Igx9DxfttLG3nEqpSaoq3APjMNbh6rv%2BVg1KVn8oQqnupiQoFkvSRbWBm%2BIakjP5AJSJ%2BV5cdfQ9wzdY5Gk1IaXgRW3Hw%2BCUTCQrAClLZp56cxhFHUCemDOFJBqaPRI2E%2FhJHAZSLnMZB%2B3wD%2BRR4aIy37lf671gjdBniX8ettQa54MAXbuKQUiScL04iFzorRqfctaZ6yhrYVt43lrVZvEFGpOotQGKC0kLDrXKCFhCr5kizaQWdCSy%2FU60nzgakVaWJ1tPEcZYAFjSRlRLM8jzmk4yxrNw3MV2dNkA7%2BvqctEODXL9yOX1CFCukvtV%2BR0IHZOTzf7s%2BolTKKurelgEF0W7%2FJfE%2Ff8UVMu7%2BXxVHO4ML16GjJKf017wfGTKN%2B4UsNbmfrjYpYobe6LQJIxcKSenkyNhSqucBHztPJ3YrznbpqGhB%2BFLZNYU%2Fj27XlJKgAENOHgm%2FcD%2BzOWgYJjK%2BsF3AI%2FX8o5Kxk8HuRd1YtZcksQwzScey89dm0TR0qDEFf0tzW8%2B2pbi4GPMDNbPMj5YCNboE2jYdmQ3SIgx%2F8nkIAMAK3yVJ2OVDgVryX%2Fc9RBPjj170H3Htf9NnrP4uIJ%2F2GjcshVQ1lHFcyCVucUrnduerSqbDv9P5lOxdWmlI0%2BdWOwCUa2msDCo%2FuXABjqkAUUa9jf%2B%2Bfv6FkmJ9opuxcRp04g5pThKW4qMibyWdfE7nT6a9tBSOMCGSb9vhumEL8nymw4Pw3ZKa6fmhEJx%2Foc5FMwk2omuT0fPkN0LnpH4pA%2FftHe%2BbhRe0GdWAHo%2FmNeI%2BQUgFJk2D5D1XB%2BJRTB%2BSe3%2ByFa%2BfQ5VulflCWM3TDb1VZonrkuatUr98X42la3UwueRBNM%2Fh%2Fparu%2FvlRfai3Rh&X-Amz-Signature=561934a687126e401564ea94d5adb9074b22b57eec3d3dee69ed436d4ad0fff0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
