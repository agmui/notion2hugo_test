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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YB4WQ3CN%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf2RUdNCe3g1klwme%2BtuNYP8NB3MEy23393BGvGCO9rgIhAMh2Hw3LaaO0pYiAAMFPCQ1hIvpgUF%2Fogz8ISwhnwIJ5Kv8DCE0QABoMNjM3NDIzMTgzODA1IgyMZ1nhufJWsNrFDtoq3AP4nRWa2QCSk5I1EgqAtShzz%2BYyAtXFCmCsxXn4gmbOwXLGPTLUy3pjeyQIcimIuxtP5YxfSFOduAzil87iOFfjxLGmCZ9CX4e1fMLLHWutzIwdyj%2Bskz8YvwbXAypho%2Fj56phYUB7Mdum2kn2pKwqpl9mJnKtrqp0bOfiAgVJpbEwgysVzBTxETGcn0T888H89ZtQREsMHk1Oj2qZO4cDJ%2BUpL9PfcSV6BE465C3hpg75b9VcqwlEtXjayBbKqYUB%2BxlvzKapPYiDG9JdnoeI09ybhAwHAa3GW7g5LVqlb8lTYxWSwbl%2Bc0B5sCcfXDUPh93NbIVkXku%2B2M45GuzstbaEuapF8tBTg5RIIvtlZe3faq6MTFzs%2FzPuihxJ1VFqJQ1zS7adU8Z%2FXFjJk6DIF3Pe6rNam%2FhC12iiNgZZ110JblwHYEzCD83ynJBJfQ0M%2BBFa0gVm32T4iXvCplgxr2h6q0vNTIeB82nZTk5sfjN2HJ%2Bs34CRYYM5YEKHn2hIS4Vs6LHXshpgFYs5pFOgmKCklOqfV0r%2BGd0b1wNNuXwWhzeGGzianhf%2FuDpmcaK5GQVUyJjKZQEqrNgQrlTTF18PGhVJrBfpFNqsHhAIsrat128UQO5SsaBcEvTDPkoDABjqkARoV1FZFxpEIy1FkTmRWMbXpsXuEntSBLKjTEWGf%2F%2Ba3WL4mBVX%2FmE3%2FQXEfEWQvq65NPoKQW06pbSldYTbf2dzaZSWuN6%2FPXjv82lgkyTVngoIbGMSyAO3Il5oXlw%2B2MhzI2Qx8lG%2FW6x2Odt1RiLWpcqC2Z0%2BidO17EvGdAOqD4DBS1XRdfTmKNTKNVopA2lndzJz6bVt9UeWrAZZ6aQDWyfKd&X-Amz-Signature=62f52f6a2f48673601b66a0340b70824ac7fbbefe0ba24e593a7659e58f2109e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
