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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HGCFVH%2F20260512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260512T032154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCXKJFRYc%2Bg1UW0d1Dpy9bBSOeZfTzNKp%2B3%2Bw9DT2w6wAIgEwHzytmfe6zpGLqTUr1O2IZ3OcdbML%2F8nshSbQm4g3Yq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDLf8%2FrweSrRBq2rXECrcA9CDoL86Vds1Nk984ibHGQL59dX768G6%2FdTambsV%2FhoX5ONrKlLVru7lCh9m9PhxyQ%2FEH7v2t1V3jz5IfvV9zsQOxnr2bWrmtQeXFSUE9F0XSxlBS05%2B47nVcRTFBviRbdPX4Gw%2FLcD9UvUNHYlkKzSsQT7jxXQGjfBORQWaNvbODMhqzKHbFrlFIDsCT6FehS2IQZOWHk1MefKwTl%2BrnKf0M2p5p811%2FmwVBi5LLziaGf0DH6ZYjg2Aq2SlDnbiIdtSKk2LKmi7b1addNvtturDvsfgV07GXKHjUmizNy9XbwiZpps3n3lWhr1EpwWXrEnDd9cQKoqt%2BqKKkH6glMsIY3IiuTH9lhykFojywBxGlvdhSao8C9l%2B4Y5EctZgd79SifcIlq3xbfPiiec2YZNuUOAFbkBCyYvjyHx8a8EyMMzQyXOcKRGNpc2htJFk2NUOr3EjxP1xFnbrzLIpPQQ%2Fl8ZSzKfsqou%2B%2FMMzqdZ1sdnDtJiw9rVqtAWsZSqbaEHlzJTKu1oOa%2BeEpRpBTziMIkSDK7SRnEPM0stTGV8hFuqzCbEicdB7av5v2n9VlLJZbglqvsUwccGH4thIzXWbTno4AvWpxQeqrFTXRaHWEyqzqTwH91IYU%2F2yMOifitAGOqUBdA6m9fHqWgvv%2F44FV%2B1cajUGMjUvb0djqhc%2FZFgQSCEhMwDJmMiTvgSc1aP3PFe9AwbJ2NvgqzzShv2lDGLKdy6GJ8yQP9rblPSl9ZJGd7wqz0ZnkWLvSGs1sqTouFWOPbUHcpYk8sYILhyCPRKj9lk146ORlbBb9UJU8ii16Krdrk8DFUPvPmZdN7o74dYwTNvzbo8ZAz%2FzFUdJ%2FGUd3imvgrSO&X-Amz-Signature=6a46b78d6170f4661c7f070c41012949c186abee5217f5bdefe78e77b8db77a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
