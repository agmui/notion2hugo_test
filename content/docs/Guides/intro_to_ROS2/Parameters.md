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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQXYEGUX%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQCyAoxaaZVuaj%2BzzxHw3iyll%2B1bY8NFeZGeqzA333bdgwIhAKJKTnWdqoj39Fpr8gV%2BXzzbuZZ02tgxl8kPw8fTOhioKv8DCEoQABoMNjM3NDIzMTgzODA1Igz%2B8Hb53JBINpwAZlwq3APLI9FB1SMvgd3Fl4pCeh%2FSilq1Q99lJB8QplSB01IF%2FYPN0RMzh2G3KcKuq79xwHXhPSg3aKq5WOndabWO8ibzxiZprTpWj4jcI1oMBKE6abi3ueVvviWeNBEUeoTKo%2FBhmP8ugo9ScxdBXTg29%2BOVR%2BfX7xPizOv8nAXNDLHgIgtkvZvp5VkK6J446onBYOu1ATmDEoaU7%2F1PRNH9A01E%2FSAaCwB56FBM0yeDHnpwMvUDD0QgNH6c2cubnMHqvboLxo0jmrQRLi4sKNagtp8fe9NHB4NPi2yu%2BIvnJdMSZ796CDVQE1l5WTEbWpQ2a4Cs4rWOg3N9RAjrF1XdDEhgj7MkzX9zQTZeBzn%2F6hEdz8Evx2S%2Bdtrd5tgaRemJBFDQi8BT9oukqPcLs9eJ3ybaIJdAtePxrcbj7s8hV6YaKj9hbn4I8rllUrX7Anhdw4CGZQAnJwmx5PBxxmX9pwUNSsTebkcgY5Q%2FwAymoBXxIOddi8zxKwQ%2FUsTRmOETri4ZMBd4wTHktXX%2BCORyQt2zX0ajwhFGOSXWEnxuEvBXwp%2FXuA7CWBMrBb2mCIp0PksljW3rSy4DNmonAhP%2FVccNtWKtMZ1gMZClvQcRO1D0kgwkf1iuby8prNG7rzCHvI69BjqkAbaPWLbqPj8z0EN5QE7BH5%2B2iOzCA4zRkQ4VMaWv7M50c1zD251gmiVjvIzDnaXD7evQkKF3L68NrLt1FouhZWbJfxEOi8aM3bWhS9%2BXRFFM51V8wRsMhsiFk4UZ4WlGuBv7Z6MEO2ZiYJMv0%2FqQ8oqh%2FqzwKpTXE8YXGNyrSHU8oXF5hRyHLDJP3SDhvG0bxL%2FTPu5gAvM%2B%2BeCs0qC4nM6Wm%2B5x&X-Amz-Signature=b2377516e4fb2e6b1218a1e576630e47948ca5e39de1912ee73da21ddddd7a08&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
