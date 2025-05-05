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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QMHLGQ3%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T121532Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCd3dDt0JozHiy07OuwgaozL3M5hgn9hsY0ozy%2BXGimUwIhANNTLwXt177ODeH%2FDSEuYrlyLbrUApOPr3NVMm9LXQiMKv8DCC0QABoMNjM3NDIzMTgzODA1IgxpVhRX4Ni7BUDxwyQq3AMVa6KOFECCCgvXQvrxvZSbdp%2Fc6skwbdOiGGnY6JQXM8pTv42QobULkCzZCYN33KISrfE0VgVLvvQQ9QX%2Fq32LPdesLnVxauEbJmkPaInz012iR64RKDWNbXnHc3Hg%2B%2Bwd0TCoMT%2ByDV3%2BQy42BykvWEmHm4pukCbOFk7oC5Dp6z0ApW0WKj2DZ4clGvIn02SnldeSmHR5JG7jIFxREjs5mxApOJmMyVU5%2FnqdH4Lq1Tf%2BaXzIAFPhsh9tknmLQxL%2BrKyiJUybXKa%2BgrXXbgqVUCUKHo1jJzTVZLvPGARpWjr5asZ%2BfUczY2AuAewMZFNwPtVPHa04uFYgJg8lnf%2Fce%2BQb0z%2BTv30T5zql4ana%2Bl5nkCNI8PrW3D3cibcR3WFgeQ%2FcSO0RNkuh8gjj5sK8uFBBaZeo76HCLOhLbeNqkwitbHmvqnBehT%2FoJ8dmAEnIAKHXhfKbexI8P7qicNlPVur3zG57WODMSVfr6z0TfYOv%2FzIOFRYM1h7r0aCOTOXR1bJhEOpHK9GkOSmBXFC0tNPzQMuBqrKi3J%2Bb9F3%2FRh6%2B8olGZCnhRVasIk8PeeTJm3Wbw37lutR6FM4lpFxLliI3IioAYJZ0fGYcxKlEcfmConzKfLjEiZykvzDNzeLABjqkAXxvxUb5P6Ets4uSPj%2FlrBYcPQbR9vFytSNj9noHSP9bwNj8yu8rrqsrfSpAB6kXpCg%2BDZctQ29SU8nCF3X7njT9lUsJGkkSaF6EEq6WdBuKYxPlWJtKXew2pai4ChgU2cQxUop%2FaNcUSvuHQ6WHkHu4oA2giftkmQBGNH2SchvMlxYyxd8Tyf0lAKyCy0aiGB3kZ%2Bv85PtPDXlE%2BwKom6AhYJvl&X-Amz-Signature=ea536a1a1823b47ba7c59bdc83a8d440b3040908a9b89a7a4ca5271217c64dea&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
