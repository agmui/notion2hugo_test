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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVT5WF2H%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T131925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCS%2FPAuqTvc9t6EM48Cmr7C7Y%2B4ZOqjmqZg%2FLR26P6MhwIgE0q2JiZ6lHuCM8DpGM4QvZNAIgBgn3dAwwMGHVpBMqAqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAP3LHBZiDJGiGwC4ircA9SeBJse0q1Ufv2qVLNIISSqFHn4f0YsS57Q2yVG2UL83m3xaHJroqHI0MDMuESTwYEpX13CSJ5X8H8wizxRVBnRs%2BXUyZtcTPpoX1C8BVv27HzPJmeTfK6wdetZH11rbAuHwH8exjfFEHof4K2z0W4AbUjtsCIOiZawNKBXtzJw60jJs64CYQRnj%2BbOEUOnIaz%2BP9zpTsSpz%2BocZUvkwcOQL8DcikRzHIfyW%2B7ePoGIXmYiIosrju3P9SAjcq%2BP6v6xfxQ05C2xMIqSRDbXdkXNNRFLWwXWklv6dC5SdriMcHQfflqqogSoVqZ8gqLUoD%2BxNbt26kG6TFkZW8GMv8%2Bi9FwZGxd5yzaEO47FUJKHFkEZRxIvPk2qo5yCldUpY%2BPZ6VS%2FGO0XI28Gtc0a3BzJn7o4oI4D5d0NPWsImgbhJuEen1d37rQZvJCqqRhwR9TZQaK36C9th%2FId1d5fw7LsfSmU38h971De6HOsYCW6DZFi0Xo7vhWzOqTPyEkiAmPf0LY0Nm42PfUlLLERajhAGu3cZwAbjqUHm65tm1CSfhxW%2BUa6PYD6z2i3sHGAuRH8S7Jx%2Bvld0Mu9Bma%2BUByYIJrE4aGeoxh0UWmqYw2PRa0%2Fi4Y7jyAGbCKfMJzk68EGOqUBarDi9jIdLyPMVKtfo%2BtFbyDRGTIb0EgLiR0CAXGQpPTS9c9N4GWVGmpIUS4A7twxz0BuI9%2BLiu5WFQiy7aTJSc4UXE4viUPewlPoa5Tesncxl%2BLG37KN%2BfYvsDUY0ZeNlRnLHiBQHW6RdcINskSdi5qwc3L7JJXVjiM3%2BaI2ahS7lrCnAad4olY4NeQTG4tfipHHGachT4lEWQJosmvUGlAKz%2B3T&X-Amz-Signature=f99cb80741ea9650d4ccd03ded59154c8d050a61f0d962839c0412f9d56547b4&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
