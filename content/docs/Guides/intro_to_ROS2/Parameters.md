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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DZN5XBN%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T090938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA9nwSLMURgKqBBI6jmhyp6dntSQmneYTlxRaWsRh2HOAiAT40znE4xi0GQgG%2FpGVQUkgsgPRQ5SHV9D4oB%2Fepd93Sr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIMNdizz2tuIni%2F1trCKtwDZpd%2FtsSHnNiC14oEoHRCQ3FdkFyryi59W3m%2FBH8QcZI59Qw3QcnY2zIws8oubQ65ghxMlHxdNc21Qu2SZITbcaadmBtMteZuTeacKJxVT%2FUI3V3m76Bm5wGq4hlnOR777m4rR4Fa2bihHEI7oRpj%2FwwEXpO39kYi8OmCvOKLmw1MQAY76mQcWfiGVpAsyUX9UdjanyKK6MG7uTYwam2d1R7U2hfDwRfIlt4BdwVGABaW%2BT3Cn0HXIu5%2FCrUosXwZSZg3QmdcGNMIQ18HzrY3KXlq0q5zsE0K%2BhvsKPH95OSP6SUKiWzuH1IOmKA4BC%2FwWr9QWa%2Bs98NDi1Gr8xSc2vp0tSQ1SrCZ5u9lf%2FhO8IBitt9V%2FXxsBAfFNpfOj9klSrnt8GSDiVmoWEDY408H0ouZ6NVxyMvdM6etbBoaRlG0hFJHs%2Byf7VTtE6IqloD3tXDwOGWiDXMa2ckZ1TAG9Tf40WghtLbhrCDY8%2FS8GGMRWmGpd7kM5S6%2FOvYefE2Ftfi%2FDQMdcydvw56bU0U76sAdzuiLybyxueiBtbaJiG%2FCldt6%2FnyTMYLvMNCTCy4EY7ZJM2wDPeNGP9nGUtHS%2BANprkSQbdAIIR7Qw3mcb1i5jHdKUyaPvtJPeTwwn%2B2bwQY6pgHDA6ejSsnms1zJzD9idmzAQdSE%2BbxJ3R6jZQ80c1uuSF0S5AtbaA2dRbhy6pxquQHp8uSSTmHTrjPPZmTQniX%2BqSKO%2BClUYOlI4WY6mqZlyS%2FWPUQhRLrzVZCXT9iD0YBWuSFedUeJNXZixMmOINMQw6QmiwuBjRw90nVbzehCA2Ya5gFitl4%2F9ht%2FaUo70CCRm0Ah%2Fs6%2FxvE2ZLJIlzvhN%2FxscnKZ&X-Amz-Signature=3a8ca84b9b3d6b71244e2861e2c3c678a44a1a737b3e10b5d4f6e7f23c9f2a6d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
