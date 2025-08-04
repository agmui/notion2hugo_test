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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662D657KNN%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T101312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQDyyyH3uUJ%2BpNkJRGBs9rERm0NeCFzLviVDtFwhuiGMDAIgH0WBKYJtM21ZpIOvej0XgusfNWgclm35pl2ibfJpEIEq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDAvRk2W1h01se%2BU9UyrcAyeO5YWKVua5QVqnjScr5b34Ko2lIHNk5rFTkqiRSyLl3FcsvFDXetx%2BMAnOmKtD%2F5lXyFnOlHOwoUjARYAIFyQKmSDSKh%2B91g6tJV1tLTuP8W6cmYj6Bw8C1R6ztJhCkcY%2BKvSdXtrW5F1FZhcb0GwpzCQTK6oR%2BCPmDLLVg8iyC0S8QZW5RBT0KcnnxLpZIGqak1v8p2PwI0sS7ODKC8duDCw7ogOdHD0G5VD9TIC10M1HhVd%2B7V9fuphxFOlxdxC2tQ02e%2Bg%2FRCRx5GsTytEMR55AydyrfsnAN2b%2BatkmjOSP7981aBIoH8w9%2BTmF3U0ZSNFQ3BkTMfU8ihf1zyhP%2FIGkX1XGRgVRWGiuePD5BTmc4%2FLiYz0oaxN97TXuhMqHeGEYSmjjnWpzUn5UDQAbpjYzGJvfF90JTH0tcULx%2BTByNCsGIk3s6Cu4B51GrtB8vmPWH45YMX%2B6kccKSK%2F9sEHY4YnKGnnrd%2FSR%2FycJ0hbMv8BzT56JRcnH2tJJSrMYmUBxJIj6olgwulC4frCPdX6xEuEle3sj31afcWMBa64A7DqwRKOBuSQiDbLQq4nLD9JmoNe%2F7eAXDVnP3JKtbuz6TbbyRraPwVxP7MQczyJL6QXiATSLRJUvMPKBwsQGOqUB1l8Wtszd7pOTIxQ%2FsInX71VqEAd62qnNYZQUQY3cISKkPnLvXKcc9wp8KB%2B%2FGZK3gFjD71nKItsvI3Og5tVnnziB%2FVuOAA7z0ZIo2zjVLlvw86av1XxFxyFZdjoZj6ZAIhxu1meiaWrjv6NJ3fbULyHg4xbNcHY5FWaMwrSDw%2BPCydRSx3Zexd%2BeNZ%2FwRS60aHGdhgsCJDvcqEIo96SbXZPp19FR&X-Amz-Signature=aa80769915112c68e590a6cee1f2b690a6e842e7e0f4c8f19a1a3f6f07fe2c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
