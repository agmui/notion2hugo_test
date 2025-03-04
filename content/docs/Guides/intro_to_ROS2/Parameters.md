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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAKXNKB5%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T140815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyqNfrZw%2BbXJEakFTR5w%2ByeroerpBUS4lpDP7RLEKvxwIgHGbly7vPbcTjSeIl87BJrFfi9pHDtTFpd8Bln330xBsqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJa9N8JbsUgMMNk2bCrcA93xd8v5AFbCTFaWx0kgQWo8%2Bqp9SIAPYrHEaTrtr%2F781RHWnqSjuVu06ZFVKWMVvUnpHoEddSj%2B%2FC8WLMOX3E32SlnwGkM0b8YI9Qz8hE74mesLt2Xj0qot4wa5elR3amKkBMMWLzMxhDgMnVcUrdnfEUVVhh9VKGvhopj1BxfW%2BaLzaJMx%2FJl71%2BdVe6cBc1BlGpRyfKMIm9b9s%2FbiRDFg%2BC0xoOKz%2Bl%2Bon%2FYt4keCVwlmiXtNZdlVHhyp17qCY%2Fwu7ZKSTTxDGW747wp9J9E3eEUqKpOtuspBr1kwDQ3mIrKJCWvYQM4RB0U4afsZjAz8zxKvNlw0LoBZvagVZCIAKFHnlIMvI4G60V%2BlnHHbBssV0nPcljLyc9r2iPJuErvVAGTyap2BzB9Kp6mEeD56C6KAgNetS%2Bu5rBkm1%2BeX3Q%2FPYSF57pfTJJOE8%2B%2FmKQkNQvaNLvp8mRnQM2Vb5WdQWaFc%2FowDxbnM7bPZmFbpNxM9aSPaqzNQwHQXYMZcytQOxOyMCZx8STRarUGt525%2FUxN3KJy1G9Rw5o%2FZCZX4qmCjYkRtZeE1ZNNEn5zuMhjyKqR%2F2r0bbFi1JYjRXqJjF59rL%2FY%2BkIKQtJu5xlqAydbqcASqLN4wxwHAMNCLnL4GOqUBK9fu4Rf5DaEQapKUWYcH9RNTiOZA61O3NeO4KM856aeBOpvmgV7NZkk%2Fwc2e8MjWt9G7d7cBiBDbKT1wviQgZUPaMZyYYp8573MPz5vn5Gixwq4T13vm89fKllHD7KkXW3YB%2F5u8PUWxMeYDDugU%2FK1A1v%2F06HwT2i6bIt2iSeB9BnP9%2Fby5A1aob7NT%2FaEpp9jFLLKWMy2hijTrRLu9KwYNBly2&X-Amz-Signature=2f5248dd7f7ca7ad1e25b17a4ffbc873e271c3767c43561a475e60129fa3b726&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
