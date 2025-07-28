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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WD5PDJF5%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T110858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDU6XDsKQtcC8nIAD7I%2BFKfPfAOlkmWnKZLjWxWNfHj5AiEAnLFFspq9j2R7DmHEg%2FIZP7GUBbMDke8bnaZq%2FqvfWCsqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGtkyIJac9FlaskeISrcA1GWS6Pnqb%2F5xebqR%2Bpuwrfw1bBcPKQ0VZDhi39sF9Xbb2PUewvaSK14gcScH69Csaw%2BFqgnD%2BZ3QOvWGvpWcJwt3gozjBd%2B4gzCTtcnvQ0M2VdwlhBGoxn1uwGHF%2BLS%2Bc0jvWS8V8h6oCBwxI6P3IWeYXj0bK8Leu0NfNZsthO2g%2FntYYunHn6wIY%2FCo1Lo99q5n3oztbIuurg2kZY7D0rtHdr7FyDFBf0tenWBhDiFPsODVw2MHsRUyldgB4KfiA1PE97o0Jdv%2B5XkW2Ola3SqKLuPU8OGJCRr7b24jw3iYp6wfnlfvxXpzuVZ5zfFB5MkutOXIX%2FawM3vPHHSA3t7o2bWQVoenYmJNLzpYykx1iExea5zu2TVc%2BdHAdxUG30bd8CxshY%2BnbNWvS794RyQNX6t0k245ccRn3i6ArxK3p7cjA1cmYk6DF41HGCdELuOj%2BMf0tsCzxrP7TR42wt9bl4IXwBIoaO6T%2B4U0n1W7dAbCukzgYw4XrA6VqyWIIVXHWnaVbEWemHp1X0x1FVc3%2BDdvI5vRCiHSM8W3mmWY%2Ffi3BPH%2Fu3FxE6qDsPLY65W9CAnFn%2BU7i7QmoKKGm298iMBscmVeK5oWD3yFYwFm0WjDrCn4gRnI0XpMN2NncQGOqUBsS4232V%2FhAVNTMX3P6VJ1zABDOJTe66XLk%2BAneaNJNA6zUXaTyzpGdesZgw8E1nt9qbfh%2FLFe2DJlj1ACn%2BDYEkee%2BmgJ81oeUptsu04jB0PfO3VaXVbmOmTkpyly%2FGo46yt0y73dacwztz%2B%2BXP2t67h04AoGmy7j1LKruREcrlwiT%2F2iuzQReL5ibw1e6b03Ea6%2FPZ3h30MyBxUW9aNKpQ3jIhJ&X-Amz-Signature=293b2ad8772088f90b21306e2c953b38d343cc72a5bd913e12a4c1c74b448a0f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
