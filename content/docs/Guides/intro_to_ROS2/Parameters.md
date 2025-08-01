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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GNAJSUV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHwtiCXUMGN9%2B7Qjnly%2Fp5kJQK9nrn4WE%2B2rkrdIc09cAiAsJ%2BMGgGcUgaYxs44epOtnUxLXIfsnKn6yykYrLWFGnSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2xgQH%2B%2FDT%2Fgfelj7KtwDpTAc53StkKmFTSEHDaWaTu2Q%2F%2B2m41xt3kcva5mmr%2F9QTGeCyuBMM2T1hiXqQBsKEKpqwpmiIH1dIKtb1Xidu251%2FSOhwuU%2Bi6alpvGV0c0wpPwsU%2BNS6CF6vBwUzwiL3079YDD7z94vx3ChlMTH5n%2B%2B5N1VjwkPR5TKwx7zE2WLvByrOCKu0ayBSvudjG%2FguWYqyPJew1wjH8tnsaR%2Baj%2B%2Ff4VoRlqSkgZ2%2BQm01Z0OQVM72dxpzyynyjfYlun1xOOVqIi8bHVceBtSzg%2FRYxib1S4LA%2B4QFTz3jafql5Rd2PbmFxSOxPDyS6x86v8MbIPv15Zgtrc3FZueuuOVhCzaKurpRaAgNBk%2BppfubLmxXbGrYiQm1AT5aAMGMhfaisH7JI32lNshz%2FKmkQlnLNb1sIfNJMduaGV4MJShxH9C9hpwdRQGDl75btl3t4%2B%2FSIosz0HCLhgbAvA4wDp6%2BZv5PC4eYhvzwDo7DKss%2Bx6ep3KFtFaKc8PEdPPPQSNn1KAj%2FtDDhDxc%2F5WxcPa70%2BLe%2BnhTg%2Bk%2FzLbZgbCxb%2FgGjElWniNw0ZjFHYjBR3Yz1hM7N9NBipcsLRUdZLEzwtf%2Frdkxm%2Bkzyyr65QHBOM%2BBzrGqObRo2FkxHUEwybayxAY6pgHOKUh964qM5ueQLY0aoHZz3SWN7sA6IPzEBKIqq78%2FHWB0g2X5JNePuCAB3WHRql8qDMWwLNQry1OjGsWvOrKKAwSt6ctZaIQu9MMBP6r9Ogig8%2F8JoCr3bBBFmHwdPikjsl8trvz9fjXeveqhKpOPZZApA7pf%2B6G5Ctkp1MDM2laZ8gXTa%2FslEibEXyJKjbE7oo45%2FRdR2DFZlNSUdhKJJKaGpdAJ&X-Amz-Signature=33e549c4c68df3c52a4b4d7a52a5c03f299c14c09873684e0f82186b20e4a8ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
