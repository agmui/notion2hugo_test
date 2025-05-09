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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664OCLIAL4%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T181153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGxkTzBjJ3k9%2FukgVQMt9F46ovmRrTPGlR9NBoX6D9frAiEAvDWFVX4%2BhU89v%2FFBMJg8LbrIwF7U0u0VnTs9pWrwEcwqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHUqxgpaVCInccv4DCrcA6R%2FyuNVcCIgndUqmswnmbg0yNq5jj3lT%2FEz1jw7kk%2B8s6r22E81e4c7%2BEivMOutue%2FMoJqHcBpnUjUbEYX5lxdg%2BwLDyDOzi1D%2BrQM1qHpNt%2Beq%2BKsXLGr50T0ih%2BaUMEiHAdeUoKxCLvmzUqYYo3eXPOFai1u5JbsX6qS2Ouv2U8b3mYbWs7U3UzEym%2F8t3B%2BuuQi4MtiebPaNu0977SytJu7qtHisd6ccNDhLZnEks4gSL7r9%2BnqnVqgakKXUR7eAOWXBHXBCmXaT0m6GGl5g0Vu6vMlmTgMYid4Fr%2BHtPVzzVk7%2BB3ubjjc4KSRV9TES2G5qILRDisYHkunrD2ry7VK8oJ1hd9xLzZw5pSC0NkpJ%2FMws42hfcGxmwd1B1JCxbYvZGp5q0DTibj9d5lGS%2BWNUo31jQmJDHIdo3TzT0%2BBq1bJwdIh0t%2F0EWSrY1yRFqMYd7Dv8cqKzsmgdq1au51BPPHbBHNfqpGpPS3B4Asq5VoRufOwW%2F90sW8gzGQXLokBsC8PzEp000UuIhuH363Olp%2Fyh7s4QKQW6L7QkdNvcBA1CnlNSIO4oyt37Ct0xJClUhUAtO1DsJTI3DsNKHpIW326l4GnUhD9Bm1CgqaDkf0W8PNXvJK1BMPDv%2BMAGOqUBGKXhYGiLV%2FMgsn52I8A0TYDUyzRMm85MfeP1uPLxJw6qXyb4Lqmy1cihzG%2BDPvX9QWaq0y2SIGts200290Bp1ssv5wIWC4VQq6pwADkWTTN3I0nRMKXZDkpcCPisJeMWoRQ%2Fk48avO38e4zQxGKrfLfkKYQDWZ5Zvh8LYnHYF8Ilkw5B08SO9kjkAMOxLPhTzaY%2FtmenmvtSJ1eMhfwc7sbhUHJz&X-Amz-Signature=957afaaa4e7bf5924c9a12feda39c7ab6f1b32e1403ef74e4fef57e1ce2dcf9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
