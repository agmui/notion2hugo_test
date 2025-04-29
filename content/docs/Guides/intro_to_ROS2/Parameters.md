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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHCYP6GC%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T004056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDjwu4w3RbZZ93U%2BIG2d68d%2BawmKaWbHMQOcXksULuPAIge8WVtVAbgI7%2FahBtLzr2QLG09Vn4MrDX9VneFPALm6MqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPpOvCvrLk2x5c8sBSrcAxj6tWXtaSU%2BGxNBqNYcCmfzOzBygFZ5Syb5tUSVKfX5RXLFYAxObmprAfrG7xYRV5DaDAKWg6GBBiN6%2FDgbh0eyvrDI7RTQ0VOhd3%2F56YxlFvMXWmL1u%2BsyWmH0gIDlUTHWiPmGDgVM3kYcFDltloF3KqZ%2BSwR7Bg4%2FElj2bm%2Bx8t0E5cTlQvYYjivcTfr10Zo%2B%2BwTpFbTHycOX3wCuG3A3eJ0GxwOT1oPj%2BI6PpO%2FYORh4%2Fe9J2JSgX0n8JhJ0xtiMsvtImiGgfJd%2FKEAoJy4qAWflgGk96p%2BdXBl%2BzFq7DNZN144IenbWbLbEhNOmSzGwhEAl%2FL%2Bds9emw0pH74K9rKcUlgVmGDeBN7WUoIdydZbPCgSYQxVBa0aS6OvYU1TFQTmY8qPHya%2FCB%2BLwnzNH8xrs%2BjIHrV3SeNaeVhcB%2FHk62JWh4Xa8uxX8qfElN8aUDPloGkEwPQi7zSBflq9P%2BcRddSI3xfmLcMTmbeVuXlSaP6SvT9SJk%2F0cn08kSlitg5utWp7sUF9M68ZGe8v7rByyY9KqXdjOFJmBC0M%2FNX077LnSfHjy%2BqDkrx5hV%2BEZ5ku55coSmftXujeABS%2FLcbMk9WVpMwlWwYwrFMTwBnJ8go%2F8ZwWVjxKjMNW%2BwMAGOqUBAM785HROuanYwxS%2FEdT7%2FPItPT%2BRyxVehqozmoc3xv7ONVmb6EdwuwnwQCkkyJpXBLlxslqmz3SANthS4B48v4ntkLlcu4sAOK9qzoXNIO2QhOlbM7Rbpd9zWcNqECww9gUIA1UJ%2FGTHW90ElhwzdWvG92pbDrbhrZopTkUBh1VfjJyvOMWekumlXfGQWVQvcVguTnfFhP4d7STH8ywbc2Lc0FX5&X-Amz-Signature=3ab1d71b25181a09fd6968f9f57aa36bcd3565483fe58d3c42fc6f23d0682711&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
