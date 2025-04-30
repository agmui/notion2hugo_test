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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEQXOIDN%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T110741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJGMEQCIAnn9Q5U4daUxi%2F4I%2FZcAHMGFZjboB9PkVGe7Kj5n0UoAiA4whhGK9FxDUWj37d5va3clGP8fBEJ1ZgpEAxBlAElJSqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM47UdOhHyU5DXORVQKtwD%2F15BlLYXUdmzSVkq%2B7I3Ysid18YLwNGGl9TXN28O7N3ff0YobeFm%2BO9yol1n8uTGgvFbBpQCZvPJ5XkHCo28tm4zzuwq4jrb0DccTCCrzyJxmnCvvL6rKXzu%2F106uIQB6I0Xevya7TZlQ9GDRdqxv%2BstSG15Mjb02WYrNomO6RsZuWN21m4ITkSiwCkKrW8KFysBVAwznOAA6wcENZhKhDA2TBIqIPv71HmCKvIDtw1VrqTgQ8qotFjP2LmzrMRSa8mYJu6C3PejVhWUUo5j7IOn67myicH5FxMAT6EZSz1qEMDSWH%2B5Ns2j2YqnEPNwdDemz%2FUC2J%2FPJ9qz1yzYWpDzgoIEEM81SrF3xZ9A0yKzRS7jAtBz28Q2W1WXKgQrMvZA1pfbf9lpvqqx6x3yPHJZvA1hg5qgSfoIjpbzFVAvOqCcHkywJyunKdmsFpkt2NH%2FJ3pe%2FR6tGZfLs6N4Guo5W8WodmTWn5M4XYxLyzhDqtq1mRr8JIURkZAyDMG3zaZ1l7DhjN1dMMJeR2h45S7azw2Xbt7s%2Ba7qW89Evp5BxxtP8mS4f4wZVZhd%2FWtvRPl0oc18J0LqMyiGdzswmwAFToPDi5396%2BQS%2F%2B6tOkjCtXlQgsXawoG8IY0wjOvHwAY6pgE9bBvVkabmgzl5B6XB1M9iWvxqBuTKUJc92Rho65rWPgrvgOfaDF5Ifk6LXRTebevOUeFQJqXcWxUugtaRCxxg0jrVv2l87eLT3PHoTTL89VOMQupL%2BzYmEAFOzjAurenyTlztErxvc57xgealJFj95uydkaGp89AXCCyjnVR5PEAeqy46IZEL1n7aWSnRPW143r5T5ohhpANAOi7Q1AocHoJ1bgtT&X-Amz-Signature=65304e615680c48fabb4964f7c8c58da755ac0331993481861c9841b8cde526d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
