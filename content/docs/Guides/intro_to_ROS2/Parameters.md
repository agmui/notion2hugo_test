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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667INDZKF%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T041226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDTisiZIoxW8xPwZM9mRi5u5yu5HuPM6AXsCwccoLznGAIgDG7B0IaFjC6phufqUnZvvezVaHwew7WBZlPx5nfb%2F1oq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDOl5IkE7n4bpVST92CrcA58EcrNZW25NwJznwH2JiOfMKFie%2FPRpSZZj3gooE9yLmplSSk3jEPyeh5SCCNz6mq16BN6wLPo8WyybGKG9MJI2t%2FeVdrRkV814jstDBHse8Oekm4ne84qBR7MbcF6TJGouptbZMDR222Ea2SpPnpuA7%2FX2lFJPxpHm%2FEpoN6atOAK6wlLsycA3PhBWbh0A7H6s9ZnquiYoIQAJvK1vrAXvD0uNDUV4uZLC%2FIs%2BoBr6UcOiRzvPB285vthJcvSoetMgkagUgMPD1OrrtUeY1q7iatx4LRrxeoo%2BMBNbA7uWzsZUg1LfKBRegzz8hv5QifMJ7qLypQ8uBKBxgm3KZmHQ1ztn%2BeEFSzkLT7BXTrHTc92oZfe%2BKKJlS4LXwWD46wR2wEz8onU4peD45ZK%2BJCVU8pHe1FnODBZVx2Yc9vMVi6AA0i7eqRojVH0acrDm83roB08bDbENHXPKuN%2BBllLAUzZGkrrrsma5i18lhl4Pb6LtXn5Imc7zfKYP3G%2BjhxEHdCNY0E0SOl2yIfxserjL%2FaFHMfDa9%2B8WYTbyOMRpwUkp555%2FumAkGThiiGJMAE1qdf00qHjv9T2FYiaE8DhrWxqqczNRrgNkWCqn%2FlY2gUZ0AtCJ1h5TV0OIMJHss8IGOqUBael5F4BwJejeRjD7FwscjH%2BBKrJR9bsyLNZPE1XSXZXhEne4Pb9TexGCGRt41jXBGjCvPv%2FjnRMc%2BoRXXUD3uBB4HNTBShwnd7LQ24PUQOS0%2FLnZ0PSiQUCEqxcPVoGmBPMfmvBU3Uo8uglfFHF7CDOxpSFJO0TBNuMCQX4LfQvI%2FaGPVJLoq9jwBmFY%2BxEUY4oNfbG0J2zVi9wDlb2Ajmva9W1D&X-Amz-Signature=9de68d49bfc67e090220f7a4d432c618696bbb76fce0818bf81aedd16f70d7d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
