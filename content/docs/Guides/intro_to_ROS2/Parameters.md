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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SNPRM55C%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T230804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZtrdVOHH0QkH0f%2B25lhWeFNLqPTIY1WOCg7L2ZJi5DAIgZuK111t0rNuXNqgW3xlOlVBUkLrtWQQKkKGIYw%2BSjfgq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDPyHu4d36%2FfQZLykLyrcAxLseTrlCFCvuB2q4vk5kjTj2vEPSvimD1VggyVhLDKR1ramCe7t7C4rGQDOOQyKY1LQo2HS1kmu8plEKJT10MMfRC1OvOr3KbQm4n1I0ftvynASOpH8YotIdG8fntnanba1pDb64Y9ynxXLy83nxJTYJZN5XYDY2tbNvrs9xNko72CUoJPBRBhuIKPfe5OyMyDwOuBEybobVwKy43vSsSvK7HamZ9GmtMdA8MlfZSKL5mST%2FbhMS%2FQ507%2BRaNCkKc21TiyKIE43qKQIFQ2lb6CtH9soYUzjfS31CKJN%2B%2F5XbSoz%2Bqeskd6%2FjSchCuoolkIR5ygECZBN2vEGCXETU0CQPhfmCNBNIF1ZAtjFB9u3H37ZVFnVbxw2r5Fnj32ka6XNXpxN8uHdHdw3VTBzPcgp3plt5q3sEvgnsQdNQJTDX6LgqF5sSvt1laVAR15b5GPfZWz1AUfzA3PodwEQg85zU7miFJphMggAjVafqE%2FcwGq457zKh0Ak3PL383OMhPENpIMPgbijxuiWRDuX2HPuUaKYkbud7y2pEMxn2CwpzlbznLsD1M4KwZzlrtJNdo7xkXjtwJlXs48LIJtHn81CpuPJKFe0nNEFXOf1CUnejal%2F2ydYFYjqxWELMNSHhsAGOqUBhvRuEXt%2F6mxYlLolGa8%2FcqOBlqMReRm4R%2FAyAK%2FMs4E4z1u8Jl%2BjEEk1%2Fk6gXQB%2F5gnhkOl9mKLB%2FAd0RcRIAa4AWY%2BGocy5Qyaz%2BkptD8NZ9DQcbUwZTlth%2BB1IpJwOz%2FJEczkqy85dCqdLsXt97%2B2ohJTNO6PU5hqAsDKfxNu6pgyy8lJvQpDRo1PI0DQ9WOBsPLzXYYvlzxRG6lIEOt%2BVnRx8&X-Amz-Signature=0f8c10e1febe79f1532d7f7f82db2728a7cca17270146820ff710b1c4d09345d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
