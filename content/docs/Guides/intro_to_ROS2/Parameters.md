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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6PFCW3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T034907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDYTxGSXw6fbd9%2BMksfs%2B5TIJEy044vOJ769c0NOgOGHQIgCjBE1rH5aW%2BeN%2B%2F4xkXVX9kHfjz1TCjmtAdBpgaidU8q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIeVLUFki2SvWQJorSrcAzeXSic9nCONOkMehGR2L9CrFvbcbNTkbL%2B3Srffs0MlpkTWIvFarN7Givv%2BnaTUrbaijrqsds4q%2Bjy0N1BzQ4FP4tVqeCes5KV4GP3J3ymXIb7RsXQI05JNz4fHyrwC1wbBYXxWvxUBozaivnoESwu4xq10epTsAeQxBnjvDuY6ZHudM6v1MgVUMADI8idE4nGbTN8itCjB32Sbe9nV2PDxsX7oBiQf6M0gJRfO0Y0TTsUtUHf0vVqyN85sFncRJ1Mjymq%2FffW0mxEpu1hO2mDYCufAlDquiczKGmhlctRl9aXSrBEpP69BQRMOoWxAfI9uA%2Br2p0G8Z4SnxlV2HYTS4Q5dnZ%2BFglsLhu7GhSe6c8NSf2F5fnnQ0Np%2FTVzGhXhNJbxcrPWt%2BIOo71MDH2OXEwvl3jGPYtlN3hLHfPAek6H3O6cDIHSL%2B7jIBlW70h7Fc92oxX9O%2F%2Fip1WdI2rg6O8H7TqBWc%2BbVic5ygpg7m%2F89ab53bR%2FnFSoO60A9pwNVHszqha4M5Sek2l6oQd9M4fujTRT%2FkS647nyNmIpA7fEq6ehq%2F%2F9MeCrjbG%2FN9ohPKCA1QVacDpCiI5dwt7tHYil2H%2BO6QsnXbD2FM6lxvQIQMbJ8%2F4xjATSqMIeNp8MGOqUBxmyLZNNpSWvLRPKKBHOTZ3Lv%2FKoWmVEZYEVGnor%2FX1SXmppJQCwxF0HIkFCt1c6%2FSqCrYWEvwl4kmhzSopeVpHrzrhpxM0VYZ%2B048FFXLP65Aaq%2Flg5OBhIo8kXZxdaq%2Fzmhts5BNDF1Bcs%2FIwA9Cz%2FdTREjNJUJAcHQBvkPO6Yd7aPSLmFHb5FT2HzEjUV6BEipOE53QMjMk1nIFsofxkqNvdqS&X-Amz-Signature=3d2f764e51e0b856888ea0ec9acdeef591af5ca247c7da49404601380d22e947&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
