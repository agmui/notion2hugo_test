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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4Y64IF%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T052317Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMOcEAVQ3XmpLIbhewFVjUaV0ype29XLrUjlgX8AI3uAIhAIMV7pZETEadWxdAvxtw4cAVNpaX4Exhn0Qw4vMNOTkkKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXHzjkbHAZVmFRMBMq3APKk6BQ2wxxrgMrtE83lMZeOYuyrVFxaWY6QJXU6LFvnAb2YxI5OV%2BEWohC%2BbahEEclyZkDITlzr0bI4V76iD6Z2x2px1ahvYcdBq%2FTDfOODpQrkoragme6VSOkS6BNAd7gAXMDgL9w6RaKXjpk21KM15bv%2FexOlYbhsPFZkjfBb%2FZyjwh6SerK3tF91PvdUUQsiPAA1y7xWCNF%2BbvnAwE9mGIiwQXLRM8wKCsczEtomk2afdRhCfB30NGld%2B1YAe4NMDYy%2FtHKCFSmMC2WmVqa8p7j71o1k7LbS5BpMZ5CBd7uM9BghjV9OA%2FLPnD%2FGfZ%2Bv7EUghhJJqBapV7nTCQWAOV69KwXD38SpueKM0rw2k5xwivvunldTTCdLrHHqhUAz%2BcXEefdmhxGAa8%2BnF4PwS2%2FrTqKp%2FTNIgriMkOshhrJEh0lVSgHwOppeW2S4wao4CQJI6RVX%2FBnFAFnXl6wnRETJI7NNjUDDPctR2HIc37Fm%2BpvsJ6obgekjC35YcFPEU15tgR5SzTF%2BCZtr2szi%2FMQzHT0DfYZDcSQkK%2FONkx5nghbojgR0%2BxFarb7iuokz5uYYHts5zeWTLaKd5QkdbhgPZ6EyGLQD2agedDvqDWlQkDT5MKfYFOEyDDtm7HEBjqkAZEzKrPbeqVNfNqY6h4I3LyEy3O0hdcEmxdlKvRTdx1whsEu8MWRQLyJtmwKFvWWi6BoiTvwc3Eayq%2Bz%2BCETknrB74qYm%2BqE85Zr06gq8QyXUCIjGK2vH%2Bq8uzy440kx%2FLU4QRtq1slZV2TL7onS1xcx8vDbxCmh%2B8vu4LxdbNTjynjBGouoJLHd%2FU3S1vkbxPiq717Mntma6k%2Bd3ppQ%2BcYYDF7e&X-Amz-Signature=f39fa7106d938a24159d56bda177e8de509e22730fec3ab4aa85e870f6ae6ff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
