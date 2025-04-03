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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QJ52CBA%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T170758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy6To6GHafEyRX6P1ApG0PyrrbQXXv6urjso0cFkQ1UAIgaN7rcvUJ9LOscoos1lSCkprSySbJA9aFUvtIEau75ZEqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH%2F%2BsWqtSAUfP0TeZCrcA0y26nwqHi%2FXdUe7WKVfxMpIRPk9TFhIvu6SdvW%2BuBiB7HxjR53RoI%2Bt0O20KElxBjkqCRFbx3obcY%2BMDm6KHl9S%2BO%2BiN31mSrtKSap%2B%2F53eAcesUr2cH57M2fs%2BNKImL0rJhCy5WORz6MfAppWlZsI72TNUHSS0Z1CMW8iSlRrM5fnbKTOvUjPOXZAstroTNpXzU8maSHdDRFWcPmm6etFv7OHXcBV1L7wePYfRxUKUo456aivpLRBsZio6nRT0BWEyGmVOHGoKqU2N82ysLrfLSF5h4e8WLU%2BQlmz1JcXlfo7TTL%2FxKZHmHSBDxCYS0buLZtQmtO06KYVPD839dVQkfBiEjdholOcB2fsB8kwLRcUiZqIqmBX05IZJaxIzyv78Cx3j2OaK9cyjbXB3gtccMM0Xw43EAEn5SE%2BUU%2BalwmftU0xiibcX%2FaWjtGLqO4d5r6rlkHyFWgSFKQwK9fmvWPJOKD0a8ZX6IMelIAHB1S2dy6uJUQQ6AhW8tNZbRPoJo8HrAluJXbmrXINM94ZDbyzewL4a%2BppM38U%2BwCGgwvBu%2B18%2F4iK2hDgCc9jacPFTDLAQIyVMK%2F%2BdlsTpNxbcJAmeOi0Ch1IomfOeAvBwdNuKTYKpU2F11RbKMLLour8GOqUBzcm%2BbPLRAWuksJFf%2FaIF2%2Bl7kEpAyPs8AsD0LES%2FmmvhqjEzK7wwfNGS6jYvj2clERUpj2t3NTO9z4v6I2q%2FWQH%2BGmTuyFibAw3S84lH38MD5xyNbhWDCeb2xl%2F7GWsGiiWixilHsHMV7JycumIA7y0NJNDVPQ2A5jxlKj4KgA6Y4bfzTQ28xw0%2B9u24Wo3LrGnOjtsTZ%2FDobM0HlYJjnpguGr%2Fk&X-Amz-Signature=3faf4d766646b3915dbbc58487dc720cc13c2659bbf75bf7af59a60e2a6f74ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
