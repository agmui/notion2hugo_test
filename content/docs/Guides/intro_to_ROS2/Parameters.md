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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NA7IYR4%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T020525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDEmSvaHCeU3rASY6X5WGapugInwjqva69Fk35of6mXTgIhAJ0JzZ2FwKRdxJdJJBOwNRVO7FNNTK2UfJY1dPQ1nRvvKogECJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy5ynW1l7GUbtzUh0Mq3APiXHvOMRSTW1%2BXDqpyOFD5KJbBZ9PjB2TEAvj3pCqb6qsFIoNUdhU0HS6xXQoVh9bYJc9qfVqZ51K1zdD4svF2YfnF2aHw1mE73JUNjdIhhGq88%2BF634Qui2Rbtcjauv7RV7fmfyZst9no1mkvJwh5SJCxB04ZtXZJWEqBlthpSXQ%2FGYyC259TESibR3X%2FVHpRnn%2F5oEdjKnK6AnXXK6OFiKM4T8bvtTP3eurbG3tazyp10KBnbdZr5gbm7mACIMpP%2FDacHtXAv7%2FAElBAjAHIQ2LBdN3F%2BxIbfIzzdJg6X8tHnSdSIVrNJPqelAkrhnXw1XBiWSCwVTUPegczBApAd2feiUeiEXWmlok%2Bddrm%2FLzbAm3Ue6mC7BPdnJTaCVUmVXVjqbS%2Bkf2swz77j3k%2Bs2%2BuhvSXNtCrbGkezBNKxEuDHVcoV9yUQzDJUhXcxZU%2Fo%2FfZIHHx4PosLR8bxCAfyqGmTj9g%2BpZTQUYbbMdPC4CRkz6veFwCFf4CR0LF%2BhgBx1YSmzw0i622zkSdZl%2BCrD3gLoyrmentdc2a2dakWg25HFKUwILkRd6Qw%2FWMijBqcFHiL6k1lgnQBArSmUrijGbO8mK7dvst4FjlM02boP%2BF33frKseUOB9bfzDvs%2Bu8BjqkAb6sXaT8jzQMbyRl%2FZlTMqKRQdf1pjICL0WWKT0ngeMF1ugOVoTsULw8ArnQhWVAhvNfCrNJzRyw60rxPdOgdi2s5Wp7j6WsbtyGh%2BI%2B3DWb471WbjPVTk1VTGYWEWSa5cYBbsKdUSTk8UPRzdsiSyN%2BEUDmxIz634V5O6e9rMZ%2FKaTW2hvbYKUprc3VEhjmkCSIemUZcH5%2FscMhBXcvO%2F65ZyzZ&X-Amz-Signature=f195a27fe9500684c22d5f00d973bb43f572a4e197f92d3e4791440ddaf6e67c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
