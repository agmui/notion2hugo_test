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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5KMHQF%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T131929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEUaCXVzLXdlc3QtMiJGMEQCICO8ceYcwfzPwvCucPCxHERXupifNVqofHQHGWcSd748AiAn%2FKK1zI5m%2BvUYCY3RMWXTpJmuU6%2Bo2%2FXpThNilyFzqyqIBAi%2B%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMd9lggIQGQ6PppGp%2FKtwDswobj5eB3ioXd8hjcNs81hpEmzwXC6k5wn9U%2BEfkjwqpZ51ouKJfm2Iu8GB5ZK101j%2BZTzr7elbvZpIm0d242ZJmdK%2BMDdZJsZQ9Pr3UL%2B0NYCB8%2BGfPN2eIdxbKWFiwXUrOjuw%2BIF2LKlaGl%2BRtHQqp17iFaWbatRR%2F7vULuCPJeGM5UMv%2FvSHsL%2BsAcP11MjwdaThVG1MdWkkI3lFY3JPzPR6VMUymC3XiaZqeKA%2Ba1%2FkNP6Tlmc9gIYgksUBaHs8%2BGJmSO%2FECdJf2KP5wKTDeE8GTKYI7zsO234JNKANdNnbkiT9vNemGvKxzOtRv8tCWnoyxsCcIW6duxci3WO3I4sunfaA5nMaTI5EYS2VBXDkfgOKjIEsnX9D27f2vO2pOsw9ma%2FJTa9XNqil6W8LKk3hGTKsg8z9oRM794sFmYAULpoLeaWMxjLFAki%2FWjBE%2BDAjArMr%2BBZE5B6aUXX%2Bbkvu1py6fr3hUDIVPGdznnl43slJJekqGyI%2BnnRuRtCdrrA3YN8IkGWuPxGqhiDJd9xvzH4a208fAVBIvyDMAOeQ2eRdhZ9A%2B1Ca9jIBbwbbgUim86t4djDTemQUA8TN%2FohEC98VZUMRTARHMY94qzY3yzaBENi%2BERKYw3pzkvwY6pgFEz03QoJMymVyLNftsenLb2Js3KWYzoMZZdxfFfmUkTyzvAm2s6wUJuihoAYmrE%2BEVkAeN10KWqf1216uBYU0E9sjrcdY0rUO6JPOKnMyZqAUJyk7TH6XL7SFvL121hiLjlhiKXzj6lYoLNqJzRbgAmUMJZYZHC3XThw3gSHW%2FEdkrstxwGW6D7c2Ou7BNHUZmOS2Cp28wXCNRghjaQ4E8181SENI4&X-Amz-Signature=7231ea00dc949e2fd82a653388e2ae93cf38f5297285a3dfa5fcb396ea3a85e6&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
