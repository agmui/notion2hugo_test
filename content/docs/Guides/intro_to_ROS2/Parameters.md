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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SL5L4UR%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T210732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCY%2BZhmBDIsJcaVpgJ2Ab5o9p2dK8rsd1oK9jiXi4UqJAIgMSfP%2BKrwOcEem8w6BamCFcmG%2ByNO30AXsAhx%2F%2FUdGqsq%2FwMITRAAGgw2Mzc0MjMxODM4MDUiDDsBu2kBt%2BVNPUw%2BjCrcA6218p7w%2FK2w2e1JZihXtSn4Js0WvzgSAznu1nfBlwV%2B%2BGu7LX7H8pk2CpWZwVGZjJxRGiNvc78t0P%2Fc3E4HpgO8g%2FdBs5npsUuPuCCuZGU9b6f7K4eSjaxBfXUI6SSfnZzZacDTkSDil7R%2FfDUQEKBGI%2FSE6YwxypTQlGdKG%2Bk8bAUlmZMCrgB%2FZOO0QHgQqZ%2B71DjtOTYSuwMfvu3UtL2IzNqFmb2fB1pGXnKfN%2BaCUL%2Bablk7LhuAUFR8eik51LwaJlltQ8wmRaU4%2BJIOQ82HgI%2F%2FGoe7r0%2FzHwyfFYhNhSuidOMIZz%2FL%2B7PoK6Se01zKXW6TUP%2F%2FSwpYPevO%2FTPtDV1xboKVcFNkfW%2FLwKYANJWU3ASWCc12XmPQD0gTxJdNfETNXY3H61xve4%2FsqUD%2Fcwua44a8g29JhLGTLxDJq6E1g3FGY%2BgfVo06zwLrRzR4BdZUsQb0HSC%2FyZBw%2FniLFIj2PKQlDKqpWfCrhLuCh09A20aPvxQLtnMX26XDhyKvHCSNWstnk7YVTbvmXpWoZTx%2B8pRYvqIdUtrmhmdLDwLeqzMW3KTMR%2FRkrcPrMnQ8KtJ80PcQeqm6dcqLU5e4xsNG1vF1dJX9Tw90msj%2BtGnmd%2F7pnZ3l7cetMMKC4r4GOqUBI71pIrhgGfpJUVD7XI77JDywZCGaIF3mgHJIeXmuGPMuk6bExcyamhBq84UcN3wigXVSaR04n5K1vU3VUjKii1Y0fVqs%2FauVaJyFTBBht0lqz7Lu50k542B7ODI3BjlNaC83dco6dvjvp%2FcvCFBy0lO0M62jaPpFAb9ByO8Ugi6R5A8YO4OZj3LNKsc3SCD4N3lBug7cMZlthcLpK2L2vfnB7ahC&X-Amz-Signature=1319d0e84c58a78a4b2a61b16a56e26866188b2eec90169efc6a71debffb49fc&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
