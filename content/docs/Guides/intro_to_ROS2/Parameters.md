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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQ5VVF3W%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T022354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD9bWNBs8XuRs%2BkjicxnWN44lK4BvDvPCcjtbNTGpsoPwIhAOK8Dvgg6XGKLltL20FsgPlpUg%2FsVEgV%2BdpcbgS%2FyDmzKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSyQRYAWM9mwzK2YYq3AO1Bwh%2F%2FPsQinNiHoJSViNFM2pk639Jtr53gU%2Bly8XNBLGQGz156KGlSbAtP8dDYBTeVlEppbldD2annS0zv8%2FvxbPbnVjn48McZDPKTTaM9bHOSRHqWl8geeFWv2MOvtzAWHMkHkqcyXmxEfAnjiV0VIK%2BhsmgQex%2Fvk2chfXajlFITQupKX27mdHqWC7VNxhZA8CkKd0Iaa1%2FvZ987ME6uS57cixnskqlPBkVFr%2Bh8FjkAW4G7wpbX%2FEAU1dEJo%2Bl3IVNOl5eP0t9e1ZC%2FykOxuMgi7WLpQeU0QhRUKwSMYw25WTk3CT1DwA54VG4SZoJstAz6KNXpFyoEXBZ0KKzoWVCFjsYQRjS4U5MA31t4edFxXi4kLInecIGanjXDDDjFMf5EBpsYRTRCfDvI%2FrGpL6bnToqZnnnPfpCjZYfWdBSQEqRIiVdzpzOpVHBFKqJ7HZV3GdSB76VL8YjY8%2BVaZhndtyHfysOAbtfQQxo4eRpwhFbzGm5veY%2Fs882XUzGh%2BSzZWnIh%2BnL1VlWs4DH%2FA5St4iJelNXIdeGALdv%2Fxf%2BQjAYNKy%2BC6R7tbq5VPSNcxDOY1pFvuFMzZg%2F5%2FL4%2BiBTJ1zxOsbtGX21w3T9OILay6jIAyrkHtoSPzDAu6e%2FBjqkAfi%2FncVsJGYJ%2BEsMB6g6s1dV%2BQZHa%2B2s7SkwEXJh31%2F1nI6TrkJF4A8uFtB%2BajMmymmRSRkfTs01YzCIr38mx2QGAO7zZCps%2BGe8npTAGpZOnRssuxt%2FUlAxS6jUc%2BmJnXMqYyunNgO0voUBkKydCJnEwdKvXoCJtDOgOog2%2FAUmEypTSm8gRLbIqH9c5rep%2BG%2BRTTXHJE%2BV%2F1oz18Rup6YojwoJ&X-Amz-Signature=cf501410fb5459ff9df253b81efffea503e46eb3a07160decb4b1a42cc0f0c3c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
