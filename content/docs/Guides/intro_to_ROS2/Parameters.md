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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUT6G6OY%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T022613Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMyOkhBC8%2BaPz5J6STmQG4%2BqL4JjdNloiYiwR4h766XAIgG2RnMHeBF9%2FMc1iZyg3uDl3jvO%2FvTlogHZyHGCJKVToqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLYMiVdFg6s1iZf%2F1ircA35ZCgKe055PisrB66XuezhpwMC0lPzqsbN9U3DzAuY27Oa%2FMfkF6O2ntPlU4xINdQ6FVwFMQRfH7wyQxrXnI87ZslNewpMn5IvnQsEKKBVr4FdoqEDXq6ScYK8Nz%2Bt%2FGgiLIl4pnLtnG2hYU%2BUlwsARMOaYaT19BEobTdKZdIhmKinH3N2EO7e8u4RdzIkC1vrUcxMze8bj4XWwHlT5Nqn30QTHiBtKlEWiy37M8fhVrLBAXYfMK1RbLCbsxf1Y2aTtMDXl0JU8Pgx7PISW9Q5ZAR8vq9sxtZIxTuIgcdcXKV66XE9rQAJP1qLv7NXvB4iiF0XbosxGG08Izawi8hyZTc%2FrbTQqZRBFMW72VvHDv90CDnZFAx4F1mRQLIUrQ6CjBsiJxpzqFd%2FpI%2FIUthqfxjys3mMqgGAfmdiFtzP70tSuAn9UwFBHTAPwkUXavEOWfnSBr5HxdIdDd6iZjY9Fg47pFHE1ulq6jCG9aoyMNf6QX9utcrW%2BpgiN1UMQ0PW1OUM4gQYOnjY2ICsAbhsjJkZ4w8M5PlnK8YiZbCiS8xUKiNrcWufo4SHjfgHPaeuDBEqgivWgmCVH2jYp2TM6wppLB20FZKI%2BdVMVngLnFgoW862lCTZrDv8yMNPM9cAGOqUBAAl87h0icsMLvKLkrmFEABVYuckFzvX3Ach3qpjXWr7bg3QeveaHvrIineTBVZitCR5DNMwdZ8z211uLnhOK1rzJcRF9VeV3MJewwe6oeOxuky3kIjocuOGfE8bJjlmM%2F6Hkdi6QmnwNtjzRPw8TyfnxsxHqsHHOxybGr4kGAazPNbO6%2F2Hp31Y1dfcwVjzryB0Za7rFXSiVaDMinu4wwvWc7LUm&X-Amz-Signature=72d1c6d5df0e1618e47d1b3082b829dec064fa29823ac4511d070146c43dc2b1&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
