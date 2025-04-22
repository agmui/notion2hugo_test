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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMWQAZVJ%2F20250422%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250422T230834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDvc5QIRuaQ%2B8khTdWp%2FHdgMGFU1MkOBE7gxzt8yYN0fgIhANMaqzjkt2nhBbk39kVficatcz%2Bqb9yfpkhQ0WCICtk%2BKogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0DM4sItxPictQcmIq3APqjQXWB9oca1mdNsLqEYWCYMqwDIfC8YA1jlW6ytmD%2FjeJexZHreuR1UxKpFRMMBTp98PDji25K8tOo51wTQCPspiQfq54hPnpI595GWoSqSfoOPXD50T2kc%2FxzGvNgmo49D9u5IaNYjGIfSDkKyQElRrby7k33mk6ilrjXNa%2F3CffBf10Oq4R76H%2FHfR148Sl9SfS4DcXhodk5cBMTMshfV%2FJIPsxslyyP7CpR1n3fWPeSxluqQ2GixA5fXE5ziNfdt3jQs%2FigStwpYLYHtkZBSmjCY78vHrSbOyiTUl82z5E3cjsaN2PsptxP1cWB28Qmp%2FbKpBMSP7B2NtYgCZHoI%2FYdkHbYBT5i2Sf3loqGvQ%2BUQ7sBZB%2BjqKwc9qoxeOPGFkqH2SEA54jmNut8DEByBKfSYjGBDgodTZb1IKZJjV4Fd8n5Cb%2FqJjqWErV3yro1h1XnON7U40bWOuxNa9HewZVZmxW5laEPqOR9BMqTRXC0C1cKvRs4v4l813TJeMLaLYUH2nGNRZy7xu8DofO2ahHbUPcKb1ujhUZMPeyQjei8tGCjZO07iQmm%2B3o9Y0exRRJU3gjjLt%2FxCnct2NQyG0hdc3z0%2BDwQO7KDm0eisLzdnzu3qWp%2FKZ%2FDjDxvaDABjqkASQCiJu8YhymgVOTDf%2BcbO8c4XwxxFPkxxNDRldpceAMBCZ0WkSBkGxO6YKgLsuSod44WHMQn8Ijs%2BLy4gd5KYQHhYjrntuaHc9Zjm%2Fss3OS0ttuinyreIAdhi02uxp%2BVCyIQfBu1qRW73RHBBjk2I7usqxmAUDLkrqUdYkc8uwAtsnk%2FcyMnH%2FvzK3TqIKDIGvXfgVCSlwyp6Jy173YGVTr3L8h&X-Amz-Signature=098a8b108b51b9f844211ed00046b2cf751fa6bc9042ce9591ef62ac38f351c5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
