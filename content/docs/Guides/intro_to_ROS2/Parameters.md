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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466225FWTDB%2F20251005%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251005T013828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHjlyDk02y0p9FDCqoV89qJgjIFDxszH%2BoScESgG3r5WAiACAsewMyNXvrC6G3iJvzXVBdvQdqFApGpqXI8UNeMJKCr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIMmsFRYNNqkeQmhDN6KtwD4B%2BWmBsHRhii2NEqvJGDFMM2cf6F%2B4Ud0x7%2FJbACZkTpCBwsehinQ2Cq7juMZUzN4%2FI1G1SaAaVgCGc97hQF9Q4Lt1pYTMnb8AJI852M7Y22Jx%2Fqno20vTmKtZiiBQYYbwLRvwJ%2FybreENc%2BVxrzoxsP2jtF0AWWeGmsoNigLRXfXu9SwcWyENwXXcmi29YIwb9bupmB5aR9wRh%2BlQi%2BuOWIggfTYx0k6yM0sDaaVTXG0xXk90k0KebaPGXd91D9UOkKVH%2FNiH517wCRLTiw%2FTWN%2BkW8PT55GWIitsNGj5I%2B%2FaYPfm8JIsrY62NPmYRvhilqEosenuY2E8%2B9nNRwjYZwzn%2FT%2F9mM%2FRE%2BJJn%2B8YeM99vHisVghih6cbpD9wIKUSSnz0Zpjm0bfagRHanbGKhR7bhaj89rjdzPEFdPPd9YK4HfeoNxYBSQWTi5ZIpKwx7cABpu9s5qO8t3yr8uSYKdcFpZGpTN8m0u%2F14%2F8farZaMm1o5cd5Vd8GmK%2FLBR5LWwo7PXM1OO3fRSIJBJGa8UtXRimEkaz3ULpar%2Bdpt9TdfmAkw7nHo5eaC%2Byfz8BcFXludJkpv9%2Bp9CTJzoO4UNppVMLwxeI6CyZqCpSKQvikExoncg0FbyVTEwwfWGxwY6pgGiyrTw4MwG8n5vh9g8dfPFeqYrZ3V1Pee1y6nTT5UFXqxE8sGxHeXhq%2F0APrbWv0M2gG0ju6HST08y%2BbGq7e2E%2Fg6EO25uG0kvdb7o3p%2BrpCiLOLeuOukqi0CZlk6ZwvCuwAt12ltJodeYbpGxr6D92eBTSUjm4fSIJkWa%2B3KtYbILEgGT%2FT%2Fb1C76tYQYp0C9qtOPh2ZCTkCfRdA8BHRrqdV2WsKW&X-Amz-Signature=06cabfb5970bf9f6d9e1296e5b28ac7da9cd929b2417afdffd130d10eede51f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
