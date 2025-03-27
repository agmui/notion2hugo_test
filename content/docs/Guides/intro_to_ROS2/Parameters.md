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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTMYDCKI%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMnFDgV8gSISXZQ%2FwdSnu9apAFJFPx94BLQ%2B6r62GlyQIgWWHLLbpLg%2FcKbafWvHuMp8C3ilVeYTIM5RxgDxgXXrIq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDHv66MmzK%2Fjz1KeOeircA8lD%2FbMP%2F7yGyFoVMPdog3%2FrIXX%2FpNKpbCA9HUgb1cbZo6%2FNLbMO6NEgPgEe1A8T1auKd7q1%2BI%2Bmj1Lraa1tD%2FC5Ivsl8Oe2M90uy1KLlVJVy61xJV2ciJ80NNJN6QJuU8%2FI1r7YhsfA5ncw%2Bx%2FoIKSaBM1y0AY5sMwWim8phfOLaMDT9dN%2FsgrWpOVPNeFme6KLPQSbX1lUSnp8ANT2PA9SIU55fUJ4FP85CmY9%2F9TieYUJ2VcasZgI4Pqr0Tw5WLxqK87FjpGwxk9u8hd6YZrZnbNzbpBZX0w64vIumqiwQkO0tz6ZqCPul3x4wp3eKzKfMKZ9shpjEIL2UoJTX6oZL9xnFWk8v1NM%2BEr9b4PN%2FdXtZt4fHAZKq4mGSG7XC7Fd%2FUzkzp5ykFvC8d1%2BZHHnSfJd0umVP1cNytO5zYtfG0whGhKanM4zNDUU%2BNWyd2G43miPmvtx1xosfrALGAaP5pJhjpNPNkf0pFz67yuuKheINJSDmjyeP0ekzwuNf%2FHGiazK9%2BM7EmpQbBB0CyPIovpt0eh0ETdv2n8P209Z3C7ZfLx1Phl7Npi1wDKfuwLa%2F%2B97DuYfpH7qwDhG0a5Sdn7lS6qaaUNeZJ1EgcbAPAjT%2BysEyp5WGzc8ML34lL8GOqUBxIdoUiQRZzkSCR1X8wTdNFEgx2aJ2zgOtd9piA1zs37UW4B7PYhFVT57mTmDZL2aSxDEDn%2BVSDb8Ww26desUIoW7gFTyY8V%2BnrB5FiNHJ8tngYYy3aO6x28Ou74oDWMgbXupeC4r0BC7rzRgSLggwp%2BcQI91ONLFco%2Bm66iC5iXsrkAlQOcvapUpolPJ4SMCTS60FYSDzdJ6xEgjRlGvkcvhypf9&X-Amz-Signature=ed6c4782b3c7e8a92d7824e6efc45b9547de12afce36fed31e10ac0481008ab9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
