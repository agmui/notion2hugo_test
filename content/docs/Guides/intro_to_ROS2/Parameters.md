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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKVHSGCX%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T190202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDC9X75kvMMiFFiltZTdTcdXV57ySa0VfZufuvqbvA2fwIhAOW6vRaIC9U%2B4bV%2BLzBFqETULvYwI7ugfhJjK%2Bv6aoiyKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyFwaqLtYjgxUq2BuIq3APogbXcpVI%2BNG71InY0bBqlZqSVBgCk1QC%2FAgeW%2B%2B02Jg1rTx4oKnIMfYsvEdc8ffMW4yfW7D14C9fg65y0VIqnsZ%2B1sbPM2O2sFAX%2B2ejw%2BKh9X3eZQA7MH7xKbfOqNdevgT8aLcYs3UAFHXYG559cQQ8vFG7TMPbeFplNuSQMEs7vwEobh1w3HoalVo%2B0wjKmuOT2NL%2FhCPV3sL9uDIG646NBst12aHZdJg218cDoJ8hua%2FA1b9mLHaxpVO0xOumukI%2FBtFMrr3BHeoo3RR8%2B43mG8ZctPc4RAvrFJ2vprEjjjUtXgiaMtIyyZafORK%2FVH1ZBokXD3Miw5wyhZMYsBZqYTRiPASAVqzz%2By0%2FsRLw6i%2BZ23OcAkX%2BMVxUEcpmAqvX1PGSRsk4S%2FZcnOQxQ9WYnNzWo8i%2FFMLykrmmQtQiseB%2BxfjIkysZKgI12EC2fH78zb2A9LCTBwE%2FTPhYCLE2%2F1XWvn1SNzaVg7z03YLWjJ5310Zj%2FkcrdllLwNvn3b1tLPS7AGlerpYrzub2h8%2BK5Cw8MYqxeLh3pkc9mFfx2VMtF%2F7vXzTrGgn2CCMbEY2qKZEDzA%2BJTtfTtDdc%2Br9usleJ50mL2s0t5jDd6iFUtMTkoNLNUNUIHPjD0%2BoXDBjqkAavy%2FikxTTh15SVwaraKJQQ5Rb4paZAc%2FgipOkcZjKnGKmu8BuGmXnCzRZ5MA20qEKmJuIkjSeaqMyQl1QzIEyT34zMmGt%2BPbvpNSrUGmdiPEdRsh5WT9QSFip2HbUE%2FAndrPR%2FEHdcdVYTNv1z5KD3tZNAKoaSCjvVvrytnzHkrMOVDtphSJLiHcAiGsSIEz58ALF%2BSLu0FcdHh%2BqZiFLGHBmYz&X-Amz-Signature=ecb84d16ac1c73f2c4beb72bcb84646b42cd98954a2c0262cc65eb4ecb901ded&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
