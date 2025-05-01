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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NWU4AYM%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T140822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDg8Ubkp5U16OSPuBQP49uaLI8oFNKMSvVK1wa0oaGHlAIhAIYCHnCnEG4cn%2FTPl%2FpnOzCprmorTBm%2F7%2Bk8%2FjGy8oRsKogECL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwMm%2FR2xtL%2B664rnvUq3AOL2swc7o1Vx60OmHHu9Jc5i%2BXVqmArW29l1bHjEoxvhAui%2FAbpZRGwC6HV1%2FD28fVStkQMMZOMH29HxNvBCiGMyH4ink2PWyuf%2Bjk7vkPdP8ctSOsqAekiRAt4Cwqm9LdVZ18UQK2eiHgArOu36xkQP1fbkC0KFgsp2HyJJ0LhXntAT3%2FmG5u1vgymwSsmbfxTNrjL5FKKbDcGsyPWGcnOmsHK7sgvxRQU%2BfemNv8X7mlK9gYYlsr%2BcjjbncqhQkpSZLxvQlBS7puMywwEvHC4O6Z%2FCU%2FNu8F94tF8baKjlBJGgD8sn31Zcl3uOwfuU36XUOaA%2F7P0%2B%2FdWt%2Fn8Wn2lBkpgnJeeyI0%2Fjta44E60bnG19vxNJt5IRVQiovLe4%2BDBt8fyqmryghEbRdpV%2BCm%2FAK9ysPpfsshGyJw5c4Gw4fnA3yXYIWbKdKczl1PoiKFg%2FFwaqP7RMwRpfu7FxCbzQLjBzhB9o7S9rHCpcCbRsh9oYVowQLmaWklB81%2BaK9ySgGK%2FMBghgZongInZXC0Zp1bRk755Uewx119WdDiUEokrgLLUXeBm0ywXk%2B01nnP1%2BEbeckR18TzoNRwale7d7tAwNhTTJTinhXOjiwmkrUpdXj2h%2FeM0FI13lTCI%2Bs3ABjqkAdrORkHv%2BPYdotolXPBSFVOaaBPbV3ur3PzBKvRct%2BNDy1fnvJGU%2FAr3Jszx%2B3q8heLE%2FYfCrp586H7QmVVMnbrW5KMW73HaMXlaQIb8MiYwVr1A2B6FUGqJdU2EMbFoDk04z3E1Lfg%2FtB4DYP%2FVz0c4a9DJNIqGnGOZR5fDUh7pTzs3%2BiDqX%2FOgAMPgW%2BkB15HMlLnrAmejuUMQfEQsoCouRAM8&X-Amz-Signature=d56b67f8a37a67409632cbf79f6729ae674e9aac17e34deb73973c042a37180d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
