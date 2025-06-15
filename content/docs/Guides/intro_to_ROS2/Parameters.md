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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TX6CMHM6%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCN%2Fcp0cHTTfbF0BJPzGPA1E60fapgFoqvjBfIcH7boVgIhANAg6kctxzmItDVge8gylmHMmYi0Qk%2B9NQmoKrHedhcDKv8DCEEQABoMNjM3NDIzMTgzODA1IgwYwFQnrIRcD8kuVlsq3ANbr0y9JnpLi84EcS0RN5ZtvKtabXlUtpaeF9fzR4RdRisRWKjviRpf8Txe%2FTMirf9oyM%2BixQSl9rjYxDUcxJDDP3aYQWxOBldgBJtAvGuzIHDiqs8SKnx5ecTEwq5DH4YVh8pbY51VB%2FDTo7W45fAEKeVgHZFnCVQIa6X%2FDvNrq6Ebioz3hKS50dHGbSpmse3bqYgd7yzCxDVQj74YOHidAo2XCTtxV6HngMTI9XS2MtdYBN%2FAz5nS5wSvlE6UzzZxl5tDqXJYn3YdArWOFY4uv%2Fz8iYBKesDpU3CtnxVFwTQRlpNAy4UnuiIXlh3JzPZX%2BCgOlOD8i5K4p9JH%2F9mEV6VS1xYJlCI4BFN%2B594IqlwACWTsp97TEka9yk5DJ5ddaHvLmsixnKmdCtnyQOFOA1AS6XXav88OLLN43nqrCB2kv2qsEYdr4DjRrJbZsvhjKLvgpC%2F0aucgZFaenN%2BS3u%2FefqMrzt1f8fqB9zlOVUuUkPbNNA%2BV6HKQso4k8k1uhoeSLYUSXyXXrQUB0UKr65DUfD8v8kpw32mH4wPlrmQdhjxfoKpVZHGliEnMZsJMXjEXQrRIJLUaXhSly%2Bz1VLhUsyJUl6H6h8k4NRpCfgM4klLwrJkz6G5Q%2BjDKhLrCBjqkAQzd86V58LYYjtbouslTYUPdEAvkCg4AVtot4%2BvIX7mP4z3XbXyZ%2FnUtdkzwscDC0yEUEEJIHx5Bdsc3HBrawjWHE9DarFWBYudnULkite5cd08GqT189zy2QOU%2F7ve0QMapSQZkpZo2e9qaxgqvaKs%2Bqrsnbo%2F2ETe8K8g10FXiT78rNtVemgHq47UShYAetvDSuOPOAhMzw%2BwxJ1f2siszjVzz&X-Amz-Signature=3fd19bc7aa0a48c598bbb36ae2a6cbc3fa5c2bbd3ec5e9d6ed94bf8c5d440cef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
