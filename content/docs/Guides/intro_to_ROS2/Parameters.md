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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGSKOQDS%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T070927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIHXrnmj1PNNmBfWgnnSluPiF1XiEWMegli9%2FJAwNm0CZAiEApn7sCJUQAt3t5RFywCSn3qN%2FefjbsxQhzjb64egbwC0qiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPSnfdxTf%2Bj7M%2FU59CrcA%2FUMC9HiHULaVqZJin0u2Htbn0XfX2MfM16wT5LGS2KBDG5zeXOHeFiUCilnFWV69odrBi%2BekI6Qc1lp3wD4Qoq5nDQurexoB615o6sUSgm9%2BgL0raB6S%2Bz%2Bb46p8uZ9dsifMLS%2FiyYHWAMJiyKlKeql7b29%2F9pzlGCX233LtencPM1Oofv%2BVElNCHTtc8%2FPRI%2BHp5%2BvOOAK7Ud%2FrtfQgoiImxvfQlcwUowFq1eTg424CiCiy5KNTYPBGcPtC%2B5%2BcomaQaELdFjFf7TFoAffLtpvONdQDUTxGC6vubN0gBFIoNiw9MeIYLE9AM96%2F5SEisxgIpKnmATG86Zy43qg%2BAulwQYSm4I6f5p3fHyndDf01urrfJbl0eXAQ95VmK7mTBsfWRuyvKPx7%2BreSB9H1t%2FKQu6v8hEfvRtPC6D7fi3xyew7tCtEv3cJvzHPBF7iDdkEjknS4N3LCKCiCeHLOYgAHH%2FDuCDfP82MCpNR5laEbzvjXR4liaDctvTCILZkQTKm1Qd5H94GG6lC9vPsLVU%2FB1mykGSXyi%2F5d%2B7sNMANqSraxDLj1t%2B4MPVkqTkUpsBimC%2B7Y2S7aaOy2%2FJhdHdB%2F%2BZiw6mxyVS5NynH2KlGfYXSTWXqWXxwdDOEMJGWrr8GOqUBy2CtIhSRKHkhhfr9xcoDGc3JoV1N1M1q81Pfwg0fExTuRCMNQE9dToYshZTDMEvPg%2Fd2N4Cqa7zcBrZDu8WmaupOCZmz5gx0jKhC4UfZRH32bBhWReJcZF3tfvQs%2BNpTJSoE10s%2FQbvQ9vrC7UpDRx1qtCWjUcs9Es3PP5V3YcvzgO8E1e2A4%2FwPkCyJ0yfTN4ymE8OeQLvlv4IShlMdur%2BVnAku&X-Amz-Signature=e2d99c43b3ef67b578a0a1f860da412ea3210f83687dcd30e3031a190e6814ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
