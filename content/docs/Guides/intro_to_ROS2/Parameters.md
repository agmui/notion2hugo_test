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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U26YFX5Q%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T022748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClBB5yYrbIuHomBzzLE%2F0wIAi3vFv%2Bwrs0v5wUB81JqwIgIUJpzNWZsZo6uGW8Y2OUe3yNGeUnh3AzvfmswbnX5Foq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDOPCPZzsG0aFJpCHwCrcAwHOnAjmbL1seEOZc8IHOh0%2FUIW4qsPYSqKmXVU9DnXCBfg6CxGmwuCilHDhM%2F4Lfc9NDYuzfgnKhd9k%2BbJUaZ2vXYJqeaPG%2FufGEMMMS5gn0DsR%2FHRDBu2YsUm2y6cJPdoO1OHoXI4%2F7ljRM2gNuUWX5rCV96d9kt774SG4k0hDYMv6R9FwzqYALnfUV6PRfxXjpe4qWs9Ou5uxuBfGM0NLtJplgL9yOxWcIC4iZLE3rRI4E33PgdNnQXgJ3XssPhlgk1OoGu1PBiGhG66la5JnhSJDbuk%2BbvHYl4AERDQo%2B8z5F2MfpLWofD48l71TBITGIwNKjnzlJj0n8agAx2alt99%2F%2B4oPdBwTRLAoWi59RaL0S8kO0QxBkfWVKXW10fudMgNHvRqSTb7hRYanT4lV57PL06IigC7yIOPtECY1rPxsTXPRAfcC7Q1KoAWan%2FA2CLWzeOOAulr6%2FnV5uXBMkrbPNIzwuI5aZNVjVm7YaZ7JeCldRCc5v%2FptYhg9vO7ZTozReWSLiXkGvNIwS0yJp9U00yONp1YiUWklneFXAREMI6B1mefzbh%2BUZtQ9wqmh%2BW1EK7YESGqZrWyKWpL0nWrmAC3xlbqNsnJInY0KURY5VwWMR5tr3rClMNbAjsIGOqUBSaCt14VksYnp5s6Lua%2B6ZMmBbvoIWvaidZyeh0OCK3uPR5h9IZomZNDIx5ZFVP%2BfsQkb%2BPIrVfXKAkoPv5wOmsPBeOOTNQpUH2dlqajq1XIjDgFjkQ3FPDhI5yUCKXJ3ddKGVuN3aqVRgEdoZF8yZDp0Cfw7B3YGaqBNZ0gDOIyl3cmVgE7%2FxjnqaRsGIMP%2FBe7twQ6PLgsJuqEv8ktW1X8OtCzs&X-Amz-Signature=21278d1b8d64ff75025f9437061f2329f3b65679675a85e23c622a31b439c1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
