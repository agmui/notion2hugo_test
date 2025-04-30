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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ECIM7YQ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T190539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJHMEUCIDX4W4FQrP%2B79c7II5Ph63HCiKl4UL%2FHD%2BVAwrHv0kd1AiEAr3EJLCdJArMOF0sBGSjRzfzGeg3dJX2u%2BqURAM1eyEEqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNiIUjBFrFFWmlAMHircAxXBzn52ZR9oPOSeLfOfxUUkI2yyR3yPoJLA97CHr3o8DpF5Fiz3JGQRlD1iHlbGfPrXlYp2PU1kyIvq9SGNJ0KXcItObupd%2BFZ2ez%2BjlxLTBDDDBVcA9HYeDZ5uP7IKxZPCiWeGaOieIs%2FEwSTTIMIn%2B0cKovXSP716HBAhn99Vu2Q0JtiahLQ8zUT6pc1Bqzd4qnHCq8wYBrE0%2FGw1T44DBgUx7n5X5jU7nCF4kIdTHZj%2FamXXs9eHruOfD8eSmJg7v3J2TknweAqGbgTfpaYpRc%2FSNG5zzZbIqKTftIaZNsltLshsP8ABvIkHImQ4NAgaYrsK7x2ysN7SkcvrWpj431IJDTDfJT9U1pRuhfyar9wqGTRsk01JDVdoAlvCPfE0YpG9HIp6bS491bLLxXcLRgiKrUlr2kdID0E%2Bo50pRaAykHINS6NLBhgXWlgklspMB5fYeoiwRQnhroZOvXePOYiPTKVf%2B8xEkdfHbGpVfh3yP%2BGuOB3dPtoDr2d8JluZwN9IjH5S7UWdO12B2m2N8uLIcbUT8%2FrjMjGVHw9ipnWV9AwEmvaw5xIXTx5fV46Igs5KsqaGG5BH16Fv1q%2F4%2BSCj3zgVcgjeK3jzp03ElN7jAa7UoVC8TtO4MMzTycAGOqUBLiDOO0TsF6rYjFJfZ%2BoAMrQNAb8f5csEhMbFTL%2BOE5gZ8qN3Rdjr%2FjdPIXH6cVj85dlwjAdMixzB7KXRhOdoZ53Qc6RivJU9vxHzu0Gq089wged8TE%2BROeoojV1kkEASRY%2Fr6tDg%2BibRLcsdSCNSYcqDZzf80JBVGE7F8EjUDeTBINMJmSRZkH%2BH7LvInnfL1T1Q9CBxlr43swRwi90JOB36N7AL&X-Amz-Signature=c8539d918761bfc9165bcf921d6be2031e482387c3575252777c391940cec46d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
