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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWU4DX6G%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T121445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC5TdsuHN23xsXkbi3X4ZlaTw5cUr%2FH6BO%2B7%2BH9XhhEXQIhAMP1pfXuMcOEaPIWUS4obmqoJQBBsGK%2BzLCkby5ccFSdKv8DCC0QABoMNjM3NDIzMTgzODA1Igz6FESWhi0QpiKcPq4q3ANlrxJz3Rt7%2BUOm3mxapnojvDpUKA65VvD2hYymhROdGi7QLNE%2Bt7ls%2FURUeVzSyWyh1iDYnHPU76PeMTHViSr0%2BuQDggkm3tU7bmnoDazMjnNdWnYixMNRt7UDQ8CupvrjP2Y5lUh2XcKCsCdbusPBOlOzAmIUV9sR87SqMDLoV29xxFPQX4c9mFLlWCtUpMEOMf%2F51Thz%2Bwpr%2BL1X8iNtFYV3ZvmQzMVEYHQT8w3Y7BmSocPSd897aoEYf1mbew%2FMxKCKsVCj6YSnErPBzRCmf9or96Tn7JBPZSD0z9qfy9v4ax4%2BIbXBDZPGdJrzeWuwuSWRLwW7DITkXJA3NkOHa%2BDk9UFF1oI3aZ6N5KKuIP%2FPALtCh63l%2BEAq0WvjtHB%2FEjbuTrV6XjJPUXbvc88ct8cz2wZZiQNPLcDsaBhQzypbcET5ucZDc0tu3A%2BGtxF7zhLZK8xE5lZo2sDinDRhNXzM2JsY4s9ZdiwKBPtM%2F1wnyzHF3V3QNAmlEd9wUr4kclbMpDMSw29u1GyrrQ2hy%2BZ63Ce5SZE%2Bc9vPq%2BXY9o9GipvHZQmmidqfCrExe7%2Bamdx6%2Bhu3uQ6Mr7O8mEMRL2TOuwYqR3F8WkNWcR1xKwR7%2Fr1Km%2Fac8vZ%2BlzDp2o%2B%2FBjqkAZ6okpgSHFMIZuyBxpN0WT%2Fa8H9joQpWNY30XcrysyVrLuu0zQJrYTP%2B8dxcklAC98XanyOg6Edx2YB8Ex9eGkfxKO7Ib8%2ByDthINJeID3Pp7TCES%2B5iKXbQx9oAOhNBeU395C8YZctmGaKdhayiWOp8k8FYh9OzVTggBjFQjUGCmfZacUNkF%2FykN4CGCeHp2mO56Z7aiiszsWFdkxqJwWFj7pph&X-Amz-Signature=7fe13edf31a32d481d1211a9ef21ec6ef2f1a6bd4b1242ea1f022f9e894b8a9d&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
