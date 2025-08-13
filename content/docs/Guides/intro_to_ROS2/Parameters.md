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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U42Q5IQJ%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T201000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjLF4Ag%2F7n8VxwzdQk1VyvxJIDaVId3hzLcQ79yfoBhAIgFQa5xD9DPupLhUalWpNeCR8hdUs7wIDkmnq7UVkWGVEq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKZp8kGNiADVHbRIXSrcAy5blFtJqb8XUlSefUgVEtUWTTN%2Bk9tvqtFm8%2FYc1a9FOr4P8lssPPtSwTpAmX9kHFl%2F2Vr%2BYzlDjvAl9z8qlzNaFZA3l%2Bsnh73LSkqwpFZ4VIJkO6VV4mgOdzhUSDzixecbEo1k4HwbAK4annYkmQLLfl%2BpeX7irMMTwlYP7sgkX%2F28FcvS0sScRUYp72U%2Fu5hhXwSjipCqQjcTiL7ryqRXI01UnxkU1SsfZd468omUBwMyt4xR2eUwI3YI4ciPd6utPs6v8B2ko7hrsywf5RRQ6iQJoROk8VG2AZpvYYzGPN1qUOZMXDfr%2FsnCxP5OHoM%2FKunnrMMHaVILi6VBOj7u3gzTYIUG7VyxPXibZ4nUysty4aOsMUo2oEV1rGeEskNXICmdybciRCm5dgRTkIZ8otRw4ArETwoalFEie9sBGeMZCuzXV8sJgBVI8%2FSh42EPp3be%2FLIDfoYxnmSoGLP20Yg%2B2PUF4MI262PvYb9%2BNaGWMATkeduCNJRqWciIMw803ZxGDPCL0cDuGGiDSxXMHzVdKZUeJbmVXw2ban%2BrFdVJYOZx4ixEWOqRAgH1GZjebeN0blGuntAX%2F4p6BEZRtRIzOD2O3ovyi1WkqKaWlwTcjlGyc9wCvmZQMO%2FF88QGOqUBL%2FQ8NkoQxQJ9ZSg9ZJSukvT9apIwL%2Bk2HjTWTJd1uZ8%2F3DRxuqppZ2mwUvu9WvsM8ZBqqdYuiVUjckBke%2Fqlp3%2FEU2c02cc8dHSLnKpiAv4RRmbfw4o5l2jAKZ4n5fhuqyx0uISMWexUcQFLlGLu9lqRjYJcWRxEazosuK7DT3VLTnGx7KQIGEo7ZQUFF%2Fcc%2FKcSJ1H8pg7LotAQPZEjDgkhcO5l&X-Amz-Signature=ae739f57be673e59560b2439dd1e2afa0a4dafee964f496e67296982b31316c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
