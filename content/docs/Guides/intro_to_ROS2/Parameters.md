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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VENPAC6K%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQCeUdWKzE3MCV%2B3IoNI3rKHpIYpDb%2F9QVf2fNLhN75MbgIhAIjdhqIGU2AJa53MwkfNxzTTLSlPGgZnVQ7LWea51PYTKv8DCH0QABoMNjM3NDIzMTgzODA1IgzmtgltukgdcriE3Ucq3ANXJz0ddr8FtyjqUu1QKWaU%2F164EA4vQLf99B3QAdaETklaXoIjySLSzgGCnvLYDKPTWBcWRqp3%2F1Qpc9KOcMzHheDiKHjfcX4lhrwhmWxIJ4VkyJx%2B6uWZWT2S7cMxX2yWouI8JZMpNv96%2BxDUnFM%2FCBaAIxZfFi1NSBWBwa8pZ3Xdr0im%2BsmebO4Ctb8fEYDA5ff72n8hKSgkhcANnEpgNAZIpT6M4fH7Y59tDGcD0pvOqJlskFyKSIEfGFvWEtJ%2B%2B10zpw%2F6OSo6IR0onnmbwctffT8WqCQIC9gYfc%2BrMICFeJ7CZ5VopQCDMI8XTjkLeU5J2%2FfArzsN3Ew5CRIFiYEf%2BnC0t8c1zcH5PO4u%2FgqxUW4frGfsfwaYNl3VcucpOty3l2KUtVeJnZhGEgHTwLhKkUrj%2Bw9%2F7Zz%2BSgeI5EJndvrnZI7UunEsK6KeuSglDpYvt23bwVFdpw3sDjpdgwXq%2BxsJg34cs4vrbAeR720%2FgB0MXWn0n9rjtNg492yBHqU4rxn%2FZW0KPvMaJvMTdQNrBr6Wxvi6tgHulrqCoLsd8p91F4JXL9S%2Fpznuh0qYKXJDMB1STX5RUbO1A3tzNWBx5kxuzBJiCIEjgZxi015vCsC2SwGQ7oY42zC7ps69BjqkAY%2FT58SZiKNJIaYWHJ8ccQHvw8tqvhmTXJ3Qw9SBQkO4PL9njPgSw1zu%2Fdkupqu%2F3dRphhff6eN4ocKvUZ2uTSvXgNBDbxykbBVZBWQAZF2GZA1yeiBrvR9mh5%2F4WZLKEjT1pffrJCj7dEpn6PTeE1eiopON9PgqeguTMY6guV75R4M%2BDY9C7USltPgsfBDQnWFeavoSM22vAoF9okzBOtxCGoo5&X-Amz-Signature=a34ecc2c00820f0df0c3df529ece9208002713c593a2b8fbe7281e0f17571dfe&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
