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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663C4YMCSB%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDGMXf2lox%2BmsBNHwIOF4jyCh3fFQswQojqSC0aMvYENwIhALPTJYABFxLD8Kfk3lZnfxT05UJahxG3g27aM3yASIDYKv8DCFAQABoMNjM3NDIzMTgzODA1IgyHMYxDiu6RUvAtTuIq3AOgFbdc7%2BZ%2FwK5wXiZG0Sb%2B%2BwhvC6bqv2s%2Bf%2F9Nt8QwbdGsChNzmoDWEj9kBlz8MBSUSHg4cKmhhjSVNDFWFy2Zdz3r7Of%2FW4znUJcNlPQb%2F9Yonbt9ud9rPBgJtfdR6TdCEgTV%2BUOsll9QfFngFbTYkBZSDE79z8cvChzC%2BNHZUX0c3zCPouOJiXFb0ViR6Vmyd8JiBsVuBbyDj4DnGFXvZGYP%2FRXlyJnkuJtvSGz0mQEbmku7gBcP2PSgMuMpDxuQb%2B%2BB6ZO4ESK7elzt2j9cBV2Rl57h2ocSwFt4y7gUeHLm28QQQxkRWaZRP%2FOCSkR9B1wDMzIzHim9ehf0SClWl7Oy4H7%2Bis%2B5z%2FqdEkvwdPvCAqnTfed3Uzctu5qWnDKweDddyAH6Jb85hgyRdVnxcMW8fXHDglVuSVV8tUvSqKyl0dV6J6hHhyaXBmn3gzTnNtvJXcG3KhJTLlJeLPulTreut3YsDZnqDLSkQfs%2BUrTtJgBE%2FxxmcV0T0Y4KucBnVY56mtGMRzFJWMs0%2FLo6VWfMvuFatd9oPMFDeGg7l2IY6TXpm4NqI7HrvAb2U3NKwzZkF%2BTQi%2Ft%2BxoUZ3NgKJaqmcL2%2BdBvg4UIPj52KyFnTCN7UF4oqR99p8TCJ%2Bp7BBjqkAZ2WXOhhrlG5wCf7YX8VYeJoELBrhd%2FlUuTEt2J3%2FO8ycTk82zdPvUW1d03aur%2FkCFdqpYDU4a5%2F2LV88V85BurHnzveF3e7v0bYmc0T4KB197XxSOgmibggRLrQxfoeF5tVdkXWOUcBTTV9%2F%2BMEkhQAHxAF0NW%2BDnb70%2BAkZn8GbJRu7cMEes07Q630Tr2wORttywxT8yuR2HmYMqIFG%2BCrPRBh&X-Amz-Signature=ea9ddd3f56fba4478dc9446152a20f67e7bfba7bdc75775fe30a7c64d0c115ef&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
