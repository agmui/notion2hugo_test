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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FAPLLYY%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T181106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIEawJUv071mQtAAzEQhvtgS5MBJ02j0i2kkWghkx8uv7AiEApwxiRhp5xEjwfXDfksCtoA3dT5WckRXMpSxtPkJ0UksqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE0b0aLIk5GyBGMmhircA%2BECBxxvEOCs74GC8hv7HcXo61LUcHgf0kC4jz8N9AIV57mVPbyb7uvAD%2BB74tCn%2BCSCTY5QBbap2CfbwqRXyZUTLbHxbgtEb4NDR6i3fQxgKJW1iYJ9xDTDf5ZP79rXSnoe4oYu0dZS8rlMYbxP0%2B9BpgdxajVhxl5%2Ftz7QpWRypcjV9O1l3XQ4WMh7OgzatDUIdnwH3D4eui4i3OaV8v6IZjsE538mD81iYW0o2MgWs4X6PMNIQ8idfGr22tTzlviqq0zYIc2yZ6fdvLwDd8zMvNkP2j2JNYJ139VA1EFBriFb3joQw0FiD%2BSKe3gXAeh3u6hvsWqUE8ei%2BGftiIHbmAlq3IFjqw%2FdynkjA9Kf2EY6ZRkO22PHvHLeN9lfnvT0n8zAjWiQK0R1Xvg8jMMontkW%2BwVGm6xwKPCtCD54S%2F1hs7Wx2sAMZGrV41s1P6viHwCrpUOT4zxYF8yBp%2F7jGAqQWP9I5lW16tGp5KBMNiByILLeNeqL5SCQyRco%2BZlb%2FrcTg%2Bv4bhWNonDqrSHFiYhGW7XmZzuX2KliWHZzdqi7%2BBj5xLQwMVkIIQzqbdXSAqZ%2FsXpb%2BIb8WHrvGleYDJCpR%2BhmOoTCNMV4mdBYBive3auSO0wuSQNfMMP90r0GOqUBitDt0o%2FdHis1ghJQblBcxRNi4NUXAYdYhWgPFrG9lmPUzMXch%2FakdWe7H0jyNrjnPMEXPOTjY%2F7sTPteE%2Forki7aL2e68oPXuVnjJRaEE5vewNJLPMjLKp4x%2BabcqBdRJyIwDDdV0tAH0WjvIn%2FA%2FpsyLQPWXXlDEIQ0byv5ra%2BXGpzuAZyzlLcuHUJkjLbc4NxInhKFFxKfu%2Fpobw5hNPphe7B0&X-Amz-Signature=e6b572547b57e68c71782e6bcfb894292451d9d3eebc964e9a78b8544a8dca08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
