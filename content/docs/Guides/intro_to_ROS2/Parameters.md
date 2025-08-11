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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDD42WTX%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T081509Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIDP5WrWSk6Eag8Qd2HWCDggF%2Fk26nF1TPWFD5fuvCbgIga3kHb2hMEOBuPggU1XAOvTdIO%2FTVi31DAtvWzoTCYIQqiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFEYXo%2FRtPZ1IQkCnCrcA%2FnpXtQPO5YRbFutOb2xmIbIdWzbCy5DbBxpP01dckErNB8airpPEVD8cPrND1LRkBZ%2FDoHxHHlxI0I5dWQydr6PJy6D8sI1Lw3H8GSzmw7O9qZtsGOAbGSuzadculdxMe%2FZSHLVFXGzNmIpd%2BI8TxzBQfC1R5VHq7QaROf2Ni6MXhSuvgnQazAxdTbTrzdHuVOnYlRjR2skLsNe%2BurCuuv990GbhkBPwEedbRURHmKDw53GvK9asFNMCh3ZNRBVVbRY5EYZjhvT7Edrq4dB3NH02tc3Ql3gfFOeOimJsHSjjyCQmK%2Fiv75x0vlLXVgAd%2FwYmUIAfX%2Fp1tidy%2FC5Xqn0GFm0sRy188N%2BrfPgSnX9m%2BLjRsYg%2FDBLr%2FEnPC5IiXm1vdxgOiRR4kIpna%2FrZ%2FBlgj%2Bpghx7FEUmF1H0m9Y5ckKTP8jF%2F%2BnTlDEm%2Fnl2pKnAYdbaOdRm%2BmvFOIW2tCPewy653pC9Lrzg%2FTi5UsLx%2FDd3KdagdvYl6ZlPa17x8rxT4xEuoFKsXI5%2FIbRhAGcx%2FLJppPvUQHhn92VDhheuFkRIyK%2FVq6lSvj1ONbkNcaZ56DnXPChp6OPDo1mTDDsTqpKBUURL0MD6y0CHW4WwGcfSvYir4legSW%2BbMPCs5sQGOqUBhXq%2FyWgdZ81l2%2Fb%2FdyaREGG%2FC2Zh6AgId6jMBUHjEUSg0bOaKMdIVCHhn2TvxjN5FRFMC%2BCaUTX4cJDfgw%2B6ZQUNCJQLRbXZnaBpvc8hh32WQfLZc8G%2F4DuShd%2B08WY3VzDdGIhjmV5flSQMdczlP%2Fhdjos%2F07CPhljU7hebMeukmZ5l6vtcsA%2BqKMJBRxWyGSTHlnkVxfJhopB9lv98%2Fnus%2FS5s&X-Amz-Signature=a6e4dc146256efab5cce05eb4769185402efa9d16486ff7683dfc1c83ff5ee06&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
