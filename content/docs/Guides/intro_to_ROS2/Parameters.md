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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5277KJ2%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T100954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJHMEUCIA7O9deRS14MrqHpD%2FsfQzd9CWvDlUbKSxHYG97YQEeGAiEAr5Xsj%2FPqubTKmZGXaAEmdFfm9wgit33h1H2M6%2FeCOVsq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDKvuMeJlMLFTW6fCGircA30hG75jM%2F%2F9xSO2mi7oNodeiHMKoQ8EL3RmDWf7SuBjlA7uofeIhym8YDNB4RU0nvdaJEjqDZ5HWJuXy4In1vwY3f%2BO7hKfTcn%2BdvOnDnpBU47xX2IMv6kzt5PMRrw45ffLOi2tepn0bP%2BhU7pX%2BjAiUQ36tw72bFPZjL7%2FNqe9jCwQZjwRCuQWKB2o9XqvR45idA3XOPcUgg5c5ddXfsLhcj4T8st4sm8NHOKLOMKh5e%2B%2F2LEPjWRy2TcqckFU45F8dY3qESQMDs3ZGP%2Bv4zVLfdsavk7i2HKAiDpMvnDHtsXRSFN6%2B%2B7vHmNIvOSJ1TJxXrhmw7eOjO4clL%2BB9gkv3m63rfLWwp79ayfiMCAHjqaQ8q%2F3G1KLteEAwMQLvY8EsTK3mvL52ouvPl6t82LtuyrLIe3FpJYQs3caR9W7TQQYCaFjDn6GUYn1HgRbtypWtkFrgz2LfGBoSLJg4x7KSnrWgSzoC4CEqHK4OCadFvYmBYungNbJRcAv9pYBJ19WQtHvzBf%2F40UniucvHC3OKVvesthgGdfmXRdJFXCCZZa3vFUS%2FxpNUkE8mX25p9z6ZL0J8PKRrdWk1iu6AH%2B%2FTI1rJ44z7b8yqbdAxiKZG7GB39xE0KjoWqKeMIm%2BnsMGOqUBKk9PhFQKBqK%2F%2Bw7OLG2jIQNqhcBXcAVEa7NaH4QzwEExLoEo0gZKOKtYz5UIFtSMQpplHmNaT9hYwRk9fiaj5g6I16hlEQWETdYcBz1EiYy0KxTbI0XTLVCPAxZbB6ncISlBzBbni1H5GR3IyTF3c%2BK6oOMvBcyuww5Xna7Kmt24fAb4lwmpA3pspmb3Lk7W9dKiXfuo5Kv2hoqrOdWzSxbC0meL&X-Amz-Signature=c505dc85b6087a82096e8e65a8473b332ad6ce6a03016cd4135813ca4f6ab1ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
