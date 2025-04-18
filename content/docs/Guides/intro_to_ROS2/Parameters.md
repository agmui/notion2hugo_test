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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VO7ZGOLW%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T003909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvPkD4089I1Q5r87n5dXRnach%2B7GhRuuC%2F6%2BH%2FgytPAgIgN6FaxxLnbmznweOTDZUoZJJPTO4lJcNB%2BWCU1dr0Hxgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDMrj7cHFtMe6WnYiSrcAzwHexw2ygbHGA3ZAYSzUZlziFvTdFEfnEKDFU9CZ8qcfSDy8DHO7P322agQX4GnXb%2F2KAxqAsGLkI698TCavnupNRpoqmzLgwDYu0YQjbB479a4qfYtbUNVwBwiegrfnBCSlFV%2FyIX6yeL1H6XhZpV2DWZZKIquVlhqpJfaEmrrgX5BSLqulMAMePeHJAdV0Fx1yHzYC2PKCsM9Ydyb1C27hKqZHX8eQd8GBfAaKPDtRCfI5cWYBaSgjm9xsFDo0LzsBxRxbA8c%2BW%2F9DbCrIKJJOpYq3oGuT8ho6Rl0UzC9i6C6%2FhZ4L3xyRFW4ch6%2B2DwFLB1oB%2BXUq628NKI%2BCixSZIKSW54%2FS%2Fg59O2dKRBZ7Wnim3p%2Bm8TyW1MvfzcDI7m47YlzIlO1GCSnJITSpBDyFtHubohlmuIQ%2FT4Ouq24kzBF8W9YMCkir805b3i0Ib1IYL1EL9ryhyIXqBGSmJO%2Bv%2FCO98xj9Ms3AgYewzRzz3kmXIShuiUzYhQNOx%2FyY1IBsl%2BUtGkFXJEo8VaR8OT8ijukEHL6CH51I2wVzP7%2Fxpf85DhnmmEFopnvD28fTSCs6%2Frc9E3O0VEB%2BRykzWaBnLkkjcgiWeU%2BQ58PJOntZ2zMwDHZ8SlGxc0nMMyghsAGOqUBVn8CVa1oK5bMGtcZPe7F3sAAapPdUWT0d1tf%2FmDxAcafAYIYT6a29S1UXZVWai%2FkevI1yug0LkRHAM9pbmA6CZZ9ILLHhC7O3LVrOcGwnvXXAstFeM%2BF7c%2BUQFifybjeCVdWN8%2Bfm%2BIvKzZm3JA9wQRbXOGvLj%2BKIyMQmd6MIRDro0dgD21y1prt%2F85upjrMpqiW3mf35nv%2BtjFt9kyYvUW4VD%2B6&X-Amz-Signature=b4572a2bc02d0c47d931b2471abf8a735a990b6b50e87624e1f958cac788992a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
