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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623F6HBZD%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T150825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCY6MuDAXCz%2FIlEfU3PV75lsEgNXcHqqsKF4Qk6JgcJvwIhANqTRr%2FfGlpWYDgHMxJCrYkpj5HrJld3WuXTJ9ov3efzKogECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxPguBAoXCHcf1rYHsq3AOHyl5zR4E%2B0o9R5CgQkh6KGTddZFrkaRn%2B3W76MSyCOlRRTbndFdzaHUob4EBJRifaHoC9TeyRN1hNwXSgU%2FwbaJKpuq0jsWAr%2BzaIxemDazR0vi6YfpfvTXXguA%2BZGye2Rc8p8%2BSP7VCSSJwiP1chePr3sGzJe8DurYsR%2F%2BXnI3DJ7PnBBHAPhHQRjazCHQbC2ZcQx870sj6uGL8RhWrniidVXSRUeAP44L8Q5vpn3oJ6%2Fro9VVMwQXA7UnBDhZmYPq%2BMm7P%2Fqlbr9Fm7qHeKmpWfqUg8GeBqYYI0bA0L24fBA6PQJ%2BDenOXHsJljwgr3CPfnhGBHFkqNcs7L7vFoARInekCgBPWEj8oVzjS0GvfP25wHTLLFlJBddI5IoTQKvB1Sf6%2FIRIaZ2R0GTtyrtYRkrem%2FotjrqUf7NURSDD3%2B%2Fm1f8Cn4zHgkdOIkuARNA53eUM7kH4j0JLrRIjcaYDBOdtdFkmq5azgbVwEfOf2lWq8FuTo4Nh8WHkFxLTZISm9BqgV949fXo%2B3ywVefVTEVTrBcenvitSam%2FNPzBZFi5K%2BfUpUianIb9ZbN8Y%2FHAJi0AI0KULVXAnTLAUjGl1ADhH%2B8%2FjvmPdPQH6I1thO01ksaCvtxIIFoiTDZ%2BNy9BjqkAXGZtgjAQkoi9mJ84l2R16RXGDusIxxq3sUM%2Bldhe83dJHFjMt6VSOZBFJIgPk%2FE24LTY7n6B4F9tEwN%2FvPfXYp3CrroC53gph7TZyTlPw3reFznRgJWz3apXowt3kZ8ug3MS6GbaxLiM4%2Fl%2BSh6byZf83evd1UHXSprS%2F6K3JY5NXy60jz8fe8p14lbEz4EvZFqu%2Bbmjv1Qud1kbLSPBw0%2F%2B1yn&X-Amz-Signature=97bbce906f4756607c10d456f34d97a30abd36ea2e9aec5d166aee90bedc2e74&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
