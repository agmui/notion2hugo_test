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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656EAEFCR%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T090926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJIMEYCIQCYPSF72MOglFaxw8wMWWCxOeoY3tCGwUEd86P6cvHuYQIhAOEv4ww7uUl3Ul2%2Fhvn4QKgivawrd%2BQ7JAWYP2PiNKIMKv8DCHEQABoMNjM3NDIzMTgzODA1Igymzg0E7i9h93RQCr4q3AN1j%2Fhd9k63dZ2JzhmMcYoO4vhVMZGLaae3GeNAPVl43fmxSrtIsMRWPmt1C3o7yqEfaE2AmMWYVwMyCIJtlPd0G8HPR8uw%2BqsaIaHa9oqJWkVLFBuJXVBaH8KqNICelUXFazd0o2n9iYN9kcb4JNYRZfCOgg9ABC%2BF072w5nuEh%2FfKDbUrUwBhfrPJTpPf2rXzE1%2FIFMlUdx4PYAPHAp0j8ruSjN7tXO3jEGkUYmyQhss4LqM%2FnP027JM%2FIYvP3AoZxKPnqWM9TBptSwbFDUSfQ6F1F034D6JOBZ9doL2uhEy3cpJwgC6GLP5SQ0qDFoMBoak%2BKkRKF%2Bl4qVVu6KGBxFRamqpIX4K7mVmF9gn5MZTDKqPs0atJPkD8OiHrDmKr%2FuDOjQeX%2FVEGAXJ6s3hzEUbbEnFZPw7c3AqeFxqoZAX2GVufokkGAhGQ9%2BZCOgoXtfLy5IPy%2BtqwMkyVO9g8yIaWkCNmjSFNWfUYpf0G0UI%2BMJwHR7alo3EUp11AKjN%2Fa2ZFInlyMU276NiEEvcDEtLtCrGZ6ErHqYtYlJoeUnyF6vGOUqlRRXBRR4rgmtvLHCAkzkUM6pHDbWU5%2FQ%2BNYJcgDj5jnVqq8MbTuOkonI2ucuiLC2uojap50DDX94DFBjqkAdjOzZMAhSvykrqAmE%2BYXujZTy%2BWnyYIO%2F%2Fd8HGk5j%2B1oraAngX5Ij8XgEyhoGJ45OD12XOZZo7jsfCAsl0NPwmiiaWZf3C7GgR%2FBg2cmn0PKxToc7dAuY6NqNzsSZFvbbpCq6vsQugOCXQk5%2B3p0X%2FU%2FVoF3RW2zgQXIuJeiyZONJA7Smy2rRAkcQVm50A3g4ay%2FIGQ4QESRLsgJ0uFUwSzbEhi&X-Amz-Signature=c803f393486e4cacea3a880dac3009cb5807d444ae329a9f7a57ee29155474c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
