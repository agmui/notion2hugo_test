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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PG76PYI%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T100924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2eEO3WA4Nz6iz7MWjoSciIwq49FrmNe%2F2fCgMhnCDXAiEA%2Fjh7zPWP%2Bf7zsQjrUKWXxYp97QfafqqltJGJIVzWvdsqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLt6ctlS4kHIuNKI1ircA1pdxndQDOTmEJsjaMy0HWQVcwEq4bS%2BDdlENui3PwWIQxkb0Pf8BVVudD5U%2BNbjDDBY%2B9oVLLmNiGk14rL6WgTvp9%2BPkvUnyKeO18XKFfkUbjKlTeB50wSuRLXCP4YNKDVHIOW%2BBMHNji0%2BMiQTwWw8%2BvbOzeV%2B27aO4m%2Br8TYGpnvV93f9pIxVKXKZimU61r%2FtmUokpMhfjHT1H91mbSqYDPhxR1U27Df748s2vQZQIElWqAfp5zijBpvM3plRCGCPQagf5ZUUmh20KOkkXXRsWstr3TUNn31f%2BZg0nFSA24yfSRXHsqt3IkFzVB7%2BgwqIgvwj5Bo2opy1RT%2Fjw9mM%2FUjTzggQAsbUGmZdVD5gfanNC1kHyjZIcjPiFaF3XpNaAjmA1oHvPDR9Y3V3lyRZNBx3SiMMzCmpEYsn25S4MgG0v3Vat3lvGhjQa%2FZ2oE06Dtz3xcBq80QrqUNJDiy0G4lHsTFgZalK1xNVsZMKlW7YRSFptzh1CdqErx%2F5ngyB8%2BAbofmdVm0ZpNPVXTn%2FgZ%2FeywwjELfBXqiByxkjZNUQ%2BJEQUwftW7TvNV1yK3lDH33DG%2Fpxt3UX2Ky1X5IV4gG2vQVv8oAk6DsLqN8Uck25nISb6ImLJQPkMN%2F9lb4GOqUBjLy2bbHAMrtUsdkfrbctQsWpNwAEpYfOHAR6cEpXlRToMTcORGADnMeBYtooTvyfOvR2gwpFWtUv7CnHQBYahH09jNh%2BFQAxQ%2Bl3xHP2DqZvGmM7vxpKygwE6GKfcblX8LNEoy6Tn8tS1oBj3sP43ZSS7jUK3JDM0KeGBNdnbqTGlxpolpTImckbdSVhHOE6a5o0yGnF9RTZSDSmCnkdlMK9QchL&X-Amz-Signature=9f337cb9b9e6bd5eacb403e71e3b7c411b46159101c4d38b2ba701f0d36cc488&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
