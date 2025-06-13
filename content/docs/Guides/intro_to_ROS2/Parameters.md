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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T5TV5TX%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJHMEUCIQDBNVisrqnEacpYhoJy2uPY%2BCcOnNpr1GkhS%2BuiMAq8xQIgV21gRZ7Ns%2FTAAGcR4UKnJQJpvOYfBTZcN8vy04RzXhwq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDJYIr0znoXOUfQOlbircA6dqCfgFhsg%2F%2FbTj8yRCZ197dulU68AHbz75ut9961MQ8xwcUvuxSbEcTjMhjpY1uyvP%2FHgCJaThJmKn5NKHwux4ZAzNn%2FQmstc2GQmL1tDbc6%2BaFr05XBGhD5i5nlNhZrFZiIIWUr1ZrRMee8NFcTD8Etp%2FfU6aLQ9Pd6osb18crGPGOexEwYHI%2B5l8dU9J2zjZn%2Faq5kYQsSVcMWbUDa2csAtkODYzJzo9YYOAJxYvffeUvaKE8f%2BICIr3LvvwTTr8ZbD9pNy4O%2FZH48m6PBiQ0oxtbpMuC8o8ln2sE8rjaVMI8o7CbbiWNAmLPr3f%2BHo1vfeB59e3papjf5lGzS3luD3BCljOjekk5I0jN2IdG%2FCbeb2YxZz3SKL0oedfDo%2Bo%2BeL5Wy0CfdQ4U9klcC%2Fb2CFuZju7ORzpVQtv5doChrGIMbnQfg78BZ6P3g9ghWX1XxHkGwsfDODJxb9KCXMGnonqMJRwXLJn27oezRw2B%2BJrAFKKftKzttckWLcMhoZty0%2BQEn19D%2F3CCrDGP3W4EUsfK1Al2Bkq%2B%2FRboyPXKjVh%2BKzPQirhWFlLCK2bXt7oOQ5rUM9S%2FvF007bc3nw0V09%2FY4IF9eDDNwb7Hc7xOfQBtlPTCjhrEe5QMN7bssIGOqUBsR4JK5MoMh7x98i1VeuJFboVCPzaHjNt7gsOWvJGhTnVrfOaPg7v6EuNa87kBoLOn0X%2FkfSrrBnfgIpyRbg0UjdoEMuk0paPw9l4M27Dfe5qKbqpRgWd788y20RdthzThlemTveNLuword4HVZBR89wru7tYpBxZS7OgkgP0FIqiLPxlvQqIRcdTxyIBG50D2TuHzq5642RH8xtvgMdmCBgwiwKf&X-Amz-Signature=27e102f496a00088437e0ac83411064a401ae6e7db7265e624f7edc317bde914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
