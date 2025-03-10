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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEB7QOD4%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T040838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDK8pPi2HxxjwdtpGrfuU6la88ZhRqsTpxK0yzmfwTK0AiBvaDAnuJjfnJjsbWzC700V7gkO%2BAUR4l46TimDszLcUSqIBAiC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3eWBMd%2FJeFsUWPyoKtwDlUv3OY4H9W5nYGx43E7i9Zjt%2Bagy6gwFEfrcUAx3ROAV2MfQfim0CT2o5nHI59QzBZ50EG0dUa%2FC2ZaOHuHbDE%2BAfUrkAQDLGUznHQOVxKrQjSBgc77GpgHIl1rxSvhleEz3cnbfb%2FY0LgnOAZIGDbJVJOQy37kPpTIiu2NqF64drU9KyEJ3NCZIpl2l5vpW1Xm6jYQrO2MOYVWT526WZ%2BL9X3a1clxMumVByOp4ujG9KtrjT%2F06gmuAjqPpRIablDrWJgWSEyw0ZNeVpGjYUQZ%2B0z3ReycwJSM0UNs9%2FtcVTdtnEgzJqmcZ1ku63D0GIERgIlPGcJisEAdoSUM0pklxPNUj%2B9JTTzJriMS%2F5UslkkKVATxunn2YGKw6ou%2BZcUThdEy%2FFOY%2BWLPgAgX0XKOsBN%2BCEZK2ahd0FZn5BO955%2BcvA9dkHpbKAUwys9k7alE04c2YUCvq7cTLN95V5A2veTD16aJ0OcyHqJ9qXa%2FC6mz5Om7PzdDMxGNW3OHObnl6DJ61xhHw0fLr7v6DxwfzzJlzuScTQWVCDzSZzFG1mLqNwi1lmCRRCAzfexaKwL%2B0ELPwNlGmopD4OzbO3r74oyES3mUcnD3a0S%2B%2BuEGMNjVJJokw%2FRu3z90wnvu4vgY6pgEZ9TQugARfMBTnMYa%2FMPj%2B5vGJuOdbsG4JInpVZLXqOS537eh4%2FPHtAE26ryVqHf%2BxqAdh9EkCxUMRWzZlZi0IlOpCEYkWJAHr7AIaB492ls2I0S7c6e3t1YmJT%2BW2QwR%2FMufrsvZDF%2F0IwDZOaMjgwoNGR%2B%2FIdixNuBduKCOwePuyRfdLwi1%2BSpeQw%2FRMa9bso%2FdlbdTQj4maV%2Fmbc69wrKkpFJEN&X-Amz-Signature=9badb471c6114c8f65c7ee8510f4b9c300f3f20309acfdd488f394d5a4fa097d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
