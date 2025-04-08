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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQOT3JX5%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T041044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGwxlq8PcCBQ43kLvKoANfWMZ1bhZhWQyMy5qm%2BdrJk2AiEA8B4Wc2qyW7hcNGTVGtALRWMLcX3k134PXXZAIlH8t08q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDCd5hYUikIWhOUydAyrcAwq9Y%2BekTUzUOKCMduKczHY27nAQ37ZRRcm8buyzoucn%2FD7lw5J2FYlVttz56X4k24SW0yVBy6cJmU%2FzROffVDCFoNmw7xluWsBMktzQ9n3s%2FjqU5UAXh48PBOSJqWAU9QNBoC%2FIsSY%2FRMjIs%2FE2UWxoGMhDPim%2BomdzOWdAAXHP%2BMoyfn6H8fbQMmFYIsWNA54ACVK7gcc3m%2BOaDIJ84xbHeHg9QiAZ8Vfwq16zCCA2flix1aZ8vgl7Y0rKESABpc7niJ%2BK3Ljnl2icerR%2BHlQnfcSxA4IQdk4Byb0hJyBYlwXptiUFBeFD95qrEvsvgdlHGIZFb7iX3IxrsMarOhevX5iod%2FuVhkjp%2FgZ6diS7hXzgTw935507Tds7G7uDSIgy1putCwcOXd%2Bg12o6larlY46ouXEVA6gj6RfwN5wM8eqOFqAkFIsipM8mDXc%2Ff1Hq2%2BXXqsno2lWXB8YvM7BZsBYc9nAUhtc8v6GMuyw6s1ccsnnc7EWONfgnpmO986kupDrKH57NZslk55aDCx%2FJbZvWPhTfI5hu7h2fEm9ngLNplFcu8QqSBO9yWJ%2FAZ5wEi43aKLhxVLROT7%2Fj1etK1%2FaudZCQopqAd9NzMNtGfvv2cXZl5Ui8nd%2FnMOi40r8GOqUB5bk5GXE%2BP52u4yW5n8WZvYSFuYrmDxWPT4JnGR6AHE2u1s379yaw6zHLdSH6EeQHB7HpMzJtdtteQDmrUK4Xf6P%2BMxp3M1qOEfifYJb5vrdHpNtHcgOXjGQ%2F8WXKiFhBDiCGrbA3Lc%2FnGqvPb4N9hYzfX%2Fe1ue3Iq4ZXZPlMJafpByjJS3Xsj6n6QdS4CwQZVunkpD4Y6NJF5JqbpL0xk1Jwd9nR&X-Amz-Signature=af561422bccf0f2dbd2a619c8e8898e2f19d92faa1be6f1e2d9a82d7112622ff&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
