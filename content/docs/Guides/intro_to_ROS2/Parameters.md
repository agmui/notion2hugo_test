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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3E4F6HG%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T090940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQjQHJ%2BraB8T182RPzRUSuLlGgw%2BFiJrZInIFGKJEIQgIgBSQIhMV%2FYJyTVo08JvjpiHal8Qqm%2FvjbwBBA0anFmkAq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDLVfQDc9PyROfE3SircA1E56QswM5OuS32yrcSFod7WS94TvTFNHxZIQxrdUCwmkPV2SHY1jJ5MBvGVayqyxdfBcJzrQ%2FF%2Fbfos5GsGc4GO7EI2EtJIoti7Gk6y5VzDU8ij6Iq%2BH9sitBQ%2FxVSDIau3zUFRamwQvN8kfFnA5%2FxX9Zz5ZHrB6G2D5OaW%2BvSP5uBQsfiK%2BL6u8sX1Mp4XjIeC4vPA4Hctl79NoZ8OvYlN8fbZC8mki74yerb89iq0xULv0Ya3KT%2BBaZqEiQCiWruzENtG4HWqCI8GnlFatquDJUA9f9wUMJJnpBzkY8u%2BfLObacpFZENszTRt2ejcozIL45sgoGmfWjUXGVWyNxVkIAQ9o9CfJYS63asTCBF2%2BvOv2WLrDg8wbrxj6Dy%2F9pJLV8cG%2Fd8o9S3C22tWGYEww6yg4GsHXp6cirwvWlfYFyi53GKKGSpqiixLwUXC1OAQ1ERrKw%2FDHQ%2F5oIf3ZtXQEUOTxb37kHa3mbD0wRapfBOs9svutKCQRXLsJ4tcA0voUABQHo3WRIo5Dc8JdIoV4qxdm%2B7E0eCHaMMc9V9oIqqL75gEfW0Ill%2BOkbkMdMVjUP0hxXPTJLaJSwmFol7KvlBR8ua%2BMDjveyUqkcT35og0FLJdJHUWshKyMOHr8L0GOqUBZZeLP9mm58Yss0nH6J9Yaheee8dP2yqvK2TNYUwuRvnVu5cxW84InbFLJmeVkUao%2B5aPszaK2GB3Z7srKrdQuxbeGoYSGGiPSYWAd08oIwgBSPRP8lI2QvTcQqPTpBCUnvLRgeZ7NCspsx2gqrUsrp1odlXeghHpMTap8bW0ccArV%2BqgoPXogXwLTg6NDs%2B64qyZaKhBe8srqEvrM%2FPnytNZ45p1&X-Amz-Signature=127005938036001fd076215bd33112b388ce64665ab35bf15d074aa9c8e7ed10&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
