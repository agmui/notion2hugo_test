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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3EKP26Y%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T190250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQDMXFp0%2BqFT4vyvc5xDnI6o3StHYuae2Okyf2XuqXtNSwIhAPlZfBT8msadaECv0MUE%2BKqH6Z4N8u6oWIDVFNiAFmZ1Kv8DCGMQABoMNjM3NDIzMTgzODA1Igzy2l1NiOlrCqGrcgEq3ANdC%2BWNYOOHG15NO5dFO8Hr87rmhbMzIf3Epq8DOEC2TuTQNuI86GVJULFTN9wyA6ANvL7qJYKa%2F4UOCXAgrmU0eDIj0NQelGuEpExwv1k0oGVKm1uN7rPdJQ8mrep29%2FW1DkDlMiPoIJ97HzI0ECNlClxFs6TbjCo6zqUuHt%2FM36dlBFfVji4zFJxKY%2F271R4anZm7R9Hugp6dkB4zgtu4ZKvilTwtgqm%2Fnb28eNu7CLjtvZRZ8ah%2Fv2afoG2dA7vHk0LWQCfH3dtJxX0GTMJQI50gNRHRWhuJTsGmLA9uhpf1gwCY8oC01%2BWohmLC78yVOQsUKXLNzzbLuxIJrWaVSSUGLJ4VPKJ3BC5wYzc1PAgMRzkG9pkVm45wV2qx1lCB%2BnTAQq%2FkOJuXQr4BH8ypCMtk8SSUGuEfvhVBg8zD4TKyDWuXF1oCKrxUftm1iIANLB8ThIf7m1MoUm6OJF4fTjCTTN0FRzf6y9SFtA9Jl4r%2BM5pshKuTlWJcZOx7k%2BoCLBKzawHufOv7MUfvtg31ZexIXzzc8qjjR15TNVAOWO2H%2BRvMX341jEPTD1YTxPpM6EWp1Eqjpv5mq822MgyRFVcaeRUM5XpiIwS11UviF3Catsv%2Fjjijy0xN8DCv9KrDBjqkAZXVviR%2BSTvQSqBf93GqbjrnMsPatzRAjS0X8Nup6c3gNL4y2WrpVlzsRwABQIJ7WjBTjzGbuzbt7Vf7%2FSr3%2BgMdyYvafU7%2FpDW6JJw5Y227Vt1vg3gwXLa3diHcMfpnRT6DkHcyCXQYcoxrCQvW1EVpcYbgEmh9rRGXjsRyf5YsMbDKlmgw2TnGpT5URxH8ixt%2Fj6aWqZL%2BV6rFuDb1ZOMUNqml&X-Amz-Signature=5c56cc88912a16c8dbf01a1b0e3c3280f0d9fd6c8b799bfd95cbb7a226d9abfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
