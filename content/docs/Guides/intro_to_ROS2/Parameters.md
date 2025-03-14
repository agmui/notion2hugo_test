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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y744FVA4%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFF9OQ0kCOGeHCGiu%2B01VwQmFhO1J%2BJu5Ld9T0cRBVt4AiBJkfrtA9TsUgswI5PhNZSzbPB9KtQ%2FVOM8yqU9D0PBDSqIBAj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMes%2B3OMTgBz%2FwbrzHKtwD4vYP5t%2FI3dyZD080tSqzbwsZ7Xz6Cbyc1a%2FmALZyMfDIE55Hp1irlHsv9cdWHaWSU9R2R5irk9%2FknJ%2FRFaMmc4NpKPFA11u5%2FRrftchVFWT5C04zajQO7uZg0cMSR2hktNGn4xzspOApRCvEbect6CYdYjPIFJKfgrDRTVYvL5SY6ClSJUkrrxEpwlI391IYrhfKrLU%2FiL5jmv7EMdmAqxkvTIhNvczJ95SDic%2FbySRgLSGHkejPfhx2n3nHIsJmEiUraAfvloqKhWV5GkpHywUbpzxHmCiuI5Lr3WCidWHfuVT6EDCKP7RluHk8NgXYEwsw4Dg9aCarnVFWEGWk4A79J51hUtSBOiYaFLruZHSMdBHDbyaWL%2FKX1wNG0B3dpNTJKLufCqJGEk37nFkg%2BNFwEqegHsiziMZ1%2Bh34TCmOgAWwn2Y84viESBcuKvgvZFqJb5ZYQu1MV%2FTUI%2FJsGrBgvvhifKVd2fEzRqNTiyOZzmuTP%2FP%2FqcdgA1fZ6IySwbFHdMQrgYUB3t3oyhq0emV7vmty5VVy9r6XI2HPfv3HkyXEcpK1i6YwlGpRq35GDpkmYjtY4rvDbbNL3Z43SGnjcfRRx4QUrKp8OnNFgr4dDgVF%2F7TEn6w1kZ4wjrLSvgY6pgFiFNpO6S8%2FRHTmcdwhXYp5joqke0COO1m5o%2BYQf%2FOZ99rM%2FCMKEmLKDGVH76XyvTNbrXGrh9b6LSCKPyEmRMxXpdCIvuznm6R5Ku9XKpQZSRD1ixQcgi88PDW9YDWdzjoWLGI80nyPw8byaHf7cOJDUJ24siVIVhY5MkbAUjg0mE%2B4Ygca558kIaeqqghxyTG7PT9gN2mwUtF9lohfRz79Pb7AkWTZ&X-Amz-Signature=c438c3877bdd330031504cfa1830276c2620001d36d2abb46e5990640d505af3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
