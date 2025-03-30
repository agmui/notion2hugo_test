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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZGC2ESQ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQCdHFRl%2BkQFrpylOjtMRLnKnpKlaxrmG7Acm08RE7l48QIga7hSsCNsk3%2B5%2BMCRNr4wV5RC27zAqWxd5mYGOk%2FLZSYqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGvv4FmNxvBKpGsKJircAzWRmvnRb2FRM0%2FaJRqKI9mmXzdCCuz1moN3da%2BKLu%2BBgAtC2T%2BoNVF9YsqKKv%2FUIIWDSx%2FsPE%2FrP2ORaIgB2d70eGj2XoghvhenJHWdpoif7ib2ongNVHdIApQtOY7rBBCsVGcfE6LCQm5HiRaLOYl0Gm5wC25t8amsk6Nt8%2F90WLXntdgkgh89GsS5dTRhpCBHaKicoWk33Eeclv7bL2WO969mgNcpvQJo9De06hqGMDWpoPsTe%2Fh76yZX1eIB8kcibNVz%2BOfuEFQ%2BkoCBcafxxtKdwVYnwFcTy4id63lzUPPUTRMMxRwHXfRX0auXW1yMvx2hTuMz0nrAkaN2zU5%2FAjBE%2Bl6p78qCCnXe%2By7NxRTfK1p5aEDAESVPj50n0wWt6sKMKhjKusnOkRfEAbhYF%2BzGeVdsrVx3ZvXO0%2FZ4FVsmkfcZdFyredp6NFvShboF0gzXCHSqhF%2FbtJKk8v3XmyU6zfnI2%2BZz%2F12AuAs9s70ZjI6aEpZ4gcXaOl4tccoxo1aezP9gxMOXq2TXx6K%2BwHdCBDIuqmlIjpcmFIFumNZ%2FD8UYsNmfkwTGTL3RTwaO8l3TeeUv7TLM557GoobCw6Nf8VCTcspCO41BRzMljHYukJVpysJs0X0xMIPupb8GOqUBdLdSUEA3eA6QJdlVpdRFNatNyJo6UpiYwNK4aOJLo9YcBY2brX%2Fn6noKnjE0X8cML2F4zgMf6%2F2LNWJJD27FDN3%2FU8Koyn7XgwI7Wdnwo9cPgaiCHJAQDqvDEYWgRA5z1Gh0C%2F29ZBFnivHpwx1w53AMHvYtKt0BMmbSXtEFh7UTz9v1CFojkE6d6QG88TxKWXjL0A3gYUK0jPC52%2F%2FO8KzLW0xk&X-Amz-Signature=7bf19565d18ab5e53b32e7762f689120286f86f83d5b2c109f60ba42df98dc1b&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
