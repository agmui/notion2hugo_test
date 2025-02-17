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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XS2I6DM4%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIE3W%2BtMkmMFKwUf5PiFeNzS7aYQ4dAE%2Bbu9lGeorCySYAiApCuB1kXBBjMpf3kEfj9M%2BXkQitSRyvetG%2BVo%2BOhQZyyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM385C3vxzwr0yOB6PKtwDpvTk7%2B%2BGUlTrW5zwco%2FmHDmWSC8xcEOxl2ggHZBfPuxInyMKGTMutuxeNW%2FtmczDm11ikSneX%2B%2B8QRfCD3SdLrr1%2FuuDNiFZ2%2BJtmAaAfwNXLWk2n%2BgQrWbkmU8Xgv2l5Vg6wO9Zb98d%2FR4N6jX%2B8nurYNBvXNpqvYASIKv86OydA8d1rvKqqhd6snEDtT26tD8SXUETh5LRMPTrbatMXoTlW6OGaSmaVSzQjV6CDtUIad5bRUd5%2FjN8nPHZPIKcfyvBa0LgWdGkNhXSrtdJTO%2BACOuOyUgMhxye6LxYA%2Bgo3TY9tfLMnEs72WN4ZiplSgejD4So%2Bu1NS6AONWbnj3lGjZRQBrdTgw5VTpvwvSQgwXNbLDESi40xqmYTj3vMDoKHFp%2B3AdgbhyFNvV8Hi7aoF5zZg%2FCwyXo4U%2FGloWEnm8riN8OjogNrLw9Ig6maQoxSDj7gRtxOZ8SyqjtDTL%2F9wfNFaY0UDmSLkTiIg7%2FXRg7%2F6RDlxVvQ0taxgc8BgwBPeOowjffl0uYZF9BePkHzs5%2B5G2CZsagDGSEjfZKKo44%2FgpZNRDm%2FG5SKU3z5Dd4jjKQyr8i86DtblWFu%2FjzMmY%2FSIJpR%2BXj1qKiZFHiNLGwjX6sKa6uxB6Iw2fnMvQY6pgGvhxzSSLRWN4PhbFZZcFyv0ckZCjteZoIR9hj2R7%2BRwgYFRt1b8UlRCaa2G6Tb9XuOkECakFWiGNEGy95JH6Fgee%2FESEHAu9ygTfiwCyZ270YtZ%2B0ELPoJ02KNH8130Cg9AljJDKiK7LyAOFDi%2Fw2nNBWcRZkBi8VlUm3wU4uOJMGixFzwRH1bZzjcdQ%2FETj4V1Y9%2BhUuBO561ybeH98tAWw0Zu7vO&X-Amz-Signature=5b28979d58a8857d995a7e0198667b1497fdb14da43a2f78abdeea57fb2e8e3d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
