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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VE3HTJWN%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T022401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2t5G3eWnRTNo6AT92QE7EIcV5OGoIpg%2Bh1Ttb2AK1HQIhAKxezBOC%2BxQ2T5%2BB8lwGNWMNGjzK8BZOWt%2BNdMJglFGAKv8DCFMQABoMNjM3NDIzMTgzODA1Igz3jjDqQCR3XpJz7r8q3ANUYBY2b2M%2B3cVteU1b7LdNIS3p%2FR8Ra9PqywKuTkEd4Rmg0TUTrTtNrttF5zfWcJPIrWQNyGaDs7AVc8qnPf%2FzvUYTp6LyCb17wFgiPSdZpoC1w343oIMCWXhgFt7ELXTQxQ2rFqXZ%2FkE0nkYB9Yr7adjBE%2B0l4ruBumAeWiWxjbXBzx6ZN2Zrk%2Fva%2Bhs3FPszw%2FYdIGIbygNzK9SJuQAwcHd3PU%2FDzbKPpQlPNU2dJ3AllibM090iqMDPPDlbtOiiiO4YuqEhY2pL900lVkf2r%2FoJbbCzgBe1dSliY4GwyV6JIAHkOKhgGYRL929iG6FDxlwFc6Ja6v2tC6S4lHq%2FOHBeixwJNq1bt%2Fcw45ObaXLw14JfNpVwY991xB0fMkce4Ez1trFJv4qMI8gHx86Wvua9EA2AuarklByGS0okO0mTxtzync5PnqYOhll4rw5xXhwD0W4WmoqO6I3Kxv3yjDRV7SUZjsM6oChrWLJgy%2FowtGgrYgA6OTtxg4TdbZrqnyU7dr8eyafA3oJASlwG39hJbpo9ZcHaSbwo4gc8K7ZgWYKA8e8lswbglYB5BHi01DXpl9dPuh06COjrbvbX2%2FHgLtsTfiJRIlmBKDx8eOCdAE1I0ebvqvmgWTCn3J%2FBBjqkAb9pYeX%2B%2BsFTLik%2B9n59QcPVCZaD3%2BxFUWSfTEOnA6%2BB2FNII0vzdcRNSKnim1kkAB8eTJGwchz92DYrkHkdRyWAVkkirF%2FH1CxggoQaESL5ZoZO9EvxEc5vgOO5q6icVZt4AvEnoe6r9oGGekPrlI1OkVO6yeP3yRaB%2Fq8lHQcUKhH6u72M%2BMivCO9VwGP9S0SV0bWUvLuvzhKnSQ5vNysMIXx5&X-Amz-Signature=d998618edd8d6e9caa0b91c8769ec87069ed53e8c634edc51457b09cd683ab9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
