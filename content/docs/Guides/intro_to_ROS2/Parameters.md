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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRURSPBQ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T210807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIE61b%2BLG7jSqmdB7p0NZoT84KrAFPU8G024lpi88R4sOAiBf8xagshEzcL4GEF8bZZa%2BXfQ7akzzaPnLi4OmR4SmQCr%2FAwgcEAAaDDYzNzQyMzE4MzgwNSIM4j5xGAiEBv1%2BcQjhKtwDXUWa3QepyPM7lPvGz4Dw6IlXFHK8ypaX9OcUDHzE1sZsRqxRGAA8oW%2Bj18uixxblLY2VDG8LKhxKoZNr61A2E8xbPQs1CuG%2FKK5tVNAVBgJAt55IyEzbaVi6Un1i3WGQl1r5NF0ydaiNdSjPJVKKFYMSpTZwfKNjiswngD8qly5h8EarxzaS8UPZUaqiL99LGhcoRscq2buWDoNnzhNXW9MqjIwYsoLGFMWJJmPgAZ0UlC%2FI%2B30p6Y1UU3a6Ym%2Ft3DpFHDLzRL5uEePKyk%2FcMvxG%2BpzJ4EDIIOBr%2FKjt608loBOJsV6uESS6RDG1Hd5bZWJZQlCeMcMNS6oMaJKbaEeb1%2F4j%2FTOPrDVRtohx57R7fUvJ%2FBLKToWSVhoIqzdPqRFh5okbxWy0%2BzTtnkUj2gpcjS%2B2PCfvzM%2FRXTMba8UE2%2Bbp%2F9mo0x7txtrgwK%2BRselrW9ZBln6PmJGx7AcyzRwEbLrddq1iLGYlDpA%2FApK2Zp5aXxcCzrPgo%2B06Rj%2Bh3fB5qPFEnIbtJTi68O%2Bx2RybFB82Fcy2o%2Bl9OIaYN15jXaG9MHC8cgoB1%2FwxbfQbp0lWab6QF34ne4rKHH%2B3W%2BR4OHDPMiFjtBLnL8S2L5zzCH%2FGuVY37PB2zTww9I%2FQwwY6pgEN2QS14K5XfcnTIdJdckDSxNBSESysfL%2BUe11wnXDw27boGG5b77i7%2BR6op0NEUVyDMqOdsIs3wDQQxm9%2Fzm3voUVmZu9BRrw4ywh%2BGNTlfeFbv3BeSR9o%2F8O4nO%2FAAHDGhYLBjgh1GvsWH%2BSiFyJ8iCvFXKWC23CaEr8bj6bTEf5y9hHltk3jn%2BhVcRbvj5s%2FDnq4zPUOS%2F1jYAuuS%2Bo%2BkHOEbx0R&X-Amz-Signature=b64aa54cba988dfbe7c5d6abc19a0cf6035861fd63a017875065178a6b8e76b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
