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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXZFNLVO%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T101031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIA4NThVFFQBS8nSNKnemA9Ooq4iOEdOgLUMSktGtbwyxAiA3Dbe7k5sc91j%2FEzbIHJGxbO3L2VbLxqKQjiyMRaPBqir%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM9dDGALOCmBfPTaMaKtwDyF%2FsDFVFQgq%2FzZHNkOYEZmvQ4lU1rJZZyH%2F9bMSYWSK3nXngOhtTTP09SWphby4f193Qned0mVn8u5Vuo9sjWoR4bgS%2BbIqcO7bQrL7Uw4rtFDpZMzjGXRghNWC5xNhXioF2%2Bm1N2PlvoYmfuv3xH9%2Bak1eMPZYacRYvdGLRXdb%2FP6Xtl3S%2FfMkdoTPvP4cGEzvk69HnZxJOMrB9E0rPUSPXSiFeRT4WIp2m6YlQBuGvCK5AtmxgCAjuXu5a%2Byl0USrL3NIBlPzGFfms8PK%2FZtL5mQLmjU7yJJ%2BaAecwF%2BD7tBWUUVtuBEhpFKaU4wn43AbUDfhiCoeJuWscohD5enCxHCHuw9gPEnOBDleUEOeIesSunHFUYVcP9Q3Tq4m7VoDqLBLju6rssjcmZjjxki0ANT6UV%2BpT9NrRrV2pHS%2FIXND0%2B%2FWzx7JDeLv9R7z2G2vnIntzWumSRqC09DzORT8p3zh5nIEMqT%2F4eSIg5RXuqo9Epw3RsjreTJCmzJY57tkfP%2BVGLjQMRZwvwMgUppfLs10aLzyUNJF0%2F9J%2B3bdWwdKr9aBezOJOjbBiVVzJ5iyz7OXOYFiG%2Bm3Ks7%2Bv7T7IEGea%2BbWB1akw7rPcoBYWlXwRk2CciYYFTbEwtLDYwwY6pgFXh2WwVtZcXNCmf5pTdeWbVFk52%2BYZlPstff7qY%2BcEx8o6x6JDHdjQK2NmwPe62bmlWOUFu4vFOi%2FxaqPutFvBVKWb3YPoqsGKZrQnJwW6NLF5DHzLQb8AheJS%2BYefkHOYsyaDoYzkEzPVun317Dddcmm%2FYehiATa0Ui7wXvhBwGcZKZIsRruNiS5Jll4ZmLV82SFVeFhvw4lyYuZ8PDmKtB2twvQm&X-Amz-Signature=0b9e1b43ccb4cbe103b3ef2a99e822172a2b013fe1d97debc026f363a73c2214&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
