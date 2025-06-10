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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WOWQD4%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T041810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKA2KNuo5UFXBK3%2BEhVPVljlOuO%2Bjuh6%2BfMxI9yublGAiAYWCyvPoiH0w8IJ2IRb30bYdv8lGDYjoaxVSes6LPVuSqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbhzCaB9Qt8YXmrmmKtwDbXMB6tz6QIibnVjrzsbK2S1%2FTgWaPk9f8SJWPTEZLVDFZE0Gxxih86eV%2Fu12Olpd0%2BoWpDgSyD70JxDubRtz88aeMvBkF7QjE8ieLJM%2BR0kdL9ISkwnbI3FKgNncU8CZfJ9OQBuCg1HE9gZN6AeVaQrPvkBP894gFXtQP3pv1GbMxBuwMDhM8HNvQRKrvhsC1XqtSCByt3LTHxy5WAbcTbkOf6l7GXuABn9e1xrPPG6%2Fwuj4hyvN1MRzQ89hiaz58JAe%2Fj3kq2iPGdSqqbr4b206pjNrnd1R5bP2mU%2BFWuHsGbHc41ZmYr8p1mkneIcPzJeRROROjqraGXTe9eBJ3crZqojZYs7JiTGlAs2FDBF8JkKPl7kAITHtUHa1zvd3XNcAwR8illbyPsQGSbxiBK0avQzfdam7MrnoMEmbFAnyCTEgUP4xFrSSQLt1fvY37DWewWlB6TYoJL%2FMEU9BO4xVJRrYwU4JszEy5fPnSWaiwomfLYDmShrYuFd0IQIkpbPT%2B6mYr3cue6c%2FFA%2FAP9DXH5WRK9GAsN5b7som5OUrJRlUBHgL1OLZzHUowymYt7fPH3TQtsuaNf5GHYpqb9lAvMCQonSz5gR3UcfbDTWFdzpLxepyk96qrXAwqdaewgY6pgGlhFdMxiKoFpRxRUmUOM%2BBJSaG%2F5wg5BfvMt5MER1aTnEKpNI%2Bis3%2FZanG%2Bd5Z3UFWY736F0SOFMfRpknhLLpDP1pNvb32fQJ2%2BMDQhe5O6INU4eWWaOdZgpTbW5F1v6Jue3LNpRHZvVOKfaEpk9TPpvajXtNTCXKfUMjCFuUC2WFDUrWzI%2F%2BEbvkLqnz4a0pFCc6D4uHS2IhUuI7gVcJzCwLKByg1&X-Amz-Signature=19edd79042f2bf174ea9be9338cb801f237ffb5a5fa1c616ee58b6d997bbc15d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
