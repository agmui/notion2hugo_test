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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2WDYSRC%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5Ndj%2F7idUNPiNelgjvMTGMsChaLG7te%2Bwh%2BJdn1l%2F%2FwIhALXjtuFVcZiVrSb1hG%2BwBdm71U55ZlHpo4ykCYTFBffHKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxwexMVUZz8Nu9QeoUq3ANQak727SlCx63cP2kcHZNINSUSiT2qrUMCxiV%2FZ2tgNjBiH0C4uRtVFnlESy407fL7gwNzaoyYWVzF35Geqs47QzQfzX%2FGZcfjyDYO1q9Sh7mHozA5QC9zi7erQcLESqGLOb66a%2F6qksXy6ZRz9gAVWjI2eH0M0l3kNrQhPS62e0ORJ9xIrz4mYEb0GxnxJQMM1r8wL8ZrKpLhXt0N4EC%2BmP3mnMZMZrXK8yGBAwj%2F7dPk%2F2Qxv%2BFwnsP5IsFGdOTgnBj5G26CDxkkwB3f9gh%2FlCdACSX%2FHk6E2BpM2C2Pny2nYymDJRdY80zv2USdb0RBxxJYIt%2FAgiuU%2Fild1Fssn89zT8lGbdlHEvmQg0o8ILJeeZrAf2x%2Bdflrc%2BY1%2B%2BNwXvEVCA%2B3WTHXUkhh44ntu5IUgapMaP0OEa8bInp5WInqF%2Frb1JOWA3YErnL2zdZ83DTV9stHHywTEMOVgzFDQydeQTmNrCcuTYNUqgvnUeYV0%2FIDAGJwUdsghDsj3%2B9Lbc95VyGAxwwbRWQrLuSK%2Fa0bQ3ovnEcvO7ymWWnLuwFirAYOdX%2FHFLdqURTJJ3zZd5HhFgEjKqG6yu%2FOJq7iwTytuNPABojqY%2Fv8LHz2FQDy062pTTHHvm7DmzD%2Fyv7CBjqkAdzV3uY9lO969B45k%2Ba7k%2FYtg89oE70Whd1BUj%2FNcSc3K%2BFpIHcCkXU8e6X6Pd4XJJz2KrC%2B0lYXFyJHo8elqlKfeu%2FjyS0W1iSr9jPu3gHWInGtqJzE04ArxSJvu8aqNvWUSTtDewvCcazT9Wn2iICzmQN52wfm7X6ocHYALSA20ItysGUee4firX4LktLg5eUllrHbWjD21jDGsbRJSF8ylgdJ&X-Amz-Signature=dd3e3415ed294aa2314d325e924615536e7efdda096e63999faaf624dcb7ce52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
