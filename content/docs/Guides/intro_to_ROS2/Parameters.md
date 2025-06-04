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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZBKRUOP%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T081300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQCN7PJcJTqA1BR7pek4cHI7FDBELBBU1azOH2ByxjfGpwIgJUecc04bH7Ti2BWDGaUZBFQ8onU6ib%2FzhWvYk0Xpbm4q%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMQhVp5DTDFor9OpxircA3M9FqSSLnpEL3Xr8ugEcS03rCTKg8S4G%2FPQGz1b%2F84XLVLVrn85abzC45Sdyk40DzUmH98i96dz5DJ3OOHFZ5lvpGkM4drDM9tijYURync1BC28%2BWYK0cFJRTpLjQ8vlAHlBhnCq2RoDOi4pcq9IG4%2BOKtUGYP3fmtVEKaQRTORURdGEat7RNKfq5XXlL5SYzoAu9wurgJiPzmdTmvWA5yhQgUhWJXI25L73RkmxBb5o0Rg1Rx8oApJNwzHfT7EI0SEaxcgytn3xylm08UT1%2BRs%2BeXG%2Fq%2F9lpOwyLP3ya7KiIl4BLkHnaFCRVcalN2Lv0APgkkpYFH1xeFFelnJxefT3uueJdgUNFNifJUL4HsuHN6UPB5%2BJ7EZOM%2FMfR6cCCYLMNXrhQ10OL94ZpXBjQyDZlLfnDQ%2BWTGuoxeI27uS7hKQV7qCUbsve1GtPu6l2oxN4IhlhH8PYLDmFWyeKfV0X3d%2B3nUYNpTeo1kQnrYULxpKDNaFxlHjQhTMCoJWBLivecXNLqayKApT46tWcGWz%2B9S3F4966pQBRXrlmdmpTtOO3T0RoFGBuDIKZRNmuzX6I0sjwn6m643WYytcDAmBkJlL2Ulf5cHrvSjyw4vPMRHnEaoYNWrg7FHxMJ%2Fm%2F8EGOqUBmKu705zUlAHI3dRW6Z0TSh%2BMRrWIwfrhP%2BFUnzOkR8tRnbWBFEL6PjbFKnGsxUqJbZmf9UjA8qsoDHhJXgDWycHO8fojTNapDj6y3LcvyreZtNjtX9LknfRvrdvNx0Q%2B80WL4tfxOnpIPSSj3LiJJwg5OJu8AxDQtN%2BpVPY6niJyTnRFUFf1I%2BvHgiPztEWl1cDoEHBzua1eTy%2FPBBJe44NuuhEw&X-Amz-Signature=bc8915322ec2d508b92a07e75b6605784ad10370883133790c2bb6f56542a023&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
