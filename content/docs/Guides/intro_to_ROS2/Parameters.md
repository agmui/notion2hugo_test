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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674FVDDEA%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T131742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCICghdVpdpDuw4fWqZIETFPL4prahh7rOg8sdj6iBIR54AiEAmUcP9nEP90saLN9TYHuwNiFzJCJK%2FZV5i58Z7a1KMU8qiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC8sTOzOmNKHugRviyrcA7yejhUVneKbR033GB1QvaAYL3O7WP6%2F0VkYpB5jpCERaJPtnKg2wjzKGHT9pNFK8utJrGfJfeGlzb76FyXFYPCgCHWwRXFgicLjBDp5kZ01ufUPPWcRDlOvdNKUbFkmqeZpOJc4J50eQOCUszTbYNHPsi6b6VhmaCSQfnH9oFcQzOdhZzvupZM5879OFLNTWxo7xrKp5aXDpBb%2BVjl%2Ffl%2BdLtyHo9o7l%2Bze0qk3yc6Cx9GQOcbp5tEEd%2BS3B15QucN%2F3FlZTVV7vdMurWR14MB7EGdAavqTsrl9erNs1D20%2B7da9tnK4lUM1z0luQdfvju1CcDBfvxYMw%2Bydn8%2Bfbe5ipaYqAY0zb%2FqkP%2BKw1Vb2nFgeIVdRpT1lrsCs%2FrgtrNKnjY1S0n%2B2wBB4IY5UOLAsh1y78BhYV8ojXD61rUWzcoh9%2BXjzPIB2GOh4z%2BAOHEhkcISlOv5%2FpLkA5QCJF%2FUkN5T3UO6aRkvsRDIEhni0ktKvIUgTxP%2FIK8Psp8OlkLy1tHReD2DnZKSlMg9OT6z3H8WDatTxW%2ByY%2BpiywLOV8u2YGNuI1lQsyW5MAIMWL5vDD9%2Fg6qThxeu4H8XqTFjdaHJfCUrjEnkWRV9zc10iFoHakAVYexvIVNEMO659b4GOqUB9mH8hze5Q7tpsQiPHjESgxAAmUKrq4cmGt58dQ2XKPhepz4rdGttR3OO2ssrXG57d8QnfjWBtvrzKDlfGn3hN15DzHBCFhtDorD%2B35Iedtsbj2ijV5t5TmcZzpM%2FiaGENmOFN4hbK7sDmNJ6iAJlBO4PTbUzoUg2s8vu0Lw3Re1hyLTlva5DueYzpQn6NczvVAQL3x47gI9nf44jm2DnM%2F%2FRC9XS&X-Amz-Signature=e3f7289185c2291c224ece129739a5be47758a5280bb2f080559129948138a10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
