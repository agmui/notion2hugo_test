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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SO55JUR2%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T181152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDa1T2GWStQmt%2B%2FZ2l%2BdXJu2%2FElqpkeA5Va0FAPqgy7bgIhAPbP1LLBJv%2BxdrhejLkstAaI1JDyNoXcLZN0uT%2FmdfL4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgytGcBPRal%2BSJk9DMYq3AOj9e%2Ft8fSCkQzan%2Bd8k10FIB47Xi01W5sOMG6ZguZBWm67RK1JuJAHJv7ndS7%2B%2BC0fhc5i0VcrVVh9w1ydaLz4zMpdRpGJwT7fe1xeOnx3HLlu3YTjdGR%2BXG4PnsQw0P2Txpss8VacWH%2B4vW35ejJjuDl0js4bKcnSvFRgz3WDsWj2xG%2BJkPOTYiyrmAPYYErx9oRDb44GLDFupGZjakFiLITXswfWSfwTIdHerJFXqEZkLQ%2FmiBg7%2FNOhac6ZBfzEYHRA8PwSY5fv6Wn7PS2drFEJIVNcjQkmAtqd0RxDeBeHIFlpSXBdGESBKZbosHKZavrDeaEs6WskkTGUkZpyaqWy0m9Dd9GebkRPjlPPEbHyIJxk1KUowVoangsEPg2MHApKXfDsLyBj9L%2Fvrng0wPzI2loOUAlZ4IbWP%2BLzjQi1rrZpTYnzqL9PQ1VivjZev%2FeGhwkER6kU8%2B0bC1NoeKVxQa%2Bp89bkDuHkptFJfIBaUgMqOiGOb0eqHzDZCvXEutnJyy12fcjCWkSp7VEwqIcL7TlUAWeQ3Lp75BtCFsgdpzBw7Nl4uiB8eQaW95CMCGxyO6VwprekF4xQVYn4%2B6HDFXfFO5luHZMX69UjzutuQBadHwbrfpKUlDDqgZnEBjqkASUb1CJfq13JES1n4IRE%2BAgTf0J5fZj%2FYXpkaQ6GV1R7R4kJ%2B33Pvb7Ya1wkIb8Dgg2%2BGHmk%2B%2FMZdMLvGCFnq9guWJ3wZ3I9yYJE3xdRNXPgLfc7nHbbD46kQ2LpFAbCST99quRl1nUGzsVPVc7gsIcE2xV7BmFZUvrPTdteTw1apaKSeyP5JuCzlTadZ377nvJgO3EtUI%2BsMt8jkJAEa5O734%2Fs&X-Amz-Signature=9d986baeefabfb81a8e5baf932904a327fb49187682763cdbf6147f64e6842cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
