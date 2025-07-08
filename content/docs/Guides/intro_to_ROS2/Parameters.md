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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNRUXCXB%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T161126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGmGD%2F6tAMpUPCnekN5afvTbDMdYPY8%2BYhYG%2BJtllMa5AiEAnUjBnlGOYHS5gielXTNbeq49Gczd977d%2BqV0Sforr4IqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNs9iHDQsq0A%2FPvmtCrcA8H94l8N6XbU9qxQV5%2FzbSwWKQix5Qu6fAq2xSFZ4Moonh%2FYdYkBdWDWoVghbjha6Fp0Jos0HLXYJE39wmCsrlEiOmc52bVDcjnh50FrnputICCQDtoP0u7MR%2BcfH%2B7OTKFNMLQeuePkDEEpCLcb0JH8TIPyB3VnJ8Qoo66MlcsrxLy1eqnDI2dnpEVXTry%2F1zGV8Mpg2U3397u4OI5x9bCVcUPBn9Xzd9BwFyWx1ihf4DObhiIhU4qYieCbkEDWzI1O3ZCZ1ZdAXhkMzGobafv2oyH5godk9KCZdR2saqdupc%2F3rolPumf5yi6U%2F%2Bu9zj35PIYfuGFKlrd9YWyzQtlJQcvLoFJCwuXy6tFlqsqiCwU12HpAdZ8wxPejktkKdYEoCY4Mh0MJ4f1bzeRjGTSkEcXlzIu9kH9LvLQKoC2xz46AUiM%2FPHXNbXRw0bXm12NVXXKH16Fg291DcOD45us52RU20e17Wk9VGlfmKAxmffblL2R81%2FsRGWIfSfNjJvZvBoeLC8F5OseDzQ4xYlG3kMi9QG8pK0aBv7qYWGSrmckdkfvbvkRgTfOc9szUPqjbR3ilJ1wOiCCMTOGCvdZgCdv32abEYYBs%2BDfIP%2FSmo%2BwBzkTZ7itOsK8%2FMN7%2FtMMGOqUBV27IpbgiMVehtnxgnx%2BxLoMGeYKGu86cYL0OEfkHxaicXGAYER3Z6bHFg03uug2arDZfYNNJg4uWva8KXflur8Gl6RK%2Fq38M9XUY3AjOY6aUux8OoCkb9alx%2BNXt%2BIlXlZIU4%2F%2BOI7SDR5uDxiinYxDcxMFuFLzbcDwjpD5fed6BRXvytfBUTGYLGpib6ADJ%2BRtf1FNScSi%2BCq1uBrz0%2FzpTb2CZ&X-Amz-Signature=1914f3eb5b85ddb67021067f5c53e5962befc945e471a3a6baad347d33f65d5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
