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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q7RMYMM3%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T151245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJGMEQCIAsZkmAxz3vGqxAApjl8WS8acZB7EfSbIGa91HYSBdBNAiBJnxC1C%2BjtFoE49gK1WwJ6hkX5rhc%2B5qQBAAhtUgIrWyqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEIkpKWZBufRhskHGKtwDz1%2F3dr%2FpNsPzuTuD6%2B5WhzQGHVGCOCxQTnu1HeSetdDqQcfDvmya%2BioRz%2FJMRnD0ccymIONf8lp1lw1gwxVRbOTMD6B%2BVhjddC8Pr%2B3XnYD8WGIUy2XxYRHiF3rY7SClUffS4XNsQ3azy1SG1JZhJqOU6SKj0IwRmMKRvTUhr6yLJdovEu1n9eATdDuBzkHoa%2FirRvrDp%2Fj6Y2BGlRf7TxbqTxpczhAB4MlxyBiyfaHqm1yMOsIUQ3PnM8KEn6VLSjT%2BBRqYGWNYxi97vSRPuxkpPCGBTMftyjM%2F4WmE6FegobzzkKnrL%2B0S2Ib%2BTJDIa9cxc%2Bqa8uuISMYkw6CEiio8q1aDNq7Px6qrn2IcicCPLCMveW0D%2FPC7BXPE22BtT%2F1k05URnO24UKwPGQjdZL4De7Etkbpoc9kzWHoCPJQWSM9nlux0hgtLjy%2FkpZ4EDi3U537wx8Kc7GKMQLCJIF1mdZQrvGHmrxTNlL8wNLmrtrWOFokCV9s0erSPSFYBX8Vm95SlDbj6wOzp8fW6%2FmTxWpxKklv%2BIBxwcSCMyDUlmBqWAEFBboNpmvD6Ef9MtYzAVTJPWDFWmGfJqTpC9QoeQ2uSP0VUdJhjSpq%2FRHq4aMAnsCPHxhUXt2sw2ZijxAY6pgEW4AK6UXST1Amy6VVxZLCH80jd%2F3nS4rw%2BFAWXiG3CJ8OnwJJroEjJX2KlDnH4Q1hc%2FrnJ10JoXnJ%2FzdcEfohZ33%2FaPzadQ6FZwQn8Wbdz0PqxMjYNkdfWVzlLsrdkt25lzw9QHetSVWeSKIXTGffC3B6LIEb15hCIu7ZvqpyBrV9q%2FPw9x96gcGJ%2BL8N81%2BD6%2FPVD3X%2FJ9ceQeiLSNbsvdR4EAqWW&X-Amz-Signature=3db9bb357d30ebb34116ac137f1b1c6521e772ea34298a2efe9bed0897de18bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
