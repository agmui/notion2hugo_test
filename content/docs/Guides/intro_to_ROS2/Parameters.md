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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNA5NXQ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T132404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJGMEQCIHkGhBjz1v%2BU46TYV9dhLsZ9Pp0RugU8IzVYP44BQJ32AiAf5IDEPYUWbnk6gtICZ5ud3qmLTm8v%2BD8QVy6X8k2uVCqIBAjW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSC20z686HG0eyUJIKtwDfjPhwyrBzsQ9OxfLORNGPTmrEVjH8DNy0C1MhDR0aDfvAqCIXGI8gxoVZU555Gbfb4WSBnGj6CeUomOSKBST4aizO6I1QgtRAfbPmsT2DLhJsoy9IneNzzdj50frI8fLnKqHebzYJRoJzAy72Zg2ixbok%2BBx0B6YIr%2FsO6FeWE5U1Q4HsR9u1OSaU1ts9o67FU6a%2Br8aBckWZTx9Pd3QrHNGh2cnOWlO%2FLi5ibCxYeSuBe%2F8jR76Ysb0UrKJb6QouxNVfnmOd3Yy05bTRLu8DAropsFLWYgDQrDsjaWYPcYKgShwEqcKrxi05eaJHbWrE9rK%2FVSUSyaVaSVmVrn9rX4MgtrP6EPf02kNYCLRKf4OEELvLpM55DNxdV%2BFSUuT97GNZQI2KmrILMlEds6jZRB8A2F6xnrQy%2FMgpPyJlfNeiQMytmNN0HlLfolJIboX2ftO0RJpF%2B7Nt%2F6pVTwBlD7YexrE72HXgSKY1dYBtEO1FsbsQndGraUe35d0aWcZUQLd1Cp7Yx0cvt6a3Kpxhzi%2F89cec%2F%2BgBtKyqK2VIXIeqs2WGTqswMZ3s4fSLWgVe%2B2UigUbpBt0d%2FTsSQlDmAPrFbgaYw9MEsIoIeg1bgCMVKG31bPtWjBridMw2sW8wQY6pgFeJPMV4nYPi2hu0l6Vw1g01VJTsHykyIQuulHImpiDpcXhFzu9kDCjNH7LiIhJruelM3Vi2LrGMm6p5ko4iPn%2Fgqr6CiXGl0%2FiOMQ67koORaYMMRnNmyFYhm2SY1pmXZ9uXgX9TdRJfs2%2Bb5He9d9ZVaNwBC8Ph6gMG8JECYZPT7dTy5BQSTiPNwD47rPFMioUU8FUTbMDl20Fy1zqBxa7Hx96ZTQq&X-Amz-Signature=1f3ad43c755bb1005da2c20e875abac885677b6dea6baca45d72e164b1eecf48&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
