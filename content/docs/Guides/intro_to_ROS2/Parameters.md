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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO742GWA%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T110721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4UoRjQabk35hDhYbJTRQZh4yFSO8MDsUZ42CfmTJL2gIgETcKiL2Qy8DG1y3Z6KAmapYol1fley1mslh0wcYjUVEq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDHAeIeVDRebwN94haSrcA1rCTHoPepfOylSI9rjYamx6jioxKFPql3kPz79AVHl%2Fv3An5zqLWoJ9xd%2FEO0usGR5eDHaQE%2BGA53A0EXv8qWfB8DEVZ7d0ttxQEAZyGcBQrfpXRTRLRAwGXy%2Blva3HO2MJQMCxZ3KV3SI88Yu42tNxSopd%2FpwARIFfiv%2BVNGeWUD625pA5sh68UhtFOEYhSVr835JSkqEFWaBYGRg6npo%2FdDGH5%2Fi3VdmsCWkW9DX4dNX7ezWnAjHjQ1mUEQOmdE5aSeBk2nEoevwlcqkQRTcWRWJI2%2Be7Nmp80FUy7S1s9cBvVAzzCtL01ndjCfhzeWGRfzxV%2B1ZJfD7p5aloJv%2FzHPrjVbfPYJCIvWGCUjwzGPzzjzxmaIIRcvhTpyVvlSHfEtn%2Fw2la%2F0U0sPZyR8brSJYuFWzCc55CERX7hdR4RKn4CZShe3DV9%2FE%2FJIQioNDtBR32Lw5ZEGKWIa%2FwGIQKmNuRGzmwxwfOpiCMlNaESJvDzncgoqpU6lZNMJmY3jqedzx0ETJuj1DIa4ZctG5s4xuW%2FyJF0LKVt1k9S6a133F4tiFWqrxVpcAgsd1Vyvf2JKIrhL1xCqNReTdp7g%2BmNSYrccW9EVkROj9I6yU4uqfSJFcHhRgu2DFRMOWM8b0GOqUBQx97bZ8RYkCn82yIrAP%2BCHKUJHkDDGNNgntMRQgk%2FG06UrniUBo9C242upX4Mokv5NSArl4jlWtlGf45XvS06IzcjLKEwS%2FSyJfHSrYnKNzkyjKFwYkn%2BckwpojaoNfotJa5H9aTDXL74yhnf9lK48QK%2FElDfCgss9lmP7c7Jus4%2FTywyE3lPaDDdXn7axihFHzDlHTa23zBPOp13qWmqo9Zyawf&X-Amz-Signature=8c388684c0f5b4a80dcc4598d356d2ecc0e926e242b6773e0c5058a3496a027d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
