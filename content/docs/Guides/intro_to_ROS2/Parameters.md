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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LR6CFG6%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T025815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDeb22XaDxVAf%2BzgYGLwE5%2B1HqBWLPcviOOvqH4SGynuAiBg6NfQbPLXQA5Sj1XmN6XBBjfieagQrduIr4FzfGO8FiqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoUPjkGI3Ier7nYdYKtwDTmf%2BkX686LwTKmNuFQHYWUvE%2Bxx50x6F9dIUjInrEtxGjr4eWwXItPrakALg05FMKtiUDXK9bDgaHvZF262uN%2B0uITYl3TB9mKCK7v%2BPs3NWL3AkaqCxxNDAekQjKG9%2BK5OFfn%2FYe9L70JZINAK4qRUmGcQImfXXlmhem54VCAnt%2FAPmmfHrVjsNmWZhp%2Fz6envlG2tj6YhLxkz25BQjzGcP%2F7LbkuTl1z0sBRox1lVMdZtl%2FFWkXsnAW%2FFME1CT8RFzAzHvA3WBfkIIWjvgfR9oTL7G0B9%2FtLZZNt8idHOQFbxO67Be6Y5UvhOpfrOlSYaG6plSZcXJJLxdDEpINBSv0mxLqtl1FZtezgePoqhQEFFpKpENaCbcNb9txOqDUvAY0uhvRGPdFqFJdiQON5uz%2FbZQHi5NNdlQagm7WDLtx0B8touPnJCpnPvfYDPGNBfzfUiyE0AmL6kpE%2BKU7qz1xPo5OWX4Z1yVhatjkxcvL2Tq1VsDKQteexWqAgRzVyg70eTHX4Q8DLvOXkRHVC9VQT3DmarYCQHLQ8Lvmwjf8tnOrcHIWv2oHEGuGCb4tjobjmXyX5w%2BEqqWiLOcOaIG2yk4xvJpvK47zVc%2FXU5Zy9po6qDQEsBXAMgw0cf2wwY6pgHSoxns1HY8hKHBBCsrtt9eLq2ycoCgDJRN1JiDCwt0R4ETo3ILiL8vJ1YHTJdcjHS5j2t%2Bpn1fd4CC9FtWDenFEMwl8w8%2BNn7PUcxytr7%2B9TiuZAdiStL%2B9wQSiV%2B5V1XyU83qqXjRV22h5Q8pRqX46zCWaLF1KWnux0%2BFESOgc2LtUyjL6wsSj7zW8r%2Fm9qzIFELcrQif7Ou%2F1QmgomN2%2B1WNhU%2BO&X-Amz-Signature=a4ca400240c3c343aef78bab9e401a161ed9633a00cdef646b95fe93e6532054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
