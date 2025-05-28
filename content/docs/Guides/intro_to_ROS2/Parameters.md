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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ZPQHZDV%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T081234Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxWDXCEB%2B0XwnpKpQ7g12vH4kAwDnLm%2BF%2FuZDogqqTmgIhANKgXheaHFe7IRV8O%2BP0VvTQ5Rr5ZroLw55K8vVIRPx5Kv8DCHEQABoMNjM3NDIzMTgzODA1IgyXthtITnSzcekFdqkq3AM4tK7uIngM7jfMJRsQ7y1E6%2Bf0NI%2BeaVWggN7ttmH%2Fk17%2FHYtIBGkIcjxqX7jZFsxzSJP0tlhTZLGFfRnGM8Sio0JDbxR%2F2BTYTpDrHQGi5Oc2jWa6UfeNULIv8dziEkisKy%2B5K8shlczVKJnHVoqV6aKvFo6Q%2BmFWL566c4q8%2Ba2tkyZ%2B3zM1iVcXCLehTwmKRNdgeVZGMxZRqE6xXGeIhHDdSxHUr71lavISxkLLrPxKRCp91SPgps5cFO1xCr7i4dl%2B2v8o15YFHA7gcNNCGcLU5f1lJoex9UwRaIsZe%2BRdFN2yjY9TLm7x8hOujQVMnjxQ8jJvShQ5FL9hwWvlREA7fCG68hlxtwPr3U6BL4OPIVC%2B0GVHl8C0IgfvAcyz0LTLXbCJoSZODmbYElGJn6w4e02EoRNxz8DLWUwjFrkRPFGVmlAjC3AfQMjMEfWHshqTXftwdweF4N6ZHOXel15NrlnTiJliLRIBwQ4W%2BH3T%2FGthYDjjwir%2FdXgCIxDktTDa72NW1eIPLNJxX68m3kt8XxtJekN8rOo6Ghdz8v3RlIzsZYK4xT9z5JQ%2FvBs3r0RAl6IXwTPo324hWHkuClD8WxND23IlecTGYAFdjP1rSKilJvZ08SWuKzDM9drBBjqkAayLizAT5gclUsMOVyAD4n%2Brfqxvk461mDW2lRoRMcT%2B6z0C2nnbhPGOVxrSum7AUIUsx5b8ys%2Bb2T6vcrGsw0k3Ub%2BIko5Ov%2BHMzd7satIZmDfVp8hJeOIS39rrwRyf989casfg2SfESNEEBLTO7k0lHoQ8eniwzv%2FSs0edZqXfXry%2FtCizrGFtUesuoCs92Ag8mJV5bt2tmUXlz0g3ofQHDVcc&X-Amz-Signature=ce3686c4f60eeb756f0227aa68cd8ed28a4318376b2d754a81e01849f0a746ed&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
