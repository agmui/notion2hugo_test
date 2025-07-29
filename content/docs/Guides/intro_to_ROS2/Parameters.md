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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNL4XSG6%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIHmKl95gxhwEPVc7IoiKNBPHarv7lfHYO2Fp9ohAzgQjAiEAi2zepjmBYetkjg1ApoY5X5HG5FiHyZxr43NQzDD0LDwqiAQIof%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqlMnDuyG2o2%2By6rCrcAxhgva2%2Bzj3ZhoLbISWHPzuEWVAsFfQ8INdvnSo3OaEUux0nlZD%2B5CKY3y4PFXpxdNYeGFAyceX3rBYkReAwSVLRr%2BrHC%2BDSv6c2f%2FoNS9GSilBu49QAup0ld1OvBRnTRH8mPT%2BOnBgxw0O%2B8gdAtVG1qVa36pB%2F87l22xQadFS2oo7El%2B7PJN%2F4XdQfKyDF40VOhFcfCRUfatnV0KjOYymr7OhFYvPFOy9XIVNM1LWjW%2B70%2BwBDy7j7b%2B8%2FhoptADHmf%2FMEiCA%2BuZjH4Z%2BMGgLeibqGdpnBw7mAGv4L3Wm%2BR5xSiTPMr6ZhN2qwfyTruQuwOPnhN5HCUvBepxDcGgiKve5nb9w7r877sDBWJNT9azo5xxXNsPENIuZlrHAaM5eciYuUu6mdx%2FDcKd4rfwtQbpPxdglEfVYiOfIQAR1XN0QQcW5oN5%2FAcsqFV0pe5HfxMgg1ZJ2%2F%2BlQ%2FkhBvnwZgdibcyn1dBSAd6W0pSksvtgNSpNaUqYrcngQEr7KPXUCynKnu9fWBMbogPNSW60c7cD5pw53h2kcfyIhpo1Nb%2B4tjqTVyul6RaAse8c4UZF7qrmqslP0Pb27CbwGj%2BJqpmITIRH3ZWVkuiCoeX7vmeLx3SYPXciVAgvqXMOmCosQGOqUBgxHp2ABNdtdTBzpjDpPyWE1foUxj3CmaIJGtyTI6Se6rIb4GFdRtXQrFdsMH9vCyjphfCivquQjNJO%2FCYRx1HS3a9U%2BA5g6XtkjCqL7WiJonNQPuURazf03u77EaZk%2FzbwyO%2BooS7agtYLvhafJZeTrAKk9%2FWfrIqkqEGwij5Fgc4gyKQxP7qSTVvi21%2BwBiu2JS9T0HPGw2tQ6VVj3lkCruvZ0z&X-Amz-Signature=59929b0332042fadc5e0433c6cc0cc9c1d1558eb9fbf7929d4d4c97c40957f7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
