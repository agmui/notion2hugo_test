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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QL6Y5GUW%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T071021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQChMUQO4VNnbfP8JygpoHSD%2BSfcZf2oFMeD4qXRl6cHjwIgEkQy%2FGIaBW0god%2FtWWt2aRrHLtorLxPruhwpBPMiTc0q%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDLPpLjTLSC4qIhOT5CrcA1Gl7JuLVGX4R7L4m%2BHfqbdQED1S0izEzV0tSkPSrtCZFwCxo%2B6o9mbY1wLV4YkyccWTIfLMV7qX1tqGu3vFykqgK0JPj7KCX2KUI2ijyxQXyutVDkIQ8QPwOp7gaKRUF3R10yfa0i17Z%2ByAeT0egWY2kA4PT9daSX5sw72sJ5lWyFTYy1zTPjp132lVmYdxNehBKUPCA3bopTny0BeQLA3xiUfFnnmdDxO1GbWCU3JmhcEAtZN%2BDQqXeu8aix5CzphVm0pEaHudzKuVcQBXHNQjI5FO0%2FKydSJ8Q5LNZ74vzljfhrQ3Rml4SY5zmTZtTj3DBQzzGzaIRCAsS%2FJK%2FW1tUYz9fNdYluTrONPSDtwDHVIKnB9Hn%2FRaa0%2Ba6ovPRsizUSNvmAvma2ysPX13JBdZ%2F%2Fw55BGQPCeeI64dvEbfXH328WcJCC5dfT755XG7scrAnVtYOaZmfTIMZDFxXE5ZHMAN%2Bqh%2Bo7otQUE1r5DwzUDFnb7CEjJNOyIGzkHhDeAwbv6FCZcnxktcRGZ8QFF7%2FyfMYPu0T%2Bxh4a96sdv%2F9TZBo%2BLKAIGVHP8SEyKyr2wrEw64FD4VNLKSmxjydweS2WtwU9%2FTR4MbSgh75zqg2vZFbKM%2FIyfLsX2qMPGTu8QGOqUB1H9sIpWfXNQADCVUy3m3RZZyjSDXBvveIj%2FZ23ORd62HhYUh%2BaZY%2BeyFkCEXW22b3sXi6lym7NiJGeVHIJEU8Z4ffoOU8bmQ8uqgMYbqmWxv9smWv9dSdu6t6iw0TD4cXYsRfUzaapDF8tig5watUhvcclTg6bl4fpu3zrNKPkB8wRe0%2B%2F6zvkATzlnLK0FseJUoPuOEb9qZWO2dlsJ5YYWVSLQm&X-Amz-Signature=dcc636aba246248dea48f11a8886710943f629ca21c93a532827940dd885824b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
