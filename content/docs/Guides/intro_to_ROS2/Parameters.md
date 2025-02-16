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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2C6TWQC%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T050720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIGXhEUcfzjBdN6QPxk1Q7IUnlC45A4wyHOHSx6Ffm2yzAiBAdkMdfguv0CdAN7UGlxY7bjG0EPewgIn%2FCw51lRbcSir%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMaNIfwsBIjJBLeITFKtwDR4lEKsnJ%2Bod8EGPFKTKTXpOrgUiWKx3cMAprS%2F6xsJAD0oCP4U7L0qoj3HSv6eemU1iiqbpIgI50p3WDdmXHcaxAjf6xjEfBRbMhRJDxPNo0yVVG773beNjyqG1kNcOARh3135ZZ68Er6s0aZfrQD7XRUTgsXXsj4Mss32hBWuEMLkvG4A1x7U9IvFp%2BDia9xumq0BXpQUDEi%2BsJASd03d1OtlN%2Fzn7xKyRZWgeW6icB3qW%2FyspF7euhplXI6ZYpfFrp5sX41uRcJrmdy6xdg5bqaDhvVfFpN3CPqTJcrw2FOjz9Fma3iCCYvlMQY5vD2VJq4ZAw7mb1kjX1641qfKv9vv4mJYwDI2C6t3eEuueKUmmBvxINWi6ol0x2Jea0Yh0wof9axQDUKXzJ4UWuduIzSu1ahQ9rHlmZ5ncLjXQCJeMFZlFd6ir6kLpKFY9AVw020VI54mPT%2BfPNcsYstv9%2BwP%2BaxCkWFuCgOl11uIZQPhkFaQG2ML8JIjaFwTZN%2F0LJ6pTeunmzmo%2BrHGt9xc9WSBqPIrfzYQDHRIl8cHILCtWfoSR6VFov70DvZcswvUewtX%2BZ90Z13bBDyO7F76HtM0dhcHk1AD9bGyJEA%2Fjeljxr7CCD0oLKG4Mw%2FN7FvQY6pgGuPzjLEUabHU%2BXLnfbIIdaG44TR4EIHxhgdTIPk2PK4%2F9MQ6VscOjZ1U1WAiiG2%2BWRyj4gUaMCW1XjlShBpY%2FUejmF8BDdQdOzd3GXLYjKgR4FmeQBRQ9IvUGbwVbKBlQhOjbTvlMr9GAoRhW5uOk8BPTrqPkiLJKQfugGzqVNlb2F3DI82tkdWMOgW4%2BQ8nFKBAsbJuP5oikRnYknOQRXxJx2xO05&X-Amz-Signature=64ca149615bb5e9212bd7347a6fae2d6f0a366763ca58c718eabc9fb60f38407&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
