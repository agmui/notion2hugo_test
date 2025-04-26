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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZDQYK5J%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T032435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDl4oEq2U%2FgjaP5aiNVrB5hMNUHbr7Hr8OHRLIGE6L0sgIgFL0fFFea5%2BrDCO2mK%2F3g4C5g%2BY6bS2FgSBc%2FX%2FBdXdEq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDMGNLsj87TPjV%2BO%2BtSrcAyBIu3LIUGOC9VVUBCc9MRnC%2FpR4JyZJCD%2BYBTQIxPJsSVYCOyarIr0XWKErD0KQxnpBq%2BiW5iy%2B%2F1qzDiMM4s2jI4GWZgCPU1r2bQDDThgAjzgEUjbeHrpEWH6zWLnTOny9p%2F%2F%2BlOYDZQ77fELBg17i56c1oFqbu%2Fv3GOWGO9LJDupbo2g7%2Bmp5uqYfPB05f68PyJARyDq1dmfsMiGp8A31RWvsEv%2FKtCjROmtDFRSVwK2MyqlHTrrmhxb9chE4yOLopmpRGJYe71ok3U14XkVd%2Bz0fJfKae7%2FjEju8rh%2BXMQy0TY%2BvK%2B2571K6St2n16rPZpAyPl%2FV9R%2Bz7YTAqv2aXtl1NbjBjgthlLIZpxUui6NpsoLMqnwIH8GRXiNvfijVIgxDAXO68STZQR3OWWt7JAed6IkIfeeoHplw4Bfmt1vctTyrZtqFiBVX2BBS58d5UFXBchCFFezHACr1XXbCEgXwqtFv1Z9ZoG20LQTmDNWSs%2BLUKLuisopRZwfgxlYj%2BQuzH3zlnrC6NtyZEu2vSHRJ9ue8%2BUebixAHkt8aIwOjvlI2SvDxyBua82LRKZthiqO9Kv6qX%2BTcJDv2OZ7m3vQFc3Q%2B59uKhb1pREY20YtpsEXkwgluDSmxMPiNscAGOqUBAnGYWtSNuDOaOEXKi0O1bPpv%2BZGxwMmAe6l01cvYCuR8vSwsaSEO9Yxdpf46E7oRGloulMVijLfXIZPlbmMlRKX1dQG1B66ZfWuXd%2B05mjIbrKjBAsHjzzI6SqioTxStdPZQiAUhKwLQUErDWwbAuPRYauDTVd9j94HviaHS8G7%2F5DlIvhD5ZR4mvZ0USC6aucWw%2FO3tj23RYpN7qvxWTNGqhPkV&X-Amz-Signature=d03b5df10b223fcee8b100231c41d1e6010c4dc9a7d6279ef112dc19cba201ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
