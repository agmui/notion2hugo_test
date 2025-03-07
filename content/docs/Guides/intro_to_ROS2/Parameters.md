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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BKHCD5D%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T003758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEc9mN6IomXcmo73dYTDxj%2FDN4ZQHU4zVh1CnoDTqe8LAiAZtyc5ItwGvn6RvtE8XPH13FIQ8v0K7s3F%2BS5l6aKhcCr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIM7KoPi%2FiMYBFbCEjYKtwD0MpfPb%2FwuBh3f%2BwD%2F07NjWmT6gB5cWNw7rpiBaC5lx%2BKjX30ku%2BLztH3f%2BJZYyoOMpFK73TGhB3%2FIKgJn6bfnn02HHEUHA3xXobcURdv6cTR2LhU0P0M81ajzRfRIcJWCbMStOnROjwfE%2FLsCIkONVjj4g1ufZY%2FQ9dC00TEARYF9Qn2rDrsiHMJMr8d6a2dVfJ2ue1c07wd9c9ytwgG4NIr5GkiW4ELlM4BoqG3KBPO0BIcRbTwnq1y3QDUIraLZ%2F%2FgBJ0aLOX%2FS7FIErbGM9g%2BN3SW%2Ffgz0fDifxr8Yzd0VrVfkmsILIs5ige86y30r62qL3w01VBsACG81K4895YTob7FL9PUpqS%2FW0QZho4PqNag1jQKJTgMVoMn2eyBcmRkxPsdMIcwNjiu3IaXsL0VX09llQVAHpv%2Bjn5FJ3A%2BDYbMycXHivl69LhuYIMnaCngjt%2Fc8MYuSRntTWJ9wqC9e1vwPKBxnuDrnYBGgO6NRJyzkSsBaW8gmn1dvM%2FQ%2FkcJmjb0e5pi7ozD9dXTPTYMfXnQhSKguZuXHSa3RkFGslOWU8dl0L%2FEAR2fBAfQXnVlkOBG5uLLdpbW2w%2Fvt9RkSrBL918Lyeb8z%2BgF79gUMoBt%2FjYLv%2BnXEXcw68iovgY6pgEW5VVubXBvXTWZYmZSEFGbxLxvzOrE39sjntNzWYS4q48kq22N2TsQR1sHKJMTMX5W7FhTFiOKRnGChzS6Ps8v%2FnUDy%2BxqIUBMCNZos3m3po9hk%2F3wxvRt%2BmnCWPBSMvtv0SWeSWhIw3X8ld3WJ3f9sFRsJ71e8JRy%2BOTu7B66tZGQ196Of0InYr%2BOTBnK7Vw7TGpOpjZRffTssMfVEqIPcEBnfPqs&X-Amz-Signature=48fe0787bbf2985d115748f7c269aded8e8fa101335bcb276d9913711ce6623f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
