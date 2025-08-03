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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKIQMQGO%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T043853Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCHwGsQ9sxQ%2Be6m8rNjmWjVz20OKdh22tUtew0vLi15RYCIQDLNd1mKjuDgauvSSfRewyG5Ei7KoPnduxWnobavcCTgir%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM4BSpPHE02R6HuTNqKtwDP9XaVL%2FKFZhxD4ai7Ubp%2FpRXOg2PhrK17GpyTpnGmTHHWXrcPofcoVGvrD5ul%2BD5l9%2BVrDwXOH4XWWpWdVhnGEPaN0gaza6anPbdjEOpGP%2B1TdIDZrgvqNe5NJhO8I%2FxzoxOT2nFcn8Jus0nt1P9zgrbVGIepRo8Df2BMmCvgEkNi4zuo2YdGUCItsujJ38uOZpxMlOHCsymLZvcSQDZ7Zj7D3LSiKSiqaFUkQ3hy00FZfRj9yPsPQzMV%2F2bTaefIZQ%2F3rRDVIWxYdEms28t8JOL79xWMhF4lsUuKXKY5HELTzGRj2EqsBC3iuOz48t8xVqHrwqW2NCANMI17K7JUSihl5W%2FQhsf9I05DfJnObfzjFeARUfrx0dcj7Wa2UWH2MWS9gJI%2BK21zaRj%2BhOn2XKXW4H7fbB5hG85MKPZgmtkK9KtgAcAM3wjpd3O42hvc1efyHcxLrATB%2Frvvd2KtHSXkoDBHdBO1%2Bb4zZEPD7UEODkGU4urO4nGIFAIZr3KMIjUqzUrN0Un6UaPQjZKiTp2vexcehqs%2BhNvJrOd1129du2Kd%2FEY5CqOIm9Box4ZUuip5h16b9t524dJn7NU4EowaTz91lqhfEybLM0rIIqDEHg3UpkbpSElqu8wjJy7xAY6pgHoeKPAcJt%2FiE2ri7hVzUv%2F1ruKgYabrLBdbOjCOjqu4VQyxTyFTKZ7Tl5vnq9F838SG3uHq6ba0xo9NBuqavptBImojXeiMOv0uLJQjrBsXaPPt7ZMB2HqIQnmx1b8HT2U2XPdldefAtHudGDBSXlk63G0ShN8z1s1ublmC2%2BDQnX7xsHmLVS%2BqtLrmaTm5W6zv60XKwl%2FHxx2YGo3nC9NmIGyl9J9&X-Amz-Signature=3f3546c77609197e1b9226349e0130c83db5ab69c6bad34a20ea9ec47cb02aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
