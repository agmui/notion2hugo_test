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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UL6ZXRIV%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T161122Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJHMEUCIBGlkXbxqjWAvRbNCSAybhN1PrKJwYIKH%2Fujx82Pk3WkAiEA%2BjzzuchBSa9iAHEbeNtw8UOXAEfoqAAx%2FI8G2QpGQQAq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDJOcycU5DbHhhO4pkSrcA9YPWo1aTRFZMViLDL8vI2aXBWOAgew17Ee6KOBSoH1vhOoqev4xLwQY9AFJ0JUb%2BKF%2BOmBjtRphhHgVyZWURFhkweWNBmIYPiN1iNli%2Fw64xwd6XvCS9swF9xkqRCtoIWPwPqpLqJ7C3bXuGw9HuARWLE0SnseUJgMbUlsldLqpK0O%2BwxtI3PKFn1eVlaPkqNjcjgo8oC2sWDYbrEjmQ0nDzuc9Qj6pHSaLxtw6EMYPTFymgUd7PB9aanoG9WJWpO3%2Bco5%2BAHogCFy%2FtpV8awaZO4zA1xcldTJ2O8anQ2qRhWcFiwKSaVfNr6MDWoDKBtNEwAWZF4kg2ddqyk19fxkQu5EGvuDDZ%2F%2BJ5ODrFY3Ia4GMMDm5l4pYxoDXoV6SiIRP4419wPUWmSFgRHGz1HvMBVVT5bUqAPIbBwclMKPXYsLU%2BWPQH0NKbBlYTUZTpcSRlhpciA%2BRKAKtBYvOCG6RCc2hTgF3wcAEMHdERLjtTJGfQYxK%2FYbmsDvBSx2%2FEdowqjpEBAYtK%2Fi3y3T9rKtpj6ElsTb47R%2BdYxkIZQMe4kofiO6%2BS1%2ByyavewfvyItjE%2B%2FQDbAYdbf0lqSha0Ci3Jc1kHbO9r6fXYfofN%2FhJ%2BVWFqv9nt2nkpftiMJqE1MMGOqUB1mDfbEk0uEpN2sDTcGuUc%2F7tzpHo7sZUoTiTEEVd7pMyClhZ%2FBFA3JU78Mkooq89ds%2BA265%2B9sGFR74Lp5yqGEgevlpghbFp%2FUmLP7A7P9Hf64mZDY8%2FXne9ozvNE%2FU3u%2FQvmF7sZc%2Fbqydr26%2Fk0zgX199e1v5d9WiedDcnkD6yqf06mgS2U1biDuXwZA4mi0mrETjpQFbPjxkvRcjRu5fT%2FQBd&X-Amz-Signature=b3b1a417f67ccf04006d1a37cc09a85f33cfe1d3880917c3470e1d947e3ae86a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
