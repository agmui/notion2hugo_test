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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMOAX6L5%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDWRcE3rx348REg893o9CIz9REU16uzAekEfuR4nScR3gIhAK5X74SGRWYNmf6lUVjwSR96G0V3j154HL24S2VpHHiKKv8DCH0QABoMNjM3NDIzMTgzODA1IgxI8pKmoeJOpgZR548q3ANwiOXCN9N2lSPDKyAG%2BZyB32Vr1OYaxHX8%2FqkDg%2BNW6xgjvXB2NUUB6%2BRiBSrp4kPdt6cb9Wuo5D8j9Sl0GhPDkWEPfkVYwFvzzAHtxh8Mg0Bb4V3%2Ba2%2FRc7U%2Fq87B5FlJR%2FZEefo7GiVrh0mGzfJLQOBNQsWZh1cYpxIsFtf%2B0z51TNl3zhwF0%2FQlXZyqoRGV3Cm9J%2BpIvXA0F6CeXJ72P6UcnJm92%2FHFxWyoU4JIkEPOnnFCttMpucw0uHW46OwU85Q9ssQ4sZ1wJcCDPpJINEnzBWIGbWgWOBmGNIb5FBVRZzZMXPelzPJ3TR3zvuGC%2FE30U85xQGHqHC8ZhR%2F8Qe1xhR3YRoLWuK6haP8TBbbEDDpDr4QHYsn%2Bv6ErAPHZ5AwL3dkEsoxA0q%2BBYPweAZuNPLdKYV4l7SF4y%2B%2BJwkq1Us9YKN4ZIX1NKSYqVe8hYGq%2Bf9jf%2B7CK79zKrtfLjLF8XAnYPC8gXit%2BLm07W%2FisQY8OtpjuDOrtC4b1TZfBtRdVDYi6iWht0%2FhlKRPfeJLAFNjPA1xuCUsSah9mmtEj9MjlD1GfeX4%2FdB3%2BajqUtrxrCfBjxoXPaiMC5Fta40inRfxCiake%2BlNHsuXUz9bu6A4dZZVOH2IxcDD3t7%2FABjqkAYFID2rsXEmtQEuDE91kRqjmTCZ59QODgBi%2FPWf3h9u6IquPNMM9w4R6T75%2Bxd6%2F1wyR4JWI%2FiD1XZDboq8W%2BNsl8dxTpCAMf%2FpSQmicFhDXyXVw79CWbs2%2FJYJ2p4Gx%2B67a8H0LLmTDbrWtoBRigHw%2Bxpnv0XXN9hfxLGbJr598lEDI0AI%2Fzc8x%2BBVMDjj21C44u%2FxmVwPnLEffVqQlkqE5meTR&X-Amz-Signature=7bc1bc728f2abb2d22fb38c8d79e4bcddd3f04dc654da757426dd7276d659f73&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
