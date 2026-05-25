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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UZDAUE3%2F20260525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260525T035314Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFtggsJBb9yzU8K%2FhD%2BPiTIxEPHhw2MFx2nlfP4VYHGfAiAqFgj2Qrfw9ZHFATXXX7RRijTj22FPMrMKaqM9C32qQyr%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMj8p5h%2B3P6msnGciMKtwDvb8ltPntIb3vWSoSZZSRccF8%2BUxaaHax8xIuqHG1J5346IZnJDRBaL3boA7WdSHOymQqPeCBvGuzgcFIeS%2B5IY6DDl1B2tBzF39DsAGel5EIWZt2uKXaxeL9r1Ppqr1wZcOUxUorSae72N%2BTi0Et4MXI%2FqqA1yGGwkAdi%2BDm6%2BAWJ%2F3xIvUDzqXO89YlrFFP%2B3On3LFjaVJ6yccUBHY4t%2Bz6unX3ofzFXVIOAbkEC0NRh6KZU3TwxBiDMwHR5hL%2BOVjPYRv7yFGgU%2BY%2B8j45gYL4hnfu3TVuCZjy90hiTSYPDlSBwQA4Fji8yiuW6M0qaQczcI%2Bh01GN0PdTdajvzwmZqJU9O5uI%2F7pVSIoej%2Bpe0X8dCYeegQxO5FVvjukTtiuCVmWIJlhjxZDShhe8rszcPjUt5hVq%2FJE1fea22wvbJgVpQ35LBNO%2BNflveaIGniu%2BOETXaSta3f61qRo315tQaLi8rAHJGKKltxK%2F3%2Fc6qQaUmhUvSLzwJM8hDU792UEt%2FGueQ5jvCQynVRcBO0lK6qtvh%2BPvVqQtQi%2BF9DBkVJ6Rdmn7fZD4pkMbSAMWrXze%2BA%2BMiLccNKioxp5WzuJIVMt%2BD0zBr4GNg%2BGwjzq%2B0zNViZ6lpFWnYoAwurrO0AY6pgEG59e2s%2F0%2FvaUPSIkQUETRG6LywY23ltYF83OPmDqIBn8EB%2Bvt94J6yLgBGCo1dNIerYPs2jhaAuivqWRUcnseyKMxdmm9hYJR8Z6vCvPlC5DLmQK%2BJ9jfxVr53YPIPONgGzohAx8urKM%2BELOB4GOtW5PokCkq5u1KkJ6v98GmTEMnvMvphz9aJxV1bQHkYMJEFOtIXwSTt8dSPyLGdC7rKm54p4pu&X-Amz-Signature=ca000586ae1ab287adb60e85f26312dba50a619a6f325dad88b35f9642663821&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
