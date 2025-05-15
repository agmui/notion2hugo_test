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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PILSFXV%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T150932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQChqaLjEldZALIEWMfIbh2k%2FeDF15tdrKZRtA8IcSspwAIgQlf8OKUfmHC4%2B69DXWrKhw9OkOMNKvn4WL571rBULh8q%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDLfw6rALVqCTBe43tyrcA%2FdAd15cciQtBfAS7iDeNqqPM8bQzq2nzifk%2BvgQIzSM3zCfnzj9%2FAI1V%2BHzPVd2bZmcGLJiaBoNwW0%2FP08CejvH4Oalon04VTg4CXAek%2FjDj%2Bgh5%2FFgaXgf4f0ww0%2BQIB7B7PZRBytdniPd%2B9hV7qADFGWXkSgsy6TizC%2B7nD1A58P9EO%2BJ0GwNISDx2chaXibOmZulXCjSC5jVaBU%2BHz0JIuOnG3QVD%2BJvNx6es6%2B%2BbV%2BC4Gh%2BGnIoW%2B21st%2BCRqV9YjK3dwuGgCi9MXwhD2xFpPZuLDQ37R5eYiokwJTaZOBhoLfeGVwXNbofL53pKqr151vwWGcrdPCsGCxJHWrkBXzVBiVsWJePtrHWNlcLt36l0RA2mUveUgqix3JEBYafV3E2EjxLixL1upzUhJgkcgnfrMsJpCbcLlmqo5Qb3GiguQqXv2DV7%2F88TRnwzC6pG5lb69wvUAFxShmwuGYbSz9KoruLAj2ezKDVfEQZyGVHUrDqdSfZcvfD0i9Cx4ZHuy%2FyRtVC1yHdlgZVXh7%2F6X%2FVQfKSUmQ3dhHGL2T9VcoFlkSRy2jf86NiOTbk8PWkbKwbRXjrnGYmC1yFCd2hE2jiOLSNNjnHsiQzBT1X07sSGS0MTbaioYfEMMLvl8EGOqUBQNRCKzXE4jOWbTWH%2BOorjAYArWHpjCAkVHW0lwfJzja0xlOGRDoZDmQkZeyePBULfIsZNIcP7%2BRrHmpBc%2BaH4yVNLQOS5tY2rRiDO%2BVxyVHvXi7JWWdd41d5aoPdniGe5STDrKh4g4tHeuhOQXVEBTEgcwS4PgwIGXd1bbFPjN8N3tWgxYCToycwqxT%2FsvM68gPQ6lo9YL6TdbCI%2BGG03zxLOpRx&X-Amz-Signature=0d3558a0527c9b5829003ef3d9818924fdad7c5c3505864a69a1847208faa4b6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
