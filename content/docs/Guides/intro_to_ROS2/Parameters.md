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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664B7H2K3O%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T220801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIAvxMYF5IA%2BTYZ%2FJRpWkce%2BMeFoomClMUGNAqxMperhGAiARgoGO0MAfg8TJDLQ60D73el16KkqngJeTUI18P5eRrir%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMmW1OHdgZQHhSed9SKtwD5SgsIvQjhiUbw%2BngxO%2BdmWq0lEIBhCyrEKtWdwJ1ak9ppr%2FDMmYyAzwCLog8O4IfE%2F4ewWqGWXsd7%2Bjm%2F9gmWPhIFF5r8v8%2BjqY1Qo0B%2B9BveNqblRyVYcFcGK%2B76l0njCFuFht9%2F1HhUsTosJTIZojIabJzKaAib%2B3BsuJcFJ45f8st1njW%2BoJ8CNNxJFcJGErgOPClld5F352gumutF1WNW4sf99UzsP3eC1Gx8n4iU6jP5E7AmSMAFdV%2FnHkHrfvH4chDmZ9%2FalIixGYL7Di9OaVQIssuu7OG%2BLKLhvZ%2Bh2iG2oA6UxD6txiWiNGFePt1gZHtiIVmxy%2B%2F8iwO7muEAenOK%2BcWLiDGcJzL5Bniq5vx07pb80LZDGgADixmGO1qivFGsMij27sMJD1pyB4UvlgQOIx29XhOsYDyrNpgRiAS1UnH%2BDjhfX%2BB3EiI4gtjRIBHyfd9TctV0ece8VERa8rnr7XMptATCOVSmaTFm4x7CfICsnU4rFQf0D4q6wpagVJJlM63wpcoDqgCrdO%2BxjwuTTOyPf%2BdSKsS7%2BTsgzQKI1hJmQhLgaB7pMVJMTss2LzO5YQdwsSLCve3IgNsxSWj%2ByM1MNzX%2FyPlrcQBXQsTT4OZc4B1JNsw2anWvwY6pgHIlwFYo2jtR8G9%2FLsYhlGeK8QKrC9KemNRKQeLHW3P1Ea7HwGv8Gde7bM9ysiwbiQnnNtqNU73gbDokkHuBVZI%2F4GD7DCXA06vqSv4TowTs6N3GtTtCkxfgo%2FRdO9PI2BoNYf3gBFRX7ay%2FdU6rGKFu4u9sTuM5uoe7Yzw%2FXhZgda0HuIibXNOf3dSB3EApZ4uXdczQHo01bccl0G0TEtjYd0wznB%2B&X-Amz-Signature=50bb440b431be084200b6e08820191651cf7e346cf50df3007fa4911f00a2b56&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
