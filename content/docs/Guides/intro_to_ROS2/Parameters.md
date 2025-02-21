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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IPWDJNA%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T150756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNfj0tDrWZlJcbroWqUIru4muYWEcpxKZWKQXWJ8LpMAIhAM0Z2IFDDuYYkdGzQuL9ngeknlKbuy1%2BWf0IXI%2FSPqJHKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzyMqAJxJgVYRSuuoEq3AN1R%2BUEWpJBFvbIKc62Uco2pHJ1hgefeE3u%2F1PkcP5zGBwaF99JKjqyUUKwiE%2BgOFW1KOYB6Iy1OhfBSzARA9IxaU%2BNeZQyKUOw9BFgouG0vY78IZFXFsaO4hd9l9CQsQvvqwWLrMUZ8Ilt84PZZYFHC9%2BAX%2F6RxK208%2FDA4M6y0fEPwDTWD%2FR3HJ%2B6RaifAyRSUPMFxgTy%2FcgHPTVgg6T7aKNxJxXBpwCE0HTryS7lfaOMhPvhjYXx2sdMvCAkBTqEirDCeyfx%2Bp5BSP4kD%2B212W7tzaaDGZS7wE2PWc2LZ82%2FadAGWAo4FnZ0B%2BzUUgfH9wD%2FvhTdEuIozcQlDaiwV6HHumvH2N4%2Fsy9C%2FUWJqAcOcxrCD3wie1YcbCkZ%2BU0f4sxja3GIvdR2p%2FTUuZKR928gfm7NlCRSFOxpkdcKJh%2B4JGqJDfYZCnNexpqGrdB5oXDSH9r1gUfa4aM5YrKv8nYk2hiW1TJTv4sBGtR379NYNtLA8YFiHt73tXUgFf2xyYxGZvvlMD57xGNlaHbCr%2BvheXIit5OFQ0JpkYA%2B3G3FEJDJ05D00XjhQU2Y8FpJLmpSzGRobCQVXAzqn4WftwfVusdc5gHAOwkIBO2bv3NkRfLCPIMigI6rcjDHoOK9BjqkAQM0Z1FiAc398xNfphpA0Km1KXNceRhe4nOxN8IS9NEIxAri%2BLs9awP5wxMkiGiYC3HxzRHNTY5Bbxc%2FZ3kbOxpq16UxAp6TkBVfF0VcOR%2FBUZ0OWUUCPH2ORohMLD%2FYmt7yEVcJahOt3R0jz41j3g6zgixZjgmESM%2FL2%2FNy0JgEhQRWeWzjP85KV6ezKxfeM2r1G0uG58C3OKjbd%2F6yTddcZXwH&X-Amz-Signature=0618cba4dd7029e37dfbcecc29fb96384a335636e1d33d48c02d7c465b45b0b3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
