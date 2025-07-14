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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQJA3YL%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T051659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHdowDDH4FT%2BzeL0YXm8Y59iy962yej%2FNvHygpLuNGioAiEA9WxERgXiaeEB8mUoSx61Ls9F5RfImXFfUsPmeHSBnmgq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLBwpLG%2BpaOY%2BVG9YCrcA2ncr4842IbzzRZtp9nkzDb6UsxjPiDAxLV31X8cOuCdrzQri0SoUUB82zsI3JGcAlRsE8sbeuHwg8e3iBfXNhNN%2BnB4Mv9fRyIdafrpgoZzVqOUBC%2FbNFlgXlsTYvyNGuTYOrES1Ix%2BrJhx28Dum2bkI2cFOx29y%2FcYlbQGxnreLi%2F55T4ckna64HXz7SJB9PsUqpFzJCEnSbbWpDTBy%2BhpFvMIu%2Fw%2B0Z4YRxiBQVnpo99jgJF2QEicDJS3qcqC0BSEjSh5NL4OW8%2FlTaeJ8mR0%2F1gNvEfVwYA87570ynQC1i%2FsQaeMBMO9%2FvlOHuuNM%2Fym42AoL7ehCwRAb44iuBCsSfqDpD8g7I9%2FOa8I2%2BCsXzA4KHmQHuEl%2B6aVutq5jG%2FeEMu1xKfnOdTiOVCqClUYbdKNxS%2FJrXGoo%2BesXxVuD8m%2BNdlrepx5CLZge4IfDOF978HTjzWslEMD6wv%2F%2BDZUhGEBr%2FnYxC4UAD7X%2BRQP75i861ivdCmHj00OwQPrDX0JcBfE50kN12Jm7RAf2u4VRvmiAVAwpHklEG8rJzj1TVgzBsNVH80TyGos%2Fw%2Ba8kicsWYm7FvKyVfkmHuhd0Ag8XEnKDJtnAtnCnW9Z5JcoUmqlw3io%2FDmXgR1ML%2FM0cMGOqUBi7AXI2LK3%2BM7RTxAdQCFRgt77MnPWx%2BCUrkSgEtWcY5MEfexLr5I72hCixMUKgv5W9VWcutHQiKunRVsbFBPvgsl3d76bAEv3FXzz2tlwnEelWzst1ONSVHce1hfSstpo81oS6rAOW8pl9sZ4pdBep4BC8TK2p6eSjR%2FjKmVxFQmOI1DYOBmhqms%2BUpAs1BmFxgS3SAxhVPvG2ZrgEML2n6O2zwB&X-Amz-Signature=49ad54e423072199f4b92f96229e0b10922c2580c9da224562e8169f4251c95a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
