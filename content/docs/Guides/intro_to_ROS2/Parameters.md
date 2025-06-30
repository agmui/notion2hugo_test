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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655GCINA3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T110825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDpYKp6fvvi94XVMB%2BukBIxrW4rAfqEWhcaMopmciCaEAIhAKDMoq3zZtlIk9n4mRKWvndkDVFoDv3e43k0K%2Byo%2Blm%2FKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPSpgyZCaFc%2BecniMq3AMVnU8zdystjNXKcqSrbwigJPQWtO72CPmgTnXyuP%2B1CM7HcdYhZdA16obEePTLEcCQHWJrpsoOgM7atqsXl8TtBFNMYjZLESQSyS1v1SatUg2Ci%2BN8rhKS0a9GN%2BH%2Fh2xuBV3B%2BLIcjEeFqH9imSgPNLV%2By8uc%2FovXmPriSJmx006ArwuPtR2JO4lIQ56tYDSPdfBCRQbytY%2BqyBN6XQTC57paFhgxNevVmQsbHdiwGUDah9fTpb1pHPcTWF5vcsoRAOmObuTJKzJi4i87QbzMwMKHW6lh0%2BtF1XofXSMCkT4qyfVC7Zs9QHQOZYn9LJQuZo7Ip6GCnu5XW54j08cuaNqRA9OhHhXEWalJuyixENwe9S7xBpbHm2gqJtd2uf2yfKQgrb%2BRUjUJSC1u%2FWSagcDZsi5L9CZvm71IzdAc4MlqEb6bR%2FB%2FOo%2FAK4IOtzvk5ZW4hC5xinQY8AjNeDJsyhQt%2BtCXn418j7pwSRjErYhKSEJb%2BZohuNxzJ0Hlc5%2BVadXKeCFikM5NhWTpYA0hydGOsBkkfwncuyfNPyJ8ozgWwzkwwlZDpo4C9Gw%2B3jILQeFdR5MgWQDZYW91%2BVmNObnebuCCbKxwIKuMKt4P1XC0DuNCkVtnQFy0czCr1InDBjqkASUViGRbSwYfHUOJBy2Ifbm8rfzQFQj9SUDANwBWlbqZGWwadSjL7jyFCq0TZpUVMjsi2TKGEJnducQ83lpulqOdtrblo5LkfGw2RoX1KOXQFpJf9JlLCJHqLYzkCxOV%2BTR6VBMKERBmWae4EoqzbKwCURuDqGWLjIYk8Ssw28yidRgx2X8hcn%2BQiS7GBvpN0Xla2JVlN5bEVkt%2FsOjl%2FEd3MpxX&X-Amz-Signature=e849fc41337601351b1dfb6771e1b0201411f1f124f20c8a71459f66f16bf07c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
