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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YEE7LBN%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T121751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIQDAeuLGBoxq%2BycYbeUTP%2BUILDTVcf92zMA71C8afoFfCgIgC1Us6Ubo0fHZk36yXTh8mHw0OMU7q6e8d2pOKxyQXXUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDI4ogPs20nVXMrBgFSrcA0GreJlzkWkkzT5T9%2B%2FV1CJIC8YtrdAPQhYGjb5EKl0MdHjwbFki1GdZ7qd9GX%2Bjy7%2FiD0A%2F8ruGLzMUcG7ADZyd5hQe5o07OkRVV64DAkEXz%2Bt7pvzW7jjam%2BCKjndUbQvPtmBS6W0D6hErxR9ulhzahewn2W%2FZXrWpYMt613NahR8H7Uhgz54UaCsa%2Bgv0mZXM1K4HR8q3sWL7xG4wXShUL9PQLpdPT5PROJHAsRxYGVguGh6nADuQHLlJdKqmtNUumCv8bksEHdP5C9rD9OC8cvOpao4rb%2B6EBW%2FgSvgwrGZ%2BdxOuuSQOE5vNxHePcY4pTu4rKI8kmrzFfsq9Hi2N%2B0aWLrfTFwzK40I7fd%2Bxi%2FPL0uYuiFWhbOZvl0kGnNXxs9AY2oRrdXTBK1XUvz252Lm%2B0gpYLHqfgQH5qJpAy%2BmtaABbfA7yLzkf04IFWVDcoy95ip6nnjcK4blScrX3cw5rOCpJphTtpsKJlqnojNgETuTNNj8pxZmeGSP34%2FF0%2Fmxs3lzXW%2BUVeKN31%2B0WKg%2BsBjA2SVoizjAJ53JezszI6OvXnZQiOnBMRh8aUoL28qPOmh1W64QEGkMg9EzqwG4EqmBy3Bk1TLT1cBm0Z4nTBQI%2Bign8P1%2FjMKmD2cMGOqUBpsG9jyD752HjfpsQVXOSm829slaeGR%2BKCWj%2F01Hn7uRYjgOXsBRQF9%2FzzpLLtalSwNb7%2Bh2PdHweSyletakpWd6mv38oVTgmWGQIrF4%2FkPpyncZpcCEQcyXwJIIIVBRO9RH7QJtjv6aA4ESbq2Vmkp%2F4iLu8YD4rQ9WpNINjHXGwSWW%2FEvooZBOR84Z5uhYdvi8qT7iGh6XaiHtbfkz2U7GP598u&X-Amz-Signature=e30fb0b11bf1192ec984a5aefc4a77d2ded6e7436e6ef97c4b997dd21dbd8cfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
