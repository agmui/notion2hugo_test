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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZK5CXF3%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T230809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIHTkqMUdhCm7MXsdtLCyAInpPlP50rFBEo8iUv1biuBPAiBshaCggUP4bYtQibHKN7YPHdz71isQe66ZGIS9rzBHviqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5wrvX4CIRLqmMQjDKtwDCUy0NB57%2BW2o1H3ZrkskZUAmKmsz1TaeTrxZ8%2FDVUi41FSYLGZv0J%2Bw2viXxBMwDvFkwRPFZ%2B47t9xtDYxpVlT5FTXfaQ6ftZhjVfskFxyTaDV1i7SMNbqvZCidvNYJEnxJd56SHKqDXedb4HQ0drPUDffLHyGewx2F9sP4uInNDjTc9LV4k4yrwviDInShEqFkjcDKCxbl%2FM86AVUTKqG6SLvdF2hK6eJCwicTBy7z3Hj1vA%2B4oo65C7jSb85gfSTFFDnOyJkZ5DACEiCZAx1taH%2FDd6YID0Rmz8imLy%2BnKusswQAs2Hsg08JlKjkG038rHl1KGYrov746fkh23Na3rw1Zkh6iakDzxywD5BN0K4n3EuXKLkW2kCbCL1BMb68fI%2Fn8X6oaAqTABmt72lh96DnAA46Nowm7QLx9uT30DRSn6onO2YXgaR8gLEjVrDkmQ5BNh7XJnxwwZQnBN4NdYoqJucTnaW9KNFblaw7X9kB2RO%2B30UkyIdr3z8DruYiXRYGR6Or8U6acTTpJmARP4xWWxy089wE3CNWeMY1yHFXvmNnLi%2BvQCpRcnJS7gBlzyXSF2SmMPSwSUdWaWI8BCDzE8LFn9XeLo4CEBuApiKE02ApaSlLXGiXYwvePbvwY6pgHGydAnhcJxwhoM%2BnafKua3gnfqfT%2Fxt7HHabJScddZz2WDoK4TfJZ5JTint%2BAFjQKD59ZigZI4xYRq1Me6zayLRa%2BwC9VC2FVp6KdITPDVFfckNl%2BIZmemZt%2Fwv3DtudS6Ivv%2BtlfnrDdh1arkgcQjiLzMnr3aXCHVpYsRIKkNlXo8ALHbrseSpv%2FfAEdDqJ0R%2FHyAplltCdkWGFW713TfZ%2FkO4mgq&X-Amz-Signature=0b5ce161d24442fd640c1ec698bec71e361777deded1ade6545602051c55b119&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
