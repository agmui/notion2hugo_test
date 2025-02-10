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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJP4MM6F%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T210725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIByyftBwzh%2F4N7bxSkrO%2Fe381j7qYPBYM5BUcRUisfcrAiEA%2BZ%2B%2Fi8uSuQydEojB%2BTvrI%2F1ZTbdlfL%2BRFWSmp4reSkUqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBB30DUKUNuw7xBTNyrcA7K20zcnp0Bxf1wedrGeQ4YSqadIPLH%2BOM4aK8Mb2aAzkzKq1xWF%2BGOyumJphT61MgadzCzHPZ9d1Xy9tfYLmwUO2nL83czgU1Za%2FtPFmXNfZmkBPRP5bu8Xdy0LVidzofeF8xeDEKcgPJC1OSFWB7m4sJ%2FLmhHiiQ3oQlHWwpt%2F0m19cM2HlxbIXsQ47zvwtp%2B9%2BIaQ5JQ%2BqSTcdd7U0hqX2f0wLy1wlj26RRFnfp49rWvNBd5X4QVtBEijy3ZDH%2F7NrkhZebp3YPP%2Ffu2RvtJ0mUbUYgBOWmpaTdAqn%2FzVPpLZtSwbvx82F8KJyTA5sHTypSdbDyjgIdhIXxL1TFp3JZwL1GcTsmwmQmzyu31ZTA85BvEgrYT10CM8wrrcVJb9ooa8PdDrDz3LlSSRdZPzbgiZ255eKunTtgbY7FFp%2F5JLJd88JOPNqsvtWePuC8tVDcYKUmlRjyP3cNMnXCQZZCXbkuBg66s7xHumpgWHc%2FR1hQ3Z3QFBnW333DD5BmdINUzJF3flbaWBtugqo5nxTbxpVdrbYqo%2BNxaogMvMmK6hicz1nJXnhm6Uq%2Bho%2Bi8WvQR8jjTUARehEjsd6AxyChSpwQKYMCZKv1O67gLdKgxV795Bz49Kg1ZTMPnMqb0GOqUBrie1ZunUBr8nvT29W2nS8w5XwkQuCMrZL5p8kFJYEDVlXCzEEuGe0iTer9EU66N%2BYr3cis6DXLx9QovGFgndRxH%2Ba4LcsfazvLyhttRT8uSM2wIfi3nR3ydkH5ov7koCOjj54ZETusxcP0eWiYHDsCkyoxdbZMcNT9FvLu%2FtX4NRixUVa8i9dPhP5v5%2FEXFyLCq7EbGHkgXxcmtvdb1mmmM4PDbG&X-Amz-Signature=207dd6b1a9e77465be45452f828a0b882acb8430aef743a497a1f38c145f3d9c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
