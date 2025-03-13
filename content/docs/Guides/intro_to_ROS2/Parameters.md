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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF75SQJF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T131833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2lMCTmS2x6ZHVNW6AhSpevX2m6cYa2H%2BLvYyDBUg6DAiEA3GZT5kg6bW4dpIB17MAlT3bMEycorkvIltTkACuFSw8qiAQI1v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGKlgwPEcJlGNEus3SrcA8HTcvNZh3%2BTfWsQ3fYrUGkEu%2FXK7ffMlAQZEEHOD4xxztWj7NVsncjVj56zGI0bVwkhcDR6Ky9bo2Kmsae6r0hCsonlRNH53dyN7uoGItqa5qm6lr291xKteP6nILjr%2B2QC6OnPShktD08AINN1RMqw2MmijSMqBX4uRntOv5gVUvEKJNFNaFMaxDQ263wQxqgNqDSyqq2HaNVp7foitPGXTEWet7iO2v3NsNT1fq2xGHbQkRPFl9S389gtgx9FY9jUMZio0xnslNqvbwJoxRBPet0eUMmuQ1lKkg6KVwpZfLauckLFIn98E3fCQSM5zb8dV5RRrBCfwZByVopJ9Sp2fFi2Um%2BCheptMEWUnifFwFhSXHM%2BGGaqOoo5lt6qSQt0WQk5RBi87An06LQc3OoIWQ2ZIvN1tFKxYU6y5vQFns4sBOAFFuwS%2BhFWtGDINDZAryoc4Dwya8qxWei58ucSQLQeLmetORd74jyTkGDk17E3%2FYwMfA0LxkzWOh%2FB2ZLA8zqWDZmhWDySCaw9OSqq4GVKvMUkEJZBgjNdo%2F5lKcJt4mQkNVcmxF5lWKfGarcBG4PNM%2FL1nOHA6rn31Yt7Z%2BcO28MeEVwoFMDeWOmRWFzsHRf3bs5Li2KzMNecy74GOqUBKU0F4vhLoV64k1LoDhdWVz6ajCF0MUCAAtS%2FPR3oIUuAIQF5OUPnxTmC5c6u7hXYpx1aP8mqVCAIbwNPmhsQzBiNSw5RW1dh9gIIEu0HEcgreJgHIVzuVypTn0nvMsC5wiHxbJvqAdcWvYVMox%2Bvfrd6VUFMgGQxlvLjPGE0lFsFrnpjNYq1gMNXdk730YVucGO6Kf6ZhBv71%2FVv6MZqiwQfGe%2Bh&X-Amz-Signature=742297bd1cbe56889ef0789c73d676ecab65d2ee529b43cf122682c35cbbb715&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
