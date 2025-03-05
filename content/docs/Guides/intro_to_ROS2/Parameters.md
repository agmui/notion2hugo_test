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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3CAMFB%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T081129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEG0ejYqxnQhJVdgpO0vT%2FqkzdgVtM97rf3LWquBqdkFAiAg34s6VOf4v7eXmfB8FzUTdEMgy0aIcXNKiTQUb3%2B67Cr%2FAwgREAAaDDYzNzQyMzE4MzgwNSIMgf5gbKeGnI%2FGHQtkKtwD8lzPoR1b4SemLKBhzm3bmlHMxYdHDe0FnRCBu%2Fcob0ezNajncHolxR3oeTHhXyeG66tcu%2FnqnwQRvAhYUku4xll%2BE1GuGDF1y3yrStPcsE74vuEKSYX3QqBch72vJOiR%2Bsegj68cgrmJbr23PcgkWY%2B2L%2BerWgF3yaWqNhaPbeQBJ%2BOh0wSXmCwO1sg4VyowfiGkfUyE0VJZl3UOGMxiRZv5XJ5aRhcVgCQ5hlGSvJ6KKsWlvrCNLX%2FVDh8pmjWjqhXaUSd8E%2F3ygUJefTgVhI1BL6ZJE7rkw9ofgdM2jO78S4cx5r9YNdCTWaJnV1UJ6RuS88dwvysC%2BvPkHKzOhUMKLhjpd0ggaTz6oEVDq6KOfo%2BJsXvN7ox2v7Ua4mLKL2zNT%2B2XjTQfEnKO95qEERFd1eSn67TQwR%2Ff4JRy2zFZhfBRFnbYpAC3YSqubKgg6klWcUgFPCDQLXLVKnc8AGr8Z%2F9LluulRiocUWxlTjFo8Vj7PVgdVTPtejYj0%2By10KG%2FgGTrbGZXoQQ9m3DWkzpo%2BAa%2BXq7kPrIA3NDzru%2Fqu2wb%2BNoKPJ%2BtaPEEEHXL%2Bc4EwcckwZlYrdrgRv81FySztul7AwooDXLymjiwCN4vOZJ1XTgN01mS%2Bo4wsYygvgY6pgHPeXhOwE4yR3a4xYdlphHYoq34mR6Z%2FSlPje7jV1tGLXcZP5enrSBBJ%2Fx4zvAsk%2FBQN0cRDvYjBzdm9htP9giW6GsONP5%2BAh0SO%2BG%2FPohGo5FhZKjmkI1J8kLtWqSnPWhq5ahP7jwSnvD14qzxNLqh4sLfPUUCpRM43iGVht9MxmKHsd5I2QCbgR8yP%2F9xY9o%2BiwPlWsb%2FXxqu0zwKRJ0axIImQm2l&X-Amz-Signature=f250882e19c19b724e987c78f01aa748db940dbf5b4ed5e17ff7abb08728349e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
