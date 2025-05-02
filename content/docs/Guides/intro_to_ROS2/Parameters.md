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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674A4FL6I%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQDnDjBlKne9ajkAkGr4kjg2G4ScnAWnIigKtqIsnx2%2F8gIgfjcXnlwSsoeNNtSHv75FiiQf8e4Xjd2rpctc7XFWQ%2BcqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLOoUgaEwRwLNzP4jSrcAxA%2BnN6TqoFm0g%2BFbq9SBXg2jCBOueMxMi3QW20xsFUchv%2FTGMpVr6OAoF0vFXqV0yy%2B%2FknVtzYILlxs6uw1R%2B6obmjc98jAwP%2BMKheY0QncCwSdbrbToLlOomenacQErnEhyFkc6bmcTcTdEC%2BLGNPf7QWOmt8cV3hTRrTTbt99Kuj2RIR3filZve4d3tEx0yebNGGDhwUI%2Bjkf5vsTzxvugPtnbpis21VPtfGoCCeWE%2Bu0KVAYVUuCrrbq8iH9iDMn1SjZ5NEDwDRrbY4JwQSPPcTMSTw3optIBk5bfxORIx6snm8Cv30cETVCveOfLabFMTqV8mPy8wvHhEJUiwVOgjnE6ggfy7NbMASZE8jLoAVF9erehpkndRR7vP02KSSI%2FCnRROa6XWIHWVIzPV2wrlOSQo%2BLmO24T2kLUkrpvKD6oa81g%2Bnx1vvGlXPsSiKEzk%2BjszP%2FAsm93SVxNzIrDq2ckPri5iI0VXoZtsuxZtpl2xl7oVoAQv9ZgMHSxVpIiHYCgcayztJaxZyDl0iTPbUVXUg4pCUPzvi2Us5O87tm8LPQkg6NJXHTiDsaORHPwuEZbQoAlIY1L11MJx0f4UGPJyIrPvmSd4gAddnjJX3ZxQUDb61MXHCgMOCh0cAGOqUBIS90EXWl0vg1UXZKrr19nk7TWBL%2BN1i3QtwWhJw1UUlwmQiAm22W6vUcx0eiBPsHtQEhQD6H8xA0y2ygG4jdv7BuC8Ft8IBsB29P4yc5Bb2ZU9FxMyQMVHETdnE%2BAqKTthvJgS%2B8DGLA2lMN1k85QGGvM3v8Vd%2FZ6%2FVyWBV8Mkthuo4OMMqsnFNA8iB%2FoBd3m4Tb4C41nkWK1VZFjQ02380xT2mt&X-Amz-Signature=0a96695a2f05b5f08eb6ebe4d8e34433bf11f31dc02f7a0635e0053d945ff7ba&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
