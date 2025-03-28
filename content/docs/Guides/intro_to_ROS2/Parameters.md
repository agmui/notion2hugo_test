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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667FMNNYXC%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T003840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3AvKyhGNv23acctvHX2hXg8vWd8f4ffd7b1frppc5wIge5PujGkjB4NxHTCZAxXPXsV9aRdhYqE4EebZPVpcwvUq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOhW7EE2pRqf6j2fBSrcA6441kGb%2FyGtLIkRtb9rSkglI9X8tDbPSzU68142b00TMTU1IrGOIJhF4J%2B01cbCIF7NpucTeuvMpzS3duJrNUmhqSgp6N%2FPDqu9I8NCnp%2B8dYe8DU%2B9zJpYdmuGfQe27R53hWCLLlhWQD7bHG8vz2aKsjwY5docGzIVnaC9Xc%2BlMZuvOdR5K4HtLKeVi0F2FULQbzvo%2BqQjR2wyIKDuOt0Q6R5rKwxZhi7cJiPmwalyBm9ZCkBvbMGVnlqxZhqjsayqo%2BYRm2XcCgMfM09lHAEI4tJLihs1cQWPLeDNq1rVz%2FOFmAkYngzKV9vgeGDxPjDtd8tWqe5DxOXHQPtSFbwNDwCUf3u2nD6df2JwdCGiTpgprNF6C7l8Bo8uHP%2FbHeYPEG53ZyGqN2RQlyVSraVT6J79cW4A4sLqLymaivq8vPs0KEK0Cr5ktn4X8669VCxYV4M6Abvc5rNwD0CsxtjjU7ngrDYEnnuYA9lKR6xnnPEEbiyXA5nkfCNTzVHd2WzjCE3sXrWOcPW5IKF7B%2BAfafYg39%2Bkh1cVjqWx1kQfAYVc%2B5kaQB3SggUVS4kznC%2BSZnCfyrTjxFiN0mK%2BULav5g3EO1B8rI8GKB2FvLrUesJWammDxHGTRNAEMM%2Fal78GOqUB%2BA5cgHGMtftISVd1%2FXtio9dHiUeTngC07w23Ruy6LHJYSk7spIk3j0DCXmbUqm9kqCdE%2BbPHQog5wzN1PM0JXp%2BAKBTrRltLIMg38htWHVLe6VEIsZGbr64SCURe1PzXF1n%2BN0iWWSZJI9R4fhoNPeYnYr4%2FOQKVL4y77ElO%2BquIOtu3mHOv%2B7tYoMOieZozKSqFLwvopICgJm4P%2FWlvfQoSlaBK&X-Amz-Signature=0a2852ad6dd49e34657f25ba0b226fb8cb2024f8ae97cb4e7d441f85fae0bc8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
