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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46626535FW5%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033937Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBY8y5KT7USAJi%2BQi3AACDnkrWmKBw%2FV2yN5%2BjUdd90hAiB3oDHfnrZ0RpOwfYJT%2FhMWMx5wBWAWnmg07feBiAA5YCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgFQoNtptUALYsJh8KtwDlhbygUF2SS5ryM9PLzhUjnbhT1UeGVm1hRiwX1KpqjSz9txJDVd5v7%2B2kfbzJWWJROxei4OTy3z9%2BFgMNrDfe5v0Li%2Fw85kOfSAQbB4PzlxOjskipeR5cMuWcgRQ5erP6VKxoYaHVBWLANe2XUIwdufM3hq7BMhuTjbKK9%2BCwfnIx88gASOq2YywQ7U1HMEPQ73emhn%2BAziUBGb%2FjdG%2BwxkN%2Fmo%2F4uRtAM%2BpBRiDkeepdTCVim3TgFX%2B29btDZXrU%2FNN3BIUYEIuQCK6n1eqOwQt4NuTsQgr%2BYeEP4JPvba2SUj%2BKZWE3uCCS9cNg1hk9hHEOUHSnsQU0%2FjGhqau%2BB%2BnXEKhECE0GCM0JxtEZM9EjUykC8E%2Fl1n3ahu2zHOYiLmsItSAAa40gj9ZybmYWNElxRaQrjIcjfxSsn6Jxie%2BCvaolM3ZXIyPJRciLeIivdm%2FAZQ9eRPX3vqd%2FYiYlPs05UZM3wq%2FNjS%2FHrr7x5ZqgW0UopwThl0axJ9wTW5glDqfdUQO04Wo4kAs9KrNIn8C2nQ6HtLQQticVgQH0P8FBEAmUbr2PhNS1ZDkjg5vZDVPmJO6TWbAQVf2Jibcf1xg7QCoKsdnyFIBVwtwQgxhP31NW8tYQ3hpvNUwqMT5wQY6pgH2%2BhYkn2gV0N9wkYoGSJNarDxLYnyTSErOied1TNZ0wdaxDCjVecSXh8e832enqPyq2pTo4omU15bWDzLUkwUQiA8zqvaLu10VcMFC96N0u7vL4zoUY2HWri81q%2B5CJZJWzjERTNkXAZwM1a%2FewX56FDBLS6MCrbtzMo0A%2FDItogQt6Or%2BpjYnr7hNC5PSLb%2Bmt6oHgOYA5p6n4UPdNoTXcv6TbHkc&X-Amz-Signature=0d2dd405ab1beb2ef905fe2f8064e03891d9d43d9a25f22ee48c059454da2071&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
