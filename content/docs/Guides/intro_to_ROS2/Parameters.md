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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQGET5CQ%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T004243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCpt5Gekv%2BgjFqbYad2%2BPjjeiVGOZSoD8RVOhK7kgcIqQIhAMZjNo5azkvLYMx12yfBkFN5fmLKfve5mauZCvHsoYCpKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwlwX%2FatUEmewCTlWsq3AOJRvX2SIjw3LDT0dU7GZ8j2Dzud8LE7C3c2Y7wdynUyTTlx0qoh6llRVuVmb7jDmH%2BoHT%2BAEk6lFzYKwI6Ite2pApdzB2wlaOIO02xKnQHzBJzmgDKZa2nJak1ojiGglV9wkWWI7ac4DpcGhQmzLq9mewNYTCacXv8VKMKNyA4iHioWMCtWKrolYrAuH9Wa2MNQYQMtgcGM9wt5mpieXLcHwAxS%2Fa25eK4%2BqALOh%2F4q0wUaldzdLL93kNU5N8TO4mB%2BYaae4nuLkaw2D%2F4O68KzUU38afdo1B66iry7LMcm5jAkBP8sIGlbkR16OloGMbedFfZO0OIbsPR37iO%2BAQJtCrA2UuB2eqT2rIlGu%2BhM1AWXkgvDMTmDL2P0VIfCGcS9WIoh%2FnPSLbVirxM8obvkRlob6hDVcIuEb2A%2BkhBWYgRanlJqL3DyYP6D%2BcJVA39zzxXM1ZMqdS80INxTvS6QJXFYmoHfwmRY7EMgPUh0heFOmP4vBU9iJnDHTX3innSwCDITDAVZPlIUNNs5dbEsGg5WOiEs8JmGUguUf2Cg631nX5zHtAhYOJhu%2BN8g1S1%2F6uHK9KzldHrxKL8VOlj0y3P7%2FyGnOtPG86526CafDi3br%2F16weMPHR6GzCtmq%2FBBjqkAdocevLCwcpU6q%2F1nIzglTe%2F4Mc8HDDGflTGIL8%2FVmRb7Pv5Na%2BKPvjb5%2FwCV4p%2FWlg6twpy2IBS3iBUBRRVM8il9XBNYBEj9Blyu16T%2BlrhBmZ8bVPPxQoJZskPx9xcjDeyTOr9yyh%2BSSp3qiR74fTEryY7GFJ2YOXf3dS22OqAzWSX0agtl0AIS5kPuhEHGjd3FCBJmzS9EIVg3G4bcvOeTL0H&X-Amz-Signature=d0b4b428ae018b5d44a462158afd498b52207755430f3fae3e3488b21f82e7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
