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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPDKIO3%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T003938Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFy0kYCQ1iEDTAtIDAV1ZrFZfx6ioI4JhCLLYx%2F1h7EkAiAsAjEcjLK6GUQRX4pf%2F82OuZg0enigvEPa6fc5IXBuISr%2FAwhREAAaDDYzNzQyMzE4MzgwNSIMAxBDD8PPUElbwLn9KtwD365qfE79PE8w5bgYuvEM4GonHpEUMpYisMi2KzlU6kgzFFBvmh%2FCC1P91fWiUbgM2uD3sBZlA5TSeF13HwjMQR9vItDlGbIOpNtzw10gkhAQFADbV%2BPyScUzelTeqU3cBdfWBjvgr9bJYSWWOYmrEZn%2FDYj1Gfx12Ej9uSjPprhKRDVWa2hNnqv0khUq8GwwHH1NnBHhIHchjfd7b5qF0LjQgRluGt1%2F5l11RvTYCGHd3BTD7j91SrAwbEOYXya3T28yrSnZ3SHbwbUUh3JXR%2BjozzryKhZaOVFHZ1jg69lUm5BnFLPDudPP4YTiEus7l4nDvtnrPp4lkR%2FILZkctW0yhjiqRIHGZblDniCGP9O8ziwGWq8M%2FqCvpZbOM11Qp99Xv4zy%2FJZiCHWbf6Ohrqc04r7j1AlIcU1cfga9Y%2FaEOPKsyC3sSKpH5EdiTcypXqobP5xYuBHrYSuDb3mjrTh62XekjE5ox6MEaVOaKezv2vXKE3ccRCFK251%2BW5jmTK6n1YE0SgV77zgE%2FlgFh%2BpjF0VvewLqAZDofNZe3nv0ZP2oac90kMlCYIn5v3c8NPttOpK5Rd7KA6c3YpYd0HK1e8bOuRizxWJATsAwFqWxc9n7psaL28jNvVgwh5OBwAY6pgGzCU1H2wmK5yQA3WD7ys7RcJXAdGCWhGkkj6zCk9vyt1UU368sUoHDzyBWGPaTPJGrzS0bPToQmwRx6SLI1Bay%2BD9k0NQUJt4Ep%2Fa%2FWys7Vv9aaaHJ9ur103vUZaJit0%2B6275XD30y1UACH%2BXLeAV4MES3kdVM2i7tpZ%2FOR3WAf2v4e5vbROyxs3TcZ3oe7sfi97lP%2BF65pFrUazY%2F55uE3wpoQbk2&X-Amz-Signature=b1d21bfea5553ee6c2f905e25771a1056dd18b8beb78d678ecafbf8c2991b3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
