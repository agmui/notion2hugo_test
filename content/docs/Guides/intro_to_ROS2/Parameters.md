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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665BAHPX5%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T051638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIC%2BIAv6vaO4SrWrFUoHTxJH8fTSIr0umHsGKb%2BNotBsRAiEA3q5hy%2FzJ3YwLnMqoMiud3VOOtc2CYZT88n0Mp9xCs3gq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDIymCCfrvHoo269aUircA3qf77FgDuWVTb6y%2FcVDL9kVdAHbWaFz2xFyWtGVYdUjhlffr%2FhjsxugCVpx5FPG7CrvVRjkM67WKyFLleUGy0ooH9Fg4qUOqDcHpoh4pFl7LEViw6wnFrP88imnRRID48uC8aiq9Jl79H1jaQpI75p7bhIXZLGFkrGrS5ngsuqI2rNMSeGy%2FgBUo8qt1AVJt8dyEgFgXkul9M81o11dkMwtW5KnPVG3spzAwafgrkcjsc6TTXuqOOERzOrk30lueQLUNyWhg0yJwuYeVLda57XUEGfhQO9Uj52xx2iuBwo47BMKl%2Ft6%2FPJqSnkq6oZ9QY%2FIUcD%2BarGrhbbLC6or1LR65Extakw0%2B1MSBEM3VAn%2FMbSPQaU0jzGCJ9o8M8aO%2Fik6X1es10ElXTphpn5BxPiATrs7WX411yy8y29HQZfLSHzH75S%2BKNj7GrpgAyIqlw6MsGaS1aktnYTIPTK%2FOhMD3BPGE2wTdxWyB8KSZ6MSknvk%2Bpn6cGYSYgqiwVeuMMS%2BhOfDMGwTBaRBDIxCKXGMof1892hxcanqMraz%2FJGz2JH7w4nMpJ3k9cmA3GHn0gz88ebTtKQ23o8OdHQ755BiZm67%2BQQFnJIfEdNQzsiQ7YTLphF0OzU00WQvMIa7lsQGOqUBhZWyd0pA66HigZkk8lUmyTynRO1rC%2FpshIrePQS63rMH%2FSn66IBafI624z1xqmkYjNVHwKCCrmfNRutrcVVDKnRcArAmMmMFE4bJEPY3Bk2ZSScKk91w4UBZyo7Fpv5Qf2cDR3RcEhCynOaAfca92mmlKzaZ5IrBPK8nBCvbCKbTb4KLK%2Bh%2B3X73jXPfnfG2dhYDulUl%2FC00V%2Bvk0sA%2Bdf07NHrl&X-Amz-Signature=bdb444fe266f0ff011178bca27a86122ef74093cc34fd4d05e3931031757f2ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
