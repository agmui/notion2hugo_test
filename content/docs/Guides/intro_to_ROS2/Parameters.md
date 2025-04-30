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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LI4ETIL%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T050919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIB8wMXQmMobjHCZpP%2BlInucwdUOKo7KJ9bQeoKcE6aGHAiEA48C3hoekjnt3xpPt4fNwWOuBx6Lu8TDKQQO9wdyb8XoqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFdylMncDDdg%2FMvBOircA2EafZtp0SomYmyUhiQrQVQz0j8JmuyFkJahsb28NCk7zV2PNubSPMpuP%2FPeYyC2s1KPCjfz4etNS6vQ8BtKyPsW2KY%2BNvnBMRNuABshF1pRctw6dp0w2wtT7MB429dK2A%2F5iht2GEj8fdilHG%2FuKGDJc%2FnIN3b9%2FgxI0AD7WGvLkSI1klc4PlNPNQIg6n4qYKvagN7U%2BVeN%2BfqvgSIorSvc2SAiOlYyiz2XFb0HBEf061DwLkMQiZ0PrZ1gDTzn1BReR%2F%2BN1WIwz87c7v1TVeq%2F2OIobvaYx9gG1J%2BtdYNmI6D81dR5pQ3YnjnCz0OdTg1tUwZUG4Ra%2FN4hnyJpDMTiZ1KDibrdry7tzfxljsGi0pXvNZqAmqYJUNIj1Cf4s9jIiwu2dC8xEcCmciNSR4UqmUolNU1y%2Fgm1ej80X%2BW%2B9KRHcpu4l%2BZVFwQis1BA89xO3L3gWFpVOSz1FNrhec176vDWKK7d0kzQyahPTl5DBL%2BobleZX9TVEwt%2BH64UaJ1MdWBPmpha6CbozBb47%2BoAfZlDqAZv6URUMGe%2BS4N8PjaP7nn471IXFeP97%2B%2Fr1u91N4vCHmy%2BWFxrqwQScW2zgPhzVD2ZnG2OnsN9GKS0AY5Vi24GMjhN1vq9MOnbxsAGOqUBi0nN9gbOYMeOqvwGBfr7eZ0wOFQLwO3OFE1qB23yjO8rhm3iMKw54OWGb9RFnjPZwQv%2FQnR2RYjhgv0AMswkRhWaErgn3XvSU4oa1YP0MrxysDn5AfT2FzEd60aGJlQ1QSAzIujXIlrWYhCMXKuR6ZtXGHv9XMzc7LB9JszJsBksH0OeUmQDU4jnAXHGcaFZAOPeT7yzwBELVWegY5P3qlV2kj53&X-Amz-Signature=e1912e500158f6fbefedba918ab12328c8b1c18f5acd83b5035be9be7c91970f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
