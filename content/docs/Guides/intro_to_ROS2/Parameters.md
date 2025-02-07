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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6WZZRXP%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCF1JDb5G5h%2BG798vM6IjgFkZNospLMPGL9wjHVp5GTaQIhAMENAIVSPCOuv%2B3833AwRq1Hknhym1lPLxeDhR4zGQ6AKv8DCGkQABoMNjM3NDIzMTgzODA1Igw1W1X7QNl6ICAyTT4q3AMvCEmSfOaGdw1qx8DPS6qAXLN4IfIweBrdGVmLh7e5N%2Bw9OZRpmQKXr8BGr%2FKu5Ok1P%2FHouB13Ohq0u2gf2JVcEqpI5tNos64i3cOs9KtCCZqSrSPsqCF3mvl4A93STZCxCeLQYSm2aiQ3nHzEAhxE117Ea5kc7cCot9r%2F%2BmzyyJwad5dSCGZMhYj8xl0SX8NlrE%2F02VcD4rDkRU0izHr97bUb%2FYi89xWKLr9Ui4dBny%2FBBVXdnXJii44Kj888dfyC4UGLe1Gupv7RnP15uV%2B70Qf2KxX7zsSCcMck4H8jKrgHgKk8kK1NKTCeBcqF%2Bs4jyaT9fzhuy%2FNcMIO6fb2MLL1zZPBo7AiK51AR%2F4GxgyGGPdBCr2t%2BwVvpi1MVlA1Cb6uRLErnBrDx1n3eHDAiUqyLV6R0qzQEftR0u3Fm6VEdhuAE3LYwcdVmqjOU122w8h61SVFPgzQ2CGEv5mIEW2vhbSGHIFKosJrBgksYmlWJDo%2BezSbbPM4TNMEa%2BIprx1%2FuG99yc5yJCLEWVFhXJRNYu7EMHddb6rk4mGmXASepfNoHbQyaVvqtd94qXoO%2Bqzg8%2FVHZyapSzm1ZHzH2qtkrDOND6qwlL3b5lCwzk4DE3WTgTkviZ4O4dzCcm5W9BjqkAZWzPCd9YdN%2FVCLVwDZ63BPJsqnumhhcCdfnzkLj1waKeEm10iqEHdggsJjoXjzqagBrQQ2cCQ41QO8tctbXJHLM4arGd7nW3nwAXlBhy3p6g0pgSHjKI8vchEgctAa0rSLm8gKPyxq7HZ%2Buuw9MJOmXgh67g2oCLk8oTgBK%2FK8bKSGofoNNwV4KWrz78ADShv0FxOzhcmkec7UyEopRmz5aVA7W&X-Amz-Signature=b7fe8175fc6696febe7bec6650b9ed82fe15fe8673fda6bcd4aa97111b19616e&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
