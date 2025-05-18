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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5HFCCV%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T061148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDcUNi9LivduCrhw97NDdOPrjI8JU1FxutbdrRzURVqiAiBO2U8KK2oMJ3N2CZDP8Je2yeYrLT0dtZrkFva%2FRzHD5ir%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMBrsEiYtmUzT9IK%2BZKtwDhqDAhZD%2B6fnyi7fvGHtLgt%2Bm1EXTkjx07LWdBTh%2BQMopj82d%2FqAjho2npof9y9LiCc1rHmZe5QK25Hq5kj8qozplT4%2FuJdWC%2FsyBpx3NJaai0yNjU1WDwATcc4MrrKHpqfOv8YOBiIKhP590j3r5x680VY0eqFvV1OZemG7rKbWUnEJ45KMkk8STIWp8Xk5xJGBQxwEwUilgYSa5QcJ8LQ9kb9DQFrB6L2jz95WfasWK6zig6S4BNrf9R%2FaaQiiZyJ1lzd%2F0tIxGms7vfh05eAAjgXMW4SAQmiqNYzyZMfZ3qsDvdidnk4iAwK7VuDJXXJqZQWeuDDNVE07LxPyojVKd9oi3nT9cBZkIvt0YZXFc7Sx0YJALUVVCdsb8rbSWzQR0r6R4o1U2xU7wEDvou8IJ9JVjnjd5voTMRx%2FLWs4Kx65B3qOWjn%2FsPRsVUMBfkldRzKGmAe05sBUDFW%2BZIn67loTJbH4nZLOh0QO0w%2FjXC71hCQGeh0KHGjyVLhHOh9PV7v%2BfRgwuRe%2BoJ7S20wRuw9Ue9%2FG57ABNJ2e%2BibPFogn2JU1CAWpfEGLaMQeuFtHSitEdafVoKIDFxNXBtJyNEM78xxhGnNRS4dA2NZP4Mi%2BwZBvEJbRPcaAwytekwQY6pgF39BjNta2jhVZasJEf%2FT1v6v6qJxy45QaQv%2Bn8qI5zs5g4ylbCoKlrZzK%2BuEAMLxXXHj6lQ7JWJTDet1OEYjf0i41JidQ4SwUlv98UDiDfsjIb3fVdMO%2FHIDZFHJ9OZz8UcpKdZaX%2BAu0PsSBY0uKRDwjd4hbfLviYlkN6fxADYxM9w%2BG2s%2Bc%2FluIh8DeQayrnBzwrMBaBzao2PUbEv4P%2FO7lFrqVU&X-Amz-Signature=69b55463fb0bb805d8673413c8f2b1a0cdcaaa8b2771096c2938c3083476850a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
