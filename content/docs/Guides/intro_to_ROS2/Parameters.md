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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZP47ILY%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJIMEYCIQCuu34MiYcfMzd9ZbQH2O3MsdzxV4drr%2FupW4xHh3Lc4wIhANfuKoZ5NJZXB9P%2FzNJRY0SkkLF9N9w%2B8u4NyICTKjv0Kv8DCCsQABoMNjM3NDIzMTgzODA1IgyK3yl5kIYkYIH6mkYq3APXAj8xspoUm0s8bgpnBVHJP4ZyaAqbtpCPw%2BBnjjU2YX4PyzexoUP0GOy2toCYCzjNczGznwd62LwATPnMe4eRn7oNREBDgwJVy9r4ezw3%2Bj3Vao%2Bsd40kRGWMNzIxZRgLzoVt%2BaKTkg97Lgrf3MwAGkww0WmzzC%2F6BQfgIyMPphLqkhxupsZgfkZZrqmaQgX2Ed2w67PbW52uPuJALmpB0GXm26H7jAHD7kAhnPubqJsCGZreINvDfDBLbk6IZYACiTkwuZAnnHYfIfqyxEU5tHhNB%2F0okeZhAMCRFOi0OLAcVIfmPk1WV6XNxHma7pTpGkiWpn38TIyHa8eEjf9ELisk%2BsX196WfnoMpiJq86cP9iFnAgjXPApyoQ1lsmPwa2j1nyjEF8L4V3huQP9YljEXxN0Wwf8iRItNR2FxczQp7JDZqtubJJyOCc%2BUIk7POz4zTfK4OuCNOUY1qJyMYDKOmsf%2BqMCbuE%2FORLAcNPQnT8cbW%2FI3vTrmMgu5cjLrgpc3Oa1n9IXJTo8ojVL%2F8xBteAygZIvHqaU1vWvKZDuwWl13zo94A5Nz5gujwnQ6Ejc26XLbgicwtw2Ypm2Fx0wOd8d%2BtfKbL99ADoSRvDyZd1frwr%2Bbq0GMa5TCtvJ7DBjqkAeqkP%2FB98VEqArMjIJ96EVTvVKsyZl4557z1MnHv7VjsoXxHYiEeNWo0zFMcb07M6y5EJnIQVXj0GEgOHhOCl53EgEBjRTbCijQJ64sYH9vg6bszWvbSevX85f5E1nGTvu8p4lBpbq0aEqEaQiLfNWuKESZuE8VZK1Ulw0uXp8MdN1waJFgn8WMGTg%2B%2BRBVKBZjiH1Bt7zpq%2FgSD%2BMahhcrNDI%2Fq&X-Amz-Signature=5c1c6d99b61651d34705df2b204390e4df22393d4afbf9ff50ca33560b1ac5e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
