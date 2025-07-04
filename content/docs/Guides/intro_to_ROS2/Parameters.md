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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCLZJCA%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T190725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCxFaG9tskxWguND8hSUPh699LS1kPBP0SRoeeQpGkzJQIgOLJ0JbvlJ98hxGG2im9ifNWYiETqApFQSIPNEDmJC%2BUq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNaTFGDH3ZELfs4cMSrcA52S9xzyRXm%2FT%2Bp9dpkfDc%2Fnz7GTMUFcAUpQZ57gwoHOn8SvbnYXAOhz6J47LsQsPuvjcUlYV95IVG%2FA5nAgPpGsl8VM25WkgMgShAM6ZF9Xs2Df5gi4ql7oadk3OxoZ2Xe7nOopTd478VQtkkscNHoP9rhhD8U9XRCVZMI8Z1GCLqEhJGwlX1kAR2fW3YmxPrz%2BjUTrZtMJTlnpFPoZaQO7y8sg0voIFHThJ4MYpxLVWyvz1Tp9ldVKRXP%2FrrF2al%2FUo8xhKnNmxHEotBGVBDQwVHuCZ6X%2FoVxo0SgUFmRysePgCTOT1CrF%2BD18EvvEEuDca9yb56f2IoeM4gDcopIYtVLmDzg%2Fkl%2BU%2Flk7z75cloxpvLYCuXwPbZZs6ridxRe7MbXF8643pqv6GeVTAHKq5wl%2BW8PLG1lI93pTQQqrmLrVKux06ZMsIA3BuBiMXrYCia1H4BbDX5%2FPLNMP%2FQYcUfWnHj63h2trB6QSWK1PYSg9tAwF0D8ADC0mJiD5m4Q%2FM0XEubB1xcL7521i%2FkU8R2OOpyCXAZTGvOntWoLT91%2BiUIjm%2B7INMGxA1VFIbWuWs5mHlSPJwUB%2BRvYb5fPotK%2FR5tzdXcIMO9BIsXhDtlzT%2Fda4o3O3WcI7MM6%2BoMMGOqUByRrpyeJ9Tnrbxhu56JHAWGIf%2B%2B2h6ekuXuV1Uu30cwRzB332PtxmFeaePlBmXXCm7c5XFbEySOyKfst2rUZJcC3cKEZYHr5N85SoJ14iq60Xudf1og%2Bsz2pDh2eCIgOJC8RGWZiCXS4CVgK0Q8HmT%2BN%2F6lZ3ZKZtJrvn6Y6HQMu%2FcC5d31GBfZjTU1RgfKvu6fcqMRsdckzOfOEm9clbNPEPODlD&X-Amz-Signature=eec737af13e6b57de61cc58f82b723a76d68dfa70db0afb858c36a483aa46784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
