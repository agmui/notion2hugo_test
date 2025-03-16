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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OZIKBFX%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T040905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLmKpXpR473o4yIioFu0CeOLYJM3mxmQm1v7AwElHs4gIgCDnEmCWfSx53XV%2BATX9NeYKx9rSV195W2kOWx5p81AUq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDCCCZSWl5HmjfBjLnircA8CnGxISRgIz7Hth1pOiPiC6AOemlC%2FMtnljbUdMCme5jCcID%2B%2FKPDAiBDV%2FuJS%2FfuUPajZzxl82X95P%2BWtqRCZnZuZL20hAUD%2BfIRn9%2FEKDD3FxytXb3Kiewq%2BzTZfsS5FjIDn%2BJNsbgp%2F%2BJC1gDR91W9u9sVow7rgnUVfYfW33JO0A9nZVJJw6V2r0SLDPMygkDO0l7ik6woYjjtoIga1sMbRiv4mijL6dXSxjXSbMn7kJh8WCatl7lv2f34lfNWxk2oOfknMvdkKswgOPweRUMPGolFuCGujZT4ALytgnMvoUXmdJp%2Bl%2BUsfgILOOWHmtl50OaDTQ%2Fwy3LuSxNW5El03G%2BS%2Bmn3oHxhs5bkt4vikIwX60fK9MQ6ErQ5%2FBUqDrxD%2Fm2NPDiuZf8kwSgwfrKcrZq75m4vU45pEsbkYbVFqvHwCY7u%2FAtp62vEOy1wn%2BLAkv7BwDKu69GRUH2JBFa1SXhzO%2FuTJgiMbi0qPluNnCT8DniuSnfBsGDvu5u6SUZxvWkseruxUuzlRLtzaxbNA4E73ZfOB%2FTmN42ueZUioBWL2zuIYQ1Hpi1WK2J0SSDYa59Qco1WP6Df8Sv%2F%2BTUPzYFEcxN5udhlBRU%2F4KjoodXBA%2BIAn5np0qMOSB2L4GOqUBiPy9p6I0g0Qr7k1fZvEIfbbOHK5Sa7PT%2FHpxOHhyY7TnYqRpJKZdMxyKDoul%2F%2BIn5WWzW7IT7whwmVvsCbQPBthmkZq%2FZfIoGZ2gMKqlAOIemHC9vScI0jxMuGVsn6PDe0qXxlxz8Z9F8zclXC7LRywID6Qm00%2Br7O1pkGCJaxIo%2F0asWijH7dj4KClom9i8O3F0o%2FXIQCLzGeqRwl8E1kcVZqRL&X-Amz-Signature=7e38c4a9fb06eea8fadf77d5cc9027ec22e8e532895ead845668797e1b696450&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
