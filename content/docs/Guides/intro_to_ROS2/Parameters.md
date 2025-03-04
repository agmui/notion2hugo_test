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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QREJLD4O%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T021458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FLXshhUIZf7o0uP8DioH1SQtTdKlV%2BAWzGMpHAVREpAiAssAUJDYrLU0VrO3WxqId2zTIXWGCyQ53fNSPD%2F%2BNe7SqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAivmMhBjQ5mr1%2FqcKtwDkONRoBXDTh%2Bcs396XGqQLE61jVbnUUTdHRVL5YRu4ZFy8EakWVklyTZqNhKEzeNUBFU93WBxyscpYRHdwbTxVqvanTNEfiSQKvYcJrpbID%2FfEgYk8lTwNpv9osifnTEmJGSJJJodMtR5zPT2cn7BZI4HeMuPorUVpVGxHxnpJ%2FRegLiNT%2BJ1WRahuK3agFU31qZh%2FhZJk667mQ0jdP6oU7u12p6aDCbXsHVuAiGcjE0bijAtcDfPikkaq097j6k70ASP79pvSvBGfycIWxXpXka2Kl6XY5vSJNjVLflPMONARWCaKJWGBJNFrY%2FQK1tFInRbYFuCBFhQDYGsqIYYPHLR3c6lb0Cz9TpKeRkWZCHtdF26%2FgNXDnr6XT8OyPJfKtFZW1MkvU%2FCGweENR6tUVdy0LFlAIuHC%2FAvjuaZmzuf9ylG1s0AkNAcF5mAXVx%2FCqbOfn6ssEtBYsp91S39X8E%2BhlA1Th55ZtwlCpP3XTAICpU7FhUswOhr8wfToXikvS2C4OsEVRkOywgJxugXPafCcUOudyqjqibn1QlUKCS0mK%2BRcEcd7wv%2FigvndokL2BDPonyRrQS37AOMesnvOCEF0YOhpge2UhQf8no5dKHgsmMdosOg637hHF8w0%2FiYvgY6pgFEqey%2BJq8VVt5RIBQ9kWm5ZrC1QTYoBzDGdBKQQV735Jk0w%2BBs7gPYzjXV4M1L6Z3kOpqT1y86K7XX%2FDqJTq6YUsqZwirXMJqwXnUIiM9sAPF7R8GvVm6YXJ%2BKN5NLqv835M3eqjw7pmGBo%2Fk3JvBnzVCLT4Fa576G%2F6wffsTym%2Fpkum%2Btsa7eOHfcSJeBGwHxEEaAAdb%2FLWZhK14GdcUFr77m%2Fai0&X-Amz-Signature=33fc8076477a8e78b629ec8dbf5996dfde1ca057683bc5ae3eff364569ef3c2c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
