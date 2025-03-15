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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NEAICUH%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T220121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBb08806SuMXFrlJp68iS0O0L6DpQxmCPxxOZouiQCM%2FAiB%2B3k3zPnW2Lnu6mmF1i5HAseGcTGfxIbIR40heN%2FGzyyr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIMznraZC3lNMB%2FL7%2B1KtwDfKbvmszeLNhdTHp7knJtlK73HIXwG1clnYmh05Vrhpdmccy%2FwRdFdpqGfCg4tVSXL9h0JsR50J69YxBHGtv1zMyTJrFp4vmXV8hwNR6ngbJsDrpwEo7G9klGiXUGB9HEIyW5Xvxo808RPEsINqrdAhXKVVI65kR5%2F16HUqiK64vTWOz2BUlFlPqfYVk2CHQao2D%2FeyPeSh5IC5Fn1Z7ri6EggQaTbEFL2%2BG1GT6BWA8MC1g%2FKa%2Bu5Tr%2BW%2BgCtc1TKhftjFXX7gpnzFOvmlK6D18fRS0iyxRb8TlRXSYO9E5Drp08gBggYacvu0ZjsZlNnpmmDwRDJxDbGSYlgSTzBMu097AvqPYEq8XDHPnYWTha04rKS9nCuUUJO53wCL6AJjt9Rwq5h0dSep5ESUPq85T5Z4Fwz82CvbL5o5EscXiCpncuJfuZZam52GSrcFHYEdWfbX3CuIhgTducOsd2BVKYWZk6ikUD%2FUMYU%2B6jbldb%2F%2B1UQ%2FXtvQFD6webgFjMJAi0ozUeazCocOQJsoUgXZ23REcs8MKbZj6b50mxSkB5MW42b7ryQdJBI8EEwwH8kLb1q%2Fdf7L1toBNFXWK1D0i1IE7hUEVPCFLk3RtuTi3Z1WuqO%2B9XKrd34YYwguPXvgY6pgEnBpdBwzuy4RRjuhSvsuc4GES3SwZ0H8kdhf98BEf1HvqanMOG1VLnaBBZ44ecz%2BCy0VkaIKkgp4Vzy%2FY5qbSJatYLTktJYHYaapSWY4PuWrOfiUT3M683ijSjEEXEHnD6q9Wk6cLTnRYJo9lQbUdfjoMmojiTSbLpPIznoqvBHSk6%2B1pRFJkKhd%2Bx%2BlN2HzbniCQj6ewzHZBlY4zdjus%2By3IlvM3g&X-Amz-Signature=df11d913020b89586772ce955c93d45589e06d85d13799ad9b3d3a8ed572f9c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
