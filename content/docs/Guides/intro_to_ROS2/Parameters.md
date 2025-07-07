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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NCQKUVZ%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJGMEQCIFqxRoilbh7H6Wjl%2FSh5N5wBS2yubfLYxnQVCgufgZU9AiB%2FlCH1d%2FnGRyGnJP1MIveudUXwMRMO9POp5r3JT9gDcSr%2FAwhmEAAaDDYzNzQyMzE4MzgwNSIMya7Yjun2IfWjCUuyKtwDlqXFqbEYJtEJLTu8m7DQTl%2BT8ds1rgAVLNO07sTtrOa66aXs1bMzmGzEA%2BxLp39J9tffVPRvNIU3g2wSo8%2B1m4G1d3cQ3R5MAKookVf5IqRKg9te6wOCqHeUcFHz3pfY7%2FVmCS56lpyShVXTxhuBDLqGYVR%2FNqCDHj72YTRUAKCyWqptW1oyXSJvO4FARJAxwveOISsnZhK14jce0Um6FZk98jPcMoYFIa9w0mylUf9JO6aUGVdzRzvYGqpD7a4ixmpfp%2B%2BgppBahG3M4%2BUMpDixV9Ps5sNy6MmZGxX%2FE0ngoT%2Fs%2FsIesOsVexUUv0ZLcU%2B7NYqO7gs0Vwn1ekn9fabSZyZeA7wAXK3oHa%2FtTbKgre88F2Fwb8ksYn2mnv8QVmmHuSh7g9arnPS9RRWpZsPjV42FPgA6Xjvw2XSkfTzAePeLWrcG2ZH%2FrWbmQ0pm%2B7IgE4sXNP2FIJj%2BrLHm%2BkQ7OjOXc%2BMZ%2B4Pvg4ECepHFUA0FTPl76ptVnLc0bXWh8idTBTAMWc04wP7m3rZIkK0M2Erl%2BO9yBoTeBEvkbiqMe78bKWYzndsrAa5zx%2B0Cj4OQjrZB4B1Bbb6yMU9gwLFcZAZCgdl7zWit90HQPoelXJOCnOGYYoc8mNAwrcWrwwY6pgF%2BRn3Fg%2B1dl2Jbv0uDC%2BoklDQCMKaxOsW%2BdHzdtKSXO0wglqqOEX2BftzKp4T%2Fu%2Bb2Pcx36YiJEOGfbWV7Ctlp1KRiKvOfAkZX3KIdt6qJ%2BzTchCtn7lvA%2BLTNDANDTocJYnlkUyW4HPEplHiuUBBRxyDGtlImAnWCi8ncWAg4iBzecqLgmWIhj8%2Bwh%2BEvsfhFNOApL4BgOepmPCIwT0AOyrafZBY%2F&X-Amz-Signature=3536bddafa97de0ced753a033c59889cabf19090eb5cdc7d9d17e8b62decd529&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
