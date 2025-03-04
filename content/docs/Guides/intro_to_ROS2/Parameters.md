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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQA2WCLZ%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T121432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIET8CVT2kww6DgAi2K%2BvxI2WI4yu06MTBUhZ7iet3%2FF%2FAiAqAompZ7a0vVZLJqDlmt09RyCOW7Q7bghaEHLa9fdpKyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIAYkbnO26k0eVCTTKtwDhEONPkm22DSWjk8qImbVktz%2FpnnjxMmEx7Z%2F3pDZ1v7qlEO8eqhzYVCH6rz%2FUDholUfv%2B672hyMBykFQ%2Fw2JrrzBQz89msBMpOurbB4aKk7sIf3hfttY0iAg0lWyhAoJTIkI9W0F2glBPAwOlGy2ngKKSzVoKWnZZ8TG6ZvUpTs3CFlEYRoxg7yGjVkrGynDTB1s6775x%2B%2FG3xYctoqgqw86ra2m1vksVA9tnKBjspkNZLo1%2B8fhcUa2ETeb7cYGbTNT8%2BlBhIvyiuc46Qhm3gNEJD6PiwcMu%2BE1oCdZfhtCLld1a%2BxiLZWI7BWjWZcZGXe94u%2F6%2Bz%2BKmNwMXTfTvMF%2Fw7pCCD2x1GBr%2F6WJOw8SPmTrdzxah%2FdlEGH%2B%2Bcm4HMAvPN69D6VFC0z%2BjAvSOgueF5PkH%2FR8KYcZLObWLIQRmatlS03FvBeNzmN8pC%2B6eP%2FWyEKGLiXzj8Ltv2f1KEFt2Yw1xdlTqYCrT9oLc%2F9%2BfvOm3qZnLFttLZiX%2B1zGFDJv%2BpJbGCpYZcpXOnap%2FdANYQrpvnAxzAiyh%2B3n0d4RpX%2BPV3tQugFVt3%2FuWysZUCZApvhca541IPgOBJP5MJq3RbzX1CgnETmhXobRQQ2wSYTJ91Xr0MNBEu4wpMabvgY6pgEEyRN5Vcdjbmj1EzmFshqyo2M%2F%2BTV0dP7OJfX7ZZ6wBu7Nf8mz4bbBsslCcS5CNRwHY8UI5DUaBbaW94slEoOOJyrIX3U2jgpC88bRS%2BaWS1pi4%2F%2FA1drb5O4qkjFtfZ0xQONkLL%2BFUYXb33hGBSXv%2F0aEmYwLbahjPfD7tY7XmwwFG7KMDic1Z6FA5yb4in1SsbSNLoRseFkNUEW4FeDhHr4sZSqz&X-Amz-Signature=c852f7da29efad990ffffcd7df0426fffc91d116ec31c40076e74ea8b0fc16df&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
