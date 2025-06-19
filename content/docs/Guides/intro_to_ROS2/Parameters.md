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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3V36LPA%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T071014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID6VVoL4CDA2h3qEAUjBluOSMOpUgjEuvt0EKXaFbwFzAiBe0C1Ke3ohXMBsRSzqGIzA%2FTNo9qWDYHklhgf6HBfAcCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMqXH4EYxtBlAKTiBiKtwDFcOE1N1M55Gwf04BfFJP6%2B%2FVlSY1UxiV3RFof69cFEZ9x5pC55oUOtHo1qu4cW6bF%2F2m%2BAZoYFmP7xu%2Bv8MccECjo9fa%2FeqUAzzfkd7j5kPydowZDhmQS4Fv8rCWUvpJN0y2wXIgHdtdEgwWmQkhFY4fMmeFHTkTBU1E4M2k%2B1wVV7Rx6vItuPABiLEwjeSS1t07ZNtz8R5K2YxqfWPOA6agS3rgCSKvj7LR4B7MlU8ZNofoDknw8h3I1dGqAMtJPT6KCyYTRrpfZoWHn2y18xwl1GBZIq2gaia8%2BQAyNc9WpH6divHEh6nj93uBohmDfoAb1rubiIKPw%2F4WqHMEeIgn7avrVvwdZfTHyMtDenmEPTx7YJ136j9yVWnH205fj0XeEMo%2BMsHkWvtYYcq%2FPtPNvFC4fQLlFe%2F0yUPb2VQvaAzJbSUn0zS%2B1oVKzbx3Wsbf5hC8bDjeeOOqxdCKQK%2FYB56WJ91c2hQSW5TeFsIr8AgZOapFLaq35N6FGk%2BOJsNQOb1%2BBKCXgyMV0tc1PVLHzuzpdgiVcrRCXau%2BCsZMSjIZHd6HkU50Qezl1mCWYCzps5cJp7YFPs7N4zfTUps%2FqBnc3le3yN5FIxCgYT0xtm02DEXSGGl2YT8wg9%2FOwgY6pgGVfo7JKLbxm%2B26t3fo92UDCslvwpNI%2B1Mar%2F4AiOuyVwOEL84iEl9CRNklYOQDF1Vf2NzOvqZ37cNdq7tGoBL%2BWRCcfjwfhWajYcFrtYRJmNyvagoPEP065zPrG8HIMjR%2Fwc3ZSlRBQG%2BqUjb26HifJ88ikMMGd78gfpiQ8xob5rdola7CpDSVo5eaxq%2BzZ5fHm37ceKt6GushVU9H8KRp8K0OJthT&X-Amz-Signature=ace829ff6e3b34e43ef7cae127d260e3894823f04b4e0921e5f59aa431bbad7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
