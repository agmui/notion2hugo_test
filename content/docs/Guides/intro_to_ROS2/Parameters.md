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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7X6YNLR%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T160915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBH8IZi5YQoXXH1290G%2FAYAOpk5npP0rfQigFZLPeCBCAiEA9CYD0zRiO8k6I4WzB8wTb5rkHfFtbtG%2B2IOkBh%2FB7VAqiAQIpP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPijZ9lvkoTITCDpXSrcAyIwyfBxZCHu4CqASnI2FqPij6hBpcL44gqpO0L3cf4w1z41LwkhI5RJbLh4fCR5Pe1qRLvVOEyESMiU7T92HyGZOph6dBti6FyurHJQ5O9L%2BpyVj4PWrburKSCyhrM6NADZddSF67v8SMlOj4tyT3gMX77rwoOy9fVojvBC1036TqqSN8tyrLF1AgyHsAklwwkmRaGG6fyMicQ0QHONYnzCeSpBOhQNZSJUPveeQOKNicYafABza59MneiPI9RvGp%2BObUpSf5ii%2FuqinpaKFcrAlKNLZhxi%2B0hoanepBYeEjOyD4IpB%2B0oRfL28DPzRBskh1qcFREoFACLQIkp%2B3o7jOBjyiE0n6NAoMYVIqsrdnyscSec6WbVZIjzWLI6uKwwmfFQ7jmOwriBIqK70JdPKYyPqheSat%2FS%2FlXsF5W9co9CHbGNGqelWXudBSiQ%2FCUaXA7OTzFvzHTszp2dXrv6oLl68l3DsETcyIoqOEulJBK8wiYVPlO6PtAi80wioW3p%2BB8yz1QE2i44If1b3hE9KW6pePnMKyOc%2B59Fc5v4s6%2FGeQMWK%2FWWusKrPcLrT0ubEE%2BFJwxaWJa8XFApEGv1tOlcAcpn76pzdueXBztW81s%2B1taaHx3DweJWaMIy8hMMGOqUBuzeQapmnvT97K9JWNOCTrJp5zXf852HnamD%2FieX2RmdCRA1yAYK986ZlVT9vD70flNqes3CdrnVPqKTBOS5qEttYSQXAyejdanghAXGLuwuTIaXj53jb0PcNcmJpb6Qk2IFPcmGQONzqbcybvCY9ZOYsyBLLKYhrtLPp5htUtPXTTVQDZpl8n6QItl7%2FRfzn6owYIlIK5VR3OvV9F1NH9Cvb%2FONe&X-Amz-Signature=440e25a86699b7cedb0fefea1ef5a639d391c5466447f45734fddde4ef8a4a5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
