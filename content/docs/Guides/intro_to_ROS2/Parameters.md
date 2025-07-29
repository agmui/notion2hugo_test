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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWAS6HGS%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T210905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGG23inVoNpQ%2F1UiQ4kq9AFZ0oFe8R0JY668guPIGPAAIhAKwasg6Xa4al0vQiZeIBuE77Zz0mSznesfOnjWiSZr4iKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyzd5Xv3l%2Ft3dmTAukq3APTm8LEmBslEQCstCxis4RjwwSVgFK151J9g8ooVu6557taMgmHmNYXfMCXuU%2BtrySRhUidtxp3fzNlPost3MWQ7QRqZM%2FMxSWOEqUKYiGgB79kGmdxhmfs5Fqr7M21uKLbaqAZt7fh9LFcImIalXj%2FO7gDDYEGJH3o3dbGye%2Bp%2FlIWjzNahLo2LDaoVyZ3lpMPYLX4aNMGrRhqb4T0M9shJkLzS5jm8wL%2BiVsbGA0%2FqkuLWKU38MUD0zyBEt18np05Rh0VWXZW10h3h%2FWOy1bJtjJBoOha%2FEwz%2Bt5RQ2GSYc%2F2W%2BGEBcppvMHk5w4MgxSrZX5tFGqk%2FbBD871HGTS%2BTVAOzRNvqcIIW%2BnQC3ILAjlCxnLbf8quD4aVg9ozgKC0DDpH7mviZF4D0rdkPghwQgrl0dIn7GXXX9o%2BoSvdq54eDdNQxnPjI7p8uPH2NtIjkczhU7oEO1mWrQIhQNhyWKwRMi0evN1YHJqENtLOU7TOrZjAiEl7UN6lNCrFng7TRKKCYT8oJvuWGDiW8%2BH%2FuEFg%2FHSIt7PgRZEx6P00gZuZFl8bRheRg3DypF4O8K4FhMucNebjQbCdD2iYY9iEOViMVCiAds49XxiRfcwqZQIk0kP3fmmoJxnBHTC%2F3aTEBjqkAZcOjiiIyv59Q3rZcKbiAKe9%2FeRxbspw2dYPiUcpf6yfay%2FuaSlqvhHZ2k9OFwJIi5XFqH0CnZNjimGWDq3cyvvhvJZxqj8kXwmjEgyLM0rtFGSsyBAc0vBjMTs8eActQJL6bpMHKrV0IZ7lV5HL6WWGmhZzdnpLsW8akM0dKuygvjBrAgn1N7RxR6%2ByM07OTC0c8IFeN5CitRdJP0WQMhAwNfyk&X-Amz-Signature=3c5fc18c0ae24025f436a2b760e1826ddbf4f6c8cd3d25eac49b0400ca71bbdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
