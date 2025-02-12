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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBSOBTUM%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgq1Ygxu2JvgEdxYRZgvDNHD8weIAOEgW9%2Fw83d3UH5AiEAkDmDbnfZINKoyIcIR%2Bzjx5vrTpIp%2BizY8%2BKP7udzvUAqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3%2BjV%2BNOKA4EBAJSircA5sriZfHUhHy20%2FkqkuI5ERR01%2Fm5cKYyC%2Bb2a5nICMhQJfZGQxh6Ojy5nIXO1CTtvSu%2BeLIa%2F%2BQtWYEc209hPzNR%2FO4Qb0KV6OI9b0dRC8FHUTnCcOqLjLCbdyQ3%2B6VIpPU8qakSkel8dRqzK4JyFRfjf4xtdKQzdLGh5qDWF3u8UBmCyV4C9HA0SBibM2kyNerCTyqpqwSONHJ0j60cK%2FruXL%2FOsaeNzK2Utfm6Ec6oabemcTRUqopNtAMuefNhv1Qax4NgFTR1tspI%2BJgOBmXADQsW5REFqs%2F2h883W4H%2BWU4fFEU8fYG8MFVPCBJfaEr7VL6sXCbz%2FcTN2qRgNDhdB5encP9%2BisRZDZNcvlMKIqghuFdaroOcDKH4NoCLczR1Eo3AewWclvVaVO26IVmfpnpX8UmMyDzt%2Fh%2FHZhYwjDrKCMnJPDjq0U93UlqnrcHOPuk%2BSX%2BysPW1mIKlJZ4jWUZuCkv2D6ThLi7wz5Ebg4lOG1H4XmkDBi3woZGkDJdKT%2BmN%2BY2HU4YupKskYhh9hNlBPnnaFYUuK40yQRBR0rCT%2BjP86Jkqu712Q3hmRYfxbyY%2FhwytgQ0FO%2BsntdCRXXbUxyRiGVjPA7HD07KUZk83cdQ2UB2fRBIMP%2Busr0GOqUB2cwTvuIQZYinu1lakKf7VUs3STZWOxpIGW76uQ%2BPcRp5QMsMCItWuYhRRWQVbrGFZAZMCVd5a%2BR6tYlzhcjC4U1Id7OV%2FTB0k%2FwmNJwfwfwZqdscmwwE3HfurpZPQHGamBWApmMNucl%2BNsx25qzHFg2nBPHYCI49f75LRpN7DDwulZ2KFjR9LNUzoicRZgckD6emuaJhI%2BxxY%2BZxArLToUHCKEnw&X-Amz-Signature=b1423aa807dcfc928ec7fa370ec99a075bbaf9fcfb0222ec2802b0346826199c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
