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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6JPOZCA%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T090848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJGMEQCICVoe4T1XxnyNp384xXlAnjUeW2DgWXF8jt3YL8EmTglAiAEvUB9X54ZPUBS7oG2WQJFJSzcdw7xJ0HalQk4x5ffxCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMZgBqCCF3D8VgM5lQKtwDO1jYIMoU4vyZHm7U4haLzYE73l4szaPEt50VnyputHSsjbqaNFZQMAiMpgkBAzRkj3LMuK0pvFpKUhv%2F%2BYlpKWzLIqHyUwkQR0NMrIHHJ6TCDH%2FdeKn1o7I3BPSVdYEzDILkbPw2ynscVq5C09XgxBTB%2Byh9%2F88ReAjAWgwo2zz%2FJ%2BibxOwjRaLQEVKDFWGKLITGHTME%2B2RdXG6iAXARUm9igJDwdTfmXnEendHhGAFEpWGjso%2FsBpuEfrXgJX4wjHc%2Fm7Za5Af%2B%2BKEokduxVxfTzJw6n54T0cf1nJlfN%2F1y1qYYYnBLFoxnubuKdf1bfjX9T4AUdQAVLNuoUYN6kZvh8aWkVUtbE3owzc%2FllypT9RpV5zp7s2UpIx%2Fxt7upDJnE%2B66iqvkPqmpY8WdK0Pg5ek%2BKQnEij9ou2WhySTR78AnPbxoSqnmtHGIOZRfMoVTdep64HjDlxghgAHmxXLSoVha1tTfKUoQ2pyLyGCr%2BBh1sUBQ3%2Bn5WitccZ3YlD1GAm1GgB2aYpGvhrMhc0d5B4Za%2B6bIvBUDNPyT%2FoBEv1MJJGtWFLNm2B3pv2bOJwlRmOMCwo91d6%2Bknj6Sij3rilcvxXJ%2F8saWGHXaAlxA28bp84bW6Z%2B6kY1Mw6oLqvgY6pgEULU%2BGBRu%2BYupVIdb5hl7fdKpOYWErHcTmDzsw1kTEU0X3dcw4TfcmFc%2F3n0ZgP0bSBmXPuqo9RfZVoBS%2B5ym3%2FpIwBAF9buTr%2FrFJmoXf0ntrkfnWeEKqeIp8wqnSwFDzIf1APcdpTdu8F0SbSBy8JYhVC15GrLBQn70INMWNTegUkORXYzP8n3UnjV9IcnLyXNGB2tyivK0FVbXI8czy%2BuwyfffM&X-Amz-Signature=0804bf79e18a86579e08b7e4d72d0a06bc668c11a80d94a5ef0386bc46f0a00f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
