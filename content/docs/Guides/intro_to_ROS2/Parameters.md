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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662RYZJXMJ%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T170802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQDp7j5nstulAwcCF6W1INlS8QfiHQ18gnfD4QZwZnGmzwIgLP8NQcH31wJzYYSJhqySMNgr96ZntFdje3%2BrTyZvizwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDBUsxJQMLu3hSTHZdircA7I2VJA%2FzkomwRW%2BVoN%2Bp6MHDdjZCxK%2Byf4YesdUjKiNYEj36kesjF4NqcP94BuzDee6ykmh9NYjlwNa4aXBbKVOJLhpqVnaAdRx%2FTPEZQZk%2Bkle3rP5NC1yztnWWAeI5lNJOo9hAJsRAWxbb5mIKClD4vzgYCBXn2pFsB18vlcEdQoNiviYs5%2Fk6rRHmrl62Rl2dPkbSnhnZERTeitkNpzP8yAKWJeC3MnnYnLHHUeRDQNyAC0rNSGRkDfZofN9%2Bd3LukcRAumtvcwkbgmTpTOH%2FyzvwGuCbuvy8GCP82%2FYC0v4D0kZbJyM%2FG5BiGtDCxH%2FTEqZYC1A%2F7k%2BIfIM6ks1h96lQfW5pv%2FniwjPHINC2Z4hKF3pcON2%2FkW5SK1%2FCnsqI4i2VNb93Vv8mZRr5WFEpJBgbjqwWBp7MQFkoj0oVlMMS%2FnI6EcSC6QXrIQmi2zX4wpwlkEcHJlTa09WAx%2FZNju2SehllfBcWcp%2Fw5a2nMgfFTN%2Fork4yWaKUWltrR4O%2FWXThA37qwqWGv6NapyaNRkwHHeI2lBmL%2BXXTtkdi7NBBOD38CmyUt158oZNH4Gz8LKgiGIdySjZgC%2FHNKO6BNwLnyHE2jrpVOOLV%2Be5h027GlLEfY8%2BG%2BfrMPeh1b8GOqUBZvTvkGnwNcO6%2Fcd2YS9GTCm8jlYKq8la6TodIgbm%2F8qj0vq4wNscEzNPnM6pGGfHIZbP02vq%2BMIE3BMCgqEX0QCbA9699eE1IVgh%2FtFab763sP%2F%2BmrwS0uItveweKJMvaPVBRHbDp5zXgH8GFQ%2FTLLjirXi0TxGyHfT0MoEcvQOx9qgBdKmgTIsquOpllFxfNdiLTsiuyF4TiWgPt5YM6n8jiHcn&X-Amz-Signature=a02a8d79f177c1da5924d0e1103004d63172dd000dc4f34c5c8371fd8ff56e5a&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
