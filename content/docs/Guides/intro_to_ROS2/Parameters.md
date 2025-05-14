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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RSTQHP2%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T170900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQDT5PFim0RiH2X54q0pCM8Ro8sd1oJ7tI0uCk8xznwYZgIgRPhgHA1WPlqB2PMdzG7Dac%2BwcAM2pnlO70FUpb8yJzwq%2FwMIGhAAGgw2Mzc0MjMxODM4MDUiDOKGimFF%2FSpL7LOvWCrcA9XUUULL0YeypCXbPgSGxfhQ4uV75Jpj4Ox8Dx1KgckhZxqL6KYmCfnk8jmH8nN%2BqTI5%2FXo934pzMVbtOlsaV0kgoaX8LmGxTXe5deiAS42NJuXfwTQGLVnN%2FL8f%2Bf2MeUVF4ZoYoJLZZTakqMVuj%2BAvn%2FPcsOhl%2BGvnc%2FgNMVuM29I68AABpkIngoYW4uJE84FLJWs0wnWw8ZeAHDud3JH7zjsBoMjG%2BcgD4d4sG2yERPuNv4e%2Bsx3zQJAd5uJfPzrQJoHto0G%2FfoPla0LqBwPmO3yIpOpoKjirAQoF6Kiqvg73QUFQgMVh%2FlT3SnAb1nM2HALf6EtiSLEitH46K%2Bf4lQDEcfEcFrbpJ3kIsxFPpW87epZNU9xunzpPrxPEyvHmrNlAP7i2I53CrrOc8XE1f5iZtk1ZazpU7ZyDLJ4qggjosl5i2Mbbn%2B2jZ%2B5%2BJUdL5tEIaEqSEXzn6h9fMO2MQ%2FStCAHzEL6Mqs8%2FflHYtRRiEVm0ZnKLWvps8mEzV%2Fxn1Wu0D6PBCgSnacG09GKHxOIo%2FpUhNjeJVAt%2BLcqgzLqNZf36xQKlkNKsgweTJckiCLdJ064lVZMVlGwlpUIIUarTxOHaeL%2F2FdmLqzWI865KUz4C6NQgCbVsMKKIk8EGOqUBf7h7hs9Fe5gMIGoDR4JFVveMU%2BFW5%2BTc%2FycOuVRKCShC%2B705V78F6TxoCMJeYzPwc21QHmcbC9ob5FRzwIMuZdf72Led%2FK5oJYtYKzy0uKRjFcYwSrDsGpsSf1CGCGbaxw7QtVuJn7GWLq969uyjxLKVqycTlu7BRYYDMD3R4Jb6VNcr1wc1U7dqDw1ZO0PPo%2Fxq0bP7BAmvmxt7pSyllXiPpZUM&X-Amz-Signature=28a3f2ca73f5f9393517e4b699854b7cb5f40a91be529b61efa63f793bb0d7c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
