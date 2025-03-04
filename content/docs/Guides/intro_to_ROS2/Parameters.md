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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6ZQYURW%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T081042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGuSHRbEe3k9U8qCuR1oESVIaC3lbtMTHenJiKI6fXbVAiBI0v2EpgZOEOzPCyMmNK6xfp2JfwaGWYWWdHlApMRF3SqIBAjp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2B0dPKN0kpPMrQHqKtwDgEuUwkgcOi8e5dPJu1dFI2qwAYRL7dwD0ur4d%2B9ZTUHSzEb4NhoxQVFpBoDm52UQxfrIHnAzPzFtiVZOWUakR0aP5mapofWbv6CIOFfs4GF3MZKJeKmELskwkCqhPt%2FsDtZRYP%2FGNU124t1cVOjOAVz7RSTR9gHQ1Znwx6zluDazgPrSqdPwywc%2FnQxC5D4kX2qJlb8eHoVu32aQEOsLkMiC0HREgApgFp6X0hwHwFB3G6PRw2bl3knxCVz%2Bt%2BfCvay%2F1ZZ4owrHg3o5t8cFAPzv7xhLD2Vrhw66iKpKFknLc6QE1xWpFO0xzlPoN46MU3vs1pwvg%2BygDJdsAXKAk9jweJd4vu%2BXOrMtFw45o4Ed2rivIhu681UKo2W0uZh0rjVqm4%2Fserh%2BOYtbBwJmr5DeTgDLvF3qjN4b65anl%2FYN7O3lJKLTfIwXnT6Uusli7ICNY417JitxihVY1BI8gz5WYq39xtw%2FjTgADMhGZHtcdNKig5jwKePZ34Iw%2BUmkgOni5n50%2F9jRZRJX%2B9niNYEuEaozoyMNyMOaGadeAKWSSzt8gqJd0jci7AnXHr3tuKYZ2D68DitXapEe0DBZfLaJ03PIsOEWnaT8K5TnyRwphTWuxktNz0pxY6kwgOKavgY6pgGEoVJdhRpGJkWButrbLgitc6C2vxxaUhBKs7ndpdT6jE8%2FQfNX1oEyTthAcF5PnnjCEG8gvDQ3c%2Boqaab%2BGBjv5tepV%2BqxT0quK%2FltSTo1E%2FJT1Yxn8w%2FJksc7mvAtlQ5FMTYEm5nb8bskj2gmpXEGmcta0pkwoY1fqa8xLONveYh%2FQyWXTZDEaIl088fC8mN4kTun5SD5xtZWpPUPGur1x4zfe1Ip&X-Amz-Signature=ec056af9b9a9066225a3fa640ce8608921828924d15f338171a6d0812e87ea03&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
