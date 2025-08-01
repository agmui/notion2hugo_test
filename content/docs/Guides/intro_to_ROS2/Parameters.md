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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZWSGNWWL%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T220912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAY4Gp420BVIMFGk1BEnjqzEiY%2FikoVMQSJJnnbTzRwOAiATzNmqAtsdRZxH5WXZ689AvL23pTEhM6xr3LdqrPge8yqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZSgGFZsFLbTtxojvKtwD6o3zutzJw9WiAXpQOMtL2Jw51O%2BTBo%2BZQVYyVRDIlwc1Ek2PiFi8fvF1Ym2EjZt5S3SJFc%2Fhxp8JEixmVTEz7BL%2FOuT9lw7UZ6rkVn8TSbV2H11oLngsQPxztkmCQ6%2BSyP%2FbwKIda7n7zEtxxnTWTEXyQq9iDYpL1qH%2F6s2YyGXZqchPC%2BIfpiAF3T4XkhyBCeRxbqCT7Xysa649VbrePmR3IFPHvbvyFyXjgjDqUPtuZRWGJg7vWOs7rdOp2d92Ah7pwi%2FRiOzto14dHoK71SpoLKYT0VbO4NSvXJvzZRdXJy%2B5Ks6i670sHtF1hvdEOCBNVN7RZXUQBWWJpNG%2FwN8KQcLcvidSQZ%2FLQBueSdKdpyLZsowngVmNrG%2BAmOVL%2Fru2JTrERjAoUiapAfyikKbP1nC%2FxGNbNRPk%2Bp44yhOyfmjkP92dqW075z3CAtlH42N%2BGbei1iQK3Vb5yc0F30wZILSakp3uUumJQ3%2BSKtTOHcsecAUc0itLDNPxJIqhKJihl79mBrxEXdm1q%2B3xyaOj2n0BgYK7sxEMoEaARcalq77rxFIE4%2BGaS2J8NnEjZummcV5g3%2BSyf8whf3rCak0C9HJlygT9z2aYvMaBNDQk97VrSbOgCAk3DqIwsO60xAY6pgE%2FBZ5H3pNpdtSFbdVK1BXNdIcGEtSUQKmiJwMAtoC%2Bo9NYgT6lwoIGJA3qnCx%2BpOKYgw7Yy%2FCgElm1G61F%2BMcSAG03jL1snJveheuGXqrff9aajlmWiy37n%2FWuXA6KRSXjyXe771aeEjONysYeFLiJ0e0YrqfKMzVxXdE%2BnCKF5zrp1GMdXJz7YcmpX5ppnR1r0wUm91VvZIoohTTRSnTBUfWyipf1&X-Amz-Signature=5359d296bdbb63a61596be803fed716f1e01ac1ba8445dad62ecec95b60eb8fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
