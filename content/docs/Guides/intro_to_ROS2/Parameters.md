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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YQOVEIIW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2FViy0vmUonHfvl3nPePJsN1lJgrM%2BkeqqVR3FAxkCKwIgCcgADK%2BNATcY75AHwGaQNYuU78jN6QRaCMv74iDApcYqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEzzYrGU7UecEYDdSrcAwW2EkOT3pIV6V6PIQxPwiHDCyiyZ3ln4vt6wQ4KA%2FeGt9krmck69JCGvLmczHth3jztqPxfCAgRikB3XwSRy7hvUSUUJo6S7rzE%2BWsQJqawtlfMr2VR2IfIxmS9WE4HDA4i5p543zWjh%2BqCgr08rSU8issPShbtB%2BkjKmHrQZJevHxkhSr4bQcH7O6m5CDamF3hKLYi%2F0JW%2Fq75dLNnls8aJLQRdeLgVq%2BogoWL3Qyy6NfK24XMTReXFKiek6jazkD4Xx0ZLlguRHXD8PAycB3FJ%2FEu8rAwL27ggCuUlVXy29D3H%2FJAGdTLKZeOLbU0KUYq3OaPHAtMo5gTGcLGc%2B%2B%2By3mPgvyosUQyM3I1Cv0I6v0xlm0Lsh%2BPUouo%2FySMu3xf2AHqaSxrs9UQtEElA80b1TigH0uq8rHggacBNlVJ1fLUwYk21tIu6G4vkd6WEzdwjUqcUvTXUvm6nD3LrbyijVd6BcxqXQ3TQkSquLy9OkGPIBXjik6YwFNSyPJ%2B9FoSq4xtP%2BgPNdXQKiT3RgyA%2FRlYkNl9b%2FvJI5xuLNibkCo%2BMi%2BmvxxyC2n0J%2FoX1jVCi%2FKz2k0j33re3hyRGwNLNrpTbMDeI0OJKQaYrdgW5gB7W9qpONY7VeuwMP%2FEu8MGOqUBEg3rzq2Y9raatY8hrmiXyr2MoODsUWBA1JtQ1ZiwmKJ82Nwf7iCQIK4reB%2FMUR09atNspeb1AV1Gsc6lYZgAh5mf%2BLgK5TAMiZv68RlNuZIetChqsz5yUfYgotEwqiQycaCzwdnCJ6LL5%2BpBYvPpczVqDNv0p8IVViral0OdreeEm8mfWKDgd7qqcrB%2Fea2qKGyLUu1Y0dJM6Rp2qIk0LPMGVTIg&X-Amz-Signature=81c9e1bceb3cdffe14761cceb208e5658564d9e6ca40413b60eb88e5709bb087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
