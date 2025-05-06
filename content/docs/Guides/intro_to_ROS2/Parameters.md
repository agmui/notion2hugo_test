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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFU5ENL6%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T200946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeYbAjJFgGKnwuVr7XqW2ofn5O9qrHdRWp9VfksU%2FcwAIgCHxSoZ3d%2FhHhSfdz%2BoNBDQTMLvCHaPzfZzQUd8L%2Bz3Qq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDFge0JZSluiWONkXcircA%2BrSeUb2Fcr2UlLbK62UoIJREtNEaG%2FBJ0WSQT2lE5gkgABQxJ8epzPlycpk67DvUHuhjAG7gPcBdrK1D5IYqZnJOOYwgjrGAUM2mx1JGkCuLTDILQ9iDhXlAD%2FAh1vYvzGgvjm3kRqH7RkbaMkiBnhl6SsQpKjHtQZhyskLKzMs43U01%2BF1ak1iFqVFONFIlxpldRjErFehbQoJgHzE8OGyUZ6tuZxRzWb6aekBZpYjYGXENqwwL%2FUl29K7PpbXRx5dpi%2BG%2F%2Br9%2BrGgBk%2Fz%2FS8z8JRFRyl9VYqFyYdugYCMOyAUQSbkj8Q3dVyTKfUcyAvQ%2FSYUVSr2nHYViukuSQyxAgpcs3Nf%2FKXAe5ROk80JDZrTxynROnUBRARebOrkhl2c%2FQDxlLrFPxeaCtVbUHGlVMt96dU%2FoIVfxsxG%2FFxon2hciMCH8SOS1qcdISTm%2BIRPEMl%2BWrov9bJlilCApm8MGudQ1wmn6USIoXlhsa%2Be%2FpWdCnurtymdjAZ7mx%2BH6%2BUn%2Bk7uuT%2BoBhzDMY9y5No2P8YvNJR5qtFcsYXsXhHLfuDM7ugS4%2BNbflk%2FgAhp13kc2JMD%2BE0Q2rz7BOL1uc2JGUjzW7JWe1XcN5R1gd2f0Eapg3kMW%2FKHQrzAMJy06cAGOqUBCZWdFME0FwuuvA5ADS8FRARonB50KA66t8gIbLjsnWC9yHgee7dkZkVAcKJ24vtXD06Ryi594o1Hmi2RFAprjCe8CLDKnvhQ0GyXSdk4h2OjPqnUrHq7744hWCpqRg0kyQt7eXq86a59v5Gz4ArnVbtv3gJg%2BkNNtdRtHf8fJ8T%2BL132EgvQep%2BRv6F%2FZQF%2FmpwbMvlBgxnKJSZFXpsEF9qu%2BuLf&X-Amz-Signature=9e8716fcd6bf5392b0385283334d4c44d9d1dbd2bc1230d7eda0c6cf47d77ccc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
