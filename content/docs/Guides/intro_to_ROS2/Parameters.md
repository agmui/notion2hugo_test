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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6YWBURC%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHtaCeL%2Fo76tNntZnc184k6lsj%2FSU3Pm%2BgWzk5MIKP7RAiEA5z4%2BUxBGe5L4CBb1u9u8Lrq3rGUe1zGaJ%2FN%2FObHPn7EqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGDCXCLv%2FW1Fl4kivircA2bIJVzzWvWhwF4Fh%2FH1s6NUik8TevbtlTa%2Fy9Vv4jzUjAu78OsvSzrms71WNUXxT6f%2BPhwupnaM3dQVHNO9cQW0Xn%2B%2FaYki4bjp91XPNdqI2n858efR0HjAar%2Fca13ro7zhwh6vk93o6B2coh7%2Fhio4mzkknqHPUo9dk1KJd%2FSTUCbwZRAOl3px72CFDe7F5dDLu2QwW9agoYDgUXNTA6MpbMo1VkL2O%2BjIp%2F%2B6AwNlE91KrA2HUcYoRs9M9kPQ%2F47PxH8IByHohL%2FbR%2FTR3sK%2FcyKPZrCkqI9O%2B6%2FF81kb5hP12IEEDFPSXd9l0ISpG%2FXRsMXBkKDMgdt9xuWjx%2B8dAv0b3qMFIU4n60kNnQMmOH3zxOi8lbIG%2F%2B6Oln3T%2FTVFi3nEHoCKinjWNlmf1NRLr5KQkVI0PRfITGl2lJEbTXJ%2BFZ7osfR4a6MLhih4MfI6BW6l%2Faj%2FUy%2FaxpIT8H2XaZZklAyPslgVM9BQBokjO7RAbvH%2BQeJCjzQq1p9vbGcQTdbI%2BAQBQT%2FGNnhe8QDRzUkI3lahX0Epw0LilPO7y6Kyk1XGUevAjUlUIEVkrhopydDnRYxniN2gu6pK%2BxPAyh7H2xOHWFLTGG6O1VFvvUIDPMwxPlyhngYPMP7Uw8MGOqUB7Ht6NxHucVOMInRONq9jSofEhOOCwQGZMSHdHs7vqeqe8hy4%2FHqBrTh%2BmrkkWVsis4z1OVfpzFmrRPgkrN5AsT2IvAA39h%2FoVv425KwzZCc936x6WtXDklvrf23H8HCxzXoXgDKbJkMU9M7pTlmIpBbVWtOYJ%2BHWfgLu9Eq9xM7PyjfUG2Q5KuwXjyLNfaPo2xlobP5MINxFBz%2FQVTWhIyAA21fY&X-Amz-Signature=96cd5df4c596a4ba310b44b2c0633f2ea86e68473bf82fd91ab9002169ec2218&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
