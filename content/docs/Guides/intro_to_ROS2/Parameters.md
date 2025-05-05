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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466526UKGB7%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDNhE41nAMK%2B5S9z0SN%2BZXdhOvva6CFaA95xm6TTfsvkgIhANuMUjJypwZW2ZNCzj%2BqqV9N2J5ToT1Tqi7JebUGBk5FKv8DCCUQABoMNjM3NDIzMTgzODA1IgysTo7zHVG0lO1YFB4q3AOJBgmMqmxMbdSGq%2B1Fpi%2BNBjzdR5%2B1UsfaWaoWc7OOLvzqm3L5F8UtwMg5LlLR9P5q2T4hqFOSWYsonkxJHk6tequ9raU508OQK90a%2F53v6zpxSKJ30OIryD1RQy5lQBQRt%2FggL%2Ff2nWkMXMnfkthZP1xzog%2B7x%2FH7TBeCMKgcgL4itA6Zs%2FrFrNXVo9xiwSHNZXhsKFdRdlD%2Fmh6tuMhQq2Y2HhAZQnhrfzFahs%2Bbme1d5mn6nn5ClC%2F%2BjtXLjintExR3St8S5KdtCaJ7oilWaUIaG%2F9hhzxQIXdYDxbEcNyQTS4%2FJJCyX5ONPE7FBca008LKHLww%2BBo%2FltbBqRbH3Z2k9b6sR0Mwwwmbm9N9pl22EXPcyTXTPUfIJ3PVe4NA6Aw63kH0Mky%2Bz0eMcfzktzcDCzi5soaNA5HbmtvIW5WVQUNWjXNWQue0M94SgN2wbihDBApd4Qp2u%2FHiRftjwjWObIm4PNE1PyirA7AKG4LH%2F5mYo%2FE34YSBYyUxsHPt%2Bw%2Br0oLawwo4%2BFYBlNrsa%2FOtD7H%2FQa4YFpg%2Bk1BABhYTlba4mtLG3FYGESrLfJAHerri9ayIANqSFuRBPvuWTUFSQLMNTSzLe%2FGudlRFlePzXr3AJRjP9AaNpjCy6uDABjqkATcYry5qxfLRL8g10QLyGgvxU7mUGpy4yCVctAXX18KFPTSeNxCeKZTkcoyYGQE%2FtLihizryO2gWTsQ5%2BnIH%2FAVJp61%2BRuhAnhg%2BT8FItgRd9hKsyKCDyYH2oUc%2BxwOatYhimEfZLQl51VUUFm6cBhNH7HT%2Bv6jpjuFTAJU6QnU6Uuz7ExuaQZXSENPF70FWPvIJ1XmoTB9o4YTHIUEnCb6mYEZV&X-Amz-Signature=47b037322a11493538b193b50d2ab41426c329f230baec7200463c043761bd17&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
