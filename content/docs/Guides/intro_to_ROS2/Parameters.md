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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAA372SZ%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T190249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0da4ULkmR4xFgSfQlh2bfW8MWr28BRGmWaIZ8JjuM8QIgaBuwJ7HcfR4%2FF2N%2BGNtzZO2VGqv3E6bmK0MZYROxKjkq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDERDwKfcSgBUpCyIBCrcA65S5amETTyCJFw1j5wvu32rxRHS6Tvm2HSa88ScwSl3QbDqC3B0OSNQYIrE1whWQdsj%2F6qgXmK7wH2I0aB18o0Gj3nfVDFCbYNRq5hgO20jOaoq%2FbzwBxu%2BiNvO1KEycMlQZm1pWdMgy%2FV6LV%2BlKRI5MzG8I%2Flm7xAySHJkD3Tgc1kYeNSKOGOMWFDsc%2BWBkt%2F6jGJtJBhgB5RzUHWhcAKDaeQFHperrTp%2FvLOJr4SD9cp5z9y%2BiLskI91GAVUqzsDtoQfKlg%2BXjF8jq1KCJvNmu2jEV9TJ4RGoDeLY7axLO7uYG6c13E%2FmbEXgTv8lGhZydOLLVugL6ApzdSLGLRD0NdZi0CPadQxWoAgF7rKijeLXXdQy7kFUQoHqODGW1fnez%2B7hVpHHrn93nsPCbjgIKC3J7hpcPCa9F4GcGhCORBh22yxAvsvdF%2F9HX5Vf%2BEXW0QCKNG0u%2Bz4WTYKyaOU9XXRmCh5AHfq71h22w%2BpTCWMHn8MA6hh6KkBoo7TEVhkqoNZVrYkCEZ0kSfGxnEqVlaH92onzu0yc%2BAUk%2BIQ5T0bn2tFDdp7%2F8I53b%2F1iAo3scxeGtRLDKE3wT%2BFeo0KsvvhrWwWwL%2B9jQv%2FyTtVqptGzr0wsuBPmkCgUMMej0L8GOqUBcfltUpnKid%2F8hlqJ6Qk8wBxgwcrzl7T1t5T7hMcaNDVyffLeUBMV8KgMWKLYIK34jJDOrlRGtu9BVUSBfv290gVkfS0%2B10SMRnCbzjc2G7Y1dI2R2jcwg%2FJdpulp7aPr92X%2B0v%2B9LDbdz7aGvTevPMNC6%2FAzKVjnsp0RtJ%2FZ0Q4Ut7vf%2F%2BmczkJzH4yWuaa7ErhvegS7xZoDwKtvImOP5PTBvl3B&X-Amz-Signature=bc2e08fd092293066c21a01e1be1a89fdcd8ec551961b4d08bd82dfa74074d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
