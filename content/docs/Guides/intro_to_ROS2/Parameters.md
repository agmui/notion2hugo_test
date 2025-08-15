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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYK5LUPO%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T201006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIH7QXoESPtqs7Q4teYOC7q72C6209pf6vFAVI7GDKC7rAiAYyG%2Bf2RpICWvKFfZ467axSnKUtt8F18WL3Dlfd%2BfMcyr%2FAwhkEAAaDDYzNzQyMzE4MzgwNSIMPd%2BflxKOn4Z72JnDKtwDFdiWcUwa152K1yFratJyBcr%2FikKpfAgnPXhnD0oh4jvoWjehP%2BQ47wn%2BIMQ43IwS%2Fct8c8RSopq3YPMw6B8vOR2nXHbzRmxkiWrEUfA6oi1vNjrviBFKyttcbZo6fjmjzXFDocHR9G3HELH0DyJTT%2FQlAlIPEaKh2J1cAlFBB6zENoiQbbzBf1CkVyzjy0ZS3IXaBdBdt6UNwRGj%2FaTEguf6JLNBVD738XbiaNC3FXZrMeHhQYwuUeC2vPNw0xUUvgpzPzPFO%2BqOeFu%2BrA9GA8mItARhskfFUdZFNf9JpkiUi%2Fw6ASIsKjRJdoyg6NTK4kUDhCKoa3qGZk5GNiy1w3M8dIJy9K1BwQiSGWs0q7Jaf3xmLYuH0Zzmg2ruSM6XrLOswd6xjD9LRmty2C8i5lD1p9xAPa6cJPxrXtcFXmWQ%2FQjcNRALBTR4Gyn5SkAu35DzbJbkDQtzdCI7A4la9gZfJTQ6lUfM81VCw7etR19cWGCECykAqB%2FNQA0%2FFVuw3xlOk45aageZFpKseIAvuIHGNNKXjzT8bt%2FA8RFXN4%2BnyDsfkFXNLXjDSOY0IoViOAtYqSLRSb7lTrlq%2FuCZPn8RRbrxwvGxoHrXkhH8aEB%2FPgKUgxcvpRUmv8gw7Yn%2BxAY6pgFEswQ8yttgwbzyZNqgHX2xvruMn%2BdlOO0EQudATHhRHCwIfAhs4C3wBDg5hW%2BGiErg2IzV6kwe%2FFNkF0kuUQOvp6KmXJ%2FzmoMv1UWnig5NRbPnHTAY2ohZL4e4nPtsTS4iFcH51D5JJSyVrvm37Fk8Y%2FnjrcXHwlNIFa1uu8KFRt1s3eHdht9FZzby9jvqXVIoin7XkBEMhbvJ1VZ5z44kqZIUuZsS&X-Amz-Signature=c234339b103f88f054fe5dadda11c54b75c0acc0d20b8820269e4c99aafa7aff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
