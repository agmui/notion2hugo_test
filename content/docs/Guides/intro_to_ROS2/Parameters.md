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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBYAAWPR%2F20250822%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250822T012811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7jpcu5tMlaMXbcVptR4WMLwtorO9SRMgTjKoIrGbuRAIgcRsHV3nGn%2BCCnsu%2FHKKOPpcMCxRWakgWlwFjJ%2F3mIfIqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDx5eVxms%2FXdFW9rsircA7RQbmmurRUXFiM94qVISVDQU2D1GZ45D%2BXjHOYzvw6xduJBsBq%2F1B6XMmM6py5BnjRwW02oFjAjNdGfEqrcVGrB6j9U2H5n%2FQnSGNo%2FRK%2BaaMPTA%2Fgimq6L74Lfp5mV2knWecd9Qpn8BbSq5zUOmVAF5CN2jILSuTiTV3MHuBj9V7ZsmA7SoYgampol9T26MpYDknwh3ITxxSIPt9%2B7NYi6QmwpUJYDV3mVTxgxTaVHxTx%2FGdhMCqWUfAwo%2FpqssSOYWrcW8GYjkwPh16xaxYDFpGnpq7Li2NCaUeO51VVhVEmhqfRtAXQu%2BJRqLBkDksX2WezMnoCuZwnKN9QLoNkuww5sC%2BKQTCr32plPPJQWPXBrsNmn8I4M7dBjTHNtOhYYaNP9U0tcZvoq44jvmrBEp9q5mEIGQyqa0iaFYtnpAVG3ZyWjXbvX4MXCH8Hy4Ka9%2B3W8WpZJ2N9%2B9maOswhGgq1Ldwxq4q%2Fb9BLVYO3EvgWZuy0zQkx0RuNHR1MzXY%2Fzsu0T8onVcG3uqs4IE0pV2Jcbgipy8nFYYeRTlnXCYLXCUu6%2BSEi4oJpUjEJWWwSZdfU%2F5v1F%2B4vLIe7BjuZjDR7PTxU%2FLbQjZ4DDSZGztaR6iRcJY047b8Z7MInznsUGOqUBMcIOa14HTXl8%2FqcyD8oc0%2BSTgbu5yTF%2BHgiAk7QBw0XCwsk7d3chSQWBmRIErDDr2f1BbqrzSglQ2t7NB2uYJJ%2FrP01SGeKDleiMlEWYHVisz7cln2sFPCfZsMVMvqqqGcWzBRFYpwS%2BTCxWUxoTzK7Ve98kJ%2FRUT3dbjKcfiN1QAPs5sSce6WJ2iMJpnivW6xthw2XWysuiI9Z3FCI88jcW7YUG&X-Amz-Signature=9e0bc30147cd72db2ff38255881afe2ba3af133b6d8867d8a1e30dc8109ce0ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
