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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKI5ECDC%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQCmZ7dj5%2BAstCgbq%2FrNtdIjtibEyx%2BxRVeqyQOop4IvMAIhAKPwG9TxFWtHwKKfmXzzlV8YrZaKm0p7NLSh3Cd35aBJKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw%2BgXo04spCKclV5RUq3AOW4M1uq4Jbv5WkmRDoqXTcsh%2BwFryEJlnVGEi%2FDte%2FTfe2YqMzWiDCMdpuSCLB5BXcwxAjGIQdSjo%2FzoXBwQOS7U0mv1hHL2szjlmQ5B%2FF7H%2B%2FdlqNE7pwOvmwcdXqiGDgtfb6beK4eaDwjuv9N5jSGIuePiK0g57xNfepzFkc9V47aQ9Aq6RxKV8HbVNNiZOt9%2Fev9AaxijWlesOymOqqvyg%2BNFe0QJIxT7dVDfuEf4wYN8vFRgniaX5mRPygm6jFqkk%2FvBE99ky9u9LLZ%2Fm25dBVDo78S7KcYsWO54CCWxYl%2FCXkfEVFFU5HEYJnEdqS%2B3EvLo4XgKfCq4Y04AfAIeeFmTuPkMgMPznjMeD2L%2Ff9MEoB7RaynFMabpZtI0YTK23gPlufDWE%2FqWnTvrz4KXa8JStRb6DRy4DZjWYewhuMvctltoIOWB%2FAC4OqlV7lfy9aWvBMJv0k%2BHAZSjegIKWGoLhfqpOYicGqbbP%2Fmj5vq8LRmxMBs57Ymh8VVb8FmDJzSQtuCfPxhyTTkRgDJizJD2ovey00yBRnZ24ZsJafiXEAcaTlXhf9IG1yI2Gg2OR4NqKFmxS9WSlp8tGvXy2xvmrPjhHnXqifBQevuDtb9I32xv0hGxdvZjD7uYu%2BBjqkAXT9C4Lofax9odYnAtYpytCARkR2JHoB8TCVvuV%2BptZbVf%2Fw1nXVhiGZnQKs1wen%2FZtuOzGYR5OnFfLpBZrR0r4djQclb0vh1c6vTzBGhqC3TWgMtLrqWpzHilOVLriP1DCf%2FKJZMBjzoo1zodDTwvMphfGpcoHjIvHn0G10lPdTqt7DicDgb7DjZJ74i9L11ku%2BzQ6unNsnLQAEb3BaQ%2BtxCBVX&X-Amz-Signature=3d3650434bf8b000335e66d7aaf77fdf347703ec3b2386614343c9c765596409&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
