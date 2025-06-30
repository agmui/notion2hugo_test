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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466573ATVLC%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061416Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2BZkv0ncjoJWqrLdBIhaAwy8zBMrLuBU%2Fl4QPFXVcbIwIgeN0I2JHCmK68Nhpq0kIZtMkzRZJOei5mLx7DWHnwVCYqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFkRe6QoUj4xWi0bOircA74z5NpYW9umz8T%2BT96Qj2aVCa0UMt7gRlaXNLrhi1qxoOUn47g8aI%2BLYRgAgn1fSgMWiWZP5mJHxCZfKbZAEp5l7wyFxngyA6RpJg9JnNB5w7xDIrGfADm1KnRy8ZtOQtp2fM5StdjS3H2NqoQCs0P2bpzvlk10b%2FyBW2copgrrG97G%2BJhbUcMR8xk9NPdQZhuu0Hfde4ubScA%2BgNqKcGyl0CXUw2dX6XtmEFtJwtk4UsmQRKXPFxvcQ8D9BE59ej%2Bq%2FJTkYurhM1WcGohSl7lilYPbNyOv9%2FiGwIN0KgQ4EBQLPmj0eNOLJAeiUW4gRFAqcfftiCPNyIHdjZyXQFZozre9I%2FE2PtaGDXkZubpPahMBRRM7uay5EINf4qC%2FhKdYhg%2Fm9tjuT2jwkha6XAKqeJjls%2B6bHVq6O6Yy0IvX7RJRAiiqR6H9bLiee0SDLDz2VntrGoXYyJRCd%2FDO7aRXouFJh7Fim2xUPlaoEJ236IM5CvC2iVqUwB13xlvsP6aNgjlxxQ7a9XGNQTMxRkHjSMJwlc5xQmRuulVUNxv%2FsAvl26DNNoUk5KufO5jSPaLN72LBIrSsvt6oxURPZNkjKWm%2BAqRO13le7WCdyCNoUv3y1AZmhs9PqN10MI28iMMGOqUBNhGtINc6tBxYLll1cENsZzBTOhrI8PHRQ6Ud8jAV9W9pKkgrCC0FaQ%2Bg5A8qn046YtXoKKxE5I6TdVcNu%2FT89kIMk3oTzmxBKMJyVHzIcuZFYD7w08b6dYiusZAgAo8lzehuMdaAs7EUU0rGHl3wFxy1XR8%2Br%2F72zDuzCR8DVbg37yaeoyOxcdH4ot0aIzQETk4nWhUOcnLle4Sh5WnHcKWgUtbR&X-Amz-Signature=f076b70ab71a94e587ac1a7c11d522d63e2935fb0ec7b3efa1472a85b8e63f31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
