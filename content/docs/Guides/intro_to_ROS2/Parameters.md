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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7UOY6J2%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T040954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg2ECRLCJsI%2BjrDLf7AM5yBt98GtGw9SaB1SI6kgj8uAiEA7EH3R7PrwAoFkiou1iaEdTmTdJUU5KtjzP7f%2BgGYVesq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDCKrNGvRn3DbW%2FL%2FTSrcA3kZoy2RAh%2Be%2BBhlqiTADhBX4gHp6YObf5p5P1BW%2BcbKDSbomhqxaVT0shY%2FP%2FseSNQS0%2FhlqxFfAufxIPtzsjI8qijbNHXzrz2S70%2B%2FTd7lsgrCdEgZ%2FRP4WDFkxciIG5lUWeT6ITwvWDCk%2FV6O0y7QGOXNrc5sEU7sI7nbgq%2FlpXSNlHMxi%2Fu3AbsaDLp%2BT5g1q3mPXmqOxbiLsj54VVx96TANHW%2BkAR6wZZMhoQtS%2BqaIz%2F4wNqrcDk4Slrm6jqvxott5UIQ%2BTUQwWnCAhQMxhcqruSx1qFl2GHmmhO3nofKPRhTG6d0XXZrDBP1KKS1HW2PBXD41D7B7WIjfn9a%2FjfFYf6wMTLaj0EELSx63NBLwyIp%2Fj62uLW3R4InRQ%2BVnTJv9aWg%2FUqgMdKHBmpL8%2B6zULcVL75AGJvROzsLLRDqq371EXDvP59Fd7Ya7pqKdJU%2BspFehD836ORP6F2da0KemY7aSzJ2JxeNV887wGIMKldkXU7F7Qvsxu3gB5W7MsX6p9LghC2Tbk2BF6Xuj2RbG57GaDKPLZhQfgjqdEliOCQVDiXII0VVprj1RqGM88k%2BWmBrfY6AJIwqFQSR%2BI1XDuLoWiqLhfvNFNukXB0b9by3qcapF47N%2BMPPXwr8GOqUBLkZ2k94mKg6%2FJRJrnFS2D42bGHzJChqU%2Bioo2uFOkAPBNijXEQQMZIV2g4ziGQMZ2qEEt15s1QbeF4nOMtDEr1wY9a0MlKQy3y15ltBZ25f%2FKTCJcd8XHx4vuiL1ozW6is1eBr50i2Pii8sm65zy71YZ5%2Bkx1pIOqZ2PCpYw2yx%2BWm885n0CP7XEExyHsOg5vd16UN6BP023GYLPr90YFXFzmypV&X-Amz-Signature=b66b640505d21df761dbf5628761e9370b03ff9305ffce5f65a6f9655d337f46&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
