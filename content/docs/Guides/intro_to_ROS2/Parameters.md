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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EMJSCWW%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T220847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQDEje6UDJ%2BeY01favzzl6rI47e%2BgXxqmzDHtQtPIxojNQIhAJzGGsAVx7UHVT%2BTfBJiLLs%2FfDSqbEyuVjc6cIQoA8soKv8DCBwQABoMNjM3NDIzMTgzODA1IgxY3jHON1aTbxhjNIUq3AMO75jTJUm8sfPfOn57SbG5ns%2BQOaatOihiSYdBSLULinEnmtQZDPEgDz2nv2AS%2BmacD95tvrIUu887Pi3ZcJxphg8exeXIGbJn4bK7%2F1a4rthdjghmIw40oBw78AIdptKoZqSzO8ZtwOHuTiRTBD1lz7zh5BBwBDGEHZQVir8PTgy4SJxzi0IljQoV54Gpg2N2I%2BPqarQ%2BFLVhRfDvW654vI4VBsbNE4AxhdOIwuKVQTDgTRizBUrATxDOPO4%2Bx3p7d3Y0PS95hK8rAtBV0AebRtdzBowgmOodMPzpwG4gDkrgZzfwsaub3XcR35OTW0kOvsEC%2BRTWrnghtcBVPAg899NtjZO%2Bdf7W%2B9Ih%2FdgDPas9k0zrn0NRZ6tEp2DyMVHICzOapHBhS4WRYY1GKoLr1BcQsWd7d7KKDg76JUSrEA7YblxNzIufeRbCCH0i%2BaPRCiVaFcMXtXo9o3hYNYFo2tgCGCHG%2FIimzFGbFXuL4u%2FVoFkBM3A3HMHJsuKH%2F%2BJN%2F0%2FZA2iuzPOVkqPpeS2yGYkPsvUUdyZHtHq%2FezgC7xdtix%2FFicjg36UA5L9s1%2Fw5lrvBmNzRSuUvT75JsLfHGRAkavq9rvNQ5sjwp7VjvIIHgPNDxwkJIAWn1jDshf3BBjqkAe6Uty0xnjMxD2AdGHZqYwG7zf0hD3o61P80gx%2FnWu6hgsZwpIynflvhSkkXm%2B9qDJe26rmw%2BfmtV89Tlpi20sj4%2FTuSo6DDewM807ns1gHduG5uuEJG4FQoVY1XvKLI5dHqniltS0UM7hBnHno%2F9Rl1Alc3GDgUOK53b2nn%2BLTmp%2Fsjs%2FYE9%2BeHKtfKOKchDhhd%2B0YoT6Sb8vyUCWRjv9uPt9Ze&X-Amz-Signature=4fa760fa0dada88ee832995f32a38f60e8645e4212a251cffbd32152ffb85d52&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
