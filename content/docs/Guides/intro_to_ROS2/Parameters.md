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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OK6O3PW%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJIMEYCIQDY4wDapHDLLiORDQcWyoo7ug0HgZLqEF2M7Isa%2B9wS0wIhAL1q%2Br2dlHnAl7fZbhcvSSRiHdCmtY4EamSllAKf7SB6KogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzBtW0oGl4kow52GWcq3AMs5SrGxXAL36pY2rgqcyxK2b8hu3TBmOOwp9GLmh4GEYHlC62bDc4pGvNDtXzy9mQ2T9WTgyqXkhmVW%2B6ebT3T%2Fq1KXkDOHTrgQOrj%2BjQ1QoZ2ZFsaz2QiitTgBmrxI3km5yiNtLg%2BxBQdBpW%2Bg0CP7wJgVHHn7zlwgYt%2FT3LOJ0YvV4ttgwWg032Z92IGOvOY5bRvXPsm07RDb4rMN%2FzBgXJz2Sg6cdWi8tgYq6E0l99J32Spg53m91fsPdHXdfrJu6EGZrv1XpfRLTne4KCiZavjwNh0%2BI6rfc6kgyKyll1V1RqKUABEDBfwRwf8pBIttZDsrumOnGFeoJpu7VxKZda3wKlpP0wbJhopoHNjbvAPT8MFYF%2Bf2Rxw3JxkJtz1KZffb2VMkYtplc2HGZWMTFx%2FaQxdlylsHstQtZsl7SDkvhnkkx0OYUmbCSdFIV6Kh8%2FIz99wbkZGtNgbKM71FJU2pxxJxgXeBmK9l4kvIlTgrHR0P%2FEWsFghDizF6PnPWESPD8jIC00UVFeNUkhsqqPSAEs70BRDPaor3b73lzQXx1HQUyWmkfbxLJD0gw4RgHexBzrsAbLoDwTLmNWr3GTuThOkEg7p7%2B4Km9%2FMksE1pnrPH3VKFj8a9TCo5ai%2FBjqkAXQPxJ3b8NyJsIvrD2UCThANLQqVI3pSLocdavBQrElsr%2BM7sE6wYqx6%2F6%2Bk856uJVdCqPcsLLGSjz267GcQO6mHBLD1MpqfI1uipUfxfQPbo%2Ba3KV6ZT8u%2BBkUzdGFBE%2FI6Lx7kkDNbj4RLaZ6cCCtWloe1qQAxBwQjPzN1ecLXRuaMELraFDQcBxZRc%2FE0XUx7DsmUrNbguAI0ZHao%2BVUDLrSj&X-Amz-Signature=6d7c7c71907b47a1d9bd9e6c472563e5895cc1bcb7399765b87d488a099d1797&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
