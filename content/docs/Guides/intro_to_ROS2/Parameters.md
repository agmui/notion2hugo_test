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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUCERQ6Z%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T190330Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZ4s3Jj4G0PNjES91bi4mS7BMCetLjh9tkGEssBF%2FeEAIgKiF8idRuQr500fnkPGTC2m3QK7NHT5XjkrMDGJfr6mEqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHpZpuFuNXK6UhlnpCrcAyx9qZwiLYxHHfhUS4sFiUCzi2TuIQobXw72SA9MgXEhRqCGZgMV3rLOe0Psh791IPrdHehgSwksHkqq1nJV0j%2Fini%2FNE2l9Oi1rF4a6GKpLYoWuf%2B%2BpTm2CFDzOhGi2M0n4myBml20XLyAYSRonuUFeO%2Fa0bxMgpJZOG1JlNyjEQVQYZ4tvZRd2ubmm7UZDMr%2Fmf4ucJwZfju97QeIt9YOHBR0PhyTE381JaqYFH2dwVNhTEEvCAO4AZ7W8rbR5KvtMkTtyyQqNBeCj0flJGImaRYJQ1tPXm4714GzuTT2kY9pZ%2FIJpY5YhGK6igcI0PZtnIocI1%2BhYwQb8ZqxD43ss1p7X4cRca%2BKYGM9RRwLWlCqDqqfahZUgOtv6O%2FkBA8yra9cMvM%2BavXOExfKkwC06Iqz2iOnodytl8my8yccqfyH9Oolmcp9ZTzkkwna96NTQ326Kc85F5rSgZFN72DAiODmn1i0wMQXnVGHmut9rwH3BTj%2FVuMaLzbL2a1tndAYY9gwT07qDNt%2BJUHfqnRoEo25oPdrwtekFfYAHag7Ay7jQL09sedUupaFT6S4lEJSNC8uIdLxd6GaWJGp0YXl4k8YuyLmNAGNbdiTtyMQQCZbgJdF4DVGZB0BzMOzu9MMGOqUBrzcD7wXL8dhcB9fUrE%2FjJDGLUoujGHhli9mRDCVVi1J1bfrxkaSuy%2BRMl3ZbCzBoRNKDpT0CHpdJMA63nHq6B3xax%2FP9zGo65pv%2BQT96KUkOT7FkhRoqg1I16ZKTHBPhqGAldvHR93uQm3SLhUPix7ijNwi%2FB08qcElfp%2FN6%2BA%2FggQrisFss7wLDf3xzEWPWVR8sWNyWi9%2FVexvrmRHen0Gt9Zcj&X-Amz-Signature=2dc8c6335138645a3403003c9a291deb0e6704f7e91167fbcd9f59968b475fc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
