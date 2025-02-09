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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSKRTVSX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVQNAObigjxCKCiGkWokzcIxA3YcP7dURAqw6dhZB%2BcwIgHQGTs%2F6CT%2FALZ7XaRF2m1usfxdAzDg8HfdrsCV1zsdYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6veWPoO7XS3wrH3SrcAy6KWHIj4ej1f2E2kXOvP9ouCVKLgTnBDLXJCZZWfz3k45uxBFX9g18YbSe9yoUfLe%2BVkwcE27xfZMd42GWGf5YgA0XyJ2BI6alv7Et2wvwQ7VrPY4rpOXrRqH03t7%2Fx0v4h%2FQG0kyw0ERjhHzGz4g%2FKAoy1K4HTfWbPsetHlu9wgyEJ%2F2ExGhhzUECPuakbBRYBT94O3XY8wwoSmuqpDhfViw5%2FsI3rLiPHXU%2B%2B8ikvBicicrmQlIyhf277IOEY6pUHeLwdiq2ye61bXl%2F80X5A5dEy1pZA9tcJ41TulJCdFJWR4dz8VBaja94Ud%2FrrlNjvoX%2FHJX5buh%2B7s96%2B%2FvsyfoBtylhsU%2BHKIL7RC%2F1m%2BdUrNGte2VGWEitwvH63Vt%2FzVCcEikduHob%2BqbkA3eu8XjGbaPYsboz5%2FAACB7PzSDyEXht%2BrYVD7v28eh7NUSB86sJZ97nk1qodFfKscQv7f%2BOsWakvLeMrT%2BDODfQfrP8nNx5XPd82A1dCV4O381bOSueo2VpU0pVpdBsW6mzz07MJeC0tRzEczRqrC7jrvlPOj%2B8sf8NG2iCzmOTURwOxSQ2hfVxP0VAzH%2Bw1GMFy6Hb9GGedmLijkXlfNu6VnQEP0spclEk0MP17MPXjob0GOqUBX6gThtcmdxf%2BXVwO5BGepXw1TeZwMDq2fLYriT5lfNq%2Fg3fq4AxLTioboocYSFbR1%2FNchwv9YourLCN0lCy0khF2JkSPz1nvO5znMhYdpUHIrCJuHY3ijluFNYwMALzfRWQQl1%2Bio%2FIGYw4eJT01CvQzpOZV%2BmRPPSJ9%2BjStSMTADZdVnTOm8JllDvZksdMb2SvAqie%2FrhSq%2F5AhlEVc5J7Cajbv&X-Amz-Signature=23a52280fde847ccbd43254deba3450ae62231bd9ed7b587c68a08ea204fdb22&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
