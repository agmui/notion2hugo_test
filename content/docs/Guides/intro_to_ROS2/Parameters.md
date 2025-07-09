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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBIJLZCB%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T230913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUGqJPtsSo6t6WnmBCXCC4S%2B25tZ9Gk3fRx3siqsIuBAiEA2T%2BUxveom6pZVDYeLMQAJdryJAKBAUZaUgaPSDaHai8qiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGqKLgFWTW982ZVepyrcA12quA6l0d9IDO5fdwUgvBbzw6o2hfBLpZ3zoSPoc4HHHO%2BDA8cIE4utlTDwKzlUfdU6DvQElBk2VpWVMIqpweFqElmv7G3FcDesMAP1lE0OTezDAoBSvhWCcnkMCcmEkDQ%2BOHoPfwiJ%2FmFO5C1iU%2Bjx5NlSm1CNfOR83LOeOa0zHTPsR1UdVH523loFQyw37BG1GkgXsuiGcDnE1ECBmE02O1lVA75mND2NpgBdH0M6n6owAMfBh08OXy50BpJZ8JJtxDtnVt2HYnyOSoZVyRgYenMaSs5TZK335fpa9adnxQdCIrxVi8pH4FCwjTp5XesNmf4Y2KyvzigegihEnuPSo1AKSb14Sc3PuRsXw8hayrOloO5JwpmUQNFAxhZEUuXA7DmofW5nVoJiGh2%2BxUvYAvNmyy1SsqyRoXjM%2FJvvaX0rl%2FMIJh8t7tJsXWqnBwke%2BKJihhmj74dI0y5KZk%2FZ7rV90Qfm%2B4pp2kdN0Ds3SaxFUTa8Bdb%2B2VVsVEEwZ7ZB6lCQpVDQeuim3LJgN0deULDWiJEw5DvIqpTByD5e5yVU8vj%2BBUj%2FA5IBzmQpBwtc4Vj8hT8CRbUiMCq0xgj2Msa93epeVIL%2Bz8Co9QPcqS147h%2Fdn0l7JmLCMJjLu8MGOqUB%2Fcdl7Bb3qDbi2bD4rVbb%2FhrEM48sgwBt5vlO1IBEpdt8cuLokgubJnf8%2FpBJEDBnQt%2FfQ%2BTxhHjAemLsr3EvS2pMJsW2AJkudmAQ1uHtnfJegN52dVovCX9SaNDWbo7GaKeUMh3DRpTVPmq3JQJv7EsDm8h6Zp%2F4ZtffesVjEQWbj0D8aKUhz5whPoFynqvumWsbsgEWvWTW%2BYVRtIBVadKhsqpB&X-Amz-Signature=b46b359994428a51e8789e4c9f98c40ac092e0aeae1bdc27fd33c4d492f6b679&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
