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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYIWID4A%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T071628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIDWi7Veh0Y2yaNhlFH0JaMyzD1ogpLjzWR0DJx85Hb79AiBCrYHzK4kI9XrwIAoz%2BfZOl3MZB%2FULzFth3IC5OCY30iqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtNevqm3NO%2BSBuU2eKtwD1MXA24healx2o5DkLth2NE2GBv8BURJBJ9VjEG9bFJWHFoB0Az%2FAonREmmta%2BHAL2TMizt1UPgOJEqGuibdeiy6LFFQ012mJwu6IapPRHRnwOAxI5zuXj1wEYAaBQ6ubiUMhZWy94lBr3vtFHJ1Z8Ley5Dro%2BvybqrbSRqdfoDBperiqK%2BsiVnAaAcZP9Kk2zKuqfdxk9dQhanrobHRXiY1AdIo9DZQRi9ZtxAnTzF1CivPLsIDEJ9tVrEDeoIV%2FT6IkUVe9hsOLIXCUWk33NBrC19jY6IV0IzCOaxnI40xomsagGBGrZuGSTKkL6T0to6%2B8s7ozaxQeSLp28GtOn2KqAjnvyBnoql3T3fxYtjeEsRPnNtIvDlP2rT4wGKprl5%2BV8gKHwuMJLb5ZZu4Oz2yOaEQYPVVZ1xONqKfeKhBGd650YHqhiNvgrAm3qoGbGZbXg7%2Bd4577kar1Q7nGKiAYchYrllbx5shnn6f2%2Bsn6whCykek279%2BdEpm3kql3nmSn4Wx6KWUghSnk%2F6U7Rw2aYxwPoxwfS9OPATKd63Flt8apFYnmK%2FMXGVfRhFuKQh7CHr7DTJ%2FvS4RNw%2BaG5IYHTYZzpq7PLGL1iX%2F%2Fseyi2OlXOzjANv%2FLs1swqsfWxAY6pgF3vRKphE39yuPxTcHE82qf7YsNX5Bg07nkw0IRPR5Z%2FbKzaW4zS6E25IbN3NFFOWpcPZeJgiAlWVT3LGhzqHvkqTrwMFp4yhq2TOxaHJiLCT3%2F5fnF3Phj6rf4EnWxXM%2BMffKbzR5l70weOfaVG3DF2jQQ21ToIhk86eqK20gtxu5JM8Nid%2BSCkhsleTuZxeeAWd01DhRvsWA4SbYODaW%2BF%2Fkq1sXn&X-Amz-Signature=1115940474f903090462bc735a1b92fe43d53e52e169dd15e82fab8cc960fcaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
