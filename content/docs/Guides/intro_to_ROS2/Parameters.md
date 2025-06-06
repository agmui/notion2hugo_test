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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYFAWFZM%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T210754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCywZ8qU7qeJtpat8Lq5tUHwzz91bYTiBJfVnEDFu1N8QIhAPupbfwmpYA3p1ZFOzqZPT7j2rOY1omkUDjUvDOLpG%2BVKv8DCGUQABoMNjM3NDIzMTgzODA1IgyB%2BF70NZdhvcPNHI4q3APK9wpxNUq4%2FyH2zisM69Ds3KIkin5AaA34PLZwKYVg%2FlR2IKKrXVrxeOo3kca36nwkXoQcqVRtFS1Dr%2FBiiTRwvx0uwBS5jJSCH7JfKvISabsZm%2BbBJHln8L1gLUR%2BhVAiX6rj1KuGi4LR%2FHoZBuFzGRo%2F1H6QkINtfvPEVihTsCoPP6UBNl2CoSDvtNN47qIoy%2FpXAoeGNAoAmJpHEUEBV2owvQeaKXdsS%2BOhu%2Fwb%2FhXTVvIrYX0a07ZUpWeT5GKiXcm5GlKfazImWowk6EUCM5WCMTdnf7ORKqOiF4h7vCHHaZW3m9XzjdOMvSUSwQRce%2F4fywlqS5OTFUE6WD2ocCEECEVybNQ3%2FwCYPZfqbJn%2BethJJDXysqVSzCTlEyefvyriuj5QjPqDswNa1OcnnXJEnT7fb7TYBHsYOC5xVSPdXAlRK8Ehdv2SNsPIHmedjaZcGXqxe9w7H2cbJLbTZCzEdeikEnbGCybVY%2FAHKHC4eSK0vBobqvvdf%2FNApZZ8nAcF4kY7PdPsv1Vmp5%2FTJd5srPjOzv7TCzR8O4kVgMZTyo2OHcLLzfysTN4NKpkWbBpR%2FGefY%2FPo3l8Y1dDqh2Pj2frMlMGctgLy9wMPfpJdm9DEplMK88Rl2zChkY3CBjqkAXDcItijamrTXljVde7CnmS5f5e5%2F5to4bOLGj%2F%2BPIn5Vq3V2fpFo0xKGguumSr5BmbcROZwgwyyjq9vSNgEQy%2FfiIKi00wVSAzbk4vAOVDq4D5pe9HhsxM3uM5uZufVdsbmjqD5hAOmgGlaR8jykHR38rgk2JwqAahJCvUr5GZ9tUtFwqgpcCa6pMr%2B7CXMNTFW9eKEte5S41xU3tTm6menUDTa&X-Amz-Signature=777c86bb09db733a9e06a91c2a50b63f01ed386ed65ad67869feb55a628dc456&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
