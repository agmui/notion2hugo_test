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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RV6535GZ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T030858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFK9Nf2V2v%2FHowqOa4JukI5WrSN5HtOaA7M0ah3BBP%2FnAiEAslNxOfkaLwRzeLs%2BVWV3N%2F5EMrhErhfklaKEczGFQTMqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDELFNy6yfSG%2B0kac6SrcA0kJqAHR%2Fr0v9iKlCOwiSQMzD7%2BKcwha7ql6hHcW5%2FIx2HkZqLf4vfeiTzGxd5H7Ru2apkoiiX46f4WWudJFM0prqsXLOAH2qgXfrveNkrcd0qyxcCRw6n2%2FC3To1lIrQUC5RJlicCyCEkj7acWe7cZqWMRXx2QVkP3eMgpYY41d7NB1ljRenFP%2FdfXJWZjwdJBiIphMxopg5%2BFX6%2FDMC1ERxkIzpCe8ibChe8Ff1SB%2BIbXBcuSm22sc0MtVcdRAg6QPzIuMkl3aJ8KRLcyrINguElFcqAIQjQebKe4CFY6DuNTG0l%2BBhvkJ9riQjxOfNgFri7bGeFIRhgSstlczNHaqsRK%2FBveN1wLQ42y%2BJlIqZtE16gl%2FIQM0A%2Fa6HaSn5WUxskMRc9iQS4xJrI1kTsp%2FckyUUCkBZB1%2F1lDjQYSV0ujCmkdr07SrGS8PQB10yTbUEXWSG8hof1GwbkJsQ4W%2B8fUNWUaBczcTlYqbwJWc81Xx62bV389LOmTP4fKKQwVcz1jYpKTSC%2FazYSqDjvXysOjXd5U6TFJS%2FpMAB%2Bu6C0IjbsizbtfM1Xlo5KpWKLc9Kx%2B9%2F1NaZxrVvR9VhcDfN4%2FofZoRTA92gjBJeE1jMwbFb%2FrJ8MFRr7n7MIHQ67wGOqUBtmDqA7KSyGWgHF8n125NmfwplSBEpEpm62n0OLYJroR22Bon%2BUKVCXhpAlVk5yj2vyIBqY4ZnVVQXDsa5hGqKTBhGcirw7fMwnwzVPYYSo7H41ZeDudFxTu%2FnEsEFn1Pg06s8iLxhV38ErqImZN2e%2B%2B828GSvxu%2BFSO%2Fj%2FVUyNr4%2FijaBMlQobD3PfaiJ1TknpjQRrQ1czZcetJTf3S43qye4M6x&X-Amz-Signature=0b3946d15e4dd8e4bfe8b182d460fd3e3dec9f18c5b0d6d43874b896b1bce07a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
