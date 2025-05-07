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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4LX73DR%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T004124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD479oseF8R00doMkpMj19t4Pq2ryT15CmPTk%2B0yOF89AIgPeU05vTVYONuGFce273jNoiivLocLd2q7g3ICS8rGNAq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDFtQZR8y%2FTbgpuPWbSrcA3SkLWj8GRt4y7NPiAIm%2FPU%2BO7Q7Outhf517bHgvhaAofCIrLcg6vyZW7S5LIHpo4J%2B0%2FwDTpXV9uLagW5LyULWu5ns3aMUWYhCi4K9IKboaa6VkPKrRaQZzY7dubjUg0xA6JmrX%2FAOnqFn8S7356uG5%2FVMzcqv%2BpsPwnRdfsF9ipoX%2BKEZkPMEPfkKx8V9bnQRQjTDN7x3sUSsLfdoSCe9ZjNcoxuYPhwHcLx3kLmKtkVGFAzr3AQcrhj7KyG6Nck%2Bm0Hv50wTyo04FxmLe0uj13DxcXjnrlDdDwt6gwQZhREcTMEA8fhT%2F4%2BoPDEVEp4XBCbVD%2BkMISCX%2BHck4vi8O8%2B%2FuFw2ODlKD22EnyfPVvPhz0H3b72Nooduo8IHa51LKHXzYZT3N%2BRxwjl657x9cHNk5LocKVwmZQt3hh93Km%2Fk7Nj3UKca1snkNRO%2FSBTdGzQf%2FnQXa5b%2B9%2Fr%2FYKPm3T6ThYXY34PezyKYbA3oFeagMr0pb6kGRyzRFYPEiI7zhGcpErc8D5I4Q9GVio%2FlU4sh%2BYM0PyydzScRXEHsMAJieSfeCZYxyGHDyFKfo5%2B2IbIhxTAKnF0GTuVc0FRB42uE1qRyzVi8QdQi7oB7JkjgPvwFnWc8APxWrMLiv6sAGOqUBRsZvBRk5ix19EtbQgXC49foQcZRm9OgQuLm9YXns%2BFVOjCqcZQ%2BbHkWvx8Q3u2LmvdKdBIvMXyplFFB9LOU5irgfKo7zyLIqAvbwo4SoI9M1z9Pqi604lJfmeSBWoFA5HfyXEtH4lVTmd3kOX0hEc9l4CpZePbGxh7NIXTQ3RY6NP5Okk7PceQJhss6G70u1BJm3d7mK7bpM5Nqi9m%2Fh2LMfqdB2&X-Amz-Signature=f868a7e7277b5e5f5873d5c7c62532dfe83e56201e6102564da237901541adda&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
