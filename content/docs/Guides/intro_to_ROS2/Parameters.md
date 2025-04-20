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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQGJPYX%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T033052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIF63jnfQz1%2FGoDihlLuDduD9Qyks5wNt553cpJbBiG7gAiEAoX2%2FilYvc7Dfgpey4ui%2BrBA2I9xrscxbaiVY98s5dFwqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL2PmJ%2BrY7R2SkmLpSrcAxohnyb%2BZrSxhnhaawTPneiI9%2F4B2auE1Texuj6Js8kapSxp%2B8vZm%2Bfo2GiLl0nB6aI6KyNWUAmiuLw%2B4nnGlVl2t163EplqbWOW9O1pJZ3cZlQiVpCniv4s6wQnwHOLVNrRde3dXfq5bp6tppZj1NNSxE2f450gkXi6dfIB9oH5M8sfcfDQOnsK40d5GPWhJnqyfnLugTMNgC%2Fa8NQQqPfpQmV4qewhIDivmFDUDnFmp1sKKFyutqJpgV6GB3UqhVl2p%2BI4hesvF%2FzTXsqGxJPdrLBmxzyKTjZc%2FqJWIKzOKbd08d68KuSIhhoEVzxCDxM1OSeUCLQk5RkxxYQ7019PVavn7V0Uw0tfvdkKxU%2ByDMKjV%2B%2BtcbuG54F%2Fe%2BcdY2OADBUE%2BaotvNq1oj7%2BhO4mZpTf6EiIRbNV%2FPs6HXp3tidVTD1W7qpqKcGDjbuQUTW%2FVoOxjKdPcUWVmzlcTpKqwiDTowh%2B%2F6UxF%2FeYdx2rkGK357MieIqyyZjF8znZWeumB8OSCEadrMa1V0McD%2FHM4un%2BpvlTr3ea%2FYmprcI1bJWxv5VQjN04aPrpXn3ZPYhzi%2F1pD7C5yNrAnARV39sV7radTRUOalddafSktF3kJwMj7RjzWUfhOpGPMOSBkcAGOqUBvGHwJcFR%2FgK2gNktfMjq%2FD4KCTny70xmyMKpIOuQptW%2BBkq5q0uOVnAXcsYWo7jzVSnwKmf%2Fz4XXLVX3Wudh6gdEEr3WV7nbP95MzgM2w0xOJFGHxqieK%2F%2FnW7J4Rakhh%2BxQLBb1Pi%2BwfcBsuZlKcmlcgr4uSgmdbVEkYTvjmHfUeXXDNNumSvndP%2FxbVh7wtYXkZs7sdH7O9ZTg4nRtNwNCUm3B&X-Amz-Signature=6fb20d29d67e97685014ee86808090139d7dd7ebb68225dee6715a099f5f934d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
