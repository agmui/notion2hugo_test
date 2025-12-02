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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNAKQPG%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T014137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQD4Xj%2Bbm%2BFjgIDnnnBLt1TFhbhox57TLBztReskv92JMAIhANUqO%2FtYd2enhgv8zUU1uV6%2Bsxi9370J62Zfh9YH1k4TKv8DCAkQABoMNjM3NDIzMTgzODA1IgzCsChQO0ngnA%2FV38oq3AN%2BadV3Exqz%2BGh8AYHghHFnutZeLBEoGAVcUyWzTtLWXzdQv8TNz6CJCtK%2F1WR9aQaUA3zZCAVpiHwha8tDun05IWBHjO%2FYhylMTPkOgRtlGtIHZ5HnFyOwsEgp1khMMF0V39EBALUIXHlNSaGbr5iBCgIW%2BbXAzsTBUg00xaDjBMcFdYnwX564vyfWgQgwkszqlB4x%2FtvGCu1M6yqx6zn%2FN2JJCgUtPZXJ5irAV2g3p1ZMwB0gR95DRqA3RtZqFCoNcjdX0j2525KU%2BbwhCvNZO8d%2BmwqMFbO0DM6BSLT%2FD%2B6hOd9fCVMyAaeT14ycg9IUlM%2FI3IL2ILeaFgOcZOdnmBfrUOURh4o%2FjsH8%2Bz75KCJfs0Tq5sBbfvlZyk%2BoRFqY3RkcA0gHuYNrvHAUwYXHtBQVVD3GB8dfS2FVyyNYN02jz%2BnJWnqiwMGZmqWiHWEwWJ%2BpnMOSeZDU2grJ2EcD6DAwPhduow%2Bur2UXVgpNhRPOsy0uAU5x6ZPMOEBvFnQ5H6PeKf7ESEzItAy6YI1TrDmEmkwmsl6yIBH1RvaG%2ByHfc0MBeNJqprc9lkbtgRb6ArbGZALxrfeAJu0k5nQHM6ICzvBxExs8EIE5ONH7flrbtlYU%2BsFpLMxHVTDl37jJBjqkAWm5owG0jnDPACbYBIM6djDDL%2FvFMcpNKjcS3UrC4qCtgxnaGo04YBIyKZChUDRwC03SSokzyODPFRiJnCJnzTSn6t39CCR6M7xEFuBR9D%2BKSlK87bKRzqnl4wYjT2kXvBj99bSOvMMI6xn89q9R5R84sGMaLRhP0cwrtV7OX%2BUH4lmUv3oN7ayr%2FDgc7DnLeloYIOL5u%2BUw0bG8eU0a0NvVbC4V&X-Amz-Signature=b10ad08e6c4f66a33399c03c804ee8c4e107edefa5802a5f9103002ff619a40d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
