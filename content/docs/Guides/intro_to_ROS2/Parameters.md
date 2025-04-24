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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXGOOMTM%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgVU1r0MlcvAadRCTzuMi14qwux3nR5eSIVk3du0TRugIhALD5ue9uMm2aZ59EP4sKwfkpvtfCzA575elgS0g3wmriKv8DCB0QABoMNjM3NDIzMTgzODA1IgwcoFHfOfzYoqFQiTcq3APp7Gy61xdsk2LJoHZVZFR1NsRVlpC0bMSVfXt%2FTLTJLKFn0T7uDvJXznpV2uBW58wtTOUieRfHwFN6WllVQSoQc%2ByqnfGXFHOXNmA%2FJjOl1AcdNcO%2FJHOZaQ6Xa5HBpvhXRm1%2F3ch86%2BIjRMjeMHbB2y77%2BmEPjTmus2x8wuwUcsSKmHt%2BcJ60tb8BRxMwbe7LafzOmCYXu2qCttMD%2B1li7U3G6hA9H0RHIp74WhXprKbHU2mj6VoE4T1Z8x6gPJezEERL4fV96thkr2NL2ljgL%2F8A1Zp2v%2Bli9%2FQ1Bse3M2kFgxmPGfSCLKgCR2hRN6EGve2Eh9IoV%2BX15pliDSrORqxrjVHYfILEltdMZzSTkWmlG%2BBPbfXJQI8e7rf2SuGe90QssrnaY5wSRM10eN8PR%2B0KL4V4lbNl84u3CR%2FGFGmm4yII8FNh0EXrqr5cZaJ9%2FBck7CHgJbQ3l4r%2B6cyWOQh00IjzmKAPHiMePh16eoZVYq%2FZDvELxDoASI3f8tSA%2B74ZvlABVUd0ZRdICUEv5mpASA7ck%2FJNWBI07lvBh6HSH1mUfje%2F6PfMcye1hcm9RRLYYky%2FCwxT0QSMVk2EffdfLfamlnqZM5Q5zU%2BiqbSSyOm9C1J%2FSI%2FcRzCEpKrABjqkAa5Xw6K1gmw0GNQBfh83nRXkJO0x6hMQ%2BEpCYjCx8Uz8vRT0Ds1I9g7uqQgMg1CRuEoUGGC8tIpjfFFHNBAfkIb31rFU8QD96Xakh7sjgQvSkq%2FaiEErjeVUSXhrDR%2F7xLAzENBhblIdkTshERh9pabhM%2FfhMGbwFsh4OXtSxkSkHMA8wl%2BFHXFGelfOgkkfwlAk2YKzg6ncextm88QxAV2V1TV%2B&X-Amz-Signature=33df055333ba5a0cd2a7b40722f20baa9770762507671587a7970dafc7d07e4d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
