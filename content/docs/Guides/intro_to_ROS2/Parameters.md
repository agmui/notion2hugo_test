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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHO3SGPN%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T181134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHfgdJ1sdlfajdqan92SmyZqDJhBVkdK4rK4sO4PZZqnAiEAjzM%2B71o78BslgRwOSt99MkRiZLB%2F6P6W6uoLwCBmaGQq%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDHCRqk%2B3aDOzGhR3%2FSrcA8VOHEvw9o01PDRHLl0GoPOYlumSu1AyiNUiSCNo%2FqMg2%2BY2BOTrP0RxoenqDTJEsl3%2Fibm64Wm3yrMVOI9%2Fm94WcEy%2Biz7EPOkQz9O0j%2FVfwLYifArpJL7bgbODAlEB4VSp5cHRrMUV%2FscdYJ5VlRIlWbTwrMEfNlQl6%2BQeGVOvwy1MxLWpJoNDUhoGB2ZBOLGLkns8eGzLmmlbRuBz6I48uypVJ3wXPt12pKLBcVfxuXRwTv62m4PIWp1zaY378dqqMPuMEWgMqEOPt%2Bluyhr6yCjDbpwVBSbY0Ckr5nqkIj0%2Bb2WqMZwVfRoDIpo8DhaobElCIY869DL%2F%2F9sYorFv2AqL414rWw5vXm%2FfCCDJh2YMQkXNP0oBdwMhUu5hyrwj9zfWS8k0%2Flx2VE4lL1LJWkPAhDjHiZ8km8EB0c8tdwUEQRcJ%2FAp6htJbLtq2DaXXFBjw9ltrkasgzkv8r9Tho40svDbz%2Bpi8Ob2RoSVtwKJ8wUKoq%2B9PRoVyA4BpSosP2gGjJ4kJPvQYyKmma7ARwqJIheoDpZqAi4FfHdWenkI%2Bd%2BdBF6h6b5wxRQxWNvfHoCQxeonqMDH4PLDhhsZY9C1tETsgXDkW1TwM4bgO%2BP3jOLTKAxki0qCQMPrP0sEGOqUBu69u5N4BH1zjHcrZ9X9e5VH4lQ%2FcvEmi9ZH4x4OPvlLoUR7xgiWQxoMH2ThpazMpjS8wqbtVaNKP9fKprerX%2B%2BxxAd7fHpjKPcKfkUgWraVrmvpSbhgJ7z5l1iY%2Fd9yg3UtyGt%2B7AHgZcm6VMyAZrYJbuRTp1dlY393dskR41C2cXE2VVPMqkgnm0c9rcRbEqbE3Xu%2BTQE2knM%2FUN7ajDiDkI2rV&X-Amz-Signature=3f1cb89f4c29af19e393562975e046bd40f24997297fc45fb6df4a2a19c09a77&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
