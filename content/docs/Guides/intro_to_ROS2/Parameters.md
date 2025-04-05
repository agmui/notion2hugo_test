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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QSPCJ54T%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T210200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2FnIalk%2Bk%2BCN1VaCTB5rtTaYruTywxrQjrKPqyPET8TAiEAi9S%2Fw%2Fi637XZxx%2F6T4d882Xu%2BhojYSpG6Sh%2Bb23fqbQq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDKTnWyofcBC8kSA%2FsCrcAwQ9cpebYGzHkKRgpgYLcbez%2F1A6rULgXdgKEIsHUrD%2BDwlTtcJf8K1Zeg1bGKJyk1Zo5JGk4WjqWM2JAAc3cseuy99BsdmnUrfmdtYS8lmWaRVEtT56xxSyLHzjI7O5QW3X%2BEZPtQiP02mrgeZbmXSmES4HLJV6fEbTU5n9ejes9AzohhL1xZztV9OwSfn1uIDp37clX7qaCQEyqLPMx6ZzbjEVdAx3XdTf1Ha2ETp4VpIfZNPlEkQBu%2BfxbNeGoZOfMC9JXL0l3b96HxjpTn%2FTh3C0o3VPZwKgnY8pyLtIw4%2Fc6PgRzZHKmuUWkn8OxOQLxLhsp8mYmuI2ZLQ7nCHMOSnqizt1EA1qQ6BpExNFbYjdh2%2FUwsmAlK6tA3iOF2mB9sO7FOl7cSQ9YXdkFZ5enAjURBu0D6Qd1MfDdoI6P3OWxtuh%2FgAgqdBWb4cPiI%2FLOuxWw3zyd1ecmTN4F0YiRyO9HoiC3ogAYzcJB4mPg7sRLkWN6KlnRtlIrW2e8DVWIx3L%2BL8gw%2Fg6Y4wsOjeYbudSpCvLw1cDuzZ3kN9%2FiL%2BEZCEE7jMFXgGITypHI9B3C8Uhd5D%2B60dQYfIKmBK6Z15WQuv41qL6KCyKz2o7Rq3C6DmcNoVYDamTMIaTxr8GOqUBvX0CltiJDNUpDIK0QkLwpvpLxLbNsrKrzZYiCO0wMQ8HN0mhAlQDFDdF4oGJfBeuLw9ToPQFcDndYKcp3wctdF2R8H%2FKoAchd%2BYLf%2FfaNAWAuliMz7MAw6OKsWlPDTjWHl1t3448u1UDPZ9qKrXZCDAAannI7IBDxomJxcNWTp4ZbVM3qn2T9n8dw8S9KA1fZ18JcOIGHSkDm9D9nDrYjS%2B4VEY3&X-Amz-Signature=dd3c900651bee2a54c48a85c56695c8184c2dfaafff5ba1a2fdc94dedc613ef3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
