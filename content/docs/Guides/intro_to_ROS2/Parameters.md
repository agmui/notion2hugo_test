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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FMNJGKQ%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T210710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJIMEYCIQDl6zi5oFHUm1YUhmpQoeoTbvHQR86aOpkhvKE%2BVf5FIQIhAJy50WEuWFlAqm8bfgHnWILvvCeSFWrMRHUGj%2F1%2B1ygzKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzuZyWhuh4YchgxdLcq3AOMiXaSE7vrGG%2Fo63EFmTtSAZEe29FupIzD0%2BvzBNNjsckh0h429BKOo93tqs3vCpBtKhPXcP%2Ber5RqMsgaPuBGPgv2l9tsjyX3zWPerDL1tdYY069dDpY7LJxwr8nzrMZ%2BJqGFwYfqEt0v2CDhBmnSWevuisV%2B1sSZ6wDt9o1UNvgWxwnifmJ9HUWiIWKH7TYhusw9trBt%2Fli%2BNyQiv8xwcq3G4sDs0B6fdjh1SMeOin21Rj6z4BlsAHgJIO2u2%2FR0S4SCWHFDVW1eMSawtAcvUgoUTcIX9w3lupFvUeelo8PovOBr8f1MAv03E8xwmSpfXbnAuAoFCUzrjR19j5kY7qfaS%2BPdjnYX%2F7oQbY9wKHVWWm6%2FCJtY1gdTv3aN03PusXPClUHY2wxqZ3mvbLrz8zySSN39fcNp3HEdMuqaQ1NhQqJ11tIELP3dys5WksfxroMX2CWd%2BDV1jO3eioTMPt32NuEJoRtnbI7Rnl%2BR5zlb8Bf98A2AJlW4bR%2FvDbhq4TpnfA21TFE2TJJzG94xaVXaLC%2BplD4Qq6xLagb8mOdcMNBqU%2Fh%2Fr2x6Ij2wfU3UkeVxWa%2BvJcj%2FlpnlI0c9791CY2%2FrvRjaQOI7txTJt2d%2BiQsFOs%2Fx1sfJojC489nABjqkAR8BahD9lpi3aFVJ4ypGjUofposYmLY8joND4YEfvuMD1y%2BbMlOgzz%2FXu8poUseinUMt5dgekFsmwj5c7wzLOmjWSO1rhqqBsVxfyaW0hKoKMh0woHtrU9sKw5T7XB4E9lkqny4jGziIoVJNgQQUkHQkurvmqR6t8MsS4X091iJtLp3iGoC8eZ7PS%2BpfqTh0dbUCEUIqpe8A6r4fIAyJh8GrYHAJ&X-Amz-Signature=c9542bc6cbe74009b73e1d221578d5135e495dbdde68317c58a9d61f7901a677&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
