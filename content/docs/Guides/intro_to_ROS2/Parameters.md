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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3DF5RWJ%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIBj7ITvxzD8mXxHa6MbvQigicbrtvrSdnXfgaX8ziq8YAiBRo1bvogJAYKWcx8ALivc9mcvUJxDNuq%2BoTyJxkyPJWir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM660ITF0r4qiCgwaqKtwD5nDU6hOxGu52GzyAZhtAvzhYhNzLntvG2bpSOpZLtMu%2BtaEyxFT1c0iuuMeWYfhEAvh4iK1Zt2VCxHYhpSWoy%2BFK2EumtGz%2BPt0%2FdWSE6ua%2F2XlX8FvqvrF1hmmavZoAG4%2BWlDPK75pgo9D9p70PbbnhICgm7K8QV%2FErlTvbGS3G8%2FN6WUGwwEZJ%2FitRBW3lOxhen78NnaVbmXL21%2Ba8ex0IbGcFXRJWWh%2F12SPSb0qH2EYJV4leBAKviUvB4Pp7AxsgjacxViTs3Jk4KsLHUxSewvD05QH8TvfjRiQnEvuhXg3FcOKiIv7Na79bbSpCiElFRmZ%2BPY5L6z6buj4hhlDDImVQ8RpBPftM22fAizIQT%2B5BuaDZP3XtbOPtXcAXFmZl5EsD7fxvknB4rj9sRPQd025YRtv3uTITNMtavbHtKm8gYkAL3sduIZPsFkh3uo0slUxraFFRyLKyQMBFM5RN0Sg4Khv0N%2Ft3C6lSTSPcbTBvbobL4U7FaqrJIQ7k8Jaa360b7ctlMRHhYz%2FyBlDgSTN%2FYun1xG0nMU54tpDrZzWxrq2lV5IOJQ3RmKyqC3PyQcORPbUQVGT37dVxd8vpU4GGIGxObbQYfzm0ololy1RjhSlDg2SlM5Mw%2BoaiwwY6pgHcd6OTzYsrUqkHpcKnquTSVqxv2gXTp9wvOC0wiYLJ5B5lP2C6tavSLsl5vz8cPGEj0cn1CniQogyH0CtmGCj96O09bVfU8Ive8GUXER%2BPstjxl3bA%2BIUTe1c3equ09MTvuozNHDNK15foBDon2AzsmS6TG3SvsdcNhIvQnE1LNGlwUFjpQts600zpattjPqMQ8kArLENCMm7%2BBi9a%2B7rRZudgcTTx&X-Amz-Signature=c158e9498df0e47e8b464c07783e30a85a7ceec31360b7a607b995d1bd512de2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
