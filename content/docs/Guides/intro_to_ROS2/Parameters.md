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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TLA64IQP%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFJKd2meCaJ5OqB0f0%2BDCEo4Cv5v3ArzG%2F7cigEHEAcFAiBISewzDF7cJFWdDqqE5YVsJxlfY8QyZMWffBUajHTvuCqIBAjo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKvKnbkLW37oZVBi7KtwD3VViB2NYNcFLvZPHY3UG2fuPLc8cHvGXC6Kl151iuy4ywKuvDI3PtkJzY2XZ7OCQLWRexM2D8cjWbgNc0uMDvgxOYXWXkturFIhKhzrhS6De5tjcPCO%2F50keEtJW4gQPoBukbcgHvxCrtX49b%2FmDrGERbxe2yHwi2iAVrFgoKRkjuiFuc6r9JwDQbUJgVFdwhoGcP3BykIBqAcIs5UHmNqpPbSDq5DMwKpeZFidl6zoHGQs2UX6ucnvl8%2FKotpRGYzkb1m2iMhBvG%2F%2BfhySCEZM8fp58Z4NmXZTph9S8naEHVSlcwWMX%2BMUJ0PzQ8K0YuFnscYKlBOWQn9ao3Qlf14VPTvN9BfT9MSdZF%2BEb5hB5fqQfqAFbPagTAF1bnxu1P2EEBCPz7mjre%2FL6MBgtMykmnv%2FVPpktNkQUYMd2w0u8nOS%2FaLDgIIDbLb2p%2F8FUVJDIcgQrItZPwWneU2Iz7IVoxuNS9ZF0CrfcxRPKK5RDODtod0x9fTDsbQeuYrZUs3Xj4mfbx4%2F%2B6M3TiC47s5A8jC1rimDbQ7E6FEuArwulFwkn4HpkI8%2BYF0%2BAaVcy7po8SHdiuSThUb0nEMLu%2F%2FYO3TpsXUuS%2BLmM9wQU7XugmO5DMjO6Vl7FxkcwmamiwAY6pgE32V5P50%2BvwUlYVc9zBmrhpEi1COxXyflG0QMHE2sws0ElTVjcVr89EDnatvguDpY4JuNgbynFxlkd%2BKFP%2FAF1UDtqcj6ZrG78WaGGlm5ui%2FmVJ3QKU6kXWtSuRbBbLBWjovhHUN100yYclNG01THrkgGApSWPoUkMi7cGraQ0v%2Fm5adwL57Usr4zva5nvVbc3ajQIw0ZnZpxpGsgE5tXVJbykHFmh&X-Amz-Signature=1d2c9120ac41b90bc157ac807207ab70418c734667a2d1ac34622403526a40e1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
