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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REKSOW7T%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T210341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJGMEQCIDHswMl%2BU6XzfIQKMUbdxQMh2cRqZYhidoE%2BqHHQaQvDAiAQAZMcZmg%2BGe5DiggrwMJxyX9sxchGiHaF8deW%2F6LymSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM%2FqyUY4wR0%2BV4IcYPKtwDgLUG9e%2FfsK6BA6GdoUR%2BBgxuuEXMJQWPhVFERH53axP%2Fma7p%2FCdknzQ1wpC1jL1EUzQb2DpVXacY7wSbIBd0oSiKHwV7%2B5%2BOy65IR9YCaMMMEgk%2FeEGqZKe1AwQddLrofXKlrpt%2Bm555n6Ae%2Bjmh1h7lzg2yMsIT5QGrm%2Bhy1gOQXI9HA81Rwt0Y2YGWHWV70na7VH7r0FcntsCQ4a88NvUbjxtDnRCA4vtlnV4Uj1LJe27OMjKQs0A6rvMVWZXV4mBvS2lf6SXmwrq8bw62w8tWIkPXQC5dK8tSaYNmmPoxS1FA9V74V%2Fn6r6LtKDX0o0kIBLi3RA1q8r2UuZZeC4SMYS62AsGapF9dXmGdn0CDCe8L4ACKWWODwNoPXHgOgRj3Z1yLoWNGSe1XekSFaoCKaYGlwQ3WVH7vFSPf6p4RbP%2BVbo7m%2BMV17uEvrzqsXpdh0jJShlnv78nDKYP9W30EsGLMLBOnY7GmMk1n7TjZsu5IMJwpBiYRMxFjuOuzLeaB1KMNY154%2FmJEFldd77kNyEsGPHNyc%2Fuk99ItAq4r3ZDPmhzCLQmru9jpYl6mvcUee9BZc6P9ufJT2ERTFcDrP%2Byi%2BhDStkBACB9P0q8s5RShBbLX3%2BPiCkYws9SZvQY6pgHcPuLUA1V5skVM2RLnvpc0VkAlzJp5tWe4qg4B0qLAvM3CPpGjHHN87Zq%2BHLZp2gZJG2s627IWJl5Lt3sGt1h7dNoZoN7NT%2FjHe7gB%2B4nZMmJbYbJ83sbNJNaHPImcaiBvwTXWMYoBQaJXKO04j%2BUl%2BIix6l1%2F2sVMwMe%2B8U4HP2lk92Zdol9E2CgKzyLIYyXGCPY2XCr%2Fjxpztlsno8gw1OIvFIKD&X-Amz-Signature=75057b1430840a8b9e28b82d19399230bd06b62226b494d9a68e1d5ab80aaf7c&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
