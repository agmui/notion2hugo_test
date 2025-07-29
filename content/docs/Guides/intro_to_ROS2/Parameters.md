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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q2CT64T%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T091518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIQC9zXWSxCpNYLHp97UNKboCmgnKP4BDivB70Mjl%2BzVvgAIgIr%2FWUoC%2BWA1wvfTBBLwEDGsSZr%2FtQ0RgJQbDTKEDCSoqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEyf2%2BcqvWnowFOzkyrcA1KF%2F7AnJArGwFO5kc5qJPmbZBMSP%2BVxAYFC4amE145GLM7WFLMUKKgHXecotQEKz%2Bxoa1Snd%2F3iVzOB6gss5FK2yGeGkWOA0vIJTD4BTxgQZL64YPy%2FxIqsg2gwWSTusinC%2F6zEeg1cchEGhG54Wj9aVpVcsegS3%2F2v81EBSKVaMSbnIuqPW8D5sL1N20JB2rIVjlCx4WNKlad9iKn7hgcEmxRKlxFi8H2C5yy2f4%2BeEW0Vmr2OWVUZUOw1UEv28WApEP%2Brr5HcvzhuntHp%2FY9XC3gtq0pZKbc%2B68r%2FlRX3OJWc6dLg1OiXa88%2BXK6gEKlbZWKN7gzzBxIOvs12bW15NoW3UHGsGoe4MkNgThEfKuNCbTk3GqHQYuQIrReT6kDjadWQDKg1ItfTPho74eXj2lirywXFcVZTSQOtRQuO59k6gGcRMr1wpDH7UULVi1Ag5ly%2B22X7CM1CQLtNqXfMNcptQjoEF37yd3F6%2F%2Bj9Gt%2Fb41sBIPABumPfeh7voCeJOqHxbFDXEI1VNP%2BlY0M6J2EQw6Af550MT8VTaeILPxEroDSWcB6bTKYGk8r3BlZbr0eXf%2Fseq0PKq59bmAJdkI15UQvM5lf6PGqvWShxNGnAt9sq7Gz4hDfKMNuDosQGOqUBexbwNodqHXkkKkW7BF7bwZKFBtuHxEPVx5WU1MC1yV4T%2F0pp0SUO3QNDTn4DtcBRwKAuij%2BWG9xJsFDU3iLSeR1Aa%2BQegFrDYdVTS3BalpdHMXGqkxVjLsUv8Dq9N0mQ3l66%2BcaPLBwqbyz%2B2QMzMiCgLHyG7krVyOoxduO2VL%2FcJ%2BaXoTAuMgFJE1SoWG0447heGgjXOUW0UuHHIfzXwcXiozfH&X-Amz-Signature=9eff9ba7047adc78f4c23c1ecd6a935528706c8d96b8ca920a8f5e9393307ef1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
