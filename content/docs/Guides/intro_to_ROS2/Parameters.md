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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662O5ARDGY%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T061236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIAwd%2BdCY7NZjp94yEac2tsDZ3L6k8Eg9sWcFILN%2FSxofAiEA7JomkqnRriuBA5M5%2FCbmcWafA1CzIL8Y7CTNd%2BOe6ZYqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIqrulvj%2FTF2IFkW0yrcA7wr2%2FTt8%2BXbk3uO6zCXsKrUCH4x4kfnhNr1NhAeBYBHNU%2B8JcAObPqKtV%2B2C2lzsfsAQ6iKkalui4yzol6Rv1Pr%2BAuJSWqpdhJwXvKPh4W%2BGKqhgRt8b8Qx%2B2joTK2puFncfGQdswOtSxkK%2FI1PSNmy0YTxRjIboW7d2Wc8tycA8D7UwIIuDDoELsF6GP%2FA4JSDcbZzCbmU0m5XuXlYc3L2eckuOhHwcggTUkIcyI5U8DZm6SsLjrZwR2zBz3C8fa3OnTqBV1fan1VSxVIyya0LNBvmfvSvTkgfvjsUv1X4IAU1NsjfuNC5BKZAIpR3cGidZu8W0Y1Syc6xcyHm5C6OHm232UwoGgf%2Fmu9w%2BgVIYyrbMiosDiObNGezbsR%2B2hqypeDTmgNBsc9OIvfueHodxz%2BlPI2D%2BuAB%2FFyz41mnsEGXYJDooPv6OAzP%2BmBPQCVqnfIbHfxX5bAu%2FqR2IztdR0EM2QiXqB3IYLUojiQtOTlfk6fJ5KQrB9Qwb%2BIwHq4TotydLge%2FraRS0yS82DZujAM7j9J2P21djVBS3n5S1BscCPQPYnj%2F%2BVGlhHcuzC2B00WYvogt4wROLjDlpZVPY%2FuTwiJt8%2BxL0l2jEsoB0bNgigzSz0hXoiHLMOmkrb8GOqUBfn8IIkLTVgeF5yPR4SoqDTByFLoqjTMuTeyfLNh%2FkpyXwN7EWLxX0z9kYkdoG%2FwZpba0nqFLmrKTViWs%2F19KgcEvLoBGw8X0q4iQd8AVDFeQiRUpqP68QJzBIbq0v3nGfVQeuwY2ddX%2BO8O7j4nx747ng7K6%2FhfquuePy5paoDW9%2Buk0PeQXKxKogs1xWwYywFpm0RxMWqGiPRitne%2Bb3hu18vgQ&X-Amz-Signature=8e1babb9a493a65d4daa9262f5cbb70c87683801019a135d3ebccbcf5dfee83e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
