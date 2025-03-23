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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FUQPJUK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDUh1VotZ9xYwew72RvM3x0HTGbUucPi%2B%2B%2BUE8xK8vU0wIgNQE5EdwmjmbK5UyJ1Sf2%2BSlrnWbluAHEuTK0kiinvYwqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOuFpGlnzJpE2KKRkSrcAzwXJjXkveGwEXik9PkXuZn73757lMt27YgtfmjuBH54vH6bIezqYAiB62Ye8RMKCuFMEAJwI6A9SIOQnaZTcut9KZGMwm8SZ%2BFWguo6JwMHpQskiBhBCpkLIZUyiP8iW9qOBqh0gw%2F9JQknJcA%2FE0bYf4VwGq8gssBUkAY09ssNfmY0Y0zONgVaz08urSsmGRZ4cjJKNe0VhTxlIzC9oSsAfQ62%2FKRR%2FDLrh%2B2NUzlkc84U1uWGZTaVR%2B5QEkQDI72ivkYzyRj9hBlwTREXTbmUBlUjreke89ItWMaldkVFHzVO47azIFfttlqnAgMdiXFxL7tqu0xBY%2F5zlFLjd8FKRpMIs1mzVthF2h9f7EwhsVpg8m2ZDv1bTelgd6HxBqsjcZwFVMYBXqZ7ddmyDoL6piApmJ9xpwO45gvVn2Ksbx35C28ZoZiXBrfiMdjJ1P9l0B0ps8%2FFQgsQh9JFOG5BJn7JiguQ8ALleM5qfZVPwfV6RKOGkkl%2B3NqhQ%2Bkij%2BYErulFO3M2653xUHeqqg2t0kPEoQCojoD9GI8Tt8xs4J8M%2BS7qgJOHQSS%2Fz6u96aL%2FnjIpQYyQuD%2B4jDUdJb%2B5aJ91JcpedRSnJSqlcf6okYhKBCHEJ8mxRuI5MILN%2F74GOqUBsybgrn%2B7VpNN5HZBk9ntFnR4kX3%2F4EdVZ0gASvY5xiaiG2vUQYYZyd7JlVFFpyKWcEad1Dv2%2B8FBllZETGcdzsgqT%2Boqvdd9y5N6JmAgFoa8AI59vvPbLBKOL4nwddmmvfjhOjgDyUIw%2BRKl4CdYbhqOyLrfj0n6d32Sun4a%2FCrfbhuDEL768aFVStlz%2FitBqVjW8xetK71MCS2AP9ZezzqZjGYZ&X-Amz-Signature=4c05d0e9da9458b49194c0caf04f46dc3c78f483108665ab24ba6407ccd445cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
