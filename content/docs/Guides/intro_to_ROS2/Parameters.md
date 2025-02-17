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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULYXEJD6%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJGMEQCIEuGbKsK8zmgfJo07c4N7e2pRKKHypxTwnet978s1CguAiA7tcx5wIck81JQG%2F3N36dN0GZVEDPjoMNzMpD3X4CgaSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIM6oTTmGzeuC79UqgNKtwDTTik97%2FrWv8DflSd0W22iRss664axfs3SLGAlZFE%2FPdd2SRR0wyPSaAHQLSX%2FG95bRvzh8coIYSYWqNLKObjcYmKaJmF5lkptPxDQRrtbD0LpZb9ENoI1EDsbcsOadHxPUrWN9m75gxhE43Vo8aqwY%2B8d%2BmVttdzoiVsxvjD6jxbAaSYHlrNJu4HmvetvIFto6ckv4b3OWcpIVBwvTFOiuv6cGcolxxq8bm8FW5iHzr8fFKb8wG2tnCJdhq6m9AQmDCzUWENkwLHZSIMFyNGAg0%2FyvEhKhXxGsYTGXPqhUf7Q%2BDbBisLMNGrHUVzOeoEIH5EboiRcAlEZtMye6WSAMQdXAdzsg19IgPf%2Bf%2F%2BVhgB%2BOZJpU7wzqtG2aAEmpKhGxX%2BBL1cNVVM8JUWvcjwYOwFHx9t1ONHVZX6%2Bjbm0jGbmoZiCNq1b%2Fgjbz9BmTLAbF%2FSe7R7Xfawd4%2BYjbW9nqNys0F3t0FeB0SePsTmWUyaXx1Ae9AbqCD5S17rxymAzaN9bO0wv4iK22GkRfY8Pb5LUMC14UC7gxsFqYYwMciLCLjj%2F0%2BTA5Qm7ccyXFGtzpF6npnQDBxf4SKFC9VvvBtqbLKJs2kF2%2BJLR6gppr5zdjFHgBfX2zuM40ww%2BP%2FJvQY6pgE4ObSbP4OkiIGceVSMrVnprXlk9KvKZDuGcjrG8Ge%2BMOOWpd7ufsF1WW%2BGp7lTzYjLepGSDVdmsJuztA%2FKy0RBItrbS5m8qiraPsjiVcUkwmAKWmj3IPZcFb5SapJf%2FbRxwGDZlVPhtRWW6xE%2BrN7hv0ccxOT1aXas5bmn1d8WX8KWCHZlBeQKnfe%2FoolxEbExYWC25iorHP14xCwUxeZd9R7hfQSX&X-Amz-Signature=2af878239bb2e2fa9429c08243fb99238772c9f0903950cd526ebbd8c7e8c255&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
