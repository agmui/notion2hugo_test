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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSJHNSCQ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T140527Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICHyad5dCkeiAYplLnK3itVzjhyTcuDK%2FgIw49XOsYzzAiEAmWEK4ta%2BY9SHg9HZBY9DWSpIHYvB9ncLFloyc1SLuggq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIidmhVdaGEIoAySIyrcA8PPbV1QaUrnGGl%2Fk%2FS7Ug%2BItlF7um8fTB0reC0Ga7VmJp5zjzEaXjOWUdfTpdz%2F6iYxjYRCLeAbbWK7vOml0QOUWrrNp6fGo0YcGDW29P0HflP%2Flwd%2BrjE1rhJhg9C3%2BtmE9Q5K3vTQ6KTCXCbLTd6RhPuy5L%2Fwxc3db6TarZWhf8%2F5StVPLFANu0R9117yMB4rDAVdZwuLoH4hWO7vzoys%2BsjmPAiRXcAUeDn9OFgxCwt6iPyPmJq9VgKMAIV8fWQhfqOI%2FpeyRSglrkvQZs50sburUUpejjfSRX6xQS7NeX9nkTu18JLAnHykbcNRlOXYbJiYidt%2Bu6UUDvK56uDcDpjn0Ncyb6yU5mrt6OvpdZ%2FnwyCq7BfKdRgpXtJapMi4%2F8BXnIEZEfFtXLHz7tY8KQOn8hB56f%2BPoIejDmcNspmDo0GsyV8Nq%2BH34fjpyG2WDSZIxLnzLD7oEd1kKp0qDc2LPXnVxbtlgvIQMUE%2Bbtvty3phgF6INCV%2B%2BNVZe4zbvhWxPuO0xzxXwOI2WasbOJ2RyzdVZnIrX4FNsCy7XjuouTEF7%2F24LqBCJ9GetBIYxRbCYZSTw08t5yFSUQwF3L8vXkWOByxMcKJ5EO3lWj3kjncAE8wgNXzSMP2LuMAGOqUB0EIKsQ%2BjArwNYh4e%2FLB8Ew5P82kCcBEe3nbZH%2FI%2BSiSmc%2FN%2FlIjVwpdrVn1WrVDn2UkSNtYhDdh1UarT1INaQ5GviinSiCn%2FOOfJyFbzsvutkI9EQcVNBaNvi3ZIzXzTJ93%2B6tlPhJ6uWz6YcY2K0zVb8bX5sArerNB3%2F%2BQGEOE33MFY6cjEcQXALG%2F3Y092NKLEuj518Gl%2FLAwOfhlev%2FP1n6XD&X-Amz-Signature=c6fc14e4e6b364dc677efcc54e6f1c680e2f0340d80de3493be2b2af817d9e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
