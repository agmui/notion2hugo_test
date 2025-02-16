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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665M4J2TJA%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T210159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQD2M3fkl%2BN9LO9tgnh%2FJTYj2%2BQajy4YCQNGcDl3u44odAIhAMShXr%2FQxX6XP%2FFAoHvlbiA56DBsjwPSEOy2KAAUGjx9Kv8DCGUQABoMNjM3NDIzMTgzODA1IgyWHYbr8WXNeT6WuVMq3APO87Fe%2Bx0DpJ3DYjD2ap3LujytpsikBh%2FzbupvRgDQK3Jvjgj20TTXaZbhb4ZEH%2FNMA4i6GmvyKU9yUGz104xtQhYTwBCqq9CYm4p6iv6tpttQG9lNq0psCd8IzL3n5YiGD7HXbEzo3sfT%2FePAoA256iBI5NrXQjCHYymel9WLtt%2BfE1Z%2FYudnUb34tK%2F99eZQi4mgzjA%2BSY1hNlgiqjkIAdEI87qCRDZA53mrGSlljuCH4yMHukIa2i9GriMfFGi5jrTwIy9DS0wCyF9vWmgIveX9mqwCJfIq%2FTNB3DcnA2FH6w42%2B82Jvo0jO2M2zcFqjXzvOPB7Up6VznwehrblOiVmcoon3humCwG4uhXJsYyCuqw0JMCUt1%2F0v2CHWmnt1ubNA6HGHMpeZbd5NQPXzX%2FzFs8neNAF2Ng1HXADYG2tH8AEKMUmQhAuYUvZ5ifzycmFTdjnSGcwSTiI6qEFU0qPpQBygVAvaabDxBncZBDUQHLRH%2BNjo%2BlYK92bzXi5knAjde6neGz72kMqC3MGu9Ludy21Jl3%2Ba3a5It37bW8gyzAFCaP8pLfW8OvGUDDOummSzD1GvOjxr2hlrdBtpNzmXY6%2BscHRkvGQfDPPWjEwMQ7SR%2B7KV821KjCBiMm9BjqkAYVzhfo2sHSOk%2BZ2ZdA2JKXxhHzsFgj%2BLSpBcEE%2BUVjHFdTD6SLeZsEORt5io8Enor7Y7GWkDbSVG87cil6XVDfqolWc%2FkyshP89QZoq3ZfmWk4p29VmCYmISbHzF5GkJkh9I7GhdCPGHvLc6PVa2aRMH4ELNiu6Ckf0oEqTmOfkNFDQNOgB%2B8fg%2FThwq2iNhOodEwpn2muf%2FDRF%2FE9TtjsTuylv&X-Amz-Signature=32e77c2a3b061ec3d4f8267208ce0db640798a1198c6b4a65ff409dec28bf280&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
