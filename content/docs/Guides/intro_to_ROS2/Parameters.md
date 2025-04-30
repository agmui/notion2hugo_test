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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665XQZYMC%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T161033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCm35zwEUb%2BpSoqfnFdOJ9hyuXed6RtnKzbz4YISeKP1AIhAIDESRbRGr9Y2JKJ6roPzFEDrTHsl%2F3TyPBaCQIAygVQKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyi72kf0VTPN7LG%2Fboq3ANpJujmTUhBoErY%2Ft7spGc%2BYF3xQfjO0eezT37NawIm5hhMqN1sKky%2B%2Fbc8mS1DiMeZg5tU2zgF8pwalPksnCqsutZy9Zv7tmyO851Dvc68hR2otmOiUhwZsKnIp3%2FZ0uMXjd9YnKA1gbAwCYmXiBKlKyprWuMCelgY1SDUkHOppu4EyXJtSNuJRcK9l3Phitta9Fo2dZAmwh7qH1CXAHckol0TmSc2jOK0tABFBYMiG%2FQIk7vBU7rycIOZ0gfux2FG0tyg74k%2FH1gDWKm0OD2VCBeYlTd5AdjUTBKaogn%2FPcR0VJYtOa2%2BkB297M8h%2BorsqFlTe7vD3g%2FEBMu5JzV18a2DPDQiXlyl5cm9WXqVw9WYSUa2oKXRgRGHyWuT%2FaI%2Bb2ov%2BAyKCo2l1BjyYlOxWY%2Biu8Synd4QwavxaD00zM942cVwtGg3N6Bn8RiJN5ra%2FYZ2j3UkK2myEIcjjxrXRJjwekdH6koLT5D1o6Ljdw2kv6iuU6fZQpJhORVS%2FdlvVteCAPITSiFm5X3QBE2n%2BGDM%2Fox8kSfWIRskDQxJKJSxR7N1068bwGGy3%2FibfG02NXrw%2FHr5FX05zp6reOCn0RR6Ho2ZrfV8RX7SxZ30ClEQkFvqBXRkX6jTjTCugMnABjqkAck09Y9RXcMboOYmy1Tuyc%2BO4vu8c8M0jXOhhHO9EwSkpLwzTt37XY17kjCF5IkepziYnvjL%2B5y8xeBg4RQp6ptWr7KaIM%2BCNmXKEPHNncSqmnNP0AbG88z3GnITEZVXMh0qR7xKsRF4i8E2faKqlWdnjpVWURIq7WEsfpOwdWkQu7vUhfjyDAIADS0qxdwRxpPJHjY84gOLLw1LorSxkD08SlPq&X-Amz-Signature=2c1ee86943ece1d6b482c13ada5b4a2eb0b4095ad3197f9a2d5d3ee1becca5a7&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
