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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXD33TD4%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T131740Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICiQlYApFuKuf%2BMgZq8U9nWgr4pHOYJb2WH404uvvH7xAiEAlsg1kQ%2B3fo9Z0N8E8YRUvE2HVAQQ%2Bnu2C%2B0T2GXJMrQq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDBRG8fJlS6c6fy4PsSrcA2qy9%2FCCn53U39JXSVpwcqpVA5cZxRJ4eMy3U4zPyVpgU9bVx4CNcOJO%2BEXTv97n2kNER6kVMC0o3e8rIlDq4qgVZvjFUmPKm4yjN0CdK9Fe7NEs93SfV%2B9K5kW9fa1pZmJO8ONWYPXaUTWyn8YXeiOF7ZmN6orQJIVj74RRzl%2B9I%2FHVouj%2FNsvwo%2FWuaqCdEkJXW7i5lIvmWNhBrVLOf2TgV1d3kntUSnzN8XWry%2FhNB6fUGsYiaO27pgzZJZV%2B4EZTT%2FlLjRiY23ZG9Ll3m5l87mQaaVxJ9S8Zv2h7SLH82i7QyXXSmC1kBSNvD4KlCiy4MQK4BcddkjzB2FqaOF8EOmLHSMWk8gYTAFKN0A0rzO9aFNblpjRQy9oixRx5Yh3skfoNKynCNlIjyNE9NDRbodSuAmcKz%2FptZnSKtACBdBfDC9lMV%2FptzV2MXbh3UdKtwWYbHz6WWd3CwFjRtGzjSourgxsCBG9h10Wc9%2Be5IMdBD%2BZsYfognYWwlBKWnToV3pLwdY0T8AM6r240BWpmxAl%2BG%2BVYT9trGLi7zP%2Bxc%2ByVM1JaQtz8YdMpPuzBHjwfX%2BYa9MG51PBG7irhnuyJj14v8pKj2O%2BN25bC4cet60IQpHyBHEOC4fQkMMCWob4GOqUBhVlvJcdb2zLMJNnklq2zbZSc5CalcMZGdCx%2BSCxWHRwOWKiQ5TywcDD79Sqe3%2FYHS%2FDs%2Fj9dRxgI6J7b9FOs2ANZBYs9ZG%2BDNoF2pGDLDHZVtUJPs1%2FJ4oD%2FD%2F4sR0WVoKpMdQnfqzFzL6IpcodVytjpSfRSCo5RxkjIeLzUKQ65S82SE7FXMN7pnt9gBo6Su8tIDwrWwUo7DorR3YVINKUvmqUv&X-Amz-Signature=60d1d4e94b286131e9139169ce35d7e1347a2e55f3c4c9595e32cce6ecefd842&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
