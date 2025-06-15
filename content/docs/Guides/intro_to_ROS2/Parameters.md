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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWAF4JAR%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQDZxt%2FDOcEnpVgHUM%2FOz%2FloHADqXnIypTNBM0A%2FryfulAIgBUUrnVFjXARXqXOgLs6yyPDyFhjK%2F%2FVovwdfV6sEIB8q%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDDS441i0ofAxZH5cUyrcA%2BukgY6mbawExaPsfbnZPxuCPNuUuKCzi%2FxvMgFRzB5PsNK2KdHLAO1V%2Fys0%2Bu%2F9CA5YvfNGfu2VWwFZFa9VQsyGR1DXw94OSdyMSKYnqjZh0pJd8n8ZwsDvLIL77vB%2BlBX69KW1zDYcpC6SqClX4%2BkY%2FeuKaEO8Ipk79c3y431Wf5LlBOMxu1wgYYd6BewCBWMyqjdTkBxPdNiPa%2BpDHWVE4JlMKHngUMQXAvdmcLaHYzO1YXxCpEFjO5qbbCZkbXQPCEYnBvDfAKASOrRxjS9uBfGfNaUx8Ik2JbVNE2qdnqoNt1Gr2BxSKCKRsZGsQdSxQ0ZaSm1VRjAVCo7nqH9YxM0KqESt46TY9GyTCPSLgghL7uCsVI%2FXawCoM4NI8ap1pCFuzrDXxlBLNFw2eLul66dONDm0uH%2BX9T86%2FQ7SCrP9ZZkD13%2FYNMRkyTMj9uPGj5PgfbiLL4TgnMUDZD25HkzlgxFSYanaWpfvBEw8sk8Pnx%2FgFqTDKwfhLOr1QoSd3f0zWirLd4DRP%2BDyAcIUGDHBucS1I2EyCd6PKbXM47A2m6TTqWqUdqW2nqzSD5IXy7%2F131n7HkLBol93z3NgCyR69sLz%2BAnsP1m3vfAWH2NPr2Mv1h0pl3EEMMr0usIGOqUBzhwjVKkvOf4uEyVvjjcT0C8bSmjU4WoRr6EXoEy7gO4wBNSKl71TKzzTZJq%2B4r6FjgWZJeiHKiJF6tumtOOrLuJet46LF%2BP7XYgDaD3x294EyF6P9ESMlfCmMbAHKlcUhlXuzRXLd89Lke%2FyV0aIRlJieWXlzsfZWyQQhnigMxJvjw8y2%2B9F0WClMebWkk9udh6Lp5Ww1refudwk2J3fEEZGZCju&X-Amz-Signature=941c39ed7ab6edf653d9c56de5202043ae8d20f3161c154a0f000fe5b991f6de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
