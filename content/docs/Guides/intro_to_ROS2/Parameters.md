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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IRENRWH%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIB3QsXkmG3khkWhLsBmVEGrlpjiZgs7Pmp8gzsyLZF%2BcAiEA14Coz68lF%2B5ujMlf6C6pazynCxSJPezMZhmzgLFQmd0qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI2G97hC6Rw2Z%2FtYbSrcA%2FIoa%2BcXM%2F%2Fx6pWn%2B%2BBmMPQ%2Fe%2FPfxNw9Cr5U9qaz%2FbBu6wCTqXRIfopkdnDboSwMWM5ma5mrPUmYd4uquCVlT9ClIAIh0ac5kuBTAO766eS8NkjkgK7djVCX9Meuq81GBAvK7fgpBuIk9lJ05474xScbmiz4r4MELQ2dHW%2FFwQ%2FumZoHFL1D2xWUPHy8LwJSayXEJ80UbMqUE60KSsxAHJjzupitWzogBRVDlUXTyQ4jQB5rnR%2BlSpkD2C%2FJOf2HUtaawkXHWBNZTqmZb2tNGw7mvxvK3Iy9HZJz9q6HQK%2Bv%2BxhXmRxkjNpUSxVho8WVLWQ4GgDwhy%2BZTmCCSjBr7KPIWFSIDTUbav1NjlXecUq7YlrzsTQsnZzyh7B7feyK%2B%2F3YwK2Cx%2FGlTQh4dATmCc3d0on0efJZhpQ6CX4qJBcoGNsRZjie%2FcJIZ6YhmIom1SKj1XKJ2Z3VCG9IsOlPn6MN6KjP%2Fv%2FTB%2F1%2FTys9jklZv4%2BHQ95tlzoWkgqO7mLDu9mC4bJDgSNIKvb8mcFtccVcFOSofCyHxM7o0ULtt8WeSYioAC71WWYSfVET7faSLF4c7urlanz7PiDnuSuzODHjgpFu%2FKW5htdO0ytUF8JYSwG25yfPq720KwvaMIDQ6MMGOqUB9eWsmLMBwTE5C9kzi%2FH42v5sxhPdlqmU3W32cheuQbTla6DKccH0RwIBIExlKwC8Ef%2FbgaVyPILCeP4F6kTbvHNBEjYT1veLZb5nSpoEild5MR1XeAuTQizv7YzwDzBjq%2FXK9gDouES976vlF2XN3ux4G8o10b8883ODh6Bez8r4EImyQlMmbyr2Y4GtTBqB3u0FKHR6wYU3%2BQ5S6G2%2Fp%2B5EHfTG&X-Amz-Signature=1f49e13987954b05e427e2d76b54cabc18186e58d9f2927688ca26d4b039e760&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
