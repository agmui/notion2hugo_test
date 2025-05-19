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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VISEFV3%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BHkxq17m1OXqxHyx%2FFv5tinq68zSqCviYNpd2ARLJ3wIgVwxZsxNqqmZwGOwwTzLXuSmqBroVGe8SPR6pWxjT3voqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHx7vf4ZLa9cr38hNircAy9sH1naRF50rdXKnjNtJlNrhLHUZC%2BEGzHfVp2wmF0xiMrHew4zdBoKBjvXUSAn7B9AG4Gum1PGOvPFzuHCYsB%2FaZIlRB60VobcLEIVMqjOuWKmXukKBK1TBAXimcP6rGm8%2B4EWyLtxqreyKnnyNIoq2nyJb7P2zj9f%2B8SSKsHJshbZIG8Kew8xGtXJsZjK61ID8D1oqalLivrY4IELhYwA5Dz1RCw5UuujqDJJ73g00lAAMTmUh1VQHvW07SAfDwpPHu574Q95DZQxf8PtNcF%2BkyFD4g%2BMLRE%2FWYlUrqGI7atPR61ix3jvCrK%2FqVX1%2F%2BghzTosKU%2FyiVTiWfR7iM2zRGnshFwIzkpJc4uEphC3Bh2pHHPhb%2FqkkaQDjWaB0rqEOxyLmbvaV1gkOHeirSxPH%2BVFWfURMqtfGXZ%2F%2BjD3D5iDyMMKdFkViKzDKI%2FVA3Xnlrsb6%2FcFtH4Clntj92D7sTnvcRg5YKw%2Fwxot7%2F5TzTiQ1riLJ4Lj2h1bacVv6jEhxWbOuzWvfFDtgUeOBfJGli2C7AclkpBUbam2193JGHrxT6aKmMsP9NFAphOA0ZTqe685%2Bts2pia1X3ZYwzy1DurGG91hndPDuQE2N5Uwu34lmI06yOq0oX9SMM3HrsEGOqUBiknPHcx20zmWsmbF695Qo7QP87G7OFIal21qCcm48hMNPAr73XgV%2FZyhjg4UbtPWttLL1lvAuKFPYdH5QegmbMbm6s0S3f2FWGpGGB36dOquHgNGv2Aku6afbHIYQy8xMRTvouS9nHWxC0EUTiEdB5MWVljoSmC40lawSPF19Yo%2BlFDLHRSIPV46ohefIu7Te9Qu1ksD1JMn2t0mQAdPLV53NJws&X-Amz-Signature=e11baee3a237ce13d38ee39b7aadc610360b183e493b2b3f5a732d46f3692f51&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
