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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2RQRP7W%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T230805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLsL4AxxLyt6%2Bc45o%2FVmWiw9BSlB0Tlr8GILqNmlplWgIgPuaDIUAWvq%2BGSfVt%2BNfFmBtg9xLQZVLi%2F9aIKUE8tYwq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDB9TdqoIBwAuKXBE3yrcA455kOJZUiwGTcwKQ0H%2F5OLs39n%2B3Ww6O%2BWzoYXYo6Elv0ucBqZixtspLemu98%2BUaElsFbcPJYhKeeUjQ83tcEqhDO40bAypWzipub8OZV8bQuKwXASlwOK0qS4JWLDgXMYfIsghycfMBMNDe3VCiseLcHLyH%2BugbRHDEWu5kI%2Fcf1xkgeWlayxI07yyM%2BRo5kyGfqoNfMZYhZ0cIsShjjRnn1rv8XegJCY9ynHdH4eMUji2jIByCrggeQOBaRujs7beXGf2AEMJ2FsGW0cqm29cNCthZfCT3N2RPwRcc0V4%2FeSP%2Bi5j30ntIFjCjdUXvNO8W6Q2JsqkfNE%2Bcc7oYHTdJ%2FPwTah1YOrjC9dEuuxjT4psVRyz1klfrU40K0C3uAuHsq7Ey1sdwuKH8AKqXDoYm2jT3KvNSA87enR%2BEL%2FyndnPPgV13tYczT2nEyINHkGmJjCjoceeRqYy04JA1XHf2QzSp1hVVGixvhNGQ%2BtvA5B1TDaLg0FQKEjbksdtGMs5UlWs7B8EmXPAw%2FPgP2MS33INEIa89kKJ%2F8D%2FEpJJfylnJABLLl4AKpn%2FWSqdFn6CKD8SQNDL%2FCEwL9vIuLEQpsA7mHLaqLHyEG1d48fsY6gaO3iLq1Tt03pwMJ7ggMAGOqUB72geLM0s8VI8%2BRRssIphabGeG4Yva2i8utmPIoekoJQjbl0lJN2KaHQ4eZvHAsGXK%2FLI4S6d%2FfTV3p7eMYbWVEY%2BsE3lq9wPFuVLlu9KTs17kYmjOnBngFEPKrexrWU%2BZAdKofm9p5G6ewaOup4vFRT%2Bv0etl%2F2X%2FukHrlTkiho3qpTVKYeJxgfZ7qP1gpVsLvIZg3LgNq7RUclpb7A%2B3%2BSqHL56&X-Amz-Signature=a28fa42a7fdd761adaf817b128f6c14582a7ca5b22fbe5b6a59bdb2c6c3479af&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
