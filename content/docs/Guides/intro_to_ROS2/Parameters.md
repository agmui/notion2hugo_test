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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TWVLD6S%2F20250315%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250315T031629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEXun7WGhEGc3qVhatRVoZl6UTapn0zfeizeoy4aocJgIgbm7Q6oezCVEfTFNW%2BMgLozGTuFi9cEHFzzuxwJtiDPsqiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP6K75JakR9wt8dB2ircAy%2BaivTvXYbKoAL%2BOB49bZaDSN62779mW%2B436DheEwJO7IoNc2D%2FxVsZoqMm2bo7smqKioXIG2jW5XHEOqDiJ4pty0sk%2BhMg%2FfskHbUz4nTXaUB%2FKnuJ3pQpB%2Bfc9M4UlA7eiWzudWAIhA%2FEMa%2FkThfYMWrTp6PLsi3SWgm2d3aRvLcLs9dWPnF7WgEUM1wxeiLlmoqahqm1ysep1kHS73I45UY51M89nIxi0LPkpDdMjLRv9YmddmyXgJrUP9WZw6Oc3awuz3iliGNGr9v8zu0KHN%2Fr64RaEeUcOIFf%2BsFDw2uGwSgza20vGfc4%2FeG%2BkGZTCP1VHY2UovzaJUkr24vz1%2BikcmO03u6roWtx2d1HL9ofP5l%2BTwwKqOpw5gT%2ByIPqWufv3HMttXPIrZ22t4Jjnn63EuOIEKjELw3Tognu18u%2FTVQMr3JU41R99ndmRCWCFsyncS7Zize1G68jPsz5o3ow0gJJkPuWfvNEDXnZt6EVZR7x9EDz%2BUr3Ut8YPBsxg1Z6fYvmmzURRnqxSUb6XGVl1ehFFx45M2JIXNXxug2bpBWkLtvdYAZGJBPKsv62%2F5VxR5%2BTI%2FUdHoZCEOhl4pTVwjIOUtvWWBspUZs43e83Z%2FgiWbFnnjFyMJ%2FL074GOqUB5vKDvhDcNQ8izZaA5qv9KzWLBS%2BMqxcAzmDmg6tnbqN831VI%2BljDynpPyBkKCbkCd64yfW%2F7sVfOqO6LfhHTVMBCSuQP761v6Rmlfym8QUJed0DCtOUSsREiO5Fj%2Fn6cg7%2BrYkV6GG2Lf0crBCxuDgfyGR%2FgV33I7cqMANVtfQ7EY3ukHjjFXsMR9Nn2s5p%2F1RddlfGXe%2BclzT9LSPpqvyU2muTJ&X-Amz-Signature=7be3c4e1a6165ecb5368ec8ab73f5e4af20c76c247033eb1a9b3d5270787d1b9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
