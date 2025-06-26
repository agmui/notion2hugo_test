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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662HGLEHNZ%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIC5IDcEMHeijOVc8wrhqZ%2BWON5IvtdXK3i%2Fxz04d80PGAiAZ8FftSjO1%2Bmg%2BYUMQnyltv%2BF8nOxgTyEYMR52QrYSBir%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM0YoeQ3UmkDg7N8QBKtwDIHZlyXR8XMx9IM5%2B376YqiJuKwGOjypF5aAIgI9oAB3X04ENXH5flpZqSFO2EQFA%2FwFwy%2FqS34r6PsbAl%2FogFnab3o5YJxbu9mYp%2F6MI80aTHzkTAmA2puCwnoVcc60iyTarb7MCy5tcaVD70VikIOhEAqERhUHTBHzYarU454QAYO7xcQlecb429pw3jDuMK4SwMFGz4HZ6bR7Q%2FmmypcTy8aaRsTAD44fvEeD%2BcMLBZXpAX7FbB1unCult3WfNuOdP%2BC2KV4pEtLSMFDmPVKHCpfNLifeiqhxrL4wMkwh3SJqImhATpCqmTAEPM%2FlAHH%2Fn66NlUcq0qas2yBG%2F6XAwOkdprJc3QPQLM3ajxlRwmNusCaTGp9NlNTj51HdwQ2wQmcxVCfeXF2DfecVU8mrUXCUfoaESYjelEGWu8o9ao4hNmM9a08Pgjv6WqbvZqTd27yV1nLRx2W7LkbIRAvc%2BXnNxyeqy0yCqYJ7xLgm9J57Zm9seJpEXIHJ0bMXTu1sKK8HbQiclj%2BbisufpMB68gnF7cYCAnmHCtk9stGhHXA5KMn6v31klILiY6iELdEobe%2FqVqh0obFeJt6OaHfb2UMieQFCpbZQN0355pYgiwB%2FQF8jT6etagLAwmcz2wgY6pgHrHICL4fzAew5QjLkoQV%2Fpp6MA3lrP4Dfs9Ha0j%2BpUYGv2liElYnJhe6x9GQHtHk8FW3qrccBlmeyy0lWFTmQLMbTfxlq362nqJAhCToESOJ9OsT50ESLeE34O2RpECgWK%2BwJnr0Oqhm45IsHc6O5xHd4lF4PEiPgsfJXIiNt561GiVjg0fTxc1EEoxjaeSF9K4snDHSyhM94rJsBRPxeJTAgYhpH6&X-Amz-Signature=cc4f25d6b00ac846daaa5b0a226de1398144468761529d5c3757dcf3bfdb92a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
