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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TVJYP427%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQDE5XUQHa9BJqgkL5t7qmLdBBc7zHcvSRTImULpc8CkcQIgYXp1piS93seNs%2Fau%2FrTAHtkHHQ%2BifUHot8amnPsWA9wqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJorUt%2BzGvDZATZF4CrcA56%2F6xNHeIbIBEAT8uvGn8SuHP8AHX1yBq1UHyEIUN89kabcIpUxO%2BeBuLL2XQTSY9iHkDleuN1XLFUe3LGnyNzxfB3yXITI4Ml9S9HtmEkUeg8%2FayYJGlgEqyWhHsAbIKsnG8lgTGFo1UXIM4DjZa4ljYCzviF5hTdLcd6972NwceSsXg243d28XWRlJXbHvl1zqQuikmUqU1Gv3cCu5hPWIptAAQQNljGiNnwZ0jUQf%2Fs4wRoj5tSlgvdoJ2vmq1jSEZmlXTAFZW6GG%2BsAj%2BTnJs9RK3dsO375rP1FM64E4nJLMhxZH3r%2B9FI3PL8u6WYPfVCg%2F3J9AZfYImVoLda2lHdaSQbdvKlvh%2F1%2BG5ofd0kh8un3OidX9ywTZB8Tbb4AEPK%2FOoqoiVA3RFK4KhPv8taYEoDk5yxBC4QoISCAYfXHrEG8aAkfDKY8n7%2FZqfQMiKjrQqVuyOUsSk0p0JmZPdVjZEy%2BCDcwlszXWMwEbcxdck6Qfd2zqd65ex5LS%2F0ZI082Ql3Gc5hMC0qvKALNV1B840tSAANjin1Y5x2o%2BvTSX1Mhqbtp60972xopo8dHVC493atnfgF2VDTD9cjhyeVfK7GmjUnxthvSrp5d7DPvUiIk4JGrLOnHMM%2BL8MEGOqUBqdxi1%2BW8sYKzV6m0nd43dOzMIkom4DgBATQgyNODWe4nMlPcdraKMsnW1QH3pe%2FiyLbqHYU4qbB17NtFduKIUCdiL9ww7dPjNV9MHCxl4HkrdIQ0%2F%2BxyTiapWiwW0KRv%2FStdUjpNGDQAyp%2F5yraFhAV4HBDX%2FNeJHgoURHdvNlrbV5yYbekL9IsYzk6YDYDqPAMPMHqjGVfl%2Bbf%2F8dGiiRTkQBRM&X-Amz-Signature=2520dd1ea396564875c0e39362e6f15eeb10c259ccabbb5555adfaffc4862dcc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
