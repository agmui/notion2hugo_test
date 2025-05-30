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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJNE2CT7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T181156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8flG2MEcxQRZgkn87z%2FYxZasf47C2hZePUeD7ixQisgIhAMxEQdo%2Bok6lhDLcBV%2BPWRFSKs%2BAWHXq9vcm4%2FKpyoH9KogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrkT34hKP7YvOydK4q3AMpV8OcmAho2emOGGE25Q%2FoQRHjRIPoR%2F9DjoZwT7cT2uGLGAwo%2FXy9Ulkby4goOb3w5yQ6VDArlvNVEVrVBIfPouxe8fBZGk6m37Taf9PRJMYccSWFBs2rbDt8ctJ01mxJKKWNn1rYn0cQ%2BktzjRuB8sj4WmsQMVS2xNRrOKnkC9NH24%2BJvsLpb8c0n5Uv8A50VZL5e1S7uPmnIKRlA3q0UhmvZb6CKz4C6dMtKGvhZpONSUJLd677j4sdZA9bV4VLmBlELzXd5rV4CwAKJ0cix7bJxKVcbBWpOsboXN4oD8iZsLrn7V5lIUpLXam4Fkh%2FWm2niY2%2BdmnKT%2B2kZ5BaAN5gcupbu9DdQGlpUVzIWWueYJPk5ARXMtAqUead3hbbgSnPiZP0P3CJTGNxMtVWxPAPZ9TwoBX%2FsIbH0ZXhOv%2Fr1xmrThStsv2FT06qGOu1q4c%2B0mOs6Cx48xGwJQaP6rDNk1CvJEjRParRLpwpRAASInVpFHkkkf6KZtZcqoxy3VjSU0Zq%2FEQ0rL0d4siILas%2FIJxOkpTQbI8cJ0SAn5CulcHo4e9p6mtoZeK%2BexL1S3MBs7sWS7Oq0bWSpZ7fAutEwp9xKI73TrMm39pTw6mq1RNETdwUFVvtdDDW1OfBBjqkAYiVpcwGhA0xerd64d7FnY5ZF4gGraNd%2Fc8s9VxgKNI9gDBtUAXimpKFAa1v2doQD2D5eerANSA2ZCcTRdcCCqTtu2bCi9hEH1HxjBvuZ3pVZwuuUUMVGxQBvSL3GcXDrdlkW0qTxNTx%2FDHSwdSr%2BB9K7V7yyBM59LEuTVc5bHL6TJbB8iW8QSPeAMP3fQPR5%2FTiBIqTuhsUWBJA4%2Bv2tjzVrmFE&X-Amz-Signature=d191186affab1df9407a33e2d95f3a33547e47a7a3b295ea6b2126e14fac1310&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
