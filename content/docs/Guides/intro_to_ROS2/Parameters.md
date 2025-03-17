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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP2YURK7%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T181127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH%2BtvugF6Z6TcRkNQMmgWp1VpfgdtEP7rUycjjJloSAJAiAHU%2B8M9U%2BalNccPLYNrqL%2BW0yzLsZWZPw2P9hwqMNnnir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMqumb7kSy8znVT%2FWxKtwDcpy4%2BlQBbD72lp2oZcPqVTZw%2F9gZKIMjEeb3V12QmWQcZrdzqvV7Fd%2B39FGDEWVYcd4Lpk2Gc%2BuX6gx%2FL9AdgusGbXrjk5TURe%2F2ABhYWKC1SPiTx6FpmWNjaJTLwaIEIu79rj3ECO9YQ0Rhbxrlo%2B641V0%2FrXjoyx%2BI2SUrKMeCVXo%2BhEnPieva2w2uVUN9HWTSo4wJectJwiyw5qD4DcXn6fFbHomRXzeDPat2Q2MljHr7CIe5Wcawk91g1NI1YmavH%2B4bWTrYCsjWIxvMo2Rj%2BNdVONFtydxdKhB3rzzLBaINzE5tBBbMI8oWFbEPVR9eR1mdyjnrnVOwEUOyLhedq67t81p7M4dN2Z39Iud3r9%2FvhHeqPpEuETQIWf5B4mpwOdWG%2F89zbpG50%2BMZOn%2F7IPBkHWLf1wK6EPXCMxtmitIRmFK2%2BkODwDRYWNpdIZG%2BlKufsE52JZL6HefDDT5RUypM5%2F9Ow45Spu3rWoWSck6Z9I09c1ToOea94nX01HLdEzcQuGt%2FFYAmLuqlbllIy5bijddZW5Bx1qvJ9FyvfweVcoUToqwosq2IritmL1IKZvbRKEKqMt6YB2JgJBzz%2FJbCmhLiN%2FGkVvBcJsY%2BRXFXY1AR9RCpK0cwvMXhvgY6pgE8dGDqlvmxjNJFwQ%2B6Z%2FPZB0m931JIKzIk5WMANOh86sqYzteEK0uNvhUVNH5G2n1cSJjJNeLFptnInJ785%2F1aRqka5zmG8Co%2BZIr20c7AGwl9Nfex7xgcJb8KemCJyv1rukmktfyBQU1Ps14GSa5xnhU7h8EpfrRdKURi78lKUduYcVJEy%2Bpw1Bk3vhwVm7r4b7iNJf7GbGbV7gzA1GXyNvuSHxDA&X-Amz-Signature=97a64386768668ed8a3b41259703cd9feaa6e8bba64292396e07e2aa4705142f&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
