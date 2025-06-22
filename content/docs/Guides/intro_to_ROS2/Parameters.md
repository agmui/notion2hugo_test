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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UAVSTWJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T100837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBWAXTc45z4aInpikgbwVU2pSeE6Z5VDH9frHniH3p3YAiA0DnfbQKqR0HTe%2BeoaYMjq%2FugaUulMuIDOS0aS8PWXTyqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbipdK4BjvCSO4dHTKtwDbLNwpsWEFdLCvBL2SUz0V7YYLtOSALSt3B1F8w22OcAxCUTWQmqYKxqOTG2%2BWfw9Rngk%2Bufy2ZEEciK%2Bxu2uDLBZumJs8M7k5E%2FqVVKUyhSTDA4FTWikmHyU9nnJrFkGYSFI%2B%2FQMJPnwy500D0niQQj2ijhlnNoXvlQKSw6ak7Mu903Rbv4RJhksaXKfiSkqbGk63PJldSgEpR0ypqs%2FR1m5hgYQH9WXP4zMIvvTfKa54fFH6evCN6%2Fz5iJH48YKwSxY7CyfeaCJ1jvQ2IsFlJcH8ag0L3CccDtrot5fHtLFtmX682Jw%2FzA2fUNrOrd3sYVXrerevreDpnxQSMBO2LGDhk%2BdvAvlasmGAkRotj7MBcNQuUcl%2FiigC4EmS2R3MpQ%2BA4isHvpOsb1uL4PvcvjaZq%2FRYdFZ0Jonn8aXHEOTCzr4yt0N2bxhTjob1Kp%2BY0z%2FDfsPVDKsge1m%2BXJiWs29NMnErKKTGYeiYJ1vN%2BvNay40HFSHS8IwGHZA1WgpqcIJD%2BBXZOYO9J72smsNe87YzeZjVe%2FB%2FjwYR%2BmjI%2FbztjZvF7Qyy8ElE8bkOcW1bLPISuBpIlK5jSHCdyFFsWsfANZnd5NHbgZH1E29yDfs1e7ehI9%2FlMAbECYw3qrewgY6pgGXdbhjPtx98rmRlMHC90eKVREMhLALZqCX5r0v1IepPykNCPe70RJYnr%2F%2FwM0NFMVSxwD0X6xEk%2B%2BXJWCdxNb7p3HUZn2tpSy0Z3o4OZhvyDNQoi7gX%2ByrlM05CLqnyljRJvXMWymV%2BQ10eARoBWhSwrrVHBT%2Bwo6paGKqL65x9n38omFACGZ7wB%2FTq8zET7zorHzBLQjAGERci%2F18y11M%2Fr%2FfDwOR&X-Amz-Signature=dbc4187ce52e47f5ade81b5f754e1649772332765a2db6373d1e932661260391&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
