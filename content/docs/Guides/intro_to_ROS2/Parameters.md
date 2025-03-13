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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWVSMD3H%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T003810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBstKIvPlfVYWbgBCf7jE9dRC5gx5RH2xbqFjV%2BFwf0WAiANnqf7Rbuc5G8PHCEtrJGGybrIF8KYe3MN3ikaIx%2Fu7SqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgLKJRwXXkxv2zWStKtwDrAXXDzaiseFvIcOp0aVJKnwwbNhF9CRRNGJadyCkykesCbC8ApEqES23BRCdRadjnKSyPdDipp84wP7BQlrR1vvhMZs%2FLMV4J7Aunii%2Bn87yvQ0oaFUoT%2FmgNHQydxx3lj5ztqbnGAIVURDyvQN8AuHnjTkx1CdTOhuJlBlnJ3p0lIQ1tlnKaOwHaoJaKl7z0F7cxVpoKkF5R9UV%2Fm57Sk3gJHrc8Wct8FYDqG6wIgouT8Tdyd9N7AqLFvmaNvUBbPZ6Q6V810iyyCS9YDRuVeT%2BIC6m%2F%2B7eGNl27kwGw31FZCsj18A6HlwLvJmHy7bEJdcaCfx%2FGOeQLYl8lQ4HV%2BBjdCPPdpP4TNIXwOxtBwvB%2B8iTLwAM9HnYAS1LzF1A79DZ6JjX48WlEZ%2B4BqH1yJsP4YDRCfN4moIMvdb3EFSj2qNF2YbzKIljpGo2rthCkEiOpDwc5pZ90BIoq9o7etupT0KeIMZahhfQvEszJJ7R7oU7uMfVtRzn8yNzALkzYIlG3rJGXO3FmF0bXkw1dQaEBBwwaMphzg9YMMQW77y5PiU4BUAq%2Bj81662nRksC6%2FiADM2ax32lo3yOrkF2PzCo5pWc7%2FDtNugODX5fn%2FiQS34qTb2c5ED2pVMwvMDIvgY6pgFyKQGs53uBOHGhWJrr3Ga%2B6bhWhPh3SLrwm1lj5nIdQ2ZPGheHGtbBt7WpTlHkiFyniFnS5BHW0ae4MGxxuTvbBocxUPTIODOMKhPGAqnBRNne7%2FR53waUJRV2AO1Na9FuLzoQjkEpRVpzZNQA0U1BEw6oU%2BPtky67k8dGb5WpYW2vjYxI6NblBkC5nPVp9b70Z%2BUZ8HuwXBTrnRBR0LCJBrATzFtL&X-Amz-Signature=d002a9af1ecd9924feaaf8d17d4431572bf6bb734026c8e2f81e720506544e57&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
