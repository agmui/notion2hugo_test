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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6B4SHSQ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T121422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJGMEQCIFM31SgugfAd%2FK6SXHVGGuOGu8fzWx%2FY2LR6hCamo4UPAiBCCq0gPXiaBp4H%2FGWnwBqHlTYtYfpq2FF23HtFV99Y9yqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdTRF6s5D7s59SrRCKtwDvILR70TabtPeS4PGa88AGEFO6I%2Fj7WuLGxlJWP59iD2gGgxAIuCgwyyOSV9m8Okl8atqRf3zb5zqhSQFrSE0lRrajC%2FG3KrJK2o5OOo16sn7wNxLQRKdLGKAk%2FWQj9OI41N1pibOmLzB73qSomW6hRKH7QGNbbOIHtDVWKIBjGEqaVApeZMZNBVZM%2BNoBaDkaySXL9vvozfD1jYyh6FS4Z%2FWS1kfJvYCOUnB8n19d8KqMtftYnwRj%2B2XSSPc5VqeYQ50uIf7owWEOqnRZWkSmnal0La1JDb%2F44XOxNByX2eBgew0GqlF6dIxXszYvL%2F3W%2BMN%2Bxy2drsKhu4Ki8R%2FXt9pVa%2FL5dv0VyIhMvLSBZ18LK6AUHWN2nOnZyNHf1Hk08oh%2BmtHtsxij%2B96Wp%2FQGB9MjuXYPZFmQGBFIXsL1xE0KhS%2B38H9sqy2TzwGemZFZRTs1MpJuZt05FB3FZYNp2CqrGlR6xPv%2FrmptgOCeEtJU8YuJIZVtrKbldUseny5cBygEJ%2FT%2FIxsDKRqKIZb%2B6ZWw0nj80y7%2BBJe2%2Fl9AW%2Be9NEMKD1m1wOdQoGqR4IxH2Ptr5xYZa9CUSTDgXtGEHHoXqFI%2FDvyHGxG14sfkUvilyUbSCt1k%2F7XsDswns%2FfwgY6pgHV6VT%2B0LkTiJ%2BzaibEwdi6sw8PP3QSzNLC%2B5sgNZRGqA4DoJanNncNRHw%2B1Ii8VYeze%2FJ%2BjRuR9LjDt73v5oBtGsXR2ZWUQ8IrIRnH3%2Flomkp4vSctRXK%2FNW22nOiAdk8KXxg6hv6HZQ%2BmbxzRheBJk0w6YG35aVyx7gxq1%2Ba83BYTMzcAPKA0v5b9J22h1FzZXztpk9263xGRjEJHrlcVxxlOaDCI&X-Amz-Signature=f2607e4b81cd4e6bf7c348b93d4049ed085d09eb9b35606a1021abb08aec0c57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
