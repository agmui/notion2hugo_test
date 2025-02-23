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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YQRQRFH%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T040924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCtEolr19WU%2BmT27XRh4eSZIeNrZQeZlw8u0cFKVUsKqQIgPZID4w7hTzDQKHnBowvczPVi%2FZUFbW%2FNevuO8BmFLogqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOLIth9UEte33VcRSCrcA02JyBDKPs0A%2FMSXRJMl%2FSo4%2FCIBVV%2B1VgCOcBU1iE3UC48IbQcLRX2HQyBvJAougqRzAerBorsZT%2B3M0Gx4UAy5dMV3G%2F5mrs1JhXPLXtBCB%2F997d0XfI4FbftTY0oTxc7nBchCEoRIoruJwuyugWMkA3%2FeY%2B1XHmrZqilYEKBcHzS9A4yjD4X8i3V3V60P0ahRTXtBBabfTEmck9s6J2OP8p77qmUB8LnVCJjMlZIPun4wlirDKUYKTxrvl3Ionj3dli53j5Xp6EfsbsscNX2NHx8rBCEiQ9jdvru8Y96j5wEtW7NlYMu8BJHH9AQJXdLFlkXIlo2aO6Xsa5oAzBZfmrukCwiw6h%2Fp04OrU3OBR6XN0ejN%2F3Ms%2BUVId30q7jGKkchfOGNZ%2FZTPIbWxFzRAOZs%2F%2BBKB4u1Lw1VHos1c7AuNeXE93hOCb3hMdVd%2FeEbNHmGTrPsLh7hMjAHUbsN1kWeiT2s0qnesDdXtACm9JTrDo8%2FVMd0Tw6dK9kagCXXuoVzEfFuQfFcOw4UugFn7dgUl3iNc3edLK50lZIzyuvXB6ftrOR7C3O%2FVoLUaUebIiY1DAbg6MvqShb%2BMMkRTLrbhwIAtEfy%2F5mxK1ii0gLGDLp9kELZ4c%2BPzMKOs6b0GOqUB9MMRLnvlWNTbQjUNe71iE83A3fMm55rlQ3BE9k257WrrieVVJdL4wue5hRrUb%2Fqv6mWOscPyRJ2Pkm7%2BF7H3Uggm4iPDH%2BzXFsApbxb6zgnBwAkUr7eQerHWc%2B%2BhJ7Kw9eK%2BSBbRvoM4PAF76TvtuTWyEdVSnkTzWdKhsyV6z9S54loc1NjLkUJqNQX%2FCedIfhcACL0fHbTiie2XkJu%2B5Z27m0cp&X-Amz-Signature=e643c4fef7940e35479b97e8a5c7d62104b798b16f149bc8b51a9d0662f60abf&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
