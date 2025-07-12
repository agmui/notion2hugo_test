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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIBHQXR4%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIClnA3P6E2soXaVPP32y8hO79VdLLudrPmiE6RypqaMWAiBpA5OBOHrnBsiber0qNUPVgod0B%2BgLErGFWSk6xlFSVSqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kYDi759253m%2BZhRKtwDMlX4CSAjZjIYOy9Zjx2AHn%2F73uzlueyDvFuwB5L0VOKSDVO6f9BK4qUySh4TUK%2BM0E9VeA1wCz4E8ALnMjpVxa1TggUH7XZxNWKlJXJV%2BFRiZ4NWgflcoByutSUeJwwKtcGr8CqKGQJiNj7MkvlVehxYdkbGAx8AxfTPwlWxmMuAIh1pdui0d0S6je7xCuh2DTvyoo6bEE%2F%2BDs4qxM%2BW%2F5q9t91L%2BWGZDeDfcXpCzYwgAmbFxQcB9eI5C0Bp4SVvnUfDB80Vgkcl76XgdEWWNgUT%2BYgaxP0%2FUMjTlwDxdv6R0SJNfpUZ8zHqyr8cg9iGalsPguvkOnKrgpiI0oWoWdxgYpHK26N%2Btw8lkWrvbLKC2GfSuLbfX5ly9YaXttaeND8WECFRioDYJd24%2BLQDmQB%2BHVa5TAzH5adS4LLx55wOm8CwIMNaNXuctn3Bi709WICcS0YMJ107HJzSjjgRF0CTCDySo%2BsGgduXM068UKMrYhtO2wiAJ4YvVd88Q0XjcmD9iQ3muIPzqkFMd6wnx2su%2BMwG2PMvV6cHl6Fb%2BHgDaCCXzu0FdNgQwtkZocgprE9RDalM3WhCXBA%2FueXYTrOJ9M9QQBN02c8uqXtcbyahhWkX5Tx7T1VHOh8wsJ7KwwY6pgEWdD11mct1WlckkPRb8RBAEklH6CUpOIQSDiXXYQ4JQsmAVBnxRnsGtaZSBGlL07c7RJDFY%2B7VmoyDZf3%2FeF6QPJ4pqFF5vAOMtbaBwoDjHB3Eg4oIsbnddeR5i5AkZL1zZmtkynGUwKVe%2BhiLGk9CFyZ6aSSEOoiMbFcuip5hx052qOUuTi2tEULKKezKdDKpbz8GJGVAci60mfTz79HD%2FRxCbAgN&X-Amz-Signature=74486622dba8c9b636f27ed0e09c6f718952563d065ba3b065c3100d4c11c07d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
