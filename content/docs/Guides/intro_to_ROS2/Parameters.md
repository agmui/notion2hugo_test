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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTOCFVYM%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T090847Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCICRekuAMgvkNQ2SpJVcwsoPp7J9gKpne5OF5yroAza%2FnAiEAgaWlYRE%2FECx1Jk9MJs%2B8iPL3gO4bAWYL0xLh7SitClIqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxnF%2BdlPXS%2FKnQcVCrcAwY%2BZC0hNyefurkM6Wwt50Gg9%2BagFXGkyrmImgqnMeQdcwXoRLpWOni%2FZWVzOcqJYC6ZSxE4ztDXd8GPZxnWLVkuv17%2Frd5BSiKqJsTJRIlRhFwL1OayXQOR14pBa%2Bf6kRwBF52y7pzk%2FDcOSUJpJkM57pmLverFdoAeOiEcp9J83Dte9N1%2Bu0XM308O6pmqWArKEAKtIVLFMBUuvNbXF0OfQXxLK4LoJYpYWiXb1ZdeR2rHzA39cdI5aSBPvUVLHrh%2FK6zx2RxpjpjTXzvUZW6a1J1Ek0jpwdqj2FpAInzTaK4v5lZEQjpEjPs%2B%2FTMQxhRKvj58%2FgnB%2BZXIGk9wpo4t8iGjJIgLyrLgp%2B2prpLH4TUS61iLle1k5Gm7tMtBDSFtiyBDqXyZ1D8P%2B1bu%2BDy%2B%2But10voiBrlJgK4i8S9uWEeU6xsj9zkGXmmeKlp2N6uyzBMkftmPnS9HjEoi2OkpnlZ3ajUelgIDEq10LC65rgR68AXqn9%2B0fo0Al7x61oMa4WP0g3Iic5N25sQaY30UX15gq5QEzxzmd8a5P6D4FOJS6WIlcKFaptOq37Namh%2BAQhD3Q3E12N5l4wm0yf15urcSx2jGgwk8QE%2FbyqmLnzRn3ZGRgAzv00K9MLmbxb4GOqUBe1YvoNsEt4BB6RGRlf%2Fr1eXszRJgtecSNvJjQ%2F%2FI4xXmZNdiyPnnjhSfTuXAnLkW9l%2BeIOWfu4dad7HOvNE3jQudMLQ4WqAxluXhsJXMGCy3Uq3Pd1z4SQ3Y%2FAjTyI7lLGyR8LzihwuhXokBRYt%2F%2F43RfpXekA7UTBbdsPfvEDltqD6rfrBBG4%2FUnVv61EFO5wDvMII%2BFNnds3N9RchZr5lEBpBw&X-Amz-Signature=c6e96f9a566ea981ce86d0e87f31a9b054929a060b7d4a72d7018afac4fdc9ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
