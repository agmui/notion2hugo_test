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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DHYARHF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T100919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCIQDz9Q3lf7XpfTljgRdlTBhF9eO9nAMKZBIlOnSchw0nXwIgLrBu3wvUZYEX%2BPOBXadWVINLLTYNezNR2j7I7H338OsqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLH6Mo21DXZ41VKF3CrcA6G8l4Fua62nzDLt681CanHvEMR9AseaZMV6oF6xsgEMXTNq7ng9egEgPVW1Gz2rsZ2qUm2UP%2BueqwEGHOnrKQ1lx16VMrkguevic5o3VtoUrIqGFgpvzJHqfstFU9hUuPFrE2oBGg3OuurbDL4fE73l0lcKx06qCHiB4Cp%2FZ9vwuyBgICohqZcmUHEI8ViBCcyVudU0WuCZtKu7NLJNCgzCFH8FyokjyuM8J9HhSisn2MwEWXkGCPPVNK9IkJLr4gsguQTrHS3ederC4SpmdIZxSPcyimykcjbDjWNb4q1PG0mleznRr0tNNbXAtBZU%2BURuQ0YiLDPd0FzPw8SRNFz2%2BcfmU4uSOHMWovKdPHOo2wtcfe%2FmG2PoFm4aC3kHyfqRBbuRlo9Va%2FSzoYLmrb5ZC6v6o1HpRbnvFiRyvXcm0LZO%2B432bnBFV%2Fq0M2fU%2F8cMxFkl6ca4eIXexU7rDk5DTjQyYRYzdy%2BACQWmv%2B2KNPgiZx7lDKSGgYOqBYKew%2Fl%2FA9pTkxqD4j9Bo5z6uROQGOWqfbE3fF350xzCXk2TRG1aoiObzz0g4Fzv9kZgNrWYpaOjfJraYeVMPPh5Yw5YkLauK9VbPtmRAl0%2BTebNH2QJo7xRDS38fXjMMJuDtL8GOqUBBCiQ0HFL5RuRj2csg4YCNV7ECGT%2B30Rj%2Flq%2FDR9cBoSPlAUER3av%2BzqdTWRnDF0Lo3UYDaBiQPQDWi7Cm%2FltNLfPxpVgryB9ZCdt5qYPVLRXlYfalmb96qatutZ8yp%2FAb%2Bi%2F2d7esfXFNnlmHezqAKaSFEHKH7%2FiKBTYhuiLQiL2%2FIKEbBvpjpW1D6io42qC7nhOqZc061tCM8e6G3mjccLqK2pW&X-Amz-Signature=7b929e7d97d67f706c1d7e3aed1149e0216f6d4505f7f4ac1dc46481b6ee4dab&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
