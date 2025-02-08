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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFTYTORV%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T100425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIEFRAMwAM6iUDkGb27E4N9v0A967IjObq44l%2BFFUBObqAiAsw%2BfcW4tgbAxJRqDe6XjzAarSwqTGm%2F%2BrCIPy5RR5DyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVQCFcr8DEs8AvHa8KtwDpi25uEDPuUkklj2OFQSwTbI3dyKxCni1owxDcptleFB6K7M2DZeetqxPWG%2Bb7h9UQBD679NrkxILfxJzxPb8HKRldd5WlBtSCdnkLXu7J2h8MbHebOPrb0cyttuynQEGyGm%2BtBnlMIyvm7uWilIU0lFwC9DVurCDcCbyes%2B7WQZ3TQ%2BUuZB3ii0wlM6H%2BZ4u26%2F7u2yViz%2FcpFCqWoy8O00wsJCs1f5TYmICY%2FoqdXXlD6To2bc1YT640YGstfcFCqudZELIRSfOHzi0VQ2WB1aRFt%2BtI%2BhRBfxvuGgJa%2B6ejat42eodlF1tIB8159LYTVGDQObdYebX1WJz32798vyfM%2B1S7wHBbPsheni2Lo4%2Fzood3ZRFFEnzzFB0ES4sxJzo2fQw%2Fcba8atYqvxkK3MLxOjiRV3UJ8Fs%2FpBJ5xNvz5S3ze0RmcCLocCADhzxitwRcLlOw5pyK%2BMKcHjgsnLpyr1pRuSM87SPha1lXULA3i4ItuJzhOd014IVdYgJXEFMX7feWa4gwJ2bTKhR3dC9D6zEkCdm3aEKec5Y%2Bvcv6F4HjkujvVq7CT5CqU9N4hEMySscvRvbDdKODQDdP9EhhVkPyn9clIZa6c%2FYrZGS2g%2FySyR%2FLFJXD4YwmpCcvQY6pgGfwV%2FfcfYMPbg9PKNHn4kic49t8G84XRp0YHHUubWoN1ZSREv7rqilTsOSRFBs%2FFv1piM%2FoqL%2BjOcgqZkuBdKuHQb0dJ2XPjve1w%2FooSJguQpQ7d5pLiSGfdMXkHK3P20OluFQNG%2FJG5ODr9DfqjDefZZmksspwoZnxxeABTYk%2B2RLvEpi9ZWwNunuOPN2nMDmbMmzUag3jjTeXprMHBL6R8MX4sVN&X-Amz-Signature=d9c87e43366c4688837b96c65dd99b1c74376592839c8262cf25572576d4c3cb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
