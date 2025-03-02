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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652HHH7II%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T160811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCntlhj3b0DLUa881oiOHfulmtDkVAEao1Dmu68sKNGNQIhAJlN%2BhIuSnhyML8igFtiD3%2FYy8nvOWmDCWe%2FTG5ON%2BAYKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwWZX2YKZQGJrM0%2Fv0q3AMy0uVesCaIWpZj69mT%2Bus3OsCmlERPd5%2FjPDYm7u8OLY1VOM%2FH%2BTa5a0iL9zcGsjag%2FiFGb3EI1UGbKPIQF2SOkRJRkZMy9w1XlumkhY%2FglEjtvHVIbWWny4V40ahnz6Uy10BHwnJz67QkGB3tI%2B78HI3KKE6S%2FcV1hCNqVAM%2BcS62j3UQHgAweRQ3aDNaNsuCqZ60Il%2FItnxjI5p17pbwt0haRXflMYtqDEYqj%2FGSIvw9wzcV8f84zudRUpUCKa2sVrYYWDRT25ArkGaGHUK3b1ILfE%2B5FYUsCX4EWQyWNdn1%2BFbw4u61MZYTLwZhCyABB9wxe4FM1x1sSdnkVvX5CCbAbndXwTMx07eLt85WJ22sJDhqKOfTqZWL7XXj2wZZrqNz1tHmC1uL6VViUzPKwXD2wUDIKV6jj7mn8Jh2fDcMXGuvTZxGQ%2FBeC3LWQwMFC6nTkChLHKA1ycnn6EjCFb2OzzqfWmwAnYI6n2H7rkNsgg4u6XyF6yQ9UZVrTm9cFzztjHd9YQpkDCwNxzdxvstil7IQtmpyi922kVhseikh06%2FoVgWGLj%2Fv0xFOPwRRWzozKfPOrsMvjRRlI5vUjEZDp%2FA0waEYpzJ0cwDcgCRMcylCvtLTk%2BNZYzCZ8pC%2BBjqkAfjzeSdgEr2HYYxH7%2FwzdHlXG1Y%2BgVZah%2B7OmWYw4iUXkcrikKvoZkibgOfgHQga6ujXItKNGk1WSaS0ipVDINSnmO9r%2BrUjzlWvaHw0sA4wYhY7JtgLZrEeZwbg8pFlInF9pmSYf3BXcK2lR6Cxxc64cbIXQ6dbkraBBlb41xwFw3bhU53njCv%2BeAfRcaxglr2%2F8UR1G%2BFRI9l71F5l6xZrWUY1&X-Amz-Signature=c3cc706da1453c8bcae251dfccd0cebed9f029ba9c6e073539ff11e7cb6ab267&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
