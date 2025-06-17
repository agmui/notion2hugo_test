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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRMKHZX2%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T024024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDPqUBP%2BETOg6fkMEFHS2snrh28frlvkp3ygzY6n5uvbAIhALP6CNtTtWdiBaq1bVHF2VBEqHlrpdSgLHfhrPK3IuoyKv8DCGsQABoMNjM3NDIzMTgzODA1Igyeb2oGh0bOQFyMcCYq3APiez9OurKpr71l%2BXKvXWOPG2rQAgLBzw85415y5arNy%2BKV413Moelvb5W%2FFx3EX5lJYWIdEiG6glQ7CkzD%2BPAjp2Tw%2F4hiw8bJXGj3JplXikY95k4%2F32QdsOmXNbIksXzSjjxANLRYh5UsaaB7Txcb98k7zmgUhANd3w4q%2B%2FaAa9GTRmMxNnL3dxwNIFw6kDxbIwdISyhRFca9LHUZng%2B%2BY18h6Fd%2BqYskhoeEVlEcQEEHobyp4K2%2BS5rYwwumnjxaObc3lLc%2BNhoQOqmQa7VX%2FrliAMR9ewMHIbbt7oEmzUQTGagZSdq627U%2Fn8wLfgdOhOEYc3Qly2lRupv2ywqrkhk9vmDJLzf97g%2FGTLb2hFaLV987auIpwHy%2BEiI43iXTPCdMfKbY1Bg%2FZedJOEScdQlrt9lOu1C9I9ec0mP%2F2VX8WOJuxaXiXxKUyWWcUq2AF%2BZ%2FWxWwo%2FtrNBqaV0idCX6C6vKnkDSEisVNJYe5%2FAapqvL6%2Bmk6t1lsV23%2FlqjTA%2BhqK16Tzptr%2BpNKbAEDO0o6rClk6Bnpm4a0Hpl2ze5%2FXRHYz46eye9QB0XVLOCyhNxZ8pz9TjXCWa7gFiqzrtyWclJB8ukwjk83iyKUWmoPSeS8Q7WrEro0IzCEmMPCBjqkAXhQM0esyLsZ2pQP2O2rPXWMSN1PZHSuYGpEkCrTdDoByDwMvzBHGr1uKsguCI1mAPc1sAD11UvC1zRAU8Mprc6cn0I%2BozeleSrWEXVVO1mJjBzSu9MNiEAFIvG00p8QRGXhh98tFVz%2FoWilOh99%2B9bkgAdNiBHGDL22RylUkXD6Z5ti2pJ1PLKbSlOod052%2Fz7UdScFM77%2FxKuCHNu1Vh8Wf%2Ffu&X-Amz-Signature=48ce18a0fe3ed3be9695d2dd60341514e6f5cf67250854a9f70dc751688a9a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
