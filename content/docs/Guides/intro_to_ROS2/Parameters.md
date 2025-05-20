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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKRQEKOR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T091035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDTPVTCMcRXl3ou1a1ceAj9ZsWN6WmTlINLIbwgmNUMRgIgbYUx9oQVQIuwHRfqQ%2Bs3urxh8nfLoQk7pIK%2FDQWTiL0qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYK1NkRmhGyNrblIyrcA5dnTxue%2F2u1NtFkulYnMHzmAm%2BAOthtmSG%2FqwTOYsdpeTq5gnblWxKiUt0kUj3xWogLlvCEeqIhOG54NOXfY4k%2Fd%2F7N2pAVvDQ6u%2B43orvtmYwvIYGMu642CsHyYAv%2Fn9MgDZh3c2FaPxa6j3l18vQmSHSySRfUyXxELhxvVRlFOo%2Fg3c22ZfobAViJ38pgSQdCD2lXtCEJHQ8eb%2BpS1cgXyFQ15fGxpxF2hmsrpMdYZWeC%2FocYuQvRdPu9d79ZXlwDqkdaGQkjs4n7IzLXtJ3JV2DWzvCPzEE3JJuozLpFxdgHAz8UWboiwLY8JSlwy%2FDzFip1oVY%2BcZ%2BvVnz4lbw83URVu%2FxaqTIigOJZerPBYJiblJTz%2BRLjsGbo%2FQPPpwyvy98HRAEvNdhII2AzYmeaL8D5jsy7z54C9Zq2my62gpuDFZ5LDgq1GMeOzeiyQg%2B%2FIZ%2B42RduXfCOSf59H2BiFrDQ3yfAeKsfLR1XckKPDSdKLHp7ZqwcqgUpSPTWYjGUSh6HB0XPFMa%2BT2veAffDJY9cetFh%2BbEwAVzgTOWfOW89kXKg4UMsLJ1U0cPOORpKTLUfDi2o%2Fy3Zy%2BjKXktu0%2Brj3lX5pIa4lSwDZVpCSbEv2e%2FAu8OajroAMM7GsMEGOqUB8HsRhovURAEgUywKC5DbtAz3rU9Ua84NpAdx71ahrkZhpifySE6lBLut%2Fb7mFEGpJSx%2BjrGDjkwuBNJeEfyyERktAScwqBE7yPancR%2Fi%2B9F5aPAO3jpLUFSflkIQtRIWDeehTzp4hFASyuzrIHNxDwzxiLpPSojvlh4n4l0qLP%2B6tgFc1VhvnNtyLYHTqs%2BHkrqXRTVEM1yoAHbE0fDMkMmNvmCg&X-Amz-Signature=3bc373b71d4597cbbe7a8ca3e4703e9a1698aa2f1745d6663b90bf5342484c11&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
