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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEAQIB52%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T230119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAq5hzzbY6jnCROfYPYfNGWHLgk%2FWYHdy1C4DmgIH%2BN2AiEAhxrHprarumT7xlXltW6OG0N8mmnQvmm6I614gr317%2Bwq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDK3oNcfrXl7URf8jySrcAwt84C%2BTAagLzhXKjzDbxMSyhVaV0Q8t17ISAX%2B9d%2FPzZ2guM3TjITdtH0VQiUjoaz4jzmFEU4aT2hLkRW4dgj8dZKsXhub4J%2Bz6uqntxoCtQ4Tu7e1n82zDReVqE20oKLtZO9hyCn7CP7rRKlTzFmVNbO92fskrD50mg%2Bts1zWb5K0r%2BPh7h2krouHfvMSpc4Fw4BFKY5T3WyE7B6yo5wo0SFrq8IRtv6KRKQvwITq%2BLVCbobjwY%2FP3KFzcu7sd4XKdMOnY%2FTg7FZfVj6%2FjwD8Sgoqd%2BB7Xkf17Npnsc3dnVRt%2Bc01GhJvrGgMjF1ayZJMiGBK9MXVmqTat0mREjYQWRnLN5lwoO2uIo5wW5iY6jkTKSAgdIgtJiXfgfyyO13tQWdMEfWPdX1gYRZMbuAWyIQd7KkMK2FhqkxraiSAHAExcuTsFqlqdZQzUajHBtx7FhsTtC15oz5kA%2BaPAmEymPtJOwUiIaqMavy%2Ba4bG%2FxjcCPc9RPs4UbZaLLYAQI5vu3mrBb0rZldf7NYU9aahlICakLq1Y5mfbvhlLM%2FInwnko758YKF63Nb5q%2F1qNrDaUKKZTXTwtfhPW0Sk72Ts%2FWyLN0Xdu%2FSelzUzxGPHF9uhvkUe4CVFRglXNMOvDnL8GOqUB4cZgqH8WN1ryrovj0vexrPXaxvZp18D0F8yj4aN6yra1WzNypFq5ZeU3HB7R1fvkyqFgtXpdKEczN%2BvUFk2u%2FM02ZBahj9GwYA4hBwThi6cqEDSfnpb23EzmWd%2F6Ww7N5H81o1ofCq1SagU%2FW74y0v3vq4ONoFozG89F5RRVqclp9Q5RDZeLUGxJNjuipEAF8JzMKUWRwS93JXp4b6wZypws78gg&X-Amz-Signature=9344dae41d7dcbfd4aeba20f99d486433ee64f4a93a55b1ba8b21d7ae83c5b31&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
