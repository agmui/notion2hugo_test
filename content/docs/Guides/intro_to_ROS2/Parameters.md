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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEKLMNC2%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T150907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCOcXj8rgMOMpouQaYuEDOTOj1W2K6a5rfPLmHoiwE4FgIhAMZOjbbGMSTP12YuXcbcD1unCHSzh6Yutpp9DVSicUukKv8DCDAQABoMNjM3NDIzMTgzODA1IgxOWxAAAl4s%2Bz3bTsQq3AOnX%2BzKj99x2wMrbgECLGrfBYStyknb95aC5T%2BxGVLXdguzmEPdgDEtdiYHstRZODYmVlvCyNoyzTSWF2CNazc1s4r7Ha3QI5g2%2FfUL1exUckzrG2txjTU9krqab4LdHZMujXGDd2y%2B3GV51XF%2F8aPJZ4U%2BnJ1ftojaZwgRrt3xhBnLfS2dqAP10mk99EuJiWXZKVuJVt4PGVnAN2Z%2Fup8cOg43wRPfvrrGMkGOdnenCCaVzevbAa6xqIYVa3iWnxnKedPlacHl%2BnMh%2FX7J%2BTP%2B7IWVm6Oht5%2B6MBJ2KfY1BJp3i9Zh8Z5ZSxamqkGpNalOylnbq5wJh6BP14vj6oVBX7Hda%2FVYVTj4fHVZErA%2BctAUlCaBc3BpQDQHfyu%2F4o0rImyovqH9IGX7fnu5amteEaDYmPjwiq1%2BN2PLxTQVPPq0zrk8Ssgn3BHXtMWUiVLx64s4gHoToNCSRLP4u%2F8t3tGBGhysiG%2BxQvOP8KkFMgrpnMmwnowYiPKBmJMHoNmOKp9cN3SF%2F%2FfCOVQuyg11XY8O2FbfLO4ENPVA9Y3OPLZ5XFWKTwzlxv2OnXPDiS5raU4Rd9OpSZweFg1ITx33O6lYMyK90g3mX%2BdUcJW%2BCPvakcZhdNhfl3124zCcluPABjqkAcZGbDuqJVydbdH5QNgWnUNKztIeX%2B3XWMNJ2FqYJ8oeh3CY2%2BbGAOqlEX0QE2P0SiSPNcg4tBb7edzzQUBTCgyCUVJ5R8c8xfyeiN1Vg6NJRXmnEZJ6N0EBRcrTSAocQr48z1x106Yzb8Sy%2BqlJ%2FOhZbMUC8jfMSC8kf9eRFZdAj57xKW71pGFSUsKOJWTyF4G4xOFAM9FDWFF1RVe7n54%2F2O6X&X-Amz-Signature=d8eb6bd56f37c983a80bafae1a17e192630672c0e0670059d2fbd0856a8d111d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
