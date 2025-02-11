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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHCC2LVR%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T110319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnLE95xcMS1tcNcQ%2BXyuqXfnatduDwMCR%2Fp5MI%2B0O0CAIgVc1ZlmQclCb3Wixp03WvIKot837S5YsvWTHZ2g5%2FQhAqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBj1OgMtYYx%2B39gM%2BSrcA6m2h%2FO5Z7pyLJ3mGkiHGIl1SnK2KbQZrUBuwG3L24rUfh06do9wKRM6W0183M25%2FvbeOtnlyTtTRDkgdxLXwG8MaFa6edjvNASFqiPX1MztScnNKRQ7rya%2BODQCwPmVxVsZUVxQTFNmU%2BDFL3I1XAHL6%2BE9cwLXapckst0LuEvUlvYUl8NCChQZsJhMfaCjWpOsBkT6J1BQ7GgNVRRalOjVxtZEEz0P%2BwgKZItXJ%2FN2SsjXqi2l6tFTmaNsNOIjGwdMDlKlcZigSUiHrrJZ9yVLMcSVcyepprFkMww54SeKQS7%2BfjMwof%2BGBu1Lmq2DgtFho1VSLClYLjkzNWbJNPcj49hjuV1IzjQA0gS%2BL55UBADYeU%2BV3ZpoGxRlR2q7nMCpYyaCuwxskjp9H57nJCjuwystzmiDnbcIPGjW5Fiiw1cOOmfmQaamq8n5PIEMmGnvzD6wC6U9zh6UA9nXFNjrhF9BHaCwp7V8LdfGfwZHNxrZtCkamivRZqcLsy5vb1pKou0v05D1GBloHpePUUK3DPZ0IZTAVB%2FOpOoEJfQXdhRbAoBsaK0yEuZ79mnyR4iC%2FKYkdbji4nsYNJj%2FmLPGLQ%2BJmjMUzRth8JDxUm5YdbziYoQr5ed61VvtMNnSrL0GOqUB1WHRBlaWbkfNyenf1rHohzDSOX%2BPONt4GI5ejri0AJROeLs1mBmml9wdDjB8HDzwujONSmscoNlf%2BmCDK6GbYM7lDwXoZBv%2FNpFSOaWhrY7zT%2FReHCKDBERGH2VSYyrJBdL4LxqG2MzjMvmbyKeRQgNP7x1%2FjELdieqcP9l8pVpF6TOEZyun9w%2BhfWCQ%2FtEETPQbef8laooPeZkbbik2mprD%2FXBD&X-Amz-Signature=70449e359a64abc39b541832352c99cd0220c37ed98e80f23f2776ef30ebb504&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
