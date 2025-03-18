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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPIPKYUM%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T230759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIDZaxytPlkR0DqQM8uMAc6te6T36QY6uq8QKys%2FMuDkNAiB8gTKmTPkau8SDlJrbuai2NuWF7x4fX09U1PO5tDGStir%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMxCOS57%2BFfPAO4mGdKtwD6mIFmMYOrJsHKAn20wZ7VhwZ0t6tVYHyn3k%2Babkf09uWed%2Brz1Pvd1%2B%2Ft8dvM%2FbdktcZIh64MxE0yQlSsaO7D0p6eZCMfSUJ09LDq6AwZoMZpDlgeb0b%2FQ2PRcSHFUtTV0JeN6WFguinD%2FFZL1%2BraDw6zd9UAiOMv90z%2BnZuzE%2BHFRZzgrEAwbxJRTHXjDSex1r4DtZOwnMNeQjFSxpDlC7JeBJ5DW%2FHlZ7HPN8QxzkqOfX9x5pwpP2hOALryyb32Mefx1HSECORD71D96qWQ9FWMMATa4uCa44EsWb87YO72UtTABNDD2dja1D78kQkaG%2BA2x%2B4LrJSeK6dlS11iwjDKX0%2BSNj79WQvuE4aST5%2FFzF26egBezRxCirhP61YBPKEF2l8nyrtqW%2FFEJOoNp0cNcaFlG5GXyuXnIzNg4bgoyidpwVQYD5SYCqXIJQmFU8TLE6Ow%2FoGddUSkbPI8kMccH3X9DumqDJEWr1TV3TL%2FeKASIGbRQONv3H3oIH6%2BmxIaJa3tTZZDZPcd5DxOTmVTeXnUcJLVDqQeYFASELhMjdD7ju6tpceWKBBCuymgWO32kNW0%2B6CJ5RUpW5oFB9%2BRCcPSIkGD0EZwquLxntfeOa8CMzM9fzZFDEwy7DnvgY6pgHEf6viXC%2BvZ7DsAUkUaj0lvcjwpi735jGZQnk%2BL00jwoyTCm2pv5CcJVMD56MlllDoc4xaVzyPyxb0vk%2BEFvRKUiqH%2Fy3tbsUWcBfadZ4DWX2BhMtrnKDM%2BIs0BaFPcW%2BPyZ%2F3I3mFq0%2BSbp0tWZ5J1RcHjqAPpcGsnJp%2BBVCzxtUhGICxzTUMkm%2F6lW8TOMElDlMtThQ4TCzfwS3pxVcAdJaljOWY&X-Amz-Signature=d24232b0752c134182f5f94088c1221aa142bd98e32b9fa6b0b9e8c54fd83de8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
