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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFMZNNWT%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T041852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBe%2B1TqCrGQiMQ9yNQL6LTZakKxqrLgdqoYw05HG8Q5IAiEAj4NVnKpoVnsioCDolqmfOhxumM5ikEmaR0HhvEik2IYq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDOBhwGP7o1IYP2gy7yrcA%2BV8t6pKAdIR%2B7nTGf5zImn1Bi1LPyyN1txeQDT87SyN40xRfgWBCKpa10LRSePWfCJxsByDdxghkquZRwecAcIQBHYkBKOhCWstYsiTAxHKOOa6Cr9X7jzgUK4DhnvnAvZGTeymb4ZYgJlKDRq%2BMc988BdVFPJ2Wo1Y1HNUZnB6i13%2B0pY84NKp9H7XtnPvzlYmTUe7B9ERcktCASaWW8xix275fUy9U9plt4fCJiOfpnOhrEYBWBPieecQ%2BTZutcOMlFi6Muk6yX8Wpw8VDOTclY6Bqsp0I9D1B0fniGeG8tbqTiuOY7qOxJmmC%2FQojHy%2Fy4nS07JLZuhrzsDcLQ12R0h4In4a5xsMHO99suLmx4PiqLbC7%2BBbXMn2wFpVaPfjLP14%2BVpa0NWggUmJtaws6LGHpDQZVpSuNM0VKUmWpquDfBSUsD56pR9EiDZzaB0KPzQ3nt9YOlcnlSPLGb3PWHItLEwTUdGrLMX3CP8U0NtieTGJh%2FBvxzTGw0fRb2N2TvM4bTltcwTZ%2ByT9407VJFBF3pdigNkPcbGq55pvs5RUW7XopF4WhMdH0FIvKyK5IADcgsjs1PoJlR0wAvIlUvSNylw%2FLUED6G0mA5Mricj3ZEw9i8Tx7%2BYlMKmg%2BMIGOqUB0TBjNy2uWqdCc7RBs9AmlSWw6Gjzh6rRgkjOyPtxWrOuDL1TBIj7Vd9QnLPb4m4zaG2XZgxqCoufh34060IpSJTjnoBlx7FW911iXCWGIWGwmPpHUrLwSPEoWMM3ibIw2Tr77vX9lllkh%2BnJT8uSQdXGeLY8QLZxUgQ95niwe3CZ%2BwhO9gtSWv7ewQX0H2k8L02rvgdXjyXz68WPUtTgl1GBAZ2x&X-Amz-Signature=e959e4511296f0afa57a7ac89c46baec7951cde5ea6a660994ca10488f2c2d8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
