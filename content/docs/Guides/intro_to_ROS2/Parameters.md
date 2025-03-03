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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XV6TTAFA%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T070918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF24kQVSYkNlyrLabOuA0nxksJ2OxkbTGCQkuieJ97TtAiBSBFVP22jsORVgHyjIAVfJ3XpNeYHIsDq46TI7rKYrayqIBAjQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDgib%2BA5PhaXV1gt%2FKtwDKq%2BAt0vHTBX15VLull6nnpXItT3SI4HDuElbMAMkqeaFtb6kVRzQ%2BOZUcDqMGQI3BLqHT41TLyznE7QdnTv%2FxjkSfTpAPuPVLWAaN3bbmFgCL%2B6pcvlrv8%2BBiqJ8IXyFMCogUUnDFVA6usHheBcwGqdgngaedC6WrryJx4g%2BxAVSRTrIFQrpkdOeUekFrQUOnnUaYgvQXMWn%2Fs2LC0coNemJmnYt2r60bjz2jpGIJAUvH1dVuAvjkseE1vK2jP%2Fu9eAFzg2YpOPBliKKJ0g2MJ2UAuk5CwvXgOuMnla5ClcOX7ybSa1eNqjtuIXTdfpEFW%2BgMDMovWtlR2WeRHyZXrpKP4XzznZspXI8fQoclPLYfBq6x3XD8b5ebPVgXzkHg9ZDTThqUhxKBnX7Kl4cT9XbuM5xoDJxLWTNEU1HlPe78HCk3bZHOP2AXFiX7aqsPOwB30yDCOEVM3Ql9XvrQdeu22xLT1pLYP7WQ%2BovWPranDpVULzsYxdXob0P0i93FdOmGJqralgm%2FSPY%2Ba4bhVm9KylyYbdmXSmZJ0NoAWtuKMvHhVkgVLoAD1GI2wOdrLOCyT2PpCYbLJ67luDDAOxzUxeS9IwRKsoRPuJQ6zgXx%2FKPVSXxhJi0M2IwmpaVvgY6pgHFHC%2BIDrkYyWV0nGqg%2B0bnOC3q%2Bvh29dJ8%2F7Tvs%2FXSRux52%2FQ6VoSt5z9BaS1wCA1NUshE0HQkGbRAwQ%2BTMWq447yb0zWknxmNcaX8Y6T0g1B64Ndox%2B9sq44ciebStD2VQThBOl8QoekA9sLiAgdk7l0d5PG12oHluFMsNaXPnEqGuK2ZP3QEQLzPD3H5OdTV8ZGbY8AtpPNmAzIk3FoMmqjJsDKF&X-Amz-Signature=1393a38502d50b91841366acf0b6dbe8be2391655b3bef71c5dd600d50d773ae&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
