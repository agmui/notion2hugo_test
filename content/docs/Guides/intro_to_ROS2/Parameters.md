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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DOQCNDA%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T071049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCICoJMUVx3278P2WjYXDJeyYmeONqsNHwMKY6DerdC5HxAiEA6tCWnFIb9zmjFT2aiKZ3EIeVfuLzcT8yuiVrDutmDEQqiAQI%2Fv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO67VCdNDznKWJbTTCrcAzCf%2FDhYNiBK7s%2FMT0nvbujpV4cqye1qtKnA7bTo8epDsuEh4FZUqBUfq%2Bs98V3IvmKEtMAVCa2Ttl42K%2FxQpjp31hPHTTiuTj%2BPy9kLqGRXoYnNKS7g2TtBdK%2BCSr31I5mCGObtKX%2BULjwT5RijbNH4zBozdpt%2BS5P7NVE%2Fkzrc0RkGqCe2G8nE99PCKwThNH8M6%2FHdh2DQQCJBRhoMhdk%2BaN2GgfD6rTnt8RqRxelEb2x4rbbLfXbLkGq5Tb176EpVhDlsQy1qmzeTB9V2vj%2B%2BbxDB03isDc13CfR3V87bju5fKCIbwkm%2FM9fXf8g5%2FWlmps7BjjUpIZmuluwEGKTOdsU5WamEn%2BZ%2B3TKCo8lld70RUBwsbpwUJZOvCj5nqadGpm8nBJN%2BZhT0B%2FdZpm9c0hnIeJZSeMIteek5qIyHOmAbsgodvg6fU0CbU0uB69M4m%2Fvop6J1YTzejTC9D7rtG9J5sST2vcyG%2BjWQmqzbR6TUqLtkSIN33%2FaYa15aWVI1Egg5rXjUhWZL7jAjlXGQQqo9%2F%2FTDk%2BWh%2BMpkqDqhgHNKiAQoUnduY3PXEV2wRptSqWK%2FHunqFuBx33UL0UGBXHQSY0xvJYKBpQ24WlqQqZz%2BYLW2ts0t%2FB6tMOCB%2BsEGOqUBuw0XO5ipcz77MkTkRgCzuQw4mGSSsH7o%2FzftFgltBMhn8c8WOGdw0Ddf%2FUdUanOUHfoXaDRPfW5rggsDZO7jcx7oU8A7uVZANyQAPTE3VZUywJkKaA0U5DmUMKH7oS2aDkak0sAd4MOAJJP8hD1scugU4UQedVUqVU3aK6rGTdmPFDwnukU%2FZrsIdiz4ZYExQBO13gWzv%2FbwgOzFIIQAl7ksp5L1&X-Amz-Signature=6c43af02ee744a87c299f4bc958881f9cbc9bf6d8434661d238a7f6a85a66d15&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
