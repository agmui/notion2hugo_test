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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EUTVO7S%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T033506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIC1kaIn5SkaWS5Mx%2BDtHDLtaJ745bDuQIFTXf%2B8QZnpGAiEAuiRJu0f47cBZBjdB8LP62GDoyMXVdDddOtGNyTcyVrsq%2FwMIJBAAGgw2Mzc0MjMxODM4MDUiDOH%2BPR5Sw2ebB1Fz7ircA3GuYYvyLLYJ35kIxrY8DNC05X3iQGIe6eUtuokwsBnry4xjfRgVW31hXP5cjK%2BNCLsLrcCqQjuaP6Xt0%2FtsBZuk7hE6XyawoDNf9Iz7sHrLwAVFAvP8P7%2FyeLO4PVkVXpwFM2jGmvsCEJC7qqUbDyLCfJlE4Jqi7X%2FlkURHqdwnD%2Ff1U8DAWYrXSOP1GH1ZzmOjVeFlTnt5Mwqr2WHbqN%2FOTaq0QnfFENvkOq0%2FzJQbb3GBIpuaaC2vuHtvC6cS1NxJPu1wZJWROderqzuIX99ILMpCNhuZEQyd6MOy2Jjm3mhBWGvbq9%2B%2BSTHD4G1zyJjVOa%2FN8RqiiceJirpirzAaty4%2BO2%2BKBFt03hLLIbI%2FjmjaDHuhCkM2BI%2FFTcF4FJOGNNM%2BCAAe%2FGziUj4DbBm7%2BmLQq%2Fcr9OEcigwhdLi%2FGKyZdWTlxOSGt%2BpgjmSP%2FNm2IufXorjHAMO4lTXvZk3H5OZV7nqJYPfaRFNrQpW3yDiYVyMKHDEy7Mg0Iq3E%2BeGSNmWMtBaD4NDNcaGGT29Hh9Qk9R911AqpwetgNSYcGlLkopwGi%2BDTM8x3vBfWbyNRg9MCaGcD%2BzrF5v7XRt1WqMgDzpZxXz0JggaUkuU6FT0LLS0oer6E%2FCp4MKS2lcEGOqUBv8X3TtCTIpnoTYnEZIyd7Tpyrn3x9YKKx3qvkLGDJIVjKfyU0lhFNrXt6vN25%2FaqT%2BN40nFAhhsUkH4BmsKnya9WsTEwV%2FWt9hOsfmZtnudipVu3hVsrziOE4vJPhE%2FqamyfJsFF7VQQfz1F4ojmBG1YOj64Qm5ELmVG75lEkLu6RwHB6Ut2PFWvE03chYoe0U51Ks7MrfsO5%2FOlkHjOIR2NerV9&X-Amz-Signature=6d52eeb7d0f37fe098526f33f042cad4b65c3d8d66725df202333cfb997f72a1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
