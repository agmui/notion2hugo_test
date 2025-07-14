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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6LHZJPK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T220914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIE8Rd%2B5za4%2BYBjzPTPe7tX3v3vnSofeJbBWAL7tOIJAZAiBiwiK4xof%2FxDCDf8Bq9H92ugmdzZOPdNTxrE3cYGU84Sr%2FAwg3EAAaDDYzNzQyMzE4MzgwNSIMksxD0p7pjB227mhEKtwDwCUwOOL6rzGeN6SiFYqso7d3E5C9iF3%2BRxy%2F4ZRgDuqvgkPLQQM3%2FryKCef1yayGo3hNvc5o86wrswieJcQlZvB00BlLDLMVHy2DwnQ6BzMb21irYn%2Bg0mr9JUKJI5fKB8G0syo5PmXKmEdDjkb%2BjMsaA2XTNIZ69OVU94x7GIcM7NcQUjhP84%2FkG7nmDU%2B5AndVlzeO6I0MDKykMGRn1rw0wCN12JQnlEQSIRSNhJN1RihjyK%2F49qOyh9QvxBch489mRPmzFOTSV7FhbCMnIfmUONr9L9xTaWtIjfs2KUA3LkhkFyhEVJ3sMcZXR%2FI03Tw4yBgqwfeFnS%2F4gx%2F7UEwpdpSsa%2B2t4%2BczjBVJG%2F1Lj9YMy86AebB%2FMcFOWoOSs29fJOS8OhdrzL1nFLxscl3cZJNR4KjquKdUm0HKJ7X8UrKY4NtqtUxCooizrAFCdWRFtoDAELsOa4%2FOCnhivr5fyQGyVEP7snUK692DjnPv9Q1B2I3QHqWq0H78mIc36s8FLkInkcjuTeVh7ZAYmDG%2BMsRrAHd1EavtXXJnwmHfb%2FZr3l%2F7StCzRLsrnJrzzZqRACZxy0dXP7jCucy59nE7ZW1jskzA4kzc5oG0yKbEqXulAnOmfA5qR7swnffVwwY6pgFFfKIT46lBsTOW%2BC%2BF57VvtIbBG7iGdNXYwD8q%2B1oLvALO5DbhSxoZh943BSj0SBQd1leTmf1OleSpsMaDZn8O49TezrzADp%2BBg3XEX4u9trvecrtUZ3VBGcYQETcGhggEUYKotGzsAFvOkvqfMwRfBOtdRffFf95m1%2FrNZkRrnL2pj%2F%2BQuadZOf7u%2FNTsfk%2FG5k24aIHfk1yiTnl%2FDK66yVrWMZA0&X-Amz-Signature=e60475ee5d6657057626b192dcf31e21726bd8adf2aefa5aee261ad7d3f3865d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
