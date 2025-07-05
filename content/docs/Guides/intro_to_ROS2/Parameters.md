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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDTIXUXR%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T061203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCIA3%2ByxHgEfWGrNQmS9yy0qLNWOiIHSMaYS%2BiogOG7GkIAiEAu0P%2BupwJ8in6DQ%2BslHNOeloAwThaQaRBgpNy9ANDbZwq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDFxKq%2FchriqhOOyb2ircA7TBLExeUmA7Ky92L8kDh0QUustuRSzzBux8glCe6vJueh0c625fgH6CW6m7gDBZesZNlcWNCBDpUOqLNl6VOxPTYvPJ1YW%2BAiXpdKnXA9coWtkOcJxbhFBBHuk0RBcYIQQ01HrdaRnUhbIvN5NhaTSqBiLF9WGS%2FSa%2FxNeU2SiqCXiniixjWX4esVDjzfKOIYuhlCXp%2Fbnmf5feiOuP6BNNfm7hCs0W3tU%2BJEfQ%2FP8lbLYcqNWCivcfFFNR2XjJEqxy8BVr39JA1YBXfvaql%2Fivx5keOOCJT1b%2BuqsVx2Iskx0K7%2FCDVWp%2FiTC46hwEHKSGX7udSr5x1Oyc%2B6pMAWBRePtX6H0vowkK5MVI2GOx27XqVL2bIjimdMnwgLdMWUb6Pog2mrtu%2FrQ%2BYERnIzt%2FMQS43gAO2oaEQHEh%2BDv7%2FXdza90YuSxp0Kedlz1W0WzRA%2BGcolx6mkYNUj37hnmG2Jo%2F4F8%2FdxSjD%2FLNS1cvf2vf9R5x2B06eqe8pp9vi%2FXqnaqQahSWsSzkX0SyyDJ5Zibb09JeIHWwOHtJiMyB6BZCITlpxZ06SRZHvwYdgVhyDQkH0axvUXdUr31VUNBmvtmXDPtjMiQlUQobnkZsExF4ktBXhAqs1SNJMLWEosMGOqUBEwHnG93RBu7GYhbE%2Fg25VkcGR1Jn0ztE1DVwEyVfSqN%2Ft%2FnzuEGZN%2BkVBwD%2BjQp40wCpkLMS%2FFrhwD%2F1KJCI3b6zzjnxrChDZXsAidDV6vqcAm7uZbkcHwWKBLB4u90PSezJb7MUqL6JdDJVzTo2HGmMizFcBGFXHDvCtKr%2FTauTDuKtq9xOKliSYAQw5RlYIsHRG5%2B7XkvUQU%2Bwa6R7fXEs5UpP&X-Amz-Signature=840b2b49eb323dc4079f3bb3d0fb794822e7d9840fb0ae76bd3658215b97e1ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
