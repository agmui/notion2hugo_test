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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL652BGL%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T140722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDWUPDa6jkwpch79pyFM494l9oI2oVhcVsquaQX5xQWNwIgTN1KwdhJx6BtdqXwGT1SRspLzvtg3CUDFgnU8bFkd6AqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCGOqcy0dLq3OM8yUCrcA6hOdH9N30yZ0%2FHfHp89HNNx49lQBfQwCKGMoqnkEmsICOVIGGnZNYlDnl7j7KpBBsOx4L3f3rZm3FurOoYPJVdcfvAN0DwMX%2FVeppyMAB5rWM4qcqEr4BtjQ1HcgGWNavAipbU5KYqCykPI6ElhV55fyOeE3Pw8e0e40OQBe1%2Ft5CqAXzb9uML0xmP2N1rVongj5U4WOlS1om7aH%2Btr9C9OFDxdcOk42n8fxL8fNMh84MdikEGuWXP7dBZVt5MKdZ%2FmhVGbr92NPPD%2Fjq4zTBgfcxAFxrbe0Wj%2BoNupu25KRUMejm3pB4F6F%2BZX7EMCVTjzYhurDG71rOlmiqpKNL9RL5wE7mK3hKSrLAfNRsi222oS6nxCkKmubBrkIo4kOnd2MZ411DAef%2Bdxtkis0BIANFwTL5ejPf%2FhirkKMeruDQlL2i3fogI95CbenD0vgavn0Qt2v80%2FBjzzOFrGJtWHVw1Wzrg4VvePToqj8K%2Bs8dF3wyLE3yo%2FBBwCR68E%2Bf%2FRS%2Fz%2BaKAm8WH%2BqT3WxpAzAEcSswqUHH6MLNTSnKBeJL%2Bbml1XSAx%2FwbOXFpGi%2Fo0ywg1Cp55t2OT0cGWODak%2BJ0nZ4vqpEuKN9u0oZV0k2%2BM1pwIfrL3UB%2FQnMLSu87wGOqUBQxC3KYIZYMWysLg0PntfPr6mfhjmsyK7Uuuw%2BvO%2BRF3nmY9cZaglj%2Bb36UyWncjPHLWNN48V5ygHDGlIs8Uujv6MgeUeov3qYiuEsUZ9uzsgV2NzeXRLwfh01VxhDF9C5Ek%2BaqvpwgD3cI956ptuevvwprhy1aoEDOpL4LKbXDpI1ee4s8KO4SM2zABTtAqPUjtP5IGpSFmFnEZ72eTVFup2a5XZ&X-Amz-Signature=bbeadf73d015ca9a95b190803026a50f799ca54ac379c9514480a5d1460a1352&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
