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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WJYRXID%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T081208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4OzVO1zuITPS5Q6YTTTjtF10Cwf2Cyed5CxjSRvoGqAIhAOVltkz6XnoUR6EhZnrw8ZH3wuUdHUB3llm55uBzSHFwKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw5sSRhlDaQ7o4RTFEq3ANSGLTILSEgDWQScbMEZMAGZDACqGzXdLVBrasydZ9d7%2FwTPKLl1GKvTf6evqcH2Z0Y7tmekHve8P8Zf%2BmF3jDfaZbRILbjLE2gGFfW9kae6CVsBIJx3fctKQ8gjBigqjk0SrUEmY67Mq4NPig845njff%2BGZxsWRlSmR7BM%2FH11AhL%2Fd%2BcB7gd5y46lab00MBomfKtLDBoRQ0A8JSF9ZZXmBXtAgEMBtcgnbu4zNIVu8Slb2Kb0lCcG0MDfWJsVgHEcZ8dGQsnXnd1t7YCa4nJYka3U1UsgSgBZCkZLuyKhZcTSrjIPSDm5BidTF7rm77zo6z7YEiw8lwCpSIEi11x3txpfIwUOri0pSjbcu34AZ7E3wyhgGbvNu%2F%2FnpC3GGblIghwafh54yowVoqn0h%2Fb0mQdIpAbTZx52qVW2sGUj%2FbdB96nnjOWJhUoutOOQwePejGBEaUUJmvD9hjmrE6%2FVaMPJnyFybje6yBSK7sGblGJ2z%2FCRADwTLBfMglazllBc2IJjHMgu0DcitO5aeUZXuArUBNc0hVgXhiOQ%2F5x8HjnV9bUx%2FtmkNxDyFDhexbuelsIMGJB0pdDhbi8J16xhqSJ%2B40mwcEMdP8AJ06%2FY46JMoBNwHLjIIwIL8DDmlpW%2BBjqkAYMRFxoV3JSR5pxblFpeXM%2FePotuwhgf5%2BccMT5SymkMPVTcdKr5OeaZFeIm8zhi6epoV%2BejTmn2VDVpo%2B75fU7nZrizxQwh64TGzOywF9HdapCrxg8MF0wi3aAgwlgJadaQkIGo2dS%2F9XxQA5CckXqftE8m5YmuCkXRgHmf6ejY06cMJF6Kf17Oi7gf5F5ta0ZhJnsm7zKev%2F17o5Syn5a%2FM3rX&X-Amz-Signature=2d81a598a381f574e9af8c87520b8d9ed9f4282d43b46e1bad6612fc40fdecd9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
