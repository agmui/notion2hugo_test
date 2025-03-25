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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULHEGB3Q%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF4%2BBLgM87RsZfRHg3DWdEjfW9G2jwjurjajtMnnk82iAiEAzwzhhZjpDBjK8CNv2%2FUgpxzDN5Yle%2FDeS790tbttcXsqiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDETw14xXKKrte3A4kSrcA5b1CRV9oiksTsZANgLSssPHXuUPJJEpvmysvhfCvqx2ZJcPiBGyQnWeNjH43JgpE8QY7bB2HwuoR%2F%2Fv%2BWEY45D54SSVp0AMaaRnXaCbfsnKJNBEqbhr19i1aFFilShUH9j094bUhyEkX9BcpbirzP0ux5HxneAdjWlSU8P89%2FsH5K2nRi2TuzA6LkhqZgstMPGuO%2FT%2BFA2KYA3fxowR9Goqf7f4lI9ttxAOah6%2B49lFl8U5sODbg8qk5kYhQsIOBC7kcoJ7AuAhh0k%2B4qae6AF%2BqCXQCGR93kBUDEjfDT5xRCwQXmxrB2SUm11DhvY6ZCtgrfMlx8brEj1m8nsATGCv5GBvUNRNJ%2FkNAeJMeubAkp628yGHmrM%2F4WLVfUBDNF14FN5cFC7%2FQ3L35pNEIVdGEnASBOYw0Um9ZMN0KoWxwwepQZ5IsEVQAbcQP4sgQ8xLt92YJtBVg1B11oqczsqyl9hvbeYw7fHDxGm0vVdGbredU9rTEqT1poQfqK1B7r8BlaqBPjeeJogdphqif32WaoZeRFnTdqfmMBTSj7tnY%2FoAIrQO0hf7CgRzzUo0kTiPARdhe0RCd1B7N6vlSPXOlJQe1Jgk%2BemJFs0B8TgGJP28TGoIRTnFAIyiMJmOib8GOqUBANiNpBrcaQ%2BFwCHHJSs1OGRkv6SWuDBL9ke8vrqSTWeyGibGMsd7ciXKfFFa5dYqDj5QTfPAFp27W05owQLUWyazTk2xWYMwWTClN9ZoAC%2F5thfMm9icFSXWKqT%2Bwf%2Fs2%2Fx0bzQdFYgglu3kV4RbVuaeaUvNVPZ1%2BrFCpnswsZGk6zWnBgLIL4vBMaC9QwqRrTc2jRYGRTzLLd0YVTalpmxWUJu3&X-Amz-Signature=2389e26dabd92fd4ccc1bd26d887172416c63fd531e4660f3ff903e078a51bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
