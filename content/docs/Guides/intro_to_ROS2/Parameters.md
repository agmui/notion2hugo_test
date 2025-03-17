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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YII6VU7Q%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGg4VabkeVirutHVJRgIHMrOtI1dLj%2FMYAxf8fCOu8dwAiA9lxRV9nSfs044bO7%2FCOu7%2BFV00fEYwl%2FpCFti8IapKSr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMeOxlkZB%2FHodh39DTKtwDbjYr4G4y6QZw5GO47gnHahf5CgZv%2FyjYBgkjKcktVZXA6z%2F9xkJgD2erSe6k5Wi%2Bdt19PBJRI4mROYjZWEgyv6porPmx260sCX1oagNnAQ19GtwgOLnaYtc0ZjtW292YePHkgwxpAMqyYU7mWc%2FwA%2B3DUmN62YhFr6Ugoq6IgRzR%2BfO9u5lA5D1qkr8Qd9%2BNZtYMnA%2Fx8UOFQSIEY5fVX4bziMWSWZyJTxeTlp7MmjTgQHp6lq%2BtknL55hCLkDtScwDD0ddtQOlXYZYkA7SVTecyOtzB5UP1XLhct5EanF5Lg0b0HT%2BLga6wW8FvUT%2FzBUKOWLuOE4q28BkmITomfZG5T6RUODsCbELICsOI3dxuakrb8GLiet8X243d7nD7CmmfgC6wxmJycRm4xhUv%2BNvlZcVN%2Fe1xQByOJ2s%2BTPVcs31z%2FR88adZzrGmYnSF%2Bq%2BkRVEgScj1qt5x0XoxW9LHfSOG0dCzve0uUsk5Poi3txgMPpyuReJvs95slpGiFZJ1sh65%2B4UIlKU4sEWxGQf5wrcsaerFz92x65czVZJDsZGG2obgVKo5aVTlzL3O9Y5mjyjKaeQJrTt9INusC8SoKlYolIC6ZBA%2BmUoGafx%2FmHgVP3msGTbKZlYMw8%2FDdvgY6pgHMI2VcpJvKO5xiiIbiapJcZj6CzJkf6myRsBZksV%2Fx9gpqDOAN3ANc%2FCXyBulB4ApjvxyprTbXWmJdgZHPbsuvTpQ%2Flm9fsp0mEv0sd9%2Fs7mMvrLyY6F1y17C4PKQymriw24vs0rnccfauxnoqocYSsSi4SLhUeialUwiuagt%2Fz31R8XVrjy3H4DFb7MGT3kVHx%2F58D8itM99bODdeTddzfZfMjRxX&X-Amz-Signature=216f56da5b4dc5acd5a9869062e3326ae844f79c750f5dcfa1f2f29480b779c6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
