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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Q2QAR3S%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T201015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDNpS6yIqdexEW2ykx4XlfeMNcgBbD9M1lzK4NftXlwAiAjg%2Bevg%2BIOsmmnWuSDGma%2FkFja%2B80wF1nHGjx%2BFIjjFiqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSxrmHkGd9uqBHkbkKtwD%2F8Cwp%2FF2VvHU7959YXC7hym%2FaAhSp5AIKsh8isIiSgs2NJrVrk2%2FsqkDW1PvV1te21EEBk0ZKGQWjMT0iZIP%2BpZ3wcTr%2BeZx14r%2BYJFPceB1TdulcMgXnC3pElCLTBJQzclt3DY1A7Cc%2Fl%2B9IV2YK72Ec8T6wzDKVr3dDxyIoBX7W%2BETCH7BzhjBuCZPyrAjlaO7rX5kEQ%2BrBiCuvuka4x7Vwh5AUuc90NEzDGlTIpo%2BwfuGYess0EElT74zF0Hi8uT9I07u1%2FNLVrK9MojXSMU%2BaAxItKCjp8nrjRy%2FKx89SAHIJCYtkIgQT6aWoAxPcUr%2BsiWbwR5p9yLp0cxa30OWENx6R11EdCLW6EOBexlFbU7KUkjTy87SdZkiWP%2Bt7Dg2m8EZI%2BcUZwVQKizXt7FmTE7GEOAM8iXG9lhtkWBdJaXEDZV%2FecYf9YiVUtNE8Txx%2Fr2uL3KptDWf%2F2nohZvyBRBUOdAYZkF60oFNGSX52tAQfy%2FKJm%2BjKC7NIcqBlkd458KeXdiebXP%2Bmp3aMY42ZyUrMJjg0BlkwibUlipnnNtwowggK9ol7jb%2BbdwpV5t0%2Fx7EurgAWgpbw%2BHV%2BBik%2Fut4Fc9X0cBmAA9neHtrfBtd79WnGgiJIoEw7bGzwQY6pgFhsIlkU%2BjdClmcuVUFz59NJDRUnUYTYdvGATI7n2sz2R0faxQ3gWB4yM5pvItEg%2F33E7B2IoZH5WY9uQAzx5H5AP24374kWM9RaULfSGoUqZT%2FNEbSxIxT0Su%2BneV2pnabyGRxbBlUcitE3gMbA2sOhxTMWTHYRM6r%2B71bQz5OG2TBtJmSJ%2BGk9yeXZ7szWspsjQ1lrB1MGVeQst42kkYqloY0LTyB&X-Amz-Signature=15912c6c8d01dcb097d4711143cffa3295994ba1b26d96d35a485e91fc6de2bf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
