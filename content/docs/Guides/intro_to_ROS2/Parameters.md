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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662STAOXAJ%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T141426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIChqJUsRBUD9Erm3KsrvvxC03tzfeVaLFhFpjdo8qSnHAiEA5g8JT9DXyegFDOXAzZZWOuv%2BHmTNQpJCIaekxoHzcacqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOoJCZ41Q2LBVNPoDSrcA80bmJc2aqWQmpgy28nW1HJTga%2FXRY4qWipmqPzjjz5BU4paaXMdmeWPljKNiWzn00GVPXMp1bk1tIi1hh9ARVjo4%2FrH30ydGkUIVehhzB3%2BUyxoBwvZQ58NJAtNIHc9yhPlsfsCbviP%2FUZRVI93CCHwLIgqFPdusXBGLlPCoUPuHO352ldA8hfugKId4keXOS6mY%2B2VHC%2FDb86sKTBv%2BkeSnpNJz%2FOGmyeEpPG4ssKEqutGRNo3ygEUELGxsTTARF2CkL%2Br0KY0t3Zvqc7%2BNdmzIctGlZKH8va6yMNsoqGeXLQVZ5tUypAI8uM8w7r2t4n82BueRtUfQ1vWUIw%2FgxIM41ss6okt0OkLG%2Bf3Unn4Do37sLadKCOfVGE%2FKeAYkZdO1r7QCyCk4W%2BM0qpL0JS%2BVOf7prHEIcLtxCnEMhPXMMhfcCT1uqaPd8n53IVX8cRFmDa6IEboqIQxd7tQ7x7MPMLe%2FPUyDNy%2B%2BcB%2FX2aq7a7V3ZNJdiyTwaGJrFaagDvTJHwXX2ARkt6OeHaOGP71MJBAuNZkcUvwuail4WBlxf4dK%2Ffi5rcISaFCeoWaFNn%2F3Q5z9OHKpoD4URFVvo711R4KVfr1rfwzInfAnQEp34GOfaZwYyBdXjAkMI2Zo8QGOqUB5TgDPnWI9%2BACcOk8ALt6E%2BlfBopgtlGN51xqmrBJqBWbaLyZLyctWhcAJ4ATLgnlMQWC8a7Oe5x4ZXI0wxsrJZcPcmMLUkWwMXsDrIIO%2BqWmtrNEg34TAiwXkd41kI%2FLFLbQfLOHHj7wwxtsCu4NLoFbKPgsjQNly%2BqRnLC6oclroWPeai%2BaYGrGr0ngAmMiF88OwCDgDtMNnYGr44v5KbmhyTdn&X-Amz-Signature=b2045703739a6da22d812437614cc5f4f367093706630a20c8b3cb02cd834ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
