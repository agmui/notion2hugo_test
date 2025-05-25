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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2EDIA4C%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T061135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCNiFFK5F3KdEVh1RTkwHSlRbwn0ECR%2FqfWt7K64uiRGAIgDpQxru5Cnrn9JFvsBYF1EDWRY6RXEsEg%2F65J2nYF3ksq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDOodNHJUBdZ%2B8JxtiSrcAwtkTk1GfxsDgcQlB%2Bj54hLgtVzChIN2G8c%2BFRrVpJ7LabGo%2F7j4j%2BRy2VNzlNPxMmndYxpMsLqmBCccALDLoMyjuLpROuwstdck3VnBtRva6OeTBoEJ1UH4%2FUaTwSx3PjN%2B4AsFtD2PNX8hl0bls%2BnewXWp1Mbc8pCIYc5W1XOHFeDoA%2FHTTtTWy4npHj292v%2FieQp%2B5l5zO2O9G6i5uhKQD%2FFHKqXW9aHsbJf7JzWfX%2B1es8NnL8Bl8mpfb3LdQuA8Ts9f63BSqaMg8vySPCIMMx8ui2o2iwsk0qgSMcSP3XxsBJw3oAQkNctXq%2FDc5iNZUa7SC%2BA62L8F7Ne4196z21nzyVGkWPLWiuivpmZ1%2BTXwtSTToamSqCJzOIRBp%2BA7E%2BPuFvb4MPsTNpcOkO6lpJEMmg6cEG96bBfrm2yWSMfx0bZRjlAdLJTk5hOXAW4Fg6TOvlr107L0UwdL%2BOug3FrZgiAOaEGnrtG7QCHVusNklxQ4pEQwp9sRkYJiZGGqsOGaP7%2Fy8Yr8MnjG15GXJ4etSAurAEo1ckHbMhLWFigLZ4W%2BbnROV2MIzwAK2KyCmsJPVUv4OA9B9AvoX%2FYTB0sdbkNUxZC9nNb9Q2eq8sbRtSvZxHPlY3rzMOPSysEGOqUBKPXpMGDq%2F7JpjxXZ85qOH6LUZxDz%2FgA8HRdnOi7%2FY70pzFa11yb3cR5%2BWuLvVaHUi5%2F7w2lBPtqXo6eTgbFQ49iYFq7rZsonF9pEh2kNs%2BnPIJFOKAOKIBlgsqoY3r6iphs1j50Qp0sml5MRiY%2BM1ybY9PX%2Bw3Y6t7zuQ7%2B3JY1UhpB%2BDg4eYmNs6U694zso6nSxTIILuSKHMwQmAgRI9fLSPEqD&X-Amz-Signature=f3b9b13db3147c82b12736c1093a58ff3b439f2739d8ccd08817c1a764d89275&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
