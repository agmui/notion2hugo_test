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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QIYRGAYJ%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T200850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQCpHqY0nUJBdxsNvvOCiUM00FDuQIIUPMnoFSJBvqtUWwIhAMU48hgQ4RTLsdYcDcq5HyJviYMEkH1np0soeYzdKiMmKogECPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyNA%2FkZTIYWh1mdrYQq3APG61DV0jurJ1HTiyZw5u1wwcL0569KKVGyVT4zpmxeT02VO%2FbA9Osp7EphEMq2%2FgsA8%2FyhW3t4VFxHJApgB1r2hZUzj%2Biyvi5rItLfLnItY%2B44rkgqhtkwh10zHzAhv3n0SrzOe9VS3IFeUYs3oZD76a2dhUmzhxhT0RlK2oVJn7Tuwjq5vdOxUwyeLFEY2axfO707rihOZ0Kd4%2BDZgAlHcMUuzifBIs3zFDU9saaOp%2FujlvN%2B8LppTz5PaLaI3JJNRCFSiWd%2BJg0rjf%2FGis%2BxOz%2BdYlCwdjGgA9GJwTozEDg2fQxKfYjQTnZOr8xcT93IBmr0EujLSMfzDFklvRP43S%2B7G5AxwU0uqxQKC8UstB23mhDVQY56kGY4KHBFTpDv9z%2BzevN52BUlxCwPgzhNP0stVnb6UNZo1pVOuOBl8WPn%2FUnbdOdFZMRvdxxY%2BAo6N%2BdLfp4tmvTjPON74xqppNLrKMVLeSiY1yt6oBgGIKGtDzjGObwcNwxpSzdO92991EhK2Edb%2Blcf1ZLmk7vwWIM35O55pjhuDI8sXU3nVzF8JRVaHLM4aAE%2F3Dlj0ynRbVISw3iuc9I7iRFZj%2BP16sSE1v%2Fy7%2Brbf4OXYKsIf%2Fu8SKGn2O2%2Fztb2XDDbk%2BHCBjqkAa%2BpgHalq5jemKkKtWTh%2BSubZ%2F6CIESI5qvNYfTYWrx3wCoHu8o%2FeBnzTTXAICt4Ovuq2f0XZlWwpy8f%2B8t87CfiENQ2utAL1mvLw%2Bniy2klEfr81yhMUM5l09BxJyGXmFu4%2BPo3TyO0okvipoVfTqIv8R10H5%2FtsdHtSdEx9MieL3KPUyi5q6kKLQ4UWoxmE8kLfDz5%2FICdPrxoL2R1fSOAYQ6D&X-Amz-Signature=5ec7177e25cd86cd3c9d167b7821e5be5c6f2b71750f667126d96f88b38651d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
