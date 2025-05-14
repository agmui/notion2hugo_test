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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BY26S2J%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T140905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQD4%2BXfp6b%2BvmSJasV7VB2%2FtfpY128FyE9W9QnzrHj%2BWQQIgH67XAE4OshELlVH4%2BtD2vXSum91k7DbfcLuv9owiqgQq%2FwMIFxAAGgw2Mzc0MjMxODM4MDUiDHMp9xxbbIGnNBo5xyrcAx7a0U%2FJAcTzWS0DEV9Wydr7yFgC2LFrKRNuPFUGQvXNa9D48aKpiP%2FPyd5x4bPI%2FyQ9gaS4lyHcKCFvTabMOS5NQDLdDK4os57UxTn4kTiBo0vt%2BymDaq796w%2FkWWJNP6aBIpyQr8Glq4IglWffwC59vOtgMilIe4drvQgBY0U8LoWBkMhTQRWgat4GDfhftTvCoC%2FANDK%2F%2Beg2A4kf%2BRvljrEodNtlXsgBo5g2Gjcu8PvaxmD0oPKVNS4V0R4k2V6FikdwhMpt3YKkER9mdMTPXDvNA0nSkb%2Fax4t7NlsqwsgkOLQdrEuVW%2F3dm8CVO%2F093rXd%2BRMcpx0MH7u1HadpLQENlPfwHZqq6jEW6StKZ1zINXSZG6dSR5A3MWeF3h%2FX8XYU2G8Eu6oeJzh%2BpShi08BLD1oAI6MaBI4gOL0qV%2Bsves7dcSdpywDvRk0Ci85%2ByBdhWS6MiGlfkN59h1Z1RTqPtLzGCqAbSJqDUcQwTLZqScRpPg%2FXe1kC9BIpeAKJr7g8tB50gNlO6O5Rr0GmE96z9WhygO5A%2Bxwc0kxWiROCg2Rws1jstEniDygBTXcwA8vhm62wQEkZDqVSp3uKwyHrV2X68ekSNqeiS%2BHwtJ30LGTmyznhrgoVMJy6ksEGOqUBTMRGX9dFaMb9M4FY78BPpaKRJfpSgaA3FFt7X955hM5GqmX0BDas9koCmjEm%2BZNSpu1QP5ezXTmsPwsb1pFj8LHegvvXe4Pf0ElgSvk71aT6KfILDpyIyp45GVinZ0cLtENsYmNiMzDe1XUFyCdgV3SIjbW7z55PLvlGYnTjpKWU%2BwDxUWSeVk2BXYkklQUYTQrbZnsKaaKcfjcVnlr378a2t8UQ&X-Amz-Signature=3cc927007b71acf28fa770f026ea541f78aa635cc5e21e58f7ba626b48dcce89&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
