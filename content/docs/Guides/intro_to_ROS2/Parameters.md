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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T52KL4TE%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T200852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHiJj%2B16h%2BNEdlU1WRaRYCHcWkm%2F4uGaHt3KCB2af4acAiEAkRcTJLvAfNlYOHyhWiWsrP5teBlKr1GkHp77Jja2SpMq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDIlq%2Bw%2FaWhl8UVzD9CrcA3Uw532NM%2FjDHnNqbGIGCwQoDkJa%2BBrbrxItnrDDK%2FazS%2BXOKJDN6LVWdZXPbeh%2FyBDjeiq74kTYzphvhBTrC%2FWRxAtUsx543vkIR15%2Bo5oETohghhyGjjRy4NbScUtZoQI053K2ke61cg2MdBpzE7GiTXOT%2FW5kxhAnzYBV8V1lPj7wrldrGlc0t6KZ5Ao5uhnNuxzJlHhr7qw0KPHNtoFeBjwW8Z4gmVmSYd5RjiYQAdpdxKsnd7R9z%2F5hMfWyJbThLt3xI17j2gCLxey3Dz5mJkoHh64b5eclweqKRt78T1%2FZiqO1couXR51qbU%2FBX1P2Lo2eswmGMRrhHgYpMIg9Ls1jN%2F7QkWn8tXklXtKriOkGmXh9GUAHeO5Fu1D2rT8igfpTNz9YrL6zJQv4gPg2cQMLhDtHbCu8ZJixqmnh8P6SwmMyLEoRpZ7TdsRZlivd0r0%2F1rC2OfmevgX5qcWd4nXlavHqodqGpME6%2Bo7GIpswERaxO99NQIBe%2FiW0uEF9u%2Fg3l7X6rcfeUjoqJl7IoKkKfqf%2BXe8AUa%2BLXF9SPqM1Cmk4NcL%2BKFh6Z%2FaCGD6tMySczw4VDP8HwVONsB09MdtIZJ3JP1JiIdapvQUf%2Bq6swnLs0DR10dPeMJTJisAGOqUB1%2FqStOKuzfJt1cTG%2BhJgRtvPLZYx0PE0d2a4cyOQqWaYqQYymIxOp5xCB1t%2BWBBeN%2B54%2Be1DOFhGEAz4OkrFm1hmstW%2FKY0wRX3uic%2B7C0jbf8HARTlakDflHXF8q%2FkysCytOC1tSmFaO6bPTHCJoQWZGZtwYLBgj66Q1Hvvyu9rurnsYCFEmVV4yNZh4PzcXzQk4fzOluHViKjimyfbwxnMZzAX&X-Amz-Signature=a5472bb9c05a96f2192d52687d4e87e5a919d5dd4a5315f570adf162e1333ea3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
