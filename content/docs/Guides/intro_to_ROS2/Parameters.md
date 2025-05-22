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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJGO6V2Q%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T110818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCS%2F5EFPOS1wm854UD504QybEymMVEDAPyh%2BXj%2FDZ3MAwIgNNqdFQA8ktZZSM669r%2FquVfRCLYw3Uqm%2F4odYJiXboUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwOReFlAEK7kxIH4CrcA%2BNvxXDuqW6eSDIaPtpkWv9OiRH47RZoIo6mb1L7TzVx5lmzOMdRccD8x4tXVbAJMcc2vzfK6GG4OIjB9iRNx28O5J%2FEJx1PG03Pp80XqBFeSt99PFEMxfk5a88nqUJgUrF7SV7Xdn0XlqZrZknvchL1PlZb7m794UyFccBKIn%2BX58Xjv0DPGZgtMHiIzd8rcjQ%2Bl4Y7kzo6iG%2BfZeBZqNlRlurpJaBs5a9qRu%2Fn2kQK8q1UlYy2SCmV60oqEVaBLE%2BG21w57wyfDNdMiZfloa4RyHVxO35RENe2gUrSFZZTJOMGVPyTZKF%2FoCJQGUl4elJPSrf8lmvpDiq%2BmgMHNqIYzLNBbGv%2FSz29%2BbLIRPK4l2FAWJFFWqUotSFuVKgPu6QWelE3te3cfP2OvzB5wvCJ%2BB1DZR%2Bqm98EnXTT4UUMuig1zqllI7xubzuiJReXVsz2xaXZhJieK6%2FJIf2FAvpVGqYZy2YHjNHY1kB2GimYb%2FqCNBT15hLiAodkVcmKHc%2FlcJWMayyCbEL6b%2FPe9vl4wv6TBL5iNr1K0zFui1VPMkl3rYL87iObciiGxxct9zsoRG4wa8uFUPxLbmauymsp04%2BLdU1DQy8BXR6%2F1QH8rLiyaCdqfilBMtX1MLb6u8EGOqUBHGR3a6UJUiG9QeCHKqcY5Dt2upRmBnumhKq6Edrt8KR6HwJlFfUPFuPS0EibnZ0fWqHJdI7Yl7vlMpgFsyIX3PRw6Azh6iCNoTUb8xBhuYoPxdHToOR9YHpuf9fVnpiJj98ewi4O0wbAzsZbbFCetn7GyOucNTVzddS3ACnyXEHV8MxIbSCoGtA4uNCGX%2F1W0m0XMysoYoaEBneRhs%2B2WflrvNWF&X-Amz-Signature=01a9a8c9e981aa92ca4af6874650e9706b32adb4995187694b69b07353d1f7ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
