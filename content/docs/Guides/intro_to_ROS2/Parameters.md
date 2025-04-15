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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZDRHPXS%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T210757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGDo2dk5jX1jqL%2FTBzVDdz09vJNDW1yCMogcy04sj9vnAiA%2BSHXjIdZ2FN5ufLpLBOkLSyOiue6BTL0lYz98nmDvayr%2FAwg0EAAaDDYzNzQyMzE4MzgwNSIMOdRjs7ICKXj%2B%2FM%2B5KtwDzo2tSMlyl44oUOUF%2FRfs1r01aN1VFQnVXF3AnGmNtVXw8U4w1qKb5%2BMBAqLKG5jaCEFIUDWIiFcXrtydZFhOj%2BRLu6MZ8mT4kFJ582W1%2FesIbnjjZWvKzSfPfNm0RDQYuW5hxXKlirCkmE%2FW4YGNnAeX6i0lwUGzJy4EqupXdS9WeG1MSjiRKD4%2B1%2BY5EvHgGWwlG6N1i91vciPlJZkMXmd2eWASvSMME6YttAS43YSFosfPGkUwh5do5nXK8sjFE%2F7mw7UeJXIwo9KM%2By5MjTUn1mTcgJ2ERctNtUrPcXUIVBCF1VEDP9Z04Ur9nsqmO0cdQNxuaye8qfwOWO%2FC1fgYoqAvUG8HX6Pww%2BZ2VJ8vIcY0XdSt3dKhGIS3B6giDgUFCyi6hzacocfIk7R2nCZKCNlhzj4KHLnQvNzeEWF7s%2BH6Uem0QDVWgmdKmL3QCjRAS2Sp9V3I5YR%2BiFYIVp8wNsRPgJ8J3sSU4McMsZs1LEgiR9D6iOb1qInU3EQ%2Bttd9z72b2ZO9QsuXJ0rlwbPiUC0tARVS2IhsvIN3hpms%2FJkOv2bmC2ONDPp%2BNiWsktdPpveZnGONE9jo2JMiywc4SezTdfXWusUfIBe1Y78iQKW5Fzgzs2HkWi8wmNb6vwY6pgH2fetd%2F4VWCF39tnJAcJ2WSqQ9KjaDlZDerHQCESC2tuoXAfl1aEgKkZY3dZEPTK4bT9h%2B26VgdylpBePQBnCgNOzGrUCC9XLezv0c4FjJ7VyIj66HiaSurAVidWSfglgK30ZAo2SBiFuaZbsl%2BdbTAxpJFSYtIJ7I1LygkkPN0jIRj%2FuS6Wt3C2FUdQVvgJtA9oA7ilFxuao0HEUzouDPGMPgYQJy&X-Amz-Signature=bdda12a006891adc01d2bfed1bfb15c700323afa8ca37b772580d0c1022164fb&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
