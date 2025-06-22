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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REGRWRZ7%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T051003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFUBo%2B0S0dA5FAXLKG%2FUF%2FerahFptUm14rgVURrOLUUIAiEA3bhEUArlQfxqya%2Fzq1zL1Gc%2B%2FDK6V4T0Gjyo44%2FqrioqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO4DtkAwONjnpM5TISrcAybn1CL5%2Fn0XtQr80LZIRwJw4teVZtoQci4T6BNnILmdplDmIHY%2Bwk7fvtQBGYN6kRQVU9qVhS%2F0Kst56wBo9FVhVlBiZxBu1uH%2BMHlucFn3KCszF%2FtOTZ3JMIo8swgCyfGVYzuNWFjEZfFJKYXPk31ohQifTYiQIqCNfUPEReVXYghst%2BF%2FlORUkh1P%2BJqBgL7rhqgyMNPVqBkGfPAw6g3RxothJiDgR0A4ZQet7WD%2FtSEDDhVR2FwNV7HQX57%2FqU4WYY2lLPG019UnFv%2Fs13azS8VvKQzj3R7gZ9cqPzse4EsZXSoRm7ejprcilHg4570HCXvQHwCQv8YFf3%2B45z5qjAUWaMEGyD7EWY3JNFxPoTiaeRPoy931Wx8M8zBCJmr98KWjdhxvfum6K%2BHVijDLOOUGiigllqsorcgDZ5QNAobu1Ekpy50hJKqko%2FyGTPM0oSWYPfCmqygcadcb4jd4jwc6zvpi%2F2N0i0SQRNa0%2B8UuDjXiK5nTjpAMNpIr7G0YwZQ42WPZ70PTThy4gCXf9yIEhjoWvDIcCxgcU5SYTGWLtgZn%2B5%2Fc3HmUguf1%2Fd2VwJkBMDzibMQ%2BTVNdZ0yPXj5%2FP092fV7BiWvCy33vOHXiPVREsngga8IlMNaH3cIGOqUBPUDeMXUYnALHmWG4hJck2S7m622IpgPDW7gM4JgPyWk7w2fPj4KLBwEom21tSeX4WuZ%2BiLhPVEqWDk1%2BZB7EN3bznWCDjmPGGR7kU6ebjQPdPGv0IO6cNYr8eJ7P3KTDjZ4CrjCXwaQX9CU2pCNuT9JUHDpxjpEbBdEj40ejG65q0zj7mq8d7Bd2Rk%2BwxjH2USVjSlVb8GwL5uooXYC5Hxo8HPdo&X-Amz-Signature=c9b7d20a3298dfae556c28f3085ab3d48ce980cae6e5a9f1bc3ebe178e862864&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
