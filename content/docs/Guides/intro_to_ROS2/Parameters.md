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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3Z4R65H%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T140931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDPDtn78U8xUfW4bAexRBHUZVTlAxpIemNuUA%2B8d%2BHMqAiAoRUnBVVp9K9UY2pCnDp%2Blmz1yM3jyhSuDhgmtDPNk7iqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMmLXBdg43FRAaPGeIKtwDnAF9HoXPcz2rrcEWGJtQJokdh00x9N9kMmVbwG5qzFxpSh5TTTiKyOdhN5YZfQfZbWhLatkcwTC2jkeMvO8D%2FgWy%2BTO%2BoJfWwsaUkTgGxr7xhqIiYo8FqX0tEuJEVAx4xERim%2BMViKgrQsyGD7LYKauHxgcQEurqi0BVLzxvQkOMZLBabOEXjdH9gBlI35BPpK7NMDl1ix36edPIzv8%2BFf2MaO6qe%2BsQ%2BMBCbYXZDbJqMu6iOby%2FgZWgFT70ssKcfAYW%2FXgdkTxZViaorEte0PU7nEAfrZVfING00Vdg%2FNlwfUYv2JNOyHTuHj6htl3R6gugJS%2BkViCRMTqnekXS1ImUXrkro1eNPI7sX8xgzQz5CMFhLLTCBIPTeLiIXcj7dNClVMn0d%2FCgCyUj33IO1Y9jzfxbc3U2GIa0UEuxpQ%2BZAPHIkYMISZit%2Bm32V2V6y8NaTUkMLVZRg4cq0lejCK1omTD4KUGvyKKKxeol752R%2B7mRkNWZ40w5wmASPsz34dzgeBRi0Gvn4fT6O21or7%2FDt%2FAFX1y6VDY%2B7Cj5EG1MTDDgsjpzgTBnNyg%2Bo1jhL2uw3khpv0gKzCFupROceLvsKDXAFRG3TFyL33bsZShTvSM0iE9GQ9g8ghow5PPKwgY6pgFzNPc3Uti9sNYrhV0VqGDbMJWCcl9an96c3iwR58%2Bf7yX5nv96d5cySFKzJtqXwnSvVpQNHJtdzijp5caKg%2F%2FrIQ2Zl%2B9YfaehqjADGvHqQ%2BRbqLW2MjBdpwpvVSU04jMewNsOp%2BLoOnFIa%2BUbs9G8E8XiH1jCCf16sENrCeVQcaa%2B0%2BnjhrcIPDaA2z43KQOaKqIFUnTG82%2FHgCnXYMSFYqN0bdRv&X-Amz-Signature=ce6444425c42d265efc188e9403b680c54ef43f79b59481c0b49bf94434d0373&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
