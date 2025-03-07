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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WECUK2I6%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCTEN%2FXik2wlxW6Mw8asLA7jt2554qoNp7oSfBCyKdGoAIgeO1F6T6gCnvmbQm6C6xtfuOpNKDVH%2FSHb1BZDAnKNDkq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOsw42Z3QF9Oc50q4CrcA2JtkSTuqu3uwbwWhPD4BWJH22qBhaC6SA4Pa24NpyjSLD25L3r%2FHaLyDkbabMyJ0Wvda1oh6kp34dUiHW1aW3bvWgXLzE4KKO5SbDQVaxMp7iIGYpfE5it3fUfYL3l00z8UcHf9KiA2E1w%2FDU01ewm690QG3E0nSSQCTAZDz2T3e95V9HEEDTv3PeEc3pMty%2BT%2B7fpDgts1WLmd9Nvo41Z4hk5QGloPIDfr8trO85CczVjSnCsHJBgcbqHb1Ml%2B91yqBF2PzpPvtoFFqNUZ1sPp0tnMJT%2F770VaLSw8HxWat%2FZY1DXEnyzqmw8tQLHZ20KppQ4A%2BV%2BnIdRrWjR%2BSMT6kNddrNI1GmfjkzGhmTXlHRf01I1NscsUGXoYOY6EVDDud%2FYLeM%2FC45qRpYteC%2F4NG4XjdGItAnpll9Tp2EsKq1eyRKHJoqQ3vH1NwQ7YZIimvoa%2BB%2BTy67n5SN45n0Cb2SlKzGjMPwQkN0YuBmQviGKBtOaR8BaA0FVWHIhniP44lNKH6ffJpVgs3XCrR%2F49Y78ZEpeXfAKt1aaSYRU%2FoLyV3x5JQM7zLdSXBMhoNRjFDgxeNdZI%2BEkW0jZowcBxnScD256%2FYGrmyEhBJgzplxXt5pUs9fdy5D9%2FMOygrL4GOqUBN9hLUSlFVBVdy31CXJGEEL5GKa1c60AUQSfa4dzE0repVtBogQX%2FPO1TZBmXILkN7k0ABM6t8Jc5uBpSR1hcHod5CeiW8YeV3O5zHtuIQM0yV67LGp7Me1Qj1fbtq4QHX2w0MGKH0cxqsb0kLAtGHAhCubyLFcuOeoeUAmn1DoZvaQK1Hdso45obssNE5EZyHt6ahaLNtGrgQx9fk7WljKwJeBnf&X-Amz-Signature=bcd9bbfd357d152e2d6d05439e06a0e03bbee84fafd0551ef35f0e542ae3b5a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
