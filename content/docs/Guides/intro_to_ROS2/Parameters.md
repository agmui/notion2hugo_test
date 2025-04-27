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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q67JJAQL%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T090750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDh5BJ3mGYI7sPwK4HDoxe4PLITktgcffx76U6cPLQBZAiAXRPdKlYrAHWx2dIrzeVcAqiBO4maG98ZqRoGnti7guSr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIM26W%2BNDjLS8dcAhJkKtwD8%2FaL9CipKBsLhanUzjTVeMRQbbRX9nTV51UzG6L%2Bgd7WdmvMJ%2FApcvttkTrUCB9yHtYFauxxNjCzSOSTozudh1Djh5pggl5sM2FlanUh3HGv08WYRoGtLgcH3x2CUX3uQym9HqRuz4%2BReMZ9yIfSXRv3hZ%2F00jQ7FEjDLo5EWivfLTcyEnZxOqYJtSgspzQZf1sEfIOkLKvEwuvIGIXbjPQQQqpwpOGxYbu9kzxEjSkYJNmt7NIN1o10vmPBAO%2Br7zZ%2FXm40Pgvm01DVGjOCg5XjSZm%2B5ktFXV4aypKk%2Fqw27hDwaUClyKMMRXM6wlL7lt0swc86BFy5VxcTx%2BQkKzmlIsNQ9zJf5uzjYMikKnziasNC5yPNYUEqVh34FGx7Urid6Xw4CClxz69yhsUZaCxnoNoAgjV4od0W9czNgD6tb8oS6PSaigomiWrxz7id2zwYz6xncYQNwQyqIFjWXIAaoJsBvlaxN2YBl6hLJJGyO8%2B%2BBqqXhzlhdbZD7V%2FnUvRTau%2FmdXtfGqCgW7dOnpxq4JSsTgIh1HJUdJ5ixCtGrur9SzLFBEI%2BUxXradU%2B5X2YXanhAYq8CSwKfgM0U0vwkXKqvIbzqAGC73aW7cRTY4GTRN2wue1KgmQwxO22wAY6pgGlaBIH72jJODz5T23vitkz8TOffOflFJ2hFVQcIAzvBaYh%2B17LNp%2FBfMK%2BS4e0Pa0%2F02IW3lcpRYP3QVE3J4qVEDJKsR1qB1u1yPGTAZspQywhA8HtG%2F5D%2FGkw0NWD%2FPFkQhLOUi6vB7APKidWblSWP5kWU3ixQCpdNzvosylbwICGuCIvNQpTnXS2b3mXLD%2Fzao%2BY6VnnkeJJlc2BzFb9vBRni17f&X-Amz-Signature=eae1f200b2147ca0702f8ee76b4d4debbdb375d04dcd33181adef42b342ad8b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
