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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH23DFDB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T101004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHdbRPJWuRNy9bz5IRJlmv%2Bx8LX9tX6n6QaAJpMjiXMPAiAq%2FwOMYSgwy4UGxOP%2Bvucd2NgJ8ABE3pOmaBg50cQQsyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMIO0gQlDV5iXAGW5bKtwDoxD0ShgO9PRBcFev4A9fA1vUgTw%2BbbWcLWRiwbMmMydvbqgcGuQPtRCqS%2Fe2d%2B0jmQja8b%2BQWr6%2FxZC9AyWfmDrcxmwAdU0yOICbUb%2BDlpnZIK4NOpJnELOd4JQAWYazKBH6Wllh00rm963X9urzBFGV63H7OQIOprVE9xyMjMkrYaIoodJgazIMr1qac9l9OyE5zNEpUuKXV%2FU2LGqyjtk7L8lTTgq5BuVQd9gcO2I2euFip2DYNRW1HuhBFT3YM5eTpeuJ8Ux0cIJ%2BCyzxCUki%2Fq7jXCeupmoCem3%2BokcICuRRhItz8NztsyqgJ2rkOGsmG9%2F09XATgvX7v8FJ%2Bu5jHJYireBmrhKjRwURrtrz5wIU0D8afaSMN6opvo%2FomReO3E4%2BqKuK3wJWddAS2CAqnQiSjCcxlr0Y%2BTno7Tl6duSj%2FLXkgGs6ugJ327O3gc0Wzmci8ujp2ZwCs5vE%2BMgsng0B2Pzvs%2BfJaXeEHngJce9B4Nr%2BXOELTFIuAlo6EPuvR9QCeSptOuuuIeTT1Lwkbjvn1RCrD6F%2FO4Bj8qd9U2qaWEXQqPnQTnI3GMnPFFPMgBctZ9Ae%2BACJbv001hXD9MyImvNkfdQeKd8BtCDbgKzXaC%2F9Hv%2ByMtAwj%2FWKwgY6pgGhNAy4S1zCavXKTZktp7yGoVcm8N3VGKCpqF4HX45CDX4v%2FPAavWjeqNozLq40wh0SGuzabEzG3WtFY1M5Fq34dj1R4kwblYOwZXB8eyCawctq66BUGdrYRfHhdvYXNHH2tlEYsCOwaKBbdH1wrZfNuKPSNaz9Sx9C7mJcH3NN35HDJ3VUx1ZYd2bV4RZl81Xg8zc0NxNBDhzYCK8U4NGTL%2BSN1gKC&X-Amz-Signature=95d3c67b80a963a46750b79781ad84668a411d8585c634025cd6b0477d5f781a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
