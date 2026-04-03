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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJKGJYMS%2F20260403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260403T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBGSg2uMlFrGHqiH2ZQioIOusFxiqu2Rr%2FJkL7hZ9moeAiEA6mS65ocqzqFbREEzIrTb4lrP42mldmFeCDNuoTIlMugq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDN79fVf%2BnZ1goDWPqircAyHwB%2BlSaWl3pYDJxguIr5sJA8H%2BkV1w0ZlU9RbFmVwSc7TEYuDn1%2BHHYYrWTJKg5uiiivtJ14yHN6IMfkwq8qtLwRDPd3SKKncl%2BttZio0Nuqu%2FFi400bDx0K3rVi9bac6lHK7xC33kImDuBVMTPPRITTDd21oI5L%2FYSxLEcoZGf8g8qB82URyd0OIUuC9qD%2FxJeGlnOpObKsODs7X8tM7tu6rVLsH%2B6t9uFf8v02S0tuxO4LAqhz5tsEvlxRMT1lBzn5nsloqx8nkFRFzIllL9T9CK86NgyStaWC9GDmQZsIv1mDUPB7jhDg17saZ%2Bujct7R1O%2B7SnRDluJgo46d3o8%2BMa3G%2FQ7F%2BEOc3LOrlEWJF1FcK8ijK73NiyOpplhaqCxKKY%2FNkAeJslY5pDzlBLGv0fC7xe4T7Fm1XfXbjzUW4Vq0mNw8ygqEeN3tw5MlnRnYfZJUHpLWOpfhYhU3abs7Qzacrs798egIPdfNMY8rW0O8H4u4h3ubLTGGkm258ZCX6Ma4KNhvnjuSnQ4JbA13aRlmsw0pumxLng9y5QwtWgvCYXwv4Kw5g2lJEoiJOEa%2BfBF8XoncSnnSeYyjZXQf8WRXyLAR1DrEq%2BA9v2D1s%2BkbpkO4%2BGt0TSMN3Gu84GOqUBhP3Fg0hUUpqpnlAQ0DtDY6fP%2FBPBv34oxvqshs4odFIezpAoX45kdJmWhav0xkGaWKPcgndrQY%2B5%2FbRfuClEx7rKT%2BtcftKaDwsgGthzslsrPaixY5cXxTlyi8sVRJxEaJo0OQYOZlupCXm8g13s71ZNwMJxb5znsGXZfWIYCjfYsLVGjTrSCQhSOPbVVHjQPZcmswZ5TdcIvqxd4ouDXxmyVc6V&X-Amz-Signature=4a1a185159eae4bdc1a529bb4d500f82687ed7f1e4b79eae5b914bd90b3fc0b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
