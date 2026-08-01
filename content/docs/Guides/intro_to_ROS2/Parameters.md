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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIHDVXP%2F20260801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260801T024742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCh%2Fr9Q4gOUmuBaprgJZeyHshXD2cVIfRMx8Yy1ibwZ7gIgI%2FZ0C7%2BEir9kgvxOb5ur1aDYYlclOvdaNkVKNH%2FGgPgqiAQIvP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC3e6EbB6SxcrhV9tSrcA7jR2TpLFbrk8tA%2BzI65Mfz7L4JiYLwuyBy7AMKbVfLrddGnG4dm%2FVBqVRuGt5lEj8ew55w1IJdpLvLjbAcpoiGSZVjDJKMVC1g3GKrMVcSqiBnuBcHCI96GcKpD%2F%2BuOoajKncdkM5RuzMG1TdFqzeEHH%2FqFLYAs%2FSo3sNT%2FW5JLV%2BNdqbHrWFIaaEqw2EUGhITFOj46I1OKpkgHmQNraCmOmKUwKy28O57ebOwQc%2F9nE5Gj2VukM9OIxonIKzYOKErpvSeVxIpiezpj0fnjvcB7eJeAEcpMy52gfKyWbJFeCBnJZFweDvRjutkX%2Fpq0K%2FIoCgggHffkDQmNTp3CatwDgx3SWKXeVah6wl6KZaK%2FkzbSctaVtJnIACjiX1tsmkFfjqNrsBBvXhNVBfZh0l3iqr%2FGbbL2wNQzJ7jl%2B3o0%2F99OScE%2BKdywMmMk4TmXJmJPSOLt%2F4yFiVubPCpErY7iealt52MqDwCppnPn8lN0VCUXa4v%2B2MMtK70QwD%2B7Pg3ltKi2ITr8%2BCvaaQaMY%2FqNexSZlskyizcLJPhRD6CNEFuAIll0%2FAEgop62cBeTwapv2P%2FgiRAVXJ7hr9U%2BqCXl1AXJ7YoaraaNdq5GKzHmqZaDVYLSymD6BNDgMOe4tdMGOqUB0N1Vw5XBtSIC40wFaXI8X0SxskWtdvLWdUCw5R425reIfQ9Ehq2EdJ8tg%2BKC6vkVmvXxk5s%2FqZ8YJau6KRKCAYaKU8O6GzUIl02hDOerdgAA0V9zOj0YW%2F9jBW0NXpxuwEFjOGmgkM8vaqFmMUX8KMNF7zdc60sxAxnZ6SYQ%2BwACSFn3sShuMjvHZGrDW0FgZWx767Ln%2B8cJjoiNuUDqvnRDy0sO&X-Amz-Signature=228b618d25dfa1ee657d13f1881948ec80b4dc80cf9412073cd2cd5db747af6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
