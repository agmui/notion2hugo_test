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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YO3UYASD%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH12oySi86AItzMTiEcMR41v2k9l6gLLUa%2Bltmvd%2BReMAiBHHxgrWZeMVFiuXLs3svwece82nXD0N7a6vsHEzj513CqIBAiV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMV955b5sE5ioPEBcmKtwDYATv9qs24NG7N1eMC5sNj5fiPqQJ6HKZ9hZ6%2F%2Fzj8hBRrn1JkBgY1H3dLgKugRSGfQE1PHX7JTlV2uKp4WbpuRs2uKIuy8AAosbDg8xe4XgEee%2FyGg%2BvvVXcjQwXRMJ8%2F7AAuraslO1d4xDT64BweFb1N1SkpsY1xcHX7qMMIXncwqo2Dm3Qvc3PISus%2BxRg%2BIG5ik8Uv69U3PKGZUJVmfRaggJMy85oxkNYmwhjwrn%2B07Q%2BLvxaTgI6stdblu4upUzZiVdUdvXWgGq5sH9V9TWhbI1SJtw9JNeL8yVkQi2bHOH2rY4HKkY5OyIXaYWEYy2ifqxJNszqxMkTDqGTfbgjMY6KVKjnzX9ymjzcNmGAWnEzoIHAQwAhgLMI3Sq7IN6cZXTbB2LHTh71ghiNLlwIuh4hgsYl7FQtmGC0mFWsxXY%2Bx041qQzkHJ%2FMHkR4B6mFaWUNFTwu4F94suCLpWUKRC6m9loBHUH91%2BAYH%2BfiFEknUaUNC3%2F7LnVD5MNUTwqsbNhXYa5JXgVTmbbcq2cvrod%2Be1v1YZ4K39eBT8TQn9sC50wWQowAFA5AYDXTddBlTNl1RpzZPK47t%2BADGWR0PS1qiOGzex%2FGFN3XKxxBZpz%2BaEefJ7nwAPIwsOKXwgY6pgGI3OpECoA2rmAP48H7uCYpKALGCMFLQ%2Bo020akIowHE8ucey9R%2FMWRAnd%2FQ8PiMn5SETrvs0zQO%2FvgQ52Ys3go3RJKtC77oXiHG56RShnV%2FggJqj%2F3CHh%2BMPP7M7TdcG13tY5tEV4smxGx8%2FfRF0prccgr6OsCaXKWgP5ejS%2BtrJHIyVvTWaC%2FAOv5hkHp0FWvBvXwYrLiOmn0pocs9AqVcGm853av&X-Amz-Signature=7127c7b7be009a4ad2ffd86167dcd84ce9bf8d34dc9e9f5fab5f105988f3329a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
