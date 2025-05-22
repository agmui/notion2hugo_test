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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XH3T26S3%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T230857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECcaCXVzLXdlc3QtMiJGMEQCIH8fC6Cb4LLBmOmvoK0tBdPL5bYwU7BkwmduHG3lBl%2BiAiAaVMxHWEbjWkuL2uoo5tqYMdryQpHSwGpRLx3IqgYpfSqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2Fc5uB91FpQFG68fVKtwDrpF3xZ3Vl8%2FUK7LJlcxRpIorKYtTEglE5j7dGLjrXHjAg5kxkXvb7r82FNXiD0g2Sv36wKJGsKWYkwwxTF0%2BvQ0iPraFmWczju%2BjYEGnNyya0X70XnEqfU2If%2FFWALIdZh5L6sM%2BlMaqH5W6WaKPkEHKThD1PP%2FexbqlSwDGqLQj%2BrAIwgukUD6Cb5ABtCM%2F8eUl9l9NixykDJeI%2FLfF%2FJEvFCoHdefOl%2Bv1H2x50W8s8s9znV4h0d6m%2FK9BiZA5m2Ay8YUoeXA98YhkLNaZMrHZLdUTBARvpQAimWC8TeidYWMAoROFI4yALAtE4jRrppJTV15N1TRCigDVe7gPNB9lILObR9dUokHry9COukZbb5q7ncCieRhRSTaJmy9Ttv83%2BVFuIhJAU9b%2BsVnrjCi%2Fgngeh0PFm3mVyhV%2FJyG%2FVmtc3jeThNDILK3vW7UK1KU%2FBXtKVhSDwVOUtjZPGMpseL96JeFtlGVWucyD0cywpo03Ha34mas%2F6RuU%2F8e0sI2HKfZpZuu%2FY3pNnLJw2KO1AG1x7LqpsBlccKDOtLUyyRD39wMKknFI1a%2FKVNaSDX0deTgXCCLVXFYcF%2B5cZikYUGq%2BszV7mUE7rX64Oi1Fw4fkqpjPVpjk8Lcwwsm%2BwQY6pgGobg2eKODY8%2FnhyizVmI0B8hz6BPMDXVimzBpUtQU56pzJI2LJrPnADpw8UPTMEVv2ZQcUF2TiMnH90MFsyL8m%2FNtP5L8SlFvGbVinUxQ18DOS37YvCW1HLfrieS1c3nqWE7QcCZCw%2Bu6aqkhEYDMO%2Bsc6%2Bj5hXyekNVFdp8TCcNOCnzLuSPy84uHgJL5XJEjqoGcPW%2BM0r%2F6ZERdR2%2FhRxebnCWK%2F&X-Amz-Signature=945876c61bd5f475823df48be3922a770da1046e270e1a538b511e2cc8e2de03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
