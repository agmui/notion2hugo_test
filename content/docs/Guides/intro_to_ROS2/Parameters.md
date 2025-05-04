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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2GN7VR%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQCB15bznkOKnofdgKicYZaVP7xQGdmRzdpHnBtflLtsbAIhAMzuIi01tHXG1UbOBdnChEI9PVPLdsHjYqZjuKL8dcqXKv8DCBgQABoMNjM3NDIzMTgzODA1IgwhZaFtFVNGPeHt%2Fd8q3ANdKR3ukxBQREo%2FjtL2Q4UB6ZVZHip566KjBsEfyk%2FySTaRgUHfNrWpsuunggPQOCRfvDSuLaNRkgQ6s84UrH0Wo6AgvVDyILFLKRmAfVEVEGRGsRKCIYJ9DDOQdu%2Ba2rrs%2BTBg9uQLIXzassNfUmDmklXxrBYQG3jeFuCxN4krA32sOm4CGPkit3Fy6ty%2BSGhyJ3PKI6NSWnE%2FD%2FA7VX1YdR8t4Guh6p7B05Q1v0Io6zR%2F1sxd5eSvsOUhSrSuvdMXr41XJGWFB9h7fExSIuVRC6lOWbNHrTllzpq5GQTJ2zjMdMuePaVzk%2Ba5jbNNxpIDs5SL%2Bz4a7%2FFlYibsHTchrZM0ETSK75oHICgd4A8jp1Wek2lEvLDN82dDdhXyfiMl8c6dzLY4%2Bpi%2B7H1zDCbLVNcZFeiWK%2FM0XDMaNZHaP3KLEUZhcNnyxHpDRaR1BKyt8Ug6kqoyNWsLd6tAe%2BzsHFp9RS%2FN0ZvTawMijhxKx3ioFTjNBnszwLO2sdvhvULMV8UIKf8I%2BwCgUqHPrKHeq8XkaEOW%2BUj6LmHcuk6zDIpLuxD4DG6b4dRNBOKnghOKnjRQVo7K6klAT17Mr07putQfUs9M%2BHuXDMIVv7HcizV4GlhuB2cXREC6tzCc9d3ABjqkAXuilJCmOSw%2FGTqk0FjkfjIQlZJDjjkhQc2BKAzww1zNL%2B2BXMIU%2FBSDzKB9ciHRMXSC0UN%2FspdCzKdP8fO7zo%2FN5ptrp%2BmNw9G%2F2Jhp3%2BZ3r3RGCVRruB19EzpJKJch8RB3L5zKOGe1zDCwcvwX4a8u2kETCfIJJtdJnt3OOqHgkSR9avYhiJfprKWd6DTh1HreTaGOmN3iWLoB7auq6i1GPalb&X-Amz-Signature=5635b810c96fa2fa4d40a9b7cb3a62a1e8687a82c9bcd34aca0d1289b3a1c3a2&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
