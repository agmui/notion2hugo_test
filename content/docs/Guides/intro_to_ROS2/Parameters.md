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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZW6QDJGO%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T081417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3auIn1ksBasfCtUa2iXxYJESel1bhHXBJXtwTR%2BgHuAiAvQQ2AJ5fdubG1sU%2Fhc%2BcIrMGYBGM0U0qReQdMBG2GxiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkhTVWIkXTQrqO2E2KtwDg3eQLft%2FWTKjQtH1hZ4N1bMdFns92uiaoARlmznVhMjyZEEQxD%2FSsjf8CppoURVz8in6gtpxyJFQ8Hk7NB3cQAxiEPWBtPo3kG06sJYSrPoXqjbBxwDnO0jf5ksS4rTNE%2B1DmlltcRPbAq7ZhIq%2Biv5A%2FVJ%2BEYvo912flBiIupgUV3ocgXHsoY7YmOoqwUMCOkqepjHjqubU7qJH4eMau%2BcytQXjA9VCziFZ9zCoryK7MSSpZneIGGp3QTohfq2inSe1QMQyI4p2m7RvdBHs7TYPybj%2F%2BwmPGjFzX0QMsUWwtDc4Hd3lUzYmvxIMwp1A5MAjbhwgHkeQUeLKbfBo8T0%2FVrCbOFs7Z3XFzy8wDYFS4Waz%2FRCT7SIcL1f36G76SjC%2F2oFrr298OuzsijXgL7MDsw3RjchwExU473o8IcRK9Yxq3BlByrjMUxdv%2F%2FaAN3bbbkjUqZSbhcDegu4YKYmDhvdCQaT2X3ThK87hfXyFlz5hSNo7Tc94X5PLQ%2B%2Fx8STQ44WEgcVzTcy7AEf7%2BcYR4f59%2BzeMj%2Fh0znQkw5HJ799JXur3IPF6JXjbkGGQarDKoSfTNEnqbBwpERrf8qbhfP8%2FrnT2mImSOTUj3RxphQnuMKVT8H3sdocw8ounxAY6pgF3NfeCjof4CXGPubL9%2FPn%2BLzq6L20Ksp9WT91r6DRgrP88rA%2B3gr9vO1lN0r%2BJq9FIML6FMRcF1WBGVtZpeHj0mtBW3WxdaTZ3S4g8cVzY0fWY188Dd%2ByGEiJA4VbAYHOGv40L2%2BufsJ3iKY7B4BDi3cmohKJYQi7obqlKqleTe%2BPeEB34Rxqz0M2vrQOgMKj%2F9Ty4UsrkFDadbHfMKkT4NrxYHY%2F8&X-Amz-Signature=660c64e365b5c1e1736fe452aac0bf8d5df0ea873593d8dc015ad298f33fb02a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
