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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWFCBWB6%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCfOGH%2BbU2SdDJAF3LIFT1BKAhp%2ByIKn5XEe7eknsoIggIgcVW%2BTtTZr04N77or1AwPIsRrbzOGaYzS9hkWTBJfD%2B0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKFDkU5LBYHBTtIclSrcAzbKwPfYhZ931Lbj%2FRQ%2FDSkAjGW0qfUFU3Ckbt3bcaZjI33u4o5P3vDK3FjI6Thqug3BYrR10wo%2BrC4gp%2FmEyO0Cvz6vtVILdJTFbsw0FQkHHqqGEI%2FJS8xd3bWNIOVE1aDkgXN89YcQzZNcTrtbcNX1gUYeb8WO8KFo9aoe1vMOMf%2BIZmCjm8o7IUuwTniZym0aMiNhbc%2F3hUR5rnwV9UAJ9Fo7k1TK513uvJCOaD9JJuRVDPAKDc8EhhndkxeOmDSDWreylKAWsBZiUyMQsjpFGLgJYxFeyg1EWqVN1yR7d8FKTkoDzUQmtA%2F7qHYxkTq0NFAZQvQAlO5kjImDARNh1OPXKgVNd023fN98eI3b5uuFRlie%2FXZikBFbqP19yr50bwHzavjHEoYPoK5hG02Wd8U4DUDm1ti%2BraaTQhe2zl4neGnSGKDGjwy3sUhX2Q7mcUrHT6fy%2FpJBZnJB6ZJs86cXcwj4dtEWMtYGppc9jDORbcT3%2BkyzQvk3tqJnAowdC3mNKOX%2FrcKjOWu6nsUaFvqcC5VBO4WRnGVW4taezEdAEUtVGCzowworDR7zRHbYB4YiKj0Aq8qUkOvZ0u%2FeQd2iR5voykzr5LWP4rr7BUAOIVSD85Z%2BYwykMIjZpr0GOqUB6D7BP%2F%2FlDyL5Qsg%2BXWYPTqyhhWB3jZtmtb7a9wqqsaUiEdbeMbXaOTeqSUyMuv7vvn98ABu%2FAWcFQfAhdfojWQn2PABTQZ5V%2B8CXQVMWF%2FGzBUYJ0Ch7%2B5ja5Mvq8BKT0x0Url%2FOPPq8rgVox7o3jBa9BNJlrAWrUgz%2Ftr%2FsXuD6Awl%2BnrSGgdPDLYYIQt0ewR8tdd8wE1V02R2xEHlQp359EZqX&X-Amz-Signature=4eca58eef50b0910f05ff813b010d91df74682d39c7756347995fc8ec193b752&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
