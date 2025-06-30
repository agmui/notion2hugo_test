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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2KZG27V%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T100956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEAuORCxy5BI6W6Pq4C%2BpiNgtX6eTuD72guKlSko1hDaAiA0tLPPkQWSs6PDuKNAPakTty6IUdGPGoc6nrRXuwmM%2BCqIBAi6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiU%2BSN%2B9nj788NHOPKtwD%2FAkUBsjzda6xOyW2YBTO5xgJUK4oRqfg0iFZRlnJFTD5HlLOgmctpno6vsscn%2FKqYviCXCuBrlBuuIMB5xdfOGUBapG%2BG8j69VS9aczhrA9J%2Bygd7XTT8PGvAUxLuR5Hy4Ldk17vsinxfGstcVnyVlbmiucmXRcgtkVCf21XD9TCsIC5bTzyYArdqBfcFhIgJjHPIXesa7gs6KjAHAOjaLUaB9hE2QtHqLCBoLfU0A07P6wp7tzjQGOxPVi5kZSYeX5%2FCmLrSmdc0Osv0OQu0oC6MmADdDaY3VBQuJqqSCyz%2BLMW5M4MmTqMhGRXPBh5yAzqnWc0KeHRMAt2Goc0Jx9iJWxoVs5w6eFuk4D47THMhDEyl2snvL2FjEap7sdopAH9eR1Cfx73laAtcOzSCN1prxzTC4mNM%2BwDl3mvDct2R5PxptxbuXwQaHCC0ojwewTQNK3zRZ86q6JW4cpEYDXID1FrNXwpUMWvQ0w3dxhci7RfmBjs45lwU7qX4VU9MsrkUSWX3wTDztt21h5WwOQ%2Fa8VPAezxY%2B%2BxMG589KpRJSfEvSq1aRYxxd5hsrTjASxZc%2F4EXdalMNvdQBe8PlZCbxY%2F8X3cuKYcjm%2FTa%2BM2RJUSMm4mf9zAJ38wjKOJwwY6pgEejhbinT5KraqHKptFCLV3K5Jq5wVbPZ8AuSs3%2FhxuGWC2a45%2BTk%2B8yejqeRbpTaUjwHSQ6qZOHoKabYhR9azzdVhktI0XNg%2B6fzWR4wLFoRp5M8%2B26IskGKWpszbtAJUuITtl7YeXfDtGP5T8MYja5jIz7RQhtSJZhRc0G32aQ6rmESjgxGbYJd2c%2BLXfYVtzqsJwxJJ9ZPNYzHD3%2B4VI53n8abEb&X-Amz-Signature=fb19701d7c18cae0fb09a01254e90ff2fc15ac4e2860a1928e9586a2b6aa582e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
