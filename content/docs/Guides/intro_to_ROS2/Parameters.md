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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZS7W2NN7%2F20250303%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250303T161030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCeP0q4yT1sgD3hkL5a50jusnjxDiwsXuM2ol%2FWQGSyZwIgWaDNM1DeBBfw4VdpXhBE7MAxzooTPnVdUJXcuFsaMwEqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPIBX%2FZeglbBL2r6LircA0KHO32fpCc0ZtxtXS4eeJF359ariG6pd8c1gyM26fIc1G040eN96yNIoUw5mZ%2FVjbk1QOlTy7t0aznv0TBJO93wxz4tNL7kOecQKWNGESBboKyn9pm9DotOTde5Gj1qxdL%2BIvPQNr0SpVdmWcaMsBl1pYbvambVHkcBwKV5EYS%2FX%2FYt47rpQJcZEQ8Kp5J9ZvQ%2BE%2Fiqp4PfE4ypWdnt1JXbGjOtF5BWvBbXZMv9dqiQ2dU2gE3kLLDsOfyg0yCxRZKOglm5rs3IVkGweZex51lJBsEazClMKTgspeLt2ZWArtO9GWOe%2F0HY63jbjJIua8H4JY%2FbEF%2FNqv%2FfNZNfz0Or2Y91r4%2BGUMEPclnu%2FFCuDKIKbWLkDjLCBKjnQgi9R1TyNI1Ff%2Fv4FL6bGReSnvHs2wJIFrZcmXBdsGLHDGBvQHvaSeQaCGa6X4XucGG7sfq5LEJPTmZ15MvZkAO%2B6cf1xT9euO%2Fm%2Fs%2BpY1hn7a1F7nHoWkCgN6OcoPhD9KE3Y%2FcXciY12IWqtErRja4uG1SXWr2h%2BHUh9QT2322S1K8ogvXmb2hIRFul7h867St3Bi2Qkz%2BwQtWDoYyD2uInLK5azz5CQqZ1Eur1qaGXry%2F5H1iNjA3PURvO1pWwMK%2Bbl74GOqUB8a5camTK0OupafXGAA%2FP%2BKYg1rEl0N82G4d1Zsmc%2FzdVrkOWKG6xrpyL01ZuCfkfiIeLD3aORu7S2DwVaCWW6ND8WaroUR86jpno8EqBWSe5ZTIcgra4%2FmZYTE%2BThtyoDFiJoQ8CLne5SRUg0ocWeT%2Fd%2F5P6iZC7pEGHe4GMVZ2fOpP1pSr9UEMtt0Afrt6GriAbt5dJ50K%2Bf4g0ckKU2j%2BL1qU6&X-Amz-Signature=9926ef2d2e8088b9cb2d2779169ce5edd3b83e9cf3ed1ffbb549d94c8a80fd8f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
