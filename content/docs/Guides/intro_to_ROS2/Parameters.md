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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGXJEWYR%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T071012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJGMEQCIGOg8ls%2FJcL%2BPyMny6hC%2FkX4d9%2F4M6cobI3yZxIlTblUAiA%2FYVkI8dCUkmCAjVut3ZN06aOCuJL9fuzyyI5xOsz27Cr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMSUy0sxwnqsi0HNh0KtwD29fMG3X2nD0CzghAvtKb4FTBeEdwoGsK6t%2FZuxAS6z3yVCzv9r8qKfEoAQ6knQzQ%2FDWSHWfujCNbPzNwWarL6NghgYTLRK3aVZFTZnTzNnIe2%2BMTwCvXXNfIyxNa%2FDQCE8qiX11A1rexfgy7Bz%2Fw3urtbvK6Qgi3DVNH4ZltJkjVs1rUWONiohO%2ByaAP3ErvHAEC9G%2BMLq8ep34WOtsRSmCTSWXno7nZ0jgJOy%2BS8q6HOPmTt%2BxUQmJ0ypWLlnafVlINIgNokiX%2FjFa7sc4wrhD1QD%2BVch1iYCTbJJ3tksCKVYy637LmXYTrpmjnVCPDb0ibc%2Fm0iMy1haHoR9P5S7PLiFhJUFUg2D8UL448DihNl9lyLsyW6zi%2BFMefkImF3DA1n7IhGwZVKRQ9jsooDbgXsy1jE5fymW%2FV5DmFxgMdwWmkGpH64YtorUZ26iztkq1kfizGGiL8AHNWEA5xBkddJ%2BXiwEiOk6pBJ4XhG4vsgxfWxKOMuVctUFQvHwy0lmz4pnE9%2F08nE%2FFVuBxQl2O2EUSUYWMgNHEHtJK11Jwwwob6ZGVyMcKoNAOBz4Kc1QY4iDD3wk%2FzgNC%2FBCJaisBjoHcEX5HKb%2B7vvoMc%2BSM7Zz3mIQTGdi%2B4zpcw6rqWxAY6pgE2COyGGVzQBLsqAcUsq4LAedIljOmoSHB5D3LCLD%2BBmqcXCWTB8B36wCrzoln94FkjKRMeQBI%2BUU2TczaEYnz61CMU6rFuejjzmJRz%2FYHyWxAJreoiIWdEUVFc34PVnK8vtJb5WT7mXbA40glDDdTWiDa0nfCBK3YS1bmNaNcQ%2FXD4Ipgg7ZLLtzERxnjI8TsNgRfGv27d4mktkfbBg50%2FaumLC9zU&X-Amz-Signature=58cee0435ea627e1b738778cdb5731aebb4bc226a9a3e7caf4e0dc524c49a62f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
