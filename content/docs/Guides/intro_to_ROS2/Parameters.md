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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPUV5JB4%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T230747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQCdjuWtdYLX596FzMouG1xZg9YeP2wx3D4GVvWfyDlcgQIhAKgfGh%2FQquINGE66aKTz7msizAPEjdxIPHStTIy3gd%2FMKv8DCGgQABoMNjM3NDIzMTgzODA1IgxHdrGAYNv9Z6rTky0q3APDlYtakv%2BLsgLy2pEdYsEXFRxoCMICLR2lZ9Lp3Za6%2FXfCeoMgQMAp4eVXOXDXvQRa3Qj0kkoirRnNPAPyBcBceGXjn9Ql0CL1uipPJ%2BXV2pWIjsNhnjo929WtrI6YexqtsIMybThmOD068TW%2F7oKYMoBlrzYTZceptk%2Fx8zONEzTEaKzVlvCGQMx1A5d9gnQq5q4iEpcp4KwCzrTkjLxZ%2FIWmjKFQs2rSnYrrqvJ9XQT9zQ%2BYsMQ2yAoObp1p1Wb0zNfyTvi5LzSzPh8I3BDEp0NsXTNei8xrEyLv7UXR9CmaSsfmzWeFxh%2FKZ91ZW4rq06CeOhWa%2BkwnIk1EUmmH%2FhS8428M2qi5MPHSulNcQ8ow9tVg3OVQXLZVg%2BE6VgzDPpfg0LziBDtrTcI5pKJ86r%2Fp3WAzm98zyApmG8ZqUMlgPg%2FLySCjR6V34YZ3h8Cvz5Q6cR7jfeUm4QBcl8z03pTgEkCVIGp%2B0e24ky6278HFFeymYylchyxwc4GEtPl1MvW5ETA5R50BOXOxEX5IfurZGKwk0wxXhnFkvS5Cq9MqsYVlpjxz073m6NxtsSCFO6g4wkIUnDgSCFWUpw4iCINCvYiNZu%2FffsmfvnAFAD1z5poIFvcGg1HX9jDFu%2F69BjqkAV438tjgGlqvmJhGmGbTp472PE2nWQDv9h7cEYi1mYqhXCVLbdzntyNY5BfyGtuEdiaK6%2BRC4uc%2FFo9l2xJ5oExNMgH61ESVcPyKJ4dwTSUqoJPnnGtjSoH21wwFMjJWDnnGJgIt5NgsNct2ChbNIF%2B1%2Bac9fn4ra6kJmc7odLl2ZH0RcHtoDuun8VzxJD4fHwe99vJIj0MT9cP1%2F5ZxqKsaHVG8&X-Amz-Signature=50a6c45957fa820072f0492f935e1af671a66ced23ab5fab646dd1d834de2745&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
