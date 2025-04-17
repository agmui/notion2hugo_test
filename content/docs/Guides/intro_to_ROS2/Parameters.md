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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2G7S4IS%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T121453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGLUvqxEywo0jihX%2BDcI79jzTTvGjVR9PYI5rie9jRQ%2BAiBgNtJqTqdTBSJc8bSd3h%2Ft25otPpLFU3huXF3vWTAkHyr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMR%2FRlbrTGBf5mrD%2FLKtwDY8IC8T1bQDBDr%2B5%2BY0bwDkdOCemUaFyQLmoWLKLn5iNsXM7D3HxHzv6vycQErAqbPNDMLPGJL7xeuVz6U%2BDXQDZ%2FQMDI0UZNZDRnz3CmcfbcPhmOYWyX000SEG72ktQlZuOtXtKOkwJRgorqf11AZ2vqZJxtZnMK7DElakMcwO%2BSHjeEk75IsLJ6czQ8y840jWGClc2WUkfrLxcG14L3lS5Z16i%2BQA9SvO6Xi%2FgxQIx5EljY%2B3lskrP1b%2FX1wRhWzGlibITwQp2DB4HL%2BYi36Zz%2FYUHo0AyNMrNDzr7MmCb6NWcqMJDD8enioMmv2E62jnOj9DfJ%2B98CAkIuKmzTWgw%2F9nR5uc2GamgB8eStYGtah6XeBAjAyx4Gg9%2BK4Yu357RrtVa08KQEcpEh1IYtFzWnwmMM4flQja1xcrrR%2BSjIoPht75WPoIv0Q0c4NKZ6BlVxiZyymSVjV5wNp4I6nGElAbYE4NtF05wdqKQ3ywIA6IY%2BHx5tX49yReXC2EkJ%2Bpi5P2tcUv0Wvv9NMnK1vtvV31W6ke4RXlL4xAl575rAmkINuoN430Cb%2FosCFhoxurLqPk0ylmTNsWFaeoz4fjbGYqoF0puMKyP12pbcmnKO%2FEQ8STBISel8RAIwtseDwAY6pgE5ylR5pn59cUbE8eM6KlJ8W%2BJnRMfEVOUsv2Ca6XuRWect8AfNjnIsVJT%2BfXJDfz%2Be5kalNp58VbtlGkAWI4w1K2rbjzkOZf%2FTlJVEYmuad%2FIs9qJ6ffJ%2FPasB0u1CDBMVZeFQK6388FPBYBSANJdqCv%2FKwSpkb64dcxFImRVlymmgTWG4TLpWloD%2FRiJvrgpABUqTFbVW%2Bdj4swIobogZ9SMT9jRN&X-Amz-Signature=3b0d3d5072eb57e6313b3b670afe6f4455f014601d29c8a5dd0886303b256664&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
