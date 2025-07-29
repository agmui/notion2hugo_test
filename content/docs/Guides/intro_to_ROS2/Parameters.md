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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665C43CTLT%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T121827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDWNwO2hkwsCWLsxwXa6YU2q6YtElg3LpdL6Jt%2BHzdsogIgf7j8JvzMBjeppCgLGa%2BEoBE2SYmbYqAVXglRUJYb%2FpMqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPF0LZNRV3hoL7Gx%2BSrcAw%2FsB405eT%2BV9Mrwvv3U2DMO0TuvSnLWqljLi%2FGmP4JwZdjv5ZAe9HY%2Fh0wnHHi0Yb%2FtGQHObZhwrFMAO%2BGRv0Yezp92K%2F0nR2Co8PBorjUSErjpdfwE1PzUNoL7RY5EAGbJGxJD998pQ3Ppy5Lw0uhjn6NCVTGxvdCm%2FFWfGaebugEtfRIwAeVCbpSUR7Va1Z5kZmNhNMixQ8DVtXwxbrKBqtswRl3%2FrOceVo8IjUIrFWSSij6srNDuuhz%2Bpdr7930OWtJQqXaqo8QMfAZfHOkmNx%2BSm49yUJUxu6kIfA139x529TKzPehX7oCfl6d4K07BuUP2pgbPW4TMOBKeYlUQEUeAws%2Bmj9IDPjbVQNazil4qIpYRCnkEyF5zpEHUjhItim%2BhM%2BROcQrsTzmDQ%2F637uCimoRedgXnVgU4BfNa8D47sjsfhGXv0M3j211T6YiyOSmM8qFEgN2k9NafdO5B0PkZAy7z5x7vW1XciBLmq2gT33sQSpuZnWxJHNhqB1u5AAZCxNZ%2FiFlB9IjOwZf3Bj1dej9YnvBhQYnuiMPpR%2BWmPL7LK5dOC761aWMvHQVCBsrf3IHKAaBfUEZkoQsO5bpeUNPGLTWUI3B4q7nrtI%2BCTlljSGz6SkNnMLTnosQGOqUBBw8VSOrld629ObaKQCtXAJdqFJhDaPoRl%2BDNHj8k5c3e5M0IIRm6ES1AloSRlTM7WFzy2v8XlammqQ%2BaDmOkYw58WB30z8TqXW1fXl2kbTkizlkhz35k54Rny3H%2BtSNzuNs%2Bb2uf6enhUXjzO%2FRfcMtnWbOQ%2B85IESzFLEci9xJc8W%2B0%2FyKtTfnYfG3uDEFkC%2Fx14YqHTzd0PK%2F%2BNHmp2RDRbRu5&X-Amz-Signature=c806b06f5bf9311dabc9ba9ddb008fca2c922a9bf68dd5ffd8fe58dc63ccd05b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
