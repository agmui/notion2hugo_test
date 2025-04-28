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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RKGZKUR%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBg70Ge%2FqWZE5HiiXw%2FAP2hoWkgxi2m1412mJaoiGYfBAiArpiDR%2BPcF4gLJjCg9Nsp4t2vt3EXoWs4MzJvvoHhlgCr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMHGSACGYj3S18jzlHKtwDqAGJoJEdpRlIg3f%2FDz0LkX1pyXnhixK3txVDWsPqkZWH1fdzNEkfcPM%2F%2F6VbuuNCQDvqVdAZffweCurPvUDyYVZQKUwXlIw11Cd%2F1VztRTzaU2MsUsiZGW1oLsXhF%2FaTk8FK4YpPKfq1Q05D4FukAOCmfpFg41V81%2FIXL0bgO7OS4rV8iWXUHpLnCeFPuyT3uZzout5imR0zbHPGlwe1Sou%2F3stbUZLk3gVT7jSAR1wPxu1ohoZcF1SAP0iMTN7Kr70iJ2QDTsBS0PxlUnaIYFA5L%2B679kIKrbi%2FYEhhDOul3WJ2Sc%2FY1v0CmxnaZRg7UZ19sIWZ1X0gOvVXBD5jq0DD1LAVozNvQGFFP%2FkkcMjCAY7doB19MjKloYIY4OXd7V5Ou%2BRt1WUSaWyiC%2B1xssmF58tN01HVEeABof7gMJs9SJ74bT9RLeLVb43n4BjI%2Bo2%2BVioWBSvwe1a494RdpbkkvwoT5CahUF8ZO27qnduWyogSVfw7oEOH2k9qynBe9b63UNhpr1MnRGg%2F1BEEJaHPc2F1OUlv8lFeQQ35zPAgA3QRTuV%2BbDlO3j1ysMaXyNL6uL5FCnWyHV6UP8KLwohTuBfnGWHkNPC9u%2B02Keo2OGDVlELykg0FLFow85S8wAY6pgGgwSojopeo1uj1boXGKLlB8JBJvjlqNZ14nPk1F%2BoxciwSQKhWRpqbDk3hY2ycClhp4XafQuJjXCXAp70cUL2rJV7vQSWfM0%2FnJiTi9bIaUODziP0IhSv3GBm87mpeE0Tu48jNHHrMLnBbNQYM%2FmENpO0FRrOklQDm%2FipK6%2BWlM%2BpPkj%2BxNtaQzxZ5itA0On8t37LbQSHqIAhuErnHIkjotodW1ArO&X-Amz-Signature=70e3db9b39be86397a93f91c88323aafeea7620c5206bfe372281e5ea31800c1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
