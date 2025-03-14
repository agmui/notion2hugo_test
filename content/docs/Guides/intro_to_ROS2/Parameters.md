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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662S7MDZOV%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T061124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJZ0%2BPiX1QuQLJOvRasbdkPtuMGkXDCW1myhv%2F%2BkQaegIgT9zq18RHonR9RZKuf8anE7hk0tgEFbsUtsaWmQxREP8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMTU4uZAkGFy1u17iCrcA%2FRks6iPAKxw3KfX8%2FnD5H8fuBv8Wg3pQmLpr4hGgwOymUoP5rKMXKwHV8WuSzG7z2fy8Z1sFN8Zv7H3Ps0fBAWgrHU5znfB6825UNtoZMy0iHE0m8ohL9nzuN3g%2BkCtSl2NKoBRHOyfH4A8ZXZ9y0z62RUQoFBhNqziqWB7bdTc9IYiW6Sx%2BJgeHlAK84BF7S9pi%2FU4QxaGl3%2FMIAyMLA%2FVmSSJ9ezrwTb5f8x2G1%2BMWNjM93QBFPFuGXcn0SqTOLu3zQsoC%2FphoO%2FVQWI%2Fhgw9EadU8RFMpKEtoHr6v5WL9kw61AyfDzEE9HtA21ClI1HSos82Ri12i5K43BLLMThZLJMNQ30JvEqpaTGuMTUAeJsEKLKJ8qPlZl4PMQcIf%2B9TCB0sfkxb3ptkNtS2ILM11x0KmS0hFfInFhQKArmqoARJhd7VVBLLvHVfyt01Sjmk1fnEP%2Fad4LSiAvSEdHEwVa5h6wFfbm%2Bm4BVmtAM%2BxGUFOAYSKGc%2B%2BgweCCLDdLst2LnlWmMJH%2FtmUxepGDNBVp3kGI7gauUJaxEKBL5A3sfcy8UR%2FPZDXzs%2BkgZf6qNei0lzAaFA73IkNNYcAEnfIZ6GUSg9ib8%2FSR7QgG3BLrv8qATmQDS5ofqQMN2Lz74GOqUBXCYQDBNBA5rzMpwVf9X22PCEo3vvR9ewmYF5NEnDjVzR73G54T2g7xiy0u3uoc%2Fka0atbDUmQOLh4%2F3gF4csgn2VqxheYyEooQNPmW3iJCKHaef1GOJ6F3d0wHBlkDYV4lyG7chTXiszBaEOob6LNieYHi86ldGHTX16aroxpBT7pN6Jfc7O8mLRdZMNRD4FkKtKbW5gK9sCbp1wZ1kC8I5P8zJH&X-Amz-Signature=058cd5c2868d9f04b34bdefd16ae06fb1ae1a0f472227418c5012cf3a43f59dd&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
