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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3YCJP5L%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T170224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIB66FQ54PQ%2FjVmoD478074qeqojLnLzpYMIGlyTWR6blAiEA471%2BU%2F6MYMEBYpZqdhOOE2b%2Bj9TkroXyERyuSzwS3akqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHw3VlQTt4UL2IdDRyrcA5zw%2B1jAZgyAC5GMIpfoVs1LclBXMdn2cuy4MOcyKUpgSndwf1n06wZDKLQXScQOaqcEyMuv9euQUV9mCrYU9CnAaypaIGuydX7xzJNnuemxMkeU8dvPU%2FzifqGgTWiHobGvOAGCCx%2FW1xBFfrX9k8BtucZZQVBtYKR5dS%2B1qhUSRsuBmq1P%2F3ucMZbW3IZP8edxbcpA9ckqi8k56nGyaQKxlZEPdOH9H2%2FXUpIImIdqoJD%2Fs7uCiYVO6Ph7Hfr4y0pdnHqDbr4nT74nJYnveCroT128t8KFYXHj1%2FdWooH%2BPM7EuZ143Bw%2Bs8dy2Z8v%2FRIo5kNRqJPyQSAIm7nAeNgpigBwUtap3p8k3iBAo7anoUg8HGeEmgoLvaU8Pop6OwI93%2FerE6UoezT2Hj109fJgaWJYYPY7Hy2CsbgFNWKrEro9vS0T7ZTB%2B0Du5VGOPPsZmhLrgwmrjvfibSX%2B1h8xmHkrlRuNlhcCbx3X%2Bz86zIDcw7%2FcqCaMuknKZaTVFMcabCh9OXmPqpqjgmFAw2fOcAKgW5nahN2qUEFyhnC%2FzqSIdjgb2j0TWM%2BZMlXnFk7mIrUOMMMiZn0xbV5qaQ3jDdeSzPhh4YGep75XAayumPCO6zpWmiL7kOcpMIf3%2Br4GOqUB%2BVwyAiImumFu21claTS1UGBk3CAqUOBXKxQH%2FVm9cFEdDJqDLbBDGKhiNXEzn6Zu854h6d5kXTQprMgildgqFCmouuSwhGJ427m5qVa5iL6miTN3mdfMzdLv2ykxSS2CLAZC4%2FpM3ijh7zEujp0RqBY5GvWVJYUYJkERd4opqXAKQn8v0G4Hbl9kDQjDkmKJZGAOHJQwd9rFx5ZTAO7avLg4pGFN&X-Amz-Signature=ff1c02f4475aa011fbaf846e5c5b353e83fe634c92f6d901fbe69d12d64daab5&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
