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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQ7ZJL2D%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T200753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIHajATKXjL5LOgyeIhsTS%2B%2FNug4WdTBxZLo8WrLx7dewAiEA6eY9gGaJPyjGymOX4wWdPC8RtLpILV4KOEXmxPHaApgq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDNqp36TkMxeBSSOVOCrcA51CEuK1yBf7ScglfUbHK1bXL7w9ivd7UBdUDsr3p6hPbZ6pI9wPnKxLCN16GQpEsPawtj7kZM%2B%2Bkc1FHawOw0gQVuWPhnA%2BBOmJbIknjvZVaJwrWq1swY95kVPf4tE6X5%2FhqBGPragSFMCeFjlOu5%2FDt1I8SGne2W0Zg2iKIEW1Dl8iQx1NpeqB63cI5eIIwmm5TEllvlLMazfPb9nd1aLc%2FjyWF%2BUFkOvayR1WI3RshrqCVgQcIniPdLMDfGdL%2Fr1qy4uFLgU7W1wCa4Pw82SxrjUqFyKB%2FOTJu7vc7bnKsNlK8F4NKKN6EYMXlSbG2b2h%2FfBZbQ%2BgGp01FS0VhwdKgATtJ4YiLQBV%2FEEtmYNs8ozWrPRI3da%2FwfhYKY9ASIvhQV86mphDtQ%2BcgMACbtwff3SvJH7mQ2aBx%2FCYaFNkIAL1SDCHRjlv9xKA3tYFNWE%2B0CP0qxw1sldGc%2FM84OzmiciOSLia2ypTJ5ouQw9MrUOD6tjCprjJe0hw4U1irygJasjko0ZPv3I9gQxN%2B64Pt51%2BUptrsc2G6cBIAL7mwZCu6oHSzEIuUOf%2B0Zv0%2FEZDL4nddWJ7fi5Et0OExt%2Fn7W6ENasUT%2BZh6oQiNs0bZOH86ROXZLh3GJQAMKuIyb0GOqUB0Z9pWRQwzvepKCIEqpeH2jjjq5dO2SR9uDMStmxMaVjK%2B6srKslyZI05jXnphcjxnt%2BoEfYn8Dxprue1JZ1dzesPAAOxQrpS8%2F1qcKBzBhS9Ve9YWOnYxA83nPXIzM1O22bcGgxpJv0ZO923J81HVSArKrafcEQc%2FLdDjtjTyOGwNBzKPDvkWPVuDZ6gBVc%2F6DE6QPKgv7WRck2vo6LybbtpMIl7&X-Amz-Signature=05b1ff958d7811b9ac4a61856d9d244d444e4244eec4c759f2bb24743b7cb748&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
