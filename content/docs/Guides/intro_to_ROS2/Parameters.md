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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YALPIAIF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T051509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICThFwSUOSg3H6nd1spA%2FprXad9tmXTW%2FSToXBzJdGe4AiAdzmmXQHjsW1k1vBjc8cSi%2B2dM9PtL5AY5NRMs0b%2FU3iqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF7V8HNNkW8o0%2Fi8FKtwDScBcDMONtp%2F8CMpZXB%2FreFqGgFNO6YRTxSzgRL0pnxMy4pSTa%2FOOS5%2FuLkEqhZ3AtEuKM6ncqd4wwk26BptB%2BgFyWLxYKU6q2tJF2N2Opep%2BIn0cDWdyHjQ%2BcPct01Th%2FVT5GIdnYhrT6Yhc5bg9%2FDXFEUVlxMqJ%2Fx6j9YGR%2FTnyEgNWcFgWhfpk%2F44NyAYWxtiILwgqodDSp43umAhljWNtzvtBZCorZaUlzdB6SkuSvE6oxhN8V6o%2FSLZb7uZLwnRjjzhWvpSYyvZVhr1OzDwKCUmvlXXJWb0bPugowcvphFX%2F%2FJmEejxHEwteEMk%2BjZ0deX%2F89dD7u4dbx3HT%2FO1cxL5vJiKyT%2FdDHR16dCTbtqijt%2BB9%2FFRs8JmpfG8kZ7h8XT8fM5OlngHJVuxFR73GrjDp5pdMn6N2byfWutUX1tLmab4p3X%2FgF%2B%2F5iV7ztqlSOWU9PEWVvFylNoEsUtbKe7H0MD3%2FIr9c5ksktLgqwA1OW7QS%2FAngoIE73R0Bj%2FYTnIFUGco1bHlclua1RHtNpso45dlJ4YOy%2B3n6C4abmH6aeHWAfj5LmkQHS1ceF6g4%2F7SbJHWEjmmBGLDtZE5UkPyRTgcOjBcNHTpn2BVi%2B5XyWPUAJsnf6PAwtdHgxAY6pgH%2FNcCOg8VGXarKAKG9W9QHCywcNp25Ts%2FNFbwY8NHSYX1uDVU8B1OAJa0WDpjDyQPiDVVloRiYQY%2F4pVJ4Hhbdd%2BuVezM0p%2Fo9d39WzF2F1BIoD8CcbzgLTSQFuCGw22ni5Op4mInehlupuf2tjXlAZtNNPGUiBw49BGBz0Ul060WdUwrfwv4NLBhGVelsGLxCpGurerlfLAmfZyJQ6Ya4QnEmbEt2&X-Amz-Signature=dea3673a2e794518685839f2fa36dd93faaa5ece89bd9defdd12f645a64f03cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
