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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMI3CDE3%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIAW27fMPvFiZtc2PERzsGZUHoY6ZBoANy0%2FGwdCoHTpGAiEAr%2F5JWylej4C6wQBgMryHnBz1U6fWgWiHkAc97Kx2fWYqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAAY6zN1ei2Bjg66AyrcA2SGZlzRS2z4BH5pDl4wrER%2BwNXVrRWPmloG0hHzsQHoi%2BtlB0BJGKL0Q4uwsr%2Fby1zykR0aKBfeLuom6t%2BtFA90kS7pZwj98cajhxtU%2BKJTlI6k7s8rFcs4Yzzh1sNrr8hN%2BivCqIx0%2B2%2BO5KijKfPb3CKmbBp7gSUaDUhUH%2Fi1PqMwE2kilhEmVtPOk3jsFMa7cnJ7Bn6%2B6JmrP%2FvjVeNNPHVHbjUJ3EZbPFj8DoMn1Ng0CT%2F3AX8QTfW3Z%2BB2rhSsLSL4H6qOPYWL%2BFLtvz3NndbpqkbIL3wnLWP65eBA4wdAt7LstN2DqQ9vJ7whOuagYRV%2BJ%2FeheDBwI5AOHOCoBwR4AC4oJ%2B5fCT%2BfhSwX27EbksCw3iGj%2BObv5UlfVQg62UvwOxIGu9cF3TzJD2Lo71kJ4D913ATvXuZLrsQARqp9iWKYbLkotnn1OWbRDFJ%2FNwzYrkrrO4I1JfpOI9xV8n8Bod9SCkkKqJAKVIo%2FkLjfI7ZEvUxBzBEbRzGGegmD%2FFrIkWfeqJ8eBjgaECSyw51b0NmTdJZEOaCGEopA8VLm09cHTNi5%2BMk0LCGVboVZ80HWt7fx0GqS4xmwbTxN0DeJ7047jjfFwWGQ968ebGJ5w8ayWvrq5bgbMJr71r0GOqUBI4aokHX%2BwjQwBTY6he4IJVv3HWiNQ4boulq5hXlArRnLAAgrfHXZaEKwAlwNsgiKmN2XqVsvAzhHqvkYywu8FonzZ67LZYvX9tSU8ZPrgUa7xELyLYOWqIHO8%2Bn6lLrZkJDk9imxMRhyseh2VzOYq9k%2FkZAlD58qBEgoYM9%2FH8Ceh7n2VtT0GLhH4kwT4n2ox3DOnF0jfrQliGo4akRJJSXddY3B&X-Amz-Signature=af0545cddfb0e08b34abbaf791fd8b771b55c5e06d34424b3640d2f7e7b952f7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
