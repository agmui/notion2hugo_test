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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TYASEUR%2F20251007%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251007T012326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDsBEAYqZuo1QCHytbPsj1K7KX6MW4szBwBhwFW%2FETaYwIhALYu%2Bxk%2Bab4dxQMQYzeG2YzeBm%2FhPICYBfEUVodntPJeKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FFNaVBmgiYSgwwhEq3ANsS69X11GTUotdHcn4%2Fy5RvMWOoSAMSfr5yAqgTz7VH0AUb72Cbo36lYDhJt%2BsH%2Bv9fhr1qcfQdMFka9yyc9Oz7i6%2FKXLwpYzKijBWnJPxivKb3ojtA%2FP8DxGxnIC1G2BsSWhoKFEpQ4jx6C2Yqw%2FaaVmuQWVjrHx6RRFpfRjeWsOHZ6DMe2lY5lmbyKH7dKkycF3JE%2FQAdDSzGO7eZ8S6%2BAp7mXiDXDurOmGLVc6ZNlAkzncf4tu2Ov%2FeT6gb1GSFHaM%2BEeTaQmemT%2BaF%2FZzxRWJ63PVcijoUXpzmyfXJaxSPLLW0NkgbDToeUmY5kgHb3zMc2Nf6GS6Ydc6OavthECdbjrET59%2BNQ2XRDWaIIrni4u%2B%2BgBzJxigFdQgIh6ay4e5c%2BN6S2BkwvhFDrVGFdMwTSE0WiBVlDGzb7hpoxwXSSeuDb55KBCeMNzzoEgyysYX0RFxrbaqu7OFVKYNNtafGIoKFUezV2WzdOdUMcsfAdWA05Uj0E5AUtbS4kZ%2FuZ%2BuY57yAhRQQFu7O44anScSFau7KdOPG8rqI%2BWtKLyBwkUnchBVSXqQff8shRNBEceTcVD%2BVoidfxLmLJhxI8%2F7lS7vpJTgTI2iWSd8grwO5Ipu82k7Ew2t1nDCVyZHHBjqkAXkNiwqzWGOqF3K8u17J%2Bx%2B85eOVh0DJm4kIbGu9kXE0oS1i%2B2kELOosRDIVYgJHWG%2Fx8kb806pVfo9xslXZzerGRgmg5AZw5BA0EZrGX2dSNqHlhsCGPs%2FrbCbtfhmUwidXVh%2BycVJ9xRefFyyA6IxQwYV10egUu22wZcoVL3Ae0iv8z2cOxmlz%2BHyMZZZ86t7PXpiH4N05wcwhUx6PfY1%2F5G6D&X-Amz-Signature=57c9b5424517e09650bb6f233e7440bab5ffedc1962675a33f3afbf1201a2f8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
