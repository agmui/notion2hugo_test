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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRA43EV7%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T170745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJZZvUXqL7l9MAX8RvvIYQMogC%2B4ga1r3OWnpRQym2ZgIgYuI%2F4arzrVkP2Z4R85kyHznfEQQZxAxKZ1t0VSlCV8cqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLTYHn1CKOVOeqUHmircA%2FT8oZMd5SLVsD12FJi6vvBtX5ZcQR0jIpR92aRfxKQXTEqCVoEJosx6KoSpzRB9jSN1pbnb1RmZuCQjhVzlPqikdtA%2F7EhVEHynPAv8H8fRkVxcWGlWv29NxiFTMZyBIC%2Fo7qssML%2B5zw%2FokpUkXwx7Wi0pdqZ5uJrliMKxZu7QJOOGoAqfisFPDRrbcM1d0pIqFJ479cC26OvYmRUFZmr2zDVn7ICG%2FqCnrzZP1J0%2BUmaysZinEe4L7v3%2FPIvayYKf20wXDHZEI%2FgGwxG4RtQM24Y9rJI%2BxOmum7X%2BZ5PXxPC88MRM8MLJQH1Se6nkGrMVcU0mHI48IivCnh9NrxRl0filwvwrWMGmDNImdCKU460frjWq4O%2BLDGHHiRC8Mj5jYv8x%2FP83gtaaCT1BWLB5F6CXcBQevlKy9JD4BsO4N4OBtO0q1YX%2B5ylcOWVKFvE9btNoc2Ad4MNjiiIpVOPuZulMQPBQeeSOQSorMZVNJZslhZokSArwi5A8PKQza3w42t3stQnOqcUzg0448GadhifGhrXuDYCt13cQs35FYsoWtvBNSZ97bMu79kl6M9r%2FCglsk2KHSYLgrXkStxrrkeuf5%2BCdb8Qo13lw09RlwgzNNv8DOjZHkzZ5MLa758EGOqUBmyUWLhhQt%2FUwUe63yFPt3Hwnf8E0mVijdtNiXHSmZFNOk%2FGEif1gj1XMI8UqPguy%2F%2Beg%2BrRY5lOaE7S%2FNr9Y0LQHkE20IRtAE5OXzmtU32IkO3qDcfqcK3kDTN8flpchbUZLFZhrtw5qTL4dLeThBegRMH%2BQRpjiJEv%2Fpbeb%2BUqUpq8R2QULtsX%2F3sxakOD%2FIR3SpkJ1ilOnAYGAAyj4yuf8Zk7B&X-Amz-Signature=73ad41d88cd747169047df894496374840e83afc2c7a94791811f8003484474c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
