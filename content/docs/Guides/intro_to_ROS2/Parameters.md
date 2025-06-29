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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AN5XGEA%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T061207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQClTzF1x9PJkbVFcJ3%2F4w%2FUN4ibo23NslNfYjMZRRkF1gIhANpaierrLh%2FiKBWJ%2BMNwlJNtLmEKEg6mnB3T0zNSYOW%2FKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxE%2FLrVO8CSPifoaSgq3AMp7HoeeWTMsuwr%2BEz8ANk91qjn7c2CnNB7r9cHweqz8RjaJQBTlM0fBnK2n4Q4q4n20O2a3fIg28A7qe4aDzTicDMThIeo6z9hXtis5yAZgb%2F5AhNqxD9YkdowTtfb2Ygv6LvuNR%2B%2FG7z47fQoGC6VDIpbFUlwFxn%2BLve75D3V0TiKwqOn2EmbPyiRk04idrX8sKn%2FG9NylisvysaQIIgqbdsnYp6pKGuRMIxHNnvJlrUiVoCRgDRQYjznwQhzRn7kLZVEqRCIs8AeOEFjXy4bKmyDVlpAKDBtSVh%2BsjWX6zkrckZI9%2BCzZCAx%2Fi0kz8De23HMpUGC%2BIGO%2FwktY8blYVdlhY1I8UgxCyj58j6kr7EoioXvZj5YuyORpJHz%2FBhNy1ovrqrw6g8xLQpyKAM%2BzMyMXaB38OgYETrdrmPKxZ%2B%2BvDGE3RT2voyl6tqVkqTzCu1TP4z%2FMujPMMRB0BpBCDzWZ6NAhhYdbDEJ4vWphMIN7WjB3ahhDSFnijSZyZQj6eUMDgeG39ttB4jMBA6vFlutGMpNjY%2FDNHcYnMUidxhHyK%2Fyec2QynNMEfIuKDPuQ72PVVo28YrmaSRmQQKqlaNVi2Sm8TV60ftcxe6iB7ghu8qRJS65%2F8XSJTConIPDBjqkAb3Uo351Vo4uxMequRDoKRWDRpHkBjCdNMUrrde6oPSTldkl3qiysMMlYhgITcN9eEWrH7geuOimZHOC%2F7wXWj9%2FkNiGJwF5uvYd9wCgU1uCf09vFN7iLoQ8oQZqI0S2k%2FQX5qHSM0TgW%2BZQcuqxoJAZVfWO0jwy3Ih74F06dWLo45WTUIXj%2F68RKMxe0WyAXWg7ZHEhb0WqSBYtPgLwz13l%2BVL0&X-Amz-Signature=8adc25c9c0fa959cdf97ffc580845183d2f4e996f412d591d50b8595a923198b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
