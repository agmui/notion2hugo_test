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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QYVSPAV%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T034121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqTAFYyuazSSO967AU4d3X7hxXcg7j8OQA7bj4CWReZAiEApile0EcivrP87Zfruz5QX0Lwjnnv3w1SMvwLYPYufpcq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDITKWaGKBf5R6DpFsyrcA0F9crvZM8Qs9KPJuNgF391Pg3Zm1tJmsGxwhQzd8B5xU9rRR5lqgdh3rQkNBBn1x7ltyodBxK3YzYw2GGkYAb17gJz4lIES86Pr%2Bb2eEIAASKsDHvcQknekwSPVXNlI8U60HLGdSQb91dwVD1K97mp7n46CdaWi6q6U7M97wFNV%2FeaDmAoh21r2V18Ds929tHWnvCuHYEvaNS84GVO3Jay7caCkOovk977zAaLPOZzr4w6hhqh425%2B2rNGY1ZPPSXMmjjxM1vuQSSLyvXxezq%2Fs3NOSxdC8U90ryjypPHq7HdD6wMTUPpEldIoD6OvvzoNtdoN1T8kKQalbpkRuwcsVWrzfYN4jLgKlPN1w5Nq2WbsCZtvte%2BenPQomzJOVPk0kGT5iLLcOz9MOm6LHmLTEyxnh3QbhCdZak3xO5qd%2FvkGADpnCWvVV3RdLWWJ978pXnsVdQBHebRHxcUt4eq7%2B6AsQhdq7MNVe6GqLixWbmqiW%2FyZukRzM7S4h5HgjzoRP7gEP5MmaINe0qgo8eFkgR3d02KsQ4WG4NK8qB2WmbWcVW8qVJ5vgLC0fxKlQ1y7spvR2GyRWbV766KbY%2FIHum7iwA0LGOOHf3PIrKLvPIejbVBNTRMeXIP%2B%2BMKXBw8IGOqUBTfC57qSuH7cGZdfHhr6Tynl6qjftzL0ELKwxI7wyB%2BrnQ5%2BWGSSTmnSRLlEWF2JIt6XJcLk8sHSP0YlGfYc92HXJDroqr3BKFgisrcF3JG9q%2BN1dPAp4gXrIcFv6LZLZ5619jrws%2FdPCVheO8IyCxiIS%2FOYapUk25qRioKqeh%2BA%2BGQc36rN96S6WOTc5UXgH3p4911YEmCzD5VerDOwfqJPl1X1p&X-Amz-Signature=3f57ba7778c66a8bdc95197bd144702b341af3dcf65734a0f29377a1589b0e89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
