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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXYFLBDZ%2F20251126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251126T013919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxY5c1yl6bSjCmwmT61dUtz3kZuxh75S54UEe7myPzHgIgElhEo%2BZD5SYc%2BCe7n0772gdkLN4%2BBo%2FrBJTTNzdAhXgq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDExz313kVSELkePrryrcA2IbQ8zZp9bV5lGqHep%2BDeUcBum2L3CD9ELwt%2FXIcSk2PAhzVZC9zb2BgfN7dPOwMZGxbwF5syQIFy5nazLy8qe%2BjP3j%2FKeK4NkHusx80xNwoUrLpiODmiySrZ323t%2Fj2tf6IX02TW7%2FSZ%2BwL%2FoDfCoTd%2BGyuPXAr0sU0pyLRtsImf3eDS%2BbexKwK9OJjjU8HyjNAUF9s5PadDlWbVe58HJE7Owx1HrGMMGxEQquJ8VC8sPpOrTHN3Iehjn09XF52HJWE8t%2Fz8RbQebuITkBAx3AbsAP48pkm2xTxwJ5RC0jziUXzYwH2%2B41Myyjb0Yc1e%2BxYlWQvrG6M5U9FLsCdfe8KAyYNL3JFardcFk99shSNq6uLof175TUPCS8U7nvBW7PdVuMk0IH1RjSsKBwa1I9u1d2W%2FDC9lHkY4Jx7QOJb60fYRmSgkPq2gNuZBo3LZQqMlZH0uWEckPchZcvJLAbtT2NKtGaoEBWgvHz2OY730ZOsQjre1aMrMeQQCo%2FNlJeo4CghZt5RmQIN3ZAUExoMH0%2FIn8%2BITvwm62qtAEZGbJt04yXjvzbfuk420txBriYjf7zLNRhQVc4aLjVH%2FA1XGOoM0It4QJyGQmOErjQt6ruotZUzhPG9cqeMJKxmckGOqUBVBmVAqhF355FZWmNPPD59OsyKhvvExTI8vpECwnki5omw7h007erYWiP98QMgQJeNqdyEAtJD%2Fx%2BF7C4Sd9ix4OZV3DUnTUKbfnQOZM2RBUHR1MG666D8Pq0KbjFLYxTsytiPY3I3TwYh9w3VAQZOM6DkvBbXjeBEILb6DIR9ELr9PzDBq1DeMiqrPAxfGsEHpUBZfuRVG3Yb7jEZ4DjgnwCcAdm&X-Amz-Signature=12ceef561707568275a4e7c65f4fe11469cf8b454712f22529b4927b49fa8ad1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
