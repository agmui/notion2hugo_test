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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OWVHTCX%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T070742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCodZXNEOKEhsvQND1wETI0V1HNSusNuDCOpLPLfstfSgIhAOZWz6x2V8hOe1F1AAqj10FydJ4m1DDr0zcondlFJoOZKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSulMolfEVOBPE28Qq3APvUJ9FebmEwhgjAwnSK1Ze6rLNPyD4jrLOLFsRLwKmogwypRe6lAqRFkcq%2F8x16HfZyrafWM9ASvmZSZvC3%2Bf2m%2BbThERI%2B4p8nzvRrMGv0MXvXsQxzAWMP4Qo8ZORnqesYcEwOAsm5J2K%2B2Lp9N1HCfYpcZFdcegrEdU0rxf7lzifIK0C9M3BQJDD1x%2FdbNskRmpMJouMjTRHf%2FXBihEoYyQRhXGte8BTaDgZkoIu%2BYp8GO%2BCE8nxfaaSBzBX1uY1yPu6Pyy2Ru9%2FJMeTvcx89gpMdED1XDakMaglHl4D7KBDHIJIGYAq3e1RLIejdcpHWfeqJ59Gyt0een8b3K1tKg8f7tGxvGuKAKz67WMBGtPnwgqmvdV3Pw%2BbKOM9uEBCvafpF2vJuD%2F0MTpsmL06EPtXTpEDtUgoksAqkr2Zr3nmsPDeYm5AB3mnUGngAetRbRMADQ8eQzdIvZ%2FtORxOH1KJUQ71CPMHNkL9yA5ER1110gBE7WA06OStBH0mEf%2FaO7%2BSdcdKECZB2tATrfK6DB5ytRNMiw19XmV8om%2BE5uQgJnT4L%2FxF4cQqDHRsmt0vS4HI0%2FFHIYoFjIHj3qk5XvV3dKWIgixPYXhFRwuQ5fXZHmzqckjvMTaOLzDs9PvABjqkAaPyBspkTTbAY06qH7JkxQANWSM97gd%2B6Wofcy2yvno1nMeor4eA9VCfgZtz79BKI2nl%2BW19DG50go78WY5pKYu8gKaNRLboC3%2FCOcDmlDtPkJ5WxRLCH9fh0e6LXlhR9NQyaDtGR%2FlBLlpsVG2l7MOIu5c9R4WVw7QnnO3tcCot8cTqgyXIu00n3A6muZQZOBKkoUK5iXy3xxSjDdYTJDgMfI1i&X-Amz-Signature=a7cea993815fc125df97a357a38bfc95b0f03b74821172b57482d2e3c830b0a5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
