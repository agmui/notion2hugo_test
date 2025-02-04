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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPJIVOC4%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T100835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIGm1thRBSclRWczYTLFLQvaOWs%2BoDPsvr0pG8nGro2RaAiEAvmbul1VCZso4scqZuz5dyw2Z7h6yW8legX7CtDfZv4Iq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDGPASWhq3oXfdcK1XyrcA2zn6jFkJplaBZyQdJ1RXcj0xG3nfQHiEyGR9hbBUGHVB5SLG%2FMA3vHizdkS9Ia3d73BBCJBe%2Bs%2F0NddMfMBiydqZG3REGV1g%2FH4aUCJmf4xleU%2BGbhurD5li4JoBO0CUWsFE5ke%2F9XcuPfki1UQWrVaDsxU6i9z1wPAhOsVKghBwZRuw3rNI9HKPS6vnDn1peOofUhcd1MfKF3ygJMwMq%2FZw8gHSj29PAIZqWHcmruce8sjRTE0eh%2F18Tv9QAlCvsnfZoLPELx1FLj5GNJc%2BWfBvdMlLsgB4uwXWwIL5Fw5mvmXM7Xa%2BQofNIv%2BanWQLnqh5%2FkY0VutdvlzrcbgM2nc14SPYqsByyOJ9uXruFAGGgfbh6lImPj83g3UmwGZnhlaMzdeUyIyIhxU5mK8emBNUJzQLAf16%2ByE%2Bj50i82F5MykTX1D%2F36%2BihKgmIoX7hW1JTdhbrD7%2FGVuXRqKAurpGJ3TZOsqbPsUYc%2F5bk7viI2CY1Zzrp0%2B0p7OpEfqoMsj%2Bi3XVjDWb4buysmVg2ZKaubTxhqZ5gHcslYuQHBgyUl6AoLVv4N34qagjCy%2FZipHb1r8m9deDJ2IASfij3kl%2FVKM94XvjZiauZjsoUJ%2FJ%2BpIyoNlfTXxuW9UMJ%2FLh70GOqUBDFXav2s0zbb9ohoNxBLbIULrBkZ8FsrmQvMO4U9G5ykm6g2AJHklN12oU0kDwGJDaNteAnSbTrxbIxC9eWrqaIJ98GyRX3y7xkL79YSxtMV%2BiHdiGl2THqTuSDNSRX0UPwvmbf%2FVCElaT7%2Fj6SA7N6VHf7XEXwTlL387ekmsciu%2BPBEp0HyLNC9nxgY3WN8UQRbiPvexzR%2FhDFEp6dS3kK6iGWwS&X-Amz-Signature=7c972958c26fb1c57153880cf71ccd2b50b0f92738381c1c1a84d515abb97417&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
