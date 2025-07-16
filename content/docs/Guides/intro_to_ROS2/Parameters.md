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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2V7LWHG%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T004502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQD4Z4ZIDcEKL8kNs%2FZXlo27MS%2FNJbk15Yz5sYmmCh4uNQIhAM5%2BDlcCRsX0d3QQqr4M17xJbVKVmoN2PThRkCLULEZQKv8DCFEQABoMNjM3NDIzMTgzODA1Igzx9RleDgUipRcD%2FM4q3AOUGrfp8kqFYlm5Zkh2M75FpdQ6b3DY0IdAjePRxEHhYj8nBLXaj9a%2BId766bcgZ2relfRXThp9UYW9ksGf4PNWl01r9xlFgvr3jwh0q0HOgbVREZbuZVsTuKlpvrSSOz6gRcygiuKFX%2FgGpvWyQhqlls4gv8U1%2FRS1nOBnV5sF43LAxnCDEYaFYsmWyYpAMtwyJ5uYgB8xA4TgQB6ZSan8K7RZVqPeCGMCHsdb7SlMR6%2BfF4W7EeUHPt4BnvVEX0DKDomyepegVTLt4IhSuH%2BstoR9uMud89OGC%2BcNHlwAkQBl579%2FRHqoSPGNymMA5lTxzSsdFgRvjziAwS%2BEfVOLtFQdTQqUQ5oXuhyJd9ZXfVEKZA%2BbjyPbxJrHnfLLQRxYXi0mzB4zLKgD69Tej17FjxfYiEvXFpGMdWVPayrCzCIuw7MtCeayQ0%2BQ0gV98Yh7XYDembpbL9NMDjKcXQAhfjjMOpC1q%2FMs1IMg4CFnaXYE1h7%2B6e9VxsmzAUMfPUl%2FTCs%2BVyE9G8wZYZxdyfM5nWX2IgRmUJiKO1JjlzkTKsKa7AinOyFQHsvjCjd0nxhUQc0nbdgV5uRwsv3g6uwzeyfLHCx6aapQh5NQklUUMzD%2B%2FPPWCFu1ZM2%2BMzCv0NvDBjqkAWEnpDxT2XJKCbGzG1ckihwqbH4MhwcW2ty8gbT48EtYy7oBSTZcrw3YGlaDbfNH5jZk2AWyba0S4q0IsbG6%2FEbMMnOPHoDb%2Fiol1%2B9RM9pWKWZljZW3HFuIAuZXXKeB%2FtqTjz9sNY4Es7%2BHLwOGl8tGZ0QbS26CeV29902voTaTQUEpkT7QuMhDo5f4jqjyDa9aV2XC7IRgFm9%2FM8L%2FG%2Bsaao6E&X-Amz-Signature=f3f1aab552e7843fc3aea8620871b657807edf6883fa354f0f1acf028939af8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
