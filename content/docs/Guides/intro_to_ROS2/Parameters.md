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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWFYPJSQ%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T110754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX2ANWno0ccovg0pGi7WLorphBl6KcJtNf7z0vmlmbKwIgNp%2BT0uYncaboToCZ4ErgbOI3h1VqyP7BbVvVIRq3m8Qq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDNfakmCpBx%2Bys0W6NCrcA6HMWTSMbnHh3pdR%2FXL61J%2BLbnUaJck1ndw5YkFK6XejKEU41MiPpNGUyjErBuRgqtnDmJ8cE5sHtPtNUEQojSsqjhVBf9iyV6gamqTNIz2z0FQOygGNNFsxCNJUF26g3lEaEqKzcJSogjnjP6zLgToNsi0sZFIHZfJZRkDkpix%2Fj82ocKBOxw1lgcZ%2BFzGl%2Bt0ooo1Ca2DW7bKnKiy1iA2SVnB2VKxSvLqE51x52bM4i0kgU9UEqLZprOrs5V7u91BusUxszAKG9Myw4MHE0dsz3PFIZsrWpYxL885EkRDY7G9ZKy862cdcmzfDhzf3LkRDKtdyk1IsXXz1bMtq%2FWbvidJQfo8Lz9lBcUll3%2FsnJltVfaNjHjL3wK0kWmGmUQj4HHG1smSHL0P7EMejWOCcM%2Ffc2Pj31kjo%2BSvsOgWjX5ksU76r6cNrmWbFK4OxK4jEUat04cj1PIVwm%2B2fqFkhIrWyveroyYjbqWoZNz1IbpDj76onxRXTDhrPvSptfXCLXI0rxOSYXGk3EqCHCbiSEwXJ83BRs%2BsVxOej3lRu7FkoBNrRIn8yhPDrrmX%2BNC9xh3oa2c%2BH8bkLGAcMyX3SQHOAXBA9zpatT0Pjw57TYPzvU52f%2Bvav4mdUMObvtsQGOqUB%2FzSISQFV0bH3F102H7mkEg%2BRpxvzyZ1IWqCXQT5M7EFUxULKUSvws5LPRid%2Bbhs7AG4OOGik6WgNoI9N2CibHQLgbP17S6tjDFyc2mvj9%2FXqMXK%2BUiFfPLz5cEhE8AiK4Y8RaiYd7FcqIpPkAbuprq6cz6ncsrBOnxoThUGRMRnT6CcEYkbl5WXzUu%2FE%2FX3QfCy%2BebXfaObkiGEYqajra94ugfs3&X-Amz-Signature=5510e3afbfaaf109d28535a01bcb53d74c12b7908b62c88291f47419b1f9a187&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
