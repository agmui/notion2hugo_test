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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RFSYMTV%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T113022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgJqgkXvjK2xex8zjVEqqfDMZ%2Fc%2F8iOdijJKl8a5VyUgIgMI0lrYRdBmDlue%2BLULA%2FJ9LuVelX6Su%2B8W5ngmH7G9Eq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDMcgn5dUyQlSyH%2FEWSrcAyiKRZRj9DIrD4UVIoTznyd4vzyNn4IVEZmQQ7e3fWLnE741yj6o7dB99ExIgYkkwR07zVpPg1kOWOpoxUv7VGSw4YAaNH37tHB%2FVzEYw2sta%2B2Hauj4UZQJ6aCHbx2PB%2FX000M4x0kwjQwbLO08bk5jV1EpNsM3dgw31Da1p1fxssAaUPdibQfjzcPveQTm%2Bu4ytFn4R65Z3dUFpufYDOsONGGWP3xTKjrGXIpuI6dV24IMRM5hAe7nXPPJNOOKMPaocDLJKJ9MlzkAyX7AjKJ3ScNCbU%2FFrc6YHE2iJZZFcrupdvNdIpA%2FZ0%2BmZvy3IArVD3AFm1JLYB1IcobyUcPbkjksLf3KSFhIKXfjB6vKaJunF%2BRfVBafxFnr03uSfssu9CtWaP9nf8HqW1gZ%2F0rbIthLQxfm6IiaYlD2i2qXBTpcFpSXN0ZfT0QK267xXjG78IqGR8ebhfB7PsRb1X4PGkIDrVem8n68jz8o%2BWySht6jG1f0461%2BsOdqJ%2Bk8BxXKhdkMEWN5TX%2Bequpz%2FPWZJVPI7879ir10vFxyZtfr2Z6ISol2cpYCikuRhd7h8XfGuG2QfMYzawLD5iHResll2YcBzu64fsfK6gnbST%2BNitalr5lCoFogbEXLMLHIvcAGOqUBJUjoZW7zQKaVuqM8xly%2FNri%2F7sjVrY2bA7uaMq549WnqDCTMDubUuqL8AVOlzotznsgZn1Rqd%2B24xZmq1I1OQ6gYDnu6oEHTt6Ga3ub21CYK2MvkYVysQJ7fxstGmaHSirVhI8lGgqBw7iQkzLcjHi6qGOGdKmWeFg%2BToE402z1wUylEUoql7uqF7HNTq4Oet4EqErrY5ZqQiZotmFc9dIhQPVLv&X-Amz-Signature=208602be07e6fffc869d9f6497ecdb7461ca54b4a007ab0bd788909d8421a8b7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
