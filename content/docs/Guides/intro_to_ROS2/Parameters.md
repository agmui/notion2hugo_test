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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DNOZTRW%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T034803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCKUf0ag6iA%2FY3QvYmhpPFWC80ug6202y%2FezWaqiH2y7QIhAIN30TNq4YNauheJ8NuIiM9IkNhE8LOP1sw2RS8NhDJWKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwOPsxo8I7hOulWFd8q3ANghfPbjw%2BQ9r0GWkOvB61JjPg5ReqG%2BEVM7%2FS9hvMtckTZkjKVVXEaauEXrmzPVvVYcqgKu2GP%2Bd8EN7jWHvUeA2acLbL%2FtuB%2BcHqzdpluwLQsRNwAime%2F3w5dLio2uletwixG0dQskfh6gttsTEkNswO1iZYm44WWfkuRMXJMSQRgi%2Fd4VaHMTg13D2E2pCVe7hn5Wc4SfFtgUZBpfvY68%2FDCJFt6ZtNoySb1z%2FzMgVN6GHJmaXcvqDvNViCdtIVBNw0u0CVruSFrXvrHQY38IIycsmk9%2FVAYTYfvmWW1N6PV0xJpFUjjbDDF3y7xoXdvkDE99%2FjQCWADmSeiK%2BqXy7a25uxvP90JaB1lijZT4uzMWAuEEatkwtF%2FX2IwJt9adS0wuncYvaCV%2BaPNMjIbx2X1eQtU0CNBe61pwh50X%2BBJGA0wgL%2Fv7AQYpMrASmsjBtzbOmUdW3QvXwK7S0TGY1A2v6uIxvJ2%2FoxKUvvvjfOFU7HxzdCJYycANv07lyfQ292OsQg8xsm6Y9Vg1wwZaryQcoxMnCaKz%2BQgwvwW8WUyfzIjRS4EDzA9sWGdIH%2BO729P5EKIHsngoiUT46ooiKu8qqCDkcZ7C%2BU1TrIxmQXmGFYmMIh9emaQlDCO8YfDBjqkAeKYkLX%2BtLATF0R27T%2BlJx5uSmwreDmyu3zB6lElsw2dmorSSryqo7m0vuTE%2FyTGskipqZLkR5NCP4Pat%2FuTV%2BMKs1qtNj7xZFaxoj3FkDLJuEzNrcltAqi5TNeszZVg4Qv1QQ0uJ%2BTxYoXFoGxQgEi%2BeS%2F%2Ba8xBI7Ou9P24e464KB%2FN7Sir4%2Bm4tStupRuCqfrXrBKxtnM4PboBkzGq6osydm5Y&X-Amz-Signature=df9997ee6da333281127cdf766dcedb94bcc1f2b532652595be960a8eb67b6a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
