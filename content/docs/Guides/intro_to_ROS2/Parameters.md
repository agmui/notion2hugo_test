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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTRHQEYG%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T051148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2yab5FdommcGc818TX8pRdi5XuMg4h3uerPD%2FFRAV4wIgZgLT9yAhziKSz0BtYzqo%2BNxQeeDL42%2BxZ9kuUdFYed4q%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDLjMYU8NrVwPrLsB6CrcAznyI0%2BVJ2IWdTktdb7a03ey9Uta%2FMoGD7P%2FgTO0o4SGPWB6QsKylihow68T5t3gVYNpWHiK%2FozMfQGy7zoNo7OzNQL7S52KMm1QZ2beRO98QcgR0vGcCSxdXqEVC%2BfMrc6EXDiB%2FN6a1jBTaPzdRu1vLBFpAJAc9mPGSChjaTSXXMY54fI4zcwA3nRPPebhAu%2FIrhZoKEM0h1ZTX9TuMOSFzy6MprDqV7CZ%2FGI5b%2BlAUoHHtFCpSn%2BRFGcJtyObL3ehmC%2FSOqEyyRicfZnVFBNePReOAqBOoUAGa7w4Uhw2gmHAxiXDzfPxlqwBjcv3FUlJIJkoDdztQOmw%2Fjg6wcLyoiLW96nWRq33Xx%2FdD%2FS4ZeuFtpraYR2IfTeErCeJsaKbUZL0JgRNCp4Kzy7waWVyHhla1K3rBzXfWBxfQjAIPzKH2FAo3ewX7MmngbdNA%2B67FonjbDo4vx1wShJEl0JLWyREv5SFYk%2FaWlihO56U%2BKCHjcQ%2Bc%2BBsMOOiOos2jjtXHI7rWzc6MVRK6j7j2FTBWumQ%2Bl74fcTRdCJSBEaclGBehs2YQ6Ln7xl%2BR1Qt6NlVMHah8xIlpeBFjqTHgBIGxbs4OdQWyYKpsNidZ7ZuI4yDKwvHORzZ6KxOMPur8MQGOqUB57q0Lr%2FZt6K3%2Fy%2FCH%2Bfx6rRSMsUesZBlP1lWpSML8kNkAZvRRJhMizwMRqbylo2TRWARwYI44y1IExcWAUdfRyDi%2FKejTxc8V9qLO4myWJjUmnBDDUS2oelYg%2FSZyDea8jjca8wjBovrnRlbbnFA3aPE1yljAVdFQsx9z1ZddV%2Fkwy5t7xVM2mowTaqsqcdEEZIS%2FN5S84LHk97zx27SbhQ7YfK7&X-Amz-Signature=893e41d5c3160d80a09361aceefe675898ae7e7e6c305d38189b9f9bdf406203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
