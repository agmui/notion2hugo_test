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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGIDOWNS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T052024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIAf0ixbSdZlY%2BmbmKzBvZNfklqf5obz9rrlzaNttIUddAiEA%2BmiV3HQ2UaSjpOa9JFeloAj73O7tsZa6Uo%2FDxgpLdTIqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGc8ZEXvnBCKnT8FeSrcA%2FF5HPOdHRXQKvf3XrBQvBhF8UJ%2Fhg%2Fq3nC8MMtiUBFMX8Xs4q1O0h9Cd5jG8eUfyfVcR1HMQ0p42oOqkZlxGxJf0AhQGkQ314tHuNdLohagWdJ%2B%2BgAzk9jt%2FMGjFAEVSqoytJ0uyIYAgGTdde6vbpTO%2BNx7mhnbWbuDYROCZ8KijYRemvz1OX7Ir7xxDZ9V8a9pUs1FlAGJeP10OKHZ1eTWflG3hDG45277sk8f9ycsmCxbKjvGSCZ0xC%2Bh%2FGMoUdI45hYNT9JbNhVX0tPJATHV2TS9CsC77PM5G7Ny37DdC1OXeceze8vmwr67ojfcIH2oBO18Vde5L3EVq3kUhv%2FLkeJxVBsWz37AKqjT%2Bdh%2FG94DxqjyiPsgWZ2KmKCj0PlW9BJOVPGVDnyQen1%2FIhI8EVEIUtTDYUikerncz6sc4GAlJQceNLCDNu%2Fi2fQnFKSg5D4KasGofslE8ByMxmLQNxi0k5PWzqRTRs1MViq8hLCkE2gVgU%2FXVthwVjMB3TRICJDszvOF65lQBwnO3hO2k2i2DQvi3bhWEz42MiyRu%2BlOG17xwEVUCfUL7xC%2BXQs0FgledOpK94buJGsSiZkmObeJJrEbUUzG49YFbSWA7fK4bCXm8hFkMzX2MMmPnMQGOqUB4sYfb%2BUGE3DlamiO%2BWYa0xhVW%2Fzq98bgECHyb2uf%2Fp02z76o%2FtbZf4Z8tHr%2BuxdyIHMUGVRBQaMVUXnjUH163Dv0WD1gmxX9bByuvjERYc3bnkqfAqp1NR4lAFShtvPL77cT6XESstNPL1g7FjpEam29cJrDfUIPco%2BjqGXCYKUuR2Y7Q6NgXKqJaLQWGXspBJgr%2F8SdVA%2F9waqHGWVsBfgeilzG&X-Amz-Signature=c39d937968921a599377d1ffba200e0557eee38b99702ba4c5986328371f00e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
