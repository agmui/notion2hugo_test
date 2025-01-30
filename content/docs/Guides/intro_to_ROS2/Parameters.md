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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/151b96b5-c251-459e-ab62-15a7f923023a/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U3I3BDZI%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAacSOExLfHtzhfV%2BVuTb%2FWWVKQalnm9QCWVM6IGj3uGAiA%2Fnr1CxbjHJM3q0N83ESB6DFchpMGQLSaWdOST5ckKxyqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcbim2uqw4W04l5MiKtwDoiBObEwSwC0h%2FKDcGp5uclf879U9zUPBUi3XZCJvIpt%2BINhHKGJ6bdPNIWItzomYEXFYKr7ORdMRDuP3Hj%2BRSArbn87YZjgJZIc%2BmLWc6xgB3GkjEJxViEUpLifqdv1AP1PBcdv45c4HG8aqqE6gsUFfiyiTEIkcX9YeDQwLR8aQL3hrDQBzM4SORN3VjC2eJtrDXx2GD5AXRpcO9e%2BuQ7l8a%2BXWnbvzvC09kOjVjypVEa8PxoY6dN%2Fg0YuswIasLI9VXaOXTDHLJefBuSB8sVq1FyhAHYDzhgMd4J4pBK%2F4Hejhnhn087zCTPZhAHqoOk1NHiVTGi0H0ISvHO7b4yalwWWUZvMEaE7fZQYoIcxTHukSAp1scaHmEGh9ftHG2mZSCFidRH6Nl2caEqY1x4vG3q4zl4N%2FsaOHU5Ki8IUSd9PtRbq22XUkonq%2Bu%2FxKyIPQNOHGue50xfmFq7I6WBnHYX2W%2BQ3pYs7WJ3C4bsu8qhhyLOigHrN%2Fay4704bezipVtnRurLD3eP79wwvuV%2BLUtD8zvYkVQ9juQL%2Fh4%2B1t0FBbAmJL8jirbDnUJxJGI2SiPj9I%2BO8t0GA2lXLN2SXO9KJcbrnO8DW9F%2BeRQPz0s3E0RXQMM2SJRgMw46vvvAY6pgGCCeJJSwVxZIvqbQp0iJzQGZQxXiEQg6ArImIuZnFwAkzu0iI1l9dy%2FmBn1xkLIWzBqWYEpQ%2BmJHZ0E97C7t1pf%2B5qeomdbnrll77o%2F%2FrIoJvPZAbGROxEZWuXWGMBoE7cpAgFq%2BbOqKL0AyzDHk%2FfpPSPnf2EwT5BZKWVB56AHa6svq6F2ox1NIWiXLvf4z7HTPdu7laQz4o4bufeeDNXWzhNi15C&X-Amz-Signature=5afe5b10121e49766064e87963a69756b71baf704b3b0e7c72377718b44aecc9&X-Amz-SignedHeaders=host&x-id=GetObject)

`ros2 param set <node_name> <parameter_name> <value>`
