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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4N3XXH3%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T041013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZNT2gRN3LITQXKf5fA%2FeCIVhfyxRvggoWDwKJMaZO4AiEA7Y5diAE49Rfs2Hlk3Uk%2F7qm5mMLK90LgMIjldYABcX8q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDBonXSxbdFP2qnxgQircA7pdF6kimwkDUkX9cXfLmKuCbaYFvO7C3SScKZvFGMEg8s7zPdxrWOZgWPzAN5VecA9sAa6Cz%2F6pbX%2B94YyD7Yc3r32JeuIzbIhqlGUALvtq5R%2Fvd1xsBYndvHsWYiyRFNINNeQqXPtIjymTuGH1r5W11egPcF0Y2DBU%2Bm6RwC7rULe4Ngqb97jtWdQyO5QGm1nUN73ttHG95Tcq69t3n6rfgFspUziSnCsYbGvOR%2Fe%2BkjM5%2BH5vgUb%2FoC6iGVD%2FloVGX5wdi16ZTwFfY3Kx6eAMvKW4ryc%2F40%2Bo4mYyzbxt4lUk%2BNAuzyQBjIWLW5spjEJ7DrfHpxHztKHFuOTWQSg4LVmKp3ldTTd48TGpJiMwO%2B1W3ZMo%2BoY8qN%2BTBHV0fm4tQThPKqi1L0ISMp0DzWsfFIVCtHLqVxaugI527SFR6GtwCcO1gQU8LA1inoe0%2BJHr7ftPKublxiLJAGzA7NMEGPQ6gTdC0h7dGjnlH3oR3HU5iJKLDxM6NvFgQLPSVSFrvc8lI38vyIpNMVZkimKgCM%2Fq%2BzTVDWWiEQHIgh7ZfvpOYIUbMRP87rw2ASur1pOgHsvz1W7eQ9K9lRfU9OEijgOynXqGyzJfTRzOh1UUao%2BWxYPyyhUkB7mPMNGvmL8GOqUBBYBUNoBk6goMUSukuiPXb3r45F%2FwyhDQGqlkK9rtjNUhomNxpZzOJ9yDYIJETbkK3h4K91Gualh7IG1dR3YUiuaX64tsLjw%2FaHeZ3j0zX%2Fbt8%2Bmgv8UsMl9WsGzQTORiC8oDKI%2FNBx2bVA4TCjq5%2BE9DDZMfZ89aVaze%2BvgSMmg9tk1KEP6oNgr%2BqokDaErFvxv%2F4BhHWDQL1fTw1zG3nrFJTzi6&X-Amz-Signature=56cc82919aa68aec54c5dd6b888c4621fb78b1961e81be40085c369b321e1639&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
