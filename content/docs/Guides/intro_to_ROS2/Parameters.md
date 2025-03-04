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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMRTQJ5C%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOXKsIzXzipO9zPiemRkMDF240ll7MbOPcfG1vNDc69QIhALfk2riipk1NWz2hWIZIK949OAuKY%2FBAA6BXBsyNapeUKogECPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkQdE5GHKh26XH0V4q3ANvObaedRbQde3yQvii5H1ILVIUIHdeF%2BzWSuFku9%2BGUroCgXhG0fDs%2BPUd8Wkz3kS8oY4eIUQwaPgRC9PyZ8k7KlGzXYt5y4FlvI%2Fjd2Q8t0ZvV1PbNtnMg%2BBlgf%2BVeX8DPdxskbNh%2BKzJIGbZv77FQPVna8J%2Bm4HkTCdmpbNCWRHemMtWGxXzi8Kdyn7qS8LkH2xlpucvNyRpeY80GPHZTaX7hWlRD7wKWJW1D9dt4SasFzmfkW54uFNqwygIIbVM0O3vWyR6kuTH4tOhnACwd27Z5vKIdDwD7KKWYZJRUlxL0XC7Yh4CC21SXLZ4%2FLTYHVJtRJ8CuHozlcuzg%2BF8JJl3lU36%2FMAhzki9ERW0aUhIiVuo7O2oGHL5TACIGTkvD3jrnzCvgZTswf3UeRcYOQXLZzbKuUnr9TQXpKH9RrgEDKBi2mmfD3kdv4SzkcnDjtjY9CP1kLJ3BdwwBzsbbEcIylmABfZwcjM2x6FFSOqRhK%2BOyiKLVsinMCmluWh5mOAGXWkSgvGiOMh1SFETiWlWKpwENiwCOFIE3WQjJfqQAsltkfzGGHaNEv2ec8Yp6U3rO3IiGsoCmTcjkoozjy2GaSoxBZ%2B3O6oTe9j0tGlDHyEcTU761VkWdTDh%2F52%2BBjqkAX7ShgIvtd6CamdABJ3CmpXF64%2BLgm1OcvP0b7jsig0ENOvACM7O73obFrCJbjEveFnWMivnh%2BofWxObVq%2BfvxnTzYTzLsHj587RMI4jnDbWHAZRHOwEigLBfN86btTko0nNomfbMM3h7xh2d9Mr3Wy%2FSFpFKeM5asnDdG3PIbfvtrqjhK%2FMF8C42VmOxwTwWfSbXeej58iSUe%2BEMihp0NzqiMeq&X-Amz-Signature=e3aa8125c323a2ed1f8df79d7d22d7f8cd7666ad89cd670a4e6b2ffa87a4f557&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
