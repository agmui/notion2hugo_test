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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZVRQC6H%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T042217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgLpXz3aYvE4CszE586arSVsa4Tf%2FgZsE6mCKzoaY0%2FwIgYDfA8tyvutq0ywj7IWZlF8OCSU44%2FHZOU%2BRh25JtzUoqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKu2Ov1gpp5tyDRIuircA3mpWCqQkJURgOrOe55qsR%2FClzh0ovHFfhFm6pc6OwhnYPsw0GPJm%2FK5aTv6mWvDqPxiSGcwvO5suTGnsNU1vuHO8glCKuIbZPYxExT3vZ8WN%2BoceFYb%2FClclQk0Jjy9f4lmO6Z%2Ba6ZvxKXrm8SsMHDq%2Buu5lboSJZUJsu8VfoW6bsch8QwOZGyX%2F0h91%2BEH5un8mJjSq%2FE1X6tEzlNobgTVS%2BjtmG%2BN3hzyEGCN3HQZIwVMPU0EwoXHtMdeOdwsbx2KU2UTJ%2BV7dQiRfd%2FS0N2kY3NnwT%2BwoLOwho%2FGoyf1f41TKDYtwQs69LAotIKBaBiwkWLh615dzu2sL%2Bfl1%2Bx8mHRIl0O0XcclLuXe634d3BjRavHn%2FT4ADbtANJKhpbyZ648Q2Q0m2zV3VFXGMfFgdl631xNASAXiVpQHVLIbFM1vB1ghHzPsgE8v7JCKGMt7AkZxl49b5tTknLZUL9Risx4e3SCUuIPDHAu6qnpH0FnUX8GC2B945NBP3BzAkkW1KDbwVUd6SZFMxgHb5EQP7dxvxf%2BsWPQR9XpDgbdautXeU54%2B1lclhsIVakePNHG8BekLF%2FAShsA5%2Bj4G6TRgZLTWrjcSYmtCsx1YGrqurjQziWhUqumLT0vkMPT%2BvMMGOqUBUH3xEW4Jp9wXiOrwO50WLUSHaKus7sqMbfWrprQxVeq5O4dezaFV4geO4jBhYG0i6lUTx4NX6GeTGzCGo7hpCUCYfDAzLtiPgWNRVlNG2QWNnexxi%2FPyuHHBGJPjyQJTi1a3Zkn%2FtXcfgC%2Fk01IqzpjCRuGy%2Fxp8uvGVkFnGUROC9JOig2uI5fao%2FM0RCyv50%2Fby%2F%2Fd8t2OjjzEKyqb97EbjD6aM&X-Amz-Signature=247dcf51134da7d6f9e7393ccce4d062e01f82e22297b9acfd424d1d1e955692&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
