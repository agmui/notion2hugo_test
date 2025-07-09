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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644E7DOI4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T110846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDlR9nonHjtp5OUJufMcKytbrOlbSS%2BQWx4qsK8kWKWCgIgZlFzclCqPxM%2BcFNee3tYFVMvaMNz6iY62Ngxn%2Fb0nzQqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcGaZljfKWGwpTmAyrcA6b9fA5F8AGSN1aUpa1ZKWFflrns%2FF5N9LiJitqEtnz1Xeao2Gju3rhMqKhSlG6e4fz8EWSQwxvy%2FYrS5mkRvKjytQkF3Syp%2BpQACM8aRX4Zyhgz1Zd8oZpFedNqisPYKuZKUC99XJDF6EjAOKQ6szGLPq5qXnBQrt56ZsxjAO5%2F78AOMn2w8H6E9q10gCU3MsrKvWRkALxm82PBEmBx7oDeanBxQlhfP3MGt%2BeQHVyOmYBg5j7y8Tlwcm9Py0W7ELA3nRr5cJN0ODxMVCRYklnCCi4Z66zpSbqcI3Uep9s4%2BbXzSzgRk%2FYgAx8j0bT211QGHABwYB%2FWguuBSFIGRUCVnU31YOZBirMCdO7y50w9iEoqZyiPhFBz9PXB9BusV3pkiGMkbKKclNgmuneCO%2BKTPrK8BgTPb5JeNwEEnoLF3Z8LlMMcZWvMzKEtc5kbGYGl8C%2BEy8ekmJPmlNu4fRj6xXTl4CM%2FdTh86RWkz0zsavHUs69d8CM22yeFvzLmuP9XjAbUwJ%2BVJV2sJA33CjLJ6d%2BoMckNyZG3meUo6wzbGiI%2FrvcuONvvE2WjcLQzFHXO%2FTlx33P3xscRbThNdfy7gaXXpPGN8yCjG2K0qGdvERjnAgwSCiakpI04MI6LucMGOqUB8r5FEOnQIGwtSFCmJsn7Xkr5vrtgkwrQEAXpJChkct4sD3COIyZO3WLyEQ1bSaMdwkAFaQCYpw08FEFPfLvPHX%2BwH90cEBiZ94YCFE7Rjbrmzj0kLaHg2iQUCQdeubRu8lqUZ39Qz431eSPmWgROaQ5jwsVMvk2qoR2R0OGIcOG6x4zlTNrgVD0KaWck7YvNqpbCiQ1ZS08JiehaSiJ%2B5ieeB0iY&X-Amz-Signature=5a6586cf8406958c685f8aad99708fd59f9ac05c3a86f218ba9d2c2dff6748a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
