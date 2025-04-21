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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPWYH6UM%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T181119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQD8QA%2B%2FRBBFcBZ%2FIyFtJ4BB3%2FD7pOXjbo9ZD%2F1NgiixmwIgRYIq%2BZEuagX8D9Jj214jJC4b4IxjRLqCLW%2Bu8WJ6KYIqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLjRD92qdetmvVMzByrcAwXVsifPptjbi0T5SIPqg80AXghONUJ5E%2BtJAhgQzymMll3vWu4frpvHxK8%2BcI9J4SAYqfIROu4Ma7WBtsX39adOFrr49K%2FxstRiNN2B44ygYzJpa78LI0u%2BiF2IcHGaJWLWSFWR6Wk4FB4vQumu%2B1kNqhnhNoybkqVEaXGtoRtbYcot2vBXXAMVaH4z1nHVS72lkO%2FXdT%2B78QW62T%2F1yFjlRBeltIeXz9HrLK39BS%2Fdb%2B1u%2BpailjmntmYeDve9%2Bx%2FDlAqSEDxigph0X2Ny7yBdn6QD%2FDt2jRCJ8IUltg9rWXo7Tv%2Fa%2Fxa5bF8DWiEQTG37qsQoo10JEDJ54XqQD0lrANW6IQwrCjSed0kjq4PJh58xqBjMbwDSjApORXYY0EwZZNP3VpMYqwiDmn%2Bpm%2Bdls6VwO%2F%2F9guTJrqYPbht22GzKmPfHA3ptL866uP5d%2FfjDMevoMNt%2BL5jcbUp%2BAJVfq5HFhk7czfW2pFJgfQNUQ7HWODoJpJSSQmOdWvwcy9lJT1ydt3iyQqoRyLxr%2B2YxfMChrxHIo%2F9uh7kpeiQVqOvNwv70HN6QPUiQlbkTgAvKCRuZoLlRs%2FJo6M0xmKvw0T30dNAXUxbB6TyI9ziVJ1%2FTC9MHzrXoSmMSMLuFmsAGOqUB55eITKxNILuSBE%2FP%2FQrikGhGRciCBIRIdkOcg%2F0MNwh5rJnIpR36YlM3oV%2Bt%2BOa8gEw%2FJi6yxVlOhp0w%2FqdOt6YzrvhNmC3pupQo6YEOoBKzxwAS%2B3VmZkz7joSbPldcU7f2uL51z0psPb4wjRLaqxZzfmr%2BZZM1oZFWgsKQP3gqQbKQGxPcNSOxJ2U15w9IwErZXabfd%2F%2Fh45nXu4LaYp9rb0Jg&X-Amz-Signature=a8a6801ec71d1257e84e64a8f4a9535c4d9c81cc649c0855a55a4d2612f21207&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
