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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664I4TRL47%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T181150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJGMEQCIG75jQHJYfFhlIJPie6QnUZ1SY1LPknohKPS3bYSSY8bAiAd7L4kPNKlkYbO0MO31vD3vGftSBV3z26EMA2CPIVSKiqIBAja%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtcp0qUE3RW5jktQlKtwDSscubLKGKtRz%2Fevctb2je4ijuKAhcXdsgmwsWKAKho%2FM2v833bfPyWXv9dPI7R1sqTWFF50IWGNlW1%2BVNBNBjIss%2B36QLh7GuNbI%2BREtOTJps5OslTVuxCpqyk7SmMoR9vYrou5jeK4TDdE8viFuoiIVLbZ%2B1bnS76%2BVYgQTbEPXex6jO6oNkk8hHa9DwiY4%2BF9vLaC5PO4dWQlz7bC8Yvl%2Bk2%2Fi65Xwlf3oMiFsVle2xrq%2Fb6OSQWPSh3jsQpIV4k05KBhQI50ASEpZDYpKkGiMoldZcfiPi6s%2F8rIzfHAIBhKvH8Cmz0fZ%2BCtGPGXyBMwix4qAtVgeZiKGgGH6%2F4lHJwdgQp%2FVpC%2FPnvwFOx3xLNCvxkltAw0qd4JAQ8lXaFZhd73WljmJPs%2F7i3QtaHgyQtGQwmoWJbm4QmzVZFTmQHwCWkRGrbP184DCyUYIRsHK5S%2B06dpj%2B2ZNYjqydl%2BLVyWAeZrljwDK9%2FQj34Gv%2BMLWm%2FDpYxr0GY8QWqOETSKgQbbiZNlQD%2BpFfmXRWVW8RgFP9NLwR4de9NoMcAORJzw5rmOPxRQjJtDZlQB5O9MEPbW8Oev1sdSrx6lHugaqc7hTi5q5yyxZ3cGzECW2ut5am9XRmKJbeScwk%2BTTwAY6pgFyl5Pf9OT2SZ2um1oDkQyfzGXYNLg%2FLYVMdXOoUibz3Os0fpPFjxr2q1zdruZkJeDmsS0rMaiWd6v54qa6nRoppvZLXd2YAfNDdzZlhQiWo0U5I3KuSCX0Y8AlM4OQx57QFcLI%2BTu2asGA%2Bd%2B7ZD8dXmQUQQyT3omGsl6%2BBLGDggyPSOyYjBCC0Fr%2FNxfrIxnS5xhItzZfR1HpQRvNfoCPq6YHXxvR&X-Amz-Signature=c507d87bd35c6429e5fe752d072bb49c65cbdfcbbbd7a411a584150fff7deae4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
