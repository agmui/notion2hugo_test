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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ422TVJ%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T081223Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCICTBGOxGOmO1jbUakdjCouROSe4uEv0%2BrXDBGjt3ipl0AiAA%2BJqXKwDpJ45GQjTvLzv%2FakAnUgHYZuEpFE8BiVCGZyqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmZrt3fo2Ix2dHiHSKtwDY7SxhnFWHc7U9YrWgygJE0sXVwvc8qEpJp5P5qx6KiyF58dG1GdIvPxWxZXkfHQIwVkDuBUn1r9urddOQpj4p7Z8YCFORMRE0OYqCevqYS3msZMrahZZXbmATF9B0dgSPHIcTtlr7i8gW0s8KHtjzjhExEEpMoDZT17Ug4M43K6CEoQeJ1RgGJ7Ub4BGF17GrOM4t0Y%2Bn0qYzghAh%2BdLXf6UCywbCyeHL4kfghcrvzd%2BxQCSfB6YoXpG0L6dFlAGhQLABx8tnpYRDNUepIyeY9L7iM7n1%2BwmX6bxqtPCmQPwOaCsXcdNwcO5dA51KhP8ayK3N2y7nMOLoVasqxrIOqx7xeqahD7hHbiVj4fHu8qAmPoe5Nosguc8QeE57fSwOlPCzmVUgVT3t2ddtZC%2FMO3OqzsSOordt668RbgHRMGn%2BmieRjxAKBSQpuuo5ukSYB%2BGpKcX91i7VGroLsb2QwPxmqyPBywiIqi0t7s5SFKdHhlxvqSckrSSOI1Y4pFPhIxcOo%2F2RaDRykQAYxw9yCQhFsD9xdeaokqBQlGT73v4EN4nOv%2B2t%2FV79gB3vn9nxmOHQIhmRBUmp6%2FW4eEWRhx74ReGNJERmNGkW6c1NlUCyqB2MiKTLwjNWi4wvMrYvwY6pgHfU3mKnr1d%2FZ5d1YIfhZqIlo32yEYLbR6sVFEIYVwf4FGE5%2BSToESjRGOPOCde3z8GDhT30MPpAxo%2BPhPmUWCYbl8iZ3HaOhFR%2BTGV2y%2BKzAVM%2Bq%2BIkG9NocFBXOKrQWycLzgzdTs4y8rcUvMaN%2FyRPsYk3lzOPKf1Y26PQ9%2FXLkgtQ%2FX%2FLfxPsteip4qU9sXi6lNOBNvu5KgFavWJKtCOq8zcffH4&X-Amz-Signature=08f18b084bf4e11eb933814a551b8d1d44b4bdd2bca7721f45d180fa4522d339&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
