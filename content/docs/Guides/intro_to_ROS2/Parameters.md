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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDB25N2G%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJGMEQCIAuqi3phi6F3dj34Ro36tiVswFNc9cU31ldKK5Br0JHQAiB7hpIVi1nq6Ubq0eRG1XE3rT9KXOYT7fAxxgw9FwmZSir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMr7vKnkm4aZ%2Bi9Tg8KtwDWEDpatmlDEmwtXDQjCVCjByMtnbL9r1SZ6ybZ%2B9l8x6hha0metMbcs0OKoT7HrJvvljnJGXQar6lk0nTx8SRljImT8iNEiOv3BsS6uT3KzX1HOuRyRVVHYpQRCPElINTp%2BD3zqx%2BlcQsFGEjEDc8DMzBVnBjXzF11y3dUC%2FvGIkmfCYTpXSq5v2ud%2BRoxuU6Fb6RWeZqNR2f%2BX%2BEen28Ls7ubWtBLEvARbyW5tpAf5srwnNltlg%2FGGVIHGrtNEPvgAXWUxBk64efhZ1gsp0lyOHgB%2Bb3Mf%2FCQXtBc3ygDmMZnqRtKYlvM26YeBmrJX5Z3mvYqh1UBVjagRd0ZyzOjCW7WSzFd0iKF7tSSX9QdtsBKDFASWM26ucSoG7VQ1w6t41hwo5HcAN6jWWEu8y81dfIHxVO1V7eTJIQcSoDU8RKJNEecsd%2F9J4LiTfPdUOY8JD2CRsu3zplc8aU%2FUHuvNLAsXABixONl6onyi%2Busk7FpGJJan1Tzj6R8S2d4tKHGy4mxzLGFx9MgMncXXpi6zyjVM95r9XVUpRfIAZ5qqDfKIph2M5SBGlq99orp1na7sQvuoNjf4dPDW0E5cnmZIu7HZIrSRrtIhic1LLHwISzUZ%2Fsfh2XCZRE2D4w0cr1vQY6pgG5Kvzc4TGBgXWi0YAn%2FjwauXL9E5U5CO7Gp5%2FcWS27YdhLMM1BxFWwjgcbay2EFLmFtgAup4S9wGpdYFScxYvQlFy3UrPOFr5UhJLYYa34zpeCawMD3OAVvcPnVBzbkLzI2RPX9J%2BfifyuB8VowdeYylAaiS%2Fjx%2F6la8QLay%2BRBnnbmAaTgLS%2BuIXTmDGY5kJR5hc59Pg9fOtWskSdJd%2BNRhrg%2FTaN&X-Amz-Signature=1ad291ef417bd2bc4fb1fb1ddf9ff3bff34cf8fb9c6c0f9fe6d0257fda484dad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
