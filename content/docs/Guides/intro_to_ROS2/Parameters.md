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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UT65XJ5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBID%2BUEMytfx49EK5VAVJp3N9oGIhXV1gqqeOBjFUwnxAiEAtVaFQc1Jtvpwot1nhcR%2FlsArt%2B8gO70w%2FLvvybG1ozQq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDNKwFP15%2FjAYWErOdSrcA%2BLIUOdhcFDi6S7FtS39w8ibuoij9MPLLG6i0NCLHfBeEHdx%2BWZyByCmKgidonA7tsAklaO4%2BWRiaNP%2FZQgAUKcKKiK94zdRtpqtONKpWmpi%2BdUOPMHGWW5C57j9GfNIVFT7EL9Vf8a%2BWmoiv35wYGoQM%2F%2BhNbmJl8OkS1KhruHrQ2cMA9qr3Wy5ZPnhvDoytrYmsbe%2FlYsHxo4qi%2FmPr9uroluf2PaOIq88gbybC2oCHhFKY%2FKHsLCZ1Quq3SIHbNqjPscZaG1XNnBjWVBQ0Vufcj%2FiQqRiiG3WL4vWx84rNEIZBpCF8aMlmfyLhE4bTDhSjq11jpHqDuhuLYY%2FIEAqlXKe6dRo2%2FDuWWAQ9eoePVAV%2BhWaxiGao2ZrmsePUHajBITMbRk%2BlXeKOeNaNBjtrdPS9UOkS%2F4h8SFQEVkov9XJw%2BIw0hBrhxGNqQ22R262eTugJFIAHGevofviZMY8BCa%2BOgpnq%2BNw3BVP4i7vxbjij0qlxSG4SN5aea5FxMcSF9Pyr1klBd3f4Ci24HjMIMwuP9pXgYFOPFHjYPlDVCv0oqd1odp0Hw0l1j2dNlfJ4TzsGPGe9qxL7FXEXXv0isUHRUqvEqRNmcxTj%2BLPdKChpoB5bdTEb5x3MI2L58AGOqUB3J8I7TLhA9%2BNmRtOP8D6E69dlnwG2cMOB25lzrVRG0wTHvD7vIkMCcxQs6M2Z0wC8%2FPOr35mgf216OIvif8MLeT5KbN1XTbWiqdPNXaxvnrEYiEd2QfTD%2Besf7smDMhXgHZhj79Oz758MkAwBjcg5H6TRZETENTlnRaZaMo%2BEWhIOnASQcncOJSlyx6Gxpgl8e%2Bp40WLyXdUXPKz2NCnfZSl1U5D&X-Amz-Signature=cdb9281dceacc44876e61354f3e26ea17edb603b5f2972fce2a3b71e081f68ce&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
