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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDWUPPOY%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T041006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRqFoyJenrep5C%2B0XyolmLt9KGM5dleQDN2mA9337MlgIgCssSqThwu0wt%2FOek3kpxCeLsGCPPvDDPZxoQXzP9QX0qiAQI4v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJI3CIlnp35Mf60blyrcA%2FvhmZg3sh22mS978srHDFvgwUIv7XTundQew8o7O2GXwD8ymIaI6%2FsY%2F8lZtN64ki5eK%2FyZmnIAS7OLWcCzQkooxEh6R%2BeyVCfVpNDvQimNgsEKFlee84impfwjbHc3MiC093qoROSf63q7fSCXHXpNepLgKFmU4z9MOqJ75AOkOS3QuPBJ50XOYqK0l3Cd8Kxu9vSZgI30ORik%2F%2FV6Toam1rqM0HYvznXpCee0zOnO1wjZebelZQ54dRfWq%2F3n74iBZkMdmPdc%2BJHQAtMjeFRovzjc13FffE8F8DKrGFZZniLygAygNcmpbvHthVKTldOnqpgg1aKndyv%2BeVVrQCOgGOpIFtvmxfqIVs0Rwfhmv3EUhNlimmrUxfbhIwxSsVWXbxCA4R3JO%2Fdh0tBX5xPotMVGwi4uFm5zrNYz1yAJ5I7z00m6QkdPmBf6L4dIHi%2F1LKmV1%2BxX41XT3zqj67kmmL%2B9ckjFmELHGvYWe8LaCZt9jGdhamLlvixzjO0XW69j%2BLX08smIbEJWXnryVWUQzSIUx%2FWeAqfV0phSNiTvAA53gdUNZrMqbbc4gLZ5qTF3lnzNYlQTfap%2BrSroUiOwVHFe1TZNxK0UA%2FmV%2B0eY%2FAMppTBqZWgPsssAMLntr70GOqUBzgHsJ10TZuqnmzgkkCBLNdU%2BiiCfTJla8e14YM3%2Fc5jv1vuGjS6wF0NRoxbaj515Ebmvt1BjEckeBB8NFkKNaFRxNCL3UR%2BOAFXMNi88iZrUcd3gG%2F5iJ3L5LLSXBxA%2F%2BuhDOtF%2BITq3iCcIw812ZPk539OOkaAVAaK3tk9FI%2BKnyJt0MIiqmvyJo%2FGoPDHnCdzwsypzmTzvzX7AvQPaWBdYjDDr&X-Amz-Signature=64cfb2eb2b986b8f6666d8007981a57f661db2c4676954ece81085af2a8cf9aa&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
