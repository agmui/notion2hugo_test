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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Z4YHORS%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T150818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQChIBcIJ4vIsbxdBmtCyuPp436wP4Bz%2BzpVqvPBdeA2CAIgHf909e6feqvp4Mp72RZez93gpSR7s14KVooIX5G6MgEqiAQI7P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLeDom5qi%2FKxzs5UuircAzVK6eIoEvffn%2BOY7BWd67xingfIzyEFjhZ13SSKOjspp7FY3lVezXTBExZ8PFq4mSLieL9cNAXOa0QxIDXnahvfwG%2B8weekDjHwj1Sz8u6F%2FBFixnh%2BnKh4jVhlm3vqXn0zC3Z8gwyIKRPaaZrt2gTvQzTr5cQ2%2FinnskZjeoDf%2BJea5hvEfQFfqUKLowKil2kYhR33lnd%2B8ZfJ6C42x50dqFAeztjlriEhFbmy20NxuJpjLzwfpCC9Bom4xiD%2FDCq1mIKkUWG2%2BKFNNwKynuqWWV1joOYg2%2FwR7QQU5ohuyeiU40p6vtTR9HyI0%2F99QmlMybMu2qiT8fpGhh7aPTi3WUuAkhBtpFRMavejDOz1exSgWvM7Zbg9NJmLX3IsIPQ3bnq%2FkpN33PVEVqvegVa5dOOYGvvyP9cyIhTxqBJ3yjSHdXV0NWFHJAqtCkSE5XcDeHFDgz11WPTj8mvbAcCbvMTz4lR%2BCAygAv2DFGlH%2BMDyUbb4SKQ3Droqd%2F6zFPxnYKginFWZfnps6y2%2B7cHhzJAt5Orzh0fmfgD1AonXS6aLzoT0x4zYT2TUuatkeT3whRSe8sIo2nFegIJG%2BSp2%2FwzvfFtk%2B9FYLSKd9x7k4eSMOZp4DUifSCSqMJ7P38IGOqUBi1kbpaqVM4OgcbvQvz6A8RpeCjS8w0JaRr%2B2utndZYWT2jUoczc5RlBtfQ3%2FvHAc0Y6eTObR58F1wt%2F9Qqr%2BK2pRhHFyGWweufe0%2FIxskOYfL053SDSmDmtsLuI%2FxaHMFWEG4q70aronFiVTF1u0FOpSAroIwLFkB3r2aAVhMn1wEp0ILRO0iV5JSGJKDCbWK%2Byaoi2Pm4f9GT6tiyikIEydY2Tn&X-Amz-Signature=ea002a184d9e35821e4e84ac42610afa7bc081897b2002de84ca3a3d8953ecbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
