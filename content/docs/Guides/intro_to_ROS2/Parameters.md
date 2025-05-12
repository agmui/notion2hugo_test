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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM2QNBK5%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIFrN%2BOQkoaFDiT%2F2sbWCI7oR0TZ34dxxVtHvkUP%2B%2BwdiAiEAyFZ%2BQKd3HQqsElGly8zUNJA%2BLcX029HugFIUgJtay8gqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHaZp4kbRFCVXN%2FdcircA30FMVBhU8QrB9pS7z3%2Brcfpm2Uzj9BMazJhojvP2DcSrJ9ff1zxMsZ%2FHQYSz4u7Wp0g9gtFu1XFBTg8Sr4bYqLe53yYwZCirpaV%2BiN%2BnZ2pkrFETgdygaUVtHwG2h2KTDMuwcbkdq2RvtPFSe92%2FZCG7oN4X1COSwUQBPIfTxNy1VJ7b50jgaSeAv%2BX35Kv5vYVnEDTeQwFkbKDYasA7bRRqHR49yDWEkQw6FJd4%2FPfYNmqtFw7%2BNfxG%2B1bQZyb4NxulHRY%2FuyB0c9q1RPWUTXXgpKQrR2qTlH25Rs48PYhpMj6GNVVacghQq%2F1LvBuUPRjLNRRrp34vC6lPoBAip7SHt93kS%2F08o8SktjdXWq8ZjT8i2HFoRYAaJgBdEzv%2FZnWUB5AOjLDk24AZgj8S%2FrcP3m5s8s7uK2skDS1GXXnkhp8I1bNxMzRBtpn9W9LDjqRQvnYFTbff%2Bdw2USw5enkt9pY59f8uc65dOk4raG4qdJK1%2BGdVP1pZtm9iuw%2BS9pkX%2BaYuf99z4IPttTngqwt99LQIRGz1J3Z05rTrz0VgOZHqJ5%2B9nrX5fGY7GICWmNXvrFu26RP1BMexvhg7VYLNXgpUB%2FqjEBISy5%2FTTt%2BjU5OVlR6069VJ%2BszMLeCh8EGOqUBdWWISFKXY0D7RysSDhk3mwZAPR4xnqKRpdRJBM6B6WC3uBXiaX%2BiZ8qxctovxzH8MMoM9xMzHxG1Hufk79S07%2BQaEag4L4WNJm%2Bn3a0oYeOifQxeyZJWS7fqa3dMDjkw6ROF8b6MDzcxr2B7pfqPoPFVt2p42SC7C4feoXZHMotFpRslejtVok4s8xzUU8QeEhSLVm9kVOi7QBm3w1QBYrD7fuVY&X-Amz-Signature=4aefa55f30da39fa8716631dd03bce075d7ce531a3b9e0c8b09f6072085896fe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
