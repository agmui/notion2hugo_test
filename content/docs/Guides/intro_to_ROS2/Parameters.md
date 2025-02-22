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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QASDIRNQ%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T230352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfEEbjnxn9AWJMjlqgRda5NsetRxChVH0AYNF3svR9lAiEAqOCotEZgMNsodjXvmBZePFcf1xOrbnr3TNBJT%2BNCGHUqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE2Hf1xGKN%2FBeTIM%2BircAzxgRbTvUDjBeYY%2FOKh4Xo39FKvSIt7%2Ba3ZcXGsTh%2B4AQi1Wz97NXDozzefpRqeEFnr1G820CjU%2FsWr5HZ%2Bp%2BDJ7HOWd6cuSUTWjTRkXQAl3sf%2FXbiNbvBOmo9Lqn%2FCbI1UtLaf2fpRGnQc8ZraqniRNnn1cfHhJXNy61f3jUBrZE8k5CSAbNDhYHeYlmdLWDL5iAixwKQT05%2FCr0e%2F9ugXRAC6LOrMGZog10LEQDIzZVE9fhBCfxlsN8xAghy3g30uSY4ybM7w%2B%2BYwYEtEUd1NrYMfbsx9JuPeFWYK7dGiyr%2BW32hQmFF%2FG1zi0MDMaDE%2FTKbc8gafd%2FM7IrQIuZgngPW5oDgUF0xl81%2BRlosIQRWLG%2BZ7QzyC3%2F6FxRJWJrQ5%2Fdd8G%2BCiHDOjM%2Bxb%2BTf71bE3cGS4Xwc9TIO7NNVPlJZM9CjHHEHiAArH6CmLwjSscLMI5m5782PWpcV39Aos8YIjxAzG2YyFz7Ug68utJs3RxBJyuecYjayRaLmWbaNFljOjFW4abUyqNM3%2FhXoxEgRdaa15%2F05wEeVSYJwsmQtjOYp5mnmdw3zxOWyTKGhxdn5EWLaxnS8r%2FGlNhQUrQLZg1ai%2Fys4d4qiGUwkUFgU0J%2BLuWVb7CN0vIMNqW6b0GOqUBB1kphVBbyJUg7r6rXOkXYl9%2BfUJlGwn%2BGALWxFCb9cU2s4WmshgZZ%2BtgxaiAsbhjO83PYtsprZgXZdnlF8M8kjxvFFXWKi41cQx6vV%2BioyF1ZGd0THxH3Wq%2FvHY9ALKll5wZeRQ2Z%2BKYHoJzmgi8c6yxDN5UoUvpEbzS2v98i3fUqNW01Gl9NVMfsr6s%2FFcLAuJr%2FtxB9GsI0jnZEoYnWWr7W5fA&X-Amz-Signature=556cec35a18c6bd4f5e6f97a4204938324c2782e987d503fc733af8dfb83b626&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
