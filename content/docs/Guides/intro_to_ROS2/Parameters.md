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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HF25FBM%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIGFo47llpvjvvp8EOGHAuc5GmoSMJ276UamLwKCAHCWJAiEAkF4Ag%2FuF5%2BUxmRQESfwozAb09XR%2B9QdocuqhMvCO8AIqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmWNxnFspWVjEDpWircA5HE2d6ywET1EcdwrsH8Pl5ijn0GAV77BpwIwfsytixKbPHnyX3l%2FFjgohd%2BEZvEgdR47VfToE9HPT2xTNfKCoEaKk3u1R3Bgm0wt%2FUTO6G35KJ9R2fefAzBmrqTRxi6dfmNA4ubcZihqwWTlbJKaBbiLrHRoIPW08naK6G%2F0r1waxZhPi%2FD6sA6Rjcvsn8Gu7Z9kgc2aF76s7V0G8jqj9aJPPUVg%2FoyqWEqp%2B%2BGUQ7ISJ2%2F12dRSYGXiB%2BheE%2B54vSQyvWOkvo8wktWiJFesUVk7zT%2BFAwmcyQdzPwoBf2CZd6w7iXVtaokV0NKYPPdlJUS7MmHVZwAid6uMlLKVuIxyOwH5HHsr5GjRVZbUryyIUO8ThNLly0VAmTHdgShtNvUWs1%2BTCiLX9hz6dHLuk9A8GnJGjYF42i%2BAsjdZs6B6xmbm94Rliup7rG6fEcBYcA2eNafw89u6X6K1G3Zb5k%2BRw6Ex%2Fm%2FfyaN8xVRAaGV4SzeGyd8XLZ0sUdKkvhWxiHjjjaCcRz%2ByZKZFEoML2yFlRNAJxVKNvGun%2B8nql2FM4b1LhU3pBY3wEtOjrfCRSU%2FObq2G%2FskaYsJ7lf4F%2B7sr%2F%2BaNL77J2Zxr21rxJO3ymcGG996v2MMLjyLMM7alcAGOqUBRdzxOUm6IucYRZhDSq76kAdHkLliU4PIkaBv9GbgmvvgpCtoFg2OGsvuYC%2B3tWl7ujPkQXEkUVPIVLDwD08OkUd3tN7nGd2maTytjtv3qz0XqUeGKBrPTm3a%2FlPkUDZtISoXvw7GarvY5h1w3B7zwI5dBmYsWLTKKy1ceYQTrOlF2brhumHZtU%2BLRdpYQ97x%2FUgzbaQVe0D0M27YqXchNq6sGz5F&X-Amz-Signature=2f5333300b6b7e0f3f41368e634423f4ac6404b493638dbe2f7c6d37bedd5800&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
