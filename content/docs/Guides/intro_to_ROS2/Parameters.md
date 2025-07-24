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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBKBNRF5%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T171055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIFniRX%2FP%2FiriunqW6i%2Bj0ckt%2BtyltkLuRIcQF3AXjlrCAiBRn4yzbu8TYF263iYcPfc0IEcJ%2BgGud3%2BhtAE1B8RCqir%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMvamFITx5qJLeA6v2KtwD6OBfbRP6mqul3EzbUw8GaUzG%2B3Jt7xdXgFRhE0MkQLYaij%2B78%2FoWnEYIGHrLiMwOdf%2Frptj3Wu%2BCJh9%2BVTTQQFpe5LnpLhkqjEeVzvr6s2TiQQkcunFSOYhm2Agw6914hJji%2F6Amw9boNsTenuPQpvGH8WAeqw5v5muJWNiUl4YnekmdcqMlmyAjKYSBQDe%2FeYZzbXmmkHSDyJ%2Fxj8NtqHH1t8YYZQ4OmGiqSMKQg4lAxGDxmOUvIwLA41Jw4%2FicXHsY7mSkOS8G7Y%2FJEjiddSFT51dxtEKbpai5YZonw2nvSKgkXf1FsJvh%2BBQ8t4cOdyfmsmz%2BYYQTm3ZMq5uHYoyCbR60LrF0RBscJd%2FN9IJG6XBYzdq9dfgs5kOfI%2B21tfQpYMVGJQKexZKMgIHWfR6WkSm1KNzNgoDY5e5y4rr2DBfYJdeBAnWKyEBcSALmu1A8medVIPm4PVuxAHhPOqHsjCmCCNlp1hPwXJ84au7TkvHtM4ynfR4NDRh%2BvHYIB9o0fkYBoIH0Gxuwq9wVyUcKil%2BVFjQzYTw%2BBrJNIfe4mNvieHQhPxbEEhEWSh9T3nkQlGkP%2B%2FPT0vJgp7iN50WQzwVFp6tnJTIdsm9l9g4qqVeSFIovvcWWSO8wvbGJxAY6pgEu%2F78z%2FY9%2FD3oj3WVSU00OnKcKbZaUhqIcC1WKIrdqWyk%2BtVrDWuEsfOnua%2FedKtIgiGkQ41U9LBmSWidzTtDYy1IQ5FQyYoFgzKShkBhzjxHgAQR%2BYrmiaDHyDd4Hoh9KZzCfyw59vGBP4k96A1lVUJbkne4GBF8IJtDw8NPiZY1yrQTxRCIGzuUqtyRbc7xpBl7VJztKrc%2BDiWbMMQ9xBHElQknJ&X-Amz-Signature=1331d8193dbebf9b365f124a57c9dafdf802c3c3fbe95da7577d68f2932c928f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
