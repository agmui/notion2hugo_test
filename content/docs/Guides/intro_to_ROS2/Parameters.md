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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNBT4ML2%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHar2VeLVpsbACiMuPEkb71mtpGJ406dWlO56JmaWr6rAiA4KkR0J7MM3R44pvJW3owW%2FUrebPOi4O6bkgvzHoF2zSqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbtNmwW1gIJNhmoODKtwDh9h2AVSI7%2Fe20gYiE6JOZteOXZ1JngEag2RGVrMFSmSw5PajS333Z7XJwdL6mwgCT%2FtOJntcg28GD5Bh7pABqnZ0L4Pb3qRptyr%2FVETizRW%2FJ1oPz2jELgfcaJ%2F7uh%2BoOI2ZXjYRG%2Fu%2BPo%2BNpFJEJx%2FrAullixYdcUV1bf%2Fucl8H23IB8pe8usPxiPALE92BQ5XFpnTtKK7wY8q6z22qXiz3UEAZ86Rp9DMc4aiG9rAYVuOnTTN98ag2bFDzVCGF75%2BImRxXIKLhZOz70cnpjbQUxbg5qiXl7Yz9xsduHwphBCFE9gHDaxHPL%2FnPcKOHnR91jPKrAuDDzzl5jP3S%2BiftzSIZV6vjkkFsKaAceuhZIVanytj705tPTWSJ63wjJKBfOuEWpGLAVYn1BGB%2BqlvCEKVy%2FbBgD6PGpbGj0LnxzDIcRDTFPQ1MCkKpz5LbpLEdTaSWyTjsbbarheLW0JLWA%2FkuLhOtallvuG%2FWZ6PAb%2BG4Eqd9UUdnnOfAxbvXvlL5cIPBpzvYFQXEtet%2BbIBQQn9Qz%2Fdb00xXxGumbfwXa%2F%2FiyQvjvKgPQnfim6B6L5AOHh9f72kD8Tr3w1k4L7KZ%2FPyVC9ZgfWeTE%2FhxWmLQbQLgycUIevvVkDQwxYXvvgY6pgEN5qdJBBR7KdutgkhY5QbXlr3j1llFF7KhAAGqBa2Vu6EI8ApISxVQqxhuzQNHL0JkUW8gWnkz43E1NKwIjwKuH4nKx6Zk0rXyeatlxdY1zELC8%2Bp7bC7DFIQBW4E6%2F5R3685PzIk7LvTWibjx0uP6q4M0ZIWG7AXZ6h6wSXsp39buQWLBeXDBNMys%2FlTSjG40lJecuGvHlw9jq6fu7n7Xt21orBKK&X-Amz-Signature=16dbe477236001ba96590abe71af77d8ca9e84727d36736c8695bf99febd75c3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
