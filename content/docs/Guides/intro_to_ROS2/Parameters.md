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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQUH5BA%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T080954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIC19IGtMKauE4qSc6ewAxBvam3FLXA%2BhxnEQomd8xk%2FlAiASUeJoMjh55hx8Ie3ZI%2BKyaS2h%2BfOdlhx30bBW0%2BcHTCqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvycCxccxCrYCK5WxKtwDdrSl%2BTtft2%2BtQCumDhGSvurR1RG0KkXVnZYSvZPLs3n5qNkuchAxDsLcgvAdIiH6%2FA8brEAZ4g4UJ0m6u9Rbs9dclzYsXPIJek%2FsDxkTA2SGDWl4hnOCDmKuLprJUGoKOcl4ne%2B2oFxsqPsFKisorm%2BpBLkm6Vcf0tJJyV6aFh5tl0tVoB2689Wkct8gwwibiSdrmT6TKyfm4Q5ZlY%2FyjjHK1U%2FgV75TVS%2BwDedom%2FYmCtHJz0lKv38iVBwNa3PjLAy8pN%2FBoCUZeUnFJAWa%2Bb0A4oXUwFdb0Kvne7P3o1Sgu%2BpjTCvNXVvDbW%2Fq7Grm6DTzT5yW1255f81ada9PQH81ZTHO1KE4A221V%2FS75luqO6ULWVzYRnF8vgGMcF153ajjDabrN4m7rzcpQZMgz%2B1jwAiEufG7A0b85A79XIYGP8hjLX4CMjP%2F%2Fyt5L3lO2ZbCyVjcny3z2iI5PyhOk2hsW7rPwFrgfo98BnJbOmxTXz%2B6kHUD0fZOMjXiQgYfaNpC3D86XjMlM%2FjZ6kN1NId4R25iRbk1%2FxJ2hf9G3OTFxJIMnoz8i6anakd0CyzjGSJt2GbTx%2BvjAyhqvhFqXiU3R929y24KdlmL1NDH%2B1Qvzbx75kRwg6n6oCgwm6fovwY6pgGtWyJCFbqPx1OtjVPQRwkDijj8RUD8UK0Abp6fbsM5fjDwG6YFFUWVEdWb3pjbuiaSvus7YagRuWKwMXtM6KB4Qt%2BwI7E60dmO5bR5NoW6ojqQEKxcvM%2BneLyZ3zFDb6Bn9MiY9Zb%2Bfvpeeedpdmabnu6hppRVJ67ARMaUltgfco045BprPiOH0imHlMOyBfxpc5aUiSPtXozhigXCvLfMaXtQnhSN&X-Amz-Signature=618f491175d9e4a032aa80984df5c0d665e7930fb4b3f7b5c00b7ebb7cdad387&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
