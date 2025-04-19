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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDK7NTXN%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD06PyZcPBT5bTH4TfxobctGtGUhSjyfmZ0DEtpQjm4ogIhAKd2r4bO3Fcraxgx0UFzBoEdxNAERVpu8Rjn7fq19twpKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzsi6kVy9lrNV8o1ZQq3AOPKP1KmHY7nzcrI0qmI2NntQqA0q3zgbv4srG54JpB1zp%2Byx854LgS%2BJeS9W5RYmk2xUa8xiAhlC3xFsS6YsHMpj04wjZXlj1fEmkIChkVxUHyBqV2%2BwzNcTROnsQJ%2FGHXQ3oO3mWzeZRBHunaMXye%2BYX3nbI8dGnY4UQRw3WK5ZN3lolu4TLqMSxrhqcdfGkAjtCO41dxua1AlXo3IyIDGTSV90iQ0sRt6WwQBpeiG8aZJSojE4Fx6U7woRtvqz3qXt6O1XOwgUpy5NPs6WQaZ3SOULE%2F3sECtfG9OduWhgZB0Kx8hMndSKng%2BpS3cGjvsZTSpfUqjefdMF4nvYQs%2BqMwE5dJvdBqZKmAbzBtJEJGwIo7%2FRZajyxpkPQAoCe8IolBvqMgaHaiaWp31M1sCTEIiSF%2BlKsxV%2FIrmX3vFvD4TBDfm99ESO9yS53IJzY5qFyq8FM4YwD2b0bBzIJ3JS9r34K7R5wvSxmhosC7tPfDW0sh49zaFue5PJtIxiTrkoC2DDwnep2m5mEicnSvmpS4PQwK%2Bv%2FOLTou52tFhsIJ%2BwBZcs4RYw58kZkfJtdE8i%2BMJ5r0PXKEyOgGL2qElaDOj2RZvHDoh7sb6da6aGJ4j8LlUbn8Idc%2FojCx%2FIzABjqkAZqx1j9W%2BtktlZ0etE2XlX0OuaxPX3Oym5LaUaLutm%2BWbNpGm6PdYjIBUKaUrewYnGFmPzBc6cinMOIxMI8nVAspMLPDkPGA8q%2Bd9SJvrFMBCd85ZpsLfXMDHN9w6CxlUdxZ4ywydad1SIihBohbJPBEEZCWQrczUu7t0V9%2BCfrYFrqaUVC4s6yxGFCuzWIxytVHjTsfILR%2FCe%2F0LXK87ksZE%2B%2Bh&X-Amz-Signature=7354aaa8b2c5718967ee5a124d10eb77d9432cf29570e9a5d9169fbc8fda7967&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
