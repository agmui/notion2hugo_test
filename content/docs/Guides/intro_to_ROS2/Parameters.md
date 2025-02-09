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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKUI6OR2%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T160720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSrtinh3kEKDA4DnbnAtLqHfhMKYYRWUsjw8jyN7ekfgIgRxTRk%2BVAzN4huPvBz2BtdbTTdP4RFuSCO2jowns1CgsqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo%2F5sPOKEizsryLnircA6vxv%2BmXD3Q1bu%2F6sIGsfovZ4t4RRzSPBZfdCqRtDW9vYVxQN9iYGNTktCSFOjF3r%2Bezdj9KC0ZcjK6pJQt1Scs3mTiKeXsuP0a1H3fLrPXj%2BJcRRBRl6Otxnf49Xk7bCHxu%2FECfrkVklmTPyynNqki4L4ShuU%2BRganPoJknSoB1Ow1lkitdYX1RkN%2Bb0mg%2FOaRRcxpeL44vkk%2BOzh4rX8ua0MhvoIIuGHSYIPtcpJuuYZTE7ZtEAuNlSFslC%2FYr9j8KjuTR7ZYmVWYGN1qon6vlCX0%2FZtth0mBCVo04H7HMYuai3%2BfXMY32G3NCTtNyLIar8cu2OiSAAyPveOEyD2zNatGtLKQCZ5QF0Mk0HyLIaZhhw%2B0VE6Nj6j6PPEEg%2BtJUXMGHSPb1VT1pEOfOjUQKj86GIkgCcMHQXVPIPBSB%2FB4mz0zwF5ghvXSMQoCw3cluEjswzn%2FhM2LPL%2FJkUAlHN0u4FmI7Gn7DvplXA9lRjUCC%2F%2FXwRsYrJ44zpS1iZqeEqMqvDuBBAMRvrB9yrm5ZYSbdy0QgeyqzLxQCI4sdd4esasLfXvm%2BXv5I4XNF%2FPHe2wAIm0GO8JO0D2reuvdkiU94CsxoaEupcD%2Bdz12ALd8jy82dYx7kYim%2BMJWJo70GOqUBYSWRWNNOAi6lMrScAbARCfCQFZgBwTqfGPO%2FEsFLCUiL1wMKKo79RXLYuOr9eupaowzDGTi%2Bz50NH0xIOqpmMJTSmo%2BZ%2BLZkmSdIpxHPcLaGGFb5VzX6%2B91f0y0ptC%2FxioF%2Fl6zxYihEyz%2FBM14Xe%2BPrjaaJh84ZvSP3%2BJtksD3FowunEFsNWMdIG1Df7Wrqxqz00MLl9wR9PfqRfhPzEWYyQJtH&X-Amz-Signature=83dc256921d822eab164972797e69078faed65e1751b85728613b0b4884ae7c9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
