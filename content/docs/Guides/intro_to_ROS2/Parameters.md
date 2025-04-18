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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSN6S4AG%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T210720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLRXo33w4tvg4UtxAMAVUB5fXC4EEWwE6TUZv%2B8by%2FpAIhAOc38hRjBjXlfb0byp7az4DRy25346OMjQSlw7kbRirYKv8DCH0QABoMNjM3NDIzMTgzODA1Igxlk%2F4Sp%2BxLWW23s5wq3AP%2FnKLbB7pCO4jjOlJpwIGLQUiVrIIVkpMaVtCBq3r8GqBzjK1HM4sP8FbXFA5wHq%2BJxc8reF%2Bze4TxGJCZFyXI6EzcDiSRKNfOy%2Fo2avZNEY6dva0hCukRlbq4UQH9%2FAut4V7R%2F1dkfYpJdxGIhgfxdghdNUoTFVPvdU6dvvfl4DdwHaA1kXV%2F76QTjNvmNKo8s6OXZSOtTmbtY%2F5ZlvstgtMBWzMeXn5BuXAnSAHts50dDduR2E%2BY1L25LbCATdxkIjsMwafAIUA8Ez8VH6Xan%2FhJLEznKDuvdWrYsECM%2F8qM7I694ra97gQV0K%2FT8YwtJiin7AbWA3Ut5yalqidZXqmcXADYaH7NfoCYvJB0eOVxR4zVIFauTbjY4vXwCaGo98A2XbW22YLy04XvfZtLA81Q8iG%2BAD7PNL98cGe1j4aweeO1NzUxkwC0fX18xiBO6j2vFkSXvSToFPmtg3C2e24eaIpxn9vjY4rGJnG1%2BP7x4mPaUopE%2F%2FHILvqBClmII7s51qoInSgm4drf%2FWnAMAgz6FaKpu1M7EiTGtEf%2BkBS7Ko0EZxOWPCVTC56KRMsL%2BZ3PYu7%2Fo1oQRgUkLg5GM4fawIIL6ECR6H9SZrkuBDjGeZn2tk7UMa1RTCB5YrABjqkAeiefQl2oTT17GJcIGLZ3wPbCxjlDYdw2A8%2BNjkHtGQFM263YE%2F%2BofsJxaZ%2Fgqf4%2BVd1lGXWvy%2BSVU8p9lf1p1NfJufTydQbOz1HfqOIGpyBCesm7oQIYtx5cCiC4AzNUN0vo9McQjy6mzq0alA5j%2BNzIsA%2BbavzKwQ6O0k6gQg1cgJgvFD6XXppcgseIORhGv2rE8Meh8dkT0Fu7%2FmmgFPD4Oxk&X-Amz-Signature=ab7287929cf812fb52d3d7ddef0d1992af3713cb8575deba3d622b9ef5594dba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
