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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUE3SXBI%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIHYPm4ZrszJV%2BCYWHMbxRAwy1vaaZxQ8VvhCvawAfzveAiB1mPGIQyIlW1b5ccyEBwN4lJPjPbj%2BhPsMSAF2N%2Fk5tSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMSlGIZmi6Puz2mNCDKtwDGabN3GnGTVVwEKyjk0OLEkCeKzkrAw6nClZ1RbvsCdI%2BxTrhzMFrvlwk%2BNQYaOrvxNgBaZhsz%2B3Ii7dBhoFc17bEXvNH5YH3eqq3pAEwQ01FfrVBToRIS%2BV%2BumfNSVsBnVsv3SHGEeSm7LrO8blgGgdym%2FXZnGp2NkKsTU5gWrdLEw6clHJXop4DovSqJXLE0qsfHi3csYT1yg0%2Bo%2FI8wxW46tFpu4L9R%2B4YiECbTRSfIFS4D%2B4dkMw2jSlDL6B9LrbHvMNDq3kQO26bxemtFSlAWsFpElrbO8u9EhTKmy5RgDPHESwzWxoNCs165UvIC2PfP0bFtpe%2BLkdl5fz4RwMT7rd993bCVNAiemWAsz5xVurCZJo%2BK3FRqwXuVXMjd2VgkuKZka27jT4ShLWztWE63UTB2c0b9d7Ke%2B2LtBuPqQ1br9NDp8HfG7zdLtlu4WICCcRywQqE0ICBaSHzmJrz3I5N5LDbq4w3QihfHaAdTUp%2FTk63Vm81rVNT63N4pckM7fN17d6mtZR1ZjlE6lf1QJkbFE0lnQOLFaB7q%2BPougR5HpTQaJwb22SlZ0%2BkzcL9e7jCJEZ1hcrjqPDd1g1tyr4RsxnUheaqXNgrDMdH%2BqFPvLLJggLpyLwwntKxwgY6pgHh6YQZGahn1v4xaIYjoL8oFX0%2BszmHZkYkRuUPdIfJy39o1X6WPKgEgPqITWVsJTO6Ys71hzhfc46fTuZBSkpRmKkwIsYh1UyHoY9ME%2BT77R8G1wQOcu9QmOp3xwQsr6kR60vBmTlvVrzKPF%2BBH55EoJVCyzukVn7Vrt%2BVUlz3EsO0cfNd4Diw2ZwQewz%2BFtX%2FTJjA5BbWESAhynX4NEjRIaKTaHSm&X-Amz-Signature=21a9e9d704738ac4cf46f19fc4ea1dba0584d67809978f1fe0a76c3da91301aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
