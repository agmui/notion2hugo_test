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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEBEE7J%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T121530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIFPoe2OHR%2BMpyfVFGBSa4M5uPhJsh%2BRJJ6m0mbolmHY%2FAiAiw5S4L%2FEn4dd0%2FUyvUZ1DkcogKEvrA3YuPb77y%2FO1RiqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM3pVSjgKCpbpTDzxrKtwDcPfHAgnK1gNxFni9oQdcgct7yzJFJt%2Fosin4WTdhfPAYrK0VgTBkP9f%2BtRuMTV0ki2NKTBw8g3wyULlcNGVeOIcB4ZYqcLkzs5cSkIftEUNf1h1Uc51Ai%2BqpgSwd2TaK6w9bsSQ%2Bin9O6q1trNwWtR1xCOYuVCVgJVXi4zbbqf%2FqjxWUOgeZCR6wAJ7H56jUb9woJAEm0CgtwYPxujAN5hfiNMEH4jveX5W7zT4kBmQ6OKA6u2NDwAUO0swNgl3SUt5PoTaoZsIgM7hLdxfOlypkURvQLg2mI9wuK89e%2BkMqaTDwS0G9BtFlXOdh%2BK11LeVIESp9zy6q2NY%2FHATExCADdDw%2F30AnfBIM%2BRX0ynaRIpDcApd3jMSTXdchFo%2BUaj8JbP9nZwsiy1VXxvdEQosSh24sklq0kytNAMHzSqEU9y8EyDFmi698pKyFsYmrPH0lKEozR%2Bb9SPy68ait4Yqmp%2BtHncknT%2Fu4f%2FoQMuUURqoyIYn9Q%2FHC3cR4x2%2FUhtnuteRSTALLTsA3j3Nn2pwwQgm0BVEJhQAuL5xZpfBnV%2B7BJ8ozDAejR0F0it1jzkT%2Bf9xgGAjUK3LcCjXF78wDzOToS0gpzgTZdYoIiD%2FqNvVsBpeLH1hrg7sw%2FZyvvwY6pgEUScYI8ocJ%2BcjWwWEQjs4d9x14l3qvoE40Z7E6K5khiCvHRXjtjIKtVkDZhCm9cyf8dw5p8j%2FZ43t%2FYuCAiAoBh9tRltn5z%2BBQuZ1AGFArmoN%2F3mwVKIR7Xv8zYn%2BEXlnRVUbbHS3Dj1FLiYmRmAh3MQQz4BFTItmWdh14QoTdRm7iz4mOYV7%2FRGuNEjQsPDq8cn%2F860W%2BnWQ%2FKWYM6GLYhOMy1W4%2B&X-Amz-Signature=0efa5570702e3202dc677b995db344bc7c1069e0bd6e3fb8681295b91c44c784&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
