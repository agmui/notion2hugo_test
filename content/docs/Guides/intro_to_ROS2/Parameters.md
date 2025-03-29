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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664R5MBBIG%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T170210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIAz2AyMyi%2FxicIsCfJh%2F71%2FQbJ%2BbVEDUD1TiOCiKFpnaAiEAuKM8yIsbEThGbbEZTHVmRbT0xD1JsvrwB6AGTBveZjkq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDKNE4OjKffR8eGjaLircAy4Gw6On3kcUuUIS%2Fw5cC1%2BhRKVAVFdSz5gxT5NsS5BXhUMjNOM8Ip5hbfCmuWfux1NcIWwCnLhXqNYicmylvbm4vfvf1%2Bdh7U%2BwvUONMtpwVAlyNCuyb5zHJtomZskNDDj%2FdTa2tkFEZxmcT5AvtQrpuX09BxEsSyFDppiejxaCG1xDsyGbGfEuwt0iKa9ZWg7DfHn10DfYFkukcULdqasQJXcD%2BENfhoWA8rWhIaqKZtYNk8IPSky0%2BKvbU5ch9QSM22mBp%2BjjDlWzUF6rk%2BsPn1AYhLC%2B7McSwhXZ6SJmjeEgyr0mH6uxjI0d%2FVUJviBQ4kafoD%2BCBWz9Bw4h%2B1ugR8wdzhdjKPPyoYAUZKsisOe6mqv09GsXMlZBWPcQbJNnMewM6kuWsCj2IbLDCRRRt1t11WOWXSh2XQopqAMSsyJoZ4fYevVJ5P5mmY%2FcZxAzo0b5it42hu196eFvxtoQJvuSLVQJyCe5yHv0hbC5nmc9wM2SfYuVktnrV8PsUsGmAI9mlXQ4747jam565cPJTVaGkglXLiXBzGvZbLH7j4woP4PxLYhlRQXTRmecIqJWoMCUiTjsRTJB1bTfBqrujcMG0JadwgDlLfCXCoQW2zXl%2B77I2lg4tok8MNqfoL8GOqUBnn52ZlRVjYJuigjeZF7Mw0dj5QtKIQNi14DgeqXDKJO3Nc4yYuxdb2KWMmdVlAFcDoklysGVuPxhE7WNShlAhsEwiBg9I5Kl53V0llJ8AY4c%2F42tVlh8CTsiySrBG5tbulmT7MB657qQr1mK%2FwIkjTR4nGXCjFtlgm2zJdWLxijiulRQnZYrqIJA%2BkEfOl%2F2QxW9NAUhW0hBGg2zD%2BP8cTyaUbRN&X-Amz-Signature=e296d8bad64fa4b31cf63ea75d97c4445d7a45f979ebf83641ce7700e63a881b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
