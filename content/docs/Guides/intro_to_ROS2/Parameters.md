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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664THI3FW5%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T190138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbeIYZqR60s5BFE8rf1y%2B0TiqVUsF%2BNbXcGnZm6D1WoAiEAzBC%2BOW8UlvWfME91NMRH76YO92qnxoIT0Rk7CrrH1Roq%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDGuh1YmKrDhAfdVfBCrcA0W3N2r6CsMXUjFA0zgclsgTo8%2B2nq61zEGfPHtmpGYdLquGMN9%2BW79pS9c%2Fy1ac3wzQdKNVj1Zcn3LHo8dldPbAaejjkzYJEr3sC2zpa6Iv1Jc78%2BWQ9cC4xIYzJpBpeXaV%2BWVIpPXiB%2FXHGZqvj0etK%2BpA1adJIQZV1pLUz1pi3XyELIe8hrGZWRRohVThATKtGj%2BcvuD3qbUTq4V9kC7AMUy6%2FKjPcuCeWsYGnxZm3VTmu8XBFfleGnGL%2BpHo7XwAEQYT4%2Fc4s%2F39eWf2z3OsS0K5Qy5sTfOkHbD96j%2FHlrr4tFIL5rEQ4aY%2FAJaGq9PDZ%2F2PyNBnnaY2UYkliH02xKAoyoEMWcdVIU1SWmW4KXshVWXUdW5xEDTGsUXTqrbqlq8ybCQgkUQUAqQOBMoCk9jN8XPjmNOMBIbvN8yG%2BzgViW%2BNGScpKgYmoozVIbsYpRY4vFBNlVRUV9U7L7j7oTgmKwxoC3dsY74gvRCIRJrQmczTJIL1s0nJxJsiqLBeZZ%2BH1JthzTPbn7CHbhDk0dw8H4M6IncNtlWLOOe%2BZMwhLulR9p0kCtSHQ4s4IZUnUn4vA5yzLNQQXFW18FhjftrFkRPREp3OyeuBpOprCpVp7czoGSDv0U3IMNOJqsAGOqUB8ebpLsWEq1PLjoPb1RANNhnl19JwntpFd5bJb2M3PNUY4TtnObWFq01hNolaVDFdK4gpaX2JOWbmtyrClU6eiwkb54cEnVV0vKrpg8UV29ckrh%2BZf1EboQYu14rj8yY5XUvAjtMVcLhsCtp%2BlWY4nMWf845SkIsv5PVDRreukR%2BCR9MtUYd1ueLMWL48k5l%2BccdYpUDdSHgCeZPhzq1doaJxzA0W&X-Amz-Signature=90a6af8b2cfc281233faacb724ff51f657e2f899e835c3c41e1172636049fa1c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
