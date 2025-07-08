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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UME5BTBL%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T051157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQDLGU0V70QmwGTOiq85MfOm7%2FAujYduOFhAIBmgvZTYewIgO6uuaYZclBpaWZY2lZbcU3mXG6c4ot06NrddUtTMN88qiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHPNjPqX9wpHNKuqQSrcA93HyiRX2m2XGdf%2Fr%2Bd1Tq50HMW12rTm8kzzbUzbKIwczeh9u82A3PdCPfeisJWYEIwRM89ql%2F53%2B%2Fk90AZsOhBndSOzZsZ8ByhL6JHWH2k562furVZw69iuMPUHdsXNeIrF1q6onDqL1NcaMLoB%2BjE3k88q%2Bo22GdnYe5RJiYPZOacHkSBR92GSIksW7m3orwL7pvKdXCbGleAtmc%2FbAwZfpFR6xp%2BjyFp%2Bmb0jHyaGh3vWUNHF7zBDQdANrku5%2FTHAGwWfnU9rylujf548OFTAmtN6xn%2BMsQkUEIM51y1t04k1BFCV2MOusPNEkwDey1QRg01aP4%2FUu%2Bx85WiXphbt9sYT9wYrfatiEK4sSvBfiAox7MM%2FnjO4XFbsvjwrUdPmwAv8nDzcjwhbimPcZjTfjaVQX9PXQ6llM3vIVRNbVlQB%2FrxoFUyvw7HBzyrKVe3I2ApASPsvsVMAHgoGwxx2TVrXdm82vsgtK%2BVCNQPSrAIcwU9wNgziWRen9oof3pmdLAHOAGh9xPL4COqRt5d2RQLzVWff2M6fXh8SPfnEI1C64Io9YNDMAdlde8HvvJDvE58fUIp2uRXINuuHq%2FTE2X1S3VEnXIqt68tGf5cjvhhMIu2iz42EuS5zMMuEssMGOqUB2LMm6ijp69%2FvkvhE%2FRLKsZbLeI%2BCoCRVLEWRlwNCvqbjMgX6qAAK3VcKb4%2FZNzZgts0Zq5X63x4q8sTkZJDCbtkGX2ZNOPFtTqfkGH4FoCiSFLKvDWKdJUpA4gV7XI%2FV35oF5KOVDN7VTNfifAU0V2NPgggxumlMlIvANUNiAiyRNoDfCLfbS57SDQGcqpCmXQjHqHQzof7RlavwzGMN98YRMVyr&X-Amz-Signature=58b77a9d9776e641b99a6e2ab03d6ba0a51bf44000d5695ac4d5d1803da8218c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
