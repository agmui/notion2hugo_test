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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEJU7HKU%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T005205Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIGnAEHhniEBbNsP8B7RLibbDVo5oMfjmf2GVBstkpNCGAiA60%2FOBv15WXLQyQ3Y7%2FIkyqb6Nih2VL7EVy9AzjQX19Cr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMyWNWPDKwCThZPCkHKtwD2%2Biub0U%2FRjkjs%2FEYgvIEvmhsYTGUFzzW7aqPc%2FcHDpAkv38ggMK2%2FZYgCC%2FOWYLmSZ%2FmWZKGV6MzGu99h4NdUK7f5B7OJU4YSMdg4X08LmRPGSKjg4uq8e15XCDHcJ8kE%2FYjnJjV8cWstnOVwlIz5LOBtoAcQW7OhuRRWw8b7xSmS69qw6QaUYp1dwPz1SDvDBklFRTiEwB4YzHizkjnKws9%2FbvbYOLAwgHZ%2BaPxmY4Q9kAdcBOkegJAr6L4lcLwWqfBjkFlQBPrwhl0IxpOg8cLSVx9C5MapoJ8T%2BSD1osl2uM%2BW%2BBafDJyp8E%2F9wJNu60Pkf10hZZ9hld4v9Ym5dz%2BqPPddLpweet9qZdk49W9XvrAO4MaDlUlvRy%2Fce30h%2B1nO%2FHnu8cOxh3M%2Bn%2BRXYNRKdmDTa6l60jZ0%2FSrBjhKu5eRaVA8aX2Zot4TsWxAwF7lwb5K3M%2BKeJn%2BWhB1YshzZLU5t1mc4GMkzOutSb8cbPS5Hbz%2FrVRP2omQZsM2fRwCNASjmC3yG1G2kac3mA4tWrxmSaSaqy4CuWoDdqz3%2FpierNhlp0LMoBplmSEyPp20fVdQSbZb9J%2BRSPTJkv30M3Cd30xgJbpv7dW8G2jW%2BvgVTj5aeCHYzFUw4MKVxAY6pgGktttM0%2FENYdLlKgeWMU7zXRR1PnI%2B1tFT3fWnn9UT0%2BrWKNYs8y%2FUxnCXHsryfbQ464SXvxgcj3oOub2LuCZN0sT%2FtQJfGSX2p20v7yTaq6WLcu%2BSVwJ2gC7mHVm%2FiU89ysKK4rsReBLKt0PNPqGLq1BILtuy%2BqgTX%2BLOWuUAu87Rb37mWjZB0%2B5vGtNmR0H8ZImsn0o%2FJbntBK8iDgJCBmvqPzF7&X-Amz-Signature=a24f46f40b71a6d6d282df58fe00f303b043c13384c03966ff67edfa0b1083cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
