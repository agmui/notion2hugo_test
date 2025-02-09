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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNCICJX3%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGsW5EQmOWPzERq3kxn6TiVAl5Kxuj1mLP2hqtCRFbMQAiBtG50k%2Fy%2FZyCFYVCojXlplNGZLRRb4W1Tta%2FhrhfWgqSqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzn2IJ6lekZ5Iw%2FnuKtwDtFjMKqsFqkVr9HibszsvYoiIjVn3zrOOMCMg5qtVGYh%2F04EBO9MHOfguoVfE%2F9rR7W2YU1lM4ZuO442kAg%2FA78hOV8xzxtC3zpyP3Dfu4OJCPDC5qEs%2Bpm8BSLqUqUMC11L%2Bano%2F%2BiLQRafgijahm%2FK69QNPCMgAxyd%2FW8fQ6qzf8r5GbMUb1fJEdyk4x1LoQYRz9iL6b5p7MIWNO6Ume1kd3t65U%2FcjMZmgcw6OTby%2Bs5T5a4zFqlHmgaaHrwIH0LKOHWQKuPt3n55cm3MbjGNTYdXpdyS9AEKjvH6X%2BiZyk%2BnLbfRBCNmQF0WDjxi5ESUcj33ZDC3GZJu6xCMa2hfm9tRLpl0V4%2FQy7hSfvOvZO7HEu0fkyA2hwAISCx7eM2EZtZi57Sql22kGHTnaOyt7ZuQcs6myfMRmFAMvxDHlfF1LxTJSoDOH3%2FyEmvP5Ble2ixiJrmX447iAntEfUorH%2B9WFRTfolipkz5QW7Q9CU8abBkav%2F5Sj2fSYFKhcO86OKwp1Wg6uq1Qbdyc24N3%2F3peGEy0rgfbQVf6cuEUqfVITpZaJh%2Bw3ZZzur59halcKTFq%2BxJWAYUZHQ%2F7Xwvwp8A2K0hdvBcfaUNgBELuckcCARBcefkDF4wow2%2BOhvQY6pgEDt8doYOmPhKp%2Ft9zFaeV8qMRfYuC5GmVQOT8t9ApVKL1dCKcXCgAPFNYizuQuwlmv%2Fnma%2BPuZaPFKqmHQfeoebmQ%2BgHR9kth7AOU2ta1FPB9aANJQP7YIsF34TyfAugagHj8SqbDJ4bvFr%2F06E55HKRGnsTrcOR7OMFU6jZ4Pwp%2FMcAvj3Y%2FX48m5g5zjMZeaRjxwEBz9PWkxcT1erP6uCGFUnGom&X-Amz-Signature=b52b8b157541347f7b947a4c7314d57423df5795babe64e753f344d3c8a2ffc0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
