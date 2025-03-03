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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWHK7XOB%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T220755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK4DLpBI22uhteWHs8%2BlZhEF2Tk8BVGtc5gxo%2BH3sVPAiEAta3J5d0uA7jyMDPHBKHPWcBIXowCGYRX0RoEIrmHqZMqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDChJZJctJcTEcz3teircA5KPQmK1LeVgTqBvL2v0vUbiILbDpzvcxwT%2BZ1GelpUFYtVhIbm9uQlksrhiyFrklTLsIR5ABEnlJkl4OPzTTPEIO07pc4LSjo61cpSmx3zh52go0itl%2B8HtIE8C71bCM0U%2FxrNf%2Btzt7diLMVnXkjU2pQLkdaFSedhESrf5idhYGkqrkymOf4Ha4C8tTAyGI%2B0rIsUPGU9KhLoaLknGigU9C5QEWGdvwlXqpC04NtZh%2BXpGOnqGqGO1ifodlPJHKb1WFZue4gCoxJgszznxjNXW8SnA4BzAE4LDjJdESz9Ja3x8yKxF3ULOez9Ge4LH0o5klObJNqmzwufPOl0DxO67HNop2e3vSnSM34KtDHYBB5I0qP4MRu0EJBJ9a1jLW2h2sXLaaIk6lSpFewQSe7HLV63Uc5vTmy5WnD0UPDjDpD9W1MeW5FVnHEGZOCz6VA3Hmt42RgETgv2SFTmRe0hLnAhiXN65VMHhJlPqG0T%2BOQG4zUPAJ7PMW1Deq0RayWTytcCyqDRFUyFkaKr2IRItpAoL2M8i5JMugJU4ofJ6ItK0IWwGB5LuZQ7GaOFD0kWGvL%2FpN0xt1RzkaWewgpUSCFwELBx3rOKtcBgU4zMqr3qUtpgfY8KYZd4HMNW6mL4GOqUBJXIwvJAn%2FzsAUnkGXOCLtcpggeg2ENEqh6eqZpneKLpwcfb930K%2Fz2GhhCa%2FFFzL1tlAHmf%2FmrbVIdObrSFlwZyUrjQUN3KcJ3FvXP2shDvFBmQZZr7E8xI50iddMN1x2PsbvQiuSC4SByKfV9DQs185JO4kQe2DgCNNSidLT%2BGi6XF97G%2BM7PKng4B6V9ml01O4SnpdWsB03TUnOuIL2BIpjppS&X-Amz-Signature=dc37d794d66e645d937f9843f04147e067f2754a942dfd16a95bb90e5e574dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
