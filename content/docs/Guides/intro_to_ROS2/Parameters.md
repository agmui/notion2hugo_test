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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG2YLGOR%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T050915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2eByQuxh2yHGsWgJVRbFPdtPJZfAFH2cxhXBBmXMG%2FAiEAvAIWK3WeVbenVpgyDEmsEMnnVsgreBQn5a%2FxOlo4FdEq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDAskjwy1E2rB0uUf3SrcA%2Bg6h%2FRAO%2B9YM4P%2F4hgkFvP40XjHV%2FChHKyipH8079bxsiPpb5l7G59Wy%2BQdfCzsj6xRi7dlSp9i8atqQaoixHmhOgUAwh3OtCXAlXy%2BOQttm3KP4%2Bfrsjby8s981nS8NucZEyj7fOqsJtkiBLjQadxGcYWayfk6OveTtXBcMXpIWWLCkv2B%2BbHubNlT0ifdjJT%2Fuye1LJdmwhF5NEZNn%2B7W8D2%2BpCXAg%2FIbBdOJ%2BMrJIoTKChBkjHVKxR7B8pwp%2B8JOid%2BkvmmTSYTHC1hCO91ELzju%2Fc%2BORgE6Fj83DotNaEryl2ODbBkDQTfVC0BY1xSelL6fPV57JHYCddMbX6GIzycO%2BPcO019AMf%2FpVyGFBMpZfXT0l4PdOH5O7cUwEwhAzGbgjrX2X7sf5dUWwAS24RQqejex1ZSyZUrR06tjfixknnUmfkkUO3as1NvMwnTfFjbpS2IvLPtRs%2FZYRWu8t%2FvsEdRm0e3Dubc9l%2BOACNBeJbHBmcnGh6%2BNjnyvg36uw4J8kY2qTAn84pfprx3RuJsA%2B9ze4lufDnI1Abhu%2B45oKoc9sOTZ1%2Fj%2FoIE2qaLOFVvUNCUFAMG31l9iw%2FVfUFKm16Z3X%2F3mJ0wCpNMGTl1t7YFfz3DODInCMLyUgsAGOqUB1SZeDISvK%2FRgZi%2BKu4qSWVLZo1CMQH6xoW9ehpF4H7yFcSUwegrqDvs0%2Fu8JTgLQ7Dib2JiyQyeLIdTXbQXSUE%2BrabdmMqog9SfCWAA4wC57f57EO9T%2Bo6ut%2BdgXEHHFwJ6d%2FUgCYGFKRqx7bCzyR2z0G5ntATKv56ldAIabKhHChffsHJdnvL3F%2Ft2waTvmgw2N0pYDq3Ql2EyzBnPVjxFOKSVX&X-Amz-Signature=3ed48f6c78892c986c00892b15ca603bdcfd17757f15530fb87f5fd8c2bbf225&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
