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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNFFWG6L%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T034503Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQCJhwbmy%2BhVuLUh0wYZVDxppAnCHExkoyusZfRvIbE1XAIgblK3VpNO4cm6IeUaX9AvuC9wJDk2S9j2heDPMDjYVucq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDH%2BuwqdgQrTO5A91MCrcA1c3XufDZA%2BQR5q6tlpzU4m8T0L%2BJ%2BoNGnhaVlydbx3L8XjEBgtKv6gj6y0t8EYemy9m1S1Xddck9fpQWmR8rkcjeIVs1pE%2BVRyQxH9vhLPFCFF%2Fo0fmUTlcbyJV85opY589BCkioX0HhClNEOHdk61BSOStwZEI7c4UWSe6b8%2B3d%2FL%2F2Ja2T6ekNR4i9zMP0h7IyJX6JF9okm2QwyJO4eLD%2FzCNTQBkLqZQnTVmduQCNM0hBKCXCLX6wVZ0fP5wcEkG%2FTTA3l%2FQTmWA4WnbcZ0pfrXkJB%2Bh%2BMdHmMDMhhkXS87hpR0%2BI9xdwQ5eY4nQcRSbPmtjY7Ha5O5HHIcEwrFeZpmUD2kqwlFGIdDuUK%2BCNx8RSZE%2FTirsoKLz1g4NLRB76WacFNG50akJ%2Fw38S%2BRgJf6QobzkEeLINpuC%2BXLoQNtG%2F6gJ4cC2Sis8NezT0Qy6gPAlY0BwCx7fEL1LlMKU%2BfBz3hZ%2BYCHNfrK9pAiRUiso2KaOfwa8ngagr8cJPTDRWyQSXHPiJGg5602IXtXyvjBJ3RDf1aYG3Pn1ln5slyJ%2Fx6NfaLuZyRcuAJOHw8NhEYPEPbwgEO8wV0rpr%2Ba2C3GxAJVPo0Ajqj7tJLcMqQZna6QdgJttxD%2B7MLL%2FuMIGOqUBP87V%2BgLBSZmiMmrUGR3IHWEFS6FAAkE7Dpk%2BTZarzD9Je4Fz%2Feg2xnx3WIIDm5e%2Fi%2FrO7tXWuJBDViHFXWJfmFGhD7ES6o4FoMwsYspjAfSKzi346cCnP%2B4A%2BZ6JYIWiGIUYkBADpPwEzkacUrfy91wYYEiV5HdAj1gq%2BwxNt3fGUNhAmurtGQciWzBV6UFI%2BSckPft1D3xRDaMH3RDVCnUutd8s&X-Amz-Signature=aaff5d80a8756dd9d59d529dd055383fbaf37f7d99f3e4073435da287396b8e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
