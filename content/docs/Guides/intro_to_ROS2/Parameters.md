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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2Q675UB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T201215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJHMEUCIEOzUYRdmyPQlpmhsK6A4A0MI2OFKzkm%2BK58YzdCtyfeAiEAg8CtrmSJNsqFpcy8PcuZejcE1iqLGL%2ByMGWNmb0W05gqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmyiRrxbgmI3NZBHircA9BiE3b%2FV4f7AH446rJOSKL%2BPxXRxZvu3Kx4UrdsFk9qofXirNp8Ag6n%2FyVsp8L1mFfslDXG3ruXnG3RZA%2FwzTKltKUHXNaSY6oh2gaLArXjHChtSLZNnRirMVM%2BMZp0YUgBEOXpwYoCd5DW%2FKSO1Hi3q3CSLwu81JV8zY5IV%2B%2ByTB4zr5pzabQg94TmS4ysQg9CjJE7gsDJIaVqs4IDwpAKuUgsXewpecXX%2F3zFn394rEWnmRttSaBwqJklcZ7Ru%2FYLEMctFjU2w2oSTSbi%2FERU5Tp9U15vHrPn34MbgSEHxC8XPt5xdUBFncbNYTW5GjaHZ3MIKc9gS5rbKvRgI4lbug%2BbffmfmaHkUPGve8F0s4hX9WMEU2sp5je2wjb3xAVebkbTo7R3jtUjNqziwV3g0pQKK2y561viJJuoh96IkcVoE2AxsrNFITRCdHKi%2FC6yQ%2FoHT0eMXQnRQR3yvtaKyuhoGQ0sW7kzUE7kxRArTx%2F1JDG1LUODXyC5qqa1q0uRSDH697h%2BE0OZQFVV%2FCWzjilsZhwmmFxAN5NQnOykuW91e3YsrT8HPs7hX%2FdX0DTpYAUsCQF85oMqagiMbi0HaChKssSaJ94oqzCLYbMBagIxKv40x1oMWJiaMLaV278GOqUBLWbNj54khQiUltQWrAfVjwCSqRNNpUpQPqhSV5J1Kq5C82g7Ip5tXAP4cThzZLCjm%2BIQ8UT7tlE40Yw9NlHUTKt6fPlhZ95jisIq9MFdS3%2F3mGaFXWvGrgWj9OGqpGL8cPjnglWMpcWsQSxnKK7VOh4emR7j0vqos9d9lXFKM4uPUKHTiV381tr%2B0oOvqm34v%2FyHrte3GRUdmCiG%2FMFNBB9r5SEy&X-Amz-Signature=3fbda2a6333d76db39c4eb193ed98284bcea0f49c9694da291580908a0151841&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
