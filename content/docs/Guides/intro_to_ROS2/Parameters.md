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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YVIXMK2%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T220726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJIMEYCIQDs%2Bect234kM7IsVnbWYwyxu1a8B4iwvAm8BD7WKl2jLwIhAPQfPCPn503BJ%2BK3D0huNyACeOS3ECHmW3cALQoyXg%2BsKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzNxj9kiCo3LZNHI2cq3AMcem%2BlekRjMCxnAV7vFQKJgdiMy%2F%2FJgnlmA6j2Wz%2FRk%2FHo2buZNAaOql5q7FETUuqHh69yQMfaggelHYPi8TrnuADDxyZFLkSXVo8sXhFXaXGLr6OPOjqS%2FiKVz%2FXY%2BBpXKAXqvWCrqunaRlMRS3xz%2F2mChNZctHOn%2BA6HpnbnRFBBatVy6PUfdTQd8zOGq39EO0S2Aepe1INzBTpbiU%2FPDI7GY1US6Ccb7%2FIBrdnjdLkIsJfvOO1tWaYt7%2F8lebKyZKa0y5sWOtF5APbWqWKPbLpXc%2FKS5hhpg4XiILiJnuf6snOFTh%2FwdYcmppMSAZbPHUuY6AE8C7P0RrXyqKMMFmlLWm1VvTRQS%2FL4FsNBQEM%2BlSHnTQ9vgFCGAC%2FWWg9gcfVklbV%2FDbx8jicNqXOQhGlE81DtsWNZHDCHL7MwbzdhHJNXebbTXceV667FjjJ33CUOkbuB4mzECw9AV6yMOwZpCDIvVskNj%2B2fOQrgdpHceaBgHn3pt9Cb%2FaSAOli%2BvZW8xtCqXmG0djqw3%2BSbqiIvcWb8TuBW5lq1lePC83UPCZcTnPjyZ0FmfSVY1rCQAu%2BDUE%2FAltyGKm2A318zlFBEdCWZSrKoBx2DUbpq9yIrvtAuVFhPAUONIzCm0sK%2BBjqkASDx5KP%2FwpyBlHfqLUY1eNCM730wxNCoV6mHNoQg99wNGZRtdom%2Fg8E070oPYP7mTYPg0UDGYU7QS3L1oaPc8hBYuw0t0I%2BRV%2BjNAQei%2BsEgMuYUhh4RTt0iP9R0T42ShC4LPbxf%2BsUGHjxj%2FUC3zcoEGWfUcUFpq7oOPMOQ%2FjD9f4TmNwVHw2dPv017ouRH3hwvJcL0io%2FpQHJhsA1G5Yjfo9yL&X-Amz-Signature=c9a021ca36261f4b04ec60a35d469707ca152cf67aa27f62e4cb86a20a583a26&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
