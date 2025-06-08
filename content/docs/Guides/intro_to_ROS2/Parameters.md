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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673ZYBU2Q%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T150729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHHxosWgrTH1h%2Bqoa17s9prV3j4EeeSlAMkzYO6cqN9LAiEAmgCsshIokTVLxWSyaCgGU2uGwMimakYMWGIqALqwJo4qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKoVidlB0xRNMstn1SrcA3ZZF9VJ8IRX%2BkexPfe5WTXe2%2BXQOPMhux%2BEOQ31%2FFD2KcSyQhO8eRVYXFDG3O8TBWzOMOcX3Wupw0Fc57ihSwbD8Z6HIl2JaOyyfhrz1fGlQhlN%2BACzP80cnKcR8Mr815ESBkNQjGoHuGhKZwWtbgxEXJ4PYdThauaLKl59aXPGoMqPYw5wJm6WWmq4GQEtOYm8nTauEULZMJTFJt3psdYKODzs%2Fd2JoQ0JUCKue2zeULYhNnawwNhpe1GvCTcVg%2B3FV%2BW%2BIJZtq9PPoWwwNecj1h5afu%2BHGUUqZavyJWUT4DdfrJMEYprls3HZFwIhjpJwGewnmDoxDvu%2BfaWmpqup2thKwA7pklJ457JK1xQ3KQ3zWFExBo8BqwuwJI2GrDM3oUkemo5loK%2B9mK%2Fpy1dowg%2Fm9tbNhov6r60GFSUVawvguRVGKap3W%2FeAywDkRwDLOaf7dZMt3JPoI9Dg7zTYQrs2edcznzyZVDWupTEyf%2BERNWiNXhXkrJ5yDrpU%2BNrZquh4Oz7h2psNvOtYJ9iSA%2BDacstNqvoA83OqdlD9y3ZtonUOJhOPngC6V%2BTszbLBrEM2mlE2024wbjy2kytsNCF2%2FyryLZV52fdqwz%2Fdn6kwT3317D73zaBRMLyylsIGOqUBsn7NV20SSUO%2FbbzqiKoH3vLyJedG0Y7x%2FI9OdiKNWYpzt8AAgi0%2BKRi70e4sWhIdh0chwATWUdvPRACpDUfhG7KhuImPmjrZ379ggVzvMSpm4r8n3L%2FUiYNi2wvVATyCKQK0dxtud4IjVUFcwofepx6N2guGwULpSyZRY5Dk2yoO%2FDSTvTpe0JdlU6EDcoGEGS4xWhnJRtQOdppA%2Bo6bpZsHZSCw&X-Amz-Signature=9d7e8f0b90df416dd5a4af95a87120f7fd9249e129afc1a64ccc43cc9a949cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
