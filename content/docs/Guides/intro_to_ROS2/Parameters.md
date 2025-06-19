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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMHPZ2Y6%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T024020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCPlgcCFsnlC9BM81JV1vuSIIiRqVDWJXftg4pxPPppuAIgBD965SGZvh9Rn4xhuQRrCCpteJ8mNYjSP72UndVfxSsqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdnMCeM%2FPk4eGtq8CrcA9BXWaEPkmo00%2Bo%2B%2B3nIv3iDAAtS7K%2BiczkMXfS4UNx8PMu5q3UqoBQNRWFrFXpWUGJYgqMCt7dcXvaLc2939mtFA5yVaPg3t2uAvKlfwWDe%2BsEjPmkI3cWzh2etUEoznz1rV0DUstYSUKdf6yh7wFQfaPkn7a1SCzG68c2r4fvMA8ybkn%2BkX7Zj66eOlp1S0Dqc9NTic1rGTTE2u6mlLWLStReyiSNj1IXuqZhOa%2B2V3yPHg5qMoFLfYtDzzAemlFINSxZ2HjZ0cE63vAkN2WnSPFrfh%2Fij3d9sYMv8tTxixrx1HL%2F543De9B999K4nd2w9NHwzmCcC2qEJmuhYUmnnf%2FJbZQpAfBtrYc09joqrrTujcmv5VOJHK4HpOKPaMinNT7v7rWwiR77CcsvnOSMfHrD%2BaE%2BwJEvilvv8NxBOtCDDElsLDXqKja6r%2FLFsQRCt676y0dxPwm0u82nmjW8j8Wza5k45JctldRhH5dgjiydY279CwniY6WBxOFNF%2FThAjvtPe3nzm7U9CuuDYSK6aHHn%2FT%2BreOyeoLbECnRFydvZmpHXBwzdGcAOsKou1aLZZqo3NPkkUU4o4hb5iLc8OUv12OP5gqQ6kbh%2F9SUdUw3kh19%2BXksOUAwPMKXLzcIGOqUBZ8AfoU7Sk3GEwl7JpP0kP8ScfHDodFKuHv6JPlR3rGV2vcGApPdnRrKSW9%2FC9%2FLjJYpDCLjudtFNYaBo9ueFPsABYzj445VG1lQNn6OLO8kRIwiY0GNQ2kJVDMbl4miySSV9nKmS5l0arFFXWwtNnqnHL0QA9WHQraqjQ9OOA5dqaG%2F%2BAjqYEt0nMK%2FNF%2BzZfUVw3A1sO7rgWnd18qv8zRl0iBNJ&X-Amz-Signature=5d73d48f99397d9ba6f7057e764a5825a2cec144eb22a2f4899dc38df4639f5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
