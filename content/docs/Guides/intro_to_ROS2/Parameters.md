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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCNFVW37%2F20251222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251222T014941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJGMEQCIEv%2BmaLfrLg7v8q4r84BKLx%2BmlnQrwtSBUzV0U%2Bz1uFXAiAYVb4kmpLTkW2U5mX5rPS6Lf0SXVho4a2L6dBSXMxA5SqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnok7Wut3G%2Fmjy71zKtwD3Mzft988i2wSPuCHF%2BbJMIoyeMVvsToVIdY0bOXVa%2BAdp0F92279PO8SsqZo34DudTownlOXm2zYhoj3GCf54eUnD%2Fg71Z6HdVeewKXz392HxFs5sTM3IEuNKy2%2Bk8u%2FHWD7sX%2BkU9LIa4Kt4n9uWHzqPbgiCU0yUX7SZv%2B%2FcmBiA3ON3hr1RI1C31WKn3mNIDuWbUQDqfMZz9bClBozGUifyoS2HcaOY%2F%2Bc2x23U%2BJb3j1DK2S8sFPoMygal%2FJ%2F8MHjwsDM0ETTa%2BMZ5YSxzYHjXRL36qkhGhKOsAI%2BJXEPwIOOAQnU419T3MZ9jjfv83hOKILcLndcG%2B6Z2D0A81xFSTntP4WSvCSjx36JYK8W7yoJeUWoM%2F9vasCfFbT14hoSwu9%2FOgI9F8jy7saKM0F0x%2B%2FOpYG6xXmmsW5OVZfOZm1LLSHsu5fyM3kLWGfpPcI56C62n3Rx0zika4c41e5DO6B%2BRrzspM9eH7YBD82Ps9IfFDVLiHNak4QvZJFz0LMZi1ENx6QQuBKA37wcZwHrmPD3ayKVg83Kkk9mLVg8hR%2Fdba2jWDNBxRKHMnbvEGjTZ%2BT5Bo9BU2QHH8b4NKBoMMsncfTTrgY%2Foo7UXbeeWP%2FnPmdcrlnpG1cwyfmhygY6pgEkDSNcJck3AUrzJHR2m7ITwJYCt3UUql8cIa3fxFyYKL%2F6Qxi2NU%2Bfwj%2BJr63AfjLkJb3quq6j7dzCnVij%2BzLsQLdTi6JbJtyClRfxZau%2FFnlc17ewasY6kFcWCbvj%2F%2FpOqlr25%2BZEZqMt%2BlZg0F8Q8QhEK%2F0ZPBGZMzYt5ux2LzFWpcoEA3%2FJx8e9FmL2vOkIkydqDr13tpXZd8%2FgSzShewboXrwX&X-Amz-Signature=8559b87f8f3c42ea48269bc6b3e11675794d4c41465ad8be31d694646969dd33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
