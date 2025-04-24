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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWQ6JLC6%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T070944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIEsrzRm6g0Um1V0RsQQcsOqAxEPmCANIqJF7pOaXhcH0AiARps8PGnFx2C%2BJpQwYVJpf%2FT7D5ss8Zjm%2B%2BA5jOWluiir%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIM3gIun3smrUDUqm7pKtwDiA3OMC32VdQtW%2FZURy28L%2BMBmvPHWQAFO3vbd0aThMaK6ayeklgAeWHCBVpxGXxjj5pI5UgpeIujlkce%2B585%2BXxxtI3UZpbFJTzqfod2qGVbc7ThNuBdzzHG9ZBrfpv9XM9Jw6ak7L1cvOZylBdbPM%2FLY5Ov9kbcHRiZYdZjez7w5UfDpEbHDlCW7aj%2F0YcdlBjvcfjufvGRB43kM%2BlDHn%2FXCzNo9kq50UR%2FGlYIFs6UKoPrmWJovtMCKYwPBu3cuU2P9H58HdVdxbWGYCQTcbvwA3WXDWfxaXE%2BrxMUtJ58x3RqY%2BrlBLWMBn3nrzTnekG5DMRgsd0M3Ot0vw%2F1ZCPD3u54hBz%2BUN%2BhG4aAuA6vqsyEc6oRNajTnDAKR2PlNqFf7AeMyXAV5hPLImZPiDN0WEXkhNayhWw%2Fg9v6gBCg9kdKepTnPLIvAtyQYiMt35Cz3b1Ha%2BCabbVZ0ZZqW0BNjPdx5d4F413tnEE%2FXGbgg9Kg3QR98fZf%2BEIgOTIVJsc4Q0pNDGLorgoZ6FerP%2BP6Bhf5OoxzYHkz8sbMNefQB8WiC3BZKOoyrUPvbU94%2BI8hmaffTwAa1nvb%2BDHsr02S7GAUr5CVqJs67R%2Fomvzaef9OHHbPQFP3h7wwpbSnwAY6pgHRo5yS46HBYvyRVoCL0b8A4jIyof0IbB4cdPQUtKwDEWv5Mip8576E9qAbgb4XzgSohQ09Wr1VBYFskit4dK%2FStVB5c5GYcluPRm2f0umwaLNsfRLpAFSvqz5tjZ17BbOhYTO9m9MQMcmCyXfJDaQ4c0T7hBat%2Ft53w98JW6%2BX4s12mZ2xq773zuRrbWaltyw7PRdGFbBHdG6NbcRjjgx6stDQoubn&X-Amz-Signature=7bc41f3db3629e31369ee5c73ec382a3dee9bf4626f5115d7ba30df109c67980&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
