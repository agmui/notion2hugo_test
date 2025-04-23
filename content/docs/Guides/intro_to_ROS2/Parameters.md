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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AHGVEU5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQD0Dn5ur%2BV4sP91SroIW2CJHfILMtSp2RqFAFNQSGYX3gIhAKUtHGqV8uBlnnOE4gZet0iS6pJKaWTCa4YsQKjyjWwKKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwPeEaKsfjmZKd4nv8q3ANhHkHLiL8pV5PCw92ypjqa%2B0UpAuNwla7N92arr6ZgxxrDfQ%2BpQUxbWncdXslV0nVdHGbuYJ%2FgsUPUtmIxCKTfAGbwRl%2BZoVFaBUgEgnzqu79Kq4NRpRFKYRxrDc2kYcyfu2OnAfueqUcCUQLj%2FkKS3xZUwRDnn2%2BqzPtNg3QbROPZsIycXZUf3IBmEwqeSqyNbiPgFFMcbg%2Bb1PUTi4Jlq7ohsPskQ9yu4%2FF7qeqDvg7wpwwXnfxRBVQjPT5O2LXcefvdatX4K3CJQ9ef7YoGGjF89RPMFzfYrHRMFnQyCwGQvR2PVlLJIycl00sye0mtraxFxKHwOh1DDsfytnU6%2Fu97in5OX3UFe%2BmFGFN1jqtfIBC%2BlBO61mHjp%2BzAbMJiQtuVVyxKr%2FqiRjcdi9ap7R2KPNEo7Umx31J2ZV9L4%2F107FFXJ%2FlSBdfeoxevZQGkhsxPEAN3C74YGigOhu4HkgeF%2B8jaPietuXe0LUU2AuJA9z6isHnGISbvxq3d16RtZSw7%2FrWxbnv5CsDyGJOS%2Be8J9ZfeJeLbRMfYNklowbzvbzXhYNIymtAL1dLiMymbpf1w5HEUBUPbTjRIMDj0mjYtxO4716f7768egHRmpelDMvEZ9d5Lt3UzgTCaq6HABjqkAXoYgwaI8VU5BZIIEj2bp5nJvJY8BEWb%2Fonj19Fbs2HLj0h4gZxXwdt%2B2LIEPufm55L7vryE%2BOIMnXbC2NLLlxzP3WRbQPQ1ZcDZKXZ7XqOlpWM%2F%2FwWIV5Gkv7trGLHwLqKkbpTfMORAuWyr6jX%2BzCd%2BjlecwInel%2BkWbqPhoHSyySG6ki293I%2B0vHJJ2%2B9tUmGL76nGyaex3HoVCKSLvx0qOHOi&X-Amz-Signature=0b77bd971ed827eb1dac94f4a5dacba369b29b9cbf517301302353a22447aec4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
