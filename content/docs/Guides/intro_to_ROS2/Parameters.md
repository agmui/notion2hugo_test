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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAJD4T4C%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxbss5xGN0AescfcIZ6IbfVtpFLRIr9CO1Bu2E%2F%2B%2FZ8AiBHQv25P%2BOCx%2FjPppZlSLMSFuO7g9zaDf34kKaf4rtXeiqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMPJhHeXtH3Er4%2BqGUKtwDkgE175Sergr%2F5y7eaMA3T0PYGdrNLm0L%2F8J00OYTIUEOf2ycUkvNlB0cePsf9e4tjU8pM0OXo5gNVzw9Qm6wIqosKlIb3xITRvHbk8oLAhoOYIOg5QWhe2SQzLZ0V%2BS4GwU0jR7HW79R1UZCnjMlNUzSCkCLCLHlOg4m%2BaKkEqJ62XnlM%2FA0chsoxJPeVEfFqsXTvanpWa62HrMy9oJ%2Bj23eCQK2cGmhSeap7SbPCV2GkZi04UImNbtCblHRO3qk7cNDyImCAPXtZb%2BoaFMnM05BUj%2F5gJo0%2BZ%2FERVAD3eKE3fXer87OFlKEZ3DR%2B8ShHiaWSLdY0VviSQ06QccWGlEcf%2F%2FcaOT7uae1qQpajwjayJf7plvBFLaq2h8OWFdnURPmfy74wvG%2FAX%2FY8EHpqjv3RNK%2FmAuKubPfEU06oPSY04iblmGAmdGs3O39mUVAOsXJT9Cjy0577dYhGq72RhfCkZ5KipsVCRvuLMUoA6H9R2zVGvZLs0n%2BN5fQBkDy7ib50ghZwiW5caWw3ysCb%2BLOevc1QJBkWtkt1KxglnCMxzy0or3MMEc%2FPyQDidwqgU1Cgw85O%2BL7RN9Q5t5E0lG3inttImuuVdwy51ZM%2BUTwOG2cZey%2B%2BeQMQg8wrNbDwAY6pgFPFgOjeGuf8EqYrmz6Xtz9XSVBYiGXurmkvubvtBXinqxAZi07YymcHU2Y4SnF5DA72oyTuF8%2BRIxfXIEiOp%2ByelGV28VY4Ib93WS1Cs1hQD%2Fw43SG74rrakoh%2F9rPw%2FpveknIjdpfstEtFtVkB7MfPEmM1flhEBnKvjjSjS54k2bHoT3W8rPQbqBSA1LKowVLH28%2B1qYwDS7CO96RTmbXCozKaUwj&X-Amz-Signature=3e2ee6e680c66b2b5cfa0e17c492b6f2787a5944ac20c5fb2b1881dac0b2dc36&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
