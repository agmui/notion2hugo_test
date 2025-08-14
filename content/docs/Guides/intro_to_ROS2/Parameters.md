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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466754BNNPR%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBtGqBNieXhyV0%2BVC2XlzdctsePj%2BykX8fk5xG6tKOAqAiBe89tW1%2B52fP8%2F1bsuNDSCJF83Tzo6dv6oQtKIxJcOpir%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMlUawtAECBc1fi1SRKtwD8CGWBRQ2B2oinKtZD2T%2BYQKKukTV%2F6awkLGwo3WZAqbGqbyFY1p%2FmA6yrvpwG3bcO1F7IxADcOB26Ocw73tOZfwNpv3Q1x4b9uLNnD0ix5%2BPwuTo9RHH36O%2Bzd9fDzKYs6gG29U3MQIcuyjSn%2F%2Ba%2BbdU8GPGDBm9otvoZSxJ7IViOv7sJVCfX2oryAJQYQoz3hsStBVLlY7RS5oPRBvvbJ8PXtcdEymFQzlYqfr4Mczuy7lO9MyO1TzGuDDR%2B%2FXp2VUzSJJlkAZ4dOcPU%2Fnmhtu3oCZaHjQUCMx7lkBIzF6NHVBV3IR7o9O9M2Ru69DHJ9WAuOMyqJlV0iiVK8mxQE99RKLiotGXx2f6EST38hLPTQVW7z%2F4HkywB4QVHDIev5uAjsuG6CnqAArsbBXsnSCqy4iK21W%2BZY%2F3SX2%2FFrltwCaT2GzUjME1NQFu%2FCk1gvTaYnrCE8Ywjxh2tqovP0H8wQAuIQP%2Ft1fD84QhL4HEziygqI2W634B5dx6S%2FVEHU7lgt3%2BHawzmpS%2F3R0CRzyY52eBNgM81r3zPPxQLqOeR2jmsLDa5LgmL1ihsTyG%2B4vPOKQUn7uQIxZTrCqESWYL%2FdCWt3G1kQXRod2anbOJDTBEZLDLIZHcC0Iwton2xAY6pgEgDCDIoeaKnnUsh9QkxCvFjIAaRhye5mItL0WiawnJj%2BrMSWiu8%2BkjOolBAbUAOEuWlxP%2BBY7pRTlyVlLsCz3qwMIBbSBW0jgqpWUyIjJJUeGozWPuQIi%2F%2BH%2BsjNgHzBL3%2BQZQ1gri0PGg2FAkrNlzZSMBXJ5r%2FPOsWq1JLjKsS%2F9l%2ByJXhy6GjOzABsW1CQemMVNqbwMKtzMTtaAxPCM5swVjaPCV&X-Amz-Signature=f2b2614d5377677200d36755bcaeab3b99ccb14aa973fdf8bd2f762d9eb19f3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
