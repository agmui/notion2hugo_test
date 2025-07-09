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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665AXNHWK%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2B14SBE58EWObh087q1dJGm9lZhPZE18UxMulralNXCAiAQW2LNhy1DofdHIDMxw2FWzFjjLrFJNKrnxUnry34K8CqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMu4nqZyFyIP3fXfXPKtwDTfJsAa6GhAb6TgZvaF7mpFhLQ8WiZwdFtLoDcR8opG9U4ldmTYbdJNZgu%2BKQC238kUcJZT3lvnkPrvC7pGB%2BTwYRhCBUqj2h1yItH74afeZVhDw56cuPeIxwmQQR%2F0oHDobnUuc%2BnVRuCGGcPclqTkUdmnKJlQLwXN6azBpF0sdycGBvSo2yWEvO%2FBkaTrBxiIh8og%2BeEe6X%2B5l8SdMUqK%2FvdXmmNEXTV9ms4JtC8sAF08Jq7xJf9cvt7C3Do2m1smkXtH2qG9pWMzrRiKwIxXmduaxdRpPVmXNDDugDUhP9XYBEYMiaLqFs0IqL3HSTtW7u2NCHwnqWuUUyvqT3obUUPeqG60mZUdvzjw%2FGyi821tGOc5GXnzVoPRrtJT2w1NHmLBiELMEcdoo3amvLCm4JAjCk%2FoaUnjb0%2Bhlb2%2B82leblWrsZ8PpH6e%2Bx0N%2FT1rHQxBRx%2Bl%2BnCqxyf2wB%2BN90OyQXFv0rs9N9CLV8kAhjOX1UxYIH2mnSHWENFGI0OLb02h1PQ6u%2BCEA%2F0QUAs2ZJP6ENUny8vOJUeA0GS7mzQISBzr292WcqHpdNpjmF9FhYILT2BVjeBbS%2BejAZD7TQZU66BtQGZYgm770m9EKvXIS2PaoV%2BZ%2B74O8w84q5wwY6pgF7gtcxRcCwN67D4GvtrDp%2FC%2BjduFAZPoKRcKsr6ad7OkxIuORlsZv8xc%2FjniItqKIuKNkAv2jwieFewWittfsJDOG%2FIHfgGVcqGG9ZKLfNn9H0WiLK%2FZvfBjxjClDR%2Fx1Y%2B1KfxMz9fq710Muy9DZII1sDawM98lhd6KXZanq4WzrynS6UUKhpUBiIzaTJpouHZpVsMri3VAfyvrY1o6dL6L4ym1Gn&X-Amz-Signature=5777c347547664950770a745277b83cde713d0364807c308f70d5d649977a4c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
