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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSNBONOC%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJGMEQCICvx0JpRpVAJkaW2y5JaweZFDfs2uInEIQuqcj03w2RWAiADc0rYNi9fC6ACamM9z9Ca4KvP3DhMm%2Bd0OWui075DeCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMtHgiTEAHmQa8r4gnKtwDGf%2FUfo%2FmfacfFCmQugxJ%2FuQzZrjYyNq5oqdSipZuM3jlCUxvRgRFkshbqnJi1aLYTGaInFyEiT2JVjdtVsz83VY1uizHX38oxf56HFBfcnYHYPr%2FOdop2DRCAGRRXbI4j6Ei70vqySrJXqkAdlk%2Fstmx4%2B7j00tLjbWEB5pGUUxBJWNxHH1aHUz3ivXk8dNuJFYbA%2F8WN8jA%2FCONhPQ74iQ1ZXReOtHu0WYG2eI165NLRfBCp7H%2Bh5Zn6qijSDdhBzb5J1cP0s8rpSnygco%2Feyx%2Ff8zafAuAsxyCyTgQLEJyANjofafZ%2FYwpzXGTAn3vvw%2Bjq2tweI6g%2Bj2ua%2BALQn5TFHA52q%2BdVpdrSbR0j79NMuhD%2F1kyRt0ZE2K9VkazUgHlLlMMAWC9bxFwu92vdZGTU807cjkAgHDlDDYpaONZ3vHFWx5dHT%2BBtgMnALopv57CJFN9KOBWTF%2BB44%2BVjKwV5i2iEVDH7vaZx5IUXQrKigrM2gU6raxuhFfYPwPvhjoIZ712HKeoKoY8HvFiU7IYsdjxerhEp1TFaKpX%2Fkm0GCTbRWCtBe%2FDl76SNuUUch6CV3nXC7rmnCmnzF2XFADto5KJ5Qw4p2VMtszObrrJpzLUex9g5vizip4wpbzjwwY6pgElwrQlJyb1z5jzoUyuAHcGS2o2720kotUojFLPxaCVuxXReI3wYLWradlAmQgQOj0UoQNZog8dy9tfiFdufXID%2BMX%2F50JKeAWRlRC7hITnbTkZLWRFI9bClhEM45t%2BCCCyz5ZGv47%2BBTv8hPuUH66FAvi1phcJVTfCDWu4aOiZ24VrILul1VD11KPiKdhuA0I8EtMl76Kwq68B955EWXDScYCw4xQU&X-Amz-Signature=7edc07985f07a963296b93976f0599251e684efe60257a6bbf2f5fbf7c4f85cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
