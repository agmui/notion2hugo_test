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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THG7WUGG%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T150941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbBF2z8gEBP%2B3cIyppO5GPAPGeIqZlPt%2FC8qJTVnLNQAIgVP0kZ7kHJ3C9BCKcaPG7WirctpPgSPEw9B9sWzpaj1EqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4vY5%2FsY2BhRxuCsyrcAxNMyDxeYu1%2FICcs1AXdKS3V%2FgOdTwu51qRZPsh6nHhERXR3DvHpNzmKB26j5QEGCft68Hey7S3e%2FJHj3CZGRyzoyoTLwC1Uvb6%2BzlKOby6BkBPHBHDr%2FBuiJSAGQ%2FJkzXDhjv7fwyGq%2BOE3pNMgeDDD4gaBwF1QZQGZzH3xRcDct7r1Rg3r%2F1XpN%2Bz7NZpIkDZHSWpzxoiP5CnRDGoOG1uAYoeaqBs6KslSR23FzA8y7DtVGkSPNLl7TkEYeLlUioP2SIr5bJgdzGWqB6WH102hG5YkBMRRw4DSghKzyO%2B70JNxwg2wPdrPFRx4lQnkR91yIEqtor9CM1wcrAxfWLG1yk966gQaLkVqueETdloLEy5q1vbpZgHpqquAX0DirtsXdg%2F0F5O1zavlg32tag1XvS37MS6gi%2FRGrnYt4g6jA5k3bTTN6wIuAC1h37wybOtn8rDfoGbywJybSGS5WMW9xO1%2FwHW0DFNDTG%2BfWbzCp4hW1rF0T6OfFtgR0dURkQFwaNsNUAaMdna5HS21V91D5n5i%2B8wn1Rrpc020%2BdhJXekRldSNXrtlyzWyAioWbgjktphTjY1pXTTasepygJWFmtrtkBCuOcHU7wiEzcA1uNuUh2%2FkQzoEs%2FLOMIHaj8MGOqUBFP0PUwZopg%2Bagx9y%2F2jz%2FJZg4pLaD%2FWaK9fsef0oJUXMIILiq6xPIj1sCo8DlSiz9U7WqOdHYO1BScNw5htBFuq2YzANFNz6a%2FDw0LBcUK0PRebl8H3WJLPs7huNen0%2B6%2BeSykRjmzLHQzm1cSJ0WXmQXR5P943QEhDNv3YgWznWt8PKVVuGhSdWAOTGxex0AnQe5bZxfmhoagJc%2Fc%2FR7BzeaE6T&X-Amz-Signature=7c033497aa1d3323058c1bbab433c6481aa7eb8f0e66e51c1054d134925eaf4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
