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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DESRGEE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T140919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQCuWwHDNK26WJm5DiRT%2BQdJTm1T7Wl4bQ6RNKfndmv0MwIgO67gq%2BzmDd3KJUh%2Fxk0bnTXt0W2G81O%2FGPmdjF99xaQqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOM9lRaxFwb%2FYOl%2BUircAyRtiM6uSAp%2Bmm9VrCCVOxkvuMmkPfeTj4lWhlE9dGverdKF%2FzTGcUT1iO8wKP0dS7%2BODmfh%2Fxj6R91Pm0j4qfqcUhmoLShmg4Fke6lqgwtzhMTpFNfTAaK9Mzj8orfffOLGELZhl0EwxEky8p5rFlfIVT2IwpF5OfMjW5yvMYDtcEfr8I83ESt4vBVtntqKtEueiOlRFMI19P8wQ4kOkEr%2F4WgIIxesZRMeWQ1PyVOd8iF8%2Fs8p2xQW3cd3kKutWYElJoIEgLhHiQZeds%2FbsYWYILQClM9Octu7ed6Qgl6ZztJMUeuDpHxZfhpyaC2HBn1sEkNZxVapd5CrBduUG%2B1O8RPAnwRKj7nhPDdMVujJvcYmRskY%2BGkksxoAMYyuQI%2BlyRJ1l222kJTBjiMU2VIsK3t1a5GnZUtCqvRCT7UaitqPi%2BXINEqUY6KJMEHaiAu9HBQ2%2FuGmCz8w9uB%2BE0AC9Rw6YyB6tiNLbkH%2FOGPbsAJR59k%2FNcueeSgl4pFk3nkbw56Xd1G2Z7wz%2B3xuCCmBIU9oo2F6T3z2N01YqH%2F3C6%2FiWW3VzacFHeRecvSNBuO0qHLUSSrFNGBSatMNiO7IYssT9plbybTZ%2Fyn8lsgnHzkLVkd2YtOO6eIuML609sEGOqUBMPztINajG7ge3GaISEWTZlyafv0z0Ye03oHi3svPAxkNI1gszBLZYL3cBVXwszOFT7hYQcEb%2F8fHHlF1onMdEcoG4gDT1jsmjqloYY2GMiyL8NMasrsAbLzyAKUP9xoRziQk4g9ExTHa%2BPSz2yJFg5gwUc0NbPNllDCESebeK2qTpsCp%2FQrEKj6fqtUZ2nw6dN9JuR05ie1Q8IEPPNAciuM7JFkQ&X-Amz-Signature=559c985200b849c5145b06ec2e331ff62d8755c10ba35ae6cbacc4300507c035&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
