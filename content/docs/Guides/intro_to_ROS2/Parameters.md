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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MPAKL32%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073436Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICNdINtdbnY1B0sjW0tY2cBE1yQgRAnpPPmGzP1Y5TnBAiEArCjTxwjfs3nevUbj5zUjZ1p0%2BkGcpU0X0ciOgGvBDcIq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKS%2FH02jUETldC2oXSrcA7XM0iMZVnSQams0rD7AWHoF1097Yf4t9RT7tNlgPlvh7rhn95UN6dQpdvEV%2B7H%2Fzh%2BUrCbR%2FS2K0A5onjfzjWb8XuLnhFeCT4RXa7NM0nfdRCq6HTziUCwcx%2FY7tRWGLVD8Assy1DCg3tQyhiqooevwDFAMYun3KUBsiiIrnIkov6Vj2B1fM0HEAPY3J5ugYa0gttt3VL4oXYPOdmlNoG1Amsl%2FmjnrV0IlBBJGk%2BaphZcAW5orD%2FueWgmh5iMR%2F9H4Gqg3Vd7meX8akXkrx%2FMWcRfDZsbBv2g%2BK5eyByQd0rwlY%2BgwUlhZnESxDBOYcqw3Jf9SjBdv0bSQknDbjry6e6h%2BbeTQgeyg9UnKmE5chvHhNf9sRWfKbkPlSoKjmjj1Bwxbrt1G26O8HajcccgmuNw1v0kc4ibCzH0DUwAypaHw0Hu8FlE%2FG8A9%2FrJlFgdXIxRtfxY88zt%2BalPR1dbqnzOIG0c0w1TGJfy%2BXNVMdox2xz9Y8Kr9LoqFcRodmY%2F72Ev0iSQQQf7ViBJTDOldziVKLfQSztpRWt5Wbio8FJEs%2FQDsfAW%2FaMPy%2BYlwMWsWMKpRQ8kLDZAgJJo5LELnkX4hO%2BRapn5lsykJXpsQChCwXnpH4O0DwXQbMMC8vMAGOqUBNLpQ8fIoJM3K6FBZ13qbbk0rOQbvxIQwbQaw47TTLNxhHtLSe%2Be3Rr1cTuGyUkSJZvnenXa4uTHSuiEnvqtHwtGoMQ3m3DVGHoY7E8dsgh6f4PC%2BiFschHFX%2BSGlaGuxHi0sMw4A16k%2FYWdvzwXDu4ajbGCeTdeScFSYzYAR5pU%2BzJZQRSEgDWSBdPuAmE1%2BMibzjyx%2F%2FKHL2lOZ9esYChZtthpE&X-Amz-Signature=2513547544dc66cc2a5765ef01bd5da8ac84ec44e2b6def5348150e3c9bcb824&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
