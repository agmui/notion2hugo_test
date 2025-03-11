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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VM4VEIPW%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T032009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQDao%2F1%2BKxx3ZjS%2FmGKEeI0EWmwzv1R9oiGgmxwitOvU0wIgfCod8QQowxrWW0Z0TzSv%2FKWNE9uapX%2FJMCZsb1pvNUEqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzTnpq5a%2Fx4lu2ITyrcA0i4RxoS4GiAnJxLihqsuW0bYQ%2BWQzapb7rPQ6z4g80lSyckAuTaxNihZf%2F1s9v9UmrXQs4ZL2A%2Bglw7mmW0oqmkI08Zhz2oTDuxKuGhTXOuwA%2Fgi22lHdWxuBp4fumySx8lfu%2F%2B741%2FXEEf%2BDmKJC4p4pYmD0dgt7uS4aj2F47cSWXLqLHdlfYRjisVo6bsCCTCh6C4w3Wrt8C1Hl1Gwqza9JA6bFOoj%2Fn6gbDtihAKUs%2FoCauYXOFaEWVuj8uVAylCXcSXurbxPCguR81Blj%2FKG6YJ2JzCYxdH4fi0TEaW6T1zkvR8aRvsZNU%2BH%2BX10wv4Hg1gAInt%2FSI942g2XgGLoVk%2FyoATP2MqBb6bu2kPiN5vhWqq5K1GtaOw3Qh%2BA7Dp2tHpugKjRAm%2FJy7%2FXh365CdRNHjlartLtspcxwIDrBdbUFe9iwqrEnwiISThpNQganqxcP8vYeb9qGFg3IGMs%2BwaBGGCVUq4wOgT85ELUd6o0Osw8syZFZdkw4XQqPLKQKWarsDhtN2LvtDLXsC1ukFm4yW59U%2Bl3rhL8Wyu2u1%2F3u3Y4TVOsUf%2Fc0xXyBMBQUliGYt%2BaRHIywt2nH6qHV%2B7BqhQU2gDrnCKtAHdb9TR6ChTt4C7bqxIMOTPvr4GOqUBzNzjMNh9q9WTI3M6RRM2NLHFyWxAgfYAjfh1HW8JwVFxoD86Zb4sz8SJTamoeCAeDfhrpwhxhiLc6hzjpTRVNuRB1q6djdC2EAnk7d1ZkDR1sLT54e4WTgYf5AO0j%2BZpvmz%2Fd1WxdX%2FpEpwKXIGL36tbTouQTri7Eq45HrcVsgZ7mNSbsfKhx%2F6i68qIf%2BnsmqCXuLAW4tRa3BQevC6uLjtx9kIh&X-Amz-Signature=510e2033e1d2907591b457045b3663258947e35c7f3c679b4cb03460042e77ad&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
