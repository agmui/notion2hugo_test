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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZUGFS7R%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T090803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIECH6u269nn4pWy6cCOx3i4GXet%2BH%2Bdg%2BULR0nSzHjsxAiBVcY5V6qv52lIAUsv7O54XqOarHnVF%2FODSjeeIyChAQiqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FQIIaZmVK1ZMolnsKtwDx1za8HjzXj9ypPXeSM5TPPoCuU5hkyFHcQcqLR5zrOTzCbNyFZzs%2BHXCE4k58niEfwY5xODp%2FHE1A0bn%2FTEGBiJxBW%2FSHCLUDKbbeCS%2BWjrbDZL74Rn62rCa0fkknVq%2FGMueG4dWA%2Bcikj4XId6XubABuhivBVQ649E6pwt7CmkUqnxgiP6FSAmlB%2Fu9ofyYaHRppUWUku6%2B5wEj%2BtKCrssR6WbSdNcWjSxltl4EHEVyxbMXgYC7%2BaLlDdBfSG3W0v66%2BaJJhvmXlhj9fv5fvZNn5DwYM6CVihaLwMmzQFY0%2BTyb5ty0%2FzmU50fRVoEVSRjqMn1LK9mDCvg1Mt2OU0okSphq5GLUOEQkm3%2FF1jdk4iZpyyMGLVLIvjPtIyxGtK0ofJ3tIPYsKMzl5JFm0u8pviXSy00Tl9zGJJSGUCr6uFJpaiuYyAxPfLEodmBXF%2BsPo1ZF0K5ifhvWysN%2BKiTPpH7CGGDCcyRbKtWOsO8lDUj6DTYnMTQmELIypNoBZ%2Fcr%2FVdNVPtcK%2B6zGkmOhYOn6xRdYLj1gOn4zdqof%2BlbBuVhrxvOobUyG57G4SSTAeCO1SX8CbVhaX7AgxwNW%2B6%2FtkTl0CfETKepCYuo16KGaJmxJOKLz76mngQws%2BDtvwY6pgHCgYLnYsLxUxHSYaP3ls7hT0j87r1fqo8%2FQ6%2FOpvvIIvVUcpKvMSRR6iet%2Bg9b5M%2BXLOwcZI%2Bt5oT8Zhu%2FWPA6ZdQ6cvaUqHOLaFcmDnEn%2BDYngHcDyKegepWU1ZWPs2dUoHh8L8%2FlbQQrzr64%2BCZ%2BqkWpWbKH0EoA7lNU%2FQ1ArgcjguHlZ5Qk0hNcafkhuimaaIRMaEMoehQ%2Fp1bUCNpzehXOBGl%2F&X-Amz-Signature=855af1b08ffe045cbc21436241b91e76c3c04309303ad27b33b8b9fd792e8124&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
