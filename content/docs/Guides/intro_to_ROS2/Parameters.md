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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WUDMMLA%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T161054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIApyHdRS2lq4mwX3gmEnI4uwbUAstc9Qsdyz8Drr60JXAiEArI%2FGT%2BR8Pix9M1lP%2B2Q4Bkg9OXaM1AS2bsMV5lztDAUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDJ0oWV972IftoHBtJircA6%2FqDSS1kHI66B27H67J5z06xSoDMl0uHHnRc6rkkf%2FQaVJ3ymbTZ%2B3YbVJVTiaEyYus%2Fsa6w%2Fg8vXxVm0M5OAPtrRm83qBPRrcbIpKkQY2tfU%2FVvoRSJ%2FY%2FoVnAema2nduaoNde46g%2FEELJfSLTmqNET6yzRoBlVC0x2A%2B4lg%2FG41ic3doSFInolWGykaJJ7gKrW5qgHbse5XMR0CGxM27OYIEtBbOjwYrfu%2Fz9Axj6tP8qOgPhc3%2FsDWt8mpFgkx8dmTQEA4k8DHURMmi4lhqwSA1n7cF3rkeyEIeIm%2FHSXbo1R8P3NnfFxVfrjrkmXKNu%2FHzHNDTc%2FqoQ%2BUk%2BeN17xYMY37azw94xGOEtk5lujQgm%2F1A53942NyZ1J5BrGdc9js7ZBn0v8RtF%2F5vdeADooBgbaNW7dBbPrzUVmacM5WWBgfVjs8GvHbaniWf69KT8Bug3Rmne3RjJTPyxrXA%2BKd5x5ylqfAovX7tYWua2aOncBHOySGDvLaZiAV6RXd6%2FG%2BEOOm0QHnsK5zee%2FmD5fn4bG87g65NgkEyBvcUFnDDjR3oJS7jfgEeEOpKrNzj7J%2FNpeRQSETFj3n6leOfYc6iKTk%2Be92oXhTcWgwZhvivWEJY6bJ5fL%2FkvMK61%2FcQGOqUBPTVC5mKpiSHZotdLv3Zh4GyFrXW8q6S7jRMaAzquShhi2K4pJmB1ApbOk10E9pYepHloqxKhYkne%2B8fDdg%2BkznRZYkhHgHUk9ZyQSWstYIdMhUekG%2BWwhtv7%2BL66rdiUgAAtEuN0uWKswZKr9mtMmN%2FzFBp%2FHs89wcPpqbMVniO9UqA70wy%2FJQmdwcCt5uE%2FeVxNdG9RTvhQ%2FzYHXG8%2BR1%2F0a%2Fr4&X-Amz-Signature=9bac21783b31d0360ac59edae1b2eb0a3db88e309bf9b790c99f96cbc64e0882&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
