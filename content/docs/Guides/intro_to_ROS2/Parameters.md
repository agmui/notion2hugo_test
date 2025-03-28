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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FYMOKQA%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjScATjJH2SDlhYWxJ75aQwnFIP1SFywzS6geF57QWdAiBakGNIlQbzuZWITUrtb021GGgSbgap0lFIrqHVSX3kACr%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMzpkyWOPasnzNFCLTKtwDlWaLJiUUHvTCIwTRCAYnQP8fc%2BUkL1pfVM1IxZBfBjdPHH8zrWtmHsJVHW7cep9xu%2F89wFowJAe4Zq1Pfs6vZH2ObH4G8b2qIHgHbYHnPZs3202%2BrkUUQHRye8BH7xvBvUS1zFgxUUycTkRtk6eVBVW6dp%2FHnrI5fYMLfN40iGbugrAVsyliVsx6sVWVT3IoRcjIu%2BcdWpChJR3GEpyqWB76%2BA5h%2FkVYHpcGJyQtOm%2FZytWD%2FlPUhNog8UOwNIQO2X6WWTGXpvyebjU%2Fiek78teRd9gcw0dLpOsvaukl4eI65V%2FwrraMvA1NbuF50EMVPVtbHzHGTTvD60CFsM%2BqLnoVe11LQKvAbi4RfGn6KnxyU3jXEmc4XhVXzHBKjIlcsD3WNUpZ%2F0RWCNZy5uBI2BfS%2F0a0sIrkS%2BYamhTFa3S%2BnbeXckVbOXZHlxbDXB4jQ0GRYTAHSrwZwCuBOc5KeqynyJOL2Z2UuqJfytjuXxQdU4NSDn9DzVhp42pxJmf0gkAP0F5u2v1W%2BOW14nwkKOwzmB7pVnrNbGHLL0qT0hb7hq4WnJB%2BmkqWUDEiB6Hrq6jTa%2FlF8jz59EMkyzK66HSH00zbaaHZnbhkRodDCUgcBORVXfSTyMKedM4w2OmYvwY6pgHFsw0w70RD7oKi276KAp6KIFlC39MWLdh6PsWhnek47mSSgl8IlrxUrAbgM6HDPMdQxQKkKRJPWVgQGfjwpJCmmhxZUS1UMF2jXVHwY9y%2FO7w5rdvRecwO3IGiEY3vULPWdyE7f0SVEYvNoQ%2BPnK2yJMch1745cuA94xuB0Wd8lWm%2BTxuUCB9G5LtUOIl%2BFmRrwEuh0Me%2F1%2BhfrMn7c3FvuQ5m%2Fu2%2F&X-Amz-Signature=54c6de44c9f64d66e8876019add00b1513cc81d38f72416820a280042e6cf8a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
