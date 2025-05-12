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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466466K6DBW%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T170119Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQDHDKSK%2FpBO2JKqrxCb5MFf8ihSvBxdH1%2BRNIZ8w2GRUgIgciufsoyu%2BaBW6pTvRo35uhals3AnpgRlVhfWBv18BagqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHun07420VWskYxgbCrcAy%2FnCWvCxzyJyoSPtEmzt5bu8VF4G0dtA%2FWogOtDqAD93sLaXN6aBnWgJaTi66ioIQq7opsTDgmtD7C1Kfdmrfmo11m2PkMZjAbDZgflP1WvNLoIjcdka%2B%2FpfdposFVCgZaZ9mCGe%2Fl5B4Hk8jFP7XWSOvrqtHp%2BtuJmiLp%2F8ngjv7v66ZwXfpa%2FxArsYI6CR%2FTdY3U0E6Mj7gnsai6oLXa3bXqzCY1j4frTBo1VSoqSb8lgaC%2FkuctMchgH%2FIxkbMXX9gbE6kc%2FBxFuzTXE6KGeEBK9eDYE76xaUDHu1Dwy1wGiYa6W0LW%2FDz61LWLZP9js3qmYwLYe2K8nV7KFwEJYC1CBaGpGD0FlvO%2Bbu%2BLPf3wwz2Pbex4YRiQxigWU9NreQuFI5XorP%2BeQ3tc%2BliyHk%2BaPYC%2Fw0%2BGCb1T6owGa%2FKAtYWDwLa3WJ9E%2FSFKyx4EbcSfcc9ZcBuSqAB%2BKDk%2BTYgTmScyGC4dsgpZHH0y%2Bt3HGPsb%2FbDVqofeBmPNN2pU%2BPtTVYB7nRQe1gxgg1oCJnBdbU8Ckw%2BxRSJMlHw%2FkJYzuG0PCyJWliKNUsY2v%2FuPfW9jSGGNYfp1MN6F3UmUKnBTcLDv6n5usd8%2FTj3p3KgsSvHfVVeMggBd5MOO9iMEGOqUBSFin58bZpqZgEzrnrbQmzbmr2eAYC8G4pBKfLUQJfmTcqdxBWjgyDtJbHwRbV0ceJ%2BFcjI2GoRvIrLXeXxV%2Fzab1Z7dboa306DCqKk9n79PSrUupHEHLmlK%2BBzm6ZD9Zcxwcu2fEUctupxv8ylzcxfYt8ckqQILranwe5sBNIOqS7GaMlNjf8LT7Kn5upWdFL96FZOZYwUQlMAVLCwCZKtidpELm&X-Amz-Signature=608269ca846d14d96be672f8aea343fbd3b2693121d6e5af259338e2f2d7a0e0&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
