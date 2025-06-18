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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SCWRWTX%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T190712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCoYGTyz4EyHO65uY5%2BKTU%2BNyJD648MryxiqBs2EvmBkAIgeuFO6CfsvXL2OIjKFFK7j2%2B9SHFwU4ZR%2BAVCw%2FoKrL0qiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBhn03Kxig7oF7XzMCrcA3NGL7sEBCGb7Hs0JyJ00MuZRrRXFo8iYc%2BfVGb2WdY8kRyeZx44Vi5E2UNJzoeerslxSwrHI4NnKo8VDL6lYVillaflGhfokPDz2pN60JW8yoMPwdUmndcmkCs9HkMXV%2F7oXpFQF%2BrBV%2FHXpsRKmWX2zNQFWjQ%2FLNtqAK9076D2ou6LnBbuRdaPjoAk0gt87RUi7AzyRpb4u0tVXkxUJRktph%2BqyjaU%2FyPo5FUQmVSpyIz8rO6JwBYwVF58E1Ijw7XIHw9eAU%2FZFff8i4UOkE%2FL5j56LtGycgDUuZuVwZgrIbgneZSXQZx4Ik7dXHlSG3YDzZVDu%2BTPAxKLeSD9v%2FyCMi3YXvPclJTfJKIPnkec7FitPiqa84BwdayTLcXsfzg%2FiE8LXvG%2FvVquFAiJq9J%2BNtcrTjCmev6ZZE6ihHOlpQHLgj2IW5EkMRWB2J1yosqkzNa8Geq6iZ%2BjiG2zIUQRerCDJS50LlTsl3kw%2FqYES%2BFIUu19Auv%2B%2BRqiYl8vYMp4SVVGDLzMIAK744Au4b1a0hiJ3iz5wmA2uGCxew%2BciM8pTiPHW2eJ5%2BBei4Z2o2AXfkj6sAE0AuCSTnLykT36VGfCGSu5Grwc0LwqyC1QcetEbr1C%2FDhL5LajMNaGzMIGOqUBO%2F6QkeHPu3xDwOR2WdbBmHTcSoR3JFtvKwnZgi86irx2Gov1NGci6Li1gcasVQs9QL2ixZkos3JSzl%2FmwrUtI2BHhKElXIkGsNtZm2xSGqSzQKC9B0vfni16rykbm5PExhJYm1mv9dFhzP5IecUVYoGqHvBVH2LZed43ynG%2FsW5IUV89hzhnaiZmUg%2F25U43MpxO1Ed6%2FTAgmKJv%2FHFTHgl0KlES&X-Amz-Signature=32e2c1d8f455bdfe297ea5ff33dd4a3217bc5c33d4d5a000caed475be3621ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
