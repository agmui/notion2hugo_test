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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T76LG2UD%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T170428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQDgOKrO6l%2B8BdRtBxSnQKmNJ9w4l94ydyP2OVDcxIq7DwIgZdeZVKXa7cZdb%2Fm%2BaAijykPXLrZaRE2V5XlTet1qSuQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPOwmq5xQxTYqCiBwSrcA3Jv%2BklmIYcOxhMtBASDb8nyDeMXdoYeO8IbNTzazzi8S%2BI1Fr%2B7dAiV6qXlDfLlZCdKR4wu4bBmyqEN7thuRbFIWHCoWmmd6ZiPLCoKcQu8qvi6N%2F5dzsz%2BpMXHQCxwT1zvnB8hGtXYNQdoM4PqAtRkfPVdLullJKVgVmehR28FLWPfrq90MblgA9VvD5n2uy7%2Fb4kS48MJZevxPdtEDnEqqYHFq9%2FxxXoXlaKs1zugTR6OMO4ZNQ3R7NxgeuiQ0zefmdIJvFBN0J6m2qJoe24oz4EWWTsiPONBx6FfcfXns21%2FNTXw0flFwH6Q3q%2FxDUmwt8v7%2F1634Frw6rmw%2BBbRexqGaXDCEhLz7M%2Fon1SaIo1gBe50WTpITjFMbwqgkQhQ%2Bn4tQzNq4Q2K2TK8wWfkUtYbG%2FkvHzD7SLkQVMvn7AOn8c2v0PuAaTdYrYXEEusp%2BDwPlKojhPScy%2Bw5hQD60%2FRaFz62Gz9Ob%2FvqydN4k5VSrQV29S3ohUKWzCbCkfg7LgtWDEP2qWctigkc%2BAyc96W4xmhF2Oj4VQbIO72fsGP2usZNNxL4wvC4OC8Sya28ZJULKMZfLIuZjtulJCDENKLhn5W8XLEESl94TRpUpGBC6%2BJ3iuppWilkMPKgjr0GOqUBLIZeMTgB888LaixzwHaK9YeHU9QIu%2FjCOn3D6FqzQqyL8Am9iZPQaiiZ3phEZ9Aa7zp%2BueE1pAcfv2EGk%2F%2BPvMb5%2BhI%2FsTavFEPXdmmmWkd7QPkL8houmdgf0KBSZuMI%2BS5LE74M8nx1Z11bEeSWGwI9xHtjI5EbVudXR%2B9oPkwD7velVOx2fj9W5Q6d3kWYnw7UYUW%2Fff52mlCz51RDhOKqeTBs&X-Amz-Signature=dde687f3d5f2a4a5049971aa3ab7ed4826c2e31f3aff16c06dd2a1c8b5f32621&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
