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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V44F7ZEL%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T050958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC36ieB1r9%2Ff7XGVqQIMCtudrLZuQE5RkdFcJcA2Zqq%2FAiEAukQPVeoSS8wczFITPv7KwR1Xo4zoJuxRrbpOJUWfJZgqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBD64WYwpTUvlYbHwyrcA06mOwTZvj66Au5HEe7qgo92jbHjuOXeBC8LxwjIcIWULqodjKzfD8Wzqwo3dTeDHxe2EhVwxvH0cSPl79x6UbUPe5qB5EQ1%2FjQd1H1Sr9lVuiKS%2B7VxL3fzime3MX6totb5OVUTJBQrYvN9OjbeS2xZOHUZdM0dd7PDI0576wnRH0SBM9UCZdJlWIPQiIxzlplH8vwCggtruceXoH7e9UpA5m8591RWu7oBhUWwZ4QcyXadsgBXzNF007K5TFDw8YEwR3Aed%2F8BO6KnaeCQ9PcQk2gH9Bu5S6PT%2Bo6j3W27Dj8u7cF%2FPp6ADfGDS%2FuOWTvzdhoF8I5fwLkG%2B21YsC00qChynOBPiLjY3dYN9Vb15KpIwl7%2Fl4b2sJwphsLVURUqZjTlsvJTySTjkK6Q3dt7AYmgisSzbQWcxIMaWZBPB%2BzOgBPWj%2BYG62F%2FFIMlh3M04fTihBC6QI%2FeGmluFE8jasaWmyLzG94Mk6IZwD%2BZCFqncOk0ItP%2F8BcrycyZNuI6JXgYHk1bv6%2F1sse1XJ5Bz3UhlvDDfYjaRb8ubrd0r3cEjHBPQINBcrZPFZIwP51mQkoUD5hNbuzAXSL%2F4oQ56ow3go%2FJXRTbnTpzFFEZNt8VDPfUrtG0ntLzMPPdqsEGOqUB1aOTJ3JARjjasqki5xZkIUc5yzx%2Bp2CMWPmY%2FD82MeczgEz4fMqlsgGqmR8vNT1viarN37c72xuUOgdwh0T0GMZBpshwC9wMMF97SwPqFNHGCRqEby%2Bq%2BrcS2%2F9ymV%2BldBKN2mwZ6U%2BGqrI8zlunbgBm3woe3YQ7Bjhpv7NU4PZV3w60s2X0Tceebf%2B2e5i3P2OxdVLi6kneW8Mdle8P1r9qfV3F&X-Amz-Signature=7a0e2c1152c557ec7fc1034642e0a8a7d277cdea4dee0bc8ac63a7e156c842c8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
