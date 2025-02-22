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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQQPH5NI%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T121200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG8XJHWMW76XUuSmS7Rmv8040sAPi6x0HQ1ufV6%2F%2B7PbAiBAXRFQrRiEE%2F%2FYag989MgtQM5CRdWajoTEWhOmqUpCZyqIBAjt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpddybvPwUVxOOzuGKtwDQUgosFKdCw%2F0KvlA0LuFkHDX1Uw93g3BRv8kQYrklyJaszcHmICSEHXrFtp6dJYF1Fk6ra%2BjykdKNukrDOTUeDTvRSZ2QiFXR8de%2FmbEnP%2F%2BHmL8vx9SLucGQAk0hH4mEM5E2zmnPYdmiIOWWSGYI5eQLuSgt0JvDYmDPoFI5AAVF%2Bni09p86VSofh8Je3796vyeJ7B9GHMS6wqWsWZGYpdbrpKZ99ECBHaKS%2F3Em7UX0tAInsPa9nW4BwV2LCirQGYpcBxaknPXDk3o32bIexUBgGSQlR6RepvGhbK1%2B%2BIz93fifzTj5zV9EFjiSS7Hq16pOwUxSZvWtTUBnfFL%2FPoblTyqeb%2F9lIT2xgkDA%2FNYvhtcVH6z1YTfdWjMmsPRM8k%2FW7Rj92d2E6PmD2WLWu2d%2F%2FPMzWKpaHbroCeXVDlCIn0z2%2BMaEsuT2l6mgxvsFxE9vjeeZFUGBCu07HY11YdemR6oVwKU3O4P%2BPVY2eh%2FsebAYpikCwc6LDuss0xPSh%2Fz37gHUgykykQ%2FFO%2F3%2FcNjEzRFkfcrvFFFRiUBeAkXwJERvDjG0ElCNaeFS0NUfZiOG0aj%2FYgAQYsN%2FISZaymSzPv8CzTOks0OQZBHAZCH0WYIZ3S3t%2Bl97tUwtuzmvQY6pgFy%2BQXozS00%2B8y4NczvbRtZAGbkRaA5tOWZElqQg0hNEcPQKHoaWOyKk5YXhV%2Be%2BGcjMCM3IDD1OUERzE21Unw3n7lCnp9ztRLe2GDL604%2FWMkKVGGSghe6PDOSISBsBXy2ov2WkvCtugH6FFxfzM5D8p3yCFYEjc1iJgMl8ITzXR9Dtf5nCHSQBKIp3hTHyCORb9V8B1Kv3mcy5ts3sy3pZjTmCYNJ&X-Amz-Signature=4fb9f44f13c9b5b1bddc3810b4a379292c2698d5ae3e0cb72bfe49425a3cdb40&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
