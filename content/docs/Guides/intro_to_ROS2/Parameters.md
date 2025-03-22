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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZCSA74S%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T230717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCxHeg4pa74065ItVOsb%2FEOVu10yD1ijzvH8qKHH5orGgIgJUujZdQ3mD3qmWbe5FGGuMiuiqwsa0KOEZ6B%2B2NAuFEqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMg8bo%2B%2BNUOSk16eZCrcA5nVuANL7fATqqeMNe9bneQ4NpuFHvaFWPR5vZ5uiILG2tbwBefSuvsVmlW7NepvHhUq%2BUzl5wJDHVXA34nCMn%2FB70KojCor100HgEDyEWYzw9x8GD20vFXdL9ajgkFxHuddu1tgA6lw4XPaS8UoqyfreJXP7MQSmLF2A1t8MO9YS%2BMKs973yGiaswykdA5IXODoJd7fRC8EeNN3xPPU9dTg9hdyA9UsXyS8yR5jRrDhv7x0ZWzAUvlXo2xPiqPGYEYvGjLcUJQjOtbIz0SGLqMPA0C3kIpv98Z8fWWlF6p8X%2FYdP%2FYhryKN0clXmAPndI8CqZnrxy35BztA%2FAhTQajXZmH02V826FPAPc2muiHwiritmcGVFXwiSIawTsSOptFU9%2FTUrX6Z9jp7sT%2FI6jXO%2F4Xa9TDBqE7pYTleUGbDSyBBYRdKi4HAeY6dwisnfPwioLXBuFXYdONcM1FLV4KV8tljQ3Fts2t2lPUfKd1bFxMBd7DcsTf60yehDZoNJLruh7exfHdj5P3h%2B38pBrxmOa%2Fyc4VbNQVIFQ108GIwt0bWWHzVT8Q0jA%2Bb14UV16d%2FEku3okz7cnMBZDOJdugtGDVON42zdJqtstduXJUV4LxZWqyViyQGAbIkMIC2%2FL4GOqUBuIO0eEtgLyhen6PnJNm%2BFkuPw%2FLkp%2FAyLdbLHPuz5wFFFnpWv%2FMNje2HUoisZTj50Ypc091AxA2ToysCI7N%2F0FTkCSrjzVBg6ayY0prRxYlemNJYQbB%2BVbsb5RGgKO1z53hK3qNsxzsyEZgkSg6fbTRO34oCOHqOilJo8ANxvzS8Wawm7lhkxVC4TX%2BFwPI5iOYZzsoLh3yvrba52CaHelWv6IUX&X-Amz-Signature=e4a72e24a20f5df9bf963ed3d3152dee2ab220b74cf8611183e58f44c6d08632&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
