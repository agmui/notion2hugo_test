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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YKLTFVY%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T050904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQCA%2FVSb3B6DgSyek7Uln5%2F4XSkGPd5UVdxJwVpkUoxLkQIhAJpQy8YOb%2Bgt7MwAjDzsMsTeiEy%2BagXdVnd67VE92EN5KogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw2496525sI2NAqPccq3AMLH1rVlfzoDIAeKTZmbqME0z0QdwVjC6bSVKZZHVAckjUzLsvsjsEd3wXJzNlB4tPB5%2BkMXgYtvifsgyeIIBnkGaCwRrKDgVyKwFuwOXOOEAg2hr1JS2UP2hA8BbZuVDr3YoLNE8X0%2B9GRO3tkrIjLV%2BqoKppPYsXXHlDRZ%2FVd8%2FI56YUQ%2FJzStJkVGA74jILTiCs28H5xP0FR6N9fl%2BFeUUwAI6%2FMPYXTRl%2FIJ%2FSRvvvlToTp0a%2BkXauRZXq46eM5lguPBBRNFAjFc89NZi%2BU74Mibws0AHkGrtmR5b3uVlRgQi4ayMr2YO%2FcKyZVV2dU4CwFugr05h6EczVt76uNfcxNMwYukTIarsNErZZoKMVeCSmlawhDdan7sgREZQqKbUmjbaEFzFnli21L7P%2Bq4peVZUyvnGxsEIpenAi2cDYWED2nvoIFYWitWIP%2FK4gk2A%2FhRl%2Fd8rsrUcXGEf8r%2FmeZCebTWPk321Lz%2FwKJ4edwWN%2FFjHBF8FFlloPZ%2F0pWfWsgmlUiiLyXQNLMy2a6I4xACdxT8sMe7XsobPRrRGmh9dgngMkFbLqp7rGDHxy%2Bbcmu1FXLhrAbTD0fOD4U8rLPa%2Fh45PKQL75wmNoEUhGUv2jD2pMcNRo0oTD4w%2BK%2FBjqkAd3o6JwwhQM9gpv9WZxz0Y9fdnWgVWTzPCMdTcAAyeYM9iVQQ3WMSePRy5MS13KQWT8adeHE1zzqEL8ZSvJTBx6E42%2FQMY4ZuHWRUm0W6udSPnzjyutoWgxYCna7PVzx3xYz0YhtArW85Zt2Iij%2BReNVLJKl86J4ohIRATfZLijWVcJkhN2lqGjZNMkHfeGg2sHrO3DMI8MtKL2f0N1b2pJhmjBF&X-Amz-Signature=7aef62947dd538b1a4235896ee5b31860a9cf516abdf6334823b88208114fb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
