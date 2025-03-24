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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RVX7C2J6%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T121533Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn2B8rszhjZD6DFTK%2BQoHb%2BtH8Gr7ZiP5hRDQQWuBbJQIhAK0ZbKtAfKtJrfeND2qIbYPcn4VjadaRO4Dy%2B%2B2rxxMlKogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYik6TP3GdCSnsM6cq3APkehslV5Fbq08VBTdMtitJD2IrSx1AxAtxEp%2Fa6Yz%2BLMNJ2lqq5FK8rILW2PEH1YRGh3U0XwDuFNiqjgOfF1K%2BJSZpAuFzqJLd6tBmfCwYpm%2BM9mRpnKZJ4AVBt4Yc6TFGp4f9ztZyNUlv%2BKw6CiHFHQ1uacQQlfRtLv0nM43qafBqOaGQpknOFm398harSz%2FwFyUEq9%2Fz9oHMoJ4AwlzH%2F6WB6DCoEXTFkDCIeR3SIHuEKa6LY9qFZfjTzusQjmHOOVm5tROcgW37YecEbFvqo6TNw52AWMvHm%2Fdk4IpsiDfAo494IAPTcZzCBm%2BPrXIPDI84%2BCWRt1IyhztuRmpHP0olKCtkjp%2F1oasKTMICk1nn28VYzL40MBPN42Lz%2FxwUZnCJu7qQib%2BX2t3a%2BOewCTdj36e23XOS9uhC8YbutiAwAy5i28KmxduiV9tWFq7YjBhW59EVHa%2FHrRfMXtSmJx4CgscZo86C%2Bj81dc7%2BOoCsAFVCOrNoa8IAW2mxDeNg7C%2FfU0bdYndU7YEClWmM26kmNwuWlWMQMjZNyhtKuSG9C5RMPc07JNdrCkiqFCicARNn7tXkykBP64ugSOkugIuRZKgaB%2Bi3F0oeAo0u%2FHmWwPghhIRDH4d0FzDGj4W%2FBjqkAWx1Xb3SelHDeCXgaVYEaJ6dbPIYFkttdw%2Boz68y96aex5iV6WT7biD4oXa6vPhXdTuz6UXnyF1cdAHxhSwoNJ6nUL%2BqEO2m2mPJ6GoKMN4KddoqBrgplfK2zMfeGrqEgl%2BWUvd0skYUouE8hM3GWuuolKi%2FyED9UYImwXtoqZNU6CcO8da4m1L%2B4GJhAKiV6whrdgBPkPMsUWRn0BrX3qnPO0Xp&X-Amz-Signature=10e92ce0f03dc6a95f70ea5290934e7e64293b9ece4ea0f5cce5562ca9253dbb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
