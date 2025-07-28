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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UG6BNMHF%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T133228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIDXiR4QZBXsQXwpAPQxI6SKTM%2B6vp0ehVtK5W7vuMPY6AiEA6NvF3zsW12Nvp%2FtD%2FhOUcAD9hCtZziBOEq9rfF5K4akqiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCB7bqtyAGDechsfcyrcA3A2g1vjyTarS1Xmq1EMgYSPAhmZagPHtmp7ncXb6q2VR2AsyFwjocglyZXynWhwTx6FVeesjyF0zGgMiJK%2BwNRdTzBX8PfdeZn1SwlioYBHDze7GrELMFh3pGtc9eR9%2Fj1j7JmOpQrRCYqvuk4eno2Z5ZyoyGAsKtr9eH0CVeUcwVFUzheWo9x%2FJYY9AixnRTYg%2FtaHCruQakbZyb6mATc0hNx%2B5Y2qd5qte6xrp%2FK6uT0P9whEVv3tBHuBOeCgwNN36nP2hRBLkeY3dRdVUrvdmP1z1BFLNujamy3DLAxqE5EVZi8jDij7QpHFRCh1YQPBr5ZIyotKjsNIiJSwmpx9VI3jg92Pdyt%2BIqdAvGDRBUUCrM4UO%2BV06IQs4dNX3aTZU6cX3NeCFhsfxhlvNwAQEfRSJx4dMZ%2FC08nk7C%2FGHR5faMmbfzFrFwGJ9dTt3ckLIFnOm3QzeO9IuoGU8IvXFXBr5QDnwOMaTaLQNboF%2BZPcBs%2BADLzi4ntiMXuCP4Ood%2FTOlvz4U8eCavisESCJ0ngOY0eQAV2XBXFSwV0m6Lfm%2FR8HUqcsClBfkBqL1ykUnRfa5d74A%2Bg3aoWz6y6TqpAKngX5s6dQZELoTaFM%2B14yT12pf7XGaIomMKbXncQGOqUBQvjvxq2I%2B%2FVv0o%2F4yCx94CG2outsc8AEo8hYnKvYalnKEGTBBGG5BLtseToyLNi%2BFfN%2F4hzLMpvEfXALW4hZSdYwWJ5IAqAID8RgELp675g0oG9SMXpVveG84%2BPqwCyox7gn0rVw%2FAUsw8cztKua0sb5tqUJQ4GThJwCccrnQGemVo%2B56I2r20PBpikCZkvYKf4ySxOXVPAW%2BBbC0ku2aMTtZWzR&X-Amz-Signature=44acba1f0c605fec6ba4f47cdb59b1b4e89e57162b7d07879b6d5ccb20172744&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
