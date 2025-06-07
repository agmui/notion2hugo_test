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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWR3YOWP%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T004202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRnuYPfz7YEvfMj9tOJkMARirIedAEvBuWe0JjF9v%2B0AIhAOsr9WxmDlGIbR8vmmV%2Fqq0O2pmEHWmv%2BA2EvfuBuHBJKv8DCGkQABoMNjM3NDIzMTgzODA1IgxsqXrmhYUcHts3L2wq3ANDLW9OesQc%2BKwiV3KdJnA7984m8h02VqkeTom3QPCoBFCohpeyHENFUjRL%2F%2Bh7KEe%2BGheG40IvEctXpsGa%2Fd6Uah3SgD0TgNDDS%2BNW88HX%2Bp4o4%2F%2Ff7srfHNETecMliNCsNUWe8alznhEJbZkNZjPAKiwfL11Uw2jBTvlogstKj7SZCM11Xx42m%2F0NWc90AGdFT46oKak8a0L8VgL0SqcTibrUS5immIA8KwgElLKmM%2FA66CRpgMop41oI%2Bmlxr5ulijZw%2FQWjfShpnKObq0wqS7%2Bn44GnFMHik6tfI%2BTUzWihccpdGG31ZWTsyESBqEealjPgiuO725lxsDhPSf16kJcutgqNy0mcMJnapCXz8V4TTPdnrnSp5RbBYpq3HBwksBHUKN9qEeNFgWjFfWkfjNLsVkTOamdwhTM4692O%2BdugezubkBc4PO7zRcm0%2B2kuipg5OJI2wyUW2f149xywozJTtqzEG2henaVjfJ%2BxjkT75GgcrjsnyZl0mneh4CwoZEk%2FbDLkxZ41PhE%2FkRDUO1G0jBbylv6G%2FDMMkeQIaTZoLhIETqh1C8FP0rBBB%2B%2BQAkvzBxAWB7YA9NUbPi3pMbxMW5L9MULh6T860y6deoMuRluFakkdwz61SDCbiY7CBjqkASeoV4ZqpoQMo%2BIAoTbDdGXZ5kDyAP1Z%2BaXpQWIyAYbHHJexlWcx%2Bf7ssOGDklX4%2BxFGU7hWXfrw3b9avOSZj4d0wfyVBURXJcnbl18DW4VlXT274l9EfHh4ZZRI7jHtvQ3a16mZ0QMzKtOPv%2F90oXqzMCoi%2BC5lKwTQFR%2FVtv0v2cqUKlyPxblJ1zeCB2U4a8AcYa7zBNUIJJmwILDFMy%2Fl3T7d&X-Amz-Signature=c212f14377323180c97137bb9a1dc2aaae47aada5460c5bdc9b937577e940d6e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
