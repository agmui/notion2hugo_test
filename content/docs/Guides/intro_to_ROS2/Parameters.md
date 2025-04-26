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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6OEWCXH%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T150716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbb9yKIc2J5Re4epP%2FKRAd6zGpikjOcHZB%2BUaAMXLOGAiAGBlCscbToaRrwt7xTr0oCJkabW98x%2FdIKn5jK7gzvqir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIMao0jSg8Sp%2F2X98dzKtwD83rsLPvwvp4tk6K%2FqLSnYQnBhjPvQ%2BtDe9mJJeU0xdNSB6Etilii5FkHsWxomvBLMuULGjz9VyZKGoRXyBmh1hUcP0zU9UTuCExsO9HTj8aEDCOseoyU%2F5ylEPcdsQR36zcnnCFvcDXKLma6rTA%2FZdACV7m%2F%2FCOyUo4H85KgUnAh6OtM5dpddGKFPUuKc03ah%2BmKN9oDDGGo5pCSS34dhsUTqJiJyMcVtgiVCpbboto4Yv4Hl9v0JDILLDSvCbrMUZqJDvskuTF2ddJ1OqF%2BS7xw1b9j4zDLYmL0eN%2FRm2T2jaVaHJfPbsdYaAlhF5lSl57p6p8i3zmpMJmjJ9B6iswsOghlvDC3Rq5qMdf1G2HCh3zVRgoi1Hs1LjWnv6XXPb650RJpXN52a2utyMMxAmMQf%2FFBrX9gJA5n5cVqhOpB%2FjBVaKFHQpFqiRCCW6XFhWPjlUp9D9lfo6qyM9pJqU2CvjQZ6v9DQYkQB14bZgGTen4cHn9zDCHBfkqpqxgPNYjBc%2BlUPFCjOcxr8KOLfyVvjlgAZktWzJ7a5%2F4kRt7j0ketTEHSFHwUwXS5dTF8phMMqXcvj50HSOnWS4knQAYEYI4Xf57LE7RBZ6ze4dHv0Sti8e6gmpk1X%2F0w1OezwAY6pgFu%2BvJz2VvQq%2Bw2sFQ3MY08LRjHuLg46EbRGmvJNm0HYnIp%2BDetvp%2FtIcazVYIaA4uqFMW5Um8lsH04GnVX0vveDTp715rwCcBr%2F2ngm2Ry868nWL1RbjsElXmqm3dqFeBm4I%2F%2FVrT7j4I97GDSOnbrMzdrMW3nY%2Fe84KpdCg9SlWr0LgKahIYaOERf0QwCS2L%2B7xXh84KIFZ4wgWxw7XcBlta2UXJ8&X-Amz-Signature=cfe678a404b5e3c61894bb05e167823b5ffaa766589686b5c6838b786874d88c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
