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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLXNWI3%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE8%2B4PNWtd2Ma77W9KYZEZWTqb0vQZuCQwgqxM39yNkVAiEAhHpEUYVDTOKichhsiEsbGsQM6UAI%2B2Iy0MgrkXA3tn0qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHsWgnUA4zgY%2Bm6oCrcAzT%2BqqlsXLxkOcf8JxVkMWMTY96f7z3ACXvNEef6xHmPNRzwm%2BuLeAxxd9rWely7olLNE6MtfVmEH3E16kNnmNygG24nnuixSkB5%2FO3fJbAmxDpWSPQCSk5s0IBwUljLWNjBxWoD9KG2yjhTuGDVyMscsEKGfw5gQemrFvjMsXxaiNY2S8NffoiFdgH2wC7ALkIXQMU2VHAL5Jp63Pd00%2FuNHLThLvexMiqDiRpuWPViTwy03VQ1iAWcMkKW3SSEWy5RxjwfaZsoxS2aAWCl7YW5nMcRKM2Wt%2BTm3j5KYmYh4q7qGkF4f1N164BkeCVIfQOIc7Tck1xt93Wshos1tam4SX9ovk24xtSh1oxbr6big%2FCHbNiK4%2FcelmnD1p2k1OXBCyBNQ%2Bf5skRRU6KGXvDJn8cjFdbe4xz4i6dRsTpijOPtTH0Lsd5yWZTKPbMNuD7pKpg64j%2FAyqjcgSJwCZyUkaFasTUhaq%2FrFlaX4Jb%2BCjHixD0BAsjgicG%2Fy9g%2BvZPPTxIU0OTqKGWTJRi1T7XgsMaFPWp1%2BCZfarBbR8Y8d60yMWFR64Ri8MQuYELA9Y6nPHAHK%2B55qhd3QJB1m9c6iMHPJWwM2x2nNHm3FauVYltXBBHlJsSY1AgUMLaCsb0GOqUBh69sJtsffZWCHcPjHz18VFC7WiGTXn09P1dx7hIqLo%2B6tvPZklFTdYVEuXYc99XMZzkKWx52DLharHMS46vbBILpmq9JhZsRmyLvEtHuljsxjCHxBKjdxWr%2FzBecFtHvSSFFYpW7HqyBVj7pktDI0LeoB7c1xtSlG3GYjYKpM%2Bk9vzGSUwHdG8S7HUCvl0wj4TvKkADjpfkJ9m1Qcrdmx4AaSyeo&X-Amz-Signature=62fbe0efb3fec4424a53809b335e8338d387cb01a053072dfed472e8bc0652cd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
