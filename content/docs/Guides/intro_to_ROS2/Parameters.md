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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNBKLUYP%2F20260717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260717T023840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMHUfY0LVlXMWLNLUppJCBpQA17mRtuaMMm1wo%2FQ%2Bf%2FAiAkVfDM9jD4LHE6wd%2BvBLhCsKRBT68x4NJ%2F%2BaJ392OtcSr%2FAwhUEAAaDDYzNzQyMzE4MzgwNSIMtqwanYmsqnr7IPvBKtwD4FVR46w%2BYOazpFRz3CCiGFv%2F5XNfnKJMvAjq2lA6EV6RqdKuXxuxlw6AmjrhMDM4%2BuzaFNuRZXQpNfSiRq9cc67rytohXYRMte4s%2FzI4ph47tmqnYSFJgv86dzJ1pq57XOcgCPnbYwM2dPdxGzIg9dsP9GqAtGLiE%2BNYQfaJip2zB3R88DLgTnVnUWXPa8E0XG1SDn6UQ%2FCOQSS3JV1UoSJKP8mCwTzQ37z9Bw9zusVtoz1voFmLKhR2RQxokIxOTaEzlnxYRV3ghG7FH6RAmbzAFFHhlH3UIRV%2Fg7oa%2BGiiQyrHYPzWChXWz%2FjisIV2sUnS3Zk4j%2FQJSqQ36Vz4s7dzYRxs3etpFxXlAFfu8vZm5AL4uP7gZx2MEEe%2FgQVHwrOUy2C0sV9kMHLX2zLc%2B1e1fiN6SgqZw%2FG8ZhIbImB%2Fe3ymoPZiHBUwjfXhpWhYKJEQ24RZ%2FpYcOtEoPK59568PIZCPl2s3i0saZ6DFxULWA9j1ygBbaJOge4m5eRcuW0i9WQ98JXHzwT%2BNDzWJ2ljNEBTyDLAk79yc5WdE0NPtamtc63URATXDfctmlNg228P3FfZzL0S7E2ZbSyKjPot%2BW6TiiwTIQj%2FdDvZzIZzgui9XIVNmBzaK2xIwnqbm0gY6pgFzdtptSsbpKY9lQCcAyoEwiKTIr7bFhJ0ASUCCNgTIJ8aZoVmFuq6UiIcqJlbTfBB3rGUPeuOx3vX2wtmMU%2BqObuTf0dPWMGDpIjTYtYVFotmJj4pyaFIrs%2Fr2d7uV7nGt3Uw7W4aI4qMWScX73ApOezzJYx1rZa%2FFW67E%2Fv1wLzopK6ExhVl65N96UVjifGO2HUdbe5Bmlff5ZBXy7GmsSL2VcNZl&X-Amz-Signature=d929278f405efc97c7fd665040668d08048db2230566a92fa30d0944135c82e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
