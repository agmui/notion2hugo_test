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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLVNJXIG%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T133334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCIT%2BO7KI78S984iJvK4FZBiefLBfx9RkOtSA%2BVtW%2FGBAIgNL%2BORH898LOAT6Zkl9jK2VL9E0ylaJAl5RfarOd7P3gqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2FsWC1B%2BQks6MvaFCrcAysD2DxmMnmqOfDrLbR59qW0LAiPdSfGwek2LUTAlkSuYXZhV4uIMJi01iwIoyUmAFocK0rSnOjl2BsSq4Wh5VztoUplgnQeh7YsqvWWUcfC%2FyzSGgGviJnkk9vyBEiwSRMuN9eQGCduFc%2FDw3fPU1UoD9QWH%2BkjOEofoTh72IE7PBc8yK0M3aOYatrQgWkoeobjovL5xayLN5dzByYZInxLGYXiyYzgQDf7WPfBrH9%2BxletLWmR7iWnVT4uC1DgtgXVafWeaOkGnVCbGxxKlGvOmVzkH45Xe5bUdHqsdtIKXsmSTAQcfYT%2B85BZtTvpzp1u%2Fdl7cDs2rTvGM6RIeDmbQDuLvHe%2BZ6ScnaZWCLOm007j5CnRZKkQeJm3p5kktvRWDdcmQKEXk2EUudV1iOhBybWz6KNXPpLiZlRCGQEBSdME0GpKCxhJ4sPHmJUD44bA94yCz6BYDED%2FRMUi0TvqWF7f2fuWEIDRSAB%2FTw%2FacWZ8WQ6mVZ%2B7QtfrsYjuCXnyAQr1sI4iYuTts1SU%2FVcmYB82MQmRv7G7Yi3AtLsA94G%2FzEj0Lbxse3I%2F%2BHNOOmkTc5WyOyLmQCSSBEUVkN7IBecZGaxpnc1fbqVDS50MPmTdRuBCeVKxJHp3MPeYo8QGOqUB8maF4PSmQ%2BRFxumu1EKcEKEUL%2BYsdiRge372cvZAd8UzlOtNxdqbdke1Yn2x8%2F8F1Rv6v4x8xSW6LD8%2B9Cn4ptjDp9mGdT7UtdPzYP82DpzS9WsqGEDBY%2Bk29ZFmILj4aIDNpyE9rbRYfqrrC20FDuSks%2FtDDqfKJ6NaK%2FceV%2FmwI1fpNkeKjqVOl9uSSjOapGySW0soQOSc2FoWFRBzRPd6nXne&X-Amz-Signature=3445a00e28d438262f898447b46493ec443697a84b7d97a6f8b789044312d55c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
