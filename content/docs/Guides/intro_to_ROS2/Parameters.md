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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVREMKW%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsMJyA8VlIpksxIN1Dtli3Wj9MI0r5%2BihNY6eNsbjvRwIhAM%2F%2B%2F1u3ExtAUR49phb9R1b%2B%2BCUlFAXuqKrRsCefT0fSKv8DCDEQABoMNjM3NDIzMTgzODA1IgxeU2Tl8P5li0vOdhgq3AOhAY5iETzX6yRkVtwWU7MPuL6t1B5oqKpPVTGDJQlBSbgr8SRpPuBUjKsqc5Sdy%2BOiE6uxA8nTpijQRGtG0N2iA6lK9Pozg6h%2BS55MnFB5pbzVrW1rGrDXj15kNjU5II%2FSh1a0jRhFCMS1nYFsHFLteHNiuRl%2FffIjD%2BCZU22mrKCDm37JTa8A2UueeSeCR5pcHYZ7cwfkeB1RGdsLdhAoDqS9odlyL7sItY1d1Kbxm8O0yxCI%2FKI9zSej1yoP9yVTmLaPkLyY6wCn9eJpaq3VNF%2BSuWrf59gmSW%2FE5jUpTgvQg1FoA06KTu144v9sKtVtj7nSPjPTmCealHEGc%2F0IHUslStnyuroOBRXFGPKH2wL3n%2FcFW4uPlzkr9iMPXu0YNbq57t5Ze7Ca%2F7Qg5tCgTE5D2v%2F1jheMob7VtkDeqQSxBivfGLbbU%2BB6eVyBhfviowOLCoGq1T%2BfAkLD%2F%2FI682GCBWaMUm%2BvsH%2Fv0DbSGeFVit0v3LK3TLpuQlZ6%2FjeV0lJrJKD9DBZoczse%2B3xocSCSrqgp2jxjX4j8fZZZRq9XM0CkLCScH8OjU%2FpRGe52v9SVV3hvbBc2HQnLwcXYEyrsC1xBpq3C4GKxMQF2B0k4Tuz%2Bv3dgjcl7MjCspcW%2FBjqkAWchSpsx%2Ber0xAS%2FRltHqmtgq2uNjmoqewBm58vCXoSLkfzwzz8KNXx0U%2BwPbqYwdqDOhPGygfTnlOMWobtOHkrNxHmhaj3qqe%2F5qRILGkoughF%2BZShQjfN1zXmPu6HG%2BAS77nS03z%2F1f02qFvJSfN%2FVuvZeK5P6Wa17tESbss39NYlQIMnbPR2voP2klVzPX%2FqiCOlQtPlLyUsfZBLSTRVbxbCj&X-Amz-Signature=151b54750085dacbfb87a45a2a97b48c623f8b56799c1fe9573fd354f392335a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
