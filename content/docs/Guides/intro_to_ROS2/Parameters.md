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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RUARI2J%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T170713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAyi%2BSUll4ZhlaGM3UhR7LpGWjrUW5%2BJ3tSLpbHIuhsAiBGy34DsDZXW%2FlG8Jv6qk%2BSq6dRjc5sqRC9dXcu0h1c3iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMflbC93poR6vNQ4udKtwD%2FQ0JWdjefO1adV%2BH86HwKHzsRO321MIV1FKigquaX%2BWf3A0xMaHcZeo3KJpv5PSJ6baS%2Fapee9o0O33OTgG97VlO5tLrRKWPv44%2BtKaV%2B6ZzcFiMRzRfoQ5OpHj9tnG6qLSApArpgZtXDuGOfNpn1PKqNQqy3EPpg46Yq27xNDVr7%2B%2FP0EVMDtMMoWgKoMGZeSZurYZ522iz54MxLk2rSq0dKAQbExj%2BnGzG4zm2%2Bz7qu37%2Bgxv1YGNBa8PGuNJ%2F21lIe1uYA8H%2BIjfexV2wWVPpvGsF9HMZT9ebVW3eaMI6dOaKP2ipH7AxPWWKd6GlyEpmIOpjTAi8rNbVa67pMIq8R85r2Ld0%2Ftffz9JAFMq9Ba09%2Fk%2BtgRVgLFk56y5nZOLBNOoA1lr5peYFkozj3GRuHq7NDWiSLppinoF73dPkLTxOCetdhAN7NCgEZFN6WukZJj46OrS0xIzsczHyCnrQLRrxnBWOAoQmRhIFl2kR5hBtdhFbwGncGtyeWyZJ%2ByP%2FbdzA4h3UbcP0eGs2dueDr9q7j6mZA0Zl%2FWQ79xfrlypM3OKf%2Br9%2FLIYrx4b0YD3vwJA%2FsX%2BVajtLlsNsn%2Bz7fQBCRsbwXfLUgkeSdB8Se%2BIbQn11ymzjX9IwwYqAwwY6pgFVrRvRN618Psv0wwBsFBsKIHsq%2Fy94ZMyGLtDW26qI1I2WtDIt6HTCVUUNpFCBe29pM9VgtdCP7hdQu3V0cckUOTXwYFV0tkJ9id5ZPfxDuinurPm%2FLZLyeE6Z2tMkFk3pFKYi%2ButkkbX4rBDui%2BC5Nfr5sJRIg4H%2BDJ0QEP3weMEL1E%2F8v4sQ9R%2FEJ%2Fy9bvzF1fXO%2BCN2zKxYyMP7YeXShS8AAjpF&X-Amz-Signature=349459e0bf0368857289b5d45af06dee334039d5576ea9777ffe53f61e5284be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
